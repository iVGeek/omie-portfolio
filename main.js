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
// Each category contains multiple images with rich metadata
// Note: 'images/' directory at root, all image paths use 'images/' prefix
const galleryCategories = [
  {
    name: 'Pinkie Flamingo',
    description: 'A vibrant collection featuring playful pink hues, perfect for bold and cheerful designs',
    materials: 'Premium cotton yarn, cotton stuffing',
    techniques: 'Blending traditional crochet techniques with modern color aesthetics',
    inspiration: 'Inspired by the graceful beauty of flamingos and tropical sunsets',
    color: '#FF1493', // Deep pink
    bgColor: 'linear-gradient(135deg, rgba(255, 20, 147, 0.1) 0%, rgba(255, 182, 193, 0.1) 100%)',
    images: [
      { src: 'images/gallery/Pinkie Flamingo/pink-flamingo-01.jpg', alt: 'Pinkie Flamingo handcrafted design' },
      { src: 'images/gallery/Pinkie Flamingo/pink-flamingo-02.jpg', alt: 'Pinkie Flamingo detailed view' },
      { src: 'images/gallery/Pinkie Flamingo/pink-flamingo-03.jpg', alt: 'Pinkie Flamingo artistic arrangement' },
      { src: 'images/gallery/Pinkie Flamingo/pink-flamingo-08.jpg', alt: 'Pinkie Flamingo bold statement' },
    ]
  },
  {
    name: 'Red Ruby',
    description: 'Bold crimson designs that capture attention with rich, luxurious red tones',
    materials: 'High-quality acrylic blend, reinforced stitching',
    techniques: 'Advanced stitch work combining texture and depth',
    inspiration: 'Drawing from the timeless elegance of precious rubies',
    color: '#DC143C', // Crimson red
    bgColor: 'linear-gradient(135deg, rgba(220, 20, 60, 0.1) 0%, rgba(255, 99, 71, 0.1) 100%)',
    images: [
      { src: 'images/gallery/Red Ruby/red-ruby-01.jpg', alt: 'Red Ruby elegant design' },
      { src: 'images/gallery/Red Ruby/red-ruby-02.jpg', alt: 'Red Ruby luxurious creation' },
      { src: 'images/gallery/Red Ruby/red-ruby-03.jpg', alt: 'Red Ruby detailed craftsmanship' },
      { src: 'images/gallery/Red Ruby/red-ruby-04.jpg', alt: 'Red Ruby bold statement piece' },
      { src: 'images/gallery/Red Ruby/red-ruby-05.jpg', alt: 'Red Ruby rich textures' },
      { src: 'images/gallery/Red Ruby/red-ruby-06.jpg', alt: 'Red Ruby vibrant artwork' },
      { src: 'images/gallery/Red Ruby/red-ruby-07.jpg', alt: 'Red Ruby handcrafted beauty' },
    ]
  },
  {
    name: 'Sunset Hues',
    description: 'Warm orange tones reminiscent of golden sunsets and cozy autumn evenings',
    materials: 'Soft merino wool, natural dyes',
    techniques: 'Color gradient work and intricate pattern blending',
    inspiration: 'Capturing the warm glow of sunset over the African savanna',
    color: '#FF6600', // Vibrant orange
    bgColor: 'linear-gradient(135deg, rgba(255, 102, 0, 0.1) 0%, rgba(255, 165, 0, 0.1) 100%)',
    images: [
      { src: 'images/gallery/Sunset Hues/sunset-hues-01.jpg', alt: 'Sunset Hues warm design' },
      { src: 'images/gallery/Sunset Hues/sunset-hues-02.jpg', alt: 'Sunset Hues golden creation' },
      { src: 'images/gallery/Sunset Hues/sunset-hues-03.jpg', alt: 'Sunset Hues artistic blend' },
      { src: 'images/gallery/Sunset Hues/sunset-hues-04.jpg', alt: 'Sunset Hues cozy masterpiece' },
      { src: 'images/gallery/Sunset Hues/sunset-hues-05.jpg', alt: 'Sunset Hues vibrant artwork' },
      { src: 'images/gallery/Sunset Hues/sunset-hues-06.jpg', alt: 'Sunset Hues autumn beauty' },
      { src: 'images/gallery/Sunset Hues/sunset-hues-07.jpg', alt: 'Sunset Hues handcrafted design' },
    ]
  },
  {
    name: 'Purple Elegance',
    description: 'Sophisticated purple designs that embody grace and refined artistry',
    materials: 'Silk-blend yarn, delicate finishing',
    techniques: 'Fine detail work with elegant stitch patterns',
    inspiration: 'Inspired by royal elegance and the beauty of lavender fields',
    color: '#9370DB', // Medium purple
    bgColor: 'linear-gradient(135deg, rgba(147, 112, 219, 0.1) 0%, rgba(186, 85, 211, 0.1) 100%)',
    images: [
      { src: 'images/gallery/Purple Elegance/purple-elegance-13.jpg', alt: 'Purple Elegance charming design' },
    ]
  },
  {
    name: 'Blue Serenity',
    description: 'Calming blue designs that bring tranquility and peaceful elegance',
    materials: 'Soft cotton-blend yarn, gentle textures',
    techniques: 'Smooth stitch patterns with serene color blending',
    inspiration: 'Inspired by clear skies, ocean waves, and peaceful waters',
    color: '#4169E1', // Royal blue
    bgColor: 'linear-gradient(135deg, rgba(65, 105, 225, 0.1) 0%, rgba(135, 206, 250, 0.1) 100%)',
    images: [
      { src: 'images/gallery/Blue Serenity/blue-serenity-01.jpg', alt: 'Blue Serenity tranquil design' },
      { src: 'images/gallery/Blue Serenity/blue-serenity-02.jpg', alt: 'Blue Serenity peaceful creation' },
      { src: 'images/gallery/Blue Serenity/blue-serenity-03.jpg', alt: 'Blue Serenity calming artwork' },
      { src: 'images/gallery/Blue Serenity/blue-serenity-04.jpg', alt: 'Blue Serenity serene beauty' },
      { src: 'images/gallery/Blue Serenity/blue-serenity-05.jpg', alt: 'Blue Serenity elegant masterpiece' },
      { src: 'images/gallery/Blue Serenity/blue-serenity-06.jpg', alt: 'Blue Serenity tranquil design' },
      { src: 'images/gallery/Blue Serenity/blue-serenity-07.jpg', alt: 'Blue Serenity peaceful creation' },
      { src: 'images/gallery/Blue Serenity/blue-serenity-08.jpg', alt: 'Blue Serenity calming artwork' },
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
    this.touchStartX = 0;
    this.touchEndX = 0;
    
    this.init();
  }
  
  init() {
    if (this.slides.length === 0) return;
    
    this.startAutoplay();
    
    this.prevBtn?.addEventListener('click', () => this.previousSlide());
    this.nextBtn?.addEventListener('click', () => this.nextSlide());
    
    this.indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => this.goToSlide(index));
    });
    
    const heroSection = document.querySelector('.hero-slideshow');
    heroSection?.addEventListener('mouseenter', () => this.stopAutoplay());
    heroSection?.addEventListener('mouseleave', () => this.startAutoplay());
    
    this.setupTouch(heroSection);
  }
  
  setupTouch(container) {
    if (!container) return;
    container.addEventListener('touchstart', (e) => {
      this.touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    container.addEventListener('touchend', (e) => {
      this.touchEndX = e.changedTouches[0].screenX;
      const diff = this.touchStartX - this.touchEndX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) this.nextSlide();
        else this.previousSlide();
      }
    }, { passive: true });
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
    this.elements = document.querySelectorAll('.reveal, .reveal-clip, .scroll-fade-up, .scroll-fade-left, .scroll-fade-right, .scroll-scale, .stagger-item');
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
    this.overlay = null;
    this.init();
  }
  
  init() {
    if (!this.menuBtn || !this.mobileMenu) return;
    
    this.overlay = document.createElement('div');
    this.overlay.className = 'mobile-menu-overlay';
    this.overlay.setAttribute('aria-hidden', 'true');
    this.mobileMenu.parentNode.insertBefore(this.overlay, this.mobileMenu.nextSibling);
    
    const toggle = (show) => {
      this.menuBtn.setAttribute('aria-expanded', String(show));
      this.mobileMenu.hidden = !show;
      this.overlay.hidden = !show;
      document.body.style.overflow = show ? 'hidden' : '';
    };
    
    this.menuBtn.addEventListener('click', () => {
      const isExpanded = this.menuBtn.getAttribute('aria-expanded') === 'true';
      toggle(!isExpanded);
    });
    
    const links = this.mobileMenu.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', () => toggle(false));
    });
    
    this.overlay.addEventListener('click', () => toggle(false));
  }
}

