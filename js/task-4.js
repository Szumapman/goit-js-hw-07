"use strict";

const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  const email = formElements.email.value.trim();
  const password = formElements.password.value.trim();
  if (email === "" || password === "") {
    alert('All form fields must be filled in');
  } else {
    const formData = {
      email,
      password,
    };
    console.log(formData);
    loginForm.reset();
  }
});
