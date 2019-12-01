;(function() {
  function Ant(parentElement) {
    this.x = getRandomArbitrary(-10, 10);
    this.y = getRandomArbitrary(-10, 10);
    this.speed = 1;//getRandomArbitrary(-1, 1);
    this.directionX = getRandomArbitrary(-2, 2);
    this.directionY = getRandomArbitrary(-2, 2);
    this.antWidth = 50;
    this.element = null;
    this.parentElement = parentElement;
    this.MAX_WIDTH = 800;
    this.MAX_HEIGHT = 500;
    var that = this;

    this.init = function() {
      var box = document.createElement('img');
      box.setAttribute('src', './images/ant.gif');
      box.style.height = this.antWidth  + 'px';
      box.style.width = this.antWidth + 'px';
      box.classList.add('box');
      this.parentElement.appendChild(box);
      this.element = box;
      this.element.onclick = this.boxClicked.bind(this);
      this.draw();

      return this;
    };

    this.setPostion = function(x, y) {
      this.x = x;
      this.y = y;
    };

    this.boxClicked = function(e) {
      e.target.style.display = 'none';
    };

    this.draw = function() {
      this.element.style.left = this.x + 'px';
      this.element.style.top = this.y + 'px';
    };

    this.move = function() {
      if (this.x < 0 || this.x > 740) {
        this.directionX = -this.directionX;
      }
      if (this.y < 0 || this.y > 340) {
        this.directionY = -this.directionY;
      }
      this.x += this.directionX;
      this.y += this.directionY;
      this.draw();
    };

    this.checkCollision = function(antsArray) {
      for (var i = 0; i < antsArray.length; i++) {
        var distX = this.x - antsArray[i].x;
        var distY = this.y - antsArray[i].y;
        var distance = Math.sqrt(Math.pow(distX, 2) + Math.pow(distY, 2));
        if (distance <= this.antWidth + 5 && distance > 0) {
          this.directionX = -this.directionX;
          this.directionY = -this.directionY;
        }
      }
    };
  }

  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  function Game(parentElement, boxCount) {
    var antsArray = [];
    var MAX_WIDTH = 800;
    var MAX_HEIGHT = 500;
    this.parentElement = parentElement;
    this.boxCount = boxCount || 10;

    this.startGame = function() {
      for (var i = 0; i < this.boxCount; i++) {
        var box = new Ant(parentElement).init();
        var x = getRandomArbitrary(0, MAX_WIDTH - 60);
        var y = getRandomArbitrary(0, MAX_HEIGHT - 60);
        box.setPostion(x, y);
        for (j in antsArray) {
          var dx = box.x - antsArray[j].x;
          var dy = box.y - antsArray[j].y;
          var distance = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
          if (distance < 30) {
            box.setPostion(
              getRandomArbitrary(25, MAX_WIDTH - 30),
              getRandomArbitrary(25, MAX_HEIGHT - 30),
            );
          }
        }
        box.draw();
        antsArray.push(box);
      }

      this.moveAnts();
    };

    this.moveAnts = function() {
      for (var i = 0; i < this.boxCount; i++) {
        antsArray[i].move();
        antsArray[i].checkCollision(antsArray);
      }

      requestAnimationFrame(this.moveAnts.bind(this));
    };
  }

  var parentElement = document.getElementById('app');
  new Game(parentElement).startGame();

})();
