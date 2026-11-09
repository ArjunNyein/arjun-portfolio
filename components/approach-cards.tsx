import { CheckCheck, ChevronDown, Code2, Compass } from "lucide-react";

const steps = [
  {
    icon: Compass,
    title: "Understand the problem",
    summary: "Start by seeing how people do the work today.",
    detail: "I like walking through the current process with the people who use it. Seeing where they get stuck or repeat the same steps helps me build something that fits their workflow.",
  },
  {
    icon: Code2,
    title: "Build something useful",
    summary: "Make the next step clear for the person using it.",
    detail: "I start with the part of the problem that would make the biggest difference. Then I try to make that part easy to use, with clear labels and fewer steps to get the job done.",
  },
  {
    icon: CheckCheck,
    title: "Check the details",
    summary: "Test the result the way someone would actually use it.",
    detail: "I test the main workflow, check the information it shows, and try a few cases outside the happy path. I want the result to hold up in real use.",
  },
];

export function ApproachCards() {
  return (
    <ol className="mt-6 grid items-start gap-4 md:grid-cols-3">
      {steps.map(({ icon: Icon, title, summary, detail }, index) => (
        <li key={title}>
          <details className="approach-card group card overflow-hidden open:border-accent open:shadow-md open:shadow-accent/10" data-pointer-card>
            <summary className="block list-none rounded-2xl p-5 outline-offset-[-4px] hover:bg-mist/60 sm:p-6 [&::-webkit-details-marker]:hidden">
              <div className="flex items-center justify-between">
                <span className="grid size-11 place-items-center rounded-xl border border-line bg-mist text-teal group-open:border-accent/40 group-open:bg-teal group-open:text-white">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <span className="eyebrow text-teal" aria-hidden="true">Step 0{index + 1}</span>
              </div>
              <h3 className="mt-4 text-[23px]">{title}</h3>
              <p className="mt-2 text-sm text-muted">{summary}</p>
              <span className="mt-4 flex items-center gap-2 text-sm font-semibold text-teal" aria-hidden="true">
                <ChevronDown size={16} className="motion-safe:transition-transform group-open:rotate-180" />
                <span className="group-open:hidden">Read more</span>
                <span className="hidden group-open:inline">Read less</span>
              </span>
            </summary>
            <div className="px-5 pb-5 sm:px-6 sm:pb-6">
              <p className="border-t border-line pt-4 text-sm text-muted">{detail}</p>
            </div>
          </details>
        </li>
      ))}
    </ol>
  );
}
