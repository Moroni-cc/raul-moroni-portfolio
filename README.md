# Raúl Moroni — Portfolio

Reconstrucción del diseño "Crimson Nocturne" (el que subiste en el zip de Stitch)
como una app Next.js modular, con TypeScript y Tailwind CSS v4.

## Estructura

```
app/
  layout.tsx        Fuentes (Playfair Display, Hanken Grotesk, Geist) + metadata
  page.tsx           Compone todas las secciones
  globals.css         Tokens de diseño Tailwind v4 (@theme) — colores, tipografía, espaciado
components/
  Header.tsx          Nav fija + menú móvil (client component)
  Hero.tsx
  About.tsx
  Skills.tsx          + SkillCard interno
  Projects.tsx        + ProjectCard / FeaturedProjectCard / TagList internos
  Contact.tsx         Lista de canales de contacto
  ContactForm.tsx      Formulario controlado (client component)
  Footer.tsx
lib/
  content.ts          Toda la copy (nav, skills, proyectos, contacto) — edítalo aquí
types/
  index.ts             Interfaces compartidas
```

## Cómo correrlo

```bash
# usando pnpm (gestor recomendado para este repo)
pnpm install
pnpm run dev
```

Abre http://localhost:3000

Nota: este repositorio usa `pnpm`. Elimina `package-lock.json` si existe y
no mezcles `npm`/`yarn` con `pnpm` para evitar conflictos de lockfile.

## Imágenes pendientes

El HTML original usaba URLs temporales de `lh3.googleusercontent.com` (Stitch/Google).
Coloca tus propias imágenes en `public/images/`:

- `public/images/logo.svg`
- `public/images/avatar.jpg`
- `public/images/hero-bg.jpg`
- `public/images/about-workspace.jpg`
- `public/images/projects/windbnb.jpg`
- `public/images/projects/moodbeats.jpg`
- `public/images/projects/sleepoutside.jpg`

Y el CV en `public/cv-raul-moroni.pdf`.

Si prefieres seguir usando imágenes remotas, agrega el dominio en
`next.config.ts` → `images.remotePatterns`.

## Notas de diseño

Los tokens (colores, tipografía, spacing) viven en `app/globals.css` bajo `@theme`,
siguiendo la sintaxis nativa de Tailwind v4 (sin `tailwind.config.js`). Así generas
clases como `bg-primary-container`, `text-on-surface-variant`, `font-display`, etc.,
directamente desde las variables del design system "Crimson Nocturne".

Los íconos de Material Symbols del HTML original se reemplazaron por `lucide-react`
(`Mail`, `Code2`, `Eye`, `Send`, `ArrowRight`, `Menu`, `X`, `Layers`, `Wrench`).
