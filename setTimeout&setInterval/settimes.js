//Mude a cor da tela para azul e depois para vermelho a cada 10s
setInterval(mudarClasse, 10000);
function mudarClasse() {
    document.body.classList.toggle('active');
}
mudarClasse();

//Crie um cronometro utilizando o setInterval. Deve ser possível iniciar, pausar e resetar (duplo clique no pausar)


