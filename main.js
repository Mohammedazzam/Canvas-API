//select the canvas Element
let theCanvas = document.getElementById('our-canvas'),
    //select context type
    theContext = theCanvas.getContext('2d');

//Background Rectangle
theContext.fillStyle = '#666';
theContext.fillRect(0, 0, 600, 400);

//Main Face Circle
theContext.beginPath();
theContext.fillStyle = '#ffff02'
theContext.arc(300, 200, 100, 0, Math.PI * 2);
theContext.fill() //هذا يقوم بقفل الرسمة تبعتي لهان

//Main Circle
theContext.beginPath();
theContext.fillStyle = '#fff'
theContext.arc(300, 200, 80, 0, Math.PI);
theContext.fill() //theContext.stroke() //هذا يقوم بقفل الرسمة تبعتي لهان

//Left Eye
theContext.beginPath();
theContext.fillStyle = '#000'
theContext.arc(260, 160, 15, 0, Math.PI * 2);
theContext.fill()


//Right Eye
theContext.beginPath();
theContext.fillStyle = '#000'
theContext.arc(340, 160, 15, 0, Math.PI * 2);
theContext.fill()


//Drow
// theContext.stroke();