//Crie uma array com os anos que o brasil ganhou a copa.
let brasilCampeao = [1959, 1962, 1970, 1994, 2002];
//Interaje com array usando o loop para mostrar no console a seguinte mensagem;
//O brasil ganhou a copa de ${ano}
for(let i = 0; i < brasilCampeao.length; i++) {
    console.log(`O Brasil ganhou a copa de ano: ${brasilCampeao[i]}`);
}

//Interaja com um loop nas frutas abaixo e pare ao chegar em pêra.
let frutas = ['banana', 'maça', 'uva', 'pêra', 'melância'];
for(let frut = 0; frut < frutas.length; frut++) {
    console.log(frutas[frut]);
    if(frutas[frut] == 'pêra') {
        break;
    }
}
//Coloque a última frutas da array acima em uma variável sem remover a mesma da array;
let ultimaFruta = frutas[frutas.length - 1];
console.log(ultimaFruta);


//Some 500 ao valor da scroll abaixo, atribuindo o novo valor a scroll
var scroll = 1000;
scroll += 500;


//Atribua true para a variável darCredito caso o cliente possua carro e casa.
// E false caso o contrario
var possuiCarro = true;
var possuiCasa = true;
var darCredito;
//Operador ternario
darCredito = (possuiCarro && possuiCasa) ? "Credito aprovado!" : "Credito reprovado!";
console.log(darCredito);