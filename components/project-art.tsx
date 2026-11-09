import { ArrowRight, Check, ClipboardList, FileSpreadsheet, GraduationCap, Monitor, RefreshCw, UserRound } from "lucide-react";
import { ThreatViews } from "@/components/threat-views";

export function ProjectArt({ id }: { id: string }) {
  if (id === "ip-threat-assessment") return <ThreatViews />;

  if (id === "manufacturing-dashboard") {
    return (
      <div className="artboard hero-surface bg-navy text-cloud" aria-hidden="true">
        <div className="art-frame w-full max-w-[360px] border-steel bg-panel p-4">
          <div className="flex items-center justify-between border-b border-steel pb-3 text-xs font-bold text-white">
            <span className="flex items-center gap-2"><Monitor size={16} className="text-mint" /> Production overview</span>
            <RefreshCw size={15} className="art-refresh text-mint" />
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {["Production", "Status", "Shift"].map((label, index) => (
              <div key={label} className="rounded-md border border-steel bg-navy/70 p-2">
                <div className={`mb-2 size-1.5 rounded-full ${index === 1 ? "bg-amber" : "bg-mint"}`} />
                <span className="text-[10px]">{label}</span>
                <span className="mt-2 block h-1 w-3/4 rounded bg-steel" />
              </div>
            ))}
          </div>
          <p className="mt-3 font-mono text-[10px] text-mint">CSV feed · Refresh every 3 min</p>
        </div>
      </div>
    );
  }

  if (id === "gradtracker") {
    return (
      <div className="artboard bg-mist" aria-hidden="true">
        <div className="art-frame w-full max-w-[340px] border-line bg-white p-4">
          <div className="flex items-center gap-2 border-b border-line pb-3 text-xs font-bold text-ink"><GraduationCap size={18} className="text-teal" /> Degree plan</div>
          {["Core courses", "Electives", "Requirements"].map((label, index) => (
            <div key={label} className="mt-2 flex items-center gap-2 rounded-md bg-mist px-2.5 py-2 text-[11px] font-medium text-ink">
              <span className={`h-4 w-1 rounded ${index === 1 ? "bg-amber" : "bg-accent"}`} />
              <span className="flex-1">{label}</span>
              <span className="h-1.5 w-10 rounded bg-line" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (id === "haribo-reporting") {
    return (
      <div className="artboard bg-sand" aria-hidden="true">
        <div className="art-frame flex w-full max-w-[340px] items-center justify-center gap-3 border-amber/50 bg-white/85 p-4 sm:gap-6">
          <div className="grid gap-1.5">
            {["Workbook A", "Workbook B", "Workbook C"].map((label) => <span key={label} className="flex items-center gap-1.5 rounded border border-line bg-surface px-2 py-1.5 text-[10px]"><FileSpreadsheet size={14} className="text-teal" />{label}</span>)}
          </div>
          <ArrowRight size={20} className="shrink-0 text-teal" />
          <div className="grid justify-items-center gap-1.5 text-center text-[10px] font-bold"><ClipboardList size={29} className="text-teal" />Weekly report</div>
        </div>
      </div>
    );
  }

  return (
    <div className="artboard bg-mist" aria-hidden="true">
      <div className="art-frame flex w-full max-w-[350px] items-center gap-3 border-line bg-white p-3 sm:p-4">
        <div className="flex-1 rounded-lg bg-navy p-3 text-white"><Monitor size={17} className="mb-2 text-mint" /><p className="text-[10px] font-bold">Instructor</p><span className="mt-2 block h-1.5 w-4/5 rounded bg-steel" /></div>
        <span className="grid shrink-0 justify-items-center gap-1 text-[9px] font-bold text-teal"><span className="size-2 rounded-full bg-accent" />Live sync</span>
        <div className="flex-1 rounded-lg bg-mist p-3 text-ink"><UserRound size={17} className="mb-2 text-teal" /><p className="text-[10px] font-bold">Student</p><span className="mt-1 flex items-center gap-1 text-[9px]"><Check size={10} /> Checkpoint</span></div>
      </div>
    </div>
  );
}
