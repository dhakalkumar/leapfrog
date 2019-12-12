;
// function Table(canvas) {
    var updateTable = function (canvas, context) {
        this.canvas = canvas;
        // this.context = canvas.getContext('2d');
        var table = document.getElementById('table');
        context.drawImage(table, 0, 70, canvas.width, canvas.height - 200);
        

        // console.log('table drawn');
    }
// }