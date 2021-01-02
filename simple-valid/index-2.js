const form = document.querySelector('#form');
const error = document.querySelector('#error');

const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const password = document.querySelector('#password');

form.addEventListener('submit', (event) => {
    let messages = [];
    let passMinLength = 6;
    let passMaxLength = 20;

    if (firstName.value === '' || firstName.value === null) {
        messages.push('First Name is required')
    } else if (password.value === '' || password.value === null) {
        messages.push('Password is required')
    } else if (password.value.length < passMinLength) {
        messages.push(`Password must be longer than ${passMinLength} characters`);
    } else if (password.value.length > passMaxLength) {
        messages.push(`Password must be shorter than ${passMaxLength} characters`);
    } else if (password.value === 'password') {
        messages.push('Password cannot be "password"');
    }

    if (messages.length > 0) {
        event.preventDefault();
        error.style.display = 'block';
        error.innerText = messages.join(', ');
    } else {
        firstName.value = '';
        lastName.value = '';
        password.value = '';
        error.style.display = 'none';
        event.preventDefault();
    }
});
