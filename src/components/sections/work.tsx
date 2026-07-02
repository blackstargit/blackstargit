import Link from "next/link";
import { featuredProjects, type Project, type Accent } from "@/lib/data";
import { SectionHeading } from "../section-heading";
import { Reveal } from "../reveal";

const accentText: Record<Accent, string> = {
  cyan: "text-cyan",
  violet: "text-violet",
  amber: "text-amber",
};
const accentDot: Record<Accent, string> = {
  cyan: "bg-cyan",
  violet: "bg-violet",
  amber: "bg-amber",
};
const accentGlow: Record<Accent, string> = {
  cyan: "group-hover:shadow-[0_0_60px_-15px_rgba(34,211,238,0.4)]",
  violet: "group-hover:shadow-[0_0_60px_-15px_rgba(124,92,252,0.45)]",
  amber: "group-hover:shadow-[0_0_60px_-15px_rgba(251,191,36,0.4)]",
};

function ProjectInner({ p }: { p: Project }) {
  const external = !p.hasDetail && p.links?.[0];
  return (
    <div
      className={`card group grid gap-6 p-7 transition-shadow md:grid-cols-[0.9fr_1.6fr] md:p-9 ${accentGlow[p.accent]}`}
    >
      <div className="flex flex-col justify-between gap-6">
        <div>
          <span className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-faint">
            <span className={`h-1.5 w-1.5 rounded-full ${accentDot[p.accent]}`} />
            {p.status}
          </span>
          <h3 className="mt-4 font-display text-2xl font-bold tracking-tight text-text md:text-3xl">
            {p.name}
          </h3>
          <p className={`mt-1.5 text-sm font-medium ${accentText[p.accent]}`}>
            {p.descriptor}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-line px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-muted"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-col justify-between gap-6">
        <p className="text-lg leading-relaxed text-muted">{p.card}</p>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <ul className="flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-faint">
            {p.stack.slice(0, 5).map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
          <span
            className={`inline-flex items-center gap-1.5 text-sm font-medium ${accentText[p.accent]}`}
          >
            {p.hasDetail ? "Case study" : external ? "View on GitHub" : "Details"}
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

function ProjectPanel({ p, delay }: { p: Project; delay: number }) {
  const external = !p.hasDetail && p.links?.[0];
  return (
    <Reveal delay={delay}>
      {p.hasDetail ? (
        <Link href={`/work/${p.slug}`} className="block">
          <ProjectInner p={p} />
        </Link>
      ) : external ? (
        <a
          href={external.href}
          target="_blank"
          rel="noreferrer"
          className="block"
        >
          <ProjectInner p={p} />
        </a>
      ) : (
        <ProjectInner p={p} />
      )}
    </Reveal>
  );
}

export function Work() {
  return (
    <section
      id="work"
      className="relative bg-ink-2/60 px-5 py-24 sm:px-8 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="selected work"
          title="Things I've built"
          lead="A few systems I'm proud of — from autonomous security agents to a billing platform that runs in production."
        />
        <div className="mt-14 space-y-5">
          {featuredProjects.map((p, i) => (
            <ProjectPanel key={p.slug} p={p} delay={(i % 2) * 90} />
          ))}
        </div>
      </div>
    </section>
  );
}
