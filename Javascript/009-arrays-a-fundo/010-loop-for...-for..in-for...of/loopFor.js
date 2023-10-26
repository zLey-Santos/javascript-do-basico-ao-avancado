// loop For
const myArray = [1, 2, 3, 4, 5, 6];

const myArrayObj = [
  { nome: "Wesley ", sobreNome: "Santos" },
  { nome: "Luana ", sobreNome: "Valentim" },
  { nome: "Adam ", sobreNome: "VAlentim" },
];

//for([inicialização]; [condição]; [expreção final])

// for...
/* for (let i = 0; i <= 10; i++) {
  console.log(i);
} */

/* for (let i = 0; i < myArrayObj.length; i++) {
  console.log(myArrayObj[i].nome, myArrayObj[i].sobreNome);
} */

//for...of podemos trabalhar com arrays
/* for (let item of myArrayObj) {
  console.log(item.nome, item.sobreNome);
}

for (let item of myArray) {
  console.log(item);
} */

//for...in usamos para trabalhar com objetos
const obj = { nome: "Wesley", sobreNome: "Santos" };
for (let item in obj) {
  console.log(item);
}
