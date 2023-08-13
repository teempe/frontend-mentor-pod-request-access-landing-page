const formEl = document.querySelector('.form');
const emailInput = formEl.querySelector('.form__input');
const errorMsg = formEl.querySelector('.form__validation-error');


const validateEmail = email => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+/;
    return emailPattern.test(email);
}

const showErrorMsg = () => {
    errorMsg.classList.remove('hidden');
}

const hideErrorMsg = () => {
    errorMsg.classList.add('hidden');
}

const cleanForm = () => {
    // empy input field, unfocus and clear erro if present
    emailInput.value = '';
    emailInput.blur();
    hideErrorMsg();
}

const handleFormSubmit = event => {
    event.preventDefault();
    hideErrorMsg();
    const inputValue = emailInput.value.trim();
    if (validateEmail(inputValue)) {
        console.log(`Success! ${inputValue} registered.`);
        cleanForm();
        return;
    }
    showErrorMsg();
}

const handleKeyPress = event => {
    // Escape clean up form (even if form is not focused)
    if (event.key === 'Escape') {
        cleanForm();
        return;
    }

    // Sumbit form on Enter only if key is pressed on form
    if (event.key === 'Enter' && event.target === formEl) {
        handleFormSubmit(event);
        return;
    }
}

formEl.addEventListener('submit', handleFormSubmit);
formEl.addEventListener('keydown', handleKeyPress);
document.body.addEventListener('keydown', handleKeyPress);
