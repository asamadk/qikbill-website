document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.querySelector('button[type="button"]');
    const closeButton = document.querySelector('.close-menu-button');
    const mobileMenu = document.querySelector('div[role="dialog"]');

    menuButton.addEventListener('click', function () {
        mobileMenu.classList.toggle('hidden');
    });

    closeButton.addEventListener('click', function () {
        mobileMenu.classList.add('hidden');
    });
});