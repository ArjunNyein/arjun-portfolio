import type { Metadata } from "next";
import Image from "next/image";
import { ResumeLink } from "@/components/site";
import { profile, skills } from "@/content/portfolio";

export const metadata: Metadata = {
  title: "About Me",
  description: "About Arjun Nyein, his Computer Science education at UW–Parkside, and the tools he uses to build practical software.",
};

export default function About() {
  return (
    <>
      <section className="bg-mist">
        <div className="shell grid items-start gap-8 py-10 md:grid-cols-[minmax(240px,0.85fr)_minmax(0,1.5fr)] md:gap-12 lg:gap-16 lg:py-16">
          <div>
            <div className="relative aspect-[4/4.5] max-w-[420px] overflow-hidden rounded-2xl bg-panel ring-1 ring-ink/10">
              <Image src="/arjun-nyein.webp" alt="Arjun Nyein" fill preload sizes="(min-width: 1024px) 420px, (min-width: 768px) 34vw, (min-width: 460px) 420px, 90vw" className="object-cover object-[center_35%]" />
            </div>
          </div>
          <div>
            <p className="eyebrow text-teal">About Me</p>
            <h1 className="mt-2 text-[clamp(2.5rem,6vw,4.25rem)] tracking-tight">Hi, I’m Arjun.</h1>
            <div className="mt-4 max-w-[660px] space-y-3.5">
              <p>I’m studying Computer Science at the University of Wisconsin–Parkside, where I expect to graduate in May 2027.</p>
              <p>I enjoy figuring out how things work, spotting where a process could be simpler, and building software that helps. So far, that’s taken me from manufacturing dashboards and data reporting to web applications and campus IT support.</p>
              <p>At Twin Disc, I worked on internal applications for manufacturing and IT teams. At UW–Parkside, I help students, faculty, and staff with everyday technology issues. I’ve also supported programming labs and worked with the university’s Career Center.</p>
              <p>Those experiences taught me to pay attention to whether the people using a tool find it clear and useful. I’m particularly interested in full-stack development and data-driven applications. Outside of school and work, I enjoy lifting, hiking, and cooking.</p>
            </div>
            <div className="mt-6 border-l-2 border-teal pl-4">
              <h2 className="eyebrow font-normal text-teal">Education</h2>
              <p className="mt-1 font-bold">{profile.university}</p>
              <p>{profile.degree}</p>
              <p className="mt-1 text-sm text-muted">Expected {profile.graduation} · GPA {profile.gpa}</p>
            </div>
            <div className="mt-5"><ResumeLink /></div>
          </div>
        </div>
      </section>
      <section className="shell section-pad" aria-labelledby="skills">
        <p className="eyebrow text-teal">Tools I’ve used</p>
        <h2 id="skills" className="mt-2 text-[32px] sm:text-[42px]">Technical skills</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map(({ title, items, note }, index) => (
            <article key={title} className="card card-hover p-5 sm:p-6">
              <p className="eyebrow text-teal" aria-hidden="true">0{index + 1}</p>
              <h3 className="mt-2 text-xl">{title}</h3>
              <ul className="mt-3 flex flex-wrap gap-2" aria-label={title}>
                {items.map((item) => <li key={item} className="tag">{item}</li>)}
              </ul>
              {note && <p className="mt-3 text-sm text-muted">{note}</p>}
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
