// Habilita o modo estrito, que impõe regras mais rígidas de escrita de JavaScript
"use strict";

// Seleciona o primeiro botão encontrado no documento HTML
const btn = document.querySelector("button");

// Atribui um manipulador de evento "onclick" ao botão
btn.onclick = function alertOne() {
  // Exibe um alerta com o texto "alerta"
  alert("alerta");
};

// Atribui outro manipulador de evento "onclick" ao botão
btn.onclick = function alertTwo() {
  // Neste caso, ele substitui o manipulador anterior; o último definido é o único que será executado
  // Exibe um alerta com o texto "alerta 2"
  alert("alerta 2");
};
