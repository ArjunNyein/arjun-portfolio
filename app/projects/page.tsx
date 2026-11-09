import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageIntro } from "@/components/site";
import { ProjectCard } from "@/components/project-card";
import { ProjectPreview } from "@/components/project-preview";
import { projects } from "@/content/portfolio";

export const metadata: Metadata = {
  title: "Technical Projects",
  description: "Five software projects across manufacturing, security, education, and reporting, with Arjun Nyein’s contributions and the technologies used.",
};

export default function Projects() {
  return (
    <>
      <PageIntro label="Technical projects" title="Explore my work" description="Five projects across manufacturing, security, education, and reporting." />
      <div className="shell section-pad grid items-start gap-5 md:grid-cols-[minmax(205px,254px)_minmax(0,1fr)]">
        <aside className="rounded-[10px] bg-navy p-3.5 md:sticky md:top-5" aria-labelledby="project-index">
          <h2 id="project-index" className="eyebrow px-2 py-1 font-normal text-mint">Project index</h2>
          <ul className="mt-1 space-y-0.5">
            {projects.map((project, index) => (
              <li key={project.id} className="flex items-center pl-2">
                <span className="font-mono text-xs text-mint" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                {project.caseStudy ? (
                  <Link href={project.caseStudy} className="flex min-h-11 flex-1 items-center gap-1.5 rounded-md px-3 text-sm font-bold text-cloud transition-colors hover:bg-panel hover:text-white">
                    {project.shortTitle} <ArrowUpRight className="shrink-0" size={14} aria-hidden="true" />
                  </Link>
                ) : <ProjectPreview project={project} indexItem />}
              </li>
            ))}
          </ul>
        </aside>
        <section className="min-w-0 space-y-3" aria-labelledby="project-list">
          <h2 id="project-list" className="sr-only">Project summaries</h2>
          {projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}
        </section>
      </div>
    </>
  );
}
