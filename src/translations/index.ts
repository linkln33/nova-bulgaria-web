export interface TranslationDictionary {
  [key: string]: {
    en: string;
    bg: string;
  };
}

const translations: TranslationDictionary = {
  // Navbar
  'nav.vision': {
    en: 'Vision',
    bg: 'Визия'
  },
  'nav.governance': {
    en: 'Governance',
    bg: 'Управление'
  },
  'nav.technology': {
    en: 'Technology',
    bg: 'Технология'
  },
  'nav.development': {
    en: 'Development',
    bg: 'Развитие'
  },
  'nav.becomeALion': {
    en: 'Become a Lion',
    bg: 'Стани Лъв'
  },
  'nav.lionheartFund': {
    en: 'Lionheart Fund',
    bg: 'Фонд Лъвско Сърце'
  },
  
  // Hero Section
  'hero.title': {
    en: 'NOVA BULGARIA',
    bg: 'НОВА БЪЛГАРИЯ'
  },
  'hero.subtitle': {
    en: 'It\'s time! Awaken the Lions',
    bg: 'Време е! Събуди Лъвовете'
  },
  'hero.slogan1': {
    en: '1300 Years Unconquered [FLAG] Bulgaria Stands Eternal',
    bg: '1300 Години Непокорена [FLAG] България Стои Вечна'
  },
  'hero.slogan2': {
    en: 'From Khan Krum to NOVA BULGARIA—Tyrants Shall Fall',
    bg: 'От Хан Крум до НОВА БЪЛГАРИЯ'
  },
  'hero.slogan3': {
    en: 'A Nation Once Ruling Three Seas Will Rise Again!',
    bg: 'Нация, Някога Владееща Три Морета, Ще Се Издигне Отново!'
  },
  'hero.slogan4': {
    en: 'We Gave the World an Alphabet—Now We Give It a Future!',
    bg: 'Дадохме на Света Азбука Сега Му Даваме Бъдеще!'
  },
  'hero.slogan5': {
    en: 'Thracian Blood, Spartan Spirit—Bulgaria Bows to No One!',
    bg: 'Тракийска Кръв, Спартански Дух!'
  },
  'hero.slogan6': {
    en: 'When Others Betrayed, Bulgaria Defied—We Protect Our Own!',
    bg: 'Когато Другите се Предават,Ние Защитаваме Своите!'
  },
  'hero.slogan7': {
    en: 'The Gold of Our Ancestors, The Strength of Our Future!',
    bg: 'Златото на Нашите Предци, Силата на Нашето Бъдеще!'
  },
  'hero.button.whitepaper': {
    en: 'Learn More',
    bg: 'Научи Повече'
  },
  'hero.button.getStarted': {
    en: 'Join the Movement',
    bg: 'Присъедини се'
  },
  
  // Problem Section
  'problem.header.title': {
    en: 'Vision for the Future',
    bg: 'Визия за Бъдещето'
  },
  'problem.header.subtitle': {
    en: 'Rebuilding Bulgaria as a digital nation for all citizens',
    bg: 'Възстановяване на България като дигитална нация за всички граждани'
  },
  'problem.tab.problem': {
    en: 'The Problem',
    bg: 'Проблемът'
  },
  'problem.tab.vision': {
    en: 'Our Vision',
    bg: 'Нашата Визия'
  },
  'problem.tab.works': {
    en: 'How It Works',
    bg: 'Как Работи'
  },
  'problem.tab.citizen': {
    en: 'Citizen Power',
    bg: 'Гражданска Сила'
  },
  'problem.section.title': {
    en: 'Why Bulgaria Needs Change',
    bg: 'Защо България Се Нуждае от Промяна'
  },
  'problem.section.description': {
    en: 'The modern world faces a deep crisis of trust, governance, and economic inequality. Traditional governments are plagued by corruption, inefficiency, and centralization, leading to failing economies, social unrest, and broken systems that no longer serve the people.',
    bg: 'Съвременният свят е изправен пред дълбока криза на доверие, управление и икономическо неравенство. Традиционните правителства са обременени от корупция, неефективност и централизация, водещи до провалящи се икономики, социални вълнения и разбити системи, които вече не служат на хората.'
  },
  'problem.section.description2': {
    en: 'There is no true national ideal today—no system where people are rewarded based on merit, transparency is guaranteed, and economic power is fairly distributed.',
    bg: 'Днес няма истински национален идеал - няма система, в която хората да бъдат възнаграждавани въз основа на заслуги, прозрачността да е гарантирана, а икономическата власт да е справедливо разпределена.'
  },
  'problem.card.political.title': {
    en: 'Political Problems',
    bg: 'Политически Проблеми'
  },
  'problem.card.political.item1': {
    en: 'Government decisions favor the wealthy and connected',
    bg: 'Правителствените решения облагодетелстват богатите и свързаните'
  },
  'problem.card.political.item2': {
    en: 'Citizens have little say in important decisions',
    bg: 'Гражданите имат малко влияние върху важните решения'
  },
  'problem.card.political.item3': {
    en: 'Young people leave Bulgaria for better opportunities',
    bg: 'Младите хора напускат България за по-добри възможности'
  },
  'problem.card.environmental.title': {
    en: 'Environmental Issues',
    bg: 'Екологични Проблеми'
  },
  'problem.card.environmental.item1': {
    en: 'Beautiful natural resources are being damaged',
    bg: 'Красивите природни ресурси се увреждат'
  },
  'problem.card.environmental.item2': {
    en: 'Pollution affects our health and quality of life',
    bg: 'Замърсяването влияе на нашето здраве и качество на живот'
  },
  'problem.card.environmental.item3': {
    en: 'Short-term profit is prioritized over long-term health',
    bg: 'Краткосрочната печалба се приоритизира пред дългосрочното здраве'
  },
  'problem.approach.title': {
    en: 'A New Approach',
    bg: 'Нов Подход'
  },
  'problem.approach.description': {
    en: 'What if we could rebuild Bulgaria from the ground up? NOVA BULGARIA is a completely new way of thinking about our nation - one where citizens make the decisions, where transparency is guaranteed by technology, and where your contribution to society determines your influence, not your connections or wealth.',
    bg: 'Какво ако можехме да възстановим България от основите? НОВА БЪЛГАРИЯ е напълно нов начин на мислене за нашата нация - такава, където гражданите вземат решенията, където прозрачността е гарантирана от технологията и където вашият принос към обществото определя вашето влияние, а не вашите връзки или богатство.'
  },
  
  // Problem Vision Section
  'problem.vision.title': {
    en: 'Our Vision',
    bg: 'Нашата Визия'
  },
  'problem.vision.paragraph1': {
    en: 'NOVA BULGARIA introduces a new model for a self-governed, sovereign digital nation built on Proof of Contribution (PoC)—a system where your influence, rewards, and rights are based on your contributions, not birthright or wealth.',
    bg: 'НОВА БЪЛГАРИЯ въвежда нов модел за самоуправляваща се, суверенна дигитална нация, изградена върху Доказателство за принос (PoC) - система, в която вашето влияние, награди и права се основават на вашите приноси, а не на рождено право или богатство.'
  },
  'problem.vision.paragraph2': {
    en: 'By leveraging blockchain technology, decentralized identity, and a modular governance system, we create a nation where every law, service, and economic system is powered by its citizens.',
    bg: 'Чрез използване на блокчейн технология, децентрализирана идентичност и модулна система за управление, ние създаваме нация, в която всеки закон, услуга и икономическа система се захранва от нейните граждани.'
  },
  'problem.vision.paragraph3': {
    en: 'Instead of relying on broken governments or outdated institutions, we build a global-first nation that exists beyond borders, where participation is voluntary, economic incentives are fair, and governance is fully decentralized and incorruptible.',
    bg: 'Вместо да разчитаме на разбити правителства или остарели институции, ние изграждаме нация, която съществува отвъд границите, където участието е доброволно, икономическите стимули са справедливи, а управлението е напълно децентрализирано и неподкупно.'
  },
  'problem.vision.paragraph4': {
    en: 'As a citizen of NOVA BULGARIA, you gain access to a system where your efforts and expertise directly translate into influence and rewards. Whether you\'re building a business, participating in governance, or securing the network, every action earns you a rightful place in the nation. Your contributions define your success—nothing else.',
    bg: 'Като гражданин на НОВА БЪЛГАРИЯ, вие получавате достъп до система, в която вашите усилия и експертиза директно се превръщат във влияние и награди. Независимо дали изграждате бизнес, участвате в управлението или осигурявате мрежата, всяко действие ви печели законно място в нацията. Вашите приноси определят вашия успех—нищо друго.'
  },
  
  // Problem Works Section
  'problem.works.title': {
    en: 'How It Works',
    bg: 'Как Работи'
  },
  'problem.works.paragraph1': {
    en: 'NOVA BULGARIA is built on three core pillars:',
    bg: 'НОВА БЪЛГАРИЯ е изградена върху три основни стълба:'
  },
  'problem.works.pillars.title': {
    en: 'Core Pillars',
    bg: 'Основни Стълбове'
  },
  'problem.works.pillars.item1.title': {
    en: 'Proof of Contribution (PoC) & Soulbound NFT IDs',
    bg: 'Доказателство за Принос (PoC) и Привързани NFT ID'
  },
  'problem.works.pillars.item1.description': {
    en: 'Every citizen has a Soulbound NFT ID that tracks expertise, social rank, and governance participation. Your influence grows based on verified contributions, such as education, public service, or innovation. Voting power is earned, not inherited, ensuring only knowledgeable individuals influence important decisions.',
    bg: 'Всеки гражданин има привързано NFT ID, което проследява експертиза, социален ранг и участие в управлението. Вашето влияние нараства въз основа на проверени приноси, като образование, обществена служба или иновации. Правото на глас се печели, а не се наследява, гарантирайки, че само знаещи хора влияят на важни решения.'
  },
  'problem.works.pillars.item2.title': {
    en: 'Modular Blockchain Economy',
    bg: 'Модулна Блокчейн Икономика'
  },
  'problem.works.pillars.item2.description': {
    en: 'Our economy runs on BGL (Bulgarian Lion) and BGL-S (Stable Lion) tokens. Citizens can stake BGL in public projects (e.g., infrastructure, renewable energy, healthcare) and earn BGL-S dividends. Services such as healthcare, education, and law enforcement operate through separate dApps, where users pay with BGL-S and providers are rewarded based on performance and public approval.',
    bg: 'Нашата икономика работи с токени BGL (Български Лъв) и BGL-S (Стабилен Лъв). Гражданите могат да залагат BGL в обществени проекти (напр. инфраструктура, възобновяема енергия, здравеопазване) и да печелят дивиденти в BGL-S. Услуги като здравеопазване, образование и правоприлагане работят чрез отделни dApps, където потребителите плащат с BGL-S, а доставчиците се възнаграждават въз основа на изпълнение и обществено одобрение.'
  },
  'problem.works.pillars.item3.title': {
    en: 'Sovereign Internet & Decentralized Governance',
    bg: 'Суверенен Интернет и Децентрализирано Управление'
  },
  'problem.works.pillars.item3.description': {
    en: 'The network is powered by user-operated nodes, ensuring censorship resistance and full transparency. Citizens can propose and vote on national projects, shaping laws, policies, and budgets. Governance is automated by smart contracts, eliminating corruption and bureaucratic delays.',
    bg: 'Мрежата се захранва от възли, управлявани от потребители, осигурявайки устойчивост на цензура и пълна прозрачност. Гражданите могат да предлагат и гласуват за национални проекти, оформяйки закони, политики и бюджети. Управлението е автоматизирано чрез умни договори, елиминирайки корупцията и бюрократичните забавяния.'
  },
  'problem.works.conclusion': {
    en: 'This system creates a borderless, self-sustaining nation, where individuals control their future, economic participation is voluntary, and governance is truly by the people, for the people.',
    bg: 'Тази система създава нация без граници, самоподдържаща се, където хората контролират своето бъдеще, икономическото участие е доброволно, а управлението е наистина от хората, за хората.'
  },

  // Problem Citizen Section
  'problem.citizen.title': {
    en: 'Citizen Power',
    bg: 'Гражданска Сила'
  },
  'problem.citizen.paragraph1': {
    en: 'As a citizen of NOVA BULGARIA, you gain access to a system where your efforts and expertise directly translate into influence and rewards. Your Soulbound NFT ID gives you:',
    bg: 'Като гражданин на НОВА БЪЛГАРИЯ, вие получавате достъп до система, в която вашите усилия и експертиза директно се превръщат във влияние и награди. Вашето привързано NFT ID ви дава:'
  },
  'problem.citizen.benefits.item1': {
    en: 'Voting Power – Participate in governance decisions based on your expertise.',
    bg: 'Право на глас – Участвайте в управленски решения въз основа на вашата експертиза.'
  },
  'problem.citizen.benefits.item2': {
    en: 'Public Project Staking – Invest in nation-building projects and earn passive income in BGL-S.',
    bg: 'Залагане в обществени проекти – Инвестирайте в проекти за изграждане на нацията и печелете пасивен доход в BGL-S.'
  },
  'problem.citizen.benefits.item3': {
    en: 'Decentralized Services – Use your ID to access healthcare, education, and economic tools.',
    bg: 'Децентрализирани услуги – Използвайте вашето ID за достъп до здравеопазване, образование и икономически инструменти.'
  },
  'problem.citizen.benefits.item4': {
    en: 'Sovereign Internet – Connect to a decentralized, censorship-free web, where data and communication remain secure.',
    bg: 'Суверенен интернет – Свържете се с децентрализирана, свободна от цензура мрежа, където данните и комуникацията остават сигурни.'
  },
  'problem.citizen.benefits.item5': {
    en: 'Economic Freedom – Work as a doctor, teacher, engineer, or entrepreneur and get paid directly through blockchain-based smart contracts.',
    bg: 'Икономическа свобода – Работете като лекар, учител, инженер или предприемач и получавайте заплащане директно чрез блокчейн-базирани смарт договори.'
  },
  'problem.citizen.paragraph2': {
    en: 'Unlike traditional nations, where government controls opportunities, NOVA BULGARIA empowers individuals to shape their own future. Whether you\'re building a business, participating in governance, or securing the network, every action earns you a rightful place in the nation. Your contributions define your success—nothing else.',
    bg: 'За разлика от традиционните нации, където правителството контролира възможностите, НОВА БЪЛГАРИЯ дава възможност на хората да оформят собственото си бъдеще. Независимо дали изграждате бизнес, участвате в управлението или осигурявате мрежата, всяко действие ви печели законно място в нацията. Вашите приноси определят вашия успех—нищо друго.'
  },
  
  // Vision Section
  'vision.title': {
    en: 'Vision for the Future',
    bg: 'Визия за бъдещето'
  },
  'vision.concept.title': {
    en: 'The Problem',
    bg: 'Проблемът'
  },
  'vision.concept.paragraph1': {
    en: 'The modern world faces a deep crisis of trust, governance, and economic inequality. Traditional governments are plagued by corruption, inefficiency, and centralization, leading to failing economies, social unrest, and broken systems that no longer serve the people.',
    bg: 'Съвременният свят е изправен пред дълбока криза на доверие, управление и икономическо неравенство. Традиционните правителства са обременени от корупция, неефективност и централизация, водещи до провалящи се икономики, социални вълнения и разбити системи, които вече не служат на хората.'
  },
  'vision.concept.paragraph2': {
    en: 'Despite technological progress, democracy remains outdated, and national identity is often dictated by birthplace rather than contribution. There is no true national ideal today—no system where people are rewarded based on merit, transparency is guaranteed, and economic power is fairly distributed.',
    bg: 'Въпреки технологичния напредък, демокрацията остава остаряла, а националната идентичност често се диктува от мястото на раждане, а не от приноса. Днес няма истински национален идеал - няма система, в която хората да бъдат възнаграждавани въз основа на заслуги, прозрачността да е гарантирана, а икономическата власт да е справедливо разпределена.'
  },
  'vision.concept.paragraph3': {
    en: 'Citizens are forced to rely on governments that mismanage resources, suppress freedoms, and fail to represent the people\'s will. Meanwhile, global corporations monopolize wealth, leaving individuals powerless in their own nations. Without a fundamental shift in governance and economics, societies will continue to deteriorate, and the dream of true sovereignty and fairness will remain impossible.',
    bg: 'Гражданите са принудени да разчитат на правителства, които лошо управляват ресурсите, потискат свободите и не успяват да представят волята на народа. Междувременно глобалните корпорации монополизират богатството, оставяйки хората безсилни в собствените си нации. Без фундаментална промяна в управлението и икономиката, обществата ще продължат да се влошават, а мечтата за истинска независимост и справедливост ще остане невъзможна.'
  },
  'vision.nft.title': {
    en: 'Our Vision: NOVA BULGARIA',
    bg: 'Нашата визия: НОВА БЪЛГАРИЯ'
  },
  'vision.nft.paragraph1': {
    en: 'NOVA BULGARIA introduces a new model for a self-governed, sovereign digital nation built on Proof of Contribution (PoC)—a system where your influence, rewards, and rights are based on your contributions, not birthright or wealth. We believe nations should be built by the people, for the people, and that governance, economy, and identity should be merit-based, decentralized, and fully transparent.',
    bg: 'НОВА БЪЛГАРИЯ въвежда нов модел за самоуправляваща се, суверенна дигитална нация, изградена върху Доказателство за принос (PoC) - система, в която вашето влияние, награди и права се основават на вашите приноси, а не на рождено право или богатство. Вярваме, че нациите трябва да бъдат изградени от хората, за хората, и че управлението, икономиката и идентичността трябва да се основават на заслуги, да бъдат децентрализирани и напълно прозрачни.'
  },
  'vision.nft.paragraph2': {
    en: 'By leveraging blockchain technology, decentralized identity, and a modular governance system, we create a nation where every law, service, and economic system is powered by its citizens. Our model allows individuals to earn voting power, stake in public projects, and access national services based on their expertise, contributions, and social trust.',
    bg: 'Чрез използване на блокчейн технология, децентрализирана идентичност и модулна система за управление, ние създаваме нация, в която всеки закон, услуга и икономическа система се захранва от нейните граждани. Нашият модел позволява на хората да печелят право на глас, да участват в обществени проекти и да получават достъп до национални услуги въз основа на техния опит, принос и социално доверие.'
  },
  'vision.nft.paragraph3': {
    en: 'Instead of relying on broken governments or outdated institutions, we build a global-first nation that exists beyond borders, where participation is voluntary, economic incentives are fair, and governance is fully decentralized and incorruptible.',
    bg: 'Вместо да разчитаме на разбити правителства или остарели институции, ние изграждаме нация, която съществува отвъд границите, където участието е доброволно, икономическите стимули са справедливи, а управлението е напълно децентрализирано и неподкупно.'
  },
  'vision.nft.paragraph4': {
    en: 'As a citizen of NOVA BULGARIA, you gain access to a system where your efforts and expertise directly translate into influence and rewards. Whether you\'re building a business, participating in governance, or securing the network, every action earns you a rightful place in the nation. Your contributions define your success—nothing else.',
    bg: 'Като гражданин на НОВА БЪЛГАРИЯ, вие получавате достъп до система, в която вашите усилия и експертиза директно се превръщат във влияние и награди. Независимо дали изграждате бизнес, участвате в управлението или осигурявате мрежата, всяко действие ви печели законно място в нацията. Вашите приноси определят вашия успех—нищо друго.'
  },
  // Introduction Section
  'intro.title': {
    en: 'The Need for NOVA BULGARIA',
    bg: 'Нуждата от НОВА БЪЛГАРИЯ'
  },
  'intro.subtitle': {
    en: 'A blockchain-powered solution to rebuild a nation in crisis',
    bg: 'Блокчейн решение за възстановяване на нация в криза'
  },
  'intro.tab.political': {
    en: 'Political Crisis',
    bg: 'Политическа Криза'
  },
  'intro.tab.environmental': {
    en: 'Environmental Crisis',
    bg: 'Екологична Криза'
  },
  'intro.tab.youth': {
    en: 'Youth Crisis',
    bg: 'Младежка Криза'
  },
  'intro.tab.solution': {
    en: 'The Solution',
    bg: 'Решението'
  },
  'intro.tab.vision': {
    en: 'Vision',
    bg: 'Визия'
  },
  'intro.tab.blockchain': {
    en: 'Why Blockchain',
    bg: 'Защо Блокчейн'
  },
  'intro.crisis.title': {
    en: 'The Current Political Crisis: Corruption, Tyranny, and National Collapse',
    bg: 'Текущата Политическа Криза: Корупция, Тирания и Национален Колапс'
  },
  'intro.crisis.text1': {
    en: 'Bulgaria stands at the edge of destruction, gripped by a ruthless and corrupt regime that has held power for decades. The country is controlled by an oligarchic mafia, led by political figures such as Boyko Borissov and Delyan Peevski, who have systematically looted the nation\'s resources, silenced opposition, and driven millions into poverty. Their control extends deep into every institution—the government, judiciary, media, and even law enforcement—turning Bulgaria into a puppet state where laws serve only the interests of the corrupt elite.',
    bg: 'България е на ръба на разрушението, хваната в хватката на безмилостен и корумпиран режим, който държи властта от десетилетия. Страната е контролирана от олигархична мафия, водена от политически фигури като Бойко Борисов и Делян Пеевски, които систематично разграбват ресурсите на нацията, заглушават опозицията и тласкат милиони в бедност. Техният контрол се простира дълбоко във всяка институция—правителството, съдебната система, медиите и дори правоприлагащите органи—превръщайки България в марионетна държава, където законите обслужват само интересите на корумпирания елит.'
  },
  'intro.crisis.text2': {
    en: 'For years, these political criminals have engaged in mass financial theft, suppression of free speech, and the destruction of democratic values. Instead of serving the people, they have orchestrated an economic genocide, forcing millions of Bulgarians to flee the country in search of a better future. Those who remain are trapped in a system of oppression, where poverty, lack of healthcare, and unchecked police brutality are the norm.',
    bg: 'В продължение на години тези политически престъпници са участвали в масови финансови кражби, потискане на свободата на словото и разрушаване на демократичните ценности. Вместо да служат на народа, те са организирали икономически геноцид, принуждавайки милиони българи да напуснат страната в търсене на по-добро бъдеще. Тези, които остават, са хванати в капан в система на потисничество, където бедността, липсата на здравеопазване и безконтролната полицейска бруталност са норма.'
  },
  'intro.crisis.subheading1': {
    en: 'The Imminent Collapse of Bulgaria',
    bg: 'Непосредственият Колапс на България'
  },
  'intro.crisis.subtext1': {
    en: 'The current state of Bulgaria is unsustainable. With a rapidly declining population, widespread unemployment, and a complete lack of institutional trust, the country is on the verge of economic and social collapse. If the corruption continues, Bulgaria will cease to function as a sovereign state and will be left in ruins, controlled by foreign interests and criminal networks.',
    bg: 'Сегашното състояние на България е неустойчиво. С бързо намаляващо население, широко разпространена безработица и пълна липса на институционално доверие, страната е на ръба на икономически и социален колапс. Ако корупцията продължи, България ще престане да функционира като суверенна държава и ще бъде оставена в руини, контролирана от чужди интереси и престъпни мрежи.'
  },
  'intro.crisis.subheading2': {
    en: 'The End of Political Parties and Bureaucratic Waste',
    bg: 'Краят на Политическите Партии и Бюрократичното Разхищение'
  },
  'intro.crisis.subtext2': {
    en: 'With NOVA BULGARIA, the era of corrupt political parties and wasteful bureaucracy comes to an end. By replacing these outdated structures with a decentralized, blockchain-based governance system, we eliminate the middlemen who have exploited the Bulgarian people for decades. Every citizen becomes a direct participant in governance, with the power to propose, vote on, and implement policies without relying on corrupt representatives.',
    bg: 'С НОВА БЪЛГАРИЯ ерата на корумпираните политически партии и разточителната бюрокрация приключва. Чрез заменяне на тези остарели структури с децентрализирана, базирана на блокчейн система за управление, ние елиминираме посредниците, които са експлоатирали българския народ десетилетия наред. Всеки гражданин става пряк участник в управлението, с власт да предлага, гласува и прилага политики, без да разчита на корумпирани представители.'
  },
  'intro.environment.title': {
    en: 'Environmental Crisis: The Destruction of Bulgaria\'s Natural Heritage',
    bg: 'Екологична Криза: Унищожаването на Природното Наследство на България'
  },
  'intro.environment.text1': {
    en: 'Bulgaria\'s natural resources—its forests, rivers, and Black Sea coast—are being systematically destroyed by corrupt officials and corporations. Illegal logging has devastated ancient forests, while unregulated construction has ruined coastal areas. The country\'s water resources are contaminated with industrial waste, and air pollution in major cities far exceeds safe levels, causing severe health problems for citizens.',
    bg: 'Природните ресурси на България—нейните гори, реки и черноморско крайбрежие—се унищожават систематично от корумпирани служители и корпорации. Незаконната сеч е опустошила древни гори, докато нерегулираното строителство е съсипало крайбрежните райони. Водните ресурси на страната са замърсени с промишлени отпадъци, а замърсяването на въздуха в големите градове далеч надхвърля безопасните нива, причинявайки сериозни здравословни проблеми на гражданите.'
  },
  'intro.environment.text2': {
    en: 'The current government has not only failed to protect Bulgaria\'s environment but has actively participated in its destruction. Environmental regulations are ignored, activists are silenced, and protected areas are opened for exploitation. This environmental catastrophe threatens not only Bulgaria\'s biodiversity but also the health and future of its people.',
    bg: 'Настоящото правителство не само не успя да защити околната среда на България, но и активно участва в нейното унищожаване. Екологичните разпоредби се игнорират, активистите са заглушени, а защитените територии се отворят за експлоатация. Тази екологична катастрофа заплашва не само биоразнообразието на България, но и здравето и бъдещето на нейния народ.'
  },
  'intro.environment.subheading1': {
    en: 'Environmental Restoration Through Blockchain',
    bg: 'Възстановяване на Околната Среда Чрез Блокчейн'
  },
  'intro.environment.subtext1': {
    en: 'NOVA BULGARIA will implement a blockchain-based environmental protection system that ensures transparency in resource management and holds polluters accountable. Through tokenized incentives, we will reward conservation efforts and sustainable practices, while penalizing environmental destruction. Our decentralized governance will give citizens the power to protect their natural heritage and create a sustainable future for generations to come.',
    bg: 'НОВА БЪЛГАРИЯ ще внедри базирана на блокчейн система за опазване на околната среда, която осигурява прозрачност в управлението на ресурсите и държи замърсителите отговорни. Чрез токенизирани стимули ще възнаграждаеме усилията за опазване и устойчиви практики, като същевременно наказваме унищожаването на околната среда. Нашето децентрализирано управление ще даде на гражданите силата да защитават природното си наследство и да създадат устойчиво бъдеще за идните поколения.'
  },
  'intro.youth.title': {
    en: 'Youth Crisis: A Generation Without Hope',
    bg: 'Младежка Криза: Поколение Без Надежда'
  },
  'intro.youth.text1': {
    en: 'Bulgaria is experiencing a catastrophic youth exodus, with an estimated 1.5 million young Bulgarians having left the country in the past three decades. This brain drain represents the loss of the country\'s most valuable resource—its future generation. Young people are fleeing due to a lack of economic opportunities, poor educational systems, and a pervasive sense of hopelessness about Bulgaria\'s future.',
    bg: 'България преживява катастрофален младежки изход, с приблизително 1,5 милиона млади българи, напуснали страната през последните три десетилетия. Това изтичане на мозъци представлява загубата на най-ценния ресурс на страната—нейното бъдещо поколение. Младите хора бягат поради липса на икономически възможности, лоши образователни системи и повсеместно чувство на безнадеждност относно бъдещето на България.'
  },
  'intro.youth.text2': {
    en: 'Those who remain face unemployment, low wages, and a system that rewards corruption over merit. The education system fails to prepare students for the modern economy, while nepotism and bribery determine career advancement rather than skill or hard work. This has created a generation of disillusioned young Bulgarians who see no future in their homeland.',
    bg: 'Тези, които остават, са изправени пред безработица, ниски заплати и система, която възнаграждава корупцията пред заслугите. Образователната система не успява да подготви учениците за съвременната икономика, докато непотизмът и подкупите определят кариерното развитие, а не уменията или усърдната работа. Това създаде поколение разочаровани млади българи, които не виждат бъдеще в родината си.'
  },
  'intro.youth.subheading1': {
    en: 'Rebuilding Youth Opportunity',
    bg: 'Възстановяване на Младежките Възможности'
  },
  'intro.youth.subtext1': {
    en: 'NOVA BULGARIA will create a meritocratic system where young people can thrive based on their skills and contributions, not their connections. Through blockchain-based education credentials, skill verification, and job matching, we will build an economy that rewards talent and innovation. Our digital nation will provide the opportunities that have been denied to Bulgarian youth, giving them a reason to stay and build a future in their homeland.',
    bg: 'НОВА БЪЛГАРИЯ ще създаде меритократична система, в която младите хора могат да преуспяват въз основа на своите умения и принос, а не на връзките си. Чрез образователни удостоверения, базирани на блокчейн, проверка на уменията и съответствие на работни места, ще изградим икономика, която възнаграждава таланта и иновациите. Нашата дигитална нация ще предостави възможностите, които са били отказвани на българската младеж, давайки им причина да останат и да изградят бъдеще в родината си.'
  },
  'intro.solution.title': {
    en: 'The Solution: A Blockchain-Powered Nation',
    bg: 'Решението: Нация, Задвижвана от Блокчейн'
  },
  'intro.solution.text1': {
    en: 'NOVA BULGARIA offers a radical yet necessary solution: a fully decentralized digital nation, governed by its citizens through blockchain technology. By eliminating centralized control and replacing corrupt bureaucracies with smart contracts, we can create a fair, transparent, and merit-based society where power belongs to the people, not to a handful of criminal elites.',
    bg: 'НОВА БЪЛГАРИЯ предлага радикално, но необходимо решение: напълно децентрализирана дигитална нация, управлявана от гражданите си чрез блокчейн технология. Чрез премахване на централизирания контрол и заменяне на корумпираните бюрокрации с умни договори, можем да създадем справедливо, прозрачно и основано на заслуги общество, където властта принадлежи на народа, а не на шепа престъпни елити.'
  },
  'intro.solution.subheading1': {
    en: 'Decentralized Governance',
    bg: 'Децентрализирано Управление'
  },
  'intro.solution.subtext1': {
    en: 'Replace corrupt politicians with direct democratic voting on a secure blockchain, where every citizen has a voice and all decisions are transparent and immutable.',
    bg: 'Заменете корумпираните политици с пряко демократично гласуване в сигурен блокчейн, където всеки гражданин има глас и всички решения са прозрачни и непроменими.'
  },
  'intro.solution.subheading2': {
    en: 'Transparent Economy',
    bg: 'Прозрачна Икономика'
  },
  'intro.solution.subtext2': {
    en: 'Create a new economic system where all transactions are recorded on the blockchain, eliminating corruption, tax evasion, and the theft of public funds.',
    bg: 'Създайте нова икономическа система, в която всички транзакции се записват в блокчейна, елиминирайки корупцията, укриването на данъци и кражбата на обществени средства.'
  },
  'intro.solution.subheading3': {
    en: 'Digital Identity',
    bg: 'Дигитална Идентичност'
  },
  'intro.solution.subtext3': {
    en: 'Provide every citizen with a secure, self-sovereign digital identity that gives them access to services, voting rights, and economic opportunities without centralized control.',
    bg: 'Осигурете на всеки гражданин сигурна, самостоятелна дигитална идентичност, която им дава достъп до услуги, право на глас и икономически възможности без централизиран контрол.'
  },
  'intro.solution.subheading4': {
    en: 'Meritocratic System',
    bg: 'Меритократична Система'
  },
  'intro.solution.subtext4': {
    en: 'Build a society where advancement is based on contributions and skills, not on political connections or corruption, creating true equality of opportunity.',
    bg: 'Изградете общество, в което напредъкът се основава на приноса и уменията, а не на политически връзки или корупция, създавайки истинско равенство на възможностите.'
  },
  'intro.vision.title': {
    en: 'Vision: The Future of a Decentralized Nation',
    bg: 'Визия: Бъдещето на Децентрализирана Нация'
  },
  'intro.vision.text1': {
    en: 'NOVA BULGARIA is a revolutionary concept that redefines what it means to be a nation. Unlike traditional countries that rely on central authorities, NOVA BULGARIA operates on blockchain technology, ensuring full transparency, fairness, and self-governance by its citizens. This digital nation is built on meritocracy, where contributions and active participation determine a person\'s role, influence, and rewards. Our goal is to create a self-sustaining economy and governance system that is free from corruption, inefficiencies, and outdated bureaucracies.',
    bg: 'НОВА БЪЛГАРИЯ е революционна концепция, която предефинира какво означава да бъдеш нация. За разлика от традиционните държави, които разчитат на централни власти, НОВА БЪЛГАРИЯ работи на блокчейн технология, осигурявайки пълна прозрачност, справедливост и самоуправление от своите граждани. Тази дигитална нация е изградена върху меритокрация, където приносът и активното участие определят ролята, влиянието и наградите на човека. Нашата цел е да създадем самоподдържаща се икономика и система на управление, която е свободна от корупция, неефективност и остарели бюрокрации.'
  },
  'intro.vision.subheading1': {
    en: 'A Nation Without Borders',
    bg: 'Нация Без Граници'
  },
  'intro.vision.subtext1': {
    en: 'NOVA BULGARIA transcends geographical limitations, allowing Bulgarians worldwide to participate in building and governing their digital homeland. Whether you live in Sofia, London, or New York, you can be an active citizen of NOVA BULGARIA, contributing to its growth and sharing in its prosperity. This borderless nation unites the Bulgarian diaspora, harnessing the talents and resources of millions who were forced to leave their homeland due to corruption and lack of opportunity.',
    bg: 'НОВА БЪЛГАРИЯ надхвърля географските ограничения, позволявайки на българите по целия свят да участват в изграждането и управлението на своята дигитална родина. Независимо дали живеете в София, Лондон или Ню Йорк, можете да бъдете активен гражданин на НОВА БЪЛГАРИЯ, допринасящ за нейния растеж и споделящ нейния просперитет. Тази нация без граници обединява българската диаспора, използвайки талантите и ресурсите на милиони, които са били принудени да напуснат родината си поради корупция и липса на възможности.'
  },
  'intro.blockchain.title': {
    en: 'Why Blockchain?',
    bg: 'Защо Блокчейн?'
  },
  'intro.blockchain.subheading1': {
    en: 'Immutable Transparency',
    bg: 'Непроменима Прозрачност'
  },
  'intro.blockchain.subtext1': {
    en: 'Blockchain provides an immutable record of all transactions and decisions, making it impossible for corrupt officials to alter records, steal funds, or manipulate votes. Every action is permanently recorded and visible to all citizens, ensuring unprecedented transparency in governance and finance.',
    bg: 'Блокчейнът предоставя непроменим запис на всички транзакции и решения, правейки невъзможно за корумпирани служители да променят записи, да крадат средства или да манипулират гласове. Всяко действие се записва за постоянно и е видимо за всички граждани, осигурявайки безпрецедентна прозрачност в управлението и финансите.'
  },
  'intro.blockchain.subheading2': {
    en: 'Elimination of Middlemen',
    bg: 'Премахване на Посредниците'
  },
  'intro.blockchain.subtext2': {
    en: 'Smart contracts automatically execute agreements without the need for intermediaries, eliminating the corrupt bureaucrats and officials who currently extract bribes and fees from every transaction. This reduces costs, increases efficiency, and removes opportunities for corruption.',
    bg: 'Умните договори автоматично изпълняват споразумения без нужда от посредници, елиминирайки корумпираните бюрократи и служители, които в момента извличат подкупи и такси от всяка транзакция. Това намалява разходите, увеличава ефективността и премахва възможностите за корупция.'
  },
  'intro.blockchain.subheading3': {
    en: 'Decentralized Power',
    bg: 'Децентрализирана Власт'
  },
  'intro.blockchain.subtext3': {
    en: 'Unlike traditional systems where power is concentrated in the hands of a few, blockchain distributes authority across the network, making it resistant to takeover by corrupt interests. No single entity can control the system, ensuring that NOVA BULGARIA remains truly democratic and resistant to the oligarchic capture that has plagued Bulgaria.',
    bg: 'За разлика от традиционните системи, където властта е концентрирана в ръцете на малцина, блокчейнът разпределя властта в цялата мрежа, правейки я устойчива на превземане от корумпирани интереси. Нито един субект не може да контролира системата, гарантирайки, че НОВА БЪЛГАРИЯ остава истински демократична и устойчива на олигархичното завладяване, което измъчва България.'
  },
  'intro.blockchain.subheading4': {
    en: 'Economic Sovereignty',
    bg: 'Икономически Суверенитет'
  },
  'intro.blockchain.subtext4': {
    en: 'Through its own cryptocurrency and tokenized assets, NOVA BULGARIA creates an independent economic system that is resistant to external manipulation and control. This economic sovereignty protects citizens from the inflation, currency manipulation, and economic mismanagement that have impoverished Bulgarians for decades.',
    bg: 'Чрез своята собствена криптовалута и токенизирани активи, НОВА БЪЛГАРИЯ създава независима икономическа система, която е устойчива на външна манипулация и контрол. Този икономически суверенитет защитава гражданите от инфлацията, манипулацията на валутата и икономическото лошо управление, които са обеднявали българите десетилетия наред.'
  },
  'intro.cta': {
    en: 'Explore Our Tokenomics',
    bg: 'Разгледайте Нашата Токеномика'
  },
  
  // Need For Nova Section
  'need.title': {
    en: 'The Need for NOVA BULGARIA',
    bg: 'Нуждата от НОВА БЪЛГАРИЯ'
  },
  'need.subtitle': {
    en: 'Bulgaria stands at a critical crossroads, facing political corruption, environmental degradation, and a youth exodus.',
    bg: 'България е на критичен кръстопът, изправена пред политическа корупция, екологична деградация и младежки изход.'
  },
  'need.tab.political': {
    en: 'Political Crisis',
    bg: 'Политическа Криза'
  },
  'need.tab.environmental': {
    en: 'Environmental Crisis',
    bg: 'Екологична Криза'
  },
  'need.tab.youth': {
    en: 'Youth Crisis',
    bg: 'Младежка Криза'
  },
  'need.tab.solution': {
    en: 'The Solution',
    bg: 'Решението'
  },
  'need.tab.vision': {
    en: 'Vision',
    bg: 'Визия'
  },
  'need.tab.blockchain': {
    en: 'Why Blockchain',
    bg: 'Защо Блокчейн'
  },
  'need.political.title': {
    en: 'The Current Political Crisis: Corruption, Tyranny, and National Collapse',
    bg: 'Текущата Политическа Криза: Корупция, Тирания и Национален Колапс'
  },
  'need.political.paragraph1': {
    en: 'Bulgaria stands at the edge of destruction, gripped by a ruthless and corrupt regime that has held power for decades. The country is controlled by an oligarchic mafia, led by political figures such as Boyko Borisov and Delyan Peevski, who have systematically looted the nation\'s resources, silenced opposition, and driven millions into poverty.',
    bg: 'България е на ръба на разрушението, сграбчена от безмилостен и корумпиран режим, който държи властта десетилетия наред. Страната е контролирана от олигархична мафия, водена от политически фигури като Бойко Борисов и Делян Пеевски, които систематично разграбват ресурсите на нацията, заглушават опозицията и тласкат милиони в бедност.'
  },
  'need.political.paragraph2': {
    en: 'For years, these political criminals have engaged in mass financial theft, suppression of free speech, and the destruction of democratic values. Instead of serving the people, they have orchestrated an economic genocide, forcing millions of Bulgarians to flee the country in search of a better future. Those who remain are trapped in a system of oppression, where poverty, lack of healthcare, and unchecked police brutality are the norm.',
    bg: 'В продължение на години тези политически престъпници са участвали в масови финансови кражби, потискане на свободата на словото и унищожаване на демократичните ценности. Вместо да служат на народа, те са организирали икономически геноцид, принуждавайки милиони българи да напуснат страната в търсене на по-добро бъдеще. Тези, които остават, са хванати в капан в система на потисничество, където бедността, липсата на здравеопазване и безконтролната полицейска бруталност са норма.'
  },
  'need.political.collapse.title': {
    en: 'The Imminent Collapse of Bulgaria',
    bg: 'Непосредственият Колапс на България'
  },
  'need.political.collapse.text': {
    en: 'The current state of Bulgaria is unsustainable. With a rapidly declining population, widespread unemployment, and a complete lack of institutional trust, the country is on the verge of economic and social collapse. If the corruption continues, Bulgaria will cease to function as a sovereign state and will be left in ruins, controlled by foreign interests and criminal networks.',
    bg: 'Сегашното състояние на България е неустойчиво. С бързо намаляващо население, широко разпространена безработица и пълна липса на институционално доверие, страната е на ръба на икономически и социален колапс. Ако корупцията продължи, България ще престане да функционира като суверенна държава и ще бъде оставена в руини, контролирана от чужди интереси и престъпни мрежи.'
  },
  'need.political.stat1': {
    en: 'Population Decline Since 1989',
    bg: 'Спад на Населението от 1989 г.'
  },
  'need.political.stat2': {
    en: 'Citizens Living Below Poverty Line',
    bg: 'Граждани, Живеещи под Линията на Бедност'
  },
  'need.political.stat3': {
    en: 'EU Corruption Ranking',
    bg: 'Класиране по Корупция в ЕС'
  },
  'need.environmental.title': {
    en: 'Environmental Devastation',
    bg: 'Екологично Опустошение'
  },
  'need.environmental.paragraph1': {
    en: 'Bulgaria\'s once pristine environment is being systematically destroyed by corrupt officials who sell off protected lands to private interests. Ancient forests are being clear-cut, rivers polluted with industrial waste, and protected areas developed for commercial gain. The government has failed to implement effective environmental regulations, resulting in some of the worst air quality in Europe and widespread environmental degradation.',
    bg: 'Природните ресурси на България—нейните гори, реки и черноморско крайбрежие—се унищожават систематично от корумпирани служители, които продават защитени земи на частни интереси. Древните гори се изсичат, реките се замърсяват с промишлени отпадъци, а защитените територии се разработват за търговска печалба. Правителството не успя да приложи ефективни екологични разпоредби, което доведе до някои от най-лошите показатели за качество на въздуха в Европа и широко разпространена екологична деградация.'
  },
  'need.environmental.paragraph2': {
    en: 'The Black Sea coast, once a natural treasure, has been overdeveloped with illegal construction projects that destroy fragile ecosystems. Mining operations continue to contaminate soil and water sources, while waste management remains inadequate, leading to illegal dumping and pollution. Climate change further exacerbates these issues, with more frequent droughts, floods, and extreme weather events affecting agriculture and water supplies.',
    bg: 'Черноморското крайбрежие, някога природно съкровище, е свръхзастроено с незаконни строителни проекти, които унищожават крехките екосистеми. Минните операции продължават да замърсяват почвата и водните източници, докато управлението на отпадъците остава неадекватно, което води до незаконно изхвърляне и замърсяване. Изменението на климата допълнително изостря тези проблеми, с по-чести суши, наводнения и екстремни метеорологични явления, засягащи селското стопанство и водоснабдяването.'
  },
  'need.environmental.consequences.title': {
    en: 'Environmental Consequences',
    bg: 'Екологични Последици'
  },
  'need.environmental.consequences.text': {
    en: 'The environmental crisis has severe consequences for public health, with increased rates of respiratory diseases, cancer, and other illnesses linked to pollution. Agricultural productivity is declining due to soil degradation and water scarcity, threatening food security. Bulgaria\'s biodiversity is rapidly diminishing, with many endemic species facing extinction. Without immediate action, the country\'s natural resources will be depleted beyond recovery, leaving a barren landscape for future generations.',
    bg: 'Екологичната криза има тежки последици за общественото здраве, с повишени нива на респираторни заболявания, рак и други болести, свързани със замърсяването. Селскостопанската производителност намалява поради деградация на почвата и недостиг на вода, застрашавайки продоволствената сигурност. Биоразнообразието на България бързо намалява, като много ендемични видове са изправени пред изчезване. Без незабавни действия, природните ресурси на страната ще бъдат изчерпани отвъд възстановяване, оставяйки безплоден пейзаж за бъдещите поколения.'
  },
  'need.environmental.stat1': {
    en: 'Protected Forests Lost Since 2000',
    bg: 'Загубени Защитени Гори от 2000 г.'
  },
  'need.environmental.stat2': {
    en: 'Air Pollution Above EU Average',
    bg: 'Замърсяване на Въздуха над Средното за ЕС'
  },
  'need.environmental.stat3': {
    en: 'Coastal Areas Illegally Developed',
    bg: 'Незаконно Застроени Крайбрежни Зони'
  },
  'need.youth.title': {
    en: 'The Youth Exodus',
    bg: 'Младежкият Изход'
  },
  'need.youth.paragraph1': {
    en: 'Bulgaria is experiencing a catastrophic youth exodus, with an estimated 1.5 million young Bulgarians having left the country in the past three decades. This brain drain represents the loss of the country\'s most valuable resource—its future generation. Young people are fleeing due to a lack of economic opportunities, poor educational systems, and a pervasive sense of hopelessness about Bulgaria\'s future.',
    bg: 'България преживява катастрофален младежки изход, като приблизително 1,5 милиона млади българи са напуснали страната през последните три десетилетия. Това изтичане на мозъци представлява загубата на най-ценния ресурс на страната—нейното бъдещо поколение. Младите хора бягат поради липса на икономически възможности, лоши образователни системи и повсеместно чувство на безнадеждност относно бъдещето на България.'
  },
  'need.youth.paragraph2': {
    en: 'Those who remain face unemployment, low wages, and a system that rewards corruption over merit. The education system fails to prepare students for the modern economy, while nepotism and bribery often determine career advancement rather than skill or hard work. This creates a vicious cycle where talented youth see no future in their homeland and choose to build their lives elsewhere.',
    bg: 'Тези, които остават, са изправени пред безработица, ниски заплати и система, която възнаграждава корупцията пред заслугите. Образователната система не успява да подготви учениците за съвременната икономика, докато непотизмът и подкупите често определят кариерното развитие, а не уменията или усърдната работа. Това създаде поколение разочаровани млади българи, които не виждат бъдеще в родината си.'
  },
  'need.youth.demographic.title': {
    en: 'Demographic Collapse',
    bg: 'Демографски Колапс'
  },
  'need.youth.demographic.text': {
    en: 'Bulgaria\'s population has decreased from nearly 9 million in 1989 to less than 7 million today, with projections showing a further decline to under 5 million by 2050 if current trends continue. This demographic crisis threatens the very existence of the Bulgarian nation, as villages empty, schools close, and entire regions become depopulated. Without its youth, Bulgaria cannot sustain its economy, culture, or national identity.',
    bg: 'Населението на България е намаляло от почти 9 милиона през 1989 г. до по-малко от 7 милиона днес, като прогнозите показват по-нататъшен спад до под 5 милиона до 2050 г., ако сегашните тенденции продължат. Тази демографска криза заплашва самото съществуване на българската нация, тъй като селата се изпразват, училищата се затварят и цели региони се обезлюдяват. Без своята младеж България не може да поддържа своята икономика, култура или национална идентичност.'
  },
  'need.youth.stat1': {
    en: 'Young Bulgarians Abroad',
    bg: 'Млади Българи в Чужбина'
  },
  'need.youth.stat2': {
    en: 'Population Decline by 2050',
    bg: 'Спад на Населението до 2050 г.'
  },
  'need.youth.stat3': {
    en: 'Year When Bulgaria May Cease to Exist',
    bg: 'Година, Когато България Може да Престане да Съществува'
  },
  'need.solution.title': {
    en: 'The Solution: A Digital Rebirth',
    bg: 'Решението: Дигитално Възраждане'
  },
  'need.solution.paragraph1': {
    en: 'Traditional solutions have failed Bulgaria. Decades of protests, elections, and attempted reforms have not broken the grip of corruption or reversed the country\'s decline. A radical new approach is needed—one that bypasses the corrupt system entirely and empowers citizens directly. NOVA BULGARIA represents this revolutionary solution: a sovereign digital nation built on blockchain technology that creates a parallel governance structure.',
    bg: 'Традиционните решения се провалиха в България. Десетилетия на протести, избори и опити за реформи не успяха да разбият хватката на корупцията или да обърнат упадъка на страната. Необходим е радикално нов подход—такъв, който напълно заобикаля корумпираната система и овластява гражданите директно. НОВА БЪЛГАРИЯ представлява това революционно решение: суверенна дигитална нация, изградена върху блокчейн технология, която създава паралелна структура на управление.'
  },
  'need.solution.paragraph2': {
    en: 'This digital nation is not bound by geographical borders but instead unites Bulgarians worldwide through shared values, culture, and a commitment to building a better future. By creating a decentralized, transparent, and meritocratic system, we can harness the collective power of Bulgarians everywhere to rebuild our nation from the ground up.',
    bg: 'Тази дигитална нация не е обвързана с географски граници, а вместо това обединява българите по целия свят чрез споделени ценности, култура и ангажимент за изграждане на по-добро бъдеще. Чрез създаване на децентрализирана, прозрачна и меритократична система, можем да използваме колективната сила на българите навсякъде, за да възстановим нашата нация от основите.'
  },
  'need.solution.elements.title': {
    en: 'Key Elements of the Solution',
    bg: 'Ключови Елементи на Решението'
  },
  'need.solution.elements.item1.title': {
    en: 'Digital Citizenship',
    bg: 'Дигитално Гражданство'
  },
  'need.solution.elements.item1.desc': {
    en: 'Secure, blockchain-based identity system giving every Bulgarian a voice',
    bg: 'Сигурна, базирана на блокчейн система за идентичност, даваща глас на всеки българин'
  },
  'need.solution.elements.item2.title': {
    en: 'Decentralized Governance',
    bg: 'Децентрализирано Управление'
  },
  'need.solution.elements.item2.desc': {
    en: 'Direct democratic decision-making eliminating corrupt intermediaries',
    bg: 'Пряко демократично вземане на решения, елиминиращо корумпирани посредници'
  },
  'need.solution.elements.item3.title': {
    en: 'Tokenized Economy',
    bg: 'Токенизирана Икономика'
  },
  'need.solution.elements.item3.desc': {
    en: 'Fair economic system rewarding contribution and creating opportunities',
    bg: 'Справедлива икономическа система, възнаграждаваща приноса и създаваща възможности'
  },
  'need.solution.elements.item4.title': {
    en: 'Global Community',
    bg: 'Глобална Общност'
  },
  'need.solution.elements.item4.desc': {
    en: 'Uniting the Bulgarian diaspora with those still in the homeland',
    bg: 'Обединяване на българската диаспора с тези, които все още са в родината'
  },
  'need.solution.elements.item5.title': {
    en: 'Transparent Operations',
    bg: 'Прозрачни Операции'
  },
  'need.solution.elements.item5.desc': {
    en: 'All decisions and financial transactions visible on the blockchain',
    bg: 'Всички решения и финансови транзакции видими на блокчейна'
  },
  'need.vision.title': {
    en: 'Our Vision: A New Bulgarian Renaissance',
    bg: 'Нашата Визия: Ново Българско Възраждане'
  },
  'need.vision.paragraph1': {
    en: 'NOVA BULGARIA envisions a digital renaissance that revitalizes Bulgarian society, culture, and economy. We aim to create a thriving, meritocratic community where talent is rewarded, innovation flourishes, and decisions are made collectively for the common good. Our digital nation will preserve and promote Bulgaria\'s unique cultural heritage while embracing technological advancement.',
    bg: 'НОВА БЪЛГАРИЯ предвижда дигитално възраждане, което съживява българското общество, култура и икономика. Целим да създадем процъфтяваща, меритократична общност, където талантът се възнаграждава, иновациите процъфтяват и решенията се вземат колективно за общото благо. Нашата дигитална нация ще запази и популяризира уникалното културно наследство на България, като същевременно прегръща технологичния напредък.'
  },
  'need.vision.paragraph2': {
    en: 'Our digital nation will serve as a model for how blockchain technology can transform governance and create more just, efficient, and participatory systems. By demonstrating success at scale, we will inspire similar movements globally while preserving and promoting Bulgaria\'s unique cultural heritage and historical significance.',
    bg: 'Нашата дигитална нация ще служи като модел за това как блокчейн технологията може да трансформира управлението и да създаде по-справедливи, ефективни и основани на участието системи. Чрез демонстриране на успех в голям мащаб, ще вдъхновим подобни движения в световен мащаб, като същевременно запазим и популяризираме уникалното културно наследство и историческо значение на България.'
  },
  'need.vision.longterm.title': {
    en: 'Long-term Vision',
    bg: 'Дългосрочна Визия'
  },
  'need.vision.longterm.text': {
    en: 'In the long term, NOVA BULGARIA will evolve from a parallel digital structure to a recognized sovereign entity with diplomatic relations, economic partnerships, and cultural exchanges. Our digital nation will eventually acquire physical territories through legal means, creating innovation hubs, sustainable communities, and cultural centers that embody our values and showcase Bulgarian talent to the world.',
    bg: 'В дългосрочен план НОВА БЪЛГАРИЯ ще се развие от паралелна дигитална структура до признат суверенен субект с дипломатически отношения, икономически партньорства и културен обмен. Нашата дигитална нация в крайна сметка ще придобие физически територии чрез законни средства, създавайки иновационни центрове, устойчиви общности и културни центрове, които въплъщават нашите ценности и показват българския талант на света.'
  },
  'need.vision.timeline.year1.title': {
    en: 'Digital Nation Launch',
    bg: 'Стартиране на Дигиталната Нация'
  },
  'need.vision.timeline.year1.desc': {
    en: 'Full implementation of blockchain governance and digital citizenship',
    bg: 'Пълно внедряване на блокчейн управление и дигитално гражданство'
  },
  'need.vision.timeline.year2.title': {
    en: 'Global Recognition',
    bg: 'Глобално Признание'
  },
  'need.vision.timeline.year2.desc': {
    en: 'Formal recognition from international organizations and governments',
    bg: 'Формално признание от международни организации и правителства'
  },
  'need.vision.timeline.year3.title': {
    en: 'Physical Expansion',
    bg: 'Физическо Разширение'
  },
  'need.vision.timeline.year3.desc': {
    en: 'Acquisition of physical territories and establishment of innovation hubs',
    bg: 'Придобиване на физически територии и създаване на иновационни центрове'
  },
  'need.blockchain.title': {
    en: 'Why Blockchain Technology is Essential',
    bg: 'Защо Блокчейн Технологията е от Съществено Значение'
  },
  'need.blockchain.paragraph1': {
    en: 'Blockchain is the foundation of NOVA BULGARIA, ensuring trust, transparency, and corruption resistance. Unlike traditional systems, it prevents manipulation, centralization, and inefficiency by making every rule and transaction verifiable and immutable. This technology creates a level playing field where merit, not connections, determines success.',
    bg: 'Блокчейнът е основата на НОВА БЪЛГАРИЯ, осигурявайки доверие, прозрачност и устойчивост на корупция. За разлика от традиционните системи, той предотвратява манипулацията, централизацията и неефективността, като прави всяко правило и транзакция проверими и непроменими. Тази технология създава равни условия, където заслугите, а не връзките, определят успеха.'
  },
  'need.blockchain.paragraph2': {
    en: 'By removing the need for trusted intermediaries, blockchain eliminates the primary vectors for corruption. Every transaction is recorded on a public ledger that cannot be altered, ensuring that public funds cannot be misappropriated without detection. Smart contracts automatically execute agreements according to predefined rules, eliminating opportunities for bribery and embezzlement.',
    bg: 'Чрез премахване на нуждата от доверени посредници, блокчейнът елиминира основните вектори за корупция. Всяка транзакция се записва в публичен регистър, който не може да бъде променян, гарантирайки, че публичните средства не могат да бъдат присвоени без откриване. Умните договори автоматично изпълняват споразумения според предварително определени правила, елиминирайки възможностите за подкупи и злоупотреби.'
  },
  'need.blockchain.advantages.title': {
    en: 'Blockchain Advantages',
    bg: 'Предимства на Блокчейн'
  },
  'need.blockchain.advantages.item1.title': {
    en: 'Immutability',
    bg: 'Непроменимост'
  },
  'need.blockchain.advantages.item1.desc': {
    en: 'Data and transactions cannot be altered, preventing fraud',
    bg: 'Данните и транзакциите не могат да бъдат променяни, предотвратявайки измами'
  },
  'need.blockchain.advantages.item2.title': {
    en: 'Transparency',
    bg: 'Прозрачност'
  },
  'need.blockchain.advantages.item2.desc': {
    en: 'Public records ensure accountability for all actions',
    bg: 'Публичните записи осигуряват отчетност за всички действия'
  },
  'need.blockchain.advantages.item3.title': {
    en: 'Decentralization',
    bg: 'Децентрализация'
  },
  'need.blockchain.advantages.item3.desc': {
    en: 'No single entity controls governance or funds',
    bg: 'Нито един субект не контролира управлението или средствата'
  },
  'need.blockchain.advantages.item4.title': {
    en: 'Smart Contracts',
    bg: 'Умни Договори'
  },
  'need.blockchain.advantages.item4.desc': {
    en: 'Automated, self-executing agreements eliminate intermediaries',
    bg: 'Автоматизирани, самоизпълняващи се споразумения елиминират посредниците'
  },
  'need.blockchain.advantages.item5.title': {
    en: 'Tokenization',
    bg: 'Токенизация'
  },
  'need.blockchain.advantages.item5.desc': {
    en: 'Digital assets create new economic models and incentives',
    bg: 'Дигиталните активи създават нови икономически модели и стимули'
  },
  'need.blockchain.advantages.item6.title': {
    en: 'Global Access',
    bg: 'Глобален Достъп'
  },
  'need.blockchain.advantages.item6.desc': {
    en: 'Anyone can participate, regardless of location',
    bg: 'Всеки може да участва, независимо от местоположението'
  },
  'need.blockchain.modular.title': {
    en: 'Modular Economy & Blockchain Public Services',
    bg: 'Модулна Икономика и Блокчейн Обществени Услуги'
  },
  'need.blockchain.modular.text': {
    en: 'NOVA BULGARIA operates on a modular blockchain system, where services like healthcare, education, law, and infrastructure run independently but connect to the main blockchain. This ensures scalability, interoperability, and decentralized funding of public projects directly by citizens. For example, doctors are paid directly from the blockchain based on public approval, eliminating bureaucratic delays. Infrastructure projects are transparently funded through on-chain governance.',
    bg: 'НОВА БЪЛГАРИЯ работи на модулна блокчейн система, където услуги като здравеопазване, образование, право и инфраструктура работят независимо, но се свързват с основния блокчейн. Това осигурява мащабируемост, оперативна съвместимост и децентрализирано финансиране на обществени проекти директно от гражданите. Например, лекарите се заплащат директно от блокчейна въз основа на обществено одобрение, елиминирайки бюрократичните забавяния. Инфраструктурните проекти се финансират прозрачно чрез управление във веригата.'
  },
  
  // Typewriter Section
  'typewriter.subtitle': {
    en: 'Join us in building a new Bulgaria - transparent, just, and free from corruption. Together, we can reclaim our nation and secure a prosperous future for generations to come.',
    bg: 'Присъединете се към нас в изграждането на нова България - прозрачна, справедлива и свободна от корупция. Заедно можем да си върнем нашата нация и да осигурим просперитетно бъдеще за поколенията, които идват.'
  },
  'decentralize.quote': {
    en: 'Decentralize or disappear—our survival depends on change.',
    bg: 'Децентрализирай или изчезни—нашето оцеляване зависи от промяната.'
  },
  'nftid.title': {
    en: 'National NFT ID System',
    bg: 'Национална NFT ID Система'
  },
  'nftid.description': {
    en: 'Every citizen of NOVA Bulgaria receives a unique soulbound NFT ID card that serves as their digital identity within our ecosystem.',
    bg: 'Всеки гражданин на НОВА България получава уникална привързана NFT ID карта, която служи като тяхна дигитална идентичност в нашата екосистема.'
  },
  'funding.container': {
    en: 'A Nation of Lions Shall Never Kneel',
    bg: 'Контейнер за финансиране'
  },
  'lionheart.title': {
    en: 'Igniting Bulgaria\'s Digital Rebirth',
    bg: 'Запалване на Дигиталното Възраждане на България'
  },
  'lionheart.subtitle': {
    en: 'Igniting Bulgaria\'s Digital Rebirth',
    bg: 'Запалване на дигиталното възраждане на България'
  },
  'lionheart.description': {
    en: 'A Nation of Lions Shall Never Kneel',
    bg: 'Нация от Лъвове Никога Няма да Коленичи'
  },
  'tokenomics.title': {
    en: 'Tokenomics',
    bg: 'Токеномика'
  },
  'roadmap.title': {
    en: 'Roadmap',
    bg: 'Пътна карта'
  },
  'sectors.title': {
    en: '44 Sectors',
    bg: '44 Сектора'
  },
  'sectors.header.title': {
    en: '44 Sectors of NOVA BULGARIA',
    bg: '44 Сектора на НОВА БЪЛГАРИЯ'
  },
  'sectors.header.subtitle': {
    en: 'Transforming every aspect of our nation through decentralization, transparency, and blockchain technology on the Cosmos ecosystem',
    bg: 'Трансформиране на всеки аспект на нашата нация чрез децентрализация, прозрачност и блокчейн технология в екосистемата на Cosmos'
  },
  'nftid.title': {
    en: 'National NFT ID System',
    bg: 'Национална NFT ID Система'
  },
  'nftid.description': {
    en: 'A secure, self-sovereign identity system for all citizens',
    bg: 'Сигурна, самостоятелна система за идентичност за всички граждани'
  },
  
  // NFT ID System Section
  'nftid.system.title': {
    en: 'National NFT ID System',
    bg: 'Национална NFT ID Система'
  },
  'nftid.system.description': {
    en: 'Every citizen of NOVA Bulgaria receives a unique soulbound NFT ID card that serves as their digital identity within our ecosystem.',
    bg: 'Всеки гражданин на НОВА България получава уникална привързана NFT ID карта, която служи като тяхна дигитална идентичност в нашата екосистема.'
  },
  
  // SSI Card
  'ssi.title': {
    en: 'Self-sovereign identity (SSI)',
    bg: 'Самостоятелна идентичност (SSI)'
  },
  'ssi.description': {
    en: 'Self-sovereign identity (SSI) is a form of digital identity that the user has complete control over. This means that the user decides who sees what information and when.',
    bg: 'Самостоятелната идентичност (SSI) е форма на дигитална идентичност, над която потребителят има пълен контрол. Това означава, че потребителят решава кой вижда каква информация и кога.'
  },
  'ssi.apply.title': {
    en: 'How to Apply',
    bg: 'Как да кандидатствате'
  },
  'ssi.apply.step1': {
    en: 'Complete Knowledge Test',
    bg: 'Завършете Тест за Знания'
  },
  'ssi.apply.step2': {
    en: 'Submit Documentation',
    bg: 'Подайте Документация'
  },
  'ssi.apply.step3': {
    en: 'Pass Identity Verification',
    bg: 'Преминете Проверка на Самоличността'
  },
  'ssi.apply.description': {
    en: 'Start your application process',
    bg: 'Започнете процеса на кандидатстване'
  },
  'ssi.apply.button': {
    en: 'APPLY NOW',
    bg: 'КАНДИДАТСТВАЙТЕ СЕГА'
  },
  'ssi.benefits.title': {
    en: 'Benefits',
    bg: 'Ползи'
  },
  'ssi.benefits.item1': {
    en: 'Governance Rights',
    bg: 'Права за Управление'
  },
  'ssi.benefits.item2': {
    en: 'Token Rewards',
    bg: 'Токен Награди'
  },
  'ssi.benefits.item3': {
    en: 'Community Access',
    bg: 'Достъп до Общността'
  },
  'ssi.benefits.description': {
    en: 'Read our detailed whitepaper',
    bg: 'Прочетете нашата подробна бяла книга'
  },
  'ssi.benefits.button': {
    en: 'READ MORE',
    bg: 'ПРОЧЕТЕТЕ ПОВЕЧЕ'
  },
  
  // Lionheart Fund
  'lionheart.title': {
    en: 'Igniting Bulgaria\'s Digital Rebirth',
    bg: 'Запалване на Дигиталното Възраждане на България'
  },
  'lionheart.subtitle': {
    en: 'A Nation of Lions Shall Never Kneel',
    bg: 'Нация от Лъвове Никога Няма да Коленичи'
  },
  'lionheart.description': {
    en: 'Support the development of a decentralized digital nation',
    bg: 'Подкрепете развитието на децентрализирана дигитална нация'
  },
  'lionheart.header': {
    en: 'Your Contribution is Your Legacy, Let\'s Raise a Nation',
    bg: 'Вашият Принос е Вашето Наследство, Нека Издигнем Нация'
  },
  'lionheart.stats.bulgarians': {
    en: 'Total Bulgarians Worldwide',
    bg: 'Общо Българи по Света'
  },
  'lionheart.stats.bulgarians.value': {
    en: 'Over 33 Million',
    bg: 'Над 33 Милиона'
  },
  'lionheart.stats.joined': {
    en: 'Joined Nova Bulgaria',
    bg: 'Присъединили се към Нова България'
  },
  'lionheart.stats.joined.value': {
    en: '10,000+',
    bg: '10,000+'
  },
  'lionheart.stats.contributed': {
    en: 'Total Contributed',
    bg: 'Общо Принос'
  },
  'lionheart.stats.contributed.value': {
    en: '$578,000',
    bg: '$578,000'
  },
  'lionheart.details.seed': {
    en: 'Seed Round Details',
    bg: 'Детайли за Началния Кръг'
  },
  'lionheart.details.seed.item1': {
    en: '20 Million BGL Tokens Available',
    bg: '20 Милиона BGL Токена Налични'
  },
  'lionheart.details.seed.item2': {
    en: 'Soft Cap: $2 Million',
    bg: 'Мека Граница: $2 Милиона'
  },
  'lionheart.details.seed.item3': {
    en: 'Hard Cap: $20 Million',
    bg: 'Твърда Граница: $20 Милиона'
  },
  'lionheart.details.staking': {
    en: 'Early Staking Benefits',
    bg: 'Ползи от Ранно Залагане'
  },
  'lionheart.details.staking.item1': {
    en: 'First Access to BGL Token Staking',
    bg: 'Първи Достъп до Залагане на BGL Токени'
  },
  'lionheart.details.staking.item2': {
    en: 'Maximum Staking Rewards',
    bg: 'Максимални Награди от Залагане'
  },
  'lionheart.details.staking.item3': {
    en: 'Founding Member Status',
    bg: 'Статут на Основател'
  },
  'lionheart.button.contribute': {
    en: 'CONTRIBUTE NOW',
    bg: 'ДОПРИНЕСЕТЕ СЕГА'
  },
  'lionheart.button.learn': {
    en: 'LEARN MORE',
    bg: 'НАУЧЕТЕ ПОВЕЧЕ'
  },
  'lionheart.whitepaper.subtitle': {
    en: 'Learn about our vision and roadmap',
    bg: 'Научете за нашата визия и пътна карта'
  },
  'lionheart.contribute.subtitle': {
    en: 'Join the seed round and secure your position',
    bg: 'Присъединете се към началния кръг и осигурете позицията си'
  },
  'lionheart.progress.raised': {
    en: 'Raised: 578,000 BGL',
    bg: 'Събрани: 578,000 BGL'
  },
  'lionheart.progress.cap': {
    en: 'Hard Cap: 2,000,000 BGL',
    bg: 'Твърда Граница: 2,000,000 BGL'
  },
  // Tokenomics
  'tokenomics.title': {
    en: 'Tokenomics',
    bg: 'Токеномика'
  },
  'tokenomics.model.title': {
    en: 'Tokenomics 100-Year Model',
    bg: 'Токеномика 100-годишен модел'
  },
  'tokenomics.distribution.title': {
    en: 'Token Distribution',
    bg: 'Разпределение на токените'
  },
  'tokenomics.distribution.coreSectors': {
    en: 'Core Sectors',
    bg: 'Основни сектори'
  },
  'tokenomics.distribution.futureSectors': {
    en: 'Future Sectors',
    bg: 'Бъдещи сектори'
  },
  'tokenomics.distribution.reserves': {
    en: 'Reserves',
    bg: 'Резерви'
  },
  'tokenomics.distribution.community': {
    en: 'Community',
    bg: 'Общност'
  },
  'tokenomics.initialSupply.title': {
    en: 'Initial Supply',
    bg: 'Първоначално предлагане'
  },
  'tokenomics.initialSupply.value': {
    en: '1 Trillion BGL',
    bg: '1 трилион BGL'
  },
  'tokenomics.reserveFund.title': {
    en: 'Reserve Fund',
    bg: 'Резервен фонд'
  },
  'tokenomics.reserveFund.value': {
    en: '200B BGL (20%)',
    bg: '200 млрд. BGL (20%)'
  },
  'tokenomics.fundAllocation.title': {
    en: 'Fund Allocation',
    bg: 'Разпределение на фонда'
  },
  'tokenomics.fundAllocation.paragraph1': {
    en: 'Nova Bulgaria starts with the release of 1 million BGL in the first year, gradually increasing over the next 100 years to ensure controlled growth. The total supply of 1 trillion BGL is securely held in a smart contract and released in small portions based on economic demand and community participation.',
    bg: 'Нова България започва с пускането на 1 милион BGL през първата година, постепенно увеличавайки се през следващите 100 години, за да осигури контролиран растеж. Общото предлагане от 1 трилион BGL се съхранява сигурно в смарт договор и се освобождава на малки части въз основа на икономическото търсене и участието на общността.'
  },
  'tokenomics.fundAllocation.paragraph2': {
    en: 'Instead of traditional mining or pre-allocated distribution, funds are unlocked through a \'Proof of Contribution (PoC)\' system, meaning individuals receive BGL based on their contributions to the nation\'s development—such as building projects, innovation, governance, or social services.',
    bg: 'Вместо традиционен майнинг или предварително разпределение, средствата се отключват чрез система за \'Доказателство за принос (PoC)\', което означава, че хората получават BGL въз основа на приноса им към развитието на нацията - като изграждане на проекти, иновации, управление или социални услуги.'
  },
  'tokenomics.fundAllocation.paragraph3': {
    en: 'As the economy grows and more people participate, the release rate gradually increases, ensuring there is always enough supply to support expansion while preventing inflation. This mechanism creates a self-sustaining economic model, where currency distribution is tied to real-world value and progress rather than speculation or centralized control.',
    bg: 'С нарастването на икономиката и участието на повече хора, скоростта на освобождаване постепенно се увеличава, гарантирайки, че винаги има достатъчно предлагане за подкрепа на разширяването, като същевременно се предотвратява инфлацията. Този механизъм създава самоподдържащ се икономически модел, където разпределението на валутата е обвързано с реална стойност и прогрес, а не със спекулации или централизиран контрол.'
  },
  'tokenomics.fundAllocation.paragraph4': {
    en: 'Over time, this ensures fairness, long-term stability, and an economy that adapts naturally to the needs of its citizens.',
    bg: 'С течение на времето това осигурява справедливост, дългосрочна стабилност и икономика, която се адаптира естествено към нуждите на гражданите си.'
  },
  
  // Token Release Schedule
  'tokenomics.releaseSchedule.title': {
    en: 'Token Release Schedule',
    bg: 'График за Издаване на Токени'
  },
  'tokenomics.releaseSchedule.annualRelease': {
    en: 'Annual Release (Billions BGL)',
    bg: 'Годишно Издаване (Милиарди BGL)'
  },
  'tokenomics.releaseSchedule.totalSupply': {
    en: 'Total Supply (Billions BGL)',
    bg: 'Общо Предлагане (Милиарди BGL)'
  },
  'tokenomics.releaseSchedule.inflationRate': {
    en: 'Inflation Rate (%)',
    bg: 'Процент на Инфлация (%)'
  },
  'tokenomics.releaseSchedule.annualReleaseLegend': {
    en: 'Annual Release (Billions BGL)',
    bg: 'Годишно Издаване (Милиарди BGL)'
  },
  'tokenomics.releaseSchedule.totalSupplyLegend': {
    en: 'Total Supply in Circulation (Billions BGL)',
    bg: 'Общо Предлагане в Обращение (Милиарди BGL)'
  },
  'tokenomics.releaseSchedule.inflationRateLegend': {
    en: 'Inflation Rate (%)',
    bg: 'Процент на Инфлация (%)'
  },
  'tokenomics.releaseSchedule.totalSupplyBox': {
    en: 'Total Supply: 1 Trillion BGL (1,000,000,000,000 BGL) released over 100 years',
    bg: 'Общо Предлагане: 1 Трилион BGL (1,000,000,000,000 BGL) издадени за 100 години'
  },
  'tokenomics.releaseSchedule.totalSupplyDescription': {
    en: 'This gradual release schedule ensures long-term sustainability and minimizes inflation',
    bg: 'Този постепенен график на издаване осигурява дългосрочна устойчивост и минимизира инфлацията'
  },
  'tokenomics.releaseSchedule.pocTitle': {
    en: 'Proof of Contribution Integration',
    bg: 'Интеграция на Доказателство за Принос'
  },
  'tokenomics.releaseSchedule.pocDescription': {
    en: 'The token release model is directly tied to the Proof of Contribution (PoC) system, ensuring that economic rewards are fairly distributed based on real effort and value creation.',
    bg: 'Моделът за издаване на токени е директно свързан със системата за Доказателство за Принос (PoC), гарантирайки, че икономическите награди се разпределят справедливо въз основа на реални усилия и създаване на стойност.'
  },
  
  // Tokenomics Phases
  'tokenomics.phases.foundation.title': {
    en: 'Foundation Phase',
    bg: 'Фаза на Основаване'
  },
  'tokenomics.phases.foundation.years': {
    en: '2025-2044',
    bg: '2025-2044'
  },
  'tokenomics.phases.foundation.rate': {
    en: '0.1% to 0.2% annual',
    bg: '0.1% до 0.2% годишно'
  },
  'tokenomics.phases.foundation.description': {
    en: 'First Decade: 0.1% annual (1B BGL/year), Second Decade: 0.2% annual (2B BGL/year)',
    bg: 'Първо Десетилетие: 0.1% годишно (1 млрд. BGL/година), Второ Десетилетие: 0.2% годишно (2 млрд. BGL/година)'
  },
  'tokenomics.phases.development.title': {
    en: 'Development Phase',
    bg: 'Фаза на Развитие'
  },
  'tokenomics.phases.development.years': {
    en: '2045-2084',
    bg: '2045-2084'
  },
  'tokenomics.phases.development.rate': {
    en: '0.3% to 1.0% annual',
    bg: '0.3% до 1.0% годишно'
  },
  'tokenomics.phases.development.description': {
    en: 'Third Decade: 0.3% (3B BGL/year), Fourth: 0.5% (5B BGL/year), Fifth: 0.7% (7B BGL/year), Sixth: 1.0% (10B BGL/year)',
    bg: 'Трето Десетилетие: 0.3% (3 млрд. BGL/година), Четвърто: 0.5% (5 млрд. BGL/година), Пето: 0.7% (7 млрд. BGL/година), Шесто: 1.0% (10 млрд. BGL/година)'
  },
  'tokenomics.phases.expansion.title': {
    en: 'Expansion Phase',
    bg: 'Фаза на Разширяване'
  },
  'tokenomics.phases.expansion.years': {
    en: '2085-2114',
    bg: '2085-2114'
  },
  'tokenomics.phases.expansion.rate': {
    en: '1.5% to 2.5% annual',
    bg: '1.5% до 2.5% годишно'
  },
  'tokenomics.phases.expansion.description': {
    en: 'Seventh Decade: 1.5% (15B BGL/year), Eighth: 2.0% (20B BGL/year), Ninth: 2.5% (25B BGL/year)',
    bg: 'Седмо Десетилетие: 1.5% (15 млрд. BGL/година), Осмо: 2.0% (20 млрд. BGL/година), Девето: 2.5% (25 млрд. BGL/година)'
  },
  'tokenomics.phases.peak.title': {
    en: 'Peak Phase',
    bg: 'Върхова Фаза'
  },
  'tokenomics.phases.peak.years': {
    en: '2115-2124',
    bg: '2115-2124'
  },
  'tokenomics.phases.peak.rate': {
    en: '3.0% annual',
    bg: '3.0% годишно'
  },
  'tokenomics.phases.peak.description': {
    en: 'Final Decade: 3.0% annual (30B BGL/year)',
    bg: 'Последно Десетилетие: 3.0% годишно (30 млрд. BGL/година)'
  }
};

export default translations;
