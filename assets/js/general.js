document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger-lines');
    const menu = document.querySelector('.menu-items');

    // Toggle class on hamburger click
    hamburger.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent click from bubbling to document
        menu.classList.toggle('open-header-menu');
    });

    // Prevent menu click from closing it
    menu.addEventListener('click', (e) => {
        e.stopPropagation();
    });

    // Click outside closes the menu
    document.addEventListener('click', () => {
        menu.classList.remove('open-header-menu');
    });
});
