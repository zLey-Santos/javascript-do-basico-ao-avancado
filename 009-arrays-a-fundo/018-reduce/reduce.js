const pedidos = [
  {
    id: 420,
    nome: "Wesley ",
    alimento: "sanduba de bacon",
    bebida: "Suco de limão",
    preco: 80,
  },
  {
    id: 152,
    nome: "Luana ",
    alimento: "sanduba vegano",
    bebida: "Suco de laranja",
    preco: 50,
  },
  {
    id: 29,
    nome: "Adam ",
    alimento: "Petisco de frango",
    bebida: "Água",
    preco: 35,
  },
  {
    id: 33,
    nome: "zLey ",
    alimento: "Sandubão completo",
    bebida: "Refrigerante",
    preco: 100,
  },
  {
    id: 55,
    nome: "zé ",
    alimento: "Pizza",
    bebida: "Refrigerante",
    preco: 85,
  },
];

const balanco = pedidos.reduce((total, element) => {
  return total + element.preco;
}, 0);

console.log(`R$${balanco} `); // A ideia é pegar todos os valores de um array e condensá-los em um só
