"use client";

import { useId, useRef } from "react";
import { ArrowUpRight, X } from "lucide-react";
import type { Project } from "@/content/portfolio";

export function ProjectPreview({
  project,
  indexItem = false,
}: {
  project: Project;
  indexItem?: boolean;
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
        aria-label={indexItem ? `Preview ${project.title}` : `Open project preview: ${project.title}`}
        onClick={() => dialog.current?.showModal()}
        className={indexItem
          ? "flex min-h-11 w-full items-center rounded-md px-3 text-left text-sm font-bold text-cloud transition-colors hover:bg-panel hover:text-white"
          : "inline-link"}
      >
        {indexItem ? project.shortTitle : <>Open project preview <ArrowUpRight size={15} aria-hidden="true" /></>}
      </button>
      <dialog
        ref={dialog}
        aria-labelledby={title}
        onClose={() => trigger.current?.focus()}
        className="fixed inset-0 m-auto max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-[420px] overflow-y-auto rounded-[12px] border border-line bg-white p-5 text-ink shadow-xl sm:p-6"
      >
        <form method="dialog">
          <button className="inline-link">
            <X size={16} aria-hidden="true" /> Close preview
          </button>
        </form>
        <p className="eyebrow mt-1 text-teal">{project.category}</p>
        <h2 id={title} className="mt-2 text-[29px]">{project.title}</h2>
        <p className="mt-3 font-bold">{project.summary}</p>
        <p className="mt-2 text-muted">{project.contribution}</p>
        <p className="mt-4 rounded-md bg-mist px-3 py-2 font-mono text-xs leading-relaxed text-teal">
          {project.stack.join(" · ")}
        </p>
        {project.source && (
          <a className="inline-link mt-2" href={project.source}>
            View source on GitHub <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        )}
      </dialog>
    </>
  );
}
