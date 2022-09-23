let container = document.querySelector('#container');

function createDivs() {
    for (let i=1; i<=4; i++) {
        for (let j=1; j<=4; j++){
            let div = document.createElement('div');
            div.className = `square`;
            div.textContent = `${i}`;
            container.appendChild(div);
        }
}}

createDivs();




