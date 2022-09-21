const cpfs = document.querySelectorAll('.cpf li');

function elementsInnerText(e) {
    const arrayElements = Array.from(e);
    return arrayElements.map(element => {
        return element.innerText;
    });
}

console.log(elementsInnerText(cpfs));
