# Deploying the portfolio to ashishbisoi.cc

There are two supported setups — pick **one**:

- **Option A — nginx + certbot** (this document, sections 0–5). Uses your existing
  host nginx for TLS and proxies to a static-serving container.
- **Option B — Caddy** (see [the Caddy section](#option-b--caddy-single-container-automatic-https)).
  One container serves the site *and* manages HTTPS automatically. Replaces the
  host nginx + certbot entirely. Recommended for a single site like this.

---

## Option A — nginx + certbot

Architecture:

```
Browser ──HTTPS──▶ Host nginx (TLS via certbot) ──proxy──▶ Docker container (nginx serving static build) on 127.0.0.1:8080
```

The container is bound to `127.0.0.1` only, so it is **not** reachable from the
internet directly — the host nginx is the single public entry point.

---

## 0. One-time: install Docker on the VPS

(Skip if Docker is already installed — check with `docker --version`.)

```bash
# Debian/Ubuntu
curl -fsSL https://get.docker.com | sudo sh
sudo usermod -aG docker $USER      # so you can run docker without sudo
# log out and back in (or run `newgrp docker`) for the group change to apply
```

## 1. Get the code onto the VPS

```bash
cd ~
git clone https://github.com/ashishbisoi236/portfolio.git
cd portfolio
git checkout portfolio-v2          # the branch with this build
```

## 2. Build and run the container

```bash
docker compose up -d --build
```

Verify it's serving locally:

```bash
curl -I http://127.0.0.1:8080      # expect: HTTP/1.1 200 OK
```

## 3. Point host nginx at the container

Copy the provided site config and enable it:

```bash
sudo cp deploy/ashishbisoi.cc.conf /etc/nginx/sites-available/ashishbisoi.cc
sudo ln -s /etc/nginx/sites-available/ashishbisoi.cc /etc/nginx/sites-enabled/

# Remove the default "Welcome to nginx" site so it stops taking over
sudo rm -f /etc/nginx/sites-enabled/default

# Test config, then reload
sudo nginx -t
sudo systemctl reload nginx
```

> If your distro uses `/etc/nginx/conf.d/` instead of `sites-available`/`sites-enabled`,
> copy the file to `/etc/nginx/conf.d/ashishbisoi.cc.conf` instead and skip the symlink step.

### Notes on the SSL lines

The config references three certbot files:

- `/etc/letsencrypt/live/ashishbisoi.cc/fullchain.pem`
- `/etc/letsencrypt/live/ashishbisoi.cc/privkey.pem`
- `/etc/letsencrypt/options-ssl-nginx.conf` and `/etc/letsencrypt/ssl-dhparams.pem`

The first two always exist after certbot issues a cert. The last two are created
by the **certbot nginx plugin**. If `sudo nginx -t` complains that
`ssl-dhparams.pem` or `options-ssl-nginx.conf` is missing, just comment out those
two `include`/`ssl_dhparam` lines.

If your certificate covers only the apex domain (not `www`), remove
`www.ashishbisoi.cc` from both `server_name` lines.

## 4. Open the firewall for HTTPS

Port 80 already works (you saw the nginx welcome page), but 443 must be open too.

- **GCP firewall:** In the Cloud Console → VPC network → Firewall, ensure a rule
  allows `tcp:443` (and `tcp:80`) to your instance. The default `default-allow-http`
  / `default-allow-https` rules apply only to instances tagged `http-server` /
  `https-server` — add those network tags to the instance if needed.
- **OS firewall (if ufw is active):**
  ```bash
  sudo ufw allow 'Nginx Full'
  ```

## 5. Verify

Open <https://ashishbisoi.cc> — you should see the portfolio. From the VPS:

```bash
curl -I https://ashishbisoi.cc     # expect HTTP/2 200
```

---

## Redeploying after code changes

```bash
cd ~/portfolio
git pull
docker compose up -d --build       # rebuilds image, recreates container
docker image prune -f              # optional: clean up old layers
```

The host nginx config does not change, so no nginx reload is needed for content updates.

---

## Option B — Caddy (single container, automatic HTTPS)

Caddy obtains and auto-renews Let's Encrypt certificates itself, so this replaces
**both** the host nginx and certbot. The container binds host ports 80/443
directly. Files used: `Dockerfile.caddy`, `Caddyfile`, `docker-compose.caddy.yml`.

### 1. Free up ports 80 and 443

Caddy needs them, so stop and disable the host nginx:

```bash
sudo systemctl disable --now nginx
```

certbot is no longer needed (you can leave its certs/timer in place — they just go
unused — or remove the package later). Caddy manages its own certificates.

### 2. Adjust the Caddyfile if needed

Open `Caddyfile` and:

- Confirm the `email` is correct (used for ACME/expiry notices).
- If your domain only uses the apex, change the site line from
  `ashishbisoi.cc, www.ashishbisoi.cc {` to just `ashishbisoi.cc {`.

### 3. Build and run

```bash
docker compose -f docker-compose.caddy.yml up -d --build
docker compose -f docker-compose.caddy.yml logs -f portfolio
```

Watch the logs — Caddy will log `certificate obtained successfully` within a few
seconds (it solves the ACME HTTP-01 challenge on port 80, which already works since
DNS points here). Then visit <https://ashishbisoi.cc>.

> **Ports:** make sure both 80 and 443 are open in the GCP firewall. Port 80 is
> required for the ACME challenge even though traffic ends up on 443.

> **Cert persistence:** issued certs live in the `caddy_data` Docker volume, so
> restarts/rebuilds reuse them (no risk of hitting Let's Encrypt rate limits). Don't
> delete that volume.

### Redeploying (Caddy)

```bash
cd ~/portfolio
git pull
docker compose -f docker-compose.caddy.yml up -d --build
```

### Switching back from Caddy to nginx

```bash
docker compose -f docker-compose.caddy.yml down
sudo systemctl enable --now nginx
# then follow Option A
```

---

## e2-micro memory note

The e2-micro has ~1 GB RAM. The Vite build is small and normally fits, but if
`docker compose up --build` ever gets killed during `npm run build` (OOM), add a
swap file once:

```bash
sudo fallocate -l 2G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile
echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab   # persist across reboots
```

---

## Troubleshooting

| Symptom | Check |
| --- | --- |
| Still see "Welcome to nginx" | `sudo rm /etc/nginx/sites-enabled/default && sudo systemctl reload nginx` |
| 502 Bad Gateway | Is the container up? `docker compose ps` and `curl -I http://127.0.0.1:8080` |
| `nginx -t` fails on SSL include | Comment out the `ssl-dhparams.pem` / `options-ssl-nginx.conf` lines |
| HTTPS times out | Port 443 not open in the GCP firewall (see step 4) |
| Container logs | `docker compose logs -f portfolio` |
| (Caddy) cert not issued | Port 80 must be open + free; check `docker compose -f docker-compose.caddy.yml logs` for the ACME error |
| (Caddy) port 80/443 in use | Host nginx still running — `sudo systemctl disable --now nginx` |
