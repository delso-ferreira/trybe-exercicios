
//Exercícios dia 04
 
 const a = 22
const b = 10
const c = 22



function sub (a, b) {
    return 'O número é igual a ' + (a - b)
}

function multi (a, b) {
    return 'O número é igual a ' + (a * b)
}

function divsion (a, b) {
    return 'O número é igual a ' + (a / b)
}

function module (a,b) {
    return 'O número é igual a ' + (a % b)
}

function bigNumber (a,b){
    if (a > b){
       return 'O maior número é igual a ' +  a
    }
    else if (a < b) {
        return 'O maior número é igual a ' + b
    }
    else {
        return bigNumber = 'os números são iguais'
    }
    
};
console.log(bigNumber(a,b))


//

function bigOfThree (a,b,c) {
    if (a > b && a > c) {
        return bigOfThree = 'O maior número é ' + a
    }
    else if (b > a && b > c) {
        return bigOfThree = 'O maior número é ' + b
    }
    else if (c > a && c > b) {
        return bigOfThree = 'O maior número é ' + c
    }
    else {
        return bigOfThree = 'Existem números iguais'
    }
}
console.log(bigOfThree(a,b,c));

//

function positiveNegative (number) {
    

    if (number > 0) {
        return 'O valor é positivo'
    }
    else if (number < 0){
        return 'O valor é negativo'
    }
    else {
        return 'O valor é zero'
    }
};

console.log(positiveNegative(-2))

//

function triangule (a,b,c){
    if (a + b + c === 180 && a + b + c > 0 )  {
        return 'É um triângulo válido' 
    }
    else if(a + b + c !== 0 ){
        return 'Não é um triângulo válido'
    }
    else {
        return 'Não é um triângulo'
    }
}
console.log(triangule(a,b,c)) 

//

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim',
  };
let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
}   ;
  
    for(let properties in info){
        if (properties === 'recorrente' && info[properties] === 'Sim' &&
        info2[properties] === 'Sim') {
               
        console.log('Nada aqui')
        }
        
        else {
        console.log(info[properties] + ' e ' + info2[properties])
        }
    }   ;
        
//

for (let key in info){
    console.log(key)
}

for (let key in info){
    console.log(info[key])
}
 
//

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

console.log('O livro favorito de ' + leitor.nome + '' + leitor.sobrenome + 'se chama ' + leitor.livrosFavoritos[0].titulo) ;

//

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };


leitor.livrosFavoritos.push( [
    {
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
  }
])
 
  console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos')







