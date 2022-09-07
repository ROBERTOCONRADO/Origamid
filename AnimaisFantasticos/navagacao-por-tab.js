function initSeparation() {//<==Isolar 
    //Função para linkar img ao seu respectivo texto
    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const tabContent = document.querySelectorAll('.js-tabcontent section');

    if(tabMenu.length && tabContent.length) {
        tabContent[0].classList.add('ativo');
        function ativoTab(index) {
            tabContent.forEach((section) => {
                section.classList.remove('ativo');
            });
            tabContent[index].classList.add('ativo');
        }
        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () => {
                ativoTab(index);
            });
        });
    }
    //==Accordion==
    const acoordionList = document.querySelectorAll('.js-acordion dt');
    if(acoordionList.length) {
        acoordionList[0].classList.add('active');
        acoordionList[0].nextElementSibling.classList.add('active');
        function activeAcoordion() {
            this.classList.toggle('active');
            this.nextElementSibling.classList.toggle('active');
        }
        acoordionList.forEach((item) => {
        item.addEventListener('click', activeAcoordion);
        });
    }
    //==ScrollLinks==
    const linksInternosScroll = document.querySelectorAll('.js-menu a[href^="#"]');
    function scrollSuave(e) {
        e.preventDefault();
        const href = e.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
        //===Forma alternativa===
        // const topo = section.offsetTop;
        // window.scrollTo({
        //     top: topo,
        //     behavior: 'smooth',
        // });
    }
    linksInternosScroll.forEach((item) => {
        item.addEventListener('click', scrollSuave);
    });
    //==AnimateSections==
    const sections = document.querySelectorAll('.js-scroll');
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
initSeparation();



    
    

