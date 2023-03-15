abstract class Animal {
  public nome: string;
  public idade: number;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  public emitirSom() {
    console.log("emitinsdo som genérico do animal");
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

  public emitirSom() {
    console.log("au au");
  }
}

class Gato extends Animal {
  public raca: string;

  constructor(nome: string, idade: number, raca: string) {
    super(nome, idade);
    this.raca = raca;
  }

  public emitirSom() {
    console.log("miau")
  }
}

function main() {
  const dog = new Cachorro("doguinho", 10, "golden");
  const cat = new Gato("gatinho", 4, "sem raca");

  dog.emitirSom();
  cat.emitirSom();
}

main();