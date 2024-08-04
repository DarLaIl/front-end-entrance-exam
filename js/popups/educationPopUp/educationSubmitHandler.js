export function educationSubmitHandler(e) {
  e.preventDefault();
  document.querySelector('.animation').classList.add('animationActive');
  const sectionName = document.querySelector('.educationTitle');
  const sectionNameValue = document.querySelector('.section_text');
  sectionName.textContent = sectionNameValue.value;
  if (sectionNameValue.value.length > 0) {
    const educationEditableElements =
      document.querySelectorAll('.educationEditable');
    educationEditableElements.forEach((element) => {
      element.classList.remove('educationEditableActive');
      element.setAttribute('contenteditable', 'false');
    });
    document.querySelector('.container').innerHTML = '';
    const flipCard = document.querySelector('.flip-card');
    flipCard.classList.remove('activePopUp');
  } else {
    alert('Please, enter your information to all fields..');
  }
}
