# Manasa R Krishna — Portfolio

A static, dependency-free site (plain HTML/CSS/JS). No build step required.

## Files
- `index.html` — homepage (hero, about, skills, featured projects, experience, additional work, research, certifications, education, contact)
- `churnwatch.html` — ChurnWatch case study
- `salessight360.html` — SalesSight360 case study (embeds the live Tableau Public dashboard on desktop, links out on mobile)
- `style.css`, `script.js` — shared styles and behavior
- `assets/` — dashboard screenshots + `Manasa_R_Krishna_Resume.pdf` (downloadable résumé)
- `resume.html` — source file used to generate the résumé PDF (edit this + reconvert if you update your resume)

## Before you deploy — things to finish
1. **Contact form**: open `index.html`, search for `[ADD_FORMSPREE_ID]` in the `<form action="...">` attribute, and replace it with a real form ID from https://formspree.io (free tier is enough). Until you do this, the form will show a friendly "not wired up yet" message instead of failing silently.
2. **IEEE paper link**: in `index.html`, search for `[ADD LINK — IEEE Xplore]` and replace the `#` href with your paper's real IEEE Xplore URL.
3. Double-check the GitHub/LinkedIn URLs and email/phone in the footer/contact section match what you want public.

## Deploy to Vercel
**Option A — via GitHub (recommended):**
1. Push this folder to a new GitHub repo.
2. Go to vercel.com → **Add New Project** → import that repo.
3. Framework preset: **Other** (static site) — no build command needed, output directory is the repo root.
4. Deploy.

**Option B — Vercel CLI:**
```
npm i -g vercel
cd portfolio
vercel
```
Follow the prompts (no build settings needed — it's static).

## Updating content later
Each page is plain HTML, so text edits are just editing the relevant `<section>` in `index.html`, `churnwatch.html`, or `salessight360.html`. Screenshots live in `assets/` — swap the file and keep the same filename, or update the `src` in the HTML.
