// Toggle class active
const navbarnav = document.querySelector('.navbar-nav')
// ketika menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarnav.classList.toggle('active')
};

// Klik untuk menhilangkan nav
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click',function(e) {
    if(!hamburger.contains(e.target) && !navbarnav.contains(e.target)) {
        navbarnav.classList.remove('active');
    }
})