import '../../../css/popUps/popUp.css';
import { toolsSubmitHandler } from './toolsSubmitHandler';
import { resetHandler } from '../../utils/resetHandler';

export function toolsPopUp() {
  document.querySelector('.animation').classList.remove('animationActive');
  const popUpForm = document.querySelector('#popUpForm');

  if (!popUpForm.innerHTML) {
    popUpForm.innerHTML = `<div class="formChangingButtons"><button type="submit" class="ripple" id="saveChanges">Save changes</button><button type="reset" class="ripple" id="cancelChanges">Сancel</button></div><div class="container"><div class="container"><div class="label"><label class="label_text">Enter your section name…</label><input class="section_text" type="text"></div><div class="label"><label class="label_text">Enter your subsection name…</label><input class="subsection_text" type="text"></div><div class="label"><label class="label_text">Enter your subsection name…</label><input class="subsection_text" type="text"></div><div class="label"><label class="label_text">Enter your subsection name…</label><input class="subsection_text" type="text"></div>`;
  } else {
    popUpForm.innerHTML = '';
    toolsPopUp();
  }

  const submitButton = document.querySelector('#saveChanges');
  submitButton.addEventListener('click', toolsSubmitHandler);
  const cancelChanges = document.querySelector('#cancelChanges');
  cancelChanges.addEventListener('click', resetHandler);
}
