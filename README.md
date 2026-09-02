# Lab homepage

Static site - plain HTML/CSS/JS, no build step, no dependencies.

## How to edit

All content lives in `data/`. You should not need to touch the HTML.

| File                    | What it holds                                  |
|-------------------------|------------------------------------------------|
| `data/site.js`          | Lab name, address, email - header/footer/contact |
| `data/research.js`      | Research areas (home + research page)          |
| `data/members.js`       | PI, current students, alumni                   |
| `data/publications.js`  | Papers and patents                             |
| `data/news.js`          | Lab news on the home page                      |

Rules of thumb:
- Wrap a lab member's name in `**Name**` in the `authors` field to highlight it.
- Photos: drop a square image in `assets/img/` and set `photo: "assets/img/name.jpg"`.
  Leave `photo: ""` and the site draws the person's initials instead.
- Colors and fonts: the variables at the top of `assets/css/style.css`.

To preview, just double-click `index.html`. No server needed.

## Logo

Cropped from the original `MICS로고.png`:

| File | Size | Used for |
|---|---|---|
| `assets/img/logo.png`      | 512x126 | header lockup (icon + MICS) |
| `assets/img/logo-full.png` | 821x240 | full lockup with the tagline, for larger use |
| `assets/img/icon.png`      | 512x512 | the circular icon alone; also the apple-touch-icon |
| `favicon.ico`              | 16/32/48 | browser tab |

These have a white background, not transparency - fine on the white header.
For a dark background, export a transparent PNG from the original design file
and drop it in over `logo.png`.

Setting `logo: ""` in `data/site.js` falls back to a plain text wordmark.

## Deploying to GitHub Pages

1. Create a repository on GitHub (e.g. `mics-lab.github.io` or `lab-website`).
2. From this folder:

   ```
   git init
   git add .
   git commit -m "Initial lab homepage"
   git branch -M main
   git remote add origin https://github.com/<org-or-user>/<repo>.git
   git push -u origin main
   ```

3. On GitHub: **Settings -> Pages -> Source: Deploy from a branch -> main / (root)**.
4. The site goes live at `https://<user>.github.io/<repo>/` in about a minute.
   Every later `git push` republishes it.

### Custom domain

Add a file named `CNAME` containing just the domain (e.g. `mics.example.ac.kr`),
then ask the university IT team for a CNAME DNS record pointing at
`<user>.github.io`. HTTPS is issued automatically.
