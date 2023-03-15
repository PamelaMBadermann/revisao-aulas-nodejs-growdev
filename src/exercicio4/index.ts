class Animal {
  public nome: string;
  public idade: number;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  public andar() {
    console.log('andando');
  }
}

class Cachorro extends Animal {
  public raca: string;

  constructor(nome: string, idade: number, raca: string) {
    super(nome, idade);
    this.raca = raca;
  }
}

function run() {
  const dog = new Cachorro("doguinho", 10, "golden");

  console.log(dog.nome)
  console.log(dog.idade)
  console.log(dog.raca)
  dog.andar()
}

run();