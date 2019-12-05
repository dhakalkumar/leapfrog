var canvas = document.getElementById('mycanvas');
var context = canvas.getContext('2d');
var phase = 0;
var speed = 0.05;
var maximumRadius = 7;
var frameCount = 0;
var numRows = 10;
var numCols = 12;
var numStrands = 12;
var y;

function draw() {

    context.clearRect(0, 0, canvas.width, canvas.height);   
    context.fillStyle = '#043a4a';
    context.fillRect(0, 0, canvas.width, canvas.height);

    var x = 0;
    var offset = 0;
    frameCount++;
    phase = frameCount * speed;

    for (var count = 0; count < numStrands; count++) {
        if (count === 0) {
            var strandPhase = phase;
        } else {
            var strandPhase = phase + count * Math.PI;
        }
        x = 0;
        for (var col = 0; col < numCols; col++) {
            x += 30;
            offset = (col * 2 * Math.PI) / 10;

            for (var row = 0; row < numRows; row += 1) {
                var y = 150 + row * 10 + Math.sin(strandPhase + offset) * 50;

                var sizeOffset = (Math.cos(strandPhase - (row * 0.1) + offset) + 1) * 0.5;
                var circleRadius = sizeOffset * maximumRadius;

                context.beginPath();
                context.arc(x, y, circleRadius, 0, Math.PI * 2);
                context.fillStyle = '#fd9a87';
                context.fill();
                context.closePath();
            }
        }
    }
}

setInterval(draw, 20);