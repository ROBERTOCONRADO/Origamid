//Quando o usuário clicar no link interno do site, adicione a classe ativo ao item e remova dos demais itens caso eles possuam a mesma.Previna o comportamento padrão desses links
let linksInternos = document.querySelectorAll('a[href^="#"]');
function handleLink(event) {
    event.preventDefault();
    linksInternos.forEach((link) => {
        link.classList.remove('ativo');
    })
    event.currentTarget.classList.add('ativo');
}
linksInternos.forEach((link) => {
    link.addEventListener('click', handleLink);
})

//Selecione todos os elementos do site começando a partir do body, ao clique mostre exatamente quais elementos estão sendo clicados.
let body = document.getElementsByTagName('body');
console.log(body);


//Utilizando o código anteriror, ao invés de mostrar no console, remova o elemento que está sendo clicado.

//Se o usuário clicar na tecla (t), aumente todo o texto do site.
// function aumentarText(e) {

// }







































function teste(element) {
    if(element.key === 'a') {
        console.log('a')
    }else if (element.key === 'b') {
        console.log('b');
    }else if (element.key === 'c') {
        console.log('c');
    }else if (element.key === 'd') {
        console.log('d');
    }else if (element.key === 'e') {
        console.log('e');
    }else if (element.key === 'f') {
        console.log('f');
    }else if (element.key === 'g') {
        console.log('g');
    }else if (element.key === 'h') {
        console.log('h');
    }else if (element.key === 'i') {
        console.log('i');
    }else if (element.key === 'j') {
        console.log('j');
    }else if (element.key === 'k') {
        console.log('k');
    }
}
window.addEventListener('keydown', teste);