// && (E) || (ou) ! (não)

console.log("true and true", 1 === 1 && 2 >= 1); // true, pois ambos os lados da expressão são verdadeiros
console.log("false and true", 1 === 1 && 2 !== 2); // false, pois um dos lados é verdadeiro e o outro é falso
console.log("false and false", 2 > 5 && 3 === "3"); // false

/*
Portanto, o operador lógico && retorna true apenas se ambos os lados da expressão forem verdadeiros.
Operador lógico (&&):
true && true = true
true && false = false
false && false = false
*/
console.log("-------------------------------------------");

console.log(1 === 1 || 2 !== 1); // true, o operador lógico (||) retorna true se pelo menos uma das verificações for verdadeira
console.log(1 > 3 || 4 !== 4); // false, pois ambos os lados da operação não satisfazem o operador ||
console.log(1 === 1 || 2 < 3); // true, pois ambos os valores são verdadeiros e o operador || verifica a primeira expressão

/*
Operador lógico (||):
Basta que um dos lados da expressão seja verdadeiro para satisfazê-lo e retornar true.
Caso ambos os lados da expressão sejam false, ele retorna false, pois não satisfaz o operador ||.
true || true = true
true || false = true
false || false = false.
*/
console.log("-------------------------------------------");
console.log(!true); // false, pois a expressão esperada é falsa
console.log(!false); // true, pois a expressão esperada é verdadeira

/*
Operador (!) negação:
Espera que a expressão seja false para retornar true.
Caso a expressão seja verdadeira, retorna false, indicando que a expressão não é false.
*/
