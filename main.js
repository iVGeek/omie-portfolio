/* main.js
   Populates projects and gallery, improves accessibility and performance.
   - Uses CONTACT_EMAIL as single source for contact address
   - Adds loading="lazy" and decoding="async" to non-hero images
   - Safe: does not identify people in images in alt text
*/

const CONTACT_EMAIL = 'hello@omie.example'; // change to your email

// Projects (placeholders) - include descriptive alt text (non-identifying)
const projects = [
  {
    title: "Blue Set",
    desc: "Handcrafted blue crochet set with matching bag.",
    img: "public/images/photo1.jpg",
    alt: "Blue handcrafted crochet set with matching bag, outdoor photo",
    url: "#"
  },
  {
    title: "Pink Romper",
    desc: "Handcrafted pink crochet romper with floral detail.",
    img: "public/images/photo2.jpg",
    alt: "Pink crochet romper styled with floral detail, outdoor photo",
    url: "#"
  },
  {
    title: "Sunny Set",
    desc: "Yellow and orange crochet set, bright garden styling.",
    img: "public/images/photo3.jpg",
    alt: "Yellow and orange crochet set, portrait in garden",
    url: "#"
  }
];

// Gallery items (images & optional videos)
const gallery = [
  { type: 'image', src: 'public/images/photo1.jpg', alt: 'Blue handcrafted crochet set with matching bag' },
  { type: 'image', src: 'public/images/photo2.jpg', alt: 'Pink crochet romper with floral detail' },
  { type: 'image', src: 'public/images/photo3.jpg', alt: 'Yellow and orange crochet set portrait' }
  // Add videos like: { type: 'video', src: 'public/videos/video1.mp4', poster: 'public/images/photo1.jpg' }
];

function el(tag, attrs = {}, children = []) {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === 'class') node.className = v;
    else if (k === 'html') node.innerHTML = v;
    else node.setAttribute(k, v);
  }
  children.forEach(c => node.appendChild(c));
  return node;
}

function renderProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;
  grid.innerHTML = '';
  projects.forEach(p => {
    const card = el('article', { class: 'project' });
    const img = el('img', {
      src: p.img,
      alt: p.alt || p.title,
      loading: 'lazy',
      decoding: 'async'
    });
    const title = el('h3', {}, []);
    title.textContent = p.title;
    const desc = el('p', {}, []);
    desc.textContent = p.desc;
    const link = el('a', { href: p.url || '#', rel: 'noopener noreferrer', target: '_blank' }, []);
    link.textContent = 'View project →';
    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(desc);
    card.appendChild(link);
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
      const video = el('video', {
        controls: '',
        src: item.src,
        poster: item.poster || '',
        preload: 'metadata'
      });
      card.appendChild(video);
    } else {
      const img = el('img', {
        src: item.src,
        alt: item.alt || '',
        loading: 'lazy',
        decoding: 'async'
      });
      card.appendChild(img);
    }
    grid.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  // Populate content
  renderProjects();
  renderGallery();
  document.getElementById('year').textContent = new Date().getFullYear();

  // Wire copy email button
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

  // Update the email link in about section (if present)
  const emailLink = document.getElementById('contact-email-link');
  if (emailLink) emailLink.href = `mailto:${CONTACT_EMAIL}`;

  // Contact form behaviour: we keep mailto fallback but notify user
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      // With mailto action the browser opens the mail client.
      // If you replace action with a Formspree endpoint, remove this behavior.
      // Provide simple confirmation feedback to the user.
      setTimeout(() => {
        // no-op: mail client opened; optionally show a notification if you use AJAX
      }, 150);
    });
  }
});
