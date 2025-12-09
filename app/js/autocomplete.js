
import { searchCities } from './cities.js';

export function setupAutocomplete(inputId) {
    const input = document.getElementById(inputId);
    if (!input) return;

    // Create results container
    const resultsContainer = document.createElement('div');
    resultsContainer.className = 'absolute z-50 w-full bg-white border border-gray-200 rounded-lg shadow-lg mt-1 max-h-60 overflow-y-auto hidden';
    
    // Ensure parent is relative for positioning
    const parent = input.parentNode;
    if (getComputedStyle(parent).position === 'static') {
        parent.style.position = 'relative';
    }
    
    parent.appendChild(resultsContainer);

    let debounceTimer;

    input.addEventListener('input', (e) => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            const query = e.target.value;

            if (query.length < 2) {
                resultsContainer.classList.add('hidden');
                return;
            }

            const matches = searchCities(query);
            
            if (matches.length > 0) {
                resultsContainer.innerHTML = '';
                matches.forEach(city => {
                    const div = document.createElement('div');
                    div.className = 'px-4 py-2 hover:bg-gray-50 cursor-pointer text-sm text-gray-700 border-b border-gray-50 last:border-0';
                    // Show main name and country
                    div.textContent = `${city.name} (${city.country})`;
                    
                    div.addEventListener('click', () => {
                        input.value = city.name;
                        resultsContainer.classList.add('hidden');
                        // Trigger change event manually
                        input.dispatchEvent(new Event('change'));
                    });
                    resultsContainer.appendChild(div);
                });
                resultsContainer.classList.remove('hidden');
            } else {
                resultsContainer.classList.add('hidden');
            }
        }, 300); // 300ms debounce
    });

    // Close on click outside
    document.addEventListener('click', (e) => {
        if (!input.contains(e.target) && !resultsContainer.contains(e.target)) {
            resultsContainer.classList.add('hidden');
        }
    });
}
