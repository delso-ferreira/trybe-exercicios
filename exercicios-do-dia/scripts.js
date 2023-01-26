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

let array = ['java', 'javascript', 'python', 'html', 'css'];

let maiorPalavra = array[0]; 
let menorPalavra = array [0];

for (let index = 0; index < array.length; index += 1){
    
if (array[index].length > maiorPalavra.length){
    maiorPalavra = array[index];
    
}
else if (array[index].length < menorPalavra.length){
    menorPalavra = array[index];
}
}
    console.log(menorPalavra);
    console.log(maiorPalavra);