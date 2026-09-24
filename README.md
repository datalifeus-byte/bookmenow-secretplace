# Arteys Prime / Артейс Прайм

Bilingual marketing website (Ukrainian + English) for **Артейс Прайм / Arteys Prime** — rebar / reinforcement steel production.

## Stack

- Vite + React 19 + TypeScript
- Client-side i18n (UA default, EN) with `localStorage` persistence and `?lang=` URL sync
- No backend required

## Run locally

```bash
npm install
npm run dev
```

Open the URL printed by Vite (usually `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview
```

Static output is written to `dist/`.

## Language switch

- Toggle **UA / EN** in the header (no full page reload)
- Preference is stored in `localStorage` under `arteys-prime-locale`
- The `lang` query parameter stays in sync (`?lang=uk` or `?lang=en`)
- `document.documentElement.lang`, `<title>`, and meta description update with the locale

## Notes

- Contact details on the site are **placeholders**
- Quality / ISO wording is generic; no invented certificate serial numbers
- Existing `api/` folder in this repository is unrelated to this marketing site
