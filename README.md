# Cenk Zenginer — portfolio

Personal portfolio site: <https://cenkzenginer.github.io/portfolio/>

A single static page. Plain HTML and CSS, no framework and no build step.

## Policy

- No JavaScript, cookies, analytics or third-party requests.
- Fonts (IBM Plex Sans and IBM Plex Mono, latin + latin-ext) are self-hosted
  under `assets/fonts/`, with their SIL Open Font License files.
- All paths are relative, so the site works at `/portfolio/` and at a domain
  root. The one exception is `404.html`: GitHub Pages serves it for missing
  URLs at any depth, so its styles are inline and its links are absolute.
- The site targets WCAG 2.2 AA.

## Structure

```
index.html              the page
404.html                not-found page (self-contained)
favicon.svg             "CZ" monogram
apple-touch-icon.png
.nojekyll               serve files as-is, skip Jekyll
assets/
  css/style.css         all styles; colours are custom properties
  fonts/                woff2 files + OFL licences
  img/                  portrait and company logos (WebP)
  projects/             project screenshots (WebP)
  og-image.png          1200×630 social preview
  Cenk_Zenginer_CV.pdf
```

## Deployment

GitHub Pages, deployed from the `main` branch root
(repository Settings → Pages → Deploy from a branch → `main` / `/ (root)`).
Pushing to `main` publishes the site; there is nothing to build.

## Local preview

```bash
python -m http.server 8000
```

Then open <http://localhost:8000/>.

## Colours

The dark scheme is the default; the light scheme follows
`prefers-color-scheme`. Measured contrast ratios (WCAG 2.x formula):

| Pair | Dark | Light | Required |
|---|---|---|---|
| Text on background | 15.81 | 16.42 | 4.5 |
| Text on surface | 14.59 | 17.61 | 4.5 |
| Muted text on background | 8.77 | 7.34 | 4.5 |
| Muted text on surface | 8.09 | 7.87 | 4.5 |
| Accent (links, focus ring) on background | 8.50 | 7.22 | 4.5 |
| Accent on surface | 7.85 | 7.74 | 4.5 |
| Primary button text on accent | 8.50 | 7.80 | 4.5 |
| Button and chip borders on background | 4.25 | 4.02 | 3 |
| Button and chip borders on surface | 3.92 | 4.31 | 3 |

If you change a colour token in `assets/css/style.css` (and its copy in
`404.html`), re-measure these.
