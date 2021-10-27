/* mostrar menu */
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show-menu')
        })
    }
}


showMenu('nav-toggle', 'nav-menu');

/* remover el menu móvil */

const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');

    navMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction));

/* scroll sections active link */

const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;

        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')

        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)

/* cambiar el background del header */

function scrollHeader() {
    const header = document.getElementById('header')
    if (this.scrollY >= 200) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)


/* show scroll top */

function scrollTop() {
    const scrolltop = document.getElementById('scroll-top')
    if (this.scrollY >= 560) scrolltop.classList.add('show-scroll'); else scrolltop.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollTop)

/* mixitup filter galeria */
const mixer = mixitup('.portfolio__container', {
    selectors: {
        target: '.porfolio__content'
    },
    animation: {
        duration: 400
    }
});

/* link active galeria */
const linkPortfolio = document.querySelectorAll('.portfolio__item');

function activePortfolio() {
    if (linkPortfolio) {
        linkPortfolio.forEach(link => link.classList.remove('active-portfolio'))
        this.classList.add('active-portfolio');
    }
}

linkPortfolio.forEach(link => link.addEventListener('click', activePortfolio))

/* swiper js */

const swiper = new Swiper('.testimonial__container', {
    spaceBetween: 16,
    loop: true,
    grabCursor: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        }
    }

});

/* gsap animation */
gsap.from('.home__img', {opacity: 0, duration: 2, delay: .5, x: 60})

gsap.from('.home__data', {opacity: 0, duration: 2, delay: .5, y: 25})

gsap.from('.home__greeting, .home__name, home__profession, .home__button', {opacity: 0, duration: 2, delay: 1, y: 25, ease:'expo.out', stagger: .2})

gsap.from('.nav__logo, .nav__toggle', {opacity: 0, duration: 2, delay: 1.5, y: 25, ease:'expo.out', stagger: .2})

gsap.from('.nav__item', {opacity: 0, duration: 2, delay: 1.8, y: 25, ease:'expo.out', stagger: .2})

