# ByteShop 🛒⚡

[![React](https://img.shields.io/badge/React-18.3-61dafb?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646cff?logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38bdf8?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Deployment](https://img.shields.io/badge/Vercel-Deployed-black?logo=vercel&logoColor=white)](https://byte-shop-gamma.vercel.app/)
[![Good First Issues](https://img.shields.io/badge/Good%20First%20Issues-Welcome-brightgreen)](#)
[![Hacktoberfest](https://img.shields.io/badge/Hacktoberfest-Ready-orange)](#)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A clean, minimalist e-commerce storefront for developer books and tech gadgets. **ByteShop** is specifically designed as a beginner-friendly practice ground for first-time open source contributors.

🔗 **Live Demo**: [https://byte-shop-gamma.vercel.app/](https://byte-shop-gamma.vercel.app/)

---

## 🌟 Features

- **Curated Catalog**: Search and browse computer science books, mechanical keyboards, ergonomic mice, and desk gear.
- **Instant Search & Category Filters**: Real-time filtering by category ("Electronics", "Books", "Accessories", "Audio").
- **Shopping Cart Drawer**: Slide-over cart with item counts, quantity modifiers, and subtotal calculation.
- **Zero-Friction Dev Setup**: Modern React powered by Vite for lightning-fast hot module reloading.

---

## 🚀 Quick Start (Run Locally)

Make sure you have [Node.js](https://nodejs.org/) (version 18 or newer) installed on your system.

```bash
# 1. Clone your fork of the repository
git clone https://github.com/<your-username>/ByteShop.git

# 2. Navigate to the project directory
cd ByteShop

# 3. Install project dependencies
npm install

# 4. Start the local development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your web browser. Any changes you make in the code will update in the browser automatically!

---

## 🎯 How to Contribute

We have pre-planted **10 isolated, beginner-friendly issues** designed to teach you the fundamentals of Git, branches, and Pull Requests without worrying about complex architectures or merge conflicts.

1. Check out the [Open Issues](../../issues) and find an issue with the `good first issue` label.
2. Read our step-by-step [CONTRIBUTING.md](CONTRIBUTING.md) guide.
3. Don't forget to add your name to the [CONTRIBUTORS.md](CONTRIBUTORS.md) Hall of Fame!

---

## 📁 Project Architecture

```
ByteShop/
├── index.html                   # HTML entry point
├── package.json                 # Project configuration & scripts
├── vite.config.js               # Vite bundler config
├── tailwind.config.js           # Tailwind CSS theme styling
├── src/
│   ├── main.jsx                 # React root mount
│   ├── App.jsx                  # Main application state and layout
│   ├── index.css                # Global Tailwind CSS styles
│   ├── data/
│   │   └── products.js          # Catalog data source
│   └── components/
│       ├── Banner.jsx           # Hero headline & promo banner
│       ├── Navbar.jsx           # Header logo and cart counter button
│       ├── SearchBar.jsx        # Search input & filtering helper
│       ├── CategoryFilter.jsx   # Category filter pills
│       ├── ProductCard.jsx      # Product card with price and stock status
│       ├── CartDrawer.jsx       # Slide-over cart drawer with checkout
│       └── Footer.jsx           # Footer links and newsletter form
├── issues/
│   └── ISSUES_CATALOG.md        # Full catalog of starter issues
├── CONTRIBUTING.md              # Beginner Git & Pull Request guide
├── CONTRIBUTORS.md              # Contributor Hall of Fame
└── LICENSE                      # MIT Open Source License
```

---

## 📄 License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute it for workshops, meetups, and learning!
