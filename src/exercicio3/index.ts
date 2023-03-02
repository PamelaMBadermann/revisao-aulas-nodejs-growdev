class Caixa {
  entradas: Array<number>;
  saidas: Array<number>;

  constructor(entradas: Array<number>, saidas: Array<number>) {
    this.entradas = entradas;
    this.saidas = saidas;
  }

  realizarEntrada(entrada: number) {
    this.entradas.push(entrada);

    this.consultaSaldo()
  }

  realizarSaida(saida: number) {
    this.saidas.push(saida);

    this.consultaSaldo()
  }

  consultaSaldo(): number {
    let saldo: number;
    saldo = 0;

    let cashIn = this.entradas.reduce((acumulador, valorAtual) => acumulador += valorAtual);
    let cashOut = this.saidas.reduce((acumulador, valorAtual) => acumulador += valorAtual);

    saldo += cashIn;
    saldo -= cashOut;

    console.log(`Saldo: R$${saldo}`);

    return saldo;
  }
}

let inCash = [4, 5];
let outCash = [2, 1];
let novoCaixa = new Caixa(inCash, outCash);

novoCaixa.realizarEntrada(5);
novoCaixa.realizarSaida(2);

novoCaixa.realizarEntrada(10);
novoCaixa.realizarSaida(20);