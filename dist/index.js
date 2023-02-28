"use strict";
var x = 10;
var texto;
texto = "meu texto";
var meuBool;
meuBool = false;
var meuArray;
meuArray = ["teste", "dois"];
var minhaTupla;
/** tupla é um array de vários tipos */
minhaTupla = ["1", 1];
var minhaTuplaDois;
minhaTuplaDois = [1, 2, 3, "teste", 1];
var SimNao;
(function (SimNao) {
    SimNao[SimNao["Sim"] = 1] = "Sim";
    SimNao[SimNao["Nao"] = 2] = "Nao";
    SimNao[SimNao["Talvez"] = 3] = "Talvez";
    SimNao[SimNao["QuemSabe"] = 4] = "QuemSabe";
})(SimNao || (SimNao = {}));
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
var TipoCompra;
(function (TipoCompra) {
    TipoCompra["AVista"] = "A";
    TipoCompra["Parcelado"] = "P";
    TipoCompra["Agiota"] = "T";
})(TipoCompra || (TipoCompra = {}));
var meuObjeto;
meuObjeto = {
    nome: "pamela",
    idade: 26
};
var meuObjetoTipado;
meuObjetoTipado = {
    idade: 26,
    nome: "Pamela"
};
var meuCliente;
meuCliente = {
    idade: 20,
    nome: "Pamela",
    notas: [1, 2, 3]
};
function imprimeNomeAluno(nome, idade, idade2) {
    console.log("O nome \u00E9 ".concat(nome, ", ").concat(idade, " anos."));
}
/** Tipando o retorno da função */
function soma(x, y) {
    return x + y;
}
var minhaSoma = soma(10, 20);
/** Função que não retorna nada */
function imprimeAluno(aluno) {
    console.log(aluno.nome);
}
/** EXERCICIO 1 */
function calclaMediaAluno(notas, aluno, avaliar) {
    var soma;
    var media;
    soma = notas.reduce(function (total, nota) { return total += nota; });
    media = soma / 2;
    console.log("".concat(aluno, ", sua m\u00E9dia \u00E9 ").concat(media, "."));
    if (avaliar) {
        var avaliacaoDaMedia = void 0;
        avaliacaoDaMedia = media >= 7 ? "aprovado" : "reprovado";
        console.log("".concat(aluno, " ").concat(avaliacaoDaMedia, "."));
    }
    return media;
}
// calclaMediaAluno([7, 4], "Angus", false);
/** Function as type */
// Arrow function
var somaArrow = function (x, y) {
    return x + y;
};
var resultado = somaArrow(3, 5);
var minhaFunc;
minhaFunc: (function (nome) {
    return 1;
});
function calclaIndiceAluno(media, aluno) {
    if (aluno.notas) {
        media(aluno.notas);
    }
}
var minhaFuncMedia = function (notas) { return notas[0]; };
calclaIndiceAluno(minhaFuncMedia, meuCliente);
calclaIndiceAluno(function (notas) { return notas[1]; }, meuCliente);
/** EXERCICIO */
function mediaDeTres(a, b, c) {
    var soma;
    var media;
    soma = a + b + c;
    media = soma / 3;
    console.log(media);
    if (media >= 6) {
        console.log("APROVADA");
    }
    else {
        console.log("REPROVADA");
    }
    return media;
}
// mediaDeTres(7, 10, 8);
/** EXERCICIO INTERFACE */
var Cambio;
(function (Cambio) {
    Cambio["Manual"] = "A";
    Cambio["Automatico"] = "M";
})(Cambio || (Cambio = {}));
function detalharCarro(carro) {
    var cambio;
    var mensagemDetalhamentoCarro;
    cambio = detalhaCambio(carro);
    mensagemDetalhamentoCarro = "Carro ".concat(carro.modelo, " - ").concat(carro.marca, ", ano ").concat(carro.ano, ", c\u00E2mbio ").concat(cambio, ".");
    console.log(mensagemDetalhamentoCarro);
}
function detalhaCambio(carro) {
    var tipoDeCambio;
    if (carro.cambio === Cambio.Automatico) {
        tipoDeCambio = "automático";
    }
    else {
        tipoDeCambio = "manual";
    }
    return tipoDeCambio;
}
var exemploCarro = {
    marca: "Ford",
    modelo: "Fiesta",
    ano: 2013,
    cambio: Cambio.Automatico
};
// detalharCarro(exemploCarro);
/** EXERCÍCIO SINTAXES E VARIAVEIS */
for (var a = 2; a <= 20; a++) {
    // console.log(a);
}
for (var b = 10; b >= 0; b--) {
    // console.log(b);
}
for (var c = 1; c <= 10; c++) {
    // console.log(c * 7);
}
var meses;
meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
for (var mes in meses) {
    // console.log(meses[mes]);
}
var mesesAoContrario;
mesesAoContrario = meses.reverse();
for (var mes in meses) {
    // console.log(meses[mes]);
}
var notasDoAluno;
var quantidadeNotas;
notasDoAluno = [8, 9, 7, 8, 8];
quantidadeNotas = notasDoAluno.length;
var aptoCalcularMedia;
function calculaMediaAluno(notas) {
    var soma = notasDoAluno.reduce(function (acumulador, valorAtual, index) {
        var soma;
        soma = acumulador + valorAtual;
        if (index + 1 === quantidadeNotas) {
            aptoCalcularMedia = true;
        }
        else {
            aptoCalcularMedia = false;
        }
        return soma;
    });
    if (aptoCalcularMedia) {
        var media = void 0;
        media = soma / quantidadeNotas;
        console.log("A m\u00E9dia do aluno \u00E9 ".concat(media));
    }
}
// calculaMediaAluno(notasDoAluno);
var agregaAteDez = 0;
var somaAteDez = 0;
while (agregaAteDez < 10) {
    agregaAteDez++;
    somaAteDez += agregaAteDez;
    console.log(somaAteDez);
    if (agregaAteDez === 10) {
        console.log(somaAteDez);
    }
}
