# Gallery Images from Instagram

This folder should contain your gallery images from Instagram (@_.jambi_/).

## How to Add Your Instagram Images

1. **Download images from your Instagram account**:
   - Visit https://www.instagram.com/_.jambi_/
   - For each post you want to use, click the three dots (...) → select "Embed" or save the image
   - Alternatively, use Instagram's Data Download feature (Settings → Privacy → Data Download)
   - Or use browser dev tools to save images directly

2. **Save images to this folder**:
   - Name them: `project1.jpg`, `project2.jpg`, `project3.jpg`, etc.
   - Or use descriptive names: `pink-bag.jpg`, `blue-sweater.jpg`, etc.
   - Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`

3. **Optimize images** (optional but recommended):
   - Use https://tinypng.com/ or https://squoosh.app/
   - Recommended size: 800-1200px width
   - Quality: 80-85%

4. **Update main.js**:
   - The gallery images are already configured to look in this folder
   - Match your filenames to the src paths in the lookbook array

## Current Configuration

The `main.js` file is configured to load:
- `images/gallery/project1.jpg`
- `images/gallery/project2.jpg`
- `images/gallery/project3.jpg`
- `images/gallery/project4.jpg`
- `images/gallery/project5.jpg`
- `images/gallery/project6.jpg`

Simply add your Instagram images with these names, or update the paths in `main.js` to match your chosen filenames.

## Need More Help?

See the main [INSTAGRAM_GUIDE.md](../../INSTAGRAM_GUIDE.md) for detailed instructions.
