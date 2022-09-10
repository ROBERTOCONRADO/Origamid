export default function initScrollSuave() {
    const linksInternosScroll = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');
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
}