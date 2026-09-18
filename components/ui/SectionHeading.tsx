import { Reveal } from "@/components/ui/Motion";

export function SectionHeading({ index, eyebrow, title, inverted = false }: { index: string; eyebrow: string; title: string; inverted?: boolean }) {
  return (
    <Reveal className={`section-heading ${inverted ? "section-heading--inverted" : ""}`}>
      <div className="section-heading__meta">
        <span>{index}</span>
        <span>{eyebrow}</span>
      </div>
      <h2>{title}</h2>
    </Reveal>
  );
}
