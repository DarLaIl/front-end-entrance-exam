export function experienceSubmitHandler(e) {
    e.preventDefault();

    const sectionName = document.querySelector('.experienceTitle');
    const sectionNameValue = document.querySelector('.section_text');
    sectionName.textContent = sectionNameValue.value;

    if (sectionNameValue.value.length > 0) {
        const editableElements = document.querySelectorAll('.editable');
        editableElements.forEach((element) => {
            element.classList.remove('editableActive');
            element.setAttribute('contenteditable', 'false');
        });
        document.querySelector('.container').innerHTML = '';
        const flipCard = document.querySelector('.flip-card');
        flipCard.classList.remove('activePopUp');
    } else {
        alert('Please, enter your information to all fields..');
    }
}
