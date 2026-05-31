export default {
  schema: "https://graphql.anilist.co/",
  extensions: {
    ["graphql-markdown"]: {
      rootPath: "./src/content/docs",
      baseURL: ".",
      linkRoot: "/demo-astro-starlight",
      loaders: {
        UrlLoader: {
          module: "@graphql-tools/url-loader",
          options: { method: "POST" },
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
    },
  },
};
