"use strict";

let colors   = document.querySelector(".colors");
let partners = document.querySelector(".partners");
let review   = document.querySelector(".review");
let order    = document.querySelector(".order");

let btnOrder = document.querySelectorAll("#popular .btn");
let btnGoWeb = document.querySelectorAll(".partners .btn");

let MostPopColors = document.querySelector("#popular .heading");
let OurCustomers  = document.querySelector("#review .heading");
let OurPartners   = document.querySelector("#partners .heading");
let OrderNow      = document.querySelector("#order .heading");

let orderListName    = document.querySelector(".inputBox .name");
let orderListEmail   = document.querySelector(".inputBox .email");
let orderListTel     = document.querySelector(".inputBox .number");
let orderListAddress = document.querySelector(".inputBox .address");
let orderListComment = document.querySelector(".comment");
let submit = document.querySelector(".order .row form .btn");

orderListName.placeholder    = "и.ф.о";
orderListEmail.placeholder   = "email";
orderListTel.placeholder     = "телефон";
orderListAddress.placeholder = "адрес";
orderListComment.placeholder = "коментарии..."

if (window.localStorage.getItem("language") === "en") {
  colors.textContent   = "colors";
  partners.textContent = "partners";
  review.textContent   = "review";
  order.textContent    = "order";

  btnOrder.forEach(btn => {
    btn.textContent = "order now";
  })

  btnGoWeb.forEach(btn => {
    btn.textContent = "go to website";
  })

  btnGoWeb.textContent      = "go to website";
  MostPopColors.textContent = "most popular colors";
  OurPartners.textContent   = "our partners"
  OurCustomers.textContent  = "our customers";
  OrderNow.textContent      = "order now";

  orderListName.placeholder    = "full name";
  orderListTel.placeholder     = "phone";
  orderListAddress.placeholder = "address";
  orderListComment.placeholder = "comment..."
  submit.value = "Submit";
}