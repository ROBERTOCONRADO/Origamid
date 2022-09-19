//Extraia o backgroundColor, color e margin do button
const btn = document.querySelector('button');
const btnStyles = getComputedStyle(btn);

const {backgroundColor, color, margin} = btnStyles;

console.log(backgroundColor);
console.log(color);
console.log(margin);

//Troque os valores das variáveis abaixo 
let cursoAtivo = 'JavaScript';
let cursoInativo = 'HTML';

//Corrija o erro abaixo
const cachorro = {
  nome: 'bob',
  raca: 'labrador',
  cor: 'amarelo'
}

const {cor: corDoCachorro} = cachorro;


