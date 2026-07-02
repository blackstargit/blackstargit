import { experience, education } from "@/lib/data";
import { SectionHeading } from "../section-heading";
import { Reveal } from "../reveal";

export function Experience() {
  return (
    <section
      id="experience"
      className="relative bg-ink-2/60 px-5 py-24 sm:px-8 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="the track record"
          title="Where I've worked"
          lead="From aerospace telemetry to production AI — real systems, real constraints."
        />

        <div className="mt-14 space-y-px">
          {experience.map((job, i) => (
            <Reveal key={`${job.org}-${i}`}>
              <div className="group grid gap-4 border-t border-line py-8 md:grid-cols-[0.7fr_2fr] md:gap-10">
                <div className="flex flex-col gap-2">
                  <span className="font-mono text-xs uppercase tracking-widest text-faint">
                    {job.period}
                  </span>
                  {job.current && (
                    <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-amber/40 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest text-amber">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber" />
                      Current
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="font-display text-xl font-semibold text-text md:text-2xl">
                    {job.role}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-cyan">
                    {job.org}
                    <span className="text-faint"> · {job.location}</span>
                  </p>
                  <ul className="mt-4 space-y-2.5">
                    {job.points.map((pt, j) => (
                      <li
                        key={j}
                        className="flex gap-3 text-[15px] leading-relaxed text-muted"
                      >
                        <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-violet" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Education */}
        <Reveal>
          <div className="mt-16 flex flex-col gap-4 rounded-2xl border border-line bg-deep/50 p-7 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="eyebrow flex items-center gap-2">
                <span className="text-amber">//</span>
                education
              </p>
              <h3 className="mt-3 font-display text-xl font-semibold text-text">
                {education.degree}
              </h3>
              <p className="mt-1 text-sm text-muted">{education.school}</p>
            </div>
            <div className="flex items-center gap-4 font-mono text-xs uppercase tracking-widest text-faint">
              <span>{education.period}</span>
              <span className="text-amber">{education.grade}</span>
            </div>
          </div>
        </Reveal>

        {/* Certifications — intentionally hidden for now; enable by removing this comment block. */}
        {/*
        <Reveal>
          <div className="mt-4 rounded-2xl border border-line bg-deep/50 p-7">
            <p className="eyebrow flex items-center gap-2">
              <span className="text-amber">//</span> certifications
            </p>
            <ul className="mt-4 space-y-2 text-muted">
              // add certifications here
            </ul>
          </div>
        </Reveal>
        */}
      </div>
    </section>
  );
}
