import Countdown from './countdown.js';

const tempoParaoNatal = new Countdown('24 December 2022 23:59:59 GMT-0300');
const tempoParaoAnoNovo = new Countdown('31 December 2022 23:59:59 GMT-0300');
const tempoParaOutubro = new Countdown('30 September 2022 23:59:59 GMT-0300');
const tempoParaNovembro = new Countdown('31 October 2022 23:59:59 GMT-0300');


console.log(tempoParaOutubro.total);
console.log(tempoParaNovembro.total);
console.log(tempoParaoNatal.total);
console.log(tempoParaoAnoNovo.total);

const outubro = document.querySelector('.outubro')
const novembro = document.querySelector('.novembro')
const natal = document.querySelector('.natal')
const anoNovo = document.querySelector('.anoNovo')


console.log(outubro[0])
outubro.innerText = `${tempoParaOutubro.total.days} dias, ${tempoParaOutubro.total.hours} horas, ${tempoParaOutubro.total.minutes} minutos, ${tempoParaOutubro.total.seconds} segundos`


novembro.innerText = `${tempoParaNovembro.total.days} dias, ${tempoParaNovembro.total.hours} horas, ${tempoParaNovembro.total.minutes} minutos, ${tempoParaNovembro.total.seconds} segundos`


natal.innerText = `${tempoParaoNatal.total.days} dias, ${tempoParaoNatal.total.hours} horas, ${tempoParaoNatal.total.minutes} minutos, ${tempoParaoNatal.total.seconds} segundos`


anoNovo.innerText = `${tempoParaoAnoNovo.total.days} dias, ${tempoParaoAnoNovo.total.hours} horas, ${tempoParaoAnoNovo.total.minutes} minutos, ${tempoParaoAnoNovo.total.seconds} segundos`





