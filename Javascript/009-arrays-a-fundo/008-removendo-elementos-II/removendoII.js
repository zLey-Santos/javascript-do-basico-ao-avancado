/* 
slice = pega dados dentro de um ranger sem quebrar a array
splice = remove os dados do array dentro de um ranger.
*/

let arr = [
  { nome: "Ley-0", tel: "(00) 999 999 999" },
  { nome: "Lua-1", tel: "(01) 888 888 888" },
  { nome: "Adam-2", tel: "(02) 777 777 777" },
  { nome: "mais-3", tel: "(03) 666 666 666" },
  { nome: "zé-4", tel: "(04) 555 555 555" },
];

console.log(arr);

//const newArray = arr.slice(0, 3);
console.log("Fui removido ", arr.splice(3, 1));

console.table(arr);
