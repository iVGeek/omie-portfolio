# 📸 Media Customization Guide

This guide shows you exactly how to replace the placeholder images with your own media to create your personalized crochet portfolio.

> 💡 **Using Instagram images?** Check out the **[Instagram Images Guide →](INSTAGRAM_GUIDE.md)** for step-by-step instructions on downloading and using your Instagram photos!

> 💡 **Want to see code examples side-by-side?** Check out [EXAMPLES.md](EXAMPLES.md) for quick before/after comparisons!

## Quick Start Checklist

- [ ] Prepare your images (see [Image Requirements](#image-requirements))
- [ ] Add images to `public/images/` folder
- [ ] Update hero slideshow in `index.html`
- [ ] Update pattern collection images in `main.js`
- [ ] Update project gallery in `main.js`
- [ ] Update about section image in `index.html`
- [ ] (Optional) Run image optimization script

## Image Requirements

### Recommended Sizes

| Section | Recommended Size | Aspect Ratio | Count |
|---------|-----------------|--------------|-------|
| Hero Slideshow | 1920x1080px | 16:9 | 3-5 images |
| Pattern Categories | 800x1000px | 4:5 | 6-9 images |
| Project Gallery | 800-1200px width | Various | 6+ images |
| About Section | 800x600px | 4:3 | 1 image |

### File Formats
- **Best**: `.jpg` or `.webp` for photographs
- **Also works**: `.png` for graphics with transparency
- Keep file sizes under 500KB for best performance

## Step-by-Step Instructions

### 1. Prepare Your Images

Create a folder structure for organizing your media:

```
public/
└── images/
    ├── hero/
    │   ├── hero1.jpg
    │   ├── hero2.jpg
    │   └── hero3.jpg
    ├── patterns/
    │   ├── sweaters.jpg
    │   ├── cardigans.jpg
    │   ├── accessories.jpg
    │   ├── baby.jpg
    │   ├── home-decor.jpg
    │   └── amigurumi.jpg
    ├── gallery/
    │   ├── project1.jpg
    │   ├── project2.jpg
    │   ├── project3.jpg
    │   ├── project4.jpg
    │   ├── project5.jpg
    │   └── project6.jpg
    └── about/
        └── workspace.jpg
```

### 2. Update Hero Slideshow

Open `index.html` and find the hero section (around line 63). Replace the Unsplash URLs:

**Before:**
```html
<div class="slide active" style="background-image: url('https://images.unsplash.com/photo-1614963326505-842876ff4238?w=1600&q=80')">
```

**After:**
```html
<div class="slide active" style="background-image: url('public/images/hero/hero1.jpg')">
```

Do this for all 3 slides (or add more slides if you want):
```html
<!-- Hero Section with Full-Screen Slideshow -->
<section id="hero" class="hero-slideshow" aria-labelledby="hero-title">
  <div class="slideshow-container">
    <div class="slide active" style="background-image: url('public/images/hero/hero1.jpg')">
      <div class="slide-overlay"></div>
    </div>
    <div class="slide" style="background-image: url('public/images/hero/hero2.jpg')">
      <div class="slide-overlay"></div>
    </div>
    <div class="slide" style="background-image: url('public/images/hero/hero3.jpg')">
      <div class="slide-overlay"></div>
    </div>
  </div>
  <!-- ... rest of hero section ... -->
</section>
```

**💡 Tip**: If you add more than 3 slides, also add more indicators in the slideshow-indicators section.

### 3. Update Pattern Collection

Open `main.js` and find the `collections` array (around line 12). Replace each `img` URL:

**Before:**
```javascript
const collections = [
  {
    title: 'Cozy Sweaters',
    desc: 'Warm, comfortable sweater patterns for all seasons',
    img: 'https://images.unsplash.com/photo-1614963326505-842876ff4238?w=800&q=80',
    alt: 'Crochet sweater pattern'
  },
  // ...
];
```

**After:**
```javascript
const collections = [
  {
    title: 'Cozy Sweaters',
    desc: 'Warm, comfortable sweater patterns for all seasons',
    img: 'public/images/patterns/sweaters.jpg',
    alt: 'Crochet sweater pattern'
  },
  {
    title: 'Stylish Cardigans',
    desc: 'Versatile cardigan designs from casual to elegant',
    img: 'public/images/patterns/cardigans.jpg',
    alt: 'Crochet cardigan pattern'
  },
  {
    title: 'Accessories',
    desc: 'Scarves, hats, bags and more for every occasion',
    img: 'public/images/patterns/accessories.jpg',
    alt: 'Crochet accessories'
  },
  {
    title: 'Baby & Kids',
    desc: 'Adorable patterns for little ones',
    img: 'public/images/patterns/baby.jpg',
    alt: 'Baby crochet patterns'
  },
  {
    title: 'Home Decor',
    desc: 'Beautiful blankets, pillows and decorative pieces',
    img: 'public/images/patterns/home-decor.jpg',
    alt: 'Crochet home decor'
  },
  {
    title: 'Amigurumi',
    desc: 'Cute stuffed animals and character designs',
    img: 'public/images/patterns/amigurumi.jpg',
    alt: 'Amigurumi patterns'
  }
];
```

### 4. Update Project Gallery

In the same `main.js` file, find the `lookbook` array (around line 55):

**Before:**
```javascript
const lookbook = [
  {
    src: 'https://images.unsplash.com/photo-1614963326505-842876ff4238?w=1200&q=80',
    alt: 'Beautiful crochet sweater project'
  },
  // ...
];
```

**After:**
```javascript
const lookbook = [
  {
    src: 'public/images/gallery/project1.jpg',
    alt: 'Beautiful crochet sweater project'
  },
  {
    src: 'public/images/gallery/project2.jpg',
    alt: 'Stylish crochet cardigan'
  },
  {
    src: 'public/images/gallery/project3.jpg',
    alt: 'Crochet accessories collection'
  },
  {
    src: 'public/images/gallery/project4.jpg',
    alt: 'Cozy crochet blanket'
  },
  {
    src: 'public/images/gallery/project5.jpg',
    alt: 'Baby crochet items'
  },
  {
    src: 'public/images/gallery/project6.jpg',
    alt: 'Amigurumi creations'
  }
];
```

**💡 Tip**: Add as many gallery items as you want! The asymmetric grid layout adapts to any number of images.

### 5. Update About Section Image

Open `index.html` and find the about section (around line 105):

**Before:**
```html
<img src="https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?w=800&q=80" alt="Crochet work in progress" loading="lazy">
```

**After:**
```html
<img src="public/images/about/workspace.jpg" alt="Crochet work in progress" loading="lazy">
```

## Optional: Image Optimization

After adding your images, optimize them for web performance:

### Install Dependencies
```bash
npm install --save-dev sharp
```

### Run Optimization Script
```bash
node optimize-images.js
```

This will:
- Generate responsive image sizes (1600px, 1200px, 800px, 480px)
- Create WebP versions for modern browsers
- Optimize JPEGs at 80% quality
- Reduce file sizes significantly

### Using Optimized Images

After optimization, update your paths to use the optimized versions:

**For JavaScript arrays:**
```javascript
// Example: Use responsive images
img: 'public/images/patterns/sweaters-800.jpg',  // Instead of sweaters.jpg
```

**For HTML with WebP support:**
```html
<picture>
  <source srcset="public/images/hero/hero1.webp" type="image/webp">
  <img src="public/images/hero/hero1.jpg" alt="Hero image">
</picture>
```

## Alternative: Using a Simple Flat Structure

If you prefer a simpler structure, you can put all images in `public/images/`:

```
public/
└── images/
    ├── hero1.jpg
    ├── hero2.jpg
    ├── hero3.jpg
    ├── sweaters.jpg
    ├── cardigans.jpg
    ├── accessories.jpg
    └── workspace.jpg
```

Then use paths like: `public/images/hero1.jpg`

## Troubleshooting

### Images not showing up?

1. **Check file paths**: Make sure paths match exactly (case-sensitive!)
2. **Check file names**: No spaces or special characters in filenames
3. **Check file location**: Files should be in `public/images/`
4. **Check browser console**: Press F12 and look for 404 errors
5. **Try absolute paths**: Use `/public/images/...` instead of `public/images/...`

### Images too large/slow?

1. **Resize images**: Use image editing software or the optimization script
2. **Compress images**: Tools like [TinyPNG](https://tinypng.com/) or [Squoosh](https://squoosh.app/)
3. **Use WebP format**: Better compression than JPEG
4. **Lazy loading**: Already implemented - images load as you scroll

### Need different image dimensions?

The recommended sizes are just guidelines. Your images will work with any dimensions, but may:
- Crop differently in hero slideshow (use landscape images)
- Display with different spacing in galleries
- Affect page load times if very large

## Tips for Great Photos

### Hero Slideshow
- Use high-quality, professional-looking photos
- Keep important content in the center (text overlays on top)
- Use consistent lighting/mood across all slides
- Try landscape orientation (horizontal)

### Pattern Categories
- Show the finished product clearly
- Use good lighting with minimal shadows
- Keep backgrounds simple and clean
- Portrait orientation (vertical) works best

### Project Gallery
- Mix of detail shots and full views
- Variety of colors and textures
- Show your work from different angles
- Natural lighting produces best results

### About Section
- Show your workspace or you creating
- Make it personal and authentic
- Good lighting is essential
- Try for a warm, inviting atmosphere

## Need Help?

If you're stuck:
1. Check that all file paths are correct
2. Look at the browser console for errors (F12)
3. Make sure image files are in the right location
4. Try opening the image URL directly in your browser
5. Open an issue on GitHub with screenshots

---

**Ready to personalize your portfolio? Start with just 3 hero images and expand from there!** 🎨🧶
