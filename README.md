# Yogi Pranata — Personal Portfolio

Personal portfolio website built with **Next.js 16**, **TypeScript**, and **Tailwind CSS**. Showcasing my projects, skills, and professional experience as a Web Developer.

🔗 **Live:** [yogipranata.vercel.app](https://yogipranata.vercel.app)

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router, SSG) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Icons | Lucide React, React Icons |
| Deployment | Vercel |

## Features

- ⚡ Static Site Generation (SSG) for fast page loads
- 📱 Fully responsive (mobile-first design)
- 🎨 Glassmorphism UI with smooth animations
- 📄 Detailed Case Study pages for each project
- 🖼️ Interactive screenshot gallery with lightbox
- 🔍 SEO optimized (Open Graph, meta tags, structured data)
- ♿ Accessible (keyboard navigation, ARIA labels)

## Project Structure

```
src/
├── app/
│   ├── page.tsx              # Homepage
│   ├── layout.tsx            # Root layout + SEO metadata
│   └── projects/[slug]/     # Dynamic project detail pages
├── components/               # Reusable UI components
├── data/
│   └── projects.ts           # Project data (Case Studies)
└── types/
    └── project.ts            # TypeScript type definitions
```

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## License

This project is for personal use. All rights reserved.
