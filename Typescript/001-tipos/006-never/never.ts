let error = (): never => {
  throw new Error("Algo deu errado!");
};

// A função 'error' é definida para lançar um erro com a mensagem "Algo deu errado!"

// console.log(error());

const loop = () => {
  while (true) {
    console.log("Olá");
  }
};

// A função 'loop' contém um loop infinito que imprime "Olá" repetidamente.

const validate = (value: string | number | any) => {
  if (typeof value === "string") {
    return console.log("É uma string");
  } else if (typeof value === "number") {
    return console.log("É um número");
  }
  console.log(error());
};

// A função 'validate' aceita um argumento 'value' que pode ser uma string, um número ou qualquer outro tipo.
// Se 'value' for uma string, ela imprime "É uma string".
// Se 'value' for um número, ela imprime "É um número".
// Se 'value' não for nem uma string nem um número, ela chama a função 'error', que lança um erro.

validate(false);

// Aqui, você está chamando a função 'validate' com 'false' como argumento, que não é uma string nem um número,
// portanto, a função 'error' é chamada e um erro é lançado com a mensagem "Algo deu errado!"
