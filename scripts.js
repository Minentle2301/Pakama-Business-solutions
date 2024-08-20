document.addEventListener("DOMContentLoaded", function () {
    const hero = document.querySelector('.hero');
    const heroHeight = hero.clientHeight;

    window.addEventListener('scroll', function () {
        if (window.scrollY > heroHeight) {
            document.querySelector('.header').classList.add('sticky');
        } else {
            document.querySelector('.header').classList.remove('sticky');
        }
    });
});
