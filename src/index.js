const MovingObject = require('./moving_object.js');
const Asteroid = require('./asteroid.js');
const Util = require('./utils.js')
const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "green";
ctx.fillRect(0,0,600,600);


circle = new MovingObject({pos: [100,100], vel: [50,100], radius: 50, color: 'blue'});
console.log(circle.pos);
console.log(circle.vel);
circle.move();
circle.draw(ctx);
console.log(circle.pos);

ast = new Asteroid( {pos: [500,500]} );
ast.draw(ctx);