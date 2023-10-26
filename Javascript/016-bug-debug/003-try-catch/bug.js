/**@abstract
 *try-catch é uma construção de controle de fulxo em várias linguagens de programação 
    incluindo javascript, que permite lidar com exeções de forma estruturadas.

    A contrução try-catch consiste em dois blolocos de código:
    o bloco try eo bloco catch.
 *
 */

const bugNum = () => {
  try {
    const number = "123"; // Declara a variável 'number' como uma string contendo "123".

    if (number === 123) {
      // Verifica se 'number' é estritamente igual a 123 (número inteiro).
      return "Seu Número é 123 - type Number "; // Retorna uma mensagem se a condição for verdadeira.
    }

    throw new Error("Deu ruim"); // Se a condição acima não for satisfeita, lança uma exceção com a mensagem "Deu ruim".
  } catch (error) {
    throw new Error(error); // Captura a exceção gerada no bloco 'try' e a lança novamente.
  }
};

console.log(bugNum()); // Chama a função 'bugNum' e imprime o resultado ou a exceção lançada.
console.log("Executado"); // Imprime a mensagem "Executado" após a chamada da função.
