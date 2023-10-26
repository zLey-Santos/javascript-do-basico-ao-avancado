"use strict"; // Habilita o modo estrito do JavaScript para evitar erros comuns

// Obtém o elemento do formulário com o atributo 'name' igual a "registration"
const form = document.forms.namedItem("registration");

// Adiciona um ouvinte de evento para a submissão do formulário
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Impede o comportamento padrão do formulário de ser executado

  // Obtém os valores dos campos de nome e senha do formulário
  const name = form.name.value;
  const password = form.password.value;

  // Registra as informações no console
  console.log("User:", name, "Password:", password);
});
