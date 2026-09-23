/* ==========================================================================
   Datos de la Semana Santa de León
   Fuente: información facilitada + https://cofradeleones.blog/
   Regla: si un dato no está confirmado se deja en null / pendiente: true.
   Se carga con <script> (funciona también abriendo los HTML con file://).
   ========================================================================== */

/* ---------- Configuración: enlaces de redes (sustituir los placeholders) ---------- */
var SITE_CONFIG = {
	YOUTUBE_URL: 'YOUTUBE_URL',     // TODO: URL del canal de YouTube
	INSTAGRAM_URL: 'INSTAGRAM_URL'  // TODO: URL del perfil de Instagram
};

var SSL_DATA = {

	/* ---------- Evento ---------- */
	evento: {
		nombre: 'Semana Santa León',
		lema: 'Semana donde todo el mundo se ve, tiempo de pasión y tiempo de vivencia con los amigos y hermanos.',
		fechas: { inicio: '2026-03-27', fin: '2026-04-05', texto: '27 de marzo al 5 de abril de 2026' },
		descripcion: 'Es uno de los principales acontecimientos culturales, religiosos y turísticos de la ciudad de León. Comienza el Viernes de Dolores y culmina el Domingo de Resurrección con la Procesión del Encuentro, sumando 10 días de procesiones con la participación de dieciséis cofradías.',
		organo: 'Junta Mayor de Cofradías de la Semana Santa de León',
		organoDescripcion: 'La Junta Mayor de Cofradías es el órgano encargado de la regulación del conjunto de procesiones de Semana Santa, de agilizar trámites y acuerdos con las instituciones oficiales y de controlar los horarios.'
	},

	/* ---------- Cofradías (16) — orden por antigüedad ---------- */
	cofradias: [
		{ id: 'angustias-soledad',           nombre: 'Cofradía de Nuestra Señora de las Angustias y Soledad', fundacion: 1578, sede: 'Capilla de Santa Nonia', logo: 'img/cofradias/angustias-soledad.svg' },
		{ id: 'dulce-nombre-jesus-nazareno', nombre: 'Cofradía del Dulce Nombre de Jesús Nazareno', fundacion: 1611, sede: 'Capilla de Santa Nonia', logo: 'img/cofradias/dulce-nombre-jesus-nazareno.svg' },
		{ id: 'minerva-vera-cruz',           nombre: 'Real Cofradía del Santísimo Sacramento de Minerva y la Santa Vera Cruz', fundacion: 1612, sede: 'Iglesia de San Martín', logo: 'img/cofradias/minerva-vera-cruz.svg' },
		{ id: 'santa-marta',                 nombre: 'Hermandad de Santa Marta y de la Sagrada Cena', fundacion: 1945, sede: 'Iglesia de San Marcelo', logo: 'img/cofradias/santa-marta.webp' },
		{ id: 'divino-obrero',               nombre: 'Real Hermandad de Jesús Divino Obrero', fundacion: 1955, sede: 'Iglesia de Jesús Divino Obrero', logo: 'img/cofradias/divino-obrero.svg' },
		{ id: 'siete-palabras',              nombre: 'Cofradía de las Siete Palabras de Jesús en la Cruz', fundacion: 1962, sede: 'Iglesia de San Marcelo', logo: 'img/cofradias/siete-palabras.svg' },
		{ id: 'perdon',                      nombre: 'Cofradía del Santo Cristo del Perdón', fundacion: 1964, sede: 'Iglesia de San Francisco de la Vega', logo: 'img/cofradias/perdon.svg' },
		{ id: 'redencion',                   nombre: 'Cofradía de Nuestro Señor Jesús de la Redención', fundacion: 1991, sede: 'Iglesia de San Martín', logo: 'img/cofradias/redencion.png' },
		{ id: 'expiracion-silencio',         nombre: 'Cofradía del Santísimo Cristo de la Expiración y del Silencio', fundacion: 1991, sede: 'Convento de San Francisco', logo: 'img/cofradias/expiracion-silencio.svg' },
		{ id: 'maria-dulce-nombre',          nombre: 'Cofradía de María del Dulce Nombre', fundacion: 1991, sede: 'Iglesia de San Martín', logo: 'img/cofradias/maria-dulce-nombre.svg' },
		{ id: 'bienaventuranza',             nombre: 'Cofradía del Santo Cristo de la Bienaventuranza', fundacion: 1992, sede: 'Iglesia de San Claudio', logo: 'img/cofradias/bienaventuranza.png' },
		{ id: 'desenclavo',                  nombre: 'Cofradía del Santo Cristo del Desenclavo', fundacion: 1992, sede: 'Iglesia de Santa Marina la Real', logo: 'img/cofradias/desenclavo.svg' },
		{ id: 'santo-sepulcro',              nombre: 'Cofradía del Santo Sepulcro Esperanza de Vida', fundacion: 1992, sede: 'Iglesia de San Froilán', logo: 'img/cofradias/santo-sepulcro.png' },
		{ id: 'agonia',                      nombre: 'Cofradía de la Agonía de Nuestro Señor', fundacion: 1993, sede: 'Iglesia de Santa Marina la Real', logo: 'img/cofradias/agonia.png' },
		{ id: 'amparo-leoneses',             nombre: 'Sacramental y Penitencial Cofradía de Nuestro Padre Jesús Sacramentado y María Santísima de la Piedad, Amparo de los Leoneses', fundacion: 1994, sede: 'Basílica de San Isidoro', logo: 'img/cofradias/amparo-leoneses.png' },
		{ id: 'gran-poder',                  nombre: 'Cofradía Cristo del Gran Poder', fundacion: 1994, sede: 'Iglesia de San Lorenzo', logo: 'img/cofradias/gran-poder.svg' }
	],

	/* ---------- Pasos por cofradía (COFRADÍA → PASOS → PROCESIONES) ----------
	   Campos: nombre, autor, anio, braceros, notas, procesiones (ids de actos).
	   Cofradías sin clave aquí: pasos pendientes de documentar. */
	pasos: {
		'angustias-soledad': [
			{ id: 'as-atributos', nombre: 'Los Atributos' },
			{ id: 'as-sagrada-cena', nombre: 'Sagrada Cena' },
			{ id: 'as-santo-cristo', nombre: 'Santo Cristo' },
			{ id: 'as-virgen-angustias', nombre: 'Virgen de las Angustias', procesiones: ['lunes-pasion'] },
			{ id: 'as-camino-sepulcro', nombre: 'Camino del Sepulcro' },
			{ id: 'as-consolacion', nombre: 'Nuestra Señora de Consolación de María' },
			{ id: 'as-cristo-yacente', nombre: 'Cristo Yacente' },
			{ id: 'as-san-juan', nombre: 'San Juan' },
			{ id: 'as-senora-soledad', nombre: 'Nuestra Señora de la Soledad' },
			{ id: 'as-virgen-soledad', nombre: 'Virgen de la Soledad' },
			{ id: 'as-virgen-alegria', nombre: 'Virgen de la Alegría' }
		],
		'dulce-nombre-jesus-nazareno': [
			{ id: 'dn-oracion-huerto', nombre: 'Oración en el Huerto' },
			{ id: 'dn-prendimiento', nombre: 'El Prendimiento' },
			{ id: 'dn-flagelacion', nombre: 'La Flagelación' },
			{ id: 'dn-coronacion', nombre: 'La Coronación de Espinas' },
			{ id: 'dn-ecce-homo', nombre: 'Ecce Homo' },
			{ id: 'dn-nazareno', nombre: 'Nuestro Padre Jesús Nazareno', procesiones: ['lunes-pasion'] },
			{ id: 'dn-veronica', nombre: 'La Verónica' },
			{ id: 'dn-expolio', nombre: 'El Expolio' },
			{ id: 'dn-exaltacion', nombre: 'La Exaltación de la Cruz' },
			{ id: 'dn-crucifixion', nombre: 'La Crucifixión' },
			{ id: 'dn-agonia', nombre: 'Santísimo Cristo de la Agonía' },
			{ id: 'dn-san-juan', nombre: 'San Juan' },
			{ id: 'dn-dolorosa', nombre: 'Madre Dolorosa' }
		],
		'minerva-vera-cruz': [
			{ id: 'mv-lignum-crucis', nombre: 'Santa Cruz y reliquia del «Lignum Crucis»' },
			{ id: 'mv-flagelado', nombre: 'Santo Cristo Flagelado del Desamparo y de la Caridad' },
			{ id: 'mv-humillacion', nombre: 'Nuestro Padre Jesús de la Humillación y la Paciencia' },
			{ id: 'mv-salud', nombre: 'Nuestro Señor Jesús de la Salud' },
			{ id: 'mv-vera-cruz', nombre: 'Nuestra Señora de la Vera Cruz' },
			{ id: 'mv-amargura', nombre: 'Virgen de la Amargura' },
			{ id: 'mv-agonia', nombre: 'Santo Cristo de la Agonía' },
			{ id: 'mv-desenclavo', nombre: 'Santo Cristo del Desenclavo' },
			{ id: 'mv-piedad', nombre: 'Nuestra Señora de la Piedad', procesiones: ['lunes-pasion'] },
			{ id: 'mv-descendimiento', nombre: 'El Descendimiento' },
			{ id: 'mv-santo-sepulcro', nombre: 'El Santo Sepulcro' },
			{ id: 'mv-san-juan', nombre: 'San Juan Evangelista' },
			{ id: 'mv-soledad', nombre: 'Virgen de la Soledad' }
		],
		'santa-marta': [
			{ id: 'sm-oracion-huerto', nombre: 'La Oración en el Huerto', procesiones: ['lunes-rosario-pasion'] },
			{ id: 'sm-flagelacion', nombre: 'La Flagelación', procesiones: ['lunes-rosario-pasion'] },
			{ id: 'sm-coronacion', nombre: 'La Coronación', procesiones: ['lunes-rosario-pasion'] },
			{ id: 'sm-cruz-cuestas', nombre: 'Jesús con la Cruz a Cuestas', procesiones: ['lunes-rosario-pasion'] },
			{ id: 'sm-crucifixion', nombre: 'La Crucifixión', procesiones: ['lunes-rosario-pasion'] },
			{ id: 'sm-piedad', nombre: 'La Piedad', procesiones: ['lunes-rosario-pasion'] },
			{ id: 'sm-santa-marta', nombre: 'Santa Marta' },
			{ id: 'sm-sagrada-cena', nombre: 'Sagrada Cena' },
			{ id: 'sm-casa-betania', nombre: 'Casa de Betania' },
			{ id: 'sm-lavatorio', nombre: 'Lavatorio' },
			{ id: 'sm-uncion-betania', nombre: 'Unción en Betania' }
		],
		'divino-obrero': [
			{ id: 'do-divino-obrero', nombre: 'Jesús Divino Obrero' },
			{ id: 'do-tres-marias', nombre: 'Las Tres Marías' },
			{ id: 'do-resurreccion', nombre: 'La Resurrección' },
			{ id: 'do-san-juan', nombre: 'San Juan Evangelista' },
			{ id: 'do-cruz-esperanza', nombre: 'Cruz de la Esperanza' },
			{ id: 'do-santisimo-cristo', nombre: 'Santísimo Cristo' }
		],
		'siete-palabras': [
			{ id: 'sp-segunda', nombre: 'Segunda Palabra. Santísimo Cristo de la Misericordia', autor: 'Ángel Estrada', anio: '1964', notas: 'Carroza acompañada por 6 hermanos.' },
			{ id: 'sp-tercera', nombre: 'Tercera Palabra. Santísimo Cristo de la Entrega', autor: 'Hipólito Pérez Calvo', anio: '1994', notas: 'Carroza empujada por 15 hermanos.' },
			{ id: 'sp-cuarta', nombre: 'Cuarta Palabra. Santísimo Cristo del Desamparo y Buen Amor', autor: 'Jesús Iglesias', anio: '1996', braceros: 86 },
			{ id: 'sp-quinta', nombre: 'Quinta Palabra. Santísimo Cristo de la Sed', autor: 'Manuel Martín Nieto', anio: '2003', braceros: 86 },
			{ id: 'sp-sexta', nombre: 'Sexta Palabra. Santísimo Cristo de la Sangre', autor: 'Manuel Martín Nieto', anio: '2008', braceros: 74 },
			{ id: 'sp-septima', nombre: 'Séptima Palabra. Santísimo Cristo de la Agonía', autor: 'Amado Fernández', anio: '1969', braceros: 82, notas: 'Copia del Titular de la Cofradía, de Gregorio Fernández (1631).' }
		],
		'perdon': [
			{ id: 'pe-condena', nombre: 'La Condena', autor: 'Manuel López Becker', anio: '2005 – 2026', braceros: 94, notas: 'Reserva 14 puestos de puja para internos del Centro Penitenciario de Mansilla de las Mulas.' },
			{ id: 'pe-perdon', nombre: 'El Perdón', autor: 'Ángel Estrada Escanciano', anio: '1966', braceros: 86, procesiones: ['martes-perdon'] },
			{ id: 'pe-esperanza', nombre: 'La Esperanza', autor: 'Desconocido', notas: 'Imagen de serie de mediados de los años 70. Pujado por 34 hermanos de 14 a 17 años. Se procesiona desde 2005.' },
			{ id: 'pe-madre-paz', nombre: 'Madre de la Paz', autor: 'Amado Fernández Puente', braceros: 94, notas: 'Pujado por braceras.' }
		]
	},

	/* ---------- Programa por días ----------
	   pendiente: true → sin programa publicado todavía (no se inventa). */
	dias: [
		{
			id: 'viernes-dolores', nombre: 'Viernes de Dolores', fecha: '2026-03-27',
			actos: [
				{
					id: 'viernes-dolorosa', tipo: 'procesion', titulo: 'Procesión de la Dolorosa', hora: '20:00',
					organiza: 'Parroquia de Nuestra Señora del Mercado',
					salida: 'Iglesia de Nuestra Señora del Mercado',
					musica: ['Agrupación Musical Nuestra Señora de las Angustias y Soledad', 'Banda de Música Dulce Nombre Jesús Nazareno'],
					itinerario: ['Iglesia de Nuestra Señora del Mercado', 'Herreros', 'Escurial', 'Plaza de Santa María del Camino (del Grano)', 'Cuesta de las Carbajalas (canto de la Salve en el Real Monasterio de las RR.MM. Benedictinas)', 'La Redención', 'Cuesta de los Castañones', 'Santa Cruz', 'Plaza Mayor (sin vuelta)', 'Mariano Domínguez Berrueta', 'Plaza de Regla', 'Ancha', 'Plaza de San Marcelo', 'Plaza de Santo Domingo (canto de la Salve)', 'Independencia', 'Legio VII', 'Plaza de San Marcelo', 'Teatro', 'Rúa', 'Plaza de las Concepciones', 'San Francisco', 'Hospicio', 'Herreros', 'Iglesia de Nuestra Señora del Mercado'],
					pasos: [{ nombre: 'Virgen del Mercado', autor: 'Anónimo', anio: 's. XV', braceros: 56 }]
				}
			]
		},
		{
			id: 'sabado-pasion', nombre: 'Sábado de Pasión', fecha: '2026-03-28',
			actos: [
				{
					id: 'sabado-camino-pasion', tipo: 'procesion', titulo: 'Procesión Camino de la Pasión y de la Esperanza', hora: '18:00',
					organiza: 'Sacramental y Penitencial Cofradía de Nuestro Padre Jesús Sacramentado y María Santísima de la Piedad, Amparo de los Leoneses',
					cofradias: ['amparo-leoneses'],
					salida: 'Patio de la Real Colegiata – Basílica de San Isidoro',
					itinerario: ['Patio de la Real Colegiata – Basílica de San Isidoro (canto de la Coral Isidoriana, solo para hermanos)', 'Plaza de Santo Martino', 'Sacramento (petalada a la Virgen de la Esperanza)', 'Plaza de San Isidoro', 'Cid (acto del Cristo de la Victoria)', 'Ancha', 'Plaza de San Marcelo', 'Teatro', 'Rúa', 'Plaza de las Concepciones', 'Fernández Cadórniga', 'Plaza de Don Gutierre', 'Zapaterías', 'Plaza de San Martín', 'Plegaria (ofrenda floral al Cristo de Fuera de San Martín)', 'Plaza Mayor (sin vuelta)', 'Mariano Domínguez Berrueta', 'Plaza de Regla (estación de penitencia)', 'Sierra Pambley', 'Dámaso Merino', 'Cervantes', 'Plaza Torres de Omaña', 'Fernando González Regueral', 'Plaza de San Isidoro', 'Sacramento', 'Plaza de Santo Martino'],
					pasos: [
						{ nombre: 'Nuestro Padre Jesús de la Esperanza Cautivo ante Anás', acompanamiento: 'Banda de Cornetas y Tambores Santísimo Cristo de la Victoria de León' },
						{ nombre: 'María Santísima de la Soledad Amparo de los Leoneses', acompanamiento: 'Agrupación Musical Cristo del Gran Poder de León' },
						{ nombre: 'Nuestra Señora de la Esperanza', acompanamiento: 'Santo Cristo de la Bienaventuranza', braceros: 70, notas: 'Braceros y braceras.' }
					]
				},
				{
					id: 'sabado-admision', tipo: 'acto', titulo: 'Misa de Admisión de Hermanos', hora: '18:30',
					organiza: 'Cofradía del Santo Sepulcro Esperanza de Vida',
					cofradias: ['santo-sepulcro'],
					lugar: 'Iglesia del convento de las RR.MM. Concepcionistas (Plaza de las Concepciones)',
					notas: 'Misa anticipada del Domingo de Ramos con bendición de túnicas y rito de admisión de los nuevos hermanos.'
				},
				{
					id: 'sabado-besapie', tipo: 'acto', titulo: 'Acto del Besapié al Santo Cristo de la Redención', hora: '19:00',
					organiza: 'Cofradía de Nuestro Señor Jesús de la Redención',
					cofradias: ['redencion'],
					lugar: 'Iglesia del Real Monasterio de las RR.MM. Benedictinas (Carbajalas), Plaza de Santa María del Camino (del Grano)',
					notas: 'Comienza con la oración de vísperas de las RR.MM. Benedictinas y, a continuación, el Besapié al Cristo Titular de la Cofradía.'
				}
			]
		},
		{
			id: 'domingo-ramos', nombre: 'Domingo de Ramos', fecha: '2026-03-29',
			actos: [
				{
					id: 'domingo-palmas-santa-nonia', tipo: 'procesion', titulo: 'Procesión de las Palmas', hora: '08:30',
					organiza: 'Cofradía de Nuestra Señora de las Angustias y Soledad y Cofradía del Dulce Nombre de Jesús Nazareno',
					cofradias: ['angustias-soledad', 'dulce-nombre-jesus-nazareno'],
					salida: 'Capilla de Santa Nonia (bendición de Ramos)',
					itinerario: ['Capilla de Santa Nonia', 'República Argentina', 'Villa Benavente', 'Plaza Fernando Merino (con vuelta)', 'Lancia'],
					notas: 'A continuación, celebración de la Eucaristía.'
				},
				{
					id: 'domingo-palmas-junta', tipo: 'procesion', titulo: 'Procesión de las Palmas', hora: '10:30',
					organiza: 'Junta Mayor de la Semana Santa de León, por delegación del Cabildo Catedral',
					salida: 'Museo Diocesano y de Semana Santa',
					itinerario: ['Mariano Domínguez Berrueta', 'Plaza Mayor (sin vuelta)', 'Plegaria', 'Plaza de San Martín', 'Zapaterías', 'Plaza de Don Gutierre', 'Fernández Cadórniga', 'Plaza de las Concepciones', 'Rúa', 'Teatro', 'Plaza de San Marcelo (incorporación de la Corporación Municipal en el Antiguo Ayuntamiento)', 'Ancha', 'Plaza de Regla (Catedral)'],
					notas: 'Hacia las 12:15, bendición de las Palmas. El paso regresa al Museo Diocesano y de Semana Santa por Mariano Domínguez Berrueta.'
				},
				{
					id: 'domingo-ramos-perdon', tipo: 'procesion', titulo: 'Procesión de los Ramos', hora: '11:00',
					organiza: 'Cofradía del Santo Cristo del Perdón',
					cofradias: ['perdon'],
					salida: 'Iglesia de San Francisco de la Vega (bendición de Ramos y Palmas en el atrio)',
					itinerario: ['Gómez de Salazar', 'Doña Urraca', 'Tizona', 'Sahagún', 'Ramón Calabozo', 'Gómez de Salazar', 'Parroquia de San Francisco de la Vega'],
					notas: 'Finaliza sobre las 12:30.'
				},
				{
					id: 'domingo-ramos-divino-obrero', tipo: 'procesion', titulo: 'Procesión de los Ramos', hora: '11:30',
					organiza: 'Parroquia de Jesús Divino Obrero',
					salida: 'Iglesia de Jesús Divino Obrero (bendición de Ramos y Palmas)',
					itinerario: ['Víctor de los Ríos', 'Batalla de Clavijo', 'San Carlos', 'Daoiz y Velarde', 'Obispo Almarcha', 'José Mª Fernández', 'Batalla de Clavijo', 'Víctor de los Ríos', 'Iglesia de Jesús Divino Obrero'],
					notas: 'A continuación, celebración de la Eucaristía.'
				},
				{
					id: 'domingo-ramos-santa-marina', tipo: 'procesion', titulo: 'Procesión de los Ramos', hora: '11:30',
					organiza: 'Cofradía del Santo Cristo del Desenclavo y Cofradía de la Agonía de Nuestro Señor',
					cofradias: ['desenclavo', 'agonia'],
					salida: 'Iglesia de Santa Marina la Real (bendición de Ramos y Palmas)',
					itinerario: ['Serranos', 'Plaza del Desenclavo', 'Plaza Puerta Castillo', 'Plaza de Santo Martino', 'El Sacramento', 'Plaza de San Isidoro', 'Los Descalzos', 'Corral de San Guisán', 'Serranos'],
					notas: 'A continuación, celebración de la Eucaristía.'
				},
				{
					id: 'domingo-gran-poder', tipo: 'procesion', titulo: 'Procesión Cristo del Gran Poder', hora: '17:00',
					organiza: 'Cofradía Cristo del Gran Poder',
					cofradias: ['gran-poder'],
					salida: 'Patio de las HH. Trinitarias',
					itinerario: ['San Lorenzo', 'San Pedro', 'Puerta Obispo (Acto de la Entrada Triunfal de Jesús en Jerusalén, ante el Palacio Episcopal)', 'Plaza de Regla', 'Sierra Pambley', 'Ancha', 'Varillas', 'Cardiles', 'Platerías', 'Plegaria', 'Plaza Mayor (sin vuelta)', 'Mariano Domínguez Berrueta', 'Plaza de Regla (sin vuelta)', 'Puerta Obispo', 'San Lorenzo', 'HH. Trinitarias'],
					pasos: [
						{ nombre: 'Los Apóstoles', acompanamiento: 'Agrupación Musical Real Hermandad de Jesús Divino Obrero' },
						{ nombre: 'Cristo del Gran Poder', acompanamiento: 'Agrupación Musical Cristo del Gran Poder' },
						{ nombre: 'Expulsión del Templo', acompanamiento: null },
						{ nombre: 'San Juan', acompanamiento: 'Santo Sepulcro Esperanza de Vida' },
						{ nombre: 'Virgen del Gran Poder', acompanamiento: 'Banda de Música Dulce Nombre Jesús Nazareno' }
					]
				},
				{
					id: 'domingo-dainos', tipo: 'procesion', titulo: 'Inmemorial Procesión del Dainos', subtitulo: 'Antaño del Santo Rosario de la Buena Muerte', hora: '19:45',
					organiza: 'Orden Franciscana Seglar (OFS) con la Cofradía del Santísimo Cristo de la Expiración y del Silencio',
					cofradias: ['expiracion-silencio'],
					salida: 'Interior de la Iglesia de San Francisco',
					itinerario: ['Corredera', 'Plaza de San Francisco', 'Hospicio', 'Escurial', 'Plaza de Santa María del Camino (del Grano)', 'Cuesta de las Carbajalas', 'Cuesta de los Castañones', 'Santa Cruz', 'Plaza Mayor (sin vuelta)', 'Mariano Domínguez Berrueta', 'Plaza de Regla (rezo a la Virgen)', 'Ancha', 'Plaza de San Marcelo', 'Plaza de Santo Domingo (sin vuelta)', 'Independencia', 'Santa Nonia', 'Capilla de Santa Nonia (encuentro de la Virgen con su Hijo en la Calle de la Amargura, con la Cofradía de Nuestra Señora de las Angustias y Soledad)', 'Avenida Lancia', 'Corredera', 'Iglesia de San Francisco'],
					notas: 'A las 18:00, los hermanos de las Cofradías de la Sobarriba se reúnen ante el crucero de la Plaza del Grano; tras rezar una Salve, se dirigen por la Cerca al Convento de San Francisco.'
				},
				{
					id: 'domingo-redencion', tipo: 'procesion', titulo: 'Procesión de Nuestro Señor Jesús de la Redención', hora: '21:00',
					organiza: 'Cofradía de Nuestro Señor Jesús de la Redención',
					cofradias: ['redencion'],
					salida: 'Museo Diocesano y de Semana Santa',
					itinerario: ['Mariano Domínguez Berrueta', 'Plaza de Regla', 'Ancha', 'Varillas', 'Cardiles', 'Platerías', 'Plegaria', 'Plaza de San Martín', 'Zapaterías', 'Don Gutierre', 'Fernández Cadórniga', 'Plaza de las Concepciones', 'San Francisco', 'Hospicio', 'Escurial', 'Plaza de Santa María del Camino (del Grano)', 'Las Carbajalas', 'La Redención', 'Cuesta de los Castañones', 'Santa Cruz', 'Plaza Mayor (sin vuelta)', 'Mariano Domínguez Berrueta', 'Museo Diocesano y de Semana Santa'],
					pasos: [
						{ nombre: 'Nuestro Padre Jesús de la Misericordia', acompanamiento: 'Agrupación Musical Dulce Nombre Jesús Nazareno', braceros: 92 },
						{ nombre: 'Santo Cristo de la Redención', acompanamiento: 'Agrupación Musical Santo Cristo de la Bienaventuranza', braceros: 92 },
						{ nombre: 'Nuestra Madre de la Divina Gracia', acompanamiento: 'Agrupación Musical Nuestra Señora de las Angustias y Soledad', braceros: 94 }
					]
				}
			]
		},
		{
			id: 'lunes-santo', nombre: 'Lunes Santo', fecha: '2026-03-30',
			actos: [
				{
					id: 'lunes-pasion', tipo: 'procesion', titulo: 'Procesión de la Pasión', hora: '20:00',
					organiza: 'Cofradía de Nuestra Señora de las Angustias y Soledad, Cofradía del Dulce Nombre de Jesús Nazareno y Real Cofradía del Santísimo Sacramento de Minerva y la Santa Vera Cruz',
					cofradias: ['angustias-soledad', 'dulce-nombre-jesus-nazareno', 'minerva-vera-cruz'],
					salida: 'Capilla de Santa Nonia',
					itinerario: ['Jardín de San Francisco', 'San Francisco', 'Plaza de las Concepciones', 'Fernández Cadórniga', 'Plaza de Don Gutierre', 'Zapaterías', 'Plaza de San Martín', 'Plegaria', 'Plaza Mayor (sin vuelta)', 'Mariano Domínguez Berrueta', 'Plaza de Regla', 'Ancha', 'Plaza de San Marcelo', 'Plaza de Santo Domingo (sin vuelta)', 'Independencia', 'Santa Nonia', 'Capilla de Santa Nonia'],
					pasos: [
						{ paso: 'dn-nazareno', nombre: 'Nuestro Padre Jesús Nazareno', acompanamiento: 'Una de sus secciones musicales (turno rotatorio)' },
						{ paso: 'as-virgen-angustias', nombre: 'Virgen de las Angustias', acompanamiento: 'Agrupación Musical Nuestra Señora de las Angustias y Soledad' },
						{ paso: 'mv-piedad', nombre: 'Nuestra Señora de la Piedad', acompanamiento: 'Banda de Cornetas y Tambores de la Real Cofradía de Minerva y Vera Cruz' }
					]
				},
				{
					id: 'lunes-rosario-pasion', tipo: 'procesion', titulo: 'Procesión del Rosario de Pasión', hora: '20:30',
					organiza: 'Hermandad Sacramental de Santa Marta y de la Sagrada Cena',
					cofradias: ['santa-marta'],
					salida: 'Iglesia de San Marcelo',
					itinerario: ['Plaza de San Marcelo', 'Ruiz de Salazar', 'Piloto Regueral', 'Cid', 'Plaza de San Isidoro', 'Descalzos', 'Corral de San Guisán', 'Serranos', 'Pelayo', 'Pablo Flórez', 'Plaza de Nuestra Señora de Regla', 'Ancha', 'Plaza de San Marcelo', 'Iglesia de San Marcelo'],
					pasos: [
						{ paso: 'sm-oracion-huerto', nombre: 'La Oración en el Huerto' },
						{ paso: 'sm-flagelacion', nombre: 'La Flagelación' },
						{ paso: 'sm-coronacion', nombre: 'La Coronación' },
						{ paso: 'sm-cruz-cuestas', nombre: 'Jesús con la Cruz a Cuestas' },
						{ paso: 'sm-crucifixion', nombre: 'La Crucifixión' },
						{ paso: 'sm-piedad', nombre: 'La Piedad' }
					]
				},
				{
					id: 'lunes-llagas', tipo: 'procesion', titulo: 'Solemne Adoración Procesional de las Llagas de Cristo', hora: '22:00',
					organiza: 'Cofradía del Santo Sepulcro Esperanza de Vida',
					cofradias: ['santo-sepulcro'],
					salida: 'Convento de las RR.MM. Concepcionistas',
					itinerario: ['Plaza de las Concepciones', 'Fernández Cadórniga (rezo de la primera llaga)', 'Plaza de Don Gutierre', 'Zapaterías', 'Plaza de San Martín (rezo de la segunda llaga)', 'Juan de Arfe', 'La Redención', 'Cuesta de las Carbajalas (rezo de la tercera llaga, ante el Monasterio de las RR.MM. Benedictinas)', 'Escurial', 'Herreros (rezo de la cuarta llaga, ante la parroquia de Nuestra Señora del Mercado)', 'Trastámara', 'San Francisco', 'Plaza de las Concepciones (rezo de la quinta llaga)', 'Convento de las RR.MM. Concepcionistas']
				}
			]
		},
		{
			id: 'martes-santo', nombre: 'Martes Santo', fecha: '2026-03-31',
			actos: [
				{
					id: 'martes-perdon', tipo: 'procesion', titulo: 'Procesión del Perdón', hora: '18:45',
					organiza: 'Cofradía del Santo Cristo del Perdón',
					cofradias: ['perdon'],
					salida: 'Patio del Convento de Santa Cruz (HH. Clarisas)',
					itinerario: ['Cardenal Landázuri', 'Plaza de Nuestra Señora de Regla (Acto del Perdón)', 'Mariano Domínguez Berrueta', 'Plaza Mayor', 'Plegaria (intervención del Grupo Andadura y ofrenda al Santo Cristo de la Capilla de Fuera de San Martín)', 'Platerías', 'Cardiles', 'Varillas', 'Ancha', 'Plaza de San Marcelo', 'Plaza de Santo Domingo (sin vuelta)', 'Ordoño II', 'Plaza de Guzmán (sin vuelta)', 'Avenida de Palencia (la procesión se divide en dos)', 'Paso del Santo Cristo del Perdón: Astorga, Paso de los Quebrantos, Gómez Salazar', 'Resto de la procesión: Prolongación Avenida de Palencia, Rotonda Cofradía Santo Cristo del Perdón (sin vuelta), Gómez de Salazar', 'Iglesia Parroquial de San Francisco de la Vega'],
					notas: 'En el Locus Appellationis, ante el pórtico de la Catedral y con el Orfeón Leonés, se celebra el Acto del Perdón: el Abad solicita el perdón para un penado y, si se obtiene el indulto, la persona se incorpora a la procesión. En San Francisco de la Vega la Madre de la Paz recibe al indultado y al Cristo del Perdón, y los hermanos rezan un responso en silencio.'
				},
				{
					id: 'martes-dolor-madre', tipo: 'procesion', titulo: 'Procesión Dolor de Nuestra Madre', hora: '20:00',
					organiza: 'Cofradía de Nuestra Señora de las Angustias y Soledad',
					cofradias: ['angustias-soledad'],
					salida: 'Capilla de Santa Nonia',
					itinerario: ['Santa Nonia', 'Arquitecto Torbado', 'Plaza de las Cortes Leonesas', 'Fuero', 'Burgo Nuevo', 'Independencia', 'Legio VII', 'San Marcelo', 'Teatro', 'Rúa', 'Plaza de las Concepciones', 'San Francisco', 'Jardín de San Francisco', 'Capilla de Santa Nonia'],
					pasos: null /* pendiente de publicar */
				}
			]
		},
		{ id: 'miercoles-santo', nombre: 'Miércoles Santo', fecha: '2026-04-01', pendiente: true, actos: [] },
		{ id: 'jueves-santo', nombre: 'Jueves Santo', fecha: '2026-04-02', pendiente: true, actos: [] },
		{ id: 'viernes-santo', nombre: 'Viernes Santo', fecha: '2026-04-03', pendiente: true, actos: [] },
		{ id: 'sabado-santo', nombre: 'Sábado Santo', fecha: '2026-04-04', pendiente: true, actos: [] },
		{
			id: 'domingo-resurreccion', nombre: 'Domingo de Resurrección', fecha: '2026-04-05', pendiente: true,
			actos: [
				{ id: 'domingo-encuentro', tipo: 'procesion', titulo: 'Procesión del Encuentro', hora: null, pendiente: true }
			]
		}
	]
};
