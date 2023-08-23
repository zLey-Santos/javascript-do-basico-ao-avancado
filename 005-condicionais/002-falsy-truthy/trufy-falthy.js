let hora = 19;

if (hora >= 4 && hora < 12) {
  console.log("Bom dia!"); // Executa se o valor de i for maior ou igual a 4 e menor que 12
} else if (hora > 12 && hora < 18) {
  console.log("Boa tarde!"); // Executa se o valor de i for maior que 12 e menor que 18
} else {
  console.log("Boa noite!"); // Executa se todas as condições anteriores forem falsas.
}

if (!null) {
  console.log("falsy or false"); // Executa se a negação de null for verdadeira (null é um valor falsy)
}

if (1 + 1 === 2) {
  console.log("true"); // Executa se a soma de 1 + 1 for igual a 2 (a condição é verdadeira)
}

/* 
A expressão hora >= 4 && hora < 12 verifica se o valor de hora é maior ou igual a 4 e ao mesmo tempo menor que 12. Se essa condição for verdadeira, o código dentro desse bloco será executado e imprimirá "Bom dia!" no console. Caso contrário, a próxima condição é verificada.

A expressão hora > 12 && hora < 18 verifica se o valor de hora é maior que 12 e ao mesmo tempo menor que 18. Se essa condição for verdadeira, o código dentro desse bloco será executado e imprimirá "Boa tarde!" no console. Caso contrário, se nenhuma das condições anteriores for verdadeira, o bloco do else é executado e imprime "Boa noite!" no console.

O bloco seguinte, if (!null), verifica se a negação de null é verdadeira. Como null é um valor falsy (juntamente com false, 0, "", NaN e undefined), a negação !null é verdadeira. Portanto, o código dentro desse bloco é executado e imprime "falsy or false" no console.

Por fim, o último bloco if (1 + 1 === 2) verifica se a soma de 1 + 1 é igual a 2. Essa condição é verdadeira, portanto, o código dentro desse bloco é executado e imprime "true" no console. 
*/
