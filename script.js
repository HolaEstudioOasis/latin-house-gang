// ─── SOCIAL LINKS ───────────────────────────────────────
const LHG_SPOTIFY  = "https://open.spotify.com/intl-es/artist/7L2xCq0Mc82JvdEYFydl9H";
const LHG_INSTAGRAM = "https://www.instagram.com/latinhousegangmusic/";
const BAUTISTA_SPOTIFY  = "https://open.spotify.com/intl-es/artist/5oryDmGJCySSpMFY9YUeb1";
const MICHAEL_SPOTIFY   = "https://open.spotify.com/intl-es/artist/6RY7vqzR938x0DE0Eh6srl";

// ─── DATA ───────────────────────────────────────────────
const releases = [
  { id: "r1", catalog: "LHG #027", title: "CIEMPIÉS", artist: "Paskman", year: "2025", genre: "Latin House", color: "#E8650A", listenUrl: LHG_SPOTIFY },
  { id: "r2", catalog: "LHG #025", title: "LOVER", artist: "Bautista", year: "2025", genre: "Deep House", color: "#7AB3D4", listenUrl: BAUTISTA_SPOTIFY },
  { id: "r3", catalog: "LHG #024", title: "LATIN HOUSE GANG VOL.4", artist: "Various Artists", year: "2024", genre: "Compilation", color: "#CC2020", listenUrl: LHG_SPOTIFY },
  { id: "r4", catalog: "LHG #023", title: "FUEGO PROFUNDO", artist: "Michael", year: "2024", genre: "Latin House", color: "#D4A017", listenUrl: MICHAEL_SPOTIFY },
  { id: "r5", catalog: "LHG #022", title: "ARRABAL NIGHTS", artist: "Cele Arrabal", year: "2024", genre: "Afro House", color: "#2A7A2A", listenUrl: LHG_SPOTIFY },
  { id: "r6", catalog: "LHG #021", title: "SUBTERRÁNEO EP", artist: "Minow", year: "2024", genre: "Deep House", color: "#5C2D8A", listenUrl: LHG_SPOTIFY },
  { id: "r7", catalog: "LHG #020", title: "CUMBIA 3000", artist: "Boltron", year: "2023", genre: "Cumbia Electrónica", color: "#C45C00", listenUrl: LHG_SPOTIFY },
  { id: "r8", catalog: "LHG #019", title: "GAMMA RAYS", artist: "Gama", year: "2023", genre: "Tech House", color: "#1A6B6B", listenUrl: LHG_SPOTIFY }
];

