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
      <PageIntro label="Technical projects" title="Explore my work" description="Five projects across manufacturing, security, education, and reporting. Open a project to see what I contributed." />
      <section className="shell section-pad grid gap-4 md:grid-cols-2 md:gap-5" aria-label="Project summaries">
        {projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} featured={index === 0} />)}
      </section>
    </>
  );
}
