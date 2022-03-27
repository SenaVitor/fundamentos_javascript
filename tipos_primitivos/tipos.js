//number
const n1 = 3;
const n2 = +10e4;
console.log(n1*n2);

//string and boolean
const cidade = "belo horizonte";
const input = "Belo Horizonte";

console.log(cidade === input); // false

const inputMinusculo = input.toLowerCase();

console.log(cidade === inputMinusculo); // true

const senha = "minhaSenha123"
console.log(senha.length) // 13 characters