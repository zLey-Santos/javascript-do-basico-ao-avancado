/**
 * inner/html => REtorna o texto, com formatações e com elementos HTML\
 * createElement ==> Cria um elemento HTML
 **/
const div = document.querySelector("div");
console.log(1, div);

div.innerHTML = `${div.innerHTML}  <strong> Meu texto atualizado...</strong>`;
console.log(2, div);

const elementUl = document.createElement("ul");

[1, 2, 3, 4, 5].forEach((element) => {
  const elementLi = document.createElement("li");
  elementLi.innerText = element;
  elementUl.appendChild(elementLi);
});

div.appendChild(elementUl);
