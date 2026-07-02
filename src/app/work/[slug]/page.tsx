import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import FlowField from "@/components/flow-field";
import { SiteNav } from "@/components/site-nav";
import { Footer } from "@/components/sections/footer";
import { Reveal } from "@/components/reveal";
import { detailProjects, getProject, type Accent } from "@/lib/data";

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

export function generateStaticParams() {
  return detailProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return { title: "Not found" };
  return {
    title: `${p.name} — ${p.descriptor}`,
    description: p.card,
  };
}

export default async function WorkDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p || !p.hasDetail) notFound();

  const idx = detailProjects.findIndex((d) => d.slug === p.slug);
  const next = detailProjects[(idx + 1) % detailProjects.length];

  return (
    <>
      <FlowField className="fixed inset-0 -z-20 h-full w-full opacity-70" />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 bg-gradient-to-b from-ink/30 via-ink/20 to-ink/60"
      />
      <SiteNav />

      <main className="px-5 pt-32 sm:px-8">
        <article className="mx-auto max-w-4xl">
          <Reveal>
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-faint transition-colors hover:text-text"
            >
              ← All work
            </Link>
          </Reveal>

          <Reveal delay={70}>
            <p
              className={`mt-10 flex items-center gap-2 font-mono text-xs uppercase tracking-widest ${accentText[p.accent]}`}
            >
              <span className={`h-1.5 w-1.5 rounded-full ${accentDot[p.accent]}`} />
              {p.status}
            </p>
          </Reveal>

          <Reveal delay={120}>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.02] tracking-tight text-text sm:text-6xl">
              {p.name}
            </h1>
          </Reveal>
          <Reveal delay={170}>
            <p className="mt-4 text-lg text-muted sm:text-xl">{p.descriptor}</p>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-8 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-line px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-muted"
                >
                  {t}
                </span>
              ))}
            </div>
          </Reveal>

          <div className="my-12 hairline" />

          {p.overview && (
            <div className="space-y-5">
              {p.overview.map((para, i) => (
                <Reveal key={i} delay={i * 80}>
                  <p className="text-lg leading-relaxed text-text/90">{para}</p>
                </Reveal>
              ))}
            </div>
          )}

          {p.highlights && (
            <div className="mt-16">
              <Reveal>
                <p className="eyebrow flex items-center gap-2">
                  <span className={accentText[p.accent]}>//</span>
                  what makes it work
                </p>
              </Reveal>
              <div className="mt-6 space-y-4">
                {p.highlights.map((h, i) => (
                  <Reveal key={h.title} delay={i * 70}>
                    <div className="card p-6 sm:p-7">
                      <h3 className="font-display text-lg font-semibold text-text">
                        {h.title}
                      </h3>
                      <p className="mt-2.5 leading-relaxed text-muted">
                        {h.body}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          )}

          <div className="mt-16 flex flex-col gap-6 rounded-2xl border border-line bg-deep/50 p-7 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="eyebrow">built with</p>
              <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 font-mono text-sm text-muted">
                {p.stack.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
            {p.links?.[0] && (
              <a
                href={p.links[0].href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex shrink-0 items-center gap-2 rounded-full border border-line-strong px-5 py-2.5 text-sm font-medium text-text transition-colors hover:border-amber hover:text-amber"
              >
                {p.links[0].label} →
              </a>
            )}
          </div>
        </article>

        {/* Next project */}
        <div className="mx-auto mt-24 max-w-4xl border-t border-line py-10">
          <Link
            href={`/work/${next.slug}`}
            className="group flex items-center justify-between gap-4"
          >
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-faint">
                Next project
              </span>
              <p className="mt-1 font-display text-2xl font-semibold text-text transition-colors group-hover:text-cyan">
                {next.name}
              </p>
            </div>
            <span className="text-2xl text-muted transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}
