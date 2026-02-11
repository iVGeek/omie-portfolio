// main.js — Omie Fashion Atelier
// Renders collections, lookbook, press sections; handles scroll and animations

const CONTACT_EMAIL = 'hello@omie.example';

// ── Data ────────────────────────────────────────────

const collections = [
  {
    title: 'Petal Noir',
    desc: 'Spring / Summer 2025',
    gradient: 'linear-gradient(160deg, #f5e6e0 0%, #e8cfc7 50%, #c9a09a 100%)'
  },
  {
    title: 'Golden Hour',
    desc: 'Resort Collection',
    gradient: 'linear-gradient(160deg, #f5e6e0 0%, #d4836d 60%, #c9a09a 100%)'
  },
  {
    title: 'Ivory Dreams',
    desc: 'Bridal Capsule',
    gradient: 'linear-gradient(160deg, #faf4f2 0%, #f5e6e0 50%, #e8cfc7 100%)'
  },
  {
    title: 'Dusk Rose',
    desc: 'Autumn / Winter 2025',
    gradient: 'linear-gradient(160deg, #e8cfc7 0%, #c9a09a 50%, #8a7e7a 100%)'
  },
  {
    title: 'La Lumière',
    desc: 'Evening Wear',
    gradient: 'linear-gradient(160deg, #c9a09a 0%, #d4836d 50%, #2c2421 100%)'
  },
  {
    title: 'Soft Silhouettes',
    desc: 'Ready-to-Wear',
    gradient: 'linear-gradient(160deg, #faf4f2 0%, #e8cfc7 60%, #d4836d 100%)'
  }
];

const lookbookItems = [
  { gradient: 'linear-gradient(135deg, #f5e6e0, #c9a09a)', alt: 'Editorial lookbook — flowing silk gown' },
  { gradient: 'linear-gradient(135deg, #e8cfc7, #d4836d)', alt: 'Editorial lookbook — tailored blazer' },
  { gradient: 'linear-gradient(135deg, #faf4f2, #e8cfc7)', alt: 'Editorial lookbook — evening dress' },
  { gradient: 'linear-gradient(135deg, #c9a09a, #8a7e7a)', alt: 'Editorial lookbook — accessories' },
  { gradient: 'linear-gradient(135deg, #d4836d, #c9a09a)', alt: 'Editorial lookbook — bridal collection' }
];

const pressItems = [
  { title: 'Vogue', desc: '"A fresh voice in modern luxury — elegant restraint at its finest."' },
  { title: 'Harper\'s Bazaar', desc: '"The new standard for understated sophistication."' },
  { title: 'Elle', desc: '"Omie redefines timeless femininity with a contemporary edge."' },
  { title: 'W Magazine', desc: '"Quietly powerful — each collection tells a story."' }
];

// ── Helpers ─────────────────────────────────────────

function el(tag, attrs, children) {
  const n = document.createElement(tag);
  if (attrs) {
    for (const k of Object.keys(attrs)) {
      if (k === 'class') n.className = attrs[k];
      else n.setAttribute(k, attrs[k]);
    }
  }
  if (children) children.forEach(function(c) { n.appendChild(c); });
  return n;
}

// ── Render Collections ──────────────────────────────

function renderCollections() {
  var grid = document.getElementById('collections-grid');
  if (!grid) return;
  grid.innerHTML = '';
  collections.forEach(function(item, i) {
    var card = el('article', { class: 'collection-card fade-in' });

    var placeholder = el('div', {
      class: 'collection-placeholder',
      role: 'img',
      'aria-label': item.title + ' — ' + item.desc,
      style: 'background: ' + item.gradient + ';'
    });

    var overlay = el('div', { class: 'collection-card-overlay' });
    var h3 = el('h3');
    h3.textContent = item.title;
    var p = el('p');
    p.textContent = item.desc;
    overlay.appendChild(h3);
    overlay.appendChild(p);

    card.appendChild(placeholder);
    card.appendChild(overlay);
    grid.appendChild(card);
  });
}

// ── Render Lookbook ─────────────────────────────────

function renderLookbook() {
  var grid = document.getElementById('lookbook-grid');
  if (!grid) return;
  grid.innerHTML = '';
  lookbookItems.forEach(function(item) {
    var wrapper = el('div', { class: 'lookbook-item fade-in' });

    var placeholder = el('div', {
      class: 'lookbook-placeholder',
      role: 'img',
      'aria-label': item.alt,
      style: 'background: ' + item.gradient + ';'
    });

    wrapper.appendChild(placeholder);
    grid.appendChild(wrapper);
  });
}

// ── Render Press ────────────────────────────────────

function renderPress() {
  var grid = document.getElementById('press-grid');
  if (!grid) return;
  grid.innerHTML = '';
  pressItems.forEach(function(item) {
    var card = el('article', { class: 'press-item' });
    var h3 = el('h3');
    h3.textContent = item.title;
    var p = el('p');
    p.textContent = item.desc;
    card.appendChild(h3);
    card.appendChild(p);
    grid.appendChild(card);
  });
}

// ── Intersection Observer for fade-in ───────────────

function initFadeIn() {
  var targets = document.querySelectorAll('.fade-in');
  if (!('IntersectionObserver' in window)) {
    targets.forEach(function(t) { t.classList.add('visible'); });
    return;
  }
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  targets.forEach(function(t) { observer.observe(t); });
}

// ── Init ────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', function() {
  renderCollections();
  renderLookbook();
  renderPress();
  document.getElementById('year').textContent = new Date().getFullYear();

  // Update email link
  var emailLink = document.getElementById('contact-email-link');
  if (emailLink) emailLink.href = 'mailto:' + CONTACT_EMAIL;

  // Contact form submission
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      var data = new FormData(form);
      var subject = data.get('subject') || 'Portfolio Inquiry';
      var body = 'Name: ' + data.get('name') + '\n\n' + data.get('message');
      window.location.href = 'mailto:' + CONTACT_EMAIL + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    });
  }

  // Mobile menu toggle
  var mobileBtn = document.getElementById('mobile-menu-btn');
  var mobileMenu = document.getElementById('mobile-menu');
  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', function() {
      var expanded = mobileBtn.getAttribute('aria-expanded') === 'true';
      mobileBtn.setAttribute('aria-expanded', String(!expanded));
      mobileMenu.hidden = expanded;
    });
  }

  // Header scroll behavior
  var header = document.getElementById('header');
  function updateHeader() {
    if (window.scrollY > 10) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  // Initialize fade-in animations
  initFadeIn();
});
