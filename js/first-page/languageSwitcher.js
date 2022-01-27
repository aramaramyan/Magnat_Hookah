"use strict";

const ru = document.querySelector("#ru");
const en = document.querySelector("#en");

const btnExit   = document.querySelector("#exit");
const btnSubmit = document.querySelector("#submit");

ru.addEventListener("change", () => {
  text.textContent = `Просмотр данного сайта разрешен только лицам, достигшим возраста 18 лет. Нажав на кнопку «Принять», Вы подтверждаете, что Вам исполнилось 18 лет, и Вы принимаете условия пользовательского соглашения.`;

  btnExit.textContent  = "Выйти";
  btnSubmit.textContent = "Принять";

  smoke();
});

en.addEventListener("change", () => {
  text.textContent = `Viewing this site is restricted to persons over the age of 18. By clicking on the “Accept” button, you confirm that you are over 18 years old, and you accept the terms of the user agreement.`;

  btnExit.textContent  = "Exit";
  btnSubmit.textContent = "Accept";

  smoke();
});