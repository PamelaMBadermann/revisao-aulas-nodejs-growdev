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

interface Automovel {
  ligar(): void;
  desligar(): void;
  acelerar(): void;
  frear(): void;
  ligarArCondicionado(): void;
}

class Carro implements Automovel {
  public ligar(): void {
    console.log("ligando o carro");
    this.injetarGasolina();
  }

  private injetarGasolina(): void {
    console.log("injetando gasolina");
  }

  public desligar(): void {
    console.log("desligando carro");
  }

  public acelerar(): void {
    console.log("acelerando carro");
  }

  public frear(): void {
    console.log("freando carro");
  }

  public ligarArCondicionado(): void {
    console.log("ligando ar condicionado");
  }
}