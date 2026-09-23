import type { ProjectStatus } from "@/data/projects";

type Props = {
  status: ProjectStatus;
  liveUrl: string;
};

// Renders on the server. For live projects it hits /health with a short
// timeout; Next caches the result for 60s so visitors don't hammer the APIs.
export async function LiveStatus({ status, liveUrl }: Props) {
  if (status === "planned") return <Dot label="coming soon" tone="idle" />;
  if (status === "building") return <Dot label="in progress" tone="idle" />;

  let up = false;
  try {
    const res = await fetch(`${liveUrl}/health`, {
      signal: AbortSignal.timeout(2000),
      next: { revalidate: 60 },
    });
    up = res.ok;
  } catch {
    up = false;
  }

  return up ? (
    <Dot label="live" tone="up" />
  ) : (
    <Dot label="offline" tone="down" />
  );
}

export function Dot({
  label,
  tone,
}: {
  label: string;
  tone: "up" | "down" | "idle";
}) {
  const dot = {
    up: "bg-live",
    down: "bg-down",
    idle: "border-[1.5px] border-ink-500",
  }[tone];
  const text = {
    up: "text-live",
    down: "text-down",
    idle: "text-mist-400",
  }[tone];

  return (
    <span
      className={`inline-flex items-center gap-2 whitespace-nowrap font-mono text-xs ${text}`}
    >
      <span className={`h-2 w-2 rounded-full ${dot}`} aria-hidden />
      {label}
    </span>
  );
}
