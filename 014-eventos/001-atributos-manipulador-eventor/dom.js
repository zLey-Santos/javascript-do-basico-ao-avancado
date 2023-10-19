"use strict";

// Definindo uma função chamada acionarAlert que recebe um parâmetro chamado 'alerta'
const acionarAlert = (alerta) => {
  // Chamando a função 'alert' com o valor do parâmetro 'alerta' para exibir um alerta no navegador
  alert(alerta);
};

// Agora, você pode usar a função 'acionarAlert' para exibir um alerta com o valor que desejar
// Por exemplo:
acionarAlert("Isso é uma string"); // Isso exibirá um alerta com o texto "Isso é uma string"
acionarAlert(42); // Isso exibirá um alerta com o número 42
acionarAlert({ chave: "valor" }); // Isso exibirá um alerta com o objeto { chave: "valor" }
acionarAlert([1, 2, 3]); // Isso exibirá um alerta com o array [1, 2, 3]
acionarAlert(2 + 2); // Isso exibirá um alerta com o resultado da expressão 2 + 2, ou seja, 4
