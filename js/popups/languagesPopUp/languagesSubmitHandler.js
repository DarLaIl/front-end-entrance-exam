export function languagesSubmitHandler(e) {
  e.preventDefault();
  const sectionName = document.querySelector('.language');

  const fieldNames = document.querySelectorAll('.input_text');
  const fieldLevels = document.querySelectorAll('input[type="number"]');
  const nameFields = document.querySelectorAll('.languageName');
  const levelFields = document.querySelectorAll('.languageLevel');

  const sectionNameValue = document.querySelector('.section_text');
  const fieldNamesValues = Array.from(fieldNames).map((input) => input.value);
  const fieldLevelsValues = Array.from(fieldLevels).map((input) => input.value);

  if (
    sectionNameValue.value.length > 0 &&
    fieldNamesValues.some(
      (value) => value !== null && value !== '' && value !== undefined
    ) > 0 &&
    fieldLevelsValues.some(
      (value) => value !== null && value !== '' && value !== undefined
    ) > 0
  ) {
    sectionName.textContent = sectionNameValue.value;
    nameFields.forEach((field, index) => {
      field.textContent = fieldNamesValues[index];
    });
    levelFields.forEach((field, index) => {
      field.value = fieldLevelsValues[index];
    });
  } else {
    alert('Please, enter your information to all fields..');
  }
  document.querySelector('.container').innerHTML = '';
  const flipCard = document.querySelector('.flip-card');
  flipCard.classList.remove('activePopUp');
}
