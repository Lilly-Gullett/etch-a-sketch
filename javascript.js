const rows = document.querySelectorAll('.row');

for (i=1; i<17;i++) {
    addDivs();
}

function addDivs() {
    rows.forEach (row => {
        const newSquares = document.createElement('div');
        row.appendChild(newSquares)
    })
}