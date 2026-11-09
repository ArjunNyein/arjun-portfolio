import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowRight, GraduationCap, Laptop } from "lucide-react";
import { ProjectCard } from "@/components/project-card";
import { profile, projects } from "@/content/portfolio";

export default function Home() {
  return (
    <>
      <section className="hero-surface border-t border-steel/40 bg-navy text-white">
        <div className="shell grid items-center gap-10 py-12 md:grid-cols-[1.3fr_1fr] lg:gap-20 lg:py-20">
          <div>
            <p className="eyebrow mb-5 flex items-center gap-3 text-mint"><span className="h-px w-7 bg-mint" /> Arjun Nyein</p>
            <h1 className="max-w-[720px] text-[clamp(2.5rem,5.6vw,5.15rem)] tracking-[-0.05em]">
              I like turning everyday problems into <span className="text-mint">useful software.</span>
            </h1>
            <p className="mt-5 max-w-[580px] text-cloud sm:text-lg">
              I’m Arjun, a Computer Science student at the University of Wisconsin–Parkside. I’ve worked on software for manufacturing, campus IT, security, and reporting.
            </p>
            <p className="mt-2 max-w-[580px] text-cloud sm:text-lg">I enjoy understanding a problem, building something practical, and seeing people actually use it.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/projects" className="action border-mint bg-mint text-navy hover:border-white hover:bg-white">Explore My Projects <ArrowRight size={16} aria-hidden="true" /></Link>
              <Link href="/about" className="action border-steel bg-panel text-white hover:border-mint hover:text-mint">Get to Know Me <ArrowDownRight size={16} aria-hidden="true" /></Link>
            </div>
          </div>
          <figure className="relative mx-auto w-full max-w-[390px] px-3 pb-3">
            <div className="absolute inset-0 translate-x-1 translate-y-2 rounded-[2rem] border border-mint/35" aria-hidden="true" />
            <div className="relative aspect-[4/4.45] overflow-hidden rounded-[1.75rem] bg-panel">
              <Image src="/arjun-nyein.webp" alt="Arjun Nyein" fill preload sizes="(min-width: 768px) 366px, 90vw" className="object-cover object-[center_32%]" />
            </div>
            <figcaption className="absolute -bottom-2 right-0 flex items-center gap-2 rounded-md border border-steel bg-navy px-3 py-2 font-mono text-xs text-cloud shadow-lg"><span className="size-2 rounded-full bg-amber" /> Kenosha, Wisconsin</figcaption>
          </figure>
        </div>
        <div className="border-t border-steel/75 bg-navy/65">
          <ul className="shell grid gap-3 py-5 text-sm text-cloud sm:grid-cols-2">
            <li className="flex items-center gap-3"><GraduationCap size={19} className="shrink-0 text-mint" aria-hidden="true" /> B.S. Computer Science · Expected {profile.graduation}</li>
            <li className="flex items-center gap-3"><Laptop size={18} className="shrink-0 text-mint" aria-hidden="true" /> Manufacturing software and campus IT</li>
          </ul>
        </div>
      </section>
      <section className="shell py-11 sm:py-16" aria-labelledby="featured-title">
        <p className="eyebrow text-teal">Selected work</p>
        <div className="mb-7 flex flex-wrap items-end justify-between gap-x-6">
          <h2 id="featured-title" className="mt-2 text-[32px] sm:text-[44px]">Two projects to start with</h2>
          <Link href="/projects" className="inline-link">Browse all five projects <ArrowRight size={15} aria-hidden="true" /></Link>
        </div>
        <div className="grid gap-x-8 gap-y-8 sm:grid-cols-[1.15fr_1fr]">
          <ProjectCard project={projects[0]} summary="An internal production dashboard that refreshes every three minutes for 150+ shop-floor employees." />
          <ProjectCard project={projects[2]} summary="A degree-planning app my team built for students and academic advisors." />
        </div>
      </section>
    </>
  );
}
