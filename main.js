/* Comportamientos del sitio (JS sin dependencias). Los datos vienen de data.js. */
(function () {
	'use strict';

	var DATA = window.SSL_DATA || { cofradias: [], dias: [], pasos: {} };
	var CONFIG = window.SITE_CONFIG || {};

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

	function contarActos(dia) {
		var n = dia.actos.length;
		if (!n || dia.pendiente) return 'Programa pendiente';
		return n + (n === 1 ? ' acto' : ' procesiones y actos');
	}

	/* ---------- Redes sociales (URLs desde SITE_CONFIG) ---------- */
	var SOCIAL = { youtube: CONFIG.YOUTUBE_URL, instagram: CONFIG.INSTAGRAM_URL };
	document.querySelectorAll('[data-social]').forEach(function (a) {
		var url = SOCIAL[a.dataset.social];
		// Mientras siga el placeholder, el enlace no navega a ningún sitio.
		if (url && /^https?:\/\//.test(url)) a.href = url;
		else a.addEventListener('click', function (e) { e.preventDefault(); });
	});

	/* ==========================================================================
	   Render desde datos (antes de iniciar sliders y animaciones)
	   ========================================================================== */

	/* Home: tarjetas de cofradías (carrusel) */
	render('home-cofradias', DATA.cofradias.map(function (c) {
		return '<div class="featured swiper-slide">' +
			'<a class="brotherhood-card" href="cofradias.html#' + esc(c.id) + '">' +
				'<img src="' + esc(c.logo) + '" alt="Emblema de la ' + esc(c.nombre) + '" loading="lazy">' +
				'<span class="brotherhood-card-year">' + esc(c.fundacion) + '</span>' +
				'<span class="brotherhood-card-name">' + esc(c.nombre) + '</span>' +
				'<span class="pre">' + esc(c.sede) + '</span>' +
			'</a></div>';
	}).join(''));

	/* Home: escudos */
	render('home-escudos', DATA.cofradias.map(function (c) {
		return '<div class="logo swiper-slide"><a href="cofradias.html#' + esc(c.id) + '">' +
			'<img src="' + esc(c.logo) + '" alt="Emblema de la ' + esc(c.nombre) + '" loading="lazy">' +
			'<p class="pre">' + esc(c.nombre) + '</p></a></div>';
	}).join(''));

	/* Home y agenda: tira de días */
	var diasHtml = DATA.dias.map(function (d) {
		var f = parseFecha(d.fecha);
		return '<li class="day' + (d.pendiente ? ' is-pending' : '') + '">' +
			'<a href="actividades.html#dia-' + esc(d.id) + '">' +
				'<span class="day-num">' + f.dia + '</span>' +
				'<span class="day-month">' + esc(f.mes.slice(0, 3)) + '</span>' +
				'<span class="day-name">' + esc(d.nombre) + '</span>' +
			'</a></li>';
	}).join('');
	render('home-dias', diasHtml);
	render('agenda-dias', diasHtml.replace(/actividades\.html#/g, '#'));

	/* Home: primeros actos del programa (uno por día) */
	var destacados = [];
	DATA.dias.forEach(function (d) {
		if (destacados.length < 3 && !d.pendiente && d.actos.length) destacados.push({ dia: d, acto: d.actos[0] });
	});
	render('home-programa', destacados.map(function (item, i) {
		return '<article class="home-news-post">' +
			'<div class="post-wrapper">' +
				'<a href="actividades.html#dia-' + esc(item.dia.id) + '" class="post-link post-wrapper-link">' +
					'<div class="post-info">' +
						'<div class="post-metas"><span class="post-date">' + esc(item.dia.nombre) + ' · ' + esc(fechaLarga(item.dia.fecha)) + '</span></div>' +
						'<h3 class="post-title">' + esc(item.acto.titulo) + '</h3>' +
						(item.acto.hora ? '<span class="post-hour">' + esc(item.acto.hora) + ' h</span>' : '') +
						'<span class="hover-arrow">&#10095;</span>' +
					'</div>' +
					'<div class="post-image pattern-bg pattern-' + (i % 3 + 1) + '"></div>' +
				'</a>' +
			'</div>' +
		'</article>';
	}).join(''));

	/* Cofradías: rejilla de 16 */
	render('cofradias-grid', DATA.cofradias.map(function (c, i) {
		var delay = (Math.round((i % 4 + 1) / 6 * 100) / 100) + 's';
		return '<li class="item wow fadeIn" data-wow-delay="' + delay + '" id="' + esc(c.id) + '">' +
			'<article class="brotherhood-link">' +
				'<div class="logo-box"><img src="' + esc(c.logo) + '" alt="Emblema de la ' + esc(c.nombre) + '" loading="lazy"></div>' +
				'<h2 class="title">' + esc(c.nombre) + '</h2>' +
				'<p class="pre">Fundada en ' + esc(c.fundacion) + '</p>' +
				'<p class="sede">' + esc(c.sede) + '</p>' +
			'</article>' +
		'</li>';
	}).join(''));

	/* Procesiones: tarjeta por día */
	render('procesiones-dias', DATA.dias.map(function (d, i) {
		var f = parseFecha(d.fecha);
		return '<li class="archive-item' + (d.pendiente ? ' is-pending' : '') + '">' +
			'<div class="content-wrapper">' +
				'<a href="actividades.html#dia-' + esc(d.id) + '" title="' + esc(d.nombre) + '">' +
					'<h2 class="heading wow fadeInUp">' + esc(d.nombre) + '</h2>' +
					'<span class="pre date time wow fadeInDown" data-wow-delay="0.7s">' + f.dia + ' de ' + f.mes +
						' <span class="sum">' + esc(contarActos(d)) + '</span></span>' +
				'</a>' +
			'</div>' +
			'<div class="image-wrapper pattern-bg pattern-' + (i % 3 + 1) + '"><span class="day-watermark" aria-hidden="true">' + f.dia + '</span></div>' +
		'</li>';
	}).join(''));

	/* Agenda: programa completo por días */
	function metaRow(label, value) {
		return value ? '<dt>' + label + '</dt><dd>' + esc(value) + '</dd>' : '';
	}
	function pasoDetalle(p) {
		var bits = [];
		if (p.acompanamiento) bits.push('Acompañamiento: ' + p.acompanamiento);
		if (p.autor) bits.push(p.autor + (p.anio ? ' (' + p.anio + ')' : ''));
		else if (p.anio) bits.push(p.anio);
		if (p.braceros) bits.push(p.braceros + ' braceros');
		if (p.notas) bits.push(p.notas);
		return bits.length ? '<span>' + esc(bits.join(' · ')) + '</span>' : '';
	}
	function actoHtml(a) {
		var html = '<li class="agenda-item' + (a.pendiente ? ' is-pending' : '') + '">' +
			'<div class="agenda-time">' + (a.hora ? esc(a.hora) + '<small>h</small>' : '<span class="agenda-tbd">Hora por confirmar</span>') + '</div>' +
			'<div class="agenda-body">' +
				'<span class="pre">' + (a.tipo === 'procesion' ? 'Procesión' : 'Acto') + '</span>' +
				'<h3 class="agenda-title">' + esc(a.titulo) + '</h3>' +
				(a.subtitulo ? '<p class="agenda-subtitle">' + esc(a.subtitulo) + '</p>' : '');

		if (a.pendiente) {
			html += '<p class="agenda-notes">Horario, itinerario y pasos pendientes de publicación.</p>';
		} else {
			html += '<dl class="agenda-meta">' +
				metaRow('Organiza', a.organiza) +
				metaRow('Salida', a.salida) +
				metaRow('Lugar', a.lugar) +
				metaRow('Música', a.musica && a.musica.join(' y ')) +
			'</dl>';
			if (a.notas) html += '<p class="agenda-notes">' + esc(a.notas) + '</p>';
			if (a.itinerario && a.itinerario.length) {
				html += '<details class="agenda-details"><summary>Itinerario</summary><ol class="itinerary">' +
					a.itinerario.map(function (s) { return '<li>' + esc(s) + '</li>'; }).join('') + '</ol></details>';
			}
			if (a.pasos && a.pasos.length) {
				html += '<details class="agenda-details"><summary>Pasos (' + a.pasos.length + ')</summary><ul class="pasos-list">' +
					a.pasos.map(function (p) { return '<li><strong>' + esc(p.nombre) + '</strong>' + pasoDetalle(p) + '</li>'; }).join('') + '</ul></details>';
			} else if (a.pasos === null) {
				html += '<p class="agenda-notes">Pasos pendientes de publicación.</p>';
			}
		}
		return html + '</div></li>';
	}
	render('agenda', DATA.dias.map(function (d) {
		var body = d.actos.length ? '<ol class="agenda-list">' + d.actos.map(actoHtml).join('') + '</ol>' : '';
		if (d.pendiente && !d.actos.length) body = '<p class="agenda-empty">Programa pendiente de publicación.</p>';
		return '<section class="agenda-day" id="dia-' + esc(d.id) + '">' +
			'<header class="agenda-day-header">' +
				'<span class="pre">' + esc(fechaLarga(d.fecha)) + '</span>' +
				'<h2 class="agenda-day-title">' + esc(d.nombre) + '</h2>' +
			'</header>' + body +
		'</section>';
	}).join(''));

	/* ==========================================================================
	   Comportamientos
	   ========================================================================== */

	/* ---------- Título y subtítulo del hero ---------- */
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

	/* ---------- Sliders (Swiper) ---------- */
	if (window.Swiper && document.querySelector('.mySwiper .swiper-slide')) {
		new Swiper('.mySwiper', {
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
	}

	if (window.Swiper && document.querySelector('.mySwiper2 .swiper-slide')) {
		new Swiper('.mySwiper2', {
			slidesPerView: 3.5,
			spaceBetween: 30,
			autoplay: { delay: 2500, disableOnInteraction: false },
			breakpoints: {
				0: { slidesPerView: 1.3, spaceBetween: 20 },
				640: { slidesPerView: 2.5, spaceBetween: 30 },
				900: { slidesPerView: 3.5, spaceBetween: 30 }
			}
		});
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

	/* ---------- Menú móvil (dropdown) ---------- */
	var toggle = document.querySelector('.oceanwp-mobile-menu-icon .mobile-menu');
	var dropdown = document.getElementById('mobile-dropdown');
	var desktopMenu = document.querySelector('#site-navigation .main-menu');
	if (toggle && dropdown && desktopMenu) {
		var mobileMenu = desktopMenu.cloneNode(true);
		mobileMenu.className = 'menu';
		dropdown.querySelector('nav').appendChild(mobileMenu);

		toggle.addEventListener('click', function (e) {
			e.preventDefault();
			var open = dropdown.classList.toggle('open');
			toggle.classList.toggle('opened', open);
			toggle.setAttribute('aria-expanded', open);
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
	window.addEventListener('resize', updateFooterSpace);
	window.addEventListener('load', updateFooterSpace);
	updateFooterSpace();

	/* ---------- Ancla inicial (contenido renderizado por JS) ---------- */
	if (location.hash.length > 1) {
		var target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
		if (target) setTimeout(function () { target.scrollIntoView(); }, 50);
	}

	/* ---------- Botón volver arriba ---------- */
	var scrollTop = document.getElementById('scroll-top');
	if (scrollTop) {
		window.addEventListener('scroll', function () {
			scrollTop.classList.toggle('show', window.scrollY > 100);
		}, { passive: true });
		scrollTop.addEventListener('click', function (e) {
			e.preventDefault();
			window.scrollTo({ top: 0, behavior: 'smooth' });
		});
	}

	var year = document.getElementById('year');
	if (year) year.textContent = new Date().getFullYear();
})();
