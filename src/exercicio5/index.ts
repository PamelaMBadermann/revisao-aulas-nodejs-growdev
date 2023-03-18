class Pessoa {
  public nome: string;
  public idade: number;
  private cpf: string;
  public telefone: string;
  public altura: number;
  public peso: number;

  constructor(nome: string, idade: number, cpf: string, telefone: string, altura: number, peso: number) {
    this.nome = nome;
    this.idade = idade;
    this.cpf = cpf;
    this.telefone = telefone;
    this.altura = altura;
    this.peso = peso;
  }

  andar(): void {
    console.log(`${this.nome} andando`);
  }

  falar(): void {
    console.log(`${this.nome} falando`);
  }

  recuperarCPF(): string {
    console.log(`seu cpf é ${this.cpf}`);

    return this.cpf;
  }

  comer(): void {
    this.peso = this.peso + 0.2;

    console.log(`${this.nome} comendo, agora com ${this.peso.toFixed(2)} kg`);
  }

  fazerAniversario(): void {
    this.idade++;

    console.log(`parabéns ${this.nome}, pelos seus ${this.idade} anos`);
  }
}

const pami = new Pessoa("Pamela", 26, "666.666.666-66", "51 9 9999-9999", 1.57, 49);
pami.andar();
pami.falar();
pami.recuperarCPF();
pami.comer();
pami.comer();
pami.comer();
pami.fazerAniversario();

class Funcionario extends Pessoa {

}