const eventos = [
  {
    id: "evento-1", slug: "lhg-fuego-toluca-jul26",
    nombre: "LATIN HOUSE GANG: FUEGO",
    fecha: "Sábado 12 Julio 2026", hora: "22:00 — 04:00",
    venue: "Club Nocturno XO", direccion: "Av. Tecnológico 100, Toluca, México",
    ciudad: "Toluca, México", precioDesde: 350, moneda: "MXN",
    status: "upcoming", lugaresLimitados: true, flyer: null,
    instagramArtistas: {
      "Michael": "https://www.instagram.com/michaelbmmusic/",
      "Cele Arrabal": "https://www.instagram.com/cele.arrabal/",
      "Bautista": "https://www.instagram.com/bautista.wav/"
    },
    spotifyArtistas: {
      "Michael": MICHAEL_SPOTIFY,
      "Bautista": BAUTISTA_SPOTIFY
    },
    lineup: ["Michael", "Cele Arrabal", "Bautista"],
    tickets: [
      { tipo: "GENERAL ADMISSION", descripcion: "Acceso general al evento", precio: 350 },
      { tipo: "VIP", descripcion: "Acceso VIP + área exclusiva", precio: 650 }
    ]
  },
  {
    id: "evento-2", slug: "underground-session-cdmx-jul26",
    nombre: "UNDERGROUND SESSION VOL.4",
    fecha: "Sábado 26 Julio 2026", hora: "23:00 — 06:00",
    venue: "El Bunker", direccion: "Col. Doctores, CDMX, México",
    ciudad: "CDMX, México", precioDesde: 250, moneda: "MXN",
    status: "upcoming", lugaresLimitados: false, flyer: null,
    instagramArtistas: {
      "Minow": "https://www.instagram.com/minowmusic/",
      "Gama": "https://www.instagram.com/gamamusicmx/",
      "Boltron": "https://www.instagram.com/boltronmusic/"
    },
    lineup: ["Minow", "Gama", "Boltron"],
    tickets: [
      { tipo: "EARLY BIRD", descripcion: "Preventa limitada", precio: 150 },
      { tipo: "GENERAL", descripcion: "Acceso general", precio: 250 }
    ]
  },
  {
    id: "evento-3", slug: "arrabal-open-air-ago26",
    nombre: "ARRABAL OPEN AIR",
    fecha: "Sábado 8 Agosto 2026", hora: "21:00 — 05:00",
    venue: "Parque Industrial La Mora", direccion: "Av. Solidaridad, Toluca, México",
    ciudad: "Toluca, México", precioDesde: 400, moneda: "MXN",
    status: "upcoming", lugaresLimitados: false, flyer: null,
    instagramArtistas: {
      "Cele Arrabal": "https://www.instagram.com/cele.arrabal/",
      "Boltron": "https://www.instagram.com/boltronmusic/",
      "Michael": "https://www.instagram.com/michaelbmmusic/"
    },
    lineup: ["Cele Arrabal", "Boltron", "Michael"],
    tickets: [
      { tipo: "GENERAL", descripcion: "Acceso general", precio: 400 },
      { tipo: "VIP TABLE", descripcion: "Mesa VIP para 4 personas", precio: 2800 }
    ]
  },
  {
    id: "evento-4", slug: "lhg-showcase-gdl-ago26",
    nombre: "LHG SHOWCASE GDL",
    fecha: "Sábado 22 Agosto 2026", hora: "22:00 — 05:00",
    venue: "Foro 45", direccion: "Av. Américas 1254, Guadalajara, Jalisco",
    ciudad: "Guadalajara, México", precioDesde: 320, moneda: "MXN",
    status: "upcoming", lugaresLimitados: true, flyer: null,
    instagramArtistas: {
      "Michael": "https://www.instagram.com/michaelbmmusic/",
      "Bautista": "https://www.instagram.com/bautista.wav/",
      "Gama": "https://www.instagram.com/gamamusicmx/",
      "Minow": "https://www.instagram.com/minowmusic/"
    },
    spotifyArtistas: {
      "Michael": MICHAEL_SPOTIFY,
      "Bautista": BAUTISTA_SPOTIFY
    },
    lineup: ["Michael", "Bautista", "Gama", "Minow"],
    tickets: [
      { tipo: "PREVENTA", descripcion: "Precio de preventa", precio: 320 },
      { tipo: "TAQUILLA", descripcion: "Precio en puerta", precio: 450 }
    ]
  },
  {
    id: "evento-5", slug: "noche-latina-mty-sep26",
    nombre: "NOCHE LATINA",
    fecha: "Viernes 11 Septiembre 2026", hora: "22:00 — 05:00",
    venue: "Café Iguana", direccion: "Monterrey, Nuevo León, México",
    ciudad: "Monterrey, México", precioDesde: 280, moneda: "MXN",
    status: "upcoming", lugaresLimitados: false, flyer: null,
    instagramArtistas: {
      "Bautista": "https://www.instagram.com/bautista.wav/",
      "Cele Arrabal": "https://www.instagram.com/cele.arrabal/"
    },
    lineup: ["Bautista", "Cele Arrabal"],
    tickets: [
      { tipo: "EARLY BIRD", descripcion: "Preventa limitada", precio: 180 },
      { tipo: "GENERAL", descripcion: "Acceso general", precio: 280 }
    ]
  },
  {
    id: "evento-6", slug: "lhg-vol5-cdmx-oct26",
    nombre: "LHG VOL.5 SHOWCASE",
    fecha: "Sábado 3 Octubre 2026", hora: "22:00 — 06:00",
    venue: "Foro Indie Rocks!", direccion: "Col. Doctores, CDMX, México",
    ciudad: "CDMX, México", precioDesde: 350, moneda: "MXN",
    status: "upcoming", lugaresLimitados: true, flyer: null,
    instagramArtistas: {
      "Michael": "https://www.instagram.com/michaelbmmusic/",
      "Bautista": "https://www.instagram.com/bautista.wav/",
      "Minow": "https://www.instagram.com/minowmusic/",
      "Boltron": "https://www.instagram.com/boltronmusic/",
      "Gama": "https://www.instagram.com/gamamusicmx/",
      "Cele Arrabal": "https://www.instagram.com/cele.arrabal/"
    },
    spotifyArtistas: {
      "Michael": MICHAEL_SPOTIFY,
      "Bautista": BAUTISTA_SPOTIFY
    },
    lineup: ["Michael", "Bautista", "Minow", "Boltron", "Gama", "Cele Arrabal"],
    tickets: [
      { tipo: "GENERAL ADMISSION", descripcion: "Acceso general", precio: 350 },
      { tipo: "VIP", descripcion: "Acceso VIP + área exclusiva", precio: 700 }
    ]
  }
];

