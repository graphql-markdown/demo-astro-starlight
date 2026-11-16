export default {
  schema:
    "https://raw.githubusercontent.com/graphql-markdown/graphql-markdown/main/tests/e2e/__data__/demo_schema.graphql",
  extensions: {
    ["graphql-markdown"]: {
      rootPath: "./src/content/docs",
      baseURL: ".",
      linkRoot: "/demo-astro-starlight",
      loaders: {
        UrlLoader: {
          module: "@graphql-tools/url-loader",
        },
      },
      docOptions: {
        sectionHeaderId: false,
        frontMatter: {
          prev: false,
          next: false,
        },
      },
      printTypeOptions: {
        typeBadges: true,
      },
      formatter: "@graphql-markdown/formatters/starlight",
      homepage: "./src/assets/index.mdx",
      telemetry: false,
    },
  },
};
