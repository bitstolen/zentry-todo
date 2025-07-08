const disclaimerElement = document.getElementById('disclaimer');
const overlayElement = document.getElementById('overlay');
const closeDisclaimerBtn = document.getElementById('closeDisclaimer');
const disclaimerMessage = document.getElementById('disclaimerMessage');

// Overlay functions (show/hide)
const showOverlay = () => overlayElement.classList.remove('hidden');
const hideOverlay = () => overlayElement.classList.add('hidden');

// Disclaimer functions (show/hide)
const showDisclaimerMessage = () => disclaimerMessage.classList.remove('hidden');
const hideDisclaimerMessage = () => disclaimerMessage.classList.add('hidden');

disclaimerElement.addEventListener('click', () => {
    showOverlay();
    showDisclaimerMessage();
});

closeDisclaimerBtn.addEventListener('click', () => {
    hideDisclaimerMessage();
    hideOverlay();
});