const Asteroid = require('./asteroid.js');
const Util = require('./utils.js');
const Ship = require('./ship');

DEFAULTS = {
  DIM_X: 600,
  DIM_Y: 600,
  NUM_ASTEROIDS: 4,
  TOLERANCE: 50
};

function Game() {
  this.asteroids = this.addAsteroids();
  this.bullets = [];
  this.ship = new Ship( {
    pos: this.randomPosition(), 
    game: this
  });
}

Game.prototype.addAsteroids = function() {
  asteroids = [];
  for(let i = 0; i < DEFAULTS.NUM_ASTEROIDS; i++) {
    asteroids.push(new Asteroid( {
      game: this, 
      pos: this.randomPosition()
    }));
  }
  return asteroids;
};

Game.prototype.randomPosition = function() {
  x = Math.floor(Math.random() * DEFAULTS.DIM_X);
  y = Math.floor(Math.random() * DEFAULTS.DIM_Y);
  return [x,y];
};

Game.prototype.draw = function(ctx) {
  ctx.clearRect(0,0, DEFAULTS.DIM_X, DEFAULTS.DIM_Y);
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, 600, 600);
  this.allObjects().forEach(function(obj) {
    obj.draw(ctx);
  });
};

Game.prototype.moveObjects = function() {
  this.allObjects().forEach(function (obj) {
    obj.move();
  });
};

Game.prototype.wrap = function (pos) {
  let x = pos[0];
  let y = pos[1];

  if (pos[0] > DEFAULTS.DIM_X + DEFAULTS.TOLERANCE) {
    x = 0 - DEFAULTS.TOLERANCE;
  } else if (pos[0] < 0 - DEFAULTS.TOLERANCE) {
    x = DEFAULTS.DIM_X + DEFAULTS.TOLERANCE;
  }
  
  if (pos[1] > DEFAULTS.DIM_Y + DEFAULTS.TOLERANCE) {
    y = 0 - DEFAULTS.TOLERANCE;
  } else if (pos[1] < 0 - DEFAULTS.TOLERANCE) {
    y = DEFAULTS.DIM_Y + DEFAULTS.TOLERANCE;
  }

  return [x,y];

};

Game.prototype.checkCollisions = function() {
  const objs = this.allObjects();
  for(let i = 0; i < objs.length - 1; i++) {
    for(let j = i+1; j < objs.length; j++) {
      if (objs[i].isCollidedWith(objs[j])) {
        objs[i].collideWith(objs[j]);
      }
    }
  }
};

Game.prototype.step = function () {
  this.moveObjects();
  this.checkCollisions();
};

Game.prototype.allObjects = function () {
  return this.bullets.concat(this.asteroids, this.ship);
};

module.exports = Game;
