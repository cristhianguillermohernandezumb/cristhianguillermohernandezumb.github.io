export const sqlSections = [
	{
		slug: 'Ejercicio 1',
		title: 'CONSULTA SQL 1',
		badge: 'SQL',
		date: '31/10/2026',
		description: 'Ejercicio realizado para practicar sql',
		instructions: 'Parte 1: Ficha de cada empleado\n\nLa gerencia necesita un reporte con todos los empleados de la empresa, sin excepción (incluidos los que no tienen departamento asignado). Para cada uno debe mostrarse:\n\n1. EMPLEADO: apellido y nombre en mayúsculas, con el formato `KING, STEVEN`.\n2. CARGO: el título del cargo (`job_title`), no el código.\n3. DEPARTAMENTO: el nombre del departamento. Si no tiene, debe decir `SIN DEPARTAMENTO`.\n4. UBICACION: la ciudad y el país, con el formato `Seattle - United States of America`. Si no tiene departamento, puede quedar vacío.\n5. JEFE: el apellido de su jefe directo. Si no tiene jefe, debe decir `SIN JEFE`.\n6. FECHA_INGRESO: la fecha de contratación con el formato `15/03/2005`.\n7. ANIOS: los años completos que lleva en la empresa a la fecha de hoy, sin decimales.\n8. INGRESO_ANUAL: el salario anual más la comisión anual. Quienes no tienen comisión deben mostrar solo su salario anual, nunca un valor vacío.\n9. ANTIGUEDAD: debe decir `SOBRE EL PROMEDIO` si el empleado lleva más años que el promedio de antigüedad de toda la empresa, y `BAJO EL PROMEDIO` en caso contrario. El promedio debe calcularse dentro de la consulta, no escribirse a mano.\n\nEl resultado debe ir ordenado por país alfabéticamente y, dentro de cada país, del empleado más antiguo al más nuevo.',		imagePath: 'images/modelado/SQL1.png',
		imageAlt: 'Imagen del apartado 1',
	},
	{
		slug: 'Ejercicio 2',
		title: 'CONSULTA SQL 2',
		badge: 'SQL',
		date: '31/10/2026',
		description: 'Ejercicio realizado para practicar sql',
		instructions: 'Parte 2: Resumen por país\n\nMuestra, por cada país donde haya empleados:\n\n- El nombre del país.\n- La cantidad de empleados.\n- El salario promedio, redondeado a 2 decimales.\n- La fecha de contratación más antigua, con el formato `MARZO 2005` (mes en texto y año).\n\nMuestra solo los países con al menos 2 empleados, ordenados de mayor a menor cantidad de empleados.',		imagePath: 'images/modelado/SQL2.png',
		imageAlt: 'Imagen del apartado 2',
	},
	{
		slug: 'Ejercicio 3',
		title: 'CONSULTA SQL 3',
		badge: 'SQL',
		date: '31/10/2026',
		description: 'Ejercicio realizado para practicar sql',
		instructions: 'Parte 3: Departamentos vacíos\n\nLista el nombre y la ciudad de los departamentos que no tienen ningún empleado.\n\nReto: resuélvelo de dos formas distintas usando técnicas diferentes de las que vimos.',		imagePath: 'images/modelado/SQL3.png',
		imageAlt: 'Imagen del apartado 3',
	},
]
