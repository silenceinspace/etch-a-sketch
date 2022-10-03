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
    createGrid()}, 
    {once:true} 
);

function createGrid(){
    container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    createColumns();
    createRows();
    addHover();
    //create a button for setting a new number of grid ???
    //create white background only on click
};

function createColumns() {
    for (let i=1; i<=columns; i++){
        let div = document.createElement('div');
        div.className = 'square';
        container.appendChild(div);
    }
}

function createRows() {
    for (let j=1; j<=rows*rows-rows; j++){ //it's important to do some math so that enough divs will be created
        let div = document.createElement('div');
        div.className = 'square';
        container.appendChild(div);
    }
}




// // change color of my divs on hover
function addHover(){
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