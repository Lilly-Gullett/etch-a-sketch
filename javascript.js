const gridSlider = document.querySelector('.slider');
let gridValue = gridSlider.value;
const tools = document.querySelectorAll('button');
const colorWheelSelection =document.querySelector('#color');
let color = colorWheelSelection.value;

addRows(gridValue);
addColumns(gridValue); //sets the default grid

let divs = document.querySelectorAll('.coloringArea');

gridSlider.addEventListener('mousemove', () => {
    const gridValueDisplay = document.querySelector('.display');
    gridValue = gridSlider.value;
    gridValueDisplay.textContent=gridValue;
})

gridSlider.addEventListener('click', () => {
    removeGrid(gridValue);
    gridValue = gridSlider.value;
    addRows(gridValue);
    addColumns(gridValue);
    divs = document.querySelectorAll('.coloringArea'); //reestablishes this group after the prior grid is removed
    divs.forEach(div => div.addEventListener('mouseover', () => {
        div.style.background = `${color}`;
    }))
});

colorWheelSelection.addEventListener('change', () => {
    color = colorWheelSelection.value;
})

divs.forEach(div => div.addEventListener('mouseover', () => {
    div.style.background = `${color}`;
}))

function removeGrid(n) {
    const frame = document.querySelector('.container');
    const rows = document.querySelectorAll('.row');
    n *= n;
    rows.forEach( row => {
        frame.removeChild(row);
    })
}

function addColumns(n) {
    for (i=0; i<n; i++) { //sets how many columns we will add
        const rows = document.querySelectorAll('.row');
        rows.forEach ( row => { //tells computer to add these columns to each row
            const newSquares = document.createElement('div');
            let size = (600/n); 
            newSquares.setAttribute('style', 
            `width: ${size-2}px;
            height: ${size-2}px;`); //sets a dynamic size of the divs / 2 subtracted for borders
            newSquares.classList.add('coloringArea')
            row.appendChild(newSquares);
        })
    }
}

function addRows(n) {
    const frame = document.querySelector('.container');
    for (i=0; i<n; i++) {
        const newRows = document.createElement('div');
        newRows.classList.add('row');
        frame.appendChild(newRows);
    }
}