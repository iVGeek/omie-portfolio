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

const dir = path.join(__dirname, 'images');

if (!fs.existsSync(dir)) {
  console.error('Directory images does not exist. Create it and add images first.');
  process.exit(1);
}

async function processFile(input) {
  const parse = path.parse(input);
  const outWebp = path.join(parse.dir, `${parse.name}.webp`);
  console.log(`WebP: ${path.relative(dir, input)}`);
  await sharp(input).webp({ quality: 85 }).toFile(outWebp);
}

function walk(dirPath) {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath);
    } else if (/\.(jpe?g|png)$/i.test(entry.name)) {
      // skip if webp already exists
      const webpPath = path.join(dirPath, `${path.parse(entry.name).name}.webp`);
      if (!fs.existsSync(webpPath)) {
        processFile(fullPath);
      }
    }
  }
}

(async () => {
  console.log(`Generating WebP for images in ${dir}...`);
  walk(dir);
  console.log('All done.');
})();
