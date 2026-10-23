# Kode-n-Rolla portfolio — unpublished preview

Static, dependency-free GitHub Pages website. **Not published.**

## Edit content without touching HTML or CSS

Open `site-data.js`. Everything you normally change is there:

- `identity.name`: your real name (placeholder currently, do not publish without editing)
- `identity.headline`, `identity.intro`, `about`: homepage and about text
- `contact.email`, `.linkedin`, `.telegram`: leave `""` to hide an unfinished contact method
- `services`: edit/remove/add service cards
- `projects`: edit/remove/add project objects; `featured: true` makes a project appear on the page, `featured: false` hides it without deleting; array order controls display order

**Adding a project**: copy an existing object inside `projects`, give it a unique `id`, update `name`, `type`, `description`, `tech`, `github`, `status`, set `featured: true`. Don't forget comma separators. The responsive grid handles any card count automatically.

**Removing a project**: use `featured: false` (recommended) or delete its entire object. No HTML editing needed.

Current project claims reflect project READMEs. `rolla-node` and `Cerebro` are clearly marked works in progress. No claims of audits or paid clients are made.

## Preview locally

Open `index.html` in a browser, or run `python -m http.server 8000` in this folder and visit http://localhost:8000.

## Publish later (only after approval)

Create a **public** repository named `Kode-n-Rolla.github.io`, put files at repository root, then in GitHub Settings → Pages select `Deploy from a branch`, `main`, `/ (root)` if necessary. Visit https://kode-n-rolla.github.io/. It may take a little time for Pages to deploy.

## Before publishing

- Fill in real name and approved contact links in `site-data.js`.
- Review every project description and service claim.
- Confirm whether to advertise Web3-related work prominently.
- Decide if external Google Fonts requests are acceptable; remove `@import` in `styles.css` for system-font only.
- Optional: add favicon, image/social preview and a custom domain later.
