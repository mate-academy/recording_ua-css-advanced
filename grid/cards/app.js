'use strict';

const input = document.querySelector('input');
const container = document.querySelector('.container');

input.onchange = () => {
  container.innerHTML = '<div class="card"></div>'.repeat(+input.value)
};