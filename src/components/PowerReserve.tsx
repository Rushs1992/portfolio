"use client";

import { useEffect, useState } from "react";
import type { HealthReading } from "@/lib/health";

type Props = { initial: HealthReading };

const POLL_MS = 60_000;

function formatUptime(totalSeconds: number) {
  const s = Math.max(0, Math.floor(totalSeconds));
  const d = Math.floor(s / 86_400);
  const h = Math.floor((s % 86_400) / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  const pad = (n: number) => n.toString().padStart(2, "0");
  return { d, h: pad(h), m: pad(m), s: pad(sec) };
}

function gb(bytes: number) {
  return (bytes / 1024 ** 3).toFixed(1);
}

/**
 * The power-reserve indicator. The hand reads host memory headroom, a real
 * margin, and the counter beneath it reads how long this process has run.
 * Both are polled from /api/health every sixty seconds; the counter ticks
 * between polls.
 */
export function PowerReserve({ initial }: Props) {
  const [reading, setReading] = useState<HealthReading>(initial);
  const [reachable, setReachable] = useState(true);
  /** Seconds since the current reading arrived; ticks once a second. */
  const [elapsed, setElapsed] = useState(0);
  const [settled, setSettled] = useState(false);

  // Let the hand sweep from rest to its reading once the page has painted.
  useEffect(() => {
    const id = requestAnimationFrame(() => setSettled(true));
    return () => cancelAnimationFrame(id);
  }, []);

  // One-second tick for the running counter and the "verified" age.
  useEffect(() => {
    const id = setInterval(() => setElapsed((e) => e + 1), 1000);
    return () => clearInterval(id);
  }, []);

  // Poll the host.
  useEffect(() => {
    let cancelled = false;
    async function poll() {
      try {
        const res = await fetch("/api/health", { cache: "no-store" });
        if (!res.ok) throw new Error(String(res.status));
        const next = (await res.json()) as HealthReading;
        if (cancelled) return;
        setReading(next);
        setElapsed(0);
        setReachable(true);
      } catch {
        if (!cancelled) setReachable(false);
      }
    }
    const id = setInterval(poll, POLL_MS);
    return () => {
      cancelled = true;
      clearInterval(id);
    };
  }, []);

  const uptime = formatUptime(reading.uptime + elapsed);
  const headroom = reading.totalMem > 0 ? reading.freeMem / reading.totalMem : 0;
  const pct = Math.round(headroom * 100);
  // Hand rests at -90deg (empty) and reaches +90deg (full).
  const angle = settled ? -90 + headroom * 180 : -90;
  const verifiedAgo = elapsed;

  return (
    <div className="plate p-6 md:p-7">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
        <h2 className="engraved text-steel-300">Power reserve</h2>
        <span className="engraved">Host memory headroom</span>
      </div>

      <figure className="mt-5">
        <svg
          viewBox="0 0 240 140"
          className="mx-auto block w-full max-w-[320px] md:max-w-none"
          role="img"
          aria-label={`Host memory headroom ${pct} percent`}
        >
          {/* track */}
          <path
            d="M 24 124 A 96 96 0 0 1 216 124"
            fill="none"
            stroke="var(--color-steel-700)"
            strokeWidth="2"
          />
          {/* low-reserve band: the first tenth of the sweep */}
          <path
            d="M 24 124 A 96 96 0 0 1 216 124"
            fill="none"
            stroke="var(--color-brass-600)"
            strokeWidth="6"
            strokeOpacity="0.35"
            pathLength="100"
            strokeDasharray="10 90"
          />
          {/* reserve sector: swept from empty to the reading */}
          <path
            className="sector"
            d="M 24 124 A 96 96 0 0 1 216 124"
            fill="none"
            stroke="var(--color-brass-400)"
            strokeWidth="3"
            pathLength="100"
            style={{ strokeDasharray: `${settled ? pct : 0} 100` }}
          />
          {/* ticks: every 10 percent, majors at 0, 50, 100 */}
          {Array.from({ length: 11 }, (_, i) => {
            const a = Math.PI + (i / 10) * Math.PI;
            const major = i % 5 === 0;
            const r1 = major ? 84 : 89;
            // Fixed to two decimals so server and client render identical markup.
            const x1 = (120 + r1 * Math.cos(a)).toFixed(2);
            const y1 = (124 + r1 * Math.sin(a)).toFixed(2);
            const x2 = (120 + 96 * Math.cos(a)).toFixed(2);
            const y2 = (124 + 96 * Math.sin(a)).toFixed(2);
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke={major ? "var(--color-steel-300)" : "var(--color-steel-600)"}
                strokeWidth={major ? 1.5 : 1}
              />
            );
          })}
          <text
            x="20"
            y="138"
            fill="var(--color-steel-400)"
            fontSize="11"
            fontFamily="var(--font-sans)"
            letterSpacing="0.08em"
          >
            0
          </text>
          <text
            x="120"
            y="20"
            textAnchor="middle"
            fill="var(--color-steel-400)"
            fontSize="11"
            fontFamily="var(--font-sans)"
            letterSpacing="0.08em"
          >
            50
          </text>
          <text
            x="220"
            y="138"
            textAnchor="end"
            fill="var(--color-steel-400)"
            fontSize="11"
            fontFamily="var(--font-sans)"
            letterSpacing="0.08em"
          >
            100
          </text>
          {/* hand */}
          <g
            className="hand"
            style={{ transform: `rotate(${angle}deg)`, transformOrigin: "120px 124px" }}
          >
            <line
              x1="120"
              y1="124"
              x2="120"
              y2="38"
              stroke="var(--color-brass-400)"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <line
              x1="120"
              y1="124"
              x2="120"
              y2="140"
              stroke="var(--color-brass-400)"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </g>
          <circle cx="120" cy="124" r="5" fill="var(--color-case-900)" stroke="var(--color-brass-400)" strokeWidth="2" />
        </svg>
        <figcaption className="mt-2 flex items-baseline justify-between gap-4">
          <span className="font-display text-4xl leading-none text-steel-100">
            {pct}
            <span className="ml-1 text-xl text-steel-400">%</span>
          </span>
          <span className="text-right text-[0.9375rem] text-steel-300">
            {gb(reading.freeMem)} of {gb(reading.totalMem)} GB free
          </span>
        </figcaption>
      </figure>

      <dl className="mt-6 divide-y divide-steel-700 border-t border-steel-700 text-[0.9375rem]">
        <div className="flex items-baseline justify-between gap-4 py-3">
          <dt className="engraved">Running</dt>
          <dd className="text-steel-100">
            <span className="font-display text-2xl leading-none">{uptime.d}</span>
            <span className="ml-1 text-steel-400">d</span>
            <span className="ml-3 font-display text-2xl leading-none">{uptime.h}</span>
            <span className="ml-1 text-steel-400">h</span>
            <span className="ml-3 font-display text-2xl leading-none">{uptime.m}</span>
            <span className="ml-1 text-steel-400">m</span>
            <span className="ml-3 font-display text-2xl leading-none">{uptime.s}</span>
            <span className="ml-1 text-steel-400">s</span>
          </dd>
        </div>
        <div className="flex items-baseline justify-between gap-4 py-3">
          <dt className="engraved">Load</dt>
          <dd className="text-steel-300">
            {reading.load.map((l) => l.toFixed(2)).join(" · ")}
            <span className="ml-2 text-steel-400">1 / 5 / 15 min</span>
          </dd>
        </div>
        <div className="flex items-baseline justify-between gap-4 py-3">
          <dt className="engraved">Host</dt>
          <dd className="text-steel-300">
            {reading.cpus} {reading.cpus === 1 ? "core" : "cores"} · {gb(reading.totalMem)} GB
            {reading.commit ? (
              <span className="ml-2 text-steel-400">build {reading.commit}</span>
            ) : null}
          </dd>
        </div>
        <div className="flex items-baseline justify-between gap-4 py-3">
          <dt className="engraved">Status</dt>
          <dd className="flex flex-wrap items-center gap-x-2 gap-y-1 text-steel-100">
            {reachable ? (
              <>
                <span
                  aria-hidden
                  className="inline-block h-2 w-2 rounded-full bg-brass-400"
                />
                <span className="text-steel-300">shahrushang.com</span>
                <span className="text-steel-400">·</span>
                Running
                <span className="text-steel-400">· verified {verifiedAgo} s ago</span>
              </>
            ) : (
              <>
                <span
                  aria-hidden
                  className="inline-block h-2 w-2 rounded-full border border-steel-400"
                />
                <span className="text-steel-300">shahrushang.com</span>
                <span className="text-steel-400">·</span>
                Unreachable
                <span className="text-steel-400">· last reading {verifiedAgo} s ago</span>
              </>
            )}
          </dd>
        </div>
      </dl>
    </div>
  );
}
