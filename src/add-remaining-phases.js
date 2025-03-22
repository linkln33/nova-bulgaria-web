// Script to add remaining phase translations to index.ts
const fs = require('fs');
const path = require('path');

// Path to the translations file
const translationsFilePath = path.join(__dirname, 'translations', 'index.ts');

// Read the current translations file
let translationsContent = fs.readFileSync(translationsFilePath, 'utf8');

// Remaining phase translations to add
const remainingPhaseTranslations = `
  // Phase 2 Milestones
  'roadmap.phase2.milestone1.title': {
    en: 'BGL & BGL-S Token Launch',
    bg: 'Стартиране на BGL и BGL-S Токени'
  },
  'roadmap.phase2.milestone1.description': {
    en: 'Implement a hybrid economy with governance & stable tokens',
    bg: 'Внедряване на хибридна икономика с токени за управление и стабилни токени'
  },
  'roadmap.phase2.milestone2.title': {
    en: 'Decentralized Treasury & Funding',
    bg: 'Децентрализирана Хазна и Финансиране'
  },
  'roadmap.phase2.milestone2.description': {
    en: 'Allow citizen-backed projects with blockchain-based funding allocation',
    bg: 'Позволяване на проекти, подкрепени от граждани, с блокчейн-базирано разпределение на финансирането'
  },
  'roadmap.phase2.milestone3.title': {
    en: 'Smart Contract-Based Judiciary',
    bg: 'Съдебна Система Базирана на Смарт Контракти'
  },
  'roadmap.phase2.milestone3.description': {
    en: 'Develop blockchain courts & dispute resolution mechanisms',
    bg: 'Разработване на блокчейн съдилища и механизми за разрешаване на спорове'
  },
  'roadmap.phase2.milestone4.title': {
    en: 'First Governance Votes & Law Proposals',
    bg: 'Първи Гласувания за Управление и Предложения за Закони'
  },
  'roadmap.phase2.milestone4.description': {
    en: 'Citizens start participating in blockchain-based decision-making',
    bg: 'Гражданите започват да участват в блокчейн-базирано вземане на решения'
  },
  'roadmap.phase2.milestone5.title': {
    en: 'Expansion of Digital Citizenship',
    bg: 'Разширяване на Дигиталното Гражданство'
  },
  'roadmap.phase2.milestone5.description': {
    en: 'Open registration for more contributors & members worldwide',
    bg: 'Отворена регистрация за повече сътрудници и членове по целия свят'
  },
  
  // Phase 3 Milestones
  'roadmap.phase3.milestone1.title': {
    en: 'Modular Blockchain-Based Institutions',
    bg: 'Модулни Институции Базирани на Блокчейн'
  },
  'roadmap.phase3.milestone1.description': {
    en: 'Implement independent blockchains for governance, security, economy, and infrastructure',
    bg: 'Внедряване на независими блокчейни за управление, сигурност, икономика и инфраструктура'
  },
  'roadmap.phase3.milestone2.title': {
    en: 'Security & Law Enforcement System',
    bg: 'Система за Сигурност и Правоприлагане'
  },
  'roadmap.phase3.milestone2.description': {
    en: 'Deploy smart contract-based security & border enforcement solutions',
    bg: 'Внедряване на решения за сигурност и гранично правоприлагане, базирани на смарт контракти'
  },
  'roadmap.phase3.milestone3.title': {
    en: 'Public Project Marketplace',
    bg: 'Пазар за Обществени Проекти'
  },
  'roadmap.phase3.milestone3.description': {
    en: 'Enable bidding & funding for citizen-proposed projects (infrastructure, business, etc.)',
    bg: 'Активиране на наддаване и финансиране за проекти, предложени от граждани (инфраструктура, бизнес и др.)'
  },
  'roadmap.phase3.milestone4.title': {
    en: 'Education & Skill-Based Governance',
    bg: 'Образование и Управление Базирано на Умения'
  },
  'roadmap.phase3.milestone4.description': {
    en: 'Develop a system where expertise grants governance influence',
    bg: 'Разработване на система, при която експертизата дава влияние върху управлението'
  },
  'roadmap.phase3.milestone5.title': {
    en: 'First Fully Decentralized Budget Allocation',
    bg: 'Първо Напълно Децентрализирано Разпределение на Бюджета'
  },
  'roadmap.phase3.milestone5.description': {
    en: 'Treasury funds are autonomously distributed via blockchain voting',
    bg: 'Средствата от хазната се разпределят автономно чрез блокчейн гласуване'
  },
  
  // Phase 4 Milestones
  'roadmap.phase4.milestone1.title': {
    en: 'International Recognition & Alliances',
    bg: 'Международно Признание и Съюзи'
  },
  'roadmap.phase4.milestone1.description': {
    en: 'Gain recognition as a decentralized digital nation',
    bg: 'Получаване на признание като децентрализирана дигитална нация'
  },
  'roadmap.phase4.milestone2.title': {
    en: 'Physical Settlements & Smart Cities',
    bg: 'Физически Селища и Умни Градове'
  },
  'roadmap.phase4.milestone2.description': {
    en: 'Secure land or economic zones for real-world expansion',
    bg: 'Осигуряване на земя или икономически зони за разширяване в реалния свят'
  },
  'roadmap.phase4.milestone3.title': {
    en: 'Interoperability with Other Blockchain Nations',
    bg: 'Оперативна Съвместимост с Други Блокчейн Нации'
  },
  'roadmap.phase4.milestone3.description': {
    en: 'Collaborate with decentralized governance projects',
    bg: 'Сътрудничество с проекти за децентрализирано управление'
  },
  'roadmap.phase4.milestone4.title': {
    en: 'Global Diplomatic Presence',
    bg: 'Глобално Дипломатическо Присъствие'
  },
  'roadmap.phase4.milestone4.description': {
    en: 'Establish virtual embassies & international relations',
    bg: 'Установяване на виртуални посолства и международни отношения'
  },
  'roadmap.phase4.milestone5.title': {
    en: 'Full Economic Independence',
    bg: 'Пълна Икономическа Независимост'
  },
  'roadmap.phase4.milestone5.description': {
    en: 'Create a self-sustaining economy with global trade agreements',
    bg: 'Създаване на самоподдържаща се икономика с глобални търговски споразумения'
  },`;

