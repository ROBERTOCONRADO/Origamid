//Verifique a distância da primeira imagem em relação ao topo da página
const img = document.querySelector('img');
const imgTop = img.offsetTop;
console.log(imgTop);

//Retorne a soma e a largura de todas as imagens
function somaImagens() {
    const imagens = document.querySelectorAll('img');
    let soma = 0;
    imagens.forEach((image) => {
        soma += image.offsetWidth;
    });
    console.log(soma);
}
window.onload = () => {
    somaImagens();
};

//Verifique se os links da página possuem o mínimo recomendado para as telas utilizads com o dedo. (48px/48px de acordo com o google)
const alink = document.querySelectorAll('a');
alink.forEach((link) => {
    const linkWidth = link.offsetWidth;
    const linkHeight = link.offsetHeight;
    if(linkWidth >= 48 && linkHeight >= 48) {
        console.log(link, "Posui boa acassibilidade!");
    }else{
        console.log(link, "Não posui boa acessibilidade!");
    }
});

//Se o browser for menor que 720px, adicione a classe menu-mobile ao menu
const small = window.matchMedia('(max-width: 720px)').matches;
if(small) {
    const menu = document.querySelector('.menu');
    menu.classList.add('menu-mobile');
}