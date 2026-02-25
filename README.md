# Portfolio — Personal site

Professional personal portfolio built with Next.js (App Router), Tailwind CSS and Framer Motion. Contains sections for Hero, About, Skills, Projects, Experience, Achievements, Education and Contact.

Features
- Next.js + Tailwind CSS frontend
- Responsive, accessible UI with motion micro-interactions
- Centralized theme tokens in `tailwind.config.ts` and `app/globals.css`
- Contact form that forwards messages to a Google Sheet via a server-side proxy

Prerequisites
- Node.js 18+ and a package manager (`npm`, `pnpm`, or `yarn`)

Quick start
1. Install dependencies
```bash
npm install
# or
pnpm install
# or
yarn
```

2. Run development server
```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

3. Build for production
```bash
npm run build
npm start
```

Contact form
- The contact form posts to a local Next.js API at `/api/contact` which proxies the request to a Google Apps Script endpoint that writes to a Google Sheet.
- For production, set the Google Apps Script URL as an environment variable named `GOOGLE_SCRIPT_URL` in Vercel (or your hosting provider). If not set, the proxy falls back to the current script URL in source.

Vercel deployment
- The project is ready for Vercel. A `vercel.json` file is included with a placeholder `GOOGLE_SCRIPT_URL` environment value.
- To deploy:
	1. Import the repo into Vercel or connect via the Vercel CLI.
	2. In the Vercel dashboard set the `GOOGLE_SCRIPT_URL` env var (Project Settings → Environment Variables).
	3. Deploy — Vercel will detect Next.js automatically and run `npm run build`.

Notes
- A `.gitignore` file is included to exclude builds, node_modules and environment files.
- If you plan to deploy, set any secrets or webhook URLs via your hosting platform's environment variables and avoid committing them to source.

Contributing
- Open an issue or submit a PR with improvements.

License
- MIT
