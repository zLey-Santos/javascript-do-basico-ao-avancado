// temos varios tipo e maneira de armazenar dados vejamos alguns tipos
// var = é utilizada de forma gobla ( ps: um recurso menos utilizados pois pode criar bugs no código)
// let = é alterada dentro  do seu escopo maneira mais segura de se declarar uma variavel
// const = é uma constante ela não pode trocar o seu valor em nenhuma parte do código

var lestName = "santos";
let nome = "wesley";
const age = 31;

console.log(`Meu nome é ${nome} ${lestName} e eu tenho ${age} anos`);

lastName = 12; // sempre que desejar trocar o valor, sera possivel, porem apenas dentro do seu proprio escopo
console.log(lastName);

nome = true; // apenas pode ser trocada dentro do seu proprio escopo ( veremos mais a frente  )

/* age = "oĺa";
console.log(age); // retorna um erro TypeError: Assignment to constant variable. o seu valor não pode ser alterado apenas lido
 */
