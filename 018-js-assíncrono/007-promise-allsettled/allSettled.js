/**
  "A função Promise.allSettled é usada em JavaScript para lidar com várias promessas de forma assíncrona e obter o resultado de todas as promessas, independentemente de serem resolvidas ou rejeitadas.

  Ela retorna uma nova promessa que é resolvida com um array de objetos que descrevem o resultado de cada promessa.

  APromise.allSettled é quando você deseja aguardar a conclusão de um conjunto de promessas e obter informações sobre todas elas, mesmo que algumas tenham sido rejeitadas.

  diferentePromise.all,Promise.allSettled aguardará a conclusão de todas as promessas, independentemente do resultado. Isso torna o Promise.allSettled uma escolha útil quando você precisa processar todas as promessas, mesmo se algumas delas falharem, e coletar informações detalhadas sobre cada uma delas, como status e valor (no caso de sucesso) ou motivo (no caso de rejeição)."
 */

// Criação de uma promessa chamada promise1 que será resolvida com "promise 1" após um atraso de 3 segundos
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    return resolve("promise 1");
  }, 3000);
});

// Criação de uma promessa chamada promise2 que será resolvida com "promise 2" após um atraso de 4 segundos
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    return resolve("promise 2");
  }, 4000);
});

// Criação de uma promessa chamada promise3 que será rejeitada com "promise 3" após um atraso de 1 segundo
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    return reject("promise 3");
  }, 1000);
});

// Utiliza Promise.allSettled para esperar que todas as promessas sejam concluídas, independentemente de sucesso ou falha
Promise.allSettled([promise1, promise2, promise3]).then((resAllSettled) => {
  // Itera sobre os resultados de todas as promessas usando forEach
  resAllSettled.forEach((item) => {
    // Verifica o status de cada promessa (fulfilled ou rejected) e exibe informações apropriadas
    if (item.status === "fulfilled") {
      console.log(item.value, "_[Fulfilled]");
    } else if (item.status === "rejected") {
      console.log(item.reason, "**[Rejected]");
    }
  });
});
