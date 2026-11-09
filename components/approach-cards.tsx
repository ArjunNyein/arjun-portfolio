"use client";

import { useState } from "react";
import { CheckCheck, Code2, Compass, Minus, Plus } from "lucide-react";

const steps = [
  {
    icon: Compass,
    title: "Understand the problem",
    sentence: "I like learning how people currently do things before deciding what needs to change.",
  },
  {
    icon: Code2,
    title: "Build something useful",
    sentence: "I focus on making applications understandable and practical for the people who will use them.",
  },
  {
    icon: CheckCheck,
    title: "Check the details",
    sentence: "I test my work, validate information, and make sure the finished result does what it should.",
  },
];

export function ApproachCards() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <ol className="mt-6 grid gap-4 md:grid-cols-3">
      {steps.map(({ icon: Icon, title, sentence }, index) => {
        const open = activeStep === index;
        const titleId = `approach-title-${index}`;
        const revealId = `approach-reveal-${index}`;

        return (
          <li key={title} className="card overflow-hidden">
            <button
              type="button"
              aria-expanded={open}
              aria-labelledby={titleId}
              aria-controls={revealId}
              onClick={() => setActiveStep((step) => step === index ? null : index)}
              className="approach-card group flex h-full w-full flex-col rounded-2xl border border-transparent p-5 text-left outline-offset-[-4px] aria-expanded:border-accent/60 aria-expanded:bg-mist hover:border-accent/40 sm:p-6"
            >
              <span className="flex w-full items-center justify-between">
                <span className="grid size-11 place-items-center rounded-xl border border-line bg-mist text-teal group-aria-expanded:bg-teal group-aria-expanded:text-white">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <span className="eyebrow flex items-center gap-2 text-teal">
                  <Minus size={14} className="invisible group-aria-expanded:visible" aria-hidden="true" />
                  Step 0{index + 1}
                </span>
              </span>
              <span id={titleId} className="mt-4 font-display text-[23px] leading-tight font-bold">{title}</span>
              <span className="mt-4 grid w-full flex-1 items-center border-t border-line pt-3">
                <span id={revealId} aria-hidden={!open} className="approach-reveal col-start-1 row-start-1 text-sm leading-relaxed text-ink">
                  {sentence}
                </span>
                <span aria-hidden="true" className="approach-prompt col-start-1 row-start-1 flex items-center gap-2 text-sm font-semibold text-teal">
                  <Plus size={16} /> Click to reveal
                </span>
              </span>
            </button>
          </li>
        );
      })}
    </ol>
  );
}