// Find the position to insert the translations
// Look for the 'roadmap.phase4.title' key and insert after that
const insertAfterMarker = "'roadmap.phase4.title'";
const insertBeforeMarker = "'sectors.header.subtitle'";

const insertAfterIndex = translationsContent.indexOf(insertAfterMarker);
const insertBeforeIndex = translationsContent.indexOf(insertBeforeMarker);

if (insertAfterIndex !== -1 && insertBeforeIndex !== -1) {
  // Find the end of the line containing the marker
  const lineEndIndex = translationsContent.indexOf('},', insertAfterIndex) + 2;
  
  // Insert the new translations after the end of the line
  const beforeInsertPoint = translationsContent.substring(0, lineEndIndex);
  const afterInsertPoint = translationsContent.substring(lineEndIndex, insertBeforeIndex);
  
  // Check if there's already a comma after the last entry
  const needsComma = !beforeInsertPoint.trim().endsWith(',');
  
  // Create the new content
  const newContent = beforeInsertPoint + (needsComma ? ',' : '') + remainingPhaseTranslations + '\n  ' + afterInsertPoint;
  
  // Combine with the rest of the file
  const finalContent = newContent + translationsContent.substring(insertBeforeIndex);
  
  // Write the updated content back to the file
  fs.writeFileSync(translationsFilePath, finalContent, 'utf8');
  
  console.log('✅ Remaining phase translations successfully added to index.ts');
} else {
  console.error('❌ Could not find the insertion points in the translations file');
}
