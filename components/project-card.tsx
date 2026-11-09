import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ProjectArt } from "@/components/project-art";
import { ProjectPreview } from "@/components/project-preview";
import type { Project } from "@/content/portfolio";

export function ProjectCard({ project, index, featured = false, summary }: { project: Project; index?: number; featured?: boolean; summary?: string }) {
  const detailed = index !== undefined;
  const Heading = detailed ? "h2" : "h3";

  return (
    <article id={detailed ? project.id : undefined} className={`card card-hover project-story min-w-0 scroll-mt-5 p-4 sm:p-5 ${featured ? "md:col-span-2 lg:grid lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-10" : ""}`}>
      <ProjectArt id={project.id} />
      <div className={`flex flex-col items-start pt-5 ${featured ? "lg:py-4" : ""}`}>
        <p className="eyebrow text-teal">{detailed && `${String(index + 1).padStart(2, "0")} / `}{project.category}</p>
        <Heading className={`mt-2 ${featured ? "text-[32px] sm:text-[42px]" : "text-[25px] sm:text-[30px]"}`}>{project.title}</Heading>
        <p className="mt-2 text-muted">{summary ?? project.summary}</p>
        {detailed && <p className="mt-3 text-sm text-ink"><strong>My role</strong> · {project.role}</p>}
        {detailed && project.id === "haribo-reporting" && (
          <p className="mt-3 text-sm text-ink"><strong className="mr-2 inline-block rounded-md bg-sand px-2.5 py-1 text-base">~75%</strong> estimated reduction in preparation time</p>
        )}
        {detailed && (
          <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
            {project.stack.map((technology) => <li key={technology} className="tag">{technology}</li>)}
          </ul>
        )}
        <div className="mt-2">
          {project.caseStudy ? (
            <Link href={project.caseStudy} className="inline-link">Read case study <ArrowUpRight size={15} aria-hidden="true" /></Link>
          ) : <ProjectPreview project={project} />}
        </div>
      </div>
    </article>
  );
}
