"use strict"; // Habilita o modo estrito do JavaScript para evitar erros comuns

// Obtém o elemento do formulário com o atributo 'name' igual a "registration"
const form = document.forms.namedItem("registration");

// Adiciona um ouvinte de evento de input ao formulário
form.addEventListener("input", (event) => {
  event.preventDefault(); // Impede o comportamento padrão do formulário (neste caso, evitar que a página seja recarregada)

  // Obtém o valor do campo de entrada com o nome "name" dentro do formulário
  const name = form.name.value;

  // Cria um novo elemento <div>
  const newDivElement = document.createElement("div");

  // Define o texto do novo elemento <div> como o valor do nome em maiúsculas
  newDivElement.innerText = name.toUpperCase();

  // Remove o próximo elemento irmão do formulário (se houver um)
  form.nextElementSibling.remove();

  // Insere o novo elemento <div> imediatamente após o formulário no documento HTML
  form.after(newDivElement);
});
