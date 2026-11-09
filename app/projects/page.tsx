import type { Metadata } from "next";
import { PageIntro } from "@/components/site";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/content/portfolio";

export const metadata: Metadata = {
  title: "Technical Projects",
  description: "Five software projects across manufacturing, security, education, and reporting, with Arjun Nyein’s contributions and the technologies used.",
};

export default function Projects() {
  return (
    <>
      <PageIntro label="Technical projects" title="Things I’ve helped build." description="Five projects, from a production display on the shop floor to a prototype built with classmates." />
      <section className="shell section-pad grid gap-x-9 gap-y-10 md:grid-cols-2 lg:gap-y-14" aria-label="Project summaries">
        {projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} featured={index === 0} />)}
      </section>
    </>
  );
}
