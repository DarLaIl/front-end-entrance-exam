import '../../../css/popUps/popUp.css';
import { contactSubmitHandler } from './contactSubmitHandler';
import { resetHandler } from '../../utils/resetHandler';

export function contactPopUp() {
  const popUpForm = document.querySelector('#popUpForm');

  if (!popUpForm.innerHTML) {
    popUpForm.innerHTML = `<div class="formChangingButtons"><button class="ripple" id="saveChanges">Save changes</button><button type="reset" class="ripple" id="cancelChanges">Сancel</button></div><div class="container"><div class="container"><div class="label"><label class="label_text">Enter your text..</label><input type="text"></div><div class="label"><label class="label_text">Enter your email..</label><input type="email" size="64" maxlength="64" required placeholder="username@bestsemailever.com"></div>`;
  } else {
    popUpForm.innerHTML = '';
    contactPopUp();
  }

  const submitButton = document.querySelector('#saveChanges');
  submitButton.addEventListener('click', contactSubmitHandler);
  const cancelChanges = document.querySelector('#cancelChanges');
  cancelChanges.addEventListener('click', resetHandler);
}
