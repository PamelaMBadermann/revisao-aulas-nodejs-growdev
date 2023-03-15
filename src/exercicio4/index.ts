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

function run() {
  const dog = new Cachorro("doguinho", 10, "golden");
  const cat = new Gato("gatinho", 4, "sem raca");

  dog.emitirSom();
  cat.emitirSom();
}

// run();

interface Automovel {
  ligar(): void;
  desligar(): void;
  acelerar(): void;
  frear(): void;
  ligarArCondicionado(): void;
}

class Carro implements Automovel {
  public marca: string;
  public modelo: string;
  public potencia: number;
  public cor: string;
  public anos: number;

  constructor(marca: string, modelo: string, potencia: number, cor: string, anos: number) {
    this.marca = marca;
    this.modelo = modelo;
    this.potencia = potencia;
    this.cor = cor;
    this.anos = anos;
  }

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

class CarroEletrico implements Automovel {
  public ligar(): void {
    console.log("ligando o carro eletrico");
    this.injetarEnergiaNosComponentes();
  }

  private injetarEnergiaNosComponentes(): void {
    console.log("injetando energia nos componentes do carro");
  }

  public desligar(): void {
    console.log("desligando carro eletrico");
  }

  public acelerar(): void {
    console.log("acelerando carro eletrico");
  }

  public frear(): void {
    console.log("freando carro eletrico");
  }

  public ligarArCondicionado(): void {
    console.log("ligando ar condicionado");
  }
}

function ligarAutomovel(automovel: Automovel) {
  automovel.ligar();
}

function main() {
  const civic = new Carro("Honda", "Civic", 2.0, "Branco", 4);
  const tesla = new CarroEletrico();

  ligarAutomovel(civic);
  ligarAutomovel(tesla);
}

main();