const menuIcon = document.querySelector('#menu-icon');
const navList = document.querySelector('nav ul');
const navLinks = document.querySelectorAll('nav ul li a');

// Abre e fecha o menu ao clicar no hambúrguer
menuIcon.addEventListener('click', () => {
    navList.classList.toggle('active');
});

// Fecha o menu ao clicar em qualquer link 
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navList.classList.remove('active');
    });
});