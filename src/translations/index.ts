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
    bg: 'От Хан Крум до НОВА БЪЛГАРИЯ—Тираните Ще Паднат'
  },
  'hero.slogan3': {
    en: 'A Nation Once Ruling Three Seas Will Rise Again!',
    bg: 'Нация, Някога Владееща Три Морета, Ще Се Издигне Отново!'
  },
  'hero.slogan4': {
    en: 'We Gave the World an Alphabet—Now We Give It a Future!',
    bg: 'Дадохме на Света Азбука—Сега Му Даваме Бъдеще!'
  },
  'hero.slogan5': {
    en: 'Thracian Blood, Spartan Spirit—Bulgaria Bows to No One!',
    bg: 'Тракийска Кръв, Спартански Дух—България Не Се Покланя На Никого!'
  },
  'hero.slogan6': {
    en: 'When Others Betrayed, Bulgaria Defied—We Protect Our Own!',
    bg: 'Когато Другите Предадоха, България Се Противопостави—Ние Защитаваме Своите!'
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
    bg: 'В продължение на години тези политически престъпници са участвали в масови финансови кражби, потискане на свободата на словото и разрушаване на демократичните ценности. Вместо да служат на народа, те са организирали икономически геноцид, принуждавайки милиони българи да избягат от страната в търсене на по-добро бъдеще. Тези, които остават, са хванати в капан в система на потисничество, където бедността, липсата на здравеопазване и безконтролната полицейска бруталност са норма.'
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
    bg: 'Настоящото правителство не само не успя да защити околната среда на България, но и активно участва в нейното унищожаване. Екологичните разпоредби се игнорират, активистите са заглушени, а защитените територии са отворени за експлоатация. Тази екологична катастрофа заплашва не само биоразнообразието на България, но и здравето и бъдещето на нейния народ.'
  },
  'intro.environment.subheading1': {
    en: 'Environmental Restoration Through Blockchain',
    bg: 'Възстановяване на Околната Среда Чрез Блокчейн'
  },
  'intro.environment.subtext1': {
    en: 'NOVA BULGARIA will implement a blockchain-based environmental protection system that ensures transparency in resource management and holds polluters accountable. Through tokenized incentives, we will reward conservation efforts and sustainable practices, while penalizing environmental destruction. Our decentralized governance will give citizens the power to protect their natural heritage and create a sustainable future for generations to come.',
    bg: 'НОВА БЪЛГАРИЯ ще внедри базирана на блокчейн система за опазване на околната среда, която осигурява прозрачност в управлението на ресурсите и държи замърсителите отговорни. Чрез токенизирани стимули ще възнаграждаваме усилията за опазване и устойчиви практики, като същевременно наказваме унищожаването на околната среда. Нашето децентрализирано управление ще даде на гражданите силата да защитават природното си наследство и да създадат устойчиво бъдеще за идните поколения.'
  },
  'intro.youth.title': {
    en: 'Youth Crisis: A Generation Without Hope',
    bg: 'Младежка Криза: Поколение Без Надежда'
  },
  'intro.youth.text1': {
    en: 'Bulgaria is experiencing a catastrophic youth exodus, with an estimated 1.5 million young Bulgarians having left the country in the past three decades. This brain drain represents the loss of the country\'s most valuable resource—its future generation. Young people are fleeing due to a lack of economic opportunities, poor educational systems, and a pervasive sense of hopelessness about Bulgaria\'s future.',
    bg: 'България преживява катастрофален младежки изход, с приблизително 1,5 милиона млади българи, напуснали страната през последните три десетилетия. Това изтичане на мозъци представлява загуба на най-ценния ресурс на страната—нейното бъдещо поколение. Младите хора бягат поради липса на икономически възможности, лоши образователни системи и повсеместно чувство на безнадеждност относно бъдещето на България.'
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
  }
};

export default translations;
