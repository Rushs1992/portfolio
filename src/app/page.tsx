import Link from "next/link";
import { projects } from "@/data/projects";
import { Dot, LiveStatus } from "@/components/LiveStatus";

export default function Home() {
  return (
    <>
      <section className="grid gap-10 py-14 md:grid-cols-12 md:gap-6 md:py-16">
        <div className="flex flex-col gap-6 md:col-span-7">
          <p className="font-mono text-xs text-live">
            {"// backend · full-stack · self-hosted"}
          </p>
          <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight md:text-5xl">
            I build backend systems and the tooling around them.
          </h1>
          <p className="text-lg leading-relaxed text-mist-300">
            Software engineer in Fremont, CA. Currently at Western Allied
            Mechanical, where I built a multi-agent LLM service that cut
            proposal turnaround from two hours to fifteen minutes, and I own
            the internal data platform that replaced a pile of disconnected
            project tools.
          </p>
          <p className="leading-relaxed text-mist-400">
            Before software I spent three years as a design engineer on
            commercial HVAC systems, which is where I learned to care about
            requirements, constraints, and things that have to keep working
            after they ship. I work mostly in TypeScript and Python, deploy to
            Azure and GCP at work, and run this site on a server I set up by
            hand.
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-3">
            <a
              href="mailto:rushang.1992@gmail.com"
              className="inline-flex h-11 items-center rounded-md bg-mist-100 px-4.5 text-sm font-medium text-ink-950 hover:bg-white"
            >
              Email me
            </a>
            <a
              href="https://linkedin.com/in/rushang-shah"
              className="inline-flex h-11 items-center rounded-md border border-ink-600 px-4.5 text-sm font-medium hover:border-mist-400"
            >
              LinkedIn
            </a>
            <span className="font-mono text-xs text-mist-400 sm:pl-2">
              open to backend and full-stack roles
            </span>
          </div>
        </div>

        <aside className="self-start md:col-span-4 md:col-start-9">
          <Deployments />
        </aside>
      </section>

      <section id="projects" className="flex flex-col gap-5 pt-2">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
          <h2 className="text-[22px] font-semibold tracking-tight">Projects</h2>
          <p className="text-[13px] text-mist-400">
            Each one is deployed on this server. Write-ups cover the tradeoffs.
          </p>
        </div>
        <ul className="grid gap-5 md:grid-cols-2">
          {projects.map((p) => (
            <li
              key={p.slug}
              className="flex flex-col gap-3.5 rounded-[10px] border border-ink-700 bg-ink-900 p-6"
            >
              <div className="flex items-baseline justify-between gap-4">
                <Link
                  href={`/projects/${p.slug}`}
                  className="text-[19px] font-medium hover:text-live"
                >
                  {p.name}
                </Link>
                <LiveStatus status={p.status} liveUrl={p.liveUrl} />
              </div>
              <p className="text-sm leading-relaxed text-mist-300">
                {p.tagline}. {p.problem}
              </p>
              <ul className="flex flex-wrap gap-1.5 font-mono text-[11px] text-mist-300">
                {p.stack.map((s) => (
                  <li key={s} className="rounded bg-ink-800 px-2 py-1">
                    {s}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12 grid gap-6 border-t border-ink-700 pt-8 sm:grid-cols-3 sm:gap-5">
        <InfraCell
          label="Runtime"
          value="Docker"
          note="This site and every project run in containers."
        />
        <InfraCell
          label="Edge"
          value="Nginx"
          note="One reverse proxy in front of all subdomains."
        />
        <InfraCell
          label="Host"
          value="Single $12 VPS"
          note={
            <>
              Set up by hand. Source on{" "}
              <a
                href="https://github.com/Rushs1992/portfolio"
                className="text-mist-300 underline underline-offset-[3px] hover:text-mist-100"
              >
                GitHub
              </a>
              .
            </>
          }
        />
      </section>
    </>
  );
}

function Deployments() {
  return (
    <div className="flex flex-col overflow-hidden rounded-[10px] border border-ink-700 bg-ink-900">
      <div className="flex items-center justify-between border-b border-ink-700 px-4.5 py-3.5">
        <span className="text-[13px] font-semibold">Deployments</span>
        <span className="font-mono text-[11px] text-mist-400">
          checked live · every 60s
        </span>
      </div>
      <ul className="divide-y divide-ink-700 font-mono text-xs">
        <li className="flex items-center justify-between gap-4 px-4.5 py-3">
          <span>shahrushang.com</span>
          <Dot label="live" tone="up" />
        </li>
        {projects.map((p) => (
          <li
            key={p.slug}
            className="flex items-center justify-between gap-4 px-4.5 py-3"
          >
            <span className="truncate">{p.liveUrl.replace("https://", "")}</span>
            <LiveStatus status={p.status} liveUrl={p.liveUrl} />
          </li>
        ))}
      </ul>
      <div className="border-t border-ink-700 px-4.5 py-3 font-mono text-[11px] text-mist-400">
        docker · nginx · 1 vps · $12/mo
      </div>
    </div>
  );
}

function InfraCell({
  label,
  value,
  note,
}: {
  label: string;
  value: string;
  note: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-mist-400">
        {label}
      </span>
      <span className="text-lg font-medium">{value}</span>
      <span className="text-[13px] text-mist-400">{note}</span>
    </div>
  );
}
