/**@abstract
 * Async-await: O async - await é uma forma mais recente legível de lidar
 * com terefas assíncronas em javascript.
 *
 * Essa abordagem ultiliza as palavras cheves async e await para indicar funções
 * assíncronas e pausar a execução até que uma Promise seja resolvida.
 */
const table = Math.floor(Math.random() * 30) + 1;

const onOrder = (order) => {
  return new Promise((resolver, reject) => {
    if (order === "pizza") {
      return reject(
        `[MESA:${table}] / Não temos [${order}] refaça seu pedido!`
      );
    }

    setTimeout(() => {
      resolver(`Mesa:[${table}], Pedido: [${order}]`);
    }, 3000);
  });
};

const takeOrder = async () => {
  try {
    console.log(await onOrder("ARROZ"));
    console.log(await onOrder("pizza"));
  } catch (error) {
    console.log(error);
  }
};
takeOrder();
