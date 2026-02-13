// ================================
// Crochet Pattern Portfolio - OMIE
// Interactive Features & Animations
// ================================
//
// 📸 Want to use your own images?
// See MEDIA_GUIDE.md for complete instructions!
//
// Quick: Replace the Unsplash URLs below with paths to your own images
// Example: 'public/images/gallery/project1.jpg' or keep using Unsplash URLs
// ================================

const CONTACT_EMAIL = 'hello@omie.com';

// ================================
// Performance Utilities
// ================================

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
// Performance Utilities
// ================================

// ================================
// Gallery Data
// ================================

// Updated lookbook structure to support collections with multiple images
// Each project can have a single image or an array of images for book view
// Images from Instagram: https://www.instagram.com/_.jambi_/
// Download your Instagram images and place them in the images/gallery/ folder
// Then update these paths to match your downloaded images
const lookbook = [
  {
    title: 'Beautiful handcrafted creation',
    images: [
      {
        src: 'images/gallery/project1.jpg',
        alt: 'Beautiful handcrafted creation from @_.jambi_'
      }
    ]
  },
  {
    title: 'Stylish handmade piece',
    images: [
      {
        src: 'images/gallery/project2.jpg',
        alt: 'Stylish handmade piece from @_.jambi_'
      }
    ]
  },
  {
    title: 'Handcrafted accessories collection',
    images: [
      {
        src: 'images/gallery/project3.jpg',
        alt: 'Handcrafted accessories from @_.jambi_'
      }
    ]
  },
  {
    title: 'Cozy handmade creation',
    images: [
      {
        src: 'images/gallery/project4.jpg',
        alt: 'Cozy handmade creation from @_.jambi_'
      }
    ]
  },
  {
    title: 'Creative handcrafted work',
    images: [
      {
        src: 'images/gallery/project5.jpg',
        alt: 'Creative handcrafted work from @_.jambi_'
      }
    ]
  },
  {
    title: 'Artistic handmade design',
    images: [
      {
        src: 'images/gallery/project6.jpg',
        alt: 'Artistic handmade design from @_.jambi_'
      }
    ]
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
    this.elements = document.querySelectorAll('.reveal, .scroll-fade-up, .scroll-fade-left, .scroll-fade-right, .scroll-scale, .stagger-item');
    this.init();
  }
  
  init() {
    // Add reveal class to elements that should animate
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
      const children = section.querySelectorAll('h2, .section-subtitle, .about-text, .value-item, .collection-item, .lookbook-item');
      children.forEach(child => {
        if (!child.classList.contains('reveal') && 
            !child.classList.contains('scroll-fade-up') &&
            !child.classList.contains('scroll-fade-left') &&
            !child.classList.contains('scroll-fade-right') &&
            !child.classList.contains('scroll-scale')) {
          child.classList.add('reveal');
        }
      });
    });
    
    // Observe elements with IntersectionObserver for better performance
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
        rootMargin: '0px 0px -100px 0px'
      }
    );
    
    // Observe all animated elements
    this.elements.forEach(el => {
      this.observer.observe(el);
    });
  }
}

// ================================
// Scroll Progress Indicator
// ================================

class ScrollProgress {
  constructor() {
    this.progressBar = document.getElementById('scroll-progress');
    this.init();
  }
  
  init() {
    if (!this.progressBar) return;
    
    const updateProgress = throttle(() => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;
      
      this.progressBar.style.width = `${Math.min(scrollPercent, 100)}%`;
    }, 16);
    
    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();
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
// Lightbox Gallery (Book View)
// ================================

class LightboxGallery {
  constructor() {
    this.currentProject = 0;
    this.currentImage = 0;
    this.modal = null;
    this.init();
  }
  
  init() {
    // Create modal structure
    this.createModal();
    
    // Add event listeners
    this.setupEventListeners();
  }
  
  createModal() {
    const modal = document.createElement('div');
    modal.className = 'lightbox-modal';
    modal.id = 'lightbox-modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-label', 'Image gallery viewer');
    
