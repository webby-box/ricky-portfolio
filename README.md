# Ricky Cheuk — portfolio

Personal site for Ricky Cheuk (https://rickycheuk.com): software engineer working in AI and big data. Static Astro plus TypeScript. No backend, no auth.

## Stack

- Astro (static output)
- TypeScript
- Tailwind CSS v4 (design tokens and layout; custom CSS for the film / node-graph look)
- Self-hosted fonts: Bricolage Grotesque, Newsreader, IBM Plex Mono

## Requirements

Node.js 22.12 or newer (Astro 7).

## Commands

All commands run from this directory.

Install dependencies with the package manager script named install.

Local development at http://localhost:4321 uses the package script named dev.

Production build uses the package script named build. Static files are written to dist/

Preview the production build with the package script named preview.

## Layout

src/assets — portraits, logo, project marks (optimized; not hotlinked)
src/components — Nav, Hero, Work, About, Experience, Footer
src/layouts — document shell, SEO, Open Graph
src/pages/index.astro — single page
src/styles/global.css
public/ — favicon, apple-touch icon, og.jpg, robots.txt, sitemap.xml

## Deploy

Any static host. Publish the dist/ folder after a production build. Keep the site URL in astro.config.mjs in sync with the public domain.

Invoke those scripts through the Node package manager. The production output directory is dist/.
