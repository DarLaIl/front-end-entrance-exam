export function interestsSubmitHandler(e) {
  e.preventDefault();

  document.querySelector('.animation').classList.add('animationActive');
  const sectionName = document.querySelector('.interestsTitle');
  const sectionNameValue = document.querySelector('.section_text');
  sectionName.textContent = sectionNameValue.value;

  if (sectionNameValue.value.length > 0) {
    const educationEditableElements =
      document.querySelectorAll('.interestsEditable');
    educationEditableElements.forEach((element) => {
      element.classList.remove('interestsEditableActive');
      element.setAttribute('contenteditable', 'false');
    });
    document.querySelector('.container').innerHTML = '';
    const flipCard = document.querySelector('.flip-card');
    flipCard.classList.remove('activePopUp');
  } else {
    alert('Please, enter your information to all fields..');
  }
}
