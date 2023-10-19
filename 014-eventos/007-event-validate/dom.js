"use strict"; // Habilita o modo estrito, que impõe regras mais rígidas de escrita de JavaScript

// Seleciona o elemento com o id "menu" no documento HTML
const menu = document.querySelector("#menu");

// Adiciona um ouvinte de evento de clique ao elemento "menu"
// se omenu não existir e der erro add ? erro sera tratato porem o codigo não funcionara
menu?.addEventListener("click", (event) => {
  // Obtém o elemento que foi clicado a partir do objeto de evento (e)
  const { target } = event;

  // Seleciona o elemento "body" do documento HTML
  const body = document.querySelector("body");

  // Usa um switch para verificar a classe do elemento clicado
  switch (target.getAttribute("class")) {
    case "home":
      // Define a cor de fundo do elemento "body" como azul
      body.style.background = "blue";
      break;

    case "sobre":
      // Define a cor de fundo do elemento "body" como vermelho
      body.style.background = "red";
      break;

    case "contato":
      // Define a cor de fundo do elemento "body" como amarelo
      body.style.background = "yellow";
      break;

    default:
      // Caso a classe do elemento clicado não corresponda a nenhum dos casos anteriores, não faz nada
      break;
  }
});
