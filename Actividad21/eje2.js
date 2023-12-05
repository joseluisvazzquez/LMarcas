var readline = require('readline');

var rl = readline.createInterface(process.stdin, process.stdout);
rl.question("Pasame una temperatura:", (num) => {
    rl.question("Esta en Farenheit(F) o Celsius(C). Escribe (F) o (C):", (temp) => {
        let c = (num - 32) * (5 / 9)
        let f = (num * 9 / 5) + 32
        if (temp == "F") {

            console.log("Tu temperatura de Farenheit a Celsius es:", c)
        } else {
            console.log("Tu temperatura de Celsius a Farenheit es:", f)
        }
        rl.close()
    });
});
