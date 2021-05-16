document.addEventListener('DOMContentLoaded', function() {
    eventListener();
});

function eventListener() {
    const mobileMenu = document.querySelector('.mobile-menu');

    mobileMenu.addEventListener('click', navReponsive);
}

function navReponsive(){
    const nav = document.querySelector('.barra');
    nav.classList.toggle('show');
}