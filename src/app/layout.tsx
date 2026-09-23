import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shahrushang.com"),
  title: {
    default: "Rushang Shah",
    template: "%s | Rushang Shah",
  },
  description:
    "Software engineer building backend and full-stack systems in Node, TypeScript and Python. Every project on this site runs on a server I set up myself.",
  openGraph: {
    title: "Rushang Shah",
    description:
      "Backend and full-stack engineer. Live projects, self-hosted, with write-ups on the tradeoffs.",
    url: "https://shahrushang.com",
    siteName: "Rushang Shah",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body className="bg-ink-950 font-sans text-mist-100 antialiased">
        <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 md:px-12">
          <header className="flex items-center justify-between border-b border-ink-700 py-6">
            <div className="flex items-baseline gap-3.5">
              <Link
                href="/"
                className="text-[15px] font-semibold hover:text-live"
              >
                Rushang Shah
              </Link>
              <span className="hidden font-mono text-xs text-mist-400 sm:inline">
                shahrushang.com
              </span>
            </div>
            <nav className="flex gap-5 font-mono text-[13px] text-mist-400 sm:gap-7">
              <Link href="/#projects" className="hover:text-mist-100">
                projects
              </Link>
              <a
                href="/Rushang_Shah_Resume.pdf"
                className="hover:text-mist-100"
              >
                resume
              </a>
              <a
                href="https://github.com/Rushs1992"
                className="hover:text-mist-100"
              >
                github
              </a>
            </nav>
          </header>

          <main className="flex-1 pb-16">{children}</main>

          <footer className="flex flex-col gap-2 border-t border-ink-700 py-6 font-mono text-xs text-mist-400 sm:flex-row sm:justify-between">
            <a
              href="mailto:rushang.1992@gmail.com"
              className="hover:text-mist-100"
            >
              rushang.1992@gmail.com
            </a>
            <span>Fremont, CA</span>
          </footer>
        </div>
      </body>
    </html>
  );
}
