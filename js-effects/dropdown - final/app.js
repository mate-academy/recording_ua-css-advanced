'use strict';

const dropdown = document.querySelector('.dropdown');
const trigger = dropdown.querySelector('.dropdown__trigger');
const content = dropdown.querySelector('.dropdown__content');

// const initialHeight = content.clientHeight;
// content.style.height = '0';

trigger.addEventListener('contextmenu', (event) => {
  event.preventDefault();

  dropdown.classList.toggle('dropdown--active');
  // if (dropdown.classList.contains('dropdown--active')) {
  //   content.style.height = '0';
  //   dropdown.classList.remove('dropdown--active');
  // } else {
  //   content.style.height = `${initialHeight}px`;
  //   dropdown.classList.add('dropdown--active');
  // }
});