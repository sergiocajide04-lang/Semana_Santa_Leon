/* Comportamientos del sitio (JS sin dependencias). Los datos vienen de data.js. */
(function () {
	'use strict';

	var DATA = window.SSL_DATA || { cofradias: [], dias: [], procesiones: [], pasos: {}, bandas: [], tiposBanda: [] };
	var SOCIAL = window.SOCIAL_LINKS || {};

	/* ---------- Utilidades ---------- */
	function esc(value) {
		return String(value == null ? '' : value)
			.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
			.replace(/"/g, '&quot;');
	}

	var MESES = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
	function parseFecha(iso) {
		var p = iso.split('-');
		return { anio: +p[0], mes: MESES[+p[1] - 1], dia: +p[2] };
	}
	function fechaLarga(iso) {
		var f = parseFecha(iso);
		return f.dia + ' de ' + f.mes + ' de ' + f.anio;
	}

	function render(name, html) {
		document.querySelectorAll('[data-render="' + name + '"]').forEach(function (el) { el.innerHTML = html; });
	}

	function byId(list, id) {
		for (var i = 0; i < list.length; i++) if (list[i].id === id) return list[i];
		return null;
	}
	function cofradiaUrl(c) { return 'cofradia.html?c=' + encodeURIComponent(c.slug); }

	// Relación PROCESIÓN → página. Mientras no exista su página, enlaza a su entrada del programa.
	function procesionUrl(p) {
		return p.pagina ? 'procesion.html?p=' + encodeURIComponent(p.slug) : 'procesiones.html#proc-' + p.id;
	}

	function procesionesDelDia(diaId) {
		return DATA.procesiones.filter(function (p) { return p.dia === diaId; });
	}

	// Procesiones de una cofradía con su papel en cada una.
	function procesionesDeCofradia(id) {
		var out = [];
		DATA.procesiones.forEach(function (p) {
			var rol = null;
			if (p.alterna && (p.alterna.pares === id || p.alterna.impares === id)) {
				rol = p.alterna.pares === id ? 'Organiza en años pares' : 'Organiza en años impares';
			} else if (p.cofradias && p.cofradias.indexOf(id) > -1) {
				rol = p.cofradias.length > 1 ? 'Organiza junto a otras cofradías' : 'Organiza';
			} else if (p.participan && p.participan.indexOf(id) > -1) {
				rol = 'Participa';
			}
			if (rol) out.push({ procesion: p, rol: rol });
		});
		return out;
	}

	function organizadores(p) {
		if (p.organiza) return esc(p.organiza);
		return (p.cofradias || []).map(function (id) {
			var c = byId(DATA.cofradias, id);
			return c ? '<a href="' + cofradiaUrl(c) + '">' + esc(c.nombre) + '</a>' : '';
		}).join(', ');
	}

	function pasoDetalle(p) {
		var bits = [];
		if (p.acompanamiento) bits.push('Acompañamiento: ' + p.acompanamiento);
		if (p.autor) bits.push(p.autor + (p.anio ? ' (' + p.anio + ')' : ''));
		else if (p.anio) bits.push(p.anio);
		if (p.portadores) bits.push(p.portadores);
		if (p.notas) bits.push(p.notas);
		return bits.length ? '<span>' + esc(bits.join(' · ')) + '</span>' : '';
	}

	/* ---------- Redes sociales (URLs desde SOCIAL_LINKS) ---------- */
	document.querySelectorAll('[data-social]').forEach(function (a) {
		var url = SOCIAL[a.dataset.social];
		if (url) a.href = url;
	});

	/* ==========================================================================
	   Render desde datos (antes de iniciar menú, sliders y animaciones)
	   ========================================================================== */

	/* Menú: submenú de cofradías */
	render('menu-cofradias', DATA.cofradias.map(function (c) {
		return '<li><a href="' + cofradiaUrl(c) + '">' + esc(c.nombreCorto) + '</a></li>';
	}).join(''));

	/* Home: estadísticas calculadas desde los datos (sin duplicar cifras) */
	var anios = DATA.cofradias.map(function (c) { return c.fundacion; });
	var STATS = {
		cofradias: DATA.cofradias.length,
		dias: DATA.dias.length,
		antigua: anios.length ? Math.min.apply(null, anios) : null,
		reciente: anios.length ? Math.max.apply(null, anios) : null
	};
	document.querySelectorAll('[data-stat]').forEach(function (b) {
		var v = STATS[b.dataset.stat];
		if (v != null) b.textContent = v;
	});

	/* Home: tarjetas de cofradías (carrusel) */
	render('home-cofradias', DATA.cofradias.map(function (c) {
		return '<div class="featured swiper-slide">' +
			'<a class="brotherhood-card" href="' + cofradiaUrl(c) + '">' +
				'<img src="' + esc(c.logo) + '" alt="Emblema de la ' + esc(c.nombre) + '" loading="lazy">' +
				'<span class="brotherhood-card-year">' + esc(c.fundacion) + '</span>' +
				'<span class="brotherhood-card-name">' + esc(c.nombre) + '</span>' +
				'<span class="pre">' + esc(c.sede) + '</span>' +
			'</a></div>';
	}).join(''));

	/* Home: escudos */
	render('home-escudos', DATA.cofradias.map(function (c) {
		return '<div class="logo swiper-slide"><a href="' + cofradiaUrl(c) + '">' +
			'<img src="' + esc(c.logo) + '" alt="Emblema de la ' + esc(c.nombre) + '" loading="lazy">' +
			'<p class="pre">' + esc(c.nombre) + '</p></a></div>';
	}).join(''));

	/* Home y procesiones: tira de días */
	function tiraDias(prefix) {
		return DATA.dias.map(function (d) {
			var f = parseFecha(d.fecha);
			return '<li class="day">' +
				'<a href="' + prefix + '#dia-' + esc(d.id) + '">' +
					'<span class="day-num">' + f.dia + '</span>' +
					'<span class="day-month">' + esc(f.mes.slice(0, 3)) + '</span>' +
					'<span class="day-name">' + esc(d.nombre) + '</span>' +
				'</a></li>';
		}).join('');
	}
	render('home-dias', tiraDias('procesiones.html'));
	render('programa-dias', tiraDias(''));

	/* Home: primera procesión de los tres primeros días */
	var destacados = [];
	DATA.dias.forEach(function (d) {
		var lista = procesionesDelDia(d.id).filter(function (p) { return p.tipo === 'procesion' && p.hora; });
		if (destacados.length < 3 && lista.length) destacados.push({ dia: d, procesion: lista[0] });
	});
	render('home-programa', destacados.map(function (item, i) {
		return '<article class="home-news-post">' +
			'<div class="post-wrapper">' +
				'<a href="' + procesionUrl(item.procesion) + '" class="post-link post-wrapper-link">' +
					'<div class="post-info">' +
						'<div class="post-metas"><span class="post-date">' + esc(item.dia.nombre) + ' · ' + esc(fechaLarga(item.dia.fecha)) + '</span></div>' +
						'<h3 class="post-title">' + esc(item.procesion.nombre) + '</h3>' +
						'<span class="post-hour">' + esc(item.procesion.hora) + ' h</span>' +
						'<span class="hover-arrow">&#10095;</span>' +
					'</div>' +
					'<div class="post-image pattern-bg pattern-' + (i % 3 + 1) + '"></div>' +
				'</a>' +
			'</div>' +
		'</article>';
	}).join(''));

	/* Cofradías: rejilla de 16 (cada tarjeta enlaza a su ficha) */
	render('cofradias-grid', DATA.cofradias.map(function (c, i) {
		var delay = (Math.round((i % 4 + 1) / 6 * 100) / 100) + 's';
		return '<li class="item wow fadeIn" data-wow-delay="' + delay + '" id="' + esc(c.id) + '">' +
			'<a class="brotherhood-link" href="' + cofradiaUrl(c) + '">' +
				'<div class="logo-box"><img src="' + esc(c.logo) + '" alt="Emblema de la ' + esc(c.nombre) + '" loading="lazy"></div>' +
				'<h2 class="title">' + esc(c.nombre) + '</h2>' +
				'<p class="pre">Fundada en ' + esc(c.fundacion) + '</p>' +
				'<p class="sede">' + esc(c.sede) + '</p>' +
				'<span class="brotherhood-more">Ver cofradía</span>' +
			'</a>' +
		'</li>';
	}).join(''));

	/* Procesiones: tarjeta por día (enlaza a su día en el programa) */
	render('procesiones-dias', DATA.dias.map(function (d, i) {
		var f = parseFecha(d.fecha);
		var n = procesionesDelDia(d.id).length;
		var sum = n ? n + (n === 1 ? ' acto' : ' procesiones y actos') : 'Programa pendiente';
		return '<li class="archive-item">' +
			'<div class="content-wrapper">' +
				'<a href="#dia-' + esc(d.id) + '" title="' + esc(d.nombre) + '">' +
					'<h2 class="heading wow fadeInUp">' + esc(d.nombre) + '</h2>' +
					'<span class="pre date time wow fadeInDown" data-wow-delay="0.7s">' + f.dia + ' de ' + f.mes +
						' <span class="sum">' + esc(sum) + '</span></span>' +
				'</a>' +
			'</div>' +
			'<div class="image-wrapper pattern-bg pattern-' + (i % 3 + 1) + '"><span class="day-watermark" aria-hidden="true">' + f.dia + '</span></div>' +
		'</li>';
	}).join(''));

	/* Procesiones: programa completo por días */
	function metaRow(label, value) {
		return value ? '<dt>' + label + '</dt><dd>' + value + '</dd>' : '';
	}
	function itineraryList(list) {
		return '<ol class="itinerary">' + list.map(function (s) { return '<li>' + esc(s) + '</li>'; }).join('') + '</ol>';
	}
	function procesionHtml(p) {
		var d = byId(DATA.dias, p.dia);
		var f = d && parseFecha(d.fecha);
		var html = '<li class="agenda-item" id="proc-' + esc(p.id) + '" data-slug="' + esc(p.slug) + '">' +
			'<div class="agenda-time">' + (p.hora ? esc(p.hora) + '<small>h</small>' : '<span class="agenda-tbd">Hora por confirmar</span>') + '</div>' +
			'<div class="agenda-body">' +
				'<span class="pre">' + (p.tipo === 'procesion' ? 'Procesión' : 'Acto') + '</span>' +
				'<h3 class="agenda-title">' + esc(p.nombre) + '</h3>' +
				(p.subtitulo ? '<p class="agenda-subtitle">' + esc(p.subtitulo) + '</p>' : '') +
				'<dl class="agenda-meta">' +
					metaRow('Día', d && esc(d.nombre + ', ' + f.dia + ' de ' + f.mes)) +
					metaRow('Organiza', organizadores(p)) +
					metaRow('Salida', esc(p.salida)) +
					metaRow('Lugar', esc(p.lugar)) +
					metaRow('Música', p.musica && esc(p.musica.join(' y '))) +
				'</dl>';
		if (p.notas) html += '<p class="agenda-notes">' + esc(p.notas) + '</p>';
		var tieneRecorrido = p.recorrido && p.recorrido.length;
		if (tieneRecorrido) {
			html += '<details class="agenda-details"><summary>Itinerario</summary>' + itineraryList(p.recorrido) +
				(p.recorridosExtra || []).map(function (x) {
					return '<p class="itinerary-extra-title">' + esc(x.nombre) + '</p>' + itineraryList(x.recorrido);
				}).join('') +
				'</details>';
		} else if (p.tipo === 'procesion') {
			html += '<p class="agenda-notes agenda-pending">Itinerario pendiente de publicación.</p>';
		}
		if (p.pasos && p.pasos.length) {
			html += '<details class="agenda-details"><summary>Pasos (' + p.pasos.length + ')</summary><ul class="pasos-list">' +
				p.pasos.map(function (x) { return '<li><strong>' + esc(x.nombre) + '</strong>' + pasoDetalle(x) + '</li>'; }).join('') + '</ul></details>';
		} else if (p.tipo === 'procesion') {
			html += '<details class="agenda-details"><summary>Pasos</summary><p class="agenda-notes agenda-pending">Información no disponible.</p></details>';
		}
		// Mapa del itinerario (se abre en una ventana con el trazado de esta procesión)
		if (tieneRecorrido) {
			html += '<button type="button" class="map-trigger" data-map="' + esc(p.id) + '" aria-haspopup="dialog">' +
				'<span>Mapa</span>' +
				'<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2z"/><path d="M9 4v14M15 6v14"/></svg>' +
			'</button>';
		}
		return html + '</div></li>';
	}
	render('programa', DATA.dias.map(function (d) {
		var lista = procesionesDelDia(d.id);
		var body = lista.length
			? '<ol class="agenda-list">' + lista.map(procesionHtml).join('') + '</ol>'
			: '<p class="agenda-empty">Programa pendiente de publicación.</p>';
		return '<section class="agenda-day" id="dia-' + esc(d.id) + '">' +
			'<header class="agenda-day-header">' +
				'<span class="pre">' + esc(fechaLarga(d.fecha)) + '</span>' +
				'<h2 class="agenda-day-title">' + esc(d.nombre) + '</h2>' +
			'</header>' + body +
		'</section>';
	}).join(''));
	render('nota-horarios', esc(DATA.evento && DATA.evento.notaHorarios));

	/* Ficha de cofradía (cofradia.html?c=slug) */
	var fichaEl = document.querySelector('[data-render="cofradia-ficha"]');
	if (fichaEl) {
		var slug = new URLSearchParams(location.search).get('c');
		var idx = -1;
		DATA.cofradias.forEach(function (c, i) { if (c.slug === slug) idx = i; });
		var c = DATA.cofradias[idx];

		if (!c) {
			document.querySelector('.page-header-title').textContent = 'Cofradía no encontrada';
			fichaEl.innerHTML = '<div class="ficha-empty"><p>No hemos encontrado esta cofradía.</p>' +
				'<a class="button" href="cofradias.html">Ver las 16 cofradías</a></div>';
		} else {
			document.title = c.nombreCorto + ' · Semana Santa León 2027';
			var meta = document.querySelector('meta[name="description"]');
			if (meta) meta.setAttribute('content', c.nombre + ': historia, sede, procesiones y pasos. Semana Santa de León 2027.');
			var h1 = document.querySelector('.page-header-title');
			h1.textContent = c.nombre;
			h1.classList.add('ficha-title');
			var crumb = document.querySelector('.site-breadcrumbs [aria-current]');
			if (crumb) crumb.textContent = c.nombreCorto;

			var procs = procesionesDeCofradia(c.id);
			var pasos = DATA.pasos[c.id] || [];
			var bandas = DATA.bandas.filter(function (b) { return b.cofradia === c.id; });
			var prev = DATA.cofradias[(idx - 1 + DATA.cofradias.length) % DATA.cofradias.length];
			var next = DATA.cofradias[(idx + 1) % DATA.cofradias.length];

			var html =
				'<section class="ficha-intro">' +
					// Escudo visible al cargar: prioridad alta, sin lazy loading
					'<div class="ficha-logo"><img src="' + esc(c.logo) + '" alt="Emblema de la ' + esc(c.nombre) + '" fetchpriority="high" decoding="async"></div>' +
					'<div class="ficha-summary">' +
						'<p class="pre">Fundada en ' + esc(c.fundacion) + ' · ' + esc(c.sede) + '</p>' +
						c.descripcion.map(function (t) { return '<p>' + esc(t) + '</p>'; }).join('') +
					'</div>' +
				'</section>' +

				'<section class="ficha-section ficha-datos" aria-labelledby="ficha-datos">' +
					'<h2 id="ficha-datos" class="ficha-heading">Datos</h2>' +
					'<dl class="ficha-facts">' +
						'<div><dt>Fundación</dt><dd>' + esc(c.fundacion) + '</dd></div>' +
						'<div><dt>Sede canónica</dt><dd>' + esc(c.sedeCanonica) + '</dd></div>' +
						(c.sedeSocial ? '<div><dt>Sede social</dt><dd>' + esc(c.sedeSocial) + '</dd></div>' : '') +
						(c.web ? '<div><dt>Web oficial</dt><dd><a href="' + esc(c.web) + '" target="_blank" rel="noopener noreferrer">' + esc(c.web.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')) + '</a></dd></div>' : '') +
					'</dl>' +
				'</section>' +

				'<section class="ficha-section" aria-labelledby="ficha-historia">' +
					'<h2 id="ficha-historia" class="ficha-heading">Historia</h2>' +
					'<div class="ficha-text">' + c.historia.map(function (t) { return '<p>' + esc(t) + '</p>'; }).join('') + '</div>' +
				'</section>' +

				(c.habito ?
				'<section class="ficha-section" aria-labelledby="ficha-habito">' +
					'<h2 id="ficha-habito" class="ficha-heading">Hábito</h2>' +
					'<div class="ficha-text"><p>' + esc(c.habito) + '</p></div>' +
				'</section>' : '') +

				'<section class="ficha-section" aria-labelledby="ficha-procesiones">' +
					'<h2 id="ficha-procesiones" class="ficha-heading">Procesiones</h2>' +
					(procs.length ? '<ul class="procesion-cards">' + procs.map(function (item) {
						var p = item.procesion;
						var d = byId(DATA.dias, p.dia);
						return '<li><a class="procesion-card" href="' + procesionUrl(p) + '" data-slug="' + esc(p.slug) + '">' +
							'<span class="procesion-card-day">' + esc(d.nombre) + ' · ' + parseFecha(d.fecha).dia + ' ' + esc(parseFecha(d.fecha).mes) + '</span>' +
							'<span class="procesion-card-name">' + esc(p.nombre) + '</span>' +
							'<span class="procesion-card-meta">' + esc(item.rol) + (p.hora ? ' · ' + esc(p.hora) + ' h' : '') + '</span>' +
						'</a></li>';
					}).join('') + '</ul><p class="ficha-note">' + esc(DATA.evento.notaHorarios) + '</p>'
					: '<p class="ficha-note">Procesiones pendientes de documentar.</p>') +
				'</section>' +

				'<section class="ficha-section" aria-labelledby="ficha-pasos">' +
					'<h2 id="ficha-pasos" class="ficha-heading">Pasos</h2>' +
					(pasos.length ? '<ul class="paso-cards">' + pasos.map(function (p) {
						var autor = p.autor ? esc(p.autor) + (p.anio ? ' · ' + esc(p.anio) : '') : (p.anio ? esc(p.anio) : '');
						return '<li class="paso-card" id="paso-' + esc(p.id) + '">' +
							'<span class="paso-card-name">' + esc(p.nombre) + '</span>' +
							(autor ? '<span class="paso-card-author">' + autor + '</span>' : '') +
							(p.portadores ? '<span class="paso-card-meta">' + esc(p.portadores) + '</span>' : '') +
							(p.notas ? '<span class="paso-card-meta">' + esc(p.notas) + '</span>' : '') +
						'</li>';
					}).join('') + '</ul>' : '<p class="ficha-note">Pasos pendientes de documentar.</p>') +
				'</section>' +

				(bandas.length ?
				'<section class="ficha-section" aria-labelledby="ficha-musica">' +
					'<h2 id="ficha-musica" class="ficha-heading">Sección musical</h2>' +
					'<ul class="ficha-list">' + bandas.map(function (b) {
						return '<li>' + (b.tipo ? '<a href="bandas.html#banda-' + esc(b.id) + '">' + esc(b.nombre) + '</a>' : esc(b.nombre)) + '</li>';
					}).join('') + '</ul>' +
				'</section>' : '') +

				// c.fuentes se conserva en data.js como documentación interna, pero no se muestra.

				'<nav class="ficha-pager" aria-label="Otras cofradías">' +
					'<a class="ficha-pager-link prev" href="' + cofradiaUrl(prev) + '" rel="prev">' +
						'<span class="ficha-pager-label">Anterior</span>' +
						'<span class="ficha-pager-name">' + esc(prev.nombreCorto) + '</span></a>' +
					'<a class="ficha-pager-all" href="cofradias.html">Todas las cofradías</a>' +
					'<a class="ficha-pager-link next" href="' + cofradiaUrl(next) + '" rel="next">' +
						'<span class="ficha-pager-label">Siguiente</span>' +
						'<span class="ficha-pager-name">' + esc(next.nombreCorto) + '</span></a>' +
				'</nav>';

			fichaEl.innerHTML = html;
		}
	}

	/* Bandas musicales: tres apartados */

	// Galería de una banda. Con 3 fotos: principal + dos secundarias; con 2: pareja a la misma altura.
	// "sizes" por posición para que el navegador elija entre la versión de 800 px y el original de 1600 px.
	function bandaGaleria(b) {
		var imgs = b.imagenes || [];
		if (!imgs.length) return '';
		var destacada = imgs.length === 3;
		return '<div class="banda-galeria banda-galeria--n' + imgs.length + '">' + imgs.map(function (im, i) {
			var sizes = destacada
				? (i === 0 ? '(max-width: 680px) 92vw, (max-width: 1280px) 64vw, 800px' : '(max-width: 680px) 92vw, (max-width: 1280px) 27vw, 340px')
				: '(max-width: 680px) 92vw, (max-width: 1280px) 45vw, 570px';
			return '<figure class="banda-foto" style="--ar:' + (im.ancho / im.alto).toFixed(4) + '">' +
				'<img src="' + esc(im.src800) + '" srcset="' + esc(im.src800) + ' 800w, ' + esc(im.src) + ' ' + im.ancho + 'w" sizes="' + sizes + '"' +
				' width="' + im.ancho + '" height="' + im.alto + '" alt="' + esc(im.alt) + '" loading="lazy" decoding="async">' +
			'</figure>';
		}).join('') + '</div>';
	}

	render('bandas', DATA.tiposBanda.map(function (t) {
		var lista = DATA.bandas.filter(function (b) { return b.tipo === t.id; });
		return '<section class="bandas-group" id="' + esc(t.ancla) + '" aria-labelledby="h-' + esc(t.ancla) + '">' +
			'<header class="bandas-group-header">' +
				'<h2 class="agenda-day-title" id="h-' + esc(t.ancla) + '">' + esc(t.nombre) + '</h2>' +
				'<span class="bandas-count">' + lista.length + '</span>' +
			'</header>' +
			(lista.length ? '<ul class="banda-cards">' + lista.map(function (b) {
				// La relación con la cofradía (b.cofradia / b.vinculada) se mantiene en los datos pero no se muestra.
				var rep = b.repertorio || [];
				// Con repertorio o fotos la ficha ocupa toda la fila: información → repertorio → imágenes.
				var completa = rep.length || (b.imagenes && b.imagenes.length);
				return '<li class="banda-card' + (completa ? ' banda-card--completa' : '') + '" id="banda-' + esc(b.id) + '">' +
					'<span class="banda-card-name">' + esc(b.nombre) + '</span>' +
					(b.descripcion ? '<p>' + esc(b.descripcion) + '</p>' : '') +
					// Con piezas: desplegable (cerrado por defecto). Sin piezas: aviso fijo.
					(rep.length
						? '<details class="banda-repertorio banda-repertorio--desplegable">' +
							'<summary><h3 class="banda-repertorio-title">Repertorio' +
								' <span class="banda-repertorio-count">' + rep.length + ' piezas</span></h3></summary>' +
							'<ol class="repertorio-list">' + rep.map(function (r) {
								return '<li><span class="repertorio-titulo">' + esc(r.titulo) + '</span>' +
									(r.autor ? '<span class="repertorio-autor">' + esc(r.autor) + '</span>' : '') + '</li>';
							}).join('') + '</ol>' +
						'</details>'
						: '<div class="banda-repertorio">' +
							'<h3 class="banda-repertorio-title">Repertorio</h3>' +
							'<p class="repertorio-empty">Repertorio próximamente.</p>' +
						'</div>') +
					bandaGaleria(b) +
				'</li>';
			}).join('') + '</ul>' : '<p class="agenda-empty">Listado pendiente de publicación.</p>') +
		'</section>';
	}).join(''));

	/* ==========================================================================
	   Comportamientos
	   ========================================================================== */

	/* ---------- Título y subtítulo de cabecera ---------- */
	var title = document.querySelector('.page-header-title');
	var subtitle = document.querySelector('.page-subheading');
	setTimeout(function () { title && title.classList.add('appears'); }, 700);
	setTimeout(function () { subtitle && subtitle.classList.add('appears'); }, 1700);
	var crumbs = document.querySelector('.site-breadcrumbs');
	setTimeout(function () { crumbs && crumbs.classList.add('appears'); }, 2000);

	/* ---------- Contadores de la intro (3 s, easing "swing") ---------- */
	var intro = document.getElementById('home-intro');
	if (intro && 'IntersectionObserver' in window) {
		var numbers = intro.querySelectorAll('.number b');
		numbers.forEach(function (b) { b.dataset.target = b.textContent.trim(); });
		var introObserver = new IntersectionObserver(function (entries, obs) {
			if (!entries.some(function (e) { return e.isIntersecting; })) return;
			obs.disconnect();
			numbers.forEach(function (b) {
				var target = parseInt(b.dataset.target, 10);
				var start = null;
				function step(ts) {
					if (!start) start = ts;
					var p = Math.min((ts - start) / 3000, 1);
					var eased = 0.5 - Math.cos(p * Math.PI) / 2; // jQuery "swing"
					b.textContent = Math.ceil(target * eased);
					if (p < 1) requestAnimationFrame(step);
				}
				requestAnimationFrame(step);
			});
		});
		introObserver.observe(intro);
	}

	/* ---------- Cuenta atrás hasta la Semana Santa ---------- */
	var cdEl = document.getElementById('countdown');
	var CD = DATA.evento && DATA.evento.cuentaAtras;
	if (cdEl && CD) {
		// Convierte una fecha/hora local de una zona IANA (Europe/Madrid) a milisegundos UTC
		var zonedToUtc = function (fecha, hora, zona) {
			var d = fecha.split('-').map(Number);
			var h = hora.split(':').map(Number);
			var guess = Date.UTC(d[0], d[1] - 1, d[2], h[0], h[1], 0);
			try {
				var v = {};
				new Intl.DateTimeFormat('en-US', {
					timeZone: zona, hourCycle: 'h23',
					year: 'numeric', month: '2-digit', day: '2-digit',
					hour: '2-digit', minute: '2-digit', second: '2-digit'
				}).formatToParts(new Date(guess)).forEach(function (x) { v[x.type] = +x.value; });
				var offset = Date.UTC(v.year, v.month - 1, v.day, v.hour % 24, v.minute, v.second) - guess;
				return guess - offset;
			} catch (e) {
				return guess - 3600000; // Sin soporte de zonas: CET (UTC+1), vigente en León el 19 de marzo
			}
		};

		var cdTarget = zonedToUtc(CD.fecha, CD.hora, CD.zona);
		var units = {};
		cdEl.querySelectorAll('[data-unit]').forEach(function (b) { units[b.dataset.unit] = b; });
		var edicionEl = cdEl.querySelector('[data-countdown="edicion"]');
		if (edicionEl && DATA.evento.edicion) edicionEl.textContent = DATA.evento.edicion;
		var shown = {};
		var cdTimer = null;
		var cdDone = false;
		var pad = function (n) { return n < 10 ? '0' + n : String(n); };
		var stopCountdown = function () {
			if (cdTimer) { clearTimeout(cdTimer); cdTimer = null; }
		};
		var finishCountdown = function () {
			cdDone = true;
			stopCountdown();
			cdEl.classList.add('is-done');
			cdEl.querySelector('.countdown-title').hidden = true;
			cdEl.querySelector('.countdown-units').hidden = true;
			var done = cdEl.querySelector('.countdown-done');
			done.textContent = CD.mensajeFinal;
			done.hidden = false;
		};
		// Un único temporizador: se reprograma para el siguiente cambio de segundo
		var tick = function () {
			cdTimer = null;
			var ms = cdTarget - Date.now();
			if (ms <= 0) { finishCountdown(); return; }
			var s = Math.floor(ms / 1000);
			var vals = {
				dias: String(Math.floor(s / 86400)),
				horas: pad(Math.floor(s % 86400 / 3600)),
				minutos: pad(Math.floor(s % 3600 / 60)),
				segundos: pad(s % 60)
			};
			for (var k in vals) {
				if (units[k] && shown[k] !== vals[k]) { units[k].textContent = vals[k]; shown[k] = vals[k]; }
			}
			cdTimer = setTimeout(tick, (ms % 1000) + 20);
		};
		// Sin trabajo mientras la pestaña está oculta; limpieza al abandonar la página
		document.addEventListener('visibilitychange', function () {
			if (document.hidden) stopCountdown();
			else if (!cdDone && !cdTimer) tick();
		});
		window.addEventListener('pagehide', stopCountdown);
		window.addEventListener('pageshow', function () { if (!cdDone && !cdTimer) tick(); });
		tick();
	}

	/* ---------- Sliders (Swiper) ---------- */
	// El autoplay solo corre mientras el slider está en pantalla
	function autoplayWhenVisible(swiper) {
		if (!('IntersectionObserver' in window) || !swiper.autoplay) return;
		swiper.autoplay.stop();
		new IntersectionObserver(function (entries) {
			if (entries[0].isIntersecting) swiper.autoplay.start();
			else swiper.autoplay.stop();
		}).observe(swiper.el);
	}

	if (window.Swiper && document.querySelector('.mySwiper .swiper-slide')) {
		var pennants = new Swiper('.mySwiper', {
			slidesPerView: 6,
			loop: true,
			pagination: { el: '.swiper-pagination', dynamicBullets: true, clickable: true },
			autoplay: { delay: 2500, disableOnInteraction: true },
			breakpoints: {
				0: { slidesPerView: 2 },
				640: { slidesPerView: 3.5 },
				900: { slidesPerView: 4.5 },
				1250: { slidesPerView: 5 }
			}
		});
		autoplayWhenVisible(pennants);
	}

	if (window.Swiper && document.querySelector('.mySwiper2 .swiper-slide')) {
		var brotherhoods = new Swiper('.mySwiper2', {
			slidesPerView: 3.5,
			spaceBetween: 30,
			autoplay: { delay: 2500, disableOnInteraction: false },
			breakpoints: {
				0: { slidesPerView: 1.3, spaceBetween: 20 },
				640: { slidesPerView: 2.5, spaceBetween: 30 },
				900: { slidesPerView: 3.5, spaceBetween: 30 }
			}
		});
		autoplayWhenVisible(brotherhoods);
	}

	/* ---------- Animaciones WOW (fadeInUp / fadeIn al entrar en viewport) ---------- */
	var wowEls = document.querySelectorAll('.wow');
	if ('IntersectionObserver' in window) {
		var wowObserver = new IntersectionObserver(function (entries) {
			entries.forEach(function (entry) {
				if (!entry.isIntersecting) return;
				var el = entry.target;
				if (el.dataset.wowDelay) el.style.animationDelay = el.dataset.wowDelay;
				el.classList.add('animated');
				wowObserver.unobserve(el);
			});
		}, { threshold: 0 });
		wowEls.forEach(function (el) { wowObserver.observe(el); });
	} else {
		wowEls.forEach(function (el) { el.classList.add('animated'); });
	}

	/* ---------- Menú flotante (botón hamburguesa) ---------- */
	var toggle = document.querySelector('.oceanwp-mobile-menu-icon .mobile-menu');
	var dropdown = document.getElementById('mobile-dropdown');
	var desktopMenu = document.querySelector('#site-navigation .main-menu');
	if (toggle && dropdown && desktopMenu) {
		var mobileMenu = desktopMenu.cloneNode(true);
		mobileMenu.className = 'menu';
		mobileMenu.querySelectorAll('.nav-arrow').forEach(function (i) { i.remove(); });
		mobileMenu.querySelectorAll('li.has-children').forEach(function (li, n) {
			var sub = li.querySelector(':scope > ul');
			var btn = document.createElement('button');
			btn.type = 'button';
			btn.className = 'dropdown-toggle';
			btn.setAttribute('aria-expanded', 'false');
			btn.setAttribute('aria-label', 'Mostrar ' + li.querySelector(':scope > a').textContent.trim());
			sub.id = 'mobile-sub-' + n;
			btn.setAttribute('aria-controls', sub.id);
			li.insertBefore(btn, sub);
			btn.addEventListener('click', function () {
				var open = li.classList.toggle('active');
				btn.setAttribute('aria-expanded', open);
			});
		});
		dropdown.querySelector('nav').appendChild(mobileMenu);

		var setMenu = function (open) {
			dropdown.classList.toggle('open', open);
			toggle.classList.toggle('opened', open);
			toggle.setAttribute('aria-expanded', open);
		};
		var isOpen = function () { return dropdown.classList.contains('open'); };

		toggle.addEventListener('click', function (e) {
			e.preventDefault();
			setMenu(!isOpen());
			if (isOpen()) {
				var first = dropdown.querySelector('a');
				if (first) first.focus({ preventScroll: true });
			}
		});
		// Cerrar al pulsar fuera, con Escape o al elegir una opción
		document.addEventListener('click', function (e) {
			if (isOpen() && !dropdown.contains(e.target) && !toggle.contains(e.target)) setMenu(false);
		});
		document.addEventListener('keydown', function (e) {
			if (e.key === 'Escape' && isOpen()) { setMenu(false); toggle.focus(); }
		});
		dropdown.addEventListener('click', function (e) {
			if (e.target.closest('a')) setMenu(false);
		});
	}

	/* ---------- Mapa del itinerario (Leaflet y rutas.js se cargan solo al abrir el primer mapa) ---------- */
	if (document.querySelector('.map-trigger')) {
		var LEAFLET = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/';
		var mapDeps = null, mapModal = null, leafletMap = null, routeLayer = null, lastTrigger = null;
		var loadScript = function (src) {
			return new Promise(function (resolve, reject) {
				var s = document.createElement('script');
				s.src = src; s.onload = resolve; s.onerror = reject;
				document.head.appendChild(s);
			});
		};
		var loadDeps = function () {
			if (!mapDeps) {
				var css = document.createElement('link');
				css.rel = 'stylesheet'; css.href = LEAFLET + 'leaflet.min.css';
				document.head.appendChild(css);
				mapDeps = Promise.all([loadScript(LEAFLET + 'leaflet.min.js'), loadScript('rutas.js')]);
				mapDeps.catch(function () { mapDeps = null; }); // permite reintentar si falla la red
			}
			return mapDeps;
		};
		var buildModal = function () {
			mapModal = document.createElement('div');
			mapModal.className = 'map-modal';
			mapModal.hidden = true;
			mapModal.setAttribute('role', 'dialog');
			mapModal.setAttribute('aria-modal', 'true');
			mapModal.setAttribute('aria-labelledby', 'map-modal-title');
			mapModal.innerHTML =
				'<div class="map-modal-panel">' +
					'<header class="map-modal-header">' +
						'<div><p class="pre map-modal-day"></p><h2 class="map-modal-title" id="map-modal-title"></h2></div>' +
						'<button type="button" class="map-modal-close" aria-label="Cerrar mapa">' +
							'<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg>' +
						'</button>' +
					'</header>' +
					'<div class="map-modal-map"><div class="map-canvas"></div><p class="map-status" role="status"></p></div>' +
					'<footer class="map-modal-legend">' +
						'<span class="lg lg-route">Recorrido</span>' +
						'<span class="lg lg-start">Salida</span>' +
						'<span class="lg lg-end">Llegada</span>' +
						'<span class="lg lg-extra" hidden></span>' +
						'<span class="map-modal-note">Trazado aproximado sobre las calles del itinerario.</span>' +
					'</footer>' +
				'</div>';
			document.body.appendChild(mapModal);
			mapModal.querySelector('.map-modal-close').addEventListener('click', closeMap);
			mapModal.addEventListener('click', function (e) { if (e.target === mapModal) closeMap(); });
		};
		var setStatus = function (text) {
			var st = mapModal.querySelector('.map-status');
			st.textContent = text || '';
			st.hidden = !text;
		};
		var drawRoute = function (p) {
			var L = window.L, ruta = window.SSL_RUTAS && window.SSL_RUTAS[p.id];
			if (!ruta) { setStatus('Recorrido no disponible en el mapa.'); return; }
			if (!leafletMap) {
				leafletMap = L.map(mapModal.querySelector('.map-canvas'), { zoomControl: true, maxZoom: 19 });
				// Vista de satélite + capa de calles y nombres (Esri, sin clave)
				L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
					maxZoom: 19, attribution: 'Imagen &copy; Esri, Maxar, Earthstar Geographics'
				}).addTo(leafletMap);
				L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Transportation/MapServer/tile/{z}/{y}/{x}', {
					maxZoom: 19, opacity: 0.55
				}).addTo(leafletMap);
				L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}', {
					maxZoom: 19
				}).addTo(leafletMap);
				leafletMap.attributionControl.addAttribution('Recorrido: datos &copy; colaboradores de OpenStreetMap');
				routeLayer = L.layerGroup().addTo(leafletMap);
			}
			routeLayer.clearLayers();
			// Calles del recorrido iluminadas: halo + contorno + línea dorada
			L.polyline(ruta.linea, { color: '#ffd978', weight: 18, opacity: 0.28, lineCap: 'round', lineJoin: 'round', interactive: false }).addTo(routeLayer);
			L.polyline(ruta.linea, { color: '#2f1239', weight: 8, opacity: 0.85, lineCap: 'round', lineJoin: 'round', interactive: false }).addTo(routeLayer);
			var main = L.polyline(ruta.linea, { color: '#ffd24d', weight: 4.5, opacity: 1, lineCap: 'round', lineJoin: 'round' }).addTo(routeLayer);
			var bounds = main.getBounds();
			var extraLabel = mapModal.querySelector('.lg-extra');
			extraLabel.hidden = !ruta.extra.length;
			ruta.extra.forEach(function (x) {
				L.polyline(x.linea, { color: '#2f1239', weight: 7, opacity: 0.8, interactive: false }).addTo(routeLayer);
				var ex = L.polyline(x.linea, { color: '#e3c2f5', weight: 4, opacity: 1, dashArray: '8 7' }).bindTooltip(x.nombre).addTo(routeLayer);
				bounds.extend(ex.getBounds());
				extraLabel.textContent = x.nombre;
			});
			var mismoPunto = leafletMap.distance(ruta.inicio, ruta.fin) < 40;
			L.circleMarker(ruta.fin, { radius: 9, color: '#fff', weight: 3, fillColor: '#6b2a86', fillOpacity: 1 })
				.bindTooltip('Llegada').addTo(routeLayer);
			L.circleMarker(ruta.inicio, { radius: mismoPunto ? 6 : 9, color: '#fff', weight: 3, fillColor: '#1f9d55', fillOpacity: 1 })
				.bindTooltip((mismoPunto ? 'Salida y llegada: ' : 'Salida: ') + (p.salida || '')).addTo(routeLayer);
			leafletMap.invalidateSize();
			leafletMap.fitBounds(bounds, { padding: [28, 28] });
			setStatus('');
		};
		var openMap = function (id, trigger) {
			var p = byId(DATA.procesiones, id);
			if (!p) return;
			if (!mapModal) buildModal();
			lastTrigger = trigger;
			var d = byId(DATA.dias, p.dia), f = d && parseFecha(d.fecha);
			mapModal.querySelector('.map-modal-day').textContent = d ? d.nombre + ' · ' + f.dia + ' de ' + f.mes + (p.hora ? ' · ' + p.hora + ' h' : '') : '';
			mapModal.querySelector('.map-modal-title').textContent = p.nombre;
			mapModal.hidden = false;
			document.body.classList.add('map-open');
			mapModal.querySelector('.map-modal-close').focus();
			setStatus('Cargando mapa…');
			loadDeps().then(function () {
				if (!mapModal.hidden) requestAnimationFrame(function () { drawRoute(p); });
			}).catch(function () {
				setStatus('No se ha podido cargar el mapa. Comprueba la conexión e inténtalo de nuevo.');
			});
		};
		var closeMap = function () {
			if (!mapModal || mapModal.hidden) return;
			mapModal.hidden = true;
			document.body.classList.remove('map-open');
			if (lastTrigger) lastTrigger.focus();
		};
		document.addEventListener('click', function (e) {
			var t = e.target.closest && e.target.closest('.map-trigger');
			if (t) openMap(t.dataset.map, t);
		});
		document.addEventListener('keydown', function (e) {
			if (e.key === 'Escape') closeMap();
		});
	}

	/* ---------- Footer parallax: el main deja hueco para el footer fijo ---------- */
	var main = document.getElementById('main');
	var footer = document.getElementById('footer');
	var parallaxQuery = window.matchMedia('(min-width: 960px)');
	function updateFooterSpace() {
		if (!main || !footer) return;
		main.style.marginBottom = parallaxQuery.matches ? footer.offsetHeight + 'px' : '';
	}
	// Solo se recalcula cuando cambia el tamaño del footer o el breakpoint (no en cada resize)
	if (main && footer) {
		if ('ResizeObserver' in window) new ResizeObserver(updateFooterSpace).observe(footer);
		else window.addEventListener('resize', updateFooterSpace);
		if (parallaxQuery.addEventListener) parallaxQuery.addEventListener('change', updateFooterSpace);
		updateFooterSpace();
	}

	/* ---------- Ancla inicial (contenido renderizado por JS) ---------- */
	if (location.hash.length > 1) {
		var target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
		if (target) setTimeout(function () { target.scrollIntoView(); }, 50);
	}

	/* ---------- Cabecera fija: fondo morado en cuanto se hace scroll ---------- */
	var siteHeader = document.getElementById('site-header');
	if (siteHeader) {
		// Centinela en los primeros 40 px: sin listener de scroll
		var headerSentinel = document.createElement('div');
		headerSentinel.setAttribute('aria-hidden', 'true');
		headerSentinel.style.cssText = 'position:absolute;top:0;left:0;width:1px;height:40px;pointer-events:none';
		document.body.appendChild(headerSentinel);
		if ('IntersectionObserver' in window) {
			new IntersectionObserver(function (entries) {
				siteHeader.classList.toggle('is-scrolled', !entries[0].isIntersecting);
			}).observe(headerSentinel);
		} else {
			siteHeader.classList.add('is-scrolled');
		}
	}

	/* ---------- Botón volver arriba ---------- */
	var scrollTop = document.getElementById('scroll-top');
	if (scrollTop) {
		// Un centinela en los primeros 100 px sustituye al listener de scroll
		var sentinel = document.createElement('div');
		sentinel.setAttribute('aria-hidden', 'true');
		sentinel.style.cssText = 'position:absolute;top:0;left:0;width:1px;height:100px;pointer-events:none';
		document.body.appendChild(sentinel);
		if ('IntersectionObserver' in window) {
			new IntersectionObserver(function (entries) {
				scrollTop.classList.toggle('show', !entries[0].isIntersecting);
			}).observe(sentinel);
		} else {
			scrollTop.classList.add('show');
		}
		scrollTop.addEventListener('click', function (e) {
			e.preventDefault();
			window.scrollTo({ top: 0, behavior: 'smooth' });
		});
	}
})();
