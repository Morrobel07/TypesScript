
import * as  promptSync from 'prompt-sync';

const prompt = promptSync();
console.log("################################################################");
console.log("ingrese los numeros de cuales desea recibir la tabla de 1 al 10 ");
let tabla = prompt("separe cada numero con un espacio: ")
const arrayTabla: number[] = tabla.split(" ").map(Number);




//console.log(arrayTabla)

if (arrayTabla.length > 4 && arrayTabla.length > 10){

    arrayTabla.forEach(element => {
    
    
        for (let i = 1; i <=10 ; i++){
            console.log(`${element} x ${i} = ${element * i}`);
        
          
        }
        console.log("");

    });
} else{

      console.log("Error. debe ingresar una cantidad minima de 4 numeros y un maximo de 10 ");
  }
 
