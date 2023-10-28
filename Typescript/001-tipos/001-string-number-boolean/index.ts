// Declara uma variável 'pedido' do tipo string e atribui o valor "Pizza" a ela.
let pedido: string = "Pizza";
// Altera o valor da variável 'pedido' para "Queijo ".
pedido = "Queijo ";

// Declara uma variável 'mesa' do tipo number e atribui o valor 31 a ela.
let mesa: number = 31;
// Altera o valor da variável 'mesa' para 21.
mesa = 21;

// Imprime o valor das variáveis 'pedido' e 'mesa' no console.
console.log(pedido, mesa);

// Declara uma variável 'deuBom' do tipo boolean e atribui o valor 'false' a ela.
let deuBom: boolean = false;
// Altera o valor da variável 'deuBom' para 'true'.
deuBom = true;

// Imprime o valor da variável 'deuBom' no console.
console.log(deuBom);

// Declara uma função chamada 'fun' que recebe um parâmetro 'value' de tipo 'any' e retorna o mesmo valor recebido.

const fun = (value: any) => {
  return value;
};

console.log(fun("zLey")); // Chama a função 'fun' com a string "zLey" e imprime o valor retornado no console.
console.log(fun(31)); // Chama a função 'fun' com o número 31 e imprime o valor retornado no console.
console.log(fun(true)); // Chama a função 'fun' com o valor booleano 'true' e imprime o valor retornado no console.
