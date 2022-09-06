//Duplique o menu e adicione ele a copy
const meNu = document.querySelector('.menu');
const copy = document.querySelector('.copy');
const cloneMenu = meNu.cloneNode(true);

copy.appendChild(cloneMenu);
//Selecione o primeiro DT da Dl de faq
//Selecione o DD referente ao primeiro DT
//Substitua o conteúdo html de .faq pelo de .animais