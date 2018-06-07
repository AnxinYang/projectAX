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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Framework/Ax/AXDOM.js":
/*!***********************************!*\
  !*** ./src/Framework/Ax/AXDOM.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}(); /**
      * Created by Anxin Yang on 5/26/2018.
      */

var _core = __webpack_require__(/*! ./core */ "./src/Framework/Ax/core.js");

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var AXDOM = function () {
    function AXDOM(_tag, _id, _root) {
        _classCallCheck(this, AXDOM);

        this.id = this.readValue(_id) || 'self';
        this.tag = this.readValue(_tag) || 'div';
        this.dom = document.createElement(this.tag);
        this.dom.setAttribute('id', this.id);
        this.childrenList = [];
        this.attribute = {};
        this.domStyle = {};
        this.updaters = {};

        if (_root) {
            _root.appendChild(this.dom);
        }
        var self = this;
        this.updater = function (name) {
            var updater = this.updaters[name];
            return function () {
                if (updater) {
                    updater.call(self, self.data, arguments);
                }
            };
        };
    }

    _createClass(AXDOM, [{
        key: 'setUpdater',
        value: function setUpdater(name, updater) {
            this.updaters[name] = updater;
            return this;
        }
    }, {
        key: 'bind',
        value: function bind(data) {
            this.data = data;
            return this;
        }
    }, {
        key: 'append',
        value: function append(_tag, _id) {
            var tag = this.readValue(_tag);
            var id = this.readValue(_id);
            var element = new AXDOM(tag, id);
            this.appendElement(element);
            return element;
        }
    }, {
        key: 'appendElement',
        value: function appendElement(_AXDOM) {
            var element = this.readValue(_AXDOM);
            this.childrenList.push(element);
            this.dom.appendChild(element.dom);
            return element;
        }
    }, {
        key: 'attr',
        value: function attr(key, _value) {
            var value = this.readValue(_value);
            this.attribute[key] = value;
            this.dom.setAttribute(key, value);
            return this;
        }
    }, {
        key: 'on',
        value: function on(eventName, _value) {
            var value = _value;
            var self = this;
            this.on[eventName] = value;
            this.dom.addEventListener(eventName, function (e) {
                value.call(self, e, self.data);
            });
            return this;
        }
    }, {
        key: 'style',
        value: function style(_key, _value) {
            var key = this.readValue(_key);
            var value = this.readValue(_value);
            this.domStyle[key] = value;
            this.dom.style[key] = value;
            return this;
        }
    }, {
        key: 'content',
        value: function content(_value) {
            var value = this.readValue(_value);
            this.innerHTML = value;
            this.dom.innerHTML = value;
            return this;
        }
    }, {
        key: 'appendClass',
        value: function appendClass(_className) {
            var className = this.readValue(_className);
            var classes = this.classes || [];
            classes.push(className);
            this.dom.classList.add(className);
            this.classes = classes;
            return this;
        }
    }, {
        key: 'select',
        value: function select(_selector) {
            var selector = _selector.charAt(0);
            var name = _selector.substring(1);
            switch (selector) {
                case '#':
                    return this.selectById(name);
                case '.':
                    return this.selectByClassName(name);
                default:
                    return this.selectByTag(_selector);
            }
        }
    }, {
        key: 'selectById',
        value: function selectById(id) {
            var childrenList = this.childrenList;
            var target = void 0;
            for (var i = 0; i < childrenList.length; i++) {
                var child = childrenList[i];
                if (child.id === id) {
                    target = child;
                    break;
                }
            }
            return target;
        }
    }, {
        key: 'selectByClassName',
        value: function selectByClassName(className) {
            var childrenList = this.childrenList;
            var targetList = [];
            for (var i = 0; i < childrenList.length; i++) {
                var child = childrenList[i];
                if (child.classes.indexOf(className) > -1) {
                    targetList.push(child);
                }
            }
            return targetList;
        }
    }, {
        key: 'selectByTag',
        value: function selectByTag(_tag) {
            var childrenList = this.childrenList;
            var targetList = [];
            for (var i = 0; i < childrenList.length; i++) {
                var child = childrenList[i];
                if (child.tag === _tag) {
                    targetList.push(child);
                }
            }
            return targetList;
        }
    }, {
        key: 'remove',
        value: function remove(_selector) {
            if (_selector == undefined) {
                this.removeSelf();
                return;
            }
            var selector = _selector.charAt(0);
            var name = _selector.substring(1);
            var target = void 0;
            switch (selector) {
                case '#':
                    this.removeById(name);
                    break;
                case '.':
                    this.removeByClassName(name);
                    break;
                default:
                    this.removeByTag(_selector);
            }
        }
    }, {
        key: 'removeById',
        value: function removeById(id) {
            var childrenList = this.childrenList;
            for (var i = 0; i < childrenList.length; i++) {
                var child = childrenList[i];
                if (child.id === id) {
                    childrenList.splice(i, 1);
                    child.remove();
                    i--;
                    break;
                }
            }
        }
    }, {
        key: 'removeByClassName',
        value: function removeByClassName(className) {
            var childrenList = this.childrenList;
            for (var i = 0; i < childrenList.length; i++) {
                var child = childrenList[i];
                if (child.classes.indexOf(className) > -1) {
                    childrenList.splice(i, 1);
                    child.remove();
                    i--;
                }
            }
        }
    }, {
        key: 'removeByTag',
        value: function removeByTag(_tag) {
            var childrenList = this.childrenList;
            for (var i = 0; i < childrenList.length; i++) {
                var child = childrenList[i];
                if (child.tag === _tag) {
                    childrenList.splice(i, 1);
                    child.remove();
                    i--;
                }
            }
        }
    }, {
        key: 'removeSelf',
        value: function removeSelf() {
            this.childrenList.forEach(function (child) {
                child.remove();
            });
            this.dom.remove();
            for (var key in this) {
                delete this[key];
            }
        }
    }, {
        key: 'readValue',
        value: function readValue(_value) {
            var value = _value;
            if (typeof value === "function") {
                return value.call(this, this.data);
            } else {
                return value;
            }
        }
    }]);

    return AXDOM;
}();

exports.default = AXDOM;

/***/ }),

/***/ "./src/Framework/Ax/AX_Routine.js":
/*!****************************************!*\
  !*** ./src/Framework/Ax/AX_Routine.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var MAX_CYCLE = 100;

var AX_Routine = function () {
    function AX_Routine(_tickSpeed, _options) {
        _classCallCheck(this, AX_Routine);

        this.tickSpeed = _tickSpeed || 1;
        var options = _options || {};
        this.init(options);
        this.MAX_CYCLE = MAX_CYCLE;
    }

    _createClass(AX_Routine, [{
        key: 'init',
        value: function init(options) {
            window.AXR = this;
            this.cycle = 0;
            this.routineList = [];
            this.longestRoutineTime = 0;
            setTimeout(this.start.bind(this));
        }
    }, {
        key: 'start',
        value: function start() {
            var self = this;
            this.cycleStartTime = Date.now();
            setTimeout(self.routine.bind(this), this.tickSpeed);
        }
    }, {
        key: 'append',
        value: function append(name, group) {
            var newRoutine = new Routine(name, group);
            var self = this;
            newRoutine.insert = function () {
                if (newRoutine.freq !== 1) newRoutine.counter += self.routineList.length + 1;
                self.routineList.push(newRoutine);
                return newRoutine;
            };
            return newRoutine;
        }
    }, {
        key: 'getCurrentCycle',
        value: function getCurrentCycle() {
            return this.cycle;
        }
    }, {
        key: 'routine',
        value: function routine() {
            var routineList = this.routineList;
            var self = this;

            var _loop = function _loop() {
                var routine = routineList[i];
                var startTime = Date.now();
                try {
                    if (routine.checkCounter()) {
                        setTimeout(function () {
                            routine.action();
                            self.lastRoutineTime = Date.now() - startTime;
                            if (self.longestRoutineTime < self.lastRoutineTime) {
                                self.longestRoutineTime = self.lastRoutineTime;
                            }
                            if (self.lastRoutineTime > 200) {
                                console.warn('Routine:' + routine.name + ' took too long to run. [' + self.lastRoutineTime + 'ms]');
                            }
                            routine.isRunning = false;
                        }, 1);
                    }
                } catch (e) {
                    //DECIDE IF REMOVE ROUTINE LATER;
                }
            };

            for (var i = 0; i < routineList.length; i++) {
                _loop();
            }
            this.cycle++;
            if (this.cycle === MAX_CYCLE) {
                this.cycle = 0;
                this.lastCycleTime = Date.now() - this.cycleStartTime;
                this.cyclePerSec = Math.floor(1000 / this.lastCycleTime);
            }
            this.start();
        }
    }]);

    return AX_Routine;
}();

var Routine = function () {
    function Routine(name, group) {
        _classCallCheck(this, Routine);

        this.name = name;
        this.group = group || 'common';
        this.freq = 1;
        this.action = function () {};
        this.repeat = 0;
    }

    _createClass(Routine, [{
        key: 'attr',
        value: function attr(key, value) {
            this[key] = value;
            if (key === 'freq') {
                this['counter'] = value;
            }
            return this;
        }
    }, {
        key: 'resetCounter',
        value: function resetCounter() {
            this.counter = this.freq;
        }
    }, {
        key: 'checkCounter',
        value: function checkCounter() {
            if (this.isRunning === true) {
                return false;
            }

            var shouldRun = --this.counter === 0;
            if (this.counter === 0) {
                this.isRunning = true;
                this.resetCounter();
            }
            return shouldRun;
        }
    }]);

    return Routine;
}();

var AXR = new AX_Routine();
window.AXR = AXR;
exports.default = AXR;

/***/ }),

