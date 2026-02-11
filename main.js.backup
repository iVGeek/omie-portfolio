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
function el(tag, attrs, children) {
  var n = document.createElement(tag);
  if (attrs) {
    for (var k of Object.keys(attrs)) {
      if (k === 'class') n.className = attrs[k];
      else n.setAttribute(k, attrs[k]);
    }
  }
  if (children) children.forEach(function(c) { if (c) n.appendChild(c); });
  return n;
}

function renderProjects() {
  var grid = document.getElementById('projects-grid');
  if (!grid) return;
  grid.innerHTML = '';
  projects.forEach(function(p) {
    var card = el('article', { class: 'project' });
    var img = el('img', { src: p.img, alt: p.alt || p.title, loading: 'lazy', decoding: 'async' });
    var h3 = el('h3'); h3.textContent = p.title;
    var pdesc = el('p'); pdesc.textContent = p.desc;
    card.appendChild(img);
    card.appendChild(h3);
    card.appendChild(pdesc);
    grid.appendChild(card);
  });
}

function renderGallery() {
  var grid = document.getElementById('gallery-grid');
  if (!grid) return;
  grid.innerHTML = '';
  gallery.forEach(function(item) {
    var card = el('article', { class: 'project' });
    if (item.type === 'video') {
      var v = el('video', { controls: '', src: item.src, preload: 'metadata' });
      if (item.poster) v.setAttribute('poster', item.poster);
      card.appendChild(v);
    } else {
      var img = el('img', { src: item.src, alt: item.alt || '', loading: 'lazy', decoding: 'async' });
      card.appendChild(img);
    }
    grid.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  // populate content
  renderProjects();
  renderGallery();
  document.getElementById('year').textContent = new Date().getFullYear();

  // update email link
  var emailLink = document.getElementById('contact-email-link');
  if (emailLink) emailLink.href = 'mailto:' + CONTACT_EMAIL;

  // copy-email button
  var copyBtn = document.getElementById('copy-email');
  if (copyBtn) {
    copyBtn.addEventListener('click', function() {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(CONTACT_EMAIL).then(function() {
          var prev = copyBtn.textContent;
          copyBtn.textContent = 'Copied!';
          setTimeout(function() { copyBtn.textContent = prev; }, 1500);
        }).catch(function() {
          window.location.href = 'mailto:' + CONTACT_EMAIL;
        });
      } else {
        window.location.href = 'mailto:' + CONTACT_EMAIL;
      }
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

  // Header scroll behavior — change header shadow and cycle accent color based on scroll percentage
  var header = document.getElementById('header');
  function updateHeader() {
    if (window.scrollY > 10) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // dynamic accent color based on scroll position across document height
    var docHeight = document.documentElement.scrollHeight - window.innerHeight;
    var ratio = docHeight > 0 ? (window.scrollY / docHeight) : 0;
    var idx = Math.floor(ratio * navbarThemeColors.length);
    var color = navbarThemeColors[Math.min(idx, navbarThemeColors.length - 1)];
    // set CSS custom property for any components that want accent (not necessary but available)
    document.documentElement.style.setProperty('--accent-current', color);
  }
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });
});
