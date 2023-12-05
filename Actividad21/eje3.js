var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

let numeros = [9,10,11,12,13,14,15,1,4,7,8,9,10];
let resultado = 0;
rl.question("Vamos a hacer una calculadora, esta calculadora puede sumar, hacer la mediana y encontrar el maximo de mi array. Que te gustaria hacer: sumar(1), mediana(2), maximo-minimo(3)\n", (resp) => {
    if(resp == 1){
      for(let i = 0; i < numeros.length; i++){
        resultado += numeros[i]; 
        let mediana = resultado/numeros.length
        }
        console.log("La suma de todos los numeros es: ",resultado)  
    }
    if(resp == 2){
        console.log("La mediana de nuestros numeros es: ", mediana)
    }
    rl.close()
})
rl.question()
 
