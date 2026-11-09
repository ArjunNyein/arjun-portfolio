import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, BriefcaseBusiness, Building2, ChartNoAxesCombined, ClipboardCheck, Code2, Factory, GraduationCap, Headset, MapPin, UsersRound } from "lucide-react";
import { PageIntro } from "@/components/site";
import { SignalTrace } from "@/components/signal-trace";
import { ProjectArt } from "@/components/project-art";
import { experience, type Role } from "@/content/portfolio";

export const metadata: Metadata = {
  title: "Work Experience",
  description: "Arjun Nyein’s work across Twin Disc, UW–Parkside campus technology and student support, and a HARIBO industry project.",
};

const employerStyles = [
  { label: "Corporate IT internship", icon: Factory, accent: "text-mint" },
  { label: "University employment", icon: GraduationCap, accent: "text-cloud" },
  { label: "Industry partnership", icon: Building2, accent: "text-amber" },
];

const campusIcons = [Headset, BriefcaseBusiness, Code2, UsersRound];

function RoleHeading({ role }: { role: Role }) {
  return (
    <>
      <h3 className="text-xl">{role.title}</h3>
      <p className="mt-1 text-sm font-medium text-muted">{role.dates}</p>
    </>
  );
}

export default function Experience() {
  const internship = experience[0].roles[0];
  const reporting = experience[2].roles[0];

  return (
    <>
      <PageIntro label="Work experience" title="Where I’ve learned by doing." description="A mix of software development, campus IT, and helping people work with technology." />
      <section className="shell section-pad space-y-8" aria-label="Employers and roles">
        {experience.map(({ employer, location, roles }, index) => {
          const { label, icon: Icon, accent } = employerStyles[index];
          return (
            <article key={employer} className="card overflow-hidden">
              <header className="group hero-surface relative isolate flex items-start justify-between gap-4 border-b border-steel bg-navy p-5 text-white sm:px-7 sm:py-6">
                <div>
                  <p className={`eyebrow ${accent}`}>0{index + 1} / {label}</p>
                  <h2 className="mt-2 text-[27px] sm:text-[34px]">{employer}</h2>
                  <p className="mt-2 flex items-center gap-2 text-sm text-cloud"><MapPin size={15} aria-hidden="true" /> {location}</p>
                </div>
                <SignalTrace className={`absolute right-7 bottom-2 -z-10 hidden w-44 opacity-25 sm:block ${accent}`} />
                <Icon size={32} className={`mt-1 shrink-0 ${accent}`} aria-hidden="true" />
              </header>
              <div className="p-5 sm:p-7">
                {index === 0 && (
                  <>
                    <RoleHeading role={internship} />
                    <div className="mt-5 grid gap-4 md:grid-cols-2">
                      {internship.highlights?.map(({ title, description, href }, highlight) => (
                        <section key={title} className="card overflow-hidden bg-surface">
                          {highlight < 2 ? <ProjectArt id={highlight === 0 ? "manufacturing-dashboard" : "ip-threat-assessment"} /> : (
                            <div className="artboard bg-mist">
                              <div className="art-frame grid w-full max-w-xs gap-2 border-line bg-white p-4 text-sm text-ink">
                                {highlight === 2 ? <ClipboardCheck size={22} className="text-teal" aria-hidden="true" /> : <ChartNoAxesCombined size={22} className="text-teal" aria-hidden="true" />}
                                <p className="font-bold">{highlight === 2 ? "Submission → Approval → Progress" : "QlikView → Validate → Power BI"}</p>
                              </div>
                            </div>
                          )}
                          <div className="p-4 sm:p-5">
                            <h4 className="text-xl">{title}</h4>
                            <p className="mt-2 text-sm text-muted">{description}</p>
                            {href && <Link href={href} aria-label={`Explore ${title}`} className="inline-link mt-1">Explore project <ArrowUpRight size={14} aria-hidden="true" /></Link>}
                          </div>
                        </section>
                      ))}
                    </div>
                  </>
                )}
                {index === 1 && (
                  <ul className="grid gap-4 md:grid-cols-2">
                    {roles.map((role, position) => {
                      const RoleIcon = campusIcons[position];
                      return (
                        <li key={role.title} className="card bg-surface p-4 sm:p-5">
                          <div className="mb-3 flex size-10 items-center justify-center rounded-lg bg-mist text-teal"><RoleIcon size={21} aria-hidden="true" /></div>
                          <RoleHeading role={role} />
                          <p className="mt-3 text-sm text-muted">{role.contributions.join(" ")}</p>
                        </li>
                      );
                    })}
                  </ul>
                )}
                {index === 2 && (
                  <div className="card grid items-center overflow-hidden bg-surface md:grid-cols-2">
                    <ProjectArt id="haribo-reporting" />
                    <div className="p-4 sm:p-5">
                      <RoleHeading role={reporting} />
                      <p className="mt-3 text-sm text-muted">{reporting.contributions.join(" ")}</p>
                      <p className="mt-3 text-sm text-ink"><strong className="mr-2 inline-block rounded-md bg-sand px-2.5 py-1">~75%</strong> estimated reduction in report preparation time</p>
                      {reporting.links?.map(({ label, href }) => <Link key={href} href={href} className="inline-link mt-1">{label} <ArrowUpRight size={14} aria-hidden="true" /></Link>)}
                    </div>
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
}
