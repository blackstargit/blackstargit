import { profile } from "@/lib/data";
import { Reveal } from "../reveal";

const links = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "GitHub", value: "@blackstargit", href: profile.github },
  { label: "LinkedIn", value: "in/msadiqraza", href: profile.linkedin },
  // Other profiles — add when handles are ready, e.g. Hugging Face:
  // { label: "Hugging Face", value: "@handle", href: "https://huggingface.co/handle" },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="relative px-5 py-28 sm:px-8 md:py-40"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="eyebrow flex items-center gap-2">
            <span className="text-amber">//</span>
            get in touch
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-5 max-w-4xl font-display text-4xl font-extrabold leading-[1.02] tracking-tight text-text sm:text-6xl md:text-7xl">
            Let&apos;s build something{" "}
            <span className="stream-text">intelligent</span>.
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Open to interesting problems in AI, security, and the systems around
            them. The fastest way to reach me is email.
          </p>
        </Reveal>

        <Reveal delay={220}>
          <a
            href={`mailto:${profile.email}`}
            className="group mt-9 inline-flex items-center gap-3 rounded-full bg-amber px-7 py-3.5 text-base font-semibold text-ink transition-transform hover:-translate-y-0.5"
          >
            {profile.email}
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </Reveal>

        <div className="mt-16 grid gap-px border-t border-line sm:grid-cols-3">
          {links.map((l, i) => (
            <Reveal key={l.label} delay={i * 80}>
              <a
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel={l.href.startsWith("http") ? "noreferrer" : undefined}
                className="group flex flex-col gap-1 border-b border-line py-6 transition-colors hover:bg-deep/40 sm:border-b-0 sm:border-r sm:px-6 sm:last:border-r-0"
              >
                <span className="font-mono text-xs uppercase tracking-widest text-faint">
                  {l.label}
                </span>
                <span className="text-lg text-text transition-colors group-hover:text-cyan">
                  {l.value}
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
