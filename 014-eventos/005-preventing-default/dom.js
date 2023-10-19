"use strict"; // Habilita o modo estrito, que impõe regras mais rígidas de escrita de JavaScript

// Seleciona o primeiro link encontrado no documento HTML
const link = document.querySelector("a");

// Adiciona um ouvinte de evento de clique ao link
link.addEventListener("click", (event) => {
  // Impede o comportamento padrão do link (navegar para outra página)
  event.preventDefault();

  // Registra uma mensagem no console quando o link é clicado
  console.log("Evento prevenido");
});
