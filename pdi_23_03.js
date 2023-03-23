console.log('---------------------------------------------')
// SEÇÃO 1 - AULA 2 - PILHA DE CHAMADAS

//FIFO - First In First Out, ou seja, o primeiro a entrar é o primeiro a sair

//LIFO - Last In, First Out, ou seja, o último que entra é o primeiro que sai
function funcao1(){
  funcao2();//adiciona funcao 3 na pilha
  console.log('executou função 1')
}

function funcao2(){
  funcao3();
  console.log('executou função 2')
}

function funcao3(){
  console.log('executou função 3')
}

funcao1();//adiciona funcao 2 na pilha

console.log('---------------------------------------------')
// SEÇÃO 1 - AULA 3 - TIPOS PRIMITIVOS

console.log(typeof true); //boolean
console.log(typeof Boolean(true));
console.log(typeof new Boolean (true));
console.log(typeof (new Boolean(true)).valueOf());
console.log(typeof 'André');
console.log(typeof 19);

var doze = new Number(12);
var quinze = doze + 3;
console.log(quinze)

console.log(typeof doze)
console.log(typeof quinze)

console.log('---------------------------------------------')
// SEÇÃO 1 - AULA 4 - TIPOS DE VALORES E TIPOS DE REFERÊNCIA

var x = 10; //guarda na memória
var y = x
var x = 20

console.log(x, y)

var x = {valor: 10};
var y = x
x.valor = 20

console.log(x)
console.log(y)

