function $$(selectedElements) {
    const elements = document.querySelectorAll(selectedElements);

    return {
        elements,
    }
}

const btns = $$('button');

console.log(btns.elements);