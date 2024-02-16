const switcher = document.querySelector('.switcher');
const page = document.querySelector('.page');
const themeName = document.querySelector('.theme-name');

switcher.addEventListener('click', function() {
  if (page.classList.contains('page--dark')) {
    page.classList.remove('page--dark');
    switcher.classList.remove('switcher--dark');
    themeName.textContent = 'Light';
  } else {
    page.classList.add('page--dark');
    switcher.classList.add('switcher--dark');
    themeName.textContent = 'Dark';
  }
});
