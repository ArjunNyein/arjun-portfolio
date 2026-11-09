"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useRef, useState } from "react";
import { ResumeLink } from "@/components/site";
import { profile } from "@/content/portfolio";

const routes = [
  { href: "/about", label: "About Me" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const dark = pathname === "/";
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);

  const links = routes.map(({ href, label }) => {
    const current = pathname === href;
    const active = current || pathname.startsWith(`${href}/`);
    const style = active
      ? dark ? "bg-panel text-mint" : "bg-mist text-teal"
      : dark ? "text-cloud hover:bg-panel" : "text-ink hover:bg-mist";

    return (
      <Link
        key={href}
        href={href}
        onClick={() => setOpen(false)}
        aria-current={current ? "page" : active ? "location" : undefined}
        className={`nav-link relative inline-flex min-h-11 items-center rounded-md px-3 text-sm font-bold transition-colors ${style}`}
      >
        {label}
      </Link>
    );
  });

  return (
    <header
      className={dark ? "bg-navy text-white" : "border-b border-line bg-white text-ink"}
      onKeyDown={(event) => {
        if (open && event.key === "Escape") {
          setOpen(false);
          toggle.current?.focus();
        }
      }}
    >
      <div className="shell flex min-h-[68px] items-center justify-between gap-3 py-3">
        <Link href="/" onClick={() => { setOpen(false); if (pathname === "/") window.scrollTo(0, 0); }} className="font-display text-xl font-bold">{profile.name}</Link>
        <nav aria-label="Main navigation" className="hidden items-center gap-1 md:flex">
          {links}
          <div className="ml-2"><ResumeLink variant={dark ? "dark" : "outline"} /></div>
        </nav>
        <button
          ref={toggle}
          type="button"
          aria-controls="mobile-navigation"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className={`action md:hidden ${dark ? "border-steel text-cloud" : "border-line text-teal"}`}
        >
          {open ? "Close" : "Menu"}
          {open ? <X size={17} aria-hidden="true" /> : <Menu size={17} aria-hidden="true" />}
        </button>
      </div>
      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        hidden={!open}
        className={`shell border-t pb-4 pt-3 md:hidden ${dark ? "border-steel" : "border-line"}`}
      >
        <div className="grid gap-1">
          {links}
          <div className="mt-1"><ResumeLink variant={dark ? "dark" : "outline"} /></div>
        </div>
      </nav>
    </header>
  );
}
