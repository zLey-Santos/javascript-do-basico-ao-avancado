// void representa uma função que nao retorna nada

let pedido01 = (msg: string): void => {
  console.log(msg);
};

pedido01("111"); // imprime no console apenas o que está no parâmetro

/**
 * O tipo void em TypeScript indica que uma função não retorna nenhum valor ou retorna undefined.
 * Isso significa que a função é usada apenas para realizar alguma ação e não para calcular ou produzir um valor que você deseja
 * capturar ou usar posteriormente.
 */
