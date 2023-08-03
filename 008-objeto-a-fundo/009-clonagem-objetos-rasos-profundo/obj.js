// Criação de um objeto chamado "tenis" com duas propriedades: "tamanho" e "estoque".
let tenis = {
  tamanho: 40,
  estoque: true,
};

// Criação de um objeto chamado "link" com uma propriedade "link" que contém um objeto aninhado com as propriedades "a" e "b".
let link = { link: { a: "A", b: { c: "C" } } };

// Definição de uma função chamada "cloneObject" que recebe um objeto (objc) como argumento e retorna um novo objeto criado através do parse e stringify do objeto original (uma forma de realizar uma cópia profunda).
let cloneObject = (objc) => {
  return JSON.parse(JSON.stringify(objc));
};

// Criação de uma variável "clone1" que recebe o resultado da chamada da função "cloneObject" passando o objeto "tenis" como argumento. Isso cria uma cópia profunda do objeto "tenis".
let clone1 = cloneObject(tenis);

// Exibe no console as informações do objeto "tenis" original e da sua cópia "clone1".
console.log(1, "tenis original", tenis);
console.log(2, "clone do obj... tenis", clone1);

// Mescla os objetos "tenis" e "link" criando uma nova variável "mesclar1" utilizando o método Object.assign() e passando como argumentos duas cópias profundas dos objetos "tenis" e "link". O resultado é um novo objeto que combina as propriedades de ambos.
let mesclar1 = Object.assign(cloneObject(tenis), cloneObject(link));

// Mescla os objetos "tenis" e "link" criando uma nova variável "mesclar2" utilizando o operador spread (espalhamento) {...}. Isso cria um novo objeto que contém todas as propriedades de "tenis" e "link".
let mesclar2 = {
  ...cloneObject(tenis),
  ...cloneObject(link),
};

// Modifica a propriedade "estoque" do objeto "clone1" para "false".
clone1.estoque = false;

// Modifica a propriedade "a" do objeto aninhado "link" no objeto "mesclar1" para "ABC".
mesclar1.link.a = "ABC";

// Exibe no console o objeto "mesclar1" e o objeto "mesclar2" após as modificações.
console.log(mesclar1);
console.log(mesclar2);

// let clone1 = JSON.parse(JSON.stringify(tenis));

// let mesclar1 = Object.assign(
//   JSON.parse(JSON.stringify(tenis)),
//   JSON.parse(JSON.stringify(link))
// );

// let mesclar2 = {
//   ...JSON.parse(JSON.stringify(tenis)),
//   ...JSON.parse(JSON.stringify(link)),
// };

clone1.estoque = false;
mesclar1.link.a = "ABC";

// console.log(3, "clone1 alterando o estoque p/ false ", clone1);
// console.log(4, "sem alteraçoẽs", tenis);
// console.log(5, "altera o link mesclando", mesclar1);
// console.log(6, "sem alteraçoes", mesclar2);

// let mesclar2 = { ...tenis, ...link }; // spreeds operator com destruturação
// let mesclar1 = Object.assign(tenis, link); // podemos mesclar unir dessa forma com assign() quer dizer junte esses valores

/* 
NOTA 

As linhas comentadas são versões alternativas do código usando diferentes métodos para clonar e mesclar os objetos. No entanto, a versão original com cloneObject utilizando JSON.parse e JSON.stringify é uma forma válida de criar cópias profundas de objetos simples, mas pode não funcionar corretamente para objetos contendo funções, propriedades não-enumeráveis ou referências circulares. Por isso, utilizar bibliotecas como lodash ou ramda é uma prática mais recomendada para tais situações.

*/
