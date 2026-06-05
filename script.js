// ─── SOCIAL LINKS ───────────────────────────────────────
const LHG_SPOTIFY   = "https://open.spotify.com/intl-es/artist/7L2xCq0Mc82JvdEYFydl9H";
const LHG_INSTAGRAM = "https://www.instagram.com/latinhousegangmusic/";

// ─── ARTISTS ────────────────────────────────────────────
// Note: instagram null/# = no confirmed IG → icon is hidden
const artists = [
  { name: "MichaelBM",      aliases: ["Michael"],
    instagram: "https://www.instagram.com/michaelbmmusic/",
    spotify:   "https://open.spotify.com/intl-es/artist/6RY7vqzR938x0DE0Eh6srl",
    apple:     "https://music.apple.com/mx/artist/michaelbm/1016031177" },
  { name: "Bautista",       aliases: [],
    instagram: "https://www.instagram.com/bautista.wav/",
    spotify:   "https://open.spotify.com/intl-es/artist/5oryDmGJCySSpMFY9YUeb1",
    apple:     "https://music.apple.com/mx/artist/bautista/1533307995" },
  { name: "Cele Arrabal",   aliases: [],
    instagram: null,   // no IG confirmed — icon hidden
    spotify:   "https://open.spotify.com/intl-es/artist/36GC5ob1mWpu07UpvMAYnl",
    apple:     "https://music.apple.com/mx/artist/cele-arrabal/1515168401" },
  { name: "Paskman",        aliases: [],
    instagram: null,   // no IG confirmed — icon hidden
    spotify:   "https://open.spotify.com/intl-es/artist/53WBL9mWs6KRVyrWBB6Fen",
    apple:     "https://music.apple.com/mx/artist/paskman/1449989316" },
  { name: "Minow",          aliases: [],
    instagram: "https://www.instagram.com/minowmusic/",
    spotify:   "https://open.spotify.com/intl-es/artist/4z5hE5cqCfTsCZ60IVAgRC",
    apple:     "https://music.apple.com/mx/artist/minow/1041611713" },
  { name: "Boltron",        aliases: [],
    instagram: "https://www.instagram.com/boltronmusic/",
    spotify:   "https://open.spotify.com/intl-es/artist/4yiUOYE4qfKINbGjeePqiG",
    apple:     "https://music.apple.com/mx/artist/boltron/1535833423" },
  { name: "Gama",           aliases: [],
    instagram: "https://www.instagram.com/gamamusicmx/",
    spotify:   "https://open.spotify.com/intl-es/artist/4z5hE5cqCfTsCZ60IVAgRC",
    apple:     "https://music.apple.com/mx/artist/gama/193501778" },
  { name: "House Music Bro",aliases: [],
    instagram: "https://www.instagram.com/housemusicbro/",
    spotify:   "https://open.spotify.com/intl-es/artist/70s7RdFqr3UEBlooMGUQdO",
    apple:     "https://music.apple.com/mx/artist/house-music-bro/1527524092" }
];

// Build lookup map (name + aliases)
const artistMap = {};
artists.forEach(a => {
  artistMap[a.name] = a;
  a.aliases.forEach(alias => { artistMap[alias] = a; });
});

function getArtistLink(name, type) {
  const a = artistMap[name];
  if (!a) return null;
  const val = a[type];
  return (val && val !== '#') ? val : null;
}

