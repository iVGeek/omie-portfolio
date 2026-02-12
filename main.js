// ================================
// Crochet Pattern Portfolio - OMIE
// Interactive Features & Animations
// ================================
//
// 📸 Want to use your own images?
// See MEDIA_GUIDE.md for complete instructions!
//
// Quick: Replace the Unsplash URLs below with paths to your own images
// OR use Instagram post URLs to embed Instagram content
// Example: 'public/images/patterns/sweaters.jpg'
// Instagram: Use instagram: prefix like 'instagram:POST_ID' or full URL
// ================================

const CONTACT_EMAIL = 'hello@omie.com';

// ================================
// Performance Utilities
// ================================

/**
 * Check if a URL is an Instagram post
 * @param {string} url - URL or identifier to check
 * @returns {boolean|string} False if not Instagram, or post ID if it is
 */
function isInstagramPost(url) {
  if (!url) return false;
  
  // Handle shorthand format: instagram:POST_ID
  if (url.startsWith('instagram:')) {
    return url.substring(10);
  }
  
  // Handle full Instagram URL
  const instagramRegex = /(?:https?:\/\/)?(?:www\.)?instagram\.com\/p\/([A-Za-z0-9_-]+)/;
  const match = url.match(instagramRegex);
  return match ? match[1] : false;
}

/**
 * Get Instagram embed URL from post ID
 * @param {string} postId - Instagram post ID
 * @returns {string} Embed URL
 */
function getInstagramEmbedUrl(postId) {
  return `https://www.instagram.com/p/${postId}/embed/`;
}

/**
 * Throttle function to limit execution rate
 * @param {Function} fn - Function to throttle
 * @param {number} delay - Minimum delay between executions in ms
 * @returns {Function} Throttled function
 */
function throttle(fn, delay) {
  let lastRun = 0;
  return function(...args) {
    const now = Date.now();
    if (now - lastRun >= delay) {
      fn.apply(this, args);
      lastRun = now;
    }
  };
}

// ================================
// Crochet Patterns Data
// ================================
// 
// Image URLs can be:
// - Regular image URLs: 'https://...' or 'public/images/...'
// - Instagram post URLs: Full Instagram URL like 'https://www.instagram.com/p/POST_ID/'
// - Instagram shorthand: 'instagram:POST_ID' (will be converted to embed URL)

const collections = [
  {
    title: 'Cozy Sweaters',
    desc: 'Warm, comfortable sweater patterns for all seasons',
    img: 'https://images.unsplash.com/photo-1614963326505-842876ff4238?w=800&q=80',
    alt: 'Crochet sweater pattern'
  },
  {
    title: 'Stylish Cardigans',
    desc: 'Versatile cardigan designs from casual to elegant',
    // Example: Instagram post - replace with your actual Instagram post URL
    // img: 'https://www.instagram.com/p/YOUR_POST_ID/',
    img: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80',
    alt: 'Crochet cardigan pattern'
  },
  {
    title: 'Accessories',
    desc: 'Scarves, hats, bags and more for every occasion',
    img: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&q=80',
    alt: 'Crochet accessories'
  },
  {
    title: 'Baby & Kids',
    desc: 'Adorable patterns for little ones',
    img: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800&q=80',
    alt: 'Baby crochet patterns'
  },
  {
    title: 'Home Decor',
    desc: 'Beautiful blankets, pillows and decorative pieces',
    img: 'https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?w=800&q=80',
    alt: 'Crochet home decor'
  },
  {
    title: 'Amigurumi',
    desc: 'Cute stuffed animals and character designs',
    img: 'https://images.unsplash.com/photo-1611849583569-7a1a8f4d0f7e?w=800&q=80',
    alt: 'Amigurumi patterns'
  }
];

// ================================
// Project Gallery Data
// ================================
//
// Images can be:
// - Regular image URLs: 'https://...' or 'public/images/...'
// - Instagram post URLs: Full Instagram URL like 'https://www.instagram.com/p/POST_ID/'
// - Instagram shorthand: 'instagram:POST_ID' (will be converted to embed URL)

const lookbook = [
  {
    src: 'https://images.unsplash.com/photo-1614963326505-842876ff4238?w=1200&q=80',
    alt: 'Beautiful crochet sweater project'
  },
  {
    // Example: Instagram post - replace with your actual Instagram post URL
    // src: 'instagram:YOUR_POST_ID',
    src: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80',
    alt: 'Stylish crochet cardigan'
  },
  {
    src: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&q=80',
    alt: 'Crochet accessories collection'
  },
  {
    src: 'https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?w=800&q=80',
    alt: 'Cozy crochet blanket'
  },
  {
    src: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=1000&q=80',
    alt: 'Baby crochet items'
  },
  {
    src: 'https://images.unsplash.com/photo-1611849583569-7a1a8f4d0f7e?w=1000&q=80',
    alt: 'Amigurumi creations'
  }
];