/***/ "./src/Framework/Ax/core.js":
/*!**********************************!*\
  !*** ./src/Framework/Ax/core.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var EMPTY_FUNCTION = function EMPTY_FUNCTION() {};

var AXCore = function () {
    function AXCore(_props) {
        _classCallCheck(this, AXCore);

        var props = props || {};
        var self = this;
        this.init(props);
    }

    _createClass(AXCore, [{
        key: 'init',
        value: function init(_props) {
            var props = _props || {};
            this.debugMode = props.debug || false;
            this.dataMap = {};
            this.actionMap = {};
            this.browser = this.getBrowser();
            window.ax = this;
        }
    }, {
        key: 'getBrowser',
        value: function getBrowser() {
            var isIE = false;
            if (!!window.opr && !!opr.addons || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0) {
                return 'opera';
            }
            if (typeof InstallTrigger !== 'undefined') {
                return 'firefox';
            }
            if (/constructor/i.test(window.HTMLElement) || function (p) {
                return p.toString() === "[object SafariRemoteNotification]";
            }(!window['safari'] || safari.pushNotification)) {
                return 'safari';
            }
            if (false || !!document.documentMode) {
                Object.assign = function () {
                    var output = arguments[0];
                    for (var i = 1; i < arguments.length; i++) {
                        for (var key in arguments[i]) {
                            var obj = arguments[i];
                            if (obj.hasOwnProperty(key)) output[key] = obj[key];
                        }
                    }
                    return output;
                };
                isIE = true;
                return 'ie';
            }
            if (!isIE && !!window.StyleMedia) {
                return 'edge';
            }
            if (!!window.chrome && !!window.chrome.webstore) {
                return 'chrome';
            }
            if ((isChrome || isOpera) && !!window.CSS) {
                return 'blink';
            }
        }
    }, {
        key: 'storeDataArray',
        value: function storeDataArray(_array, _idKey, _itemProcessor, _options, _callback) {
            var options = _options || {};
            var idKey = _idKey || 'id';
            var callback = _callback || EMPTY_FUNCTION;
            var array = _array || [];
            var itemList = [];
            var itemProcessor = _itemProcessor || EMPTY_FUNCTION;

            array.forEach(function (_item) {
                var key = _item[idKey];
                if (key === undefined) {
                    return;
                }

                var item = self.storeValue(key, _item, _options);

                itemProcessor(item);
                itemList.push(item);
            });

            callback(_array, itemList);
            return itemList;
        }
    }, {
        key: 'storeValue',
        value: function storeValue(_key, _value, _options, _callback) {
            var options = _options || {};
            var store = this.dataMap;
            var key = _key;
            var callback = _callback || EMPTY_FUNCTION;
            var newValue = _value;
            var item = store[key] || {};
            if (item === Object(item) && options.overwrite !== true) {
                item = Object.assign(item, newValue);
            } else {
                item = newValue;
            }
            this.dataMap[key] = item;

            callback(item);
            this.react(key);
            return item;
        }
    }, {
        key: 'getValue',
        value: function getValue(_key) {
            var key = _key || '';
            return self.dataMap[key];
        }
    }, {
        key: 'connect',
        value: function connect(_key, _action) {
            if (_key === undefined || _action === undefined) {
                return false;
            }

            var actionMap = this.actionMap;
            var actionList = actionMap[_key] || [];
            actionList.push(_action);
            actionMap[_key] = actionList;
        }
    }, {
        key: 'react',
        value: function react(_key) {
            if (_key === undefined) {
                return false;
            }

            var actionMap = this.actionMap;
            var actionList = actionMap[_key] || [];
            actionList.forEach(function (action) {
                try {
                    var value = self.getValue(_key);
                    action(value);
                } catch (e) {
                    var index = actionList.indexOf(action);
                    actionList.splice(index, 1);
                }
            });
        }
    }, {
        key: 'debug',
        value: function debug(str) {
            if (this.debugMode) {
                console.log('DEBUG: ' + str);
            }
        }
    }]);

    return AXCore;
}();

exports.default = AXCore;

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _AXDOM = __webpack_require__(/*! ./Framework/Ax/AXDOM */ "./src/Framework/Ax/AXDOM.js");

var _AXDOM2 = _interopRequireDefault(_AXDOM);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var mainContent = new _AXDOM2.default('div', 'homeContent');
mainContent.style('width', '100%').style('height', '100vh').style('background', '#2f3640').style('position', 'relative').style('overflow', 'hidden');

var headLine = mainContent.append('h1', 'headLine').content('Front-End Engineer').style('position', 'absolute').style('color', 'white').style('width', '100%').style('height', '60px').style('text-align', 'center').style('left', '0').style('right', '0').style('bottom', '33%').style('margin', 'auto').style('font-size', '64px').style('transition', '0.3s').style('text-shadow', '0 0 10px #70a1ff').style('z-index', 1).on('mouseover', function () {
    this.style('text-shadow', '0 0 20px #70a1ff');
}).on('mouseleave', function () {
    this.style('text-shadow', '0 0 10px #70a1ff');
});
var homeHeadLineAnimation = AXR.append('home_headLine_animation').attr('freq', 20).attr('action', function () {
    var odd = Math.random() * 100;
    if (odd > 50) {
        headLine.style('text-shadow', '0 0 20px #eccc68');
    } else {
        headLine.style('text-shadow', '0 0 10px #70a1ff');
    }
}).insert();
var circleNum = 150;
var circleList = [];
var origin = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2
};

var _loop = function _loop() {
    var x = Math.random() * window.innerWidth + 10;
    var y = Math.random() * window.innerHeight + 10;
    var circle = mainContent.append('div').style('position', 'absolute').style('width', '20px').style('height', '20px').style('border-radius', '50%').style('background', '#eccc68').style('transition', '0.1s linear').style('box-shadow', '0 0 10px #eccc68').style('opacity', '0').style('transform', 'translate(' + x + 'px,' + y + 'px)');
    circle.x = x;
    circle.y = y;
    circle.dx = Math.random() - 0.5;
    circle.dy = Math.random() - 0.5;
    circle.ds = 0.01;
    circle.scale = Math.random();
    circle.counter = 10;
    var circleAn = AXR.append('home_circle_animation').attr('freq', 20).attr('action', function () {
        var scale = circle.scale;
        circle.x += circle.dx;
        circle.y += circle.dy;

        circle.style('transform', 'translate(' + circle.x + 'px,' + circle.y + 'px) scale(' + scale + ')').style('opacity', scale).style('box-shadow', '0 0 ' + (Math.random() * 10 + 10) + 'px #eccc68');
        if (circle.x > window.innerWidth) {
            circle.dx = -(Math.random() * 0.5 + 0.1);
        } else if (circle.x < 0) {
            circle.dx = Math.random() * 0.5 + 0.1;
        }
        if (circle.y > window.innerHeight) {
            circle.dy = -(Math.random() * 0.5 + 0.1);
        } else if (circle.y < 0) {
            circle.dy = Math.random() * 0.5 + 0.1;
        }
        circle.counter--;
        if (circle.counter <= 0) {
            circle.counter = 10;
            circle.scale += circle.ds;
            if (circle.scale >= 1) {
                circle.ds = -0.01;
            }
            if (circle.scale <= 0) {
                circle.ds = 0.01;
            }
        }
    }).insert();
};

