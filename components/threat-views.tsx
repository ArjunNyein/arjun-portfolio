"use client";

import { useState } from "react";
import { Search, ShieldCheck } from "lucide-react";

const views = {
  General: "Reputation summary · Source overview",
  Technical: "Provider findings · Technical context",
};

export function ThreatViews() {
  const [view, setView] = useState<keyof typeof views>("General");

  return (
    <div className="artboard bg-[#dcebe9] text-ink">
      <div className="art-frame w-full max-w-[340px] border-line bg-white p-4">
        <div className="flex items-center gap-2 text-xs font-bold"><ShieldCheck size={17} className="text-teal" /> IP lookup</div>
        <p className="mt-3 flex items-center gap-2 rounded-md border border-line bg-surface px-2 py-2 text-[11px] text-muted"><Search size={13} /> Example IP address</p>
        <div className="mt-2 flex gap-1" role="group" aria-label="Illustrated IP lookup views">
          {(Object.keys(views) as (keyof typeof views)[]).map((label) => (
            <button key={label} type="button" onClick={() => setView(label)} aria-pressed={view === label} className={`min-h-11 rounded px-3 text-xs font-bold ${view === label ? "bg-navy text-white" : "bg-mist text-teal hover:bg-line"}`}>{label}</button>
          ))}
        </div>
        <p key={view} aria-live="polite" className="art-view mt-2 text-[11px] text-muted">{views[view]}</p>
      </div>
    </div>
  );
}
