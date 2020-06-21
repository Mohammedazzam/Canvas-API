//select the canvas Element
let theCanvas = document.getElementById('our-canvas'),
    //select context type
    theContext = theCanvas.getContext('2d');

theContext.fillStyle = "red";
theContext.fillRect(50, 50, 200, 100);


//Save The Clean State WithOut Any Scale Or Anything
theContext.save();
theContext.scale(2, 2); //2 2 
theContext.fillStyle = "green";
theContext.fillRect(50, 50, 200, 100);

//Restore The Clean State WithOut Any Scale Or Anything
theContext.restore();

theContext.translate(50, 50)
theContext.fillStyle = "blue";
theContext.fillRect(70, 70, 200, 100);