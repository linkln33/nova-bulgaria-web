const fs = require('fs');
const path = require('path');

// Read the translations file
const translationsPath = path.join(process.cwd(), 'src/translations/index.ts');
const content = fs.readFileSync(translationsPath, 'utf8');

// Find the position to insert the new translation
const targetKey = "'need.political.title':";
const targetPosition = content.indexOf(targetKey);
const endOfTranslation = content.indexOf('},', targetPosition) + 3;

// Create the new content with the added translation
const newTranslation = `  'need.political.tabTitle': {
    en: 'A Failing State',
    bg: 'Провалена Държава'
  },
`;

const newContent = 
  content.substring(0, endOfTranslation) + 
  '\n' + newTranslation +
  content.substring(endOfTranslation);

// Write the updated content back to the file
fs.writeFileSync(translationsPath, newContent, 'utf8');
console.log('Successfully added translation for "A Failing State"');
