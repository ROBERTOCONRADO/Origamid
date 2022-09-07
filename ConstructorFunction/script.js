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

//Crie 3 pessoas, John - 20 anos, Maria - 21 anos, Bruna - 22 anos
const john = new Pessoa('Joao', 20);
const maria = new Pessoa('Maria', 21);
const bruna = new Pessoa('Bruna', 22);

//Crie uma Constructor Function Dom para manipulação de linhas de elemento do dom. Deve conter os seguintespropriedades e métodos:
//elements, retorna NodeList com elementos selecionados,
//addClass(classe), adiciona a classe a todos os elementos,
//removeClass(classe), remove a classe de todos os elementos;
function Dom(seletor) {
    const list = document.querySelectorAll(seletor);
    this.elements = list;
    this.addClass = function(classe) {
        list.forEach((element) => {
            element.classList.add(classe);
        })
    };
    this.removeClass = function(classe) {
        list.forEach((element) => {
            element.classList.remove(classe);
        })
    };
}
const list = new Dom('li');
const ul = new Dom('ul');