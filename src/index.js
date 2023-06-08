import './styles/index.scss'

import Splide from '@splidejs/splide';


new Splide('.splide', {
    type: 'loop',
    speed: 900,
    autoplay: true,
    perPage: 3,
    arrows: false,
    pagination: false,
    pauseOnFocus: true,
    rewind: true,
    focus: 'center',
    perMove: 1,
    updateOnMove: true,
    drag: true,
    swipe: true,
    start: 1,
    fixedHeight: 750,
    breakpoints: {
        1198: {
            perPage: 2,
        },
        768: {
            perPage: 1,
            start: 0,
        }
    }
}).mount();

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
    easing: 'ease-out',
    once: true,
    disable: 'phone',
});

//menu open
const menuBtn = document.querySelector('.navigationOpener');
const menu = document.querySelector('.header__mobile');
const backdrop = document.querySelector('.navigationBackdrop');
menuBtn.addEventListener('click', onMenuBtnClick);

function onMenuBtnClick(e) {
    menuBtn.classList.toggle('navigationOpener_isActive');
    menu.classList.toggle('hidden');
    backdrop.classList.toggle('navigationBackdrop_isShown');
}

const header = document.querySelector('.header')

document.addEventListener('DOMContentLoaded', () => {
    onScrollChangeBackground()
})

function onScrollChangeBackground() {
    addEventListener('scroll', () => {
        window.scrollY > 15 ? header.classList.add('header_background') : header.classList.remove('header_background');
    });

    window.scrollY > 15 ? header.classList.add('header_background') : header.classList.remove('header_background');
};
