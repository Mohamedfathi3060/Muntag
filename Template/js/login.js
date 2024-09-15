import { url } from "./urls.js";

const login = document.getElementById("login");
const passwordInput = document.getElementById("passwordInput");
const emailInput = document.getElementById("emailInput");
const animationPasswordInput = document.querySelector(".password-input p");
const animationEmailInput = document.querySelector(".email-input p");
const users = async function (url, data) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      if (errorData.error.message == "Email not found") {
        emailInput.style = `
        border: 1px #dc3545 solid;
        border-radius: 4px;
        color: #dc3545; 
      `;
        animationEmailInput.style = `
        color: #dc3545;
      `;
        animationEmailInput.classList.remove("not-visible");
        animationEmailInput.classList.add("visible");
        throw new Error(errorData.error.message);
      }
      if (errorData.error.message == "Wrong Password, try again") {
        passwordInput.style = `
    border: 1px #dc3545 solid;
    border-radius: 4px;
    color: #dc3545; 

  `;
        animationPasswordInput.style = `
    color: #dc3545;
  `;
        animationPasswordInput.classList.remove("not-visible");
        animationPasswordInput.classList.add("visible");
        throw new Error(errorData.error.message);
      } else {
        throw new Error("something is wrong");
      }
    }
    const responseData = await response.json();
    emailInput.value = "";
    passwordInput.value = "";
    // window.location.href = "../home.html";
  } catch (error) {
    console.error("Error:", error);
  }
};
login.addEventListener("click", (e) => {
  e.preventDefault();
  if (emailInput.value != "" && passwordInput.value != "") {
    const data = {
      email: emailInput.value,
      password: passwordInput.value,
    };

    users(`${url}/api/auth/login`, data);
  } else if (emailInput.value == "" && passwordInput.value == "") {
    emailInput.style = `
    border: 1px #dc3545 solid;
    border-radius: 4px;
  `;
    animationEmailInput.style = `
    color: #dc3545;
  `;
    passwordInput.removeAttribute("placeholder");
    emailInput.removeAttribute("placeholder");
    animationEmailInput.classList.remove("not-visible");
    animationEmailInput.classList.add("visible");
    animationEmailInput.classList.remove("initalemail");
    animationEmailInput.classList.add("goemail");
    passwordInput.style = `
  border: 1px #dc3545 solid;
  border-radius: 4px;
`;
    animationPasswordInput.style = `
  color: #dc3545;
`;
    animationPasswordInput.classList.remove("not-visible");
    animationPasswordInput.classList.add("visible");
    animationPasswordInput.classList.remove("initalpassword");
    animationPasswordInput.classList.add("gopassword");
  } else if (passwordInput.value == "") {
    passwordInput.style = `
    border: 1px #dc3545 solid;
    border-radius: 4px;
  `;
    animationPasswordInput.style = `
    color: #dc3545;
  `;
    passwordInput.removeAttribute("placeholder");
    animationPasswordInput.classList.remove("not-visible");
    animationPasswordInput.classList.add("visible");
    animationPasswordInput.classList.remove("initalpassword");
    animationPasswordInput.classList.add("gopassword");
  } else {
    emailInput.style = `
    border: 1px #dc3545 solid;
    border-radius: 4px;
  `;
    animationEmailInput.style = `
    color: #dc3545;
  `;
    emailInput.removeAttribute("placeholder");
    animationEmailInput.classList.remove("not-visible");
    animationEmailInput.classList.add("visible");
    animationEmailInput.classList.remove("initalemail");
    animationEmailInput.classList.add("goemail");
  }
});
passwordInput.addEventListener("focus", () => {
  passwordInput.removeAttribute("placeholder");
  animationPasswordInput.classList.remove("not-visible");
  animationPasswordInput.classList.add("visible");
  animationPasswordInput.classList.remove("initalpassword");
  animationPasswordInput.classList.add("gopassword");
  passwordInput.style = `
  border: 1px black solid;
  border-radius: 4px;
`;
  animationPasswordInput.style = `
color: black;
`;
});
passwordInput.addEventListener("blur", function () {
  if (this.value === "") {
    this.placeholder = "Password";
    animationPasswordInput.classList.add("not-visible");
    animationPasswordInput.classList.remove("visible");
    animationPasswordInput.classList.add("initalpassword");
    animationPasswordInput.classList.remove("gopassword");
    passwordInput.style = `
      border-top: 1px solid transparent;
      border-left: 1px solid transparent;
      border-right: 1px solid transparent;
      border-bottom: 1px solid black;
  `;
  }
});
emailInput.addEventListener("focus", () => {
  emailInput.removeAttribute("placeholder");
  animationEmailInput.classList.remove("not-visible");
  animationEmailInput.classList.add("visible");
  animationEmailInput.classList.remove("initalemail");
  animationEmailInput.classList.add("goemail");
  emailInput.style = `
      border: 1px black solid;
      border-radius: 4px;
  `;
  animationEmailInput.style = `
  color: black;
`;
});
emailInput.addEventListener("blur", function () {
  if (this.value === "") {
    this.placeholder = "Email or Phone Number";
    animationEmailInput.classList.add("not-visible");
    animationEmailInput.classList.remove("visible");
    animationEmailInput.classList.add("initalemail");
    animationEmailInput.classList.remove("goemail");
    emailInput.style = `
          border-top: 1px solid transparent;
          border-left: 1px solid transparent;
          border-right: 1px solid transparent;
          border-bottom: 1px solid black;
      `;
  }
});
