'use strict';


function addRedBorder(elem) {
    elem.classList = 'error';
    alert(`Ошибка в введенных значениях`)
}

function removeRedBorder(elem) {
    elem.classList = '';
}

function validName() {
    let regexp = /([a-zа-я]+)/ig;
    let inputName = document.getElementById('name');
    let valid = regexp.test(inputName.value);
    if (!valid) {
        addRedBorder(inputName);
        return false;
    } else {
        removeRedBorder(inputName);
        return true;
    }
}

function validPhone() {
    let regexp = /^\d[\d\(\)\ -]{1,14}\d$/ig;
    let inputPhone = document.getElementById('tel');
    let valid = regexp.test(inputPhone.value);
    if (!valid) {
        addRedBorder(inputPhone);
        return false;
    } else {
        removeRedBorder(inputPhone);
        return true;
    }
}

function validEmail() {
    let regexp = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/ig;
    let inputEmail = document.getElementById('email');
    let valid = regexp.test(inputEmail.value);
    if (!valid) {
        addRedBorder(inputEmail);
        return false;
    } else {
        removeRedBorder(inputEmail);
        return true;
    }
}

// document.querySelector('button').addEventListener('click', () => {
//     // validName();
//     // validPhone();
//     // validEmail();
// })