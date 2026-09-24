# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences, weighted equally, both arriving during a job search for backend and full-stack roles:

- **Hiring managers and senior engineers** who will read the project write-ups and judge the engineering tradeoffs before or after an interview. They want to see how Rushang reasons about architecture, failure modes, and scaling, not just that something exists.
- **Recruiters and screeners** spending under a minute deciding whether to forward the resume. They need the role fit, location, stack, and contact path within the first viewport.

The site must succeed for a 30-second skim and a 10-minute deep read without splitting into two experiences.

## Product Purpose

A personal portfolio for Rushang Shah, a software engineer in Fremont, CA, built to convert visits into interviews for backend and full-stack roles. It presents live, self-hosted backend projects with write-ups, current professional work, and a direct contact path (email, LinkedIn, resume, GitHub).

Success is a visitor reaching out (email or LinkedIn) or forwarding the resume, having formed the impression that Rushang ships production systems and reasons carefully about them.

## Positioning

**Systems thinking across disciplines, and excellence in both.** Rushang spent three years as a design engineer on commercial HVAC systems before software, and excelled at it. Mechanical systems and software systems share the same failure modes; the claim is a practiced eye for load, capacity, and margins that a career-long software engineer does not have. The site must make two things equally clear to recruiters, hiring managers, and other visitors: Rushang excelled as an HVAC designer, and Rushang is a great software engineer today. Neither identity is a footnote to the other. The HVAC years are credibility, not backstory; the software work is the present and the ask.

Supporting proof, secondary to the positioning: every project on the site actually runs on a server Rushang set up by hand, with live health status checked from the site itself.

**Presentation rule for unshipped work (confirmed 2026-09-23):** until at least one project is live, the homepage shows only what is verifiably running (this host, its containers, its health) as a single summary line. The Deployments panel and project grid expand as projects ship.

## Operating Context

- Visitors arrive from the resume PDF, LinkedIn, GitHub, or direct link during a hiring process.
- The site runs in production at `https://shahrushang.com` on a single $12/month VPS, containerized with Docker and fronted by one Nginx reverse proxy. Each project is a subdomain of `shahrushang.com` served from the same host.
- Project status is verified live: the site fetches each project's `/health` endpoint server-side with a 2-second timeout, cached for 60 seconds, and renders `live`, `offline`, `in progress`, or `coming soon`.
- The site exposes its own `/api/health` endpoint returning status and uptime.
- Deployed via `compose.yml` and a multi-stage `Dockerfile` (Next.js standalone output, Node 22 Alpine, non-root user).

## Capabilities and Constraints

**Stack (existing):** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4, `next/font` with IBM Plex Sans and IBM Plex Mono. Read `node_modules/next/dist/docs/` before writing Next.js code; this version has breaking changes from prior releases (see AGENTS.md).

**Routes:**
- `/` home: intro, current work, Deployments panel, project grid, infrastructure summary.
- `/projects/[slug]` per-project write-up pages. Confirmed as planned; the route directory exists but has no page yet.
- `/api/health` JSON health check.
- `/Rushang_Shah_Resume.pdf` static resume.

**Project data model** (`src/data/projects.ts`): each project has `slug`, `name`, `tagline`, `status` (`live` | `building` | `planned`), `liveUrl`, optional `repoUrl`, `stack`, and write-up fields `problem`, `architecture`, `tradeoffs[]`, `scaling`. Write-up pages must cover problem, architecture, tradeoffs, and scaling.

**Committed project set** (confirmed; all currently `planned`, write-up fields empty except `problem`):
1. **Task API** at `tasks.shahrushang.com`: REST API with JWT auth, PostgreSQL, full test suite. Node, Fastify, PostgreSQL, Docker.
2. **URL shortener** at `go.shahrushang.com`: Redis-cached redirects, Postgres as source of truth, hand-written token-bucket rate limiter. Node, Redis, PostgreSQL.
3. **Real-time chat** at `chat.shahrushang.com`: WebSockets, persisted messages, Redis pub/sub fan-out across multiple server instances. Node, WebSockets, Redis, PostgreSQL.
4. **Background jobs** at `jobs.shahrushang.com`: queue with retries, backoff, dead-letter handling, worker threads, live dashboard. Node, BullMQ, Redis, Worker threads.

**Terminology:** displayed statuses are `Running`, `Unreachable`, and `In development` (data model values remain `live`, `building`, `planned`). "Power reserve" is the name of the live-host instrument; "Movement" is the built-work section; "In development" lists planned work. "Write-ups" is the term for project detail pages.

**Undecided:** which projects will get a public `repoUrl`; whether write-up pages carry per-project imagery or diagrams; launch order of the four projects.

## Brand Commitments

- **Name:** Rushang Shah. Domain `shahrushang.com`.
- **Voice (as currently written):** first person, plain, specific, unhyped. Sentences state what was built and what it did. Self-deprecating precision ("the boring parts properly", "a pile of disconnected project tools") rather than superlatives.
- **Role statement:** "open to backend and full-stack roles". Primary languages TypeScript and Python. Deploys to Azure and GCP at work.
- **Fonts in use (since the 2026-09-23 redesign):** Bodoni Moda (display) and Hanken Grotesk (text) via `next/font`; static TrueType copies in `src/assets/fonts/` for the Open Graph image. DESIGN.md is the authority on their use.
- No logo or mark exists. No headshot exists in the repository.

## Evidence on Hand

- **Current employer and headline result, cleared for public display:** Western Allied Mechanical, where Rushang built a multi-agent LLM service that cut proposal turnaround from two hours to fifteen minutes, and owns the internal data platform that replaced disconnected project-management tools.
- **Prior career:** three years as a design engineer on commercial HVAC systems.
- **Resume:** `public/Rushang_Shah_Resume.pdf` (current; text is not machine-extractable from the PDF as embedded).
- **Contact and profiles (current and public):** `rushang.1992@gmail.com`, `github.com/Rushs1992`, `linkedin.com/in/rushang-shah`. Portfolio source at `github.com/Rushs1992/portfolio`.
- **Infrastructure facts:** Docker, Nginx, single $12/month VPS set up by hand.
- **Absences future work must not fabricate:** no testimonials, no client logos, no traffic or uptime statistics beyond the live health check, no project screenshots or architecture diagrams yet, no completed project write-ups, no published repositories for the four projects.

## Product Principles

1. **Prove it live.** Any claim of a running system is backed by a real health check rendered on the page. Never show a static "live" badge for something that is not being checked.
2. **Two speeds, one page.** Role fit, location, and contact must land in the first viewport for a skimmer; depth lives one click away in write-ups for the reader. Do not fork the site into "quick" and "detailed" versions.
3. **Engineering judgment over feature lists.** Write-ups foreground tradeoffs, capacity, and failure modes. A stack list is context, not the argument.
4. **The HVAC lens is the frame, not the footnote.** Present software decisions in terms of load, margins, and what must keep working after handoff.
5. **Say only what is true today.** Statuses reflect actual deployment state. Planned work is labeled planned. Empty write-up fields are omitted, not padded.

## Accessibility & Inclusion

No product-specific standard was established. The incumbent implementation already respects `prefers-reduced-motion`, and status is conveyed by both a colored dot and a text label rather than color alone; preserve both behaviors.
