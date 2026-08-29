// @ts-nocheck
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import catppuccin from "@catppuccin/starlight";

// https://astro.build/config
export default defineConfig({
	base: '/demo-astro-starlight',
	integrations: [
		starlight({
			plugins: [catppuccin()],
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
