const pedidos = [
  {
    id: 420,
    nome: "Wesley ",
    alimento: "sanduba de bacon",
    bebida: "Suco de limão",
  },
  {
    id: 152,
    nome: "Luana ",
    alimento: "sanduba vegano",
    bebida: "Suco de laranja",
  },
  {
    id: 29,
    nome: "Adam ",
    alimento: "Petisco de frango",
    bebida: "Água",
  },
  {
    id: 33,
    nome: "zLey ",
    alimento: "Sandubão completo",
    bebida: "Refrigerante",
  },
  {
    id: 55,
    nome: "zé ",
    alimento: "Pizza",
    bebida: "Refrigerante",
  },
];

const findId = pedidos.find((Element, index) => {
  return Element.bebida === "Refrigerante";
});

console.log(findId); // find pega o primeiro elemento que ele encontrar
