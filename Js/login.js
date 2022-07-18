const emailEle = document.getElementById('email');
const passwordEle = document.getElementById('password');

const btnRegister = document.getElementById('btn-register');
const inputEles = document.querySelectorAll('.input-row');


function checkValidate() {
    let emailValue = emailEle.value;
    let passwordValue = passwordEle.value;

    let isCheck = true;


    if (emailValue == '') {
        setError(emailEle, 'Email can not null');
        isCheck = false;
    } else if (!isEmail(emailValue)) {
        setError(emailEle, 'Email wrong format');
        isCheck = false;
    } else {
        setSuccess(emailEle);
    }

    if (passwordValueValue == '') {
        setError(passwordEle, 'Password can not null');
        isCheck = false;
    } else if (!isPassword(phoneValue)) {
        setError(phoneEle, 'Password wrong ');
        isCheck = false;
    } else {
        setSuccess(phoneEle);
    }

    return isCheck;
}

function setSuccess(ele) {
    ele.parentNode.classList.add('success');
}

function setError(ele, message) {
    let parentEle = ele.parentNode;
    parentEle.classList.add('error');
    parentEle.querySelector('small').innerText = message;
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    );
}

function isPassword(number) {
    return /([a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$)\b/.test(number);
}