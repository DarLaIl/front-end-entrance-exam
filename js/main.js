import '../css/style.css';
import { rippleEffect } from './utils/rippleEffect';
import { createUserPopUp } from './popups/userPopUp/createUserPopUp';
import { languagesPopUp } from './popups/languagesPopUp/languagesPopUp';
import { experiencePopUp } from './popups/experiencePopUp/experiencePopUp';
import { toolsPopUp } from './popups/toolsPopUp/toolsPopUp';

const changeResume = document.querySelector('#changeResume');
const downloadResume = document.querySelector('#downloadResume');
const updateBtn = document.querySelectorAll('.updateBtn');

rippleEffect();

const popUpsOpeners = [
  createUserPopUp,
  languagesPopUp,
  experiencePopUp,
  toolsPopUp,
];
changeResume.addEventListener('click', () => {
  updateBtn.forEach((btn) => {
      btn.classList.replace('disabled', 'activeBtn');
  });
});
updateBtn.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        const flipCard = document.querySelector('.flip-card');
        flipCard.classList.add('activePopUp');
        popUpsOpeners[index]();
    })
})