const MovingObject = require('./moving_object.js');
const Util = require('./utils.js');

const DEFAULTS = {
  color: "blue",
  radius: 40,
  speed: 2
};

function Asteroid(options) {
  options.color = DEFAULTS.color;
  options.radius = DEFAULTS.radius;
  options.vel = Util.randomVec(2);
  MovingObject.call(this, options);
}

Util.inherits(Asteroid, MovingObject);

module.exports = Asteroid;
