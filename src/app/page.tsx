import Link from "next/link";
import { projects } from "@/data/projects";
import { LiveStatus } from "@/components/LiveStatus";

export default function Home() {
  return (
    <>
      <section className="space-y-5">
        <h1 className="text-3xl font-semibold tracking-tight">
          I build backend systems and the tooling around them.
        </h1>
        <p className="text-lg leading-relaxed text-zinc-600">
          Software engineer in Fremont, CA. Currently at Western Allied
          Mechanical, where I built a multi-agent LLM service that cut proposal
          turnaround from two hours to fifteen minutes, and I own the internal
          data platform that replaced a pile of disconnected project tools.
        </p>
        <p className="leading-relaxed text-zinc-600">
          Before software I spent three years as a design engineer on
          commercial HVAC systems, which is where I learned to care about
          requirements, constraints, and things that have to keep working after
          they ship. I work mostly in TypeScript and Python, deploy to Azure and
          GCP at work, and run this site on a server I set up by hand.
        </p>
        <p className="text-sm text-zinc-500">
          Open to backend and full-stack roles.{" "}
          <a
            href="mailto:rushang.1992@gmail.com"
            className="underline decoration-zinc-300 underline-offset-4 hover:text-zinc-900"
          >
            rushang.1992@gmail.com
          </a>
          {" · "}
          <a
            href="https://linkedin.com/in/rushang-shah"
            className="underline decoration-zinc-300 underline-offset-4 hover:text-zinc-900"
          >
            LinkedIn
          </a>
        </p>
      </section>

      <section id="projects" className="mt-20">
        <div className="flex items-baseline justify-between">
          <h2 className="text-xl font-semibold">Projects</h2>
          <p className="text-sm text-zinc-500">
            Each one is deployed on this server. Status is checked live.
          </p>
        </div>

        <ul className="mt-6 divide-y divide-zinc-200 border-y border-zinc-200">
          {projects.map((p) => (
            <li key={p.slug} className="py-5">
              <div className="flex items-start justify-between gap-6">
                <div className="min-w-0">
                  <Link
                    href={`/projects/${p.slug}`}
                    className="font-medium hover:text-blue-700"
                  >
                    {p.name}
                  </Link>
                  <p className="mt-1 text-zinc-600">{p.tagline}</p>
                  <p className="mt-2 font-mono text-xs text-zinc-500">
                    {p.stack.join(", ")}
                  </p>
                </div>
                <div className="shrink-0 pt-1">
                  <LiveStatus status={p.status} liveUrl={p.liveUrl} />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
