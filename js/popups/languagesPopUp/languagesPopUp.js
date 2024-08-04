import '../../../css/popUps/popUp.css';
import { languagesSubmitHandler } from './languagesSubmitHandler';
import { resetHandler } from '../../utils/resetHandler';

export function languagesPopUp() {
  const popUpForm = document.querySelector('#popUpForm');

  if (!popUpForm.innerHTML) {
    popUpForm.innerHTML = `<div class="formChangingButtons"><button type="submit" class="ripple" id="saveChanges">Save changes</button><button type="reset" class="ripple" id="cancelChanges">Сancel</button></div><div class="container"><div class="container"><div class="label"><label class="label_text">Enter your section name…</label><input class="section_text" type="text"></div><div class="infoLabel">Please indicate which languages you speak and their level (maximum three languages) </div><div class="label"><label class="label_text">Enter your language..</label><input type="text" class="input_text"><label class="label_text">Enter your language level..</label><input type="number" min="1" max="5" placeholder="Enter digit from 1 to 5"></div><div class="label"><label class="label_text">Enter your language..</label><input type="text" class="input_text" ><label class="label_text">Enter your language level..</label><input type="number" min="1" max="5" placeholder="Enter digit from 1 to 5"></div><div class="label"><label class="label_text">Enter your language..</label><input type="text" class="input_text"><label class="label_text">Enter your language level..</label><input type="number" min="1" max="5" placeholder="Enter digit from 1 to 5"></div></div>`;
  } else {
    popUpForm.innerHTML = '';
    languagesPopUp();
  }

  const submitButton = document.querySelector('#saveChanges');
  submitButton.addEventListener('click', languagesSubmitHandler);
  const cancelChanges = document.querySelector('#cancelChanges');
  cancelChanges.addEventListener('click', resetHandler);
}
