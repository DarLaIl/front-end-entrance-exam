import '../../../css/popUps/popUp.css';
import { submitHandler } from './submitHandler';
//import { resetHandler } from './resetHandler';

export function createUserPopUp() {
  const popUpForm = document.querySelector('#popUpForm');

  const greetingPhraseContainer = document.createElement('div');
  greetingPhraseContainer.classList.add('label');

  const greetingPhraseLabel = document.createElement('label');
  greetingPhraseLabel.textContent = 'Enter your greeting..';
  greetingPhraseLabel.classList.add('label_text');
  greetingPhraseContainer.appendChild(greetingPhraseLabel);

  const greetingPhraseInput = document.createElement('input');
  greetingPhraseInput.type = 'text';
  greetingPhraseInput.setAttribute('maxlength', 20);
  greetingPhraseInput.classList.add('greetingPhraseInput');
  greetingPhraseContainer.appendChild(greetingPhraseInput);

  const userNameContainer = document.createElement('div');
  userNameContainer.classList.add('label');

  const userNameLabel = document.createElement('label');
  userNameLabel.textContent = 'Enter your name..';
  userNameLabel.classList.add('label_text');
  userNameContainer.appendChild(userNameLabel);

  const userNameInput = document.createElement('input');
  userNameInput.type = 'text';
  userNameInput.classList.add('userName');
  userNameContainer.appendChild(userNameInput);

  const userRoleContainer = document.createElement('div');
  userNameContainer.classList.add('label');

  const userRoleLabel = document.createElement('label');
  userRoleLabel.textContent = 'Enter your job title..';
  userRoleLabel.classList.add('label_text');
  userRoleContainer.appendChild(userRoleLabel);

  const userRoleInput = document.createElement('input');
  userRoleInput.type = 'text';
  userRoleInput.classList.add('userRole');
  userRoleContainer.appendChild(userRoleInput);

  popUpForm.appendChild(greetingPhraseContainer);
  popUpForm.appendChild(userNameContainer);
  popUpForm.appendChild(userRoleContainer);

  const submitButton = document.querySelector('#saveChanges');
    submitButton.addEventListener('click', (e) => {
        e.preventDefault();
        submitHandler()
  });
//  const cancelChanges = document.querySelector('#cancelChanges');
//  cancelChanges.addEventListener('click', resetHandler);
}
