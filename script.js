
// FUNZIONE CHE GENERA NUMERI CASUALI
function generateRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

// FUNZIONE PER VERIFICARE SE IL NUMERO è GIA PRESENTE NELL'ARRAY SE NON è PRESENTE LO AGGIUNGE
function uniqueRandomNumber(array, number) {

    let check = false

    while(check === false) {
        if(!array.includes(number)) {
        return true;
    }

        return false;

    }


}

// ARRAY VUOTO CONTENENTE NUMERI GENERATI E UNO CHE CONTIENE I NUMERI INSERITI DALL'UTENTE
let randomNumbers = [];
let userNumbers = [];

// CICLO FOR PER POPOLARE L'ARRAY DEI NUMERI CASUALI
for(let i=0; i<5; i++) {
    let number = generate
}