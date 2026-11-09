import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { ProjectCard } from "@/components/project-card";
import { Portrait, ResumeLink } from "@/components/site";
import { profile, projects } from "@/content/portfolio";

export default function Home() {
  return (
    <>
      <section className="bg-navy text-white">
        <div className="shell grid items-center gap-8 py-9 md:grid-cols-[minmax(0,1.8fr)_minmax(0,1fr)] lg:gap-10 lg:py-14">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <Portrait compact />
              <p className="eyebrow text-mint">Software developer / UW–Parkside ’27</p>
            </div>
            <h1 className="max-w-[635px] text-[clamp(2.5rem,5vw,3.5rem)]">I build software that makes everyday work easier.</h1>
            <p className="mt-4 max-w-[590px] text-cloud sm:text-lg">
              I’m {profile.name}, a Computer Science student at {profile.university} graduating in {profile.graduation}. I’ve built tools for manufacturing, security, and supply-chain reporting.
            </p>
            <p className="mt-2 text-sm text-cloud">GPA {profile.gpa}</p>
            <div className="mt-4 flex flex-wrap gap-2.5">
              <Link href="/projects" className="action border-mint bg-mint text-navy hover:border-white hover:bg-white">
                Explore my work <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link href="/about" className="action border-steel text-cloud hover:bg-panel hover:text-white">About me</Link>
              <ResumeLink variant="dark" />
            </div>
          </div>
          <aside className="hidden rounded-xl border border-steel bg-panel p-6 md:block" aria-label="Manufacturing dashboard outcome">
            <p className="eyebrow border-b border-steel pb-3 text-mint">From the shop floor</p>
            <p className="mt-3 font-display text-6xl font-bold leading-none text-mint">150+</p>
            <p className="mt-3 text-lg">shop-floor employees use the manufacturing dashboard.</p>
            <Link href="/projects/manufacturing-dashboard" className="inline-link mt-1 text-mint">
              See what changed <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </aside>
        </div>
      </section>
      <section className="shell section-pad" aria-labelledby="featured-title">
        <p className="eyebrow text-teal">Selected work</p>
        <h2 id="featured-title" className="mt-2 text-[28px] sm:text-[34px]">Two projects to start with</h2>
        <div className="mt-4 grid items-start gap-4 sm:grid-cols-2 sm:gap-5">
          <ProjectCard project={projects[0]} />
          <ProjectCard project={projects[2]} />
        </div>
        <Link href="/projects" className="inline-link mt-2">
          Browse all five projects <ArrowRight size={15} aria-hidden="true" />
        </Link>
      </section>
    </>
  );
}
