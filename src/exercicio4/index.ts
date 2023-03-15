class Animal {
  public andar() {
    console.log('andando');
  }
}

class Cachorro {
  public nome: string;
  public idade: number;
  public raca: string;
  public animal: Animal;

  constructor(nome: string, idade: number, raca: string, animal: Animal) {
    this.nome = nome;
    this.idade = idade;
    this.raca = raca;
    this.animal = animal;
  }

  public andar() {
    this.animal.andar();
  }
}

function run() {
  const dog = new Cachorro("doguinho", 10, "golden", new Animal());

  console.log(dog.nome)
  console.log(dog.idade)
  console.log(dog.raca)
  dog.andar()
}

run();