// ================================
// Lightbox Gallery (Book View)
// ================================

// ================================
// Gallery State Management
// ================================

let currentView = 'categories'; // 'categories' or 'images'
let currentCategory = null;
let currentCategoryImages = []; // Store current category images for lightbox
let currentFilter = 'all'; // Current filter selection
let allGalleryImages = []; // Store all images with category info for filtering

// ================================
// Modern Gallery with Filters & Masonry
// ================================

// Flatten all images from categories into a single array for masonry display
function prepareGalleryImages() {
  allGalleryImages = [];
  galleryCategories.forEach((category) => {
    const categorySlug = category.name.toLowerCase().replace(/\s+/g, '-');
    category.images.forEach((image) => {
      allGalleryImages.push({
        ...image,
        category: category.name,
        categorySlug: categorySlug,
        categoryColor: category.color
      });
    });
  });
}

// Render masonry gallery with filters
function renderMasonryGallery(filter = 'all') {
  const grid = document.getElementById('lookbook-grid');
  if (!grid) return;
  
  grid.innerHTML = '';
  grid.classList.remove('category-view', 'lookbook-grid');
  
  // Prepare images if not already done
  if (allGalleryImages.length === 0) {
    prepareGalleryImages();
  }
  
  // Filter images
  const filteredImages = filter === 'all' 
    ? allGalleryImages 
    : allGalleryImages.filter(img => img.categorySlug === filter);
  
  // Create gallery items
  const fragment = document.createDocumentFragment();
  
  filteredImages.forEach((image, index) => {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    item.dataset.category = image.categorySlug;
    item.dataset.index = index;
    
    const img = document.createElement('img');
    img.src = image.src;
    img.alt = image.alt;
    img.loading = 'lazy';
    
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    
    const title = document.createElement('h3');
    title.textContent = image.category;
    
    const category = document.createElement('p');
    category.textContent = 'Handcrafted Design';
    
    overlay.appendChild(title);
    overlay.appendChild(category);
    
    item.appendChild(img);
    item.appendChild(overlay);
    
    // Add click handler for lightbox
    item.addEventListener('click', () => {
      openLightbox(index, filteredImages);
    });
    
    fragment.appendChild(item);
  });
  
  grid.appendChild(fragment);
  
  // Trigger scroll reveal animation after DOM update
  // Delay allows browser to complete layout and paint
  setTimeout(() => {
    observeGalleryItemsForReveal();
  }, 100);
}

