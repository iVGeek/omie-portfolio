#!/usr/bin/env node

/**
 * Color Sorting Program for OMIE Portfolio
 * 
 * This script analyzes images in the gallery folder and:
 * 1. Extracts dominant colors from each image
 * 2. Categorizes images by color family
 * 3. Suggests appropriate category names
 * 4. Generates updated gallery configuration
 * 
 * Usage:
 *   npm install (first time only)
 *   node color-sort.js [--dry-run] [--output output.json]
 * 
 * Options:
 *   --dry-run    : Preview changes without updating files
 *   --output FILE: Write results to specified JSON file (default: gallery-config.json)
 *   --help       : Show this help message
 */

const fs = require('fs');
const path = require('path');

// Check if sharp is available, if not use fallback
let sharp;
try {
  sharp = require('sharp');
  console.log('✓ Using sharp for image analysis');
} catch (e) {
  console.warn('⚠ Sharp not installed. Using basic color analysis.');
  console.warn('  Run "npm install sharp" for better color extraction.');
}

// ================================
// Configuration
// ================================

const GALLERY_DIR = path.join(__dirname, 'images', 'gallery');
const OUTPUT_FILE = 'gallery-config.json';

// Color categories with their hue ranges (in HSL)
const COLOR_CATEGORIES = {
  'Pink': { 
    hueRange: [300, 350], 
    satRange: [40, 100], 
    lightRange: [40, 90],
    names: ['Pinkie Flamingo', 'Rosy Blush', 'Sweet Pink', 'Cotton Candy', 'Coral Dreams']
  },
  'Red': { 
    hueRange: [350, 20], 
    satRange: [50, 100], 
    lightRange: [30, 70],
    names: ['Red Ruby', 'Crimson Charm', 'Ruby Rose', 'Cherry Red', 'Scarlet Beauty']
  },
  'Orange': { 
    hueRange: [20, 45], 
    satRange: [50, 100], 
    lightRange: [40, 75],
    names: ['Sunset Hues', 'Golden Orange', 'Autumn Glow', 'Tangerine Dream', 'Peachy Keen']
  },
  'Yellow': { 
    hueRange: [45, 65], 
    satRange: [50, 100], 
    lightRange: [50, 90],
    names: ['Sunny Yellow', 'Golden Hour', 'Lemon Zest', 'Buttercup', 'Sunshine']
  },
  'Green': { 
    hueRange: [65, 165], 
    satRange: [30, 100], 
    lightRange: [30, 80],
    names: ['Emerald Green', 'Forest Dream', 'Sage Whisper', 'Mint Fresh', 'Meadow']
  },
  'Cyan': { 
    hueRange: [165, 195], 
    satRange: [40, 100], 
    lightRange: [40, 80],
    names: ['Aqua Marine', 'Teal Treasure', 'Cyan Dream', 'Ocean Breeze', 'Turquoise']
  },
  'Blue': { 
    hueRange: [195, 260], 
    satRange: [40, 100], 
    lightRange: [30, 80],
    names: ['Azure Blue', 'Sky Blue', 'Sapphire', 'Ocean Deep', 'Cobalt Dream']
  },
  'Purple': { 
    hueRange: [260, 300], 
    satRange: [30, 100], 
    lightRange: [30, 80],
    names: ['Purple Elegance', 'Violet Dreams', 'Lavender Fields', 'Royal Purple', 'Amethyst']
  },
  'Brown': { 
    hueRange: [20, 40], 
    satRange: [20, 60], 
    lightRange: [20, 50],
    names: ['Earthy Brown', 'Chocolate', 'Caramel', 'Rustic Charm', 'Coffee']
  },
  'Neutral': { 
    hueRange: [0, 360], 
    satRange: [0, 20], 
    lightRange: [20, 90],
    names: ['Neutral Tones', 'Classic Beige', 'Ivory Dreams', 'Soft Grey', 'Natural']
  }
};

// ================================
// Helper Functions
// ================================

/**
 * Convert RGB to HSL
 */
function rgbToHsl(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;

  if (max === min) {
    h = s = 0; // achromatic
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
      case g: h = ((b - r) / d + 2) / 6; break;
      case b: h = ((r - g) / d + 4) / 6; break;
    }
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100)
  };
}

/**
 * Check if hue is in range (handles wrap-around at 0/360)
 */
