import Countdown from './countdown.js';

const tempoParaoNatal = new Countdown('24 December 2022 23:59:59 GMT-0300');
const tempoParaoAnoNovo = new Countdown('31 December 2022 23:59:59 GMT-0300');
const tempoParaOutubro = new Countdown('30 September 2022 23:59:59 GMT-0300');
const tempoParaNovembro = new Countdown('31 October 2022 23:59:59 GMT-0300');

// console.log(tempoParaOutubro.total);
// console.log(tempoParaNovembro.total);
// console.log(tempoParaoNatal.total);
// console.log(tempoParaoAnoNovo.total);

const outubro = document.querySelector('.outubro')
const novembro = document.querySelector('.novembro')
const natal = document.querySelector('.natal')
const anoNovo = document.querySelector('.anoNovo')

setInterval(() => {
    outubro.innerText = `${tempoParaOutubro.total.days}: ${tempoParaOutubro.total.hours}: ${tempoParaOutubro.total.minutes}: ${tempoParaOutubro.total.seconds}`

    novembro.innerText = `${tempoParaNovembro.total.days}: ${tempoParaNovembro.total.hours}: ${tempoParaNovembro.total.minutes}: ${tempoParaNovembro.total.seconds}`

    natal.innerText = `${tempoParaoNatal.total.days}: ${tempoParaoNatal.total.hours}: ${tempoParaoNatal.total.minutes}: ${tempoParaoNatal.total.seconds}`
    
    anoNovo.innerText = `${tempoParaoAnoNovo.total.days}: ${tempoParaoAnoNovo.total.hours}: ${tempoParaoAnoNovo.total.minutes}: ${tempoParaoAnoNovo.total.seconds}`
}, 1000);









