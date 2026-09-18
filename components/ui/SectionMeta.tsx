import { Reveal } from "@/components/ui/Motion";

export function SectionMeta({ number, label }: { number: string; label: string }) {
  return (
    <Reveal className="section-meta" amount={0.5}>
      <span>•{number}</span>
      <span>{label}</span>
      <span>© {new Date().getFullYear()}</span>
    </Reveal>
  );
}
