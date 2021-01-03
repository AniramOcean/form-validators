const form = document.querySelector('#form');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const text = document.querySelector('#text');
const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]{2, 4}$/g;
// const emailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

function validation(event) {
    let el = event.target;

    if (el === email) {
        if (el.value !== '' && emailRegex.test(el.value)) {
            el.classList.add('valid');
            el.classList.remove('invalid');
            text.innerHTML = 'Your email address is valid';
            text.style.color = '#00ff00';
        } else {
            el.classList.remove('valid');
            el.classList.add('invalid');
            text.innerHTML = 'Please enter valid email address';
            text.style.color = '#ff0a18';
        }
        if (el.value === '' || el.value === null) {
            el.classList.remove('valid');
            el.classList.add('invalid');
            text.innerHTML = '';
            text.style.color = '#ff0a18';
        }
    } else if (el === password) {
        if (el.value !== '') {
            el.classList.add('valid');
            el.classList.remove('invalid');
            text.innerHTML = '';
            text.style.color = '#00ff00';
        } else {
            el.classList.remove('valid');
            el.classList.add('invalid');
            text.innerHTML = 'Please enter the password';
            text.style.color = '#ff0a18';
            // console.log('B');
            // el.classList.remove('valid');
            // el.classList.add('invalid');
            // el.value.length < 6 ? text.innerHTML = 'Password must be longer than 6 characters' : '';
            // el.value.length > 20 ? text.innerHTML = 'Password cannot be longer than 20 characters' : ''
            // // text.innerHTML = 'Password is invalid';
            // text.style.color = '#ff0a18';
        }
        if (el.value === '' || el.value === null) {
            console.log('A')
            el.classList.remove('valid');
            el.classList.add('invalid');
            text.innerHTML = '';
            text.style.color = '#ff0a18';
        }
        if (el.value.length < 6 && el.value.length > 20) {
            el.classList.remove('valid');
            el.classList.add('invalid');
            text.style.color = '#ff0a18';
            text.innerHTML = 'Password cannot be shorter than 6 chars or longer than 20 chars';
        }
    }

}

email.addEventListener('keyup', validation);
password.addEventListener('keyup', validation);
