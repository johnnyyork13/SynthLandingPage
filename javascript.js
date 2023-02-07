const fName = document.getElementById('fName');
const lName = document.getElementById('lName');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const email = document.getElementById('email');
const tel = document.getElementById('tel');
const form = document.getElementById('mainForm');

const inputControls = document.getElementsByClassName('input');

const submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click', function(){
    for (i = 0; i < inputControls.length; i++){
        e = inputControls[i];
        if (e.validity.valid === false)
        {
            e.style.border = '2px solid rgb(252, 182, 182)';
        } else {
            e.style.border = '2px solid rgb(173, 173, 173)';
        }

        if (password.value !== confirmPassword.value && password.value !== "" & confirmPassword.value !== "") {
            password.setCustomValidity('Please enter a valid password.');
            password.style.border = '2px solid rgb(252, 182, 182)';
            confirmPassword.style.border = '2px solid rgb(252, 182, 182)';
        } else if (password.value === confirmPassword.value && password.value !== ""){
            password.setCustomValidity('');
            password.style.border = '2px solid rgb(173,173,173)';
            confirmPassword.style.border = '2px solid rgb(173, 173, 173)';
        }
    }
})