import '../css/style.css';
import { rippleEffect } from './utils/rippleEffect';
import { createUserPopUp } from './popups/createUserPopUp';

const changeResume = document.querySelector('#changeResume');
const saveChenges = document.querySelector('#saveChenges');
const downloadResume = document.querySelector('#downloadResume');
const updateBtn = document.querySelectorAll('.updateBtn');

rippleEffect();

const popUpsOpeners = [createUserPopUp(),  ];
changeResume.addEventListener('click', () => {
  updateBtn.forEach((btn) => {
      btn.classList.replace('disabled', 'activeBtn');
  });
});
updateBtn.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        const flipCard = document.querySelector('.flip-card');
        flipCard.classList.add('activePopUp');
        popUpsOpeners[index];
    })
})