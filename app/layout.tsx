import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import "@fontsource-variable/inter/wght.css";
import "@fontsource-variable/space-grotesk/wght.css";
import "@fontsource/ibm-plex-mono/latin-400.css";
import { ApproachRevealProvider } from "@/components/approach-reveal-provider";
import { PointerRing } from "@/components/pointer-ring";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site";
import "./globals.css";

export const metadata: Metadata = {
  ...pageMetadata("Arjun Nyein | Software Developer", "Software projects across manufacturing, security, education, and business workflows.", "/"),
  metadataBase: new URL("https://arjun-portfolio-gray-five.vercel.app"),
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
        <ApproachRevealProvider>
          <main id="main-content" tabIndex={-1} className="flex-1">{children}</main>
        </ApproachRevealProvider>
        <SiteFooter />
        <PointerRing />
      </body>
    </html>
  );
}
