// Definindo uma função 'fn' que aceita dois parâmetros opcionais: 'nome' (string) e 'idade' (number).
const fn = (nome?: string, idade?: number) => {
  // Verificando se 'idade' é falsa, ou seja, não foi fornecida.
  if (!idade) {
    // Se 'idade' não foi fornecida, retorna uma mensagem informando que a idade é opcional.
    return `Nome: ${nome}, idade: opcional!`;
  } else if (!nome) {
    // Se 'nome' não foi fornecido, retorna uma mensagem informando que o nome é obrigatório e incluindo a idade fornecida.
    return `Nome: obrigatório, idade: ${idade}`;
  }
  // Se ambos 'nome' e 'idade' foram fornecidos, retorna uma mensagem que inclui ambos os valores.
  return `Nome: ${nome}, idade: ${idade}`;
};

// Chamando a função 'fn' com uma string zLey para 'nome' e o valor 31 para 'idade'.
console.log(fn("zLey", 31));
