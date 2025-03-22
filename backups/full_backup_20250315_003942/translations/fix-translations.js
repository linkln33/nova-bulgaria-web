const fs = require('fs');
const path = require('path');

// Read the original translations file
const translationsPath = path.join(process.cwd(), 'src/translations/index.ts');
const originalContent = fs.readFileSync(translationsPath, 'utf8');

// Extract the structure
const exportInterfaceStart = originalContent.indexOf('export interface TranslationDictionary');
const translationsObjStart = originalContent.indexOf('const translations: TranslationDictionary = {');
const translationsObjEnd = originalContent.lastIndexOf('};');

// Extract our sector translations
const sectorTranslations = `
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
  
  'sectors.security.title': {
    en: 'Law Enforcement & Internal Security System',
    bg: 'Правоприлагане и Система за Вътрешна Сигурност'
  },
  'sectors.security.item1': {
    en: 'Decentralized Crime Reporting: A blockchain-based whistleblower system protects citizens.',
    bg: 'Децентрализирано Докладване на Престъпления: Система за сигнализиране, базирана на блокчейн, защитава гражданите.'
  },
  'sectors.security.item2': {
    en: 'Smart Contract-Based Policing: Officers are funded based on verifiable task completion.',
    bg: 'Полицейска Дейност, Базирана на Умни Договори: Служителите се финансират въз основа на проверимо изпълнение на задачи.'
  },
  
  'sectors.taxation.title': {
    en: 'Taxation & Revenue Collection System',
    bg: 'Система за Данъчно Облагане и Събиране на Приходи'
  },
  'sectors.taxation.item1': {
    en: 'On-Chain Taxation: Citizens pay taxes automatically via programmable smart contracts.',
    bg: 'Данъчно Облагане в Блокчейн: Гражданите плащат данъци автоматично чрез програмируеми умни договори.'
  },
  'sectors.taxation.item2': {
    en: 'Transparent Public Budgets: Government spending is fully traceable via open-source blockchain ledgers.',
    bg: 'Прозрачни Публични Бюджети: Правителствените разходи са напълно проследими чрез блокчейн регистри с отворен код.'
  },
  
  'sectors.crisis.title': {
    en: 'Crisis Management & Emergency Response System',
    bg: 'Система за Управление на Кризи и Спешно Реагиране'
  },
  'sectors.crisis.item1': {
    en: 'Blockchain Emergency Fund: Automated disaster relief allocates BGL instantly to affected areas.',
    bg: 'Блокчейн Фонд за Спешни Случаи: Автоматизираната помощ при бедствия разпределя БГЛ незабавно към засегнатите райони.'
  },
  'sectors.crisis.item2': {
    en: 'Decentralized First Responders: DAOs coordinate volunteer & paramedic response efforts.',
    bg: 'Децентрализирани Екипи за Първа Помощ: ДАО координират усилията на доброволци и парамедици.'
  },
  
  'sectors.smart-contracts.title': {
    en: 'Decentralized Law & Smart Contracts',
    bg: 'Децентрализирано Право и Умни Договори'
  },
  'sectors.smart-contracts.item1': {
    en: 'Automated Legal Frameworks: Smart contracts enforce agreements without intermediaries.',
    bg: 'Автоматизирани Правни Рамки: Умните договори изпълняват споразумения без посредници.'
  },
  'sectors.smart-contracts.item2': {
    en: 'Decentralized Arbitration: Disputes are resolved through community-elected judges and transparent protocols.',
    bg: 'Децентрализиран Арбитраж: Споровете се разрешават чрез избрани от общността съдии и прозрачни протоколи.'
  },
  
  'sectors.meta.title': {
    en: 'Meta-Governance & AI Policy',
    bg: 'Мета-Управление и Политика за ИИ'
  },
  'sectors.meta.item1': {
    en: 'AI-Assisted Decision Making: Artificial intelligence helps optimize governance decisions.',
    bg: 'Вземане на Решения с Помощта на ИИ: Изкуственият интелект помага за оптимизиране на решенията за управление.'
  },
  'sectors.meta.item2': {
    en: 'Decentralized Policy Development: Policies evolve through community input and transparent processes.',
    bg: 'Децентрализирано Разработване на Политики: Политиките се развиват чрез принос от общността и прозрачни процеси.'
  },
  
  // Economy Sectors
  'sectors.economic.title': {
    en: 'Economic & Financial System',
    bg: 'Икономическа и Финансова Система'
  },
  'sectors.economic.item1': {
    en: 'Decentralized Treasury: All funds are managed via a DAO treasury, with budgets allocated by citizen votes.',
    bg: 'Децентрализирана Хазна: Всички средства се управляват чрез ДАО хазна, с бюджети, разпределени чрез гласове на гражданите.'
  },
  'sectors.economic.item2': {
    en: 'On-Chain Banking: DeFi lending & stablecoins (BGL-S) ensure economic stability.',
    bg: 'Банкиране в Блокчейн: DeFi кредитиране и стабилни монети (БГЛ-С) осигуряват икономическа стабилност.'
  },
  
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
`;

// Rebuild the file
const beforeTranslationsObj = originalContent.substring(0, translationsObjStart + 'const translations: TranslationDictionary = {'.length);
const afterSectorTranslations = originalContent.substring(translationsObjStart + 'const translations: TranslationDictionary = {'.length);

// Create the fixed content
const fixedContent = 
  beforeTranslationsObj + 
  sectorTranslations + 
  afterSectorTranslations;

// Write the fixed content back to the file
fs.writeFileSync(translationsPath, fixedContent, 'utf8');
console.log('Successfully fixed translations file');

