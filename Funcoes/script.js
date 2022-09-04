//Crie uma function para verificar se o valor e Truthy 
function isTruthy(element1, element2, element3) {
    alert(!!element1);
    alert(!!element2);
    alert(!!element3);
}
isTruthy(0, -5, null);


//Crie uma função matemática que retorne o perímetro de um quadrado
function perimetroQuadrado(lado) {
    return lado * 4;
}


//Crie uma função que verifica se um número é par.
function verifica(number) {
    let modulo = number % 2;
    if (modulo === 0) {
        console.log(`${number} é um número PAR.`);
    }else{
        console.log(`${number} é um número Ímpar.`);
    }
}
verifica(121112212121)


//Crie uma função que retorne o tipo de dado passado nela
function tipoDado(dado) {
    return typeof dado;
}
tipoDado(function(){console.log('teste')})//<== 'function'


//addEventListener é uma função nativa do javaScript
//o primeiro parâmetro é o evento que ocorre e o segundo o callback
//utilize essa função para mostrar seu nome completo assim que o "scroll" ocorrer
addEventListener('scroll', function(){
    alert("Roberto Conrado\nFunção ativada atrávez do scroll!")
});
    
