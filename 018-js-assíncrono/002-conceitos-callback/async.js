/**!SECTION
 *  O conceito de callbacks está relacionado à programação assíncrona, onde certas operações podem levar tempo a serem concluídas,
 *  como chamadas de API, manipulação de arquivos ou consultas de bancos de dados.
 *
 * Em vez de esperar que essas operações sejam concluídas antes de continuar
 * a execução do código, os callbacks permitem que o código continue a ser executados,
 * e qundo a operação assíncrona é finalizada, o callback é chamdo para lidar com o resultado.
 */

// Define uma função que será executada a cada 3000 milissegundos (3 segundos) usando setInterval.
setInterval(() => {
  myConsole();
}, 3000);

// Define uma função chamada myConsole que imprime uma mensagem no console.
const myConsole = () => {
  return console.log("Meu console funciona!");
};

// Imprime uma mensagem no console, que diz "Não parei!"
console.log("Não parei!");

// Define uma função chamada myCallback que recebe uma função como argumento (func).
const myCallback = (func) => {
  // Dentro de myCallback, a função passada como argumento (func) é executada e seu resultado é impresso no console.
  console.log("Valor:", func());
};

// Chama myCallback passando uma função anônima como argumento.
myCallback(() => {
  // A função anônima retorna o resultado da expressão 1 + 1, que é 2.
  return 1 + 1;
});
