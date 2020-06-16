//select the canvas Element
let theCanvas = document.getElementById('our-canvas'),
    //select context type
    theContext = theCanvas.getContext('2d')

//cavas width
w = theCanvas.clientWidth,

    //canvas height
    h = theCanvas.height;

//Set Global Font
theContext.font = "30px Tahoma"

//Draw chart column
theContext.fillStyle = "#d35400";
theContext.fillRect(50, 50, 60, h - 50);
theContext.fillStyle = '#fff';
theContext.fillText("1", 70, h - 15);

//Draw chart column
theContext.fillStyle = "#16a085";
theContext.fillRect(150, 100, 60, h - 100);
theContext.fillStyle = '#fff';
theContext.fillText("2", 170, h - 15);

//Draw chart column
theContext.fillStyle = "#8e44ad";
theContext.fillRect(250, 180, 60, h - 100);
theContext.fillStyle = '#fff';
theContext.fillText("3", 270, h - 15);

//Draw chart column
theContext.fillStyle = "#c0392b";
theContext.fillRect(350, 200, 60, h - 200);
theContext.fillStyle = '#fff';
theContext.fillText("4", 370, h - 15);

//Draw chart column
theContext.fillStyle = "#27ea60";
theContext.fillRect(450, 250, 60, h - 250);
theContext.fillStyle = '#fff';
theContext.fillText("5", 470, h - 15);

//Draw chart column
theContext.fillStyle = "#2c3e50";
theContext.fillRect(550, 300, 60, h - 300);
theContext.fillStyle = '#fff';
theContext.fillText("6", 570, h - 15);