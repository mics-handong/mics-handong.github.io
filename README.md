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

## Deploying

The site is hosted on GitHub Pages from
<https://github.com/mics-handong/mics-handong.github.io> and served at
**<https://mics-handong.github.io/>**.

The repository is owned by the `mics-handong` organization rather than by a
personal account, so it stays with the lab as people come and go. Ask the PI
for write access.

### Updating the site

Edit the file you need in `data/`, then:

```
git add .
git commit -m "Update publications"
git push
```

GitHub rebuilds the site within about a minute. There is no build step to run
and nothing to install.

### First-time setup on a new machine

```
git clone https://github.com/mics-handong/mics-handong.github.io.git
cd mics-handong.github.io
```

Open `index.html` in a browser to preview. For a local server instead:

```
python -m http.server 4173
```

### Custom domain

If the university issues a subdomain (e.g. `mics.handong.edu`):

1. Add a file named `CNAME` at the top level containing only that domain.
2. Ask university IT for a DNS CNAME record pointing the subdomain at
   `mics-handong.github.io`.
3. In **Settings -> Pages**, enter the domain and tick *Enforce HTTPS* once the
   certificate is issued.

The `mics-handong.github.io` address keeps working and redirects to the new one.
