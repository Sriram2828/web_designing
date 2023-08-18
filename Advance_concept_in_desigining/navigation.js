const menu = document.getElementsByClassName('menu')[0];
const navbar = document.getElementsByClassName('navbar')[0];

menu.addEventListener('click', () => {
    navbar.classList.toggle('active');
});
