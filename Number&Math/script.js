//Retorne um número aleatório entre 1050 e 2000
const numAleatorio = Math.floor(Math.random() * (2000 - 1050) + 1050);
console.log(numAleatorio);

//Retorne o maior número na lista abaixo
const numeros = '4, 5, 20, 47, 8, 9';
const arryNumeros = numeros.split(', ');
const numeroMaior = Math.max(...arryNumeros);
console.log(numeroMaior);

//Crie uma função para limpar os preços e retornar os números com centavos arredondados depois retorene a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222', 'R$ 230   ', 'r$   200'];

function limparPreco(preco) {
    preco = +preco.toUpperCase().replace('R$ ', '').trim().replace(',', '.');
    preco = +preco.toFixed(2);
    return preco;
}
let somaTotal = 0;
listaPrecos.forEach((item) => {
    somaTotal += limparPreco(item);
});
limparPreco(listaPrecos[1]);   
console.log(somaTotal);