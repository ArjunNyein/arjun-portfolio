import { Code2, Database, PanelTop } from "lucide-react";
import { SignalTrace } from "@/components/signal-trace";

const stages = [
  { icon: Database, label: "Inputs", detail: "Files and APIs" },
  { icon: Code2, label: "Application", detail: "Logic and workflows" },
  { icon: PanelTop, label: "Interface", detail: "Tools people use" },
];

export function HomeIllustration() {
  return (
    <figure className="group relative mx-auto w-full max-w-[430px] overflow-hidden rounded-[1.75rem] border border-steel bg-panel/80 p-4 shadow-xl shadow-navy/40 sm:p-6">
      <SignalTrace className="absolute right-0 bottom-3 w-3/4 text-mint/25" />
      <div className="relative flex items-center gap-2 border-b border-steel pb-4">
        <span className="size-2 rounded-full bg-mint" aria-hidden="true" />
        <figcaption className="eyebrow text-cloud">From input to interface</figcaption>
      </div>
      <ol className="relative mt-4 grid gap-2">
        {stages.map(({ icon: Icon, label, detail }, index) => (
          <li key={label} className="flex items-center gap-3 rounded-xl border border-steel bg-navy/90 p-3 text-cloud transition-colors hover:border-mint/70 sm:gap-4">
            <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-panel text-mint"><Icon size={20} aria-hidden="true" /></span>
            <div className="min-w-0 flex-1">
              <p className="font-display font-bold text-white">{label}</p>
              <p className="text-xs text-cloud">{detail}</p>
            </div>
            <span className="eyebrow text-mint" aria-hidden="true">0{index + 1}</span>
          </li>
        ))}
      </ol>
    </figure>
  );
}
