import type { Metadata } from "next";
import Image from "next/image";
import { CheckCheck, Code2, Compass, Dumbbell, Mountain, Sparkles, Utensils } from "lucide-react";
import { ResumeLink } from "@/components/site";
import { profile, toolbox } from "@/content/portfolio";

export const metadata: Metadata = {
  title: "About Me",
  description: "Meet Arjun Nyein, a Computer Science student at UW–Parkside. Learn how he works and what he enjoys outside technology.",
};

const approach = [
  { icon: Compass, title: "Understand the problem", text: "I like learning how people currently do things before deciding what needs to change." },
  { icon: Code2, title: "Build something useful", text: "I focus on making applications understandable and practical for the people who will use them." },
  { icon: CheckCheck, title: "Check the details", text: "I test my work, validate information, and make sure the finished result does what it should." },
];

export default function About() {
  return (
    <>
      <section className="bg-mist">
        <div className="shell grid items-start gap-8 py-12 md:grid-cols-[1.5fr_1fr] lg:gap-16 lg:py-18">
          <div>
            <p className="eyebrow text-teal">About Me</p>
            <h1 className="mt-2 text-[clamp(2.75rem,7vw,5rem)] tracking-tight">Hi, I’m Arjun.</h1>
            <div className="mt-5 max-w-[650px] space-y-3.5 sm:text-lg">
              <p>I’m studying Computer Science at UW–Parkside and graduating in May 2027.</p>
              <p>I enjoy building tools that make everyday work simpler. So far, that has taken me from campus IT to software development and data projects during my internship at Twin Disc.</p>
              <p>I like getting close to a problem, understanding how people actually work, and building something that makes their day a little easier.</p>
            </div>
          </div>
          <div className="space-y-5">
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
        <ol className="mt-6 grid gap-6 md:grid-cols-3">
          {approach.map(({ icon: Icon, title, text }, index) => (
            <li key={title} className="border-t border-line pt-5">
              <div className="flex items-center justify-between"><Icon className="text-teal" size={26} aria-hidden="true" /> <span className="eyebrow text-teal" aria-hidden="true">0{index + 1}</span></div>
              <h3 className="mt-4 text-[23px]">{title}</h3>
              <p className="mt-2 text-muted">{text}</p>
            </li>
          ))}
        </ol>
      </section>
      <section className="bg-sand" aria-labelledby="outside">
        <div className="shell grid items-center gap-5 py-8 sm:grid-cols-[1fr_auto]">
          <div>
            <h2 id="outside" className="text-2xl">Outside of technology</h2>
            <p className="mt-2">Outside of school and projects, I’m usually lifting, cooking, or getting outside for a run or a hike.</p>
          </div>
          <div className="flex gap-5 text-teal" aria-hidden="true"><Dumbbell size={25} /><Utensils size={24} /><Mountain size={25} /></div>
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
