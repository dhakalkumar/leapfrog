; (function () {
    function Box(parentElement) {
        this.x = 10;
        this.y = 10;
        this.directionX = getRandomArbitrary(-2,2);
        this.directionY =  getRandomArbitrary(-2,2);

        this.angle = 10 * Math.atan(getRandomArbitrary(0,360) / getRandomArbitrary(1,360));
        console.log(this.angle);

        this.speed = 2;
        this.width = 30;
        this.height = 30;
        this.element = null;
        this.parentElement = parentElement;
        var MAX_BOX_WIDTH = 800;
        var MAX_BOX_HEIGHT = 500;
        var that = this;
        const randNum = () => Math.floor(Math.random() * 256);
        
        var randomColor = function() {
            var r = randNum().toString(16);
            var g = randNum().toString(16);
            var b = randNum().toString(16);

            r.length < 2 ? (r = '0' + r) : r;
            g.length < 2 ? (g = '0' + g) : g;
            b.length < 2 ? (b = '0' + b) : b;


            // if(boxColor.length < 2){
            //     boxColor = '0' + boxColor;
            // }
            // console.log('boxColor:', boxColor+ boxColor+ boxColor);

            return ('#' + r + g + b);
        };
        
        this.init = function () {
            var box = document.createElement('div');
            box.style.height = this.height + 'px';
            box.style.width = this.width + 'px';
            // box.style.background = 'rgb(${randNum()},${randNum()},${randNum()})';
            box.style.background = randomColor();
           
            box.classList.add('box');
            this.parentElement.appendChild(box);
            this.element = box;
            // this.element.onclick = this.boxClicked.bind(this);
            this.draw();

            return this;
        }

        this.setPostion = function (x, y) {
            this.x = x + this.directionX;
            this.y = y + this.directionY;
        }

        this.draw = function () {
            this.element.style.left = this.x + 'px';
            this.element.style.top = this.y + 'px';
        }

        this.move = function () {
            this.x += (this.directionX * this.speed);
            this.y += (this.directionY * this.speed);

            if( (this.x+this.width) > MAX_BOX_WIDTH ){
                this.x = MAX_BOX_WIDTH - this.width;
            }
            if( (this.y+this.height) > MAX_BOX_HEIGHT ){
                this.y = MAX_BOX_HEIGHT - this.height;
            }

            // this.x += (getRandomArbitrary(0, this.directionX) * this.speed);
            // this.y += (getRandomArbitrary(0, this.directionY) * this.speed);

            this.draw();
        }


        this.checkWallCollision = function () {
            if (this.x <= 0 || (this.x+this.width) >= (MAX_BOX_WIDTH)) {
                this.directionX = -this.directionX;
            }

            if (this.y <= 0 || (this.y+this.height) >= (MAX_BOX_HEIGHT)) {
                this.directionY = -this.directionY;
            }
        }

     
        this.checkCollision = function (boxes) {
            this.checkWallCollision();
            for (var i = 0; i < boxes.length; i++) {
                

                // check collision with other balls
                for (var j = 0; j < boxes.length; j++) {
                    if(i != j){
                    var A = boxes[i];
                    var B = boxes[j];
                    
                   // debugger;
                 //   console.log('A.x: ', A.x, 'B.x: ', B.x);
                    
                    if((A.x + A.width >= B.x) &&
                       (A.y + A.height >= B.y) &&
                       (B.x + B.width >= A.x) &&
                       (B.x + B.height >= A.y)) {
                     
                           A.directionX = -A.directionX;
                           B.directionY = -B.directionY;
                       }
                    }

                    //  if(boxes[i].x < boxes[j].x + boxes[j].width && 
                    //     boxes[i].x + boxes[i].width > boxes[j].x &&
                    //     boxes[i].y < boxes[j].y + boxes[j].height &&
                    //     boxes[i].y + boxes[i].height > boxes[j].y){

                    //         boxes[i].directionX = -boxes[i].directionX;
                    //         boxes[i].directionY = -boxes[i].directionY;

                    //     }


                    //  A.X < B.X + B.Width
                    //  A.X + A.Width > B.X
                    //  A.Y < B.Y + B.Height
                    //  A.Y + A.Height > B.Y

                }
            }
        }
    }

    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }

    function Game(parentElement, boxCount) {
        var boxes = [];
        var MAX_WIDTH = 800;
        var MAX_HEIGHT = 500;
        this.parentElement = parentElement;
        this.boxCount = boxCount || 10;

        this.startGame = function () {
            for (var i = 0; i < this.boxCount; i++) {
                var box = new Box(parentElement).init();
                box.setPostion(
                    getRandomArbitrary(0, MAX_WIDTH-box.width),
                    getRandomArbitrary(0, MAX_HEIGHT-box.height)
                )
                box.draw();
                boxes.push(box);
            }

            this.moveBoxes();
           
        }

        this.moveBoxes = function () {
            for (var i = 0; i < this.boxCount; i++) {
                boxes[i].move();
                boxes[i].checkCollision(boxes);

            }
            //
            requestAnimationFrame(this.moveBoxes.bind(this));//, 100);
        }
    }

    var parentElement = document.getElementById('app');

    new Game(parentElement, 10).startGame();

})();





