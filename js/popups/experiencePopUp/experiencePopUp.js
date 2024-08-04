import '../../../css/popUps/popUp.css';
import { experienceSubmitHandler } from './experienceSubmitHandler';
import { resetHandler } from '../../utils/resetHandler';

export function experiencePopUp() {
  const popUpForm = document.querySelector('#popUpForm');

  if (!popUpForm.innerHTML) {
      popUpForm.innerHTML = `<div class="formChangingButtons"><button type="submit" class="ripple" id="saveChanges">Save changes</button><button type="reset" class="ripple" id="cancelChanges">Сancel</button></div><div class="container"><div class="container"><div class="label"><label class="label_text">Enter your section name…</label><input class="section_text" type="text"></div><div class="infoLabel">Please enter your job experience (last three). You can change text inside the resume fields</div>`
      
      const editableElements = document.querySelectorAll('.editable');
      editableElements.forEach((element) => {
          element.classList.add('editableActive');
          element.setAttribute('contenteditable', "true");
      })
  } else {
    popUpForm.innerHTML = '';
    experiencePopUp();
  }

  const submitButton = document.querySelector('#saveChanges');
  submitButton.addEventListener('click', experienceSubmitHandler);
  const cancelChanges = document.querySelector('#cancelChanges');
  cancelChanges.addEventListener('click', resetHandler);
}
