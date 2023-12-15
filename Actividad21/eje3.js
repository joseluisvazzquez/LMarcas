var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
let numeros = [10,2,3,4,5,6,7,8,9];

total = 0;
min = numeros[0];
max = numeros[0];

 for(let i = 0; i <= numeros.length; i++){
    
        total +=i;

        if(max < numeros[i]){
            max = numeros[i];
        };
        if(min > numeros[i]){
            min = numeros[i];
        };
    }
        
rl.question("Vamos a sumar todos los numeros(1), sacar el maximo y el minimo(2) y hacer la media(3). Escoga:",(resp)=>{
    if(resp == 1){
        console.log("La suma total de todos los numeros es: ", total); 
    };
    if(resp == 2){
        console.log(`El minimo es = ${min} y el maximo es = ${max}`)
    }
    if(resp == 3){
        let media = total/numeros.length;
        console.log("La media de los numeros es: ",media);
    }
    rl.close(); 
})