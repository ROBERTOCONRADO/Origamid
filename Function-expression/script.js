//Remova o erro
// priceNumber('R$ 99,99');
// const priceNumber = n => +n.replace('R$', '').replace(',', '.');
const priceNumber = n => +n.replace('R$', '').replace(',', '.');
console.log(priceNumber('R$ 99,99'));


//Crie uma IIFE e isole o escopo de qualquer código JS
(function() {
    let nome = 'beto';
})();



//Como podemos utilizar a função abaixo?
// const active = callback => callback();

const active = callback => callback();

active(function() {
    console.log('Testando');
})