// ─── HELPERS ────────────────────────────────────────────
function parseFecha(fechaStr) {
  const months = { 'enero':0,'febrero':1,'marzo':2,'abril':3,'mayo':4,'junio':5,'julio':6,'agosto':7,'septiembre':8,'octubre':9,'noviembre':10,'diciembre':11 };
  const parts = fechaStr.toLowerCase().split(' ');
  const day = parseInt(parts[1]);
  const month = months[parts[2]];
  const year = parseInt(parts[3]);
  return { day, monthName: parts[2].charAt(0).toUpperCase() + parts[2].slice(1), weekday: parts[0].charAt(0).toUpperCase() + parts[0].slice(1), year };
}

// ─── SPOTIFY SVG ────────────────────────────────────────
const SPOTIFY_SVG = `<svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>`;

function initSpotifyIcons() {
  const link = `<a href="${LHG_SPOTIFY}" target="_blank" rel="noopener" aria-label="Spotify en Spotify">${SPOTIFY_SVG}</a>`;
  document.querySelectorAll('.nav-icons, .footer-social, .nav-mobile-icons').forEach(el => {
    el.insertAdjacentHTML('beforeend', link);
  });
}

// ─── NAVBAR ─────────────────────────────────────────────
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 10);
  });

  const hamburger = document.querySelector('.nav-hamburger');
  const mobileMenu = document.querySelector('.nav-mobile-menu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', isOpen);
      const spans = hamburger.querySelectorAll('span');
      if (isOpen) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
      } else {
        spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
      }
    });
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        const spans = hamburger.querySelectorAll('span');
        spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
      });
    });
  }

  // Mark active link
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .nav-mobile-menu a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

// ─── RELEASES GRID ──────────────────────────────────────
function renderReleases(containerId, limit) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const list = limit ? releases.slice(0, limit) : releases;
  container.innerHTML = list.map(r => `
    <a class="release-card" href="${r.listenUrl}" target="_blank" rel="noopener">
      <div class="release-cover-wrap">
        <div class="release-cover" style="background-color:${r.color}">
          <span class="cover-letter">${r.title.charAt(0)}</span>
        </div>
        <div class="release-cover-overlay">
          <span class="overlay-btn">ESCUCHAR</span>
        </div>
      </div>
      <div class="release-info">
        <div class="release-catalog">${r.catalog}</div>
        <div class="release-title">${r.title}</div>
        <div class="release-artist">${r.artist}</div>
      </div>
    </a>
  `).join('');
}

