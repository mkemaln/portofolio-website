import type { Metadata, Viewport } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/sidebar";
import {
  ThemeProvider,
  themeInitScript,
} from "@/components/theme-provider";
import { getCopyrightYear } from "@/lib/copyright";
import { site } from "@/lib/site";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} — Portfolio`,
    template: `%s — ${site.name}`,
  },
  description: site.headline,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const year = await getCopyrightYear();

  return (
    <html
      lang="en"
      data-theme="light"
      suppressHydrationWarning
      className={`${jetbrainsMono.variable} h-full`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-full">
        <ThemeProvider>
          <div className="min-h-screen bg-bg">
            <Sidebar year={year} />
            {/*
              The sidebar is fixed, so the content column is offset by its
              width on large screens. This is the only scrollable region.
            */}
            <main className="min-h-screen pt-[var(--header-height)] lg:pl-[400px] lg:pt-0">
              <div className="scroll-region flex min-h-[calc(100vh-var(--header-height))] flex-col gap-[80px] px-[24px] py-[48px] sm:gap-[110px] lg:min-h-screen lg:px-[72px] lg:py-[72px]">
                {children}
              </div>
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
