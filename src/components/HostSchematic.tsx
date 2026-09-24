import { projects } from "@/data/projects";

/**
 * The one built movement, drawn as a schematic: inbound traffic, the proxy,
 * and every container on the host. Units in development are dashed. Hairlines
 * are the connectors; no imagery is invented.
 */
export function HostSchematic() {
  return (
    <div className="plate p-6 md:p-7">
      <div className="flex items-baseline justify-between gap-4">
        <span className="engraved">Single host</span>
        <span className="engraved text-steel-400">VPS · $12 / month</span>
      </div>

      <div className="mt-6 grid gap-0 md:grid-cols-[8.5rem_2.5rem_8.5rem_2.5rem_minmax(0,1fr)] md:items-center">
        <Unit label="Inbound" detail=":443" />
        <Connector />
        <Unit label="Nginx" detail="proxy" />
        <Connector />

        <ul className="grid min-w-0 gap-2" aria-label="Host layout: one running container, four planned">
          <li className="flex min-w-0 flex-col items-start gap-1 border border-brass-600 px-4 py-3 sm:flex-row sm:items-center sm:gap-3">
            <span className="flex min-w-0 items-center gap-3">
              <span aria-hidden className="h-2 w-2 shrink-0 rounded-full bg-brass-400" />
              <span className="truncate text-[0.9375rem] font-medium text-steel-100">shahrushang.com</span>
            </span>
            <span className="engraved shrink-0 whitespace-nowrap pl-5 text-brass-400 sm:ml-auto sm:pl-0">Running</span>
          </li>
          {projects.map((p) => (
            <li
              key={p.slug}
              className="flex min-w-0 flex-col items-start gap-1 border border-dashed border-steel-600 px-4 py-3 sm:flex-row sm:items-center sm:gap-3"
            >
              <span className="flex min-w-0 items-center gap-3">
                <span aria-hidden className="h-2 w-2 shrink-0 rounded-full border border-steel-600" />
                <span className="truncate text-[0.9375rem] text-steel-300">
                  {p.liveUrl.replace("https://", "")}
                </span>
              </span>
              <span className="engraved shrink-0 whitespace-nowrap pl-5 sm:ml-auto sm:pl-0">In development</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Unit({ label, detail }: { label: string; detail: string }) {
  return (
    <div className="flex flex-col justify-center gap-1 border border-steel-600 px-4 py-3">
      <span className="text-[0.9375rem] font-medium text-steel-100">{label}</span>
      <span className="engraved whitespace-nowrap">{detail}</span>
    </div>
  );
}

function Connector() {
  return (
    <div aria-hidden className="relative h-8 md:h-full md:min-h-16">
      {/* vertical on phones, horizontal from md up */}
      <span className="absolute left-1/2 top-0 h-full w-px bg-steel-600 md:hidden" />
      <span className="absolute left-0 top-1/2 hidden h-px w-full bg-steel-600 md:block" />
      <span className="absolute bottom-0 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rotate-45 border-b border-r border-steel-400 md:hidden" />
      <span className="absolute right-0 top-1/2 hidden h-1.5 w-1.5 -translate-y-1/2 -rotate-45 border-b border-r border-steel-400 md:block" />
    </div>
  );
}
