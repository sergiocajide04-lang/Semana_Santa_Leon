/* ==========================================================================
   Datos de la Semana Santa de León · Edición 2027
   Fuentes principales:
   - Junta Mayor de Cofradías de la Semana Santa de León (semanasantaleon.com)
   - Webs oficiales de las cofradías (enlazadas en cada ficha)
   - Información facilitada + https://cofradeleones.blog/
   Regla: si un dato no está verificado se deja en null y no se muestra.
   Se carga con <script> (funciona también abriendo los HTML con file://).
   ========================================================================== */

/* ---------- Redes sociales (única fuente para header y footer) ---------- */
var SOCIAL_LINKS = {
	instagram: 'https://www.instagram.com/cofradeleones?stkn=YzhneTNxY3Jlcmdm',
	youtube: 'https://www.youtube.com/@cofradedeleondos'
};

var SSL_DATA = {

	/* ---------- Edición ---------- */
	evento: {
		nombre: 'Semana Santa León',
		edicion: 2027,
		lema: 'Semana donde todo el mundo se ve, tiempo de pasión y tiempo de vivencia con los amigos y hermanos.',
		fechas: { inicio: '2027-03-19', fin: '2027-03-28', texto: '19 al 28 de marzo de 2027' },
		organo: 'Junta Mayor de Cofradías de la Semana Santa de León',
		// Cuenta atrás de la home: hora local de León (zona Europe/Madrid)
		cuentaAtras: { fecha: '2027-03-19', hora: '20:00', zona: 'Europe/Madrid', mensajeFinal: 'Ya está aquí la Semana Santa' },
		// Los horarios de 2027 aún no están publicados: se muestran los del último programa oficial.
		notaHorarios: 'Horarios y salidas tomados del último programa oficial publicado (2026) como referencia. Pendientes de confirmación por la Junta Mayor para 2027.'
	},

	/* ---------- Calendario 2027 ---------- */
	dias: [
		{ id: 'viernes-dolores', nombre: 'Viernes de Dolores', fecha: '2027-03-19' },
		{ id: 'sabado-pasion', nombre: 'Sábado de Pasión', fecha: '2027-03-20' },
		{ id: 'domingo-ramos', nombre: 'Domingo de Ramos', fecha: '2027-03-21' },
		{ id: 'lunes-santo', nombre: 'Lunes Santo', fecha: '2027-03-22' },
		{ id: 'martes-santo', nombre: 'Martes Santo', fecha: '2027-03-23' },
		{ id: 'miercoles-santo', nombre: 'Miércoles Santo', fecha: '2027-03-24' },
		{ id: 'jueves-santo', nombre: 'Jueves Santo', fecha: '2027-03-25' },
		{ id: 'viernes-santo', nombre: 'Viernes Santo', fecha: '2027-03-26' },
		{ id: 'sabado-santo', nombre: 'Sábado Santo', fecha: '2027-03-27' },
		{ id: 'domingo-resurreccion', nombre: 'Domingo de Resurrección', fecha: '2027-03-28' }
	],

	/* ---------- Cofradías (16) — orden por antigüedad ----------
	   id: clave interna · slug: URL de la ficha (cofradia.html?c=slug) */
	cofradias: [
		{
			id: 'angustias-soledad', slug: 'angustias-y-soledad',
			nombre: 'Cofradía de Nuestra Señora de las Angustias y Soledad', nombreCorto: 'Angustias y Soledad',
			fundacion: 1578, logo: 'img/cofradias/angustias-soledad.svg',
			sede: 'Capilla de Santa Nonia',
			sedeCanonica: 'Capilla de Santa Nonia (Iglesia parroquial de Nuestra Señora del Mercado)',
			sedeSocial: 'Casa de Hermandad, calle Máximo Cayón Waldaliso',
			web: 'https://www.angustiasysoledad.org',
			descripcion: [
				'Es la cofradía penitencial más antigua de León. Nació en el siglo XVI como cofradía de disciplinantes, con una clara vocación asistencial, y es una de las tres cofradías históricas de la ciudad. Comparte la Capilla de Santa Nonia con la Cofradía del Dulce Nombre de Jesús Nazareno.',
				'Su Semana Santa gira en torno a la Virgen: organiza el Martes Santo la Procesión del Dolor de Nuestra Madre y, en los años pares, la Solemne y Oficial Procesión del Santo Entierro del Viernes Santo. Fuera de la Semana Santa, su Virgen de la Alegría protagoniza el Día de la Alegría, en Pentecostés.'
			],
			historia: [
				'Se fundó el 9 de febrero de 1578 en el convento de Santo Domingo el Real, según acreditan su Regla y Estatutos. Desde sus primeros tiempos la documentación recoge actos que han llegado hasta hoy, como la procesión del Santo Entierro o la toma de posesión de los nuevos abades en el Día de la Alegría, una de las fiestas más antiguas de la ciudad.',
				'Tras la Guerra Civil, un grupo de 22 hermanos reorganizó la cofradía. A lo largo del siglo XX renovó sus estatutos y abrió la posibilidad de que las hermanas procesionaran con túnica. Ha recibido la Medalla de Oro de la Ciudad de León, junto a las otras dos cofradías centenarias, y en 2023 el Ayuntamiento le dedicó una calle.'
			],
			habito: 'Túnica negra lisa con capillo, guantes y cíngulo negros; las bocamangas llevan un cordón amarillo. La Junta de Seises sustituye el capillo por un capirote alto.',
			fuentes: [
				{ nombre: 'Junta Mayor de Cofradías', url: 'https://semanasantaleon.com/cofradias-y-hermandades/cofradia-nuestra-senora-de-las-angustias-y-soledad/' },
				{ nombre: 'Web oficial de la cofradía', url: 'https://www.angustiasysoledad.org' }
			]
		},
		{
			id: 'dulce-nombre-jesus-nazareno', slug: 'dulce-nombre-jesus-nazareno',
			nombre: 'Cofradía del Dulce Nombre de Jesús Nazareno', nombreCorto: 'Dulce Nombre de Jesús Nazareno',
			fundacion: 1611, logo: 'img/cofradias/dulce-nombre-jesus-nazareno.webp',
			sede: 'Capilla de Santa Nonia',
			sedeCanonica: 'Capilla de Santa Nonia (Iglesia parroquial de Nuestra Señora del Mercado)',
			sedeSocial: 'Calle Cofradía del Dulce Nombre de Jesús Nazareno, 2 (León)',
			web: 'https://www.jhsleon.com',
			descripcion: [
				'Conocida por su titular, Nuestro Padre Jesús Nazareno, es una de las tres cofradías centenarias de León y comparte con la de las Angustias la Capilla de Santa Nonia.',
				'Su gran día es el Viernes Santo: en la madrugada, la tradicional Ronda recorre la ciudad y, al amanecer, sale la Procesión de los Pasos. Ambos actos están declarados de Interés Turístico Nacional. Cuenta con tres secciones musicales propias: banda de música, agrupación musical y banda de cornetas y tambores.'
			],
			historia: [
				'El obispo de León aprobó su Regla en 1611, aunque el propio texto deja ver que la cofradía ya existía antes. Ese año adquirió su capilla en el convento de Santo Domingo el Real, donde fue reuniendo un importante patrimonio escultórico. En el siglo XVIII, las normas de Carlos III sobre los portadores de los pasos hicieron que fueran los propios cofrades quienes cargaran las imágenes: es el origen de los actuales braceros.',
				'Durante la invasión francesa el convento fue incendiado y se perdió parte de sus imágenes y documentos. En 1814 la cofradía acordó con los dominicos celebrar sus cultos en la capilla de Santa Nonia, a la que sigue vinculada. En 1880 adoptó su nombre actual y en 1927 fijó como titular a Nuestro Padre Jesús Nazareno. En 2011, año de su IV Centenario, la imagen participó en el Vía Crucis de la Jornada Mundial de la Juventud de Madrid.'
			],
			habito: 'Túnica de sarga negra con cintas de raso negro, capillo y cíngulo negros, y el emblema bordado en morado sobre el corazón.',
			fuentes: [
				{ nombre: 'Junta Mayor de Cofradías', url: 'https://semanasantaleon.com/cofradias-y-hermandades/cofradia-dulce-nombre-de-jesus-nazareno/' },
				{ nombre: 'Web oficial de la cofradía', url: 'https://www.jhsleon.com' }
			]
		},
		{
			id: 'minerva-vera-cruz', slug: 'minerva-vera-cruz',
			nombre: 'Real Cofradía del Santísimo Sacramento de Minerva y la Santa Vera Cruz', nombreCorto: 'Minerva y Vera Cruz',
			fundacion: 1612, logo: 'img/cofradias/minerva-vera-cruz.webp',
			sede: 'Iglesia de San Martín',
			sedeCanonica: 'Iglesia parroquial de San Martín',
			sedeSocial: 'Avenida de la Independencia, 25 (León)',
			web: 'https://www.minervayveracruz.org',
			descripcion: [
				'La Real Cofradía une dos tradiciones: la sacramental de la Minerva y la penitencial de la Santa Vera Cruz, considerada la hermandad penitencial más antigua documentada en León. Con sede en la iglesia de San Martín, es una de las tres cofradías centenarias de la ciudad.',
				'Organiza el Miércoles Santo la Procesión de la Virgen de la Amargura, participa el Lunes Santo en la Procesión de la Pasión y, en los años impares, como 2027, le corresponde la Solemne y Oficial Procesión del Santo Entierro del Viernes Santo.'
			],
			historia: [
				'La hermandad sacramental de la Minerva se fundó en 1612 a partir de una bula papal introducida en León por el cardenal Cesarini, a instancias de fray Vicente de Arce, abad del monasterio de San Claudio. Poco después se trasladó a la iglesia de San Martín y, en el siglo XVIII, se unió a la Cofradía del Santísimo Sacramento de esa parroquia.',
				'La Santa Vera Cruz, por su parte, había ido agrupando a otras antiguas hermandades de la ciudad. A petición de la parroquia de San Martín, donde ambas tenían su sede, las dos cofradías se unieron con unos nuevos estatutos aprobados en 1895. En 2024 León le dedicó la Rinconada de la Real Cofradía, junto a la muralla.'
			],
			habito: 'Túnica negra lisa de tablón con bocamangas de terciopelo morado. La Junta de Gobierno viste capirote de terciopelo morado y capa blanca.',
			fuentes: [
				{ nombre: 'Junta Mayor de Cofradías', url: 'https://semanasantaleon.com/cofradias-y-hermandades/real-cofradia-santisimo-sacramento-de-minerva-y-la-santa-veracruz/' },
				{ nombre: 'Web oficial de la cofradía', url: 'https://www.minervayveracruz.org/fundacion/' },
				{ nombre: 'Wikipedia', url: 'https://es.wikipedia.org/wiki/Real_Cofrad%C3%ADa_del_Sant%C3%ADsimo_Sacramento_de_Minerva_y_la_Santa_Vera_Cruz' }
			]
		},
		{
			id: 'santa-marta', slug: 'santa-marta-sagrada-cena',
			nombre: 'Hermandad de Santa Marta y de la Sagrada Cena', nombreCorto: 'Santa Marta y Sagrada Cena',
			fundacion: 1945, logo: 'img/cofradias/santa-marta.webp',
			sede: 'Iglesia de San Marcelo',
			sedeCanonica: 'Iglesia de San Marcelo',
			sedeSocial: 'Calle Virgen Blanca, 44 (León)',
			web: 'https://www.hermandaddesantamarta.com',
			descripcion: [
				'La Hermandad Sacramental de Santa Marta y de la Sagrada Cena nació a mediados del siglo XX vinculada al gremio de la hostelería leonesa, de ahí su devoción a Santa Marta. Tiene su sede en la iglesia de San Marcelo.',
				'Organiza dos procesiones: el Rosario de Pasión del Lunes Santo y la Procesión de la Sagrada Cena del Jueves Santo, cuyo paso titular es obra de Víctor de los Ríos. Su hábito, de túnica crema con terciopelo rojo sangre, es uno de los más reconocibles de la ciudad.'
			],
			historia: [
				'Las gestiones para fundarla comenzaron en el seno del Sindicato de Hostelería, impulsadas por Máximo Gómez Barthe, su fundador y primer presidente. El 11 de diciembre de 1945 el obispo Luis Almarcha aprobó el acta fundacional y los primeros estatutos.',
				'Poco después participó por primera vez en la Semana Santa, dentro de la procesión del Santo Entierro, y con el estreno del paso de la Sagrada Cena empezó a organizar su propia procesión del Jueves Santo. Con los años incorporó el Rosario de Pasión del Lunes Santo desde San Marcelo y adoptó su nombre actual. En 2025 el Ayuntamiento le dedicó una calle junto a su sede.'
			],
			habito: 'Túnica color crema claro con cuello, bocamangas, botones y fajín de terciopelo rojo sangre, y capirote alto del mismo terciopelo.',
			fuentes: [
				{ nombre: 'Junta Mayor de Cofradías', url: 'https://semanasantaleon.com/cofradias-y-hermandades/hermandad-sacramental-de-santa-marta-y-de-la-sagrada-cena/' },
				{ nombre: 'Web oficial de la hermandad', url: 'https://www.hermandaddesantamarta.com' }
			]
		},
		{
			id: 'divino-obrero', slug: 'jesus-divino-obrero',
			nombre: 'Real Hermandad de Jesús Divino Obrero', nombreCorto: 'Jesús Divino Obrero',
			fundacion: 1955, logo: 'img/cofradias/divino-obrero.webp',
			sede: 'Iglesia de Jesús Divino Obrero',
			sedeCanonica: 'Iglesia parroquial de Jesús Divino Obrero',
			sedeSocial: 'Calle Leopoldo Alas, 20 (León)',
			web: 'https://www.rhjdo.es',
			descripcion: [
				'La Real Hermandad de Jesús Divino Obrero se fundó en 1955 y fue la primera cofradía leonesa con banda propia. Viste túnica blanco hueso con bocamangas de terciopelo morado y capa morada.',
				'Cada año cierra la Semana Santa de León con la Procesión de El Encuentro del Domingo de Resurrección. Organiza también la Procesión de los Ramos y la Procesión de la Soledad del Sábado Santo. Su titular, Jesús Divino Obrero, obra de Víctor de los Ríos, sale en el Corpus y el 1 de mayo, fiesta de la Hermandad.'
			],
			historia: [
				'Se fundó el 2 de abril de 1955 por iniciativa de Restituto Ruano, su primer abad-presidente, con sede inicial en la parroquia de San Juan y San Pedro de Renueva. Más tarde se trasladó oficialmente a la nueva iglesia de Jesús Divino Obrero.',
				'Fue la primera cofradía de León con banda propia de cornetas y tambores, a la que después incorporó gaitas. Organiza desde sus primeros años El Encuentro del Domingo de Resurrección, celebrado primero en la actual plaza de la Inmaculada y después ante la Catedral. Igualó en derechos a hermanos y hermanas, y en 2006, con motivo de su 50 aniversario, la Casa Real le concedió el título de Real.'
			],
			habito: 'Túnica de color blanco hueso con bocamangas y botonadura de terciopelo morado, capa de raso morado y ceñidor blanco hueso y morado.',
			fuentes: [
				{ nombre: 'Junta Mayor de Cofradías', url: 'https://semanasantaleon.com/cofradias-y-hermandades/real-hermandad-de-jesus-divino-obrero/' },
				{ nombre: 'Web oficial de la hermandad', url: 'https://www.rhjdo.es' }
			]
		},
		{
			id: 'siete-palabras', slug: 'siete-palabras',
			nombre: 'Cofradía de las Siete Palabras de Jesús en la Cruz', nombreCorto: 'Siete Palabras',
			fundacion: 1962, logo: 'img/cofradias/siete-palabras.svg',
			sede: 'Iglesia de San Marcelo',
			sedeCanonica: 'Iglesia parroquial de San Marcelo',
			sedeSocial: 'Calle Lope de Vega, 13 (León)',
			web: 'https://www.sietepalabras.com',
			descripcion: [
				'Fundada en 1962 en la parroquia de San Marcelo, destaca por su carácter innovador. Su hábito de terciopelo rojo sangre, con capirote blanco y capa negra, es inconfundible, y su sección musical fue la primera de la ciudad en incorporar instrumentos como clarinetes, tubas y saxofones.',
				'Su Semana Santa incluye el Solemne Vía Crucis Procesional en la medianoche del Miércoles Santo, el Pregón a Caballo del Jueves Santo y, el Viernes Santo, el Sermón y la Procesión de las Siete Palabras, con un paso para cada palabra de Cristo en la Cruz.'
			],
			historia: [
				'El obispo Luis Almarcha la erigió el 22 de septiembre de 1962 con sede en San Marcelo. En el acta fundacional figuran catorce hermanos, con Eduardo de Paz como primer abad e impulsor. En sus primeros años desfiló en la antigua procesión del Pregón y organizó su primera procesión de Viernes Santo con un único paso: su imagen titular, el Santísimo Cristo de la Agonía, tallado por Gregorio Fernández en 1631.',
				'Desde entonces ha ido completando las Siete Palabras con obras de escultores como Ángel Estrada, Hipólito Pérez Calvo, Jesús Iglesias o Manuel Martín Nieto; la Primera Palabra llegó en 2022. En 2026 la cuesta de San Isidoro pasó a llamarse oficialmente calle de la Cofradía de las Siete Palabras de Jesús en la Cruz.'
			],
			habito: 'Túnica lisa de terciopelo rojo sangre con anchas bocamangas, capirote alto blanco, capa de raso negro y cíngulo negro con dos borlas.',
			fuentes: [
				{ nombre: 'Junta Mayor de Cofradías', url: 'https://semanasantaleon.com/cofradias-y-hermandades/cofradia-las-siete-palabras-de-jesus-en-la-cruz/' },
				{ nombre: 'Web oficial de la cofradía', url: 'https://www.sietepalabras.com' }
			]
		},
		{
			id: 'perdon', slug: 'santo-cristo-del-perdon',
			nombre: 'Cofradía del Santo Cristo del Perdón', nombreCorto: 'Santo Cristo del Perdón',
			fundacion: 1964, logo: 'img/cofradias/perdon.webp',
			sede: 'Iglesia de San Francisco de la Vega',
			sedeCanonica: 'Iglesia parroquial de San Francisco de la Vega',
			sedeSocial: 'Avenida Doctor Fleming, 34 (León)',
			web: 'https://www.santocristodelperdon.com',
			descripcion: [
				'Séptima cofradía de la Semana Santa leonesa, es conocida por el acto que da sentido a su procesión del Martes Santo: ante la Catedral, el abad solicita el indulto de un preso y, si se concede, la persona liberada se incorpora al cortejo.',
				'Tiene su sede en la parroquia de San Francisco de la Vega. Viste un sencillo hábito de lana marrón con fajín blanco, y sus hermanos llevan al cuello una cruz de madera. También organiza la Procesión de los Ramos y un Vía Crucis popular el Miércoles Santo.'
			],
			historia: [
				'Comenzó a gestarse a finales de 1964. Sus estatutos se presentaron al obispo Luis Almarcha y el 5 de enero de 1965 quedó erigida canónicamente en San Francisco de la Vega, con Ángel Benavente Valencia como primer abad. En pocos meses reunió a más de 170 hermanos activos, diseñó su hábito y confeccionó más de 200 túnicas.',
				'El Martes Santo, 13 de abril de 1965, salió por primera vez la Procesión del Perdón. Fue también la primera vez en la historia de la Semana Santa leonesa que se concedió a una cofradía la gracia de indultar a un condenado. En 2025 el Ayuntamiento le dedicó una glorieta junto a su parroquia.'
			],
			habito: 'Hábito de sarga de lana marrón ceñido con fajín de lana blanca, capirote alto de la misma tela y cruz de madera al cuello.',
			fuentes: [
				{ nombre: 'Junta Mayor de Cofradías', url: 'https://semanasantaleon.com/cofradias-y-hermandades/cofradia-santo-cristo-del-perdon/' },
				{ nombre: 'Web oficial de la cofradía', url: 'https://www.santocristodelperdon.com' }
			]
		},
		{
			id: 'redencion', slug: 'jesus-de-la-redencion',
			nombre: 'Cofradía de Nuestro Señor Jesús de la Redención', nombreCorto: 'Jesús de la Redención',
			fundacion: 1991, logo: 'img/cofradias/redencion.webp',
			sede: 'Iglesia de San Martín',
			sedeCanonica: 'Iglesia parroquial de San Martín',
			sedeSocial: 'Plaza de Santo Martino, 7 (León)',
			web: 'https://www.redencionleon.com',
			descripcion: [
				'Nacida en 1991 con sede en la iglesia de San Martín, la Cofradía de Nuestro Señor Jesús de la Redención recuperó para su procesión la forma tradicional de pujar los pasos con horquetas.',
				'Su gran cita es la noche del Domingo de Ramos, cuando sus tres pasos (Nuestro Padre Jesús de la Misericordia, el Santo Cristo de la Redención y Nuestra Madre de la Divina Gracia) salen del Museo Diocesano y de Semana Santa. La víspera celebra el Besapié al Santo Cristo de la Redención. Su hábito es negro, con capillo, bocamangas y cíngulo rojos.'
			],
			historia: [
				'Sus estatutos se aprobaron el 17 de enero de 1991, bajo el episcopado de Antonio Vilaplana, y desde el principio eligió el Domingo de Ramos como día de procesión. El 24 de marzo de ese año salió a la calle por primera vez, recuperando la tradición de procesionar a la vieja usanza con horquetas.',
				'Durante años su procesión partió del Real Monasterio de Santa María de Carbajal, de las madres benedictinas. En 2023 la Junta General acordó trasladar la salida y la llegada al Museo Diocesano y de Semana Santa. Ese mismo año León le dedicó la calle de La Redención.'
			],
			habito: 'Túnica negra con el emblema rojo sobre el corazón, capillo, bocamangas y cíngulo rojos.',
			fuentes: [
				{ nombre: 'Junta Mayor de Cofradías', url: 'https://semanasantaleon.com/cofradias-y-hermandades/cofradia-nuestro-senor-jesus-de-la-redencion/' },
				{ nombre: 'Web oficial de la cofradía', url: 'https://www.redencionleon.com' }
			]
		},
		{
			id: 'expiracion-silencio', slug: 'expiracion-y-silencio',
			nombre: 'Cofradía del Santísimo Cristo de la Expiración y del Silencio', nombreCorto: 'Expiración y Silencio',
			fundacion: 1991, logo: 'img/cofradias/expiracion-silencio.webp',
			sede: 'Convento de San Francisco',
			sedeCanonica: 'Convento de San Francisco «El Real» (Hermanos Menores Capuchinos)',
			sedeSocial: null,
			web: null,
			descripcion: [
				'Vinculada a la comunidad capuchina del convento de San Francisco, se considera heredera de una larga tradición franciscana en León.',
				'Colabora con la Orden Franciscana Seglar en la inmemorial Procesión del Dainos del Domingo de Ramos, celebra el Martes Santo el tradicional Vía Crucis leonés cantado y organiza el Miércoles Santo la Procesión del Silencio. Su hábito combina una túnica morada de estilo Medinaceli con capirote blanco y la Tau franciscana al pecho.'
			],
			historia: [
				'La procesión del Dainos, ligada al Santo Rosario de la Buena Muerte, aparece documentada en el siglo XVII como una celebración existente «desde tiempo inmemorial». Ya en el siglo XX, los capuchinos impulsaron cada Miércoles Santo una Procesión del Silencio de marcado carácter devocional, promovida sobre todo por el padre Javier de Valladolid.',
				'A finales de los años ochenta, un grupo de jóvenes colaboradores del convento empezó a preparar la creación de una cofradía que organizara ambos cortejos. El 11 de marzo de 1991 el Obispado aprobó sus reglas. Desde entonces asume estas procesiones y ha recuperado el Vía Crucis cantado del Martes Santo, tal como se celebraba en los pueblos de León.'
			],
			habito: 'Túnica de sarga morada de estilo Medinaceli con botones de raso blanco, cíngulo blanco con tres nudos y capirote blanco con la Tau franciscana.',
			fuentes: [
				{ nombre: 'Junta Mayor de Cofradías', url: 'https://semanasantaleon.com/cofradias-y-hermandades/cofradia-santisimo-cristo-de-la-expiracion-y-del-silencio/' }
			]
		},
		{
			id: 'maria-dulce-nombre', slug: 'maria-del-dulce-nombre',
			nombre: 'Cofradía de María del Dulce Nombre', nombreCorto: 'María del Dulce Nombre',
			fundacion: 1991, logo: 'img/cofradias/maria-dulce-nombre.webp',
			sede: 'Iglesia de San Martín',
			sedeCanonica: 'Iglesia parroquial de San Martín',
			sedeSocial: null,
			web: 'https://wwwmdn.wixsite.com/cofradia',
			descripcion: [
				'Fundada en 1991 con sede en la iglesia de San Martín, la Cofradía de María del Dulce Nombre tiene como titular a la Virgen del Camino, y sus pasos los pujan braceras.',
				'Su procesión, «María al pie de la Cruz, Camino de la Esperanza», sale en la tarde del Jueves Santo. Fuera de la Semana Santa organiza una romería que lleva a hombros la imagen de la Virgen del Camino desde su basílica hasta el Humilladero, lugar de la aparición. Su hábito es negro, con capillo, bocamangas y cíngulo verdes.'
			],
			historia: [
				'En enero de 1991 se formó una comisión gestora para redactar sus estatutos, que se aprobaron ese mismo año. El Jueves Santo de 1992 salió por primera vez su procesión desde el convento de las madres benedictinas Carbajalas, donde también tomó posesión la primera Junta de Seises.',
				'Ese año empezó a conmemorar la aparición de la Virgen del Camino con una procesión-romería. En 2004 aprobó unos nuevos estatutos y en 2022 incorporó la imagen de la Virgen del Camino, Esperanza Nuestra, del imaginero sevillano José Antonio Navarro Arteaga, que procesiona el Jueves Santo.'
			],
			habito: 'Túnica negra de tablón con capillo, bocamangas y cíngulo verdes. Las hermanas de la Junta de Seises llevan capirote de terciopelo verde y capa negra.',
			fuentes: [
				{ nombre: 'Junta Mayor de Cofradías', url: 'https://semanasantaleon.com/cofradias-y-hermandades/cofradia-maria-del-dulce-nombre/' },
				{ nombre: 'Web oficial de la cofradía', url: 'https://wwwmdn.wixsite.com/cofradia' }
			]
		},
		{
			id: 'bienaventuranza', slug: 'santo-cristo-de-la-bienaventuranza',
			nombre: 'Cofradía del Santo Cristo de la Bienaventuranza', nombreCorto: 'Bienaventuranza',
			fundacion: 1992, logo: 'img/cofradias/bienaventuranza.webp',
			sede: 'Iglesia de San Claudio',
			sedeCanonica: 'Iglesia parroquial de San Claudio',
			sedeSocial: 'Calle Cipriano de la Huerga, 10 (León)',
			web: 'https://www.santocristodelabienaventuranza.es',
			descripcion: [
				'Surgida en 1992 en la parroquia de San Claudio, lleva a la calle la Procesión de las Bienaventuranzas en la mañana del Jueves Santo; al llegar a la Catedral se lee el Sermón de las Bienaventuranzas.',
				'El Sábado de Pasión organiza además un Solemne Vía Crucis Procesional. Su hábito es negro, con capillo, bocamangas y cíngulo azules, un color muy ligado al monasterio de San Claudio. Cuenta con agrupación musical propia.'
			],
			historia: [
				'La idea partió de Carmelo Rodríguez del Cueto, párroco de San Claudio, que planteó la necesidad de que el barrio tuviera una cofradía penitencial. Con el apoyo de jóvenes y de los movimientos parroquiales se puso en marcha la fundación, y el 8 de junio de 1992 el obispo Antonio Vilaplana la constituyó canónicamente. Tomó como titular el Cristo que se veneraba en el templo parroquial.',
				'La Junta de Seises situó su procesión en la mañana del Jueves Santo, y el 8 de abril de 1993 salió por primera vez la Procesión de las Bienaventuranzas. En los años siguientes incorporó nuevos pasos, obra de escultores como Ricardo Flecha, José Luis Casanova o Ana Rey y Ángel Pantoja.'
			],
			habito: 'Túnica negra de tablón con capillo, bocamangas de raso y cíngulo azules. La Junta de Seises viste capuchón y capa de terciopelo y raso azul.',
			fuentes: [
				{ nombre: 'Junta Mayor de Cofradías', url: 'https://semanasantaleon.com/cofradias-y-hermandades/cofradia-santo-cristo-de-la-bienaventuranza/' },
				{ nombre: 'Web oficial de la cofradía', url: 'https://www.santocristodelabienaventuranza.es' }
			]
		},
		{
			id: 'desenclavo', slug: 'santo-cristo-del-desenclavo',
			nombre: 'Cofradía del Santo Cristo del Desenclavo', nombreCorto: 'Desenclavo',
			fundacion: 1992, logo: 'img/cofradias/desenclavo.webp',
			sede: 'Iglesia de Santa Marina la Real',
			sedeCanonica: 'Iglesia de Santa Marina la Real',
			sedeSocial: null,
			web: 'https://www.desenclavo.com',
			descripcion: [
				'Con sede en Santa Marina la Real, gira en torno al Acto del Desenclavo, en el que se desclava la imagen de Cristo de la cruz, y que centra su procesión del Sábado Santo ante la Basílica de San Isidoro.',
				'Su Semana Santa incluye también la Procesión de los Ramos, junto a la Cofradía de la Agonía, la Ronda Lírico-Pasional de la noche del Miércoles Santo y la Procesión de las Tinieblas y Santo Cristo de las Injurias del Jueves Santo. Viste túnica de sarga púrpura con capirote y cíngulo negros.'
			],
			historia: [
				'El acta fundacional se firmó el 3 de julio de 1992 y el 31 de julio el Obispado aprobó sus estatutos, quedando constituida en Santa Marina la Real. El 8 de noviembre tomó posesión la primera Junta de Seises, fecha que se convirtió en su fiesta oficial.',
				'El Sábado Santo de 1993 celebró sus primeros actos de Semana Santa y el Acto del Desenclavo ante San Isidoro, eje desde entonces de su procesión. En sus primeros años instauró la Ronda Lírico-Pasional y creó su banda de cornetas y tambores. Está hermanada con la Cofradía de la Santa Vera Cruz y Confalón de Astorga, que también celebra el Desenclavo. En 2025 León inauguró la Plaza del Desenclavo.'
			],
			habito: 'Túnica lisa de sarga púrpura con bocamangas y capirote negros y cíngulo negro; el emblema va en el centro del babero.',
			fuentes: [
				{ nombre: 'Junta Mayor de Cofradías', url: 'https://semanasantaleon.com/cofradias-y-hermandades/cofradia-santo-cristo-del-desenclavo/' },
				{ nombre: 'Web oficial de la cofradía', url: 'https://www.desenclavo.com' }
			]
		},
		{
			id: 'santo-sepulcro', slug: 'santo-sepulcro-esperanza-de-vida',
			nombre: 'Cofradía del Santo Sepulcro Esperanza de Vida', nombreCorto: 'Santo Sepulcro',
			fundacion: 1992, logo: 'img/cofradias/santo-sepulcro.webp',
			sede: 'Iglesia de San Froilán',
			sedeCanonica: 'Parroquia de San Froilán',
			sedeSocial: null,
			web: 'https://www.santosepulcroleon.es',
			descripcion: [
				'Nació para dar realce a la celebración central de la Semana Santa, la Vigilia Pascual. Tiene su sede en la parroquia de San Froilán. Su hábito une el negro de la muerte y el blanco de la vida, y su emblema es la cruz roja del Santo Sepulcro.',
				'Organiza el Lunes Santo la Solemne Adoración Procesional de las Llagas de Cristo, que recorre en silencio el Barrio Húmedo, y el Sábado Santo la Procesión Camino de la Luz, en la que entrega parte del fuego que procesiona a los templos del recorrido.'
			],
			historia: [
				'Un grupo de cristianos convencidos de que sin la Noche Pascual la Semana Santa perdería su sentido impulsó la creación de la cofradía, que tomó como titular el Santo Sepulcro, testigo de la Resurrección.',
				'El Sábado Santo de 1993 celebró por primera vez la Procesión Camino de la Luz y más tarde incorporó la Adoración de las Llagas del Lunes Santo. Su patrimonio incluye el Santo Sepulcro y El Hombre Nuevo, ambos de Vicente Martín Morte, y Nuestra Señora de la Luz, de Ana Rey y Ángel Pantoja. Su banda de cornetas y tambores acabó convirtiéndose en agrupación musical.'
			],
			habito: 'Túnica negra con capillo alto blanco, cíngulo, camisa y guantes blancos, y el emblema sobre el babero.',
			fuentes: [
				{ nombre: 'Junta Mayor de Cofradías', url: 'https://semanasantaleon.com/cofradias-y-hermandades/cofradia-santo-sepulcro-esperanza-de-vida/' },
				{ nombre: 'Web oficial de la cofradía', url: 'https://www.santosepulcroleon.es' }
			]
		},
		{
			id: 'agonia', slug: 'agonia-de-nuestro-senor',
			nombre: 'Cofradía de la Agonía de Nuestro Señor', nombreCorto: 'Agonía de Nuestro Señor',
			fundacion: 1993, logo: 'img/cofradias/agonia.webp',
			sede: 'Iglesia de Santa Marina la Real',
			sedeCanonica: 'Iglesia de Santa Marina la Real',
			sedeSocial: null,
			web: null,
			descripcion: [
				'Fundada en 1993 en la parroquia de Santa Marina la Real por iniciativa de siete hermanas, tiene como titular a Jesús del Vía Crucis, obra de José Ajenjo. Su procesión propia, Jesús Camino del Calvario, sale el Miércoles Santo.',
				'Organiza además el Sábado de Pasión la procesión infantil «Caminando tras las huellas de Jesús», comparte con el Desenclavo la Procesión de los Ramos y participa en la procesión de la Dolorosa del Viernes de Dolores. Viste túnica morada con capillo, bocamangas y cíngulo dorados.'
			],
			historia: [
				'Sus estatutos se aprobaron el 4 de octubre de 1993 y ese mismo año participó por primera vez en la Semana Santa de León, como representación dentro de otra procesión.',
				'En 1994 salió por primera vez el Miércoles Santo con paso propio: una imagen de Cristo crucificado cedida por los franciscanos. Poco después el escultor José Ajenjo talló Jesús del Vía Crucis, que pasó a ser su imagen titular. La cofradía mantiene también vínculos con Villamañán, donde participa en la procesión de Nuestra Señora de los Dolores y en la del Dainos.'
			],
			habito: 'Túnica morada con capillo, bocamangas y cíngulo dorados. La Junta de Seises viste capa morada con ribetes dorados.',
			fuentes: [
				{ nombre: 'Junta Mayor de Cofradías', url: 'https://semanasantaleon.com/cofradias-y-hermandades/cofradia-la-agonia-de-nuestro-senor/' }
			]
		},
		{
			id: 'amparo-leoneses', slug: 'jesus-sacramentado',
			nombre: 'Sacramental y Penitencial Cofradía de Nuestro Padre Jesús Sacramentado y María Santísima de la Piedad, Amparo de los Leoneses', nombreCorto: 'Jesús Sacramentado',
			fundacion: 1994, logo: 'img/cofradias/amparo-leoneses.webp',
			sede: 'Basílica de San Isidoro',
			sedeCanonica: 'Real Colegiata Basílica de San Isidoro',
			sedeSocial: 'Plaza de Santo Martino, s/n (León)',
			web: 'https://www.jesussacramentado.es',
			descripcion: [
				'Con sede en la Real Colegiata Basílica de San Isidoro, esta cofradía sacramental y penitencial sale cada Sábado de Pasión con la Procesión Camino de la Pasión y de la Esperanza.',
				'En la calle Sacramento se celebra una petalada a la Virgen de la Esperanza y, en la calle Ancha, un acto ante la capilla del Cristo de la Victoria. Le acompaña la banda del Santísimo Cristo de la Victoria, cuyos miembros son hermanos honorarios. El Sábado Santo organiza además el Piadoso Vía Lucis.'
			],
			historia: [
				'En septiembre de 1993, una comisión gestora encabezada por Antonio Viñayo, entonces abad-prior de San Isidoro, redactó sus estatutos. El 8 de marzo de 1994 el obispo Antonio Vilaplana firmó el decreto que la erigía canónicamente en la Real Basílica de San Isidoro.',
				'Su primera estación de penitencia se celebró el Sábado de Pasión de 1995, con el paso de Nuestro Padre Jesús de la Esperanza, obra de Melchor Gutiérrez. Desde entonces ha incorporado nuevas imágenes, como Nuestra Señora de la Esperanza, de Miguel Bejarano, o Nuestro Padre Jesús de la Esperanza Cautivo ante Anás, de Jaime Babío.'
			],
			habito: null,
			fuentes: [
				{ nombre: 'Junta Mayor de Cofradías', url: 'https://semanasantaleon.com/cofradias-y-hermandades/sacramental-y-penitencial-cofradia-de-nuestro-padre-jesus-sacramentado-y-maria-santisima-de-la-piedad-amparo-de-los-leoneses/' },
				{ nombre: 'Web oficial de la cofradía', url: 'https://www.jesussacramentado.es' }
			]
		},
		{
			id: 'gran-poder', slug: 'cristo-del-gran-poder',
			nombre: 'Cofradía Cristo del Gran Poder', nombreCorto: 'Cristo del Gran Poder',
			fundacion: 1994, logo: 'img/cofradias/gran-poder.svg',
			sede: 'Iglesia de San Lorenzo',
			sedeCanonica: 'Iglesia parroquial de San Lorenzo',
			sedeSocial: 'Calle San Lorenzo, 15 (León)',
			web: null,
			descripcion: [
				'Nacida en 1993 y aprobada canónicamente en 1994, tiene su sede en la iglesia de San Lorenzo y cuenta con más de 1.500 hermanos.',
				'Organiza dos procesiones: la del Cristo del Gran Poder, en la tarde del Domingo de Ramos, con el acto de la Entrada Triunfal de Jesús en Jerusalén ante el Palacio Episcopal, y la Procesión de la Despedida del Jueves Santo. Su hábito es negro, con capillo, bocamangas y cíngulo plateados, y tiene una agrupación musical propia de más de cien componentes.'
			],
			historia: [
				'La cofradía nació el Domingo de Ramos de 1993, y el obispo Antonio Vilaplana firmó sus estatutos el 9 de septiembre de 1994, fecha que hoy celebra como su festividad. Su primera procesión salió el Domingo de Ramos de 1995.',
				'Desde entonces ha ido ampliando su patrimonio: los Apóstoles, basados en las tallas de los hermanos Tomé del retablo mayor de la Catedral; un nuevo Cristo titular y la Virgen del Gran Poder, de Melchor y Ramsés Gutiérrez; y pasos como la Expulsión del Templo o la Mujer Piadosa, con los que completa su catequesis en la calle. Más tarde incorporó la Procesión de la Despedida del Jueves Santo.'
			],
			habito: 'Túnica negra con el emblema en el pecho, capillo negro y bocamangas y cíngulo plateados.',
			fuentes: [
				{ nombre: 'Junta Mayor de Cofradías', url: 'https://semanasantaleon.com/cofradias-y-hermandades/cofradia-cristo-del-gran-poder/' }
			]
		}
	],

	/* ---------- Pasos por cofradía (COFRADÍA → PASOS) ----------
	   Fuente: fichas oficiales de la Junta Mayor. autor/anio/portadores: null si no consta. */
	pasos: {
		'angustias-soledad': [
			{ id: 'as-atributos', nombre: 'Los Atributos', autor: 'Francisco Javier Santos de la Hera', anio: '1988', portadores: '84 braceros' },
			{ id: 'as-lanzada', nombre: 'La Sagrada Lanzada', autor: 'Manuel Hernández León', anio: '2002', portadores: '96 braceras' },
			{ id: 'as-santo-cristo', nombre: 'Santo Cristo', autor: 'Escuela vallisoletana', anio: 's. XVI', portadores: '84 braceros' },
			{ id: 'as-virgen-angustias', nombre: 'Virgen de las Angustias', autor: 'Juan de Angers', anio: '2.ª mitad del s. XVI', portadores: '92 braceros' },
			{ id: 'as-camino-sepulcro', nombre: 'Camino del Sepulcro', autor: 'Víctor de los Ríos', anio: null, portadores: '94 braceros' },
			{ id: 'as-consolacion', nombre: 'Nuestra Señora de Consolación de María', autor: 'Juan Manuel Miñarro López', anio: '2018', portadores: '96 braceras' },
			{ id: 'as-cristo-yacente', nombre: 'Cristo Yacente', autor: 'Ángel Estrada Escanciano', anio: '1964', portadores: '86 braceros' },
			{ id: 'as-santo-sepulcro', nombre: 'Santo Sepulcro', autor: 'Juan de Juni', anio: 's. XVI', portadores: '84 braceros' },
			{ id: 'as-san-juan', nombre: 'San Juan', autor: 'Francisco Javier Santos de la Hera', anio: '1982', portadores: '92 braceros' },
			{ id: 'as-virgen-soledad', nombre: 'Virgen de la Soledad', autor: 'Anónimo', anio: null, portadores: '92 braceros' },
			{ id: 'as-lagrimas', nombre: 'Virgen de las Lágrimas', autor: 'Manuel Gutiérrez', anio: '1952', portadores: '98 braceras' },
			{ id: 'as-virgen-alegria', nombre: 'Virgen de la Alegría', autor: 'Anónimo', anio: null, notas: 'Procesiona en el Día de la Alegría (Pentecostés) y en el Corpus Christi.' }
		],
		'dulce-nombre-jesus-nazareno': [
			{ id: 'dn-oracion-huerto', nombre: 'Oración en el Huerto', autor: 'Víctor de los Ríos', anio: '1952', portadores: '84 braceros' },
			{ id: 'dn-prendimiento', nombre: 'El Prendimiento', autor: 'Ángel Estrada Escanciano', anio: '1964', portadores: '96 braceros' },
			{ id: 'dn-flagelacion', nombre: 'La Flagelación', autor: 'Cristo atribuido a Gaspar de Becerra', anio: 's. XVI', portadores: '90 braceros' },
			{ id: 'dn-coronacion', nombre: 'La Coronación', autor: 'Higinio Vázquez García', anio: '1977', portadores: '96 braceros' },
			{ id: 'dn-ecce-homo', nombre: 'Ecce Homo', autor: 'Escuela catalana', anio: '1905', portadores: '94 braceros' },
			{ id: 'dn-nazareno', nombre: 'Nuestro Padre Jesús Nazareno', autor: 'Escuela castellana (Nazareno); Víctor de los Ríos (Cirineo, 1946)', anio: 's. XVII', portadores: '94 braceros' },
			{ id: 'dn-veronica', nombre: 'La Verónica', autor: 'Francisco de Pablo Panach', anio: '1926', portadores: '80 braceros' },
			{ id: 'dn-expolio', nombre: 'El Expolio', autor: 'Francisco Díez de Tudanca', anio: '1674', portadores: '84 braceros' },
			{ id: 'dn-exaltacion', nombre: 'La Exaltación de la Cruz', autor: 'José Antonio Navarro Arteaga', anio: '2000', portadores: '102 braceros' },
			{ id: 'dn-crucifixion', nombre: 'La Crucifixión', autor: null, anio: null, portadores: '92 braceros' },
			{ id: 'dn-agonia', nombre: 'Santo Cristo de la Agonía', autor: 'Laureano Villanueva Gutiérrez', anio: '1973', portadores: '84 braceros' },
			{ id: 'dn-san-juan', nombre: 'San Juan', autor: 'Víctor de los Ríos', anio: '1946', portadores: '92 braceros' },
			{ id: 'dn-dolorosa', nombre: 'La Dolorosa', autor: 'Víctor de los Ríos', anio: '1949', portadores: '88 braceros' }
		],
		'minerva-vera-cruz': [
			{ id: 'mv-lignum-crucis', nombre: 'Lignum Crucis', autor: 'Anónimo', anio: 's. XVII', portadores: '80 braceros' },
			{ id: 'mv-flagelado', nombre: 'Santo Cristo Flagelado del Amparo y la Caridad', autor: 'Manuel López Bécker', anio: '1998', portadores: '68 braceros' },
			{ id: 'mv-humillacion', nombre: 'Nuestro Padre Jesús de la Humillación y Paciencia', autor: 'Manuel López Bécker', anio: '1991', portadores: '74 braceros' },
			{ id: 'mv-salud', nombre: 'Nuestro Señor Jesús de la Salud', autor: 'Manuel López Bécker', anio: '2001', portadores: '82 braceros' },
			{ id: 'mv-desenclavo', nombre: 'Santo Cristo del Desenclavo', autor: 'Anónimo', anio: 's. XVI', portadores: '84 braceros' },
			{ id: 'mv-vera-cruz', nombre: 'Nuestra Señora de la Vera Cruz', autor: 'Escuela de Olot', anio: 's. XX', portadores: '84 braceros' },
			{ id: 'mv-amargura', nombre: 'Virgen de la Amargura', autor: 'Anónimo', anio: 's. XVII', portadores: '86 braceros' },
			{ id: 'mv-agonia', nombre: 'Santo Cristo de la Agonía', autor: 'Amado Fernández', anio: '1973', portadores: '82 braceros' },
			{ id: 'mv-descendimiento', nombre: 'El Descendimiento', autor: 'Víctor de los Ríos', anio: '1945', portadores: '116 braceros' },
			{ id: 'mv-piedad', nombre: 'Virgen de la Piedad', autor: 'Luis Salvador Carmona', anio: '1750', portadores: '84 braceros' },
			{ id: 'mv-santo-sepulcro', nombre: 'Santo Sepulcro', autor: 'Jacinto Higueras', anio: '1951', portadores: '96 braceros' },
			{ id: 'mv-san-juan', nombre: 'San Juan', autor: 'Federico Collaut Valera', anio: '1951', portadores: '82 braceros' },
			{ id: 'mv-soledad', nombre: 'Virgen de la Soledad', autor: 'Anónimo', anio: '1920', portadores: '90 braceros' }
		],
		'santa-marta': [
			{ id: 'sm-santa-marta', nombre: 'Santa Marta', autor: 'Víctor de los Ríos', anio: null, notas: 'Titular de la Hermandad. Procesiona el día del Corpus Christi.' },
			{ id: 'sm-uncion-betania', nombre: 'Unción en Betania', autor: 'José Ajenjo Vega', anio: '1983', portadores: '84 braceros' },
			{ id: 'sm-casa-betania', nombre: 'La Casa de Betania', autor: 'Víctor de los Ríos', anio: '1969', portadores: '84 braceros' },
			{ id: 'sm-lavatorio', nombre: 'El Lavatorio', autor: 'José Ajenjo Vega', anio: null, portadores: '84 braceras' },
			{ id: 'sm-sagrada-cena', nombre: 'La Sagrada Cena', autor: 'Víctor de los Ríos', anio: '1950' }
		],
		'divino-obrero': [
			{ id: 'do-cristo-paz', nombre: 'Santísimo Cristo de la Paz y la Misericordia en su Traslado al Sepulcro', autor: 'Ángel Martín García', anio: '2004', portadores: '80 braceros' },
			{ id: 'do-cruz-esperanza', nombre: 'Santísima Cruz de la Esperanza y de la Vida', autor: 'José Luis Casanova García', anio: null, portadores: '70 braceros' },
			{ id: 'do-san-juan', nombre: 'San Juan Evangelista', autor: 'Jesús Iglesias', anio: '1994', portadores: '74 braceros' },
			{ id: 'do-tres-marias', nombre: 'Las Tres Marías', autor: 'Víctor de los Ríos', anio: '1958–1960', portadores: '90 braceros' },
			{ id: 'do-resurreccion', nombre: 'La Resurrección', autor: 'Víctor de los Ríos', anio: '1959', portadores: '20 braceros' },
			{ id: 'do-divino-obrero', nombre: 'Jesús Divino Obrero', autor: 'Víctor de los Ríos', anio: '1955', notas: 'Imagen titular. Procesiona en el Corpus y el 1 de mayo.' }
		],
		'siete-palabras': [
			{ id: 'sp-primera', nombre: 'Primera Palabra. Santísimo Cristo de las Siete Palabras', autor: 'Fernando José Aguado Hernández', anio: '2022', notas: 'Carroza acompañada por varios hermanos.' },
			{ id: 'sp-segunda', nombre: 'Segunda Palabra. Santísimo Cristo de la Misericordia', autor: 'Ángel Estrada', anio: '1964', notas: 'Carroza acompañada por varios hermanos.' },
			{ id: 'sp-tercera', nombre: 'Tercera Palabra. Santísimo Cristo de la Entrega', autor: 'Hipólito Pérez Calvo', anio: '1994', portadores: 'Carroza empujada por 16 hermanos' },
			{ id: 'sp-cuarta', nombre: 'Cuarta Palabra. Santísimo Cristo del Desamparo y Buen Amor', autor: 'Jesús Iglesias', anio: '1996', portadores: '86 braceros' },
			{ id: 'sp-quinta', nombre: 'Quinta Palabra. Santísimo Cristo de la Sed', autor: 'Manuel Martín Nieto', anio: '2003', portadores: '84 braceros' },
			{ id: 'sp-sexta', nombre: 'Sexta Palabra. Santísimo Cristo de la Sangre', autor: 'Manuel Martín Nieto', anio: '2008', portadores: '74 braceros' },
			{ id: 'sp-septima', nombre: 'Séptima Palabra. Santísimo Cristo de la Agonía', autor: 'Amado Fernández', anio: '1969', portadores: '84 braceros', notas: 'Copia del titular de la cofradía, de Gregorio Fernández (1631).' }
		],
		'perdon': [
			{ id: 'pe-condena', nombre: 'La Condena de Cristo', autor: 'Manuel López Bécker', anio: '2005–2006', portadores: '94 braceros', notas: 'Reserva 14 puestos de puja para internos del Centro Penitenciario de Mansilla de las Mulas.' },
			{ id: 'pe-perdon', nombre: 'Cristo del Perdón', autor: 'Ángel Estrada', anio: '1966', portadores: '86 braceros' },
			{ id: 'pe-esperanza', nombre: 'Cristo de la Esperanza', autor: 'Anónimo', anio: 's. XX', portadores: '34 braceros de entre 14 y 17 años' },
			{ id: 'pe-madre-paz', nombre: 'Madre de la Paz', autor: 'Amado Fernández', anio: '1984', portadores: '94 braceras' }
		],
		'redencion': [
			{ id: 're-misericordia', nombre: 'Nuestro Padre Jesús de la Misericordia', autor: 'Luisa Roldán', anio: 's. XVII', portadores: '92 braceros' },
			{ id: 're-redencion', nombre: 'Santo Cristo de la Redención', autor: 'Atribuido a Juan de Ancheta', anio: 's. XVI', portadores: '92 braceros' },
			{ id: 're-divina-gracia', nombre: 'Nuestra Madre de la Divina Gracia', autor: 'Antonio José Martínez Rodríguez', anio: '2012', portadores: '94 braceros' }
		],
		'expiracion-silencio': [
			{ id: 'es-dainos', nombre: 'Jesús Nazareno «Dainos»', autor: 'Escuela castellana', anio: 's. XVIII', portadores: '40 braceros' },
			{ id: 'es-medinaceli', nombre: 'Nuestro Padre Jesús de Medinaceli «El Silencio»', autor: 'Copia del original madrileño, taller de Asorey', anio: 's. XX', portadores: '40 braceros' },
			{ id: 'es-expiracion', nombre: 'Santísimo Cristo de la Expiración', autor: 'Anónimo', anio: 's. XX', portadores: '16 braceros' }
		],
		'maria-dulce-nombre': [
			{ id: 'md-mujeres-jerusalen', nombre: 'Jesús Consuela a las Mujeres de Jerusalén', autor: 'Bartolomé Alvarado', anio: '2003–2004', portadores: '104 braceras' },
			{ id: 'md-cruz-gloriosa', nombre: 'La Cruz Gloriosa', autor: 'José Ajenjo', anio: '1992', portadores: '84 braceras' },
			{ id: 'md-esperanza-nuestra', nombre: 'Virgen del Camino, Esperanza Nuestra', autor: 'José Antonio Navarro Arteaga', anio: '2022', portadores: '92 braceras', notas: 'Imagen titular.' },
			{ id: 'md-dulce-nombre', nombre: 'María Santísima del Dulce Nombre y San Juan Evangelista', autor: 'Luis Alberto García Geute', anio: '1994–1996', portadores: '102 braceras' },
			{ id: 'md-virgen-camino', nombre: 'Virgen del Camino', autor: 'Padre dominico Manuel Morán', anio: '1993', notas: 'Copia de la imagen de la Basílica de la Virgen del Camino. Procesiona en la romería de la Aparición.' }
		],
		'bienaventuranza': [
			{ id: 'bi-cristo-titular', nombre: 'Santo Cristo de la Bienaventuranza', autor: 'Anónimo', anio: 's. XX', portadores: '7 braceros sobre el hombro', notas: 'Procesiona en el Solemne Vía Crucis Procesional.' },
			{ id: 'bi-santa-cruz', nombre: 'Santa Cruz', autor: 'Ricardo Flecha Barrio', anio: '1998', portadores: '36 braceros de entre 14 y 18 años' },
			{ id: 'bi-nazareno', nombre: 'Nuestro Señor Jesús Nazareno', autor: 'Ana Rey y Ángel Pantoja', anio: '2016', portadores: '84 braceros' },
			{ id: 'bi-cristo-jueves', nombre: 'Santo Cristo de la Bienaventuranza (Jueves Santo)', autor: 'José Luis Casanova García', anio: '2004', portadores: '96 braceros' },
			{ id: 'bi-piedad', nombre: 'Nuestra Madre de la Piedad', autor: 'Ricardo Flecha Barrio', anio: '1998', portadores: '80 braceras' },
			{ id: 'bi-misericordia', nombre: 'María Santísima de la Misericordia', autor: 'Ana Rey y Ángel Pantoja', anio: '2015', portadores: '92 braceras' }
		],
		'desenclavo': [
			{ id: 'de-mayor-dolor', nombre: 'María Santísima del Mayor Dolor en su Soledad', autor: 'Pablo Lanchares', anio: '2013', portadores: '60 braceras' },
			{ id: 'de-injurias', nombre: 'Santo Cristo de las Injurias', autor: 'Amancio González Andrés', anio: '1995', portadores: '60 braceros' },
			{ id: 'de-desenclavo', nombre: 'Santo Cristo del Desenclavo', autor: 'Manuel López Bécker', anio: '2000', portadores: '90 braceros' },
			{ id: 'de-camino-padre', nombre: 'Cristo desenclavado en su camino hacia el Padre', autor: 'Manuel López Bécker', anio: '2000', portadores: 'Carroza empujada por 12 personas' },
			{ id: 'de-desconsuelo', nombre: 'Nuestra Madre María Santísima del Desconsuelo', autor: 'Jesús Azcoitia', anio: '1998', portadores: '90 braceras' },
			{ id: 'de-piedad', nombre: 'La Piedad', autor: 'Talleres de Olot', anio: '1.er tercio del s. XX', portadores: '90 braceros', notas: 'Cedida por la parroquia de San José de las Ventas.' }
		],
		'santo-sepulcro': [
			{ id: 'ss-santo-sepulcro', nombre: 'Santo Sepulcro', autor: 'Vicente Martín Morte', anio: '1996', portadores: '16 braceros (Lunes Santo) y 64 (Sábado Santo)' },
			{ id: 'ss-hombre-nuevo', nombre: 'El Hombre Nuevo', autor: 'Vicente Martín Morte', anio: '2002', portadores: '76 braceros' },
			{ id: 'ss-senora-luz', nombre: 'Nuestra Señora de la Luz', autor: 'Ana Rey y Ángel Pantoja', anio: '2014', portadores: '60 braceros' }
		],
		'agonia': [
			{ id: 'ag-via-crucis', nombre: 'Jesús del Vía Crucis', autor: 'José Ajenjo', anio: '1997', portadores: '47 braceros', notas: 'Imagen titular.' }
		],
		'amparo-leoneses': [
			{ id: 'am-cautivo', nombre: 'Nuestro Padre Jesús de la Esperanza Cautivo ante Anás', autor: 'Jaime Babío Núñez', anio: '2011', portadores: '65 braceros' },
			{ id: 'am-piedad-milagro', nombre: 'Virgen de la Piedad y del Milagro', autor: 'Anónimo', anio: 's. XVI', portadores: '60 braceros' },
			{ id: 'am-esperanza', nombre: 'Nuestra Señora la Virgen de la Esperanza', autor: 'Miguel Bejarano Moreno', anio: '2004', portadores: '70 braceros' },
			{ id: 'am-jesus-esperanza', nombre: 'Nuestro Padre Jesús de la Esperanza', autor: 'Melchor Gutiérrez San Martín', anio: '1996' }
		],
		'gran-poder': [
			{ id: 'gp-apostoles', nombre: 'Los Apóstoles', autor: 'Copias autorizadas de las tallas de Narciso Tomé', anio: null, portadores: '88 braceros' },
			{ id: 'gp-cristo', nombre: 'Cristo del Gran Poder', autor: 'Melchor Gutiérrez San Martín y Ramsés Gutiérrez Renedo', anio: '2000', portadores: '90 braceros' },
			{ id: 'gp-expulsion', nombre: 'La Expulsión del Templo', autor: 'Melchor Gutiérrez San Martín', anio: '2016', portadores: '80 braceros y braceras' },
			{ id: 'gp-san-juan', nombre: 'San Juan', autor: 'José Miguel Tirado Carpio', anio: '2006', portadores: '100 braceras' },
			{ id: 'gp-virgen', nombre: 'Virgen del Gran Poder', autor: 'Melchor Gutiérrez San Martín y Ramsés Gutiérrez Renedo', anio: '2000', portadores: '110 braceras' },
			{ id: 'gp-oracion', nombre: 'La Oración en el Huerto', autor: 'Melchor Gutiérrez, Miguel Bejarano y Ramsés Gutiérrez', anio: '2002–2016', portadores: '80 braceros y braceras' },
			{ id: 'gp-virgen-pozo', nombre: 'Virgen del Pozo y Marías', autor: 'Melchor Gutiérrez San Martín y Miguel Bejarano', anio: '2002–2016', portadores: '100 braceras' },
			{ id: 'gp-mujer-piadosa', nombre: 'La Mujer Piadosa', autor: 'Melchor Gutiérrez San Martín', anio: '2023', portadores: '88 braceros' },
			{ id: 'gp-despojado', nombre: 'Cristo Despojado', autor: 'Melchor Gutiérrez San Martín', anio: '2016', portadores: '80 braceros' },
			{ id: 'gp-virgen-reyes', nombre: 'Virgen de los Reyes de León', autor: 'Melchor Gutiérrez San Martín', anio: '1999', portadores: '110 braceras' }
		]
	},

	/* ---------- Procesiones y actos (PROCESIÓN ↔ COFRADÍAS) ----------
	   dia: id del día · cofradias: organizadoras · participan: colaboradoras
	   alterna: organización según año par/impar · hora: null si no hay referencia
	   pagina: true cuando exista procesion.html?p=slug (todavía no se ha creado ninguna). */
	procesiones: [
		/* Viernes de Dolores */
		{
			id: 'dolorosa', slug: 'procesion-de-la-dolorosa', dia: 'viernes-dolores', tipo: 'procesion',
			nombre: 'Procesión de la Dolorosa', hora: '19:30',
			organiza: 'Parroquia de Nuestra Señora del Mercado', participan: ['agonia'],
			salida: 'Iglesia de Nuestra Señora del Mercado',
			musica: ['Agrupación Musical Nuestra Señora de las Angustias y Soledad', 'Banda de Música Dulce Nombre de Jesús Nazareno'],
			recorrido: ['Iglesia de Nuestra Señora del Mercado', 'Herreros', 'Escurial', 'Plaza de Santa María del Camino (del Grano)', 'Cuesta de las Carbajalas (canto de la Salve en el Real Monasterio de las RR.MM. Benedictinas)', 'La Redención', 'Cuesta de los Castañones', 'Santa Cruz', 'Plaza Mayor (sin vuelta)', 'Mariano Domínguez Berrueta', 'Plaza de Regla', 'Ancha', 'Plaza de San Marcelo', 'Plaza de Santo Domingo (canto de la Salve)', 'Independencia', 'Legio VII', 'Plaza de San Marcelo', 'Teatro', 'Rúa', 'Plaza de las Concepciones', 'San Francisco', 'Hospicio', 'Herreros', 'Iglesia de Nuestra Señora del Mercado'],
			pasos: [{ nombre: 'Virgen del Mercado', autor: 'Anónimo', anio: 's. XV', portadores: '56 braceros' }]
		},

		/* Sábado de Pasión */
		{
			id: 'procesion-infantil', slug: 'procesion-infantil-caminando-tras-las-huellas-de-jesus', dia: 'sabado-pasion', tipo: 'procesion',
			nombre: 'Procesión infantil «Caminando tras las huellas de Jesús»', hora: '12:00',
			cofradias: ['agonia'], salida: 'Iglesia de Santa Marina la Real'
		},
		{
			id: 'via-crucis-bienaventuranza', slug: 'solemne-via-crucis-procesional-bienaventuranza', dia: 'sabado-pasion', tipo: 'procesion',
			nombre: 'Solemne Vía Crucis Procesional', hora: null,
			cofradias: ['bienaventuranza']
		},
		{
			id: 'hermandad-divino-obrero', slug: 'procesion-de-hermandad-divino-obrero', dia: 'sabado-pasion', tipo: 'procesion',
			nombre: 'Procesión de Hermandad', hora: null,
			cofradias: ['divino-obrero'],
			notas: 'Según la Hermandad, se celebra en León los años impares y en La Bañeza los pares.'
		},
		{
			id: 'camino-pasion-esperanza', slug: 'procesion-camino-de-la-pasion-y-de-la-esperanza', dia: 'sabado-pasion', tipo: 'procesion',
			nombre: 'Procesión Camino de la Pasión y de la Esperanza', hora: '18:00',
			cofradias: ['amparo-leoneses'],
			salida: 'Patio de la Real Colegiata – Basílica de San Isidoro',
			recorrido: ['Patio de la Real Colegiata – Basílica de San Isidoro (canto de la Coral Isidoriana, solo para hermanos)', 'Plaza de Santo Martino', 'Sacramento (petalada a la Virgen de la Esperanza)', 'Plaza de San Isidoro', 'Cid (acto del Cristo de la Victoria)', 'Ancha', 'Plaza de San Marcelo', 'Teatro', 'Rúa', 'Plaza de las Concepciones', 'Fernández Cadórniga', 'Plaza de Don Gutierre', 'Zapaterías', 'Plaza de San Martín', 'Plegaria (ofrenda floral al Cristo de Fuera de San Martín)', 'Plaza Mayor (sin vuelta)', 'Mariano Domínguez Berrueta', 'Plaza de Regla (estación de penitencia)', 'Sierra Pambley', 'Dámaso Merino', 'Cervantes', 'Plaza Torres de Omaña', 'Fernando González Regueral', 'Plaza de San Isidoro', 'Sacramento', 'Plaza de Santo Martino'],
			pasos: [
				{ paso: 'am-cautivo', nombre: 'Nuestro Padre Jesús de la Esperanza Cautivo ante Anás', acompanamiento: 'Banda de Cornetas y Tambores Santísimo Cristo de la Victoria' },
				{ nombre: 'María Santísima de la Soledad Amparo de los Leoneses', acompanamiento: 'Agrupación Musical Cristo del Gran Poder' },
				{ paso: 'am-esperanza', nombre: 'Nuestra Señora de la Esperanza', acompanamiento: 'Santo Cristo de la Bienaventuranza', portadores: '70 braceros y braceras' }
			]
		},
		{
			id: 'misa-admision', slug: 'misa-de-admision-de-hermanos', dia: 'sabado-pasion', tipo: 'acto',
			nombre: 'Misa de Admisión de Hermanos', hora: '18:30',
			cofradias: ['santo-sepulcro'],
			lugar: 'Iglesia del convento de las RR.MM. Concepcionistas (Plaza de las Concepciones)',
			notas: 'Misa anticipada del Domingo de Ramos con bendición de túnicas y rito de admisión de los nuevos hermanos.'
		},
		{
			id: 'besapie-redencion', slug: 'besapie-al-santo-cristo-de-la-redencion', dia: 'sabado-pasion', tipo: 'acto',
			nombre: 'Acto del Besapié al Santo Cristo de la Redención', hora: '19:00',
			cofradias: ['redencion'],
			lugar: 'Iglesia del Real Monasterio de las RR.MM. Benedictinas (Carbajalas), Plaza de Santa María del Camino (del Grano)',
			notas: 'Comienza con la oración de vísperas de las RR.MM. Benedictinas y, a continuación, el Besapié al Cristo titular de la Cofradía.'
		},

		/* Domingo de Ramos */
		{
			id: 'palmas-santa-nonia', slug: 'procesion-de-las-palmas-santa-nonia', dia: 'domingo-ramos', tipo: 'procesion',
			nombre: 'Procesión de las Palmas', hora: '08:30',
			cofradias: ['angustias-soledad', 'dulce-nombre-jesus-nazareno'],
			salida: 'Capilla de Santa Nonia (bendición de Ramos)',
			recorrido: ['Capilla de Santa Nonia', 'República Argentina', 'Villa Benavente', 'Plaza Fernando Merino (con vuelta)', 'Lancia'],
			notas: 'A continuación, celebración de la Eucaristía.'
		},
		{
			id: 'palmas-junta-mayor', slug: 'procesion-de-las-palmas-junta-mayor', dia: 'domingo-ramos', tipo: 'procesion',
			nombre: 'Procesión de las Palmas', hora: '10:30',
			organiza: 'Junta Mayor de la Semana Santa de León, por delegación del Cabildo Catedral',
			salida: 'Museo Diocesano y de Semana Santa',
			recorrido: ['Mariano Domínguez Berrueta', 'Plaza Mayor (sin vuelta)', 'Plegaria', 'Plaza de San Martín', 'Zapaterías', 'Plaza de Don Gutierre', 'Fernández Cadórniga', 'Plaza de las Concepciones', 'Rúa', 'Teatro', 'Plaza de San Marcelo (incorporación de la Corporación Municipal en el Antiguo Ayuntamiento)', 'Ancha', 'Plaza de Regla (Catedral)'],
			notas: 'Hacia las 12:15, bendición de las Palmas. El paso regresa al Museo Diocesano y de Semana Santa por Mariano Domínguez Berrueta.'
		},
		{
			id: 'ramos-perdon', slug: 'procesion-de-los-ramos-san-francisco-de-la-vega', dia: 'domingo-ramos', tipo: 'procesion',
			nombre: 'Procesión de los Ramos', hora: '11:00',
			cofradias: ['perdon'],
			salida: 'Iglesia de San Francisco de la Vega (bendición de Ramos y Palmas en el atrio)',
			recorrido: ['Gómez de Salazar', 'Doña Urraca', 'Tizona', 'Sahagún', 'Ramón Calabozo', 'Gómez de Salazar', 'Parroquia de San Francisco de la Vega'],
			notas: 'Finaliza hacia las 12:30.'
		},
		{
			id: 'ramos-divino-obrero', slug: 'procesion-de-los-ramos-jesus-divino-obrero', dia: 'domingo-ramos', tipo: 'procesion',
			nombre: 'Procesión de los Ramos', hora: '11:30',
			cofradias: ['divino-obrero'],
			salida: 'Iglesia de Jesús Divino Obrero (bendición de Ramos y Palmas)',
			recorrido: ['Víctor de los Ríos', 'Batalla de Clavijo', 'San Carlos', 'Daoiz y Velarde', 'Obispo Almarcha', 'José Mª Fernández', 'Batalla de Clavijo', 'Víctor de los Ríos', 'Iglesia de Jesús Divino Obrero'],
			notas: 'A continuación, celebración de la Eucaristía.'
		},
		{
			id: 'ramos-santa-marina', slug: 'procesion-de-los-ramos-santa-marina', dia: 'domingo-ramos', tipo: 'procesion',
			nombre: 'Procesión de los Ramos', hora: '11:30',
			cofradias: ['desenclavo', 'agonia'],
			salida: 'Iglesia de Santa Marina la Real (bendición de Ramos y Palmas)',
			recorrido: ['Serranos', 'Plaza del Desenclavo', 'Plaza Puerta Castillo', 'Plaza de Santo Martino', 'El Sacramento', 'Plaza de San Isidoro', 'Los Descalzos', 'Corral de San Guisán', 'Serranos'],
			notas: 'A continuación, celebración de la Eucaristía.'
		},
		{
			id: 'gran-poder', slug: 'procesion-del-cristo-del-gran-poder', dia: 'domingo-ramos', tipo: 'procesion',
			nombre: 'Procesión del Cristo del Gran Poder', hora: '17:00',
			cofradias: ['gran-poder'],
			salida: 'Patio de MIRESI (antiguas HH. Trinitarias)',
			recorrido: ['San Lorenzo', 'San Pedro', 'Puerta Obispo (Acto de la Entrada Triunfal de Jesús en Jerusalén, ante el Palacio Episcopal)', 'Plaza de Regla', 'Sierra Pambley', 'Ancha', 'Varillas', 'Cardiles', 'Platerías', 'Plegaria', 'Plaza Mayor (sin vuelta)', 'Mariano Domínguez Berrueta', 'Plaza de Regla (sin vuelta)', 'Puerta Obispo', 'San Lorenzo', 'HH. Trinitarias'],
			pasos: [
				{ paso: 'gp-apostoles', nombre: 'Los Apóstoles', acompanamiento: 'Agrupación Musical Real Hermandad de Jesús Divino Obrero' },
				{ paso: 'gp-cristo', nombre: 'Cristo del Gran Poder', acompanamiento: 'Agrupación Musical Cristo del Gran Poder' },
				{ paso: 'gp-expulsion', nombre: 'La Expulsión del Templo' },
				{ paso: 'gp-san-juan', nombre: 'San Juan', acompanamiento: 'Santo Sepulcro Esperanza de Vida' },
				{ paso: 'gp-virgen', nombre: 'Virgen del Gran Poder', acompanamiento: 'Banda de Música Dulce Nombre de Jesús Nazareno' }
			]
		},
		{
			id: 'dainos', slug: 'procesion-del-dainos', dia: 'domingo-ramos', tipo: 'procesion',
			nombre: 'Inmemorial Procesión del Dainos', subtitulo: 'Antaño del Santo Rosario de la Buena Muerte', hora: '19:45',
			organiza: 'Orden Franciscana Seglar (OFS) con la Cofradía del Santísimo Cristo de la Expiración y del Silencio',
			cofradias: ['expiracion-silencio'], participan: ['angustias-soledad'],
			salida: 'Interior de la Iglesia de San Francisco',
			recorrido: ['Corredera', 'Plaza de San Francisco', 'Hospicio', 'Escurial', 'Plaza de Santa María del Camino (del Grano)', 'Cuesta de las Carbajalas', 'Cuesta de los Castañones', 'Santa Cruz', 'Plaza Mayor (sin vuelta)', 'Mariano Domínguez Berrueta', 'Plaza de Regla (rezo a la Virgen)', 'Ancha', 'Plaza de San Marcelo', 'Plaza de Santo Domingo (sin vuelta)', 'Independencia', 'Santa Nonia', 'Capilla de Santa Nonia (encuentro de la Virgen con su Hijo en la Calle de la Amargura, con la Cofradía de Nuestra Señora de las Angustias y Soledad)', 'Avenida Lancia', 'Corredera', 'Iglesia de San Francisco'],
			pasos: [{ paso: 'es-dainos', nombre: 'Jesús Nazareno «Dainos»' }],
			notas: 'A las 18:00, los hermanos de las Cofradías de la Sobarriba se reúnen ante el crucero de la Plaza del Grano; tras rezar una Salve, se dirigen por la Cerca al Convento de San Francisco.'
		},
		{
			id: 'redencion', slug: 'procesion-de-nuestro-senor-jesus-de-la-redencion', dia: 'domingo-ramos', tipo: 'procesion',
			nombre: 'Procesión de Nuestro Señor Jesús de la Redención', hora: '21:00',
			cofradias: ['redencion'],
			salida: 'Museo Diocesano y de Semana Santa',
			recorrido: ['Mariano Domínguez Berrueta', 'Plaza de Regla', 'Ancha', 'Varillas', 'Cardiles', 'Platerías', 'Plegaria', 'Plaza de San Martín', 'Zapaterías', 'Don Gutierre', 'Fernández Cadórniga', 'Plaza de las Concepciones', 'San Francisco', 'Hospicio', 'Escurial', 'Plaza de Santa María del Camino (del Grano)', 'Las Carbajalas', 'La Redención', 'Cuesta de los Castañones', 'Santa Cruz', 'Plaza Mayor (sin vuelta)', 'Mariano Domínguez Berrueta', 'Museo Diocesano y de Semana Santa'],
			pasos: [
				{ paso: 're-misericordia', nombre: 'Nuestro Padre Jesús de la Misericordia', acompanamiento: 'Agrupación Musical Dulce Nombre de Jesús Nazareno', portadores: '92 braceros' },
				{ paso: 're-redencion', nombre: 'Santo Cristo de la Redención', acompanamiento: 'Agrupación Musical Santo Cristo de la Bienaventuranza', portadores: '92 braceros' },
				{ paso: 're-divina-gracia', nombre: 'Nuestra Madre de la Divina Gracia', acompanamiento: 'Agrupación Musical Nuestra Señora de las Angustias y Soledad', portadores: '94 braceros' }
			]
		},

		/* Lunes Santo */
		{
			id: 'pasion', slug: 'procesion-de-la-pasion', dia: 'lunes-santo', tipo: 'procesion',
			nombre: 'Procesión de la Pasión', hora: '20:00',
			cofradias: ['angustias-soledad', 'dulce-nombre-jesus-nazareno', 'minerva-vera-cruz'],
			salida: 'Capilla de Santa Nonia',
			recorrido: ['Jardín de San Francisco', 'San Francisco', 'Plaza de las Concepciones', 'Fernández Cadórniga', 'Plaza de Don Gutierre', 'Zapaterías', 'Plaza de San Martín', 'Plegaria', 'Plaza Mayor (sin vuelta)', 'Mariano Domínguez Berrueta', 'Plaza de Regla', 'Ancha', 'Plaza de San Marcelo', 'Plaza de Santo Domingo (sin vuelta)', 'Independencia', 'Santa Nonia', 'Capilla de Santa Nonia'],
			pasos: [
				{ paso: 'dn-nazareno', nombre: 'Nuestro Padre Jesús Nazareno', acompanamiento: 'Una de sus secciones musicales (turno rotatorio)' },
				{ paso: 'as-virgen-angustias', nombre: 'Virgen de las Angustias', acompanamiento: 'Agrupación Musical Nuestra Señora de las Angustias y Soledad' },
				{ paso: 'mv-piedad', nombre: 'Virgen de la Piedad', acompanamiento: 'Banda de Cornetas y Tambores de la Real Cofradía de Minerva y Vera Cruz' }
			]
		},
		{
			id: 'rosario-pasion', slug: 'procesion-del-rosario-de-pasion', dia: 'lunes-santo', tipo: 'procesion',
			nombre: 'Procesión del Rosario de Pasión', hora: '20:30',
			cofradias: ['santa-marta'],
			salida: 'Iglesia de San Marcelo',
			recorrido: ['Plaza de San Marcelo', 'Ruiz de Salazar', 'Piloto Regueral', 'Cid', 'Plaza de San Isidoro', 'Descalzos', 'Corral de San Guisán', 'Serranos', 'Pelayo', 'Pablo Flórez', 'Plaza de Nuestra Señora de Regla', 'Ancha', 'Plaza de San Marcelo', 'Iglesia de San Marcelo'],
			pasos: [
				{ nombre: 'La Oración en el Huerto' }, { nombre: 'La Flagelación' }, { nombre: 'La Coronación' },
				{ nombre: 'Jesús con la Cruz a Cuestas' }, { nombre: 'La Crucifixión' }, { nombre: 'La Piedad' }
			]
		},
		{
			id: 'llagas', slug: 'adoracion-procesional-de-las-llagas-de-cristo', dia: 'lunes-santo', tipo: 'procesion',
			nombre: 'Solemne Adoración Procesional de las Llagas de Cristo', hora: '22:00',
			cofradias: ['santo-sepulcro'],
			salida: 'Convento de las RR.MM. Concepcionistas',
			recorrido: ['Plaza de las Concepciones', 'Fernández Cadórniga (rezo de la primera llaga)', 'Plaza de Don Gutierre', 'Zapaterías', 'Plaza de San Martín (rezo de la segunda llaga)', 'Juan de Arfe', 'La Redención', 'Cuesta de las Carbajalas (rezo de la tercera llaga, ante el Monasterio de las RR.MM. Benedictinas)', 'Escurial', 'Herreros (rezo de la cuarta llaga, ante la parroquia de Nuestra Señora del Mercado)', 'Trastámara', 'San Francisco', 'Plaza de las Concepciones (rezo de la quinta llaga)', 'Convento de las RR.MM. Concepcionistas'],
			pasos: [{ paso: 'ss-santo-sepulcro', nombre: 'Santo Sepulcro' }]
		},

		/* Martes Santo */
		{
			id: 'perdon', slug: 'procesion-del-perdon', dia: 'martes-santo', tipo: 'procesion',
			nombre: 'Procesión del Perdón', hora: '19:00',
			cofradias: ['perdon'],
			salida: 'Patio del Convento de Santa Cruz (HH. Clarisas)',
			recorrido: ['Cardenal Landázuri', 'Plaza de Nuestra Señora de Regla (Acto del Perdón)', 'Mariano Domínguez Berrueta', 'Plaza Mayor', 'Plegaria (intervención del Grupo Andadura y ofrenda al Santo Cristo de la Capilla de Fuera de San Martín)', 'Platerías', 'Cardiles', 'Varillas', 'Ancha', 'Plaza de San Marcelo', 'Plaza de Santo Domingo (sin vuelta)', 'Ordoño II', 'Plaza de Guzmán (sin vuelta)', 'Avenida de Palencia (la procesión se divide en dos)', 'Paso del Santo Cristo del Perdón: Astorga, Paso de los Quebrantos, Gómez Salazar', 'Resto de la procesión: Prolongación Avenida de Palencia, Rotonda Cofradía Santo Cristo del Perdón (sin vuelta), Gómez de Salazar', 'Iglesia parroquial de San Francisco de la Vega'],
			notas: 'En el Locus Appellationis, ante el pórtico de la Catedral y con el Orfeón Leonés, se celebra el Acto del Perdón: el Abad solicita el perdón para un penado y, si se obtiene el indulto, la persona se incorpora a la procesión. En San Francisco de la Vega la Madre de la Paz recibe al indultado y al Cristo del Perdón, y los hermanos rezan un responso en silencio.'
		},
		{
			id: 'calvario-cantado', slug: 'via-crucis-leones-cantado', dia: 'martes-santo', tipo: 'acto',
			nombre: 'Tradicional Calvario o Vía Crucis Leonés Cantado', hora: null,
			cofradias: ['expiracion-silencio'],
			lugar: 'Iglesia conventual de San Francisco'
		},
		{
			id: 'dolor-nuestra-madre', slug: 'procesion-dolor-de-nuestra-madre', dia: 'martes-santo', tipo: 'procesion',
			nombre: 'Procesión Dolor de Nuestra Madre', hora: '20:00',
			cofradias: ['angustias-soledad'],
			salida: 'Capilla de Santa Nonia',
			recorrido: ['Santa Nonia', 'Arquitecto Torbado', 'Plaza de las Cortes Leonesas', 'Fuero', 'Burgo Nuevo', 'Independencia', 'Legio VII', 'San Marcelo', 'Teatro', 'Rúa', 'Plaza de las Concepciones', 'San Francisco', 'Jardín de San Francisco', 'Capilla de Santa Nonia'],
			pasos: [
				{ paso: 'as-san-juan', nombre: 'San Juan' },
				{ paso: 'as-lagrimas', nombre: 'Nuestra Señora de las Lágrimas' },
				{ paso: 'as-virgen-angustias', nombre: 'Virgen de las Angustias' },
				{ paso: 'as-virgen-soledad', nombre: 'Virgen de la Soledad' }
			]
		},

		/* Miércoles Santo
		   Del Miércoles Santo en adelante: horarios, salidas e itinerarios del documento «CAJIDE». */
		{
			id: 'camino-calvario', slug: 'procesion-jesus-camino-del-calvario', dia: 'miercoles-santo', tipo: 'procesion',
			nombre: 'Procesión Jesús Camino del Calvario', hora: '20:00',
			cofradias: ['agonia'], salida: 'Iglesia de Santa Marina la Real',
			recorrido: ['Serranos', 'Plaza Torres de Omaña', 'Sierra Pambley', 'Catedral', 'Calle Ancha', 'Ruiz de Salazar', 'Plaza de San Isidoro', 'Descalzos', 'Corral de San Guisán', 'Serranos'],
			pasos: [{ paso: 'ag-via-crucis', nombre: 'Jesús del Vía Crucis' }]
		},
		{
			id: 'amargura', slug: 'procesion-virgen-de-la-amargura', dia: 'miercoles-santo', tipo: 'procesion',
			nombre: 'Procesión de la Virgen de la Amargura', hora: '20:30',
			cofradias: ['minerva-vera-cruz'], salida: 'Convento de las RR.MM. Benedictinas (Carbajalas)',
			recorrido: ['Plaza del Grano', 'Fernández Cadórniga', 'Plaza de San Martín', 'Plaza Mayor', 'Catedral', 'Calle Ancha', 'Plaza de San Marcelo', 'Teatro', 'Rúa', 'Plaza de las Concepciones', 'Fernández Cadórniga', 'Plaza del Grano'],
			pasos: [{ paso: 'mv-amargura', nombre: 'Virgen de la Amargura' }]
		},
		{
			id: 'silencio', slug: 'procesion-del-silencio', dia: 'miercoles-santo', tipo: 'procesion',
			nombre: 'Procesión del Silencio', hora: '20:30',
			cofradias: ['expiracion-silencio'], salida: 'Iglesia de San Francisco de Asís',
			recorrido: ['Corredera', 'Avenida Independencia', 'Plaza de Santo Domingo', 'Gran Vía de San Marcos', 'Plaza de la Inmaculada', 'Alférez Provisional', 'San Agustín', 'Alfonso V', 'Avenida Ordoño II', 'Avenida Independencia', 'Plaza de San Marcelo', 'Rúa', 'Corredera', 'Iglesia de San Francisco de Asís']
		},
		{
			id: 'via-crucis-perdon', slug: 'solemne-via-crucis-popular', dia: 'miercoles-santo', tipo: 'procesion',
			nombre: 'Solemne Vía Crucis Popular', hora: null,
			cofradias: ['perdon']
		},
		{
			id: 'ronda-lirico-pasional', slug: 'ronda-lirico-pasional', dia: 'miercoles-santo', tipo: 'acto',
			nombre: 'Ronda Lírico-Pasional «Luis Pastrana Giménez»', hora: '23:00',
			cofradias: ['desenclavo'], lugar: 'Iglesia de Santa Marina la Real'
		},
		{
			id: 'via-crucis-siete-palabras', slug: 'solemne-via-crucis-procesional-siete-palabras', dia: 'miercoles-santo', tipo: 'procesion',
			nombre: 'Solemne Vía Crucis Procesional', hora: '00:00',
			cofradias: ['siete-palabras'], salida: 'Iglesia de San Marcelo',
			recorrido: ['Legión VII', 'Avenida Independencia', 'Plaza de San Francisco', 'Las Cercas', 'Puerta Moneda', 'Herreros', 'Plaza del Grano', 'Juan II', 'Plaza de las Concepciones', 'Rúa', 'Plaza de San Marcelo', 'Iglesia de San Marcelo'],
			notas: 'Sale a las 00:00, en la medianoche del Miércoles al Jueves Santo.',
			pasos: [{ paso: 'sp-septima', nombre: 'Santísimo Cristo de la Agonía' }]
		},

		/* Jueves Santo */
		{
			id: 'bienaventuranzas', slug: 'procesion-de-las-bienaventuranzas', dia: 'jueves-santo', tipo: 'procesion',
			nombre: 'Procesión de las Bienaventuranzas', hora: '08:45',
			cofradias: ['bienaventuranza'], salida: 'Iglesia de San Claudio',
			recorrido: ['Covadonga', 'Jardín de San Francisco', 'Hospicio', 'Plaza del Grano', 'Santa Cruz', 'Plaza Mayor', 'Catedral (Acto de las Bienaventuranzas, hacia las 11:30)', 'Sierra Pambley', 'Calle Ancha', 'Varillas', 'Plaza de San Martín', 'Fernández Cadórniga', 'Plaza de las Concepciones', 'Jardín de San Francisco', 'Covadonga', 'Iglesia de San Claudio'],
			notas: 'Al llegar a la Catedral se lee el Sermón de las Bienaventuranzas.'
		},
		{
			id: 'pregon-caballo', slug: 'pregon-a-caballo', dia: 'jueves-santo', tipo: 'acto',
			nombre: 'Pregón a Caballo', hora: '12:30',
			cofradias: ['siete-palabras'], salida: 'Plaza de San Marcelo',
			recorrido: ['Legión VII', 'Avenida Independencia', 'Plaza de Santo Domingo', 'Calle Ancha', 'Varillas', 'Plaza Mayor', 'Catedral', 'Sierra Pambley', 'Cervantes', 'Plaza de Torres de Omaña', 'Plaza de San Isidoro', 'Cid', 'Ruiz de Salazar', 'Plaza de San Marcelo']
		},
		{
			id: 'despedida', slug: 'procesion-de-la-despedida', dia: 'jueves-santo', tipo: 'procesion',
			nombre: 'Procesión de la Despedida', hora: '17:00',
			cofradias: ['gran-poder'], salida: 'Patio de las Hermanas Trinitarias',
			recorrido: ['San Lorenzo', 'Plaza Puerta Obispo', 'Calle Ancha', 'Cid', 'Plaza de San Isidoro (Acto de la Despedida)', 'Sacramento', 'Plaza de Santo Martino', 'Plaza Puerta Castillo', 'Cubos', 'Pontón', 'Patio de las Hermanas Trinitarias']
		},
		{
			id: 'maria-pie-cruz', slug: 'procesion-maria-al-pie-de-la-cruz', dia: 'jueves-santo', tipo: 'procesion',
			nombre: 'Procesión María al pie de la Cruz, Camino de la Esperanza', hora: '19:00',
			cofradias: ['maria-dulce-nombre'], salida: 'Plaza de los Donantes de Sangre',
			recorrido: ['Corredera', 'Plaza de las Concepciones', 'Fernández Cadórniga', 'Plaza de San Martín', 'Plaza Mayor', 'Catedral', 'Calle Ancha', 'Plaza de San Marcelo', 'Rúa', 'Plaza de las Concepciones', 'Corredera', 'Plaza de los Donantes de Sangre']
		},
		{
			id: 'sagrada-cena', slug: 'procesion-de-la-sagrada-cena', dia: 'jueves-santo', tipo: 'procesion',
			nombre: 'Procesión de la Sagrada Cena', hora: '20:00',
			cofradias: ['santa-marta'], salida: 'Plaza de la Catedral',
			recorrido: ['Calle Ancha', 'Plaza de San Marcelo', 'Plaza de Santo Domingo', 'Avenida Padre Isla', 'Plaza de la Inmaculada', 'Gran Vía de San Marcos', 'Plaza de Santo Domingo', 'Plaza de San Marcelo', 'Calle Ancha', 'Plaza de la Catedral'],
			pasos: [{ paso: 'sm-sagrada-cena', nombre: 'La Sagrada Cena' }]
		},
		{
			id: 'tinieblas', slug: 'procesion-de-las-tinieblas', dia: 'jueves-santo', tipo: 'procesion',
			nombre: 'Procesión de las Tinieblas y Santo Cristo de las Injurias', hora: '20:45',
			cofradias: ['desenclavo'], salida: 'Patio del Colegio Leonés',
			recorrido: ['Serranos', 'Plaza de Torres de Omaña', 'Fernando García Regueral', 'Plaza de San Isidoro', 'Plaza de Santo Martino', 'Plaza Puerta Castillo', 'Santa Marina', 'Convento', 'Cardenal Landázuri', 'Serranos', 'Patio del Colegio Leonés'],
			pasos: [{ paso: 'de-injurias', nombre: 'Santo Cristo de las Injurias' }]
		},
		{
			id: 'ronda', slug: 'tradicional-ronda', dia: 'jueves-santo', tipo: 'acto',
			nombre: 'Tradicional Ronda', hora: '24:00',
			cofradias: ['dulce-nombre-jesus-nazareno'],
			salida: 'Casa Consistorial (Antiguo Ayuntamiento), Plaza de San Marcelo',
			notas: 'Declarada de Interés Turístico Nacional.'
		},

		/* Viernes Santo */
		{
			id: 'pasos', slug: 'procesion-de-los-pasos', dia: 'viernes-santo', tipo: 'procesion',
			nombre: 'Procesión de los Pasos', hora: '07:15',
			cofradias: ['dulce-nombre-jesus-nazareno'], salida: 'Iglesia de Santa Nonia',
			recorrido: ['Jardín de San Francisco', 'Hospicio', 'Plaza del Grano', 'Santa Cruz', 'Plaza Mayor (Acto del Encuentro, hacia las 10:30)', 'Catedral', 'Cardenal Landázuri', 'Plaza del Vizconde', 'Serranos', 'Plaza Puerta Castillo', 'Plaza de Santo Martino (descanso de todos los pasos)', 'Sacramento', 'Plaza de San Isidoro', 'Cid', 'Calle Ancha', 'Plaza de Santo Domingo', 'Avenida Independencia', 'Legión VII', 'Plaza de San Marcelo', 'Rúa', 'Plaza de las Concepciones', 'Jardín de San Francisco', 'Iglesia de Santa Nonia'],
			notas: 'Declarada de Interés Turístico Nacional.'
		},
		{
			id: 'oficios-desenclavo', slug: 'oficios-de-la-pasion-desenclavo', dia: 'viernes-santo', tipo: 'acto',
			nombre: 'Oficios de la Pasión: Adoración de la Cruz y Desvelado del Santo Cristo del Desenclavo', hora: null,
			cofradias: ['desenclavo']
		},
		{
			id: 'siete-palabras', slug: 'procesion-de-las-siete-palabras', dia: 'viernes-santo', tipo: 'procesion',
			nombre: 'Sermón y Procesión de las Siete Palabras', hora: '18:00',
			cofradias: ['siete-palabras'], salida: 'Iglesia de San Marcelo',
			recorrido: ['Legión VII', 'Avenida Independencia', 'Plaza de Santo Domingo', 'Ruiz de Salazar', 'Lope de Vega', 'Alfonso V', 'Gil y Carrasco', 'Burgo Nuevo', 'Avenida Independencia', 'Legión VII', 'Iglesia de San Marcelo']
		},
		{
			// 2027 es año impar: se muestra la procesión de Minerva y Vera Cruz. La del año par se conserva en "variantes".
			id: 'santo-entierro', slug: 'procesion-del-santo-entierro', dia: 'viernes-santo', tipo: 'procesion',
			nombre: 'Solemne y Oficial Procesión del Santo Entierro', hora: '19:00',
			cofradias: ['minerva-vera-cruz'], salida: 'Convento de las RR.MM. Benedictinas',
			recorrido: ['Fernández Cadórniga', 'Plaza de San Martín', 'Plaza Mayor', 'Catedral', 'Calle Ancha', 'Ruiz de Salazar – Ramón y Cajal', 'Plaza de Santo Domingo', 'Avenida Independencia', 'Rúa', 'Plaza de las Concepciones', 'Fernández Cadórniga', 'Convento de las RR.MM. Benedictinas'],
			alterna: { pares: 'angustias-soledad', impares: 'minerva-vera-cruz' },
			variantes: {
				pares: {
					cofradia: 'angustias-soledad', hora: '18:00', salida: 'Iglesia de Santa Nonia',
					recorrido: ['Cofradía del Dulce Nombre de Jesús Nazareno', 'Jardín de San Francisco', 'Hospicio', 'Plaza del Grano', 'Santa Cruz', 'Plaza Mayor (Sermón de la Soledad)', 'Catedral', 'Cardenal Landázuri', 'Plaza del Vizconde', 'Serranos', 'Plaza Puerta Castillo', 'Plaza de Santo Martino (descanso de todos los pasos)', 'Sacramento', 'Plaza de San Isidoro', 'Cid', 'Calle Ancha', 'Plaza de Santo Domingo', 'Avenida Independencia', 'Legión VII', 'Plaza de San Marcelo', 'Teatro', 'Rúa', 'Plaza de las Concepciones', 'Jardín de San Francisco', 'Iglesia de Santa Nonia']
				}
			},
			notas: 'La organizan en años alternos la Cofradía de las Angustias y Soledad (años pares) y la Real Cofradía de Minerva y Vera Cruz (años impares). En 2027 le corresponde a Minerva y Vera Cruz.'
		},

		/* Sábado Santo */
		{
			id: 'desenclavo', slug: 'procesion-del-santo-cristo-del-desenclavo', dia: 'sabado-santo', tipo: 'procesion',
			nombre: 'Procesión del Santo Cristo del Desenclavo', hora: '16:30',
			cofradias: ['desenclavo'], salida: 'Patio del Colegio Leonés',
			recorrido: ['Serranos', 'Convento', 'Cardenal Landázuri', 'Catedral', 'Calle Ancha', 'Cid', 'Plaza de San Isidoro (Acto del Desenclavo)', 'Sacramento', 'Plaza de Santo Martino', 'Plaza Puerta Castillo', 'Serranos', 'Patio del Colegio Leonés']
		},
		{
			id: 'soledad', slug: 'procesion-de-la-soledad', dia: 'sabado-santo', tipo: 'procesion',
			nombre: 'Procesión de la Soledad', hora: '19:00',
			cofradias: ['divino-obrero'], salida: 'Iglesia de Jesús Divino Obrero',
			recorrido: ['Víctor de los Ríos', 'Avenida José María Fernández', 'San Pedro', 'Catedral – Sierra Pambley', 'Calle Ancha', 'Varillas', 'Platerías', 'Plaza Mayor', 'Santa Cruz', 'Daoiz y Velarde', 'San Pablo', 'Víctor de los Ríos', 'Iglesia de Jesús Divino Obrero']
		},
		{
			// El documento la titula «Procesión de las Llagas de Cristo»; por cofradía, día, hora y salida corresponde a Camino de la Luz.
			id: 'camino-luz', slug: 'procesion-camino-de-la-luz', dia: 'sabado-santo', tipo: 'procesion',
			nombre: 'Procesión Camino de la Luz', hora: '19:15',
			cofradias: ['santo-sepulcro'], salida: 'Catedral de León',
			recorrido: ['Mariano Domínguez Berrueta', 'Plaza Mayor', 'Plaza de San Martín', 'Fernández Cadórniga', 'Plaza de las Concepciones', 'Rúa', 'Plaza de San Marcelo', 'Calle Ancha', 'Catedral de León']
		},
		{
			id: 'via-lucis', slug: 'piadoso-via-lucis', dia: 'sabado-santo', tipo: 'procesion',
			nombre: 'Piadoso Vía Lucis', hora: '23:00',
			cofradias: ['amparo-leoneses'], salida: 'Basílica de San Isidoro'
		},

		/* Domingo de Resurrección */
		{
			id: 'encuentro', slug: 'procesion-del-encuentro', dia: 'domingo-resurreccion', tipo: 'procesion',
			nombre: 'Procesión de El Encuentro', hora: '08:45',
			cofradias: ['divino-obrero'], salida: 'Iglesia de Jesús Divino Obrero',
			recorrido: ['Víctor de los Ríos', 'Obispo Almarcha', 'Daoiz y Velarde', 'Santa Cruz', 'Plaza Mayor', 'Platerías', 'Varillas', 'Esquina Calle Ancha', 'Sierra Pambley', 'Catedral (Acto de El Encuentro y desayuno)', 'Calle Ancha', 'Plaza Torres de Omaña', 'Plaza de San Isidoro', 'Cid', 'Calle Ancha', 'Platerías', 'Plaza Mayor', 'Santa Cruz', 'Daoiz y Velarde', 'Víctor de los Ríos'],
			// Recorrido propio del paso de las Tres Marías hasta la Catedral
			recorridosExtra: [
				{ nombre: 'Paso de las Tres Marías', recorrido: ['Víctor de los Ríos', 'Obispo Almarcha', 'Avenida José María Fernández', 'San Pedro', 'Plaza de Puerta Obispo', 'Catedral'] }
			],
			notas: 'Una vez llegado a la Catedral, tras el acto y el desayuno, el cortejo sigue con normalidad.',
			pasos: [{ paso: 'do-resurreccion', nombre: 'La Resurrección' }]
		}
	],

	/* ---------- Bandas musicales ----------
	   Solo nombres verificados (programa y fichas oficiales) o facilitados expresamente. descripcion: pendiente.
	   repertorio: lista propia de cada banda, p. ej. [{ titulo: '...', autor: '...' }]. Vacía hasta tener datos reales.
	   imagenes (opcional): [{ src, src800, ancho, alto, alt }] — src es el original, src800 la versión de 800 px para móvil.
	   cofradia/vinculada: relación interna; no se muestra en la página de bandas.
	   tipo: 'agrupacion-musical' | 'cornetas-tambores' | 'banda-musica' */
	tiposBanda: [
		{ id: 'agrupacion-musical', nombre: 'Agrupaciones Musicales', ancla: 'agrupaciones-musicales' },
		{ id: 'cornetas-tambores', nombre: 'Bandas de Cornetas y Tambores', ancla: 'cornetas-y-tambores' },
		{ id: 'banda-musica', nombre: 'Bandas de Música', ancla: 'bandas-de-musica' }
	],
	bandas: [
		{
			id: 'am-angustias', nombre: 'Agrupación Musical Nuestra Señora de las Angustias y Soledad', tipo: 'agrupacion-musical', cofradia: 'angustias-soledad', descripcion: null,
			// Fuente: documento de repertorio facilitado por la agrupación (las piezas repetidas al final del documento se incluyen una sola vez).
			repertorio: [
				{ titulo: '¡A la Gloria!', autor: 'Miguel Ángel Font Morgado' },
				{ titulo: 'A Jesús por María', autor: 'Francisco Javier Cebrero Arias' },
				{ titulo: 'Al compás de la laguna', autor: 'Francisco José Carrasco y Miguel Ángel Font' },
				{ titulo: 'Al Cristo de los faroles', autor: 'Daniel Montorio Fajó y Miguel Ángel Font' },
				{ titulo: 'Al estar contigo', autor: 'Juan Manuel Carmona Suárez' },
				{ titulo: 'Al Rey de los Reyes', autor: 'Francisco Javier Cebrero Arias' },
				{ titulo: 'Bajo la luz de tu mirada', autor: 'Emilio Muñoz Serna' },
				{ titulo: 'Bendita tu eres', autor: 'Emilio Muñoz Serna' },
				{ titulo: 'Caridad del Guadalquivir', autor: 'Francisco Joaquín Pérez Garrido' },
				{ titulo: 'Cautivo en su Soledad', autor: 'Emilio Muñoz Serna y Rafael Vázquez Mateo' },
				{ titulo: 'Consuelo Gitano', autor: 'Antonio Velasco Rodríguez' },
				{ titulo: 'Costalero', autor: 'Ángel Jesús y José María Sánchez Berenguer' },
				{ titulo: 'Cuando me aleje de ti', autor: 'Óscar Javier Ruiz y Miguel Ángel Lanzarote' },
				{ titulo: 'De vuelta al Porvenir', autor: 'Francisco David Álvarez Barroso' },
				{ titulo: 'Discípulo amado', autor: 'Carlos López Fernández' },
				{ titulo: 'El fruto de la victoria', autor: 'Juan Manuel Carmona Suárez' },
				{ titulo: 'El Redentor de Nazareth', autor: 'Juan Manuel Carmona Suárez' },
				{ titulo: 'El sentir de mis Angustias', autor: 'Juan Manuel Carmona Suárez' },
				{ titulo: 'En tu buen fin', autor: 'Juan Manuel Carmona Suárez' },
				{ titulo: 'En tu victoria, nuestra fe', autor: 'Juan Manuel Carmona Suárez' },
				{ titulo: 'En tus brazos, Madre mía', autor: 'Juan Manuel Carmona y Maiquel Ortega' },
				{ titulo: 'Entre rosas y espinas', autor: 'Ángel Juan Esquivel Alarma' },
				{ titulo: 'Eterna', autor: 'Carlos López Fernández' },
				{ titulo: 'Gitano de Sevilla', autor: 'Francisco Joaquín Pérez Garrido' },
				{ titulo: 'Judería Sevillana', autor: 'Alejandro Blanco Hernández' },
				{ titulo: 'La Cruz del Salvador', autor: 'Carlos López Fernández' },
				{ titulo: 'La Esperanza de María', autor: 'Alejandro Blanco Hernández' },
				{ titulo: 'La oración en el huerto', autor: 'Agripino Lozano Perea' },
				{ titulo: 'La saeta', autor: 'Joan Manuel Serrat y Antonio Velasco' },
				{ titulo: 'Padre', autor: 'Emilio Muñoz Serna' },
				{ titulo: 'Padre nuestro', autor: 'Pascual González Moreno' },
				{ titulo: 'Pange lingua', autor: 'Juan Carlos Calderón López' },
				{ titulo: 'Perdona a tu pueblo', autor: 'Bernardo Velado y Antonio Alcalde' },
				{ titulo: 'Redención', autor: 'Emilio Muñoz Serna' },
				{ titulo: 'Redención por Sevilla', autor: 'Enrique Iuque, Antonio y Emilio Muñoz Serna' },
				{ titulo: 'Rocío del cielo', autor: 'Antonio y Emilio Muñoz Serna' },
				{ titulo: 'Rosario', autor: 'Hermanos Jiménez Cabezas' },
				{ titulo: 'Salve a la Guardia Civil', autor: 'Juan José Martín Martín' },
				{ titulo: 'Santa María de la Esperanza', autor: 'Juan Antonio Espinosa Zaragoza' },
				{ titulo: 'Señor de San Esteban', autor: 'Emilio Muñoz Serna' },
				{ titulo: 'Señor de San Román', autor: 'Antonio y Emilio Muñoz Serna' },
				{ titulo: 'Señor de una Devoción', autor: 'Francisco Ortiz Morón' },
				{ titulo: 'Señor del Salvador', autor: 'Emilio Muñoz Serna' },
				{ titulo: 'Señora de Sevilla, Macarena', autor: 'Antonio y Emilio Muñoz Serna' },
				{ titulo: 'Seres de luz', autor: 'Anónimo' },
				{ titulo: 'Sones para una Madre', autor: 'Juan Manuel Carmona Suárez' },
				{ titulo: 'Tu Consolación, mi Esperanza', autor: 'Juan Manuel Carmona Suárez' },
				{ titulo: 'Un solo caminar', autor: 'Francisco Javier Cebrero Árias' },
				{ titulo: 'Vida y Esperanza', autor: 'Carlos López Fernández' },
				{ titulo: 'Virgen de la Hiniesta', autor: 'Antonio Gallego Diánez' },
				{ titulo: 'Virgen de las Angustias', autor: 'Manuel Rodríguez Ruiz' },
				{ titulo: 'Y al tercer día...', autor: 'Alejandro Blanco Hernández' },
				{ titulo: 'Yacente en tus brazos', autor: 'Javier Pérez Nograro' },
				{ titulo: 'Ganando Barlovento', autor: 'Ramón Sáez de Adana' },
				{ titulo: 'Himno a León', autor: 'Odón Alonso González' },
				{ titulo: 'Himno Nacional de España', autor: 'Manuel Espinosa de los Monteros' },
				{ titulo: 'Toques de oración', autor: 'Anónimo' }
			],
			imagenes: [
				{ src: 'img/bandas/angustias-plaza.jpg', src800: 'img/bandas/angustias-plaza-800.jpg', ancho: 1600, alto: 900, alt: 'La agrupación musical, con túnica negra y cordón amarillo, tocando junto a su estandarte en la Plaza Mayor de León rodeada de público' },
				{ src: 'img/bandas/angustias-cordones.jpg', src800: 'img/bandas/angustias-cordones-800.jpg', ancho: 1600, alto: 1120, alt: 'Hilera de músicos con túnica negra y cordón amarillo avanzando tras un paso' },
				{ src: 'img/bandas/angustias-3.jpg', src800: 'img/bandas/angustias-3-800.jpg', ancho: 1600, alto: 1066, alt: 'Estandarte de la cofradía y músicos encapuchados junto a un paso ante la fachada de una iglesia' }
			]
		},
		{
			id: 'am-dulce-nombre', nombre: 'Agrupación Musical del Dulce Nombre de Jesús Nazareno', tipo: 'agrupacion-musical', cofradia: 'dulce-nombre-jesus-nazareno', descripcion: null,
			// Fuente: documento de repertorio facilitado por la agrupación (en el original, en mayúsculas; se respeta la grafía de cada nombre).
			repertorio: [
				{ titulo: 'Acógelo en tu Reino', autor: 'José Daniel Vela Perez' },
				{ titulo: 'Al que yo besé', autor: 'Francisco Javier Torres Simon' },
				{ titulo: 'Al Rey de los Reyes', autor: 'Javier Cebrero Arias' },
				{ titulo: 'Aliviamos tu dolor', autor: 'Padro Manuel Pacheco Palomo' },
				{ titulo: 'Alma de Dios', autor: 'Jose Serrano / Manuel Rodriguez Ruiz' },
				{ titulo: 'Ánima Christi', autor: 'Marco Frisina' },
				{ titulo: 'Atado a la columna', autor: 'Nicolás Miguel Barbero Rivas' },
				{ titulo: 'Caridad del Guadalquivir', autor: 'Francisco Joaquien Perez Garrido' },
				{ titulo: 'Cerca de ti, Señor', autor: 'Lowell Mason' },
				{ titulo: 'Cinco llagas', autor: 'Antonio Velasco Rodriguez' },
				{ titulo: 'Cirineo para ti, Señor', autor: 'Jose Manuel Mena Hervés' },
				{ titulo: 'Consuelo Gitano', autor: 'Antonio Velasco Rodriguez' },
				{ titulo: 'Costaleros gitanos', autor: 'Pedro Manuel Mena Rodriguez' },
				{ titulo: 'Cristo de la Flagelación', autor: 'Victor Ramirez Perez' },
				{ titulo: 'Cristo de la Salud y Buen Viaje', autor: 'Antonio Amodeo Ojeda' },
				{ titulo: 'Cristo de las Misericordias', autor: null },
				{ titulo: 'Cristo de los Favores', autor: 'Antonio Velasco Rodriguez' },
				{ titulo: 'De vuelta al Porvenir', autor: 'Francisco David Alvarez Barroso' },
				{ titulo: 'Ecce Homo', autor: 'Nicolás Turienzo Robles y Raúl Vega Saco' },
				{ titulo: 'El camino del Nazareno', autor: 'José Manuel Sánchez Crespiillo' },
				{ titulo: 'Entrando en Jerusalén', autor: 'José Manuel Mena Hervás' },
				{ titulo: 'Esperamos en el cielo', autor: 'José Manuel Mena Hervá' },
				{ titulo: 'Gloria tibi Trinitas', autor: 'José Alberto Mondéjar Toledo' },
				{ titulo: 'Grabado en mi corazón', autor: 'Alfonso López Cortés' },
				{ titulo: 'He aquí el hombre', autor: 'Nicolás Turienzo Robles' },
				{ titulo: 'Himno Nacional', autor: 'Bartolomé Pérez Casas' },
				{ titulo: 'Jesús del Prendimiento', autor: 'José Manuel Mena Hervás' },
				{ titulo: 'Judería Sevillana', autor: 'Alejandro Blanco Hernández' },
				{ titulo: 'La misión', autor: 'Ennio Morricone' },
				{ titulo: 'La pasión del Nazareno', autor: 'José Manuel Mena Hervás' },
				{ titulo: 'La saeta', autor: 'Joan Manuel Serrat' },
				{ titulo: 'La Salve', autor: 'Pablo Herrero / José Martín' },
				{ titulo: 'La traición', autor: 'Alberto Espadas García' },
				{ titulo: 'Lágrimas de pasión', autor: 'Juan Luis López Hernández' },
				{ titulo: 'Luz de Jerusalén', autor: 'José Manuel Mena Hervás' },
				{ titulo: 'Nuestro Padre Jesús de la Victoria', autor: 'José Manuel Mena Hervás' },
				{ titulo: 'Oh bendita estrella', autor: 'José Manuel Mena Hervás' },
				{ titulo: 'Oh pecador', autor: 'Frederick Van Pallandt' },
				{ titulo: 'Orando al cielo', autor: 'Víctor Ramírez Pérez' },
				{ titulo: 'Pange lingua', autor: 'J. Carlos Calderón López' },
				{ titulo: 'Por los siglos de los siglos', autor: 'Alejandro Blanco Hernández' },
				{ titulo: 'Presentado a Sevilla', autor: 'Antonio José López Escalante' },
				{ titulo: 'Recuérdame', autor: 'Francisco Javier Torres Simón' },
				{ titulo: 'Redención, pasión y amargura', autor: 'José Manuel Mena Hervás' },
				{ titulo: 'Reina de reyes', autor: 'Alejandro Blanco Hernández' },
				{ titulo: 'Reina del amor', autor: 'Víctor Ramírez Pérez' },
				{ titulo: 'Reo de muerte', autor: 'Nicolás Miguel Barbero Rivas' },
				{ titulo: 'Rey Legio', autor: 'Francisco Javier Torres Simón' },
				{ titulo: 'Romance en el Porvenir', autor: 'Alejandro Blanco Hernández' },
				{ titulo: 'Ruega por nosotros', autor: 'Francisco Vílchez Ballesteros' },
				{ titulo: 'Sanctus', autor: 'Tomás Aragüés Bernards' },
				{ titulo: 'Sangre en tus clavos', autor: 'Nicolás Miguel Barbero Rivas' },
				{ titulo: 'Sempiterno', autor: 'Alejandro Blanco Hernández' },
				{ titulo: 'Señor danos la paz', autor: 'Ildefonso Luis Poley Morales' },
				{ titulo: 'Señor de San Román', autor: 'Emilio Muñoz Serna' },
				{ titulo: 'Seres de luz', autor: 'Autor anónimo' },
				{ titulo: 'Tras tus pasos, Jesús', autor: 'Ángel Pedro García Cabero' },
				{ titulo: 'Triunfo de tu Santa Cruz', autor: 'Nicolás Miguel Barbero Rivas' },
				{ titulo: 'Virgen de la Hinesta', autor: 'Antonio Gallego Díaz' },
				{ titulo: 'Virgen de la Paz', autor: 'Vicente Chazeta Doblas' },
				{ titulo: 'Volver', autor: 'Alejandro Blanco Hernández' },
				{ titulo: 'Y al tercer día', autor: 'Alejandro Blanco Hernández' }
			],
			imagenes: [
				{ src: 'img/bandas/nazareno-2.jpg', src800: 'img/bandas/nazareno-2-800.jpg', ancho: 1600, alto: 900, alt: 'La agrupación musical en la Plaza Mayor de León, rodeada de público' },
				{ src: 'img/bandas/nazareno-1.jpg', src800: 'img/bandas/nazareno-1-800.jpg', ancho: 1600, alto: 1066, alt: 'Músicos con túnica negra y cordón morado junto al estandarte de la agrupación bajo los soportales' },
				{ src: 'img/bandas/nazareno-3.jpg', src800: 'img/bandas/nazareno-3-800.jpg', ancho: 1600, alto: 1066, alt: 'Músicos de espaldas ante el paso de la Verónica en una mañana soleada' }
			]
		},
		{
			id: 'am-divino-obrero', nombre: 'Agrupación Musical Real Hermandad de Jesús Divino Obrero', tipo: 'agrupacion-musical', cofradia: 'divino-obrero', descripcion: null, repertorio: [],
			imagenes: [
				{ src: 'img/bandas/divino-obrero-1.jpg', src800: 'img/bandas/divino-obrero-1-800.jpg', ancho: 1600, alto: 1066, alt: 'Músico con capa morada y túnica blanca tendiendo la mano a un niño durante el desfile' },
				{ src: 'img/bandas/divino-obrero-2.jpg', src800: 'img/bandas/divino-obrero-2-800.jpg', ancho: 1600, alto: 1066, alt: 'La banda, con capa morada y túnica blanca, desfilando tras su estandarte ante numeroso público' },
				{ src: 'img/bandas/divino-obrero-3.jpg', src800: 'img/bandas/divino-obrero-3-800.jpg', ancho: 1600, alto: 1066, alt: 'Músicos de espaldas con capa y capillo morados avanzando por una calle del centro de León' }
			]
		},
		{
			id: 'am-bienaventuranza', nombre: 'Agrupación Musical Santo Cristo de la Bienaventuranza', tipo: 'agrupacion-musical', cofradia: 'bienaventuranza', descripcion: null, repertorio: [],
			imagenes: [
				{ src: 'img/bandas/bienaventuranza-1.jpg', src800: 'img/bandas/bienaventuranza-1-800.jpg', ancho: 1600, alto: 1066, alt: 'Percusionistas con capillo azul junto al público que presencia el desfile' },
				{ src: 'img/bandas/bienaventuranza-2.jpg', src800: 'img/bandas/bienaventuranza-2-800.jpg', ancho: 1600, alto: 1066, alt: 'La agrupación, con capillo azul, desfilando con sus tubas por delante del paso' },
				{ src: 'img/bandas/bienaventuranza-3.jpg', src800: 'img/bandas/bienaventuranza-3-800.jpg', ancho: 1600, alto: 1066, alt: 'Vista desde lo alto de la agrupación tocando en formación por una calle estrecha del casco antiguo' }
			]
		},
		{ id: 'am-santo-sepulcro', nombre: 'Agrupación Musical Santo Sepulcro – Esperanza de la Vida', tipo: 'agrupacion-musical', cofradia: 'santo-sepulcro', descripcion: null, repertorio: [] },
		{
			id: 'am-gran-poder', nombre: 'Agrupación Musical Cristo del Gran Poder', tipo: 'agrupacion-musical', cofradia: 'gran-poder', descripcion: null, repertorio: [],
			imagenes: [
				{ src: 'img/bandas/gran-poder-1.jpg', src800: 'img/bandas/gran-poder-1-800.jpg', ancho: 1600, alto: 900, alt: 'Músicos encapuchados de negro con su estandarte junto a un paso en una mañana soleada' },
				{ src: 'img/bandas/gran-poder-2.jpg', src800: 'img/bandas/gran-poder-2-800.jpg', ancho: 1600, alto: 1066, alt: 'Estandarte negro bordado en oro entre los músicos encapuchados y el público' },
				{ src: 'img/bandas/gran-poder-3.jpg', src800: 'img/bandas/gran-poder-3-800.jpg', ancho: 1600, alto: 1066, alt: 'Estandarte de la agrupación ante el paso en la Plaza Mayor de León al atardecer' }
			]
		},
		// Antes clasificada como banda de cornetas y tambores (id 'cct-desenclavo'); los enlaces generados usan el id nuevo.
		{ id: 'am-desenclavo', nombre: 'Agrupación Musical Santo Cristo del Desenclavo', tipo: 'agrupacion-musical', cofradia: 'desenclavo', descripcion: null, repertorio: [] },
		{
			id: 'cct-dulce-nombre', nombre: 'Banda de Cornetas y Tambores del Dulce Nombre de Jesús Nazareno', tipo: 'cornetas-tambores', cofradia: 'dulce-nombre-jesus-nazareno', descripcion: null, repertorio: [],
			imagenes: [
				{ src: 'img/bandas/nazareno-cct-1.jpg', src800: 'img/bandas/nazareno-cct-1-800.jpg', ancho: 1600, alto: 1066, alt: 'Músicos encapuchados con cordón morado siguiendo el estandarte morado de la banda' },
				{ src: 'img/bandas/nazareno-cct-2.jpg', src800: 'img/bandas/nazareno-cct-2-800.jpg', ancho: 1600, alto: 1066, alt: 'Estandarte morado de la banda de cornetas y tambores entre los encapuchados, junto a un paso' }
			]
		},
		{ id: 'cct-minerva', nombre: 'Banda de Cornetas y Tambores de la Real Cofradía de Minerva y Vera Cruz', tipo: 'cornetas-tambores', cofradia: 'minerva-vera-cruz', descripcion: null, repertorio: [] },
		{
			id: 'cct-victoria', nombre: 'Banda de Cornetas y Tambores Santísimo Cristo de la Victoria', tipo: 'cornetas-tambores', cofradia: null, vinculada: 'amparo-leoneses', descripcion: null, repertorio: [],
			imagenes: [
				{ src: 'img/bandas/victoria-1.jpg', src800: 'img/bandas/victoria-1-800.jpg', ancho: 1600, alto: 1066, alt: 'Músicos de uniforme con gorra blanca y su guion tras un paso, rodeados de público' },
				{ src: 'img/bandas/victoria-2.jpg', src800: 'img/bandas/victoria-2-800.jpg', ancho: 1600, alto: 1066, alt: 'Cabecera de la banda de uniforme desfilando de noche con su estandarte' },
				{ src: 'img/bandas/victoria-3.jpg', src800: 'img/bandas/victoria-3-800.jpg', ancho: 1600, alto: 1066, alt: 'Estandarte de la banda ante la Casa Botines y el Palacio de los Guzmanes' }
			]
		},
		// Añadidas sin datos: pendiente de completar descripción, repertorio y fotografías.
		{ id: 'cct-soledad', nombre: 'Banda de Cornetas y Tambores de Nuestra Señora de la Soledad', tipo: 'cornetas-tambores', cofradia: null, descripcion: null, repertorio: [] },
		{ id: 'cct-carmen-san-martin', nombre: 'Banda de Cornetas y Tambores de Nuestro Señor del Carmen de San Martín', tipo: 'cornetas-tambores', cofradia: null, descripcion: null, repertorio: [] },
		{ id: 'bm-dulce-nombre', nombre: 'Banda de Música del Dulce Nombre de Jesús Nazareno', tipo: 'banda-musica', cofradia: 'dulce-nombre-jesus-nazareno', descripcion: null, repertorio: [] },
		{ id: 'bm-siete-palabras', nombre: 'Banda de Música Siete Palabras', tipo: 'banda-musica', cofradia: 'siete-palabras', descripcion: null, repertorio: [] },
		{ id: 'bm-reino-de-leon', nombre: 'Banda del Reino de León', tipo: 'banda-musica', cofradia: null, descripcion: null, repertorio: [] },
		// Tipo no confirmado: no se muestra hasta verificarlo.
		{ id: 'sm-perdon', nombre: 'Sección de Música de la Cofradía Santo Cristo del Perdón', tipo: null, cofradia: 'perdon', descripcion: null, repertorio: [] }
	],

	/* ---------- Carteles ----------
	   Vacío hasta tener carteles reales. Formato de cada cartel:
	   { id: 'cartel-2027', titulo: '...', anio: 2027, autor: '...', src: 'img/carteles/....jpg', src800: 'img/carteles/...-800.jpg', ancho: 0, alto: 0, alt: '...' }
	   (autor y src800 opcionales) */
	carteles: []
};
