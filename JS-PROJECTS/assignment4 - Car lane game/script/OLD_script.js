// ;
// (function () {
//     var SPEED = 5;
//     var refreshRate = 60;
//     function Car(parentElement) {
//         this.carWidth = 100;
//         this.carHeight = 150;
//         this.carX = 800;
//         this.carY = 600;
//         this.parentElement = parentElement;

//         var that = this;
//         this.drawCar = function () {
//             var car = document.createElement('div');
//             car.style.width = this.carWidth + 'px';
//             car.style.height = this.carHeight + 'px';
//             car.style.bottom = '0px';
//             car.style.left = '140px';

//             car.classList.add('car');

//             this.parentElement.appendChild(car);
//             this.element = car;

//             return this;
//         }

//         // move car (left/right)
//         this.moveCar = function () {

//         }


//     };

//     function OtherCars(height, widht, parentElement, position){

//         this.drawOtherCar = function() {

//         }

//         this.removeOtherCars = function() {

//         }
//         this.updateOtherCars = function() {

//         }
//     };
//     function Game(heightCar, widthCar, heightOtherCar, widthOtherCar, parentElement){
//         var traffic = [];
//         this.heightCar = heightCar;
//         this.widthCar = widthCar;
//         this.parentElement = parentElement;
//         this.heightOtherCar = heightOtherCar;
//         this.widthOtherCar = widthOtherCar;
//         var distanceTravelled = 0;

//         var that = this;

//         // generate traffic at random position
//         this.randomCars = function() { 

//         }
//         // collision detection
//         this.collisionDetection = function(car){

//         }

//         var posY = 0;
//         this.moveBackground = function() {
//             var bgRoad = document.getElementById('road');
//             posY += 1;
//             bgRoad.style.backgroundPositionY = posY;
//             console.log('bgRoad: ', bgRoad);
//         }

//         this.newGame = function() {
//             //var playerCar = new Car(this.parentElement).drawCar();
//             setInterval(this.moveBackground(), 50);
//         }

//     };

//     function Background(parentElement) {
//         this.parentElement = parentElement;
//         this.backgroundY = 0;
//         this.create = function () {
//             var mainWrapper = document.createElement('div');
//             mainWrapper.className = 'gameWrapper';
//             this.bg = document.createElement('div');
//             this.style.height = '10000px';
//             this.bg.style.width = '400px';
//             this.bg.style.position = 'absolute';
//             this.bg.style.backgroundRepeat = 'repeat-y';
//             this.bg.setAttribute('id', ' background');
//             mainWrapper.appendChild(this.bg);
//             this.parentElement.appendChild(mainWrapper);

//             setInterval(this.update.bind(this), 100);
//         };
//         this.update = function () {
//             this.backgroundY += 10;
//             this.bg.style.backgroundPositionY = this.backgroundY + 'px';
//         }
//     }










//     //     this.init = function () {
//     //         var mainCarDiv = document.createElement('div');
//     //         mainCarDiv.className = 'game-wrapper';
//     //         // var otherCarDiv = document.getElementById('traffic');
//     //         var mainCarImg = document.createElement('img');
//     //         var otherCarImg = document.createElement('img');
//     //         // mainCarImg.src = './images/mycar.png';
//     //         // otherCarImg.src = './images/car.jpeg';
//     //         mainCarImg.style.height = this.carHeight + 'px';
//     //         mainCarImg.style.width = this.carWidth + 'px';
//     //         mainCarImg.style.left = this.carX + 800 + 'px';
//     //         mainCarImg.style.top = this.carY + 600 + 'px';

//     //         document.getElementById('myCar').appendChild(mainCarImg);
//     //         // document.getElementById('otherCarDiv').appendChild(otherCarImg);
//     //         this.element = mainCarImg;
//     //         // this.draw();

//     //         return this;
//     //     }
//     //     this.draw = function () {
//     //         this.element.style.left = this.carX + 'px';
//     //         this.element.style.top = this.carY + 'px';
//     //     }

//     // }

