var readline = require('readline');

var rl = readline.createInterface(process.stdin, process.stdout);
rl.question("Escriba el nombre de usuario: ", (usuario) => {

    console.log(`Bienvenido de nuevo ${usuario} que tenga un buen dia!`);
    rl.close();
});