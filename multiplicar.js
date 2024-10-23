"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
console.log("################################################################");
console.log("ingrese los numeros de cuales desea recibir la tabla de 1 al 10 ");
var tabla = prompt("separe cada numero con un espacio: ");
var arrayTabla = tabla.split(" ").map(Number);
//console.log(arrayTabla)
if (arrayTabla.length > 4 && arrayTabla.length > 10) {
    arrayTabla.forEach(function (element) {
        for (var i = 1; i <= 10; i++) {
            console.log("".concat(element, " x ").concat(i, " = ").concat(element * i));
        }
        console.log("");
    });
}
else {
    console.log("Error. debe ingresar una cantidad minima de 4 numeros y un maximo de 10 ");
}
