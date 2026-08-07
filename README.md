# Manoj Pasunoori — Software Portfolio

A single-page portfolio built with **Next.js 15 (App Router) + TypeScript + Tailwind CSS 4 + lucide-react**, statically exported for GitHub Pages.

## Local development

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static export → ./out
```

## Deploying to GitHub Pages (one-time setup)

1. Push this code to the `main` branch of `manojpasunoori/manojpasunoori.github.io`:

   ```bash
   git init
   git add .
   git commit -m "Aerospace portfolio"
   git branch -M main
   git remote add origin https://github.com/manojpasunoori/manojpasunoori.github.io.git
   git push -u origin main --force   # only use --force if replacing old content
   ```

2. On GitHub: **Settings → Pages → Build and deployment → Source → GitHub Actions**.

3. Done. The included workflow (`.github/workflows/deploy.yml`) builds and deploys on every push to `main`. Your site goes live at **https://manojpasunoori.github.io** in ~2 minutes.

## Fill in your placeholders

Search the project for these and replace:

| Placeholder | Files |
|---|---|
| `manojp0299@gmail.com` | `components/Hero.tsx`, `components/Footer.tsx` |
| `linkedin.com/in/manojpasunoori` | `components/Hero.tsx`, `components/Footer.tsx` |

The GitHub link already points to `github.com/manojpasunoori`.

## Editing content

- **Bio** — `components/Hero.tsx`
- **Interest cards** — the `interests` array in `components/Interests.tsx`
- **Gallery events** — the `events` array in `components/EventGallery.tsx` (add/remove objects; drop photos into `public/images/`)
- **Blog post** — `components/Blog.tsx`
- **Colors & fonts** — token block at the top of `app/globals.css`

## Notes

- `next.config.mjs` uses `output: "export"` — required for GitHub Pages (static hosting only). Avoid server-only features (API routes, server actions, `next/image` optimization).
- `components/BrandIcons.tsx` holds the GitHub/LinkedIn glyphs locally because Next's import optimizer rejects lucide-react's deprecated brand-icon exports.
