# Arjun Nyein — Developer Portfolio

A five-page portfolio built with Next.js App Router, TypeScript, Tailwind CSS, and Lucide. The design follows the [approved Figma portfolio](https://www.figma.com/design/DxtgaSsFEprDmuBEQSZLDa?node-id=7-78).

## Run locally

Use Node.js 22 or newer.

```sh
npm ci
npm run dev
```

Open http://localhost:3000. For a production check, run `npm run build`, `npm run typecheck`, and `npm start`.

## Content and assets

- `content/portfolio.ts` holds contact details, skills, work history, project summaries, and the dashboard workflow.
- `public/Arjun_Nyein_Resume_Software.pdf` is the public software résumé with the phone number removed. Keep that filename when replacing it.
- `public/arjun-nyein.webp` is the supplied portrait, optimized for the About page.
- The Manufacturing Dashboard workflow is conceptual. No company screenshots or internal data are included.

## Vercel

Import this repository into Vercel and use the detected Next.js settings. The pages build statically; no environment variables, database, or backend setup are required.
