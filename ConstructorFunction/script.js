//Transforme o objeto abaixo em uma constructor function
// const pessoa = {
//     nome: "nome Pessoa",
//     idade: 0,
//     andar() {
//         console.log(this.nome + " andou");
//     }
// }
function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.andar = function() {
        console.log(this.nome + " Andou!");
    }
}


//Crie 3 pessoas, Joao - 20 anos, Maria - 2 anos, bruno - 22 anos

//Crie uma Constructor Function Dom para manipulação de linhas de elemento do dom. Deve conter os seguintespropriedades e métodos:
//elements, retorna NodeList com elementos selecionados,
//addClass(classe), adiciona a classe a todos os elementos,
//removeClass(classe), remove a classe de todos os elementos;