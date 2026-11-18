// @ts-nocheck
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import catppuccin from "@catppuccin/starlight";

// https://astro.build/config
export default defineConfig({
  base: "/demo-astro-starlight",
  integrations: [
    starlight({
      plugins: [catppuccin()],
      customCss: ["./src/styles/custom.css"],
      pagination: false,
      head: [
        {
          // Field names are emitted as `href="#"` self links; point them at their heading id.
          tag: "script",
          content:
            "document.addEventListener('DOMContentLoaded',()=>{document.querySelectorAll(\".sl-markdown-content h4[id] > a[href='#'], .sl-markdown-content h5[id] > a[href='#']\").forEach((a)=>{a.href='#'+a.parentElement.id;});});",
        },
      ],
      credits: true,
      lastUpdated: true,
      components: {
        Footer: "./src/components/Footer.astro",
      },
      title: "GraphQL-Markdown demo",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/graphql-markdown/graphql-markdown",
        },
      ],
      sidebar: [
        {
          label: "Operations",
          items: [{ autogenerate: { directory: "operations" } }],
        },
        {
          label: "Types",
          items: [{ autogenerate: { directory: "types" } }],
        },
      ],
    }),
  ],
});
