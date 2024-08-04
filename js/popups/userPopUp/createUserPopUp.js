import '../../../css/popUps/popUp.css';
import { submitHandler } from './submitHandler';
import { resetHandler } from '../../utils/resetHandler';

export function createUserPopUp() {
  document.querySelector('.animation').classList.remove('animationActive');
  const popUpForm = document.querySelector('#popUpForm');

  if (!popUpForm.innerHTML) {
    popUpForm.innerHTML = `<div class="formChangingButtons"><button class="ripple" id="saveChanges">Save changes</button><button type="reset" class="ripple" id="cancelChanges">Сancel</button></div><div class="container"><div class="container"><div class="label"><label class="label_text">Enter your greeting..</label><input type="text" maxlength="20" class="greetingPhraseInput"></div><div class="label"><label class="label_text">Enter your name..</label><input type="text" class="userName"></div><div><label class="label_text">Enter your job title..</label><input type="text" class="userRole"></div></div></div>`;
  } else {
    popUpForm.innerHTML = '';
    createUserPopUp();
  }

  const submitButton = document.querySelector('#saveChanges');
  submitButton.addEventListener('click', submitHandler);
  const cancelChanges = document.querySelector('#cancelChanges');
  cancelChanges.addEventListener('click', resetHandler);
}
