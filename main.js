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
// Gallery Data
// ================================

// Gallery organized by categories
// Each category contains multiple images
// Note: 'images/' is a symlink to 'public/images/', both paths work
const galleryCategories = [
  {
    name: 'Pinkie Flamingo',
    color: '#FF1493', // Deep pink
    bgColor: 'linear-gradient(135deg, rgba(255, 20, 147, 0.1) 0%, rgba(255, 182, 193, 0.1) 100%)',
    images: [
      { src: 'images/gallery/Pinkie Flamingo/539967597_18081547793302431_3448890780171806210_n.jpg', alt: 'Pinkie Flamingo design' },
      { src: 'images/gallery/Pinkie Flamingo/540011953_18081547697302431_1005875501831294864_n.jpg', alt: 'Pinkie Flamingo design' },
      { src: 'images/gallery/Pinkie Flamingo/540036594_18081547706302431_7862490469488856780_n.jpg', alt: 'Pinkie Flamingo design' },
      { src: 'images/gallery/Pinkie Flamingo/540046590_18081547715302431_7480653551078539801_n.jpg', alt: 'Pinkie Flamingo design' },
      { src: 'images/gallery/Pinkie Flamingo/540109803_18081547742302431_312412726075327105_n.jpg', alt: 'Pinkie Flamingo design' },
      { src: 'images/gallery/Pinkie Flamingo/557345373_18085136189302431_4090076875377072997_n.jpg', alt: 'Pinkie Flamingo design' },
      { src: 'images/gallery/Pinkie Flamingo/557413552_18085136102302431_8716580283757432743_n.jpg', alt: 'Pinkie Flamingo design' },
      { src: 'images/gallery/Pinkie Flamingo/557413555_18085136114302431_8515872593961169212_n.jpg', alt: 'Pinkie Flamingo design' },
      { src: 'images/gallery/Pinkie Flamingo/557438844_18085136153302431_7665076335401273258_n.jpg', alt: 'Pinkie Flamingo design' }
    ]
  },
  {
    name: 'Red Ruby',
    color: '#DC143C', // Crimson red
    bgColor: 'linear-gradient(135deg, rgba(220, 20, 60, 0.1) 0%, rgba(255, 99, 71, 0.1) 100%)',
    images: [
      { src: 'images/gallery/Red Ruby/558688219_18085136123302431_6779459226908578350_n.jpg', alt: 'Red Ruby design' },
      { src: 'images/gallery/Red Ruby/558845894_18085136171302431_5383694440068152323_n.jpg', alt: 'Red Ruby design' },
      { src: 'images/gallery/Red Ruby/558943227_18085136162302431_817826934527130040_n.jpg', alt: 'Red Ruby design' },
      { src: 'images/gallery/Red Ruby/559299844_18085136132302431_164314802719577659_n.jpg', alt: 'Red Ruby design' },
      { src: 'images/gallery/Red Ruby/568117746_18088496120302431_916359807911567279_n.jpg', alt: 'Red Ruby design' },
      { src: 'images/gallery/Red Ruby/568256074_18088496129302431_614153971394619769_n.jpg', alt: 'Red Ruby design' },
      { src: 'images/gallery/Red Ruby/569011936_18088496138302431_2913682672152415748_n.jpg', alt: 'Red Ruby design' },
      { src: 'images/gallery/Red Ruby/569762971_18088496174302431_7102191316536323537_n.jpg', alt: 'Red Ruby design' }
    ]
  },
  {
    name: 'Sunset Hues',
    color: '#FF6600', // Vibrant orange
    bgColor: 'linear-gradient(135deg, rgba(255, 102, 0, 0.1) 0%, rgba(255, 165, 0, 0.1) 100%)',
    images: [
      { src: 'images/gallery/Sunset Hues/587524949_18092088908302431_8400526806509945507_n.jpg', alt: 'Sunset Hues design' },
      { src: 'images/gallery/Sunset Hues/587776088_18092088851302431_7481810639402148416_n.jpg', alt: 'Sunset Hues design' },
      { src: 'images/gallery/Sunset Hues/587819190_18092088881302431_8808916453267266553_n.jpg', alt: 'Sunset Hues design' },
      { src: 'images/gallery/Sunset Hues/588222810_18092088869302431_3178962861210220183_n.jpg', alt: 'Sunset Hues design' },
      { src: 'images/gallery/Sunset Hues/589121556_18092088899302431_7696768615798332121_n.jpg', alt: 'Sunset Hues design' },
      { src: 'images/gallery/Sunset Hues/589135600_18092088824302431_4450958026945299115_n.jpg', alt: 'Sunset Hues design' },
      { src: 'images/gallery/Sunset Hues/589197219_18092088833302431_7027825451325369358_n.jpg', alt: 'Sunset Hues design' },
      { src: 'images/gallery/Sunset Hues/611266862_18096171110302431_1325073686730851317_n.jpg', alt: 'Sunset Hues design' }
    ]
  },
  {
    name: 'Purple Elegance',
    color: '#9370DB', // Medium purple
    bgColor: 'linear-gradient(135deg, rgba(147, 112, 219, 0.1) 0%, rgba(186, 85, 211, 0.1) 100%)',
    images: [
      { src: 'images/gallery/Purple Elegance/611630562_18096171164302431_7630117364178829182_n.jpg', alt: 'Purple Elegance design' },
      { src: 'images/gallery/Purple Elegance/611714281_18096171128302431_1163567786338715110_n.jpg', alt: 'Purple Elegance design' },
      { src: 'images/gallery/Purple Elegance/612074427_18096171137302431_3163465707956930400_n.jpg', alt: 'Purple Elegance design' },
      { src: 'images/gallery/Purple Elegance/612105075_18096171119302431_3615833347089412139_n.jpg', alt: 'Purple Elegance design' },
      { src: 'images/gallery/Purple Elegance/612129224_18096171191302431_1984634528210182916_n.jpg', alt: 'Purple Elegance design' },
      { src: 'images/gallery/Purple Elegance/612238180_18096171146302431_6260479965133691207_n.jpg', alt: 'Purple Elegance design' },
      { src: 'images/gallery/Purple Elegance/project1.jpg', alt: 'Purple Elegance design' },
      { src: 'images/gallery/Purple Elegance/project2.jpg', alt: 'Purple Elegance design' },
      { src: 'images/gallery/Purple Elegance/project3.jpg', alt: 'Purple Elegance design' },
      { src: 'images/gallery/Purple Elegance/project4.jpg', alt: 'Purple Elegance design' },
      { src: 'images/gallery/Purple Elegance/project5.jpg', alt: 'Purple Elegance design' },
      { src: 'images/gallery/Purple Elegance/project6.jpg', alt: 'Purple Elegance design' }
    ]
  }
];

