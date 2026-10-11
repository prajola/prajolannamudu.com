# prajolannamudu.com

Personal site for Prajol Annamudu — co-founder and CPO of
[KubeGraf](https://kubegraf.io), based in Belfast, Northern Ireland.

Vite · React 19 · TypeScript · Tailwind 4 · Framer Motion.

```bash
npm install
npm run dev      # http://localhost:5174
npm run build
npm run preview
```

## Editing the content

**Everything about Prajol lives in [`src/content.ts`](src/content.ts).**
Biography, timeline, ventures, links and image paths are all there — the
components only read from it, so copy changes never mean touching JSX.

## Images

Drop files into `public/` and point `images` in `content.ts` at them. The
hero portrait is a transparent cut-out served as WebP with a PNG
fallback; the browser never fetches the PNG.

## The contact form

The form emails `prajol@kubegraf.io` via [FormSubmit](https://formsubmit.co),
which needs no account or API key.

> **One-time setup:** the first submission triggers an "Activate Form"
> email to that address. Until the link in it is clicked, FormSubmit
> refuses messages — the form surfaces that and offers to send by email
> instead, rather than reporting a false success.

To move delivery elsewhere (Formspree, Web3Forms, your own handler), set
`VITE_FORM_ENDPOINT` in `.env` — see [`.env.example`](.env.example). No
code change needed.

## Accessibility

Verified at 320–1920px: no horizontal overflow, pinch-zoom enabled, all
form controls ≥16px so iOS doesn't zoom on focus, visible focus rings,
and `prefers-reduced-motion` respected throughout.
