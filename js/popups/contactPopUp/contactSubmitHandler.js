export function contactSubmitHandler(e) {
  e.preventDefault();

  document.querySelector('.animation').classList.add('animationActive');
  const sectionName = document.querySelector('.contactText');
  const sectionNameValue = document.querySelector('input[type="text"]');
  const contactInfo = document.querySelector('.contactInfo');
  const contactInfoValue = document.querySelector('input[type="email"]');

  if (sectionNameValue.value.length > 0 && contactInfoValue.value.length > 0) {
    sectionName.textContent = sectionNameValue.value;
    contactInfo.textContent = contactInfoValue.value;
    document.querySelector('.container').innerHTML = '';
    const flipCard = document.querySelector('.flip-card');
    flipCard.classList.remove('activePopUp');
  } else {
    alert('Please, enter your information to all fields..');
  }
}