// Legacy support - convert categories to old lookbook format for lightbox
const lookbook = [];

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
// Gallery State Management
// ================================

let currentView = 'categories'; // 'categories' or 'images'
let currentCategory = null;
let currentCategoryImages = []; // Store current category images for lightbox

// ================================
// Render Gallery
// ================================

function renderGallery() {
  const grid = document.getElementById('lookbook-grid');
  if (!grid) return;
  
  // Clear existing content first
  grid.innerHTML = '';
  
  if (currentView === 'categories') {
    // Reset body background when viewing categories
    document.body.style.background = 'var(--bg-white)';
    document.body.style.transition = 'background 0.6s ease';
    renderCategories(grid);
  } else {
    renderCategoryImages(grid);
  }
}

function renderCategories(grid) {
  // Use DocumentFragment for efficient DOM manipulation
  const fragment = document.createDocumentFragment();
  
  galleryCategories.forEach((category, categoryIndex) => {
    const article = document.createElement('article');
    article.className = 'lookbook-item category-item stagger-item';
    
    // Use first image from the category as thumbnail
    const firstImage = category.images[0];
    const img = document.createElement('img');
    img.src = firstImage.src;
    img.alt = `${category.name} category`;
    img.loading = 'lazy';
    
    // Add category name overlay
    const overlay = document.createElement('div');
    overlay.className = 'category-overlay';
    
    const categoryName = document.createElement('h3');
    categoryName.className = 'category-name';
    categoryName.textContent = category.name;
    
    const imageCount = document.createElement('p');
    imageCount.className = 'category-count';
    imageCount.textContent = `${category.images.length} ${category.images.length === 1 ? 'image' : 'images'}`;
    
    overlay.appendChild(categoryName);
    overlay.appendChild(imageCount);
    
    // Add click handler to show category images
    article.style.cursor = 'pointer';
    article.setAttribute('role', 'button');
    article.setAttribute('tabindex', '0');
    article.setAttribute('aria-label', `View ${category.name} category`);
    
    article.addEventListener('click', () => {
      currentView = 'images';
      currentCategory = categoryIndex;
      renderGallery();
      
      // Scroll to gallery section
      document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
    });
    
    // Add keyboard support for accessibility
    article.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        currentView = 'images';
        currentCategory = categoryIndex;
        renderGallery();
        
        // Scroll to gallery section
        document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
      }
    });
    
    article.appendChild(img);
    article.appendChild(overlay);
    fragment.appendChild(article);
  });
  
  // Single DOM update
  grid.appendChild(fragment);
}

