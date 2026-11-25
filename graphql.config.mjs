// Absolute URLs: a relative formatter path is not resolved from the project folder.
const local = (file) => new URL(file, import.meta.url).href;

const schema =
  "https://raw.githubusercontent.com/graphql-markdown/graphql-markdown/main/tests/e2e/__data__/demo_schema.graphql";

// Settings shared by the pages and their Markdown copies.
import { decorators } from "./lib/decorators.mjs";

const loaders = {
  UrlLoader: {
    module: "@graphql-tools/url-loader",
  },
};
const printTypeOptions = {
  typeBadges: true,
};

export default {
  projects: {
    default: {
      schema,
      extensions: {
        ["graphql-markdown"]: {
          rootPath: "./src/content/docs",
          baseURL: ".",
          linkRoot: "/demo-astro-starlight",
          loaders,
          decorators,
          docOptions: {
            sectionHeaderId: false,
            frontMatter: {
              prev: false,
              next: false,
            },
          },
          printTypeOptions,
          // Starlight preset plus deprecation and Markdown copy links
          formatter: local("./lib/formatter.mjs"),
          homepage: "./src/assets/index.mdx",
          telemetry: false,
        },
      },
    },
    // Plain Markdown copies, published next to each page by `npm run build`.
    markdown: {
      schema,
      extensions: {
        ["graphql-markdown"]: {
          rootPath: "./.markdown-copies",
          baseURL: ".",
          loaders,
          decorators,
          printTypeOptions,
          formatter: local("./lib/markdown-copy.mjs"),
          homepage: false,
          docOptions: { sectionHeaderId: false },
          telemetry: false,
          force: true,
        },
      },
    },
  },
};
