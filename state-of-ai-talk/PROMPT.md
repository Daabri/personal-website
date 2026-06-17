# Claude Code kickoff prompt

Copy everything below into Claude Code from the repo root. It assumes the
`state-of-ai-talk/` folder is in your daanbrinkhuis.nl repo.

---

You are helping me finish and host an AI-presentation as part of my personal site, daanbrinkhuis.nl.
I am Daan, Head of Product Design at Convious. Read these first, in order, before touching code:

- `state-of-ai-talk/context/implementation-plan.md` — every decision, the slide map, the design
  system, the artifact system, and the open items. This is your source of truth.
- `state-of-ai-talk/context/articles/*.md` — the four source articles the talk is built on, verbatim.
- `state-of-ai-talk/deck/index.html` — the current working deck.

Talk to me like I prefer: direct, compressed, adversarial when I'm wrong, honest over agreeable.
No flattery. If a decision in the plan is weak, say so and propose better. I am a design engineer,
so go deep technically and show me the code.

## The one job that matters first
The dithered "artifact" shaders (Paper shaders, @paper-design/shaders, dithering) do not render
when the deck is opened via file://. They should render once served over HTTP. Get them rendering
reliably for hosting on daanbrinkhuis.nl. Strongly prefer installing the library from npm and
bundling it locally over any CDN import, so there is zero runtime network dependency during a live
talk. Pin the version (0.0.76 at time of writing; the lib ships breaking changes under 0.0.x).
Confirm the chapter -> shape mapping renders and animates, then we tune.

## Constraints (non-negotiable)
- Convious brand: coral #ff155b, Raleway display, Inter body, JetBrains Mono mono. No em dashes,
  no emojis, anywhere in copy.
- Keep the talk an OVERVIEW. Do not add doubter-management or "how to talk to the room" content.
- Tone is mine: compressed, declarative, slightly dry-funny, outcome-first so every department
  sees the relevance. Match it, don't smooth it into generic deck-speak.
- The six-chapter timeline is the spine; MCP is the destination. Don't restructure without making
  the case to me first.
- One dithered artifact per chapter, all the same shader with consistent pixel size, only motion
  and color differ. Persistent chapter rail as the reference point (not a full pillar). Big card
  morphs between chapters via crossfade.
- Dark theme default, light theme on the L key. Calm background (static shape pattern + grain).

## How I want you to work
1. Propose the cleanest way to integrate this into my site's stack (tell me what the repo uses;
   if it's Vite/Astro/Next/static, recommend the right home for a single-route presentation).
2. Get shaders rendering locally and over a real dev server. Show me before/after.
3. Then work the open-items list in `implementation-plan.md` with me, one at a time.
4. Keep `implementation-plan.md` updated as the running record. Treat it as the project's memory.

## Stretch, only after the above works
- Presenter view (current + next slide + speaker notes on a second screen).
- A flat PDF export as a venue fallback.
- A short OG image / meta so the hosted URL previews nicely when I share it.

Start by reading the three sources, then give me your read on the current deck and your plan for
getting the shaders live. Push back on anything you'd do differently.
