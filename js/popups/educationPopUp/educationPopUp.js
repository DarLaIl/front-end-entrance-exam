import '../../../css/popUps/popUp.css';
import { educationSubmitHandler } from './educationSubmitHandler';
import { resetHandler } from '../../utils/resetHandler';

export function educationPopUp() {
  const popUpForm = document.querySelector('#popUpForm');

  if (!popUpForm.innerHTML) {
    popUpForm.innerHTML = `<div class="formChangingButtons"><button type="submit" class="ripple" id="saveChanges">Save changes</button><button type="reset" class="ripple" id="cancelChanges">Сancel</button></div><div class="container"><div class="container"><div class="label"><label class="label_text">Enter your section name…</label><input class="section_text" type="text"></div><div class="infoLabel">Please enter your education experience (last three). You can change text inside the resume fields</div>`;

    const editableElements = document.querySelectorAll('.educationEditable');
    editableElements.forEach((element) => {
      element.classList.add('educationEditableActive');
      element.setAttribute('contenteditable', 'true');
    });
  } else {
    popUpForm.innerHTML = '';
    educationPopUp();
  }

  const submitButton = document.querySelector('#saveChanges');
  submitButton.addEventListener('click', educationSubmitHandler);
  const cancelChanges = document.querySelector('#cancelChanges');
  cancelChanges.addEventListener('click', resetHandler);
}
