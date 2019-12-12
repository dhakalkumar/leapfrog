;
// var canvas = document.getElementById('mycanvas');
// var context = canvas.getContext('2d');

// function Ball(ballX, ballY, canvas) {
//     this.ballX = ballX;
//     this.ballY = ballY;
//     this.context = canvas.getContext('2d');
//     this.ballImage = new Image();
//     this.ballImage.src = "url('../images/ball1.png')";
//     this.ballImage.onload = function () {
//         context.drawImage(this.ballImage, ballX, ballY);
//         console.log('ball drawn');
//     }


//     this.updateBall = function () {
//         console.log('inside updateBall');
//         // var ball = new Ball(ballX, ballY, canvas);
//         this.context.drawImage(this.ballImage, 200, 200);
//     }

// }

var updateBall = function(canvas, context) {

    var ball = document.getElementById('ball');
    context.drawImage(ball, canvas.width/2 - 20, canvas.height/2 - 40);




    // ballImage = new Image();
    // ballImage.src = "url('../images/ball1.png')";
    // ballImage.onload = function() {
    //     drawImage(ballImage, 100, 100);
    // }
    // console.log('inside updateBall()');

}
