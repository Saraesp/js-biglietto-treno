
// 1 - Chiedere all'utente quanti km deve percorrere
let km = prompt("Quanti chilometri uoi percorrere?");

// 2 - Chiedere l'età del passeggero
let eta = prompt("Inserisci la tua età");

// 3.1 - Calcolore il prezzo del biglietto 
let prezzo = 0.21 * km;

// 3.2 - Applicazione sconto al biglietto in base all'età
if(età < 18){
    let sconto = prezzzo * 20 / 100;
    prezzo = prezzo - sconto;
    console.log("Il prezzo del biglietto è scontato per minorenni ed è pari a: " +prezzo)
}

else if(età > 65){
    let sconto = prezzzo * 40 / 100;
    prezzo = prezzo - sconto;
    console.log("Il prezzo del biglietto è scontato per over 65 ed è pari a: " +prezzo)
}

else{
    console.log("Il prezzo del biglietto è pari a : " +prezzo)
}