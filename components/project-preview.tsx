"use client";

import { useId, useRef } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { GradTrackerDemo } from "@/components/gradtracker-demo";
import type { Project } from "@/content/portfolio";

export function ProjectPreview({
  project,
  label = "View project details",
}: {
  project: Project;
  label?: string;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const title = useId();

  return (
    <>
      <button
        ref={trigger}
        type="button"
        aria-haspopup="dialog"
        aria-label={`${label}: ${project.title}`}
        onClick={() => dialog.current?.showModal()}
        className="inline-link"
      >
        {label} <ArrowUpRight size={15} aria-hidden="true" />
      </button>
      <dialog
        ref={dialog}
        aria-labelledby={title}
        onClose={() => trigger.current?.focus()}
        className="project-dialog fixed inset-0 m-auto max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-[580px] overflow-y-auto rounded-[12px] border border-line bg-white p-5 text-ink shadow-xl sm:p-6"
      >
        <form method="dialog">
          <button className="inline-link">
            <X size={16} aria-hidden="true" /> Close preview
          </button>
        </form>
        <p className="eyebrow mt-1 text-teal">{project.category}</p>
        <h2 id={title} className="mt-2 text-[29px]">{project.title}</h2>
        <p className="mt-3 font-bold">{project.summary}</p>
        <h3 className="mt-5 text-lg">My contribution</h3>
        <p className="mt-2 text-muted">{project.contribution}</p>
        <h3 className="mt-5 text-lg">Outcome or status</h3>
        <p className="mt-2 text-muted">{project.outcome}</p>
        <p className="mt-4 rounded-md bg-mist px-3 py-2 font-mono text-xs leading-relaxed text-teal">
          {project.stack.join(" · ")}
        </p>
        {project.id === "gradtracker" && <GradTrackerDemo />}
        {project.source && (
          <a className="inline-link mt-2" href={project.source} target="_blank" rel="noopener noreferrer">
            View source on GitHub <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        )}
      </dialog>
    </>
  );
}
