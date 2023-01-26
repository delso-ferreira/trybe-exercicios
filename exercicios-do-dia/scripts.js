 // Exercício 1

let fatorial = 0;

for (let index = 0; index <= 10; index += 1){
    fatorial = fatorial * index 
}
console.log(fatorial);

// Exercício 2

let word = 'tryber';

let novaPalavra = '';

for (let index = 5; index >= 0; index -= 1){
    novaPalavra += word[index]

}console.log(novaPalavra);

// Exercício 3

let arrayDePrimos = ['java', 'javascript', 'python', 'html', 'css'];

let maiorPalavra = arrayDePrimos[0]; 
let menorPalavra = arrayDePrimos [0];

for (let index = 0; index < arrayDePrimos.length; index += 1){
    
if (arrayDePrimos[index].length > maiorPalavra.length){
    maiorPalavra = arrayDePrimos[index];
    
}
else if (arrayDePrimos[index].length < menorPalavra.length){
    menorPalavra = arrayDePrimos[index];
}
}
    console.log(menorPalavra);
    console.log(maiorPalavra);

// Exercício 4


let maiorPrimo = 0;



for (let indexI = 2; indexI <= 50; indexI += 1) {
    let confirmaPrimo = true
    for (let indexJ = 2; indexJ < indexI; indexJ += 1) {
        if (indexI % indexJ === 0) {
            confirmaPrimo = false;
        }
    }
    if (confirmaPrimo) {
        maiorPrimo = indexI;
    }
}
console.log(maiorPrimo);




