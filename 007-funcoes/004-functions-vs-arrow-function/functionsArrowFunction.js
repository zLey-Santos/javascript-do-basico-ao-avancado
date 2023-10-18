/* 
1- Nome d efuncões 
2- Retorno
3- Não tem  hoisting pega todo declaração das funções e chama normal mesmo estando fora de ordem 
4- Arguments
*/

function nomeFunc() {
  return "Wesley Santos";
}

console.log(nomeFunc());

const nomeFuncArrow = () => {
  return "zLeyBr";
};
console.log(nomeFuncArrow());

const nomeFuncArrowRetorn = () => "Wesley O.Santos";
console.log(nomeFuncArrowRetorn());

/*

Não funciona 
const nomeFuncArrowArguments = () => {
  return arguments;
};
console.log(nomeFuncArrowArguments());

 */

function nomeFuncArrowArguments() {
  return arguments;
}

console.log(nomeFuncArrowArguments("Wes. O Santos"));

const nomeFuncArrowParams = (params) => params; // pode serpassado sem parentes porem é mais legivel com os parentes.

/* 
5- Não pode ser invocada com New
*/

function novaFunc() {
  return 123;
}
console.log(novaFunc());

/* 
6- Contexto

Arrow functions possuem this léxico  enquanto o modelo normal possiu this dinâmico.

Isso significa que arrow function herdam o contexto local de onde foi declarado, enquanto o modelo normal possui o
contexto associado ao objeto que ele está vonculado no momento da chamada

Se ele não estiver associado a ninguém na chamada, ele assumirá this automaticamente 
como o contexto global, que no caso dos navegadores é window
*/

const lanches = {
  cardapio: [
    { nome: "x-salada", preco: "R$ 25,00" },
    { nome: "x-santos", preco: "R$ 35,00" },
  ],
  meuPedidoFunc: function (select) {
    return console.log(this.cardapio[select]);
  },

  meuPedidoTimeOut: function () {
    setTimeout(
      function () {
        console.log(this);
        console.log(this.cardapio);
      }.bind(this),
      1000
    );
  },

  meuPedidoArrowFunc: (select) => {
    this.cardapio = [
      { nome: "x-milho", preco: "R$ 25,00" },
      { nome: "x-zLey", preco: "R$ 35,00" },
    ];
    return console.log(this.cardapio[select]);
  },
};

lanches.meuPedidoFunc(1);
lanches.meuPedidoArrowFunc(0);
lanches.meuPedidoTimeOut();

/* 
7- Constructor 
Arrow function não podem ser constructors, então não é possível usar o operador new como a mesma.

*/

class newFunc {
  constructor(nome) {
    this.nome = nome;
  }
}
const newNome = new newFunc("Santos_zLey");
console.log(newNome.nome);

/* O código é uma coleção de funções que demonstram alguns conceitos importantes em relação a declaração de funções em JavaScript, especificamente as diferenças entre funções tradicionais e arrow functions, e como o "bind" é usado para resolver o problema do contexto (valor de "this") em certas situações.

Aqui está a documentação detalhada do código:

        Função nomeFunc
        Descrição: Uma função regular que retorna uma string "Wesley Santos".
        Retorno: String "Wesley Santos".
        Hoisting: Não tem hoisting, pois foi declarada usando a declaração de função.
        Arguments: Não utiliza o objeto "arguments".

    Função nomeFuncArrow
        Descrição: Uma arrow function que retorna a string "zLeyBr".
        Retorno: String "zLeyBr".
        Hoisting: Não tem hoisting, pois foi declarada usando arrow function.
        Arguments: Não utiliza o objeto "arguments".

    Função nomeFuncArrowRetorn
        Descrição: Uma arrow function que retorna a string "Wesley O. Santos".
        Retorno: String "Wesley O. Santos".
        Hoisting: Não tem hoisting, pois foi declarada usando arrow function.
        Arguments: Não utiliza o objeto "arguments".

    Função nomeFuncArrowArguments
        Descrição: Uma função regular que retorna o objeto "arguments" (os argumentos passados para a função).
        Retorno: O objeto "arguments".
        Hoisting: Não tem hoisting, pois foi declarada usando a declaração de função.
        Arguments: Utiliza o objeto "arguments".

    Função nomeFuncArrowParams
        Descrição: Uma arrow function que retorna o parâmetro recebido.
        Retorno: O parâmetro recebido.
        Hoisting: Não tem hoisting, pois foi declarada usando arrow function.
        Arguments: Não utiliza o objeto "arguments".

    Contexto (this) em Arrow Functions e Funções Regulares
        O contexto (this) em arrow functions é léxico, o que significa que herda o contexto do escopo em que foi definido.
        O contexto (this) em funções regulares é dinâmico, o que significa que é definido pelo objeto que faz a chamada da função.

    Exemplo de Uso de Contexto (this)
        O objeto lanches contém três funções:
            meuPedidoFunc: Uma função regular que imprime um item específico do cardápio com base no índice passado.
            meuPedidoArrowFunc: Uma arrow function que altera o cardápio e imprime um item específico com base no índice passado.
            meuPedidoTimeOut: Uma função regular que utiliza setTimeout para imprimir o contexto (this) e o cardápio após um atraso de 1 segundo.
        A função meuPedidoTimeOut usa bind(this) para garantir que o contexto (this) dentro da função de callback setTimeout seja o mesmo contexto do objeto lanches.

    Não pode ser invocada com New
        Arrow functions não podem ser usadas como construtoras e, portanto, não podem ser invocadas com o operador new.

    Função newFunc
        Uma classe que possui um construtor que recebe um parâmetro nome e atribui esse valor à propriedade nome do objeto.

    Uso da Classe newFunc
        Um exemplo da classe newFunc sendo utilizada para criar uma instância do objeto com o nome "Santos_zLey" e imprimir o valor da propriedade nome.

Note que o exemplo com meuPedidoArrowFunc não demonstra a diferença de contexto (this) adequadamente, pois a arrow function não possui um contexto dinâmico como as funções regulares. Para uma comparação adequada, seria necessário usar uma função regular como callback de setTimeout. No exemplo atual, o this dentro da arrow function meuPedidoArrowFunc apontará para o contexto global (no caso de um navegador, será window). */
