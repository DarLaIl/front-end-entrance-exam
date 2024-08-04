export function submitHandler(e) {
  e.preventDefault();

  document.querySelector('.animation').classList.add('animationActive');
  const greetingPhrase = document.querySelector('.greetingPhraseInput').value;
  const userName = document.querySelector('.userName').value;
  const userRole = document.querySelector('.userRole').value;

  const greeting = document.querySelector('.greetingPhrase');
  const personName = document.querySelector('.personName');
  const role = document.querySelector('.role');

  if (greetingPhrase.length > 0 && userName.length > 0 && userRole.length > 0) {
    greeting.textContent = greetingPhrase;
    personName.textContent = userName;
    role.textContent = userRole;
  } else {
    alert('Please, enter your information to all fields..');
  }
  document.querySelector('.container').innerHTML = '';
  const flipCard = document.querySelector('.flip-card');
  flipCard.classList.remove('activePopUp');
}
