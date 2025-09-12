let form = document.querySelector("#signupForm");
let userName = document.querySelector("#userName");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let confirmPassword = document.querySelector("#confirmPassword");
let genderOptions = document.querySelectorAll("input[name='gender']");
let terms = document.querySelector("#terms");
let message = document.querySelector("#message");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Clear old errors
  document.querySelectorAll(".error").forEach(el => el.innerText = "");
  message.innerText = "";

  let isValid = true;

  // Name
  if (userName.value.trim() === "") {
    document.querySelector("#userNameError").innerText = "Full name is required";
    isValid = false;
  }

  // Email
  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (email.value.trim() === "") {
    document.querySelector("#emailError").innerText = "Email is required";
    isValid = false;
  } else if (!email.value.match(emailPattern)) {
    document.querySelector("#emailError").innerText = "Enter a valid email (e.g., name@email.com)";
    isValid = false;
  }

  // Password
  if (password.value.length < 6) {
    document.querySelector("#passwordError").innerText = "Password must be at least 6 characters";
    isValid = false;
  }

  // Confirm Password
  if (password.value !== confirmPassword.value) {
    document.querySelector("#confirmError").innerText = "Passwords do not match";
    isValid = false;
  }

  // Gender
  let genderSelected = false;
  genderOptions.forEach(option => {
    if (option.checked) {
      genderSelected = true;
    }
  });
  if (!genderSelected) {
    document.querySelector("#genderError").innerText = "Please select your gender";
    isValid = false;
  }

  // Terms
  if (!terms.checked) {
    document.querySelector("#termsError").innerText = "You must agree to the terms";
    isValid = false;
  }

  // Final Message
  if (isValid) {
    message.innerText = "Form submitted successfully";
    message.style.color = "green";
  } else {
    message.innerText = "Please fix the errors above";
    message.style.color = "red";
  }
});
