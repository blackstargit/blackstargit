"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { navLinks, profile } from "@/lib/data";
import { cn } from "@/lib/utils";

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled
          ? "border-b border-line bg-ink/80 backdrop-blur-md"
          : "border-b border-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          className="font-mono text-sm tracking-tight text-text"
          aria-label="Home"
        >
          <span className="text-amber">/</span>
          <span className="stream-text font-semibold">black_star</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-text"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full border border-line-strong px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-text transition-colors hover:border-amber hover:text-amber"
          >
            Say hi
          </a>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className="flex h-9 w-9 items-center justify-center md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <div className="space-y-1.5">
            <span
              className={cn(
                "block h-px w-6 bg-text transition-transform",
                open && "translate-y-[7px] rotate-45",
              )}
            />
            <span
              className={cn(
                "block h-px w-6 bg-text transition-opacity",
                open && "opacity-0",
              )}
            />
            <span
              className={cn(
                "block h-px w-6 bg-text transition-transform",
                open && "-translate-y-[7px] -rotate-45",
              )}
            />
          </div>
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-ink/95 px-5 py-4 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-mono text-sm uppercase tracking-widest text-muted"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={`mailto:${profile.email}`}
              className="font-mono text-sm uppercase tracking-widest text-amber"
            >
              Say hi
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
