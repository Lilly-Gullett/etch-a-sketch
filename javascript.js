const gridSlider = document.querySelector('.slider');
const gridValueDisplay = document.querySelector('.display');
let gridValue = gridSlider.value;


addRows(gridValue);
addColumns(gridValue); //sets the default grid

gridSlider.addEventListener('mousemove', () => {
    removeGrid(gridValue);
    gridValue = gridSlider.value;
    gridValueDisplay.textContent=gridValue;
    addRows(gridValue);
    addColumns(gridValue);
});

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