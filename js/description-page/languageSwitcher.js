"use strict";

let text  = document.querySelector(".main div p");
let text1 = document.querySelector(".text1");
let text2 = document.querySelector(".text2");
let text3 = document.querySelector(".text3");
let text4 = document.querySelector(".text4");
let text5 = document.querySelector(".text5");
let text6 = document.querySelector(".text6");
let text7 = document.querySelector(".footer h2 a");
let description = document.querySelector(".pin-wrap h2")

const ru = document.querySelector("#ru");
const en = document.querySelector("#en");

ru.addEventListener("change", () => {
  text.textContent  = "Кальян как новый символ статуса."
  text1.textContent = "Основание выполнено из авиационного аллюминия, который отличается легкостью и особой прочностью.";
  text2.textContent = "Шланги с покрытием Soft-touch имеют хорошее качество, не гнутся и очень приятны на ощупь.";
  text3.textContent = "Отличительная особенность кальянов MAGNAT - это способность основания плавно поворачиваться на 360°, при этом шахта и блюдце остаются неподвижными. Такое решение позволяет избежать тряски кальяна при передаче шланга.";
  text4.textContent = "Порты для коннектора и выдувного клапана оснащены магнитным замком. Они могут быть заменены на специальные коннекторы для одновременного использования двух шлангов.";
  text5.textContent = "Возможно индивидуальное нанесение логотипа методом фрезерования.";
  text6.textContent = "Через шахту, имеющую дизайн радиатора, проходит пищевая нержавеющая трубка.";
  text7.textContent = "Теперь Вы знаете всё о кальянах MAGNAT, можем перейти к покупкам.";
  description.textContent = "Кальяны \"Магнат\"- это  индивидуальные инновации совмещённые с уникальным дизайном. Главным и редким преимуществом кальянов \"Магнат\" благодаря которому мы отличаемся от всех кальянов этой ценовой категории - это плавно вращающаяся на 360 градусов основание, при котором шахта с блюдцей  и колба остаются неподвижными. Этот способ позволяет более удобным способом передать шланг партнёру, избегая раскачивание кальяна, при котором в большинстве случаев курильщики роняют угли."
});

en.addEventListener("change", () => {
  text.textContent  = "Hookah one new status symbol."
  text1.textContent = "The base is made of aviation aluminum, which is lightweight and particularly durable.";
  text2.textContent = "Soft-touch coated houses are of good quality, they do not bend and are very pleasant to the touch.";
  text3.textContent = "A distinctive feature of MAGNAT hookahs is the ability of the base to rotate smoothly 360°, while the shaft and saucer remain stationary. This solution avoids shaking the hookah when transferring the hose.";
  text4.textContent = "The ports for the connector and the blow valve are equipped with a magnetic lock. They can be replaced with special connectors for simultaneous use of two hoses.";
  text5.textContent = "It is possible to apply the logo individually by milling.";
  text6.textContent = "A stainless tube passes through the shaft made of radiator design";
  text7.textContent = "Now you know everything about MAGNAT hookahs, we can move on to shopping.";
  description.textContent = "Hookahs \"Magnat\" are individual innovations combined with a unique design. The main and rare advantage of \"Magnat\" hookahs, thanks to which we differ from all hookahs of this price category, is a base that rotates smoothly 360 degrees, in which the shaft with a saucer and the flask remain motionless. This method allows you to pass the hose to your partner in a more convenient way, avoiding the rocking of the hookah, in which in most cases smokers drop the coals."
});

