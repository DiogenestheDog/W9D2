const Asteroid = require('./asteroid.js');
const Util = require('./utils.js');

DEFAULTS = {
  DIM_X: 600,
  DIM_Y: 600,
  NUM_ASTEROIDS: 2,
  TOLERANCE: 50
};

function Game() {
  this.asteroids = this.addAsteroids();
}

Game.prototype.addAsteroids = function() {
  asteroids = [];
  for(let i = 0; i < DEFAULTS.NUM_ASTEROIDS; i++) {
    asteroids.push(new Asteroid({game: this, pos: this.randomPosition()}));
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
  this.asteroids.forEach(function(roid) {
    roid.draw(ctx);
  });
};

Game.prototype.moveObjects = function() {
  this.asteroids.forEach(function (roid) {
    roid.move();
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


module.exports = Game;
