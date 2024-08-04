export function toolsSubmitHandler(e) {
  e.preventDefault();

  document.querySelector('.animation').classList.add('animationActive');
  const sectionName = document.querySelector('.tool');
  const sectionNameValue = document.querySelector('.section_text');

  const subSectionNameFields = document.querySelectorAll('.toolsTag');
  const subSectionNames = document.querySelectorAll('.subsection_text');
  const subSectionNamesValue = Array.from(subSectionNames).map(
    (input) => input.value
  );
  if (
    subSectionNamesValue.some(
      (value) => value !== null && value !== '' && value !== undefined
    ) &&
    sectionNameValue.value.length > 0
  ) {
    sectionName.textContent = sectionNameValue.value;
    subSectionNameFields.forEach((field, index) => {
      field.textContent = subSectionNamesValue[index];
    });
  } else {
    alert('Please, enter your information to all fields..');
  }

  document.querySelector('.container').innerHTML = '';
  const flipCard = document.querySelector('.flip-card');
  flipCard.classList.remove('activePopUp');
}
