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
