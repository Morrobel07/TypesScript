import * as promptsync from "prompt-sync";

const prompt = promptsync();


function imc (peso:number, altura:number):number {
    return peso / (altura * altura);
}


function main ():void {

const peso = parseFloat(prompt("ingrese su peso en kg: "))
const altura = parseFloat(prompt("ingrese su altura en pies: "))
 const resultado = imc(peso, altura)
 console.log(`el resultado del imc es : ${resultado}`);
}

main()