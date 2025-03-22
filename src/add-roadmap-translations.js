// Script to add Roadmap translations to index.ts
const fs = require('fs');
const path = require('path');

// Path to the translations file
const translationsFilePath = path.join(__dirname, 'translations', 'index.ts');

// Read the current translations file
let translationsContent = fs.readFileSync(translationsFilePath, 'utf8');

// Roadmap translations to add
const roadmapTranslations = `
  'roadmap.title': {
    en: 'Development Roadmap',
    bg: 'План за Развитие'
  },
  'roadmap.subtitle': {
    en: 'Building a sovereign digital nation through strategic phases',
    bg: 'Изграждане на суверенна дигитална нация чрез стратегически фази'
  },
  'roadmap.phase1': {
    en: 'Phase 1',
    bg: 'Фаза 1'
  },
  'roadmap.phase1.name': {
    en: 'Phase 1',
    bg: 'Фаза 1'
  },
  'roadmap.phase1.shortTitle': {
    en: 'Foundation',
    bg: 'Основи'
  },
  'roadmap.phase1.timeframe': {
    en: '0-6 Months',
    bg: '0-6 Месеца'
  },
  'roadmap.phase1.title': {
    en: 'Phase 1: Foundation & Blockchain Development',
    bg: 'Фаза 1: Основи и Блокчейн Разработка'
  },
  'roadmap.phase1.milestone1.title': {
    en: 'Forking Cosmos Blockchain',
    bg: 'Форкване на Cosmos Блокчейн'
  },
  'roadmap.phase1.milestone1.description': {
    en: 'Deploy a sovereign blockchain tailored for governance & economy',
    bg: 'Внедряване на суверенен блокчейн, пригоден за управление и икономика'
  },
  'roadmap.phase1.milestone2.title': {
    en: 'NFT-Based ID System',
    bg: 'NFT-Базирана Система за Идентификация'
  },
  'roadmap.phase1.milestone2.description': {
    en: 'Develop a prototype identity system for Proof of Contribution',
    bg: 'Разработване на прототип на система за идентичност за Доказателство за Принос'
  },
  'roadmap.phase1.milestone3.title': {
    en: 'Smart Contract Governance MVP',
    bg: 'MVP на Управление чрез Смарт Контракти'
  },
  'roadmap.phase1.milestone3.description': {
    en: 'Create the first blockchain-based voting system for transparent decision-making',
    bg: 'Създаване на първата блокчейн-базирана система за гласуване за прозрачно вземане на решения'
  },
  'roadmap.phase1.milestone4.title': {
    en: 'Crowdfunding & Early Supporters',
    bg: 'Краудфъндинг и Ранни Поддръжници'
  },
  'roadmap.phase1.milestone4.description': {
    en: 'Launch funding rounds to fuel development and community building',
    bg: 'Стартиране на рундове за финансиране за подпомагане на развитието и изграждането на общността'
  },
  'roadmap.phase1.milestone5.title': {
    en: 'Community Formation & Whitepaper Release',
    bg: 'Формиране на Общност и Публикуване на Whitepaper'
  },
  'roadmap.phase1.milestone5.description': {
    en: 'Establish a strong digital and real-world movement',
    bg: 'Установяване на силно дигитално и реално движение'
  },
  'roadmap.phase2': {
    en: 'Phase 2',
    bg: 'Фаза 2'
  },
  'roadmap.phase2.name': {
    en: 'Phase 2',
    bg: 'Фаза 2'
  },
  'roadmap.phase2.shortTitle': {
    en: 'Infrastructure',
    bg: 'Инфраструктура'
  },
  'roadmap.phase2.timeframe': {
    en: '6-12 Months',
    bg: '6-12 Месеца'
  },
  'roadmap.phase2.title': {
    en: 'Phase 2: Economic & Governance Infrastructure',
    bg: 'Фаза 2: Икономическа и Управленска Инфраструктура'
  },
  'roadmap.phase3': {
    en: 'Phase 3',
    bg: 'Фаза 3'
  },
  'roadmap.phase3.name': {
    en: 'Phase 3',
    bg: 'Фаза 3'
  },
  'roadmap.phase3.shortTitle': {
    en: 'Institutions',
    bg: 'Институции'
  },
  'roadmap.phase3.timeframe': {
    en: '12-24 Months',
    bg: '12-24 Месеца'
  },
  'roadmap.phase3.title': {
    en: 'Phase 3: Institutional Development',
    bg: 'Фаза 3: Институционално Развитие'
  },
  'roadmap.phase4': {
    en: 'Phase 4',
    bg: 'Фаза 4'
  },
  'roadmap.phase4.name': {
    en: 'Phase 4',
    bg: 'Фаза 4'
  },
  'roadmap.phase4.shortTitle': {
    en: 'Global',
    bg: 'Глобално'
  },
  'roadmap.phase4.timeframe': {
    en: '24+ Months',
    bg: '24+ Месеца'
  },
  'roadmap.phase4.title': {
    en: 'Phase 4: Expansion & Global Recognition',
    bg: 'Фаза 4: Разширяване и Глобално Признание'
  },`;

// Find the position to insert the translations
// Look for the 'roadmap.title' key and replace from there until 'sectors.header.subtitle'
const startMarker = "'roadmap.title'";
const endMarker = "'sectors.header.subtitle'";

const startIndex = translationsContent.indexOf(startMarker);
const endIndex = translationsContent.indexOf(endMarker);

if (startIndex !== -1 && endIndex !== -1) {
  // Replace the existing roadmap translations with the new ones
  const beforeRoadmap = translationsContent.substring(0, startIndex);
  const afterRoadmap = translationsContent.substring(endIndex);
  
  // Create the new content
  const newContent = beforeRoadmap + roadmapTranslations + '\n  ' + afterRoadmap;
  
  // Write the updated content back to the file
  fs.writeFileSync(translationsFilePath, newContent, 'utf8');
  
  console.log('✅ Roadmap translations successfully added to index.ts');
} else {
  console.error('❌ Could not find the insertion points in the translations file');
}