// ================================
// Hero Slideshow
// ================================

class Slideshow {
  constructor() {
    this.slides = document.querySelectorAll('.slide');
    this.indicators = document.querySelectorAll('.indicator');
    this.prevBtn = document.querySelector('.slide-btn.prev');
    this.nextBtn = document.querySelector('.slide-btn.next');
    this.currentSlide = 0;
    this.autoplayInterval = null;
    
    this.init();
  }
  
  init() {
    if (this.slides.length === 0) return;
    
    // Start autoplay
    this.startAutoplay();
    
    // Add event listeners
    this.prevBtn?.addEventListener('click', () => this.previousSlide());
    this.nextBtn?.addEventListener('click', () => this.nextSlide());
    
    this.indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => this.goToSlide(index));
    });
    
    // Pause on hover
    const heroSection = document.querySelector('.hero-slideshow');
    heroSection?.addEventListener('mouseenter', () => this.stopAutoplay());
    heroSection?.addEventListener('mouseleave', () => this.startAutoplay());
  }
  
  goToSlide(index) {
    this.slides[this.currentSlide].classList.remove('active');
    this.indicators[this.currentSlide]?.classList.remove('active');
    
    this.currentSlide = index;
    
    this.slides[this.currentSlide].classList.add('active');
    this.indicators[this.currentSlide]?.classList.add('active');
  }
  
  nextSlide() {
    const next = (this.currentSlide + 1) % this.slides.length;
    this.goToSlide(next);
  }
  
  previousSlide() {
    const prev = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    this.goToSlide(prev);
  }
  
  startAutoplay() {
    this.autoplayInterval = setInterval(() => this.nextSlide(), 5000);
  }
  
  stopAutoplay() {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
      this.autoplayInterval = null;
    }
  }
}

// ================================
// Scroll Animations
// ================================

class ScrollAnimations {
  constructor() {
    this.elements = document.querySelectorAll('.reveal');
    this.init();
  }
  
  init() {
    // Add reveal class to elements that should animate
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
      const children = section.querySelectorAll('h2, .section-subtitle, .about-text, .value-item, .collection-item, .lookbook-item');
      children.forEach(child => {
        if (!child.classList.contains('reveal')) {
          child.classList.add('reveal');
        }
      });
    });
    
    // Observe elements
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );
    
    document.querySelectorAll('.reveal').forEach(el => {
      this.observer.observe(el);
    });
  }
}

// ================================
// Parallax Effect
// ================================

class ParallaxEffect {
  constructor() {
    this.elements = document.querySelectorAll('.parallax-element');
    this.init();
  }
  
  init() {
    if (this.elements.length === 0) return;
    
    // Use throttle to limit scroll handler execution to ~60fps
    const handleScroll = throttle(() => {
      this.elements.forEach(el => {
        const speed = el.dataset.speed || 0.5;
        const rect = el.getBoundingClientRect();
        const scrolled = window.pageYOffset;
        const rate = scrolled * speed;
        
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.style.transform = `translateY(${rate}px)`;
        }
      });
    }, 16); // ~60fps
    
    window.addEventListener('scroll', handleScroll, { passive: true });
  }
}

// ================================
// Header Scroll Effect
// ================================

class HeaderScroll {
  constructor() {
    this.header = document.getElementById('header');
    this.init();
  }
  
  init() {
    if (!this.header) return;
    
    // Use requestAnimationFrame for smooth, optimized DOM updates
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (window.scrollY > 50) {
            this.header.classList.add('scrolled');
          } else {
            this.header.classList.remove('scrolled');
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
  }
}

// ================================
// Mobile Menu
// ================================

class MobileMenu {
  constructor() {
    this.menuBtn = document.getElementById('mobile-menu-btn');
    this.mobileMenu = document.getElementById('mobile-menu');
    this.init();
  }
  
  init() {
    if (!this.menuBtn || !this.mobileMenu) return;
    
    this.menuBtn.addEventListener('click', () => {
      const isExpanded = this.menuBtn.getAttribute('aria-expanded') === 'true';
      this.menuBtn.setAttribute('aria-expanded', String(!isExpanded));
      this.mobileMenu.hidden = isExpanded;
    });
    
    // Close menu when clicking a link
    const links = this.mobileMenu.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', () => {
        this.menuBtn.setAttribute('aria-expanded', 'false');
        this.mobileMenu.hidden = true;
      });
    });
  }
}

// ================================
// Render Collections
// ================================

