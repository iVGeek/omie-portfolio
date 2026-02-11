# Omie Fashion Portfolio

A modern, bold, and visually striking fashion designer portfolio website featuring hot pink accents, smooth animations, and a luxurious minimal design.

## Features

✨ **Full-Screen Hero Slideshow** - Captivating image slideshow with bold typography overlay  
🎨 **Hot Pink & Vibrant Theme** - Contemporary color palette dominated by hot pink (#FF1493)  
📐 **Responsive Design** - Fully responsive across all devices  
🎭 **Interactive Elements** - Hover effects, parallax scrolling, and smooth animations  
🖼️ **Magazine-Style Lookbook** - Asymmetric grid layout for editorial fashion moments  
📱 **Mobile-First** - Optimized for mobile with hamburger menu and touch-friendly interactions  
♿ **Accessible** - Semantic HTML5, ARIA labels, and keyboard navigation support  
⚡ **Fast Loading** - Optimized images and lazy loading for best performance

## Structure

### Sections

1. **Hero Section** - Full-screen slideshow with rotating fashion images and bold typography
2. **About Section** - Storytelling layout with parallax image and brand values
3. **Collections Gallery** - Interactive grid showcasing fashion collections with hover effects
4. **Lookbook** - Magazine-style asymmetric grid for editorial moments
5. **Contact Section** - Elegant form with contact details and social links
6. **Footer** - Brand information and navigation links

## Customization

### Update Your Content

#### Change Email and Contact Info
Edit `main.js`:
```javascript
const CONTACT_EMAIL = 'your-email@example.com'; // Line 8
```

Update contact details in `index.html`:
- Email link (search for `hello@omie.example`)
- Phone number (search for `+254 700 000 000`)
- WhatsApp link (search for `wa.me/254700000000`)
- Location (search for `Nairobi, Kenya`)

#### Add Your Images

Replace the Unsplash URLs in `main.js` with your own images:

1. **Hero Slideshow** (lines 18-20 in `index.html`):
   - Add 3-5 high-resolution images (1920x1080px recommended)
   - Save to `public/images/` as `hero1.jpg`, `hero2.jpg`, etc.

2. **Collections** (`collections` array in `main.js`):
   - Add 6-9 collection images (800x1000px portrait recommended)
   - Update title, description, and image paths

3. **Lookbook** (`lookbook` array in `main.js`):
   - Add 6+ editorial images (various sizes for asymmetric layout)
   - Mix of portrait and landscape orientations

4. **About Section** (line 90 in `index.html`):
   - Add a compelling image of you or your workspace

### Color Customization

Edit CSS variables in `styles.css` (lines 7-14):
```css
:root {
  --hot-pink: #FF1493;      /* Primary brand color */
  --vibrant-pink: #FF69B4;  /* Lighter pink accent */
  --deep-pink: #C71585;     /* Darker pink accent */
  --accent-gold: #FFD700;   /* Optional gold accent */
  --accent-coral: #FF6B6B;  /* Optional coral accent */
}
```

### Typography

The site uses:
- **Headings**: Playfair Display (bold serif) - modern, editorial feel
- **Body Text**: Inter (clean sans-serif) - excellent readability

To change fonts, update the Google Fonts link in `index.html` (line 12) and CSS variables (lines 16-17).

## Development

### Local Development

1. Clone the repository
2. Open `index.html` in a web browser, or
3. Start a local server:
   ```bash
   python3 -m http.server 8000
   # or
   npx serve
   ```
4. Visit `http://localhost:8000`

### Image Optimization

Use the included `optimize-images.js` script to generate optimized versions:

```bash
# Install dependencies
npm install --save-dev sharp

# Add your images to public/images/
# Run optimization
node optimize-images.js
```

This generates:
- Multiple sizes (1600px, 1200px, 800px, 480px)
- WebP versions for modern browsers
- Optimized JPEGs at 80% quality

## Deployment

### GitHub Pages
1. Push to GitHub
2. Go to Settings → Pages
3. Select branch and `/` folder
4. Your site will be live at `https://username.github.io/repository`

### Netlify / Vercel
1. Connect your repository
2. Deploy with default settings
3. No build command needed (static site)

## Browser Support

- ✅ Chrome, Edge, Safari, Firefox (latest 2 versions)
- ✅ iOS Safari, Chrome Mobile
- ⚠️ Graceful degradation for older browsers

## Performance Tips

1. **Optimize Images**: Use WebP format with JPEG fallback
2. **Lazy Loading**: Images load as user scrolls (built-in)
3. **Minimize CSS/JS**: Consider minification for production
4. **CDN**: Host images on a CDN for faster loading
5. **Compress**: Enable gzip/brotli compression on server

## Accessibility

- Semantic HTML5 structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Skip to content link
- Focus indicators
- Alt text on all images
- Sufficient color contrast (WCAG AA compliant)

## Credits

- **Fonts**: Google Fonts (Playfair Display, Inter)
- **Icons**: Material Icons
- **Design**: Modern fashion portfolio aesthetic
- **Placeholder Images**: Unsplash (replace with your own)

## License

Feel free to customize this portfolio for your personal or commercial use.

## Support

For issues or questions, please open an issue on GitHub.

---

**Made with ❤️ for fashion designers who want to make a bold statement online.**
