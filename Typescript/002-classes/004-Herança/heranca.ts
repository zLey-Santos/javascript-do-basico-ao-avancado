/**
 * Public -     Pode ser acessados tanto pela mesma classe,
 *              classes filhas e outras calsses.
 * #####################################################################
 *
 * Protected -  Pode ser acessados pela mesma classe e classes filhas,
 *              não pode ser acessadas por outras classes.
 * #####################################################################
 *
 * Private -    Pode ser acessadas somente pela própria calsse.
 */

class Pessoa01 {
  protected nome: string = '';
  protected idade: number = 0;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  public comer(comida: string) {
    return `O ${this.nome} comeu ${comida}`;
  }

  public fezAniversario() {
    return `O ${this.nome} fez tantos anos ${++this.idade}`;
  }
}

class Ley extends Pessoa01 {
  private profissao: string = 'Programador';

  constructor() {
    super('Wesley', 32);
  }

  public getProfissao() {
    return `${this.nome} trabalha como ${this.profissao}`;
  }
}

const ley = new Ley();
console.log(ley.getProfissao());
