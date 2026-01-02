Genix (ai-com-gen)

Summary
--------------------

Genix is a modern frontend starter built with Vite and React, pre-configured for fast UI development and AI integrations. It includes Tailwind CSS for utility-first styling, PostCSS for processing, ESLint for quality checks, and developer tooling such as the Monaco editor and the Google GenAI client.

What this project contains
Genix (Ai-component-generator)

Overview
--------

Genix is a lightweight, production-ready frontend starter built with Vite and React. It is configured for rapid UI development and includes integrations commonly used for AI-enabled interfaces and developer tooling.

Core features
-------------

- Fast development with Vite and React 19 (HMR).
- Utility-first styling with Tailwind CSS and build processing via PostCSS.
- Linting with ESLint and recommended React plugins.
- Optional AI client integration: `@google/genai` (Google GenAI SDK).
- Embedded code editor support via `@monaco-editor/react`.
- Common UI and helper libraries: `react-router-dom`, `react-toastify`, `react-select`, `react-spinners`, `react-icons`.

Prerequisites
- Node.js (LTS) and npm (or yarn / pnpm).

Install dependencies

```bash
npm install
```

Run the development server

```bash
npm run dev
```

Build for production

```bash
npm run build
```

Preview production build

```bash
npm run preview
```

Lint the codebase

```bash
npm run lint
```

Configuration
-------------

If you enable AI features (e.g., Google GenAI), provide credentials via environment variables. Add a `.env` file (ensure it is in `.gitignore`) and document required keys in `.env.example`.

Common environment variables to document
- `GOOGLE_GENAI_API_KEY` — API key or service credential for Google GenAI (example)

Project structure (high level)
------------------------------

- `index.html` — application entry
- `src/` — React source code
  - `src/components/` — shared UI components (Navbar, etc.)
  - `src/pages/` — route pages (Home, NoPage, etc.)
- `public/` — static assets
- `vite.config.js`, `tailwind.config.js`, `postcss.config.js` — build and styling configuration
- `package.json` — scripts and dependency list





