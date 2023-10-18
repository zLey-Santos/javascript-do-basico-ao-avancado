console.log("-----------------------------------");
let soma = 0;

if (soma >= 0) {
  console.log("Seu saldo está positivo"); // true.
} else {
  console.log("Seu saldo está negativo"); // false
}

console.log("-----------------------------------");

if (5 === 5) {
  console.log("Retorna o valor da primira condição");
} else if (10 === 0) {
  console.log("Retorna o valor da segunda condição");
} else {
  console.log("falso");
}

console.log("-----------------------------------");

/* 
O "if", "else" e "else if" são estruturas condicionais utilizadas em programação para tomar decisões com base em determinadas condições. Essas estruturas permitem que o programa execute diferentes blocos de código dependendo do resultado da avaliação de uma condição.

O "if" é a estrutura básica e é utilizada para executar um bloco de código se uma condição for verdadeira. A sintaxe geral do "if" é a seguinte: 

if (condição) {
  // Bloco de código a ser executado se a condição for verdadeira
}

 A "condição" é uma expressão que deve ser avaliada como verdadeira ou falsa. Se a condição for verdadeira, o bloco de código dentro das chaves ({}) é executado. Caso contrário, o programa simplesmente ignora esse bloco e continua a execução do código após o "if".

O "else" é uma estrutura opcional que pode ser utilizada em conjunto com o "if". Ela permite executar um bloco de código alternativo quando a condição do "if" for falsa. A sintaxe geral do "if" seguido do "else" é a seguinte:


if (condição) {
  // Bloco de código a ser executado se a condição for verdadeira
} else {
  // Bloco de código a ser executado se a condição for falsa
}

 Se a condição do "if" for verdadeira, o bloco de código dentro do "if" é executado. Caso contrário, o bloco de código dentro do "else" é executado.


O "else if" é uma estrutura adicional que pode ser utilizada quando há necessidade de avaliar múltiplas condições. Ela permite especificar uma nova condição para ser avaliada caso a condição do "if" seja falsa. A sintaxe geral do "if", "else if" e "else" é a seguinte: 

if (condição1) {
  // Bloco de código a ser executado se a condição1 for verdadeira
} else if (condição2) {
  // Bloco de código a ser executado se a condição2 for verdadeira
} else {
  // Bloco de código a ser executado se todas as condições anteriores forem falsas
}

 Nessa estrutura, o programa verifica a primeira condição ("condição1"). Se ela for verdadeira, o bloco de código correspondente é executado e as demais condições são ignoradas. Caso a condição1 seja falsa, o programa verifica a próxima condição ("condição2"). Se a condição2 for verdadeira, o bloco de código correspondente é executado. Se nenhuma das condições anteriores for verdadeira, o bloco de código dentro do "else" é executado.

Essas estruturas condicionais são fundamentais para criar lógicas de decisão e controle de fluxo em programas, permitindo que o código execute diferentes ações com base nas condições avaliadas.
 */
