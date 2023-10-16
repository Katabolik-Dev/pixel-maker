document.addEventListener("DOMContentLoaded", function() {

// create Object for Colors to be stored to
const obj = {
    currentColor: null,
    selectedColor: null
}


// create Array with pre-defined colors
const colors = ['white','black', 'grey','slategrey',
 'silver', 'blue', 'green', 'seagreen', 'red',  'yellow','orange',
 'darkOrange','brown','purple','violet','olive','indigo','navy', 'cyan','tan',
'skyBlue','sienna','rosybrown','firebrick','crimson','limegreen','gold'];



// create MasterContainer that containers all other divs
masterContainer()
function masterContainer(){
    // create Master Container Header
    const container = document.createElement('div')
    const containerHeader = document.createElement('header')
    containerHeader.innerHTML = `<h1>Drew's Pixel Maker Program Ver.1a </h1>`;
    containerHeader.style.color = 'black'
    containerHeader.style.textAlign = 'center'
    containerHeader.style.fontFamily = 'Brush Script MT'
    container.appendChild(containerHeader);
    // create Master Container Styling rules
    container.classList.add('wrapper-main')
    container.style.border =  '3px solid black'
    container.style.borderRadius = '40px'
    container.style.width = '100%'
    container.style.height = '100%'
    container.style.display = 'flex'
    container.style.backgroundColor = 'lightgrey'
    container.style.padding = '2%'
    container.style.flexDirection = 'row'
    container.style.flexWrap = 'wrap'
    container.style.justifyContent = 'flex-start'
    // Append and Callbacks
    document.body.appendChild(container);
    makeCanvas(container)
    palette(colors,container)
    buttonArray(container)
}


function makeCanvas(container) {
    const canvas = document.createElement('div');
    // CONTAINER STYLE
    canvas.style.border = '5px solid black';
    canvas.style.width = '100%';
    canvas.style.height = '50%';
    canvas.style.margin = '0 auto';
    canvas.style.display = 'flex';
    canvas.style.flexDirection = 'column';
    canvas.style.backgroundColor = 'white'
    // canvas.style.padding = "1%"

    // CONTAINER APPENDING & CALLBACK EXECUTION
    container.appendChild(canvas);
    makePixels(30, 80, canvas);    
}

function makePixels(rows, columns, canvas) {
    //  DEFINING ROWS FOR PIXELS
    for (let i = 0; i < rows; i++) {
        let row = document.createElement('div')
        row.style.display = 'flex'
        //  DEFINING ROWS FOR PIXELS
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
            // Appending individual pixels to the area
            row.appendChild(pixel)
        }

        // Creating brush
        stroke = false;
        // Defines mousedown event, beginning the stroke.
        canvas.addEventListener('mousedown', (e)  => {
            e.target.style.background = obj.currentColor
            if (e.button === 0){                
                stroke = true
             }
        });
        // Defines main-stroke event
        canvas.addEventListener('mouseover', (e) => {
            if(stroke === true){
            e.target.style.background = obj.currentColor
            }
        })
        // Defines mouseup event, ending the stroke.     
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
  
    palette.style.border = '5px solid black' 
    palette.style.borderRadius = '30px'
    palette.style.width = '40%';
    palette.style.height = '5%';
    palette.style.margin = '0 auto'
    palette.style.display = 'flex'
    palette.style.flexWrap = 'wrap';
    palette.style.flexDirection = 'row';
    palette.style.justifyContent = 'center'
    palette.style.marginTop = '1rem'
    palette.style.backgroundColor = 'white'
    palette.style.padding = "1%"
    palette.style.gap = '4px 4px'

    for (let i = 0; i < colors.length; i++){
        currentColor = colors[i]
        let colorItem = document.createElement('div')
        colorItem.style.padding = '15px'
        colorItem.style.border = '3px solid black'
        colorItem.style.borderRadius = '20px'

        
        colorItem.addEventListener('click', (e) =>{
            obj.currentColor = e.target.style.backgroundColor

        })
        colorItem.style.backgroundColor = currentColor
        // console.log(currentColor)
        palette.appendChild(colorItem)
    }
    //
    container.appendChild(palette)
}

function buttonArray(container){
    const buttonArray = document.createElement('div');
    
    buttonArray.style.border = '5px solid black';
    buttonArray.style.borderRadius = '30px'
    buttonArray.style.width = '16%';
    buttonArray.style.height = '20%';
    buttonArray.style.margin = '0 auto';
    buttonArray.style.display = 'flex';
    buttonArray.style.flexWrap = 'wrap';
    buttonArray.style.flexDirection = 'row';
    buttonArray.style.justifyContent = 'flex-start'
    buttonArray.style.marginTop = '1rem'
    buttonArray.style.gap = '8px 8px'
    buttonArray.style.backgroundColor = 'white'

    const colorHeader = document.createElement('div')
    colorHeader.innerHTML = '<h1>Color Selector</h1>';
    colorHeader.style.fontFamily = 'Brush Script MT'
    colorHeader.style.color = 'black'
    colorHeader.style.margin = '.8rem'
    buttonArray.appendChild(colorHeader)
        
    const colorSelector = document.createElement('input');
    colorSelector.type = 'color';
    colorSelector.value = '#000000';
    colorSelector.id = 'color-picker';
    colorSelector.style.margin = '1rem'         
    colorSelector.addEventListener("input", (e) => {
        obj.currentColor = e.target.value
    }, false);
    colorSelector.addEventListener("change", (e) => {
        obj.currentColor = e.target.value;
        obj.selectedColor = e.target.value;
        header.innerHTML = `<h1>Current Color: ${obj.currentColor.toUpperCase()} </h1>`
    }, false);
    buttonArray.appendChild(colorSelector) 

    container.appendChild(buttonArray)
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