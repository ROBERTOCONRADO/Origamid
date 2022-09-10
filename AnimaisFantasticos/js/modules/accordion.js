export default function initAccordion() {
    const acoordionList = document.querySelectorAll('[data-anime="accordion"] dt');
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