const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function optimizeImage() {
  const inputPath = path.join(__dirname, 'src/assets/images/new-logo.png');
  const outputPath = path.join(__dirname, 'src/assets/images/new-logo-optimized.png');
  
  try {
    await sharp(inputPath)
      .resize(800) // Resize to a reasonable width while maintaining aspect ratio
      .png({ quality: 80, compressionLevel: 9 })
      .toFile(outputPath);
    
    const originalSize = fs.statSync(inputPath).size;
    const optimizedSize = fs.statSync(outputPath).size;
    
    console.log(`Original size: ${(originalSize / 1024 / 1024).toFixed(2)} MB`);
    console.log(`Optimized size: ${(optimizedSize / 1024 / 1024).toFixed(2)} MB`);
    console.log(`Reduction: ${((1 - optimizedSize / originalSize) * 100).toFixed(2)}%`);
    
    // Replace the original file with the optimized one
    fs.unlinkSync(inputPath);
    fs.renameSync(outputPath, inputPath);
    console.log('Successfully replaced the original file with the optimized version');
  } catch (err) {
    console.error('Error optimizing image:', err);
  }
}

optimizeImage();
