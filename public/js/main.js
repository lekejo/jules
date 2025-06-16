// Client-side JavaScript can go here later
console.log("main.js loaded");

document.addEventListener('DOMContentLoaded', () => {
    const openSettingsModalButton = document.getElementById('openSettingsModal');
    const closeSettingsModalButton = document.getElementById('closeSettingsModal');
    const cancelSettingsModalButton = document.getElementById('cancelSettingsModal');
    const settingsModal = document.getElementById('settingsModal');
    const modalFuelPriceInput = document.getElementById('modalCurrentFuelPrice');

    // Note: The 'globalCurrentFuelPrice' variable is expected to be defined
    // in a <script> tag in the HTML, typically before this script is loaded.
    // Example: <script>const globalCurrentFuelPrice = '100.50';</script>
    // This will be set up in a later step.

    if (openSettingsModalButton && settingsModal && modalFuelPriceInput) {
        openSettingsModalButton.addEventListener('click', () => {
            // Populate current fuel price when modal opens
            if (typeof globalCurrentFuelPrice !== 'undefined' && globalCurrentFuelPrice !== null && globalCurrentFuelPrice.trim() !== '') {
                 modalFuelPriceInput.value = parseFloat(globalCurrentFuelPrice).toFixed(2);
            } else {
                // Fallback if globalCurrentFuelPrice isn't set or is empty
                // You might want to fetch this value from the server if not available
                // For now, if not set, it will use the input's placeholder or current value.
                console.warn('globalCurrentFuelPrice is not set. Modal might show placeholder or last input.');
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

    // Optional: Close modal if clicking outside of it
    if (settingsModal) {
        settingsModal.addEventListener('click', (event) => {
            // Check if the click is on the backdrop (settingsModal itself)
            // and not on its children (the modal content).
            if (event.target === settingsModal) {
                settingsModal.classList.add('hidden');
                settingsModal.classList.remove('flex');
            }
        });
    }
});
