# Ricky Cheuk — portfolio

Personal site for Ricky Cheuk (https://rickycheuk.com): software engineer · AI. Static Astro plus TypeScript. No backend, no auth.

The page is one locked 100svh frame of film titles over footage. A full-bleed cycling GIF (glare, road, box, ripple) is the world; a light bottom-and-top scrim keeps small IBM Plex Mono credits readable without burying the image. The die-cut portrait stands in the scene. Top slate: logo, Ricky Cheuk · software · AI, GitHub and LinkedIn. Bottom credit line: Voyas, Noozz, gitweb. Tap the footage to cycle scenes. Only the active GIF is loaded.

## Stack

- Astro (static output)
- TypeScript
- Tailwind CSS v4 (preflight) plus a single composition stylesheet
- IBM Plex Mono (credits) and Newsreader (name, small)

## Requirements

Node.js 22.12 or newer (Astro 7).

## Commands

All commands run from this directory.

Install dependencies with the package manager script named install.

Local development at http://localhost:4321 uses the package script named dev.

Production build uses the package script named build. Static files are written to dist/

Preview the production build with the package script named preview.

## Layout

src/assets — portrait, logo, project marks (optimized; not hotlinked)
src/layouts — document shell, SEO, Open Graph
src/pages/index.astro — single page
src/styles/global.css — the composition
public/ — favicon, apple-touch icon, og.jpg, robots.txt, sitemap.xml, .nojekyll
public/bg/ — scene GIFs (glare, road, box, ripple)

## Deploy

GitHub Pages from dist/. Site URL and base path live in astro.config.mjs (`https://webby-box.github.io` / `/ricky-portfolio`). public/.nojekyll is required so Pages does not hide the `_astro` folder.
