import { translations } from './translations.js';

export class LocalizationManager {
    constructor() {
        this.currentLang = 'ru'; // Default to Russian
    }

    async init() {
        // Force Russian language as default and ignore localStorage for now since switcher is removed
        this.currentLang = 'ru';
        localStorage.setItem('app_language', 'ru');

        /*
        // 1. Check saved preference
        const savedLang = localStorage.getItem('app_language');
        
        if (savedLang) {
            this.currentLang = savedLang;
        } else {
            // Default is already 'ru' in constructor, but let's be explicit or check browser if we wanted to support EN default for non-RU.
            // User said "Russian version should be default everywhere".
            this.currentLang = 'ru';
        }
        */

        console.log(`Localization initialized. Language: ${this.currentLang}`);
        
        // Apply immediately on load
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.applyTranslations());
        } else {
            this.applyTranslations();
        }
    }

    setLanguage(lang) {
        if (translations[lang]) {
            this.currentLang = lang;
            localStorage.setItem('app_language', lang);
            this.applyTranslations();
        }
    }

    getText(key) {
        return translations[this.currentLang][key] || key;
    }

    applyTranslations() {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[this.currentLang][key]) {
                // Handle inputs with placeholders
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = translations[this.currentLang][key];
                } else {
                    el.textContent = translations[this.currentLang][key];
                }
            }
        });
        
        // Dispatch event for other scripts to react (e.g. re-render lists)
        window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang: this.currentLang } }));
    }
}

// Create global instance
window.loc = new LocalizationManager();
