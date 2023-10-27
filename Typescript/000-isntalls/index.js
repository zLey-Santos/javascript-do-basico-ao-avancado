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
var order = function (onOrder) {
    return "Deu bom no pedido ".concat(onOrder);
};
console.log(order("123"));
