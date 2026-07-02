import { moreProjects } from "@/lib/data";
import { SectionHeading } from "../section-heading";
import { Reveal } from "../reveal";

export function MoreProjects() {
  return (
    <section
      id="more"
      className="relative bg-ink-2/60 px-5 py-24 sm:px-8 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="the archive"
          title="And a pile of other things"
          lead="Side projects, experiments, and tools built along the way."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {moreProjects.map((p, i) => (
            <Reveal key={p.name} delay={(i % 3) * 70}>
              <div className="card h-full p-6">
                <h3 className="font-display text-lg font-semibold text-text">
                  {p.name}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">
                  {p.blurb}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[11px] uppercase tracking-wider text-faint"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