// ================================
// Scroll Reveal Animation
// ================================

function observeGalleryItemsForReveal() {
  const items = document.querySelectorAll('.gallery-item');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  
  items.forEach(item => {
    observer.observe(item);
  });
}

// ================================
// Lightbox Functionality
// ================================

let currentLightboxIndex = 0;
let currentLightboxImages = [];

let lightboxTouchX = 0;

function openLightbox(index, images) {
  currentLightboxIndex = index;
  currentLightboxImages = images;
  
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxCategory = document.getElementById('lightbox-category');
  
  if (!lightbox || !lightboxImg) return;
  
  const image = images[index];
  lightboxImg.src = image.src;
  lightboxImg.alt = image.alt;
  lightboxTitle.textContent = image.category;
  lightboxCategory.textContent = `Image ${index + 1} of ${images.length}`;
  
  lightbox.classList.add('active');
  lightbox.removeAttribute('hidden');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return;
  
  const container = document.querySelector('.lightbox-img-container');
  if (container) {
    container.classList.remove('zoomed');
    container.scrollLeft = 0;
    container.scrollTop = 0;
  }
  
  lightbox.classList.remove('active');
  lightbox.setAttribute('hidden', '');
  document.body.style.overflow = '';
}

function nextLightboxImage() {
  if (currentLightboxImages.length === 0) return;
  currentLightboxIndex = (currentLightboxIndex + 1) % currentLightboxImages.length;
  updateLightboxImage();
}

function prevLightboxImage() {
  if (currentLightboxImages.length === 0) return;
  currentLightboxIndex = (currentLightboxIndex - 1 + currentLightboxImages.length) % currentLightboxImages.length;
  updateLightboxImage();
}

function updateLightboxImage() {
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxCategory = document.getElementById('lightbox-category');
  
  if (!lightboxImg || currentLightboxImages.length === 0) return;
  
  const image = currentLightboxImages[currentLightboxIndex];
  lightboxImg.src = image.src;
  lightboxImg.alt = image.alt;
  lightboxTitle.textContent = image.category;
  lightboxCategory.textContent = `Image ${currentLightboxIndex + 1} of ${currentLightboxImages.length}`;
}

// ================================
// Filter Button Functionality
// ================================

/**
 * Dynamically apply colors to filter buttons based on gallery categories
 * This ensures button colors automatically match category colors
 */
