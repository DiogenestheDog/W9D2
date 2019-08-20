const MovingObject = require('./moving_object.js');
const Util = require('./utils');

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
  this.pos = this.game.randomPosition();
};

module.exports = Ship;