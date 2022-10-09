// enable manipulations with DOM
let container = document.querySelector('#container');
let flexBtn = document.querySelector('.btn-flex');

// store info from the prompts 
let sizeGrid;

// create button + click event
let button = document.createElement('button');
button.className = 'btn';
button.textContent = 'Click me!';
flexBtn.append(button);

button.addEventListener('click', ()=> {
    sizeGrid = prompt('Choose the number of columns and rows', 0);
    createGrid();
    createNewBtn();
    changeBtnText();
},
    {once:true}
);

// functions
function createGrid(){
    if (sizeGrid > 50) { //only numbers for input!
        return alert('Mind the limit!');
    } else {
        container.style.gridTemplateColumns = `repeat(${sizeGrid}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${sizeGrid}, 1fr)`;
        for (let i=1; i<=sizeGrid*sizeGrid; i++){
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
        e.target.style.background = 'red';
    };
}

function createNewBtn() { 
    let newButton = document.createElement('button');
    newButton.className = 'btn';
    newButton.textContent = 'Create a new grid';
    flexBtn.appendChild(newButton);

    newButton.addEventListener('click', ()=> {
    overWriteInfo();
    })
}

function changeBtnText() {
    button.textContent = 'Already clicked!';
}

function overWriteInfo() {
    const myNode = document.getElementById('container');
    while (myNode.firstChild) {
        myNode.removeChild(myNode.lastChild);
    };

    sizeGrid = prompt('Choose the number of columns and rows', 0);
    createGrid();
}



// just trying out TOP's recommendations:
// if 64 entered, then create 64x64 by a quick command without asking for the second number


// my ideas:
// add SAVE-PROGRESS button to freeze sketching and open it a new window
// set limit of the grid to 50x50
// add different color options
// hover should work only once the mouse is clicked
// change the pointer to a pencil-ish thing
// create a bar, moving which the size of grid will be changing automatically
// add a clock showing time of particular session  