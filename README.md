# Ricky Cheuk — portfolio

Personal site for Ricky Cheuk (https://rickycheuk.com): big data · AI. Static Astro plus TypeScript. No backend, no auth.

The page is a locked 100svh brand landing: a thin mast with one Newsreader name, Outfit for the small nav, and an illustrated world scene occupying the lower part of the viewport. Cream type on cobalt, coral only on hover, and a light CSS grain overlay.

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

src/assets/art/world.png — illustrated scene (sky, sunburst, grid floor, mountains) in the lower viewport
src/layouts — document shell, SEO, Open Graph
src/pages/index.astro — single landing page
src/styles/global.css — the composition
public/ — favicon, apple-touch icon, og.jpg, robots.txt, sitemap.xml, .nojekyll

## Deploy

GitHub Pages from dist/. Site URL and base path live in astro.config.mjs (`https://webby-box.github.io` / `/ricky-portfolio`). public/.nojekyll is required so Pages does not hide the `_astro` folder.
