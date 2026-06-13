import Reveal from "./Reveal";

export default function SectionHeading({ index, eyebrow, title, kicker }) {
  return (
    <Reveal className="section-heading">
      <p className="section-eyebrow">
        {index && <span className="section-index">{index}</span>}
        {eyebrow}
      </p>
      <h2 className="section-title">{title}</h2>
      {kicker && <p className="section-kicker">{kicker}</p>}
    </Reveal>
  );
}
