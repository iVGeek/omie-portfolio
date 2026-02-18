#!/usr/bin/env node

/**
 * Test script to verify the color sorting integration
 * Checks that the gallery configuration is valid and images exist
 */

const fs = require('fs');
const path = require('path');

console.log('🧪 Testing Color Sorting Integration\n');

// Test 1: Check if config files exist
console.log('1. Checking configuration files...');
const configFiles = ['gallery-config.json', 'gallery-config.js'];
let allFilesExist = true;

configFiles.forEach(file => {
  const exists = fs.existsSync(file);
  console.log(`   ${exists ? '✓' : '✗'} ${file}`);
  if (!exists) allFilesExist = false;
});

if (!allFilesExist) {
  console.log('\n❌ Some configuration files are missing. Run: npm run color-sort\n');
  process.exit(1);
}

// Test 2: Load and validate JSON config
console.log('\n2. Validating JSON configuration...');
let config;
try {
  const configData = fs.readFileSync('gallery-config.json', 'utf8');
  config = JSON.parse(configData);
  console.log('   ✓ JSON is valid');
  console.log(`   ✓ Found ${config.length} categories`);
} catch (error) {
  console.log(`   ✗ Error parsing JSON: ${error.message}`);
  process.exit(1);
}

// Test 3: Verify image paths
console.log('\n3. Checking image paths...');
let totalImages = 0;
let missingImages = 0;

config.forEach(category => {
  category.images.forEach(image => {
    totalImages++;
    const imagePath = path.join(__dirname, image.src);
    if (!fs.existsSync(imagePath)) {
      console.log(`   ✗ Missing: ${image.src}`);
      missingImages++;
    }
  });
});

if (missingImages > 0) {
  console.log(`   ⚠ ${missingImages} out of ${totalImages} images are missing`);
} else {
  console.log(`   ✓ All ${totalImages} image paths are valid`);
}

// Test 4: Validate category structure
console.log('\n4. Validating category structure...');
const requiredFields = ['name', 'description', 'color', 'images'];
let structureValid = true;

config.forEach(category => {
  requiredFields.forEach(field => {
    if (!category[field]) {
      console.log(`   ✗ Category "${category.name || 'unknown'}" missing field: ${field}`);
      structureValid = false;
    }
  });
});

if (structureValid) {
  console.log('   ✓ All categories have required fields');
}

// Test 5: Check for duplicate slugs
console.log('\n5. Checking for duplicate slugs...');
const slugs = config.map(c => c.slug || c.name.toLowerCase().replace(/\s+/g, '-'));
const uniqueSlugs = new Set(slugs);

if (slugs.length !== uniqueSlugs.size) {
  console.log('   ✗ Duplicate slugs found');
  structureValid = false;
} else {
  console.log('   ✓ All slugs are unique');
}

// Test 6: Summary
console.log('\n' + '='.repeat(50));
console.log('📊 Summary');
console.log('='.repeat(50));
console.log(`Categories: ${config.length}`);
console.log(`Total Images: ${totalImages}`);
console.log(`Missing Images: ${missingImages}`);
console.log(`Structure Valid: ${structureValid ? 'Yes' : 'No'}`);

// Print categories
console.log('\nCategories:');
config.forEach((cat, idx) => {
  console.log(`  ${idx + 1}. ${cat.name} (${cat.images.length} images)`);
});

// Final result
console.log('\n' + '='.repeat(50));
if (structureValid && missingImages === 0) {
  console.log('✅ All tests passed! Configuration is ready to use.');
  console.log('\nNext steps:');
  console.log('1. Copy the galleryCategories array from gallery-config.js');
  console.log('2. Paste it into main.js (replace the existing array)');
  console.log('3. Update filter buttons in index.html if categories changed');
} else {
  console.log('⚠️  Some issues found. Please review and fix them.');
}
console.log('='.repeat(50) + '\n');
