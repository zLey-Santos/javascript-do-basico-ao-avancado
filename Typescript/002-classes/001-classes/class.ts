/* 
    Uma classe Typescript é uma estrutura de prograação orientada a objetos
  que possui um conjunto de proppriedades e métodos.
  
    A classe é um modelo para criar objetos, permitindo que você  defina
  uma estrutura com propriedades e comportamentos.
*/

// Define a classe Pessoa (Person)
class Pessoa {
  nome: string; // Propriedade para armazenar o nome da pessoa (string)
  idade: number; // Propriedade para armazenar a idade da pessoa (number)

  // Construtor da classe Pessoa, que é executado quando uma nova instância é criada.
  constructor(nome: string, idade: number) {
    this.nome = nome; // Define o nome da pessoa com o valor passado como argumento.
    this.idade = idade; // Define a idade da pessoa com o valor passado como argumento.
  }
}

// Cria uma nova instância da classe Pessoa com o nome "zLey" e idade 31.
const pessoa1 = new Pessoa("zLey", 31);

// Exibe o nome e a idade da pessoa1 no console.
console.log(pessoa1.nome, pessoa1.idade);
