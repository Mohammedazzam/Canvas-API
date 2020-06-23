//select the canvas Element
let theCanvas = document.getElementById('our-canvas'),
    //select context type
    theContext = theCanvas.getContext('2d');

//Background Rectangle
theContext.fillStyle = '#666';
theContext.fillRect(0, 0, 600, 400);

//First Circle
theContext.beginPath();
theContext.arc(300, 200, 100, 0, Math.PI * 2);
theContext.moveTo(300, 200);
theContext.arc(200, 200, 100, 0, Math.PI * 2);
theContext.stroke();