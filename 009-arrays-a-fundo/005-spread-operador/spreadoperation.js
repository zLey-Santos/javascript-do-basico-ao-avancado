const num = [1, 2, 3, 4, 5];

console.log(...num); // spread sao os ... usado para mostrar um valor de um array de forma masi limpa
console.log(Math.max(1, 2, 3, 4, 5));
console.log(Math.max(num)); // NaN pois é um arrya e não um número
console.log(Math.max(...num)); // podemos usar o spread ... para buscar o maio valor dentro do arrya

// Math é usado para conceitos de matematica basica nesse caso mesclado com o Math.max busca o maior valor.
