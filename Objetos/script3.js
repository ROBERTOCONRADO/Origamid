// Crie uma função que verifique corretamente o tipo de dado
function verificarDado(dado) {
    return Object.prototype.toString.call(dado);
} 
console.log(verificarDado('string'));

// Crie um objeto quadrado com a propriedade lados e torne ela imutável
const quadrado = {};
Object.defineProperties(quadrado, {
    lados: {
        value: 4,
        enumerable: false,
    }
});
console.log(quadrado.lados); //<== {lados: 4}

// Previna qualquer mudança no objeto abaixo
const configuracao = {
    width: 800,
    height: 600,
    background: '#333'
  }
  
  // Liste o nome de todas as propriedades do protótipo de String e Array
  