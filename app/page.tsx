import Link from "next/link";
import { ArrowDownRight, ArrowRight } from "lucide-react";
import { ProjectCard } from "@/components/project-card";
import { HomeIllustration } from "@/components/home-illustration";
import { projects } from "@/content/portfolio";

export default function Home() {
  return (
    <>
      <section className="hero-surface border-t border-steel/40 bg-navy text-white">
        <div className="shell grid items-center gap-10 py-12 md:grid-cols-[1.3fr_1fr] lg:gap-20 lg:py-20">
          <div>
            <p className="eyebrow mb-5 flex items-center gap-3 text-mint"><span className="h-px w-7 bg-mint" /> MY WORK</p>
            <h1 className="max-w-[720px] text-[clamp(2.5rem,5.6vw,5.15rem)] tracking-[-0.05em]">
              A few projects worth <span className="text-mint">a closer look.</span>
            </h1>
            <p className="mt-5 max-w-[580px] text-cloud sm:text-lg">
              From manufacturing dashboards to full-stack applications, explore some of the projects I’ve worked on and the problems I’ve helped solve.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/projects" className="action border-mint bg-mint text-navy hover:border-white hover:bg-white">Explore My Projects <ArrowRight size={16} aria-hidden="true" /></Link>
              <Link href="/about" className="action border-steel bg-panel text-white hover:border-mint hover:text-mint">Get to Know Me <ArrowDownRight size={16} aria-hidden="true" /></Link>
            </div>
          </div>
          <HomeIllustration />
        </div>
      </section>
      <section className="shell py-11 sm:py-16" aria-labelledby="featured-title">
        <p className="eyebrow text-teal">Selected work</p>
        <div className="mb-7 flex flex-wrap items-end justify-between gap-x-6">
          <h2 id="featured-title" className="mt-2 text-[32px] sm:text-[44px]">Two projects to start with</h2>
          <Link href="/projects" className="inline-link">Browse all five projects <ArrowRight size={15} aria-hidden="true" /></Link>
        </div>
        <div className="grid gap-x-8 gap-y-8 sm:grid-cols-[1.15fr_1fr]">
          <ProjectCard project={projects[0]} summary="A clearer view of what’s happening on the shop floor." />
          <ProjectCard project={projects[2]} summary="A tool to help students plan what to take next." />
        </div>
      </section>
    </>
  );
}
