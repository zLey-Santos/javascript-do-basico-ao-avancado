//foreach

const myArrayObj = [
  { nome: "Wesley ", sobreNome: "Santos" },
  { nome: "Luana ", sobreNome: "Valentim" },
  { nome: "Adam ", sobreNome: "VAlentim" },
];

myArrayObj.forEach((item, index) => {
  if (item.nome === "Adam ") {
    return console.log("Vamos ao veterinaio hoje sem marcação previa");
  }
  console.log(index, item.nome);
});
