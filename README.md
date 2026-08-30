# Ricky Cheuk — portfolio

Personal site for Ricky Cheuk (https://rickycheuk.com): software engineer · AI. Static Astro plus TypeScript. No backend, no auth.

The page is a locked 100svh living interface: a full-viewport generative data field (canvas points and proximity lines over a CSS lattice, grain, and scan) is the atmosphere. Identity sits on it as a HUD plate — Newsreader name, role, tagline, a small cropped photograph, and Voyas / Noozz / gitweb as an instrument list — not film credits, not a poster wordmark, and not reused GIF footage.

## Stack

- Astro (static output)
- TypeScript
- Tailwind CSS v4 (preflight) plus a single composition stylesheet
- IBM Plex Mono (UI) and Newsreader (name)

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
src/pages/index.astro — single page and field script
src/styles/global.css — the composition
public/ — favicon, apple-touch icon, og.jpg, robots.txt, sitemap.xml, .nojekyll

## Deploy

GitHub Pages from dist/. Site URL and base path live in astro.config.mjs (`https://webby-box.github.io` / `/ricky-portfolio`). public/.nojekyll is required so Pages does not hide the `_astro` folder.
