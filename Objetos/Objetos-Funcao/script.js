// Retorne a soma total de caracteres dos parágrafos utilizando reduce
const paragrafos = document.querySelectorAll('p');
const totalCaracteres = Array.prototype.reduce.call(paragrafos, (acumulador, item) => {
    return acumulador + item.innerText.length;
}, 0);
console.log(totalCaracteres);

// Crie uma função que retorne novos elementos html, com os seguintes parâmetros tag, classe e conteudo.
function criarElemento(tag, classe, conteudo) {
    const elemento = document.createElement(tag);
    classe ? elemento.classList.add('classe') : '';
    conteudo ? elemento.innerHTML = conteudo : null;
    return elemento;
}
console.log(criarElemento('li', 'teste', 'Óla! Seja bem-vindo.'));

// Crie uma nova função utilizando a anterior como base essa nova função deverá sempre criar h1 com a classe titulo. Porém o parâmetro conteudo continuará dinâmico
const h1Titulo = criarElemento.bind(null, 'h1', 'titulo');

const cursosReact = h1Titulo('Cursos de React');
const cursosCSS = h1Titulo('Cursos de CSS');
const cursosJS = h1Titulo('Cursos de JS');

console.log(cursosReact, cursosCSS, cursosJS);