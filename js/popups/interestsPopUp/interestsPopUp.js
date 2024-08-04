import '../../../css/popUps/popUp.css';
import { interestsSubmitHandler } from './InterestsSubmitHandler';
import { resetHandler } from '../../utils/resetHandler';

export function interestsPopUp() {
  document.querySelector('.animation').classList.remove('animationActive');
  const popUpForm = document.querySelector('#popUpForm');

  if (!popUpForm.innerHTML) {
    popUpForm.innerHTML = `<div class="formChangingButtons"><button type="submit" class="ripple" id="saveChanges">Save changes</button><button type="reset" class="ripple" id="cancelChanges">Сancel</button></div><div class="container"><div class="container"><div class="label"><label class="label_text">Enter your section name…</label><input class="section_text" type="text"></div><div class="infoLabel">Please enter your interests. You can change text inside the resume fields</div>`;

    const editableElements = document.querySelectorAll('.interestsEditable');
    editableElements.forEach((element) => {
      element.classList.add('interestsEditableActive');
      element.setAttribute('contenteditable', 'true');
    });
  } else {
    popUpForm.innerHTML = '';
    interestsPopUp();
  }

  const submitButton = document.querySelector('#saveChanges');
  submitButton.addEventListener('click', interestsSubmitHandler);
  const cancelChanges = document.querySelector('#cancelChanges');
  cancelChanges.addEventListener('click', resetHandler);
}
