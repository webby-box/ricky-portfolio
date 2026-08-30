# Ricky Cheuk — portfolio

Personal site for Ricky Cheuk (https://rickycheuk.com): software engineer · AI. Static Astro plus TypeScript. No backend, no auth.

The page is a locked 100svh brand landing: a Newsreader wordmark and name sit on a deep cobalt field, with one dithered illustrated world filling the lower viewport and a real photographic cutout of Ricky standing on the grid. Outfit for the small nav, coral only on hover, and a CSS grain overlay over the whole stage — not a dashboard, not a particle field, and not reused GIF footage.

## Stack

- Astro (static output)
- TypeScript
- Tailwind CSS v4 (preflight) plus a single composition stylesheet
- Newsreader (wordmark and name) and Outfit (nav / UI)

## Requirements

Node.js 22.12 or newer (Astro 7).

## Commands

All commands run from this directory.

Install dependencies with the package manager script named install.

Local development at http://localhost:4321 uses the package script named dev.

Production build uses the package script named build. Static files are written to dist/

Preview the production build with the package script named preview.

## Layout

src/assets/art/world.png — illustrated world; src/assets/ricky-pfp.webp — real photographic standee
src/layouts — document shell, SEO, Open Graph
src/pages/index.astro — single landing page
src/styles/global.css — the composition
public/ — favicon, apple-touch icon, og.jpg, robots.txt, sitemap.xml, .nojekyll

## Deploy

GitHub Pages from dist/. Site URL and base path live in astro.config.mjs (`https://webby-box.github.io` / `/ricky-portfolio`). public/.nojekyll is required so Pages does not hide the `_astro` folder.
