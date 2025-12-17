// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://timsexperiments.github.io',
	base: '/intro-to-front-end',
	integrations: [
		starlight({
			title: 'Intro to Front End Engineering',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
			{
				label: 'Modules',
				items: [
					{ 
						label: 'Front End Foundations', 
						items: [
							{ label: 'Introduction', slug: 'modules/01_front_end_foundations/index' },
							{ label: '1. Browser & DOM', slug: 'modules/01_front_end_foundations/01_the_browser_and_dom/lesson' },
							{ label: 'Assignment: Inspector', slug: 'modules/01_front_end_foundations/01_the_browser_and_dom/assignment' },
							{ label: '2. HTML', slug: 'modules/01_front_end_foundations/02_html/lesson' },
							{ label: 'Assignment: Skeleton', slug: 'modules/01_front_end_foundations/02_html/assignment' },
							{ label: '3. CSS', slug: 'modules/01_front_end_foundations/03_css/lesson' },
							{ label: 'Assignment: Skin', slug: 'modules/01_front_end_foundations/03_css/assignment' },
							{ label: '4. JS Fundamentals', slug: 'modules/01_front_end_foundations/04_javascript_fundamentals/lesson' },
							{ label: 'Assignment: Logic', slug: 'modules/01_front_end_foundations/04_javascript_fundamentals/assignment' },
							{ label: '5. Interactive DOM', slug: 'modules/01_front_end_foundations/05_interactive_dom/lesson' },
							{ label: 'Assignment: Interaction', slug: 'modules/01_front_end_foundations/05_interactive_dom/assignment' },
						]
					},
					{ 
						label: 'Across the Internet',
						items: [
							{ label: 'Introduction', slug: 'modules/02_across_the_internet/index' },
						]
					},
					{ 
						label: 'Engineering Fundamentals',
						items: [
							{ label: 'Introduction', slug: 'modules/03_engineering_fundamentals/index' },
						]
					},
					{ 
						label: 'The Asynchronous Web',
						items: [
							{ label: 'Introduction', slug: 'modules/04_the_asynchronous_web/index' },
						]
					},
					{ 
						label: 'Persistence',
						items: [
							{ label: 'Introduction', slug: 'modules/05_persistence/index' },
						]
					},
					{ 
						label: 'Modern UI Architecture',
						items: [
							{ label: 'Introduction', slug: 'modules/06_modern_ui_architecture/index' },
						]
					},
					{ 
						label: 'Infrastructure & Deployment',
						items: [
							{ label: 'Introduction', slug: 'modules/07_infrastructure_and_deployment/index' },
						]
					},
				],
			},
		],
		}),
	],
});


