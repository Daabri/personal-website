# state-of-ai-talk

A 15 to 20 minute company-wide talk on the state of AI, built as a self-contained HTML deck,
intended to be hosted on daanbrinkhuis.nl and presented from there.

## Quick start
- Open `deck/index.html` in a browser (best served over HTTP, see note below).
- Controls: arrows or space to move, N for speaker notes, L for light/dark, F for fullscreen,
  ? for the controls panel.

## Note on the shaders
The dithered chapter "artifacts" use Paper shaders loaded as an ES module. ES module imports are
restricted on `file://`, so the artifacts may not render when you double-click the file. Served
over HTTP (a dev server, or daanbrinkhuis.nl) they render. There is an animated CSS fallback so
nothing is ever an empty square. See `context/implementation-plan.md` for the plan to bundle the
library locally and remove the network dependency.

## Layout
```
state-of-ai-talk/
├── README.md
├── PROMPT.md                       Claude Code kickoff prompt
├── deck/
│   └── index.html                  the presentation
└── context/
    ├── implementation-plan.md      every decision, slide map, design system, open items
    └── articles/
        ├── 01-software-factory.md  source articles, verbatim, with chapter relevance
        ├── 02-atomic-systems.md
        ├── 03-loops-explainer.md
        └── 04-nadella-firm.md
```

## Continuing with Claude Code
Drop this folder into the daanbrinkhuis.nl repo, then paste `PROMPT.md` into Claude Code from the
repo root. The first job is getting the shaders rendering over HTTP and choosing where a single
presentation route lives in the site's stack.
