export function educationSubmitHandler(e) {
  e.preventDefault();

  const sectionName = document.querySelector('.educationTitle');
  const sectionNameValue = document.querySelector('.section_text');
  sectionName.textContent = sectionNameValue.value;

  const educationEditableElements =
    document.querySelectorAll('.educationEditable');
  educationEditableElements.forEach((element) => {
    element.classList.remove('educationEditableActive');
    element.setAttribute('contenteditable', 'false');
  });
  document.querySelector('.container').innerHTML = '';
  const flipCard = document.querySelector('.flip-card');
  flipCard.classList.remove('activePopUp');
}
