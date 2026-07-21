import { profile } from "@/lib/data";
import { Reveal } from "../reveal";

export function About() {
  return (
    <section
      id="about"
      className="relative bg-ink-2/60 px-5 py-24 sm:px-8 md:py-32"
    >
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
        <div>
          <Reveal>
            <p className="eyebrow flex items-center gap-2">
              <span className="text-amber">//</span>
              {profile.aboutLabel}
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-text sm:text-4xl">
              {profile.aboutHeading}
            </h2>
          </Reveal>
        </div>

        <div className="space-y-5">
          {profile.about.map((para, i) => (
            <Reveal key={i} delay={i * 90}>
              <p className="text-lg leading-relaxed text-muted">{para}</p>
            </Reveal>
          ))}
          <Reveal delay={profile.about.length * 90}>
            <p className="pt-2 font-mono text-sm text-faint">
              <span className="text-cyan">const</span> philosophy ={" "}
              <span className="text-amber">&quot;{profile.philosophy}&quot;</span>
              ;
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
