// 1 - Chiedere all'utente quanti km deve percorrere
let km = prompt("Quanti chilometri vuoi percorrere?");

// 2 - Chiedere l'età del passeggero
let eta = prompt("Inserisci la tua età");

// 3.1 - Calcolore il prezzo del biglietto 
let prezzo = 0.21 * km;
console.log(prezzo);

// 3.2 - Applicazione sconto al biglietto in base all'età
if(eta < 18){
    let sconto = prezzo * 20 / 100;
    console.log(sconto);
    prezzo = prezzo - sconto;
    prezzo = prezzo.toFixed(2);
    console.log(`Il prezzo del biglietto è scontato per minorenni è pari a:  ${prezzo}`)
}

else if(eta > 65){
    let sconto = prezzo * 40 / 100;
    prezzo = prezzo - sconto;
    prezzo = prezzo.toFixed(2);
    console.log(`Il prezzo del biglietto è scontato per over 65 è pari a:  ${prezzo}`)
}

else{
    prezzo = prezzo.toFixed(2);
    console.log(`Il prezzo del biglietto è pari a :  ${prezzo}`);
}