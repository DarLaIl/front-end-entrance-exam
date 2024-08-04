export function resetHandler() {
  const flipCard = document.querySelector('.flip-card');
  flipCard.classList.remove('activePopUp');
  document.querySelector('.container').innerHTML = '';

  const editableElements = document.querySelectorAll('.editable');
  editableElements.forEach((element) => {
    element.classList.remove('editableActive');
    element.setAttribute('contenteditable', 'false');
  });
}
