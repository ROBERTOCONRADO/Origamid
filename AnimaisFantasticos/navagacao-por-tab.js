function initTabNav() {
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
}
initTabNav();

const linksInternosScroll = document.querySelectorAll('.js-menu a[href^="#"]');
function scrollSuave() {
    
}
linksInternosScroll.forEach((item) => {
    item.addEventListener('click', scrollSuave);
});
