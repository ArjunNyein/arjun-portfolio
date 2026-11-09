import type { Metadata } from "next";
import { PageIntro, Portrait, ResumeLink } from "@/components/site";
import { profile, skills } from "@/content/portfolio";

export const metadata: Metadata = {
  title: "About Me",
  description: "About Arjun Nyein, his Computer Science education at UW–Parkside, and the tools he uses to build practical software.",
};

export default function About() {
  return (
    <>
      <PageIntro label="About me" title="Hi, I’m Arjun." description="Software developer and Computer Science student at UW–Parkside." />
      <section className="bg-white">
        <div className="shell section-pad grid items-start gap-6 md:grid-cols-[minmax(220px,310px)_minmax(0,1fr)] md:gap-9">
          <Portrait />
          <div className="space-y-3">
            <h2 className="text-[28px] sm:text-[34px]">I like making useful tools.</h2>
            <p className="text-muted">
              At Twin Disc, I built software for manufacturing and business workflows. In campus IT, I help students, faculty, and staff troubleshoot the technology they use every day.
            </p>
            <p className="text-muted">
              I’m interested in full-stack development and data systems. I like working out where a process gets tedious, then building something that makes it easier to get through.
            </p>
            <div className="space-y-1 py-1">
              <p className="font-bold">{profile.degree}</p>
              <p className="text-sm text-muted">{profile.university}</p>
              <p className="eyebrow text-teal">Expected {profile.graduation} · GPA {profile.gpa}</p>
            </div>
            <ResumeLink />
          </div>
        </div>
      </section>
      <section className="shell section-pad" aria-labelledby="skills">
        <p className="eyebrow text-teal">Tools I’ve used</p>
        <h2 id="skills" className="mt-2 text-[28px] sm:text-[34px]">Technical skills</h2>
        <div className="mt-4 grid items-start gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map(({ title, items, note }) => (
            <article key={title} className={`card p-4 ${note ? "sm:col-span-2 lg:col-span-4" : ""}`}>
              <h3 className="font-sans text-base">{title}</h3>
              <p className="mt-1.5 text-muted">{items.join(" · ")}</p>
              {note && <p className="mt-2 text-sm text-muted">{note}</p>}
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
