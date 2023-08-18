"use strict";

const idNumber = document.querySelector("span");
const adviceText = document.querySelector(".advice-text");
const dice = document.querySelector(".dice");

// const adviceObject = {
//   slip_id: "",
//   advice: "",
// };

const adviceFunc = async function () {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");

    if (!response.ok) throw new Error(`HTTP error: ${response.status}`);

    const data = await response.json();

    idNumber.textContent = data.slip.id;
    adviceText.textContent = `"${data.slip.advice}"`;
  } catch (err) {
    console.error(err);
    alert(err);
  }
};

dice.addEventListener("click", adviceFunc);
