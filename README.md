# Sam Parhimchik — Portfolio monorepo

Product-minded engineering portfolio at [parhim.dev](https://parhim.dev).

This repo is **public** (required for GitHub Pages). Private tooling lives under `packages/resume/`, which is gitignored and stays on your machine only.

## Structure

```
apps/portfolio/     Public site (React + Vite) — deployed to parhim.dev
packages/resume/    Local résumé PDF generator (gitignored, not on GitHub)
```

## Stack

- [Bun](https://bun.sh) workspaces for the public site
- React + Vite + TypeScript
- CSS Modules + design tokens (light/dark, system default)
- Static build for GitHub Pages

## Commands

From the repo root:

```bash
bun install
bun run dev
bun run test
bun run typecheck
bun run lint
bun run build
bun run preview
```

CI runs typecheck, lint, tests, and production build on every push and pull request.

## Content

All site copy lives in `apps/portfolio/src/content/portfolio.ts` with types in `apps/portfolio/src/content/types.ts`.

## Analytics

Analytics are abstracted in `apps/portfolio/src/lib/analytics.ts` and **disabled by default**.

1. Copy `apps/portfolio/.env.example` to `apps/portfolio/.env`
2. Set `VITE_ANALYTICS_ENABLED=true`
3. Set `VITE_ANALYTICS_ENDPOINT` to your collector URL

Tracked interactions: resume downloads, contact actions, project/SDK links, GitHub/LinkedIn clicks, section engagement, theme toggles. No sensitive data is collected by the abstraction itself.

## Deploy

The site is **not** committed as pre-built HTML. GitHub Actions runs `bun run ci`, builds `apps/portfolio/dist/`, and publishes that folder to Pages on every push to `master` (see `.github/workflows/deploy.yml`).

**One-time GitHub setup** (after the workflow is on the default branch):

1. Repo **Settings → Pages → Build and deployment**
2. Set **Source** to **GitHub Actions** (not “Deploy from a branch”)
3. Keep the custom domain **parhim.dev** (DNS should already point at GitHub; `apps/portfolio/public/CNAME` is copied into `dist/` on build)

**Local check:** `bun run build` then `bun run preview` and open the URL shown.

## Resume (local only)

The public site links to `apps/portfolio/public/Resume2024.pdf`. To regenerate it locally:

```bash
cd packages/resume
python -m venv .venv && source .venv/bin/activate
pip install -e .
python generate-resume.py              # default variant → syncs Resume2024.pdf to the site
python generate-resume.py --variant all  # all variants → packages/resume/output/
```

Variant PDFs and LLM prompts stay in `packages/resume/` and are **not** pushed to GitHub.
