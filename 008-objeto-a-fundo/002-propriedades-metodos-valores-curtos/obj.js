// Definindo uma função 'tenis' que recebe três parâmetros: tamnaho (tamanho), estoque e preco
function tenis(tamnaho, estoque, preco) {
  // A função retorna um objeto com as propriedades tamnaho, estoque e preco, usando a sintaxe de object shorthand.
  // As propriedades do objeto recebem os valores dos parâmetros correspondentes.
  return {
    tamnaho,
    estoque,
    preco,
  };
}

// Atribuindo a propriedade 'estoque' ao objeto 'tenis' criado pela função.
tenis.estoque = true;

// Atribuindo a propriedade 'tamnaho' ao objeto 'tenis' criado pela função.
tenis.tamnaho = [38, 39, 40];

// Atribuindo a propriedade 'preco' ao objeto 'tenis' criado pela função.
tenis.preco = `${129}€`;

// Criando uma variável 'estoque' com base no valor da propriedade 'estoque' do objeto 'tenis'.
// Se 'estoque' for verdadeiro (true), atribui a string "Disponivel"; caso contrário, atribui "Indisponivel".
let estoque = tenis.estoque === true ? "Disponivel" : "Indisponivel";

// Imprimindo o objeto criado pela função 'tenis', passando os valores das propriedades tamnaho, estoque e preco como argumentos.
console.log(tenis(tenis.tamnaho, estoque, tenis.preco));

console.log("_______________________________________");

// Definindo um objeto 'tenisII' com dois métodos: getTamanho e getEstoque
const tenisII = {
  // Método getTamanho retorna o valor 39
  getTamanho() {
    return 39;
  },
  // Método getEstoque retorna o valor false
  getEstoque() {
    return false;
  },
};

// Criando uma variável 'stoc' com base no valor retornado pelo método 'getEstoque' do objeto 'tenisII'.
// Se o valor retornado for verdadeiro (true), atribui a string "Dispo... "; caso contrário, atribui " Indsp...".
const stoc = tenisII.getEstoque() === true ? "Dispo... " : " Indsp...";

// Imprimindo o valor retornado pelo método 'getTamanho' do objeto 'tenisII' e o valor da variável 'stoc'.
console.log("Estoque:", stoc, "Número:", tenisII.getTamanho());