// ─── BLOG GRID ──────────────────────────────────────────
const blogPosts = [
  { category: "RELEASE", date: "Junio 2025", title: "PASKMAN PRESENTA 'CIEMPIÉS' — LHG #027", excerpt: "El productor Paskman debuta en el sello con un track que captura la energía cruda del underground latino.", color: "#E8650A" },
  { category: "RELEASE", date: "Mayo 2025", title: "BAUTISTA LANZA 'LOVER' — LHG #025", excerpt: "Deep house melódico con identidad propia. El segundo release de Bautista en el sello confirma su sonido.", color: "#7AB3D4" },
  { category: "EVENTO", date: "Abril 2025", title: "RECAP: LHG SHOWCASE EN TOLUCA", excerpt: "Más de 400 personas en una noche que definió el sonido del label. Fotos, videos y lo que viene.", color: "#CC2020" },
  { category: "MIX", date: "Marzo 2025", title: "LHG PODCAST 001 · GAMA", excerpt: "Una hora sin concesiones. Gama abre la serie de mixes exclusivos del sello.", color: "#1A6B6B" },
  { category: "NOTICIA", date: "Febrero 2025", title: "LATIN HOUSE GANG VOL.4 YA DISPONIBLE", excerpt: "La cuarta entrega de la compilación insignia del sello. 10 tracks, 8 artistas, un solo sonido.", color: "#CC2020" },
  { category: "EVENTO", date: "Enero 2025", title: "PRIMERA FECHA EN CDMX — 26 JULIO · EL BUNKER", excerpt: "Latin House Gang sale de Toluca. Minow y Gama presentarán material nuevo en el Bunker CDMX.", color: "#5C2D8A" }
];

function renderBlog(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = blogPosts.map(p => `
    <div class="blog-card">
      <div class="blog-cover" style="background-color:${p.color}">
        <span class="blog-cover-letter">${p.title.charAt(0)}</span>
      </div>
      <div class="blog-meta">
        <span class="blog-tag">${p.category}</span>
        <span class="blog-date">${p.date}</span>
      </div>
      <div class="blog-title">${p.title}</div>
      <div class="blog-excerpt">${p.excerpt}</div>
      <span class="blog-read-more">LEER MÁS →</span>
    </div>
  `).join('');
}

// ─── EVENTOS LIST ───────────────────────────────────────
function renderEventos(containerId, limit) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const list = limit ? eventos.slice(0, limit) : eventos;
  container.innerHTML = list.map(e => {
    const f = parseFecha(e.fecha);
    const soldOut = e.status === 'sold-out';
    return `
      <div class="evento-card" data-evento="${e.id}">
        <div class="evento-date-col">
          <span class="evento-day-num">${f.day}</span>
          <span class="evento-month">${f.monthName}</span>
          <span class="evento-weekday">${f.weekday}</span>
        </div>
        <div class="evento-divider"></div>
        <div class="evento-info-col">
          <div class="evento-nombre">${e.nombre}</div>
          <div class="evento-venue">${e.venue} · ${e.ciudad}</div>
          <div class="evento-hora">${e.hora}</div>
          <div class="evento-lineup">
            ${e.lineup.map(a => `<span class="evento-chip">${a}</span>`).join('')}
          </div>
        </div>
        <div class="evento-ticket-col">
          <div class="evento-precio">Desde $${e.precioDesde} ${e.moneda}</div>
          <button class="btn-tickets${soldOut ? '' : ''}"
            ${soldOut ? 'disabled' : ''}
            onclick="openModal('${e.id}'); event.stopPropagation()">
            ${soldOut ? 'AGOTADO' : 'TICKETS'}
          </button>
        </div>
      </div>
    `;
  }).join('');

  container.querySelectorAll('.evento-card').forEach(card => {
    card.addEventListener('click', () => {
      const id = card.dataset.evento;
      window.location.href = `evento-detalle.html?id=${id}`;
    });
  });
}

// ─── MODAL DE TICKETS ───────────────────────────────────
let currentEvento = null;

