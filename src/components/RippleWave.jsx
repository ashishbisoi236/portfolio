/**
 * Decorative stack of concentric rounded-square rings that drift in a
 * staggered ripple — a topographic/contour motif.
 *
 * Props:
 *   rings  — number of nested rings (default 16)
 *   color  — ring border color; any CSS color or var() (default var(--accent))
 *   size   — outer box size in px (default 200)
 *   step   — inset increment per ring in px; controls ring spacing (default 6)
 *   weight — ring line thickness in px (default 1)
 *   className, style — forwarded to the wrapper
 *
 * Motion respects prefers-reduced-motion (handled in CSS).
 */
export default function RippleWave({
  rings = 16,
  color = "var(--accent)",
  size = 200,
  step = 6,
  weight = 1,
  className = "",
  style,
  ...rest
}) {
  return (
    <div
      className={`ripple-wave ${className}`.trim()}
      aria-hidden="true"
      style={{
        "--ripple-color": color,
        "--ripple-size": `${size}px`,
        "--ripple-step": `${step}px`,
        "--ripple-weight": `${weight}px`,
        ...style,
      }}
      {...rest}
    >
      {Array.from({ length: rings }, (_, i) => (
        <span key={i} style={{ "--i": i }} />
      ))}
    </div>
  );
}
