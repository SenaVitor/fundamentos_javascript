//conversão implícita
const numero = 456;
const numeroString = "456";

console.log(numero == numeroString); //true
console.log(numero === numeroString); //false
console.log(numero + numeroString); //concatena as variáveis transformando elas em uma só string (456456)

//conversão explícita
//Number()
console.log(numero + Number(numeroString));
let largura = "10";
let altura = "5";
console.log( + largura * + altura); // teremos a conversão de String para números realizado usando o + antes das variáveis
//String() e .toString()
let telefone = 12341234;
// teremos a conversão do número 12341234 para uma string “12341234” e assim poderemos fazer a concatenação entre as strings
console.log("O telefone é " + String(telefone)); 
// o .toString() é uma outra forma para  fazer essa conversão, que é mais parecida com outras linguagens de programação.
console.log("O telefone é " + telefone.toString()); 