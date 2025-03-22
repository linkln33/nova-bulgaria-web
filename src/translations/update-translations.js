const fs = require('fs');
const path = require('path');

// Read the original translations file
const indexPath = path.join(process.cwd(), 'src/translations/index.ts');
const originalContent = fs.readFileSync(indexPath, 'utf8');

// Create the new content with import statement
let lines = originalContent.split('\n');
let importLine = "import { futureTabTranslations } from './future-tab-translations';";

// Add import after the interface definition
const interfaceEndIndex = lines.findIndex(line => line.includes('};')) + 1;
if (!lines.some(line => line.includes(importLine))) {
  lines.splice(interfaceEndIndex, 0, '', importLine, '');
}

// Find where to add the spread operator
const exampleIndex = lines.findIndex(line => line.includes("'need.future.example': {"));
let closingBraceIndex = -1;
for (let i = exampleIndex; i < lines.length; i++) {
  if (lines[i].includes('},') && !lines[i].includes('{')) {
    closingBraceIndex = i;
    break;
  }
}

if (closingBraceIndex !== -1) {
  // Add the spread operator after need.future.example
  lines.splice(closingBraceIndex + 1, 0, 
    '  // Import all future tab translations',
    '  ...futureTabTranslations,',
    '');
}

// Write the updated content back to the file
fs.writeFileSync(indexPath, lines.join('\n'), 'utf8');
console.log('Successfully updated translations file');
