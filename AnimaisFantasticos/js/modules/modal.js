export default function initModal() {
    const botaoAbrir = document.querySelector('[data-modal="abrir"]');
    const botaoFexar = document.querySelector('[data-modal="fechar"]');
    const modal = document.querySelector('[data-modal="container"]');

    if(botaoAbrir && botaoFexar && modal) {
        function abrirModal(event) {
            event.preventDefault();
            modal.classList.toggle('ativo');
        }
        function fecharModal(event) {
            modal.classList.remove('ativo');
        }
        function cliqueForaModal(event) {
            if(event.target === this)
            fecharModal()
        }
    
        botaoAbrir.addEventListener('click', abrirModal);
        botaoFexar.addEventListener('click', fecharModal);
        modal.addEventListener('click', cliqueForaModal);
    }
}
