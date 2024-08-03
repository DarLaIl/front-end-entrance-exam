import '../css/style.css';
import { rippleEffect } from './rippleEffect';

const changeResume = document.querySelector('#changeResume');
const saveChenges = document.querySelector('#saveChenges');
const downloadResume = document.querySelector('#downloadResume');
const updateBtn = document.querySelectorAll('.updateBtn');

rippleEffect();

changeResume.addEventListener('click', () => {
  updateBtn.forEach((btn) => {
    btn.classList.replace('disabled', 'activeBtn');
  });
});
