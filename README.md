# Tío Andrés — Blog de Reflexiones

Blog de reflexiones diarias del Lic. Andrés de la Rosa Sánchez, consagrado al Sagrado Corazón de Jesús. Construido con Astro, desplegado en Cloudflare Pages.

## Dominio temporal
- `andres.crp.gi` (subdominio de CRP.gi)

## Stack
- **Astro 5** — generador de sitio estático
- **Cloudflare Pages** — hosting y deploy automático (proyecto: `andres-blog`)
- **GitHub** — repositorio `andres-blog` y CI/CD
- **Nova (OpenClaw)** — publicación vía WhatsApp (futuro)
- **Decap CMS** — panel visual para publicación sin código (futuro)

## Estructura

```
src/
  content/
    reflexiones/        ← Escritos en Markdown
      2026-03-28-la-humildad.md
  layouts/
    Base.astro          ← Layout principal
  pages/
    index.astro         ← Página de inicio (lista de reflexiones)
    reflexion/
      [slug].astro      ← Página individual de cada reflexión
  styles/
    global.css          ← Estilos globales
public/
  favicon.svg
  images/               ← Imágenes estáticas
```

## Formato de reflexión (.md)

```yaml
---
titulo: "La Humildad"
fecha: "2026-03-28"
tema: "La Humildad"
autor: "Hermandad del Sagrado Corazón de Jesús"
destacado: false
---

Texto de la reflexión aquí...
```

## Desarrollo local

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # genera /dist
```

## Deploy

Push a `main` → Cloudflare Pages detecta el cambio y hace build automático.

### Configuración en Cloudflare Pages:
- **Project name:** `andres-blog`
- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Node.js version:** 20

### DNS (Cloudflare):
- **CNAME:** `andres` → `andres-blog.pages.dev`
- **Custom domain:** `andres.crp.gi` (configurado en Pages)

## Roadmap

- [x] Esqueleto del proyecto
- [ ] Subir 50+ reflexiones históricas
- [ ] Configurar Cloudflare Pages + DNS (andres.crp.gi)
- [ ] Integrar Nova para publicación vía WhatsApp
- [ ] Agregar Decap CMS (/admin)
- [ ] Migrar a dominio propio cuando esté listo
