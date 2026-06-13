import { useReveal } from "../hooks/useReveal";

/**
 * Fades + slides its children in when scrolled into view.
 * `delay` (ms) staggers siblings; `as` picks the wrapper element.
 */
export default function Reveal({ children, delay = 0, as: Tag = "div", className = "", ...rest }) {
  const [ref, visible] = useReveal();

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`.trim()}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
