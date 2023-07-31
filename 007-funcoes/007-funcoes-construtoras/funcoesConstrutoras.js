// Função construtora para criar uma pessoa com um nome e sobrenome
function Nome(nome, sobrenome) {
  // A palavra-chave 'this' se refere ao novo objeto que está sendo criado
  // 'nome' e 'sobrenome' são passados como parâmetros e atribuídos como propriedades do novo objeto
  this.nome = nome;

  // O método 'sobreNome' é atribuído como propriedade do objeto
  // Ele retorna o nome completo combinando o 'nome' e 'sobrenome' passados para o construtor
  this.sobreNome = () => {
    const nomeCompleto = `${this.nome} ${sobrenome}`;
    return nomeCompleto;
  };
}

// Criando um novo objeto 'Nome' com o nome "santos" e o sobrenome "oliver"
const zLey = new Nome("santos", "oliver");

// Chamando o método 'sobreNome' do objeto 'zLey', que retorna o nome completo e o imprime no console
console.log(zLey.sobreNome());

console.log("----------");

// Função construtora para criar uma calculadora simples
function Calculadora() {
  // A palavra-chave 'this' se refere ao novo objeto que está sendo criado

  // O método 'soma' é atribuído como propriedade do objeto
  // Ele recebe dois números como parâmetros e retorna a soma deles como uma string
  this.soma = (num1, num2) => {
    return `${num1 + num2}`;
  };

  // O método 'subtracao' é atribuído como propriedade do objeto
  // Ele recebe dois números como parâmetros e retorna a diferença entre eles como uma string
  this.subtracao = (num1, num2) => {
    return `${num1 - num2}`;
  };
}

// Criando um novo objeto 'Calculadora'
const somaCalculadora = new Calculadora();

// Chamando o método 'subtracao' do objeto 'somaCalculadora' com 5 e 2 como argumentos,
// que retorna o resultado da subtração (3) e o imprime no console
console.log(somaCalculadora.subtracao(5, 2));

// Chamando o método 'soma' do objeto 'somaCalculadora' com 2 e 5 como argumentos,
// que retorna o resultado da adição (7) e o imprime no console
console.log(somaCalculadora.soma(2, 5));
