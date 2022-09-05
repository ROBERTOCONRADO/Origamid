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
let images = document.querySelectorAll('img');
images.forEach((img) => {
    
})
if (images.hasAttribute('alt')) {
    console.log('Há o atributo!');
}else {
    console.log('Não há atributo alt!');
}
//Modifique o href do link externo no menu