/**@abstract
 *    npm install -g typescript
 *    tsc --init
 *
 *  Plugins
 *    Code runer
 *    npm i -g ts-node
 *    ctrl + alt + n
 */

console.log("Olá, typescript");

const order = (onOrder: string) => {
  return `Deu bom no pedido ${onOrder}`;
};

console.log(order("123"));