function renderCollections() {
  const grid = document.getElementById('collections-grid');
  if (!grid) return;
  
  // Clear existing content first
  grid.innerHTML = '';
  
  // Use DocumentFragment for efficient DOM manipulation
  const fragment = document.createDocumentFragment();
  
  collections.forEach((item, index) => {
    const article = document.createElement('article');
    article.className = 'collection-item reveal';
    article.style.animationDelay = `${index * 0.1}s`;
    
    const postId = isInstagramPost(item.img);
    
    if (postId) {
      // Create Instagram embed
      const iframe = document.createElement('iframe');
      iframe.src = getInstagramEmbedUrl(postId);
      iframe.className = 'instagram-embed';
      iframe.setAttribute('frameborder', '0');
      iframe.setAttribute('scrolling', 'no');
      iframe.setAttribute('allowtransparency', 'true');
      iframe.setAttribute('loading', 'lazy');
      article.appendChild(iframe);
    } else {
      // Create regular image
      const img = document.createElement('img');
      img.src = item.img;
      img.alt = item.alt;
      img.loading = 'lazy';
      article.appendChild(img);
    }
    
    const overlay = document.createElement('div');
    overlay.className = 'collection-overlay';
    
    const title = document.createElement('h3');
    title.textContent = item.title;
    
    const desc = document.createElement('p');
    desc.textContent = item.desc;
    
    overlay.appendChild(title);
    overlay.appendChild(desc);
    article.appendChild(overlay);
    fragment.appendChild(article);
  });
  
  // Single DOM update
  grid.appendChild(fragment);
}

// ================================
// Render Lookbook
// ================================

function renderLookbook() {
  const grid = document.getElementById('lookbook-grid');
  if (!grid) return;
  
  // Clear existing content first
  grid.innerHTML = '';
  
  // Use DocumentFragment for efficient DOM manipulation
  const fragment = document.createDocumentFragment();
  
  lookbook.forEach((item, index) => {
    const article = document.createElement('article');
    article.className = 'lookbook-item reveal';
    article.style.animationDelay = `${index * 0.15}s`;
    
    const postId = isInstagramPost(item.src);
    
    if (postId) {
      // Create Instagram embed
      const iframe = document.createElement('iframe');
      iframe.src = getInstagramEmbedUrl(postId);
      iframe.className = 'instagram-embed';
      iframe.setAttribute('frameborder', '0');
      iframe.setAttribute('scrolling', 'no');
      iframe.setAttribute('allowtransparency', 'true');
      iframe.setAttribute('loading', 'lazy');
      article.appendChild(iframe);
    } else {
      // Create regular image
      const img = document.createElement('img');
      img.src = item.src;
      img.alt = item.alt;
      img.loading = 'lazy';
      article.appendChild(img);
    }
    
    fragment.appendChild(article);
  });
  
  // Single DOM update
  grid.appendChild(fragment);
}

// ================================
// Contact Form
// ================================

function setupContactForm() {
  const emailLink = document.getElementById('contact-email-link');
  if (emailLink) {
    emailLink.href = `mailto:${CONTACT_EMAIL}`;
    emailLink.textContent = CONTACT_EMAIL;
  }
  
  const copyBtn = document.getElementById('copy-email');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(CONTACT_EMAIL)
          .then(() => {
            const originalText = copyBtn.textContent;
            copyBtn.textContent = 'Copied!';
            setTimeout(() => {
              copyBtn.textContent = originalText;
            }, 2000);
          })
          .catch(() => {
            window.location.href = `mailto:${CONTACT_EMAIL}`;
          });
      } else {
        window.location.href = `mailto:${CONTACT_EMAIL}`;
      }
    });
  }
}

// ================================
// Smooth Scroll
// ================================

function setupSmoothScroll() {
  // Cache header element for better performance
  const header = document.getElementById('header');
  if (!header) return;
  
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const headerHeight = header.offsetHeight;
        const targetPosition = target.offsetTop - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// ================================
// Initialize Everything
// ================================

document.addEventListener('DOMContentLoaded', () => {
  // Set current year in footer
  document.getElementById('year').textContent = new Date().getFullYear();
  
  // Render content
  renderCollections();
  renderLookbook();
  setupContactForm();
  setupSmoothScroll();
  
  // Initialize features
  new Slideshow();
  new ScrollAnimations();
  new ParallaxEffect();
  new HeaderScroll();
  new MobileMenu();
  
  // Add loading complete class
  setTimeout(() => {
    document.body.classList.add('loaded');
  }, 100);
});

// ================================
// Performance: Lazy load images
// ================================

if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        }
        observer.unobserve(img);
      }
    });
  });
  
  // Observe images with data-src attribute
  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
}
