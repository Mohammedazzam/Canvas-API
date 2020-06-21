//select the canvas Element
let theCanvas = document.getElementById('our-canvas'),
    //select context type
    theContext = theCanvas.getContext('2d');

// theContext.shadowColor = "black";
theContext.shadowColor = "rgba(0, 0, 0, .5)";
theContext.shadowBlur = 10;
theContext.shadowOffsetX = "20"; //"-20"
theContext.shadowOffsetY = "-20"; //"-20"
theContext.fillStyle = "green";
theContext.fillRect(50, 50, 200, 100);