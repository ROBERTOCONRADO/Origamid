export default function initTooltip() {
    const tooltip = document.querySelectorAll('[data-tooltip]');
    console.log(tooltip);

    tooltip.forEach((item) => {
        item.addEventListener('mouseover', onMouseOver);
    });
    function onMouseOver(event) {
        const tooltipBox = criarTooltipBox(this)
        tooltipBox.style.top = event.pageY + 'px'
        tooltipBox.style.left = event.pageX + 'px'

        this.addEventListener('mouseleave', onMouseLeave);
    }

    onMouseLeave() {
        tooltipBox.remove();
    }
    
    function criarTooltipBox(element) {
        const tooltipBox = document.createElement('div');
        const text = element.getAttribute('aria-label');
        tooltipBox.classList.add('tooltip');
        tooltipBox.innerText = text;
        document.body.appendChild(tooltipBox);
        return tooltipBox;
    }




}