// Percorrer o array com a função console.log
/* 
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for ( let index = 0; index < 10; index += 1){
    console.log(numbers[index]);
}
 */
// Somar os valores e com console.log


/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

for ( let index = 0; index < numbers.length ; index += 1) { 
    sum += numbers[index];
    }
    console.log(sum); */

// calcular média aritmética e console com valor maior ou menor que 20

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let average = 0;

for ( let index = 0; index < numbers.length ; index += 1) { 
    soma += numbers[index];
    }
    
    average = soma / numbers.length

    if (average > 20); {
        console.log('Valor maior que 20');    
    }
    else (average <= 20); {
        console.log('Valor menor ou igual a 20');
    }
    
 
    
