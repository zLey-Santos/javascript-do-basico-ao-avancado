/**!SECTION
 * Promisess: as promises são objetos que representam a conclusão (ou FALHA)
 * de uma tarefa assíncrona. Elas fornecem uma sintaxe mais limpa e estruturada para
 * lidar com o código assíncrono, permitindo encadear chamadas e tratar erros de
 * forma mais eficientes.
 */

// Gerar um número inteiro aleatório entre 1 e 200 (inclusive)
const table = Math.floor(Math.random() * 200) + 1;

// Função que simula a preparação de um pedido
const onOrder = (order) => {
  return new Promise((resolve, reject) => {
    // Verificar se o pedido é "Qual quer coisa"
    if (order === "Qual quer coisa") {
      // Rejeitar a promessa e indicar que o pedido está em falta
      return reject(`O pedido da mesa:${table} ** [${order}] está em falta!`);
    }
    // Simular um atraso de 2 segundos (tempo para preparar o pedido)
    setTimeout(() => {
      // Resolver a promessa e indicar que o pedido está pronto
      resolve(`O pedido [${order}] da mesa:${table} está pronto!`);
    }, 2000);
  });
};

// Chamar a função onOrder com um pedido de "Bacalhau"
onOrder("Bacalhau")
  .then((resOrder) => {
    // Lidar com a promessa resolvida (pedido pronto)
    console.log(resOrder);
  })
  .catch((err) => {
    // Lidar com a promessa rejeitada (pedido em falta)
    console.log(err);
  })
  .finally(() => {
    // Lida quando todos os processos foram finalizado
    console.log(`Todos os pedidos da mesa:${table} foram entregues!`);
  });
