# InheritX AI

Frontend foundation built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- ESLint + Prettier

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command          | Description              |
| ---------------- | ------------------------ |
| `npm run dev`    | Start development server |
| `npm run build`  | Create production build  |
| `npm run start`  | Start production server  |
| `npm run lint`   | Run ESLint               |
| `npm run format` | Format with Prettier     |

## Project structure

```text
src/
  app/                 # App Router routes and layouts
  components/
    layout/            # Layout components
    ui/                # Reusable UI components
  hooks/               # Custom React hooks
  lib/                 # Shared utilities
  types/               # Shared TypeScript types
```

This project is currently UI-only. Backend, APIs, and business logic will be added later.
