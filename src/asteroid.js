const MovingObject = require('./moving_object.js');
const Util = require('./utils.js');

const DEFAULTS = {
  color: "grey",
  radius: 20,
  speed: 1.5
};

function Asteroid(options) {
  options.color = DEFAULTS.color;
  options.radius = DEFAULTS.radius;
  options.vel = Util.randomVec(DEFAULTS.speed);
  MovingObject.call(this, options);
}

Util.inherits(Asteroid, MovingObject);

module.exports = Asteroid;