for (var i = 0; i < circleNum; i++) {
    _loop();
};
exports.default = mainContent;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _core = __webpack_require__(/*! ./Framework/Ax/core */ "./src/Framework/Ax/core.js");

var _core2 = _interopRequireDefault(_core);

var _AXDOM = __webpack_require__(/*! ./Framework/Ax/AXDOM */ "./src/Framework/Ax/AXDOM.js");

var _AXDOM2 = _interopRequireDefault(_AXDOM);

var _AX_Routine = __webpack_require__(/*! ./Framework/Ax/AX_Routine */ "./src/Framework/Ax/AX_Routine.js");

var _AX_Routine2 = _interopRequireDefault(_AX_Routine);

var _home = __webpack_require__(/*! ./home */ "./src/home.js");

var _home2 = _interopRequireDefault(_home);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

/**
 * Created by Anxin Yang on 3/28/2018.
 */
new _core2.default();
window.addEventListener('click', function (e) {
    menuContainer.updater('closeMenu')();
});
var root = new _AXDOM2.default('div', 'ax_root', document.getElementById('app'));
root.style('font-size', '12px').style('cursor', 'url(), auto');
var header = root.append('div', 'header').attr('onselectstart', 'return false;').style('display', 'flex').style('position', 'absolute').style('background', '#5352ed').style('width', '100vw').style('height', '3em').style('z-index', '10');

var headerItems = ['Menu', 'Playground', 'About'];
var index = 0;
headerItems.forEach(function (item) {
    headerItems[index++] = header.append('div', 'header_' + item).content(item).appendClass('xx').style('color', 'white').style('padding', '1em 0.5em').style('cursor', 'pointer').style('transition', '0.3s').on('mouseover', function () {
        this.style('background', 'rgb(47, 54, 64)');
    }).on('mouseleave', function () {
        this.style('background', '');
    });
});
var headerMenuButton = headerItems[0];
headerMenuButton.style('position', 'relative');
var menuContainer = headerMenuButton.append('div', 'menuContainer').style('position', 'absolute').style('width', '256px').style('height', '0px').style('background', '#5352ed').style('top', '100%').style('left', '0').style('box-shadow', '0px 8px 10px black').style('transition', '0.3s').setUpdater('toggleMenu', function (d) {
    var hasOpen = this.hasOpen || false;
    if (hasOpen) {
        this.style('height', '0');
    } else {
        this.style('height', 'calc(100vh - 3em)');
    }
    this.hasOpen = !hasOpen;
}).setUpdater('closeMenu', function (d) {
    this.style('height', '0');
    this.hasOpen = false;
});

headerMenuButton.on('click', function (e) {
    e.stopPropagation();
    menuContainer.updater('toggleMenu')();
});

var mainContainer = root.append('div', 'mainContainer');
mainContainer.appendElement(_home2.default);

