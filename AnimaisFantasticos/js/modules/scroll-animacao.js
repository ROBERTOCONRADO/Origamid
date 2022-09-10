export default function initAnimacaoScroll() {
    const sections = document.querySelectorAll('[data-anime="scroll"]');
    if(sections.length > 0) {
        const windowMetade = window.innerHeight * 0.8;
        function animaScroll() {
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                const isSectionVisible = (sectionTop - windowMetade) < 0;
                if (isSectionVisible) 
                section.classList.add('ativo');
                else 
                section.classList.remove('ativo');
            });
        }
        animaScroll();//<==Chamando antes do scroll para iniciar com conteúdo
        window.addEventListener('scroll', animaScroll);
    }
}
