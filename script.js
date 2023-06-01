
// FUNZIONE CHE GENERA NUMERI CASUALI
function generateRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

// FUNZIONE PER VERIFICARE SE IL NUMERO è GIA PRESENTE NELL'ARRAY. SE NON è PRESENTE LO AGGIUNGE
function uniqueRandomNumber(array, number) {

    let check = false

    while(check === false) {
        if(!array.includes(number)) {
           check = true;
    }

       

    }

    return true;


}

// FUNZIONE PER INSERIMENTO NUMERI UTENTE
function getUserNumbers() {
    let userNumbers = [];

    while(userNumbers.length < 5) {
        let number = parseInt(prompt('inserisci un numero'));

        if(!userNumbers.includes(number)) {
            userNumbers.push(number);
        }
    }

    return userNumbers
}

// ARRAY VUOTO CONTENENTE NUMERI GENERATI E UNO CHE CONTIENE I NUMERI INSERITI DALL'UTENTE
let randomNumbers = [];
let userNumbers = [];

// CICLO FOR PER POPOLARE L'ARRAY DEI NUMERI CASUALI
for(let i=0; i<5; i++) {
    let number = generateRandomNumber(1,50);

    if(uniqueRandomNumber(randomNumbers, number)) {
        randomNumbers.push(number);
    }
}

console.log(randomNumbers);
document.getElementById('random-numbers').innerHTML = randomNumbers;


// TIMER NASCONDI NUMERI
setTimeout(function() {
    document.getElementById('random-numbers').innerHTML = '';
    document.getElementById('message').innerHTML = 'inserire i numeri che ti ricordi';
}, 5000);


// richiamo alla funzione per inserimento numeri utente
setTimeout(function() {
    let userNumbers = getUserNumbers();
    let guessedNumbers = []; 
    let score = 0;
    
    for(let i=0; i<userNumbers.length; i++) {
        if(randomNumbers.includes(userNumbers[i])){
            guessedNumbers.push(userNumbers[i]);
            score++;
        }
    }

    document.getElementById('message').innerHTML = `Hai indovinato ${score} numeri. ecco quelli insovinati: ${guessedNumbers}`;
  
}, 6000);