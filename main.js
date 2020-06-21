//select the canvas Element
let theCanvas = document.getElementById('our-canvas'),
    //select context type
    theContext = theCanvas.getContext('2d')

//Begin The Path
theContext.beginPath();

//Select The Start Positionof The Path
theContext.moveTo(100, 100);

//Select The Path Points
theContext.lineTo(100, 300); //600 400
theContext.lineTo(300, 300);
theContext.lineTo(400, 200);
// theContext.lineTo(100, 100);

//closing the path
theContext.closePath();

//Border styling
theContext.lineWidth = 8;
theContext.strokeStyle = "red"

//Draw The Path
theContext.stroke();

//Fill The Shape

theContext.fillStyle = "green"
theContext.fill();