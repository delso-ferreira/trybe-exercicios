// Percorrer o array e imprimir


let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for ( let index = 0; index < 10; index += 1){
    console.log(numbers[index]);
}
 
// Somar os valores e com console.log


let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

for ( let index = 0; index < numbers.length ; index += 1) { 
    sum += numbers[index];
    }
    console.log(sum); 


// Calcular média aritmética e imprimir + ou - 20


let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let average = 0;

for ( let index = 0; index < numbers.length ; index += 1) { 
    sum += numbers[index];
    }
    
    average = sum / numbers.length

    if (average > 20) {
        console.log('Valor maior que 20');    
    }
    else  {
        console.log('Valor menor ou igual a 20');
    } 

// Achar maior número

  let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
  
  let maiorNumero = numbers[0];

  for (index = 1; index < numbers.length; index += 1){
      if (numbers[index] > maiorNumero) {
          maiorNumero = numbers[index]
      }
  }
  console.log(maiorNumero);


//  Valores ímpares dentro do array

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
    
for (index = 0; index < numbers.length; index += 1){
    if (numbers[index] % 2 ) {
        console.log(numbers[index])
        
    }
    else {
        console.log('Nenhum valor ímpar encontrado');
    }
    }


// Achar menor número
 
 let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
 
 let menorNumero = numbers[0];

 for (index = 1; index < numbers.length; index += 1){
     if (numbers[index] < menorNumero) {
         menorNumero = numbers[index]
     }
 }
 console.log(menorNumero); 

 
// Divisão de elementos por 2

let numbers = [];

for (let index = 0; index <= 25; index += 1) {
    numbers.push(index);
}

for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index] / 2);
}


// Bubble sort

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (index = 1; index < numbers.length; index +=1){
    for(segundoIndex = 0; segundoIndex < index; segundoIndex +=1) {
        if (numbers[index] > numbers[segundoIndex]){
            let position = numbers[segundoIndex];
                numbers[index] = numbers[segundoIndex]
                position = numbers[index]


        }
    }
} console.log(numbers)

// Ordernar em ordem crescente e imprimir

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let novoArray= []

for (index  = 1; index < numbers.length ; index += 1){
    for (segundoIndex = 0; segundoIndex < index; segundoIndex += 1){
        if ( numbers[index] < numbers[segundoIndex]) {
            let position = numbers[index];
            numbers[index] = numbers[segundoIndex];
           numbers[segundoIndex] = position
        }
    }
}       
        for (novoArray = 0; novoArray < numbers.length; novoArray +=1){
            novoArray.push = (numbers[index] * numbers[index] + 1)
        }
            console.log(novoArray) 
            


   