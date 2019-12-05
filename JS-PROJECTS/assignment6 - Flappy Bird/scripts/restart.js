function restart() {
    window.removeEventListener("keydown", event_listener, true);
   
    var bird = 0;
    var pipesArray = [];

    var myBackground = 0;
    var myMoving_background = 0;
    var jump_sound = 0;
    var bird_prev_state = 0;
    var start_image = 0;

    window.addEventListener("keydown", event_listener = function(event) {
        if (event.keyCode == '32') {

            window.removeEventListener("keydown", event_listener, true);
            startGame();
        }
    }, true)

}

function startGame() {
    jump_sound = new sound("./audio/sfx_flap.wav");
    gameover_sound = new sound("./audio/sfx_die.wav");
    crossing_sound = new sound("./audio/sfx_point.wav");
    GameArea.start();
    restart_image = new component(250, 80, "./images/restart.png", 150, 100, "image");
    bird = new bird_box(30, 30, "./images/bird.gif", 10, 120, "image");
    myBackground = new component(480, 270, "./images/background.png", 0, 0, "image");
    myBackground.update();
    myMoving_background = new component(480, 20, "./images/bottom_background.png", 0, 270, "background");
   
    bird.update();
}

startGame();