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
            container.classList.add('containerStyle')
        // Append and Callbacks
        document.body.appendChild(container);
        makeCanvas(container)
        palette(colors,container)
        buttonArray(container)
    }


    function makeCanvas(container) {
        const canvas = document.createElement('div');
        // CONTAINER STYLE
        canvas.classList.add('canvasStyle')
        
        // CONTAINER APPENDING & CALLBACK EXECUTION
        container.appendChild(canvas);
        makePixels(60, 160, canvas);    
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
                pixel.classList.add('pixels')
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
        palette.classList.add('palette')
            for (let i = 0; i < colors.length; i++){
            currentColor = colors[i]
            let colorItem = document.createElement('div')
            colorItem.classList.add('colorItem')    
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
        buttonArray.classList.add('buttonArray')
        
        const colorHeader = document.createElement('div')
        colorHeader.innerHTML = '<h1>Color Selector</h1>';
        colorHeader.classList.add('colorHeader')
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
})