// Ativar o modo estrito para aplicar regras rigorosas de JavaScript
"use strict";

// Selecionar um elemento com a classe "container" usando querySelector
const container = document.querySelector(".container");

// Imprimir a coleção de elementos filhos do elemento "container"
console.log(container.children); // HTMLCollection

// Imprimir a lista de nós filhos do elemento "container"
console.log(container.childNodes); // NodeList

// Imprimir uma linha de separação no console para melhorar a legibilidade
console.log("--------------------------------");

// Transformar a coleção de elementos filhos em um array usando Array.from()
const children = Array.from(container.children);

// Iterar sobre cada elemento no array "children" usando forEach
children.forEach((res) => {
  // Imprimir cada elemento no console durante a iteração.
  console.log(res);
});
