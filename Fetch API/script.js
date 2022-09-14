// Utilizando a API https://viacep.com.br/ws/${CEP}/json/ crie um formulário onde o usuário pode digitar o cep e o endereço completo é retornado ao clicar em buscar
const inputCep = document.getElementById('cep');
const btnCep = document.querySelector('input[type="button"]');

btnCep.addEventListener('click', handleClick);

function handleClick(e) {
    e.preventDefault();
    console.log(e);
}


function buscaCep(cep) {
    fetch('https://viacep.com.br/ws/${CEP}/json/')
}

// Utilizando a API https://blockchain.info/ticker retorne no DOM o valor de compra da bitcoin and reais. 
//atualize este valor a cada 30s

// Utilizando a API https://api.chucknorris.io/jokes/random retorne uma piada randomica do chucknorris, toda vez que clicar em próxima
