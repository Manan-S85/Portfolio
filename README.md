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
- To change the destination script, edit `app/api/contact/route.ts` (or replace the forwarding logic to use an environment variable).

Notes
- A `.gitignore` file is included to exclude builds, node_modules and environment files.
- If you plan to deploy, set any secrets or webhook URLs via your hosting platform's environment variables and avoid committing them to source.

Contributing
- Open an issue or submit a PR with improvements.

License
- MIT
