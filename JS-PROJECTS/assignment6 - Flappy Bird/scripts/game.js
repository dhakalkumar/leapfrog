var bird;
var pipesArray = [];

var myScore;
// var score_value = 0;
var myBackground;
var myMoving_background;
// var background_sound;
var jump_sound;
var gameover_sound;
var crossing_sound;
var bird_prev_state;
var start_image;
var event_listener;
var restart_image;
var gameover_image;
// var Highscore_value = 0;
// var Highscore;

var GameArea = {
    canvas: document.getElementById('mycanvas'),

    start: function() {
        pipesArray = [];
        // score_value = 0;
        this.canvas.width = 480;
        this.canvas.height = 290;
        this.context = this.canvas.getContext("2d");

        this.frameNo = 0;
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        
        this.interval = setInterval(updateGame, 20);
        window.addEventListener("keydown", event_listener = function(event) {
            if (event.keyCode == '32') {
                jump_sound.Play();
                bird.y -= 30;
                bird.gravitySpeed = 0;

            }

        }, true);
    },
    clear: function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop: function() {
        clearInterval(this.interval);
    }
}



function updateGame() {
    var x, y1, y2, obstacle_height;
    for (i = 0; i < pipesArray.length; i += 1) {
        if (bird.crashWith(pipesArray[i])) {
            gameover_sound.Play();
            restart_image = new component(250, 80, "./images/restart.png", 150, 100, "image");
            restart_image.update();
            GameArea.stop();
            setTimeout(restart, 200);
        }
        if (pipesArray[i].x + 20 < 0) {
            // score_value++;
            pipesArray.splice(i, 1);
        }
    }
    GameArea.clear();
    myBackground.update();
    myMoving_background.newPos();
    myMoving_background.update();
    bird.y += 1;
    bird.newPos();

    bird.update();
    GameArea.frameNo += 1;
    if (GameArea.frameNo == 1 || everyinterval(150)) {
        x = GameArea.canvas.width; //width
        minHeight = 100;
        maxHeight = 200;
        height = Math.floor(Math.random() * (maxHeight - minHeight + 1) + (minHeight / 2));
        minGap = 80;
        maxGap = 100;
        gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
        pipesArray.push(new component(20, height, "./images/pipe1.png", x, 0, "image"));
        pipesArray.push(new component(20, 270 - height - gap, "./images/pipe0.png", x, height + gap, "image"));
    }
    for (i = 0; i < pipesArray.length; i += 1) {
        pipesArray[i].x += -1;
        pipesArray[i].update();
    }
   
}


function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.Play = function() {
        this.sound.play();
    }
    this.stop = function() {
        this.sound.pause();
    }
}

function everyinterval(n) {
    if ((GameArea.frameNo / n) % 1 == 0) { return true; }
    return false;
}



function bird_box(width, height, color, x, y, type) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speedY = 1;
    this.gravity = 0.005;
    this.gravitySpeed = 0;
    if (type == "image") {
        this.image = new Image();
        this.image.src = color;
    }
    this.update = function() {
        ctx = GameArea.context;
        if (type == "image") {
            ctx.drawImage(this.image,
                this.x,
                this.y,
                this.width, this.height);
        } else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
    this.newPos = function() {
        this.gravitySpeed += this.gravity;
        // if (this.gravitySpeed == 0) { bird_prev_state.restore(); }
        this.y += this.speedY + this.gravitySpeed;
        var rockbottom = GameArea.canvas.height - (this.height + 18);
        if (this.y > rockbottom) {
            this.y = rockbottom;
            // new sound("./audio/sfx_flap.wav");
            gameover_sound.Play();
            GameArea.stop();
            restart_image = new component(250, 80, "./images/restart.png", 150, 100, "image");
            restart_image.update();
            setTimeout(restart, 200);
        }



    }

    this.crashWith = function(otherobj) {
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.width);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.height);
        var crash = true;
        if ((mybottom < othertop) ||
            (mytop > otherbottom) ||
            (myright < otherleft) ||
            (myleft > otherright)) {
            crash = false;
        }
        return crash;
    }

}




function component(width, height, color, x, y, type) {
    this.type = type;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speedX = -1;
    if (type == "image" || type == "background") {
        this.image = new Image();
        this.image.src = color;
    }

    this.update = function() {
        ctx = GameArea.context;
        if (type == "image" || type == "background") {
            ctx.drawImage(this.image,
                this.x,
                this.y,
                this.width, this.height);
            if (type == "background") {
                ctx.drawImage(this.image, this.x + this.width, this.y, this.width, this.height);
            }
        } else if (this.type == "text") {
            
            ctx.font = this.width + " " + this.height;
            ctx.fillStyle = color;
            ctx.fillText(this.text, this.x, this.y);

        } else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
    this.newPos = function() {
        this.x += this.speedX;
        if (this.type == "background") {
            if (this.x == -(this.width)) {
                this.x = 0;
            }
        }

    }

}
