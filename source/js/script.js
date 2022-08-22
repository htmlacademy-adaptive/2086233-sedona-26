let navMain = document.querySelector('.navigation__list-wrapper');
let navToggle = document.querySelector('.menu__toggle');

navMain.classList.remove('navigation__list-wrapper--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('navigation__list-wrapper--closed')) {
    navMain.classList.remove('navigation__list-wrapper--closed');
    navMain.classList.add('navigation__list-wrapper--opened');
  } else {
    navMain.classList.add('navigation__list-wrapper--closed');
    navMain.classList.remove('navigation__list-wrapper--opened');
  }
});