function openModal(eventoId) {
  currentEvento = eventos.find(e => e.id === eventoId);
  if (!currentEvento) return;

  const overlay = document.getElementById('ticketModal');
  if (!overlay) return;

  overlay.querySelector('.modal-title').textContent = currentEvento.nombre;
  overlay.querySelector('.modal-date').textContent = `${currentEvento.fecha} · ${currentEvento.hora}`;

  const tiersContainer = overlay.querySelector('.modal-tiers');
  tiersContainer.innerHTML = currentEvento.tickets.map((t, i) => `
    <div class="ticket-tier" data-idx="${i}" data-precio="${t.precio}">
      <div>
        <div class="ticket-tier-name">${t.tipo}</div>
        <div class="ticket-tier-desc">${t.descripcion}</div>
      </div>
      <div style="text-align:right">
        <div class="ticket-tier-precio">$${t.precio} MXN</div>
        <div class="qty-selector">
          <button class="qty-btn qty-minus" data-idx="${i}">−</button>
          <span class="qty-value" data-val="0" data-idx="${i}">0</span>
          <button class="qty-btn qty-plus" data-idx="${i}">+</button>
        </div>
      </div>
    </div>
  `).join('');

  tiersContainer.querySelectorAll('.qty-btn').forEach(btn => {
    btn.addEventListener('click', () => updateQty(btn));
  });

  updateTotal();
  overlay.querySelector('.modal-content').style.display = 'block';
  overlay.querySelector('.modal-confirm').style.display = 'none';
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function updateQty(btn) {
  const idx = btn.dataset.idx;
  const valEl = document.querySelector(`.qty-value[data-idx="${idx}"]`);
  let val = parseInt(valEl.dataset.val);
  if (btn.classList.contains('qty-plus')) val = Math.min(10, val + 1);
  else val = Math.max(0, val - 1);
  valEl.dataset.val = val;
  valEl.textContent = val;
  updateTotal();
}

function updateTotal() {
  let total = 0;
  document.querySelectorAll('.qty-value').forEach(el => {
    const idx = parseInt(el.dataset.idx);
    const tier = document.querySelector(`.ticket-tier[data-idx="${idx}"]`);
    const precio = parseInt(tier.dataset.precio);
    total += parseInt(el.dataset.val) * precio;
  });
  const totalEl = document.getElementById('modalTotal');
  if (totalEl) totalEl.textContent = `TOTAL: $${total} MXN`;
  const btnProceder = document.getElementById('btnProceder');
  if (btnProceder) btnProceder.disabled = total === 0;
}

function closeModal() {
  const overlay = document.getElementById('ticketModal');
  if (!overlay) return;
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

function initModal() {
  const overlay = document.getElementById('ticketModal');
  if (!overlay) return;

  overlay.querySelector('.modal-close').addEventListener('click', closeModal);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  const btnProceder = document.getElementById('btnProceder');
  if (btnProceder) {
    btnProceder.addEventListener('click', () => {
      overlay.querySelector('.modal-content').style.display = 'none';
      overlay.querySelector('.modal-confirm').style.display = 'block';
    });
  }

  const btnCerrar = overlay.querySelector('.btn-cerrar-modal');
  if (btnCerrar) btnCerrar.addEventListener('click', closeModal);
}

// ─── GUARDAR EVENTO ─────────────────────────────────────
function initGuardarEvento() {
  const btn = document.querySelector('.btn-guardar');
  if (!btn) return;
  btn.addEventListener('click', () => {
    btn.textContent = '✓ GUARDADO';
    btn.classList.add('guardado');
  });
}

// ─── BOTONES SEGUIR / FOLLOW ────────────────────────────
function initFollowBtns() {
  const btnSeguir = document.getElementById('btnSeguir');
  if (btnSeguir) {
    btnSeguir.addEventListener('click', () => {
      const following = btnSeguir.classList.toggle('siguiendo');
      btnSeguir.textContent = following ? '✓ SIGUIENDO' : 'SEGUIR';
    });
  }
  const btnFollow = document.getElementById('btnFollowOrg');
  if (btnFollow) {
    btnFollow.addEventListener('click', () => {
      const following = btnFollow.classList.toggle('following');
      btnFollow.textContent = following ? '✓ SIGUIENDO' : 'SEGUIR';
    });
  }
}

// ─── CALENDARIO DROPDOWN ────────────────────────────────
function initCalendario() {
  const link = document.querySelector('.link-calendario');
  const dropdown = document.querySelector('.calendario-dropdown');
  if (!link || !dropdown) return;

  link.addEventListener('click', e => {
    e.stopPropagation();
    dropdown.classList.toggle('open');
  });
  document.addEventListener('click', () => dropdown.classList.remove('open'));
  dropdown.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const platform = btn.textContent.trim();
      alert(`En el sitio final esto generará un archivo .ics para ${platform} Calendar`);
      dropdown.classList.remove('open');
    });
  });
}

