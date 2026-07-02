import { skillGroups, type Accent } from "@/lib/data";
import { SectionHeading } from "../section-heading";
import { Reveal } from "../reveal";

const dot: Record<Accent, string> = {
  cyan: "bg-cyan",
  violet: "bg-violet",
  amber: "bg-amber",
};

export function Skills() {
  return (
    <section
      id="skills"
      className="relative bg-ink-2/60 px-5 py-24 sm:px-8 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="capabilities"
          title="The toolkit"
          lead="Depth in AI and machine learning, with the full-stack and infrastructure range to ship it as a working product."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.label} delay={(i % 3) * 80}>
              <div className="card h-full p-6">
                <div className="flex items-center gap-2.5">
                  <span
                    className={`h-2 w-2 rounded-full ${dot[group.accent]}`}
                  />
                  <h3 className="font-display text-lg font-semibold text-text">
                    {group.label}
                  </h3>
                </div>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-line px-3 py-1 font-mono text-xs text-muted"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
