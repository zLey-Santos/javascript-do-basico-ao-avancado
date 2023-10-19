"use strict"; // Habilita o modo estrito do JavaScript para evitar erros comuns

// Obtém o elemento do formulário com o atributo 'name' igual a "registration"
const form = document.forms.namedItem("registration");

// Adiciona um ouvinte de evento para a submissão do formulário
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Impede o comportamento padrão do formulário de ser executado

  // Obtém os valores dos campos de nome e senha do formulário
  const name = form.name.value;
  const password = form.password.value;

  // Cria um objeto FormData a partir do formulário
  const formData = new FormData(form);

  // Define manualmente os valores de nome e senha no objeto FormData
  formData.set("name", name);
  formData.set("password", password);

  // Exibe se o FormData contém os campos "name" e "password"
  console.log("1User", formData.has("name"));
  console.log("1Password", formData.has("password"));

  // Exibe os valores armazenados em "name" e "password" no FormData
  console.log("2User:", formData.get("name"));
  console.log("2Password:", formData.get("password"));

  // Deleta o campo "name" do FormData
  formData.delete("name");
  console.log("Dell", formData.has("name"));

  /*
  if (name && password) {
    console.log("User:", name, "Password:", password);
    form.submit();
  } else {
    console.log("preencha o formulário");
  }
  */
});
