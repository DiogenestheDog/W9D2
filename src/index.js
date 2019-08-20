const GameView = require('./game_view.js');
const Game = require('./game.js');
const MovingObject = require('./moving_object.js');
const Asteroid = require('./asteroid.js');
const Util = require('./utils.js');
const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");

const gameView = new GameView(ctx);

gameView.start(ctx);