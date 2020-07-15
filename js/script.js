// Palidroma
// Chiedere all'utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma


// 1 Chiedere la parola
// 2 Memorizzarla in una variabile stringa
// 3 trovare la parola letta al contrario
// 4 Confrontare le stringhe visualizzando il risultato
// 5 Creare la funzione

// ***CHIEDERE LA PAROLA E MEMORIZZARLA
var parola = prompt("inserisci una parola");


// ***TROVARRE LA PAROLA LETTA AL CONTRARIO

// var parolaZ = "";
// for (var i = parola.length - 1; i >= 0; i--) {
//     parolaZ += parola[i];
//     console.log(parolaZ);
// }


// ***CONFRONTARE LE STRINGHE VISUALIZZANDO IL RISULTATO

// if (parola == parolaZ) {
//     console.log("palindromo");
// } else {
//     console.log("non palindromo");
// }

document.getElementById('esercizio').innerHTML = parola + risultato(parola);


// ***CREARE LA FUNZIONE

function risultato(palindroma){
    var parolaZ = "";
    for (var i = palindroma.length - 1; i >= 0; i--) {
        parolaZ += palindroma[i];
    }
    if (palindroma == parolaZ) {
        return " è palindroma ";
    } else {
        return " non è palindroma ";
    }
}

// !!!!!!! RICORDARSI DI NON METTERE SPAZI NELLE VARIABILI CON STRINGHE VUOTE, ALTRIMENTI NON SONO VUOTE
//         E FINISCE CHE SBATTI LA TESTA CONTRO IL MURO... ANCORA!!!!!!!
