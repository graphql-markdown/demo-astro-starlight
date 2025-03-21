export default {
  schema: "https://graphql.anilist.co/",
  extensions: {
    ["graphql-markdown"]: {
      rootPath: "./src/content/docs",
      baseURL: ".",
      linkRoot: "/",
      loaders: {
        UrlLoader: {
          module: "@graphql-tools/url-loader",
          options: { method: "POST" },
        },
      },
      docOptions: {
        frontMatter: {
          prev: false,
          next: false,
        },
      },
      printTypeOptions: {
        typeBadges: true,
      },
      mdxParser: `${__dirname}/src/modules/astro-mdx.cjs`,
      homepage: `${__dirname}/src/assets/index.mdx`,
    },
  },
};
