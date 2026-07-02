import FlowField from "@/components/flow-field";
import { SiteNav } from "@/components/site-nav";
import { Hero } from "@/components/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Work } from "@/components/sections/work";
import { MoreProjects } from "@/components/sections/more-projects";
import { Experience } from "@/components/sections/experience";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <FlowField className="fixed inset-0 -z-20 h-full w-full" />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 bg-gradient-to-b from-ink/5 via-transparent to-ink/20"
      />

      <SiteNav />

      <main>
        <Hero />
        <About />
        <Skills />
        <Work />
        <MoreProjects />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
