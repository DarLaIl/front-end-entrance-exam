export function createUserPopUp() {
  
  let popUpForm = document.querySelector('#popUpForm');

  let greetingPhraseLabel = document.createElement("label");
  greetingPhraseLabel.textContent = 'Enter your greeting..';
  popUpForm.appendChild(greetingPhraseLabel);

  let greetingPhraseInput = document.createElement("input");
  greetingPhraseInput.type = 'text';
  popUpForm.appendChild(greetingPhraseInput);

  let userName = document.createElement("label");
  userName.textContent = 'Enter your name..';
  popUpForm.appendChild(userName);

  let userNameInput = document.createElement("input");
  userNameInput.type = 'text';
  popUpForm.appendChild(userNameInput);

  let userRole = document.createElement("label");
  userRole.textContent = 'Enter your job title..';
  popUpForm.appendChild(userName);

  let userRoleInput = document.createElement("input");
  userRoleInput.type = 'text';
  popUpForm.appendChild(userRoleInput);

}
