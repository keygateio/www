import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			customCss: [
				'./src/styles/custom.css',
			],
			title: 'Keygate',
			social: {
				github: 'https://github.com/keygateio/keygate',
			},
			components: {
				Hero: './src/components/Hero.astro',
				Header: './src/components/Header.astro',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', link: '/guides/example/' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