function applyFilterButtonColors() {
  // Create a map of category slug to category data
  const categoryMap = {};
  galleryCategories.forEach(category => {
    const slug = category.name.toLowerCase().replace(/\s+/g, '-');
    categoryMap[slug] = category;
  });
  
  // Apply colors to each filter button (except "all")
  const filterButtons = document.querySelectorAll('.filter-btn[data-filter]:not([data-filter="all"])');
  filterButtons.forEach(button => {
    const filter = button.dataset.filter;
    const category = categoryMap[filter];
    
    if (category && category.color) {
      const color = category.color;
      
      // Parse the hex color to RGB for transparency effects
      const r = parseInt(color.slice(1, 3), 16);
      const g = parseInt(color.slice(3, 5), 16);
      const b = parseInt(color.slice(5, 7), 16);
      
      // Calculate a lighter shade for gradients
      const lighterColor = `rgb(${Math.min(r + 40, 255)}, ${Math.min(g + 40, 255)}, ${Math.min(b + 40, 255)})`;
      
      // Apply base styles
      button.style.borderColor = color;
      button.style.color = color;
      button.style.boxShadow = `0 3px 10px rgba(${r}, ${g}, ${b}, 0.15)`;
      
      // Store original styles and color for hover/active states
      button.dataset.categoryColor = color;
      button.dataset.categoryRgb = `${r}, ${g}, ${b}`;
      button.dataset.lighterColor = lighterColor;
    }
  });
}

/**
 * Setup filter button interactions with dynamic color support
 */
function setupFilterButtons() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  
  // First, apply colors to buttons
  applyFilterButtonColors();
  
  filterButtons.forEach(button => {
    // Add hover effects for buttons with dynamic colors
    const categoryColor = button.dataset.categoryColor;
    const categoryRgb = button.dataset.categoryRgb;
    const lighterColor = button.dataset.lighterColor;
    
    if (categoryColor && categoryRgb) {
      button.addEventListener('mouseenter', () => {
        if (!button.classList.contains('active')) {
          button.style.background = `linear-gradient(135deg, rgba(${categoryRgb}, 0.15) 0%, rgba(${categoryRgb}, 0.05) 100%)`;
          button.style.boxShadow = `0 6px 18px rgba(${categoryRgb}, 0.3), 0 0 20px rgba(${categoryRgb}, 0.2)`;
        }
      });
      
      button.addEventListener('mouseleave', () => {
        if (!button.classList.contains('active')) {
          button.style.background = 'white';
          button.style.boxShadow = `0 3px 10px rgba(${categoryRgb}, 0.15)`;
        }
      });
    }
    
    button.addEventListener('click', () => {
      // Remove active class and reset styles from all buttons
      filterButtons.forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
        const rgb = btn.dataset.categoryRgb;
        if (rgb && btn.dataset.filter !== 'all') {
          btn.style.background = 'white';
          btn.style.borderColor = btn.dataset.categoryColor;
          btn.style.color = btn.dataset.categoryColor;
          btn.style.boxShadow = `0 3px 10px rgba(${rgb}, 0.15)`;
        }
      });
      
      // Add active class to clicked button
      button.classList.add('active');
      button.setAttribute('aria-pressed', 'true');
      
      // Apply active styles for buttons with dynamic colors
      if (categoryColor && categoryRgb && lighterColor) {
        button.style.background = `linear-gradient(135deg, ${categoryColor} 0%, ${lighterColor} 100%)`;
        button.style.color = 'white';
        button.style.borderColor = 'transparent';
        button.style.boxShadow = `0 6px 20px rgba(${categoryRgb}, 0.5), 0 0 30px rgba(${categoryRgb}, 0.3)`;
      }
      
      // Get filter value and render gallery
      const filter = button.dataset.filter;
      currentFilter = filter;
      renderMasonryGallery(filter);
    });
  });
}

// ================================
// Render Gallery
// ================================

