import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, ChartNoAxesCombined, ClipboardCheck, Monitor, ShieldCheck } from "lucide-react";
import { PageIntro } from "@/components/site";
import { experience, type Role } from "@/content/portfolio";

export const metadata: Metadata = {
  title: "Work Experience",
  description: "Arjun Nyein’s work across Twin Disc, UW–Parkside campus technology and student support, and a HARIBO industry project.",
};

const internshipIcons = [Monitor, ShieldCheck, ClipboardCheck, ChartNoAxesCombined];

function RoleDetails({ role }: { role: Role }) {
  return (
    <div className="min-w-0">
      <h3 className="text-xl">{role.title}</h3>
      <p className="mt-1 text-sm font-medium text-muted">{role.dates}</p>
      {role.contributions.length > 0 && (
        <p className="mt-3 max-w-[72ch] text-muted">{role.contributions.join(" ")}</p>
      )}
      {role.highlights && (
        <div className="mt-5 grid gap-3.5 sm:grid-cols-2">
          {role.highlights.map(({ title, description, href }, index) => {
            const Icon = internshipIcons[index];
            return (
              <section key={title} className="border-t border-line py-4 sm:pr-5">
                <Icon size={24} className="mb-3 text-teal" aria-hidden="true" />
                <h4 className="text-xl">{title}</h4>
                <p className="mt-2 text-[15px] text-muted">{description}</p>
                {href && <Link href={href} aria-label={`Explore ${title}`} className="inline-link mt-1">Explore project <ArrowUpRight size={14} aria-hidden="true" /></Link>}
              </section>
            );
          })}
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
      <PageIntro label="Work experience" title="Where I’ve learned by doing." description="A mix of software development, campus IT, and helping people work with technology." />
      <section className="shell section-pad space-y-10" aria-label="Employers and roles">
        {experience.map(({ employer, location, roles }, index) => (
          <article key={employer} className={index === 0 ? "overflow-hidden rounded-2xl border border-line bg-white" : "border-t border-line"}>
            <header className={`border-b p-5 sm:px-7 sm:py-6 ${index === 0 ? "hero-surface border-steel bg-navy text-white" : "border-line"}`}>
              <p className={`eyebrow ${index === 0 ? "text-mint" : "text-teal"}`}>0{index + 1} / {index === 2 ? "Industry partnership" : index === 0 ? "Corporate IT internship" : "University employment"}</p>
              <h2 className="mt-1.5 text-[27px] sm:text-[34px]">{employer}</h2>
              <p className={`mt-1.5 text-sm ${index === 0 ? "text-cloud" : "text-muted"}`}>{location}</p>
            </header>
            <div className="p-5 sm:p-7">
              {roles.length === 1 ? <RoleDetails role={roles[0]} /> : (
                <ol className="ml-1 space-y-7 border-l border-line pl-5 sm:pl-7">
                  {roles.map((role) => (
                    <li key={role.title} className="relative before:absolute before:top-1 before:-left-[25px] before:size-[9px] before:rounded-full before:bg-accent sm:before:-left-[33px]">
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
