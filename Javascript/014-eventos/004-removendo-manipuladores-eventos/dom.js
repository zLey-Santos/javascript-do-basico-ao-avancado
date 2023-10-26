"use strict"; // Habilita o modo estrito, que impõe regras mais rígidas de escrita de JavaScript
/*
// Seleciona o primeiro botão encontrado no documento HTML
const btn1 = document.querySelector("button");

// Define uma função chamada acionarAlert que será executada quando o botão for clicado
const acAlert = () => {
  let validate = false; // Declara uma variável chamada 'validate' e a inicializa como falso

  alert(123); // Exibe um alerta contendo o número 123

  validate = true; // Altera o valor da variável 'validate' para verdadeiro (true)

  // Verifica se 'validate' é verdadeiro e, se for, remove o evento de clique do botão que chama a função 'acionarAlert'
  if (validate) {
    btn1.removeEventListener("click", acAlert);
  }
};

// Adiciona um ouvinte de evento de clique ao botão que chama a função 'acionarAlert' quando o botão é clicado
btn.addEventListener("click", acionarAlert); */

// Comentado (não é executado no momento):
// Remove o evento de clique do botão que chama a função 'acionarAlert'
//btn.removeEventListener("click", acionarAlert);

// Exemplo 2 com settime
const btn = document.querySelector("button");

let blocked = false; // Variável para controlar se o botão está bloqueado

const acionarAlert = () => {
  if (!blocked) {
    // Verifica se o botão não está bloqueado
    alert(123); // Exibe o alerta
    blocked = true; // Bloqueia o botão
    setTimeout(() => {
      blocked = false; // Desbloqueia o botão após 5 segundos
    }, 3000);
  }
};

btn.addEventListener("click", acionarAlert);
