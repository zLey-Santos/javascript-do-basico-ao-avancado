"use strict"; // Habilita o modo estrito, que impõe regras mais rígidas de escrita de JavaScript

// Seleciona o primeiro botão encontrado no documento HTML
const btn = document.querySelector("button");

// Adiciona um ouvinte de evento de clique para o botão
btn.addEventListener("click", (event) => {
  console.log(1); // Exibe "1" no console quando o botão é clicado
});

// Adiciona outro ouvinte de evento de clique para o botão
btn.addEventListener("click", (event) => {
  console.log(2); // Exibe "2" no console quando o botão é clicado
});

// Adiciona um ouvinte de evento para o movimento do mouse sobre o botão
btn.addEventListener("mousemove", (event) => {
  btn.style.backgroundColor = "red"; // Muda a cor de fundo do botão para vermelho quando o mouse está sobre ele
});

// Adiciona um ouvinte de evento para quando o mouse sai do botão
btn.addEventListener("mouseout", (event) => {
  btn.style.backgroundColor = "blue"; // Muda a cor de fundo do botão para azul quando o mouse sai dele
});
