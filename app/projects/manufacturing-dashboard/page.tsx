import { pageMetadata } from "@/lib/metadata";
import Link from "next/link";
import { ArrowDown, ArrowLeft, ArrowRight } from "lucide-react";
import { dashboardWorkflow } from "@/content/portfolio";

export const metadata = pageMetadata(
  "Manufacturing Dashboard Case Study",
  "How an IIS-hosted dashboard turns structured CSV data into automatically refreshed production views.",
  "/projects/manufacturing-dashboard",
);

export default function ManufacturingDashboard() {
  return (
    <article>
      <header className="bg-navy text-white">
        <div className="shell py-7 sm:py-10">
          <Link href="/projects" className="inline-link text-mint">
            <ArrowLeft size={15} aria-hidden="true" /> All technical projects
          </Link>
          <p className="eyebrow mt-2 text-mint">Twin Disc / Case study 01</p>
          <h1 className="mt-2 text-[clamp(2.5rem,6vw,3.8125rem)]">Manufacturing Dashboard</h1>
          <p className="mt-3 text-cloud sm:text-[19px]">An automatically refreshing production view for the shop floor.</p>
        </div>
      </header>
      <div className="bg-white">
        <div className="shell section-pad space-y-6">
          <section className="max-w-[870px] space-y-2">
            <p className="eyebrow text-teal">01 / Problem</p>
            <h2 className="text-[28px] sm:text-[34px]">The displays depended on manual updates</h2>
            <p className="text-muted">Production information was already available in spreadsheets. The challenge was getting it onto shared displays without someone refreshing those displays by hand.</p>
          </section>
          <section className="max-w-[870px] space-y-2">
            <p className="eyebrow text-teal">02 / My role</p>
            <h2 className="text-[28px] sm:text-[34px]">I built and deployed the dashboard</h2>
            <p className="text-muted">I built the browser interface, connected it to the structured CSV feed, and deployed the application on IIS. JavaScript handles the refresh cycle.</p>
          </section>
          <section className="space-y-2">
            <p className="eyebrow text-teal">Implementation</p>
            <h2 className="text-[28px] sm:text-[34px]">Technology stack</h2>
            <p className="text-muted">HTML · CSS · JavaScript · IIS · CSV data feeds</p>
          </section>
          <figure className="rounded-[10px] border border-line bg-mist p-4 sm:p-5">
            <p className="eyebrow text-teal">03 / Conceptual workflow</p>
            <h2 className="mt-2 text-[27px] sm:text-[32px]">From production data to the shop floor</h2>
            <ol className="mt-3 grid gap-6 md:grid-cols-4 md:gap-7">
              {dashboardWorkflow.map(({ title, description }, index) => (
                <li key={title} className="relative min-w-0 rounded-md bg-white p-3">
                  <p className="eyebrow text-teal" aria-hidden="true">0{index + 1}</p>
                  <h3 className="mt-1.5 font-sans text-base">{title}</h3>
                  <p className="mt-1.5 text-sm text-muted">{description}</p>
                  {index < dashboardWorkflow.length - 1 && (
                    <>
                      <ArrowDown className="absolute -bottom-5 left-3 text-teal md:hidden" size={16} aria-hidden="true" />
                      <ArrowRight className="absolute top-3 -right-[22px] hidden text-teal md:block" size={16} aria-hidden="true" />
                    </>
                  )}
                </li>
              ))}
            </ol>
            <figcaption className="mt-3 text-xs leading-relaxed text-muted">
              Simplified illustration. Internal data sources and system screens are omitted.
            </figcaption>
          </figure>
          <section className="max-w-[870px] space-y-2">
            <p className="eyebrow text-teal">04 / Results</p>
            <h2 className="text-[28px] sm:text-[34px]">Production views stay current</h2>
            <p className="text-muted">The dashboard replaced manually updated Excel production displays for 150+ shop-floor employees. Employees can check current production information while the dashboard refreshes the views every three minutes.</p>
          </section>
          <Link href="/projects" className="inline-link"><ArrowLeft size={15} aria-hidden="true" /> Back to projects</Link>
        </div>
      </div>
    </article>
  );
}
