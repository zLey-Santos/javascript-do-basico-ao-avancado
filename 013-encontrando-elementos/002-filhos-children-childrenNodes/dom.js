"use strict";

const container = document.querySelector(".container");

console.log(container.children); // HTMLCollection
console.log(container.childNodes); // NodeList

// console.log(children);

console.log("--------------------------------");

const children = Array.from(container.children); // trasformar os filhos em arr e iteralos

children.forEach((res) => {
  console.log(res);
});
