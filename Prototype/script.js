//Crie uma função contrutora de pessoas
//Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne o nome completo e idade da pessoa
function Pessoa(nome, sobrenome, idade) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
}
Pessoa.prototype.nomeCompleto = function() {
    return `${this.nome} ${this.sobrenome} Idade: ${this.idade} anos.`;
}
const roberto = new Pessoa("roberto", "conrado", 28);

//Liste os métodos acessados por dados criados com NodeList, HTMLCollection, Document
Object.getOwnPropertyNames(NodeList.prototype)
Object.getOwnPropertyNames(HTMLAllCollection.prototype)
Object.getOwnPropertyNames(Document.prototype)

//Liste os contrutores dos dados abaixo
const li = document.querySelector('li');

li; //HTMLLIElement
li.click; //Function
li.innerText; //String
li.value; //Number
li.hidden; //Boolean
li.offsetLeft; //Number
li.click(); //Undefined

//Qual o contructor do dado abaixo
li.hidden.constructor.name // String

//Liste 5 objetos nativos
Object
String
Array
Number
Function
//Liste 5 objetos de browser
Window
history
Document
HTMLCollection
NodeList

//Liste 2 métodos, propriedades ou objetos presentes no Chrome que não existem em Firefox
webkitHidden
webkitVisibilityState