//     // function Background(parentElement) {
//     //     this.parentElement = parentElement;
//     //     this.backgroundY = 0;
//     //     this.create = function () {
//     //         var mainWrapper = document.createElement('div');
//     //         mainWrapper.className = 'gameWrapper';
//     //         this.bg = document.createElement('div');
//     //         this.style.height = '10000px';
//     //         this.bg.style.width = '400px';
//     //         this.bg.style.position = 'absolute';
//     //         this.bg.style.backgroundRepeat = 'repeat-y';
//     //         this.bg.setAttribute('id', ' background');
//     //         mainWrapper.appendChild(this.bg);
//     //         this.parentElement.appendChild(mainWrapper);

//     //         setInterval(this.update.bind(this), 100);
//     //     };
//     //     this.update = function () {
//     //         this.backgroundY += 10;
//     //         this.bg.style.backgroundPositionY = this.backgroundY + 'px';
//     //     }

//     // }
//     // function Game(parentElement, trafficCount) {
//     //     var MAX_WIDTH = 400;
//     //     var MAX_HEIGHT = 600;
//     //     this.parentElement = parentElement;
//     //     this.trafficCount = trafficCount || 2;

//     //     this.startGame = function() {
//     //         var car = new Car(parentElement).init();
//     //         car.draw();

//     //     }
//     // }

//     // var parentElement = document.getElementById('game-container');
//     // new Background.create();



//     // var parentElement = document.getElementById('game-container');
//     // var playGame = new Game(200, 100, 190, 100, parentElement);
//     var parentElement = document.getElementsByClassName('road')[0];
//     var playGame = new Game(200, 100, 190, 100, parentElement);
//     playGame.newGame();
// })();


; (function () {
    // var SPEED = 5;
    var refreshRate = 60;

    function Car(parentElement) {
        this.carWidth = 100;
        this.carHeight = 150;
        this.carX = 800;
        this.carY = 600;
        this.parentElement = parentElement;
        this.carSpeed = 1;

        var that = this;
        this.drawCar = function () {
            var car = document.createElement('div');
            car.style.width = this.carWidth + 'px';
            car.style.height = this.carHeight + 'px';
            car.style.bottom = '0px';
            // car.style.left = this.carX;
            car.style.carX = this.carX;
            car.style.carY = this.carY;
            console.log('carX carY:', this.carX, this.carY);


            car.classList.add('car');

            // this.parentElement.appendChild(car);
            this.element = car;

            return this;
        }

        // move car (left/right)
        this.moveCar = function () {

        }


    };
    function Game(heightCar, widthCar, heightOtherCar, widthOtherCar, parentElement) {
        var traffic = [];
        this.heightCar = heightCar;
        this.widthCar  = widthCar;
        this.parentElement = parentElement;
        this.heightOtherCar = heightOtherCar;
        this.widthOtherCar  = widthOtherCar;

        var distanceTravelled = 0;
        var trafficCount = 0;
        var that = this;
        var lane = {
            'first': 70,
            'second': 270,
            'third': 370
        }
        this.getRandomLane = function() {
            return Math.floor(Math.random() * 70 + 1);
        }
        this.generateTraffic = function() {

        }

        this.collisionDetection = function(playerCar) {

        }

        this.newGame = function() {
            var player = new Car(this.heightCar, this.widthCar, this.parentElement).drawCar();
            console.log('player:', player);

        }
    }

  


    function Road(parentElement) {

        this.carSpeed = 0;

        this.moveBackground = function () {
            this.roadElement = document.getElementById('road');
            this.roadElement.style.backgroundPositionY = this.carSpeed + 'px';
            this.carSpeed += 1;
         

            // console.log('hello', this);
            // setInterval(this.moveBackground(), 1000);
        }
        //setInterval(this.moveBackground.bind(this), 500);// (this.update.bind(this), 100);
    }

    
    var roadElement = document.getElementById('road');
    var playGame = new Game(200, 100, 190, 100, roadElement);
    var objCar = new Road(roadElement);
    //objCar.moveBackground();
    var car = new Car();
    car.drawCar(roadElement);

    setInterval(objCar.moveBackground.bind(objCar), 10);
})();
