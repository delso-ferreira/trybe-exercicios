// Exercício 1

//Alterar variáveis para respeitar o escopo local

function imprimeIdade() {
    for (var idade = 30; idade <= 40; idade += 1) {
      console.log('Idade dentro do for:', idade)
    }
    console.log('Idade fora do for:', idade)
  }
  imprimeIdade()

// Solução Exercício 1

function imprimeIdade() {
    for (let idade = 30; idade <= 40; idade += 1) {
      console.log('Idade dentro do for:', idade)
    }
    
  }
  imprimeIdade()

  // Exercício 2

  //Alterar valor das propriedades respeitando o const
  
  // Executando esse código iremos receber um erro `TypeError: Assignment to constant variable.`
   const pessoa = {
    nome: 'Henri',
    idade: 20
  }
  pessoa = {
    nome: 'Luna',
    idade: 19
  } // Altere essa estrutura para corrigir o erro.
  console.log('Nome:', pessoa.nome + ' e ' + pessoa1.nome);
  console.log('Idade:', pessoa.idade + ' e ' + pessoa1.idade); */
  
  // Solução Exercício 2

  const pessoa = {
    nome: 'Henri',
    idade: 20
  }
  pessoa.nome = 'Luna'
  pessoa.idade = 19

  console.log('Nome:', pessoa.nome + ' tem ' + pessoa.idade + ' anos de Idade') */
  
  // Exercício 3
  
  // Colocar a variável sem erro

   const favoriteFood = 'Lasanha';
  favoriteFood = 'Hamburguer';
  console.log(favoriteFood);

  // Solução Exercício 3

  const favoriteFood = 'Lasanha';
  const favoriteFood2 = 'Hamburguer';
  console.log(favoriteFood);
  console.log(favoriteFood2)  

  // Exercício 4

  // Usar template literals

  const name = 'Adriana';
  const lastName = 'Soares';
  console.log('Olá' + ',' + name + ' ' + lastName + '!');
  function soma(a,b) {
    let resultado = a + b;
    return resultado;
  }
  let a = 3;
  let b = 5;
  console.log('O resultado da soma de ' + a + ' + ' + b + ' é: ' + soma(a,b)); 

  // Solução exercício 4

  const name = 'Adriana';
  const lastName = 'Soares';
  console.log(`Olá ${name} ${lastName}`)
  
  function soma(a,b) {
    let resultado = a + b;
    return resultado;
  }
  let a = 3;
  let b = 5;
  console.log(`O resultado da soma de ${a} + ${b} é ${soma(a,b)}`)

  // Exercício 5

  // Colocar em arrow functions
 
  function numeroAleatorio() {
    return Math.random()
  }
  console.log(numeroAleatorio());

  // Solução Exercício 5

  const numeroAleatorio = () => Math.random; 

  // Exercício 6

  // Arrow Function
 
  function hello(nome) {
    return `Olá, ${nome}!`
  }
  let nome = 'Ivan';
  console.log(hello(nome)); 

  // Solução Exercício 6
 
  const hello = nome => `Olá, ${nome}`

  let nome = 'Ivan'
  console.log(hello(nome)) 

  // Exercício 7

  function nomeCompleto(nome, sobrenome) {
    return `${nome} ${sobrenome}`
  }
  let nome = 'Ivan';
  let sobrenome = 'Pires';
  console.log(nomeCompleto(nome, sobrenome)); 

// Solução exercício 7

 let nomeCompleto = (nome, sobrenome) => `${nome} ${sobrenome}`;

let nome = 'Ivan';
let sobrenome = 'Pires';

console.log(nomeCompleto(nome,sobrenome)) 

// Exercício 8

// ternary operator

let speed = 90;
const speedCar = (speed) => {
  if (speed >= 120) {
    return `Você ultrapassou o limite de velocidade`;
  } else {
    return `Você está na velocidade permitida`;
  }
};
console.log(speedCar(speed)); 

// Solução

let speed = 90;

const speedCar = () => speed

speed >= 120 ? 'Você ultrapassou o limite de velocidade' : 'você está na velocidade permitida'
console.log(speedCar(speed))
