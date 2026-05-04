# Caique Castro · Portfolio — React/Vite

## Stack
- React 18 + React Router 6
- Vite 5
- Deploy: Vercel (auto-deploy da `main`)

## Setup local

```bash
npm install
npm run dev
# abre em http://localhost:3000
```

## Build

```bash
npm run build
# output em /dist — pronto para deploy
```

## Deploy no Vercel

1. Suba este repositório no GitHub (pode ser o mesmo `Portfolio` atual ou um novo)
2. No Vercel, crie um novo projeto apontando para o repositório
3. Framework Preset: **Vite**
4. Build Command: `npm run build`
5. Output Directory: `dist`
6. Domínio: aponte `caique-castro.com` como antes via Porkbun

O `vercel.json` já tem o rewrite para SPA routing (`/ion`, `/ids`, `/rite` funcionam direto).

## Estrutura de arquivos

```
src/
  brand.js          → tokens de cor (BRAND)
  global.css        → reset, cursor, loader, animações
  main.jsx          → entry + React Router
  hooks/
    useCursor.js    → cursor personalizado
    useReveal.js    → scroll reveal (.rv)
    useLoader.js    → loader de primeira visita
  components/
    Nav.jsx         → navegação fixa com scroll behavior
    ImgCard.jsx     → imagem + vídeo hover
    FooterCTA.jsx   → CTA final "Let's make it sharper"
  pages/
    Home.jsx        → layout V3 (hero case + more work + testimonials)
    CasePage.jsx    → renderer genérico para os 3 cases
  data/
    cases.js        → CASES array (metadados, slugs, imagens)
    caseContent.js  → conteúdo completo dos 3 cases (blocks)
```

## Imagens / vídeos

Coloque em `public/images/` — os paths já estão como `/images/ion-cover.png` etc.
Copie do repositório atual:
```
images/ion-cover.png, ion-hover.mp4, ion-roadmap.png, ion-home.png ...
images/ids-cover.png, ids-hover.mp4, ids-estrategia.png ...
images/rite-cover.png, rite-hover.mp4, rite-case-2.png ...
```

## Analytics

Para reativar GA e Clarity, adicione em `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-758C94BVM2"></script>
...

<!-- Clarity -->
<script>...(script do Clarity)...</script>
```

Vercel Analytics e Speed Insights: instale os pacotes se quiser usar via SDK:
```bash
npm install @vercel/analytics @vercel/speed-insights
```
E importe em `main.jsx`.
```
