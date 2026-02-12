# 📝 Code Examples: Before & After

Quick reference showing exactly what code to change when adding your own media.

## Example 1: Hero Slideshow (index.html)

### Before (Placeholder)
```html
<div class="slideshow-container">
  <div class="slide active" style="background-image: url('https://images.unsplash.com/photo-1614963326505-842876ff4238?w=1600&q=80')">
    <div class="slide-overlay"></div>
  </div>
  <div class="slide" style="background-image: url('https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=1600&q=80')">
    <div class="slide-overlay"></div>
  </div>
  <div class="slide" style="background-image: url('https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=1600&q=80')">
    <div class="slide-overlay"></div>
  </div>
</div>
```

### After (Your Images)
```html
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
```

## Example 2: Pattern Collections (main.js)

### Before (Placeholder)
```javascript
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
    img: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80',
    alt: 'Crochet cardigan pattern'
  }
];
```

### After (Your Images)
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
  }
];
```

## Example 3: Project Gallery (main.js)

### Before (Placeholder)
```javascript
const lookbook = [
  {
    src: 'https://images.unsplash.com/photo-1614963326505-842876ff4238?w=1200&q=80',
    alt: 'Beautiful crochet sweater project'
  },
  {
    src: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80',
    alt: 'Stylish crochet cardigan'
  }
];
```

### After (Your Images)
```javascript
const lookbook = [
  {
    src: 'public/images/gallery/project1.jpg',
    alt: 'Beautiful crochet sweater project'
  },
  {
    src: 'public/images/gallery/project2.jpg',
    alt: 'Stylish crochet cardigan'
  }
];
```

## Example 4: About Section (index.html)

### Before (Placeholder)
```html
<div class="about-image parallax-element" data-speed="0.5">
  <img src="https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?w=800&q=80" 
       alt="Crochet work in progress" 
       loading="lazy">
</div>
```

### After (Your Image)
```html
<div class="about-image parallax-element" data-speed="0.5">
  <img src="public/images/about/workspace.jpg" 
       alt="Crochet work in progress" 
       loading="lazy">
</div>
```

## Common Patterns to Find & Replace

### In index.html
| Find | Replace With |
|------|-------------|
| `https://images.unsplash.com/photo-1614963326505-842876ff4238?w=1600&q=80` | `public/images/hero/hero1.jpg` |
| `https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=1600&q=80` | `public/images/hero/hero2.jpg` |
| `https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=1600&q=80` | `public/images/hero/hero3.jpg` |
| `https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?w=800&q=80` | `public/images/about/workspace.jpg` |

### In main.js (Collections Array)
| Find | Replace With |
|------|-------------|
| `https://images.unsplash.com/photo-1614963326505-842876ff4238?w=800&q=80` | `public/images/patterns/sweaters.jpg` |
| `https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80` | `public/images/patterns/cardigans.jpg` |
| `https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&q=80` | `public/images/patterns/accessories.jpg` |
| `https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800&q=80` | `public/images/patterns/baby.jpg` |
| `https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?w=800&q=80` | `public/images/patterns/home-decor.jpg` |
| `https://images.unsplash.com/photo-1611849583569-7a1a8f4d0f7e?w=800&q=80` | `public/images/patterns/amigurumi.jpg` |

### In main.js (Lookbook Array)
| Find | Replace With |
|------|-------------|
| `https://images.unsplash.com/photo-1614963326505-842876ff4238?w=1200&q=80` | `public/images/gallery/project1.jpg` |
| `https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80` | `public/images/gallery/project2.jpg` |
| `https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&q=80` | `public/images/gallery/project3.jpg` |
| `https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?w=800&q=80` | `public/images/gallery/project4.jpg` |
| `https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=1000&q=80` | `public/images/gallery/project5.jpg` |
| `https://images.unsplash.com/photo-1611849583569-7a1a8f4d0f7e?w=1000&q=80` | `public/images/gallery/project6.jpg` |

## Pro Tip: Using Find & Replace

Most code editors (VS Code, Sublime, etc.) have a Find & Replace feature:

1. Press `Ctrl+H` (or `Cmd+H` on Mac)
2. Paste the Unsplash URL in "Find"
3. Type your local path in "Replace"
4. Click "Replace" or "Replace All"

This makes updating all URLs quick and easy!

---

**Need more details?** Check the [Complete Media Guide](MEDIA_GUIDE.md)
