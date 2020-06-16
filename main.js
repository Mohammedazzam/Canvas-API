//select the canvas Element
let theCanvas = document.getElementById('our-canvas'),

    //select context type
    theContext = theCanvas.getContext('2d'),

    //The Gradient
    theGradient = theContext.createLinearGradient(0, 0, 0, 0);


//Add Color Stops
theGradient.addColorStop(0, "red");
theGradient.addColorStop(1, "blue");


//Select he Image

let theImage = document.getElementById('our-image');

//create The Pattern


// let thePatern = theContext.createPattern(theImage, 'no-repeat')
// let thePatern = theContext.createPattern(theImage, 'repeat')
let thePatern = theContext.createPattern(theImage, 'repeat-x');

//chose Fill style
theContext.fillStyly = thePatern;

//Draw Rectangle
// theContext.fillRect(5, 0, 200, 150)
// theContext.fillRect(0, 0, 300, 150);
theContext.fillRect(0, 0, theCanvas.width, theCanvas.height);