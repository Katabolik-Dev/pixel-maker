document.addEventListener("DOMContentLoaded", function() {

const obj = {
    currentColor: null,
    selectedColor: null
}

const colors = ['white','black', 'grey','slategrey',
 'silver', 'blue', 'green', 'seagreen', 'red',  'yellow','orange',
 'darkOrange','brown','purple','violet','olive','indigo','navy', 'cyan','tan',
'skyBlue','sienna','rosybrown','firebrick','crimson'];


// makeCanvas();
// palette(colors)

masterContainer()
function masterContainer(){
    const container = document.createElement('div')
    container.classList.add('wrapper-main')
    container.style.border = '5px solid black'
    container.style.borderRadius = '40px'
    container.style.width = '80%'
    container.style.height = '100%'
    container.style.display = 'flex'
    container.style.backgroundColor = 'lightgrey'
    container.style.padding = '1%'
    container.style.gap = '5px'
    container.style.flexDirection = 'column'
    // Append and Callbacks
    document.body.appendChild(container);
    makeCanvas(container)
    palette(colors,container)
    // colorInput(container)

}


function makeCanvas(container) {
    const canvas = document.createElement('div');
    // HEADER STYLE
        // const header = document.createElement('header');
        // header.innerHTML = '<h2>CANVAS</h2>';
        // header.style.color = 'black';
        // header.style.textAlign = 'center'
        // canvas.appendChild(header)
    // CONTAINER STYLE
    canvas.style.border = '10px solid black';
    canvas.style.width = '100%';
    canvas.style.height = '50%';
    canvas.style.margin = '0 auto';
    canvas.style.display = 'flex';
    canvas.style.flexDirection = 'column';
    canvas.style.justifyContent = 'center';
    // canvas.style.marginTop = '1rem';
    canvas.style.backgroundColor = 'white'
    // canvas.style.padding = "1%"

    // CONTAINER APPENDING & CALLBACK EXECUTION
    container.appendChild(canvas);
    makePixels(30, 60, canvas);    
}

function makePixels(rows, columns, canvas) {
    //  DEFINING ROWS FOR SQUARES
    for (let i = 0; i < rows; i++) {
        let row = document.createElement('div')
        row.style.display = 'flex'
        //  DEFINING ROWS FOR SQUARES
        let stroke = false; 
        for (let j = 0; j < columns; j++){
            let column = document.createElement('div')
            column.style.display = 'flex'
            // DEFINING SQUARE 
            let pixel = document.createElement('div');
            pixel.style.width = '20px';
            pixel.style.height = '20px';
            pixel.style.border = 'thin solid slategrey';
            pixel.style.float = 'left';
            // pixel.addEventListener('click', changeBackground);

            row.appendChild(pixel)
        }
        canvas.addEventListener('mousedown', (e)  => {
            e.target.style.background = obj.currentColor
            if (e.button === 0){                
                stroke = true
             }
        });
        canvas.addEventListener('mouseover', (e) => {
            if(stroke === true){
            e.target.style.background = obj.currentColor
            }
        })
               
        canvas.addEventListener('mouseup', (e) => {
            e.target.style.background = obj.currentColor
            if (e.button === 0){
                stroke = false;
            }
        }) 
    canvas.appendChild(row);
    }
}

function palette(colors,container){
    const palette = document.createElement('div')

    const header = document.createElement('header');
    header.innerHTML = '<h1>Current Color: </h1>';
    header.style.color = 'black';
    header.style.textAlign = 'center'
    header.style.margin = '0 auto'
    palette.appendChild(header)

    
    


    palette.style.border = '5px solid black' 
    palette.style.borderRadius = '30px'
    palette.style.width = '100%';
    palette.style.height = '20%';
    palette.style.margin = '0 auto'
    palette.style.display = 'flex'
    palette.style.flexWrap = 'wrap';
    palette.style.flexDirection = 'row';
    palette.style.justifyContent = 'center'
    palette.style.marginTop = '1rem'
    palette.style.backgroundColor = 'white'
    palette.style.padding = "1%"
    palette.style.gap = '4px 4px'

    const colorInput = document.createElement('input');
        const colorInputHeader = document.createElement('h1')
        colorInputHeader.innerHTML = "Hello"
        colorInput.appendChild(colorInputHeader); 
        colorInput.type = 'color';
        colorInput.value = '#ff0000'; // Fix the value formatting
        colorInput.id = 'color-picker';
        colorInput.style.marginRight = '3rem'
        
        
    
        colorInput.addEventListener("input", (e) => {
            obj.currentColor = e.target.value
        }, false);
        colorInput.addEventListener("change", (e) => {
            obj.currentColor = e.target.value;
            obj.selectedColor = e.target.value;
            header.innerHTML = `<h1>Current Color: ${obj.currentColor.toUpperCase()} </h1>`
        }, false);
        palette.appendChild(colorInput) 
        palette.insertBefore(colorInput, header)


    for (let i = 0; i < colors.length; i++){
        currentColor = colors[i]
        let colorItem = document.createElement('div')
        // colorItem.style.width = '15px';
        // colorItem.style.height = '15px';
        colorItem.style.padding = '15px'
        // colorItem.style.float = 'right';
        colorItem.style.border = '3px solid black'
        colorItem.style.borderRadius = '20px'

        // Set current color to match palette item
        colorItem.addEventListener('click', (e) =>{
            obj.currentColor = e.target.style.backgroundColor
            header.innerHTML = `<h1>Current Color: ${obj.currentColor.toUpperCase()} </h1>`
            header.style.color = obj.currentColor;
            if (obj.currentColor === 'white'){
                header.style.color = 'black'
            }
        })
        colorItem.style.backgroundColor = currentColor
        // console.log(currentColor)
        palette.appendChild(colorItem)
    }
    //
    container.appendChild(palette)
}


/* <input type="color" value="#ff0000" id="color-picker" /> */

// function setCurrentColor(e) {
//     obj.currentColor = e.target.style.backgroundColor;
//     console.log(e.target);
// }

// function changeBackground(e) {
//     e.target.style.backgroundColor = obj.currentColor
//     console.log(e.target);
// }



    // tile.adde
    // tile.addEventListener('click', changeBackground);
})