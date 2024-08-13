let createAccountBtn = document.querySelector(".createAccountBtn")
let nameInput = document.querySelector("#name");
let identifierInput = document.querySelector("#identifier");
let passwordInput = document.querySelector("#password");
let confirmPasswordInput = document.querySelector("#confirmPassword");

nameInput.addEventListener("input",function(e){
    checkInput(nameInput,/^[A-Za-z]{3,}[0-9_-]{0,}$/);
    if(nameInput.value == "") {
        nameInput.classList.remove("is-invalid");
        nameInput.classList.remove("is-valid");
    }
});

identifierInput.addEventListener("input",function(e){
    if (!checkInput(identifierInput,/^0(10|11|12|15)[0-9]{8}$/)){
        checkInput(identifierInput,/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/);
    }
    if(identifierInput.value == "") {
        identifierInput.classList.remove("is-invalid");
        identifierInput.classList.remove("is-valid");
    }
});

passwordInput.addEventListener("input",function(e){
    checkInput(passwordInput,/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/);
    if(passwordInput.value == "") {
        passwordInput.classList.remove("is-invalid");
        passwordInput.classList.remove("is-valid");
    }
});

confirmPasswordInput.addEventListener("input",function(e){
    if(confirmPasswordInput.value === passwordInput.value){
        confirmPasswordInput.classList.remove("is-invalid");
        confirmPasswordInput.classList.add("is-valid");
    }
    else {
        confirmPasswordInput.classList.remove("is-valid");
        confirmPasswordInput.classList.add("is-invalid");
    }
    if(confirmPasswordInput.value == "") {
        confirmPasswordInput.classList.remove("is-invalid");
        confirmPasswordInput.classList.remove("is-valid");
    }
});

function checkInput(inputField, rule){
    if(inputField.value.match(rule)){
        inputField.classList.remove("is-invalid");
        inputField.classList.add("is-valid");
        return true;
    }
    else {
        inputField.classList.remove("is-valid");
        inputField.classList.add("is-invalid");
        return false;
    }
}

createAccountBtn.addEventListener("click",function (e) {
    if(checkInput(nameInput,/^[A-Za-z0-9_-]{3,15}$/) && (checkInput(identifierInput,/^0(10|11|12|15)[0-9]{8}$/) || checkInput(identifierInput,/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/)) && checkInput(passwordInput,/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/) && passwordInput.value === confirmPasswordInput.value){
        alert("Good Inputs");
    }
    else {
        alert("Bad Inputs");
    }
});
