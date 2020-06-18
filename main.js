//select the canvas Element
let theCanvas = document.getElementById('our-canvas'),
    //select context type
    theContext = theCanvas.getContext('2d')

//Begin The Path
theContext.beginPath();

//Select The Start Positionof The Path
theContext.moveTo(0, 0); //(0,0) (650,0)

//Select The Path Points
theContext.lineTo(325, 170); //(200,100)(200,20)


//Select The Start Positionof The Path
theContext.moveTo(650, 0);

//Select The Path Points
theContext.lineTo(325, 170);

//Adjust Style and Line Width
theContext.strokeStyle = "#00f";
theContext.lineWidth = 5;

//Draw The Path
theContext.stroke()