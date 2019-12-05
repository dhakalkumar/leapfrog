; (function () {

    var SPEED = 10;

    function PlayerCar(height, width, parentElement) {
        this.height = height;
        this.width = width;
        this.parentElement = parentElement;
        this.element = null;
        this.possibleDirection = 2;

        // this.lane = randomLane();

        var that = this;

        this.drawCar = function () {
            var car = document.getElementById('car');
            // console.log('car: ', car);

            car.style.width = this.width + 'px';
            car.style.height = this.height + 'px';
            car.style.bottom = '0px';
            car.style.left = '60px';
            // car.style.left = this.lane;

            car.style.backgroundRepeat = 'no-repeat';
            car.style.backgroundSize = 'contain';
            car.style.backgroundPosition = 'center';
            car.style.position = 'absolute';

            car.classList.add('car');
            this.parentElement.appendChild(car);
            this.element = car;
            // console.log('inside drawCar() function');


            return this;
        }

        // move car left/right 
        this.moveCar = function (e) {
            var key = 0;
            console.log('inside moveCar()');
            document.addEventListener('keydown', function (e) {
                key = e.keyCode;
                var currentPosition = parseInt(that.element.style.left.replace('px', '').trim());

                // left arrow 	37
                // right arrow 	39 
                // lane position | 0 || 60 || 130 |
                var lane1 = 0, lane2 = 60, lane3 = 130;

                setTimeout(function () {
                    console.log('inside setTimeout()');
                    if (key === 37 && currentPosition === lane2 && that.possibleDirection === 2) {
                        that.element.style.left = lane1 + 'px';
                        this.currentPosition = parseInt(that.element.style.left.replace('px', '').trim());
                        that.possibleDirection = 1;
                        console.log('key: ', key);
                    }
                    else if (key === 37 && currentPosition === lane3 && that.possibleDirection === 1) {
                        that.element.style.left = lane2 + 'px';
                        this.currentPosition = parseInt(that.element.style.left.replace('px', '').trim());
                        that.possibleDirection = 2;
                        console.log('key: ', key);

                    }
                    else if (key === 39 && currentPosition === lane2 && that.possibleDirection === 2) {
                        that.element.style.left = lane3 + 'px';
                        this.currentPosition = parseInt(that.element.style.left.replace('px', '').trim());
                        that.possibleDirection = 1;
                        console.log('key: ', key);

                    }
                    else if (key === 39 && currentPosition === lane1 && that.possibleDirection === 1) {
                        that.element.style.left = lane2 + 'px';
                        this.currentPosition = parseInt(that.element.style.left.replace('px', '').trim());
                        that.possibleDirection = 2;
                        console.log('key: ', key);

                    }
                }, 0);
            });
        }
    }

    function OtherCars(height, width, parentElement, position) {
        this.height = height;
        this.width = width;
        this.position = position;
        this.element = null;
        this.parentElement = parentElement;
        this.distance = 0;

        var that = this;

        function randomTraffic() {
            var randomNumber = Math.floor(Math.random() * 3) + 1;
            if (randomNumber === 1) {
                return 'url(/images/car1.png)';
            }
            else if (randomNumber === 2) {
                return 'url(/images/car2.png)';
            }
            else {
                return 'url(/images/car3.png)';
            }
        }

        this.drawTraffic = function () {
            var traffic = document.createElement('div');
            traffic.style.width = this.width + 'px';
            traffic.style.height = this.height + 'px';
            traffic.style.top = -300 + 'px';
            traffic.style.position = this.position + 'px';
            traffic.style.backgroundImage = randomTraffic();
            traffic.classList.add('traffic');
            this.element = traffic;

            return this;
        }
        this.destroyTraffic = function () {
            this.parentElement.removeChild(this.element);
        }
        this.updateTraffic = function () {
            that.element.style.top = that.distance + 'px';
            that.distance += SPEED;
        }

    }

    function Game(heightPlayer, widthPlayer, heightOtherCars, widthOtherCars, parentElement) {
        var traffic = [];
        this.heightPlayer = heightPlayer;
        this.widthPlayer = widthPlayer;
        this.parentElement = parentElement;
        this.heightOtherCars = heightOtherCars;
        this.widthOtherCars = widthOtherCars;
        var distanceTravelled = 0;
        this.pos = 0;
        var trafficCount = 0;

        var that = this;

        var lane = {
            'first': 0,
            'second': 60,
            'third': 130
        }
        var score = 0;
        this.randomLane = function () {
            return Math.floor(Math.random() * 100 + 1);
        }

        this.generateTraffic = function () {

            if (this.randomLane() >= 0 && this.randomLane() < 60) {
                traffic[trafficCount++] = new OtherCars(heightOtherCars, widthOtherCars, parentElement, lane.first).drawTraffic();
                traffic[trafficCount++] = new OtherCars(heightOtherCars, widthOtherCars, parentElement, lane.third).drawTraffic();
            } else if (this.randomLane() >= 60 && this.randomLane() < 130) {
                traffic[trafficCount++] = new OtherCars(heightOtherCars, widthOtherCars, parentElement, lane.second).drawTraffic();
            } else if (this.randomLane() >= 130 && this.randomLane() < 230) {
                traffic[trafficCount++] = new OtherCars(heightOtherCars, widthOtherCars, parentElement, lane.first).drawTraffic();
                traffic[trafficCount++] = new OtherCars(heightOtherCars, widthOtherCars, parentElement, lane.second).drawTraffic();
            } else {

                traffic[trafficCount++] = new OtherCars(heightOtherCars, widthOtherCars, parentElement, lane.second).drawTraffic();
                traffic[trafficCount++] = new OtherCars(heightOtherCars, widthOtherCars, parentElement, lane.third).drawTraffic();
            }

        }


        this.collisionDetection = function (player) {
          for (var i = 0; i < traffic.length; i++) {
                if (parseInt(player.element.style.bottom.replace("px", "").trim()) < parseInt(traffic[i].element.style.top.replace("px", "").trim()) - 300
                    && ((traffic[i].element.style.left === '0px' && player.element.style.left === '0px')
                        || (traffic[i].element.style.left === '60px' && player.element.style.left === '60px')
                        || (traffic[i].element.style.left === '120px' && player.element.style.left === '120px'))) {
                   
                            clearInterval(play);

                    setTimeout(this.gameOver(), 30);
                }
            }
        }

        this.newGame = function () {
            this.player = new PlayerCar(this.heightPlayer, this.widthPlayer, this.parentElement).drawCar();
            this.player.moveCar();
            var interval = setInterval(function () {
                if (this.pos != 1000) {
                    this.playGame(this.player);
                    distanceTravelled += 10;

                }
                else {
                    distanceTravelled = 0;
                    clearInterval(interval);
                }


            }.bind(this), 50);
        }

        this.playGame = function (player) {
            // console.log('playerCar: ', this);
            this.parentElement.style.backgroundPositionY = this.pos + 'px';
            this.pos += SPEED;
            // console.log('pos: ', this.pos);
            // this.moveCar();
            for(var i = 0; i<traffic.length; i++){
                traffic[i].updateTraffic();
                this.collisionDetection(player);
                if(parseInt(traffic[i].element.style.top.replace('px','').trim()) >= 650) {
                    traffic[i].destroyTraffic();
                    traffic.splice(i,1);
                    trafficCount--;
                }
            }
        }
    };

    var parentElement = document.getElementById('road');
    var playGame = new Game(300, 100, 190, 100, parentElement);
    // console.log('parentElement: ', parentElement);
    // console.log('playGame: ', playGame);
    playGame.newGame();

})();