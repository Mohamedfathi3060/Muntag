const login = document.getElementById("login");
const passwordInput = document.getElementById("passwordInput");
const emailInput = document.getElementById("emailInput");
const animationPasswordInput = document.querySelector(".password-input p")
const animationEmailInput = document.querySelector(".email-input p")
const users = async function (url , data) {
    try {
        const response = await fetch(url, {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json' 
        },
        body: JSON.stringify(data) 
    });

    if (!response.ok) {
      const errorData = await response.json(); 
      if(errorData.error.message == "Email not found"){
        emailInput.style = `
        border: 1px red solid;
        border-radius: 4px;
        color: red; 
      `
      animationEmailInput.style = `
        color: red;
      `
      animationEmailInput.classList.remove("not-visible")
      animationEmailInput.classList.add("visible")
        throw new Error(errorData.error.message); 
      }
      if(errorData.error.message == "Wrong Password, try again"){
passwordInput.style = `
    border: 1px red solid;
    border-radius: 4px;
    color: red; 

  `
  animationPasswordInput.style = `
    color: red;
  `
  animationPasswordInput.classList.remove("not-visible")
  animationPasswordInput.classList.add("visible")
        throw new Error(errorData.error.message); 
      }
    }
      const responseData = await response.json();
      console.log('Success:', responseData); 
      emailInput.value = ""
      passwordInput.value = ""
      window.location.href = "../home.html";
    } catch (error) {
      console.error('Error:', error);
    }
}
login.addEventListener('click',(e)=>{
  e.preventDefault()
  if(emailInput.value != "" && passwordInput.value != ""){
    const data = {
          email: emailInput.value,
          password: passwordInput.value
    }
    
    users("http://41.45.221.32:9090/api/auth/login",data);
  }
  else if(emailInput.value == "" && passwordInput.value == ""){
    emailInput.style = `
    border: 1px red solid;
    border-radius: 4px;
  `
  animationEmailInput.style = `
    color: red;
  `
  animationEmailInput.classList.remove("not-visible")
  animationEmailInput.classList.add("visible")
  passwordInput.style = `
  border: 1px red solid;
  border-radius: 4px;
`
animationPasswordInput.style = `
  color: red;
`
animationPasswordInput.classList.remove("not-visible")
animationPasswordInput.classList.add("visible")
  }
  else if(passwordInput.value == ""){
    passwordInput.style = `
    border: 1px red solid;
    border-radius: 4px;
  `
  animationPasswordInput.style = `
    color: red;
  `
  animationPasswordInput.classList.remove("not-visible")
  animationPasswordInput.classList.add("visible")
  }
  else{
    emailInput.style = `
    border: 1px red solid;
    border-radius: 4px;
  `
  animationEmailInput.style = `
    color: red;
  `
  animationEmailInput.classList.remove("not-visible")
  animationEmailInput.classList.add("visible")
  }
})
passwordInput.addEventListener('focus',()=>{
  passwordInput.removeAttribute("placeholder")
  animationPasswordInput.classList.remove("not-visible")
  animationPasswordInput.classList.add("visible")
  passwordInput.style = `
  border: 1px black solid;
  border-radius: 4px;
`
animationPasswordInput.style = `
color: black;
`
})  
passwordInput.addEventListener('blur', function() {
  if (this.value === '') {
      this.placeholder = 'Password'; 
      animationPasswordInput.classList.add("not-visible")
      animationPasswordInput.classList.remove("visible")
      passwordInput.style = `
      border-top: 1px solid transparent;
      border-left: 1px solid transparent;
      border-right: 1px solid transparent;
      border-bottom: 1px solid black;
  `
  }
});
emailInput.addEventListener('focus',()=>{
  emailInput.removeAttribute("placeholder")
  animationEmailInput.classList.remove("not-visible")
  animationEmailInput.classList.add("visible")
  emailInput.style = `
      border: 1px black solid;
      border-radius: 4px;
  `
  animationEmailInput.style = `
  color: black;
`
})
emailInput.addEventListener('blur', function() {
  if (this.value === '') {
      this.placeholder = 'Email or Phone Number'; 
      animationEmailInput.classList.add("not-visible")
      animationEmailInput.classList.remove("visible")
      emailInput.style = `
          border-top: 1px solid transparent;
          border-left: 1px solid transparent;
          border-right: 1px solid transparent;
          border-bottom: 1px solid black;
      `
  }

});
