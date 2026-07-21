import Link from "next/link";
import { profile } from "@/lib/data";
import { Reveal } from "./reveal";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center px-5 pt-24 sm:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <p className="eyebrow flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="text-amber">~</span>
            {profile.roleTag}
            <span className="text-faint">//</span>
            {profile.orgTag}
          </p>
        </Reveal>

        <Reveal delay={90}>
          <h1 className="mt-6 font-display text-[clamp(2.6rem,9vw,6.5rem)] font-extrabold leading-[0.95] tracking-[-0.02em] text-text">
            Muhammad
            <br />
            Sadiq <span className="stream-text">Raza</span>
          </h1>
        </Reveal>

        <Reveal delay={180}>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
            {profile.intro}
          </p>
        </Reveal>

        <Reveal delay={260}>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/#work"
              className="group inline-flex items-center gap-2 rounded-full bg-amber px-6 py-3 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
            >
              View work
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-line-strong px-6 py-3 text-sm font-medium text-text transition-colors hover:border-cyan hover:text-cyan"
            >
              Get in touch
            </a>
          </div>
        </Reveal>

        <Reveal delay={340}>
          <div className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-3 font-mono text-xs uppercase tracking-widest text-faint">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
              {profile.location}
            </span>
            <span>{profile.focusAreas.join(" · ")}</span>
            <span className="hidden sm:inline">{profile.availability}</span>
          </div>
        </Reveal>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-ink"
      />
    </section>
  );
}
