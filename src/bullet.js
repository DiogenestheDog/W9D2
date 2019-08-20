const MovingObject = require('./moving_object');
const Util = require('./utils');
const Ship = require('./ship');

const DEFAULTS = {
  COLOR: "pink",
  RADIUS: 2,
  SPEED: 4
};

           
function Bullet(options) {
  options.vel = Util.scale(options.vel, DEFAULTS.SPEED);
  options.color = DEFAULTS.COLOR;
  options.radius = DEFAULTS.RADIUS;
  MovingObject.call(this, options);
}

Util.inherits(Bullet, MovingObject);

Bullet.prototype.move = function () {
  this.pos[0] = this.pos[0] + this.vel[0];
  this.pos[1] = this.pos[1] + this.vel[1];
};

module.exports = Bullet;
