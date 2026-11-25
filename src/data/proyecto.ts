type ProjectSection = {
	slug: string
	title: string
	badge: string
	date: string
	description: string
} & (
	| {
			kind: 'image'
			imagePath: string
			imageAlt: string
	  }
	| {
			kind: 'direct-link' | 'detail-link'
			link: string
	  }
)

export const projectSections: ProjectSection[] = [
	{
		kind: 'image',
		slug: 'imagen-1',
		title: 'MER del proyecto',
		badge: 'Proyecto',
		date: '01/11/2026',
		description: 'Modelo entidad relacion de una aplicacion web para realizar torneos a nivel de bogotá',
		imagePath: 'images/modelado/MODELO ER FINAL.drawio.png',
		imageAlt: 'Imagen del apartado 1',
	},
	{
		kind: 'image',
		slug: 'imagen-2',
		title: 'MER Extendido del proyecto',
		badge: 'Proyecto',
		date: '01/11/2026',
		description: 'Modelo entidad relacion extendido de una aplicacion web para realizar torneos a nivel de bogotá',
		imagePath: 'images/modelado/MODELO ER EXTENDIDO.drawio',
		imageAlt: 'Imagen del apartado 2',
	},
	{
		kind: 'image',
		slug: 'imagen-3',
		title: 'Modelo Reducido a Tablas del proyyecto',
		badge: 'Proyecto',
		date: '01/11/2026',
		description: 'Modelo Reducido a Tablas de una aplicacion web para realizar torneos a nivel de bogotá',
		imagePath: 'images/modelado/Reduccion a tablas proyecto.drawio(5)',
		imageAlt: 'Imagen del apartado 3',
	},
	{
		kind: 'direct-link',
		slug: 'enlace-directo',
		title: 'Repositorio de github del proyecto',
		badge: 'Proyecto',
		date: '13/11/2026',
		description: 'repositorio donde se encuentra mi trabajo',
		link: 'https://github.com/cristhianguillermohernandezumb/cancha_rola_backend.git',
	},
	{
		kind: 'detail-link',
		slug: 'enlace-en-detalle',
		title: 'Algebra relacional de consultas sql del proyecto',
		badge: 'Proyecto',
		date: '11/11/2026',
		description: 'ejercicios de algebra relacional para acceder a los datos en la basde de mysql',
		link: 'https://docs.google.com/document/d/1SVNOVocYmCrJ5ttcG32aAZTfTeB3o13K/edit?usp=sharing&ouid=113269960561153635894&rtpof=true&sd=true',
	},
]
