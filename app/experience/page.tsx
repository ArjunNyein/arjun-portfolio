import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageIntro } from "@/components/site";
import { experience, type Role } from "@/content/portfolio";

export const metadata: Metadata = {
  title: "Work Experience",
  description: "Arjun Nyein’s work across Twin Disc, UW–Parkside campus technology and student support, and a HARIBO industry project.",
};

function RoleDetails({ role }: { role: Role }) {
  return (
    <div className="min-w-0">
      <h3 className="font-sans text-base">{role.title}</h3>
      <p className="mt-1 text-sm text-muted">{role.dates}</p>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-[15px] leading-relaxed marker:text-teal">
        {role.contributions.map((text) => <li key={text}>{text}</li>)}
      </ul>
      {role.links && (
        <div className="mt-1 flex flex-wrap gap-x-5">
          {role.links.map(({ label, href }) => (
            <Link key={href} href={href} className="inline-link">
              {label} <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Experience() {
  return (
    <>
      <PageIntro
        label="Work experience"
        title="Software, systems, and support."
        description="My work across manufacturing, university operations, and a university–industry project."
      />
      <section className="shell section-pad space-y-3.5" aria-label="Employers and roles">
        {experience.map(({ employer, location, roles }, index) => (
          <article key={employer} className="card grid items-start gap-5 p-4 sm:p-6 md:grid-cols-[minmax(0,288px)_minmax(0,1fr)] md:gap-7">
            <header>
              <p className="eyebrow text-teal">{String(index + 1).padStart(2, "0")} / {index === 2 ? "Industry project" : "Employer"}</p>
              <h2 className="mt-1.5 text-[26px]">{employer}</h2>
              <p className="mt-2 text-sm text-muted">{location}</p>
            </header>
            {roles.length === 1 ? <RoleDetails role={roles[0]} /> : (
              <ol className="space-y-6 border-l border-line pl-5">
                {roles.map((role) => (
                  <li key={role.title} className="relative before:absolute before:top-1 before:-left-[25px] before:size-[9px] before:rounded-full before:bg-teal">
                    <RoleDetails role={role} />
                  </li>
                ))}
              </ol>
            )}
          </article>
        ))}
      </section>
    </>
  );
}
