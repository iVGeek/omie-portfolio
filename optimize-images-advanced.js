#!/usr/bin/env node

/**
 * Advanced Image Optimization Script
 * Generates WebP versions and responsive sizes for all images
 * Usage: node optimize-images-advanced.js
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Configuration
const CONFIG = {
  // Directories to process
  inputDirs: [
    'public/images/hero',
    'public/images/about',
    'public/images/gallery'
  ],
  
  // Responsive sizes to generate
  sizes: {
    hero: [1920, 1440, 1024, 768, 480],
    gallery: [1200, 800, 600, 400],
    about: [800, 600, 400]
  },
  
  // Quality settings
  quality: {
    jpeg: 80,
    webp: 82
  },
  
  // File extensions to process
  extensions: /\.(jpe?g|png)$/i
};

/**
 * Get directory type from path
 */
function getDirType(filePath) {
  if (filePath.includes('/hero')) return 'hero';
  if (filePath.includes('/about')) return 'about';
  return 'gallery';
}

/**
 * Process a single image file
 */
async function processImage(inputPath, outputDir) {
  try {
    const fileName = path.basename(inputPath);
    const baseName = path.parse(fileName).name;
    const dirType = getDirType(inputPath);
    const sizes = CONFIG.sizes[dirType] || CONFIG.sizes.gallery;
    
    console.log(`\n📸 Processing: ${fileName}`);
    
    // Get image metadata
    const metadata = await sharp(inputPath).metadata();
    console.log(`   Original: ${metadata.width}x${metadata.height} (${(metadata.size / 1024).toFixed(1)}KB)`);
    
    const results = [];
    
    // Generate responsive JPEG sizes
    for (const width of sizes) {
      if (width >= metadata.width) continue; // Skip if size is larger than original
      
      const outputPath = path.join(outputDir, `${baseName}-${width}w.jpg`);
      await sharp(inputPath)
        .resize({ width, withoutEnlargement: true })
        .jpeg({ quality: CONFIG.quality.jpeg, progressive: true })
        .toFile(outputPath);
      
      const stats = fs.statSync(outputPath);
      results.push(`${width}w: ${(stats.size / 1024).toFixed(1)}KB`);
    }
    
    // Generate WebP versions for each size
    for (const width of sizes) {
      if (width >= metadata.width) continue;
      
      const outputPath = path.join(outputDir, `${baseName}-${width}w.webp`);
      await sharp(inputPath)
        .resize({ width, withoutEnlargement: true })
        .webp({ quality: CONFIG.quality.webp })
        .toFile(outputPath);
    }
    
    // Generate full-size WebP
    const webpPath = path.join(outputDir, `${baseName}.webp`);
    await sharp(inputPath)
      .webp({ quality: CONFIG.quality.webp })
      .toFile(webpPath);
    
    const webpStats = fs.statSync(webpPath);
    console.log(`   ✓ Generated ${sizes.length} responsive sizes + WebP`);
    console.log(`   ✓ WebP savings: ${((1 - webpStats.size / metadata.size) * 100).toFixed(1)}%`);
    
    return true;
  } catch (error) {
    console.error(`   ✗ Error processing ${inputPath}:`, error.message);
    return false;
  }
}

/**
 * Process all images in a directory
 */
async function processDirectory(dirPath) {
  if (!fs.existsSync(dirPath)) {
    console.log(`⚠️  Directory not found: ${dirPath}`);
    return;
  }
  
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    
    if (entry.isDirectory()) {
      // Recursively process subdirectories
      await processDirectory(fullPath);
    } else if (entry.isFile() && CONFIG.extensions.test(entry.name)) {
      // Skip already processed files
      if (entry.name.includes('-') && entry.name.includes('w.')) {
        continue;
      }
      
      await processImage(fullPath, dirPath);
    }
  }
}

/**
 * Main execution
 */
async function main() {
  console.log('🚀 Advanced Image Optimization');
  console.log('================================\n');
  
  let totalProcessed = 0;
  
  for (const dir of CONFIG.inputDirs) {
    const fullPath = path.join(__dirname, dir);
    console.log(`\n📁 Processing directory: ${dir}`);
    await processDirectory(fullPath);
    totalProcessed++;
  }
  
  console.log('\n✨ Optimization complete!');
  console.log(`📊 Processed ${totalProcessed} directories`);
  console.log('\n💡 Next steps:');
  console.log('   1. Update HTML/JS to use responsive images with <picture> or srcset');
  console.log('   2. Test image loading on different devices');
  console.log('   3. Consider using a CDN for image delivery\n');
}

// Run the script
main().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
