//Crie um objeto com dados:
let conhecimentos = {
    linguagem: "javascript, PHP",
    designer: "figma, canva, gimp",
    cursosTop: "programador.br, Origamid, Rocketseat, OneBitCode, Udemy, CursoemVideo, GenialCursos",
    adicionais: "HTML, CSS, Jquery",
};
//Crie um método no objeto anterior que mostre linguagens e designer;
conhecimentos.qualificacoes = function() {
    return `Linguagens de Programação: ${this.linguagem} Designer: ${this.designer}`;
}
//Modifique o valor da propriedade cursosTop para Origamid
conhecimentos.cursosTop = "Origamid";


//Crie um objeto de um cachorro que representa um labrador preto com 10 anos, cujo é muito brincalhão e só late ao ver um gato.
let cachorro = {
    raca: "labrador",
    cor: "preto",
    idade: 10,
    late(animal) {
        if(animal === "gato" || animal === "Gato" || animal === "Cat") {
            return "latir";
        }else {
            return "brincar";
        }
    }          //cachorro.late("Cat")
}              //'latir'
