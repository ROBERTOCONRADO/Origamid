//Duplique o menu e adicione ele a copy
const meNu = document.querySelector('.menu');
const copy = document.querySelector('.copy');
const cloneMenu = meNu.cloneNode(true);
copy.appendChild(cloneMenu);

//Selecione o primeiro DT da Dl de faq
const faq = document.querySelector('.faq');
const primeiroDT = faq.querySelector('dt');
console.log(primeiroDT);

//Selecione o DD referente ao primeiro DT
const primeiroDD = primeiroDT.nextElementSibling;
console.log(primeiroDD);

//Substitua o conteúdo html de .faq pelo de .animais
const faQ = document.querySelector('.faq');
const aniMais = document.querySelector('.animais');

faQ.innerHTML = aniMais.innerHTML;