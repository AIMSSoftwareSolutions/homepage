document.addEventListener('DOMContentLoaded', () => {
    const languageToggle = document.getElementById('language-toggle');
    let currentLang = localStorage.getItem('lang') || 'de';

    const translate = async (lang) => {
        const response = await fetch(`languages/${lang}.json`);
        const translations = await response.json();
        document.querySelectorAll('[data-translate]').forEach(el => {
            const key = el.getAttribute('data-translate');
            if (translations[key]) {
                el.textContent = translations[key];
            }
        });
    };

    const toggleLanguage = () => {
        currentLang = currentLang === 'de' ? 'en' : 'de';
        localStorage.setItem('lang', currentLang);
        translate(currentLang);
        languageToggle.textContent = currentLang.toUpperCase();
    };

    languageToggle.addEventListener('click', toggleLanguage);
    translate(currentLang);
});
