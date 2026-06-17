# State of AI talk — implementation plan

A working record of every decision behind the deck, so Claude Code (or you) can pick up
without re-deriving anything. Living doc. Update as it evolves.

## What this is
A company-wide all-hands talk by Daan (Head of Product Design, Convious) on the state of AI.
Length 15 to 20 minutes. Built as a self-contained HTML slide deck, to be hosted on
daanbrinkhuis.nl and presented from there.

## Audience and intent
- Whole company, mixed technical depth (eng, product, CS, marketing, sales, leadership).
- Goal: an overview of what has happened and where it is going, with concrete Convious
  takeaways, ending on what we would change about how we work.
- NOT a persuasion piece aimed at AI skeptics. The "employee hesitance" thread was a private
  story arc, deliberately kept out of the deck. Do not add doubter-management framing or
  "how to talk to the room" content.

## Spine: the timeline (six chapters)
The deck is timeline-first. Six steps, each framed by OUTCOME (what changed, who it helps),
not by tooling. Each chapter owns one artifact (see design system).

1. Autocomplete       — everyone got faster. Same job, less friction. The warm-up.
2. Agents that act    — it stops suggesting and does. (Convious: Daan shipping his own PRs /
                          becoming a design engineer; built the POS lock-screen shaders with
                          Claude Code.)
3. Connecting tools   — works from our world, not the web's. (Convious: POS landing page built
                          from Granola notes + Jira specs + Confluence shaping + GitHub code.)
4. Skills             — do it once, never explain it again. (Convious: Daan's SEO review skill;
                          marketing gets the same review on demand.)
5. Looping agents     — you stop prompting, you write the loop. (Newest rung.)
6. MCP                — the rung we are building. The destination. Three slides:
                          - what it is: one port, many cables. USB-C for AI. Open standard.
                          - for us: ask our data a question — Snowflake reachable from inside
                            Claude, Copilot, ChatGPT now. No SQL, any department.
                          - outward: the same door opens to partners (zoo/park/operator tools
                            plug into Convious). We become the layer, not just an app.

Interludes (not chapters, rail shows no active artifact):
- Reality check (light, slightly funny): not all of it is magic; the real work is guardrails.
- Where it goes: verifiability (Karpathy), judgment stays human (Nadella).
- Close / takeaway: tools change, our connected context + judgment compounds. MCP is the moat.

## Slide order (current, 13 slides)
1. Title
2. The map (overview of the six)
3. 01 Autocomplete            [artifact: wave]
4. 02 Agents that act         [artifact: warp]   + StrongDM quote
5. 03 Connecting tools        [artifact: dots]
6. 04 Skills                  [artifact: ripple]
7. 05 Looping agents          [artifact: swirl]  + Boris Cherny quote
8. Reality check
9. Where it goes              + Karpathy quote + Nadella line
10. 06 MCP — what it is       [artifact: sphere]
11. 06 MCP — for us           [artifact: sphere]
12. 06 MCP — outward          [artifact: sphere]
13. Close / takeaway

## Quotes used (short, attributed; sources in context/articles)
- "Code must not be written by humans." — StrongDM (via Software Factory article). Slide 4.
- "My job is to write loops." — Boris Cherny, creator of Claude Code (loops article). Slide 7.
- "AI automates what you can verify." — Andrej Karpathy (Software Factory + loops). Slide 9.
- "Without human direction, you have compute running in circles." — Satya Nadella. Slide 9.

## Tone and copy rules (Daan's voice)
- Compressed, direct, declarative. Minimal hedging. Slightly dry-funny is welcome.
- Outcome-first so every department sees the relevance.
- Convious brand: no em dashes, no emojis. Use commas/periods/colons or restructure.
- Sounds like Daan, not like generic presentation copy.

## Design system
- Brand: coral #ff155b primary. Raleway (display/headlines), Inter (body), JetBrains Mono
  (eyebrows, timecodes, labels). OKLCH-friendly, but current tokens are hex/rgba.
