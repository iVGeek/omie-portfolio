// optimize-images.js
// Optional image optimization script using sharp.
// Generates resized JPG variants and a WebP for each image in public/images/
//
// Usage:
// 1. npm install --save-dev sharp
// 2. node optimize-images.js
//
// Adjust sizes[] as needed.

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'public', 'images');
const sizes = [1600, 1200, 800, 480]; // widths to generate

if (!fs.existsSync(dir)) {
  console.error('Directory public/images does not exist. Create it and add images first.');
  process.exit(1);
}

async function processFile(file) {
  const input = path.join(dir, file);
  const name = path.parse(file).name;
  console.log(`Processing ${file}...`);

  // generate sizes as jpg
  for (const w of sizes) {
    const outJpg = path.join(dir, `${name}-${w}.jpg`);
    await sharp(input).resize({ width: w }).jpeg({ quality: 80 }).toFile(outJpg);
  }

  // generate webp (full size)
  const outWebp = path.join(dir, `${name}.webp`);
  await sharp(input).webp({ quality: 80 }).toFile(outWebp);

  console.log(`Done ${file}`);
}

(async () => {
  const files = fs.readdirSync(dir).filter(f => /\.(jpe?g|png)$/i.test(f));
  for (const f of files) {
    try {
      await processFile(f);
    } catch (e) {
      console.error('Error processing', f, e);
    }
  }
  console.log('All done.');
})();
