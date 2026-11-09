import Link from "next/link";
import { ArrowUpRight, Download } from "lucide-react";
import { profile } from "@/content/portfolio";

export function ResumeLink({ variant = "primary" }: { variant?: "primary" | "dark" | "outline" }) {
  const styles = {
    primary: "border-teal bg-teal text-white hover:bg-ink",
    dark: "border-steel text-cloud hover:bg-panel hover:text-white",
    outline: "border-line text-teal hover:bg-mist",
  };

  return (
    <a className={`action ${styles[variant]}`} href={profile.resume} download>
      <Download size={16} aria-hidden="true" />
      Download résumé
    </a>
  );
}

export function SiteFooter() {
  const links = [
    { label: "GitHub", href: profile.github },
    { label: "LinkedIn", href: profile.linkedin },
    { label: "Email", href: `mailto:${profile.email}` },
  ];

  return (
    <footer id="contact" className="bg-navy text-cloud">
      <div className="shell flex flex-col gap-2 py-6 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
        <div>
          <Link href="/" className="font-display text-lg font-bold text-white">{profile.name}</Link>
          <p className="mt-1 text-sm">Software developer · UW–Parkside · {profile.graduation}</p>
        </div>
        <nav aria-label="Contact links" className="flex flex-wrap gap-x-5">
          {links.map(({ label, href }) => (
            <a key={label} href={href} className="inline-link text-mint">
              {label} <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}

export function PageIntro({ label, title, description }: { label: string; title: string; description: string }) {
  return (
    <section className="bg-mist">
      <div className="shell section-pad space-y-2.5">
        <p className="eyebrow text-teal">{label}</p>
        <h1 className="max-w-[790px] text-[clamp(2.25rem,5vw,3.3125rem)]">{title}</h1>
        <p className="max-w-[790px] text-muted sm:text-[17px]">{description}</p>
      </div>
    </section>
  );
}

export function Portrait({ compact = false }: { compact?: boolean }) {
  return (
    <div
      role="img"
      aria-label="Professional headshot placeholder for Arjun Nyein"
      className={compact
        ? "grid size-11 shrink-0 place-items-center rounded-md border border-steel bg-panel font-display text-base font-bold text-mint"
        : "card flex min-h-52 flex-col items-center justify-center gap-2 bg-mist px-4 py-8 text-center md:min-h-[270px]"}
    >
      <span aria-hidden="true" className={compact ? undefined : "font-display text-6xl font-bold sm:text-7xl"}>AN</span>
      {!compact && <span aria-hidden="true" className="eyebrow text-teal">Professional headshot placeholder</span>}
    </div>
  );
}