// ─── DATA — RELEASES ────────────────────────────────────
const releases = [
  // ── NUEVOS con portadas reales (archivos locales) ──
  {
    catalog: "LHG #029", title: "Britney", artist: "Cele Arrabal", year: "2026",
    coverUrl: "/covers/BRITNEY_cover.jpg",
    appleUrl: "https://music.apple.com/mx/album/britney-single/1886458544",
    spotifyUrl: "https://open.spotify.com/intl-es/album/2waAf6LbGfTHBWgd5KChKE"
  },
  {
    catalog: "LHG #028", title: "Barranquilla", artist: "Jayie · MichaelBM · Vika", year: "2026",
    coverUrl: "/covers/BARRANQUILLA_cover.jpg",
    appleUrl: "https://music.apple.com/mx/album/barranquilla-single/1889300875",
    spotifyUrl: "https://open.spotify.com/intl-es/album/1xGLKYqMuN7Cm37vL1XxBv"
  },
  {
    catalog: "LHG #023", title: "Popper (Alta Gama)", artist: "MichaelBM · Freenzy · Barbara Doza", year: "2025",
    coverUrl: "/covers/POPPER_cover.jpg",
    appleUrl: "https://music.apple.com/mx/album/popper-alta-gama-single/1856919367",
    spotifyUrl: "https://open.spotify.com/intl-es/album/3wZmJlW1xeFZMBcz6IQWaF"
  },
  // ── Con portada de Apple Music CDN ──
  {
    catalog: "LHG #027", title: "Latin House Gang Vol.4", artist: "Various Artists", year: "2026",
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/e9/4f/a5/e94fa523-1a34-89e4-95ef-2a78269ed494/cover.jpg/600x600bf-60.jpg",
    appleUrl: "https://music.apple.com/mx/album/latin-house-gang-vol-4/1889233062",
    spotifyUrl: "https://open.spotify.com/intl-es/album/4yBJXYf5bAcrxcrYYgJBq0"
  },
  {
    catalog: "LHG #026", title: "Ciempiés", artist: "Paskman", year: "2026",
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/d2/1f/ac/d21fac81-3c72-fc41-fffd-de8613386069/cover.jpg/600x600bf-60.jpg",
    appleUrl: "https://music.apple.com/mx/album/ciempi%C3%A9s-single/1884037374",
    spotifyUrl: null
  },
  {
    catalog: "LHG #025", title: "Lover", artist: "Bautista", year: "2026",
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/74/7a/32/747a3273-994d-0989-40bf-e2f7867668d1/cover.jpg/600x600bf-60.jpg",
    appleUrl: "https://music.apple.com/mx/album/lover-single/1874009473",
    spotifyUrl: null
  },
  {
    catalog: "LHG #024", title: "Diabolica", artist: "Kofla · Rob Session · Marin", year: "2026",
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/90/49/15/9049153d-a5d7-5f16-7c5c-60dcff61afaf/cover.jpg/600x600bf-60.jpg",
    appleUrl: "https://music.apple.com/mx/album/diabolica-single/1859209334",
    spotifyUrl: "https://open.spotify.com/intl-es/album/5FJdmzVzZDxrFWopCoyaaY"
  },
  {
    catalog: "LHG #022", title: "Latin House Gang Vol.3", artist: "Various Artists", year: "2025",
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/48/33/34/48333404-8fe5-8acd-be8b-881129bef7c9/cover.jpg/600x600bf-60.jpg",
    appleUrl: "https://music.apple.com/mx/album/latin-house-gang-vol-3/1848993532",
    spotifyUrl: "https://open.spotify.com/intl-es/album/65WNZY2whziZrGu3KOSump"
  }
  // "Perfect Alibi" eliminado del catálogo
];

