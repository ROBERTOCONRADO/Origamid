//Adicione a classe ativo a todos os itens do menu
let menu = document.querySelectorAll('.menu a');
menu.forEach((item) => {
    item.classList.add('ativo');
});

//Remova a classe ativo de todos os itens do menu exceto no primeiro
menu.forEach((item) => {
    item.classList.remove('ativo');
});
menu[0].classList.add('ativo');

//Verifique se as imagens possuem atributo alt
const images = document.querySelectorAll('img');
images.forEach((img) => {
    const possui = img.hasAttribute('alt');
    console.log(possui);
})

//Modifique o href do link externo no menu
let linkExterno = document.querySelector('a[href^="http"]');
linkExterno.setAttribute('href', 'https://github.io/ROBERTOCONRADO/');
console.log(linkExterno);