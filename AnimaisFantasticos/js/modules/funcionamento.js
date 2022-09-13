export default function initFuncionamento() {

}

const funcionamento = document.querySelector('[data-semana]');

const diasSemana = funcionamento.dataset.semana.split(',').map(Number);
const horarioSemana = funcionamento.dataset.horario.split(',').map(Number);



const dataAgora = new Date();

const diaAtual = dataAgora.getDay();
const horarioAtual = dataAgora.getHours();

const abertoSemana = diasSemana.indexOf(diaAtual) !== -1;
console.log(abertoSemana)























// const agora = new Date() ;
// const futuro = new Date('Dec 15 2022');
// function trasform(tempo) {
//     return tempo / (24 * 60 * 60 * 1000);
// }
// const diasAgora = trasform(agora.getTime());
// const diasFututo = trasform(futuro.getTime());

// console.log(diasFututo - diasAgora);