/**!SECTION
 * A principal utilidade do Promise.race é quando você deseja eecutar várias operações assíncronas
 * simultaniamente e obter o ersultado da primeira operação que for concluída.
 *
 * Isso é especialmente útil quando você tem num conjunto de promessas e está
 * interessado apenas no resultado da primeira a ser resolvida ou rejeitada, ignorando as demsis.
 */

// Criando uma Promise chamada promise1 que resolve com "Promise 1" após um atraso de 3 segundos
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    return resolve("Promise 1");
  }, 3000);
});

// Criando uma Promise chamada promise2 que resolve com "Promise 2" após um atraso de 4 segundos
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    return resolve("Promise 2");
  }, 4000);
});

// Criando uma Promise chamada promise3 que rejeita com "Promise 3" após um atraso de 1 segundo
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    return reject("Promise 3");
  }, 1000);
});

// Quando promise1 é resolvida, imprime o resultado no console
promise1.then((res) => {
  console.log(res);
});

// Quando promise2 é resolvida, imprime o resultado no console
promise2.then((res) => {
  console.log(res);
});

// Quando promise3 é rejeitada, imprime o erro no console
promise3.catch((err) => {
  console.log(err);
});

// Utilizando Promise.race para determinar a primeira Promise que é resolvida ou rejeitada
Promise.race([promise1, promise2, promise3])
  .then((res) => {
    console.log("A primeira Promise resolvida foi: " + res);
  })
  .catch((err) => {
    console.log("A primeira Promise rejeitada foi: " + err);
  });
