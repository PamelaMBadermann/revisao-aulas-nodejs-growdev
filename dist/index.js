"use strict";
console.log("teste de typescript");
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
var MeuCliente;
MeuCliente = {
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
/** EXERCICIO */
function calculaMediaAluno(nota1, nota2, aluno) {
    var notas;
    notas = [nota1, nota2];
    var soma = notas.reduce(function (total, nota) { return total += nota; });
    var media = soma / 2;
    var avaliacaoMedia;
    avaliacaoMedia = media >= 7 ? true : false;
    console.log("".concat(aluno, ", sua m\u00E9dia \u00E9 ").concat(media, "."));
    if (avaliacaoMedia) {
        console.log("".concat(aluno, " aprovado."));
    }
    else {
        console.log("".concat(aluno, " reprovado."));
    }
    return media;
}
calculaMediaAluno(8, 9, "Pamela");
