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
                if (newRoutine.freq !== 1) {
                    newRoutine.counter += self.routineList.length + 1;
                }
                newRoutine.idx = self.routineList.length;
                self.routineList.push(newRoutine);
                return newRoutine;
            };
            newRoutine.remove = function () {
                self.routineList.splice(newRoutine.idx, 1);
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
                if (this.executionTimes !== undefined) {
                    this.executionTimes--;
                    if (this.executionTimes === 0) {
                        this.remove();
                    }
                }
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
            var isChrome = false;
            var isOpera = false;
            if (!!window.opr && !!opr.addons || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0) {
                isOpera = true;
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
                isChrome = true;
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
mainContent.style('width', '100vw').style('height', '100vh').style('background', '#222f3e').style('position', 'relative').style('transition', '5s').style('overflow', 'hidden').on('mousemove', function (e, d) {
    var x = e.clientX;
    var y = e.clientY;
    var origin = {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2
    };
    mainContent.dx = -(x - origin.x) / 10;
    mainContent.dy = -(y - origin.y) / 10;
});
var backgroundAn = AXR.append('backgroundAn').attr('freq', 200).attr('executionTimes', 1).attr('action', function () {
    mainContent.style('background', 'black');
}).insert();

var headLine = mainContent.append('h1', 'headLine').content('FRONT END ENGINEER').style('position', 'fixed').style('color', 'white').style('width', '100%').style('height', '60px').style('text-align', 'center').style('left', '0').style('right', '0').style('bottom', '33%').style('margin', 'auto').style('font-size', '64px').style('transition', '1s').style('text-shadow', '0 0 10px #70a1ff').style('z-index', 1).on('mouseover', function () {
    this.style('text-shadow', '0 0 30px #eccc68');
}).on('mouseleave', function () {
    this.style('text-shadow', '0 0 10px #70a1ff');
});
var homeHeadLineAnimation = AXR.append('home_headLine_animation').attr('freq', 25).attr('action', function () {
    var odd = Math.random() * 100;
    if (odd > 50) {
        headLine.style('text-shadow', '0 0 30px #eccc68');
    } else {
        headLine.style('text-shadow', '0 0 10px #70a1ff');
    }
}).insert();

var subHeadLine = mainContent.append('h1', 'subHeadLine').content('- who makes data alive -').style('position', 'fixed').style('color', '#eccc68').style('width', '100%').style('height', '30px').style('text-align', 'center').style('left', '0').style('right', '0').style('bottom', '30%').style('margin', 'auto').style('font-size', '32px').style('transition', '1s').style('text-shadow', '0 0 10px #eccc68').style('z-index', 1);
var infoButtonHalo = mainContent.append('span', 'infoButtonHalo').style('position', 'fixed').style('color', '#eccc68').style('width', '32px').style('height', '32px').style('overflow', 'hidden').style('border-radius', '50%').style('text-align', 'center').style('left', '0').style('right', '0').style('bottom', '18%').style('margin', 'auto').style('font-size', '24px').style('transition', '0.5s').style('border', '1px solid #eccc68').style('box-shadow', '0 0 30px #eccc68').style('cursor', 'pointer').style('z-index', 1);
var infoButton = mainContent.append('span', 'infoButton').content('Wanna know more?').style('position', 'fixed').style('color', '#eccc68').style('width', '32px').style('height', '32px').style('overflow', 'hidden').style('border', '1px solid transparent').style('border-radius', '50%').style('text-align', 'center').style('left', '0').style('right', '0').style('bottom', '18%').style('margin', 'auto').style('font-size', '24px').style('transition', '0.5s').style('background', '#eccc68').style('text-shadow', '0 0 5px #eccc68').style('box-shadow', '0 0 10x #eccc68').style('cursor', 'pointer').style('z-index', 1).on('mouseover', function () {
    this.style('background', 'rgba(0, 0, 0, 0.5)').style('width', '100%').style('box-shadow', '').style('border-radius', '4px');
    infoButton.overed = true;
}).on('mouseleave', function () {
    this.style('background', '#eccc68').style('width', '32px').style('box-shadow', '0 0 10px #eccc68').style('border-radius', '50%');
    infoButton.overed = false;
});
var infoButtonHaloAn = AXR.append('infoButtonHaloAn').attr('freq', 60).attr('action', function () {
    if (infoButton.overed === true) {
        infoButtonHalo.state = 0;
    }
    switch (infoButtonHalo.state) {
        case undefined:
        case 0:
            infoButtonHalo.state = 1;
            infoButtonHalo.style('width', '64px').style('bottom', 'calc(18% - 15px)').style('height', '64px').style('opacity', 0);
            break;
        case 1:
            infoButtonHalo.state = 2;
            infoButtonHalo.style('width', '32px').style('bottom', '18%').style('height', '32px');
            break;
        case 2:
            infoButtonHalo.state = 0;
            infoButtonHalo.style('opacity', 1);
            break;
    }
}).insert();

window.mobilecheck = function () {
    var check = false;
    (function (a) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
};
var circleNum = mobilecheck() ? 50 : 150;
var circleList = [];

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
    var circleAn = AXR.append('home_circle_animation').attr('freq', 5).attr('action', function () {
        var scale = circle.scale;
        circle.x += circle.dx;
        circle.y += circle.dy;

        circle.style('transform', 'translate(' + (circle.x + (mainContent.dx || 0) * scale) + 'px,' + (circle.y + (mainContent.dy || 0) * scale) + 'px) scale(' + scale + ')').style('opacity', scale).style('z-index', scale >= 0.8 ? 2 : 0).style('box-shadow', '0 0 ' + (Math.random() * 10 + 10) + 'px #eccc68');
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
try {
    new _core2.default();
    window.addEventListener('click', function (e) {
        menuContainer.updater('closeMenu')();
    });
    var root = new _AXDOM2.default('div', 'ax_root', document.getElementById('app'));
    root.style('font-size', '12px').style('cursor', 'url(), auto');
    var header = root.append('div', 'header').attr('onselectstart', 'return false;').style('display', 'flex').style('position', 'absolute')
    //.style('background','rgba(112, 161, 255,1.0)')
    .style('opacity', '0.5')
    //.style('box-shadow', '0px 0px 5px rgba(112, 161, 255,0)')
    //.style('border','1px solid rgba(112, 161, 255, 0)')
    //.style('border-radius','8px')
    .style('top', '1em').style('height', '3em').style('z-index', '10').style('transition', '0.3s').on('mouseover', function () {
        this.style('opacity', '1');
        //.style('box-shadow', '0px 0px 5px rgba(112, 161, 255,1.0)')
        //.style('border','1px solid rgba(112, 161, 255, 0.5)');
    }).on('mouseleave', function () {
        this.style('opacity', '0.5');
        //.style('box-shadow', '0px 0px 5px rgba(112, 161, 255,0)')
        //.style('border','1px solid rgba(112, 161, 255, 0)');
    });

    var headerItems = ['Menu', 'Playground', 'About'];
    var index = 0;
    headerItems.forEach(function (item) {
        headerItems[index++] = header.append('div', 'header_' + item).content(item).appendClass('xx').style('color', 'white').style('padding', '1em 0.5em').style('cursor', 'pointer').style('text-shadow', '0 0 10px #eccc68').style('transition', '0.3s').on('mouseover', function () {
            this.style('text-shadow', '0 0 10px #eccc68').style('color', '#eccc68');
        }).on('mouseleave', function () {
            this.style('text-shadow', '0 0 20px #eccc68').style('color', 'white');
        });
    });
    var headerMenuButton = headerItems[0];
    headerMenuButton.style('position', 'relative');
    var menuContainer = headerMenuButton.append('div', 'menuContainer').style('position', 'absolute').style('width', '256px').style('height', '0px').style('background', '').style('top', '125%').style('left', '0').style('box-shadow', '0px 0px 5px rgba(112, 161, 255,0)').style('border', '1px solid rgba(112, 161, 255, 0)').style('transition', '0.3s').setUpdater('toggleMenu', function (d) {
        var hasOpen = this.hasOpen || false;
        if (hasOpen) {
            this.style('height', '0').style('box-shadow', '0px 0px 5px rgba(112, 161, 255,0)').style('border', '1px solid rgba(112, 161, 255, 0)');
        } else {
            this.style('height', '33vh').style('box-shadow', '0px 0px 5px rgba(112, 161, 255,1.0)').style('border', '1px solid rgba(112, 161, 255, 0.5)');
        }
        this.hasOpen = !hasOpen;
    }).on('mouseleave', function () {
        this.style('text-shadow', '0 0 20px #eccc68').style('color', 'white');
    });
    var headerMenuButton = headerItems[0];
    headerMenuButton.style('position', 'relative');
    var menuContainer = headerMenuButton.append('div', 'menuContainer').style('position', 'absolute').style('width', '256px').style('height', '0px').style('background', '').style('top', '125%').style('left', '0').style('overflow', 'hidden')
    //.style('box-shadow', '0px 0px 5px rgba(112, 161, 255,0)')
    //.style('border','1px solid rgba(112, 161, 255, 0)')
    .style('transition', '0.3s').setUpdater('toggleMenu', function (d) {
        var hasOpen = this.hasOpen || false;
        if (hasOpen) {
            this.style('height', '0');
            //.style('box-shadow', '0px 0px 5px rgba(112, 161, 255,0)')
            //.style('border','1px solid rgba(112, 161, 255, 0)');
        } else {
            this.style('height', '33vh');
            //.style('box-shadow', '0px 0px 5px rgba(112, 161, 255,1.0)')
            //.style('border','1px solid rgba(112, 161, 255, 0.5)');
        }
        this.hasOpen = !hasOpen;
    }).setUpdater('closeMenu', function (d) {
        this.style('height', '0').style('box-shadow', '0px 0px 5px rgba(112, 161, 255,0)').style('border', '1px solid rgba(112, 161, 255, 0)');
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
    var menuContents = menuContainer.append('ul').style('padding-left', '2em').style('margin', '0');
    var menuItems = ['Coming soon', 'May Coming soon', 'probably Coming soon'];
    index = 0;
    menuItems.forEach(function (item) {
        menuItems[index++] = menuContents.append('li', 'menu_' + item).content(item).style('color', 'white').style('padding', '1em 0.5em').style('cursor', 'pointer').style('text-shadow', '0 0 10px #eccc68').style('transition', '0.3s').on('mouseover', function () {
            this.style('text-shadow', '0 0 10px #eccc68').style('color', '#eccc68');
        }).on('mouseleave', function () {
            this.style('text-shadow', '0 0 20px #eccc68').style('color', 'white');
        });
    });
} catch (e) {
    document.getElementById('app').innerHTML = e;
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0ZyYW1ld29yay9BeC9BWERPTS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRnJhbWV3b3JrL0F4L0FYX1JvdXRpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0ZyYW1ld29yay9BeC9jb3JlLmpzIiwid2VicGFjazovLy8uL3NyYy9ob21lLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tDbkVBOzs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7O3dCQUVJO21CQUFZLE1BQUssS0FBSSxPQUFPOzhCQUN4Qjs7YUFBSyxLQUFLLEtBQUssVUFBVSxRQUN6QjthQUFLLE1BQU0sS0FBSyxVQUFVLFNBQzFCO2FBQUssTUFBTSxTQUFTLGNBQWMsS0FDbEM7YUFBSyxJQUFJLGFBQWEsTUFBSyxLQUMzQjthQUFLLGVBQ0w7YUFBSyxZQUNMO2FBQUssV0FDTDthQUFLLFdBRUw7O1lBQUcsT0FDQztrQkFBTSxZQUFZLEtBQ3JCO0FBQ0Q7WUFBSSxPQUNKO2FBQUssVUFBVSxVQUFVLE1B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LEtBQ2YsTUFBTSxpQkFBaUIsT0FDdkIsTUFBTSxTQUFTLGFBQ2YsUUFBUSxJQUFJLFFBQ1osV0FBVyxTQUFTLFlBQ2pCO2FBQUssUUFBUSxnQ0FBZ0MscUJBQUksZ0JBQWdCLGNBQWMscUJBQUksY0FBYyxnQkFBZ0IscUJBQUkscUJBQXFCLGVBQWUscUJBQUksa0JBQ2hLO0FBQ0wsS0FWYztRQVVWLFFBQVEscUJBQUksT0FBTyxTQUNsQixLQUFLLFFBQVEsR0FDYixLQUFLLFVBQVUsUUFBUSxRQUFRLFVBRXBDO1FBQUksZUFBZSxjQUFjLE9BQU8sTUFDbkMsTUFBTSxnQkFBZ0IsT0FDdEIsTUFBTSxVQUNYO1FBQUksWUFBWSxDQUFDLGVBQWUsbUJBQ2hDO1lBQ0E7Y0FBVSxRQUFRLFVBQVUsTUFDeEI7a0JBQVUsd0JBQXdCLE9BQU8sTUFBTSxVQUFVLE1BQ3BELFFBQVEsTUFDUixNQUFNLFNBQVMsU0FDZixNQUFNLFdBQVcsYUFDakIsTUFBTSxVQUFVLFdBQ2hCLE1BQU0sZUFBZSxvQkFDckIsTUFBTSxjQUFjLFFBQ3BCLEdBQUcsYUFBYSxZQUNiO2lCQUFLLE1BQU0sZUFBZSxvQkFDckIsTUFBTSxTQUNkO0FBVmdCLFdBV2hCLEdBQUcsY0FBYyxZQUNkO2lCQUFLLE1BQU0sZUFBZSxvQkFDckIsTUFBTSxTQUNkO0FBQ1I7QUFDSjtBQTlKRCxFQThKQyxPQUFPLEdBQ0o7YUFBUyxlQUFlLE9BQU8sWUFDbEMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBBbnhpbiBZYW5nIG9uIDUvMjYvMjAxOC5cclxuICovXHJcbmltcG9ydCBBWENvcmUgZnJvbSAnLi9jb3JlJztcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQVhET00ge1xyXG4gICAgY29uc3RydWN0b3IoX3RhZyxfaWQsX3Jvb3QpIHtcclxuICAgICAgICB0aGlzLmlkID0gdGhpcy5yZWFkVmFsdWUoX2lkKXx8ICdzZWxmJztcclxuICAgICAgICB0aGlzLnRhZyA9IHRoaXMucmVhZFZhbHVlKF90YWcpIHx8ICdkaXYnO1xyXG4gICAgICAgIHRoaXMuZG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0aGlzLnRhZyk7XHJcbiAgICAgICAgdGhpcy5kb20uc2V0QXR0cmlidXRlKCdpZCcsdGhpcy5pZCk7XHJcbiAgICAgICAgdGhpcy5jaGlsZHJlbkxpc3QgPSBbXTtcclxuICAgICAgICB0aGlzLmF0dHJpYnV0ZSA9IHt9O1xyXG4gICAgICAgIHRoaXMuZG9tU3R5bGUgPSB7fTtcclxuICAgICAgICB0aGlzLnVwZGF0ZXJzID0ge307XHJcblxyXG4gICAgICAgIGlmKF9yb290KXtcclxuICAgICAgICAgICAgX3Jvb3QuYXBwZW5kQ2hpbGQodGhpcy5kb20pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy51cGRhdGVyID0gZnVuY3Rpb24gKG5hbWUpIHtcclxuICAgICAgICAgICAgbGV0IHVwZGF0ZXIgPXRoaXMudXBkYXRlcnNbbmFtZV07XHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZih1cGRhdGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlci5jYWxsKHNlbGYsIHNlbGYuZGF0YSwgYXJndW1lbnRzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBzZXRVcGRhdGVyKG5hbWUsdXBkYXRlcil7XHJcbiAgICAgICAgdGhpcy51cGRhdGVyc1tuYW1lXSA9IHVwZGF0ZXI7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBiaW5kKGRhdGEpe1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBhcHBlbmQoX3RhZyxfaWQpe1xyXG4gICAgICAgIGxldCB0YWcgPSB0aGlzLnJlYWRWYWx1ZShfdGFnKTtcclxuICAgICAgICBsZXQgaWQgPSB0aGlzLnJlYWRWYWx1ZShfaWQpO1xyXG4gICAgICAgIGxldCBlbGVtZW50ID0gbmV3IEFYRE9NKHRhZyxpZCk7XHJcbiAgICAgICAgdGhpcy5hcHBlbmRFbGVtZW50KGVsZW1lbnQpO1xyXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgfVxyXG4gICAgYXBwZW5kRWxlbWVudChfQVhET00pe1xyXG4gICAgICAgIGxldCBlbGVtZW50ID0gdGhpcy5yZWFkVmFsdWUoX0FYRE9NKTtcclxuICAgICAgICB0aGlzLmNoaWxkcmVuTGlzdC5wdXNoKGVsZW1lbnQpO1xyXG4gICAgICAgIHRoaXMuZG9tLmFwcGVuZENoaWxkKGVsZW1lbnQuZG9tKTtcclxuICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgIH1cclxuICAgIGF0dHIoa2V5LF92YWx1ZSl7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gdGhpcy5yZWFkVmFsdWUoX3ZhbHVlKTtcclxuICAgICAgICB0aGlzLmF0dHJpYnV0ZVtrZXldID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5kb20uc2V0QXR0cmlidXRlKGtleSx2YWx1ZSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBvbihldmVudE5hbWUsX3ZhbHVlKXtcclxuICAgICAgICBsZXQgdmFsdWUgPSBfdmFsdWU7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMub25bZXZlbnROYW1lXSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuZG9tLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHZhbHVlLmNhbGwoc2VsZixlLHNlbGYuZGF0YSwpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBzdHlsZShfa2V5LF92YWx1ZSl7XHJcbiAgICAgICAgbGV0IGtleSA9IHRoaXMucmVhZFZhbHVlKF9rZXkpO1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IHRoaXMucmVhZFZhbHVlKF92YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5kb21TdHlsZVtrZXldID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5kb20uc3R5bGVba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgY29udGVudChfdmFsdWUpe1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IHRoaXMucmVhZFZhbHVlKF92YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5pbm5lckhUTUwgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLmRvbS5pbm5lckhUTUwgPSB2YWx1ZTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIGFwcGVuZENsYXNzKF9jbGFzc05hbWUpe1xyXG4gICAgICAgIGxldCBjbGFzc05hbWUgPSB0aGlzLnJlYWRWYWx1ZShfY2xhc3NOYW1lKTtcclxuICAgICAgICBsZXQgY2xhc3NlcyA9IHRoaXMuY2xhc3NlcyB8fCBbXTtcclxuICAgICAgICBjbGFzc2VzLnB1c2goY2xhc3NOYW1lKTtcclxuICAgICAgICB0aGlzLmRvbS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcbiAgICAgICAgdGhpcy5jbGFzc2VzID0gY2xhc3NlcztcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIHNlbGVjdChfc2VsZWN0b3Ipe1xyXG4gICAgICAgIGxldCBzZWxlY3RvciA9IF9zZWxlY3Rvci5jaGFyQXQoMCk7XHJcbiAgICAgICAgbGV0IG5hbWUgPSBfc2VsZWN0b3Iuc3Vic3RyaW5nKDEpO1xyXG4gICAgICAgIHN3aXRjaCAoc2VsZWN0b3Ipe1xyXG4gICAgICAgICAgICBjYXNlICcjJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNlbGVjdEJ5SWQobmFtZSk7XHJcbiAgICAgICAgICAgIGNhc2UgJy4nOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0QnlDbGFzc05hbWUobmFtZSk7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RCeVRhZyhfc2VsZWN0b3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNlbGVjdEJ5SWQoaWQpe1xyXG4gICAgICAgIGxldCBjaGlsZHJlbkxpc3QgPSB0aGlzLmNoaWxkcmVuTGlzdDtcclxuICAgICAgICBsZXQgdGFyZ2V0O1xyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGk8Y2hpbGRyZW5MaXN0Lmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICBsZXQgY2hpbGQgPSBjaGlsZHJlbkxpc3RbaV07XHJcbiAgICAgICAgICAgIGlmKGNoaWxkLmlkID09PSBpZCl7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSBjaGlsZDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0YXJnZXQ7XHJcbiAgICB9XHJcbiAgICBzZWxlY3RCeUNsYXNzTmFtZShjbGFzc05hbWUpe1xyXG4gICAgICAgIGxldCBjaGlsZHJlbkxpc3QgPSB0aGlzLmNoaWxkcmVuTGlzdDtcclxuICAgICAgICBsZXQgdGFyZ2V0TGlzdCA9IFtdO1xyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGk8Y2hpbGRyZW5MaXN0Lmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICBsZXQgY2hpbGQgPSBjaGlsZHJlbkxpc3RbaV07XHJcbiAgICAgICAgICAgIGlmKGNoaWxkLmNsYXNzZXMuaW5kZXhPZihjbGFzc05hbWUpPi0xKXtcclxuICAgICAgICAgICAgICAgIHRhcmdldExpc3QucHVzaChjaGlsZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRhcmdldExpc3Q7XHJcbiAgICB9XHJcbiAgICBzZWxlY3RCeVRhZyhfdGFnKXtcclxuICAgICAgICBsZXQgY2hpbGRyZW5MaXN0ID0gdGhpcy5jaGlsZHJlbkxpc3Q7XHJcbiAgICAgICAgbGV0IHRhcmdldExpc3QgPSBbXTtcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpPGNoaWxkcmVuTGlzdC5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5MaXN0W2ldO1xyXG4gICAgICAgICAgICBpZihjaGlsZC50YWcgPT09IF90YWcpe1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0TGlzdC5wdXNoKGNoaWxkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGFyZ2V0TGlzdDtcclxuICAgIH1cclxuICAgIHJlbW92ZShfc2VsZWN0b3Ipe1xyXG4gICAgICAgIGlmKF9zZWxlY3Rvcj09dW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmVTZWxmKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHNlbGVjdG9yID0gX3NlbGVjdG9yLmNoYXJBdCgwKTtcclxuICAgICAgICBsZXQgbmFtZSA9IF9zZWxlY3Rvci5zdWJzdHJpbmcoMSk7XHJcbiAgICAgICAgbGV0IHRhcmdldDtcclxuICAgICAgICBzd2l0Y2ggKHNlbGVjdG9yKXtcclxuICAgICAgICAgICAgY2FzZSAnIyc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUJ5SWQobmFtZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnLic6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUJ5Q2xhc3NOYW1lKG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUJ5VGFnKF9zZWxlY3Rvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVtb3ZlQnlJZChpZCl7XHJcbiAgICAgICAgbGV0IGNoaWxkcmVuTGlzdCA9IHRoaXMuY2hpbGRyZW5MaXN0O1xyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGk8Y2hpbGRyZW5MaXN0Lmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICBsZXQgY2hpbGQgPSBjaGlsZHJlbkxpc3RbaV07XHJcbiAgICAgICAgICAgIGlmKGNoaWxkLmlkID09PSBpZCl7XHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlbkxpc3Quc3BsaWNlKGksMSk7XHJcbiAgICAgICAgICAgICAgICBjaGlsZC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgIGktLTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVtb3ZlQnlDbGFzc05hbWUoY2xhc3NOYW1lKXtcclxuICAgICAgICBsZXQgY2hpbGRyZW5MaXN0ID0gdGhpcy5jaGlsZHJlbkxpc3Q7XHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaTxjaGlsZHJlbkxpc3QubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuTGlzdFtpXTtcclxuICAgICAgICAgICAgaWYoY2hpbGQuY2xhc3Nlcy5pbmRleE9mKGNsYXNzTmFtZSk+LTEpe1xyXG4gICAgICAgICAgICAgICAgY2hpbGRyZW5MaXN0LnNwbGljZShpLDEpO1xyXG4gICAgICAgICAgICAgICAgY2hpbGQucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICBpLS07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZW1vdmVCeVRhZyhfdGFnKXtcclxuICAgICAgICBsZXQgY2hpbGRyZW5MaXN0ID0gdGhpcy5jaGlsZHJlbkxpc3Q7XHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaTxjaGlsZHJlbkxpc3QubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuTGlzdFtpXTtcclxuICAgICAgICAgICAgaWYoY2hpbGQudGFnID09PSBfdGFnKXtcclxuICAgICAgICAgICAgICAgIGNoaWxkcmVuTGlzdC5zcGxpY2UoaSwxKTtcclxuICAgICAgICAgICAgICAgIGNoaWxkLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgaS0tO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVtb3ZlU2VsZigpe1xyXG4gICAgICAgIHRoaXMuY2hpbGRyZW5MaXN0LmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgICAgICAgIGNoaWxkLnJlbW92ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuZG9tLnJlbW92ZSgpO1xyXG4gICAgICAgIGZvcih2YXIga2V5IGluIHRoaXMpe1xyXG4gICAgICAgICAgICBkZWxldGUgdGhpc1trZXldXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVhZFZhbHVlKF92YWx1ZSl7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gX3ZhbHVlO1xyXG4gICAgICAgIGlmKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiKXtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLmNhbGwodGhpcyx0aGlzLmRhdGEpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiY29uc3QgTUFYX0NZQ0xFID0gMTAwO1xyXG5jbGFzcyBBWF9Sb3V0aW5le1xyXG4gICAgY29uc3RydWN0b3IoX3RpY2tTcGVlZCxfb3B0aW9ucyl7XHJcbiAgICAgICAgdGhpcy50aWNrU3BlZWQgPSBfdGlja1NwZWVkIHx8IDE7XHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBfb3B0aW9ucyB8fCB7fTtcclxuICAgICAgICB0aGlzLmluaXQob3B0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5NQVhfQ1lDTEUgPSBNQVhfQ1lDTEU7XHJcbiAgICB9XHJcbiAgICBpbml0KG9wdGlvbnMpe1xyXG4gICAgICAgIHdpbmRvdy5BWFIgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuY3ljbGUgPSAwO1xyXG4gICAgICAgIHRoaXMucm91dGluZUxpc3QgPSBbXTtcclxuICAgICAgICB0aGlzLmxvbmdlc3RSb3V0aW5lVGltZSA9MDtcclxuICAgICAgICBzZXRUaW1lb3V0KHRoaXMuc3RhcnQuYmluZCh0aGlzKSk7XHJcbiAgICB9O1xyXG4gICAgc3RhcnQoKXtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5jeWNsZVN0YXJ0VGltZSA9IERhdGUubm93KCk7XHJcbiAgICAgICAgc2V0VGltZW91dChzZWxmLnJvdXRpbmUuYmluZCh0aGlzKSx0aGlzLnRpY2tTcGVlZCk7XHJcbiAgICB9XHJcbiAgICBhcHBlbmQobmFtZSxncm91cCkge1xyXG4gICAgICAgIGxldCBuZXdSb3V0aW5lID0gbmV3IFJvdXRpbmUobmFtZSwgZ3JvdXApO1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBuZXdSb3V0aW5lLmluc2VydD0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZihuZXdSb3V0aW5lLmZyZXEhPT0xKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdSb3V0aW5lLmNvdW50ZXIgKz0gc2VsZi5yb3V0aW5lTGlzdC5sZW5ndGggKyAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG5ld1JvdXRpbmUuaWR4ID0gc2VsZi5yb3V0aW5lTGlzdC5sZW5ndGg7XHJcbiAgICAgICAgICAgIHNlbGYucm91dGluZUxpc3QucHVzaChuZXdSb3V0aW5lKTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ld1JvdXRpbmU7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBuZXdSb3V0aW5lLnJlbW92ZT0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzZWxmLnJvdXRpbmVMaXN0LnNwbGljZShuZXdSb3V0aW5lLmlkeCwxKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBuZXdSb3V0aW5lO1xyXG4gICAgfVxyXG4gICAgZ2V0Q3VycmVudEN5Y2xlKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3ljbGU7XHJcbiAgICB9XHJcbiAgICByb3V0aW5lKCl7XHJcbiAgICAgICAgbGV0IHJvdXRpbmVMaXN0ID0gdGhpcy5yb3V0aW5lTGlzdDtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgZm9yKHZhciBpPTA7aTxyb3V0aW5lTGlzdC5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgbGV0IHJvdXRpbmUgPSByb3V0aW5lTGlzdFtpXTtcclxuICAgICAgICAgICAgbGV0IHN0YXJ0VGltZSA9IERhdGUubm93KCk7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBpZihyb3V0aW5lLmNoZWNrQ291bnRlcigpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0aW5lLmFjdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmxhc3RSb3V0aW5lVGltZSA9IERhdGUubm93KCkgLSBzdGFydFRpbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHNlbGYubG9uZ2VzdFJvdXRpbmVUaW1lPHNlbGYubGFzdFJvdXRpbmVUaW1lKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYubG9uZ2VzdFJvdXRpbmVUaW1lPXNlbGYubGFzdFJvdXRpbmVUaW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHNlbGYubGFzdFJvdXRpbmVUaW1lPjIwMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ1JvdXRpbmU6JyArIHJvdXRpbmUubmFtZSArICcgdG9vayB0b28gbG9uZyB0byBydW4uIFsnK3NlbGYubGFzdFJvdXRpbmVUaW1lKydtc10nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRpbmUuaXNSdW5uaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfWNhdGNoIChlKXtcclxuICAgICAgICAgICAgICAgIC8vREVDSURFIElGIFJFTU9WRSBST1VUSU5FIExBVEVSO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY3ljbGUrKztcclxuICAgICAgICBpZih0aGlzLmN5Y2xlID09PSBNQVhfQ1lDTEUpe1xyXG4gICAgICAgICAgICB0aGlzLmN5Y2xlID0gMDtcclxuICAgICAgICAgICAgdGhpcy5sYXN0Q3ljbGVUaW1lID0gRGF0ZS5ub3coKSAtIHRoaXMuY3ljbGVTdGFydFRpbWU7XHJcbiAgICAgICAgICAgIHRoaXMuY3ljbGVQZXJTZWMgPSBNYXRoLmZsb29yKDEwMDAgLyB0aGlzLmxhc3RDeWNsZVRpbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnN0YXJ0KCk7XHJcbiAgICB9XHJcbn1cclxuY2xhc3MgUm91dGluZXtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUsZ3JvdXApe1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5ncm91cCA9IGdyb3VwIHx8ICdjb21tb24nO1xyXG4gICAgICAgIHRoaXMuZnJlcSA9IDE7XHJcbiAgICAgICAgdGhpcy5hY3Rpb24gPSBmdW5jdGlvbiAoKSB7fTtcclxuICAgICAgICB0aGlzLnJlcGVhdCA9IDA7XHJcbiAgICB9XHJcbiAgICBhdHRyKGtleSx2YWx1ZSl7XHJcbiAgICAgICAgdGhpc1trZXldID0gdmFsdWU7XHJcbiAgICAgICAgaWYoa2V5PT09J2ZyZXEnKXtcclxuICAgICAgICAgICAgdGhpc1snY291bnRlciddID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgcmVzZXRDb3VudGVyKCl7XHJcbiAgICAgICAgdGhpcy5jb3VudGVyID0gdGhpcy5mcmVxO1xyXG4gICAgfVxyXG4gICAgY2hlY2tDb3VudGVyKCl7XHJcbiAgICAgICAgaWYodGhpcy5pc1J1bm5pbmc9PT10cnVlKXtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHNob3VsZFJ1biA9IC0tdGhpcy5jb3VudGVyPT09MDtcclxuICAgICAgICBpZih0aGlzLmNvdW50ZXI9PT0wKXtcclxuICAgICAgICAgICAgaWYodGhpcy5leGVjdXRpb25UaW1lcyE9PXVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmV4ZWN1dGlvblRpbWVzLS07XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmV4ZWN1dGlvblRpbWVzPT09MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmlzUnVubmluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMucmVzZXRDb3VudGVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgcmV0dXJuIHNob3VsZFJ1bjtcclxuICAgIH1cclxuXHJcbn1cclxuY29uc3QgQVhSID0gbmV3IEFYX1JvdXRpbmUoKTtcclxud2luZG93LkFYUiA9IEFYUjtcclxuZXhwb3J0IGRlZmF1bHQgQVhSOyIsImNvbnN0IEVNUFRZX0ZVTkNUSU9OID0gKCk9Pnt9O1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBWENvcmV7XHJcbiAgICBjb25zdHJ1Y3RvcihfcHJvcHMpe1xyXG4gICAgICAgIGxldCBwcm9wcyA9IHByb3BzIHx8IHt9O1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLmluaXQocHJvcHMpO1xyXG4gICAgfVxyXG4gICAgaW5pdChfcHJvcHMpe1xyXG4gICAgICAgIGxldCBwcm9wcyA9IF9wcm9wcyB8fCB7fTtcclxuICAgICAgICB0aGlzLmRlYnVnTW9kZSA9IHByb3BzLmRlYnVnIHx8IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZGF0YU1hcCA9IHt9O1xyXG4gICAgICAgIHRoaXMuYWN0aW9uTWFwID0ge307XHJcbiAgICAgICAgdGhpcy5icm93c2VyID0gdGhpcy5nZXRCcm93c2VyKCk7XHJcbiAgICAgICAgd2luZG93LmF4ID0gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBnZXRCcm93c2VyKCl7XHJcbiAgICAgICAgbGV0IGlzSUUgPSBmYWxzZTtcclxuICAgICAgICBsZXQgaXNDaHJvbWUgPSBmYWxzZTtcclxuICAgICAgICBsZXQgaXNPcGVyYSA9IGZhbHNlO1xyXG4gICAgICAgIGlmKCghIXdpbmRvdy5vcHIgJiYgISFvcHIuYWRkb25zKSB8fCAhIXdpbmRvdy5vcGVyYSB8fCBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJyBPUFIvJykgPj0gMCl7XHJcbiAgICAgICAgICAgIGlzT3BlcmEgPSB0cnVlO1xyXG4gICAgICAgICAgICByZXR1cm4gJ29wZXJhJztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodHlwZW9mIEluc3RhbGxUcmlnZ2VyICE9PSAndW5kZWZpbmVkJyl7XHJcbiAgICAgICAgICAgIHJldHVybiAnZmlyZWZveCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKC9jb25zdHJ1Y3Rvci9pLnRlc3Qod2luZG93LkhUTUxFbGVtZW50KSB8fCAoZnVuY3Rpb24gKHApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwLnRvU3RyaW5nKCkgPT09IFwiW29iamVjdCBTYWZhcmlSZW1vdGVOb3RpZmljYXRpb25dXCI7XHJcbiAgICAgICAgICAgIH0pKCF3aW5kb3dbJ3NhZmFyaSddIHx8IHNhZmFyaS5wdXNoTm90aWZpY2F0aW9uKSl7XHJcbiAgICAgICAgICAgIHJldHVybiAnc2FmYXJpJztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoZmFsc2UgfHwgISFkb2N1bWVudC5kb2N1bWVudE1vZGUpe1xyXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIG91dHB1dCA9IGFyZ3VtZW50c1swXTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIGFyZ3VtZW50c1tpXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgb2JqID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGtleSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXRba2V5XSA9IG9ialtrZXldO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBvdXRwdXQ7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGlzSUUgPXRydWU7XHJcbiAgICAgICAgICAgIHJldHVybiAnaWUnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZighaXNJRSAmJiAhIXdpbmRvdy5TdHlsZU1lZGlhKXtcclxuICAgICAgICAgICAgcmV0dXJuICdlZGdlJztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoISF3aW5kb3cuY2hyb21lICYmICEhd2luZG93LmNocm9tZS53ZWJzdG9yZSl7XHJcbiAgICAgICAgICAgIGlzQ2hyb21lID0gdHJ1ZVxyXG4gICAgICAgICAgICByZXR1cm4gJ2Nocm9tZSc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKChpc0Nocm9tZSB8fCBpc09wZXJhKSAmJiAhIXdpbmRvdy5DU1Mpe1xyXG4gICAgICAgICAgICByZXR1cm4gJ2JsaW5rJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RvcmVEYXRhQXJyYXkoX2FycmF5LCBfaWRLZXksIF9pdGVtUHJvY2Vzc29yLCBfb3B0aW9ucywgX2NhbGxiYWNrKSB7XHJcbiAgICAgICAgdmFyIG9wdGlvbnMgPSBfb3B0aW9ucyB8fCB7fTtcclxuICAgICAgICB2YXIgaWRLZXkgPSBfaWRLZXkgfHwgJ2lkJztcclxuICAgICAgICB2YXIgY2FsbGJhY2sgPSBfY2FsbGJhY2sgfHwgRU1QVFlfRlVOQ1RJT047XHJcbiAgICAgICAgdmFyIGFycmF5ID0gX2FycmF5IHx8IFtdO1xyXG4gICAgICAgIHZhciBpdGVtTGlzdCA9IFtdO1xyXG4gICAgICAgIHZhciBpdGVtUHJvY2Vzc29yID0gX2l0ZW1Qcm9jZXNzb3IgfHwgRU1QVFlfRlVOQ1RJT047XHJcblxyXG4gICAgICAgIGFycmF5LmZvckVhY2goZnVuY3Rpb24gKF9pdGVtKSB7XHJcbiAgICAgICAgICAgIHZhciBrZXkgPSBfaXRlbVtpZEtleV07XHJcbiAgICAgICAgICAgIGlmIChrZXkgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgaXRlbSA9IHNlbGYuc3RvcmVWYWx1ZShrZXksIF9pdGVtLCBfb3B0aW9ucyk7XHJcblxyXG4gICAgICAgICAgICBpdGVtUHJvY2Vzc29yKGl0ZW0pO1xyXG4gICAgICAgICAgICBpdGVtTGlzdC5wdXNoKGl0ZW0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjYWxsYmFjayhfYXJyYXksIGl0ZW1MaXN0KTtcclxuICAgICAgICByZXR1cm4gaXRlbUxpc3Q7XHJcbiAgICB9O1xyXG5cclxuICAgIHN0b3JlVmFsdWUoX2tleSwgX3ZhbHVlLCBfb3B0aW9ucywgX2NhbGxiYWNrKSB7XHJcbiAgICAgICAgdmFyIG9wdGlvbnMgPSBfb3B0aW9ucyB8fCB7fTtcclxuICAgICAgICB2YXIgc3RvcmUgPSB0aGlzLmRhdGFNYXA7XHJcbiAgICAgICAgdmFyIGtleSA9IF9rZXk7XHJcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gX2NhbGxiYWNrIHx8IEVNUFRZX0ZVTkNUSU9OO1xyXG4gICAgICAgIHZhciBuZXdWYWx1ZSA9IF92YWx1ZTtcclxuICAgICAgICB2YXIgaXRlbSA9IHN0b3JlW2tleV0gfHwge307XHJcbiAgICAgICAgaWYoaXRlbSA9PT0gT2JqZWN0KGl0ZW0pICYmIG9wdGlvbnMub3ZlcndyaXRlIT09dHJ1ZSkge1xyXG4gICAgICAgICAgICBpdGVtID0gT2JqZWN0LmFzc2lnbihpdGVtLCBuZXdWYWx1ZSk7XHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICBpdGVtID0gbmV3VmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZGF0YU1hcFtrZXldID0gaXRlbTtcclxuXHJcbiAgICAgICAgY2FsbGJhY2soaXRlbSk7XHJcbiAgICAgICAgdGhpcy5yZWFjdChrZXkpO1xyXG4gICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgfTtcclxuICAgIGdldFZhbHVlKF9rZXkpIHtcclxuICAgICAgICB2YXIga2V5ID0gX2tleSB8fCAnJztcclxuICAgICAgICByZXR1cm4gc2VsZi5kYXRhTWFwW2tleV07XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbm5lY3QoX2tleSxfYWN0aW9uKSB7XHJcbiAgICAgICAgaWYoX2tleT09PXVuZGVmaW5lZCB8fCBfYWN0aW9uPT09dW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGFjdGlvbk1hcCA9IHRoaXMuYWN0aW9uTWFwO1xyXG4gICAgICAgIHZhciBhY3Rpb25MaXN0ID0gYWN0aW9uTWFwW19rZXldIHx8IFtdO1xyXG4gICAgICAgIGFjdGlvbkxpc3QucHVzaChfYWN0aW9uKTtcclxuICAgICAgICBhY3Rpb25NYXBbX2tleV0gPSBhY3Rpb25MaXN0O1xyXG4gICAgfTtcclxuICAgIHJlYWN0KF9rZXkpIHtcclxuICAgICAgICBpZihfa2V5PT09dW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGFjdGlvbk1hcCA9IHRoaXMuYWN0aW9uTWFwO1xyXG4gICAgICAgIHZhciBhY3Rpb25MaXN0ID0gYWN0aW9uTWFwW19rZXldIHx8IFtdO1xyXG4gICAgICAgIGFjdGlvbkxpc3QuZm9yRWFjaCgoYWN0aW9uKT0+IHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHNlbGYuZ2V0VmFsdWUoX2tleSk7XHJcbiAgICAgICAgICAgICAgICBhY3Rpb24odmFsdWUpO1xyXG4gICAgICAgICAgICB9Y2F0Y2ggKGUpe1xyXG4gICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gYWN0aW9uTGlzdC5pbmRleE9mKGFjdGlvbik7XHJcbiAgICAgICAgICAgICAgICBhY3Rpb25MaXN0LnNwbGljZShpbmRleCwxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9O1xyXG4gICAgZGVidWcoc3RyKSB7XHJcbiAgICAgICAgaWYodGhpcy5kZWJ1Z01vZGUpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnREVCVUc6ICcgKyBzdHIpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbiIsImltcG9ydCBBWERPTSBmcm9tICcuL0ZyYW1ld29yay9BeC9BWERPTSc7XHJcblxyXG5cclxudmFyIG1haW5Db250ZW50ID0gbmV3IEFYRE9NKCdkaXYnLCdob21lQ29udGVudCcpO1xyXG5tYWluQ29udGVudC5zdHlsZSgnd2lkdGgnLCcxMDB2dycpXHJcbiAgICAuc3R5bGUoJ2hlaWdodCcsJzEwMHZoJylcclxuICAgIC5zdHlsZSgnYmFja2dyb3VuZCcsJyMyMjJmM2UnKVxyXG4gICAgLnN0eWxlKCdwb3NpdGlvbicsJ3JlbGF0aXZlJylcclxuICAgIC5zdHlsZSgndHJhbnNpdGlvbicsICc1cycpXHJcbiAgICAuc3R5bGUoJ292ZXJmbG93JywnaGlkZGVuJylcclxuICAgIC5vbignbW91c2Vtb3ZlJyxmdW5jdGlvbiAoZSxkKSB7XHJcbiAgICAgICAgbGV0IHggPSBlLmNsaWVudFg7XHJcbiAgICAgICAgbGV0IHkgPSBlLmNsaWVudFk7XHJcbiAgICAgICAgbGV0IG9yaWdpbiA9IHtcclxuICAgICAgICAgICAgeDogd2luZG93LmlubmVyV2lkdGgvMixcclxuICAgICAgICAgICAgeTogd2luZG93LmlubmVySGVpZ2h0LzJcclxuICAgICAgICB9O1xyXG4gICAgICAgIG1haW5Db250ZW50LmR4ID0gLSh4IC0gb3JpZ2luLngpLzEwO1xyXG4gICAgICAgIG1haW5Db250ZW50LmR5ID0gLSh5IC0gb3JpZ2luLnkpLzEwO1xyXG5cclxuICAgIH0pO1xyXG52YXIgYmFja2dyb3VuZEFuID0gQVhSLmFwcGVuZCgnYmFja2dyb3VuZEFuJylcclxuICAgIC5hdHRyKCdmcmVxJywyMDApXHJcbiAgICAuYXR0cignZXhlY3V0aW9uVGltZXMnLDEpXHJcbiAgICAuYXR0cignYWN0aW9uJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbWFpbkNvbnRlbnQuc3R5bGUoJ2JhY2tncm91bmQnLCdibGFjaycpXHJcbiAgICB9KS5pbnNlcnQoKTtcclxuXHJcbnZhciBoZWFkTGluZSA9IG1haW5Db250ZW50LmFwcGVuZCgnaDEnLCdoZWFkTGluZScpXHJcbiAgICAuY29udGVudCgnRlJPTlQgRU5EIEVOR0lORUVSJylcclxuICAgIC5zdHlsZSgncG9zaXRpb24nLCdmaXhlZCcpXHJcbiAgICAuc3R5bGUoJ2NvbG9yJywnd2hpdGUnKVxyXG4gICAgLnN0eWxlKCd3aWR0aCcsJzEwMCUnKVxyXG4gICAgLnN0eWxlKCdoZWlnaHQnLCAnNjBweCcpXHJcbiAgICAuc3R5bGUoJ3RleHQtYWxpZ24nLCdjZW50ZXInKVxyXG4gICAgLnN0eWxlKCdsZWZ0JywnMCcpXHJcbiAgICAuc3R5bGUoJ3JpZ2h0JywnMCcpXHJcbiAgICAuc3R5bGUoJ2JvdHRvbScsJzMzJScpXHJcbiAgICAuc3R5bGUoJ21hcmdpbicsJ2F1dG8nKVxyXG4gICAgLnN0eWxlKCdmb250LXNpemUnLCc2NHB4JylcclxuICAgIC5zdHlsZSgndHJhbnNpdGlvbicsICcxcycpXHJcbiAgICAuc3R5bGUoJ3RleHQtc2hhZG93JywnMCAwIDEwcHggIzcwYTFmZicpXHJcbiAgICAuc3R5bGUoJ3otaW5kZXgnLDEpXHJcbiAgICAub24oJ21vdXNlb3ZlcicsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuc3R5bGUoJ3RleHQtc2hhZG93JywnMCAwIDMwcHggI2VjY2M2OCcpXHJcbiAgICB9KVxyXG4gICAgLm9uKCdtb3VzZWxlYXZlJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5zdHlsZSgndGV4dC1zaGFkb3cnLCcwIDAgMTBweCAjNzBhMWZmJylcclxuICAgIH0pO1xyXG52YXIgaG9tZUhlYWRMaW5lQW5pbWF0aW9uID0gQVhSLmFwcGVuZCgnaG9tZV9oZWFkTGluZV9hbmltYXRpb24nKVxyXG4gICAgLmF0dHIoJ2ZyZXEnLDI1KVxyXG4gICAgLmF0dHIoJ2FjdGlvbicsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCBvZGQgPSBNYXRoLnJhbmRvbSgpKjEwMDtcclxuICAgICAgICBpZihvZGQ+NTApe1xyXG4gICAgICAgICAgICBoZWFkTGluZS5zdHlsZSgndGV4dC1zaGFkb3cnLCcwIDAgMzBweCAjZWNjYzY4JylcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgaGVhZExpbmUuc3R5bGUoJ3RleHQtc2hhZG93JywnMCAwIDEwcHggIzcwYTFmZicpXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIC5pbnNlcnQoKTtcclxuXHJcbnZhciBzdWJIZWFkTGluZSA9IG1haW5Db250ZW50LmFwcGVuZCgnaDEnLCdzdWJIZWFkTGluZScpXHJcbiAgICAuY29udGVudCgnLSB3aG8gbWFrZXMgZGF0YSBhbGl2ZSAtJylcclxuICAgIC5zdHlsZSgncG9zaXRpb24nLCdmaXhlZCcpXHJcbiAgICAuc3R5bGUoJ2NvbG9yJywnI2VjY2M2OCcpXHJcbiAgICAuc3R5bGUoJ3dpZHRoJywnMTAwJScpXHJcbiAgICAuc3R5bGUoJ2hlaWdodCcsICczMHB4JylcclxuICAgIC5zdHlsZSgndGV4dC1hbGlnbicsJ2NlbnRlcicpXHJcbiAgICAuc3R5bGUoJ2xlZnQnLCcwJylcclxuICAgIC5zdHlsZSgncmlnaHQnLCcwJylcclxuICAgIC5zdHlsZSgnYm90dG9tJywnMzAlJylcclxuICAgIC5zdHlsZSgnbWFyZ2luJywnYXV0bycpXHJcbiAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsJzMycHgnKVxyXG4gICAgLnN0eWxlKCd0cmFuc2l0aW9uJywgJzFzJylcclxuICAgIC5zdHlsZSgndGV4dC1zaGFkb3cnLCcwIDAgMTBweCAjZWNjYzY4JylcclxuICAgIC5zdHlsZSgnei1pbmRleCcsMSk7XHJcbnZhciBpbmZvQnV0dG9uSGFsbyA9IG1haW5Db250ZW50LmFwcGVuZCgnc3BhbicsJ2luZm9CdXR0b25IYWxvJylcclxuICAgIC5zdHlsZSgncG9zaXRpb24nLCdmaXhlZCcpXHJcbiAgICAuc3R5bGUoJ2NvbG9yJywnI2VjY2M2OCcpXHJcbiAgICAuc3R5bGUoJ3dpZHRoJywnMzJweCcpXHJcbiAgICAuc3R5bGUoJ2hlaWdodCcsICczMnB4JylcclxuICAgIC5zdHlsZSgnb3ZlcmZsb3cnLCdoaWRkZW4nKVxyXG4gICAgLnN0eWxlKCdib3JkZXItcmFkaXVzJywnNTAlJylcclxuICAgIC5zdHlsZSgndGV4dC1hbGlnbicsJ2NlbnRlcicpXHJcbiAgICAuc3R5bGUoJ2xlZnQnLCcwJylcclxuICAgIC5zdHlsZSgncmlnaHQnLCcwJylcclxuICAgIC5zdHlsZSgnYm90dG9tJywnMTglJylcclxuICAgIC5zdHlsZSgnbWFyZ2luJywnYXV0bycpXHJcbiAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsJzI0cHgnKVxyXG4gICAgLnN0eWxlKCd0cmFuc2l0aW9uJywgJzAuNXMnKVxyXG4gICAgLnN0eWxlKCdib3JkZXInLCcxcHggc29saWQgI2VjY2M2OCcpXHJcbiAgICAuc3R5bGUoJ2JveC1zaGFkb3cnLCcwIDAgMzBweCAjZWNjYzY4JylcclxuICAgIC5zdHlsZSgnY3Vyc29yJywncG9pbnRlcicpXHJcbiAgICAuc3R5bGUoJ3otaW5kZXgnLDEpO1xyXG52YXIgaW5mb0J1dHRvbiA9IG1haW5Db250ZW50LmFwcGVuZCgnc3BhbicsJ2luZm9CdXR0b24nKVxyXG4gICAgLmNvbnRlbnQoJ1dhbm5hIGtub3cgbW9yZT8nKVxyXG4gICAgLnN0eWxlKCdwb3NpdGlvbicsJ2ZpeGVkJylcclxuICAgIC5zdHlsZSgnY29sb3InLCcjZWNjYzY4JylcclxuICAgIC5zdHlsZSgnd2lkdGgnLCczMnB4JylcclxuICAgIC5zdHlsZSgnaGVpZ2h0JywgJzMycHgnKVxyXG4gICAgLnN0eWxlKCdvdmVyZmxvdycsJ2hpZGRlbicpXHJcbiAgICAuc3R5bGUoJ2JvcmRlcicsJzFweCBzb2xpZCB0cmFuc3BhcmVudCcpXHJcbiAgICAuc3R5bGUoJ2JvcmRlci1yYWRpdXMnLCc1MCUnKVxyXG4gICAgLnN0eWxlKCd0ZXh0LWFsaWduJywnY2VudGVyJylcclxuICAgIC5zdHlsZSgnbGVmdCcsJzAnKVxyXG4gICAgLnN0eWxlKCdyaWdodCcsJzAnKVxyXG4gICAgLnN0eWxlKCdib3R0b20nLCcxOCUnKVxyXG4gICAgLnN0eWxlKCdtYXJnaW4nLCdhdXRvJylcclxuICAgIC5zdHlsZSgnZm9udC1zaXplJywnMjRweCcpXHJcbiAgICAuc3R5bGUoJ3RyYW5zaXRpb24nLCAnMC41cycpXHJcbiAgICAuc3R5bGUoJ2JhY2tncm91bmQnLCAnI2VjY2M2OCcpXHJcbiAgICAuc3R5bGUoJ3RleHQtc2hhZG93JywnMCAwIDVweCAjZWNjYzY4JylcclxuICAgIC5zdHlsZSgnYm94LXNoYWRvdycsJzAgMCAxMHggI2VjY2M2OCcpXHJcbiAgICAuc3R5bGUoJ2N1cnNvcicsJ3BvaW50ZXInKVxyXG4gICAgLnN0eWxlKCd6LWluZGV4JywxKVxyXG4gICAgLm9uKCdtb3VzZW92ZXInLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnN0eWxlKCdiYWNrZ3JvdW5kJywncmdiYSgwLCAwLCAwLCAwLjUpJylcclxuICAgICAgICAgICAgLnN0eWxlKCd3aWR0aCcsJzEwMCUnKVxyXG4gICAgICAgICAgICAuc3R5bGUoJ2JveC1zaGFkb3cnLCcnKVxyXG4gICAgICAgICAgICAuc3R5bGUoJ2JvcmRlci1yYWRpdXMnLCc0cHgnKVxyXG4gICAgICAgIGluZm9CdXR0b24ub3ZlcmVkID0gdHJ1ZTtcclxuICAgIH0pXHJcbiAgICAub24oJ21vdXNlbGVhdmUnLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnN0eWxlKCdiYWNrZ3JvdW5kJywgJyNlY2NjNjgnKVxyXG4gICAgICAgICAgICAuc3R5bGUoJ3dpZHRoJywnMzJweCcpXHJcbiAgICAgICAgICAgIC5zdHlsZSgnYm94LXNoYWRvdycsJzAgMCAxMHB4ICNlY2NjNjgnKVxyXG4gICAgICAgICAgICAuc3R5bGUoJ2JvcmRlci1yYWRpdXMnLCc1MCUnKVxyXG4gICAgICAgIGluZm9CdXR0b24ub3ZlcmVkID0gZmFsc2U7XHJcbiAgICB9KTtcclxudmFyIGluZm9CdXR0b25IYWxvQW4gPSBBWFIuYXBwZW5kKCdpbmZvQnV0dG9uSGFsb0FuJylcclxuICAgIC5hdHRyKCdmcmVxJyw2MClcclxuICAgIC5hdHRyKCdhY3Rpb24nLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZihpbmZvQnV0dG9uLm92ZXJlZCA9PT0gdHJ1ZSl7XHJcbiAgICAgICAgICAgIGluZm9CdXR0b25IYWxvLnN0YXRlID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3dpdGNoKGluZm9CdXR0b25IYWxvLnN0YXRlKXtcclxuICAgICAgICAgICAgY2FzZSB1bmRlZmluZWQ6XHJcbiAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgIGluZm9CdXR0b25IYWxvLnN0YXRlID0gMTtcclxuICAgICAgICAgICAgICAgIGluZm9CdXR0b25IYWxvLnN0eWxlKCd3aWR0aCcsICc2NHB4JylcclxuICAgICAgICAgICAgICAgICAgICAuc3R5bGUoJ2JvdHRvbScsJ2NhbGMoMTglIC0gMTVweCknKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdHlsZSgnaGVpZ2h0JywgJzY0cHgnKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdHlsZSgnb3BhY2l0eScsIDApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIGluZm9CdXR0b25IYWxvLnN0YXRlID0gMjtcclxuICAgICAgICAgICAgICAgIGluZm9CdXR0b25IYWxvLnN0eWxlKCd3aWR0aCcsICczMnB4JylcclxuICAgICAgICAgICAgICAgICAgICAuc3R5bGUoJ2JvdHRvbScsJzE4JScpXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0eWxlKCdoZWlnaHQnLCAnMzJweCcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIGluZm9CdXR0b25IYWxvLnN0YXRlID0gMDtcclxuICAgICAgICAgICAgICAgIGluZm9CdXR0b25IYWxvLnN0eWxlKCdvcGFjaXR5JywgMSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9KS5pbnNlcnQoKTtcclxuXHJcbndpbmRvdy5tb2JpbGVjaGVjayA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIGNoZWNrID0gZmFsc2U7XHJcbiAgICAoZnVuY3Rpb24oYSl7aWYoLyhhbmRyb2lkfGJiXFxkK3xtZWVnbykuK21vYmlsZXxhdmFudGdvfGJhZGFcXC98YmxhY2tiZXJyeXxibGF6ZXJ8Y29tcGFsfGVsYWluZXxmZW5uZWN8aGlwdG9wfGllbW9iaWxlfGlwKGhvbmV8b2QpfGlyaXN8a2luZGxlfGxnZSB8bWFlbW98bWlkcHxtbXB8bW9iaWxlLitmaXJlZm94fG5ldGZyb250fG9wZXJhIG0ob2J8aW4paXxwYWxtKCBvcyk/fHBob25lfHAoaXhpfHJlKVxcL3xwbHVja2VyfHBvY2tldHxwc3B8c2VyaWVzKDR8NikwfHN5bWJpYW58dHJlb3x1cFxcLihicm93c2VyfGxpbmspfHZvZGFmb25lfHdhcHx3aW5kb3dzIGNlfHhkYXx4aWluby9pLnRlc3QoYSl8fC8xMjA3fDYzMTB8NjU5MHwzZ3NvfDR0aHB8NTBbMS02XWl8Nzcwc3w4MDJzfGEgd2F8YWJhY3xhYyhlcnxvb3xzXFwtKXxhaShrb3xybil8YWwoYXZ8Y2F8Y28pfGFtb2l8YW4oZXh8bnl8eXcpfGFwdHV8YXIoY2h8Z28pfGFzKHRlfHVzKXxhdHR3fGF1KGRpfFxcLW18ciB8cyApfGF2YW58YmUoY2t8bGx8bnEpfGJpKGxifHJkKXxibChhY3xheil8YnIoZXx2KXd8YnVtYnxid1xcLShufHUpfGM1NVxcL3xjYXBpfGNjd2F8Y2RtXFwtfGNlbGx8Y2h0bXxjbGRjfGNtZFxcLXxjbyhtcHxuZCl8Y3Jhd3xkYShpdHxsbHxuZyl8ZGJ0ZXxkY1xcLXN8ZGV2aXxkaWNhfGRtb2J8ZG8oY3xwKW98ZHMoMTJ8XFwtZCl8ZWwoNDl8YWkpfGVtKGwyfHVsKXxlcihpY3xrMCl8ZXNsOHxleihbNC03XTB8b3N8d2F8emUpfGZldGN8Zmx5KFxcLXxfKXxnMSB1fGc1NjB8Z2VuZXxnZlxcLTV8Z1xcLW1vfGdvKFxcLnd8b2QpfGdyKGFkfHVuKXxoYWllfGhjaXR8aGRcXC0obXxwfHQpfGhlaVxcLXxoaShwdHx0YSl8aHAoIGl8aXApfGhzXFwtY3xodChjKFxcLXwgfF98YXxnfHB8c3x0KXx0cCl8aHUoYXd8dGMpfGlcXC0oMjB8Z298bWEpfGkyMzB8aWFjKCB8XFwtfFxcLyl8aWJyb3xpZGVhfGlnMDF8aWtvbXxpbTFrfGlubm98aXBhcXxpcmlzfGphKHR8dilhfGpicm98amVtdXxqaWdzfGtkZGl8a2VqaXxrZ3QoIHxcXC8pfGtsb258a3B0IHxrd2NcXC18a3lvKGN8ayl8bGUobm98eGkpfGxnKCBnfFxcLyhrfGx8dSl8NTB8NTR8XFwtW2Etd10pfGxpYnd8bHlueHxtMVxcLXd8bTNnYXxtNTBcXC98bWEodGV8dWl8eG8pfG1jKDAxfDIxfGNhKXxtXFwtY3J8bWUocmN8cmkpfG1pKG84fG9hfHRzKXxtbWVmfG1vKDAxfDAyfGJpfGRlfGRvfHQoXFwtfCB8b3x2KXx6eil8bXQoNTB8cDF8diApfG13YnB8bXl3YXxuMTBbMC0yXXxuMjBbMi0zXXxuMzAoMHwyKXxuNTAoMHwyfDUpfG43KDAoMHwxKXwxMCl8bmUoKGN8bSlcXC18b258dGZ8d2Z8d2d8d3QpfG5vayg2fGkpfG56cGh8bzJpbXxvcCh0aXx3dil8b3Jhbnxvd2cxfHA4MDB8cGFuKGF8ZHx0KXxwZHhnfHBnKDEzfFxcLShbMS04XXxjKSl8cGhpbHxwaXJlfHBsKGF5fHVjKXxwblxcLTJ8cG8oY2t8cnR8c2UpfHByb3h8cHNpb3xwdFxcLWd8cWFcXC1hfHFjKDA3fDEyfDIxfDMyfDYwfFxcLVsyLTddfGlcXC0pfHF0ZWt8cjM4MHxyNjAwfHJha3N8cmltOXxybyh2ZXx6byl8czU1XFwvfHNhKGdlfG1hfG1tfG1zfG55fHZhKXxzYygwMXxoXFwtfG9vfHBcXC0pfHNka1xcL3xzZShjKFxcLXwwfDEpfDQ3fG1jfG5kfHJpKXxzZ2hcXC18c2hhcnxzaWUoXFwtfG0pfHNrXFwtMHxzbCg0NXxpZCl8c20oYWx8YXJ8YjN8aXR8dDUpfHNvKGZ0fG55KXxzcCgwMXxoXFwtfHZcXC18diApfHN5KDAxfG1iKXx0MigxOHw1MCl8dDYoMDB8MTB8MTgpfHRhKGd0fGxrKXx0Y2xcXC18dGRnXFwtfHRlbChpfG0pfHRpbVxcLXx0XFwtbW98dG8ocGx8c2gpfHRzKDcwfG1cXC18bTN8bTUpfHR4XFwtOXx1cChcXC5ifGcxfHNpKXx1dHN0fHY0MDB8djc1MHx2ZXJpfHZpKHJnfHRlKXx2ayg0MHw1WzAtM118XFwtdil8dm00MHx2b2RhfHZ1bGN8dngoNTJ8NTN8NjB8NjF8NzB8ODB8ODF8ODN8ODV8OTgpfHczYyhcXC18ICl8d2ViY3x3aGl0fHdpKGcgfG5jfG53KXx3bWxifHdvbnV8eDcwMHx5YXNcXC18eW91cnx6ZXRvfHp0ZVxcLS9pLnRlc3QoYS5zdWJzdHIoMCw0KSkpIGNoZWNrID0gdHJ1ZTt9KShuYXZpZ2F0b3IudXNlckFnZW50fHxuYXZpZ2F0b3IudmVuZG9yfHx3aW5kb3cub3BlcmEpO1xyXG4gICAgcmV0dXJuIGNoZWNrO1xyXG59O1xyXG52YXIgY2lyY2xlTnVtID0gbW9iaWxlY2hlY2soKT81MDoxNTA7XHJcbnZhciBjaXJjbGVMaXN0ID0gW107XHJcblxyXG5mb3IodmFyIGk9MDtpPGNpcmNsZU51bTtpKyspe1xyXG4gICAgbGV0IHggPSBNYXRoLnJhbmRvbSgpKndpbmRvdy5pbm5lcldpZHRoKzEwO1xyXG4gICAgbGV0IHkgPSBNYXRoLnJhbmRvbSgpKndpbmRvdy5pbm5lckhlaWdodCsxMDtcclxuICAgIGxldCBjaXJjbGUgPSBtYWluQ29udGVudC5hcHBlbmQoJ2RpdicpXHJcbiAgICAgICAgLnN0eWxlKCdwb3NpdGlvbicsJ2Fic29sdXRlJylcclxuICAgICAgICAuc3R5bGUoJ3dpZHRoJywnMjBweCcpXHJcbiAgICAgICAgLnN0eWxlKCdoZWlnaHQnLCcyMHB4JylcclxuICAgICAgICAuc3R5bGUoJ2JvcmRlci1yYWRpdXMnLCc1MCUnKVxyXG4gICAgICAgIC5zdHlsZSgnYmFja2dyb3VuZCcsJyNlY2NjNjgnKVxyXG4gICAgICAgIC5zdHlsZSgndHJhbnNpdGlvbicsJzAuMXMgbGluZWFyJylcclxuICAgICAgICAuc3R5bGUoJ2JveC1zaGFkb3cnLCcwIDAgMTBweCAjZWNjYzY4JylcclxuICAgICAgICAuc3R5bGUoJ29wYWNpdHknLCAnMCcpXHJcbiAgICAgICAgLnN0eWxlKCd0cmFuc2Zvcm0nLCd0cmFuc2xhdGUoJyt4KydweCwnK3krJ3B4KScpO1xyXG4gICAgXHJcbiAgICBjaXJjbGUueCA9IHg7XHJcbiAgICBjaXJjbGUueSA9IHk7XHJcbiAgICBjaXJjbGUuZHggPSBNYXRoLnJhbmRvbSgpLTAuNTtcclxuICAgIGNpcmNsZS5keSA9IE1hdGgucmFuZG9tKCktMC41O1xyXG4gICAgY2lyY2xlLmRzID0gMC4wMTtcclxuICAgIGNpcmNsZS5zY2FsZSA9ICBNYXRoLnJhbmRvbSgpO1xyXG4gICAgY2lyY2xlLmNvdW50ZXIgPSAxMDtcclxuICAgIGxldCBjaXJjbGVBbiA9IEFYUi5hcHBlbmQoJ2hvbWVfY2lyY2xlX2FuaW1hdGlvbicpXHJcbiAgICAgICAgLmF0dHIoJ2ZyZXEnLDUpXHJcbiAgICAgICAgLmF0dHIoJ2FjdGlvbicsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBsZXQgc2NhbGUgPSBjaXJjbGUuc2NhbGU7XHJcbiAgICAgICAgICAgIGNpcmNsZS54Kz1jaXJjbGUuZHg7XHJcbiAgICAgICAgICAgIGNpcmNsZS55Kz1jaXJjbGUuZHk7XHJcblxyXG4gICAgICAgICAgICBjaXJjbGUuc3R5bGUoJ3RyYW5zZm9ybScsJ3RyYW5zbGF0ZSgnKyhjaXJjbGUueCArIChtYWluQ29udGVudC5keHx8MCkqc2NhbGUpKydweCwnKyhjaXJjbGUueSArIChtYWluQ29udGVudC5keXx8MCkqc2NhbGUpKydweCkgc2NhbGUoJytzY2FsZSsnKScpXHJcbiAgICAgICAgICAgICAgICAuc3R5bGUoJ29wYWNpdHknLCBzY2FsZSlcclxuICAgICAgICAgICAgICAgIC5zdHlsZSgnei1pbmRleCcsIHNjYWxlPj0wLjg/MjowKVxyXG4gICAgICAgICAgICAgICAgLnN0eWxlKCdib3gtc2hhZG93JywnMCAwICcrKE1hdGgucmFuZG9tKCkqMTArMTApKydweCAjZWNjYzY4Jyk7XHJcbiAgICAgICAgICAgIGlmKGNpcmNsZS54PndpbmRvdy5pbm5lcldpZHRoKXtcclxuICAgICAgICAgICAgICAgIGNpcmNsZS5keCA9IC0oTWF0aC5yYW5kb20oKSowLjUrMC4xKTtcclxuICAgICAgICAgICAgfWVsc2UgaWYoY2lyY2xlLng8MCl7XHJcbiAgICAgICAgICAgICAgICBjaXJjbGUuZHggPSBNYXRoLnJhbmRvbSgpKjAuNSswLjE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoY2lyY2xlLnk+d2luZG93LmlubmVySGVpZ2h0KXtcclxuICAgICAgICAgICAgICAgIGNpcmNsZS5keSA9IC0oTWF0aC5yYW5kb20oKSowLjUrMC4xKTtcclxuICAgICAgICAgICAgfWVsc2UgaWYoY2lyY2xlLnk8MCl7XHJcbiAgICAgICAgICAgICAgICBjaXJjbGUuZHkgPSBNYXRoLnJhbmRvbSgpKjAuNSswLjE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2lyY2xlLmNvdW50ZXItLTtcclxuICAgICAgICAgICAgaWYoY2lyY2xlLmNvdW50ZXI8PTApe1xyXG4gICAgICAgICAgICAgICAgY2lyY2xlLmNvdW50ZXI9MTA7XHJcbiAgICAgICAgICAgICAgICBjaXJjbGUuc2NhbGUrPWNpcmNsZS5kcztcclxuICAgICAgICAgICAgICAgIGlmKGNpcmNsZS5zY2FsZT49MSl7XHJcbiAgICAgICAgICAgICAgICAgICAgY2lyY2xlLmRzPS0wLjAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYoY2lyY2xlLnNjYWxlPD0wKXtcclxuICAgICAgICAgICAgICAgICAgICBjaXJjbGUuZHM9MC4wMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLmluc2VydCgpO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBtYWluQ29udGVudDsiLCIvKipcclxuICogQ3JlYXRlZCBieSBBbnhpbiBZYW5nIG9uIDMvMjgvMjAxOC5cclxuICovXHJcbmltcG9ydCBBWENvcmUgZnJvbSAnLi9GcmFtZXdvcmsvQXgvY29yZSc7XHJcbmltcG9ydCBBWERPTSBmcm9tICcuL0ZyYW1ld29yay9BeC9BWERPTSc7XHJcbmltcG9ydCBBWFIgZnJvbSAnLi9GcmFtZXdvcmsvQXgvQVhfUm91dGluZSc7XHJcbmltcG9ydCBob21lQ29udGVudCBmcm9tICcuL2hvbWUnO1xyXG50cnkge1xyXG4gICAgbmV3IEFYQ29yZSgpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBtZW51Q29udGFpbmVyLnVwZGF0ZXIoJ2Nsb3NlTWVudScpKCk7XHJcbiAgICB9KTtcclxuICAgIHZhciByb290ID0gbmV3IEFYRE9NKCdkaXYnLCAnYXhfcm9vdCcsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7XHJcbiAgICByb290LnN0eWxlKCdmb250LXNpemUnLCAnMTJweCcpXHJcbiAgICAgICAgLnN0eWxlKCdjdXJzb3InLCAndXJsKCksIGF1dG8nKTtcclxuICAgIHZhciBoZWFkZXIgPSByb290LmFwcGVuZCgnZGl2JywgJ2hlYWRlcicpXHJcbiAgICAgICAgLmF0dHIoJ29uc2VsZWN0c3RhcnQnLCAncmV0dXJuIGZhbHNlOycpXHJcbiAgICAgICAgLnN0eWxlKCdkaXNwbGF5JywgJ2ZsZXgnKVxyXG4gICAgICAgIC5zdHlsZSgncG9zaXRpb24nLCAnYWJzb2x1dGUnKVxyXG4gICAgICAgIC8vLnN0eWxlKCdiYWNrZ3JvdW5kJywncmdiYSgxMTIsIDE2MSwgMjU1LDEuMCknKVxyXG4gICAgICAgIC5zdHlsZSgnb3BhY2l0eScsICcwLjUnKVxyXG4gICAgICAgIC8vLnN0eWxlKCdib3gtc2hhZG93JywgJzBweCAwcHggNXB4IHJnYmEoMTEyLCAxNjEsIDI1NSwwKScpXHJcbiAgICAgICAgLy8uc3R5bGUoJ2JvcmRlcicsJzFweCBzb2xpZCByZ2JhKDExMiwgMTYxLCAyNTUsIDApJylcclxuICAgICAgICAvLy5zdHlsZSgnYm9yZGVyLXJhZGl1cycsJzhweCcpXHJcbiAgICAgICAgLnN0eWxlKCd0b3AnLCAnMWVtJylcclxuICAgICAgICAuc3R5bGUoJ2hlaWdodCcsICczZW0nKVxyXG4gICAgICAgIC5zdHlsZSgnei1pbmRleCcsICcxMCcpXHJcbiAgICAgICAgLnN0eWxlKCd0cmFuc2l0aW9uJywgJzAuM3MnKVxyXG4gICAgICAgIC5vbignbW91c2VvdmVyJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLnN0eWxlKCdvcGFjaXR5JywgJzEnKVxyXG4gICAgICAgICAgICAvLy5zdHlsZSgnYm94LXNoYWRvdycsICcwcHggMHB4IDVweCByZ2JhKDExMiwgMTYxLCAyNTUsMS4wKScpXHJcbiAgICAgICAgICAgIC8vLnN0eWxlKCdib3JkZXInLCcxcHggc29saWQgcmdiYSgxMTIsIDE2MSwgMjU1LCAwLjUpJyk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3R5bGUoJ29wYWNpdHknLCAnMC41JylcclxuICAgICAgICAgICAgLy8uc3R5bGUoJ2JveC1zaGFkb3cnLCAnMHB4IDBweCA1cHggcmdiYSgxMTIsIDE2MSwgMjU1LDApJylcclxuICAgICAgICAgICAgLy8uc3R5bGUoJ2JvcmRlcicsJzFweCBzb2xpZCByZ2JhKDExMiwgMTYxLCAyNTUsIDApJyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgdmFyIGhlYWRlckl0ZW1zID0gWydNZW51JywgJ1BsYXlncm91bmQnLCAnQWJvdXQnXTtcclxuICAgIHZhciBpbmRleCA9IDA7XHJcbiAgICBoZWFkZXJJdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgaGVhZGVySXRlbXNbaW5kZXgrK10gPSBoZWFkZXIuYXBwZW5kKCdkaXYnLCAnaGVhZGVyXycgKyBpdGVtKVxyXG4gICAgICAgICAgICAuY29udGVudChpdGVtKVxyXG4gICAgICAgICAgICAuYXBwZW5kQ2xhc3MoJ3h4JylcclxuICAgICAgICAgICAgLnN0eWxlKCdjb2xvcicsICd3aGl0ZScpXHJcbiAgICAgICAgICAgIC5zdHlsZSgncGFkZGluZycsICcxZW0gMC41ZW0nKVxyXG4gICAgICAgICAgICAuc3R5bGUoJ2N1cnNvcicsICdwb2ludGVyJylcclxuICAgICAgICAgICAgLnN0eWxlKCd0ZXh0LXNoYWRvdycsICcwIDAgMTBweCAjZWNjYzY4JylcclxuICAgICAgICAgICAgLnN0eWxlKCd0cmFuc2l0aW9uJywgJzAuM3MnKVxyXG4gICAgICAgICAgICAub24oJ21vdXNlb3ZlcicsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3R5bGUoJ3RleHQtc2hhZG93JywgJzAgMCAxMHB4ICNlY2NjNjgnKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdHlsZSgnY29sb3InLCAnI2VjY2M2OCcpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0eWxlKCd0ZXh0LXNoYWRvdycsICcwIDAgMjBweCAjZWNjYzY4JylcclxuICAgICAgICAgICAgICAgICAgICAuc3R5bGUoJ2NvbG9yJywgJ3doaXRlJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICB2YXIgaGVhZGVyTWVudUJ1dHRvbiA9IGhlYWRlckl0ZW1zWzBdO1xyXG4gICAgaGVhZGVyTWVudUJ1dHRvbi5zdHlsZSgncG9zaXRpb24nLCAncmVsYXRpdmUnKTtcclxuICAgIHZhciBtZW51Q29udGFpbmVyID0gaGVhZGVyTWVudUJ1dHRvbi5hcHBlbmQoJ2RpdicsICdtZW51Q29udGFpbmVyJylcclxuICAgICAgICAuc3R5bGUoJ3Bvc2l0aW9uJywgJ2Fic29sdXRlJylcclxuICAgICAgICAuc3R5bGUoJ3dpZHRoJywgJzI1NnB4JylcclxuICAgICAgICAuc3R5bGUoJ2hlaWdodCcsICcwcHgnKVxyXG4gICAgICAgIC5zdHlsZSgnYmFja2dyb3VuZCcsICcnKVxyXG4gICAgICAgIC5zdHlsZSgndG9wJywgJzEyNSUnKVxyXG4gICAgICAgIC5zdHlsZSgnbGVmdCcsICcwJylcclxuICAgICAgICAuc3R5bGUoJ2JveC1zaGFkb3cnLCAnMHB4IDBweCA1cHggcmdiYSgxMTIsIDE2MSwgMjU1LDApJylcclxuICAgICAgICAuc3R5bGUoJ2JvcmRlcicsICcxcHggc29saWQgcmdiYSgxMTIsIDE2MSwgMjU1LCAwKScpXHJcbiAgICAgICAgLnN0eWxlKCd0cmFuc2l0aW9uJywgJzAuM3MnKVxyXG4gICAgICAgIC5zZXRVcGRhdGVyKCd0b2dnbGVNZW51JywgZnVuY3Rpb24gKGQpIHtcclxuICAgICAgICAgICAgbGV0IGhhc09wZW4gPSB0aGlzLmhhc09wZW4gfHwgZmFsc2U7XHJcbiAgICAgICAgICAgIGlmIChoYXNPcGVuKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0eWxlKCdoZWlnaHQnLCAnMCcpXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0eWxlKCdib3gtc2hhZG93JywgJzBweCAwcHggNXB4IHJnYmEoMTEyLCAxNjEsIDI1NSwwKScpXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0eWxlKCdib3JkZXInLCAnMXB4IHNvbGlkIHJnYmEoMTEyLCAxNjEsIDI1NSwgMCknKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3R5bGUoJ2hlaWdodCcsICczM3ZoJylcclxuICAgICAgICAgICAgICAgICAgICAuc3R5bGUoJ2JveC1zaGFkb3cnLCAnMHB4IDBweCA1cHggcmdiYSgxMTIsIDE2MSwgMjU1LDEuMCknKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdHlsZSgnYm9yZGVyJywgJzFweCBzb2xpZCByZ2JhKDExMiwgMTYxLCAyNTUsIDAuNSknKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmhhc09wZW4gPSAhaGFzT3BlbjtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5zdHlsZSgndGV4dC1zaGFkb3cnLCAnMCAwIDIwcHggI2VjY2M2OCcpXHJcbiAgICAgICAgICAgICAgICAuc3R5bGUoJ2NvbG9yJywgJ3doaXRlJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB2YXIgaGVhZGVyTWVudUJ1dHRvbiA9IGhlYWRlckl0ZW1zWzBdO1xyXG4gICAgaGVhZGVyTWVudUJ1dHRvbi5zdHlsZSgncG9zaXRpb24nLCAncmVsYXRpdmUnKTtcclxuICAgIHZhciBtZW51Q29udGFpbmVyID0gaGVhZGVyTWVudUJ1dHRvbi5hcHBlbmQoJ2RpdicsICdtZW51Q29udGFpbmVyJylcclxuICAgICAgICAuc3R5bGUoJ3Bvc2l0aW9uJywgJ2Fic29sdXRlJylcclxuICAgICAgICAuc3R5bGUoJ3dpZHRoJywgJzI1NnB4JylcclxuICAgICAgICAuc3R5bGUoJ2hlaWdodCcsICcwcHgnKVxyXG4gICAgICAgIC5zdHlsZSgnYmFja2dyb3VuZCcsICcnKVxyXG4gICAgICAgIC5zdHlsZSgndG9wJywgJzEyNSUnKVxyXG4gICAgICAgIC5zdHlsZSgnbGVmdCcsICcwJylcclxuICAgICAgICAuc3R5bGUoJ292ZXJmbG93JywgJ2hpZGRlbicpXHJcbiAgICAgICAgLy8uc3R5bGUoJ2JveC1zaGFkb3cnLCAnMHB4IDBweCA1cHggcmdiYSgxMTIsIDE2MSwgMjU1LDApJylcclxuICAgICAgICAvLy5zdHlsZSgnYm9yZGVyJywnMXB4IHNvbGlkIHJnYmEoMTEyLCAxNjEsIDI1NSwgMCknKVxyXG4gICAgICAgIC5zdHlsZSgndHJhbnNpdGlvbicsICcwLjNzJylcclxuICAgICAgICAuc2V0VXBkYXRlcigndG9nZ2xlTWVudScsIGZ1bmN0aW9uIChkKSB7XHJcbiAgICAgICAgICAgIGxldCBoYXNPcGVuID0gdGhpcy5oYXNPcGVuIHx8IGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAoaGFzT3Blbikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdHlsZSgnaGVpZ2h0JywgJzAnKVxyXG4gICAgICAgICAgICAgICAgLy8uc3R5bGUoJ2JveC1zaGFkb3cnLCAnMHB4IDBweCA1cHggcmdiYSgxMTIsIDE2MSwgMjU1LDApJylcclxuICAgICAgICAgICAgICAgIC8vLnN0eWxlKCdib3JkZXInLCcxcHggc29saWQgcmdiYSgxMTIsIDE2MSwgMjU1LCAwKScpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdHlsZSgnaGVpZ2h0JywgJzMzdmgnKVxyXG4gICAgICAgICAgICAgICAgLy8uc3R5bGUoJ2JveC1zaGFkb3cnLCAnMHB4IDBweCA1cHggcmdiYSgxMTIsIDE2MSwgMjU1LDEuMCknKVxyXG4gICAgICAgICAgICAgICAgLy8uc3R5bGUoJ2JvcmRlcicsJzFweCBzb2xpZCByZ2JhKDExMiwgMTYxLCAyNTUsIDAuNSknKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmhhc09wZW4gPSAhaGFzT3BlbjtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5zZXRVcGRhdGVyKCdjbG9zZU1lbnUnLCBmdW5jdGlvbiAoZCkge1xyXG4gICAgICAgICAgICB0aGlzLnN0eWxlKCdoZWlnaHQnLCAnMCcpXHJcbiAgICAgICAgICAgICAgICAuc3R5bGUoJ2JveC1zaGFkb3cnLCAnMHB4IDBweCA1cHggcmdiYSgxMTIsIDE2MSwgMjU1LDApJylcclxuICAgICAgICAgICAgICAgIC5zdHlsZSgnYm9yZGVyJywgJzFweCBzb2xpZCByZ2JhKDExMiwgMTYxLCAyNTUsIDApJyk7XHJcbiAgICAgICAgICAgIHRoaXMuaGFzT3BlbiA9IGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIGhlYWRlck1lbnVCdXR0b24ub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIG1lbnVDb250YWluZXIudXBkYXRlcigndG9nZ2xlTWVudScpKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB2YXIgbWFpbkNvbnRhaW5lciA9IHJvb3QuYXBwZW5kKCdkaXYnLCAnbWFpbkNvbnRhaW5lcicpO1xyXG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRFbGVtZW50KGhvbWVDb250ZW50KTtcclxuXHJcbiAgICB2YXIgdmVyc2lvbiA9IHJvb3QuYXBwZW5kKCdwJywgJ3ZlcnNpb24nKVxyXG4gICAgICAgIC5zdHlsZSgncG9zaXRpb24nLCAnZml4ZWQnKVxyXG4gICAgICAgIC5zdHlsZSgnYm90dG9tJywgJzBweCcpXHJcbiAgICAgICAgLnN0eWxlKCdyaWdodCcsICcwJylcclxuICAgICAgICAuc3R5bGUoJ3BhZGRpbmctcmlnaHQnLCAnMWVtJylcclxuICAgICAgICAuc3R5bGUoJ2NvbG9yJywgJ2xpZ2h0Z3JheScpXHJcbiAgICAgICAgLmNvbnRlbnQobmV3IERhdGUoKSlcclxuICAgICAgICAuc2V0VXBkYXRlcigndGltZXInLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGVudCgnQVhfUm91dGluZTogTGFzckN5Y2xlVGltZTogJyArIEFYUi5sYXN0Q3ljbGVUaW1lICsgJ21zIHwgQ1BTOicgKyBBWFIuY3ljbGVQZXJTZWMgKyAnIHxMb25nZXN0OiAnICsgQVhSLmxvbmdlc3RSb3V0aW5lVGltZSArICdtcyB8IExhc3Q6JyArIEFYUi5sYXN0Um91dGluZVRpbWUgKyAnbXMnKTtcclxuICAgICAgICB9KTtcclxuICAgIHZhciB0aW1lciA9IEFYUi5hcHBlbmQoJ3RpbWVyJylcclxuICAgICAgICAuYXR0cignZnJlcScsIDEpXHJcbiAgICAgICAgLmF0dHIoJ2FjdGlvbicsIHZlcnNpb24udXBkYXRlcigndGltZXInKSlcclxuICAgICAgICAuaW5zZXJ0KCk7XHJcbiAgICB2YXIgbWVudUNvbnRlbnRzID0gbWVudUNvbnRhaW5lci5hcHBlbmQoJ3VsJylcclxuICAgICAgICAuc3R5bGUoJ3BhZGRpbmctbGVmdCcsICcyZW0nKVxyXG4gICAgICAgIC5zdHlsZSgnbWFyZ2luJywgJzAnKTtcclxuICAgIHZhciBtZW51SXRlbXMgPSBbJ0NvbWluZyBzb29uJywgJ01heSBDb21pbmcgc29vbicsICdwcm9iYWJseSBDb21pbmcgc29vbiddO1xyXG4gICAgaW5kZXggPSAwO1xyXG4gICAgbWVudUl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICBtZW51SXRlbXNbaW5kZXgrK10gPSBtZW51Q29udGVudHMuYXBwZW5kKCdsaScsICdtZW51XycgKyBpdGVtKVxyXG4gICAgICAgICAgICAuY29udGVudChpdGVtKVxyXG4gICAgICAgICAgICAuc3R5bGUoJ2NvbG9yJywgJ3doaXRlJylcclxuICAgICAgICAgICAgLnN0eWxlKCdwYWRkaW5nJywgJzFlbSAwLjVlbScpXHJcbiAgICAgICAgICAgIC5zdHlsZSgnY3Vyc29yJywgJ3BvaW50ZXInKVxyXG4gICAgICAgICAgICAuc3R5bGUoJ3RleHQtc2hhZG93JywgJzAgMCAxMHB4ICNlY2NjNjgnKVxyXG4gICAgICAgICAgICAuc3R5bGUoJ3RyYW5zaXRpb24nLCAnMC4zcycpXHJcbiAgICAgICAgICAgIC5vbignbW91c2VvdmVyJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdHlsZSgndGV4dC1zaGFkb3cnLCAnMCAwIDEwcHggI2VjY2M2OCcpXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0eWxlKCdjb2xvcicsICcjZWNjYzY4Jyk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3R5bGUoJ3RleHQtc2hhZG93JywgJzAgMCAyMHB4ICNlY2NjNjgnKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdHlsZSgnY29sb3InLCAnd2hpdGUnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufWNhdGNoIChlKXtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKS5pbm5lckhUTUw9IGU7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==