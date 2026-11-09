import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Dumbbell, Wrench, Sparkles, Terminal, Utensils } from "lucide-react";
import { ApproachCards } from "@/components/approach-cards";
import { SignalTrace } from "@/components/signal-trace";
import { ResumeLink } from "@/components/site";
import { profile, toolbox } from "@/content/portfolio";

export const metadata: Metadata = {
  title: "About Me",
  description: "Meet Arjun Nyein, a Computer Science student at UW–Parkside. Learn how he works and what he enjoys outside technology.",
};

export default function About() {
  return (
    <>
      <section className="bg-mist">
        <div className="shell grid items-start gap-8 py-12 md:grid-cols-[1.5fr_1fr] lg:gap-16 lg:py-18">
          <div>
            <p className="eyebrow text-teal">About Me</p>
            <h1 className="mt-2 text-[clamp(2.75rem,7vw,5rem)] tracking-tight">Hi, I’m Arjun.</h1>
            <div className="mt-5 max-w-[650px] space-y-3.5 sm:text-lg">
              <p>I’m studying Computer Science at UW–Parkside.</p>
              <p>I enjoy building tools that make everyday work simpler. So far, that has taken me from campus IT to software development and data projects during my internship at Twin Disc.</p>
              <p>I’m drawn to full-stack development and projects where data helps solve a practical problem. I like learning a new tool by putting it to work on something useful.</p>
            </div>
            <section aria-labelledby="welcome" className="group hero-surface relative mt-7 isolate overflow-hidden rounded-2xl border border-steel bg-navy p-5 text-white sm:p-7">
              <div className="pointer-events-none absolute top-5 right-6 hidden select-none lg:block" aria-hidden="true">
                <div className="grid size-14 rotate-6 place-items-center rounded-xl border border-mint/30 bg-panel text-mint/75 motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:-translate-y-1 motion-safe:group-hover:rotate-0 motion-safe:group-focus-within:rotate-0">
                  <Terminal size={25} />
                </div>
                <SignalTrace className="absolute top-7 right-9 w-28 text-mint/50" />
              </div>
              <p className="eyebrow text-mint">Glad you’re here</p>
              <h2 id="welcome" className="mt-2 text-[26px] sm:text-[30px] lg:pr-20">Welcome to my corner of the internet.</h2>
              <p className="mt-3 max-w-[42ch] text-sm text-cloud sm:text-base">Take a look around and see what I’ve been building.</p>
              <div className="mt-5 flex flex-wrap gap-2.5">
                <Link href="/projects" className="action border-mint bg-mint text-navy hover:border-white hover:bg-white">
                  Explore Projects <ArrowRight size={16} aria-hidden="true" />
                </Link>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Connect on LinkedIn (opens in a new tab)" className="action border-steel bg-panel text-white hover:border-mint hover:text-mint">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                    <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM8.02 18.75H5.07V9.2h2.95v9.55ZM6.55 7.9a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42Zm12.2 10.85H15.8V14.1c0-1.1-.02-2.53-1.54-2.53-1.54 0-1.78 1.2-1.78 2.45v4.73H9.53V9.2h2.83v1.31h.04a3.1 3.1 0 0 1 2.8-1.54c3 0 3.55 1.97 3.55 4.53v5.25Z" />
                  </svg>
                  Connect on LinkedIn
                </a>
              </div>
            </section>
          </div>
          <div className="group space-y-5">
            <div className="relative max-w-[366px]">
              <SignalTrace className="absolute -top-6 -right-7 hidden w-36 text-accent/60 lg:block" />
              <div className="relative aspect-[4/4.45] w-full max-w-[366px] overflow-hidden rounded-[1.75rem] bg-panel">
                <Image
                  src="/arjun-nyein.webp"
                  alt="Arjun Nyein"
                  fill
                  preload
                  sizes="(min-width: 406px) 366px, calc(100vw - 40px)"
                  className="object-cover object-[center_32%]"
                />
              </div>
            </div>
            <aside className="rounded-2xl border border-white bg-white/70 p-6 sm:p-8">
              <h2 className="eyebrow font-normal text-teal">Education</h2>
              <p className="mt-3 font-display text-2xl font-bold">{profile.university}</p>
              <p className="mt-2">{profile.degree}</p>
              <p className="mt-2 text-sm text-muted">Expected {profile.graduation} · GPA {profile.gpa}</p>
              <div className="mt-5"><ResumeLink /></div>
            </aside>
          </div>
        </div>
      </section>
      <section className="shell py-11 sm:py-16" aria-labelledby="approach">
        <h2 id="approach" className="text-[32px] sm:text-[42px]">A little about how I work</h2>
        <ApproachCards />
      </section>
      <section className="bg-sand" aria-labelledby="outside">
        <div className="shell grid items-center gap-5 py-8 sm:grid-cols-[1fr_auto]">
          <div>
            <h2 id="outside" className="text-2xl">Outside of technology</h2>
            <p className="mt-2">I’m a gym rat, and outside of technology I enjoy cooking and working on my car.</p>
          </div>
          <div className="flex flex-wrap gap-2.5" aria-hidden="true">
            {[{ icon: Dumbbell, label: "Fitness" }, { icon: Utensils, label: "Cooking" }, { icon: Wrench, label: "Car work" }].map(({ icon: Icon, label }) => (
              <div key={label} className="hobby-tile grid min-w-20 justify-items-center gap-2 rounded-xl border border-amber/40 bg-white/65 px-3 py-3 text-xs font-semibold text-ink">
                <Icon className="text-teal" size={22} />{label}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="shell py-11 sm:py-16" aria-labelledby="toolbox">
        <h2 id="toolbox" className="text-[32px] sm:text-[42px]">My toolbox</h2>
        <ul className="mt-5 flex max-w-[850px] flex-wrap gap-2.5" aria-label="Selected technologies">
          {toolbox.map((tool) => <li key={tool} className="tag px-3 py-2 text-sm">{tool}</li>)}
        </ul>
        <div className="mt-7 flex max-w-[780px] gap-3 rounded-xl bg-mist p-4 sm:p-5">
          <Sparkles className="mt-0.5 shrink-0 text-teal" size={20} aria-hidden="true" />
          <div><h3 className="text-lg">AI-assisted development</h3><p className="mt-1 text-sm text-muted">I use tools like ChatGPT, Codex, Claude, and Microsoft Copilot to brainstorm ideas, work through bugs, and review my code. I treat their suggestions as a starting point, then check the changes and test the result myself.</p></div>
        </div>
      </section>
    </>
  );
}
