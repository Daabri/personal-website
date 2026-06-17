# daanbrinkhuis.nl

Personal website for Daan Brinkhuis, Product Design Lead at Convious.

A hand-written static site — just `index.html` at the root. No build step, no framework.

## Pipeline

Single branch, continuous deploy, no PRs:

1. Edit `index.html` (or other static files) on `main`.
2. Commit one atomic, single-purpose change.
3. `git push` → Vercel deploys the repo root as-is to `daanbrinkhuis.nl` in ~30s.

`vercel.json` pins the project to a no-build static deploy (`framework: null`,
empty build command), so a push can never fail a build step.

### Rollback

Any mistake is a one-step undo:

- **Instant:** Vercel dashboard → Deployments → "Promote to Production" on the
  previous good deploy (no rebuild).
- **Via git:** `git revert <sha> && git push`.

## Local preview

It's a static file — open `index.html` in a browser, or:

```bash
python3 -m http.server
```

## Notes

- `state-of-ai-talk/` is the source for the talk deck, deployed as a **separate**
  Vercel project at [talk.daanbrinkhuis.nl](https://talk.daanbrinkhuis.nl).
- GitHub Pages is **not** used. (Disable it in repo Settings → Pages if it's still on.)
