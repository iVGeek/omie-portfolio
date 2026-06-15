// ================================
// Dark Mode Theme Toggle - OMIE Portfolio
// ================================

class ThemeToggle {
  constructor() {
    this.THEME_KEY = 'omie-theme';
    this.LIGHT_THEME = 'light';
    this.DARK_THEME = 'dark';
    this.init();
  }

  init() {
    // Load saved theme or detect system preference
    const savedTheme = this.getSavedTheme();
    const systemTheme = this.getSystemTheme();
    const themeToApply = savedTheme || systemTheme;

    this.setTheme(themeToApply);
    this.createToggleButton();
    this.setupEventListeners();
    this.listenForSystemThemeChange();
  }

  /**
   * Get saved theme from localStorage
   * @returns {string|null} Saved theme or null
   */
  getSavedTheme() {
    try {
      return localStorage.getItem(this.THEME_KEY);
    } catch (e) {
      console.warn('localStorage not available:', e);
      return null;
    }
  }

  /**
   * Detect system theme preference
   * @returns {string} 'light' or 'dark'
   */
  getSystemTheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return this.DARK_THEME;
    }
    return this.LIGHT_THEME;
  }

  /**
   * Get current theme
   * @returns {string} Current theme
   */
  getCurrentTheme() {
    const html = document.documentElement;
    return html.getAttribute('data-theme') || this.LIGHT_THEME;
  }

  /**
   * Set theme and apply to document
   * @param {string} theme - 'light' or 'dark'
   */
  setTheme(theme) {
    const html = document.documentElement;
    const body = document.body;

    if (theme === this.DARK_THEME) {
      html.setAttribute('data-theme', this.DARK_THEME);
      body.setAttribute('data-theme', this.DARK_THEME);
    } else {
      html.removeAttribute('data-theme');
      body.removeAttribute('data-theme');
    }

    // Save theme preference
    try {
      localStorage.setItem(this.THEME_KEY, theme);
    } catch (e) {
      console.warn('localStorage not available:', e);
    }

    // Update toggle button icon if it exists
    this.updateToggleIcon();
    
    // Emit custom event for other listeners
    window.dispatchEvent(new CustomEvent('themechange', { detail: { theme } }));
  }

  /**
   * Toggle between light and dark themes
   */
  toggleTheme() {
    const currentTheme = this.getCurrentTheme();
    const newTheme = currentTheme === this.DARK_THEME ? this.LIGHT_THEME : this.DARK_THEME;
    this.setTheme(newTheme);
  }

  /**
   * Create theme toggle button in header
   */
  createToggleButton() {
    const nav = document.querySelector('.nav');
    if (!nav) return;

    // Check if button already exists
    if (document.querySelector('.theme-toggle')) return;

    const button = document.createElement('button');
    button.className = 'theme-toggle';
    button.setAttribute('aria-label', 'Toggle dark mode');
    button.setAttribute('title', 'Toggle dark mode');
    button.type = 'button';
    
    // Insert before nav-links
    const navLinks = nav.querySelector('.nav-links');
    if (navLinks) {
      nav.insertBefore(button, navLinks);
    } else {
      nav.appendChild(button);
    }

    this.toggleButton = button;
    this.updateToggleIcon();
  }

  /**
   * Update toggle button icon based on current theme
   */
  updateToggleIcon() {
    if (!this.toggleButton) return;

    const currentTheme = this.getCurrentTheme();
    const isDark = currentTheme === this.DARK_THEME;
    
    // Use Material Icons
    this.toggleButton.innerHTML = isDark 
      ? '<span class="material-icons">light_mode</span>'
      : '<span class="material-icons">dark_mode</span>';
  }

  /**
   * Setup event listeners
   */
  setupEventListeners() {
    if (this.toggleButton) {
      this.toggleButton.addEventListener('click', () => this.toggleTheme());
      
      // Add keyboard support
      this.toggleButton.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.toggleTheme();
        }
      });
    }
  }

  /**
   * Listen for system theme changes
   */
  listenForSystemThemeChange() {
    if (!window.matchMedia) return;

    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Use addListener for older browsers, addEventListener for newer
    if (darkModeQuery.addListener) {
      darkModeQuery.addListener((e) => {
        // Only apply if user hasn't saved a preference
        if (!this.getSavedTheme()) {
          this.setTheme(e.matches ? this.DARK_THEME : this.LIGHT_THEME);
        }
      });
    } else if (darkModeQuery.addEventListener) {
      darkModeQuery.addEventListener('change', (e) => {
        // Only apply if user hasn't saved a preference
        if (!this.getSavedTheme()) {
          this.setTheme(e.matches ? this.DARK_THEME : this.LIGHT_THEME);
        }
      });
    }
  }
}

// Initialize theme toggle when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.themeToggle = new ThemeToggle();
  });
} else {
  window.themeToggle = new ThemeToggle();
}
