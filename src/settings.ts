export const profile = {
	fullName: 'Cristhian Guillermo Hernandez Umbarila',
	title: '',
	institute: '',
	author_name: 'Cristhian Guillermo Hernandez Umbarila', // Author name to be highlighted in the papers section
	research_areas: [
		 { title: '¿Por qué creo que Bases de Datos 1 me va a ayudar en tu vida profesional? ', description: 'Bases de Datos 1 me ayudará a comprender cómo almacenar, organizar y administrar información de manera eficiente. Como programador, estos conocimientos serán muy buenos para desarrollar aplicaciones y sistemas funcionales. ', field: 'Pregunta' },
		 { title: '¿Por qué me gusta la carrera? ', description: 'Me encanta porque me permite sacar mi lado mas matemático y lógico.', field: 'Pregunta' },
	
	],
}

// Set equal to an empty string to hide the icon that you don't want to display
export const social = {
	email: 'cristhianguillermohernandezumb@gmail.com',
	linkedin: '',
	x: 'https://www.x.com/',
	bluesky: '',
	github: 'https://github.com/cristhianguillermohernandezumb',
	gitlab: '',
	scholar: '',
	inspire: '',
	arxiv: '',
	orcid: '',
}

export const presentation = {
	youtube_link: 'https://youtube.com/shorts/6TRQKsEwrcU',
	description: 'Conoce más de mi trabajo académico en el apartado de "Blogs".',
}

export const template = {
	website_url: 'https://localhost:4321', // Astro needs to know your site’s deployed URL to generate a sitemap. It must start with http:// or https://
	menu_left: false,
	transitions: true,
	lightTheme: 'light', // Select one of the Daisy UI Themes or create your own
	darkTheme: 'dark', // Select one of the Daisy UI Themes or create your own
	excerptLength: 200,
	postPerPage: 5,
    base: '' // Repository name starting with /
}

export const seo = {
	default_title: 'Astro Academia',
	default_description: 'Astro Academia is a template for academic websites.',
	default_image: '/images/astro-academia.png',
}
