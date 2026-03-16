# Patrick Rodrigues — Portfolio

Personal portfolio built with **Next.js 15**, **TypeScript**, **Tailwind CSS 4** and **Framer Motion**.

## Stack

- [Next.js 15](https://nextjs.org/) — App Router
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) — animations

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx       # Root layout + metadata
│   ├── page.tsx         # Main page (assembles sections)
│   └── globals.css      # Global styles + CSS variables
├── components/
│   ├── Nav.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Experience.tsx
│   ├── Skills.tsx
│   ├── Education.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── SectionHeader.tsx
└── lib/
    └── data.ts          # All content in one place — edit here
```

## Customization

All content lives in `lib/data.ts`. Edit that file to update text, experience, skills, etc. No need to touch components.

## Deploy

Push to GitHub and import on [Vercel](https://vercel.com). Zero config needed.

```bash
git init
git add .
git commit -m "initial commit"
# connect to vercel via CLI or vercel.com dashboard
```
