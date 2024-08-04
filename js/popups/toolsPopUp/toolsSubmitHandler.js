export function toolsSubmitHandler(e) {
  e.preventDefault();

  const sectionName = document.querySelector('.tool');
  const sectionNameValue = document.querySelector('.section_text');
  sectionName.textContent = sectionNameValue.value;

  const subSectionNameFields = document.querySelectorAll('.toolsTag');
  const subSectionNames = document.querySelectorAll('.subsection_text');
  const subSectionNamesValue = Array.from(subSectionNames).map(
    (input) => input.value
  );
    subSectionNameFields.forEach((field, index) => {
    field.textContent = subSectionNamesValue[index];
})
}
