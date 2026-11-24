# Garvit (Rishabh) & Geetanjali (Varsha) — Wedding Invitation

A traditional Indian wedding invitation web app featuring animated ceremony cards, hand-crafted SVG decorations, a live countdown timer, embedded venue map, and background music.


---

## Features

- **3 swipeable cards** — IntroCard, WeddingCard, ThankYouCard
- **Touch & keyboard navigation** — swipe gestures, arrow keys, nav dots, prev/next buttons
- **Scroll-down button** with directional indicator (flips at bottom)
- **Live countdown timer** to the wedding date
- **Embedded Google Maps** with "Get Directions" link
- **Background music** toggle — auto-plays on invite open, loops at volume 0.3, handles iOS pause/resume
- **Dynamic OG image** for rich link previews (couple names, date range, location, kalash icon)
- **15+ hand-crafted SVG decorations** — CornerOrnament, OrnamentalBorder, TopFlourish, SectionDivider, AnimatedMandala, LotusMotif, Diya (flame animation), FloatingPetals, SparkleField, MarigoldGarland, TurmericDust, MehndiVine, FloralCorner, Bell, Kalash
- **Framer Motion animations** — entrance transitions, SVG drawing, rotating mandala, diya flame, sparkle twinkling, floating petals
- **Card-specific color palettes** — gold/parchment (Intro & ThankYou), maroon/red (Wedding)
- **Map preview** on each venue (live Google map; set `NEXT_PUBLIC_LIVE_MAP=0` to show a drawn preview that links out)
- **Add to calendar**, **Open in Maps** and **Copy address** on every venue
- **Names, dates and venues** all come from `src/lib/events.ts` — edit them there

---

## Prerequisites

- **Node.js** 18.17 or later
- **npm** 9+ (ships with Node.js)

---

## Getting Started

```bash
# 1. Clone the repository
git clone https://github.com/<your-username>/wedding-invitation.git
cd wedding-invitation

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server with hot reload on `localhost:3000` |
| `npm run build` | Create an optimized production build |
| `npm run start` | Serve the production build locally |
| `npm run lint` | Run ESLint across the project |

---

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `NEXT_PUBLIC_SITE_URL` | Production URL used for Open Graph image resolution | `https://wedding-invitation-pearl-eight.vercel.app` |

Create a `.env.local` file in the project root to override:

```
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

---

## Project Structure

```
src/
├── app/
│   ├── page.tsx              # Main page — 6-card navigation, swipe & keyboard handling
│   ├── layout.tsx            # Root layout, Google Fonts & OG metadata
│   ├── globals.css           # Design tokens, animations, color palettes, theme
│   └── opengraph-image.tsx   # Dynamic OG image for link previews
└── components/
    ├── AudioToggle.tsx       # Background music toggle with iOS handling
    ├── Decorations.tsx       # 15+ SVG decorative elements (paisley, mandala, diya, etc.)
    └── cards/
        ├── IntroCard.tsx     # Welcome card — Ganesha, animated mandala, wax seal
        ├── WeddingCard.tsx   # Wedding ceremony — countdown, venue map, directions
        └── ThankYouCard.tsx  # Closing card — rotating mandala, contacts, hashtag

public/
├── ganesh.png               # Lord Ganesha illustration
├── kalash.svg               # Traditional kalash icon
├── swastika.svg             # Auspicious swastika symbol
├── wedding.png              # Bride & groom illustration
├── wedding2.png             # Wedding photo (alt)
├── globe.svg                # Globe icon
└── music.mp3                # Background music
```

---

## Design Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--cream` | `#f5e6c8` | Card backgrounds |
| `--beige` | `#ead2a2` | Secondary backgrounds |
| `--antique-gold` | `#d4af37` | Primary accent, gold text |
| `--burnt-orange` | `#b06a3c` | Warm accent |
| `--maroon` | `#7a3e1d` | Traditional accent |
| `--deep-umber` | `#8b5a2b` | Deep tones |
| `--dark-bg` | `#1a0e04` | Main background |

---

## Tech Stack

| Category | Technology |
|----------|-----------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 |
| UI | React 19 |
| Styling | Tailwind CSS 4 |
| Animation | Framer Motion 12 |
| Fonts | Cinzel Decorative, Playfair Display SC, Great Vibes, Cormorant Garamond |
| Deployment | Vercel |

---

## Metadata

| Field | Value |
|-------|-------|
| Page Title | Garvit (Rishabh) & Geetanjali (Varsha) \| Invitation |
| Description | Wedding on 14 December 2026 (Noida). |

---

## Deployment

Hosted on GitHub Pages: https://harshkm.github.io/garvit-geetanjali-invitation/

Every push to `main` runs `.github/workflows/deploy.yml`, which builds a static export (`out/`) and publishes it. To redeploy without a change: Actions tab → "Deploy to GitHub Pages" → Run workflow.

---

## License

Private — not licensed for redistribution.
