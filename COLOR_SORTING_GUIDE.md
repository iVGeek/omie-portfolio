# Color Sorting Guide

## Overview

The OMIE Portfolio now includes an **automated color sorting program** that analyzes your gallery images and organizes them by color. This makes it easy to add new images and have them automatically categorized and displayed on your website.

## Features

✨ **Automatic Color Detection** - Analyzes images to extract dominant colors  
🎨 **Smart Categorization** - Groups images by color family (Pink, Red, Orange, etc.)  
💡 **Name Suggestions** - Suggests creative category names based on colors  
📊 **Sortable Output** - Generates organized gallery configuration  
🔄 **Easy Updates** - Simple workflow for adding new images

## Quick Start

### 1. Install Dependencies

First time setup:

```bash
npm install
```

This installs the `sharp` library for image analysis.

### 2. Add Your Images

Place your images in the `images/gallery/` directory. You can:
- Add images directly to `images/gallery/`
- Or create subdirectories for manual organization

Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`

### 3. Run the Color Sorter

```bash
npm run color-sort
```

Or with Node directly:

```bash
node color-sort.js
```

### 4. Review Results

The script will:
- Analyze each image's dominant color
- Group images by color family
- Generate a configuration file (`gallery-config.json`)
- Generate JavaScript code (`gallery-config.js`)

### 5. Update Your Website

Copy the generated `galleryCategories` array from `gallery-config.js` into `main.js`:

1. Open `gallery-config.js` to see the generated configuration
2. Open `main.js` in your editor
3. Find the existing `galleryCategories` array (around line 43)
4. Replace it with the new configuration from `gallery-config.js`
5. Save the file

### 6. Update Filter Buttons (Optional)

If you have new categories, update the filter buttons in `index.html`:

Find the filter buttons section (around line 225) and update to match your new categories:

```html
<div class="filter-buttons" role="group" aria-label="Gallery filters">
  <button class="filter-btn active" data-filter="all">All</button>
  <button class="filter-btn" data-filter="pinkie-flamingo">Pinkie Flamingo</button>
  <button class="filter-btn" data-filter="sunset-hues">Sunset Hues</button>
  <!-- Add new categories here -->
