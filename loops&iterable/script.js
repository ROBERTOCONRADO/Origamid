//Crie 4 li´s na página utilizando o for...of 
// Adicione uma classe a cada li
const lis = document.querySelectorAll('li');
for(const li of lis) {
    li.classList.add('ativo');
}

//Utilize o for...in para listar todos as propriedades e valores do objeto window
for(const window_ in window) {
    console.log(window_ + ': ' + window[window_]);
}