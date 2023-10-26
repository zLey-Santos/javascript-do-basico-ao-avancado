"use strict";

const strong = document.querySelector("strong");

console.log(strong.parentElement);
console.log(strong.parentNode);

console.log("----------------------------");

const p = document.querySelector(".paragrafo");

console.log(p.parentElement);
console.log(p.parentNode);

console.log("----------------------------");

const container = document.querySelector(".container");

console.log(container.parentElement); // retorna o pai que é camada de cima do seu HTML
console.log(container.parentNode); // exmp: (strong) => filho  (P) => filho (div).

console.log("----------------------------");

// diferença entre element e node parent

console.log(
  "Faz parte do documento ",
  document.documentElement.parentNode === document
); // true
console.log(
  "NÂO Faz parte do documento ",
  document.documentElement.parentElement === document
); // false

console.log("----------------------------");

console.log("Faz parte do documento ", document.documentElement.parentNode); // true / htmlDocument

console.log(
  "NÂO Faz parte do documento ",
  document.documentElement.parentElement
); // false / null
