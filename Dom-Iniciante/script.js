//Retorne o url da página atual utilizando o obejeto window
const hrefPagina = window.location.href;
console.log(hrefPagina);


//Selecione o primeiro elemento da página que possua uma classe ativa
let classAtivo = document.querySelectorAll('.ativo');
console.log(classAtivo[0]);


//Retorne a linguagem do navegador
const linguagem = window.navigator.language
console.log(linguagem);


// Retorne a largura da janela
let larguraJanela = window.innerWidth
console.log(larguraJanela);


//Retorne a altura da janela
let alturaJanela = window.innerHeight
console.log(alturaJanela);