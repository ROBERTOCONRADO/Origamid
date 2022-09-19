//Reescreva a função utilizando valores iniciais de parâmetros com ES6
function createButton(background, color) {
    background = background || 'blue';
    if(color === undefined) {
        color = 'red';
    }
    const buttonElement = document.createElement('button');
    buttonElement.style.background = background;
    buttonElement.style.color = color;
    return buttonElement;
}
const redButton = createButton();
//Com ES6
function createButton(background = 'blue', color = 'red') {
    const buttonElement = document.createElement('button');
    buttonElement.style.background = background;
    buttonElement.style.color = color;
    return buttonElement;
}
const Button = createButton();


//Utilize o método push para inserir as frutas ao final de comidas
const frutas = ['banana', 'maça', 'pêra'];
const comidas = ['pizza', 'lanche', 'batata'];

comidas.push(...frutas);
console.log(comidas);//<== 'pizza', 'lanche', 'batata', 'banana', 'maça', 'pêra'
