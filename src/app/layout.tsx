import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "components/utility/ThemeProvider";
import type { Metadata } from "next";
import { LINKS } from "util/constants";
import { jbmono } from "util/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "mqryjqne",
  description: "mqryjqne's personal portfolio",
  applicationName: "mqryjqne",
  authors: [{ name: "mqryjqne", url: LINKS.GitRepo }],
  category: "Personal Portfolio",
  creator: "mqryjqne",
  keywords: [
    "krumbit",
    "krumb",
    "krum",
    "portfolio",
    "personal",
    "projects",
    "software",
    "development",
    "programming",
    "web",
    "app",
    "application",
    "website",
    "react",
    "nextjs",
    "typescript",
    "tailwindcss",
    "tailwind",
    "css",
    "html",
    "javascript",
    "js",
  ],
  metadataBase: new URL(LINKS.BaseURL),
  openGraph: {
    siteName: "mqryjqne",
    title: "mqryjqne",
    description: "mqryjqne's personal portfolio",
    type: "website",
    url: new URL(LINKS.BaseURL),
    images: [{ url: "/static/pfp.png", alt: "mqryjqne profile picture" }],
    locale: "en_US",
  },
  twitter: {
    title: "mqryjqne",
    description: "mqryjqne's personal portfolio",
    site: "@mqryjqne",
    card: "summary",
    creator: "@mqryjqne",
    images: [{ url: "/static/pfp.png", alt: "mqryjqne profile picture" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={jbmono.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
