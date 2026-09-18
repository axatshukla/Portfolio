# Quick Setup & Dependencies

## 1. Prerequisites
- **Node.js** (v18.0.0 or higher) — [Download](https://nodejs.org/)
- **npm** (included with Node.js)

---

## 2. How to Run on Another Device

Open your terminal in this project folder and run:

```bash
# 1. Install all dependencies
npm install

# 2. Start local dev server
npm run dev
```

> **Windows PowerShell note:** If permissions block scripts, run `npm.cmd install` and `npm.cmd run dev`.

Open in your browser at: **`http://localhost:5173/`**

---

## 3. Key Dependencies

- **React 19 & Vite** — Core framework & fast dev server
- **Tailwind CSS (v3.4)** — Styling system & custom theme
- **lucide-react** — SVG icons & floating dock navigation
- **jspdf** — Client-side dynamic PDF resume generator
- **canvas-confetti** — Celebration particle effects

---

## 4. Production Build
```bash
# Build optimized static bundle in dist/
npm run build

# Preview build locally
npm run preview
```
