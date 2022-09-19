//Extraia o backgroundColor, color e margin do button
const btn = document.querySelector('button');
const btnStyles = getComputedStyle(btn);

const {backgroundColor, color, margin} = btnStyles;

console.log(backgroundColor);
console.log(color);
console.log(margin);


