# GraphQL-Markdown + Astro/Starlight demo

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/graphql-markdown/demo-astro-starlight/tree/main)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/graphql-markdown/demo-astro-starlight/tree/main)

**Live demo:** [graphql-markdown.dev/demo-astro-starlight](https://graphql-markdown.dev/demo-astro-starlight/)

## 🚀 Project Structure

Inside your GraphQL-Markdown + [Astro](https://astro.build/)/[Starlight](https://starlight.astro.build/) project, you'll see the following folders and files:

```
.
├── public/
├── src/
│   ├── assets/
│   │   └── index.mdx        # splash landing page (hero + schema preview)
│   ├── components/
│   │   └── Footer.astro
│   ├── styles/
│   │   └── custom.css       # zinc theme + reference page polish
│   └── content.config.ts
├── tests/
│   └── visual/              # Playwright + Argos visual tests
├── astro.config.mjs
├── playwright.config.ts
├── graphql.config.mjs
├── package.json
└── tsconfig.json
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                    | Action                                           |
| :------------------------- | :----------------------------------------------- |
| `npm install`              | Installs dependencies                            |
| `npx gqlmd graphql-to-doc` | Generate documentation from GraphQL schema       |
| `npm run dev`              | Starts local dev server at `localhost:4321`      |
| `npm run build`            | Build your production site to `./dist/`          |
| `npm run preview`          | Preview your build locally, before deploying     |
| `npm run test:visual`      | Screenshot tests (build first; Playwright/Argos) |
| `npm run astro ...`        | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help`  | Get help using the Astro CLI                     |

## Markdown copies and deprecation links

Each page ends with a **View as Markdown** link to a plain Markdown copy. `npm run doc` also runs the `markdown` project of `graphql.config.mjs` (`lib/markdown-copy.mjs` formatter), writing the copies to `.markdown-copies`; `npm run build` copies them into `dist/` after `astro build`, so `/types/objects/project.md` is served next to `/types/objects/project`. The link is added by `lib/formatter.mjs`.

The same formatter links type names written as inline code in deprecation reasons (for example `ProjectStatus` on `Project.state`) to their pages, as in the [hooks recipe](https://graphql-markdown.dev/docs/customize/hooks#link-entities-in-deprecation-reasons). `lib/decorators.mjs` adds a "deprecated" badge and a "Deprecated" notice for the schema's type-level `@deprecatedType` directive, in both outputs.

## 🏎️ Quick start

Get your demo up and running with these commands:

```bash
npm install
npx gqlmd graphql-to-doc
npm run dev
```

> 🧑‍🚀 **Edit `graphql.config.msj` to try with your own GraphQL schema.**

## 👀 Want to learn more?

Check out [GraphQL-Markdown's docs](https://graphql-markdown.dev/).
