const Game = require("./game");

function GameView (ctx) {
  this.game = new Game();
  console.log(this.game.ship);
  this.ctx = ctx;
}

GameView.prototype.start = function () {
  let that = this;
  setInterval( function () {
    that.bindKeyHandlers();
    that.game.step();
    that.game.draw(that.ctx);
  }, 20);
};

GameView.prototype.bindKeyHandlers = function () {
  let that = this;
  key('w', function () { 
    that.game.ship.power([0,-0.001]);
  });

  key('a', function () {
    that.game.ship.power([-0.001, 0]);
  });

  key('s', function () {
    that.game.ship.power([0, 0.001]);
  });

  key('d', function () {
    that.game.ship.power([0.001, 0]);
  });

  if(key.isPressed('space')) that.game.ship.fireBullet();
};

module.exports = GameView;