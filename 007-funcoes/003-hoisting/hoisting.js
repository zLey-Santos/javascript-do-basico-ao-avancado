/*
 O hoisting é um comportamento específico do JavaScript, onde declarações de variáveis e funções são movidas para o topo do escopo em que estão, durante a fase de compilação do código, antes da execução real do mesmo 
*/

/**
 * Função que demonstra o hoisting em JavaScript.
 */
function hoistingExemplo() {
  // Exemplo com variável
  console.log("Valor de x:", x); // Saída: Valor de x: undefined
  var x = 5;
  console.log("Valor de x após a atribuição:", x); // Saída: Valor de x após a atribuição: 5

  // Exemplo com função
  minhaFuncao(); // Saída: Sou uma função declarada antes de ser chamada!

  function minhaFuncao() {
    console.log("Sou uma função declarada antes de ser chamada!");
  }
}

// Chamando a função hoistingExemplo
hoistingExemplo();

/* 

    Na função hoistingExemplo, temos dois exemplos de hoisting: um com uma variável x e outro com uma função minhaFuncao.

    O primeiro exemplo de hoisting é com a variável x. Ao executar a primeira instrução console.log("Valor de x:", x);, a variável x é declarada usando a palavra-chave var, mas ainda não recebeu nenhum valor, então seu valor é undefined. Isso ocorre porque a declaração de var x é movida para o topo do escopo da função hoistingExemplo, mas a atribuição x = 5 continua na sua posição original. Por isso, o primeiro console.log exibe undefined.

    Em seguida, a variável x recebe o valor 5 com a atribuição var x = 5;, e o segundo console.log exibe o valor de x após a atribuição, que é 5.

    O segundo exemplo de hoisting é com a função minhaFuncao. Mesmo que a função minhaFuncao seja chamada antes de sua declaração, o JavaScript faz o hoisting e move a declaração da função para o topo do escopo da função hoistingExemplo. Isso permite que a função seja chamada antes da sua definição sem causar erros, e o console.log dentro da função é executado normalmente, exibindo a mensagem "Sou uma função declarada antes de ser chamada!".

*/
