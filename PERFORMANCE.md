# Performance Optimization Guide

This document describes the performance optimizations implemented in the OMIE Portfolio.

## Summary of Optimizations

### 1. **Image Optimization** 🖼️

#### WebP Conversion
- All images converted to WebP format with fallbacks
- WebP provides 25-90% file size reduction vs JPEG
- Automatic format detection in JavaScript

#### Responsive Images
Generated multiple sizes for each image:
- **Hero images**: 1920w, 1440w, 1024w, 768w, 480w
- **Gallery images**: 1200w, 800w, 600w, 400w
- **About images**: 800w, 600w, 400w

**Savings:**
- hero1.jpg: 1.1MB → 54KB WebP (95% reduction)
- hero2.jpg: 1.8MB → 162KB WebP (91% reduction)
- hero3.jpg: 654KB → 356KB WebP (45% reduction)

#### Image Attributes
- Added explicit `width` and `height` to prevent layout shift (CLS)
- Implemented `loading="lazy"` for below-the-fold images
- Used appropriate sizes based on viewport

### 2. **CSS Optimization** 📝

#### Minification
- Original: 77KB → Minified: 57KB (26% reduction, 20KB saved)

#### Critical CSS
- Inlined critical above-the-fold CSS in `<head>`
- Deferred non-critical CSS loading using preload technique
- Reduces render-blocking time

### 3. **JavaScript Optimization** ⚡

#### Minification
- Original: 48KB → Minified: 28KB (42% reduction, 20KB saved)

#### Performance Features
- WebP support detection
- Automatic image optimization on load
- Lazy loading for gallery images
- Throttled scroll handlers

### 4. **Font Loading** 🔤

#### Optimizations
- Added `font-display: swap` via media queries
- Preconnect to Google Fonts
- Deferred Material Icons loading
- Prevents FOUT (Flash of Unstyled Text)

### 5. **Render-Blocking Resources** 🚀

#### Improvements
- Inlined critical CSS
- Async CSS loading for non-critical styles
- Deferred JavaScript execution
- Preloaded hero images

## Build Commands

### Development
```bash
npm run dev          # Start dev server on port 8000
```

### Production Build
```bash
npm run build        # Minify CSS and JS
npm run optimize:advanced  # Generate optimized images
```

### Individual Tasks
```bash
npm run minify:css   # Minify CSS only
npm run minify:js    # Minify JS only
npm run minify       # Minify both CSS and JS
```

## Performance Metrics Improvement

### Expected Results (vs baseline)
- **First Contentful Paint (FCP)**: 4.5s → ~2s (56% improvement)
- **Largest Contentful Paint (LCP)**: 21.6s → ~4s (81% improvement)
- **Total Blocking Time (TBT)**: 200ms → ~50ms (75% improvement)
- **Cumulative Layout Shift (CLS)**: 0 → 0 (maintained)
- **Speed Index**: 8.4s → ~3s (64% improvement)

### Performance Score Projection
- **Performance**: 55 → 85-90 (Target: 90+)
- **Best Practices**: 77 → 90+ (Fixed HTTPS/mixed content)
- **Accessibility**: 96 (maintained)
- **SEO**: 100 (maintained)

## Technical Details

### WebP Support Detection
```javascript
function supportsWebP() {
  const elem = document.createElement('canvas');
  return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
}
```

### Automatic Image Optimization
The site automatically:
1. Detects WebP support
2. Selects appropriate image size based on viewport
3. Falls back to JPEG if WebP fails to load
4. Uses optimized images for backgrounds and `<img>` elements

### Critical CSS Strategy
- Inlined ~2KB of critical CSS for above-the-fold content
- Includes: reset styles, header, hero section, loading screen
- Defers remaining 57KB using `<link rel="preload">`

## File Structure

```
/
├── index.html                    # Main HTML (updated with optimizations)
├── main.js                       # Source JavaScript
├── main.min.js                   # Minified JavaScript (28KB)
├── styles.css                    # Source CSS
├── styles.min.css                # Minified CSS (57KB)
├── critical.css                  # Critical CSS reference
├── optimize-images-advanced.js   # Advanced image optimizer
├── public/images/
│   ├── hero/
│   │   ├── hero1.jpg.jpeg       # Original
│   │   ├── hero1.jpg-480w.webp  # Optimized
│   │   ├── hero1.jpg-768w.webp
│   │   └── hero1.jpg.webp
│   └── gallery/
│       └── [category]/
│           ├── image.jpg         # Original
│           └── image-*w.webp     # Optimized versions
```

## Maintenance

### When Adding New Images
1. Add original images to appropriate directory
2. Run `npm run optimize:advanced` to generate optimized versions
3. The site will automatically use optimized images

### When Updating Code
1. Make changes to `main.js` or `styles.css`
2. Run `npm run build` to regenerate minified files
3. Test locally with `npm run dev`

## Browser Support

- **WebP**: Chrome, Firefox, Edge, Opera, Safari 14+
- **Lazy Loading**: All modern browsers
- **CSS Features**: All modern browsers
- **Fallbacks**: JPEG images for older browsers

## Future Enhancements

Potential additional optimizations:
- [ ] Implement HTTP/2 Server Push
- [ ] Add Service Worker for offline support
- [ ] Use CDN for image delivery
- [ ] Implement AVIF format (next-gen after WebP)
- [ ] Add resource hints (dns-prefetch, preconnect)
- [ ] Implement code splitting for JavaScript
- [ ] Add Brotli compression for text assets

## Resources

- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [WebP Image Format](https://developers.google.com/speed/webp)
- [Critical CSS Guide](https://web.dev/extract-critical-css/)
- [Lazy Loading Images](https://web.dev/lazy-loading-images/)

---

**Last Updated**: February 2026  
**Performance Score Target**: 90+
