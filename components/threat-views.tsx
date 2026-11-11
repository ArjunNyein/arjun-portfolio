"use client";

import { useState } from "react";
import { Search, ShieldCheck } from "lucide-react";

const findings = [
  { provider: "VirusTotal", detail: "3 sample engine flags" },
  { provider: "Shodan", detail: "HTTPS service on port 443" },
  { provider: "GreyNoise", detail: "No scanning observed in sample" },
] as const;

export function ThreatViews() {
  const [view, setView] = useState<"General" | "Technical">("General");

  return (
    <div className="artboard bg-[#dcebe9] text-ink">
      <div className="art-frame w-full max-w-[340px] border-line bg-white p-4">
        <div className="flex items-center gap-2 text-xs font-bold"><ShieldCheck size={17} className="text-teal" /> IP lookup</div>
        <p className="mt-3 flex items-center gap-2 rounded-md border border-line bg-surface px-2 py-2 text-[11px] text-muted"><Search size={13} /> Fictional sample · No live lookup</p>
        <div className="mt-2 flex gap-1" role="group" aria-label="Illustrated IP lookup views">
          {(["General", "Technical"] as const).map((label) => (
            <button key={label} type="button" onClick={() => setView(label)} aria-pressed={view === label} className={`min-h-11 rounded px-3 text-xs font-bold ${view === label ? "bg-navy text-white" : "bg-mist text-teal hover:bg-line"}`}>{label}</button>
          ))}
        </div>
        <div className="mt-2 grid text-[11px] text-muted">
          <div className="invisible col-start-1 row-start-1 grid" aria-hidden="true">
            <div className="col-start-1 row-start-1">{findings.map(({ provider, detail }) => <p key={provider} className="py-1"><strong>{provider}</strong> · {detail}</p>)}</div>
            <div className="col-start-1 row-start-1"><p className="py-1 font-bold text-ink">Illustrative risk · Review recommended</p><p>Some engines flagged this sample. Check the provider details before deciding whether to allow access.</p></div>
          </div>
          <div key={view} aria-live="polite" className="art-view col-start-1 row-start-1">
            {view === "General" ? <><p className="py-1 font-bold text-ink">Illustrative risk · Review recommended</p><p>Some engines flagged this sample. Check the provider details before deciding whether to allow access.</p></> :
              findings.map(({ provider, detail }) => <p key={provider} className="py-1"><strong>{provider}</strong> · {detail}</p>)}
          </div>
        </div>
      </div>
    </div>
  );
}
