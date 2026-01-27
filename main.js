// main.js — themed to match Omie
// Header scroll color change and project/gallery rendering
// CONTACT_EMAIL is single source for contact email

const CONTACT_EMAIL = 'hello@omie.example'; // change to your email

// Color palette (same order used in Omie for header transitions)
const navbarThemeColors = [
  '#FF7F50', // Orange Sunset
  '#FF99C8', // Pink Sorbet
  '#FFD166', // Warm Yellow
  '#7FD8B0', // Mint
  '#B393FF'  // Lavender (optional)
];

// Placeholder projects and gallery — use your media in public/images/
const projects = [
  {
    title: 'Blue Set',
    desc: 'Handcrafted blue crochet set with matching bag.',
    img: 'public/images/photo1.jpg',
    alt: 'Blue handcrafted crochet set with matching bag'
  },
  {
    title: 'Pink Romper',
    desc: 'Handcrafted pink crochet romper with floral detail.',
    img: 'public/images/photo2.jpg',
    alt: 'Pink crochet romper styled with floral detail'
  },
  {
    title: 'Sunny Set',
    desc: 'Yellow & orange crochet set with garden styling.',
    img: 'public/images/photo3.jpg',
    alt: 'Yellow and orange crochet set, portrait in garden'
  }
];

const gallery = [
  { type: 'image', src: 'public/images/photo1.jpg', alt: 'Blue handcrafted crochet set' },
  { type: 'image', src: 'public/images/photo2.jpg', alt: 'Pink crochet romper' },
  { type: 'image', src: 'public/images/photo3.jpg', alt: 'Yellow & orange crochet set' }
];

// Simple DOM helper
function el(tag, attrs = {}, children = []) {
  const n = document.createElement(tag);
  for (const k of Object.keys(attrs)) {
    if (k === 'class') n.className = attrs[k];
    else if (k === 'html') n.innerHTML = attrs[k];
    else n.setAttribute(k, attrs[k]);
  }
  children.forEach(c => n.appendChild(c));
  return n;
}

function renderProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;
  grid.innerHTML = '';
  projects.forEach(p => {
    const card = el('article', { class: 'project' });
    const img = el('img', { src: p.img, alt: p.alt || p.title, loading: 'lazy', decoding: 'async' });
    const h3 = el('h3'); h3.textContent = p.title;
    const pdesc = el('p'); pdesc.textContent = p.desc;
    card.appendChild(img);
    card.appendChild(h3);
    card.appendChild(pdesc);
    grid.appendChild(card);
  });
}

function renderGallery() {
  const grid = document.getElementById('gallery-grid');
  if (!grid) return;
  grid.innerHTML = '';
  gallery.forEach(item => {
    const card = el('article', { class: 'project' });
    if (item.type === 'video') {
      const v = el('video', { controls: '', src: item.src, preload: 'metadata' });
      if (item.poster) v.setAttribute('poster', item.poster);
      card.appendChild(v);
    } else {
      const img = el('img', { src: item.src, alt: item.alt || '', loading: 'lazy', decoding: 'async' });
      card.appendChild(img);
    }
    grid.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  // populate content
  renderProjects();
  renderGallery();
  document.getElementById('year').textContent = new Date().getFullYear();

  // update email link
  const emailLink = document.getElementById('contact-email-link');
  if (emailLink) emailLink.href = `mailto:${CONTACT_EMAIL}`;

  // copy-email button
  const copyBtn = document.getElementById('copy-email');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      navigator.clipboard?.writeText(CONTACT_EMAIL).then(() => {
        const prev = copyBtn.textContent;
        copyBtn.textContent = 'Copied!';
        setTimeout(() => copyBtn.textContent = prev, 1500);
      }).catch(() => {
        window.location.href = `mailto:${CONTACT_EMAIL}`;
      });
    });
  }

  // Mobile menu toggle
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => {
      const expanded = mobileBtn.getAttribute('aria-expanded') === 'true';
      mobileBtn.setAttribute('aria-expanded', String(!expanded));
      if (expanded) {
        mobileMenu.hidden = true;
      } else {
        mobileMenu.hidden = false;
      }
    });
  }

  // Header scroll behavior — change header shadow and cycle accent color based on scroll percentage
  const header = document.getElementById('header');
  const hero = document.getElementById('hero');
  function updateHeader() {
    const scrolled = window.scrollY > 10;
    if (scrolled) header.classList.add('scrolled');
    else header.classList.remove('scrolled');

    // dynamic accent color based on scroll position across document height
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = docHeight > 0 ? (window.scrollY / docHeight) : 0;
    const idx = Math.floor(ratio * navbarThemeColors.length);
    const color = navbarThemeColors[Math.min(idx, navbarThemeColors.length - 1)];
    // set CSS custom property for any components that want accent (not necessary but available)
    document.documentElement.style.setProperty('--accent-current', color);
  }
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });
});
