---
version: 1
slug: "src-app-page-tsx"
primary_target: "src/app/page.tsx"
related_targets: ["src/app/layout.tsx","src/app/not-found.tsx","src/app/api/health/route.ts","src/components/PowerReserve.tsx","src/components/HostSchematic.tsx"]
---

# Surface brief: homepage (src/app/page.tsx)

## Scope and mode

Surface: the homepage at `/`, plus the shell it inherits (`src/app/layout.tsx`), the not-found page, the health endpoint that feeds it, and the OG image. Visitor mode: **Experience**. The body of work leads; the interface recedes.

## Audience, job, action, proof, constraints

- Audience: hiring managers and senior engineers (deep read) and recruiters (30-second skim), weighted equally.
- Job: decide whether to contact Rushang or forward the resume.
- Action: Email, Resume (PDF), LinkedIn, all in the first viewport on desktop and phone.
- Proof: the site's own live host, read from `/api/health` (uptime, memory headroom, load); the Western Allied Mechanical result (proposal turnaround two hours to fifteen minutes); three years of HVAC design.
- Constraints (confirmed 2026-09-23): the HVAC story is a sentence, not the visual world; the site must read as a senior engineer's premium site; until a project is live, the hero shows only what is verifiably running, as one summary line; project names do not link until write-ups exist; nothing invented (no testimonials, logos, screenshots, uptime history).

## Chosen direction and memorable moment

Caliber Specification, chosen by the user from round three (Impeccable's pick). Memorable moment: the power-reserve indicator on the cover, a real gauge fed by the live host's memory headroom, with uptime counting beside it. The visitor leaves remembering that the page itself was a running, measured system.

## Direction contract

THESIS: Rushang presented as a caliber: a movement specification page where every rating is a number and the power reserve is the live host. It refuses the category's arrangement (name, tagline, two buttons, a 2x2 card grid, infra tiles) and the ops-console dashboard with a green dot.

OWN-WORLD: Deep slate ground (near #0f1418), brushed-steel grays for rules and secondary text, pale steel for primary text, one warm brass accent used only for the live "running" state, the power-reserve arc, and focus rings. A Didone display face for the name and section titles, a quiet light grotesk with tabular figures for every specification row and label, engraved-style tracked capitals for labels. Hairline steel rules define every row; no cards, no shadows, no glass, no gradients beyond a faint brushed-line texture on plate surfaces. Buttons are the boutique bar: thin-ruled, tracked caps, 44px tall.

STORY: A visitor sees a name set like a caliber, reads in one sentence that Rushang is a backend engineer who was an HVAC design engineer first and excelled at both, sees the host running with a real margin number, and has three commands in reach. Scrolling, they read the specification (functions, materials, deployment, origin, current duty), the one built movement with its data ticket, the four references in development as a compact list, and the contact colophon. They believe: this person ships measured systems and reasons in margins. They act: email or resume.

FIRST VIEWPORT: Desktop 1440: running head with tracked-caps name left and four small-caps nav items right. Below, a 12-column hero. Columns 1 to 7: brass kicker "CALIBER RS · FREMONT, CA · OPEN TO BACKEND AND FULL-STACK ROLES"; the name in the Didone at roughly 112px; the subtitle in the Didone italic at roughly 30px stating both disciplines and the shared instinct for sizing to real load; then the boutique bar: Email (filled pale steel), Resume (PDF), LinkedIn (ruled). Columns 8 to 12: the power-reserve plate: label POWER RESERVE, a large brass arc gauge showing host memory headroom in percent, beneath it uptime in tabular figures as "41 d 06 h 12 m" ticking, load average, and "shahrushang.com · running · verified 8 s ago". Along the hero's foot, the edition line: "1 movement running · 4 references in development". Phone 390: running head, kicker, name at roughly 56px, subtitle, the three commands, all within the first 100svh; the plate follows.

FORM: Caliber Specification, candidate 1 on the round-three grounded list (watch caliber spec, hi-fi spec sheet, Swiss grid poster, architectural monograph, museum wall label, automotive data page, security engraving); presented as IMPECCABLE'S PICK and chosen by the user over the assigned Monograph. Seed key 16ecf0e2, re-roll round 3. Signature interaction: the gauge arc sweeps to its value on load and re-settles with damped motion on each 60-second poll; uptime counts each second between polls. Motion grammar: settle, never snap; hairline rules draw in once on entry; all motion off under reduced-motion.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.

## Shipped deviations (2026-09-23, accepted at finish review)

- The kicker line above the name was dropped: the craft floor bans a kicker above a heading. The role, location, and employer line sits below the commands instead.
- The name renders at 96px maximum, not 112px: the craft floor caps display type at 6rem.
- The specification rows carry a right-aligned figures cell (3 yr, 2 h → 15 min, 1 VPS · $12 / mo, 60 s) so that "every rating is a number" holds literally.
- The power-reserve arc carries a brass reserve sector swept from empty to the reading, a low-reserve band over the first tenth, and fills the plate width at md and up.
- Finish review: disposition ship on the eight scored fixes and their two regressions; not a re-review of the whole surface. Build path code-led; no comp exists.

## Unresolved

- Which projects will get public repositories.
- Whether write-up pages carry drawings.
- Launch order of the four references in development.
