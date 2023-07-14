// let x recebe um valor com o sinal de atribuição = ou seja a recebe um valor pode ser string, number, boolean etc..
let x = 1;
let y = 2;

console.log(x); // retorna o valor que foi atribuido(=) para o x, ou seja x retorna 1
console.log(x + y); // retorna 3 por se tratar de uma soma entre x e y
//ao acessar a chave x e y o javascript interpreta que existem valores atribuido a eles como x = 1 e y =2

x += 1;
x = x + 1; // retorna 3
console.log(x); // nesse caso ele está fazendo x = x + 1 retornando 2 atribuindo um novo valor ao x fazendo x = 2

x -= 1;
console.log(y); // retorna 2 | sendo x antes valia 3 menos 1 agora vale 2

x *= 2;
console.log(x); // retorna 4

x /= 2;
console.log(x); // retorna 2

x %= 2;
console.log(x); // retona 0

// verificar agora o valor x e y
console.log(
  `valor de 'x' após todas as alterações é: ${x}, o valor de y  é: ${y}`
);

/* 
 variavel var,let e const servem para armazenar dados veremos afundo sobre tipos de variaveis mais a frente. 
 após declarar uma variavel nao é preciso sempre declarar com a palavra reservada let basta chamar pelo seu nome no casso é x 

= um simbulo de atribuição , 
+=, syntaxy de atribuição mais soma seria o mesmo que fazer x + y podemos fazer x += 2 retorna 3 
-=, *=,  a logica é a mesma para todos, mudando apenas o operador aritimetico  + , -, *, / , % 

*/
