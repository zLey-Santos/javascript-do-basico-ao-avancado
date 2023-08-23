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
    bebida: "Coca-cola",
  },
  {
    id: 55,
    nome: "zé ",
    alimento: "Pizza",
    bebida: "guaraná",
  },
];

/**
 * O método Map slém de iterar todo array ele é muito bom para editar o inteado
 * **/

pedidos.map((Element, index) => {
  if (Element.id === 29) {
    return (Element.alimento = "Kibe");
  }
});
console.log(pedidos);
