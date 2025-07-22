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


const profiletoggleBtn = document.getElementById('profile-dropdown-btn');
const dropdownDiv = document.getElementById('profiledropdown');

function toggleDiv() {
    dropdownDiv.classList.toggle('profile-dropdown-show');
}

function hideDiv() {
    dropdownDiv.classList.remove('profile-dropdown-show');
}

function showDiv() {
    dropdownDiv.classList.add('profile-dropdown-show');
}

profiletoggleBtn.addEventListener('click', function (e) {
    e.stopPropagation(); // Prevent event bubbling
    toggleDiv();
});

document.addEventListener('click', function (e) {
    if (!profiletoggleBtn.contains(e.target) && !dropdownDiv.contains(e.target)) {
        hideDiv();
    }
});

dropdownDiv.addEventListener('click', function (e) {
    e.stopPropagation();
});

