//Retorne no console todas as imagens do site
let imagens = document.querySelectorAll('img');
console.log(imagens);

//Retorne no console apenas as imagens que começam com a palavra imagem
let imgAnimais = document.querySelectorAll('img[src^="img/imagem"');
console.log(imgAnimais);

//Selecione todos os links internos (onde o href começa com #)
let links = document.querySelectorAll('[href^="#"]');
console.log(links);

//Selecione  primeiro h2 dentro de .animais-descricao
let animais = document.querySelector('.animais-descricao h2');
console.log(animais);

//Selecione  último h2 dentro de .animais-descricao
let ultimoAnimal = document.querySelectorAll('.animais-descricao h2');
console.log(ultimoAnimal[ultimoAnimal.length - 1]);

//Selecione o último p do site
let paragrafo = document.querySelectorAll('p');
console.log(paragrafo[--paragrafo.length]);

//Mostre no console cada parágrafo do site com index
let paragrafoSite = document.querySelectorAll('p');
console.log(paragrafoSite);
paragrafoSite.forEach((item, index) => {
    console.log(item, index);
});

//Mostre o texto dos parágrafos no console
paragrafoSite.forEach((item) => {
    console.log(item.innerText);
});