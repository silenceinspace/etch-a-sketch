const container = document.querySelector('#container');
// store info from the prompts 
let columns;
let rows;

// create a button for setting the number of divs
let button = document.createElement('button');
button.className = 'btn';
button.textContent = 'Click me!';
document.body.append(button);

// make the button work on click 
button.addEventListener('click', ()=> {
    columns = prompt('Choose the number of columns', 0);
    rows = prompt('Choose the number of rows', 0);
    createDivs();
})

// here the loop should be adjusted to the prompt's data
function createDivs() {
    for (let i=1; i<=columns; i++) {
        for (let j=1; j<=rows; j++){
            let div = document.createElement('div');
            div.className = `square`;
            div.style.width = '20px';
            div.style.height = '20px';
            container.appendChild(div);
        }
}}

// change color of my divs on hover
const square = document.querySelectorAll('.square');

function changeColor() {
    square.forEach((div) => {
        div.addEventListener('mouseover', e => {
            e.target.style.background = 'red';
        })
        div.addEventListener('click', e => {
            e.target.style.background = 'white';
        })
    }) 
}
changeColor();