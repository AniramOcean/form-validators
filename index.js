function onPageLoaded() {
    let allInputs = document.querySelectorAll('.input');
    const firstName = document.querySelector('#firstName');
    const lastName = document.querySelector('#lastName');
    const email = document.querySelector('#email');
    const password = document.querySelector('#password');
    const confirmPassword = document.querySelector('#confirmPassword');
    const acceptBtn = document.querySelector('#acceptBtn');
    const cancelBtn = document.querySelector('#cancelBtn');

    const acceptClass = 'input-accept';
    const warnClass = 'input-warn';

    const message = (text) => `<div class="notification"><small>${text}</small></div>`;

    function addWarnMessage(el) {
        let text = 'Заполните поле';
        return el.insertAdjacentHTML('afterbegin', message(text));
    }

    function eventListener(el, event) {
        let parentNode = el.parentNode;
        let elValue = event.target.value;
        const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/g;
        const passwordRegex = '';

        if (elValue !== '') {
            if ((el === firstName || el === lastName) && elValue.trim() !== '') {
                if  (parentNode.querySelector('.notification')) {
                    parentNode.querySelector('.notification').remove();
                }
                el.classList.remove(warnClass);
                el.classList.add(acceptClass)
            } else if (el === email && emailRegex.test(elValue)) {
                el.classList.add(warnClass);
                el.classList.remove(acceptClass)            }
        }
    }

    function changeClass(elements) {

        for (const el of elements) {
            let parentNode = el.parentNode;

            el.addEventListener('keydown', event => eventListener(el, event));
                // (event) => {
                /*let parentNode = el.parentNode;
                let elValue = event.target.value;
                const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/g;
                const passwordRegex = '';

                if (elValue !== '') {
                    if ((el === firstName || el === lastName) && elValue.trim() !== '') {
                        if  (parentNode.querySelector('.notification')) {
                            parentNode.querySelector('.notification').remove();
                        }
                        el.classList.remove(warnClass);
                        el.classList.add(acceptClass)
                    } else if (el === email && emailRegex.test(elValue)) {
                        console.log(elValue);
                    }
                }*/
                // if (el === email) {}
                // if (el === password) {}
                // if (el === confirmPassword) {}
            // })

            // el.addEventListener('focus', (event) => {
            //     let parentNode = el.parentNode;
            //     let elValue = event.target.value;
            //
            //     if (elValue.trim() === '' && !parentNode.querySelector('.notification')) {
            //         addWarnMessage(parentNode);
            //         el.classList.add(warnClass);
            //         el.classList.remove(acceptClass);
            //     } else if (elValue.trim() !== '' && parentNode.querySelector('.notification')) {
            //         el.classList.remove(warnClass);
            //         parentNode.querySelector('.notification').remove();
            //         el.classList.add(acceptClass);
            //     }
            // });
        }
    }

    changeClass(allInputs);

}

document.addEventListener('DOMContentLoaded', onPageLoaded);
