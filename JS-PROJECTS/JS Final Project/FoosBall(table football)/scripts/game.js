;
(function GameLoop() {

    var canvas = document.getElementById('mycanvas');
    var context = canvas.getContext('2d');
    var CENTER_X = canvas.clientHeight / 2;
    var CENTER_Y = canvas.clientWidth / 2;
    // console.log('inside gameloop');
    // var ball = new Ball(CENTER_X, CENTER_Y, canvas);
    // var table = new Table(canvas);
    var logo = document.getElementById('logo');
    logo.style.display = 'block';
    logo.style.marginLeft = '250px';
    logo.style.marginTop = '50px';
    var field = document.getElementById('field');
    // field.style.display = 'block';

    context.drawImage(field, 0, 70, canvas.width, canvas.height - 200);


    var updateGame = function () {

        updateBall(canvas, context);
        updatePlayers(canvas, context);
        updateTable(canvas, context);

    }

    // this.init = function() {

    //     var ball = new Ball(CENTER_X, CENTER_Y);
    //     var table = new Table(canvas);
    //     initPlayers();
    //     initGame();
    //     gameStart();

    // }

    // var initPlayers = function() {
    //     var playerRod = new Image();
    //     var cpuRod = new Image();
    //     playerRod.src = url('../images/rod1.png');
    //     playerRod.onload = function() {
    //         context.drawImage(playerRod, 20, 0);
    //         console.log('player rod drawn');
    //     }
    //     cpuRod.src = url('../images/rod2.png');
    //     cpuRod.onload = function() {
    //         context.drawImage(cpurod, 40, 0);
    //         console.log('cpu rod drawn');
    //     }
    //     console.log('inside initPlayers method');
    // }

    // var initGame = function() {


    // }

    // var updateGame = function() {
    //     context.clearRect(0, 0, canvas.clientWidth, canvas.clienth);
    //     gameStart();
    // }

    // // setInterval(this.init(), 15);
    // requestAnimationFrame(updateGame,15);

    setInterval(() => {
        updateGame();
    }, 1000);
})();
// GameLoop();
