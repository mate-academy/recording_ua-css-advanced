'use strict';

const page = document.querySelector('.page');
const switcher = document.querySelector('.theme-switcher');
const themeName = document.querySelector('.theme-name');

switcher.addEventListener('click', () => {
  if (page.classList.contains('page--theme--dark')) {
    page.classList.remove('page--theme--dark');
    switcher.classList.remove('theme-switcher--theme--dark');
    themeName.textContent = 'Theme: Light';
  } else {
    page.classList.add('page--theme--dark');
    switcher.classList.add('theme-switcher--theme--dark');
    themeName.innerHTML = 'Theme: <strong>Dark</strong>';
  }
});