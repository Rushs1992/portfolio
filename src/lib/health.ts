import os from "node:os";

export type HealthReading = {
  status: "ok";
  /** Seconds this server process has been running. */
  uptime: number;
  /** Seconds the host has been up. */
  hostUptime: number;
  cpus: number;
  /** 1, 5, and 15 minute load averages. */
  load: [number, number, number];
  totalMem: number;
  freeMem: number;
  commit: string | null;
  checkedAt: string;
};

/** Reads the host that is serving this page. Nothing here is stored or estimated. */
export function readHealth(): HealthReading {
  const [l1, l5, l15] = os.loadavg();
  return {
    status: "ok",
    uptime: process.uptime(),
    hostUptime: os.uptime(),
    cpus: os.cpus().length,
    load: [l1, l5, l15],
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
    commit: process.env.GIT_COMMIT?.slice(0, 7) ?? null,
    checkedAt: new Date().toISOString(),
  };
}
