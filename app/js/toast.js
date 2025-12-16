import { translations } from './translations.js';
import { LocalizationManager } from './localization.js';

// Create a local instance for toast translations
const localization = new LocalizationManager();
const savedLang = localStorage.getItem('app_language');
if (savedLang) {
    localization.currentLang = savedLang;
}

export function showToast(messageOrKey, type = 'error') {
    // Try to translate the key
    let message = localization.getText(messageOrKey);
    
    // Create container if it doesn't exist
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        container.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 9999;
            display: flex;
            flex-direction: column;
            gap: 10px;
        `;
        document.body.appendChild(container);
    }

    // Create toast element
    const toast = document.createElement('div');
    
    // Colors based on type
    let bgClass = 'bg-red-500';
    let icon = '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>';
    
    if (type === 'success') {
        bgClass = 'bg-green-500';
        icon = '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>';
    } else if (type === 'info') {
        bgClass = 'bg-blue-500';
        icon = '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>';
    }

    // Tailwind classes for styling
    toast.className = `${bgClass} text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3 transform transition-all duration-300 translate-x-full opacity-0 max-w-md`;
    
    toast.innerHTML = `
        <div>${icon}</div>
        <div class="font-medium text-sm">${message}</div>
        <button class="ml-auto hover:text-gray-200 focus:outline-none" onclick="this.parentElement.remove()">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
    `;

    container.appendChild(toast);

    // Animate in
    requestAnimationFrame(() => {
        toast.classList.remove('translate-x-full', 'opacity-0');
    });

    // Auto remove
    setTimeout(() => {
        toast.classList.add('translate-x-full', 'opacity-0');
        setTimeout(() => {
            if (toast.parentElement) {
                toast.remove();
            }
        }, 300);
    }, 5000);
}
