//Retorne no console todas as imagens do site
let imagens = document.querySelectorAll('img');
console.log(imagens);

//Retorne no console apenas as imagens que começam com a palavra imagem
let imgAnimais = document.querySelectorAll('img[src^="img/imagem"');
console.log(imgAnimais);
//Selecione todos os links internos (onde o href começa com #)
let links = document.querySelectorAll('a[href^="#"]');
console.log(links);

//Selecione o último p do site
let paragrafo = document.querySelectorAll('p');
console.log(paragrafo[24]);