function renderGallery() {
  const grid = document.getElementById('lookbook-grid');
  if (!grid) return;
  
  // Clear existing content first
  grid.innerHTML = '';
  
  if (currentView === 'categories') {
    // Reset body background classes when viewing categories
    document.body.className = document.body.className.replace(/category-\S+/g, '').trim();
    grid.classList.add('lookbook-grid', 'category-view');
    renderCategories(grid);
  } else {
    grid.classList.remove('category-view');
    grid.classList.add('lookbook-grid');
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
    
    // Add category name overlay with description
    const overlay = document.createElement('div');
    overlay.className = 'category-overlay';
    
    const categoryName = document.createElement('h3');
    categoryName.className = 'category-name';
    categoryName.textContent = category.name;
    
    const categoryDescription = document.createElement('p');
    categoryDescription.className = 'category-description';
    categoryDescription.textContent = category.description;
    
    const imageCount = document.createElement('p');
    imageCount.className = 'category-count';
    imageCount.textContent = `${category.images.length} ${category.images.length === 1 ? 'image' : 'images'}`;
    
    overlay.appendChild(categoryName);
    overlay.appendChild(categoryDescription);
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
  
  // Apply category-specific background class to body
  document.body.className = document.body.className.replace(/category-\S+/g, '').trim();
  const categoryClass = 'category-' + category.name.toLowerCase().replace(/\s+/g, '-');
  document.body.classList.add(categoryClass);
  
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
  
  // Create category title with details
  const titleContainer = document.createElement('div');
  titleContainer.className = 'category-title-container';
  const title = document.createElement('h3');
  title.className = 'current-category-title';
  title.textContent = category.name;
  titleContainer.appendChild(title);
  
  // Add category description and details
  const detailsContainer = document.createElement('div');
  detailsContainer.className = 'category-details';
  
  const description = document.createElement('p');
  description.className = 'category-detail-description';
  description.textContent = category.description;
  detailsContainer.appendChild(description);
  
  const detailsList = document.createElement('div');
  detailsList.className = 'category-detail-list';
  
  const materialsDetail = document.createElement('p');
  const materialsLabel = document.createElement('strong');
  materialsLabel.textContent = 'Materials:';
  materialsDetail.appendChild(materialsLabel);
  materialsDetail.appendChild(document.createTextNode(' ' + category.materials));
  detailsList.appendChild(materialsDetail);
  
  const techniquesDetail = document.createElement('p');
  const techniquesLabel = document.createElement('strong');
  techniquesLabel.textContent = 'Techniques:';
  techniquesDetail.appendChild(techniquesLabel);
  techniquesDetail.appendChild(document.createTextNode(' ' + category.techniques));
  detailsList.appendChild(techniquesDetail);
  
  const inspirationDetail = document.createElement('p');
  const inspirationLabel = document.createElement('strong');
  inspirationLabel.textContent = 'Inspiration:';
  inspirationDetail.appendChild(inspirationLabel);
  inspirationDetail.appendChild(document.createTextNode(' ' + category.inspiration));
  detailsList.appendChild(inspirationDetail);
  
  detailsContainer.appendChild(detailsList);
  titleContainer.appendChild(detailsContainer);
  
  grid.appendChild(titleContainer);
  
  // Use DocumentFragment for efficient DOM manipulation
  const fragment = document.createDocumentFragment();
  
  // Build flat images array with category info for lightbox
  const categoryImagesForLightbox = category.images.map(img => ({
    ...img,
    category: category.name
  }));
  
  category.images.forEach((image, imageIndex) => {
    const article = document.createElement('article');
    article.className = 'lookbook-item stagger-item';
    
    const img = document.createElement('img');
    img.src = image.src;
    img.alt = image.alt;
    img.loading = 'lazy';
    
    // Add premium image overlay with details
    const overlay = document.createElement('div');
    overlay.className = 'image-overlay';
    
    const overlayContent = document.createElement('div');
    overlayContent.className = 'overlay-content';
    
    const imageTitle = document.createElement('h4');
    imageTitle.className = 'overlay-title';
    imageTitle.textContent = category.name;
    
    const imageNumber = document.createElement('p');
    imageNumber.className = 'overlay-number';
    imageNumber.textContent = `Image ${imageIndex + 1} of ${category.images.length}`;
    
    overlayContent.appendChild(imageTitle);
    overlayContent.appendChild(imageNumber);
    overlay.appendChild(overlayContent);
    
    // Add click handler to open lightbox
    article.style.cursor = 'pointer';
    article.setAttribute('role', 'button');
    article.setAttribute('tabindex', '0');
    article.setAttribute('aria-label', `View ${category.name} image ${imageIndex + 1}`);
    
    article.addEventListener('click', () => {
      openLightbox(imageIndex, categoryImagesForLightbox);
    });
    
    // Add keyboard support for accessibility
    article.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openLightbox(imageIndex, categoryImagesForLightbox);
      }
    });
    
    article.appendChild(img);
    article.appendChild(overlay);
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
// Back to Top Button
// ================================

function setupBackToTop() {
  const backToTopBtn = document.getElementById('backToTop');
  if (!backToTopBtn) return;
  
  // Show/hide button based on scroll position
  const toggleButtonVisibility = throttle(() => {
    const gallerySection = document.getElementById('gallery');
    if (!gallerySection) return;
    
    const galleryTop = gallerySection.offsetTop;
    const scrollPosition = window.scrollY;
    
    // Show button when user scrolls into gallery section
    if (scrollPosition > galleryTop + 200) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  }, 100);
  
  window.addEventListener('scroll', toggleButtonVisibility);
  
  // Scroll to top on click
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// ================================
// Initialize Everything
// ================================

// Loading screen configuration constants
const LOADING_SCREEN_MIN_DURATION = 5000; // Minimum time to show loading screen (ms)
const LOADING_SCREEN_FADE_DURATION = 500; // Time for fade-out animation (ms)
const LOADING_SCREEN_MAX_TIMEOUT = 3000; // Maximum time before forcing loading screen removal (ms)

// Function to hide the loading screen
function hideLoadingScreen() {
  const loadingScreen = document.getElementById('loading-screen');
  if (loadingScreen && !loadingScreen.classList.contains('hidden')) {
    loadingScreen.classList.add('hidden');
    
    // Remove from DOM after animation completes
    setTimeout(() => {
      loadingScreen.remove();
    }, LOADING_SCREEN_FADE_DURATION);
  }
}

// Fallback: Ensure loading screen is hidden after max timeout, even if resources fail to load
setTimeout(() => {
  hideLoadingScreen();
}, LOADING_SCREEN_MAX_TIMEOUT);

document.addEventListener('DOMContentLoaded', () => {
  // Hide loading screen when DOM is ready (doesn't wait for external resources)
  setTimeout(() => {
    hideLoadingScreen();
  }, LOADING_SCREEN_MIN_DURATION);
  // Set current year in footer
  document.getElementById('year').textContent = new Date().getFullYear();
  
  // Setup modern gallery with filters and masonry
  setupFilterButtons();
  renderMasonryGallery('all');
  
  // Setup lightbox controls
  const lightbox = document.getElementById('lightbox');
  const lightboxClose = document.querySelector('.lightbox-close');
  const lightboxPrev = document.querySelector('.lightbox-prev');
  const lightboxNext = document.querySelector('.lightbox-next');
  
  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }
  
  if (lightboxPrev) {
    lightboxPrev.addEventListener('click', prevLightboxImage);
  }
  
  if (lightboxNext) {
    lightboxNext.addEventListener('click', nextLightboxImage);
  }
  
  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });
    
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        closeLightbox();
      } else if (e.key === 'ArrowLeft' && lightbox.classList.contains('active')) {
        prevLightboxImage();
      } else if (e.key === 'ArrowRight' && lightbox.classList.contains('active')) {
        nextLightboxImage();
      }
    });
    
    // Touch swipe for lightbox
    lightbox.addEventListener('touchstart', (e) => {
      lightboxTouchX = e.changedTouches[0].screenX;
    }, { passive: true });
    lightbox.addEventListener('touchend', (e) => {
      const diff = lightboxTouchX - e.changedTouches[0].screenX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) nextLightboxImage();
        else prevLightboxImage();
      }
    }, { passive: true });
  }
  
  // Legacy render and setup
  setupContactForm();
  setupSmoothScroll();
  setupBackToTop();
  
  // Initialize features
  new Slideshow();
  new ScrollAnimations();
  new ScrollProgress();
  new ParallaxEffect();
  new HeaderScroll();
  new MobileMenu();
  
  // Initialize visual enhancements
  new CustomCursor();
  new StaggerAnimation();
  new Tilt3D();
  new MagneticButtons();
  new ScrollColors();
  setupLightboxZoom();
  
  // Add loading complete class
  setTimeout(() => {
    document.body.classList.add('loaded');
  }, 100);
});

