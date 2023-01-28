"use strict";
console.log("teste de typescript");
var x = 10;
// console.log(x);
var texto;
texto = "meu texto";
// console.log(texto);
var meuBool;
meuBool = false;
// console.log(meuBool);
var meuArray;
meuArray = ["teste", "dois"];
// console.log(meuArray);
var minhaTupla;
// tupla é um array de vários tipos
minhaTupla = ["1", 1];
// console.log(minhaTupla);
var minhaTuplaDois;
minhaTuplaDois = [1, 2, 3, "teste", 1];
// console.log(minhaTuplaDois);
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
// console.log(SimNao.Sim);
// console.log(SimNao.Nao);
// console.log(SimNao.Talvez);
// console.log(SimNao.QuemSabe);
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
console.log(meuObjetoTipado);
var MeuCliente;
