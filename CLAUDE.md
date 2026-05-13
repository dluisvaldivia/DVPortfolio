# DVPortfolio — Claude Context

## Owner
Danny Valdivia — Frontend/UX developer. Portfolio deployed to GitHub Pages at `https://dluisvaldivia.github.io/DVPortfolio`.

## Stack
- React 18 + TypeScript + Vite
- Tailwind CSS v4 (via `@tailwindcss/vite` plugin — NO `tailwind.config.ts`, config lives in `src/index.css` under `@theme`)
- framer-motion v12 for animations
- react-router-dom v7 (hash-based SPA routing for GH Pages)
- i18next (EN/ES translations inline in `src/i18n.ts`)
- react-icons, react-circle-flags

## Design System
- **Colors:** White, Emerald `#00674F` (main/accent), Neon Blue `#2222F7` (accent highlight)
- **Aesthetic:** Metallic premium modern — dark base (`#0a0a0f`), glassmorphism cards, subtle gradients, framer-motion entrance animations
- CSS variables defined in `src/index.css` under `:root` and `[data-theme="dark"]`
- Tailwind custom tokens: `--color-bg`, `--color-primary`, `--color-secondary`, `--color-text`, `--color-accent`

## Routes
| Path | Component |
|------|-----------|
| `/` | `Home.tsx` |
| `/rates` | `Rates.tsx` |
| `/free-tools/accessibility-checker` | `AccessibilityChecker.tsx` |
| `*` | `NotFound.tsx` (redirects to `/`) |

## Key Files
- `src/index.css` — global CSS, Tailwind theme tokens, all component classes
- `src/i18n.ts` — all EN/ES strings (no external files)
- `src/models/cardsData.ts` — project cards data
- `src/controllers/themeController.ts` — light/dark theme via `data-theme` on `<html>`
- `src/view/components/Navbar.tsx` — sticky nav, language toggle, smooth scroll
- `src/view/pages/Home.tsx` — hero, about bullets, projects grid, contact form, social links
- `src/view/pages/Rates.tsx` — interactive pricing calculator
- `src/view/pages/AccessibilityChecker.tsx` — WAVE API integration

## Assets (`src/assets/`)
linkedin.svg, github-light.svg, github-dark.svg, calendly.svg, icons8-whatsapp.svg,
image-of-laptop-screen-with-computer-code.webp, thatsveryadhd.png, expensevue.png,
BloomIcon.ico, css-logo.png, html-logo.png, javascript-logo.png

## Contact / Social
- LinkedIn: https://www.linkedin.com/in/dannyvaldivia/
- GitHub: https://github.com/dluisvaldivia
- Calendly: https://calendly.com/dluis-valdivia/30min
- WhatsApp: +34615193280
- Email: dluis.valdivia@gmail.com (formsubmit.co for contact form)

## Deploy
`npm run deploy` → builds then pushes `dist/` to `gh-pages` branch via `gh-pages` package.

## Notes
- No tailwind.config file — Tailwind v4 config is entirely in `src/index.css`
- Theme toggle persists to `localStorage` via `themeController`
- Calendly widget loaded via CDN script in `index.html`
- GH Pages SPA redirect handled via `sessionStorage` script in `index.html`
