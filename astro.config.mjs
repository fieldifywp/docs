import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://fieldifywp.github.io',
	integrations: [
		starlight({
			title: 'Fieldify Docs',
			logo: {
				light: './src/assets/logo-light.svg',
				dark: './src/assets/logo-dark.svg',
				replacesTitle: true,
			},
			customCss: [
				'./src/styles/custom.css',
			],
			social: {
				github: 'https://github.com/fieldifywp/fields'
			},
			sidebar: [
				{
					label: 'API Reference',
					autogenerate: { directory: 'reference' },
				},
				{
					label: 'Field Types',
					autogenerate: { directory: 'fields' },
				},
			],
		}),
	],
});
