// Retorne a soma total de caracteres dos parágrafos utilizando reduce
const paragrafos = document.querySelectorAll('p');
const totalCaracteres = Array.prototype.reduce.call(paragrafos, (acumulador, item) => {
    return acumulador + item.innerText.length;
}, 0);
console.log(totalCaracteres);

// Crie uma função que retorne novos elementos html, com os seguintes parâmetros tag, classe e conteudo.


// Crie uma nova função utilizando a anterior como baseessa nova função deverá sempre criar h1 com a classe titulo. Porém o parâmetro conteudo continuará dinâmico
