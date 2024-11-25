"use strict";

const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

// if you want to see the output name change when the input field loses focus,
nameInput.addEventListener("change", (event) => {
// or as below, if you want to see the output name change after typing each letter
// nameInput.addEventListener("input", (event) => {
    const name = event.currentTarget.value.trim();
    nameOutput.textContent = name === "" ? "Anonymous" : name;
});
