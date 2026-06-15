# Quick Start: Color Sorting Example

This guide shows you exactly how to use the color sorting feature from start to finish.

## Scenario: Adding New Images to Your Portfolio

Let's say you have 10 new crochet images you want to add to your portfolio website. Here's how to do it with automatic color sorting:

### Step 1: Add Your Images

```bash
# Copy your images to the gallery directory
cp ~/Downloads/my-new-crochet-*.jpg images/gallery/

# Or organize them in subdirectories if you prefer
mkdir -p images/gallery/New\ Work
cp ~/Downloads/*.jpg images/gallery/New\ Work/
```

### Step 2: Run the Color Sorter

```bash
# First, preview what it will do (optional but recommended)
npm run color-sort:preview

# If it looks good, run it for real
npm run color-sort
```

You'll see output like:
```
🎨 Color Sorting Program for OMIE Portfolio

Scanning gallery directory...
Found 43 images

Analyzing new-pink-bag.jpg... ✓ Pink (H:330, S:85%, L:65%)
Analyzing new-blue-sweater.jpg... ✓ Blue (H:210, S:70%, L:55%)
...

============================================================
📊 Summary Report
============================================================

1. Pinkie Flamingo (Pink)
   Color: #FF1493
   Images: 15

2. Azure Blue (Blue)
   Color: #4169E1
   Images: 12
...
```

### Step 3: Verify the Configuration

```bash
# Run the test to verify everything is correct
npm test
```

You should see:
```
✅ All tests passed! Configuration is ready to use.
```

### Step 4: Update main.js

Open the generated `gallery-config.js` file and copy the entire `galleryCategories` array:

```javascript
// From gallery-config.js
const galleryCategories = [
  {
    name: 'Pinkie Flamingo',
    description: '...',
    color: '#FF1493',
    images: [ /* ... */ ]
  },
  // ... more categories
];
```

Now open `main.js` and find the existing `galleryCategories` array (around line 43). Replace it with your new configuration.

**Before:**
```javascript
// main.js (old)
const galleryCategories = [
  {
    name: 'Pinkie Flamingo',
    description: 'A vibrant collection...',
    images: [
      { src: 'images/gallery/Pinkie Flamingo/pink-flamingo-01.jpg', ... }
    ]
  }
  // ... old categories
];
```

**After:**
```javascript
// main.js (new)
const galleryCategories = [
  {
    name: 'Pinkie Flamingo',
    description: 'A vibrant collection...',
    images: [
      { src: 'images/gallery/Pinkie Flamingo/pink-flamingo-01.jpg', ... },
      { src: 'images/gallery/New Work/new-pink-bag.jpg', ... }  // ← New images added!
    ]
  }
  // ... updated categories
];
```

### Step 5: Update Filter Buttons (If Needed)

If you have new categories, update the filter buttons in `index.html`.

Find this section (around line 225):

```html
<div class="filter-buttons" role="group" aria-label="Gallery filters">
  <button class="filter-btn active" data-filter="all">All</button>
  <button class="filter-btn" data-filter="pinkie-flamingo">Pinkie Flamingo</button>
  <button class="filter-btn" data-filter="red-ruby">Red Ruby</button>
  <button class="filter-btn" data-filter="sunset-hues">Sunset Hues</button>
  <button class="filter-btn" data-filter="purple-elegance">Purple Elegance</button>
</div>
```

Update the buttons to match your categories. The `data-filter` attribute should match the category slug from your config (lowercase, with hyphens):

```html
<div class="filter-buttons" role="group" aria-label="Gallery filters">
  <button class="filter-btn active" data-filter="all">All</button>
  <button class="filter-btn" data-filter="pinkie-flamingo">Pinkie Flamingo</button>
  <button class="filter-btn" data-filter="azure-blue">Azure Blue</button>
  <!-- Add your new categories here -->
</div>
```

### Step 6: Test Locally

Start a local server to test:

```bash
npm start
# or
npm run dev
```

Open http://localhost:3000 (or the port shown) in your browser.

Check that:
- ✅ All images are displayed in the gallery
- ✅ Filter buttons work correctly
- ✅ Images are grouped by color as expected
- ✅ Clicking on categories shows the right images

### Step 7: Deploy

Once everything looks good locally, commit and push your changes:

```bash
git add images/gallery/ main.js index.html
git commit -m "Add new crochet images with color sorting"
git push
```

## Real-World Example

### Before: Manual Organization

You had to manually:
1. Decide which category each image belongs to
2. Name each image file consistently
3. Update the `galleryCategories` array in main.js
4. Add each image path one by one
5. Update filter buttons if you added new categories

This took 30+ minutes for 10 new images.

### After: Automated Color Sorting

Now you just:
1. Add images to `images/gallery/` (any filename works)
2. Run `npm run color-sort`
3. Copy/paste the generated configuration
4. Test locally
5. Deploy

This takes less than 5 minutes! 🎉

## Advanced: Adding with Different Workflows

### Workflow 1: Mixed Colors

If you have images with multiple colors, the script will pick the dominant color:

```bash
# Add mixed-color images
cp ~/Downloads/rainbow-*.jpg images/gallery/

# Run sorter - it will categorize by dominant color
npm run color-sort
```

### Workflow 2: Manual Override

If you disagree with the automatic categorization:

1. Run the sorter to get the base configuration
2. Open `gallery-config.js`
3. Manually move images between categories
4. Save and copy to `main.js`

### Workflow 3: Optimize First

For best results, optimize images before sorting:

```bash
# Add images
cp ~/Downloads/*.jpg images/gallery/

# Optimize them (requires sharp)
npm run optimize

# Then sort by color
npm run color-sort
```

## Tips for Success

1. **Use descriptive filenames** - They're used to generate alt text
   - Good: `pink-crochet-blanket.jpg`
   - Okay: `IMG_2024_01_15.jpg`

2. **Consistent image quality** - Higher quality = better color detection
   - Aim for good lighting when photographing
   - Avoid heavy filters that change colors

3. **Review before deploying** - Always check the results locally first
   - Run `npm test` to validate
   - Start local server to preview

4. **Keep backups** - Before updating main.js, make a backup
   ```bash
   cp main.js main.js.backup
   ```

5. **Document your categories** - Add notes about what colors work well together

## Troubleshooting

**Images sorted incorrectly?**
- Check if the image has mixed colors (dominant color wins)
- Try adjusting lighting in the photo
- Manually override in the config file

**New category created when it shouldn't?**
- The image color might be outside existing category ranges
- You can manually move it to an existing category
- Or embrace the new category!

**Script fails to run?**
- Make sure you ran `npm install`
- Check that `sharp` is installed
- See COLOR_SORTING_GUIDE.md for troubleshooting

## Need More Help?

- 📖 Full Documentation: [COLOR_SORTING_GUIDE.md](COLOR_SORTING_GUIDE.md)
- 🔧 Script Options: `node color-sort.js --help`
- 🧪 Test Command: `npm test`

---

**Happy sorting! 🎨**
