"use client";

import { useId, useState } from "react";

const courses = [
  { subject: "CS", number: "210", title: "Programming Foundations" },
  { subject: "CS", number: "320", title: "Data Structures" },
  { subject: "CS", number: "410", title: "Web Applications" },
];

export function GradTrackerDemo() {
  const id = useId();
  const [query, setQuery] = useState("");
  const [order, setOrder] = useState("asc");
  const results = courses
    .filter((course) => `${course.subject} ${course.number} ${course.title}`.toLowerCase().includes(query.trim().toLowerCase()))
    .sort((a, b) => order === "asc" ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title));

  return (
    <section className="mt-5 rounded-xl border border-line bg-mist p-4" aria-labelledby={id}>
      <h3 id={id} className="text-lg">Try course administration</h3>
      <p className="mt-1 text-xs text-muted">Fictional sample courses · Search and sort locally.</p>
      <div className="mt-3 grid gap-3 sm:grid-cols-[1fr_auto]">
        <label className="grid gap-1 text-xs font-semibold">
          Search courses
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Title or course code" className="min-h-11 min-w-0 w-full rounded-md border border-line bg-white px-3 text-sm font-normal" />
        </label>
        <label className="grid gap-1 text-xs font-semibold">
          Sort by title
          <select value={order} onChange={(event) => setOrder(event.target.value)} className="min-h-11 rounded-md border border-line bg-white px-2 text-sm font-normal">
            <option value="asc">A–Z</option><option value="desc">Z–A</option>
          </select>
        </label>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p role="status" className="text-xs text-muted">{results.length} of {courses.length} courses</p>
        <button type="button" className="inline-link" onClick={() => { setQuery(""); setOrder("asc"); }}>Reset example</button>
      </div>
      <div className="min-h-[156px]">
        {results.length ? <ul className="divide-y divide-line">
          {results.map((course) => <li key={course.number} className="py-2 text-sm"><span className="block text-xs text-teal">{course.subject} {course.number}</span>{course.title}</li>)}
        </ul> : <p className="py-5 text-sm text-muted">No matching courses. Try another title or course code, or reset the example.</p>}
      </div>
    </section>
  );
}
