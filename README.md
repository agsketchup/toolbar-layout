# Toolbar Layout — Website

Landing page for the **AGS Toolbar Layout** SketchUp extension.

> Live site: [toolbarlayout.com](https://toolbarlayout.com) — deployed on [Vercel](https://vercel.com)

---

## About the extension

**AGS Toolbar Layout** lets SketchUp users save, switch and customize toolbar
arrangements with one click. Latest version: **v2.0.0**.

Install it free from the **[Extension Warehouse](https://extensions.sketchup.com/en/content/toolbar-layout)**.

The extension source code is **not** in this repository — this repo contains
only the public landing page.

---

## Structure

| File | Role |
|------|------|
| `index.html` | Single-page landing site (hero, features, install, demo, support, contact) |
| `images/logo.png` | AGS Toolbar Layout logo (nav, footer) |
| `icons/favicon.*` | Favicon set (16/32/48/180/192/512 + .ico) |
| `download/ags_toolbar_layout_*.rbz` | Extension package for direct download |
| `_headers` | Security HTTP headers (CSP, HSTS, X-Frame-Options…) for Netlify/Cloudflare-compatible hosts |
| `robots.txt` | Crawler rules — blocks scrapers and AI bots, allows major search engines |
| `vercel.json` | Vercel deployment configuration |
| `.well-known/security.txt` | RFC 9116 security contact disclosure |

---

## Local preview

No build step — `index.html` is fully self-contained vanilla HTML/CSS/JS.

```bash
# Quick local server
python -m http.server 8000
# then open http://localhost:8000
```

---

## Deployment

Every push to `main` triggers an automatic Vercel deploy.

---

## Security

- Strict Content Security Policy (`_headers` + meta tag)
- All external links use `rel="noopener noreferrer"`
- Contact form: honeypot + 3 s timing gate + localStorage rate limiting
- YouTube embed via `youtube-nocookie.com`
- **RBZ packages are intentionally excluded from this repo** (see `.gitignore`)
  — they are distributed exclusively through the Extension Warehouse to keep
  the extension source code private.

Vulnerability disclosure: [agsketchup@proton.me](mailto:agsketchup@proton.me)
(see `.well-known/security.txt`).

---

## License

Website content © AGS SketchUp. All rights reserved.

---

*© AGS SketchUp — [agsketchup@proton.me](mailto:agsketchup@proton.me)*
