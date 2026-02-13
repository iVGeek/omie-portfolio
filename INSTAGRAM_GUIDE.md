# 📸 Using Instagram Images for Your Portfolio

This guide shows you how to use images from your Instagram account (@_.jambi_/) in your portfolio website.

## Quick Overview

Since this portfolio showcases your business and you're the owner of the Instagram account @_.jambi_/, you can legally use your own Instagram images on your website. This guide walks you through:

1. Downloading images from your Instagram account
2. Organizing them in your portfolio
3. Updating the website code to use your images
4. Optimizing images for web performance

## 📥 Step 1: Download Images from Instagram

### Method 1: Using Instagram's Download Feature (Recommended)

1. **Download Your Instagram Data:**
   - Go to Instagram Settings → Privacy and Security → Data Download
   - Request a download of your data
   - You'll receive a link to download all your photos in their original quality

2. **Or Download Individual Posts:**
   - Visit your Instagram profile: https://instagram.com/_.jambi_/
   - Open each post you want to use
   - Take a screenshot or use browser dev tools to download the image
   - **Right-click on the image** → "Save image as..."

### Method 2: Using Third-Party Tools (For Individual Posts)

Use Instagram download tools (ensure they're safe and reputable):
- **ingramer.com** - Download Instagram photos
- **downloadgram.com** - Download posts, stories, and reels
- **inflact.com** - Bulk download from your account

> ⚠️ **Note**: Always respect copyright. Only use images you own or have permission to use.

### Method 3: Using Browser Developer Tools

1. Open your Instagram post in a web browser
2. Right-click on the image and select "Inspect" or "Inspect Element"
3. Find the `<img>` tag with the full-resolution URL
4. Copy the URL and paste it in a new tab
5. Right-click and "Save Image As..."

## 📁 Step 2: Organize Your Downloaded Images

Once you have your images, organize them by category:

```
/home/runner/work/omie-portfolio/omie-portfolio/
├── images/
│   ├── hero/
│   │   ├── hero1.jpg          # Your best 3-5 images for slideshow
│   │   ├── hero2.jpg
│   │   └── hero3.jpg
│   ├── gallery/
│   │   ├── project1.jpg       # Your Instagram posts
│   │   ├── project2.jpg
│   │   ├── project3.jpg
│   │   ├── project4.jpg
│   │   ├── project5.jpg
│   │   └── project6.jpg       # Add as many as you want!
│   └── about/
│       └── workspace.jpg      # A photo of you or your workspace
```

### Naming Your Files

- Use simple, descriptive names (lowercase, no spaces)
- Examples: `hero1.jpg`, `crochet-bag.jpg`, `pink-sweater.jpg`
- Avoid: `IMG_1234.jpg`, `Screenshot 2024-01-01.png`

## 🔧 Step 3: Update Your Website Code

### A. Update Hero Slideshow

Open `index.html` and find the hero section (around line 96-107):

**Replace:**
```html
<div class="slide active" style="background-image: url('images/hero/hero1.jpg.jpeg')">
```

**With:**
```html
<div class="slide active" style="background-image: url('images/hero/hero1.jpg')">
```

Do this for all 3 slides (or add more if you want).

### B. Update Gallery Images

Open `main.js` and find the `lookbook` array (around line 46):

**Replace the entire lookbook array with your images:**

```javascript
const lookbook = [
  {
    title: 'Beautiful handcrafted creation',
    images: [
      {
        src: 'images/gallery/project1.jpg',
        alt: 'Description of your project'
      }
    ]
  },
  {
    title: 'Stylish handmade piece',
    images: [
      {
        src: 'images/gallery/project2.jpg',
        alt: 'Description of your project'
      }
    ]
  },
  {
    title: 'Elegant handcrafted work',
    images: [
      {
        src: 'images/gallery/project3.jpg',
        alt: 'Description of your project'
      }
    ]
  },
  // Add more projects from your Instagram!
  {
    title: 'Creative handmade design',
    images: [
      {
        src: 'images/gallery/project4.jpg',
        alt: 'Description of your project'
      }
    ]
  },
  {
    title: 'Artistic creation',
    images: [
      {
        src: 'images/gallery/project5.jpg',
        alt: 'Description of your project'
      }
    ]
  },
  {
    title: 'Unique handcrafted item',
    images: [
      {
        src: 'images/gallery/project6.jpg',
        alt: 'Description of your project'
      }
    ]
  }
];
```

### C. Update About Section Image (Optional)

In `index.html`, find the about section (around line 140):

**Replace:**
```html
<img src="https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?w=800&q=80" alt="Crochet work in progress" loading="lazy">
```

**With:**
```html
<img src="images/about/workspace.jpg" alt="My creative workspace" loading="lazy">
```

## 🚀 Step 4: Optimize Images for Web

Instagram images can be large. Let's optimize them:

### Option 1: Use Online Tools (Easiest)

Visit these free tools to compress your images:
- **TinyPNG** (https://tinypng.com/) - Compress JPG/PNG files
- **Squoosh** (https://squoosh.app/) - Google's image optimizer
- **Compressor.io** (https://compressor.io/) - Online image compressor

**Settings to use:**
- Quality: 80-85%
- Format: JPG for photos
- Max width: 1920px for hero images, 1200px for gallery

### Option 2: Use the Built-in Optimization Script

If you have Node.js installed:

```bash
# Install dependencies
npm install --save-dev sharp

# Run optimization
node optimize-images.js
```

This will create optimized versions of all your images.

## 📋 Quick Checklist

- [ ] Download 3-5 best images from @_.jambi_/ for hero slideshow
- [ ] Download 6+ images for your gallery
- [ ] Download 1 workspace/profile image for about section
- [ ] Rename files with simple, descriptive names
- [ ] Place images in correct folders (hero/, gallery/, about/)
- [ ] Update `index.html` hero section with your image paths
- [ ] Update `main.js` lookbook array with your image paths
- [ ] Update `index.html` about section image (optional)
- [ ] Optimize images to reduce file size
- [ ] Test the website locally
- [ ] Verify all images load correctly

## 💡 Tips for Selecting Instagram Images

### For Hero Slideshow (3-5 images):
- ✅ Your most eye-catching, professional-looking images
- ✅ Landscape orientation preferred (horizontal)
- ✅ Clear, well-lit photos
- ✅ Images that represent your best work
- ❌ Avoid: blurry, dark, or cluttered images

### For Gallery (6+ images):
- ✅ Variety of your creations
- ✅ Mix of colors, styles, and products
- ✅ High-quality, clear images
- ✅ Both close-ups and full views
- ✅ Any orientation (square, portrait, landscape)

### For About Section (1 image):
- ✅ Your workspace or you creating
- ✅ Personal and authentic
- ✅ Well-lit, inviting atmosphere
- ✅ Shows your creative process

## 🎨 Example: Complete Update

Here's a complete example of updating from placeholder images to your Instagram images:

### Before (Using Unsplash):
```javascript
const lookbook = [
  {
    title: 'Beautiful crochet sweater project',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1614963326505-842876ff4238?w=1200&q=80',
        alt: 'Beautiful crochet sweater'
      }
    ]
  }
];
```

### After (Using Your Instagram Images):
```javascript
const lookbook = [
  {
    title: 'Pink handmade crochet bag',
    images: [
      {
        src: 'images/gallery/pink-bag.jpg',
        alt: 'Beautiful pink handmade crochet bag from @_.jambi_'
      }
    ]
  }
];
```

## 🆘 Troubleshooting

### Images not showing up?

1. **Check file paths**: Make sure the path matches exactly
   - Correct: `images/gallery/project1.jpg`
   - Wrong: `Images/Gallery/Project1.jpg` (case matters!)

2. **Check file exists**: Verify the file is in the right location
   ```bash
   ls -la images/gallery/
   ```

3. **Check file permissions**: Make sure files are readable
   ```bash
   chmod 644 images/gallery/*.jpg
   ```

4. **Open browser console**: Press F12, check for 404 errors

### Images loading slowly?

1. **Compress images**: Use TinyPNG or Squoosh
2. **Reduce dimensions**: Max 1920px wide for hero, 1200px for gallery
3. **Use JPG format**: Better compression than PNG for photos
4. **Optimize images**: Run the optimization script

### Images look stretched or cropped?

1. **Hero images**: Use landscape orientation (16:9 ratio ideal)
2. **Gallery images**: Any size works, but consistent ratios look better
3. **Check aspect ratios**: Similar dimensions across images in same section

## 📞 Need More Help?

- Check the [Media Customization Guide](MEDIA_GUIDE.md) for general image instructions
- Review [Examples](EXAMPLES.md) for code samples
- Open an issue on GitHub if you're stuck

## 🎉 You're All Set!

Once you've updated your images, your portfolio will showcase your beautiful Instagram creations from @_.jambi_/! 

**Don't forget to:**
- Test the website locally before deploying
- Verify all Instagram links work correctly
- Share your portfolio on your Instagram! 📱✨

---

**Made for @_.jambi_/ - Showcasing beautiful handmade creations** ❤️
