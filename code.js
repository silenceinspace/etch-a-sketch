// enable manipulations with DOM
let container = document.querySelector('#container');
let erase = document.querySelector('.erase');
let size = document.querySelector('.size');
let darkMode = document.querySelector('.dark');
let save = document.querySelector('.save');

//change grid's background
darkMode.addEventListener('click', () => {
    container.classList.toggle('dark-mode');
});

//color palette
let newColor;
let anotherColor = document.querySelector('.palette');
anotherColor.addEventListener('input', ()=> {
    newColor = anotherColor.value;
});

//activate painting
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false); 

function addHover(){
    let square = document.querySelectorAll('.square');
    square.forEach((div) => {
        div.addEventListener('mouseover', changeColor);
        }
    );
}

// mousedown + mouseover = hover by clicking
function addHover(){
    let square = document.querySelectorAll('.square');
    square.forEach((div) => {
        div.addEventListener('mouseover', changeColor);
        }
    );
}

function changeColor(e){
    if (e.type === 'mouseover' && mouseDown) {
        e.target.style.background = newColor; 
    };
}

//create grid
let sizeGrid;
let slider = document.querySelector('#range');
let output = document.querySelector('#demo');
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value + 'x' + this.value;
    sizeGrid = this.value;
    overWriteInfo();
    createGrid();
}

function createGrid(){
    container.style.gridTemplateColumns = `repeat(${sizeGrid}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${sizeGrid}, 1fr)`;
    for (let i=1; i<=sizeGrid*sizeGrid; i++){
        let div = document.createElement('div');
        div.className = 'square';
        container.appendChild(div);
    }
    addHover();
};


// clear grid
function overWriteInfo() {
    const myNode = document.getElementById('container');
    while (myNode.firstChild) {
        myNode.removeChild(myNode.lastChild);
    };
}

erase.addEventListener('click', ()=> {
    overWriteInfo();
    container.classList.remove('dark-mode');
});

// set the concrete size
size.addEventListener('click', ()=> {
    create25x25();      
});

function create25x25() {
    overWriteInfo();
    container.style.gridTemplateColumns = 'repeat(25, 1fr)';
    container.style.gridTemplateRows = 'repeat(25, 1fr)';
    for (let i=1; i<=25*25; i++){
        let div = document.createElement('div');
        div.className = 'square';
        container.appendChild(div);
    };
    container.classList.remove('dark-mode');
    alert('25x25 grid is about to appear!');
    addHover();
};


// make a screenshot and open in a new window
// function createCanvas(){
//     let div = document.getElementById('container');
    
//     html2canvas(div).then(
//         function(canvas) {
//             document.getElementById('output').appendChild(canvas);
//         }
//     );
//     window.open('', document.getElementById('tutorial'));
    
// };
// save.addEventListener('click', createCanvas);


// my ideas:
// 1. canvas element (creating in a small popup window on top of the existing page)
// 2. style input color to have it with radius 50% + make sure the mouseover+mousedown thing works properly 
// 3. add a clock showing time of particular session
// 4. work with the sidebar, because it's the place where all actions will be held
// 5. creating user's progress (localstorage)


// feature detecting localStorage function???
// let inputColor = document.getElementById('color');
// if(!localStorage.getItem('color')) {
//     populateStorage();
// } else {
//     setStyles();
// }
// function populateStorage() {
//     localStorage.setItem('color', document.getElementById('color').value);
//     setStyles();
// }
// function setStyles() {
//     let currentColor = localStorage.getItem('color');
//     document.getElementById('color').value = currentColor;
//     inputColor.value = currentColor;
// }
// inputColor.onchange = populateStorage;
