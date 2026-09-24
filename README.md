# Two separate sites

This repository holds two independent marketing sites. They do not share layout, CSS, or copy.

| Site | Entry | Subject |
|------|--------|---------|
| Артейс Прайм / Arteys Prime | `index.html` | Rebar production, dark industrial page |
| ТД Синерджи / TD Synergy | `synergy.html` | Construction works and reinforcement shop, light editorial page |

Open Synergy at `http://localhost:5173/synergy.html`.

## ТД Синерджи

Bilingual (Ukrainian default, English) site for **ТОВ «Сінерджи Торговий дім»** (EDRPOU 45779288, Kyiv). Legal facts come from the public company register. No telephone is published there, so the enquiry form only assembles a message locally.

Language preference is stored as `td-synergy-locale` and synced with `?lang=`.

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

## Photo credits

Images are free-license stock, downloaded into `public/images/` (WebP + JPG):

| File | Source | Subject |
|------|--------|---------|
| `hero` | [Unsplash](https://unsplash.com/photos/1541888946425-d81bb19240f5) | Construction site with rebar grid |
| `rebar-site` | [Unsplash](https://unsplash.com/photos/1504307651254-35680f356dfd) | Workers with rebar bundles |
| `rebar-cage` | [Unsplash](https://unsplash.com/photos/eyq7H7gO0EY) | Reinforcement cage (worm’s-eye) |
| `rebar-stack` | [Unsplash](https://unsplash.com/photos/KS6YES3Djmc) | Stacked ribbed rebar |
| `rebar-stack2` | [Unsplash](https://unsplash.com/photos/jwo9B-rDXjs) | Outdoor rebar stack |
| `steel-bars` | [Unsplash](https://unsplash.com/photos/1504917595217-d4dc5ebe6122) | Steel work with sparks |
| `pour-rebar` | [Pexels](https://www.pexels.com/photo/2219024/) | Concrete pour over rebar |
| `worker-site` | [Pexels](https://www.pexels.com/photo/585419/) | Worker on site near cages |
| `site-aerial` | [Pexels](https://www.pexels.com/photo/159306/) | Construction slab / rebar context |
| `building` | [Unsplash](https://unsplash.com/photos/1541976590-713941681591) | Modern building (applications) |

Licenses: [Unsplash License](https://unsplash.com/license), [Pexels License](https://www.pexels.com/license/).