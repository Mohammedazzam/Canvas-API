//select the canvas Element
let theCanvas = document.getElementById('our-canvas')

//select context type
theContext = theCanvas.getContext('2d')

//chose Fill style
theContext.fillStyly = '#000';

//Draw Rectangle
// theContext.fillRect(5, 0, 200, 150)
// theContext.fillRect(0, 0, 300, 150);
theContext.fillRect(0, 0, theCanvas.width, theCanvas.height);