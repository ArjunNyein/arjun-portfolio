import type { Metadata } from "next";
import "@fontsource-variable/inter/wght.css";
import "@fontsource-variable/space-grotesk/wght.css";
import "@fontsource/ibm-plex-mono/latin-400.css";
import { PointerRing } from "@/components/pointer-ring";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Arjun Nyein | Software Developer", template: "%s | Arjun Nyein" },
  description: "Arjun Nyein is a Computer Science student and software developer building practical applications for manufacturing, IT, and business workflows.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="flex min-h-dvh flex-col">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-20 focus:rounded focus:bg-white focus:p-3 focus:font-bold focus:text-teal">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main-content" tabIndex={-1} className="flex-1">{children}</main>
        <SiteFooter />
        <PointerRing />
      </body>
    </html>
  );
}
