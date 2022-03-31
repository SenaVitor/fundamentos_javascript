// Parâmetros/argumentos de função
function soma(a, b){
    return a + b;
}

function multiplica(a = 1, b = 1){
    return a * b;
}

function nomeIdade(nome, idade){
    return `Meu nome é ${nome} e minha idade é ${idade}`;
}

console.log(soma(12, 1));
console.log(nomeIdade("Vitor", 19));
console.log(multiplica(soma(2, 2), soma(5, 5)));