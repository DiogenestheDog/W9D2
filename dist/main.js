/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\nconst Ship = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n\nconst DEFAULTS = {\n  color: \"grey\",\n  radius: 20,\n  speed: 1.5\n};\n\nfunction Asteroid(options) {\n  options.color = DEFAULTS.color;\n  options.radius = DEFAULTS.radius;\n  options.vel = Util.randomVec(DEFAULTS.speed);\n  MovingObject.call(this, options);\n}\n\nUtil.inherits(Asteroid, MovingObject);\n\nAsteroid.prototype.collideWith = function (otherObject) {\n  if (otherObject instanceof Ship) {\n    otherObject.relocate();\n  }\n};\n\nmodule.exports = Asteroid;\n\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/bullet.js":
/*!***********************!*\
  !*** ./src/bullet.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\nconst Ship = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n\nconst DEFAULTS = {\n  COLOR: \"pink\",\n  RADIUS: 2,\n  SPEED: 4\n};\n\n           \nfunction Bullet(options) {\n  options.vel = Util.scale(options.vel, DEFAULTS.SPEED);\n  options.color = DEFAULTS.COLOR;\n  options.radius = DEFAULTS.RADIUS;\n  MovingObject.call(this, options);\n}\n\nUtil.inherits(Bullet, MovingObject);\n\nBullet.prototype.move = function () {\n  this.pos[0] = this.pos[0] + this.vel[0];\n  this.pos[1] = this.pos[1] + this.vel[1];\n};\n\nmodule.exports = Bullet;\n\n\n//# sourceURL=webpack:///./src/bullet.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst Util = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\nconst Ship = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n\nDEFAULTS = {\n  DIM_X: 600,\n  DIM_Y: 600,\n  NUM_ASTEROIDS: 4,\n  TOLERANCE: 50\n};\n\nfunction Game() {\n  this.asteroids = this.addAsteroids();\n  this.bullets = [];\n  this.ship = new Ship( {\n    pos: this.randomPosition(), \n    game: this\n  });\n}\n\nGame.prototype.addAsteroids = function() {\n  asteroids = [];\n  for(let i = 0; i < DEFAULTS.NUM_ASTEROIDS; i++) {\n    asteroids.push(new Asteroid( {\n      game: this, \n      pos: this.randomPosition()\n    }));\n  }\n  return asteroids;\n};\n\nGame.prototype.randomPosition = function() {\n  x = Math.floor(Math.random() * DEFAULTS.DIM_X);\n  y = Math.floor(Math.random() * DEFAULTS.DIM_Y);\n  return [x,y];\n};\n\nGame.prototype.draw = function(ctx) {\n  ctx.clearRect(0,0, DEFAULTS.DIM_X, DEFAULTS.DIM_Y);\n  ctx.fillStyle = \"black\";\n  ctx.fillRect(0, 0, 600, 600);\n  this.allObjects().forEach(function(obj) {\n    obj.draw(ctx);\n  });\n};\n\nGame.prototype.moveObjects = function() {\n  this.allObjects().forEach(function (obj) {\n    obj.move();\n  });\n};\n\nGame.prototype.wrap = function (pos) {\n  let x = pos[0];\n  let y = pos[1];\n\n  if (pos[0] > DEFAULTS.DIM_X + DEFAULTS.TOLERANCE) {\n    x = 0 - DEFAULTS.TOLERANCE;\n  } else if (pos[0] < 0 - DEFAULTS.TOLERANCE) {\n    x = DEFAULTS.DIM_X + DEFAULTS.TOLERANCE;\n  }\n  \n  if (pos[1] > DEFAULTS.DIM_Y + DEFAULTS.TOLERANCE) {\n    y = 0 - DEFAULTS.TOLERANCE;\n  } else if (pos[1] < 0 - DEFAULTS.TOLERANCE) {\n    y = DEFAULTS.DIM_Y + DEFAULTS.TOLERANCE;\n  }\n\n  return [x,y];\n\n};\n\nGame.prototype.checkCollisions = function() {\n  const objs = this.allObjects();\n  for(let i = 0; i < objs.length - 1; i++) {\n    for(let j = i+1; j < objs.length; j++) {\n      if (objs[i].isCollidedWith(objs[j])) {\n        objs[i].collideWith(objs[j]);\n      }\n    }\n  }\n};\n\nGame.prototype.step = function () {\n  this.moveObjects();\n  this.checkCollisions();\n};\n\nGame.prototype.allObjects = function () {\n  return this.bullets.concat(this.asteroids, this.ship);\n};\n\nmodule.exports = Game;\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\nfunction GameView (ctx) {\n  this.game = new Game();\n  console.log(this.game.ship);\n  this.ctx = ctx;\n}\n\nGameView.prototype.start = function () {\n  let that = this;\n  setInterval( function () {\n    that.bindKeyHandlers();\n    that.game.step();\n    that.game.draw(that.ctx);\n  }, 20);\n};\n\nGameView.prototype.bindKeyHandlers = function () {\n  let that = this;\n  key('w', function () { \n    that.game.ship.power([0,-0.001]);\n  });\n\n  key('a', function () {\n    that.game.ship.power([-0.001, 0]);\n  });\n\n  key('s', function () {\n    that.game.ship.power([0, 0.001]);\n  });\n\n  key('d', function () {\n    that.game.ship.power([0.001, 0]);\n  });\n\n  if(key.isPressed('space')) that.game.ship.fireBullet();\n};\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const GameView = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\");\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst Util = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\nconst canvas = document.getElementById(\"game-canvas\");\nconst ctx = canvas.getContext(\"2d\");\n\nconst gameView = new GameView(ctx);\n\ngameView.start(ctx);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n\nfunction MovingObject(options) {\n  this.pos = options.pos;\n  this.vel = options.vel;\n  this.radius = options.radius;\n  this.color = options.color;\n  this.game = options.game;\n}\n\nMovingObject.prototype.draw = function(ctx) {\n  ctx.fillStyle = this.color;\n  ctx.beginPath();\n\n  ctx.arc(\n    this.pos[0],\n    this.pos[1],\n    this.radius,\n    0,\n    2 * Math.PI,\n    false\n  );\n\n  ctx.fill();\n};\n\nMovingObject.prototype.move = function () {\n  this.pos[0] = this.pos[0] + this.vel[0];\n  this.pos[1] = this.pos[1] + this.vel[1];\n  this.pos = this.game.wrap(this.pos);\n};\n\nMovingObject.prototype.isCollidedWith = function(otherObject) {\n  const xDiff = this.pos[0] - otherObject.pos[0];\n  const yDiff = this.pos[1] - otherObject.pos[1];\n  const distance = Math.sqrt(xDiff * xDiff + yDiff * yDiff);\n  return distance < this.radius + otherObject.radius;\n};\n\nMovingObject.prototype.collideWith = function (otherObject) { };\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\nconst Bullet = __webpack_require__(/*! ./bullet */ \"./src/bullet.js\");\nconst DEFAULTS = {\n  RADIUS: 80,\n  COLOR: \"crimson\",\n  VEL: [0,0]\n};\n\nfunction Ship (options) {\n  options.color = DEFAULTS.COLOR;\n  options.radius = DEFAULTS.RADIUS;\n  options.vel = DEFAULTS.VEL;\n  MovingObject.call(this, options);\n}\n\nUtil.inherits(Ship, MovingObject);\n\nShip.prototype.relocate = function () {\n  this.vel = [0,0];\n  this.pos = this.game.randomPosition();\n};\n\nShip.prototype.power = function (impulse) {\n  this.vel[0] = this.vel[0] + impulse[0];\n  this.vel[1] = this.vel[1] + impulse[1];\n};\n\nShip.prototype.fireBullet = function () {\n  this.game.bullets.push(new Bullet( {\n    game: this.game, \n    pos: this.pos, \n    vel: this.vel\n  }));\n};\n\nmodule.exports = Ship;\n\n//# sourceURL=webpack:///./src/ship.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Util = {\n  inherits(childClass, parentClass) {\n    function Surrogate() {}\n    Surrogate.prototype = parentClass.prototype;\n    childClass.prototype = new Surrogate();\n    childClass.prototype.constructor = childClass;\n  },\n\n  randomVec(length) {\n    const deg = 2 * Math.PI * Math.random();\n    return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n  },\n  \n  // Scale the length of a vector by the given amount.\n  scale(vec, m) {\n    return [vec[0] * m, vec[1] * m];\n  }\n\n};\n\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });