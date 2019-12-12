var updatePlayers = function (canvas, context) {
    // console.log('inside updatePlayers()');
    var rod1 = document.getElementById('rod1');
    var rod2 = document.getElementById('rod2');

    // rod1.style.display = 'block';
    // rod2.style.display = 'block';

    var rod1Array = [];
    var rod2Array = [];
    for (var i = 0; i < 4; i++) {

        rod1Array.push(rod1);
        context.drawImage(rod1Array[i], 40 + i * 140, 30, 30, canvas.height - 50);

        rod2Array.push(rod2);
        context.drawImage(rod2Array[i], 105 + i * 140, 0, 30, canvas.height - 50);

    }


}