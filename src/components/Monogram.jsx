/**
 * Small monogram badge — initials + accent dot in a filled rounded square.
 * Used as the nav logo mark; also the basis for the favicon.
 *
 * Props:
 *   text — the initials to show (default "ab")
 *   className, style, ...rest — forwarded to the wrapper
 */
export default function Monogram({ text = "ab", className = "", style, ...rest }) {
  return (
    <span className={`monogram ${className}`.trim()} style={style} {...rest}>
      {text}
      <span className="monogram-dot">.</span>
    </span>
  );
}
