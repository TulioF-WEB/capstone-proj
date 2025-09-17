# Network — ISP Landing Page (React.js)

A responsive landing page for a mock Internet Service Provider (**Network**). The site showcases plans, coverage, and a simple sign‑up flow, with a clean, accessible design and an ISP‑friendly color palette. Made for Tamwood college capstone project.

## ✨ Overview
- **Home**: Hero + three info sections with custom SVGs and CTA.
- **Plans** (`/plans`): Pricing cards with network‑themed icons.
- **Coverage** (`/coverage`): Address checker UI (non‑functional due to prevent default) and network expansion info.
- **Sign‑Up** (`/sign-up`): Simple form UI (non‑functional) with optional email prefill via `?email=`.
- **Global**: Navbar & Footer, scroll to top, external social links.

## 🧱 Tech Stack
- **React.js** — 
- **react-router-dom** — client‑side routing
- **styled-components** — theming & responsive UI
- **react-icons** — network‑themed icons (Wi‑Fi, wired, satellite)
- **SVG illustrations** — imported and used as images

## 🎨 Design Notes
- Palette: dark background `#1c1f2a`, teal `#4db6ac`, soft sky blue `#64b5f6` (some hover variants applied).
- Reusable `Button` from `globalStyles.js` .
- Info sections accept content via small config objects in `Data.js` (for swap purposes).

## 🚀 Getting Started
use bash (recommended)
# Node 16–20 work. CRA v5 is recommended, might have issues running it otherwise.
npm install
npm start
```
The app runs at `http://localhost:3000/`.

### Common Scripts
```bash
npm start       # development server
npm run build   # build for production
npm test 
```

## 🗂️ Project Structure (key parts)
```
src/
  components/
    Footer/              # footer + socials
    InfoSection/         # reusable section ( with layout and styles)
    Navbar/              # nav 
    Pricing/             # plan cards
    ScrollToTop.js       # restore scroll on route change
  pages/
    HomePage/
      Home.js
      Data.js            
    Products/            # "Coverage" page
      Products.js
      Data.js
    Services/            # "Plans" page
      Services.js
      Data.js
    SignUp/              # non-functional form ( has prevent default on it ), prefill from ?email=
      SignUp.js
      Data.js
  images/                # SVGs
  App.js                 # routes 
  globalStyles.js        # theme + base styled components
  index.js               # app bootstrap
```

## 📝 Notes / Known Issues
-- Routing: Paths are `/`, `/plans`, `/coverage`, `/sign-up`. Older `/services` and `/products` paths can be changed if so desiredd.

