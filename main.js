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
// Note: 'images/' is a symlink to 'public/images/', both paths work
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
      { src: 'images/gallery/Pinkie Flamingo/pink-flamingo-04.jpg', alt: 'Pinkie Flamingo close-up detail' },
      { src: 'images/gallery/Pinkie Flamingo/pink-flamingo-05.jpg', alt: 'Pinkie Flamingo craftsmanship showcase' },
      { src: 'images/gallery/Pinkie Flamingo/pink-flamingo-06.jpg', alt: 'Pinkie Flamingo vibrant colors' },
      { src: 'images/gallery/Pinkie Flamingo/pink-flamingo-07.jpg', alt: 'Pinkie Flamingo elegant design' },
      { src: 'images/gallery/Pinkie Flamingo/pink-flamingo-08.jpg', alt: 'Pinkie Flamingo bold statement' },
      { src: 'images/gallery/Pinkie Flamingo/pink-flamingo-09.jpg', alt: 'Pinkie Flamingo creative piece' },
      { src: 'images/gallery/Pinkie Flamingo/pink-flamingo-10.jpg', alt: 'Pinkie Flamingo playful design' },
      { src: 'images/gallery/Pinkie Flamingo/pink-flamingo-11.jpg', alt: 'Pinkie Flamingo cheerful creation' },
      { src: 'images/gallery/Pinkie Flamingo/pink-flamingo-12.jpg', alt: 'Pinkie Flamingo vibrant artwork' },
      { src: 'images/gallery/Pinkie Flamingo/pink-flamingo-13.jpg', alt: 'Pinkie Flamingo beautiful masterpiece' },
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
      { src: 'images/gallery/Purple Elegance/purple-elegance-07.jpg', alt: 'Purple Elegance handcrafted piece' },
      { src: 'images/gallery/Purple Elegance/purple-elegance-08.jpg', alt: 'Purple Elegance artistic creation' },
      { src: 'images/gallery/Purple Elegance/purple-elegance-09.jpg', alt: 'Purple Elegance detailed work' },
      { src: 'images/gallery/Purple Elegance/purple-elegance-10.jpg', alt: 'Purple Elegance fine craftsmanship' },
      { src: 'images/gallery/Purple Elegance/purple-elegance-11.jpg', alt: 'Purple Elegance beautiful design' },
      { src: 'images/gallery/Purple Elegance/purple-elegance-12.jpg', alt: 'Purple Elegance finished piece' },
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
          <div class="lightbox-counter"></div>
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
  
  open(projectIndex, imageIndex = null) {
    this.currentProject = projectIndex;
    this.currentImage = imageIndex ?? 0;
    
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
    const counterElement = this.modal.querySelector('.lightbox-counter');
    
    // Fade out
    imgElement.style.opacity = '0';
    
    setTimeout(() => {
      imgElement.src = image.src;
      imgElement.alt = image.alt;
      
      // Hide caption - users want just images, nothing else
      captionElement.innerHTML = '';
      
      // Update counter
      counterElement.textContent = `${this.currentImage + 1} / ${project.images.length}`;
      
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
  grid.classList.remove('category-view');
  
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
        const rgb = btn.dataset.categoryRgb;
        if (rgb && !btn.dataset.filter === 'all') {
          btn.style.background = 'white';
          btn.style.borderColor = btn.dataset.categoryColor;
          btn.style.color = btn.dataset.categoryColor;
          btn.style.boxShadow = `0 3px 10px rgba(${rgb}, 0.15)`;
        }
      });
      
      // Add active class to clicked button
      button.classList.add('active');
      
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
    grid.classList.add('category-view');
    renderCategories(grid);
  } else {
    grid.classList.remove('category-view');
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
      if (window.lightboxGallery) {
        // Open the first (and only) project in lookbook, but start at the clicked image
        window.lightboxGallery.open(0, imageIndex);
      }
    });
    
    // Add keyboard support for accessibility
    article.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        if (window.lightboxGallery) {
          // Open the first (and only) project in lookbook, but start at the clicked image
          window.lightboxGallery.open(0, imageIndex);
        }
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
const LOADING_SCREEN_MIN_DURATION = 500; // Minimum time to show loading screen (ms)
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
    // Close on background click
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });
    
    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        closeLightbox();
      } else if (e.key === 'ArrowLeft' && lightbox.classList.contains('active')) {
        prevLightboxImage();
      } else if (e.key === 'ArrowRight' && lightbox.classList.contains('active')) {
        nextLightboxImage();
      }
    });
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
  
  // Initialize lightbox gallery (stored globally for access from renderLookbook)
  window.lightboxGallery = new LightboxGallery();
  
  // Initialize Graffico.it-style enhancements
  new CustomCursor();
  new StaggerAnimation();
  
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
    // Only initialize on non-touch devices
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      return;
    }

    this.cursor = null;
    this.follower = null;
    this.cursorPos = { x: 0, y: 0 };
    this.followerPos = { x: 0, y: 0 };
    this.isHovering = false;
    this.rafId = null;
    
    this.init();
  }

  init() {
    // Create cursor elements
    this.cursor = document.createElement('div');
    this.cursor.className = 'custom-cursor';
    
    this.follower = document.createElement('div');
    this.follower.className = 'custom-cursor-follower';
    
    document.body.appendChild(this.cursor);
    document.body.appendChild(this.follower);

    // Track mouse movement with passive listener for better performance
    document.addEventListener('mousemove', (e) => this.handleMouseMove(e), { passive: true });
    
    // Track hoverable elements
    this.setupHoverEffects();
    
    // Start animation loop
    this.animate();
  }

  handleMouseMove(e) {
    this.cursorPos.x = e.clientX;
    this.cursorPos.y = e.clientY;
  }

  setupHoverEffects() {
    const hoverElements = 'a, button, [role="button"], .lookbook-item, .category-item, .slide-btn, .indicator, .btn, input, textarea';
    
    document.addEventListener('mouseover', (e) => {
      if (e.target.closest(hoverElements)) {
        this.isHovering = true;
        this.cursor.classList.add('hover');
        this.follower.classList.add('hover');
      }
    }, { passive: true });

    document.addEventListener('mouseout', (e) => {
      if (e.target.closest(hoverElements)) {
        this.isHovering = false;
        this.cursor.classList.remove('hover');
        this.follower.classList.remove('hover');
      }
    }, { passive: true });
  }

  animate() {
    // Smooth cursor movement with easing
    const lerp = (start, end, factor) => start + (end - start) * factor;
    
    // Get cursor size from CSS variable (default to 12 if not set)
    const cursorSize = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--cursor-size')) || 12;
    const followerSize = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--cursor-follower-size')) || 40;
    
    // Main cursor (modern orb) follows immediately for responsive feel
    this.cursor.style.transform = `translate3d(${this.cursorPos.x - cursorSize / 2}px, ${this.cursorPos.y - cursorSize / 2}px, 0)`;
    
    // Follower (glowing trail) has delay for smooth trail effect
    this.followerPos.x = lerp(this.followerPos.x, this.cursorPos.x, 0.12);
    this.followerPos.y = lerp(this.followerPos.y, this.cursorPos.y, 0.12);
    
    this.follower.style.transform = `translate3d(${this.followerPos.x - followerSize / 2}px, ${this.followerPos.y - followerSize / 2}px, 0)`;
    
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

// Initialize stat counter animation
document.addEventListener('DOMContentLoaded', () => {
  observeStatNumbers();
});

// ================================
// Crochet Bot - Cute Assistant
// ================================

class CrochetBot {
  constructor() {
    this.bot = null;
    this.isVisible = false;
    this.messages = [
      "✨ Love your crochet journey!",
      "🧶 Keep stitching magic!",
      "💖 Beautiful work ahead!",
      "🎨 Colors are looking fab!",
      "🌟 You're doing amazing!",
      "🧵 One stitch at a time!",
      "💕 Handmade with love!",
      "🎀 Stay creative!",
      "🌈 Bright ideas coming!",
      "✨ Craft on, friend!",
      "🧶 Yarn-tastic vibes!",
      "💫 Making magic happen!",
      "🎨 Your creativity shines!",
      "🌸 Soft & cozy vibes!",
      "💝 Made with heart!"
    ];
    
    this.appearances = [
      { minTime: 8000, maxTime: 15000 },   // First appearance: 8-15 seconds
      { minTime: 20000, maxTime: 35000 },  // Subsequent: 20-35 seconds
      { minTime: 30000, maxTime: 50000 },  // Later: 30-50 seconds
      { minTime: 40000, maxTime: 60000 }   // Final: 40-60 seconds
    ];
    
    this.appearanceCount = 0;
    this.maxAppearances = 4; // Limit to 4 appearances per session
    this.autoHideTimeout = null;
    this.autoHideDuration = 6000; // 6 seconds before auto-hide
    this.nextAppearanceTimeout = null;
    // Animation durations - MUST match CSS values in styles.css
    // CSS: .crochet-bot-character.waving { animation: botFloatAndWave 0.6s ease-in-out 3; }
    // The keyframe does 2 waves per cycle, × 3 iterations = 6 total waves in 1.8s
    this.waveAnimationDuration = 1800; // 0.6s per iteration × 3 iterations = 1.8s total
    this.initDelay = 1000; // 1 second delay for page to settle before first appearance
    
    this.init();
  }
  
  init() {
    this.createBot();
    this.scheduleAppearance();
  }
  
  createBot() {
    // Create bot container
    this.bot = document.createElement('div');
    this.bot.className = 'crochet-bot';
    
    // Create character (cute emoji)
    const character = document.createElement('div');
    character.className = 'crochet-bot-character';
    character.innerHTML = '🧶'; // Yarn emoji as the bot character
    
    // Create message bubble
    const message = document.createElement('div');
    message.className = 'crochet-bot-message';
    
    // Create close button
    const closeBtn = document.createElement('div');
    closeBtn.className = 'crochet-bot-close';
    closeBtn.innerHTML = '×';
    closeBtn.addEventListener('click', () => this.hide());
    
    this.bot.appendChild(character);
    this.bot.appendChild(message);
    this.bot.appendChild(closeBtn);
    
    document.body.appendChild(this.bot);
  }
  
  scheduleAppearance() {
    if (this.appearanceCount >= this.maxAppearances) {
      return; // Don't schedule more appearances
    }
    
    // Get appearance timing based on count
    const timingIndex = Math.min(this.appearanceCount, this.appearances.length - 1);
    const { minTime, maxTime } = this.appearances[timingIndex];
    const delay = minTime + Math.random() * (maxTime - minTime);
    
    this.nextAppearanceTimeout = setTimeout(() => {
      if (!this.isVisible) {
        this.show();
      }
    }, delay);
  }
  
  show() {
    // Clear any existing auto-hide timeout from previous appearance
    if (this.autoHideTimeout) {
      clearTimeout(this.autoHideTimeout);
      this.autoHideTimeout = null;
    }
    
    this.isVisible = true;
    this.appearanceCount++;
    
    // Add visible class to slide up
    this.bot.classList.add('visible');
    
    // Start waving animation
    const character = this.bot.querySelector('.crochet-bot-character');
    character.classList.add('waving');
    
    // Remove waving class after animation completes
    setTimeout(() => {
      character.classList.remove('waving');
    }, this.waveAnimationDuration);
    
    // Show random message after a short delay
    setTimeout(() => {
      this.showMessage();
    }, 800);
    
    // Auto-hide after configured duration
    this.autoHideTimeout = setTimeout(() => {
      if (this.isVisible) {
        this.hide();
      }
    }, this.autoHideDuration);
  }
  
  showMessage() {
    const messageEl = this.bot.querySelector('.crochet-bot-message');
    const randomMessage = this.messages[Math.floor(Math.random() * this.messages.length)];
    messageEl.textContent = randomMessage;
    messageEl.classList.add('visible');
  }
  
  hide() {
    this.isVisible = false;
    
    // Clear auto-hide timeout if it exists
    if (this.autoHideTimeout) {
      clearTimeout(this.autoHideTimeout);
      this.autoHideTimeout = null;
    }
    
    // Remove visible class to slide down
    this.bot.classList.remove('visible');
    
    // Remove waving animation
    const character = this.bot.querySelector('.crochet-bot-character');
    character.classList.remove('waving');
    
    // Hide message
    const messageEl = this.bot.querySelector('.crochet-bot-message');
    messageEl.classList.remove('visible');
    
    // Schedule next appearance if under limit
    if (this.appearanceCount < this.maxAppearances) {
      this.scheduleAppearance();
    }
  }
  
  // Cleanup method to clear all timeouts
  destroy() {
    if (this.autoHideTimeout) {
      clearTimeout(this.autoHideTimeout);
    }
    if (this.nextAppearanceTimeout) {
      clearTimeout(this.nextAppearanceTimeout);
    }
  }
}

// Initialize Crochet Bot after page loads
let crochetBotInstance = null;

window.addEventListener('load', () => {
  // Create bot with a delay to let the page settle
  const INIT_DELAY_MS = 1000; // Matches CrochetBot.initDelay
  
  setTimeout(() => {
    crochetBotInstance = new CrochetBot();
  }, INIT_DELAY_MS);
});

// Optional: Cleanup on page unload (useful for SPAs)
window.addEventListener('beforeunload', () => {
  if (crochetBotInstance) {
    crochetBotInstance.destroy();
  }
});
