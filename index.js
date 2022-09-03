//!important
var condicional = (5 - 10) && (5 + 5)
                    //-5 true   //10 verdadeiro
if(condicional) {
    console.log("verdadeiro", condicional);//verdadeiro 10
    //Sempre retorna a primeira falso ou a última verdadeiro
}else {
    console.log("falso");
}

//Exercício
//Verifique se sua idade é maior do que a de algum parente.
let minhaIdade = 20; let idadeParente = 20;
if(minhaIdade > idadeParente) {
    console.log("Sou mais velho!");
}else if (minhaIdade < idadeParente) {
    console.log("Sou mais novo!");
}else {
    console.log("Somos da mesma idade!");
}

// Qual valor é retornado da seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
               //  3           5           3
//Sempre que a expressao tem _&&_ retorna a primeira falso ou a última verdadeiro               


// Verifique as seguintes variáveis são truthy ou falsy 
var nome = "Roberto Conrado";
var idade = 28;
var menorDeIdade = false;
var empregoFuturo;
var dinheiroNaConta = 0;
console.log(!!nome, !!idade, !!menorDeIdade, !!empregoFuturo, !!dinheiroNaConta);
//true   true   false   false   false

//O que irá aparecer no console?
if(("Gato" === "gato") && (5 > 2)) {
    console.log("Verdadeiro");
}else{
    console.log("Falso");//<===
}

//O que irá aparecer no console?
if(("Gato" === "gato") || (5 > 2)) {
    console.log("Cat" && "Dog");// 'Dog'<===
}else{
    console.log("Falso");
}