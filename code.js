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
 


// my ideas:

// 1. add SAVE-PROGRESS button to freeze sketching and open it a new window
// 2. add hovered text for "extra info"
// 3. style input color to have it with radius 50% + make sure the mouseover+mousedown thing works properly 
// 4. add a clock showing time of particular session
// 5. work with the sidebar, because it's the place where all actions will be held
// 6. what is webkit? study it more
// 7. add a dark/light mode