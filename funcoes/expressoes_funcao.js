// Expressão de função

const soma = function (a, b) { return a + b} // Desse modo só irá executar se a chamada dela estiver depois de sua criação.
console.log(soma(1, 1)); // Se fosse executada antes da declaração daria erro.

// Principal diferença: HOISTING
// Funções e var são "listadas" no topo do arquivo.

console.log(apresentar()); // Pode ser chamada antes de sua declaração.
// Quando escrita dessa forma o JS declara a função assim que o código é inicializado.
function apresentar(){
    return "olá";
}