function hueInRange(hue, range) {
  const [min, max] = range;
  if (min > max) {
    // Wrap-around case (e.g., 350-20 for red)
    return hue >= min || hue <= max;
  }
  return hue >= min && hue <= max;
}

/**
 * Categorize color based on HSL values
 */
function categorizeColor(hsl) {
  const { h, s, l } = hsl;
  
  // Check each color category
  for (const [categoryName, rules] of Object.entries(COLOR_CATEGORIES)) {
    if (hueInRange(h, rules.hueRange) &&
        s >= rules.satRange[0] && s <= rules.satRange[1] &&
        l >= rules.lightRange[0] && l <= rules.lightRange[1]) {
      return categoryName;
    }
  }
  
  return 'Neutral';
}

/**
 * Extract dominant color using sharp
 */
async function extractDominantColorSharp(imagePath) {
  try {
    const { dominant } = await sharp(imagePath)
      .resize(100, 100, { fit: 'cover' })
      .stats();
    
    const { r, g, b } = dominant;
    return rgbToHsl(r, g, b);
  } catch (error) {
    console.error(`Error analyzing ${imagePath}:`, error.message);
    return null;
  }
}

/**
 * Fallback color extraction (basic - returns default)
 */
function extractDominantColorFallback(imagePath) {
  // Without sharp, we can't analyze the image
  // Return null to indicate manual categorization needed
  console.warn(`Cannot analyze ${imagePath} without sharp library`);
  return null;
}

/**
 * Extract dominant color from image
 */
async function extractDominantColor(imagePath) {
  if (sharp) {
    return await extractDominantColorSharp(imagePath);
  } else {
    return extractDominantColorFallback(imagePath);
  }
}

/**
 * Scan directory for images
 */
function scanDirectory(dir) {
  const images = [];
  
  function scan(currentDir, relativePath = '') {
    const entries = fs.readdirSync(currentDir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry.name);
      const relPath = path.join(relativePath, entry.name);
      
      if (entry.isDirectory() && !entry.name.startsWith('.')) {
        scan(fullPath, relPath);
      } else if (entry.isFile()) {
        const ext = path.extname(entry.name).toLowerCase();
        if (['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
          images.push({
            name: entry.name,
            path: fullPath,
            relativePath: relPath,
            directory: relativePath || 'root'
          });
        }
      }
    }
  }
  
  scan(dir);
  return images;
}

/**
 * Generate category name suggestions
 */
function suggestCategoryName(colorCategory, existingNames = []) {
  const suggestions = COLOR_CATEGORIES[colorCategory].names.filter(
    name => !existingNames.includes(name)
  );
  
  if (suggestions.length > 0) {
    return suggestions[0];
  }
  
  // If all names are taken, generate a numbered variant
  const baseName = COLOR_CATEGORIES[colorCategory].names[0];
  let counter = 2;
  let newName = `${baseName} ${counter}`;
  while (existingNames.includes(newName)) {
    counter++;
    newName = `${baseName} ${counter}`;
  }
  return newName;
}

/**
 * Convert hex color to RGB
 */
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

/**
 * Generate hex color for category
 */
function getCategoryColor(colorCategory) {
  const colorMap = {
    'Pink': '#FF1493',
    'Red': '#DC143C',
    'Orange': '#FF6600',
    'Yellow': '#FFD700',
    'Green': '#228B22',
    'Cyan': '#00CED1',
    'Blue': '#4169E1',
    'Purple': '#9370DB',
    'Brown': '#8B4513',
    'Neutral': '#A9A9A9'
  };
  
  return colorMap[colorCategory] || '#808080';
}

/**
 * Generate CSS gradient for category
 */
function getCategoryGradient(colorCategory) {
  const color = getCategoryColor(colorCategory);
  return `linear-gradient(135deg, ${color}20 0%, ${color}10 100%)`;
}

/**
 * Format image data for gallery configuration
 */
