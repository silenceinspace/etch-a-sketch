// enable manipulations with DOM
let container = document.querySelector('#container');
let erase = document.querySelector('.erase');
let size = document.querySelector('.size');

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

function changeColor(e){
    if (e.type === 'mouseover' && mouseDown) {
        e.target.style.background = newColor; 
    };
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
    alert('25x25 grid is about to appear!');
    addHover();
};


// my ideas:
// add SAVE-PROGRESS button to freeze sketching and open it a new window
// add hovered text for "extra info"
// style input color to have it with radius 50% + make sure the mouseover+mousedown thing works properly 
// add a clock showing time of particular session
// work with the sidebar, because it's the place where all actions will be held
//what is webkit? study it more