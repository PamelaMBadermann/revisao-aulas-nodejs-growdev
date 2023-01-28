console.log("teste de typescript");

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

let MeuCliente: Aluno;
MeuCliente = {
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

/** EXERCICIO */
function calculaMediaAluno(nota1: number, nota2: number, aluno: string): number {
  let notas: number[];
  notas = [nota1, nota2];

  let soma = notas.reduce((total: number, nota: number): number => total += nota);
  let media: number = soma / 2;
  let avaliacaoMedia: boolean;
  avaliacaoMedia = media >= 7 ? true : false;

  console.log(`${aluno}, sua média é ${media}.`)

  if (avaliacaoMedia) {
    console.log(`${aluno} aprovado.`);
  } else {
    console.log(`${aluno} reprovado.`);
  }

  return media;
}

calculaMediaAluno(8, 9, "Pamela");