function formatImageData(image, categoryName) {
  const baseName = path.basename(image.name, path.extname(image.name));
  const displayName = baseName
    .split(/[-_]/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  
  return {
    src: `images/gallery/${image.relativePath}`,
    alt: `${categoryName} - ${displayName}`
  };
}

// ================================
// Main Processing
// ================================

async function analyzeImages() {
  console.log('🎨 Color Sorting Program for OMIE Portfolio\n');
  console.log('Scanning gallery directory...');
  
  if (!fs.existsSync(GALLERY_DIR)) {
    console.error(`Error: Gallery directory not found: ${GALLERY_DIR}`);
    console.error('Please create the directory and add images first.');
    process.exit(1);
  }
  
  const images = scanDirectory(GALLERY_DIR);
  
  if (images.length === 0) {
    console.error('No images found in gallery directory.');
    process.exit(1);
  }
  
  console.log(`Found ${images.length} images\n`);
  
  // Analyze each image
  const results = [];
  
  for (const image of images) {
    process.stdout.write(`Analyzing ${image.name}... `);
    
    const hsl = await extractDominantColor(image.path);
    
    if (hsl) {
      const category = categorizeColor(hsl);
      results.push({
        ...image,
        hsl,
        category
      });
      console.log(`✓ ${category} (H:${hsl.h}, S:${hsl.s}%, L:${hsl.l}%)`);
    } else {
      // If we can't analyze, try to infer from directory name
      let inferredCategory = 'Neutral';
      const dirName = image.directory.toLowerCase();
      
      for (const [catName] of Object.entries(COLOR_CATEGORIES)) {
        if (dirName.includes(catName.toLowerCase())) {
          inferredCategory = catName;
          break;
        }
      }
      
      results.push({
        ...image,
        hsl: { h: 0, s: 0, l: 50 },
        category: inferredCategory,
        inferred: true
      });
      console.log(`⚠ ${inferredCategory} (inferred from directory)`);
    }
  }
  
  return results;
}

/**
 * Group images by color category
 */
function groupByCategory(results) {
  const grouped = {};
  
  for (const result of results) {
    if (!grouped[result.category]) {
      grouped[result.category] = [];
    }
    grouped[result.category].push(result);
  }
  
  return grouped;
}

/**
 * Generate gallery configuration
 */
function generateGalleryConfig(grouped) {
  const categories = [];
  const usedNames = [];
  
  // Sort categories by number of images (descending)
  const sortedCategories = Object.entries(grouped)
    .sort((a, b) => b[1].length - a[1].length);
  
  for (const [colorCategory, images] of sortedCategories) {
    const categoryName = suggestCategoryName(colorCategory, usedNames);
    usedNames.push(categoryName);
    
    const categorySlug = categoryName.toLowerCase().replace(/\s+/g, '-');
    const color = getCategoryColor(colorCategory);
    const bgColor = getCategoryGradient(colorCategory);
    
    // Generate description
    const descriptions = {
      'Pink': 'A vibrant collection featuring playful pink hues, perfect for bold and cheerful designs',
      'Red': 'Bold crimson designs that capture attention with rich, luxurious red tones',
      'Orange': 'Warm orange tones reminiscent of golden sunsets and cozy autumn evenings',
      'Yellow': 'Bright and cheerful yellow designs that bring sunshine to any space',
      'Green': 'Fresh and natural green tones inspired by nature and tranquility',
      'Cyan': 'Cool aqua and teal shades that evoke calm ocean waters',
      'Blue': 'Serene blue designs ranging from sky blue to deep ocean hues',
      'Purple': 'Sophisticated purple designs that embody grace and refined artistry',
      'Brown': 'Earthy and warm brown tones for a natural, rustic aesthetic',
      'Neutral': 'Timeless neutral tones that complement any style'
    };
    
    const category = {
      name: categoryName,
      slug: categorySlug,
      colorFamily: colorCategory,
      description: descriptions[colorCategory] || 'Beautiful handcrafted designs',
      materials: 'Premium cotton yarn, high-quality stuffing',
      techniques: 'Traditional crochet techniques with modern color aesthetics',
      inspiration: `Inspired by the beauty of ${colorCategory.toLowerCase()} tones in nature`,
      color: color,
      bgColor: bgColor,
      images: images
        .sort((a, b) => a.name.localeCompare(b.name))
        .map(img => formatImageData(img, categoryName))
    };
    
    categories.push(category);
  }
  
  return categories;
}

/**
 * Generate JavaScript code for main.js
 */
function generateJavaScriptCode(categories) {
  let code = '// Gallery organized by categories\n';
  code += '// Auto-generated by color-sort.js\n';
  code += 'const galleryCategories = [\n';
  
  categories.forEach((category, index) => {
    code += '  {\n';
    code += `    name: '${category.name}',\n`;
    code += `    description: '${category.description}',\n`;
    code += `    materials: '${category.materials}',\n`;
    code += `    techniques: '${category.techniques}',\n`;
    code += `    inspiration: '${category.inspiration}',\n`;
    code += `    color: '${category.color}',\n`;
    code += `    bgColor: '${category.bgColor}',\n`;
    code += '    images: [\n';
    
    category.images.forEach((img, imgIndex) => {
      code += `      { src: '${img.src}', alt: '${img.alt}' }`;
      if (imgIndex < category.images.length - 1) {
        code += ',';
      }
      code += '\n';
    });
    
    code += '    ]\n';
    code += '  }';
    
    if (index < categories.length - 1) {
      code += ',';
    }
    code += '\n';
  });
  
  code += '];\n';
  
  return code;
}

/**
 * Print summary report
 */
function printSummary(categories) {
  console.log('\n' + '='.repeat(60));
  console.log('📊 Summary Report');
  console.log('='.repeat(60) + '\n');
  
  let totalImages = 0;
  
  categories.forEach((category, index) => {
    totalImages += category.images.length;
    console.log(`${index + 1}. ${category.name} (${category.colorFamily})`);
    console.log(`   Color: ${category.color}`);
    console.log(`   Images: ${category.images.length}`);
    console.log(`   Slug: ${category.slug}`);
    console.log();
  });
  
  console.log(`Total Categories: ${categories.length}`);
  console.log(`Total Images: ${totalImages}`);
  console.log('='.repeat(60) + '\n');
}

// ================================
// CLI Interface
// ================================

async function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes('--dry-run');
  const helpRequested = args.includes('--help') || args.includes('-h');
  
  let outputFile = OUTPUT_FILE;
  const outputIndex = args.indexOf('--output');
  if (outputIndex >= 0 && args[outputIndex + 1]) {
    outputFile = args[outputIndex + 1];
  }
  
  if (helpRequested) {
    console.log(`
Color Sorting Program for OMIE Portfolio

Usage:
  node color-sort.js [options]

Options:
  --dry-run         Preview changes without writing files
  --output FILE     Specify output JSON file (default: gallery-config.json)
  --help, -h        Show this help message

Description:
  This script analyzes images in the gallery folder and automatically:
  - Detects dominant colors in each image
  - Groups images by color family (Pink, Red, Orange, etc.)
  - Suggests appropriate category names
  - Generates gallery configuration

Examples:
  node color-sort.js                    # Analyze and save config
  node color-sort.js --dry-run          # Preview without saving
  node color-sort.js --output my.json   # Save to custom file
`);
    process.exit(0);
  }
  
  try {
    // Analyze images
    const results = await analyzeImages();
    
    // Group by category
    const grouped = groupByCategory(results);
    
    // Generate configuration
    const categories = generateGalleryConfig(grouped);
    
    // Print summary
    printSummary(categories);
    
    if (dryRun) {
      console.log('🔍 Dry run mode - no files were modified\n');
      console.log('Generated JavaScript code preview:');
      console.log('─'.repeat(60));
      const jsCode = generateJavaScriptCode(categories);
      console.log(jsCode.substring(0, 500) + '...\n');
    } else {
      // Save JSON configuration
      const outputPath = path.join(__dirname, outputFile);
      fs.writeFileSync(outputPath, JSON.stringify(categories, null, 2));
      console.log(`✓ Configuration saved to ${outputFile}\n`);
      
      // Generate JavaScript code snippet
      const jsCode = generateJavaScriptCode(categories);
      const jsFile = outputFile.replace('.json', '.js');
      fs.writeFileSync(jsFile, jsCode);
      console.log(`✓ JavaScript code saved to ${jsFile}\n`);
      
      console.log('Next steps:');
      console.log('1. Review the generated configuration');
      console.log('2. Update main.js with the generated galleryCategories array');
      console.log('3. Update index.html filter buttons to match new categories');
      console.log('4. Test the website to ensure images display correctly\n');
    }
    
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

// Run the program
if (require.main === module) {
  main();
}

module.exports = {
  analyzeImages,
  groupByCategory,
  generateGalleryConfig,
  extractDominantColor,
  categorizeColor,
  rgbToHsl
};
