
function random(min, max){
    temp = Math.floor((Math.random() * (48 - 20 + 1))+ 20)
    console.log(`${temp}°C`);
    if(temp > 37 && temp < 40){
        console.log("Peligro! Temperatura elevada...")
    }
    if(temp <= 48 && temp > 44){
        clearInterval(ElIntervalo);
        console.log("La temperatura es muy elevada, reiniciando los sistemas...")
    }
}
ElIntervalo = setInterval(random, 1000) 
    