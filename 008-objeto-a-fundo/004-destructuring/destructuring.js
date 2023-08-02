// Declaração de um objeto chamado "tenis" com várias propriedades
const tenis = {
  tamanho: 38,
  estoque: true,
  marcas: [{ nome: "Nike" }, { nome: "Adidas" }],
  tipo: "Corrida",
};

// Verifica se a propriedade "estoque" do objeto "tenis" é verdadeira e atribui o resultado à variável "estoqueTenis"
const estoqueTenis = tenis.estoque === true ? "Disponível" : "Indisponível";

// Extrai o array "marcas" do objeto "tenis" e mapeia as marcas para seus respectivos nomes, unindo-os com vírgula
const marcasNomes = tenis.marcas.map((marca) => marca.nome).join(", ");

// Imprime as informações do objeto "tenis" formatadas
console.log(
  `Tipo:${tenis.tipo}, Número:${tenis.tamanho}, Estoque:${estoqueTenis}, Marca:${marcasNomes}`
);

// Declaração de um novo objeto chamado "tenisII" com várias propriedades
const tenisII = {
  tamanho: 40,
  estoque: true,
  marca: [{ nome: "Nike" }, { nome: "Adidas" }],
  secret: 12345,
  n: 5,
  link: { a: "a é = a", b: { z: "z é = z " } },
};

// Atribuição de objetos: aqui, estamos extraindo os valores das propriedades "a", "b" e "z" do objeto "link" no objeto "tenisII"
const {
  link: {
    a,
    b,
    b: { z },
  },
} = tenisII;

// Imprime os valores das variáveis "a", "z" e "b" extraídos do objeto "tenisII"
console.log(a, " e ", z, " e b é = ", b);

/* A atribuição de objetos (object assignment) é semelhante à desestruturação, mas a desestruturação é mais utilizada quando se deseja extrair propriedades para serem usadas em outras partes do código ou para renomear as propriedades. Já a atribuição de objetos, como utilizada no código, é uma forma de extrair valores específicos de propriedades profundas em um objeto de forma mais concisa. */
