let x: number = 10;

let texto: string;
texto = "meu texto";

let meuBool: boolean;
meuBool = false;

let meuArray: string[];
meuArray = ["teste", "dois"];

let minhaTupla: [string, number];

/** tupla é um array de vários tipos */
minhaTupla = ["1", 1];

let minhaTuplaDois: Array<number | string>;
minhaTuplaDois = [1, 2, 3, "teste", 1];

enum SimNao {
  Sim = 1,
  Nao,
  Talvez,
  QuemSabe,
}

/** DIFERENÇA ENTRE ENUM E INTERFACE

interface EnumSimNao {
  Sim: string,
  Nao: string
}

let f: EnumSimNao = {
  Sim: "A",
  Nao: "B"
}

*/

enum TipoCompra {
  AVista = "A",
  Parcelado = "P",
  Agiota = "T"
}

let meuObjeto: object;
meuObjeto = {
  nome: "pamela",
  idade: 26
}

let meuObjetoTipado: { nome: string, idade: number };
meuObjetoTipado = {
  idade: 26,
  nome: "Pamela"
}

interface Aluno {
  nome: string;
  idade: number;
  notas?: Array<number>;
}

interface AlunoDiferenciado extends Aluno {
  descricao: string
}

let meuCliente: Aluno;
meuCliente = {
  idade: 20,
  nome: "Pamela",
  notas: [1, 2, 3]
}

function imprimeNomeAluno(nome: any, idade?: number, idade2?: number) {
  console.log(`O nome é ${nome}, ${idade} anos.`);
}

/** Tipando o retorno da função */
function soma(x: number, y: number): number {
  return x + y;
}

let minhaSoma = soma(10, 20);

/** Função que não retorna nada */
function imprimeAluno(aluno: Aluno) {
  console.log(aluno.nome)
}

/** EXERCICIO 1 */
function calculaMediaAluno(notas: Array<number>, aluno: string, avaliar?: boolean): number {
  let soma: number;
  let media: number;

  soma = notas.reduce((total: number, nota: number): number => total += nota);
  media = soma / 2;

  console.log(`${aluno}, sua média é ${media}.`)

  if (avaliar) {
    let avaliacaoDaMedia: string;
    avaliacaoDaMedia = media >= 7 ? "aprovado" : "reprovado";

    console.log(`${aluno} ${avaliacaoDaMedia}.`);
  }

  return media;
}

// calculaMediaAluno([7, 4], "Angus", false);

/** Function as type */

// Arrow function
let somaArrow = function (x: number, y: number): number {
  return x + y;
};

let resultado = somaArrow(3, 5);

let minhaFunc: (nome: string) => number;
minhaFunc: (nome: string) => {
  return 1;
};

function calculaIndiceAluno(
  media: (notas: number[]) => number,
  aluno: Aluno
): void {
  if (aluno.notas) {
    media(aluno.notas);
  }
}

let minhaFuncMedia = (notas: number[]) => { return notas[0] };

calculaIndiceAluno(minhaFuncMedia, meuCliente);

calculaIndiceAluno((notas: number[]) => { return notas[1] }, meuCliente)

/** EXERCICIO */

function mediaDeTres(a: number, b: number, c: number) {
  let soma: number;
  let media: number;

  soma = a + b + c;
  media = soma / 3;

  console.log(media);

  if (media >= 6) {
    console.log("APROVADA")
  } else {
    console.log("REPROVADA")
  }

  return media;
}

// mediaDeTres(7, 10, 8);

/** EXERCICIO INTERFACE */

enum Cambio {
  Manual = "A",
  Automatico = "M"
}

interface Carro {
  marca: string,
  modelo: string,
  ano: number,
  cambio: string
}

function detalharCarro(carro: Carro) {
  let cambio: string;
  let mensagemDetalhamentoCarro: string;

  cambio = detalhaCambio(carro);
  mensagemDetalhamentoCarro = `Carro ${carro.modelo} - ${carro.marca}, ano ${carro.ano}, câmbio ${cambio}.`;

  console.log(mensagemDetalhamentoCarro);
}

function detalhaCambio(carro: Carro): string {
  let tipoDeCambio: string;

  if (carro.cambio === Cambio.Automatico) {
    tipoDeCambio = "automático"
  } else {
    tipoDeCambio = "manual"
  }

  return tipoDeCambio;
}

let exemploCarro = {
  marca: "Ford",
  modelo: "Fiesta",
  ano: 2013,
  cambio: Cambio.Automatico
}

detalharCarro(exemploCarro);