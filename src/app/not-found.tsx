import Link from "next/link";

export default function NotFound() {
  return (
    <section className="grid gap-8 py-24 md:py-32">
      <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.02] tracking-[-0.01em]">
        No such reference.
      </h1>
      <p className="max-w-[48ch] text-lg leading-relaxed text-steel-300">
        Nothing is filed at this address. The write-ups for work in development
        are not published yet.
      </p>
      <div className="flex flex-wrap gap-3">
        <Link
          href="/"
          className="command bg-steel-100 text-case-950 no-underline hover:bg-white"
        >
          Back to the specification
        </Link>
        <a
          href="mailto:rushang.1992@gmail.com"
          className="command border border-steel-600 text-steel-100 hover:border-brass-400"
        >
          Email me
        </a>
      </div>
    </section>
  );
}
