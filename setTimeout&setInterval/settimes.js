//Mude a cor da tela para azul e depois para vermelho a cada 10s
setInterval(mudarClasse, 10000);
function mudarClasse() {
    document.body.classList.toggle('active');
}
mudarClasse();

//Crie um cronometro utilizando o setInterval. Deve ser possível iniciar, pausar e resetar (duplo clique no pausar)
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const tempo = document.querySelector('.tempo');

iniciar.addEventListener('click', iniciarTempo);
pausar.addEventListener('click', pausarTempo);
pausar.addEventListener('dblclick', resetarTempo);


function iniciarTempo() {
    console.log('iniciou');
}
function pausarTempo() {
    console.log('pausou');
}
function resetarTempo() {
    console.log('reswetro');
}