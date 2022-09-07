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
}
initTabNav();

const acoordionList = document.querySelectorAll('.js-acordion dt')
function activeAcoordion() {
    this.classList.add('active');
    this.nextElementSibling.classList.add('active');
}
acoordionList.forEach((item) => {
 item.addEventListener('click', activeAcoordion);
});

