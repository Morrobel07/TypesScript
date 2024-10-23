"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptsync = require("prompt-sync");
var prompt = promptsync();
function imc(peso, altura) {
    return peso / (altura * altura);
}
function main() {
    var peso = parseFloat(prompt("ingrese su peso en kg: "));
    var altura = parseFloat(prompt("ingrese su altura en pies: "));
    var resultado = imc(peso, altura);
    console.log("el resultado del imc es : ".concat(resultado));
}
main();
