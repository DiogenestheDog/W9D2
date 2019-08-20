const MovingObject = require('./moving_object.js');
const Util = require('./utils');
const Bullet = require('./bullet');
const DEFAULTS = {
  RADIUS: 80,
  COLOR: "crimson",
  VEL: [0,0]
};

function Ship (options) {
  options.color = DEFAULTS.COLOR;
  options.radius = DEFAULTS.RADIUS;
  options.vel = DEFAULTS.VEL;
  MovingObject.call(this, options);
}

Util.inherits(Ship, MovingObject);

Ship.prototype.relocate = function () {
  this.vel = [0,0];
  this.pos = this.game.randomPosition();
};

Ship.prototype.power = function (impulse) {
  this.vel[0] = this.vel[0] + impulse[0];
  this.vel[1] = this.vel[1] + impulse[1];
};

Ship.prototype.fireBullet = function () {
  this.game.bullets.push(new Bullet( {
    game: this.game, 
    pos: this.pos, 
    vel: this.vel
  }));
};

module.exports = Ship;