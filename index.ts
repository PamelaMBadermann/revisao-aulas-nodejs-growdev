console.log("teste de typescript");

let x: number = 10;
// console.log(x);

let texto: string;
texto = "meu texto";
// console.log(texto);

let meuBool: boolean;
meuBool = false;
// console.log(meuBool);

let meuArray: string[];
meuArray = ["teste", "dois"];
// console.log(meuArray);

let minhaTupla: [string, number];
// tupla é um array de vários tipos
minhaTupla = ["1", 1];
// console.log(minhaTupla);

let minhaTuplaDois: Array<number | string>;
minhaTuplaDois = [1, 2, 3, "teste", 1];
// console.log(minhaTuplaDois);

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

// console.log(SimNao.Sim);
// console.log(SimNao.Nao);
// console.log(SimNao.Talvez);
// console.log(SimNao.QuemSabe);

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
console.log(meuObjetoTipado);

interface Cliente {
  nome: string,
  idade: number
}

let MeuCliente: Cliente; 7
MeuCliente = {
  idade: 20,
  nome: "Pamela"
}