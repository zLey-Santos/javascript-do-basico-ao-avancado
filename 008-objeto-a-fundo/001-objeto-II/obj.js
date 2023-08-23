// Object representing a pair of shoes
let Tenis = {
  tipo: "Tenis de corrida", // Type of the shoes
  cardaco: "G", // Size or characteristic of the shoes

  estoque: true, // Availability status: true for available, false for unavailable

  tamanho: {
    palmiha: 39, // Size of the shoes in palmiha unit
    numero: 40, // Size of the shoes as a number

    caixa: {
      largura: 35, // Width of the shoe box
      altura: 40, // Height of the shoe box
      profundidade: 15, // Depth of the shoe box
    },
  },

  marcaArrValores: ["Nike", "Addidas", "Vans"], // Array of shoe brand names as string values

  marcaArrObj: [{ nome: "Nike" }, { nome: "Addidas" }, { nome: "Vans" }], // Array of shoe brand objects

  getMarcaArrValores: function (param) {
    return this.marcaArrObj[param];
  },

  getMarcaArrObj: function (param) {
    return this.marcaArrObj[param].nome;
  },
};

// Check if the 'estoque' is true, if not, set it to "Indisponivel", otherwise set it to "Disponivel"
const estoque =
  Tenis.estoque !== true
    ? (Tenis.estoque = "Indisponivel")
    : (Tenis.estoque = "Disponivel");

console.log(Tenis.estoque); // Log the availability status of the shoes
console.log(Tenis); //
console.log(Tenis.cardaco); //