function renderCategoryImages(grid) {
  if (currentCategory === null) {
    currentView = 'categories';
    renderCategories(grid);
    return;
  }
  
  const category = galleryCategories[currentCategory];
  
  // Apply category-specific background color to body
  if (category.bgColor) {
    document.body.style.background = category.bgColor;
    document.body.style.transition = 'background 0.6s ease';
  }
  
  // Create back button
  const backButton = document.createElement('button');
  backButton.className = 'back-to-categories btn btn-secondary';
  backButton.innerHTML = '<span class="material-icons">arrow_back</span> Back to Categories';
  backButton.addEventListener('click', () => {
    currentView = 'categories';
    currentCategory = null;
    renderGallery();
  });
  
  const backContainer = document.createElement('div');
  backContainer.className = 'back-button-container';
  backContainer.appendChild(backButton);
  grid.appendChild(backContainer);
  
  // Create category title
  const titleContainer = document.createElement('div');
  titleContainer.className = 'category-title-container';
  const title = document.createElement('h3');
  title.className = 'current-category-title';
  title.textContent = category.name;
  titleContainer.appendChild(title);
  grid.appendChild(titleContainer);
  
  // Use DocumentFragment for efficient DOM manipulation
  const fragment = document.createDocumentFragment();
  
  // Build category images array and update lookbook for lightbox compatibility
  // The lookbook array must be updated for the existing lightbox gallery to function
  // Create a single project with all images in the category
  const categoryProject = {
    title: category.name,
    images: category.images
  };
  
  // Update global lookbook array (required by LightboxGallery class)
  lookbook.length = 0;
  lookbook.push(categoryProject);
  
  category.images.forEach((image, imageIndex) => {
    const article = document.createElement('article');
    article.className = 'lookbook-item stagger-item';
    
    const img = document.createElement('img');
    img.src = image.src;
    img.alt = image.alt;
    img.loading = 'lazy';
    
    // Add click handler to open lightbox
    article.style.cursor = 'pointer';
    article.setAttribute('role', 'button');
    article.setAttribute('tabindex', '0');
    article.setAttribute('aria-label', `View ${category.name} image ${imageIndex + 1}`);
    
    article.addEventListener('click', () => {
      if (window.lightboxGallery) {
        // Open the first (and only) project in lookbook, but start at the clicked image
        window.lightboxGallery.currentProject = 0;
        window.lightboxGallery.currentImage = imageIndex;
        window.lightboxGallery.open(0);
      }
    });
    
    // Add keyboard support for accessibility
    article.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        if (window.lightboxGallery) {
          // Open the first (and only) project in lookbook, but start at the clicked image
          window.lightboxGallery.currentProject = 0;
          window.lightboxGallery.currentImage = imageIndex;
          window.lightboxGallery.open(0);
        }
      }
    });
    
    article.appendChild(img);
    fragment.appendChild(article);
  });
  
  // Single DOM update
  grid.appendChild(fragment);
}

// Legacy function name support
function renderLookbook() {
  renderGallery();
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
