const disclaimerElementAll = document.querySelectorAll('.disclaimer');
const overlayElement = document.getElementById('overlay');
const closeDisclaimerBtn = document.getElementById('closeDisclaimer');
const disclaimerMessage = document.getElementById('disclaimerMessage');
const supportTeamBtn = document.getElementById('supportTeamBtn');
const notification = document.getElementById('notification');
const notificationBar = document.getElementById('bar');

const hamburgerBtn = document.getElementById('hamburger-btn');
const hamburgerContent = document.getElementById('hamburger-shown');

// Overlay functions (show/hide)
const showOverlay = () => overlayElement.classList.remove('hidden');
const hideOverlay = () => overlayElement.classList.add('hidden');

// Disclaimer functions (show/hide)
const showDisclaimerMessage = () => disclaimerMessage.classList.remove('hidden');
const hideDisclaimerMessage = () => disclaimerMessage.classList.add('hidden');

// Notification functions (show/hide)
const showNotification = () => { notification.classList.remove('hidden'); void notificationBar.offsetWidth; notificationBar.classList.add('animate-grow-bar'); };
const hideNotification = () => notification.classList.add('hidden');

// Hamburger functions (show/hide)
const showHamburger = () => hamburgerContent.classList.remove('hidden');
const hideHamburger = () => hamburgerContent.classList.add('hidden');

disclaimerElementAll.forEach(el => {
    el.addEventListener('click', () => {
        showOverlay();
        showDisclaimerMessage();
    });
});

overlayElement.addEventListener('click', () => {
    hideDisclaimerMessage();
    hideOverlay();
});

closeDisclaimerBtn.addEventListener('click', () => {
    hideDisclaimerMessage();
    hideOverlay();
});

hamburgerBtn.addEventListener('click', () => {
    !hamburgerContent.classList.contains('hidden') ? hideHamburger() : showHamburger();
});

supportTeamBtn.addEventListener('click', () => {
    showNotification();

    setTimeout(() => {
        hideNotification();
    }, 5000);
});

