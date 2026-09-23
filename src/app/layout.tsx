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
  weight: ["400"],
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
      <body className="bg-white text-zinc-900 antialiased">
        <div className="mx-auto max-w-2xl px-6">
          <header className="flex items-baseline justify-between py-10">
            <Link href="/" className="font-medium hover:text-blue-700">
              Rushang Shah
            </Link>
            <nav className="flex gap-5 text-sm text-zinc-600">
              <Link href="/#projects" className="hover:text-zinc-900">
                Projects
              </Link>
              <a
                href="/Rushang_Shah_Resume.pdf"
                className="hover:text-zinc-900"
              >
                Résumé
              </a>
              <a
                href="https://github.com/Rushs1992"
                className="hover:text-zinc-900"
              >
                GitHub
              </a>
            </nav>
          </header>

          <main className="pb-24">{children}</main>

          <footer className="border-t border-zinc-200 py-8 text-sm text-zinc-500">
            <p>
              This site and every project on it run in Docker behind Nginx on a
              single $12 VPS. Source on{" "}
              <a
                href="https://github.com/Rushs1992/portfolio"
                className="underline decoration-zinc-300 underline-offset-4 hover:text-zinc-900"
              >
                GitHub
              </a>
              .
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}
