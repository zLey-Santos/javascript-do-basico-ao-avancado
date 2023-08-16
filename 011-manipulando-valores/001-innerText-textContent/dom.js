"use strict";

/**
 * trextContent => Retorna o text COM formatações, mas sem elementos
 * innerText => Retorna somente o texto, sem formatações ou elementos
 * **/

const p = document.querySelector("p");
console.log(p.textContent);
console.log(p.innerText);

p.textContent = "Wesley";
p.innerText = "Wesley";
