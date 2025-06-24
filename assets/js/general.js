
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger-lines');
    const menu = document.querySelector('.menu-items');

    hamburger.addEventListener('click', () => {
        menu.classList.add('open-header-menu'); // Replace 'your-new-class' with the actual class name
    });
});
