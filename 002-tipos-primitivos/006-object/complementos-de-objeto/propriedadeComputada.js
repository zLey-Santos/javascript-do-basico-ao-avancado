/* 
Propriedades calculadas
Podemos usar colchetes em um objeto literal, ao criar um objeto. Isso é chamado de propriedades computadas .
*/

let fruit = prompt("Which fruit to buy? ", " apple");

let bag = {
  [fruit]: 5, // O nome da propriedade é retirado da variavel fruta
};

console.log(bag.fruit); // 5 if fruit='apple
