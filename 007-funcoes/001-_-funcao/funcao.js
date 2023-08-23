/* 
O que é uma função?
É um conjunto de instrução que executa uma tarefa ou calcula um valor.
*/

// 1- Functons declaretion

function isValidDeclaretion() {
  if (2 + 1 === 3) {
    return true;
  }
  return false;
}
console.log(isValidDeclaretion());

console.log("----------");
// 2- Functons expression

const isValidExpression = function () {
  if (9 < 5) {
    return "Valores verdadeiros";
  }
  return "valores falsos";
};

console.log(isValidExpression());
console.log("----------");

// 3- Arrow Function

const isValidArrow = () => {
  const multiplicador = 2 * 5;
  return multiplicador;
};

console.log(isValidArrow());
