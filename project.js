document.addEventListener("DOMContentLoaded", function() {

    // create Object for Colors to be stored to
    let obj = {
        currentColor: 'black',
        selectedColor: null
    }




    // create array with pre-defined colors tp use in palette
    const colors = ['white','black', 'grey','slategrey',
    'silver', 'blue', 'green', 'seagreen', 'red',  'yellow','orange',
    'darkOrange','brown','purple','violet','olive','indigo','navy', 'cyan','tan',
    'skyBlue','sienna','rosybrown','firebrick','crimson','limegreen','gold'];


    // create MasterContainer that containers all other divs
    masterContainer()
    function masterContainer(){
        // create Master Container Header and styling.
        const container = document.createElement('div')
        const containerHeader = document.createElement('header')
        containerHeader.innerHTML = `<h1>Drew's Pixel Maker Program Ver.1a </h1>`;
        containerHeader.style.color = 'black'
        containerHeader.style.textAlign = 'center'
        containerHeader.style.fontFamily = 'Brush Script MT'
        container.appendChild(containerHeader);
        // create Master Container Styling rules
            container.classList.add('containerStyle')
        // Append container to document body, and invoke callbacks that append to master container. 
        document.body.appendChild(container);
        makeCanvas(container)
        colorIndicator(container)
        palette(colors,container)
        buttonArray(container)
    }


    function makeCanvas(container) {
        const canvas = document.createElement('div');
        // Canvas Styling
        canvas.classList.add('canvasStyle')
        
        // Canvas appending to container, and invoking makePixels which appends to Canvas.
        container.appendChild(canvas);
        makePixels(24, 60, canvas);    
    }

    function makePixels(rows, columns, canvas) {
        //  Defining rows
        for (let i = 0; i < rows; i++) {
            let row = document.createElement('div')
            row.style.display = 'flex'
            //  Defining columns
            for (let j = 0; j < columns; j++){
                // let column = document.createElement('div')
                // column.style.display = 'flex'
                // Defining pixel
                let pixel = document.createElement('div');
                pixel.classList.add('pixels')
                // Appending individual pixels to the row
                row.appendChild(pixel)
            }
            let stroke = false;
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
        // Appends row to 
        canvas.appendChild(row);
        }
    }

    
    function palette(colors,container){
        const palette = document.createElement('div')
      
        palette.classList.add('palette')
            for (let i = 0; i < colors.length; i++){
            let thisColor = colors[i]
            let colorItem = document.createElement('div')
            colorItem.classList.add('colorItem')    
                colorItem.addEventListener('click', (e) =>{
                obj.currentColor = e.target.style.backgroundColor
                let color = document.querySelector('.colorIndicatorPip')
                color.style.backgroundColor = e.target.style.backgroundColor
                
                })
            colorItem.style.backgroundColor = thisColor
            palette.appendChild(colorItem)
            }
        
        //
        container.appendChild(palette)
    }

    // function setCurrentColor(e) {
//     obj.currentColor = e.target.style.backgroundColor;
//     console.log(e.target);
// }
// function changeBackground(e) {
//     e.target.style.backgroundColor = obj.currentColor
//     console.log(e.target);
// }

    function buttonArray(container){
        const buttonArray = document.createElement('div');
        buttonArray.classList.add('buttonArray')
        
        const colorHeader = document.createElement('div')
        colorHeader.innerHTML = '<h1>Color Selector</h1>';
        colorHeader.classList.add('colorHeader')
        buttonArray.appendChild(colorHeader)
        const colorSelector = document.createElement('input');
        colorSelector.type = 'color';
        colorSelector.value = 'pink';
        colorSelector.id = 'color-picker';
        colorSelector.style.margin = '1rem'         
        colorSelector.addEventListener("input", (e) => {
            obj.currentColor = e.target.value
        }, false);
        colorSelector.addEventListener("change", (e) => {
            obj.currentColor = e.target.value;
            obj.selectedColor = e.target.value;
        }, false);
        buttonArray.appendChild(colorSelector) 

        container.appendChild(buttonArray)
    }

    function colorIndicator(container){
        const colorIndicator = document.createElement('div')
     
        colorIndicator.classList.add('colorIndicator')

        const colorIndicatorHeader = document.createElement('div')
        colorIndicatorHeader.innerHTML = '<h1>Current Color:<h1>'
        colorIndicatorHeader.style.color = 'black'
        colorIndicatorHeader.style.fontFamily = "Brush Script MT"
        colorIndicatorHeader.style.marginLeft = '1rem'
        colorIndicator.appendChild(colorIndicatorHeader)

        const colorIndicatorPip = document.createElement('div')
        colorIndicatorPip.className = 'colorIndicatorPip'
        colorIndicatorPip.style.border = '1px solid black';
        colorIndicatorPip.style.borderRadius = '20px'
        colorIndicatorPip.style.width = '50px';
        colorIndicatorPip.style.height = '20px';
        colorIndicatorPip.style.backgroundColor = obj.currentColor
        colorIndicatorPip.style.margin = '.5rem'
        colorIndicator.appendChild(colorIndicatorPip)
        




        container.appendChild(colorIndicator)

    }

})