- Dark theme default; light theme on the L key (paper #f3efe9 ground, ink #1d1922 text).
- Background is intentionally calm: faint static SVG shape pattern (circles/squares/triangles),
  film grain (soft-light), a subtle scrim for text contrast. No moving background.
- Editorial layout on chapter slides: big headline + giant faint chapter number, artifact card
  on the right.

## The artifact system (the centerpiece)
- Each timeline chapter owns ONE dithered artifact, all variants of the SAME dithering shader
  with a CONSISTENT pixel size, only the motion/pattern and color differ. Library: Paper
  shaders (@paper-design/shaders), dithering shader.
- Chapter -> Paper DitheringShapes mapping (numeric enum values):
    autocomplete -> wave   (4)
    agents       -> warp   (2)
    connecting   -> dots   (3)
    skills       -> ripple (5)
    looping      -> swirl  (6)
    MCP          -> sphere (7)
  (simplex=1 unused. type = 4x4 Bayer = 3. u_pxSize = 2.5 across all.)
- Persistent chapter rail (top center): all six artifacts always visible as the reference point.
  Active = coral + larger + faster; done = dim coral + slow; upcoming = grey + slow.
  Deliberately NOT a full-height pillar.
- Big editorial card (right) shows the current chapter's artifact and MORPHS on chapter
  change via a two-layer opacity crossfade (incoming layer switches shape, fades over outgoing).
  The three MCP slides share sphere, so it holds steady there.
- Aspect ratios for artifact holders: 1:1 (minis). Big card is LANDSCAPE 3:2, width min(50vw,920px)
  (~half the screen) so the artifact reads from the back of a room; has-art slides use
  padding-right:58vw to keep headline/body clear of it. (Was 3:4 portrait at 31vw.)
- COLOR: all chapters render coral (#ff155b). EXCEPTION: MCP (shape 7, the destination) renders
  in the brand's OPPOSITE, teal #00e6a0 — active artifact front color, big-card border + glow,
  the "06" anum, and the MCP rail tile when active. Implemented via palFor(shape,state) which
  swaps the front color for shape 7 in the 'on' state, plus a `.mcp` class on #bigCard.

## Paper shaders — vanilla API (confirmed from official docs)
    import { ShaderMount, ditheringFragmentShader, DitheringShapes, DitheringTypes }
      from '@paper-design/shaders';
    const shader = new ShaderMount(container, ditheringFragmentShader, {
      u_colorBack: [r,g,b,a],     // RGBA 0..1
      u_colorFront: [r,g,b,a],
      u_shape: DitheringShapes.sphere,   // or numeric 1..7
      u_type: DitheringTypes['4x4'],     // or numeric 1..4
      u_pxSize: 2.5
    });
    // speed: React prop maps to a constructor/method; setSpeed(x) if present.
- React alternative: <Dithering colorBack colorFront shape type size speed /> from
  @paper-design/shaders-react (handles color strings, sizing, noise texture internally).
- Latest version at build time: 0.0.76. Pin it (lib ships breaking changes under 0.0.x).

## Status
- Deck content, structure, tone: DONE.
- Visual/artifact system, rail, morph, light theme, calm background, grain: DONE in markup/CSS/JS.
- Artifacts did NOT render when opened via file:// (ESM dynamic import is blocked/flaky on
  file://). There is an animated CSS-gradient fallback behind every artifact so nothing is ever
  an empty square. Expectation: served over HTTP the real shaders render.
- HOSTING + BULLETPROOFING: DONE (2026-06-17). Deck is live at https://state-of-ai-talk.vercel.app
  as its own isolated static Vercel project (NOT the broken main personal-website project, NOT
  GitHub Pages — see repo memory `deploy-architecture`). Paper shaders are now bundled locally
  (`deck/paper-shaders-0.0.76.js`, esbuild bundle of @paper-design/shaders@0.0.76, zero external
  imports) and all three font families are self-hosted (`deck/fonts.css` + `deck/fonts/*.woff2`,
  latin + latin-ext only). Verified over HTTP in headless Chromium: 8 WebGL canvases mount,
  shaders load, fonts load, and the page makes ZERO external network requests. `deck/` is now a
  fully self-contained deployable folder.
- KNOWN ITEM TO VERIFY: in headless software-WebGL the big chapter card rendered as a near-solid
  coral block (rail minis showed the dither texture correctly). Likely a SwiftShader artifact;
  needs an eyeball on a real GPU. If still flat there, tune the dithering uniforms for the big
  card (shape field saturates at 740x980 with u_pxSize 2.5).

## Open items / next steps
1. DONE — hosted (own static Vercel project) with shaders bundled locally over HTTP. See Status.
2. DONE — chose bundled-locally (esbuild). No CDN, no React.
2a. Custom subdomain talk.daanbrinkhuis.nl: pending. The domain is under a different Vercel
    account than the `daabri` CLI login; alias from the owning account, then point at the
    state-of-ai-talk project.
3. Verify the chapter -> shape mapping reads well once rendering on a real GPU (swap any that
   feel off; one line per chapter). Tied to the big-card appearance item in Status.
4. Rail labels are tiny (auto/act/link/skill/loop/mcp). Decide: enlarge, or drop and keep the
   rail purely visual.
5. Optional: presenter view (current + next + notes), and a flat PDF fallback for any venue
   laptop that cannot run the page.
6. Optional: trim the reality-check slide for a pure climb-then-MCP arc (would be 12 slides).

## Files
- deck/index.html              the presentation (open in a browser; arrows/space, N notes,
                               L light, F fullscreen, ? help)
- context/articles/*.md        the four source articles, verbatim, with chapter relevance
- context/implementation-plan.md   this file
- PROMPT.md                    the Claude Code kickoff prompt