</div>
```

## Command Options

### Preview Without Saving (Dry Run)

To see what the script will do without making changes:

```bash
npm run color-sort:preview
```

Or:

```bash
node color-sort.js --dry-run
```

### Custom Output File

Save results to a different file:

```bash
node color-sort.js --output my-gallery.json
```

### Help

Show all available options:

```bash
node color-sort.js --help
```

## How It Works

### Color Analysis

The script uses the following process:

1. **Scan Directory** - Finds all image files in `images/gallery/`
2. **Extract Colors** - Uses the `sharp` library to analyze each image
3. **Calculate HSL** - Converts RGB values to HSL (Hue, Saturation, Lightness)
4. **Categorize** - Matches colors to predefined color families
5. **Group & Sort** - Groups images by color and sorts them

### Color Categories

Images are categorized into these color families:

| Category | Hue Range | Example Names |
|----------|-----------|---------------|
| **Pink** | 300-350° | Pinkie Flamingo, Rosy Blush, Sweet Pink |
| **Red** | 350-20° | Red Ruby, Crimson Charm, Ruby Rose |
| **Orange** | 20-45° | Sunset Hues, Golden Orange, Autumn Glow |
| **Yellow** | 45-65° | Sunny Yellow, Golden Hour, Lemon Zest |
| **Green** | 65-165° | Emerald Green, Forest Dream, Sage Whisper |
| **Cyan** | 165-195° | Aqua Marine, Teal Treasure, Ocean Breeze |
| **Blue** | 195-260° | Azure Blue, Sky Blue, Sapphire |
| **Purple** | 260-300° | Purple Elegance, Violet Dreams, Lavender |
| **Brown** | 20-40° (low sat) | Earthy Brown, Chocolate, Caramel |
| **Neutral** | Any (low sat) | Neutral Tones, Classic Beige, Soft Grey |

### Name Suggestions

The script suggests creative names for each category. If a name is already used, it tries the next suggestion or generates a numbered variant (e.g., "Sunset Hues 2").

## Examples

### Example 1: Fresh Start

```bash
# Remove existing categories and start fresh
rm -rf images/gallery/*

# Add your new images
cp ~/Downloads/my-crochet-*.jpg images/gallery/

# Run color sorter
npm run color-sort

# Review and update main.js
```

### Example 2: Adding New Images

```bash
# Add more images to existing gallery
cp ~/Downloads/new-*.jpg images/gallery/

# Preview what will change
npm run color-sort:preview

# If it looks good, run for real
npm run color-sort

# Update main.js with new configuration
```

### Example 3: Manual Organization

You can also organize images manually in subdirectories:

```
images/gallery/
  ├── Pink Collection/
  │   ├── pink-1.jpg
  │   └── pink-2.jpg
  ├── Blue Works/
  │   ├── blue-1.jpg
  │   └── blue-2.jpg
  └── Mixed/
      └── multicolor.jpg
```

The script will still analyze each image and categorize by actual color, not just directory name.

## Output Format

### gallery-config.json

Contains the complete configuration as JSON:

```json
[
  {
    "name": "Pinkie Flamingo",
    "slug": "pinkie-flamingo",
    "colorFamily": "Pink",
    "description": "A vibrant collection featuring playful pink hues...",
    "color": "#FF1493",
    "bgColor": "linear-gradient(...)",
    "images": [
      { "src": "images/gallery/pink-1.jpg", "alt": "Pinkie Flamingo - Pink 1" }
    ]
  }
]
```

### gallery-config.js

Contains ready-to-use JavaScript code:

```javascript
const galleryCategories = [
  {
    name: 'Pinkie Flamingo',
    description: '...',
    // ... rest of configuration
  }
];
```

## Troubleshooting

### Sharp Installation Issues

If `npm install` fails with sharp errors:

**On Ubuntu/Debian:**
```bash
sudo apt-get install build-essential libvips-dev
npm install
```

**On macOS:**
```bash
brew install vips
npm install
```

**On Windows:**
- Install Visual Studio Build Tools
- Then run `npm install`

### No Images Found

```
Error: No images found in gallery directory.
```

**Solution:** Make sure you have images in `images/gallery/` directory.

### Wrong Colors Detected

If an image is miscategorized:
1. The image might have mixed colors - the script picks the dominant one
2. You can manually override by editing the generated config
3. Or adjust the color rules in `color-sort.js`

### Fallback Without Sharp

If you can't install sharp, the script will run in fallback mode:
- It will try to infer categories from directory names
- Manual categorization will be needed
- Consider using a different machine with sharp support for initial setup

## Advanced Configuration

### Customizing Color Ranges

Edit `color-sort.js` to adjust color detection:

```javascript
const COLOR_CATEGORIES = {
  'Pink': { 
    hueRange: [300, 350],  // Adjust hue range
    satRange: [40, 100],   // Adjust saturation range
    lightRange: [40, 90],  // Adjust lightness range
    names: ['Your Custom Names']
  }
};
```

### Adding New Color Categories

Add a new category in the `COLOR_CATEGORIES` object:

```javascript
'Lime': { 
  hueRange: [60, 80], 
  satRange: [60, 100], 
  lightRange: [50, 80],
  names: ['Lime Green', 'Fresh Lime', 'Citrus']
}
```

### Customizing Descriptions

Edit the `descriptions` object in the `generateGalleryConfig` function:

```javascript
const descriptions = {
  'Pink': 'Your custom description here',
  // ...
};
```

## Integration with Existing Workflow

### With Instagram Images

1. Download images from Instagram (see `INSTAGRAM_GUIDE.md`)
2. Add them to `images/gallery/`
3. Run `npm run color-sort`
4. Update `main.js` with results

### With Image Optimization

Combine with the image optimizer:

```bash
# Add images
cp ~/Downloads/*.jpg images/gallery/

# Optimize them first
npm run optimize

# Then sort by color
npm run color-sort

# Update configuration
```

## Best Practices

1. **Consistent Naming** - Use descriptive filenames for better alt text generation
2. **Image Quality** - Use high-quality images for better color detection
3. **Review Results** - Always review the generated config before deploying
4. **Backup** - Keep a backup of your original `main.js` before updating
5. **Test Locally** - Test the website locally before deploying changes

## Support

For issues or questions:
1. Check this guide first
2. Review the `--help` output: `node color-sort.js --help`
3. Check the console output for detailed error messages
4. Open an issue on GitHub if you need help

---

**Made with ❤️ for OMIE Portfolio**
