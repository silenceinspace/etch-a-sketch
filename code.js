// enable manipulations with DOM
let container = document.querySelector('#container');
let paint = document.querySelector('.paint');
let erase = document.querySelector('.erase');
let size = document.querySelector('.size');

// store info from the prompts 
let sizeGrid;

paint.addEventListener('click', ()=> {
    overWriteInfo();
    sizeGrid = prompt('Choose the number of columns and rows', 0);
    createGrid();
});

//color palette
let newColor;
let anotherColor = document.querySelector('.palette');
anotherColor.addEventListener('input', ()=> {
    newColor = anotherColor.value;
});

// functions
function createGrid(size){
    size = sizeGrid;

    if (size > 50) { //only numbers for input!
        return alert('Mind the limit!');
    
    } else {
        container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
        for (let i=1; i<=size*size; i++){
            let div = document.createElement('div');
            div.className = 'square';
            container.appendChild(div);
        }
    }
    addHover();
};

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false); 

function addHover(){
    let square = document.querySelectorAll('.square');
    square.forEach((div) => {
        div.addEventListener('mouseover', changeColor);
        }
    );
};

function changeColor(e){
    if (e.type === 'mouseover' && mouseDown) {
        e.target.style.background = newColor; 
    };
}

function overWriteInfo() {
    const myNode = document.getElementById('container');
    while (myNode.firstChild) {
        myNode.removeChild(myNode.lastChild);
    };
}

erase.addEventListener('click', ()=> {
    overWriteInfo();
});

size.addEventListener('click', ()=> {
    create25x25();      
});

function create25x25() {
    overWriteInfo();

    // container.style.gridTemplateColumns = 'repeat(25, 1fr)';
    // container.style.gridTemplateRows = 'repeat(25, 1fr)';
    // for (let i=1; i<=25*25; i++){
    //     let div = document.createElement('div');
    //     div.className = 'square';
    //     container.appendChild(div);
    // };
    alert('25x25 grid is about to appear!');
    addHover();
};


// my ideas:
// add SAVE-PROGRESS button to freeze sketching and open it a new window
// finish the slider
// add hovered text for "extra info"
// style input color to have it with radius 50% + make sure the mouseover+mousedown thing works properly 
// add a clock showing time of particular session
// work with the sidebar, because it's the place where all actions will be held
//what is webkit? study it more

let slider = document.querySelector('#range');
let output = document.querySelector('#demo');
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
}