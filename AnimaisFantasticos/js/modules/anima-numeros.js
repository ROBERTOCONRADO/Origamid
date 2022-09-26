export default function initAnimaNumeros() {
    function animaNumerosStart() {
        const numeros = document.querySelectorAll('[data-numero]');
        
        numeros.forEach((num) => {
            const total = +num.innerText;
            const incremento = Math.floor(total / 200);
        
            let start = 0;
            const timer = setInterval(() => {
                start = start + incremento;
                num.innerText = start;
                if(start > total) {
                    num.innerText = total;
                    clearInterval(timer);
                }
            }, 30 * Math.random());
        });
    }
    
    function handleMutation(mutation) {
        if(mutation[0].target.classList.contains('ativo')) {
            observer.disconnect();
            animaNumerosStart();
        }
    }
    
    const observerTarget = document.querySelector('.numeros');
    const observer = new MutationObserver(handleMutation);
    observer.observe(observerTarget, {attributes: true});
}