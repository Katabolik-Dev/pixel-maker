const obj = {
    currentColor: null
}

const colors = ['white','black', 'grey','slategrey',
 'silver', 'blue', 'green', 'red',  'yellow', 'brown',
'purple','violet','olive','orange','indigo','cyan' ];

makeCanvas();
palette(colors)
function makeCanvas() {
    const canvas = document.createElement('div');
    // HEADER STYLE
    const header = document.createElement('header');
    header.innerHTML = '<h2>CANVAS</h2>';
    header.style.color = 'black';
    header.style.textAlign = 'center'
    canvas.appendChild(header)
    // CONTAINER STYLE
    canvas.style.border = '3px solid red';
    canvas.style.width = '70%';
    canvas.style.height = '50%';
    canvas.style.margin = '0 auto';
    canvas.style.display = 'flex';
    canvas.style.flexDirection = 'column';
    canvas.style.justifyContent = 'center';
    canvas.style.marginTop = '1rem';
    canvas.style.backgroundColor = 'white'
    canvas.style.padding = "1%"

    // CONTAINER APPENDING & CALLBACK EXECUTION
    document.body.appendChild(canvas);
    makeTiles(60, 120, canvas);
}

function makeTiles(rows, columns, canvas) {
    //  DEFINING ROWS FOR SQUARES
    for (let i = 0; i < rows; i++) {
        let row = document.createElement('div')
        row.style.display = 'flex'
        //  DEFINING ROWS FOR SQUARES
        
        for (let j = 0; j < columns; j++){
            let column = document.createElement('div')
            column.style.display = 'flex'
            // DEFINING SQUARE 
            let tile = document.createElement('div');
            tile.style.width = '10px';
            tile.style.height = '10px';
            tile.style.border = 'thin solid slategrey';
            tile.style.float = 'left';
        
            tile.addEventListener('click', changeBackground);
            row.appendChild(tile)
        }
    canvas.appendChild(row);
    }
}

function palette(colors){
    const palette = document.createElement('div')

    const header = document.createElement('header');
    header.innerHTML = '<h2>PALETTE</h2>';
    header.style.color = 'black';
    header.style.textAlign = 'center'
    header.style.margin = '0 auto'
    palette.appendChild(header)

    palette.style.border = '3px solid blue' 
    palette.style.width = '10%';
    palette.style.height = '10%';
    palette.style.margin = '0 auto'
    palette.style.display = 'flex'
    palette.style.flexWrap = 'wrap';
    palette.style.flexDirection = 'column';
    palette.style.justifyContent = 'center'
    palette.style.marginTop = '1rem'
    palette.style.backgroundColor = 'grey'
    palette.style.padding = "1%"
    palette.style.gap = '3px 3px'

    for (let i = 0; i < colors.length; i++){
        currentColor = colors[i]
        let colorItem = document.createElement('div')
        colorItem.style.width = '10%';
        colorItem.style.height = '10%';
        colorItem.style.padding = '10px'
        colorItem.style.float = 'left';
        colorItem.style.border = '1px solid black'
        colorItem.addEventListener('click', setCurrentColor)
        colorItem.style.backgroundColor = currentColor
        console.log(currentColor)

        palette.appendChild(colorItem)
    }


    //
    document.body.appendChild(palette)
    


}


function setCurrentColor(e) {
    obj.currentColor = e.target.style.backgroundColor;
    console.log(e.target);
}

function changeBackground(e) {
    e.target.style.backgroundColor = obj.currentColor
    console.log(e.target);
}