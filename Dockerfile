# ---- Build stage ----
# Vite 8 requires Node ^20.19 or >=22.12 — pin to 22 to be safe.
FROM node:22-alpine AS build
WORKDIR /app

# Install deps from lockfile (cached unless package*.json changes)
COPY package.json package-lock.json ./
RUN npm ci

# Build the static site
COPY . .
RUN npm run build

# ---- Serve stage ----
FROM nginx:alpine AS serve

# Static assets produced by `vite build`
COPY --from=build /app/dist /usr/share/nginx/html

# Container nginx config (static serving + gzip + caching)
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
