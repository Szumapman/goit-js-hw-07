"use strict";

const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", (event) => {
    const name = event.currentTarget.value.trim();
    nameOutput.textContent = name === "" ? "Anonymous" : name;
});