// Eventos en Toluca eliminados hasta tener fechas reales confirmadas
const eventos = [
  {
    id: "evento-1",
    nombre: "UNDERGROUND SESSION VOL.3",
    fecha: "Sábado 26 Julio 2025", hora: "23:00 — 06:00",
    venue: "El Bunker", direccion: "Col. Doctores, CDMX, México",
    ciudad: "CDMX, México", precioDesde: 280, moneda: "MXN",
    status: "upcoming", lugaresLimitados: false, flyer: null,
    lineup: ["Minow", "Gama"],
    tickets: [
      { tipo: "EARLY BIRD", descripcion: "Preventa limitada", precio: 180 },
      { tipo: "GENERAL",    descripcion: "Acceso general",    precio: 280 }
    ]
  },
  {
    id: "evento-2",
    nombre: "LHG SHOWCASE",
    fecha: "Sábado 23 Agosto 2025", hora: "22:00 — 05:00",
    venue: "Foro 45", direccion: "Av. Américas 1254, Guadalajara, Jalisco",
    ciudad: "Guadalajara, México", precioDesde: 320, moneda: "MXN",
    status: "upcoming", lugaresLimitados: true, flyer: null,
    lineup: ["MichaelBM", "Bautista", "Gama", "Minow"],
    tickets: [
      { tipo: "PREVENTA", descripcion: "Precio de preventa", precio: 320 },
      { tipo: "TAQUILLA", descripcion: "Precio en puerta",   precio: 450 }
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
  return { day, month, monthName: parts[2].charAt(0).toUpperCase() + parts[2].slice(1), weekday: parts[0].charAt(0).toUpperCase() + parts[0].slice(1), year };
}

// ─── SPOTIFY SVG ────────────────────────────────────────
const SPOTIFY_SVG = `<svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>`;

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
  container.innerHTML = list.map(r => {
    const coverHtml = r.coverUrl
      ? `<img src="${r.coverUrl}" alt="${r.title}" loading="lazy" class="release-cover-img">`
      : `<div class="release-cover-placeholder" style="background-color:${r.color || '#333'}">
           <span class="cover-letter">${r.title.charAt(0)}</span>
         </div>`;

    const spBtn = r.spotifyUrl
      ? `<a href="${r.spotifyUrl}" target="_blank" rel="noopener" class="overlay-btn overlay-btn-spotify" onclick="event.stopPropagation()">
           <svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>
           SPOTIFY
         </a>` : '';

    return `
      <div class="release-card" onclick="window.open('${r.appleUrl}','_blank')" role="button" tabindex="0">
        <div class="release-cover-wrap">
          ${coverHtml}
          <div class="release-cover-overlay" onclick="event.stopPropagation()">
            <a href="${r.appleUrl}" target="_blank" rel="noopener" class="overlay-btn overlay-btn-apple">
              <svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
              APPLE MUSIC
            </a>
            ${spBtn}
          </div>
        </div>
        <div class="release-info">
          <div class="release-catalog">${r.catalog}</div>
          <div class="release-title">${r.title}</div>
          <div class="release-artist">${r.artist}</div>
        </div>
      </div>`;
  }).join('');
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

  const closeBtn = document.getElementById('btnModalClose') || overlay.querySelector('.modal-close');
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  const btnProceder = document.getElementById('btnProceder');
  if (btnProceder) {
    btnProceder.addEventListener('click', () => {
      const s1 = document.getElementById('modalStep1') || overlay.querySelector('.modal-content');
      const s2 = document.getElementById('modalStep2') || overlay.querySelector('.modal-confirm');
      if (s1) s1.style.display = 'none';
      if (s2) s2.style.display = 'block';
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
  const setEl = (sel, val) => { const el = document.getElementById(sel); if (el) el.textContent = val; };
  setEl('edNombre', evento.nombre);
  const f = parseFecha(evento.fecha);
  const monthNums = {'enero':'01','febrero':'02','marzo':'03','abril':'04','mayo':'05','junio':'06','julio':'07','agosto':'08','septiembre':'09','octubre':'10','noviembre':'11','diciembre':'12'};
  const partsF = evento.fecha.toLowerCase().split(' ');
  const mmStr = monthNums[partsF[2]] || '??';
  setEl('edFechaFlyer', `${String(f.day).padStart(2,'0')}.${mmStr}.${String(f.year).slice(2)} · ${evento.ciudad.toUpperCase()}`);

  // Marquee
  const marquee = document.getElementById('edMarquee');
  if (marquee) {
    const txt = `${evento.nombre} &nbsp;·&nbsp; ${evento.fecha} &nbsp;·&nbsp; ${evento.venue} &nbsp;·&nbsp; ${evento.ciudad} &nbsp;·&nbsp;&nbsp;`;
    marquee.innerHTML = `<span>${txt}</span><span>${txt}</span>`;
  }

  // Badge
  const badge = document.getElementById('edBadge');
  if (badge) badge.style.display = evento.lugaresLimitados ? 'inline-block' : 'none';

  // Title
  setEl('edTitulo', evento.nombre);

  // Org stats
  setEl('edOrgStats', `· ${evento.ciudad} · desde 2019`);

  // Sticky box
  setEl('edPrecio', `Desde $${evento.precioDesde} ${evento.moneda}`);
  setEl('edFechaSticky', `${f.monthName.slice(0,3)} ${f.day} · ${evento.hora}`);

  // Venue & address
  const addressParts = evento.direccion.split(',');
  setEl('edVenue', evento.venue);
  setEl('edDir1', addressParts[0]?.trim() || evento.direccion);
  setEl('edDir2', addressParts.slice(1).join(',').trim() || evento.ciudad);

  // Fecha/hora section
  setEl('edFechaPrincipal', evento.fecha);
  setEl('edHora', `${evento.hora} hrs`);

  // Lineup
  const lineupGrid = document.getElementById('lineupGrid');
  if (lineupGrid) {
    lineupGrid.innerHTML = evento.lineup.map(a => {
      const igUrl = getArtistLink(a, 'instagram');
      const spUrl = getArtistLink(a, 'spotify');
      const apUrl = getArtistLink(a, 'apple');
      const mainUrl = igUrl || spUrl || apUrl || '#';
      const socialIcons = [
        igUrl ? `<a href="${igUrl}" target="_blank" rel="noopener" aria-label="Instagram" class="artista-social-link" onclick="event.stopPropagation()">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="15" height="15"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/></svg></a>` : '',
        spUrl ? `<a href="${spUrl}" target="_blank" rel="noopener" aria-label="Spotify" class="artista-social-link" onclick="event.stopPropagation()">${SPOTIFY_SVG}</a>` : ''
      ].join('');
      return `
        <div class="artista-card" onclick="window.open('${mainUrl}','_blank')" role="link" tabindex="0">
          <div class="artista-avatar"><span class="artista-inicial">${a.charAt(0)}</span></div>
          <span class="artista-nombre">${a}</span>
          <div class="artista-socials">${socialIcons}<span class="artista-arrow">›</span></div>
        </div>`;
    }).join('');
  }

  // Comprar tickets
  const btnComprar = document.getElementById('btnComprar');
  if (btnComprar) btnComprar.addEventListener('click', () => openModal(evento.id));
}

// ─── INIT ────────────────────────────────────────────────
function init() {
  initNavbar();
  renderReleases('releasesGridHome', 9);  // home: todos los releases
  renderBlog('blogGrid');
  renderEventos('eventosListHome', 3);
  renderEventos('eventosListPage', null);
  initSpotifyIcons();
  initModal();
  initGuardarEvento();
  initFollowBtns();
  initCalendario();
  initSubmitForm();

  if (document.getElementById('edFlyer')) initEventoDetalle();
}

// Funciona tanto si el script carga antes como después del DOM
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
