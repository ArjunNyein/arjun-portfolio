"use client";

import { useState } from "react";

const snapshots = [
  { completed: 128, remaining: 72, rejected: 2 },
  { completed: 140, remaining: 60, rejected: 2 },
];
const metrics = [
  { key: "completed", label: "Completed" },
  { key: "remaining", label: "Remaining" },
  { key: "rejected", label: "Rejected" },
] as const;

export function DashboardDemo() {
  const [updates, setUpdates] = useState(0);
  const current = snapshots[updates % 2];
  const previous = snapshots[(updates + 1) % 2];

  return (
    <section aria-labelledby="dashboard-demo" className="rounded-2xl border border-steel bg-navy p-4 text-cloud sm:p-6">
      <p className="eyebrow text-mint">Conceptual demonstration · Fictional sample data</p>
      <h2 id="dashboard-demo" className="mt-2 text-[27px] text-white">See a production update</h2>
      <p className="mt-2 text-sm">Two sample CSV snapshots illustrate how the display updates.</p>
      <dl className="mt-4 grid gap-3 sm:grid-cols-3">
        {metrics.map(({ key, label }) => {
          const difference = current[key] - previous[key];
          const changed = updates > 0 && difference !== 0;
          return <div key={key} className="rounded-xl border border-steel bg-panel p-4">
            <dt className="text-sm">{label}</dt>
            <dd key={updates} className={changed ? "sample-change mt-2 rounded text-mint" : "mt-2 text-white"}>
              <span className="font-display text-3xl font-bold tabular-nums">{current[key]}</span>
              <span className="mt-1 block min-h-5 text-xs">{updates === 0 ? "Sample units" : changed ? `${difference > 0 ? "+" : ""}${difference} since previous snapshot` : "Unchanged"}</span>
            </dd>
          </div>;
        })}
      </dl>
      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
        <button type="button" onClick={() => setUpdates((count) => count + 1)} className="action border-mint bg-mint text-navy hover:bg-white">Next sample update</button>
        <p role="status" className="text-xs">Snapshot {updates % 2 === 0 ? "A" : "B"}{updates > 0 ? ` · Sample updated (${updates})` : " · Ready"}</p>
      </div>
    </section>
  );
}
