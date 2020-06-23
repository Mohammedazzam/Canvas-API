//select the canvas Element
let theCanvas = document.getElementById('our-canvas'),
    //select context type
    theContext = theCanvas.getContext('2d');

theContext.globalAlpha = 0.1

theContext.strokeStyle = '#aaa';
theContext.lineWidth = 5;
theContext.moveTo(300, 0)
theContext.lineTo(300, 400);
theContext.stroke();

theContext.direction = 'rtl'


theContext.font = '30px Tahoma';
theContext.fillStyle = '#f00';


theContext.textAlign = 'start'
theContext.fillText("Start", 300, 50)

theContext.textAlign = 'end'
theContext.fillText("End", 300, 100)

theContext.textAlign = 'center'
theContext.fillText("Center", 300, 150)

theContext.textAlign = 'left'
theContext.fillText("Left", 300, 200)

theContext.textAlign = 'right'
theContext.fillText("Right", 300, 250)