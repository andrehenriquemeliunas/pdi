console.log('---------------------------------------------')
// SEÇÃO 1 - AULA 5 - Implícito, Explicito e chamada de métodos

//coersão
console.log('5' - 5);
console.log('5' + 5);
console.log(true + 1);
console.log(true + true);
console.log([] + {});
console.log([] + []);

//implicito
console.log(+ '5');
console.log(5 + '');
console.log(123 && 'oi');
console.log(null || true);

//explicito -> converte
console.log(Number('50'));
console.log(String('50'));

console.log('---------------------------------------------')
// SEÇÃO 1 - AULA 6 - == vs === vs typeof

//==
console.log(3 == '3');

//Se ambos são do mesmo tipo, ele verifica:
//null == undefined, se for, ele retorna true
//number ==  string. se fpr, ele vai converter a string em numero
//boolean == number, se for, ele converte boolean em numero
//boolean == string, se for, ele convertre a string pra boolean
//objeto == primitivo, se for, ele conver o objeto numa string

//===
console.log(3 === '3');
console.log(3 === 3);

//É necessário que os valores e os tipos sejam iguais para ser true

//typeof
console.log(typeof 'Andre' === 'string');

//ótimo para validadação de tipos
