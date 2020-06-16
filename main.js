//select the canvas Element
let theCanvas = document.getElementById('our-canvas'),
    //select context type
    theContext = theCanvas.getContext('2d'),
    //The Gradient
    theGradient = theContext.createLinearGradient(0, 0, 200, 0);

//Add Color Stops
theGradient.addColorStop(0, "red");
theGradient.addColorStop(1, "blue");

//control Line Width
// theContext.lineWidth = 10

//chose Stroke style
theContext.strokeStyle = theGradient;

//Draw Rectangle
theContext.strokeRect(20, 20, 200, 100)

//set Font
theContext.font = "32px Tahoma";


//create Filled Text    

// theContext.fillStyle = theGradient
// theContext.fillText('Hello  canvas', 50, 50)


theContext.strokeStyle = theGradient
theContext.strokeText('Hello  canvas', 50, 50)