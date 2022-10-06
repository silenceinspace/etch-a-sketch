// enable manipulations with DOM
let container = document.querySelector('#container');
let flexBtn = document.querySelector('.btn-flex');

// store info from the prompts 
let columns;
let rows;

// create button + click event
let button = document.createElement('button');
button.className = 'btn';
button.textContent = 'Click me!';
flexBtn.append(button);

button.addEventListener('click', ()=> {
    columns = prompt('Choose the number of columns', 0);
    rows = prompt('Choose the number of rows', 0);
    createGrid();
    createNewBtn();
    changeBtnText();
},
    {once:true}
);

// functions
function createGrid(){
    if (columns > 50) { //only numbers for input!
        return alert('Mind the limit!');
    } else {
        container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
        for (let i=1; i<=columns; i++){
            let div = document.createElement('div');
            div.className = 'square';
            container.appendChild(div);
        }
    }

    if (rows > 50 || rows !== columns) {
        return alert('Mind the limit!');
    } else {
        container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
        for (let j=1; j<=rows*rows-rows; j++){ //it's important to do some math so that enough divs will be created
            let div = document.createElement('div');
            div.className = 'square';
            container.appendChild(div);
        }
    }

    addHover();
};

function addHover(){
    let square = document.querySelectorAll('.square');
    square.forEach((div) => {
        div.addEventListener('mouseover', e => {
            e.target.style.background = 'red';
        });
    });
};

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

    columns = prompt('Choose the number of columns', 0);
    rows = prompt('Choose the number of rows', 0);
    createGrid();
}






// just trying out TOP's recommendations:
// if 64 entered, then create 64x64 by a quick command without asking for the second number


// my ideas:
// add SAVE-PROGRESS button to freeze sketching and open it a new window
// set limit of the grid to 50x50
// instead of reloading the page, try to make the button refresh data and create a new sketch pad
// add different color options
// hover should work only once the mouse is clicked
// change the pointer to a pencil-ish thing
// create a bar, moving which the size of grid will be changing automatically
// add a clock showing time of particular session  

