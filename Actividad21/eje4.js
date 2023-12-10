var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

let fs = require('fs');

rl.question("Digame el nombre de su archivo.txt: ",(arch) => {
    fs.readFile(arch,'utf-8',(err,data)=>{
        if(err){
            console.log("error: ", err)
        }else{
            console.log(data);
        }   
    })
    rl.close();
})





