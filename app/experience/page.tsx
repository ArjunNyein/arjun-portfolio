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
      <h3 className="text-xl">{role.title}</h3>
      <p className="mt-1 text-sm font-medium text-muted">{role.dates}</p>
      {role.contributions.length > 0 && (
        <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed marker:text-teal">
          {role.contributions.map((text) => <li key={text}>{text}</li>)}
        </ul>
      )}
      {role.highlights && (
        <div className="mt-5 grid gap-3.5 sm:grid-cols-2">
          {role.highlights.map(({ title, description, href }) => (
            <section key={title} className="rounded-xl border border-line bg-surface p-4 sm:p-5">
              <h4 className="text-xl">{title}</h4>
              <p className="mt-2 text-[15px] text-muted">{description}</p>
              {href && <Link href={href} className="inline-link mt-1">Explore project <ArrowUpRight size={14} aria-hidden="true" /></Link>}
            </section>
          ))}
        </div>
      )}
      {role.links?.map(({ label, href }) => (
        <Link key={href} href={href} className="inline-link mt-1">
          {label} <ArrowUpRight size={14} aria-hidden="true" />
        </Link>
      ))}
    </div>
  );
}

export default function Experience() {
  return (
    <>
      <PageIntro label="Work experience" title="Software, systems, and support." description="What I worked on at Twin Disc, across four roles at UW–Parkside, and in a university partnership with HARIBO." />
      <section className="shell section-pad space-y-5" aria-label="Employers and roles">
        {experience.map(({ employer, location, roles }, index) => (
          <article key={employer} className="card overflow-hidden">
            <header className={`border-b p-5 sm:px-7 sm:py-6 ${index === 0 ? "hero-surface border-steel bg-navy text-white" : "border-line bg-mist"}`}>
              <p className={`eyebrow ${index === 0 ? "text-mint" : "text-teal"}`}>0{index + 1} / {index === 2 ? "Industry partnership" : index === 0 ? "Corporate IT internship" : "University employment"}</p>
              <h2 className="mt-1.5 text-[27px] sm:text-[34px]">{employer}</h2>
              <p className={`mt-1.5 text-sm ${index === 0 ? "text-cloud" : "text-muted"}`}>{location}</p>
            </header>
            <div className="p-5 sm:p-7">
              {roles.length === 1 ? <RoleDetails role={roles[0]} /> : (
                <ol className="grid gap-5 sm:grid-cols-2">
                  {roles.map((role) => (
                    <li key={role.title} className="border-l-2 border-teal/45 pl-4 sm:pl-5">
                      <RoleDetails role={role} />
                    </li>
                  ))}
                </ol>
              )}
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
