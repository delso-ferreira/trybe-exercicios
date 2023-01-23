
//Exercícios Current Hour 

let currentHour = 3;
let message = '';

if(currentHour >= 22){
    message = 'Não deveriamos comer nada, é hora de dormir';
}
else if(currentHour >= 18 && currentHour < 22) {
    message ='Rango da noite, vamos jantar :D';
    }
else if(currentHour >= 14 && currentHour < 18) {
    message ='Vamos fazer um bolo';
}
else if(currentHour >= 11 && currentHour < 14) {
    message ='Hora do almoço';
}
else if (currentHour >= 4 && currentHour < 11) {
    message = 'Café da manhã';
}
else{
    message = 'Nada para fazer agora.';
}

console.log(message);


// Exercícios Grade 

const grade = 80;
if (grade >= 80) {
  console.log("Parabéns, você foi aprovado!");
} else if (grade < 80 && grade >= 60) {
  console.log("Aguarde na lista de espera");
} else if (grade < 60) {
  console.log("Infelizmente não foi dessa vez"); //
}


// Exercício dia da semana 

if (weekDay === "Segunda-feira" || weekDay === "Terça-feira" || weekDay === "Quarta-feira" || weekDay === "Quinta-feira" || weekDay === "Sexta-feira") {
    console.log("Oba, mais um dia de aprendizado na Trybe >:D");
   } 
   else if (weekDay === 'Sábado'){
     console.log("FINALMENTE, descanso merecido UwU");
   }
   else if (weekDay === 'Domingo'){
    console.log("Dia de recarregar energias");
    }
   else {
    console.log("Dia não existente");
   } 

   //Exercício entrevista //

let resultado = 'aprovado(a)';

switch(resultado) {

case 'aprovado(a)':
    console.log('Parabéns, aprovado(a)');
    break;
 
case 'reprovado(a)':
    console.log('Sinto muito, você foi reprovado');
    break;
case 'lista':
    console.log('Você está na lista de espera');
    break;
default:
    console.log('Default');
    break;
}
