---
target: src/app/page.tsx
total_score: 19
max_score: 32
na_heuristics: 7,10
p0_count: 2
p1_count: 3
target_identity: "file:/Users/rush/Documents/portfolio/src/app/page.tsx"
target_fingerprint: "sha256:e23671683f49b1b147f75526abd46aa52a40eba45ac2adb32a5ccdda805d8b2c"
target_path: /Users/rush/Documents/portfolio/src/app/page.tsx
timestamp: 2026-09-23T23-28-34Z
slug: src-app-page-tsx
---
# Critique: src/app/page.tsx (homepage)

Method: dual-agent (A: design review · B: detector + browser)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|---|---|---|
| 1 | Visibility of System Status | 3 | Deployments panel is the right idea, but the site's own row is a hardcoded "live" dot and there is no last-checked time |
| 2 | Match System / Real World | 2 | Ops vocabulary (Fastify, BullMQ, pub/sub fan-out, dead-letter) with no plain-language layer; "load, capacity, margins" never appear |
| 3 | User Control and Freedom | 2 | All four project links dead-end in the framework 404; no skip link; resume opens a PDF with no hint |
| 4 | Consistency and Standards | 3 | Infra facts appear twice in two styles; accent green does triple duty (status, eyebrow, hover) |
| 5 | Error Prevention | 2 | Links rendered to routes that do not exist; subtitle promises write-ups that are not there |
| 6 | Recognition Rather Than Recall | 3 | Deployments rows show domains, not project names |
| 7 | Flexibility and Efficiency | n/a | Single-read Experience surface; no repeat workflows |
| 8 | Aesthetic and Minimalist Design | 3 | ~110 words of hero prose before the CTA; redundant eyebrow; duplicated infra strip |
| 9 | Error Recovery | 1 | Default Next 404, full viewport, no link back, contact footer pushed off screen |
| 10 | Help and Documentation | n/a | Nothing on the surface needs instruction |
| **Total** | | **19/32** | **Acceptable (59%)** |

## Design Specificity Verdict

LLM assessment: a competent instance of the "ops-console developer portfolio" genre; almost none of it is authored for the person in PRODUCT.md. Near-black canvas, Plex Sans/Mono, `//` comment eyebrow, "I build X" h1, two bio paragraphs, white primary + outlined secondary buttons, 2x2 bordered cards with stack chips, three-column infra strip: all category defaults. The one authored element is the Deployments panel (real subdomains, server-side health checks), undermined by a static green dot on the site's own row and four of five rows reading "coming soon". The confirmed positioning (HVAC systems thinking; load, capacity, margins) exists only as paragraph two in the dimmest tier, framed as backstory; the words load/capacity/margin do not appear.

Deterministic scan: static detector over page.tsx, layout.tsx, LiveStatus.tsx returned 0 findings. Browser detector found 2: tiny-text 11px at page.tsx:129 ("checked live · every 60s") and page.tsx:148 (panel footer). No false positives. Static scan missed the 11px hits the browser scan caught.

Contrast (measured): #9aa0ab on #0f1115 = 7.19:1 pass; on #161920 = 6.69:1 pass; #5c6270 on #0f1115 = 3.09:1 (fails normal text; used only as idle-dot ring, label carries meaning). No focus styles defined in source (browser default only). Smallest text 11px at page.tsx:80, 129, 148, 166.

## Cognitive Load

Failures: 5 of 8 (single focus, chunking, one thing at a time, working memory, progressive disclosure). Decision points with >4 visible options: 0.

## What's Working

1. The Deployments panel as a concept: real subdomains, real host, 2s timeout, 60s revalidate, honest "coming soon".
2. The employer sentence: "cut proposal turnaround from two hours to fifteen minutes" is concrete, verifiable, first-viewport, plain voice. The page's actual peak.
3. Typographic discipline: mono for machine facts, sans for prose; status is dot + label with dot aria-hidden; muted text contrast passes.

## Priority Issues

- **[P0] All four project-name links 404.** page.tsx:69-74 links to /projects/[slug]; directory is empty. Subtitle promises write-ups. Fails at peak intent on default 404 with footer off screen. Fix: plain text until a write-up exists, or link to liveUrl only when live; add src/app/not-found.tsx with links to /#projects and email. Command: /impeccable harden
- **[P0] The running build is not the page.** Docker container on :3000 serves the Next starter ("Create Next App"); image built 2026-09-21, portfolio commit 2026-09-22. Public site may be the starter page. Fix: docker compose build --no-cache && docker compose up -d; add git SHA to /api/health. Not a design command.
- **[P1] Positioning is buried.** HVAC lens is paragraph two, dimmest gray, "before software". h1 is generic; eyebrow is filler. Fix: put the cross-discipline claim in the h1 or lead; employer metric on a labeled "Currently" line; replace eyebrow with the role statement in a readable tier. Command: /impeccable clarify (or redesign)
- **[P1] Copy that is not true today.** page.tsx:59 "Each one is deployed on this server. Write-ups cover the tradeoffs."; meta description "Every project on this site runs on a server I set up myself"; hardcoded live badge page.tsx:136. Fix: derive subtitle from data; true meta description; route site row through the health check or drop it. Command: /impeccable clarify
- **[P1] First-viewport allocation and mobile fold.** A third of desktop hero lists four non-existent things; on 390x844 the CTAs sit ~780-820px, role statement below fold. Fix: CTA row right after h1 + one-line lead on md and below; collapse panel to one summary line until a project is live; promote resume to a third CTA. Command: /impeccable layout, /impeccable adapt

## Persona Red Flags

- Alex (hiring manager): h1 says nothing evaluable; "coming soon" twice per project; no repo links; project links 404; unverifiable claims; site health is a static dot. Time to proof: never.
- Jordan (recruiter): role statement is the least emphasized hero text; no years-of-experience figure; resume is a 13px nav word; jargon with no plain layer; "$12/mo" reads as hobby; CTAs below the fold on phone.
- Sam (keyboard/screen reader): no skip link; heading outline is h1 + one h2; panel title is a span; "coming soon" announced 8x; panel rows lack project names; no external/PDF link indicators; default focus ring only; 404 h1 is "404".

## Minor Observations

- Accent green overloaded: status, hover, eyebrow.
- "in progress" and "coming soon" share an identical idle ring.
- Status renders twice per project; one timeout yields eight red items.
- Infra strip repeats the panel footer verbatim.
- Nav links 20px tall, footer email 16px, inline GitHub 17px (WCAG 2.2 wants 24px). Chips and labels at 11px.
- No visible email near the mailto button.
- No not-found.tsx, no OG image, no "(PDF)" or download on resume.
- Cards show full problem paragraph, not tagline; phone page 2962px.
- "shahrushang.com" beside the wordmark duplicates the address bar.

## Questions to Consider

1. If all four projects are "coming soon", why does the first viewport spend a third of its width saying so?
2. Where is a single number on this page that demonstrates an eye for load, capacity, and margins, other than "$12/mo"?
3. Is the ops-console aesthetic writing a check the content cannot cash? Would a prose-led page be more honest today?
4. Four shallow cards, or one project taken all the way (live, repo, write-up with capacity math)?
