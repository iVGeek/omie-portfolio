// ================================
// Modern Fashion Portfolio - Omie
// Interactive Features & Animations
// ================================

const CONTACT_EMAIL = 'hello@omie.example';

// ================================
// Collections Data
// ================================

const collections = [
  {
    title: 'Urban Edge',
    desc: 'Contemporary streetwear with bold silhouettes',
    img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80',
    alt: 'Urban fashion collection'
  },
  {
    title: 'Neon Dreams',
    desc: 'Vibrant colors meet modern minimalism',
    img: 'https://images.unsplash.com/photo-1544441893-675973e31985?w=800&q=80',
    alt: 'Neon fashion collection'
  },
  {
    title: 'Midnight Luxe',
    desc: 'Elegant evening wear with dramatic flair',
    img: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800&q=80',
    alt: 'Luxury evening wear'
  },
  {
    title: 'Summer Breeze',
    desc: 'Light, flowing designs for warm days',
    img: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=80',
    alt: 'Summer fashion collection'
  },
  {
    title: 'Bold Statement',
    desc: 'Eye-catching pieces that demand attention',
    img: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=800&q=80',
    alt: 'Statement fashion pieces'
  },
  {
    title: 'Minimal Chic',
    desc: 'Timeless elegance in every detail',
    img: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&q=80',
    alt: 'Minimal chic collection'
  }
];

// ================================
// Lookbook Data
// ================================

const lookbook = [
  {
    src: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&q=80',
    alt: 'Editorial fashion moment 1'
  },
  {
    src: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80',
    alt: 'Editorial fashion moment 2'
  },
  {
    src: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80',
    alt: 'Editorial fashion moment 3'
  },
  {
    src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80',
    alt: 'Editorial fashion moment 4'
  },
  {
    src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1000&q=80',
    alt: 'Editorial fashion moment 5'
  },
  {
    src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1000&q=80',
    alt: 'Editorial fashion moment 6'
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
    
    window.addEventListener('scroll', () => {
      this.elements.forEach(el => {
        const speed = el.dataset.speed || 0.5;
        const rect = el.getBoundingClientRect();
        const scrolled = window.pageYOffset;
        const rate = scrolled * speed;
        
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.style.transform = `translateY(${rate}px)`;
        }
      });
    }, { passive: true });
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
    
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        this.header.classList.add('scrolled');
      } else {
        this.header.classList.remove('scrolled');
      }
    }, { passive: true });
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
  
  grid.innerHTML = '';
  
  collections.forEach((item, index) => {
    const article = document.createElement('article');
    article.className = 'collection-item reveal';
    article.style.animationDelay = `${index * 0.1}s`;
    
    const img = document.createElement('img');
    img.src = item.img;
    img.alt = item.alt;
    img.loading = 'lazy';
    
    const overlay = document.createElement('div');
    overlay.className = 'collection-overlay';
    
    const title = document.createElement('h3');
    title.textContent = item.title;
    
    const desc = document.createElement('p');
    desc.textContent = item.desc;
    
    overlay.appendChild(title);
    overlay.appendChild(desc);
    article.appendChild(img);
    article.appendChild(overlay);
    grid.appendChild(article);
  });
}

// ================================
// Render Lookbook
// ================================

function renderLookbook() {
  const grid = document.getElementById('lookbook-grid');
  if (!grid) return;
  
  grid.innerHTML = '';
  
  lookbook.forEach((item, index) => {
    const article = document.createElement('article');
    article.className = 'lookbook-item reveal';
    article.style.animationDelay = `${index * 0.15}s`;
    
    const img = document.createElement('img');
    img.src = item.src;
    img.alt = item.alt;
    img.loading = 'lazy';
    
    article.appendChild(img);
    grid.appendChild(article);
  });
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
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const headerHeight = document.getElementById('header').offsetHeight;
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
