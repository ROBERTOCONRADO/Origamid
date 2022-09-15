import initAnimaNumeros from './anima-numeros.js';

export default function initAnimaisFetch() {
    async function fetchAnimais(url) {
        const animasiResponse = await fetch(url);
        const animaisJSON = await animasiResponse.json();
        const numerosGrid = document.querySelector('.numeros-grid');
    
        animaisJSON.forEach(animal => {
            const divAnimal = criarAnimal(animal);
            numerosGrid.appendChild(divAnimal);
        });
        initAnimaNumeros();
    }
    
    function criarAnimal(animal) {
        const div = document.createElement('div');
        div.classList.add('numero-animal');
        div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
        return div;
    }
    fetchAnimais('/AnimaisFantasticos/js/animaisAPI/animaisapi.json');
}
