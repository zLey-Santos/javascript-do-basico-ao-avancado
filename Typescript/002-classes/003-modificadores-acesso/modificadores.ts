/* 
  Public - Pode ser acessado tanto pela classe, 
          Classes filhas e outras classes.
###################################################################
Protect - Pode ser acessado pela mesma classe e classes filhas,
          não pode ser acessado por outras classes
###################################################################
Private - Pode ser acessado somente pela própria classe.                      
*/
// Atualmente, com JavaScript e TypeScript, ao adicionar o símbolo "#" antes de uma propriedade ou metódo, ela se torna privada por padrão. Isso reforça a encapsulação e a segurança dos dados no código.
class MinhaClasse {
  #propriedadePrivada: number = 1;
  #metodo() {
    return 1;
  }
}

class Pessoa2 {
  // Atributos privados - só podem ser acessados pela própria classe
  private nome: string = '';
  private idade: number = 0;

  private _profissao: string = 'Programador'; // O uso de _ Antes significa que se trata de um private

  // Construtor da classe
  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  // Método público - pode ser acessado de fora da classe
  public comer(comida: string) {
    return `${this.nome} comeu ${comida}`;
  }

  // Método protegido - pode ser acessado pela classe e suas subclasses
  protected fezAniversario() {
    return `O ${this.nome} fez tantos anos ${++this.idade}`;
  }
}

// Instanciando um objeto da classe Pessoa2
const pessoa3 = new Pessoa2('zLey', 31);

// Tentativa de chamar o método comer (público)
pessoa3.comer('algumaComida'); // Chamada correta do método comer

// Tentativa de chamar o método fezAniversario (protegido)
// Como estamos fora da classe e suas subclasses, isso não é permitido.
// pessoa3.fezAniversario(); // Esta linha geraria um erro.
