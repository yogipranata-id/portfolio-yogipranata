# Yogi Pranata — Personal Portfolio

A modern, high-performance personal portfolio website built with **Next.js 16**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Designed with a luxurious *Warm Titanium & Pure Amber Gold* aesthetic, featuring full internationalization (i18n), seamless light/dark mode transitions, and interactive 3D component showcases.

🔗 **Live Website:** [yogipranata.vercel.app](https://yogipranata.vercel.app)

---

## ✨ Features

- 🌓 **Dual Theme Support (Light & Dark Mode):** Powered by `next-themes` and **Magic UI Animated Theme Toggler** with smooth circular view-transition effects.
- 🌐 **Internationalization (i18n):** Multi-language support (**Indonesian & English**) powered by `next-intl` with instant in-place switching.
- 🎠 **3D Perspective Project Gallery:** Interactive 3D album stack carousel with scale & depth transitions, live demo, and source code links.
- 📄 **In-Depth Case Study Pages:** Dedicated dynamic routes (`/projects/[slug]`) detailing objectives, tech stacks, architectural challenges, solutions, and screenshots.
- 🖼️ **Interactive Screenshot Lightbox:** Fullscreen image modal gallery with keyboard and touch navigation.
- 🎓 **Experience & Certification Modal Viewer:** Career and education timeline with an interactive multi-page certificate viewer.
- 📱 **Fully Responsive Design:** Mobile-first layout with desktop header, mobile navigation drawer, and an adaptive floating navigation pill.
- ⚡ **Optimized Performance & SEO:** Next.js 16 App Router with Turbopack, Open Graph metadata, semantic HTML, and structured data.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router, Turbopack) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) & Vanilla CSS |
| **Theming** | [`next-themes`](https://github.com/pacocoursey/next-themes) + [Magic UI](https://magicui.design/) Animated Theme Toggler |
| **Internationalization** | [`next-intl`](https://next-intl-docs.vercel.app/) (ID / EN) |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) |
| **Icons** | [Lucide React](https://lucide.dev/), [React Icons](https://react-icons.github.io/react-icons/) |
| **Deployment** | [Vercel](https://vercel.com/) |

---

## 📁 Project Structure

```text
portfolio-yogipranata/
├── messages/                 # i18n translation dictionaries (en.json, id.json)
├── public/                   # Static assets, project screenshots, and profile images
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Root layout with ThemeProvider & next-intl
│   │   ├── page.tsx          # Homepage combining all portfolio sections
│   │   ├── globals.css       # Global styles, variables, & view transitions
│   │   └── projects/[slug]/  # Dynamic case study pages
│   ├── components/
│   │   ├── ui/               # Magic UI and shared primitive components
│   │   ├── Navbar.tsx        # Responsive navbar with language & theme toggles
│   │   ├── Hero.tsx          # Hero section with 3D tilt interactive card
│   │   ├── About.tsx         # About section with word-by-word reveal text
│   │   ├── Skills.tsx        # Bento grid skill cards with mouse-tracking glow
│   │   ├── Experience.tsx    # Timeline & certificate preview modal
│   │   ├── Projects.tsx      # 3D perspective carousel gallery
│   │   ├── Contact.tsx       # Contact card with animated gradient border
│   │   └── Footer.tsx        # Footer and social links
│   ├── data/
│   │   └── projects.ts       # Structured project details and case study content
│   ├── i18n/                 # next-intl configuration & request handler
│   └── types/                # TypeScript interface definitions
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17+ or later
- npm, yarn, or pnpm

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yogipranata-id/portfolio-yogipranata.git
   cd portfolio-yogipranata
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```

---

## 📄 License

This project is open for personal portfolio showcase and reference. All personal content and media rights belong to **Yogi Pranata**.
