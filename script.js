const burger = document.querySelector('.burger-btn');
const nav = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-menu a');

if (burger && nav) {
    const closeMenu = () => {
        burger.classList.remove('active');
        nav.classList.remove('active');
        document.body.classList.remove('no-scroll');
    };

    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        nav.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && nav.classList.contains('active')) {
            closeMenu();
        }
    });

    document.addEventListener('click', (e) => {
        if (nav.classList.contains('active') && !nav.contains(e.target) && !burger.contains(e.target)) {
            closeMenu();
        }
    });
}