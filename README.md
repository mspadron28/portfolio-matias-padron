# Matías Padrón — Portfolio Web

Personal portfolio built with **Next.js 16**, **Tailwind CSS v4**, and **TypeScript**. Fully bilingual (EN/ES), responsive, and deployed on Vercel.

---

## Stack

| Layer | Tech |
|-------|------|
| Framework | Next.js 16 (App Router) |
| Styling | Tailwind CSS v4 |
| Language | TypeScript |
| Animations | Framer Motion |
| Icons | React Icons |
| Font | Inter (next/font/google) |

---

## Features

- **Bilingual** — full English / Spanish toggle, translations centralized in `constants/translations.ts`
- **Hero Section** — animated description, social bar, dynamic CV download per language
- **About Section** — bio, skill carousel, interactive skills dashboard with category filter
- **Projects Section** — featured projects with Next.js `<Image />`, lightbox preview, and Framer Motion entrance animations
- **Contact Section** — multilingual contact form
- **Responsive** — mobile-first layout, adapted for mobile, tablet, and desktop

---

## Getting Started

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
├── app/
│   ├── globals.css       # Theme variables & base styles
│   ├── layout.tsx        # Root layout + LanguageProvider
│   └── page.tsx          # Page composition
├── components/
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── ProjectsSection.tsx
│   └── ...
├── constants/
│   └── translations.ts   # All EN/ES strings
├── context/
│   └── LanguageContext.tsx
└── public/
    ├── cv/               # CV PDFs (cv-matias-padron-en.pdf, cv-matias-padron-es.pdf)
    └── projects/         # Project screenshots
```

---

## CV Files

Place your CV PDFs in `/public/cv/`:

```
public/cv/cv-matias-padron-en.pdf
public/cv/cv-matias-padron-es.pdf
```

---

## Contact

**Matías Padrón** — [matiaspadron2@gmail.com](https://mail.google.com/mail/?view=cm&to=matiaspadron2@gmail.com) · [LinkedIn](https://www.linkedin.com/in/matiaspadron28/) · [GitHub](https://github.com/mspadron28)
