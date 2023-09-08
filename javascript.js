const gridSlider = document.querySelector('.slider');
const gridValueDisplay = document.querySelector('.display');
let gridValue = gridSlider.value;
const frame = document.querySelector('.container');

gridSlider.addEventListener('click', () => {
    gridValue = gridSlider.value;
    gridValueDisplay.textContent=gridValue;
    addRows(gridValue);
    addColumns(gridValue);
});


function addColumns(n) {
    for (i=0; i<n; i++) { //sets how many columns we will add
        const rows = document.querySelectorAll('.row');
        rows.forEach ( row => { //tells computer to add these columns to each row
            const newSquares = document.createElement('div');
            let size = (500/n); 
            newSquares.setAttribute('style', 
            `width: ${size}px;
            height: ${size-2}px;`); //sets a dynamic size of the divs
            row.appendChild(newSquares);
        })
    }
}

function addRows(n) {
    for (i=0; i<n; i++) {
        const newRows = document.createElement('div');
        newRows.classList.add('row');
        frame.appendChild(newRows);
    }
}