// ================================
// Custom Cursor (Graffico.it style)
// ================================

class CustomCursor {
  constructor() {
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return;

    this.cursor = null;
    this.follower = null;
    this.ring = null;
    this.cursorPos = { x: 0, y: 0 };
    this.followerPos = { x: 0, y: 0 };
    this.prevPos = { x: 0, y: 0 };
    this.isHovering = false;
    this.rafId = null;
    this.trail = [];
    this.trailLength = 16;
    this.lastMoveTime = 0;
    
    this.init();
  }

  init() {
    document.body.classList.add('custom-cursor-active');
    this.cursor = document.createElement('div');
    this.cursor.className = 'custom-cursor';
    
    this.ring = document.createElement('div');
    this.ring.className = 'custom-cursor-ring';

    this.follower = document.createElement('div');
    this.follower.className = 'custom-cursor-follower';
    
    document.body.appendChild(this.cursor);
    document.body.appendChild(this.ring);
    document.body.appendChild(this.follower);

    for (let i = 0; i < this.trailLength; i++) {
      const seg = document.createElement('div');
      seg.className = 'yarn-trail-segment';
      const ratio = 1 - i / this.trailLength;
      const size = 3 + ratio * 7;
      seg.style.width = size + 'px';
      seg.style.height = size + 'px';
      const hue = 340 + ratio * 20;
      const sat = 75 + ratio * 10;
      const lit = 55 + ratio * 15;
      seg.style.background = `hsla(${hue}, ${sat}%, ${lit}%, ${0.05 + ratio * 0.35})`;
      seg.style.boxShadow = `0 0 ${4 + ratio * 4}px hsla(${hue}, ${sat}%, ${lit}%, ${0.05 + ratio * 0.15})`;
      document.body.appendChild(seg);
      this.trail.push({ el: seg, x: 0, y: 0 });
    }

    document.addEventListener('mousemove', (e) => this.handleMouseMove(e), { passive: true });
    this.setupHoverEffects();
    this.animate();
  }

