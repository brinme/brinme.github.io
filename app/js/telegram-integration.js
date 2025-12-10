(function() {
    // 1. Load the Telegram Web App SDK
    const script = document.createElement('script');
    script.src = "https://telegram.org/js/telegram-web-app.js";
    script.async = true;
    script.onload = initializeTelegramApp;
    document.head.appendChild(script);

    function initializeTelegramApp() {
        const tg = window.Telegram.WebApp;
        
        // 2. Check if running inside Telegram
        // tg.initData is empty string if not in Telegram
        const isTelegram = tg.initData !== "" || (tg.platform && tg.platform !== 'unknown');

        if (isTelegram) {
            console.log("Telegram Web App detected");
            
            // 3. Signal ready
            tg.ready();
            tg.expand();

            // 4. Inject Telegram-specific styles to override Tailwind
            const style = document.createElement('style');
            style.innerHTML = `
                body {
                    background-color: var(--tg-theme-bg-color, #ffffff) !important;
                    color: var(--tg-theme-text-color, #000000) !important;
                }

                /* Overrides for Tailwind classes */
                .bg-gray-50 {
                    background-color: var(--tg-theme-bg-color, #f9f9f9) !important;
                }
                
                .bg-white {
                    background-color: var(--tg-theme-secondary-bg-color, #ffffff) !important;
                    color: var(--tg-theme-text-color, #000000) !important;
                }

                .text-gray-900, .text-gray-800, .text-gray-700, .text-black {
                    color: var(--tg-theme-text-color, #000000) !important;
                }

                .text-gray-600, .text-gray-500, .text-gray-400 {
                    color: var(--tg-theme-hint-color, #999999) !important;
                    opacity: 1 !important;
                }

                /* Ensure buttons are not transparent */
                button {
                    opacity: 1 !important;
                }

                /* Primary Brand Color (#25A8D9) Mapping */
                .text-\\[\\#25A8D9\\] {
                    color: var(--tg-theme-link-color, #2481cc) !important;
                }
                
                .bg-\\[\\#25A8D9\\] {
                    background-color: var(--tg-theme-button-color, #2481cc) !important;
                    color: var(--tg-theme-button-text-color, #ffffff) !important;
                }
                
                .border-\\[\\#25A8D9\\] {
                    border-color: var(--tg-theme-button-color, #2481cc) !important;
                }

                /* Borders */
                .border-gray-100, .border-gray-200, .border-gray-300 {
                    border-color: var(--tg-theme-hint-color, #cccccc) !important;
                }
                
                /* Inputs */
                input, select, textarea {
                    background-color: var(--tg-theme-bg-color, #ffffff) !important;
                    color: var(--tg-theme-text-color, #000000) !important;
                    border-color: var(--tg-theme-hint-color, #cccccc) !important;
                }

                /* Mobile Bottom Nav - Adapt colors */
                nav.fixed.bottom-0 {
                    background-color: var(--tg-theme-secondary-bg-color, #ffffff) !important;
                    border-top-color: var(--tg-theme-hint-color, #cccccc) !important;
                    opacity: 1 !important;
                    z-index: 50 !important;
                }
            `;
            document.head.appendChild(style);
        }
    }
})();