var version = root.append('p', 'version').style('position', 'fixed').style('bottom', '0px').style('right', '0').style('padding-right', '1em').style('color', 'lightgray').content(new Date()).setUpdater('timer', function () {
    this.content('AX_Routine: LasrCycleTime: ' + _AX_Routine2.default.lastCycleTime + 'ms | CPS:' + _AX_Routine2.default.cyclePerSec + ' |Longest: ' + _AX_Routine2.default.longestRoutineTime + 'ms | Last:' + _AX_Routine2.default.lastRoutineTime + 'ms');
});
var timer = _AX_Routine2.default.append('timer').attr('freq', 1).attr('action', version.updater('timer')).insert();

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/index.js */"./src/index.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0ZyYW1ld29yay9BeC9BWERPTS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRnJhbWV3b3JrL0F4L0FYX1JvdXRpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0ZyYW1ld29yay9BeC9jb3JlLmpzIiwid2VicGFjazovLy8uL3NyYy9ob21lLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tDbkVBOzs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7O3dCQUVJO21CQUFZLE1BQUssS0FBSSxPQUFPOzhCQUN4Qjs7YUFBSyxLQUFLLEtBQUssVUFBVSxRQUN6QjthQUFLLE1BQU0sS0FBSyxVQUFVLFNBQzFCO2FBQUssTUFBTSxTQUFTLGNBQWMsS0FDbEM7YUFBSyxJQUFJLGFBQWEsTUFBSyxLQUMzQjthQUFLLGVBQ0w7YUFBSyxZQUNMO2FBQUssV0FDTDthQUFLLFdBRUw7O1lBQUcsT0FDQztrQkFBTSxZQUFZLEtBQ3JCO0FBQ0Q7WUFBSSxPQUNKO2FBQUssVUFBVSxVQUFVLE1B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SUFBSSxRQUNaLFdBQVcsU0FBUSxZQUNoQjtTQUFLLFFBQVEsZ0NBQThCLHFCQUFJLGdCQUFjLGNBQWEscUJBQUksY0FBYSxnQkFBYyxxQkFBSSxxQkFBbUIsZUFBYSxxQkFBSSxrQkFDcEo7QUFUUztBQVVkLElBQUksUUFBUSxxQkFBSSxPQUFPLFNBQ2xCLEtBQUssUUFBTyxHQUNaLEtBQUssVUFBUyxRQUFRLFFBQVEsVUFDOUIsUyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFueGluIFlhbmcgb24gNS8yNi8yMDE4LlxyXG4gKi9cclxuaW1wb3J0IEFYQ29yZSBmcm9tICcuL2NvcmUnO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBWERPTSB7XHJcbiAgICBjb25zdHJ1Y3RvcihfdGFnLF9pZCxfcm9vdCkge1xyXG4gICAgICAgIHRoaXMuaWQgPSB0aGlzLnJlYWRWYWx1ZShfaWQpfHwgJ3NlbGYnO1xyXG4gICAgICAgIHRoaXMudGFnID0gdGhpcy5yZWFkVmFsdWUoX3RhZykgfHwgJ2Rpdic7XHJcbiAgICAgICAgdGhpcy5kb20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRoaXMudGFnKTtcclxuICAgICAgICB0aGlzLmRvbS5zZXRBdHRyaWJ1dGUoJ2lkJyx0aGlzLmlkKTtcclxuICAgICAgICB0aGlzLmNoaWxkcmVuTGlzdCA9IFtdO1xyXG4gICAgICAgIHRoaXMuYXR0cmlidXRlID0ge307XHJcbiAgICAgICAgdGhpcy5kb21TdHlsZSA9IHt9O1xyXG4gICAgICAgIHRoaXMudXBkYXRlcnMgPSB7fTtcclxuXHJcbiAgICAgICAgaWYoX3Jvb3Qpe1xyXG4gICAgICAgICAgICBfcm9vdC5hcHBlbmRDaGlsZCh0aGlzLmRvbSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLnVwZGF0ZXIgPSBmdW5jdGlvbiAobmFtZSkge1xyXG4gICAgICAgICAgICBsZXQgdXBkYXRlciA9dGhpcy51cGRhdGVyc1tuYW1lXTtcclxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmKHVwZGF0ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVyLmNhbGwoc2VsZiwgc2VsZi5kYXRhLCBhcmd1bWVudHMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIHNldFVwZGF0ZXIobmFtZSx1cGRhdGVyKXtcclxuICAgICAgICB0aGlzLnVwZGF0ZXJzW25hbWVdID0gdXBkYXRlcjtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIGJpbmQoZGF0YSl7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIGFwcGVuZChfdGFnLF9pZCl7XHJcbiAgICAgICAgbGV0IHRhZyA9IHRoaXMucmVhZFZhbHVlKF90YWcpO1xyXG4gICAgICAgIGxldCBpZCA9IHRoaXMucmVhZFZhbHVlKF9pZCk7XHJcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBuZXcgQVhET00odGFnLGlkKTtcclxuICAgICAgICB0aGlzLmFwcGVuZEVsZW1lbnQoZWxlbWVudCk7XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgICBhcHBlbmRFbGVtZW50KF9BWERPTSl7XHJcbiAgICAgICAgbGV0IGVsZW1lbnQgPSB0aGlzLnJlYWRWYWx1ZShfQVhET00pO1xyXG4gICAgICAgIHRoaXMuY2hpbGRyZW5MaXN0LnB1c2goZWxlbWVudCk7XHJcbiAgICAgICAgdGhpcy5kb20uYXBwZW5kQ2hpbGQoZWxlbWVudC5kb20pO1xyXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgfVxyXG4gICAgYXR0cihrZXksX3ZhbHVlKXtcclxuICAgICAgICBsZXQgdmFsdWUgPSB0aGlzLnJlYWRWYWx1ZShfdmFsdWUpO1xyXG4gICAgICAgIHRoaXMuYXR0cmlidXRlW2tleV0gPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLmRvbS5zZXRBdHRyaWJ1dGUoa2V5LHZhbHVlKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIG9uKGV2ZW50TmFtZSxfdmFsdWUpe1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IF92YWx1ZTtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5vbltldmVudE5hbWVdID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5kb20uYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgdmFsdWUuY2FsbChzZWxmLGUsc2VsZi5kYXRhLClcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIHN0eWxlKF9rZXksX3ZhbHVlKXtcclxuICAgICAgICBsZXQga2V5ID0gdGhpcy5yZWFkVmFsdWUoX2tleSk7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gdGhpcy5yZWFkVmFsdWUoX3ZhbHVlKTtcclxuICAgICAgICB0aGlzLmRvbVN0eWxlW2tleV0gPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLmRvbS5zdHlsZVtrZXldID0gdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBjb250ZW50KF92YWx1ZSl7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gdGhpcy5yZWFkVmFsdWUoX3ZhbHVlKTtcclxuICAgICAgICB0aGlzLmlubmVySFRNTCA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuZG9tLmlubmVySFRNTCA9IHZhbHVlO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgYXBwZW5kQ2xhc3MoX2NsYXNzTmFtZSl7XHJcbiAgICAgICAgbGV0IGNsYXNzTmFtZSA9IHRoaXMucmVhZFZhbHVlKF9jbGFzc05hbWUpO1xyXG4gICAgICAgIGxldCBjbGFzc2VzID0gdGhpcy5jbGFzc2VzIHx8IFtdO1xyXG4gICAgICAgIGNsYXNzZXMucHVzaChjbGFzc05hbWUpO1xyXG4gICAgICAgIHRoaXMuZG9tLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcclxuICAgICAgICB0aGlzLmNsYXNzZXMgPSBjbGFzc2VzO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgc2VsZWN0KF9zZWxlY3Rvcil7XHJcbiAgICAgICAgbGV0IHNlbGVjdG9yID0gX3NlbGVjdG9yLmNoYXJBdCgwKTtcclxuICAgICAgICBsZXQgbmFtZSA9IF9zZWxlY3Rvci5zdWJzdHJpbmcoMSk7XHJcbiAgICAgICAgc3dpdGNoIChzZWxlY3Rvcil7XHJcbiAgICAgICAgICAgIGNhc2UgJyMnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0QnlJZChuYW1lKTtcclxuICAgICAgICAgICAgY2FzZSAnLic6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RCeUNsYXNzTmFtZShuYW1lKTtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNlbGVjdEJ5VGFnKF9zZWxlY3Rvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2VsZWN0QnlJZChpZCl7XHJcbiAgICAgICAgbGV0IGNoaWxkcmVuTGlzdCA9IHRoaXMuY2hpbGRyZW5MaXN0O1xyXG4gICAgICAgIGxldCB0YXJnZXQ7XHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaTxjaGlsZHJlbkxpc3QubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuTGlzdFtpXTtcclxuICAgICAgICAgICAgaWYoY2hpbGQuaWQgPT09IGlkKXtcclxuICAgICAgICAgICAgICAgIHRhcmdldCA9IGNoaWxkO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRhcmdldDtcclxuICAgIH1cclxuICAgIHNlbGVjdEJ5Q2xhc3NOYW1lKGNsYXNzTmFtZSl7XHJcbiAgICAgICAgbGV0IGNoaWxkcmVuTGlzdCA9IHRoaXMuY2hpbGRyZW5MaXN0O1xyXG4gICAgICAgIGxldCB0YXJnZXRMaXN0ID0gW107XHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaTxjaGlsZHJlbkxpc3QubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuTGlzdFtpXTtcclxuICAgICAgICAgICAgaWYoY2hpbGQuY2xhc3Nlcy5pbmRleE9mKGNsYXNzTmFtZSk+LTEpe1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0TGlzdC5wdXNoKGNoaWxkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGFyZ2V0TGlzdDtcclxuICAgIH1cclxuICAgIHNlbGVjdEJ5VGFnKF90YWcpe1xyXG4gICAgICAgIGxldCBjaGlsZHJlbkxpc3QgPSB0aGlzLmNoaWxkcmVuTGlzdDtcclxuICAgICAgICBsZXQgdGFyZ2V0TGlzdCA9IFtdO1xyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGk8Y2hpbGRyZW5MaXN0Lmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICBsZXQgY2hpbGQgPSBjaGlsZHJlbkxpc3RbaV07XHJcbiAgICAgICAgICAgIGlmKGNoaWxkLnRhZyA9PT0gX3RhZyl7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRMaXN0LnB1c2goY2hpbGQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0YXJnZXRMaXN0O1xyXG4gICAgfVxyXG4gICAgcmVtb3ZlKF9zZWxlY3Rvcil7XHJcbiAgICAgICAgaWYoX3NlbGVjdG9yPT11bmRlZmluZWQpe1xyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZVNlbGYoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgc2VsZWN0b3IgPSBfc2VsZWN0b3IuY2hhckF0KDApO1xyXG4gICAgICAgIGxldCBuYW1lID0gX3NlbGVjdG9yLnN1YnN0cmluZygxKTtcclxuICAgICAgICBsZXQgdGFyZ2V0O1xyXG4gICAgICAgIHN3aXRjaCAoc2VsZWN0b3Ipe1xyXG4gICAgICAgICAgICBjYXNlICcjJzpcclxuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlQnlJZChuYW1lKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICcuJzpcclxuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlQnlDbGFzc05hbWUobmFtZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlQnlUYWcoX3NlbGVjdG9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZW1vdmVCeUlkKGlkKXtcclxuICAgICAgICBsZXQgY2hpbGRyZW5MaXN0ID0gdGhpcy5jaGlsZHJlbkxpc3Q7XHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaTxjaGlsZHJlbkxpc3QubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuTGlzdFtpXTtcclxuICAgICAgICAgICAgaWYoY2hpbGQuaWQgPT09IGlkKXtcclxuICAgICAgICAgICAgICAgIGNoaWxkcmVuTGlzdC5zcGxpY2UoaSwxKTtcclxuICAgICAgICAgICAgICAgIGNoaWxkLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgaS0tO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZW1vdmVCeUNsYXNzTmFtZShjbGFzc05hbWUpe1xyXG4gICAgICAgIGxldCBjaGlsZHJlbkxpc3QgPSB0aGlzLmNoaWxkcmVuTGlzdDtcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpPGNoaWxkcmVuTGlzdC5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5MaXN0W2ldO1xyXG4gICAgICAgICAgICBpZihjaGlsZC5jbGFzc2VzLmluZGV4T2YoY2xhc3NOYW1lKT4tMSl7XHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlbkxpc3Quc3BsaWNlKGksMSk7XHJcbiAgICAgICAgICAgICAgICBjaGlsZC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgIGktLTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlbW92ZUJ5VGFnKF90YWcpe1xyXG4gICAgICAgIGxldCBjaGlsZHJlbkxpc3QgPSB0aGlzLmNoaWxkcmVuTGlzdDtcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpPGNoaWxkcmVuTGlzdC5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5MaXN0W2ldO1xyXG4gICAgICAgICAgICBpZihjaGlsZC50YWcgPT09IF90YWcpe1xyXG4gICAgICAgICAgICAgICAgY2hpbGRyZW5MaXN0LnNwbGljZShpLDEpO1xyXG4gICAgICAgICAgICAgICAgY2hpbGQucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICBpLS07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZW1vdmVTZWxmKCl7XHJcbiAgICAgICAgdGhpcy5jaGlsZHJlbkxpc3QuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgICAgICAgICAgY2hpbGQucmVtb3ZlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5kb20ucmVtb3ZlKCk7XHJcbiAgICAgICAgZm9yKHZhciBrZXkgaW4gdGhpcyl7XHJcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzW2tleV1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZWFkVmFsdWUoX3ZhbHVlKXtcclxuICAgICAgICBsZXQgdmFsdWUgPSBfdmFsdWU7XHJcbiAgICAgICAgaWYodHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIpe1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWUuY2FsbCh0aGlzLHRoaXMuZGF0YSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJjb25zdCBNQVhfQ1lDTEUgPSAxMDA7XHJcbmNsYXNzIEFYX1JvdXRpbmV7XHJcbiAgICBjb25zdHJ1Y3RvcihfdGlja1NwZWVkLF9vcHRpb25zKXtcclxuICAgICAgICB0aGlzLnRpY2tTcGVlZCA9IF90aWNrU3BlZWQgfHwgMTtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IF9vcHRpb25zIHx8IHt9O1xyXG4gICAgICAgIHRoaXMuaW5pdChvcHRpb25zKTtcclxuICAgICAgICB0aGlzLk1BWF9DWUNMRSA9IE1BWF9DWUNMRTtcclxuICAgIH1cclxuICAgIGluaXQob3B0aW9ucyl7XHJcbiAgICAgICAgd2luZG93LkFYUiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5jeWNsZSA9IDA7XHJcbiAgICAgICAgdGhpcy5yb3V0aW5lTGlzdCA9IFtdO1xyXG4gICAgICAgIHRoaXMubG9uZ2VzdFJvdXRpbmVUaW1lID0wO1xyXG4gICAgICAgIHNldFRpbWVvdXQodGhpcy5zdGFydC5iaW5kKHRoaXMpKTtcclxuICAgIH07XHJcbiAgICBzdGFydCgpe1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLmN5Y2xlU3RhcnRUaW1lID0gRGF0ZS5ub3coKTtcclxuICAgICAgICBzZXRUaW1lb3V0KHNlbGYucm91dGluZS5iaW5kKHRoaXMpLHRoaXMudGlja1NwZWVkKTtcclxuICAgIH1cclxuICAgIGFwcGVuZChuYW1lLGdyb3VwKSB7XHJcbiAgICAgICAgbGV0IG5ld1JvdXRpbmUgPSBuZXcgUm91dGluZShuYW1lLCBncm91cCk7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIG5ld1JvdXRpbmUuaW5zZXJ0PSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmKG5ld1JvdXRpbmUuZnJlcSE9PTEpXHJcbiAgICAgICAgICAgIG5ld1JvdXRpbmUuY291bnRlciArPSBzZWxmLnJvdXRpbmVMaXN0Lmxlbmd0aCsxO1xyXG4gICAgICAgICAgICBzZWxmLnJvdXRpbmVMaXN0LnB1c2gobmV3Um91dGluZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXdSb3V0aW5lO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3Um91dGluZTtcclxuICAgIH1cclxuICAgIGdldEN1cnJlbnRDeWNsZSgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmN5Y2xlO1xyXG4gICAgfVxyXG4gICAgcm91dGluZSgpe1xyXG4gICAgICAgIGxldCByb3V0aW5lTGlzdCA9IHRoaXMucm91dGluZUxpc3Q7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGZvcih2YXIgaT0wO2k8cm91dGluZUxpc3QubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgIGxldCByb3V0aW5lID0gcm91dGluZUxpc3RbaV07XHJcbiAgICAgICAgICAgIGxldCBzdGFydFRpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgaWYocm91dGluZS5jaGVja0NvdW50ZXIoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGluZS5hY3Rpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5sYXN0Um91dGluZVRpbWUgPSBEYXRlLm5vdygpIC0gc3RhcnRUaW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihzZWxmLmxvbmdlc3RSb3V0aW5lVGltZTxzZWxmLmxhc3RSb3V0aW5lVGltZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmxvbmdlc3RSb3V0aW5lVGltZT1zZWxmLmxhc3RSb3V0aW5lVGltZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihzZWxmLmxhc3RSb3V0aW5lVGltZT4yMDApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdSb3V0aW5lOicgKyByb3V0aW5lLm5hbWUgKyAnIHRvb2sgdG9vIGxvbmcgdG8gcnVuLiBbJytzZWxmLmxhc3RSb3V0aW5lVGltZSsnbXNdJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0aW5lLmlzUnVubmluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1jYXRjaCAoZSl7XHJcbiAgICAgICAgICAgICAgICAvL0RFQ0lERSBJRiBSRU1PVkUgUk9VVElORSBMQVRFUjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmN5Y2xlKys7XHJcbiAgICAgICAgaWYodGhpcy5jeWNsZSA9PT0gTUFYX0NZQ0xFKXtcclxuICAgICAgICAgICAgdGhpcy5jeWNsZSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdEN5Y2xlVGltZSA9IERhdGUubm93KCkgLSB0aGlzLmN5Y2xlU3RhcnRUaW1lO1xyXG4gICAgICAgICAgICB0aGlzLmN5Y2xlUGVyU2VjID0gTWF0aC5mbG9vcigxMDAwIC8gdGhpcy5sYXN0Q3ljbGVUaW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zdGFydCgpO1xyXG4gICAgfVxyXG59XHJcbmNsYXNzIFJvdXRpbmV7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lLGdyb3VwKXtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuZ3JvdXAgPSBncm91cCB8fCAnY29tbW9uJztcclxuICAgICAgICB0aGlzLmZyZXEgPSAxO1xyXG4gICAgICAgIHRoaXMuYWN0aW9uID0gZnVuY3Rpb24gKCkge307XHJcbiAgICAgICAgdGhpcy5yZXBlYXQgPSAwO1xyXG4gICAgfVxyXG4gICAgYXR0cihrZXksdmFsdWUpe1xyXG4gICAgICAgIHRoaXNba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgIGlmKGtleT09PSdmcmVxJyl7XHJcbiAgICAgICAgICAgIHRoaXNbJ2NvdW50ZXInXSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIHJlc2V0Q291bnRlcigpe1xyXG4gICAgICAgIHRoaXMuY291bnRlciA9IHRoaXMuZnJlcTtcclxuICAgIH1cclxuICAgIGNoZWNrQ291bnRlcigpe1xyXG4gICAgICAgIGlmKHRoaXMuaXNSdW5uaW5nPT09dHJ1ZSl7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBzaG91bGRSdW4gPSAtLXRoaXMuY291bnRlcj09PTA7XHJcbiAgICAgICAgaWYodGhpcy5jb3VudGVyPT09MCl7XHJcbiAgICAgICAgICAgIHRoaXMuaXNSdW5uaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5yZXNldENvdW50ZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICByZXR1cm4gc2hvdWxkUnVuO1xyXG4gICAgfVxyXG5cclxufVxyXG5jb25zdCBBWFIgPSBuZXcgQVhfUm91dGluZSgpO1xyXG53aW5kb3cuQVhSID0gQVhSO1xyXG5leHBvcnQgZGVmYXVsdCBBWFI7IiwiY29uc3QgRU1QVFlfRlVOQ1RJT04gPSAoKT0+e307XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFYQ29yZXtcclxuICAgIGNvbnN0cnVjdG9yKF9wcm9wcyl7XHJcbiAgICAgICAgbGV0IHByb3BzID0gcHJvcHMgfHwge307XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuaW5pdChwcm9wcyk7XHJcbiAgICB9XHJcbiAgICBpbml0KF9wcm9wcyl7XHJcbiAgICAgICAgbGV0IHByb3BzID0gX3Byb3BzIHx8IHt9O1xyXG4gICAgICAgIHRoaXMuZGVidWdNb2RlID0gcHJvcHMuZGVidWcgfHwgZmFsc2U7XHJcbiAgICAgICAgdGhpcy5kYXRhTWFwID0ge307XHJcbiAgICAgICAgdGhpcy5hY3Rpb25NYXAgPSB7fTtcclxuICAgICAgICB0aGlzLmJyb3dzZXIgPSB0aGlzLmdldEJyb3dzZXIoKTtcclxuICAgICAgICB3aW5kb3cuYXggPSB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEJyb3dzZXIoKXtcclxuICAgICAgICBsZXQgaXNJRSA9IGZhbHNlO1xyXG4gICAgICAgIGlmKCghIXdpbmRvdy5vcHIgJiYgISFvcHIuYWRkb25zKSB8fCAhIXdpbmRvdy5vcGVyYSB8fCBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJyBPUFIvJykgPj0gMCl7XHJcbiAgICAgICAgICAgIHJldHVybiAnb3BlcmEnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0eXBlb2YgSW5zdGFsbFRyaWdnZXIgIT09ICd1bmRlZmluZWQnKXtcclxuICAgICAgICAgICAgcmV0dXJuICdmaXJlZm94JztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoL2NvbnN0cnVjdG9yL2kudGVzdCh3aW5kb3cuSFRNTEVsZW1lbnQpIHx8IChmdW5jdGlvbiAocCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHAudG9TdHJpbmcoKSA9PT0gXCJbb2JqZWN0IFNhZmFyaVJlbW90ZU5vdGlmaWNhdGlvbl1cIjtcclxuICAgICAgICAgICAgfSkoIXdpbmRvd1snc2FmYXJpJ10gfHwgc2FmYXJpLnB1c2hOb3RpZmljYXRpb24pKXtcclxuICAgICAgICAgICAgcmV0dXJuICdzYWZhcmknO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihmYWxzZSB8fCAhIWRvY3VtZW50LmRvY3VtZW50TW9kZSl7XHJcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgb3V0cHV0ID0gYXJndW1lbnRzWzBdO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gYXJndW1lbnRzW2ldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvYmogPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoa2V5KSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dFtrZXldID0gb2JqW2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgaXNJRSA9dHJ1ZTtcclxuICAgICAgICAgICAgcmV0dXJuICdpZSc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCFpc0lFICYmICEhd2luZG93LlN0eWxlTWVkaWEpe1xyXG4gICAgICAgICAgICByZXR1cm4gJ2VkZ2UnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZighIXdpbmRvdy5jaHJvbWUgJiYgISF3aW5kb3cuY2hyb21lLndlYnN0b3JlKXtcclxuICAgICAgICAgICAgcmV0dXJuICdjaHJvbWUnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZigoaXNDaHJvbWUgfHwgaXNPcGVyYSkgJiYgISF3aW5kb3cuQ1NTKXtcclxuICAgICAgICAgICAgcmV0dXJuICdibGluayc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0b3JlRGF0YUFycmF5KF9hcnJheSwgX2lkS2V5LCBfaXRlbVByb2Nlc3NvciwgX29wdGlvbnMsIF9jYWxsYmFjaykge1xyXG4gICAgICAgIHZhciBvcHRpb25zID0gX29wdGlvbnMgfHwge307XHJcbiAgICAgICAgdmFyIGlkS2V5ID0gX2lkS2V5IHx8ICdpZCc7XHJcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gX2NhbGxiYWNrIHx8IEVNUFRZX0ZVTkNUSU9OO1xyXG4gICAgICAgIHZhciBhcnJheSA9IF9hcnJheSB8fCBbXTtcclxuICAgICAgICB2YXIgaXRlbUxpc3QgPSBbXTtcclxuICAgICAgICB2YXIgaXRlbVByb2Nlc3NvciA9IF9pdGVtUHJvY2Vzc29yIHx8IEVNUFRZX0ZVTkNUSU9OO1xyXG5cclxuICAgICAgICBhcnJheS5mb3JFYWNoKGZ1bmN0aW9uIChfaXRlbSkge1xyXG4gICAgICAgICAgICB2YXIga2V5ID0gX2l0ZW1baWRLZXldO1xyXG4gICAgICAgICAgICBpZiAoa2V5ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIGl0ZW0gPSBzZWxmLnN0b3JlVmFsdWUoa2V5LCBfaXRlbSwgX29wdGlvbnMpO1xyXG5cclxuICAgICAgICAgICAgaXRlbVByb2Nlc3NvcihpdGVtKTtcclxuICAgICAgICAgICAgaXRlbUxpc3QucHVzaChpdGVtKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY2FsbGJhY2soX2FycmF5LCBpdGVtTGlzdCk7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW1MaXN0O1xyXG4gICAgfTtcclxuXHJcbiAgICBzdG9yZVZhbHVlKF9rZXksIF92YWx1ZSwgX29wdGlvbnMsIF9jYWxsYmFjaykge1xyXG4gICAgICAgIHZhciBvcHRpb25zID0gX29wdGlvbnMgfHwge307XHJcbiAgICAgICAgdmFyIHN0b3JlID0gdGhpcy5kYXRhTWFwO1xyXG4gICAgICAgIHZhciBrZXkgPSBfa2V5O1xyXG4gICAgICAgIHZhciBjYWxsYmFjayA9IF9jYWxsYmFjayB8fCBFTVBUWV9GVU5DVElPTjtcclxuICAgICAgICB2YXIgbmV3VmFsdWUgPSBfdmFsdWU7XHJcbiAgICAgICAgdmFyIGl0ZW0gPSBzdG9yZVtrZXldIHx8IHt9O1xyXG4gICAgICAgIGlmKGl0ZW0gPT09IE9iamVjdChpdGVtKSAmJiBvcHRpb25zLm92ZXJ3cml0ZSE9PXRydWUpIHtcclxuICAgICAgICAgICAgaXRlbSA9IE9iamVjdC5hc3NpZ24oaXRlbSwgbmV3VmFsdWUpO1xyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgaXRlbSA9IG5ld1ZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRhdGFNYXBba2V5XSA9IGl0ZW07XHJcblxyXG4gICAgICAgIGNhbGxiYWNrKGl0ZW0pO1xyXG4gICAgICAgIHRoaXMucmVhY3Qoa2V5KTtcclxuICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgIH07XHJcbiAgICBnZXRWYWx1ZShfa2V5KSB7XHJcbiAgICAgICAgdmFyIGtleSA9IF9rZXkgfHwgJyc7XHJcbiAgICAgICAgcmV0dXJuIHNlbGYuZGF0YU1hcFtrZXldO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25uZWN0KF9rZXksX2FjdGlvbikge1xyXG4gICAgICAgIGlmKF9rZXk9PT11bmRlZmluZWQgfHwgX2FjdGlvbj09PXVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBhY3Rpb25NYXAgPSB0aGlzLmFjdGlvbk1hcDtcclxuICAgICAgICB2YXIgYWN0aW9uTGlzdCA9IGFjdGlvbk1hcFtfa2V5XSB8fCBbXTtcclxuICAgICAgICBhY3Rpb25MaXN0LnB1c2goX2FjdGlvbik7XHJcbiAgICAgICAgYWN0aW9uTWFwW19rZXldID0gYWN0aW9uTGlzdDtcclxuICAgIH07XHJcbiAgICByZWFjdChfa2V5KSB7XHJcbiAgICAgICAgaWYoX2tleT09PXVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBhY3Rpb25NYXAgPSB0aGlzLmFjdGlvbk1hcDtcclxuICAgICAgICB2YXIgYWN0aW9uTGlzdCA9IGFjdGlvbk1hcFtfa2V5XSB8fCBbXTtcclxuICAgICAgICBhY3Rpb25MaXN0LmZvckVhY2goKGFjdGlvbik9PiB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBzZWxmLmdldFZhbHVlKF9rZXkpO1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uKHZhbHVlKTtcclxuICAgICAgICAgICAgfWNhdGNoIChlKXtcclxuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IGFjdGlvbkxpc3QuaW5kZXhPZihhY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uTGlzdC5zcGxpY2UoaW5kZXgsMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfTtcclxuICAgIGRlYnVnKHN0cikge1xyXG4gICAgICAgIGlmKHRoaXMuZGVidWdNb2RlKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0RFQlVHOiAnICsgc3RyKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG4iLCJpbXBvcnQgQVhET00gZnJvbSAnLi9GcmFtZXdvcmsvQXgvQVhET00nO1xyXG5cclxuXHJcbnZhciBtYWluQ29udGVudCA9IG5ldyBBWERPTSgnZGl2JywnaG9tZUNvbnRlbnQnKTtcclxubWFpbkNvbnRlbnQuc3R5bGUoJ3dpZHRoJywnMTAwJScpXHJcbiAgICAuc3R5bGUoJ2hlaWdodCcsJzEwMHZoJylcclxuICAgIC5zdHlsZSgnYmFja2dyb3VuZCcsJyMyZjM2NDAnKVxyXG4gICAgLnN0eWxlKCdwb3NpdGlvbicsJ3JlbGF0aXZlJylcclxuICAgIC5zdHlsZSgnb3ZlcmZsb3cnLCdoaWRkZW4nKTtcclxuXHJcbnZhciBoZWFkTGluZSA9IG1haW5Db250ZW50LmFwcGVuZCgnaDEnLCdoZWFkTGluZScpXHJcbiAgICAuY29udGVudCgnRnJvbnQtRW5kIEVuZ2luZWVyJylcclxuICAgIC5zdHlsZSgncG9zaXRpb24nLCdhYnNvbHV0ZScpXHJcbiAgICAuc3R5bGUoJ2NvbG9yJywnd2hpdGUnKVxyXG4gICAgLnN0eWxlKCd3aWR0aCcsJzEwMCUnKVxyXG4gICAgLnN0eWxlKCdoZWlnaHQnLCAnNjBweCcpXHJcbiAgICAuc3R5bGUoJ3RleHQtYWxpZ24nLCdjZW50ZXInKVxyXG4gICAgLnN0eWxlKCdsZWZ0JywnMCcpXHJcbiAgICAuc3R5bGUoJ3JpZ2h0JywnMCcpXHJcbiAgICAuc3R5bGUoJ2JvdHRvbScsJzMzJScpXHJcbiAgICAuc3R5bGUoJ21hcmdpbicsJ2F1dG8nKVxyXG4gICAgLnN0eWxlKCdmb250LXNpemUnLCc2NHB4JylcclxuICAgIC5zdHlsZSgndHJhbnNpdGlvbicsICcwLjNzJylcclxuICAgIC5zdHlsZSgndGV4dC1zaGFkb3cnLCcwIDAgMTBweCAjNzBhMWZmJylcclxuICAgIC5zdHlsZSgnei1pbmRleCcsMSlcclxuICAgIC5vbignbW91c2VvdmVyJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5zdHlsZSgndGV4dC1zaGFkb3cnLCcwIDAgMjBweCAjNzBhMWZmJylcclxuICAgIH0pXHJcbiAgICAub24oJ21vdXNlbGVhdmUnLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnN0eWxlKCd0ZXh0LXNoYWRvdycsJzAgMCAxMHB4ICM3MGExZmYnKVxyXG4gICAgfSk7XHJcbnZhciBob21lSGVhZExpbmVBbmltYXRpb24gPSBBWFIuYXBwZW5kKCdob21lX2hlYWRMaW5lX2FuaW1hdGlvbicpXHJcbiAgICAuYXR0cignZnJlcScsMjApXHJcbiAgICAuYXR0cignYWN0aW9uJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0IG9kZCA9IE1hdGgucmFuZG9tKCkqMTAwO1xyXG4gICAgICAgIGlmKG9kZD41MCl7XHJcbiAgICAgICAgICAgIGhlYWRMaW5lLnN0eWxlKCd0ZXh0LXNoYWRvdycsJzAgMCAyMHB4ICNlY2NjNjgnKVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBoZWFkTGluZS5zdHlsZSgndGV4dC1zaGFkb3cnLCcwIDAgMTBweCAjNzBhMWZmJylcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgLmluc2VydCgpO1xyXG52YXIgY2lyY2xlTnVtID0gMTUwO1xyXG52YXIgY2lyY2xlTGlzdCA9IFtdO1xyXG52YXIgb3JpZ2luID0ge1xyXG4gICAgeDogd2luZG93LmlubmVyV2lkdGgvMixcclxuICAgIHk6IHdpbmRvdy5pbm5lckhlaWdodC8yXHJcbn07XHJcbmZvcih2YXIgaT0wO2k8Y2lyY2xlTnVtO2krKyl7XHJcbiAgICBsZXQgeCA9IE1hdGgucmFuZG9tKCkqd2luZG93LmlubmVyV2lkdGgrMTA7XHJcbiAgICBsZXQgeSA9IE1hdGgucmFuZG9tKCkqd2luZG93LmlubmVySGVpZ2h0KzEwO1xyXG4gICAgbGV0IGNpcmNsZSA9IG1haW5Db250ZW50LmFwcGVuZCgnZGl2JylcclxuICAgICAgICAuc3R5bGUoJ3Bvc2l0aW9uJywnYWJzb2x1dGUnKVxyXG4gICAgICAgIC5zdHlsZSgnd2lkdGgnLCcyMHB4JylcclxuICAgICAgICAuc3R5bGUoJ2hlaWdodCcsJzIwcHgnKVxyXG4gICAgICAgIC5zdHlsZSgnYm9yZGVyLXJhZGl1cycsJzUwJScpXHJcbiAgICAgICAgLnN0eWxlKCdiYWNrZ3JvdW5kJywnI2VjY2M2OCcpXHJcbiAgICAgICAgLnN0eWxlKCd0cmFuc2l0aW9uJywnMC4xcyBsaW5lYXInKVxyXG4gICAgICAgIC5zdHlsZSgnYm94LXNoYWRvdycsJzAgMCAxMHB4ICNlY2NjNjgnKVxyXG4gICAgICAgIC5zdHlsZSgnb3BhY2l0eScsICcwJylcclxuICAgICAgICAuc3R5bGUoJ3RyYW5zZm9ybScsJ3RyYW5zbGF0ZSgnK3grJ3B4LCcreSsncHgpJyk7XHJcbiAgICBjaXJjbGUueCA9IHg7XHJcbiAgICBjaXJjbGUueSA9IHk7XHJcbiAgICBjaXJjbGUuZHggPSBNYXRoLnJhbmRvbSgpLTAuNTtcclxuICAgIGNpcmNsZS5keSA9IE1hdGgucmFuZG9tKCktMC41O1xyXG4gICAgY2lyY2xlLmRzID0gMC4wMTtcclxuICAgIGNpcmNsZS5zY2FsZSA9ICBNYXRoLnJhbmRvbSgpO1xyXG4gICAgY2lyY2xlLmNvdW50ZXIgPSAxMDtcclxuICAgIGxldCBjaXJjbGVBbiA9IEFYUi5hcHBlbmQoJ2hvbWVfY2lyY2xlX2FuaW1hdGlvbicpXHJcbiAgICAgICAgLmF0dHIoJ2ZyZXEnLDIwKVxyXG4gICAgICAgIC5hdHRyKCdhY3Rpb24nLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgbGV0IHNjYWxlID0gY2lyY2xlLnNjYWxlO1xyXG4gICAgICAgICAgICBjaXJjbGUueCs9Y2lyY2xlLmR4O1xyXG4gICAgICAgICAgICBjaXJjbGUueSs9Y2lyY2xlLmR5O1xyXG5cclxuICAgICAgICAgICAgY2lyY2xlLnN0eWxlKCd0cmFuc2Zvcm0nLCd0cmFuc2xhdGUoJytjaXJjbGUueCsncHgsJytjaXJjbGUueSsncHgpIHNjYWxlKCcrc2NhbGUrJyknKVxyXG4gICAgICAgICAgICAgICAgLnN0eWxlKCdvcGFjaXR5Jywgc2NhbGUpXHJcbiAgICAgICAgICAgICAgICAuc3R5bGUoJ2JveC1zaGFkb3cnLCcwIDAgJysoTWF0aC5yYW5kb20oKSoxMCsxMCkrJ3B4ICNlY2NjNjgnKTtcclxuICAgICAgICAgICAgaWYoY2lyY2xlLng+d2luZG93LmlubmVyV2lkdGgpe1xyXG4gICAgICAgICAgICAgICAgY2lyY2xlLmR4ID0gLShNYXRoLnJhbmRvbSgpKjAuNSswLjEpO1xyXG4gICAgICAgICAgICB9ZWxzZSBpZihjaXJjbGUueDwwKXtcclxuICAgICAgICAgICAgICAgIGNpcmNsZS5keCA9IE1hdGgucmFuZG9tKCkqMC41KzAuMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihjaXJjbGUueT53aW5kb3cuaW5uZXJIZWlnaHQpe1xyXG4gICAgICAgICAgICAgICAgY2lyY2xlLmR5ID0gLShNYXRoLnJhbmRvbSgpKjAuNSswLjEpO1xyXG4gICAgICAgICAgICB9ZWxzZSBpZihjaXJjbGUueTwwKXtcclxuICAgICAgICAgICAgICAgIGNpcmNsZS5keSA9IE1hdGgucmFuZG9tKCkqMC41KzAuMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjaXJjbGUuY291bnRlci0tO1xyXG4gICAgICAgICAgICBpZihjaXJjbGUuY291bnRlcjw9MCl7XHJcbiAgICAgICAgICAgICAgICBjaXJjbGUuY291bnRlcj0xMDtcclxuICAgICAgICAgICAgICAgIGNpcmNsZS5zY2FsZSs9Y2lyY2xlLmRzO1xyXG4gICAgICAgICAgICAgICAgaWYoY2lyY2xlLnNjYWxlPj0xKXtcclxuICAgICAgICAgICAgICAgICAgICBjaXJjbGUuZHM9LTAuMDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZihjaXJjbGUuc2NhbGU8PTApe1xyXG4gICAgICAgICAgICAgICAgICAgIGNpcmNsZS5kcz0wLjAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkuaW5zZXJ0KCk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IG1haW5Db250ZW50OyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFueGluIFlhbmcgb24gMy8yOC8yMDE4LlxyXG4gKi9cclxuaW1wb3J0IEFYQ29yZSBmcm9tICcuL0ZyYW1ld29yay9BeC9jb3JlJztcclxuaW1wb3J0IEFYRE9NIGZyb20gJy4vRnJhbWV3b3JrL0F4L0FYRE9NJztcclxuaW1wb3J0IEFYUiBmcm9tICcuL0ZyYW1ld29yay9BeC9BWF9Sb3V0aW5lJztcclxuaW1wb3J0IGhvbWVDb250ZW50IGZyb20gJy4vaG9tZSc7XHJcblxyXG5uZXcgQVhDb3JlKCk7XHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24gKGUpIHtcclxuICAgIG1lbnVDb250YWluZXIudXBkYXRlcignY2xvc2VNZW51JykoKTtcclxufSk7XHJcbnZhciByb290ID0gbmV3IEFYRE9NKCdkaXYnLCdheF9yb290Jyxkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpO1xyXG5yb290LnN0eWxlKCdmb250LXNpemUnLCcxMnB4JylcclxuICAgIC5zdHlsZSgnY3Vyc29yJywgJ3VybCgpLCBhdXRvJyk7XHJcbnZhciBoZWFkZXIgPSByb290LmFwcGVuZCgnZGl2JywnaGVhZGVyJylcclxuICAgIC5hdHRyKCdvbnNlbGVjdHN0YXJ0JywncmV0dXJuIGZhbHNlOycpXHJcbiAgICAuc3R5bGUoJ2Rpc3BsYXknLCdmbGV4JylcclxuICAgIC5zdHlsZSgncG9zaXRpb24nLCdhYnNvbHV0ZScpXHJcbiAgICAuc3R5bGUoJ2JhY2tncm91bmQnLCcjNTM1MmVkJylcclxuICAgIC5zdHlsZSgnd2lkdGgnLCcxMDB2dycpXHJcbiAgICAuc3R5bGUoJ2hlaWdodCcsJzNlbScpXHJcbiAgICAuc3R5bGUoJ3otaW5kZXgnLCcxMCcpO1xyXG5cclxudmFyIGhlYWRlckl0ZW1zID0gWydNZW51JywnUGxheWdyb3VuZCcsJ0Fib3V0J107XHJcbnZhciBpbmRleCA9IDA7XHJcbmhlYWRlckl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgIGhlYWRlckl0ZW1zW2luZGV4KytdID0gaGVhZGVyLmFwcGVuZCgnZGl2JywgJ2hlYWRlcl8nICsgaXRlbSlcclxuICAgICAgICAuY29udGVudChpdGVtKVxyXG4gICAgICAgIC5hcHBlbmRDbGFzcygneHgnKVxyXG4gICAgICAgIC5zdHlsZSgnY29sb3InLCAnd2hpdGUnKVxyXG4gICAgICAgIC5zdHlsZSgncGFkZGluZycsICcxZW0gMC41ZW0nKVxyXG4gICAgICAgIC5zdHlsZSgnY3Vyc29yJywgJ3BvaW50ZXInKVxyXG4gICAgICAgIC5zdHlsZSgndHJhbnNpdGlvbicsICcwLjNzJylcclxuICAgICAgICAub24oJ21vdXNlb3ZlcicsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5zdHlsZSgnYmFja2dyb3VuZCcsICdyZ2IoNDcsIDU0LCA2NCknKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5zdHlsZSgnYmFja2dyb3VuZCcsICcnKTtcclxuICAgICAgICB9KTtcclxufSk7XHJcbnZhciBoZWFkZXJNZW51QnV0dG9uID0gaGVhZGVySXRlbXNbMF07XHJcbmhlYWRlck1lbnVCdXR0b24uc3R5bGUoJ3Bvc2l0aW9uJywncmVsYXRpdmUnKTtcclxudmFyIG1lbnVDb250YWluZXIgPSBoZWFkZXJNZW51QnV0dG9uLmFwcGVuZCgnZGl2JywnbWVudUNvbnRhaW5lcicpXHJcbiAgICAuc3R5bGUoJ3Bvc2l0aW9uJywnYWJzb2x1dGUnKVxyXG4gICAgLnN0eWxlKCd3aWR0aCcsJzI1NnB4JylcclxuICAgIC5zdHlsZSgnaGVpZ2h0JywgJzBweCcpXHJcbiAgICAuc3R5bGUoJ2JhY2tncm91bmQnLCcjNTM1MmVkJylcclxuICAgIC5zdHlsZSgndG9wJywnMTAwJScpXHJcbiAgICAuc3R5bGUoJ2xlZnQnLCcwJylcclxuICAgIC5zdHlsZSgnYm94LXNoYWRvdycsICcwcHggOHB4IDEwcHggYmxhY2snKVxyXG4gICAgLnN0eWxlKCd0cmFuc2l0aW9uJywgJzAuM3MnKVxyXG4gICAgLnNldFVwZGF0ZXIoJ3RvZ2dsZU1lbnUnLGZ1bmN0aW9uIChkKSB7XHJcbiAgICAgICAgbGV0IGhhc09wZW4gPSB0aGlzLmhhc09wZW4gfHwgZmFsc2U7XHJcbiAgICAgICAgaWYoaGFzT3Blbil7XHJcbiAgICAgICAgICAgIHRoaXMuc3R5bGUoJ2hlaWdodCcsJzAnKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5zdHlsZSgnaGVpZ2h0JywnY2FsYygxMDB2aCAtIDNlbSknKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5oYXNPcGVuID0gIWhhc09wZW47XHJcbiAgICB9KVxyXG4gICAgLnNldFVwZGF0ZXIoJ2Nsb3NlTWVudScsZnVuY3Rpb24gKGQpIHtcclxuICAgICAgICB0aGlzLnN0eWxlKCdoZWlnaHQnLCcwJyk7XHJcbiAgICAgICAgdGhpcy5oYXNPcGVuID0gZmFsc2U7XHJcbiAgICB9KTtcclxuXHJcbmhlYWRlck1lbnVCdXR0b24ub24oJ2NsaWNrJyxmdW5jdGlvbihlKXtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBtZW51Q29udGFpbmVyLnVwZGF0ZXIoJ3RvZ2dsZU1lbnUnKSgpO1xyXG59KTtcclxuXHJcbnZhciBtYWluQ29udGFpbmVyID0gIHJvb3QuYXBwZW5kKCdkaXYnLCdtYWluQ29udGFpbmVyJyk7XHJcbm1haW5Db250YWluZXIuYXBwZW5kRWxlbWVudChob21lQ29udGVudCk7XHJcblxyXG5cclxudmFyIHZlcnNpb24gPSByb290LmFwcGVuZCgncCcsJ3ZlcnNpb24nKVxyXG4gICAgLnN0eWxlKCdwb3NpdGlvbicsJ2ZpeGVkJylcclxuICAgIC5zdHlsZSgnYm90dG9tJywnMHB4JylcclxuICAgIC5zdHlsZSgncmlnaHQnLCcwJylcclxuICAgIC5zdHlsZSgncGFkZGluZy1yaWdodCcsJzFlbScpXHJcbiAgICAuc3R5bGUoJ2NvbG9yJywnbGlnaHRncmF5JylcclxuICAgIC5jb250ZW50KG5ldyBEYXRlKCkpXHJcbiAgICAuc2V0VXBkYXRlcigndGltZXInLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmNvbnRlbnQoJ0FYX1JvdXRpbmU6IExhc3JDeWNsZVRpbWU6ICcrQVhSLmxhc3RDeWNsZVRpbWUrJ21zIHwgQ1BTOicrIEFYUi5jeWNsZVBlclNlYyArJyB8TG9uZ2VzdDogJytBWFIubG9uZ2VzdFJvdXRpbmVUaW1lKydtcyB8IExhc3Q6JytBWFIubGFzdFJvdXRpbmVUaW1lKydtcycpO1xyXG4gICAgfSk7XHJcbnZhciB0aW1lciA9IEFYUi5hcHBlbmQoJ3RpbWVyJylcclxuICAgIC5hdHRyKCdmcmVxJywxKVxyXG4gICAgLmF0dHIoJ2FjdGlvbicsdmVyc2lvbi51cGRhdGVyKCd0aW1lcicpKVxyXG4gICAgLmluc2VydCgpOyJdLCJzb3VyY2VSb290IjoiIn0=