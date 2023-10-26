/**!SECTION
 * A principal utilidade do Promise.race é quando você deseja eecutar várias operações assíncronas
 * simultaniamente e obter o ersultado da primeira operação que for concluída.
 *
 * Isso é especialmente útil quando você tem num conjunto de promessas e está
 * interessado apenas no resultado da primeira a ser resolvida ou rejeitada, ignorando as demsis.
 */

const promise1 = new Promise((resolver, reject) => {
  setTimeout(() => {
    return resolver("Promise 1");
  }, 3000);
});

const promise2 = new Promise((resolver, reject) => {
  setTimeout(() => {
    return resolver("Promise 2");
  }, 4000);
});

const promise3 = new Promise((resolver, reject) => {
  setTimeout(() => {
    return reject("Promise 3");
  }, 1000);
});

promise1.then((res) => {
  console.log(res);
});

promise2.then((res) => {
  console.log(res);
});

promise3.then((res) => {
  console.log(res);
});

Promise.race([promise1, promise2, promise3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
