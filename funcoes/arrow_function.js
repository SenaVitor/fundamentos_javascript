// Arrow function
const apresentarArrow = nome => `Meu nome é ${nome}`;
const soma = (a, b) => a + b;

// Arrow function com + de 1 linha de instrução

const somaNumeros = (a, b) => {
    if(a > 10 || b > 10){
        return "Somente números de 1 a 9";
    }else{
        return a + b;
    }
}

console.log(apresentarArrow("Vitor"));
console.log(somaNumeros(1, 11));

// Hoisting: arrow function se comporta como expressão (São declaradas logo no início do código)