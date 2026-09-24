import { projects } from "@/data/projects";
import { readHealth } from "@/lib/health";
import { PowerReserve } from "@/components/PowerReserve";
import { HostSchematic } from "@/components/HostSchematic";

// Every number on this page is read from the host at request time.
export const dynamic = "force-dynamic";

export default function Home() {
  const health = readHealth();
  const runningDays = Math.floor(health.uptime / 86_400);
  const inDevelopment = projects.filter((p) => p.status !== "live");

  return (
    <>
      {/* Cover */}
      <section
        aria-labelledby="name"
        className="grid gap-12 pt-14 pb-12 md:grid-cols-12 md:gap-8 md:pt-24 md:pb-16 lg:gap-12"
      >
        <div className="flex flex-col gap-8 md:col-span-7">
          <h1
            id="name"
            className="font-display text-[clamp(3.25rem,7vw,6rem)] leading-[0.98] tracking-[-0.015em] text-steel-100"
          >
            Rushang Shah
          </h1>
          <p className="max-w-[30ch] font-display text-[clamp(1.375rem,2.2vw,1.875rem)] italic leading-[1.3] text-steel-300">
            Software and solutions engineer. I build the backend systems, LLM
            services, and internal platforms a business runs on, and I size
            them for the load they will actually see.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="mailto:rushang.1992@gmail.com"
              className="command bg-steel-100 text-case-950 hover:bg-white"
            >
              Email me
            </a>
            <a
              href="/Rushang_Shah_Resume.pdf"
              className="command border border-steel-600 text-steel-100 hover:border-brass-400"
            >
              Résumé (PDF)
            </a>
            <a
              href="https://linkedin.com/in/rushang-shah"
              rel="me noopener"
              className="command border border-steel-600 text-steel-100 hover:border-brass-400"
            >
              LinkedIn
            </a>
          </div>
          <p className="text-[0.9375rem] leading-relaxed text-steel-300">
            Open to software, solutions, and backend engineering roles.
            Fremont, CA. Currently at Western Allied Mechanical.
          </p>
        </div>

        <div className="md:col-span-5">
          <PowerReserve initial={health} />
        </div>

        <p className="engraved rule-draw-top pt-5 md:col-span-12">
          1 movement running{runningDays > 0 ? ` for ${runningDays} ${runningDays === 1 ? "day" : "days"}` : ""} ·{" "}
          {inDevelopment.length} references in development · every number on
          this page is read from the host that serves it
        </p>
      </section>

      {/* Specification */}
      <section
        id="specification"
        aria-labelledby="specification-title"
        className="scroll-mt-20 pt-8 pb-16 md:pt-12 md:pb-24"
      >
        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          <h2
            id="specification-title"
            className="font-display text-[clamp(2rem,3.5vw,2.75rem)] leading-[1.05] tracking-[-0.01em] md:col-span-4"
          >
            Specification
          </h2>
          <dl className="divide-y divide-steel-700 border-y border-steel-700 md:col-span-8">
            <SpecRow term="Functions">
              Software and solutions engineering: backend systems, APIs, data
              platforms, LLM orchestration, and the internal tooling that turns
              a business problem into something that ships.
            </SpecRow>
            <SpecRow term="Materials" figure="6">
              TypeScript, Python, Node, PostgreSQL, Redis, Docker.
            </SpecRow>
            <SpecRow term="Deployment" figure="1 VPS · $12 / mo">
              Azure and GCP at work. This site runs on a single VPS I set up by
              hand.
            </SpecRow>
            <SpecRow term="Current duty" figure="2 h → 15 min">
              Western Allied Mechanical. Built a multi-agent LLM service that
              cut proposal turnaround from two hours to fifteen minutes. Own the
              internal data platform that replaced a set of disconnected
              project tools. Solutions work end to end: find the bottleneck,
              design the system, ship it, keep it running.
            </SpecRow>
            <SpecRow term="Origin" figure="3 yr">
              Started as a mechanical design engineer. Three years of
              requirements, physical constraints, and equipment that had to
              keep working after handoff. Software got the same instinct.
            </SpecRow>
            <SpecRow term="Condition">
              Open to software, solutions, and backend engineering roles.
              Fremont, CA.
            </SpecRow>
          </dl>
        </div>
      </section>

      {/* Movement */}
      <section
        id="movement"
        aria-labelledby="movement-title"
        className="scroll-mt-20 border-t border-steel-700 py-16 md:py-24"
      >
        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          <div className="flex flex-col gap-4 md:col-span-4">
            <h2
              id="movement-title"
              className="font-display text-[clamp(2rem,3.5vw,2.75rem)] leading-[1.05] tracking-[-0.01em]"
            >
              Movement
            </h2>
            <p className="max-w-[42ch] text-[1.0625rem] leading-relaxed text-steel-300">
              One built work, running: this site. Everything it reports about
              itself comes from the host that serves it, not from a badge.
            </p>
          </div>
          <div className="flex flex-col gap-8 md:col-span-8">
            <HostSchematic />
            <dl className="divide-y divide-steel-700 border-y border-steel-700">
              <SpecRow term="Reference">shahrushang.com</SpecRow>
              <SpecRow term="Structure">
                Docker containers behind one Nginx reverse proxy. Next.js 16,
                TypeScript.
              </SpecRow>
              <SpecRow term="Host" figure="$12 / mo">
                Single VPS, $12 a month, set up by hand. Running{" "}
                {runningDays > 0
                  ? `for ${runningDays} ${runningDays === 1 ? "day" : "days"}`
                  : "since today"}
                .
              </SpecRow>
              <SpecRow term="Readings" figure="60 s">
                <a
                  href="/api/health"
                  className="text-steel-100 hover:text-brass-400"
                >
                  Read the health endpoint
                </a>
                <span className="text-steel-400"> · polled every sixty seconds</span>
              </SpecRow>
              <SpecRow term="Source">
                <a
                  href="https://github.com/Rushs1992/portfolio"
                  rel="noopener"
                  className="text-steel-100 hover:text-brass-400"
                >
                  github.com/Rushs1992/portfolio
                </a>
              </SpecRow>
            </dl>
          </div>
        </div>
      </section>

      {/* In development */}
      <section
        id="development"
        aria-labelledby="development-title"
        className="scroll-mt-20 border-t border-steel-700 py-16 md:py-24"
      >
        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          <div className="flex flex-col gap-4 md:col-span-4">
            <h2
              id="development-title"
              className="font-display text-[clamp(2rem,3.5vw,2.75rem)] leading-[1.05] tracking-[-0.01em]"
            >
              In development
            </h2>
            <p className="max-w-[42ch] text-[1.0625rem] leading-relaxed text-steel-300">
              Four references in design. None is running yet, so none is listed
              as running. Each will be commissioned on this host with a
              write-up of the tradeoffs.
            </p>
          </div>
          <ul className="divide-y divide-steel-700 border-y border-steel-700 md:col-span-8">
            {inDevelopment.map((p) => (
              <li
                key={p.slug}
                className="grid gap-2 py-5 md:grid-cols-[11rem_1fr] md:gap-8"
              >
                <div className="flex flex-col gap-1">
                  <span className="text-[1.0625rem] font-medium text-steel-100">
                    {p.name}
                  </span>
                  <span className="engraved">In development</span>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="max-w-[60ch] text-[1.0625rem] leading-relaxed text-steel-300">
                    {p.plain}
                  </p>
                  <p className="text-[0.9375rem] text-steel-400">
                    {p.stack.join(" · ")}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        aria-labelledby="contact-title"
        className="scroll-mt-20 border-t border-steel-700 py-16 md:py-24"
      >
        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          <h2
            id="contact-title"
            className="font-display text-[clamp(2rem,3.5vw,2.75rem)] leading-[1.05] tracking-[-0.01em] md:col-span-4"
          >
            Contact
          </h2>
          <dl className="divide-y divide-steel-700 border-y border-steel-700 md:col-span-8">
            <SpecRow term="Email">
              <a
                href="mailto:rushang.1992@gmail.com"
                className="text-steel-100 hover:text-brass-400"
              >
                rushang.1992@gmail.com
              </a>
            </SpecRow>
            <SpecRow term="LinkedIn">
              <a
                href="https://linkedin.com/in/rushang-shah"
                rel="me noopener"
                className="text-steel-100 hover:text-brass-400"
              >
                linkedin.com/in/rushang-shah
              </a>
            </SpecRow>
            <SpecRow term="GitHub">
              <a
                href="https://github.com/Rushs1992"
                rel="me noopener"
                className="text-steel-100 hover:text-brass-400"
              >
                github.com/Rushs1992
              </a>
            </SpecRow>
            <SpecRow term="Résumé">
              <a
                href="/Rushang_Shah_Resume.pdf"
                className="text-steel-100 hover:text-brass-400"
              >
                Rushang_Shah_Resume.pdf
              </a>
            </SpecRow>
            <SpecRow term="Location">Fremont, CA</SpecRow>
          </dl>
        </div>
      </section>
    </>
  );
}

function SpecRow({
  term,
  figure,
  children,
}: {
  term: string;
  /** The rating as a number, right-aligned in tabular figures. */
  figure?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-[1fr_auto] gap-x-4 gap-y-1.5 py-5 md:grid-cols-[11rem_1fr_auto] md:gap-8">
      <dt className="engraved col-start-1 row-start-1 pt-1">{term}</dt>
      <dd className="col-span-2 max-w-[62ch] text-[1.0625rem] leading-relaxed text-steel-300 md:col-span-1 md:col-start-2 md:row-start-1">
        {children}
      </dd>
      {figure ? (
        <dd className="col-start-2 row-start-1 whitespace-nowrap text-right text-[1.0625rem] leading-relaxed text-steel-100 md:col-start-3 md:min-w-[7rem]">
          {figure}
        </dd>
      ) : null}
    </div>
  );
}