// ─── SUBMIT FORM ────────────────────────────────────────
function initSubmitForm() {
  const form = document.getElementById('submitForm');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    let valid = true;
    form.querySelectorAll('[required]').forEach(field => {
      field.classList.remove('error');
      if (!field.value.trim()) {
        field.classList.add('error');
        valid = false;
      }
    });
    if (!valid) return;

    form.style.display = 'none';
    const msg = document.getElementById('formSuccess');
    if (msg) { msg.classList.add('show'); }
  });

  form.querySelectorAll('[required]').forEach(field => {
    field.addEventListener('input', () => field.classList.remove('error'));
  });
}

// ─── EVENTO DETALLE PAGE ────────────────────────────────
function initEventoDetalle() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id') || 'evento-1';
  const evento = eventos.find(e => e.id === id) || eventos[0];

  document.title = `${evento.nombre} — Latin House Gang`;

  // Flyer
  const flyerEl = document.querySelector('.flyer-event-name');
  const flyerDate = document.querySelector('.flyer-event-date');
  if (flyerEl) flyerEl.textContent = evento.nombre;
  if (flyerDate) flyerDate.textContent = `${evento.fecha} · ${evento.hora}`;

  // Info
  const nombre = document.querySelector('.evento-detalle-nombre');
  if (nombre) nombre.textContent = evento.nombre;

  const badge = document.querySelector('.badge-lugares');
  if (badge) badge.style.display = evento.lugaresLimitados ? 'inline-block' : 'none';

  const precioPrincipal = document.querySelector('.sticky-precio');
  if (precioPrincipal) precioPrincipal.textContent = `Desde $${evento.precioDesde} MXN`;

  const fechasSticky = document.querySelector('.sticky-fechas');
  if (fechasSticky) fechasSticky.textContent = `${evento.fecha} · ${evento.hora}`;

  // Venue
  const venueName = document.querySelector('.venue-nombre');
  const venueDirec = document.querySelector('.venue-direccion');
  if (venueName) venueName.textContent = evento.venue;
  if (venueDirec) venueDirec.textContent = evento.direccion;

  // Fecha/hora
  const fechaPrincipal = document.querySelector('.fecha-principal');
  const fechaHorario = document.querySelector('.fecha-horario');
  if (fechaPrincipal) fechaPrincipal.textContent = evento.fecha;
  if (fechaHorario) fechaHorario.textContent = evento.hora;

  // Lineup
  const lineupGrid = document.querySelector('.lineup-grid');
  if (lineupGrid) {
    lineupGrid.innerHTML = evento.lineup.map(a => {
      const igUrl  = (evento.instagramArtistas && evento.instagramArtistas[a]) || null;
      const spUrl  = (evento.spotifyArtistas  && evento.spotifyArtistas[a])  || null;
      const socialIcons = [
        igUrl ? `<a href="${igUrl}" target="_blank" rel="noopener" aria-label="Instagram" class="artista-social-link" onclick="event.stopPropagation()">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/></svg>
        </a>` : '',
        spUrl ? `<a href="${spUrl}" target="_blank" rel="noopener" aria-label="Spotify" class="artista-social-link" onclick="event.stopPropagation()">
          ${SPOTIFY_SVG}
        </a>` : ''
      ].join('');
      const mainUrl = spUrl || igUrl || '#';
      return `
        <a class="artista-card" href="${mainUrl}" target="_blank" rel="noopener" style="text-decoration:none">
          <div class="artista-avatar">
            <span class="artista-inicial">${a.charAt(0)}</span>
          </div>
          <span class="artista-nombre">${a}</span>
          <div class="artista-socials">${socialIcons}</div>
        </a>
      `;
    }).join('');
  }

  // Comprar tickets btn
  const btnComprar = document.querySelector('.btn-comprar');
  if (btnComprar) {
    btnComprar.addEventListener('click', () => openModal(evento.id));
  }
}

// ─── INIT ────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  renderReleases('releasesGrid', null);
  renderReleases('releasesGridHome', 8);
  renderBlog('blogGrid');
  renderEventos('eventosListHome', 3);
  renderEventos('eventosListPage', null);
  initSpotifyIcons();
  initModal();
  initGuardarEvento();
  initFollowBtns();
  initCalendario();
  initSubmitForm();

  const isDetalle = document.querySelector('.evento-detalle-flyer');
  if (isDetalle) initEventoDetalle();
});
