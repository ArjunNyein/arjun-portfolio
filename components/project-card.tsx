import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ProjectPreview } from "@/components/project-preview";
import type { Project } from "@/content/portfolio";

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index?: number;
}) {
  const detailed = index !== undefined;

  return (
    <article id={detailed ? project.id : undefined} className="card scroll-mt-5 p-4 sm:p-5">
      <p className="eyebrow text-teal">
        {detailed && `${String(index + 1).padStart(2, "0")} / `}{project.category}
      </p>
      <h3 className="mt-2 text-[22px] sm:text-[25px]">{project.title}</h3>
      <p className="mt-1.5 text-muted">{project.summary}</p>
      {detailed && (
        <div className="mt-3 space-y-2 border-t border-line pt-3">
          <p className="eyebrow text-teal">My contribution</p>
          <p>{project.contribution}</p>
          <p className="rounded-md bg-mist px-3 py-2 font-mono text-xs leading-relaxed text-teal">
            {project.stack.join(" · ")}
          </p>
        </div>
      )}
      {project.caseStudy ? (
        <Link href={project.caseStudy} className="inline-link mt-1">
          Read {detailed ? "full " : ""}case study <ArrowUpRight size={15} aria-hidden="true" />
        </Link>
      ) : <ProjectPreview project={project} />}
    </article>
  );
}
