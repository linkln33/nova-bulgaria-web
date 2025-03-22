#!/bin/bash

# Nova Bulgaria Web - Netlify Deployment Script
# This script prepares the project for deployment to Netlify

echo "🦁 Nova Bulgaria Web - Netlify Deployment Preparation"
echo "======================================================"

# Step 1: Ensure we're on the right branch
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
echo "📌 Current branch: $CURRENT_BRANCH"

# Step 2: Check for image optimization
echo "🖼️  Checking for large images..."
LOGO_SIZE=$(du -h src/assets/images/new-logo.png | cut -f1)
echo "Logo size: $LOGO_SIZE (should be under 200KB)"
if [ $(du -k src/assets/images/new-logo.png | cut -f1) -gt 200 ]; then
  echo "⚠️  WARNING: Logo image is too large. Please optimize it before deployment."
  echo "    You can use TinyPNG (https://tinypng.com/) or another image optimization tool."
  echo "    Target size: < 200KB"
  read -p "Do you want to continue anyway? (y/n) " -n 1 -r
  echo
  if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "Deployment preparation aborted. Please optimize the image first."
    exit 1
  fi
fi

# Step 3: Build the project
echo "🔨 Building project..."
npm run build

# Step 4: Check for build warnings and issues
echo "🔍 Checking build output for issues..."
if grep -q "WARNING" build-log.txt 2>/dev/null; then
  echo "⚠️  Build warnings detected. See DEPLOYMENT_CHECKLIST.md for optimization recommendations."
else
  echo "✅ No build warnings detected."
fi

# Step 5: Deployment instructions
echo ""
echo "🚀 Ready for deployment!"
echo "======================================================"
echo "To deploy to Netlify, choose one of these methods:"
echo ""
echo "1. Using Netlify CLI (recommended):"
echo "   $ netlify login"
echo "   $ netlify deploy --prod"
echo ""
echo "2. Using Netlify UI:"
echo "   - Go to https://app.netlify.com"
echo "   - Drag and drop the 'dist' folder"
echo ""
echo "3. Using Netlify CI/CD with GitHub:"
echo "   - Push your changes to GitHub"
echo "   - Connect your repository in the Netlify UI"
echo "   - Configure build settings:"
echo "     - Build command: npm run build"
echo "     - Publish directory: dist"
echo ""
echo "See DEPLOYMENT_CHECKLIST.md for more details and optimization recommendations."
echo ""
echo "Note: Remember that the large image file (new-logo.png) and large JS bundle (vendors.js)"
echo "may cause performance issues. Consider optimizing these before final deployment."
