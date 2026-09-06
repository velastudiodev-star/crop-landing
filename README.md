# CROP Landing Page

A dependency-free, mobile-first landing page for **CROP - Fitness Journey**. It can be deployed as a static site to GitHub Pages, Vercel, Netlify, or any HTTPS host.

## Structure

```text
landing-page/
├── index.html       # Page structure, SEO and Open Graph metadata
├── styles.css       # Responsive editorial design
├── script.js        # App Store URL and lightweight reveal animation
└── images/          # Replaceable image assets
```

## Design direction

- Charcoal-black sports editorial canvas with oversized condensed typography.
- Image-first story flow: workout editor, filters, gallery, monthly consistency, and CROP PRO.
- CSS-only device mockups and visual fallbacks keep the page polished before images are supplied.
- Motion is limited to reveal transitions and respects `prefers-reduced-motion`.

## Replace images

Put production images in `images/` using these names. The page automatically falls back to styled placeholders while any file is missing.

```text
images/runner-beach.png
images/gym-duo.png
images/bench-press.png
images/crop-gallery.png
images/filter-night.jpg
images/filter-motion.jpg
images/filter-mono.jpg
images/og-cover.png
images/favicon.png
```

For a static deployment at the site root, the public paths are `/images/<filename>`. The HTML uses relative paths so it also works under a GitHub Pages repository path.

## Set the App Store URL

Open `script.js` and replace the one value below after the App Store listing is live:

```js
const APP_STORE_URL = '#';
```

All Download and CROP PRO CTA buttons use that shared value.

## Local preview

Open `index.html` directly in a browser, or serve this folder with any static server. For example, in the `landing-page` directory:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## Publish

### GitHub Pages

1. Push the contents of `landing-page/` to a repository.
2. In **Settings → Pages**, choose the branch and `/ (root)` directory.
3. Replace `APP_STORE_URL` and add the image files before publishing.

### Vercel

1. Import the repository in Vercel.
2. Set the project root directory to `landing-page`.
3. Use the default static-site deployment settings.

No build step, framework runtime, analytics, cookies, or external JavaScript dependencies are required.
