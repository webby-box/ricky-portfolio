# Ricky Cheuk — portfolio

Personal site for Ricky Cheuk (https://rickycheuk.com): software engineer · AI. Static Astro plus TypeScript. No backend, no auth.

The page is a black-and-white campaign poster, not a site chrome. A stacked (desktop) / cropped-horizontal (mobile) RICKY wordmark occupies the frame as the brand mark. A single square still holds the looping GIF as a product photograph, with the die-cut portrait standing in front of it, cropped by the square. A lookbook stamp at the bottom lists Voyas, Noozz, gitweb, GitHub, and LinkedIn. Click the square to cycle glare → road → box → ripple. Only the active GIF is loaded.

## Stack

- Astro (static output)
- TypeScript
- Tailwind CSS v4 (preflight) plus a single composition stylesheet
- Syne (variable, self-hosted)

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
