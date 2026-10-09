# RedApp

Landing page for **Red by WORTH** — *Find chemistry through character.*

Built with React 19, Vite and Tailwind CSS v4. Deploys to Vercel out of the box.

## Getting started

```bash
npm install
npm run dev      # local dev server
npm run build    # production build in dist/
npm run preview  # preview the production build
```

## Project structure

- `src/components/` — one component per landing-page section
- `src/assets/` — logo files
- `public/screens/` — app screenshots
- `public/` — favicons

App Store / Google Play links are set in `src/components/Ui.jsx` (`APP_STORE_URL`, `PLAY_STORE_URL`).

## Deploy

Import the repo on [vercel.com](https://vercel.com) — the Vite framework preset is detected automatically (`vercel.json` is included).
