// Client-side JavaScript can go here later
console.log("main.js loaded");

document.addEventListener('DOMContentLoaded', () => {
    const openSettingsModalButton = document.getElementById('openSettingsModal');
    const closeSettingsModalButton = document.getElementById('closeSettingsModal');
    const cancelSettingsModalButton = document.getElementById('cancelSettingsModal');
    const settingsModal = document.getElementById('settingsModal');
    const modalFuelPriceInput = document.getElementById('modalCurrentFuelPrice');

    if (openSettingsModalButton && settingsModal && modalFuelPriceInput) {
        openSettingsModalButton.addEventListener('click', () => {
            console.log('Attempting to open settings modal.');
            console.log('Raw globalCurrentFuelPrice from EJS:', typeof globalCurrentFuelPrice !== 'undefined' ? globalCurrentFuelPrice : 'undefined');

            if (typeof globalCurrentFuelPrice !== 'undefined' && globalCurrentFuelPrice !== null) {
                const trimmedPrice = String(globalCurrentFuelPrice).trim();
                console.log('Trimmed globalCurrentFuelPrice:', trimmedPrice);
                if (trimmedPrice !== '' && !isNaN(parseFloat(trimmedPrice))) {
                    modalFuelPriceInput.value = parseFloat(trimmedPrice).toFixed(2);
                    console.log('Set modal input to:', modalFuelPriceInput.value);
                } else {
                    console.warn('globalCurrentFuelPrice is empty or not a valid number after trim. Value:', globalCurrentFuelPrice);
                    modalFuelPriceInput.value = "0.00"; // Default if problematic
                }
            } else {
                console.warn('globalCurrentFuelPrice is undefined or null. Setting modal input to default 0.00.');
                modalFuelPriceInput.value = "0.00"; // Default if undefined/null
            }
            settingsModal.classList.remove('hidden');
            settingsModal.classList.add('flex'); // Use flex to center content
        });
    }

    if (closeSettingsModalButton && settingsModal) {
        closeSettingsModalButton.addEventListener('click', () => {
            settingsModal.classList.add('hidden');
            settingsModal.classList.remove('flex');
        });
    }

    if (cancelSettingsModalButton && settingsModal) {
        cancelSettingsModalButton.addEventListener('click', () => {
            settingsModal.classList.add('hidden');
            settingsModal.classList.remove('flex');
        });
    }

    if (settingsModal) {
        settingsModal.addEventListener('click', (event) => {
            if (event.target === settingsModal) {
                settingsModal.classList.add('hidden');
                settingsModal.classList.remove('flex');
            }
        });
    }
});
