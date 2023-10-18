"use strict";

const div = document.querySelector("div");
div.setAttribute("id", "teste");

div.classList.add("active");

div.classList.add("background-red");
div.removeAttribute("id");

console.log(div);
//
