import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: '',
	base: 'fieldify',
	integrations: [
		starlight({
			title: 'Fieldify Docs',
			logo: {
				light: './src/assets/logo-light.svg',
				dark: './src/assets/logo-dark.svg',
				replacesTitle: true,
			},
			social: {
				github: 'https://github.com/fieldifywp/fields',
			},
			customCss: [
				'./src/styles/custom.css',
			],
			components: {
				SocialIcons: './src/components/SocialIcons.astro',
			},
			sidebar: [
				{
					label: 'Getting Started',
					autogenerate: { directory: 'getting-started' },
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
				{
					label: 'Fields',
					autogenerate: { directory: 'fields' },
				},
			],
		}),
	],
});
