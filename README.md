# ABS Alumni Spotlight — Duncan MacMillan

A storytelling page for [The Arts Based School](https://www.artsbasedschool.com/) featuring alum Duncan MacMillan's 2026 commencement address. Built as a prototype to demonstrate how ABS can give its best content a permanent, shareable home on the web.

## What this is

Duncan MacMillan (ABS Class of 2016) returned to deliver the commencement speech to the Class of 2026. His speech connects his K–8 arts education at ABS to a creative career that includes songwriting, filmmaking, and working on Netflix's *Outer Banks*. This page presents his story as an editorial feature with pull quotes, a timeline, and enrollment CTAs — the kind of content that helps prospective families understand what ABS graduates go on to do.

## Why it matters

ABS publishes a weekly newsletter called Thursday Notes with rich stories about students, alumni, and the arts-integrated curriculum. That content currently lives in dated blog posts that scroll off the page within a week and are invisible to search engines and AI tools. This page is a proof-of-concept for giving the best stories a longer shelf life — indexable, shareable, and optimized for how families actually discover schools today.

## Running locally

This is a single-file React component. To preview locally:

```bash
npx create-react-app abs-alumni --template minimal
cp abs-alumni-duncan-macmillan.jsx abs-alumni/src/App.jsx
cd abs-alumni
npm start
```

Or open the `index.html` version directly in a browser — it's self-contained with no build step.

## Deploying to GitHub Pages

1. Push the `index.html` file to the `main` branch
2. Go to **Settings → Pages → Source** and select `main` / `/ (root)`
3. Your site will be live at `https://<username>.github.io/<repo-name>/`

## Related files

| File | Description |
|------|-------------|
| `index.html` | Self-contained page (React via CDN, no build step) |
| `abs-alumni-duncan-macmillan.jsx` | React component source |
| `ABS-GEO-Audit-May-2026.docx` | Website optimization audit for ABS |
| `abs-newsletter-cms.xlsx` | Google Sheets CMS template for Thursday Notes |

## Context

This is part of a broader volunteer effort to help ABS improve its digital presence, including a [GEO (Generative Engine Optimization) audit](./ABS-GEO-Audit-May-2026.docx) and a prototype [parent newsletter dashboard](./abs-march-19-dashboard.jsx) that makes Thursday Notes filterable by grade and category.

Built with care for ABS by Gus Cavanaugh, ABS parent.
