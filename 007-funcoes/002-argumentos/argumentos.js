/* function soma(num1, num2) {
  // Verifica se num1 e num2 são do tipo 'number' (números)
  if (typeof num1 === "number" && typeof num2 === "number") {
    // Se ambos forem números, realiza a soma e retorna o resultado
    return num1 + num2;
  }
  // Caso um ou ambos não sejam números, retorna uma mensagem de erro
  return "Dados incorretos";
}
// Testa a função chamando-a com os argumentos 1 e 5 e imprime o resultado no console
console.log(soma(1, 5)); */

/**
 * [JSDoc]
 * Função que realiza a subtração de dois números.
 * @param {number} n1 - O número do qual será subtraído o segundo número.
 * @param {number} n2 - O número a ser subtraído do primeiro número.
 * @returns {number|string} - O resultado da subtração ou uma mensagem de erro caso os dados sejam inválidos.
 */

function subtracao(n1, n2) {
  // Verifica se n1 e n2 são ambos números
  if (typeof n1 === "number" && typeof n2 === "number") {
    // Se ambos forem números, realiza a subtração e retorna o resultado
    return n1 - n2;
  }
  // Caso um ou ambos não sejam números, retorna uma mensagem de erro
  return "Dados inválidos";
}

// Testa a função chamando-a com os argumentos 1 e 2 e imprime o resultado no console
console.log(subtracao(1, 2));

/* O objeto arguments é um objeto especial disponível em todas as funções JavaScript, que contém todos os argumentos passados para a função como uma espécie de array-like (não é um array real, mas se comporta como tal). Vamos criar um exemplo de função que usa o arguments para somar todos os números passados como argumentos: */

/**
 * Função que soma todos os números passados como argumentos.
 * @returns {number} - A soma dos números passados como argumentos.
 */
function somaTodos() {
  let total = 0;

  for (let i = 0; i < arguments.length; i++) {
    const arg = arguments[i];

    // Verifica se o argumento é um número antes de somá-lo
    if (typeof arg === "number") {
      total += arg;
    }
  }

  return total;
}

// Teste da função com diferentes números de argumentos
console.log(somaTodos(1, 2, 3, 4, 5)); // Saída: 15 (1 + 2 + 3 + 4 + 5)
console.log(somaTodos(10, 20, 30)); // Saída: 60 (10 + 20 + 30)
console.log(somaTodos(5, 10)); // Saída: 15 (5 + 10)
console.log(somaTodos(2, 4, 6, 8, 10, 12)); // Saída: 42 (2 + 4 + 6 + 8 + 10 + 12)

/* Explicação do exemplo:

    A função somaTodos não possui parâmetros definidos na assinatura, mas mesmo assim, pode receber um número indefinido de argumentos de entrada usando o objeto arguments.

    Utilizamos um loop for para iterar sobre todos os argumentos contidos no objeto arguments.

    Verificamos se cada argumento é um número usando typeof arg === "number". Se for um número, somamos ao total. Se não for um número, ele é simplesmente ignorado.

    O resultado final é retornado como a soma de todos os números passados como argumentos para a função.

Essa abordagem pode ser útil quando você precisa criar uma função que aceita um número variável de argumentos, permitindo uma maior flexibilidade no uso da função. No entanto, é importante mencionar que o uso do objeto arguments está se tornando menos comum devido ao suporte ao operador de propagação ... (rest/spread) introduzido no ECMAScript 6. O operador de propagação é mais intuitivo e permite criar funções com parâmetros variáveis de maneira mais explícita e legível. */
