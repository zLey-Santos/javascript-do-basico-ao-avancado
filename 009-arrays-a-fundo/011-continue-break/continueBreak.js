const myArrayObj = [
  { nome: "Wesley ", sobreNome: "Santos" },
  { nome: "Luana ", sobreNome: "Valentim" },
  { nome: "Adam0 ", sobreNome: "VAlentim" },
  { nome: "Adam1 ", sobreNome: "VAlentim" },
  { nome: "Adam2 ", sobreNome: "VAlentim" },
  { nome: "Adam3 ", sobreNome: "VAlentim" },
];

for (let item of myArrayObj) {
  if (item.nome === "Luana ") {
    console.log("Mozao esta te esperando");
    continue;
  }
  if (item.nome === "Adam1 ") {
    console.log("Levar no veterinario");
    break;
  }
  console.log(item);
}
