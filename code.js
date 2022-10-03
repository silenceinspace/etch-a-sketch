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

function addHover(){ //change background color 
    let square = document.querySelectorAll('.square');
    square.forEach((div) => {
        div.addEventListener('mouseover', e => {
            e.target.style.background = 'red';
        })
        div.addEventListener('click', e => {
            e.target.style.background = 'white';
        })
    })
};

function createNewBtn() { 
    let newButton = document.createElement('button');
    newButton.className = 'btn';
    newButton.textContent = 'Create a new grid';
    flexBtn.appendChild(newButton);

    newButton.addEventListener('click', ()=> {
    window.location.reload();
    })
}

function changeBtnText() {
    button.textContent = 'Already clicked!';
}
// add SAVE-PROGRESS button to freeze sketching - unable hover effect
// have both the number of columns and rows equal, otherwise alert "ERROR"
// set limit of the grid to 50x50, otherwise alert that it's too many blocks to generate
// instead of reloading the page, try to make the button refresh data and create a new sketch pad
// if 64 entered, then create 64x64 by a quick command without asking for the second number
// once the button for generating grid is clicked, show a pop-up message for a few seconds "The limit of this sketch pad is 50x50"
// add animation for displaying hover, make the changes appear more slowly