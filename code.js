// enable manipulations with DOM
let container = document.querySelector('#container');
let clear = document.querySelector('.clear');
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

function changeColor(e){
    if (e.type === 'mouseover' && mouseDown) {
        e.target.style.background = newColor;
        // console.log(e); // trying to fix a bug 
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

//clear grid
function overWriteInfo() {
    const myNode = document.getElementById('container');
    while (myNode.firstChild) {
        myNode.removeChild(myNode.lastChild);
    };
}

clear.addEventListener('click', ()=> {
    overWriteInfo();
    container.classList.remove('dark-mode');
});

//set the concrete size
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

//save drawing 
function saveDrawing() {
    html2canvas(container).then (canvas => {
        let dataUrl = canvas.toDataURL();
        let a = document.createElement('a');
        a.setAttribute('href', dataUrl);
        a.setAttribute('download', 'my-drawing.png');
        a.click();
    })
}

save.addEventListener('click', saveDrawing);