# OMIE Pattern Portfolio

A warm, welcoming, and visually appealing crochet pattern portfolio website featuring coral and peach accents, smooth animations, and a cozy design aesthetic.

## 🚀 Quick Start: Using Your Own Media

**Want to replace the placeholder images with your own crochet photos or link your Instagram posts?**

👉 **[Complete Media Customization Guide →](MEDIA_GUIDE.md)**  
👉 **[Code Examples (Before/After) →](EXAMPLES.md)**

In 5 minutes, you'll learn how to:
- Add your images to the right folders
- Link Instagram posts to use as media
- Update the code with your image paths
- Optimize images for web performance
- Troubleshoot common issues

## Features

✨ **Full-Screen Hero Slideshow** - Beautiful image slideshow showcasing crochet projects  
🎨 **Warm & Cozy Theme** - Craft-friendly color palette with pink and orange tones  
📐 **Responsive Design** - Fully responsive across all devices  
🎭 **Interactive Elements** - Hover effects, parallax scrolling, and smooth animations  
🖼️ **Project Gallery** - Asymmetric grid layout for showcasing finished crochet projects  
📱 **Mobile-First** - Optimized for mobile with hamburger menu and touch-friendly interactions  
♿ **Accessible** - Semantic HTML5, ARIA labels, and keyboard navigation support  
⚡ **Fast Loading** - Optimized images and lazy loading for best performance

## Structure

### Sections

1. **Hero Section** - Full-screen slideshow with crochet imagery and welcoming typography
2. **About Section** - Story about the passion for crochet and community
3. **Pattern Collection** - Interactive grid showcasing pattern categories
4. **Project Gallery** - Beautiful finished projects from the patterns
5. **Contact Section** - Form with contact details and social links
6. **Footer** - Brand information and navigation links

## Customization

### 📸 Using Your Own Media

**The portfolio comes with placeholder images. Here's how to add your own:**

**Quick Start:**
1. Add your images to the `public/images/` folder
2. Replace Unsplash URLs in `index.html` (hero slideshow, about section)
3. Replace Unsplash URLs in `main.js` (pattern categories, project gallery)

**📖 [Read the Complete Media Customization Guide](MEDIA_GUIDE.md)** for:
- Detailed step-by-step instructions with code examples
- Recommended image sizes and formats
- File organization tips
- Image optimization guide
- Troubleshooting help

**Minimum Required Images:**
- 3 hero slideshow images (1920x1080px)
- 6 pattern category images (800x1000px)
- 6 project gallery images (800-1200px)
- 1 about section image (800x600px)

### Update Your Content

#### Change Email and Contact Info
Edit `main.js`:
```javascript
const CONTACT_EMAIL = 'your-email@example.com'; // Line 14
```

Update contact details in `index.html`:
- Email link (search for `hello@omie.com`)
- Phone number (search for `+1 (555) 123-4567`)
- WhatsApp link (search for `wa.me/15551234567`)
- Instagram handle in floating button (search for `ig.me/m/omie`)

### Color Customization

Edit CSS variables in `styles.css`:
```css
:root {
  /* Pink tones */
  --primary-coral: #e68bbe;     /* Deep pink */
  --warm-pink: #eea1cd;         /* Medium pink */
  --accent-mint: #f9cee7;       /* Light pink */
  --lightest-pink: #fde4f2;     /* Lightest pink */
  --pink-medium: #f4b8da;       /* Medium-light pink */
  
  /* Orange tones */
  --soft-peach: #ffa472;        /* Soft orange */
  --accent-teal: #ff7e26;       /* Vibrant orange */
  --orange-deep: #ff580f;       /* Deep orange */
  --orange-light: #ffc99d;      /* Light orange */
  --orange-mid: #ff9c59;        /* Mid orange */
}
```

### Typography

The site uses:
- **Headings**: Playfair Display (elegant serif) - warm, approachable feel
- **Body Text**: Inter (clean sans-serif) - excellent readability

To change fonts, update the Google Fonts link in `index.html` and CSS variables.

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
- **Design**: Warm, welcoming crochet portfolio aesthetic
- **Placeholder Images**: Unsplash (replace with your own)

## License

Feel free to customize this portfolio for your personal or commercial use.

## Support

For issues or questions, please open an issue on GitHub.

---

**Made with ❤️ for crochet designers who want to share their beautiful patterns online.**
