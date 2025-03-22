const fs = require('fs');
const path = require('path');

// Read the Sectors component to extract the hardcoded text
const sectorsPath = path.join(process.cwd(), 'src/components/Sectors/Sectors.tsx');
const sectorsContent = fs.readFileSync(sectorsPath, 'utf8');

// Read the translations file
const translationsPath = path.join(process.cwd(), 'src/translations/index.ts');
const translationsContent = fs.readFileSync(translationsPath, 'utf8');

// Find where to add the new translations
const lastTranslationKey = "// Need For Nova - Interoperability Tab";
const insertPosition = translationsContent.indexOf(lastTranslationKey);

// Create the sector translations
let sectorTranslations = `
  // Sectors Section
  'sectors.title': {
    en: 'Sectors of NOVA BULGARIA',
    bg: 'Сектори на НОВА БЪЛГАРИЯ'
  },
  'sectors.categories.governance': {
    en: 'Governance & Politics',
    bg: 'Управление и Политика'
  },
  'sectors.categories.economy': {
    en: 'Economy & Finance',
    bg: 'Икономика и Финанси'
  },
  'sectors.categories.society': {
    en: 'Society & Welfare',
    bg: 'Общество и Благосъстояние'
  },
  'sectors.categories.technology': {
    en: 'Technology & Innovation',
    bg: 'Технологии и Иновации'
  },
  'sectors.categories.environment': {
    en: 'Environment & Infrastructure',
    bg: 'Околна Среда и Инфраструктура'
  },
  'sectors.categories.future': {
    en: 'Future Technologies',
    bg: 'Бъдещи Технологии'
  },
  
  // Governance Sectors
  'sectors.governance.title': {
    en: 'Governance & Political System',
    bg: 'Система на Управление и Политика'
  },
  'sectors.governance.item1': {
    en: 'Decentralized Autonomous Governance (DAG): Voting, administration, and policy-making are executed on-chain through quadratic voting and proof-of-contribution mechanisms.',
    bg: 'Децентрализирано Автономно Управление (ДАУ): Гласуването, администрацията и създаването на политики се изпълняват чрез блокчейн с квадратично гласуване и механизми за доказателство на принос.'
  },
  'sectors.governance.item2': {
    en: 'Citizen-Proposed Laws: Smart contracts execute laws instantly once approved.',
    bg: 'Закони, Предложени от Граждани: Умните договори изпълняват законите незабавно след одобрение.'
  },
  
  'sectors.legal.title': {
    en: 'Legal & Judicial System',
    bg: 'Правна и Съдебна Система'
  },
  'sectors.legal.item1': {
    en: 'Blockchain Courts: Disputes are resolved via smart contract arbitration with elected community judges.',
    bg: 'Блокчейн Съдилища: Споровете се разрешават чрез арбитраж на умни договори с избрани общностни съдии.'
  },
  'sectors.legal.item2': {
    en: 'Proof-of-Law Enforcement: Law enforcement actions are logged on-chain for full transparency.',
    bg: 'Доказателство за Правоприлагане: Действията по правоприлагане се записват в блокчейна за пълна прозрачност.'
  },
  
  'sectors.foreign.title': {
    en: 'Foreign Relations & Diplomatic System',
    bg: 'Външни Отношения и Дипломатическа Система'
  },
  'sectors.foreign.item1': {
    en: 'Blockchain-Based Trade Agreements: Smart contracts govern international partnerships and commerce.',
    bg: 'Търговски Споразумения на Базата на Блокчейн: Умните договори управляват международните партньорства и търговия.'
  },
  'sectors.foreign.item2': {
    en: 'NFT Passports & Visas: Soulbound NFT visas replace paper-based systems.',
    bg: 'NFT Паспорти и Визи: Soulbound NFT визи заменят системите на хартиена основа.'
  },
  
  'sectors.immigration.title': {
    en: 'Immigration & Citizenship System',
    bg: 'Имиграционна и Гражданска Система'
  },
  'sectors.immigration.item1': {
    en: 'Digital Citizenship: Citizens receive a non-transferable Soulbound NFT that serves as their digital identity.',
    bg: 'Дигитално Гражданство: Гражданите получават непрехвърляем Soulbound NFT, който служи като тяхна дигитална самоличност.'
  },
  'sectors.immigration.item2': {
    en: 'Merit-Based Immigration: Citizenship is earned through contribution, not birthright.',
    bg: 'Имиграция на Базата на Заслуги: Гражданството се печели чрез принос, а не по рождение.'
  },
  
  // Economy Sectors
  'sectors.currency.title': {
    en: 'Currency & Monetary System',
    bg: 'Валутна и Парична Система'
  },
  'sectors.currency.item1': {
    en: 'Bulgarian Lion (BGL): A fully-backed, non-inflationary cryptocurrency that serves as the national currency.',
    bg: 'Български Лъв (БГЛ): Напълно обезпечена, неинфлационна криптовалута, която служи като национална валута.'
  },
  'sectors.currency.item2': {
    en: 'Algorithmic Monetary Policy: Supply and interest rates are managed by transparent smart contracts, not central banks.',
    bg: 'Алгоритмична Парична Политика: Предлагането и лихвените проценти се управляват от прозрачни умни договори, а не от централни банки.'
  },

  // Add more translations as needed
  
`;

// Insert the translations
const newTranslationsContent = 
  translationsContent.substring(0, insertPosition) + 
  sectorTranslations +
  translationsContent.substring(insertPosition);

// Write the updated content back to the file
fs.writeFileSync(translationsPath, newTranslationsContent, 'utf8');
console.log('Successfully added Sectors translations');

