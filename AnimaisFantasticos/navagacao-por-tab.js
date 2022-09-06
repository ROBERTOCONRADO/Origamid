const tabMenu = document.querySelectorAll('.js-tabmenu li');
const tabContent = document.querySelectorAll('.js-tabcontent section');

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