  handleMouseMove(e) {
    this.cursorPos.x = e.clientX;
    this.cursorPos.y = e.clientY;
    this.lastMoveTime = performance.now();
  }

  setupHoverEffects() {
    const hoverElements = 'a, button, [role="button"], .lookbook-item, .category-item, .slide-btn, .indicator, .btn, input, textarea, .gallery-item';
    
    document.addEventListener('mouseover', (e) => {
      const target = e.target.closest(hoverElements);
      if (target) {
        this.isHovering = true;
        this.cursor.classList.add('hover');
        this.follower.classList.add('hover');
        this.ring.classList.add('hover');
      }
    }, { passive: true });

    document.addEventListener('mouseout', (e) => {
      const target = e.target.closest(hoverElements);
      if (target) {
        this.isHovering = false;
        this.cursor.classList.remove('hover');
        this.follower.classList.remove('hover');
        this.ring.classList.remove('hover');
      }
    }, { passive: true });
  }

  animate() {
    const lerp = (start, end, factor) => start + (end - start) * factor;
    
    const cursorSize = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--cursor-size')) || 24;
    const ringSize = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--cursor-ring-size')) || 34;
    const followerSize = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--cursor-follower-size')) || 60;
    
    this.cursor.style.transform = `translate3d(${this.cursorPos.x - cursorSize / 2}px, ${this.cursorPos.y - cursorSize / 2}px, 0)`;
    
    this.ring.style.transform = `translate3d(${this.cursorPos.x - ringSize / 2}px, ${this.cursorPos.y - ringSize / 2}px, 0)`;
    
    this.followerPos.x = lerp(this.followerPos.x, this.cursorPos.x, 0.08);
    this.followerPos.y = lerp(this.followerPos.y, this.cursorPos.y, 0.08);
    
    this.follower.style.transform = `translate3d(${this.followerPos.x - followerSize / 2}px, ${this.followerPos.y - followerSize / 2}px, 0)`;

    let px = this.followerPos.x;
    let py = this.followerPos.y;
    for (let i = 0; i < this.trail.length; i++) {
      const seg = this.trail[i];
      seg.x = lerp(seg.x, px, 0.2);
      seg.y = lerp(seg.y, py, 0.2);
      const w = parseFloat(seg.el.style.width);
      seg.el.style.transform = `translate3d(${seg.x - w / 2}px, ${seg.y - w / 2}px, 0)`;
      const speed = Math.hypot(this.cursorPos.x - this.prevPos.x, this.cursorPos.y - this.prevPos.y);
      const boost = Math.min(speed / 40, 1);
      const ratio = 1 - i / this.trail.length;
      seg.el.style.opacity = Math.max(0, (ratio * boost - 0.1)).toFixed(2);
      px = seg.x;
      py = seg.y;
    }
    this.prevPos.x = this.cursorPos.x;
    this.prevPos.y = this.cursorPos.y;
    
    this.rafId = requestAnimationFrame(() => this.animate());
  }
}

// ================================
// Enhanced Gallery Stagger Animation
// ================================

class StaggerAnimation {
  constructor() {
    this.observer = null;
    this.mutationObserver = null;
    this.STAGGER_DELAY = 0.05; // seconds
    this.itemIndexMap = new WeakMap(); // Track global index for each item
    this.init();
  }

  init() {
    // Observe gallery items as they load
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const itemIndex = this.itemIndexMap.get(entry.target) || 0;
          setTimeout(() => {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }, itemIndex * this.STAGGER_DELAY * 1000); // Convert to milliseconds
          this.observer.unobserve(entry.target); // Only observe once
        }
      });
    }, { threshold: 0.1 });

    // Observe all lookbook items
    const observeGalleryItems = () => {
      // Disconnect all previous observations
      this.observer.disconnect();
      
      // Set up new observations with global index
      document.querySelectorAll('.lookbook-item').forEach((item, index) => {
        this.itemIndexMap.set(item, index);
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = `opacity 0.6s ease ${index * this.STAGGER_DELAY}s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * this.STAGGER_DELAY}s`;
        this.observer.observe(item);
      });
    };

    // Initial observation
    observeGalleryItems();
    
    // Re-observe when gallery updates (for category changes)
    const galleryGrid = document.getElementById('lookbook-grid');
    if (galleryGrid) {
      this.mutationObserver = new MutationObserver(() => {
        observeGalleryItems();
      });
      this.mutationObserver.observe(galleryGrid, { childList: true });
    }
  }
}

// ================================
// 3D Tilt Effect on Gallery Items
// ================================

