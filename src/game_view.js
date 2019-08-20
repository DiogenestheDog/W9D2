const Game = require("./game");

function GameView (ctx) {
  this.game = new Game();
  console.log(this.game.ship);
  this.ctx = ctx;
}

GameView.prototype.start = function () {
  let that = this;
  setInterval( function () {
    that.game.step();
    that.game.draw(that.ctx);
  }, 20);
};

module.exports = GameView;