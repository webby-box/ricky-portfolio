# Ricky Cheuk — portfolio

Personal site for Ricky Cheuk (https://rickycheuk.com): big data · AI. Static Astro plus TypeScript. No backend, no auth.

The page is a locked 100svh brand landing: one Newsreader name in the mast, a dusk illustrated portrait filling the stage, Outfit for the small nav, warm gold only on hover, and a light CSS grain overlay — the art is the whole world.

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

src/assets/art/ricky-illus.png — stippled illustrated portrait that fills the stage
src/layouts — document shell, SEO, Open Graph
src/pages/index.astro — single landing page
src/styles/global.css — the composition
public/ — favicon, apple-touch icon, og.jpg, robots.txt, sitemap.xml, .nojekyll

## Deploy

GitHub Pages from dist/. Site URL and base path live in astro.config.mjs (`https://webby-box.github.io` / `/ricky-portfolio`). public/.nojekyll is required so Pages does not hide the `_astro` folder.
