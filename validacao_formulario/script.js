import Validar from './validar.js';


const cpf = document.querySelector('#cpf');
const validar = new Validar(cpf);


console.log(validar.formatar('111.333.22207'));