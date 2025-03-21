# GraphQL-Markdown + Astro/Starlight demo

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/graphql-markdown/demo-astro-starlight/tree/main)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/graphql-markdown/demo-astro-starlight/tree/main)

## 🚀 Project Structure

Inside your GraphQL-Markdown + Astro/Starlight project, you'll see the following folders and files:

```
.
├── public/
├── src/
│   ├── assets/
│   │   └── index.mdx
│   ├── modules/
│   │   └──  astro-mdx.cjs
│   └── content.config.ts
├── astro.config.mjs
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
| `npm run astro ...`        | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help`  | Get help using the Astro CLI                     |

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
