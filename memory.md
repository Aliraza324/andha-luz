# Project Memory

This file serves as a memory for the current state and tech stack of the **Andha-luzweb** project.

## Tech Stack & Packages
Based on the `package.json`, here is the current technology stack:

- **Framework**: React 19 (`react`, `react-dom`)
- **Build Tool**: Vite 8 (`vite`, `@vitejs/plugin-react`)
- **Routing**: React Router DOM (`react-router-dom` v7.18.3)
- **Styling**: Tailwind CSS v4 (`tailwindcss`, `@tailwindcss/vite`)
- **Animations**: Framer Motion (`framer-motion` v13.1.1)
- **Icons**: Lucide (`lucide`)
- **Utilities**: `clsx` and `tailwind-merge` (typically used together for merging Tailwind classes dynamically)
- **Linting**: Oxlint (`oxlint`)

## Fonts
- **Sora** (sans-serif)
- **MuseoModerno** (sans-serif)
- **Playfair Display** (serif)

## Project Guidelines
- **Routing**: Never use standard anchor (`<a>`) tags for internal navigation. Always use the `<Link>` component from `react-router-dom`.
- **Animations**: Use the Framer Motion variants defined in `src/animations/animation.js` throughout the app. Specifically, apply the `buttonClick` variant (`whileHover="hover" whileTap="tap"`) to all clickable elements like Links and Buttons.

## Notes
- `framer-motion` variants have been created in `src/animations/animation.js` for fade in, fade out, and button clicks.
- Google Fonts are imported directly in `src/index.css`.
