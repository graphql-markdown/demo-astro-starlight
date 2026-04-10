// @ts-nocheck
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import catppuccin from "@catppuccin/starlight";
import starlightSiteGraph from 'starlight-site-graph';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			plugins: [catppuccin(), starlightSiteGraph()],
			credits: true,
			lastUpdated: true,
			title: 'GraphQL-Markdown demo',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/graphql-markdown/graphql-markdown' },
			],
			sidebar: [
				{
					label: 'Operations',
					autogenerate: { directory: 'operations' },
				},
				{
					label: 'Types',
					autogenerate: { directory: 'types' },
				},
			],
		}),
	],
});
