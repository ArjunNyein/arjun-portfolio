import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { ProjectCard } from "@/components/project-card";
import { ResumeLink } from "@/components/site";
import { profile, projects } from "@/content/portfolio";

export default function Home() {
  return (
    <>
      <section className="hero-surface border-t border-steel/40 bg-navy text-white">
        <div className="shell grid items-center gap-10 py-12 lg:grid-cols-[minmax(0,1.65fr)_minmax(0,1fr)] lg:gap-16 lg:py-20">
          <div>
            <p className="eyebrow mb-4 flex items-center gap-3 text-mint"><span className="h-px w-7 bg-mint" /> Arjun Nyein / Software Developer</p>
            <h1 className="max-w-[690px] text-[clamp(2.5rem,5.4vw,4.5rem)] tracking-[-0.045em]">I build software that makes everyday work easier.</h1>
            <p className="mt-5 max-w-[610px] text-cloud sm:text-lg">
              I’m a Computer Science student at the University of Wisconsin–Parkside. My work has taken me from manufacturing software to campus IT and university projects. I like figuring out how a process works and where software can make it simpler.
            </p>
            <p className="mt-4 text-sm font-semibold text-cloud">B.S. Computer Science · Expected {profile.graduation} · GPA {profile.gpa}</p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              <Link href="/experience" className="action border-mint bg-mint text-navy hover:border-white hover:bg-white">View Experience <ArrowRight size={16} aria-hidden="true" /></Link>
              <Link href="/projects" className="action border-mint/60 bg-panel text-mint hover:bg-mint hover:text-navy">Explore Projects <ArrowRight size={16} aria-hidden="true" /></Link>
              <ResumeLink variant="dark" />
            </div>
          </div>
          <aside className="relative overflow-hidden rounded-2xl border border-steel bg-panel/90 p-6 shadow-2xl shadow-black/20 sm:p-8" aria-label="Manufacturing dashboard outcome">
            <p className="eyebrow flex justify-between gap-3 border-b border-steel pb-4 text-mint"><span>From the shop floor</span><span>01 / Twin Disc</span></p>
            <p className="mt-5 font-display text-[clamp(4rem,8vw,6rem)] font-bold leading-none tracking-tighter text-mint">150+</p>
            <p className="mt-3 max-w-sm text-lg">shop-floor employees use the dashboard I built during my internship at Twin Disc.</p>
            <Link href="/projects/manufacturing-dashboard" className="inline-link mt-2 text-mint">See what changed <ArrowUpRight size={15} aria-hidden="true" /></Link>
          </aside>
        </div>
      </section>
      <section className="shell section-pad" aria-labelledby="featured-title">
        <p className="eyebrow text-teal">Selected work</p>
        <h2 id="featured-title" className="mt-2 text-[32px] sm:text-[42px]">Two projects to start with</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 sm:gap-5">
          <ProjectCard project={projects[0]} />
          <ProjectCard project={projects[2]} />
        </div>
        <Link href="/projects" className="inline-link mt-3">Browse all five projects <ArrowRight size={15} aria-hidden="true" /></Link>
      </section>
    </>
  );
}
