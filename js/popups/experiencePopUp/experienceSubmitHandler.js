export function experienceSubmitHandler(e) {
  e.preventDefault();

  const sectionName = document.querySelector('.experienceTitle');
  const sectionNameValue = document.querySelector('.section_text');
  sectionName.textContent = sectionNameValue.value;

  const editableElements = document.querySelectorAll('.editable');
  editableElements.forEach((element) => {
    element.classList.remove('editableActive');
    element.setAttribute('contenteditable', 'false');
  });
}
