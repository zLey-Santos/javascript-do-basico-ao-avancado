"use strict";

const h1 = document.querySelector("h1");

h1.classList.add("active", "teste1"); // add uma class
h1.classList.add("teste2");

h1.classList.remove("teste1"); // remove uma class
h1.classList.toggle("teste1"); // verifica se TEM ele remove / se não TEM ele adicona

if (h1.classList.contains("teste1")) {
  // verificando se existe a class
  console.log("Existe a class active");
} else {
  console.log("Class não encontrada");
}

console.log(h1);
