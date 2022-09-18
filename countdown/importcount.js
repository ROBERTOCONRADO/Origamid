import Countdown from './countdown.js';

const tempoParaoNatal = new Countdown('24 December 2022 23:59:59 GMT-0300');
const tempoParaoAnoNovo = new Countdown('31 December 2022 23:59:59 GMT-0300');
const tempoParaOutubro = new Countdown('30 September 2022 23:59:59 GMT-0300');
const tempoParaNovembro = new Countdown('31 October 2022 23:59:59 GMT-0300');


console.log(tempoParaOutubro.total);
console.log(tempoParaNovembro.total);
console.log(tempoParaoNatal.total);
console.log(tempoParaoAnoNovo.total);


