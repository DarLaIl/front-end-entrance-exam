import '../../../css/popUps/popUp.css';
//import { experienceSubmitHandler } from './experienceSubmitHandler';
//import { resetHandler } from '../../utils/resetHandler';

export function experiencePopUp() {
    const popUpConteiner = document.querySelector('.container');
    popUpConteiner.innerHTML = `<div class="container"><div class="infoLabel">Please indicate which languages you speak and their level (maximum three languages) </div><div class="label"><label class="label_text">Enter your language..</label><input type="text"><label class="label_text">Enter your language level..</label><input type="text" placeholder="Enter digit from 1 to 5"></div><div class="label"><label class="label_text">Enter your language..</label><input type="text"><label class="label_text">Enter your language level..</label><input type="text" placeholder="Enter digit from 1 to 5"></div><div class="label"><label class="label_text">Enter your language..</label><input type="text"><label class="label_text">Enter your language level..</label><input type="text" placeholder="Enter digit from 1 to 5"></div></div>
`;
  
}

//const submitButton = document.querySelector('#saveChanges');
//submitButton.addEventListener('click', (e) => {
//  e.preventDefault();
//  experienceSubmitHandler();
//  const flipCard = document.querySelector('.flip-card');
//  flipCard.classList.remove('activePopUp');
//});
//const cancelChanges = document.querySelector('#cancelChanges');
//cancelChanges.addEventListener('click', resetHandler);
