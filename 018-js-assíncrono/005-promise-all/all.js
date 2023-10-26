// Generate a random table number between 1 and 30
const table = Math.floor(Math.random() * 30) + 1;

// Define a function 'onOrder' that returns a Promise
const onOrder = (order) => {
  return new Promise((resolve, reject) => {
    // Check if the order is 'Pizza'. If it is, reject the Promise.
    if (order === "Pizza") {
      return reject(
        `[MESA:${table}] / Não temos [${order}] refaça seu pedido!`
      );
    }

    // Simulate an asynchronous operation with a 3-second delay and resolve the Promise.
    setTimeout(() => {
      resolve(`Mesa:[${table}], Pedido: [${order}]`);
    }, 3000);
  });
};

// Create an array of Promises for three different orders
const orderPromises = [onOrder("Arroz"), onOrder("Feijão"), onOrder("Pizza")];

// Use Promise.all to wait for all Promises to be resolved or rejected
Promise.all(orderPromises)
  .then((resOrder) => {
    // If all Promises are resolved, 'resOrder' will be an array of their results.
    // Log the results for the first two orders.
    console.log(resOrder[0]);
    console.log(resOrder[1]);
  })
  .catch((error) => {
    // If any Promise is rejected, the catch block will handle the error.
    console.log(error);
  });

/**!SECTIONs
  Promise.allé usado para esperar que todas as promessas na matriz sejam resolvidas ou rejeitadas. Se todas as promessas forem resolvidas, o thenbloco será executado e os resultados dos dois primeiros pedidos serão registrados. Se alguma promessa for rejeitada, o catchbloco será executado e a mensagem de erro será registrada.
  */