class Tilt3D {
  constructor() {
    this.container = document.querySelector('.lookbook-grid') || document.getElementById('lookbook-grid');
    if (!this.container) return;
    this.container.classList.add('tilt-3d');
    this.items = new Set();
    this.mutationObserver = null;
    this.observeItems();
    this.watchForChanges();
  }

  observeItems() {
    this.container.querySelectorAll('.lookbook-item, .gallery-item').forEach(el => {
      if (!this.items.has(el)) {
        this.items.add(el);
        el.addEventListener('mousemove', (e) => this.handleTilt(e, el));
        el.addEventListener('mouseleave', (e) => this.resetTilt(e, el));
      }
    });
  }

  watchForChanges() {
    this.mutationObserver = new MutationObserver(() => this.observeItems());
    this.mutationObserver.observe(this.container, { childList: true });
  }

  handleTilt(e, el) {
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  }

  resetTilt(e, el) {
    el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  }
}

// ================================
// Magnetic Hover on Buttons
// ================================

class MagneticButtons {
  constructor() {
    this.buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
    this.init();
  }

  init() {
    this.buttons.forEach(btn => {
      btn.addEventListener('mousemove', (e) => this.handleMagnet(e, btn));
      btn.addEventListener('mouseleave', (e) => this.resetMagnet(e, btn));
    });
  }

  handleMagnet(e, btn) {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const strength = btn.classList.contains('filter-btn') ? 4 : 8;
    btn.style.transform = `translate3d(${x * 0.3}px, ${y * 0.3}px, 0)`;
  }

  resetMagnet(e, btn) {
    btn.style.transform = '';
  }
}

// ================================
// Scroll-Driven Background Colors
// ================================

class ScrollColors {
  constructor() {
    this.sections = [
      { id: 'hero', color: '#fff' },
      { id: 'about', color: 'linear-gradient(180deg, #fff5f7 0%, #fff 100%)' },
      { id: 'gallery', color: 'linear-gradient(180deg, #fff 0%, #fff5f7 100%)' },
      { id: 'testimonials', color: 'linear-gradient(180deg, #fff5f7 0%, #fff 100%)' },
      { id: 'contact', color: 'linear-gradient(180deg, #fff 0%, #fdf2f4 100%)' },
    ];
    this.currentBg = '';
    this.init();
  }

  init() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const section = this.sections.find(s => s.id === entry.target.id);
          if (section && section.color) {
            document.body.style.transition = 'background 0.8s ease';
            document.body.style.background = section.color;
          }
        }
      });
    }, { threshold: 0.3 });

    this.sections.forEach(s => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
  }
}

// ================================
// Lightbox Zoom
// ================================

function setupLightboxZoom() {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  if (!lightbox || !lightboxImg) return;

  const container = document.createElement('div');
  container.className = 'lightbox-img-container';
  lightboxImg.classList.add('lightbox-img-target');
  lightboxImg.parentNode.insertBefore(container, lightboxImg);
  container.appendChild(lightboxImg);

  let isZoomed = false;
  let isDragging = false;
  let startX, startY, scrollLeft, scrollTop;

  container.addEventListener('click', (e) => {
    if (isDragging) return;
    isZoomed = !isZoomed;
    container.classList.toggle('zoomed');
    if (!isZoomed) {
      container.scrollLeft = 0;
      container.scrollTop = 0;
    }
  });

  container.addEventListener('mousedown', (e) => {
    if (!isZoomed) return;
    isDragging = true;
    container.classList.add('grabbing');
    startX = e.clientX;
    startY = e.clientY;
    scrollLeft = container.scrollLeft;
    scrollTop = container.scrollTop;
  });

  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const x = e.clientX;
    const y = e.clientY;
    const walkX = (x - startX);
    const walkY = (y - startY);
    container.scrollLeft = scrollLeft - walkX;
    container.scrollTop = scrollTop - walkY;
  });

  document.addEventListener('mouseup', () => {
    if (!isDragging) return;
    isDragging = false;
    container.classList.remove('grabbing');
  });

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox && isZoomed) {
      isZoomed = false;
      container.classList.remove('zoomed');
    }
  });
}

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

// ================================
// Animated Counters for Stats
// ================================

function animateCounter(element) {
  const target = parseInt(element.dataset.target);
  const duration = 2000; // 2 seconds
  const startTime = performance.now();
  
  const updateCounter = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const current = Math.floor(progress * target);
    
    element.textContent = current;
    
    if (progress < 1) {
      requestAnimationFrame(updateCounter);
    } else {
      element.textContent = target;
    }
  };
  
  requestAnimationFrame(updateCounter);
}

// Observe stat numbers for animation
function observeStatNumbers() {
  const statNumbers = document.querySelectorAll('.stat-number');
  
  if (statNumbers.length === 0) return;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  
  statNumbers.forEach(stat => {
    observer.observe(stat);
  });
}