    modal.innerHTML = `
      <div class="lightbox-overlay"></div>
      <div class="lightbox-content">
        <button class="lightbox-close" aria-label="Close gallery">
          <span class="material-icons">close</span>
        </button>
        
        <button class="lightbox-nav lightbox-prev" aria-label="Previous image">
          <span class="material-icons">chevron_left</span>
        </button>
        
        <div class="lightbox-image-container">
          <img class="lightbox-image" src="" alt="" />
          <div class="lightbox-caption"></div>
        </div>
        
        <button class="lightbox-nav lightbox-next" aria-label="Next image">
          <span class="material-icons">chevron_right</span>
        </button>
        
        <div class="lightbox-indicators"></div>
      </div>
    `;
    
    document.body.appendChild(modal);
    this.modal = modal;
  }
  
  setupEventListeners() {
    // Close button
    const closeBtn = this.modal.querySelector('.lightbox-close');
    closeBtn.addEventListener('click', () => this.close());
    
    // Overlay click to close
    const overlay = this.modal.querySelector('.lightbox-overlay');
    overlay.addEventListener('click', () => this.close());
    
    // Navigation buttons
    const prevBtn = this.modal.querySelector('.lightbox-prev');
    const nextBtn = this.modal.querySelector('.lightbox-next');
    
    prevBtn.addEventListener('click', () => this.previousImage());
    nextBtn.addEventListener('click', () => this.nextImage());
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (!this.modal.classList.contains('active')) return;
      
      switch(e.key) {
        case 'Escape':
          this.close();
          break;
        case 'ArrowLeft':
          this.previousImage();
          break;
        case 'ArrowRight':
          this.nextImage();
          break;
      }
    });
    
    // Touch/swipe support for mobile
    this.setupTouchEvents();
  }
  
  setupTouchEvents() {
    const imageContainer = this.modal.querySelector('.lightbox-image-container');
    let touchStartX = 0;
    let touchEndX = 0;
    
    const handleSwipe = () => {
      const swipeThreshold = 50;
      const diff = touchStartX - touchEndX;
      
      if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
          // Swipe left - next image
          this.nextImage();
        } else {
          // Swipe right - previous image
          this.previousImage();
        }
      }
    };
    
    imageContainer.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    imageContainer.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });
  }
  
  open(projectIndex) {
    this.currentProject = projectIndex;
    this.currentImage = 0;
    
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
    
    // Show modal
    this.modal.classList.add('active');
    
    // Load and display image
    this.updateImage();
    
    // Create indicators
    this.createIndicators();
    
    // Focus trap for accessibility
    this.modal.querySelector('.lightbox-close').focus();
  }
  
  close() {
    this.modal.classList.remove('active');
    document.body.style.overflow = '';
  }
  
  updateImage() {
    const project = lookbook[this.currentProject];
    const image = project.images[this.currentImage];
    
    const imgElement = this.modal.querySelector('.lightbox-image');
    const captionElement = this.modal.querySelector('.lightbox-caption');
    
    // Fade out
    imgElement.style.opacity = '0';
    
    setTimeout(() => {
      imgElement.src = image.src;
      imgElement.alt = image.alt;
      captionElement.textContent = project.title;
      
      // Fade in
      imgElement.style.opacity = '1';
    }, 200);
    
    // Update navigation buttons visibility
    const prevBtn = this.modal.querySelector('.lightbox-prev');
    const nextBtn = this.modal.querySelector('.lightbox-next');
    
    // Show/hide navigation based on image count
    if (project.images.length === 1) {
      prevBtn.style.display = 'none';
      nextBtn.style.display = 'none';
    } else {
      prevBtn.style.display = 'flex';
      nextBtn.style.display = 'flex';
    }
    
    // Update active indicator
    this.updateIndicators();
  }
  
  createIndicators() {
    const project = lookbook[this.currentProject];
    const indicatorsContainer = this.modal.querySelector('.lightbox-indicators');
    
    indicatorsContainer.innerHTML = '';
    
    // Only show indicators if there are multiple images
    if (project.images.length <= 1) {
      indicatorsContainer.style.display = 'none';
      return;
    }
    
    indicatorsContainer.style.display = 'flex';
    
    project.images.forEach((_, index) => {
      const dot = document.createElement('button');
      dot.className = 'lightbox-indicator';
      dot.setAttribute('aria-label', `Go to image ${index + 1}`);
      
      if (index === this.currentImage) {
        dot.classList.add('active');
      }
      
      dot.addEventListener('click', () => {
        this.currentImage = index;
        this.updateImage();
      });
      
      indicatorsContainer.appendChild(dot);
    });
  }
  
  updateIndicators() {
    const indicators = this.modal.querySelectorAll('.lightbox-indicator');
    indicators.forEach((indicator, index) => {
      if (index === this.currentImage) {
        indicator.classList.add('active');
      } else {
        indicator.classList.remove('active');
      }
    });
  }
  
  nextImage() {
    const project = lookbook[this.currentProject];
    
    if (this.currentImage < project.images.length - 1) {
      this.currentImage++;
    } else {
      this.currentImage = 0; // Loop back to first image
    }
    
    this.updateImage();
  }
  
  previousImage() {
    const project = lookbook[this.currentProject];
    
    if (this.currentImage > 0) {
      this.currentImage--;
    } else {
      this.currentImage = project.images.length - 1; // Loop to last image
    }
    
    this.updateImage();
  }
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
  
  lookbook.forEach((project, projectIndex) => {
    const article = document.createElement('article');
    article.className = 'lookbook-item stagger-item';
    
    // Use first image from the collection as thumbnail
    const firstImage = project.images[0];
    const img = document.createElement('img');
    img.src = firstImage.src;
    img.alt = firstImage.alt;
    img.loading = 'lazy';
    
    // Add click handler to open lightbox
    article.style.cursor = 'pointer';
    article.setAttribute('role', 'button');
    article.setAttribute('tabindex', '0');
    article.setAttribute('aria-label', `View ${project.title}`);
    
    article.addEventListener('click', () => {
      if (window.lightboxGallery) {
        window.lightboxGallery.open(projectIndex);
      }
    });
    
    // Add keyboard support for accessibility
    article.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        if (window.lightboxGallery) {
          window.lightboxGallery.open(projectIndex);
        }
      }
    });
    
    // Add collection indicator if project has multiple images
    if (project.images.length > 1) {
      const indicator = document.createElement('div');
      indicator.className = 'collection-indicator';
      indicator.setAttribute('aria-label', `${project.images.length} images in collection`);
      
      const icon = document.createElement('span');
      icon.className = 'material-icons';
      icon.textContent = 'collections';
      
      const count = document.createElement('span');
      count.className = 'count';
      count.textContent = project.images.length;
      
      indicator.appendChild(icon);
      indicator.appendChild(count);
      article.appendChild(indicator);
    }
    
    article.appendChild(img);
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

// Hide loading screen after page loads
window.addEventListener('load', () => {
  const LOADING_SCREEN_MIN_DURATION = 500; // Minimum time to show loading screen (ms)
  const LOADING_SCREEN_FADE_DURATION = 500; // Time for fade-out animation (ms)
  
  const loadingScreen = document.getElementById('loading-screen');
  if (loadingScreen) {
    // Add a small delay to ensure smooth transition
    setTimeout(() => {
      loadingScreen.classList.add('hidden');
      
      // Remove from DOM after animation completes
      setTimeout(() => {
        loadingScreen.remove();
      }, LOADING_SCREEN_FADE_DURATION);
    }, LOADING_SCREEN_MIN_DURATION);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  // Set current year in footer
  document.getElementById('year').textContent = new Date().getFullYear();
  
  // Render content
  renderLookbook();
  setupContactForm();
  setupSmoothScroll();
  
  // Initialize features
  new Slideshow();
  new ScrollAnimations();
  new ScrollProgress();
  new ParallaxEffect();
  new HeaderScroll();
  new MobileMenu();
  
  // Initialize lightbox gallery (stored globally for access from renderLookbook)
  window.lightboxGallery = new LightboxGallery();
  
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
