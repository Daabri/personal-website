# personal-website — agent guide

Static personal site for **daanbrinkhuis.nl**. Hand-written `index.html`, no framework, no build step.

## ⚠️ A COMMIT IS A PRODUCTION DEPLOY

A local `post-commit` git hook runs `vercel --prod` on **every commit**, so **every `git commit` ships live to https://daanbrinkhuis.nl within seconds.** There is no staging environment.

Because of that:

- **Do not be trigger-happy with commits.** Never commit WIP, experiments, or half-finished work. Commit only when you intend to ship that exact state to production.
- **One atomic, single-purpose change per commit.** Each commit must stand alone, so a bad deploy is a clean one-step rollback. Never bundle unrelated changes into a commit.
- **No branches.** Work directly on `main` — this is a deliberate trunk-based, continuous-deploy setup, not an oversight.
- To save intermediate/experimental work, leave it uncommitted in the working tree or `git stash` it — do **not** commit to "save progress," because that deploys.

## Deploy & rollback

- **Deploy** happens automatically on commit. Manual equivalent: `vercel --prod` from the repo root.
- **GitHub is NOT in the deploy path.** Do not rely on `git push`; pushing is optional off-machine backup only. Deploys go straight from the local machine to Vercel via the CLI — the project has no Vercel↔GitHub integration, by choice.
- **Rollback:** `vercel rollback`, or promote a previous deploy in the Vercel dashboard (instant, no rebuild); or `git revert <sha>` (the revert commit re-deploys via the hook).

## How it's wired

- `vercel.json` — `framework: null` + empty build command → static, no build.
- `package.json` — only pins `engines.node: "24.x"` (no dependencies). The project had been frozen for ~110 days on discontinued Node 14.x.
- `.git/hooks/post-commit` — runs `vercel --prod` (local-only, not tracked; delete the file to disable auto-deploy).
- `state-of-ai-talk/` is the source for a **separate** Vercel project at talk.daanbrinkhuis.nl — not part of this site's deploy.
