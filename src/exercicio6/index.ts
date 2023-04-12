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

class Funcionario extends Pessoa {
  public cargo: string;
  public salario: number;

  constructor(nome: string, idade: number, telefone: string, cargo: string, salario: number) {
    super(nome, idade, telefone);

    this.cargo = cargo;
    this.salario = salario;
  }

  aumentarSalario(aumento: number): void {
    this.salario = this.salario + aumento;

    console.log(this.salario);
  }

  trocarDeCargo(cargo: string): void {
    this.cargo = cargo;

    console.log(this.cargo);
  }
}

function admitirFuncionario() {
  const novoFuncionario = new Funcionario("pamela", 26, "51 99999-6666", "desenvolvedora jr.", 3000);

  novoFuncionario.aumentarSalario(1000)
  novoFuncionario.trocarDeCargo("desenvolvedora pl.");
}

admitirFuncionario();