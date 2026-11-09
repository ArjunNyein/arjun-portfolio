import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ProjectPreview } from "@/components/project-preview";
import type { Project } from "@/content/portfolio";

export function ProjectCard({
  project,
  index,
  featured = false,
}: {
  project: Project;
  index?: number;
  featured?: boolean;
}) {
  const detailed = index !== undefined;
  const Heading = detailed ? "h2" : "h3";

  return (
    <article id={detailed ? project.id : undefined} className={`card card-hover flex scroll-mt-5 flex-col ${featured ? "overflow-hidden md:col-span-2 md:grid md:grid-cols-[1.65fr_1fr]" : ""}`}>
      <div className="flex flex-col items-start p-5 sm:p-7">
        <p className="eyebrow text-teal">{detailed && `${String(index + 1).padStart(2, "0")} / `}{project.category}</p>
        <Heading className={`mt-2 ${featured ? "text-[32px] sm:text-[40px]" : "text-[24px] sm:text-[29px]"}`}>{project.title}</Heading>
        <p className="mt-2 max-w-[65ch] text-muted">{project.summary}</p>
        {featured && <p className="mt-2 max-w-[65ch]">{project.contribution}</p>}
        {detailed && (
          <ul className="my-4 flex flex-wrap gap-2" aria-label="Technologies">
            {project.stack.map((technology) => <li key={technology} className="tag">{technology}</li>)}
          </ul>
        )}
        <div className="mt-auto">
          {project.caseStudy ? (
            <Link href={project.caseStudy} className="inline-link mt-1">Read case study <ArrowUpRight size={15} aria-hidden="true" /></Link>
          ) : <ProjectPreview project={project} />}
        </div>
      </div>
      {featured && (
        <div className="hero-surface flex flex-col justify-center bg-navy p-6 text-white sm:p-8">
          <p className="eyebrow text-mint">In use at Twin Disc</p>
          <p className="mt-3 font-display text-6xl font-bold leading-none text-mint">150+</p>
          <p className="mt-2 text-cloud">Shop-floor employees</p>
          <p className="mt-5 border-t border-steel pt-4 text-sm text-cloud">Production views refresh every three minutes.</p>
        </div>
      )}
    </article>
  );
}
