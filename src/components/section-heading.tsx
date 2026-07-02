import { Reveal } from "./reveal";

export function SectionHeading({
  label,
  title,
  lead,
}: {
  label: string;
  title: string;
  lead?: string;
}) {
  return (
    <div className="max-w-2xl">
      <Reveal>
        <p className="eyebrow flex items-center gap-2">
          <span className="text-amber">//</span>
          {label}
        </p>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.05] tracking-tight text-text sm:text-4xl md:text-5xl">
          {title}
        </h2>
      </Reveal>
      {lead && (
        <Reveal delay={140}>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            {lead}
          </p>
        </Reveal>
      )}
    </div>
  );
}
