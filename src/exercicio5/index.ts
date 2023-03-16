class Pessoa {
  public nome: string;
  public idade: number;
  private cpf: string;
  public telefone: number;
  public altura: number;
  public peso: number;

  constructor(nome: string, idade: number, cpf: string, telefone: number, altura: number, peso: number) {
    this.nome = nome;
    this.idade = idade;
    this.cpf = cpf;
    this.telefone = telefone;
    this.altura = altura;
    this.peso = peso;
  }

  andar(): void {
    console.log("andando");
  }

  falar(): void {
    console.log("falando");
  }

  recuperarCPF(): string {
    return this.cpf;
  }

  comer(): void {
    this.peso + 0.1;
    this.pesar();

    console.log("comendo");
  }

  pesar(): number {
    return this.peso;
  }

  fazerAniversario(): void {
    this.idade++;

    console.log(`parabéns pra você, pelos seus ${this.idade} anos`);
  }
}