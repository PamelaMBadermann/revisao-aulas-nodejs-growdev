abstract class Pessoa {
  public nome: string;
  public idade: number;
  public telefone: string;

  constructor(nome: string, idade: number, telefone: string) {
    this.nome = nome;
    this.idade = idade;
    this.telefone = telefone;
  }

  andar(): void {
    console.log(`${this.nome} andando`);
  }

  falar(): void {
    console.log(`${this.nome} falando`);
  }
}
