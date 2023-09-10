const gridSlider = document.querySelector('.slider');
let gridValue = gridSlider.value;
const colorWheelSelection =document.querySelector('#color');
let color = colorWheelSelection.value;
let specialTool = 'off';

//tools to set the different color options
const colorSelector = document.querySelector('.color-selector');
colorSelector.addEventListener('click', () => {
    color=colorWheelSelection.value;
    specialTool = 'off'; //resets specialTool in case the last tool was shader or random color
})

const colorShader = document.querySelector('.shader');
colorShader.addEventListener('click', () => {
    color = '#000000';
    specialTool = 'shader';
})

const colorRandomizer = document.querySelector('.color-random');
colorRandomizer.addEventListener('click', () => {
    specialTool = 'random';
})

const eraser = document.querySelector('.eraser');
eraser.addEventListener('click', () => {
    color = '#FFFFFF';
    specialTool = 'off' //resets specialTool in case the last tool was shader or random
})

const clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
    removeGrid(gridValue);
    addRows(gridValue);
    addColumns(gridValue);
} )

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
        if (specialTool ==='random') {
            randomColorGenerator();
            div.style.background = `${color}`;
            div.style.opacity = '1';
        } else if (specialTool === 'shader') {
            div.style.background = `${color}`;
            if (div.style.opacity < 1.0) {
                div.style.opacity -= '-0.1';
            } else {
                div.style.opacity = '0.1';
            }
        } else {
            div.style.background = `${color}`;
            div.style.opacity = '1';
        }
    }))
});

colorWheelSelection.addEventListener('change', () => {
    color = colorWheelSelection.value;
})

divs.forEach(div => div.addEventListener('mouseover', () => {
    if (specialTool === 'random') {
        randomColorGenerator();
        div.style.background = `${color}`;
        div.style.opacity='1';
    } else if (specialTool === 'shader') {
        div.style.background = `${color}`;
        if (div.style.opacity < 1.0) {
            div.style.opacity -= '-0.1';
        } else {
            div.style.opacity = '0.1';
        }
    } else {
        div.style.background=`${color}`;
        div.style.opacity='1';
    }
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
            `width: ${size}px;
            height: ${size}px;`);
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

function randomColorGenerator() {
    let digits = ['1','2','3','4','5','6','7','8','9','0','A','B','C','D','E','F'];
    let randomHexCode ='#'
    for (i=1; i<7; i++) {
        let hexDigit = digits[Math.floor(Math.random()*digits.length)];
        randomHexCode += hexDigit;
    }
    color = `${randomHexCode}`;
}