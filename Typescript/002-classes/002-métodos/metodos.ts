// Define a classe Pessoa1 (Person1 em inglês)
class Pessoa1 {
  nome: string; // Propriedade para armazenar o nome da pessoa (string)
  idade: number; // Propriedade para armazenar a idade da pessoa (number)

  // Construtor da classe Pessoa1, que é executado quando uma nova instância é criada.
  constructor(nome: string, idade: number) {
    this.nome = nome; // Define o nome da pessoa com o valor passado como argumento.
    this.idade = idade; // Define a idade da pessoa com o valor passado como argumento.
  }

  // Método para simular a ação de comer, que recebe um parâmetro 'comida'.
  comer(comida: string) {
    return `O ${this.nome} comeu ${comida}`; // Retorna uma string que descreve o ato de comer com o nome da pessoa e a comida.
  }

  // Método para simular o aniversário da pessoa e incrementar a idade.
  felizAniversario() {
    return `O ${this.nome} fez ${++this.idade} anos de idade`; // Retorna uma mensagem de aniversário com o nome da pessoa e a nova idade.
  }
}

// Cria uma nova instância da classe Pessoa1 com o nome "zLey" e idade 31.
const pessoa2 = new Pessoa1("zLey", 31);

// Chama o método "comer" da instância pessoa2 e exibe a mensagem resultante no console.
console.log(pessoa2.comer("Lazanha"));

// Chama o método "felizAniversario" da instância pessoa2, incrementando a idade, e exibe a mensagem de aniversário no console.
console.log(pessoa2.felizAniversario());
