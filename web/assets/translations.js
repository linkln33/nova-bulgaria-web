const translations = {
    en: {
        slogan: "Welcome to the Future of Nations",
        features: "Features",
        tokenomics: "Tokenomics",
        roadmap: "Roadmap",
        pitchDeck: "Pitch Deck",
        whitepaper: "Whitepaper",
        connectWallet: "Connect Wallet"
    },
    bg: {
        slogan: "Добре дошли в бъдещето на нациите",
        features: "Функции",
        tokenomics: "Токеномика",
        roadmap: "Пътна карта",
        pitchDeck: "Презентация",
        whitepaper: "Бяла книга",
        connectWallet: "Свържете портфейл"
    },
    ru: {
        slogan: "Добро пожаловать в будущее наций",
        features: "Функции",
        tokenomics: "Токеномика",
        roadmap: "Дорожная карта",
        pitchDeck: "Презентация",
        whitepaper: "Белая книга",
        connectWallet: "Подключить кошелек"
    }
};

function updateContent(lang) {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    localStorage.setItem('selectedLanguage', lang);
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('selectedLanguage') || 'en';
    const langSelect = document.getElementById('languageSelect');
    if (langSelect) {
        langSelect.value = savedLang;
        updateContent(savedLang);
    }
});
