//select the canvas Element
let theCanvas = document.getElementById('our-canvas'),
    //select context type
    theContext = theCanvas.getContext('2d')

//Full Path
theCircle = 2 * Math.PI;
//Begin The Path
theContext.beginPath();

//Border styling
theContext.lineWidth = 8;
theContext.strokeStyle = "red"

// theContext.arc(300, 200, 150, 0, 5.28319) //6.28319 , true
// theContext.arc(300, 200, 150, 0, 1 * Math.PI)
// theContext.arc(300, 200, 150, 0, 1.5 * Math.PI)
// theContext.arc(300, 200, 150, 0, 2 * Math.PI)
// theContext.arc(300, 200, 150, 0, 0.5 * Math.PI)
theContext.arc(300, 200, 150, 0, 0.7 * theCircle)


//Draw The Path
theContext.stroke();