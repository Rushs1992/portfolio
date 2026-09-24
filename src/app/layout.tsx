import type { Metadata } from "next";
import { Bodoni_Moda, Hanken_Grotesk } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const display = Bodoni_Moda({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-display",
});

const sans = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shahrushang.com"),
  title: {
    default: "Rushang Shah",
    template: "%s | Rushang Shah",
  },
  description:
    "Rushang Shah, software and solutions engineer in Fremont, CA. Backend systems, LLM services, and internal platforms. A self-hosted site that reads its own host live.",
  openGraph: {
    title: "Rushang Shah",
    description:
      "Software and solutions engineer. Backend systems, LLM services, and internal platforms, sized for the load they will actually see.",
    url: "https://shahrushang.com",
    siteName: "Rushang Shah",
    type: "website",
  },
};

const nav = [
  { href: "/#specification", label: "Specification", compact: false },
  { href: "/#movement", label: "Movement", compact: false },
  { href: "/#development", label: "In development", compact: false },
  { href: "/#contact", label: "Contact", compact: true },
];

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="bg-case-950 font-sans text-steel-100">
        <a
          href="#content"
          className="engraved absolute left-6 top-3 z-50 -translate-y-24 bg-case-950 px-3 py-2 text-brass-400 transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>
        <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 md:px-12">
          <header className="rule-draw flex h-16 items-center justify-between">
            <Link
              href="/"
              className="engraved py-2 text-steel-100 no-underline hover:text-brass-400"
            >
              Rushang Shah
            </Link>
            <nav aria-label="Sections" className="flex items-center gap-1 sm:gap-2">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`engraved px-2 py-2 no-underline hover:text-steel-100 sm:px-3 ${
                    item.compact ? "" : "hidden md:inline-block"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="/Rushang_Shah_Resume.pdf"
                className="engraved px-2 py-2 text-steel-100 no-underline hover:text-brass-400 sm:px-3"
              >
                Résumé <span className="text-steel-400">(PDF)</span>
              </a>
            </nav>
          </header>

          <main id="content" className="flex-1">
            {children}
          </main>

          <footer className="flex flex-col gap-3 border-t border-steel-700 py-8 sm:flex-row sm:items-center sm:justify-between">
            <span className="engraved">Rushang Shah · Fremont, CA</span>
            <a
              href="mailto:rushang.1992@gmail.com"
              className="inline-flex min-h-6 items-center text-[0.9375rem] text-steel-300 hover:text-brass-400"
            >
              rushang.1992@gmail.com
            </a>
          </footer>
        </div>
      </body>
    </html>
  );
}
