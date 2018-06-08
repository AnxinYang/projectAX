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
    this.style('background', 'rgba(34, 47, 62,0.5)').style('width', '100%').style('box-shadow', '').style('border-radius', '4px');
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
    var circle = mainContent.append('div').style('position', 'absolute').style('width', '20px').style('height', '20px').style('border-radius', '50%').style('background', '#eccc68').style('transition', '0.1s linear').style('box-shadow', '0 0 10px #eccc68').style('opacity', '0').style('transform', 'translate(' + x + 'px,' + y + 'px)').on('mouseover', function () {
        this.style('background', 'rgba(255, 165, 2,1.0)');
    }).on('mouseleave', function () {
        this.style('background', '#eccc68');
    });
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

        circle.style('transform', 'translate(' + (circle.x + (mainContent.dx || 0) * scale) + 'px,' + (circle.y + (mainContent.dy || 0) * scale) + 'px) scale(' + scale + ')').style('opacity', scale).style('box-shadow', '0 0 ' + (Math.random() * 10 + 10) + 'px #eccc68');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0ZyYW1ld29yay9BeC9BWERPTS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRnJhbWV3b3JrL0F4L0FYX1JvdXRpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0ZyYW1ld29yay9BeC9jb3JlLmpzIiwid2VicGFjazovLy8uL3NyYy9ob21lLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tDbkVBOzs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7O3dCQUVJO21CQUFZLE1BQUssS0FBSSxPQUFPOzhCQUN4Qjs7YUFBSyxLQUFLLEtBQUssVUFBVSxRQUN6QjthQUFLLE1BQU0sS0FBSyxVQUFVLFNBQzFCO2FBQUssTUFBTSxTQUFTLGNBQWMsS0FDbEM7YUFBSyxJQUFJLGFBQWEsTUFBSyxLQUMzQjthQUFLLGVBQ0w7YUFBSyxZQUNMO2FBQUssV0FDTDthQUFLLFdBRUw7O1lBQUcsT0FDQztrQkFBTSxZQUFZLEtBQ3JCO0FBQ0Q7WUFBSSxPQUNKO2FBQUssVUFBVSxVQUFVLE1B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Q3pCLE1BQU0sWUFBVyxTQUNqQixNQUFNLFVBQVMsT0FDZixNQUFNLFNBQVEsS0FDZCxNQUFNLGlCQUFnQixPQUN0QixNQUFNLFNBQVEsYUFDZCxRQUFRLElBQUksUUFDWixXQUFXLFNBQVEsWUFDaEI7YUFBSyxRQUFRLGdDQUE4QixxQkFBSSxnQkFBYyxjQUFhLHFCQUFJLGNBQWEsZ0JBQWMscUJBQUkscUJBQW1CLGVBQWEscUJBQUksa0JBQ3BKO0FBQ0wsS0FWYztRQVVWLFFBQVEscUJBQUksT0FBTyxTQUNsQixLQUFLLFFBQU8sR0FDWixLQUFLLFVBQVMsUUFBUSxRQUFRLFVBRW5DO1FBQUksZUFBZSxjQUFjLE9BQU8sTUFDbkMsTUFBTSxnQkFBZSxPQUNyQixNQUFNLFVBQ1g7UUFBSSxZQUFZLENBQUMsZUFBYyxtQkFDL0I7WUFDQTtjQUFVLFFBQVEsVUFBVSxNQUN4QjtrQkFBVSx3QkFBd0IsT0FBTyxNQUFNLFVBQVUsTUFDcEQsUUFBUSxNQUNSLE1BQU0sU0FBUyxTQUNmLE1BQU0sV0FBVyxhQUNqQixNQUFNLFVBQVUsV0FDaEIsTUFBTSxlQUFjLG9CQUNwQixNQUFNLGNBQWMsUUFDcEIsR0FBRyxhQUFhLFlBQ2I7aUJBQUssTUFBTSxlQUFjLG9CQUNwQixNQUFNLFNBQ2Q7QUFWZ0IsV0FXaEIsR0FBRyxjQUFjLFlBQ2Q7aUJBQUssTUFBTSxlQUFjLG9CQUNwQixNQUFNLFNBQ2Q7QUFDUjtBQUNBO0FBOUpELEVBOEpDLE9BQU8sR0FDSjthQUFTLGVBQWUsT0FBTyxZQUNsQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFueGluIFlhbmcgb24gNS8yNi8yMDE4LlxyXG4gKi9cclxuaW1wb3J0IEFYQ29yZSBmcm9tICcuL2NvcmUnO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBWERPTSB7XHJcbiAgICBjb25zdHJ1Y3RvcihfdGFnLF9pZCxfcm9vdCkge1xyXG4gICAgICAgIHRoaXMuaWQgPSB0aGlzLnJlYWRWYWx1ZShfaWQpfHwgJ3NlbGYnO1xyXG4gICAgICAgIHRoaXMudGFnID0gdGhpcy5yZWFkVmFsdWUoX3RhZykgfHwgJ2Rpdic7XHJcbiAgICAgICAgdGhpcy5kb20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRoaXMudGFnKTtcclxuICAgICAgICB0aGlzLmRvbS5zZXRBdHRyaWJ1dGUoJ2lkJyx0aGlzLmlkKTtcclxuICAgICAgICB0aGlzLmNoaWxkcmVuTGlzdCA9IFtdO1xyXG4gICAgICAgIHRoaXMuYXR0cmlidXRlID0ge307XHJcbiAgICAgICAgdGhpcy5kb21TdHlsZSA9IHt9O1xyXG4gICAgICAgIHRoaXMudXBkYXRlcnMgPSB7fTtcclxuXHJcbiAgICAgICAgaWYoX3Jvb3Qpe1xyXG4gICAgICAgICAgICBfcm9vdC5hcHBlbmRDaGlsZCh0aGlzLmRvbSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLnVwZGF0ZXIgPSBmdW5jdGlvbiAobmFtZSkge1xyXG4gICAgICAgICAgICBsZXQgdXBkYXRlciA9dGhpcy51cGRhdGVyc1tuYW1lXTtcclxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmKHVwZGF0ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVyLmNhbGwoc2VsZiwgc2VsZi5kYXRhLCBhcmd1bWVudHMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIHNldFVwZGF0ZXIobmFtZSx1cGRhdGVyKXtcclxuICAgICAgICB0aGlzLnVwZGF0ZXJzW25hbWVdID0gdXBkYXRlcjtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIGJpbmQoZGF0YSl7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIGFwcGVuZChfdGFnLF9pZCl7XHJcbiAgICAgICAgbGV0IHRhZyA9IHRoaXMucmVhZFZhbHVlKF90YWcpO1xyXG4gICAgICAgIGxldCBpZCA9IHRoaXMucmVhZFZhbHVlKF9pZCk7XHJcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBuZXcgQVhET00odGFnLGlkKTtcclxuICAgICAgICB0aGlzLmFwcGVuZEVsZW1lbnQoZWxlbWVudCk7XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgICBhcHBlbmRFbGVtZW50KF9BWERPTSl7XHJcbiAgICAgICAgbGV0IGVsZW1lbnQgPSB0aGlzLnJlYWRWYWx1ZShfQVhET00pO1xyXG4gICAgICAgIHRoaXMuY2hpbGRyZW5MaXN0LnB1c2goZWxlbWVudCk7XHJcbiAgICAgICAgdGhpcy5kb20uYXBwZW5kQ2hpbGQoZWxlbWVudC5kb20pO1xyXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgfVxyXG4gICAgYXR0cihrZXksX3ZhbHVlKXtcclxuICAgICAgICBsZXQgdmFsdWUgPSB0aGlzLnJlYWRWYWx1ZShfdmFsdWUpO1xyXG4gICAgICAgIHRoaXMuYXR0cmlidXRlW2tleV0gPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLmRvbS5zZXRBdHRyaWJ1dGUoa2V5LHZhbHVlKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIG9uKGV2ZW50TmFtZSxfdmFsdWUpe1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IF92YWx1ZTtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5vbltldmVudE5hbWVdID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5kb20uYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgdmFsdWUuY2FsbChzZWxmLGUsc2VsZi5kYXRhLClcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIHN0eWxlKF9rZXksX3ZhbHVlKXtcclxuICAgICAgICBsZXQga2V5ID0gdGhpcy5yZWFkVmFsdWUoX2tleSk7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gdGhpcy5yZWFkVmFsdWUoX3ZhbHVlKTtcclxuICAgICAgICB0aGlzLmRvbVN0eWxlW2tleV0gPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLmRvbS5zdHlsZVtrZXldID0gdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBjb250ZW50KF92YWx1ZSl7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gdGhpcy5yZWFkVmFsdWUoX3ZhbHVlKTtcclxuICAgICAgICB0aGlzLmlubmVySFRNTCA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuZG9tLmlubmVySFRNTCA9IHZhbHVlO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgYXBwZW5kQ2xhc3MoX2NsYXNzTmFtZSl7XHJcbiAgICAgICAgbGV0IGNsYXNzTmFtZSA9IHRoaXMucmVhZFZhbHVlKF9jbGFzc05hbWUpO1xyXG4gICAgICAgIGxldCBjbGFzc2VzID0gdGhpcy5jbGFzc2VzIHx8IFtdO1xyXG4gICAgICAgIGNsYXNzZXMucHVzaChjbGFzc05hbWUpO1xyXG4gICAgICAgIHRoaXMuZG9tLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcclxuICAgICAgICB0aGlzLmNsYXNzZXMgPSBjbGFzc2VzO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgc2VsZWN0KF9zZWxlY3Rvcil7XHJcbiAgICAgICAgbGV0IHNlbGVjdG9yID0gX3NlbGVjdG9yLmNoYXJBdCgwKTtcclxuICAgICAgICBsZXQgbmFtZSA9IF9zZWxlY3Rvci5zdWJzdHJpbmcoMSk7XHJcbiAgICAgICAgc3dpdGNoIChzZWxlY3Rvcil7XHJcbiAgICAgICAgICAgIGNhc2UgJyMnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0QnlJZChuYW1lKTtcclxuICAgICAgICAgICAgY2FzZSAnLic6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RCeUNsYXNzTmFtZShuYW1lKTtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNlbGVjdEJ5VGFnKF9zZWxlY3Rvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2VsZWN0QnlJZChpZCl7XHJcbiAgICAgICAgbGV0IGNoaWxkcmVuTGlzdCA9IHRoaXMuY2hpbGRyZW5MaXN0O1xyXG4gICAgICAgIGxldCB0YXJnZXQ7XHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaTxjaGlsZHJlbkxpc3QubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuTGlzdFtpXTtcclxuICAgICAgICAgICAgaWYoY2hpbGQuaWQgPT09IGlkKXtcclxuICAgICAgICAgICAgICAgIHRhcmdldCA9IGNoaWxkO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRhcmdldDtcclxuICAgIH1cclxuICAgIHNlbGVjdEJ5Q2xhc3NOYW1lKGNsYXNzTmFtZSl7XHJcbiAgICAgICAgbGV0IGNoaWxkcmVuTGlzdCA9IHRoaXMuY2hpbGRyZW5MaXN0O1xyXG4gICAgICAgIGxldCB0YXJnZXRMaXN0ID0gW107XHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaTxjaGlsZHJlbkxpc3QubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuTGlzdFtpXTtcclxuICAgICAgICAgICAgaWYoY2hpbGQuY2xhc3Nlcy5pbmRleE9mKGNsYXNzTmFtZSk+LTEpe1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0TGlzdC5wdXNoKGNoaWxkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGFyZ2V0TGlzdDtcclxuICAgIH1cclxuICAgIHNlbGVjdEJ5VGFnKF90YWcpe1xyXG4gICAgICAgIGxldCBjaGlsZHJlbkxpc3QgPSB0aGlzLmNoaWxkcmVuTGlzdDtcclxuICAgICAgICBsZXQgdGFyZ2V0TGlzdCA9IFtdO1xyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGk8Y2hpbGRyZW5MaXN0Lmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICBsZXQgY2hpbGQgPSBjaGlsZHJlbkxpc3RbaV07XHJcbiAgICAgICAgICAgIGlmKGNoaWxkLnRhZyA9PT0gX3RhZyl7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRMaXN0LnB1c2goY2hpbGQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0YXJnZXRMaXN0O1xyXG4gICAgfVxyXG4gICAgcmVtb3ZlKF9zZWxlY3Rvcil7XHJcbiAgICAgICAgaWYoX3NlbGVjdG9yPT11bmRlZmluZWQpe1xyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZVNlbGYoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgc2VsZWN0b3IgPSBfc2VsZWN0b3IuY2hhckF0KDApO1xyXG4gICAgICAgIGxldCBuYW1lID0gX3NlbGVjdG9yLnN1YnN0cmluZygxKTtcclxuICAgICAgICBsZXQgdGFyZ2V0O1xyXG4gICAgICAgIHN3aXRjaCAoc2VsZWN0b3Ipe1xyXG4gICAgICAgICAgICBjYXNlICcjJzpcclxuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlQnlJZChuYW1lKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICcuJzpcclxuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlQnlDbGFzc05hbWUobmFtZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlQnlUYWcoX3NlbGVjdG9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZW1vdmVCeUlkKGlkKXtcclxuICAgICAgICBsZXQgY2hpbGRyZW5MaXN0ID0gdGhpcy5jaGlsZHJlbkxpc3Q7XHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaTxjaGlsZHJlbkxpc3QubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuTGlzdFtpXTtcclxuICAgICAgICAgICAgaWYoY2hpbGQuaWQgPT09IGlkKXtcclxuICAgICAgICAgICAgICAgIGNoaWxkcmVuTGlzdC5zcGxpY2UoaSwxKTtcclxuICAgICAgICAgICAgICAgIGNoaWxkLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgaS0tO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZW1vdmVCeUNsYXNzTmFtZShjbGFzc05hbWUpe1xyXG4gICAgICAgIGxldCBjaGlsZHJlbkxpc3QgPSB0aGlzLmNoaWxkcmVuTGlzdDtcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpPGNoaWxkcmVuTGlzdC5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5MaXN0W2ldO1xyXG4gICAgICAgICAgICBpZihjaGlsZC5jbGFzc2VzLmluZGV4T2YoY2xhc3NOYW1lKT4tMSl7XHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlbkxpc3Quc3BsaWNlKGksMSk7XHJcbiAgICAgICAgICAgICAgICBjaGlsZC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgIGktLTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlbW92ZUJ5VGFnKF90YWcpe1xyXG4gICAgICAgIGxldCBjaGlsZHJlbkxpc3QgPSB0aGlzLmNoaWxkcmVuTGlzdDtcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpPGNoaWxkcmVuTGlzdC5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5MaXN0W2ldO1xyXG4gICAgICAgICAgICBpZihjaGlsZC50YWcgPT09IF90YWcpe1xyXG4gICAgICAgICAgICAgICAgY2hpbGRyZW5MaXN0LnNwbGljZShpLDEpO1xyXG4gICAgICAgICAgICAgICAgY2hpbGQucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICBpLS07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZW1vdmVTZWxmKCl7XHJcbiAgICAgICAgdGhpcy5jaGlsZHJlbkxpc3QuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgICAgICAgICAgY2hpbGQucmVtb3ZlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5kb20ucmVtb3ZlKCk7XHJcbiAgICAgICAgZm9yKHZhciBrZXkgaW4gdGhpcyl7XHJcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzW2tleV1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZWFkVmFsdWUoX3ZhbHVlKXtcclxuICAgICAgICBsZXQgdmFsdWUgPSBfdmFsdWU7XHJcbiAgICAgICAgaWYodHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIpe1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWUuY2FsbCh0aGlzLHRoaXMuZGF0YSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJjb25zdCBNQVhfQ1lDTEUgPSAxMDA7XHJcbmNsYXNzIEFYX1JvdXRpbmV7XHJcbiAgICBjb25zdHJ1Y3RvcihfdGlja1NwZWVkLF9vcHRpb25zKXtcclxuICAgICAgICB0aGlzLnRpY2tTcGVlZCA9IF90aWNrU3BlZWQgfHwgMTtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IF9vcHRpb25zIHx8IHt9O1xyXG4gICAgICAgIHRoaXMuaW5pdChvcHRpb25zKTtcclxuICAgICAgICB0aGlzLk1BWF9DWUNMRSA9IE1BWF9DWUNMRTtcclxuICAgIH1cclxuICAgIGluaXQob3B0aW9ucyl7XHJcbiAgICAgICAgd2luZG93LkFYUiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5jeWNsZSA9IDA7XHJcbiAgICAgICAgdGhpcy5yb3V0aW5lTGlzdCA9IFtdO1xyXG4gICAgICAgIHRoaXMubG9uZ2VzdFJvdXRpbmVUaW1lID0wO1xyXG4gICAgICAgIHNldFRpbWVvdXQodGhpcy5zdGFydC5iaW5kKHRoaXMpKTtcclxuICAgIH07XHJcbiAgICBzdGFydCgpe1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLmN5Y2xlU3RhcnRUaW1lID0gRGF0ZS5ub3coKTtcclxuICAgICAgICBzZXRUaW1lb3V0KHNlbGYucm91dGluZS5iaW5kKHRoaXMpLHRoaXMudGlja1NwZWVkKTtcclxuICAgIH1cclxuICAgIGFwcGVuZChuYW1lLGdyb3VwKSB7XHJcbiAgICAgICAgbGV0IG5ld1JvdXRpbmUgPSBuZXcgUm91dGluZShuYW1lLCBncm91cCk7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIG5ld1JvdXRpbmUuaW5zZXJ0PSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmKG5ld1JvdXRpbmUuZnJlcSE9PTEpIHtcclxuICAgICAgICAgICAgICAgIG5ld1JvdXRpbmUuY291bnRlciArPSBzZWxmLnJvdXRpbmVMaXN0Lmxlbmd0aCArIDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbmV3Um91dGluZS5pZHggPSBzZWxmLnJvdXRpbmVMaXN0Lmxlbmd0aDtcclxuICAgICAgICAgICAgc2VsZi5yb3V0aW5lTGlzdC5wdXNoKG5ld1JvdXRpbmUpO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3Um91dGluZTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIG5ld1JvdXRpbmUucmVtb3ZlPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHNlbGYucm91dGluZUxpc3Quc3BsaWNlKG5ld1JvdXRpbmUuaWR4LDEpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIG5ld1JvdXRpbmU7XHJcbiAgICB9XHJcbiAgICBnZXRDdXJyZW50Q3ljbGUoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5jeWNsZTtcclxuICAgIH1cclxuICAgIHJvdXRpbmUoKXtcclxuICAgICAgICBsZXQgcm91dGluZUxpc3QgPSB0aGlzLnJvdXRpbmVMaXN0O1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBmb3IodmFyIGk9MDtpPHJvdXRpbmVMaXN0Lmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICBsZXQgcm91dGluZSA9IHJvdXRpbmVMaXN0W2ldO1xyXG4gICAgICAgICAgICBsZXQgc3RhcnRUaW1lID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGlmKHJvdXRpbmUuY2hlY2tDb3VudGVyKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRpbmUuYWN0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYubGFzdFJvdXRpbmVUaW1lID0gRGF0ZS5ub3coKSAtIHN0YXJ0VGltZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoc2VsZi5sb25nZXN0Um91dGluZVRpbWU8c2VsZi5sYXN0Um91dGluZVRpbWUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5sb25nZXN0Um91dGluZVRpbWU9c2VsZi5sYXN0Um91dGluZVRpbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoc2VsZi5sYXN0Um91dGluZVRpbWU+MjAwKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignUm91dGluZTonICsgcm91dGluZS5uYW1lICsgJyB0b29rIHRvbyBsb25nIHRvIHJ1bi4gWycrc2VsZi5sYXN0Um91dGluZVRpbWUrJ21zXScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGluZS5pc1J1bm5pbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9LDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9Y2F0Y2ggKGUpe1xyXG4gICAgICAgICAgICAgICAgLy9ERUNJREUgSUYgUkVNT1ZFIFJPVVRJTkUgTEFURVI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jeWNsZSsrO1xyXG4gICAgICAgIGlmKHRoaXMuY3ljbGUgPT09IE1BWF9DWUNMRSl7XHJcbiAgICAgICAgICAgIHRoaXMuY3ljbGUgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RDeWNsZVRpbWUgPSBEYXRlLm5vdygpIC0gdGhpcy5jeWNsZVN0YXJ0VGltZTtcclxuICAgICAgICAgICAgdGhpcy5jeWNsZVBlclNlYyA9IE1hdGguZmxvb3IoMTAwMCAvIHRoaXMubGFzdEN5Y2xlVGltZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc3RhcnQoKTtcclxuICAgIH1cclxufVxyXG5jbGFzcyBSb3V0aW5le1xyXG4gICAgY29uc3RydWN0b3IobmFtZSxncm91cCl7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLmdyb3VwID0gZ3JvdXAgfHwgJ2NvbW1vbic7XHJcbiAgICAgICAgdGhpcy5mcmVxID0gMTtcclxuICAgICAgICB0aGlzLmFjdGlvbiA9IGZ1bmN0aW9uICgpIHt9O1xyXG4gICAgICAgIHRoaXMucmVwZWF0ID0gMDtcclxuICAgIH1cclxuICAgIGF0dHIoa2V5LHZhbHVlKXtcclxuICAgICAgICB0aGlzW2tleV0gPSB2YWx1ZTtcclxuICAgICAgICBpZihrZXk9PT0nZnJlcScpe1xyXG4gICAgICAgICAgICB0aGlzWydjb3VudGVyJ10gPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICByZXNldENvdW50ZXIoKXtcclxuICAgICAgICB0aGlzLmNvdW50ZXIgPSB0aGlzLmZyZXE7XHJcbiAgICB9XHJcbiAgICBjaGVja0NvdW50ZXIoKXtcclxuICAgICAgICBpZih0aGlzLmlzUnVubmluZz09PXRydWUpe1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgc2hvdWxkUnVuID0gLS10aGlzLmNvdW50ZXI9PT0wO1xyXG4gICAgICAgIGlmKHRoaXMuY291bnRlcj09PTApe1xyXG4gICAgICAgICAgICBpZih0aGlzLmV4ZWN1dGlvblRpbWVzIT09dW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXhlY3V0aW9uVGltZXMtLTtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuZXhlY3V0aW9uVGltZXM9PT0wKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuaXNSdW5uaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5yZXNldENvdW50ZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICByZXR1cm4gc2hvdWxkUnVuO1xyXG4gICAgfVxyXG5cclxufVxyXG5jb25zdCBBWFIgPSBuZXcgQVhfUm91dGluZSgpO1xyXG53aW5kb3cuQVhSID0gQVhSO1xyXG5leHBvcnQgZGVmYXVsdCBBWFI7IiwiY29uc3QgRU1QVFlfRlVOQ1RJT04gPSAoKT0+e307XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFYQ29yZXtcclxuICAgIGNvbnN0cnVjdG9yKF9wcm9wcyl7XHJcbiAgICAgICAgbGV0IHByb3BzID0gcHJvcHMgfHwge307XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuaW5pdChwcm9wcyk7XHJcbiAgICB9XHJcbiAgICBpbml0KF9wcm9wcyl7XHJcbiAgICAgICAgbGV0IHByb3BzID0gX3Byb3BzIHx8IHt9O1xyXG4gICAgICAgIHRoaXMuZGVidWdNb2RlID0gcHJvcHMuZGVidWcgfHwgZmFsc2U7XHJcbiAgICAgICAgdGhpcy5kYXRhTWFwID0ge307XHJcbiAgICAgICAgdGhpcy5hY3Rpb25NYXAgPSB7fTtcclxuICAgICAgICB0aGlzLmJyb3dzZXIgPSB0aGlzLmdldEJyb3dzZXIoKTtcclxuICAgICAgICB3aW5kb3cuYXggPSB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEJyb3dzZXIoKXtcclxuICAgICAgICBsZXQgaXNJRSA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBpc0Nocm9tZSA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBpc09wZXJhID0gZmFsc2U7XHJcbiAgICAgICAgaWYoKCEhd2luZG93Lm9wciAmJiAhIW9wci5hZGRvbnMpIHx8ICEhd2luZG93Lm9wZXJhIHx8IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignIE9QUi8nKSA+PSAwKXtcclxuICAgICAgICAgICAgaXNPcGVyYSA9IHRydWU7XHJcbiAgICAgICAgICAgIHJldHVybiAnb3BlcmEnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0eXBlb2YgSW5zdGFsbFRyaWdnZXIgIT09ICd1bmRlZmluZWQnKXtcclxuICAgICAgICAgICAgcmV0dXJuICdmaXJlZm94JztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoL2NvbnN0cnVjdG9yL2kudGVzdCh3aW5kb3cuSFRNTEVsZW1lbnQpIHx8IChmdW5jdGlvbiAocCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHAudG9TdHJpbmcoKSA9PT0gXCJbb2JqZWN0IFNhZmFyaVJlbW90ZU5vdGlmaWNhdGlvbl1cIjtcclxuICAgICAgICAgICAgfSkoIXdpbmRvd1snc2FmYXJpJ10gfHwgc2FmYXJpLnB1c2hOb3RpZmljYXRpb24pKXtcclxuICAgICAgICAgICAgcmV0dXJuICdzYWZhcmknO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihmYWxzZSB8fCAhIWRvY3VtZW50LmRvY3VtZW50TW9kZSl7XHJcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgb3V0cHV0ID0gYXJndW1lbnRzWzBdO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gYXJndW1lbnRzW2ldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvYmogPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoa2V5KSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dFtrZXldID0gb2JqW2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgaXNJRSA9dHJ1ZTtcclxuICAgICAgICAgICAgcmV0dXJuICdpZSc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCFpc0lFICYmICEhd2luZG93LlN0eWxlTWVkaWEpe1xyXG4gICAgICAgICAgICByZXR1cm4gJ2VkZ2UnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZighIXdpbmRvdy5jaHJvbWUgJiYgISF3aW5kb3cuY2hyb21lLndlYnN0b3JlKXtcclxuICAgICAgICAgICAgaXNDaHJvbWUgPSB0cnVlXHJcbiAgICAgICAgICAgIHJldHVybiAnY2hyb21lJztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoKGlzQ2hyb21lIHx8IGlzT3BlcmEpICYmICEhd2luZG93LkNTUyl7XHJcbiAgICAgICAgICAgIHJldHVybiAnYmxpbmsnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdG9yZURhdGFBcnJheShfYXJyYXksIF9pZEtleSwgX2l0ZW1Qcm9jZXNzb3IsIF9vcHRpb25zLCBfY2FsbGJhY2spIHtcclxuICAgICAgICB2YXIgb3B0aW9ucyA9IF9vcHRpb25zIHx8IHt9O1xyXG4gICAgICAgIHZhciBpZEtleSA9IF9pZEtleSB8fCAnaWQnO1xyXG4gICAgICAgIHZhciBjYWxsYmFjayA9IF9jYWxsYmFjayB8fCBFTVBUWV9GVU5DVElPTjtcclxuICAgICAgICB2YXIgYXJyYXkgPSBfYXJyYXkgfHwgW107XHJcbiAgICAgICAgdmFyIGl0ZW1MaXN0ID0gW107XHJcbiAgICAgICAgdmFyIGl0ZW1Qcm9jZXNzb3IgPSBfaXRlbVByb2Nlc3NvciB8fCBFTVBUWV9GVU5DVElPTjtcclxuXHJcbiAgICAgICAgYXJyYXkuZm9yRWFjaChmdW5jdGlvbiAoX2l0ZW0pIHtcclxuICAgICAgICAgICAgdmFyIGtleSA9IF9pdGVtW2lkS2V5XTtcclxuICAgICAgICAgICAgaWYgKGtleSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBpdGVtID0gc2VsZi5zdG9yZVZhbHVlKGtleSwgX2l0ZW0sIF9vcHRpb25zKTtcclxuXHJcbiAgICAgICAgICAgIGl0ZW1Qcm9jZXNzb3IoaXRlbSk7XHJcbiAgICAgICAgICAgIGl0ZW1MaXN0LnB1c2goaXRlbSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNhbGxiYWNrKF9hcnJheSwgaXRlbUxpc3QpO1xyXG4gICAgICAgIHJldHVybiBpdGVtTGlzdDtcclxuICAgIH07XHJcblxyXG4gICAgc3RvcmVWYWx1ZShfa2V5LCBfdmFsdWUsIF9vcHRpb25zLCBfY2FsbGJhY2spIHtcclxuICAgICAgICB2YXIgb3B0aW9ucyA9IF9vcHRpb25zIHx8IHt9O1xyXG4gICAgICAgIHZhciBzdG9yZSA9IHRoaXMuZGF0YU1hcDtcclxuICAgICAgICB2YXIga2V5ID0gX2tleTtcclxuICAgICAgICB2YXIgY2FsbGJhY2sgPSBfY2FsbGJhY2sgfHwgRU1QVFlfRlVOQ1RJT047XHJcbiAgICAgICAgdmFyIG5ld1ZhbHVlID0gX3ZhbHVlO1xyXG4gICAgICAgIHZhciBpdGVtID0gc3RvcmVba2V5XSB8fCB7fTtcclxuICAgICAgICBpZihpdGVtID09PSBPYmplY3QoaXRlbSkgJiYgb3B0aW9ucy5vdmVyd3JpdGUhPT10cnVlKSB7XHJcbiAgICAgICAgICAgIGl0ZW0gPSBPYmplY3QuYXNzaWduKGl0ZW0sIG5ld1ZhbHVlKTtcclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIGl0ZW0gPSBuZXdWYWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5kYXRhTWFwW2tleV0gPSBpdGVtO1xyXG5cclxuICAgICAgICBjYWxsYmFjayhpdGVtKTtcclxuICAgICAgICB0aGlzLnJlYWN0KGtleSk7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICB9O1xyXG4gICAgZ2V0VmFsdWUoX2tleSkge1xyXG4gICAgICAgIHZhciBrZXkgPSBfa2V5IHx8ICcnO1xyXG4gICAgICAgIHJldHVybiBzZWxmLmRhdGFNYXBba2V5XTtcclxuICAgIH07XHJcblxyXG4gICAgY29ubmVjdChfa2V5LF9hY3Rpb24pIHtcclxuICAgICAgICBpZihfa2V5PT09dW5kZWZpbmVkIHx8IF9hY3Rpb249PT11bmRlZmluZWQpe1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgYWN0aW9uTWFwID0gdGhpcy5hY3Rpb25NYXA7XHJcbiAgICAgICAgdmFyIGFjdGlvbkxpc3QgPSBhY3Rpb25NYXBbX2tleV0gfHwgW107XHJcbiAgICAgICAgYWN0aW9uTGlzdC5wdXNoKF9hY3Rpb24pO1xyXG4gICAgICAgIGFjdGlvbk1hcFtfa2V5XSA9IGFjdGlvbkxpc3Q7XHJcbiAgICB9O1xyXG4gICAgcmVhY3QoX2tleSkge1xyXG4gICAgICAgIGlmKF9rZXk9PT11bmRlZmluZWQpe1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgYWN0aW9uTWFwID0gdGhpcy5hY3Rpb25NYXA7XHJcbiAgICAgICAgdmFyIGFjdGlvbkxpc3QgPSBhY3Rpb25NYXBbX2tleV0gfHwgW107XHJcbiAgICAgICAgYWN0aW9uTGlzdC5mb3JFYWNoKChhY3Rpb24pPT4ge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gc2VsZi5nZXRWYWx1ZShfa2V5KTtcclxuICAgICAgICAgICAgICAgIGFjdGlvbih2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1jYXRjaCAoZSl7XHJcbiAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSBhY3Rpb25MaXN0LmluZGV4T2YoYWN0aW9uKTtcclxuICAgICAgICAgICAgICAgIGFjdGlvbkxpc3Quc3BsaWNlKGluZGV4LDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH07XHJcbiAgICBkZWJ1ZyhzdHIpIHtcclxuICAgICAgICBpZih0aGlzLmRlYnVnTW9kZSl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdERUJVRzogJyArIHN0cik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuIiwiaW1wb3J0IEFYRE9NIGZyb20gJy4vRnJhbWV3b3JrL0F4L0FYRE9NJztcclxuXHJcblxyXG52YXIgbWFpbkNvbnRlbnQgPSBuZXcgQVhET00oJ2RpdicsJ2hvbWVDb250ZW50Jyk7XHJcbm1haW5Db250ZW50LnN0eWxlKCd3aWR0aCcsJzEwMHZ3JylcclxuICAgIC5zdHlsZSgnaGVpZ2h0JywnMTAwdmgnKVxyXG4gICAgLnN0eWxlKCdiYWNrZ3JvdW5kJywnIzIyMmYzZScpXHJcbiAgICAuc3R5bGUoJ3Bvc2l0aW9uJywncmVsYXRpdmUnKVxyXG4gICAgLnN0eWxlKCd0cmFuc2l0aW9uJywgJzVzJylcclxuICAgIC5zdHlsZSgnb3ZlcmZsb3cnLCdoaWRkZW4nKVxyXG4gICAgLm9uKCdtb3VzZW1vdmUnLGZ1bmN0aW9uIChlLGQpIHtcclxuICAgICAgICBsZXQgeCA9IGUuY2xpZW50WDtcclxuICAgICAgICBsZXQgeSA9IGUuY2xpZW50WTtcclxuICAgICAgICBsZXQgb3JpZ2luID0ge1xyXG4gICAgICAgICAgICB4OiB3aW5kb3cuaW5uZXJXaWR0aC8yLFxyXG4gICAgICAgICAgICB5OiB3aW5kb3cuaW5uZXJIZWlnaHQvMlxyXG4gICAgICAgIH07XHJcbiAgICAgICAgbWFpbkNvbnRlbnQuZHggPSAtKHggLSBvcmlnaW4ueCkvMTA7XHJcbiAgICAgICAgbWFpbkNvbnRlbnQuZHkgPSAtKHkgLSBvcmlnaW4ueSkvMTA7XHJcblxyXG4gICAgfSk7XHJcbnZhciBiYWNrZ3JvdW5kQW4gPSBBWFIuYXBwZW5kKCdiYWNrZ3JvdW5kQW4nKVxyXG4gICAgLmF0dHIoJ2ZyZXEnLDIwMClcclxuICAgIC5hdHRyKCdleGVjdXRpb25UaW1lcycsMSlcclxuICAgIC5hdHRyKCdhY3Rpb24nLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBtYWluQ29udGVudC5zdHlsZSgnYmFja2dyb3VuZCcsJ2JsYWNrJylcclxuICAgIH0pLmluc2VydCgpO1xyXG5cclxudmFyIGhlYWRMaW5lID0gbWFpbkNvbnRlbnQuYXBwZW5kKCdoMScsJ2hlYWRMaW5lJylcclxuICAgIC5jb250ZW50KCdGUk9OVCBFTkQgRU5HSU5FRVInKVxyXG4gICAgLnN0eWxlKCdwb3NpdGlvbicsJ2ZpeGVkJylcclxuICAgIC5zdHlsZSgnY29sb3InLCd3aGl0ZScpXHJcbiAgICAuc3R5bGUoJ3dpZHRoJywnMTAwJScpXHJcbiAgICAuc3R5bGUoJ2hlaWdodCcsICc2MHB4JylcclxuICAgIC5zdHlsZSgndGV4dC1hbGlnbicsJ2NlbnRlcicpXHJcbiAgICAuc3R5bGUoJ2xlZnQnLCcwJylcclxuICAgIC5zdHlsZSgncmlnaHQnLCcwJylcclxuICAgIC5zdHlsZSgnYm90dG9tJywnMzMlJylcclxuICAgIC5zdHlsZSgnbWFyZ2luJywnYXV0bycpXHJcbiAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsJzY0cHgnKVxyXG4gICAgLnN0eWxlKCd0cmFuc2l0aW9uJywgJzFzJylcclxuICAgIC5zdHlsZSgndGV4dC1zaGFkb3cnLCcwIDAgMTBweCAjNzBhMWZmJylcclxuICAgIC5zdHlsZSgnei1pbmRleCcsMSlcclxuICAgIC5vbignbW91c2VvdmVyJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5zdHlsZSgndGV4dC1zaGFkb3cnLCcwIDAgMzBweCAjZWNjYzY4JylcclxuICAgIH0pXHJcbiAgICAub24oJ21vdXNlbGVhdmUnLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnN0eWxlKCd0ZXh0LXNoYWRvdycsJzAgMCAxMHB4ICM3MGExZmYnKVxyXG4gICAgfSk7XHJcbnZhciBob21lSGVhZExpbmVBbmltYXRpb24gPSBBWFIuYXBwZW5kKCdob21lX2hlYWRMaW5lX2FuaW1hdGlvbicpXHJcbiAgICAuYXR0cignZnJlcScsMjUpXHJcbiAgICAuYXR0cignYWN0aW9uJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0IG9kZCA9IE1hdGgucmFuZG9tKCkqMTAwO1xyXG4gICAgICAgIGlmKG9kZD41MCl7XHJcbiAgICAgICAgICAgIGhlYWRMaW5lLnN0eWxlKCd0ZXh0LXNoYWRvdycsJzAgMCAzMHB4ICNlY2NjNjgnKVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBoZWFkTGluZS5zdHlsZSgndGV4dC1zaGFkb3cnLCcwIDAgMTBweCAjNzBhMWZmJylcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgLmluc2VydCgpO1xyXG5cclxudmFyIHN1YkhlYWRMaW5lID0gbWFpbkNvbnRlbnQuYXBwZW5kKCdoMScsJ3N1YkhlYWRMaW5lJylcclxuICAgIC5jb250ZW50KCctIHdobyBtYWtlcyBkYXRhIGFsaXZlIC0nKVxyXG4gICAgLnN0eWxlKCdwb3NpdGlvbicsJ2ZpeGVkJylcclxuICAgIC5zdHlsZSgnY29sb3InLCcjZWNjYzY4JylcclxuICAgIC5zdHlsZSgnd2lkdGgnLCcxMDAlJylcclxuICAgIC5zdHlsZSgnaGVpZ2h0JywgJzMwcHgnKVxyXG4gICAgLnN0eWxlKCd0ZXh0LWFsaWduJywnY2VudGVyJylcclxuICAgIC5zdHlsZSgnbGVmdCcsJzAnKVxyXG4gICAgLnN0eWxlKCdyaWdodCcsJzAnKVxyXG4gICAgLnN0eWxlKCdib3R0b20nLCczMCUnKVxyXG4gICAgLnN0eWxlKCdtYXJnaW4nLCdhdXRvJylcclxuICAgIC5zdHlsZSgnZm9udC1zaXplJywnMzJweCcpXHJcbiAgICAuc3R5bGUoJ3RyYW5zaXRpb24nLCAnMXMnKVxyXG4gICAgLnN0eWxlKCd0ZXh0LXNoYWRvdycsJzAgMCAxMHB4ICNlY2NjNjgnKVxyXG4gICAgLnN0eWxlKCd6LWluZGV4JywxKTtcclxudmFyIGluZm9CdXR0b25IYWxvID0gbWFpbkNvbnRlbnQuYXBwZW5kKCdzcGFuJywnaW5mb0J1dHRvbkhhbG8nKVxyXG4gICAgLnN0eWxlKCdwb3NpdGlvbicsJ2ZpeGVkJylcclxuICAgIC5zdHlsZSgnY29sb3InLCcjZWNjYzY4JylcclxuICAgIC5zdHlsZSgnd2lkdGgnLCczMnB4JylcclxuICAgIC5zdHlsZSgnaGVpZ2h0JywgJzMycHgnKVxyXG4gICAgLnN0eWxlKCdvdmVyZmxvdycsJ2hpZGRlbicpXHJcbiAgICAuc3R5bGUoJ2JvcmRlci1yYWRpdXMnLCc1MCUnKVxyXG4gICAgLnN0eWxlKCd0ZXh0LWFsaWduJywnY2VudGVyJylcclxuICAgIC5zdHlsZSgnbGVmdCcsJzAnKVxyXG4gICAgLnN0eWxlKCdyaWdodCcsJzAnKVxyXG4gICAgLnN0eWxlKCdib3R0b20nLCcxOCUnKVxyXG4gICAgLnN0eWxlKCdtYXJnaW4nLCdhdXRvJylcclxuICAgIC5zdHlsZSgnZm9udC1zaXplJywnMjRweCcpXHJcbiAgICAuc3R5bGUoJ3RyYW5zaXRpb24nLCAnMC41cycpXHJcbiAgICAuc3R5bGUoJ2JvcmRlcicsJzFweCBzb2xpZCAjZWNjYzY4JylcclxuICAgIC5zdHlsZSgnYm94LXNoYWRvdycsJzAgMCAzMHB4ICNlY2NjNjgnKVxyXG4gICAgLnN0eWxlKCdjdXJzb3InLCdwb2ludGVyJylcclxuICAgIC5zdHlsZSgnei1pbmRleCcsMSk7XHJcbnZhciBpbmZvQnV0dG9uID0gbWFpbkNvbnRlbnQuYXBwZW5kKCdzcGFuJywnaW5mb0J1dHRvbicpXHJcbiAgICAuY29udGVudCgnV2FubmEga25vdyBtb3JlPycpXHJcbiAgICAuc3R5bGUoJ3Bvc2l0aW9uJywnZml4ZWQnKVxyXG4gICAgLnN0eWxlKCdjb2xvcicsJyNlY2NjNjgnKVxyXG4gICAgLnN0eWxlKCd3aWR0aCcsJzMycHgnKVxyXG4gICAgLnN0eWxlKCdoZWlnaHQnLCAnMzJweCcpXHJcbiAgICAuc3R5bGUoJ292ZXJmbG93JywnaGlkZGVuJylcclxuICAgIC5zdHlsZSgnYm9yZGVyJywnMXB4IHNvbGlkIHRyYW5zcGFyZW50JylcclxuICAgIC5zdHlsZSgnYm9yZGVyLXJhZGl1cycsJzUwJScpXHJcbiAgICAuc3R5bGUoJ3RleHQtYWxpZ24nLCdjZW50ZXInKVxyXG4gICAgLnN0eWxlKCdsZWZ0JywnMCcpXHJcbiAgICAuc3R5bGUoJ3JpZ2h0JywnMCcpXHJcbiAgICAuc3R5bGUoJ2JvdHRvbScsJzE4JScpXHJcbiAgICAuc3R5bGUoJ21hcmdpbicsJ2F1dG8nKVxyXG4gICAgLnN0eWxlKCdmb250LXNpemUnLCcyNHB4JylcclxuICAgIC5zdHlsZSgndHJhbnNpdGlvbicsICcwLjVzJylcclxuICAgIC5zdHlsZSgnYmFja2dyb3VuZCcsICcjZWNjYzY4JylcclxuICAgIC5zdHlsZSgndGV4dC1zaGFkb3cnLCcwIDAgNXB4ICNlY2NjNjgnKVxyXG4gICAgLnN0eWxlKCdib3gtc2hhZG93JywnMCAwIDEweCAjZWNjYzY4JylcclxuICAgIC5zdHlsZSgnY3Vyc29yJywncG9pbnRlcicpXHJcbiAgICAuc3R5bGUoJ3otaW5kZXgnLDEpXHJcbiAgICAub24oJ21vdXNlb3ZlcicsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuc3R5bGUoJ2JhY2tncm91bmQnLCdyZ2JhKDM0LCA0NywgNjIsMC41KScpXHJcbiAgICAgICAgICAgIC5zdHlsZSgnd2lkdGgnLCcxMDAlJylcclxuICAgICAgICAgICAgLnN0eWxlKCdib3gtc2hhZG93JywnJylcclxuICAgICAgICAgICAgLnN0eWxlKCdib3JkZXItcmFkaXVzJywnNHB4JylcclxuICAgICAgICBpbmZvQnV0dG9uLm92ZXJlZCA9IHRydWU7XHJcbiAgICB9KVxyXG4gICAgLm9uKCdtb3VzZWxlYXZlJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5zdHlsZSgnYmFja2dyb3VuZCcsICcjZWNjYzY4JylcclxuICAgICAgICAgICAgLnN0eWxlKCd3aWR0aCcsJzMycHgnKVxyXG4gICAgICAgICAgICAuc3R5bGUoJ2JveC1zaGFkb3cnLCcwIDAgMTBweCAjZWNjYzY4JylcclxuICAgICAgICAgICAgLnN0eWxlKCdib3JkZXItcmFkaXVzJywnNTAlJylcclxuICAgICAgICBpbmZvQnV0dG9uLm92ZXJlZCA9IGZhbHNlO1xyXG4gICAgfSk7XHJcbnZhciBpbmZvQnV0dG9uSGFsb0FuID0gQVhSLmFwcGVuZCgnaW5mb0J1dHRvbkhhbG9BbicpXHJcbiAgICAuYXR0cignZnJlcScsNjApXHJcbiAgICAuYXR0cignYWN0aW9uJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYoaW5mb0J1dHRvbi5vdmVyZWQgPT09IHRydWUpe1xyXG4gICAgICAgICAgICBpbmZvQnV0dG9uSGFsby5zdGF0ZSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN3aXRjaChpbmZvQnV0dG9uSGFsby5zdGF0ZSl7XHJcbiAgICAgICAgICAgIGNhc2UgdW5kZWZpbmVkOlxyXG4gICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICBpbmZvQnV0dG9uSGFsby5zdGF0ZSA9IDE7XHJcbiAgICAgICAgICAgICAgICBpbmZvQnV0dG9uSGFsby5zdHlsZSgnd2lkdGgnLCAnNjRweCcpXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0eWxlKCdib3R0b20nLCdjYWxjKDE4JSAtIDE1cHgpJylcclxuICAgICAgICAgICAgICAgICAgICAuc3R5bGUoJ2hlaWdodCcsICc2NHB4JylcclxuICAgICAgICAgICAgICAgICAgICAuc3R5bGUoJ29wYWNpdHknLCAwKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICBpbmZvQnV0dG9uSGFsby5zdGF0ZSA9IDI7XHJcbiAgICAgICAgICAgICAgICBpbmZvQnV0dG9uSGFsby5zdHlsZSgnd2lkdGgnLCAnMzJweCcpXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0eWxlKCdib3R0b20nLCcxOCUnKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdHlsZSgnaGVpZ2h0JywgJzMycHgnKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICBpbmZvQnV0dG9uSGFsby5zdGF0ZSA9IDA7XHJcbiAgICAgICAgICAgICAgICBpbmZvQnV0dG9uSGFsby5zdHlsZSgnb3BhY2l0eScsIDEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfSkuaW5zZXJ0KCk7XHJcblxyXG53aW5kb3cubW9iaWxlY2hlY2sgPSBmdW5jdGlvbigpIHtcclxuICAgIHZhciBjaGVjayA9IGZhbHNlO1xyXG4gICAgKGZ1bmN0aW9uKGEpe2lmKC8oYW5kcm9pZHxiYlxcZCt8bWVlZ28pLittb2JpbGV8YXZhbnRnb3xiYWRhXFwvfGJsYWNrYmVycnl8YmxhemVyfGNvbXBhbHxlbGFpbmV8ZmVubmVjfGhpcHRvcHxpZW1vYmlsZXxpcChob25lfG9kKXxpcmlzfGtpbmRsZXxsZ2UgfG1hZW1vfG1pZHB8bW1wfG1vYmlsZS4rZmlyZWZveHxuZXRmcm9udHxvcGVyYSBtKG9ifGluKWl8cGFsbSggb3MpP3xwaG9uZXxwKGl4aXxyZSlcXC98cGx1Y2tlcnxwb2NrZXR8cHNwfHNlcmllcyg0fDYpMHxzeW1iaWFufHRyZW98dXBcXC4oYnJvd3NlcnxsaW5rKXx2b2RhZm9uZXx3YXB8d2luZG93cyBjZXx4ZGF8eGlpbm8vaS50ZXN0KGEpfHwvMTIwN3w2MzEwfDY1OTB8M2dzb3w0dGhwfDUwWzEtNl1pfDc3MHN8ODAyc3xhIHdhfGFiYWN8YWMoZXJ8b298c1xcLSl8YWkoa298cm4pfGFsKGF2fGNhfGNvKXxhbW9pfGFuKGV4fG55fHl3KXxhcHR1fGFyKGNofGdvKXxhcyh0ZXx1cyl8YXR0d3xhdShkaXxcXC1tfHIgfHMgKXxhdmFufGJlKGNrfGxsfG5xKXxiaShsYnxyZCl8YmwoYWN8YXopfGJyKGV8dil3fGJ1bWJ8YndcXC0obnx1KXxjNTVcXC98Y2FwaXxjY3dhfGNkbVxcLXxjZWxsfGNodG18Y2xkY3xjbWRcXC18Y28obXB8bmQpfGNyYXd8ZGEoaXR8bGx8bmcpfGRidGV8ZGNcXC1zfGRldml8ZGljYXxkbW9ifGRvKGN8cClvfGRzKDEyfFxcLWQpfGVsKDQ5fGFpKXxlbShsMnx1bCl8ZXIoaWN8azApfGVzbDh8ZXooWzQtN10wfG9zfHdhfHplKXxmZXRjfGZseShcXC18Xyl8ZzEgdXxnNTYwfGdlbmV8Z2ZcXC01fGdcXC1tb3xnbyhcXC53fG9kKXxncihhZHx1bil8aGFpZXxoY2l0fGhkXFwtKG18cHx0KXxoZWlcXC18aGkocHR8dGEpfGhwKCBpfGlwKXxoc1xcLWN8aHQoYyhcXC18IHxffGF8Z3xwfHN8dCl8dHApfGh1KGF3fHRjKXxpXFwtKDIwfGdvfG1hKXxpMjMwfGlhYyggfFxcLXxcXC8pfGlicm98aWRlYXxpZzAxfGlrb218aW0xa3xpbm5vfGlwYXF8aXJpc3xqYSh0fHYpYXxqYnJvfGplbXV8amlnc3xrZGRpfGtlaml8a2d0KCB8XFwvKXxrbG9ufGtwdCB8a3djXFwtfGt5byhjfGspfGxlKG5vfHhpKXxsZyggZ3xcXC8oa3xsfHUpfDUwfDU0fFxcLVthLXddKXxsaWJ3fGx5bnh8bTFcXC13fG0zZ2F8bTUwXFwvfG1hKHRlfHVpfHhvKXxtYygwMXwyMXxjYSl8bVxcLWNyfG1lKHJjfHJpKXxtaShvOHxvYXx0cyl8bW1lZnxtbygwMXwwMnxiaXxkZXxkb3x0KFxcLXwgfG98dil8enopfG10KDUwfHAxfHYgKXxtd2JwfG15d2F8bjEwWzAtMl18bjIwWzItM118bjMwKDB8Mil8bjUwKDB8Mnw1KXxuNygwKDB8MSl8MTApfG5lKChjfG0pXFwtfG9ufHRmfHdmfHdnfHd0KXxub2soNnxpKXxuenBofG8yaW18b3AodGl8d3YpfG9yYW58b3dnMXxwODAwfHBhbihhfGR8dCl8cGR4Z3xwZygxM3xcXC0oWzEtOF18YykpfHBoaWx8cGlyZXxwbChheXx1Yyl8cG5cXC0yfHBvKGNrfHJ0fHNlKXxwcm94fHBzaW98cHRcXC1nfHFhXFwtYXxxYygwN3wxMnwyMXwzMnw2MHxcXC1bMi03XXxpXFwtKXxxdGVrfHIzODB8cjYwMHxyYWtzfHJpbTl8cm8odmV8em8pfHM1NVxcL3xzYShnZXxtYXxtbXxtc3xueXx2YSl8c2MoMDF8aFxcLXxvb3xwXFwtKXxzZGtcXC98c2UoYyhcXC18MHwxKXw0N3xtY3xuZHxyaSl8c2doXFwtfHNoYXJ8c2llKFxcLXxtKXxza1xcLTB8c2woNDV8aWQpfHNtKGFsfGFyfGIzfGl0fHQ1KXxzbyhmdHxueSl8c3AoMDF8aFxcLXx2XFwtfHYgKXxzeSgwMXxtYil8dDIoMTh8NTApfHQ2KDAwfDEwfDE4KXx0YShndHxsayl8dGNsXFwtfHRkZ1xcLXx0ZWwoaXxtKXx0aW1cXC18dFxcLW1vfHRvKHBsfHNoKXx0cyg3MHxtXFwtfG0zfG01KXx0eFxcLTl8dXAoXFwuYnxnMXxzaSl8dXRzdHx2NDAwfHY3NTB8dmVyaXx2aShyZ3x0ZSl8dmsoNDB8NVswLTNdfFxcLXYpfHZtNDB8dm9kYXx2dWxjfHZ4KDUyfDUzfDYwfDYxfDcwfDgwfDgxfDgzfDg1fDk4KXx3M2MoXFwtfCApfHdlYmN8d2hpdHx3aShnIHxuY3xudyl8d21sYnx3b251fHg3MDB8eWFzXFwtfHlvdXJ8emV0b3x6dGVcXC0vaS50ZXN0KGEuc3Vic3RyKDAsNCkpKSBjaGVjayA9IHRydWU7fSkobmF2aWdhdG9yLnVzZXJBZ2VudHx8bmF2aWdhdG9yLnZlbmRvcnx8d2luZG93Lm9wZXJhKTtcclxuICAgIHJldHVybiBjaGVjaztcclxufTtcclxudmFyIGNpcmNsZU51bSA9IG1vYmlsZWNoZWNrKCk/NTA6MTUwO1xyXG52YXIgY2lyY2xlTGlzdCA9IFtdO1xyXG5cclxuZm9yKHZhciBpPTA7aTxjaXJjbGVOdW07aSsrKXtcclxuICAgIGxldCB4ID0gTWF0aC5yYW5kb20oKSp3aW5kb3cuaW5uZXJXaWR0aCsxMDtcclxuICAgIGxldCB5ID0gTWF0aC5yYW5kb20oKSp3aW5kb3cuaW5uZXJIZWlnaHQrMTA7XHJcbiAgICBsZXQgY2lyY2xlID0gbWFpbkNvbnRlbnQuYXBwZW5kKCdkaXYnKVxyXG4gICAgICAgIC5zdHlsZSgncG9zaXRpb24nLCdhYnNvbHV0ZScpXHJcbiAgICAgICAgLnN0eWxlKCd3aWR0aCcsJzIwcHgnKVxyXG4gICAgICAgIC5zdHlsZSgnaGVpZ2h0JywnMjBweCcpXHJcbiAgICAgICAgLnN0eWxlKCdib3JkZXItcmFkaXVzJywnNTAlJylcclxuICAgICAgICAuc3R5bGUoJ2JhY2tncm91bmQnLCcjZWNjYzY4JylcclxuICAgICAgICAuc3R5bGUoJ3RyYW5zaXRpb24nLCcwLjFzIGxpbmVhcicpXHJcbiAgICAgICAgLnN0eWxlKCdib3gtc2hhZG93JywnMCAwIDEwcHggI2VjY2M2OCcpXHJcbiAgICAgICAgLnN0eWxlKCdvcGFjaXR5JywgJzAnKVxyXG4gICAgICAgIC5zdHlsZSgndHJhbnNmb3JtJywndHJhbnNsYXRlKCcreCsncHgsJyt5KydweCknKVxyXG4gICAgICAgIC5vbignbW91c2VvdmVyJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3R5bGUoJ2JhY2tncm91bmQnLCdyZ2JhKDI1NSwgMTY1LCAyLDEuMCknKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLm9uKCdtb3VzZWxlYXZlJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3R5bGUoJ2JhY2tncm91bmQnLCcjZWNjYzY4JylcclxuICAgICAgICB9KTtcclxuICAgIGNpcmNsZS54ID0geDtcclxuICAgIGNpcmNsZS55ID0geTtcclxuICAgIGNpcmNsZS5keCA9IE1hdGgucmFuZG9tKCktMC41O1xyXG4gICAgY2lyY2xlLmR5ID0gTWF0aC5yYW5kb20oKS0wLjU7XHJcbiAgICBjaXJjbGUuZHMgPSAwLjAxO1xyXG4gICAgY2lyY2xlLnNjYWxlID0gIE1hdGgucmFuZG9tKCk7XHJcbiAgICBjaXJjbGUuY291bnRlciA9IDEwO1xyXG4gICAgbGV0IGNpcmNsZUFuID0gQVhSLmFwcGVuZCgnaG9tZV9jaXJjbGVfYW5pbWF0aW9uJylcclxuICAgICAgICAuYXR0cignZnJlcScsNSlcclxuICAgICAgICAuYXR0cignYWN0aW9uJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGxldCBzY2FsZSA9IGNpcmNsZS5zY2FsZTtcclxuICAgICAgICAgICAgY2lyY2xlLngrPWNpcmNsZS5keDtcclxuICAgICAgICAgICAgY2lyY2xlLnkrPWNpcmNsZS5keTtcclxuXHJcbiAgICAgICAgICAgIGNpcmNsZS5zdHlsZSgndHJhbnNmb3JtJywndHJhbnNsYXRlKCcrKGNpcmNsZS54ICsgKG1haW5Db250ZW50LmR4fHwwKSpzY2FsZSkrJ3B4LCcrKGNpcmNsZS55ICsgKG1haW5Db250ZW50LmR5fHwwKSpzY2FsZSkrJ3B4KSBzY2FsZSgnK3NjYWxlKycpJylcclxuICAgICAgICAgICAgICAgIC5zdHlsZSgnb3BhY2l0eScsIHNjYWxlKVxyXG4gICAgICAgICAgICAgICAgLnN0eWxlKCdib3gtc2hhZG93JywnMCAwICcrKE1hdGgucmFuZG9tKCkqMTArMTApKydweCAjZWNjYzY4Jyk7XHJcbiAgICAgICAgICAgIGlmKGNpcmNsZS54PndpbmRvdy5pbm5lcldpZHRoKXtcclxuICAgICAgICAgICAgICAgIGNpcmNsZS5keCA9IC0oTWF0aC5yYW5kb20oKSowLjUrMC4xKTtcclxuICAgICAgICAgICAgfWVsc2UgaWYoY2lyY2xlLng8MCl7XHJcbiAgICAgICAgICAgICAgICBjaXJjbGUuZHggPSBNYXRoLnJhbmRvbSgpKjAuNSswLjE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoY2lyY2xlLnk+d2luZG93LmlubmVySGVpZ2h0KXtcclxuICAgICAgICAgICAgICAgIGNpcmNsZS5keSA9IC0oTWF0aC5yYW5kb20oKSowLjUrMC4xKTtcclxuICAgICAgICAgICAgfWVsc2UgaWYoY2lyY2xlLnk8MCl7XHJcbiAgICAgICAgICAgICAgICBjaXJjbGUuZHkgPSBNYXRoLnJhbmRvbSgpKjAuNSswLjE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2lyY2xlLmNvdW50ZXItLTtcclxuICAgICAgICAgICAgaWYoY2lyY2xlLmNvdW50ZXI8PTApe1xyXG4gICAgICAgICAgICAgICAgY2lyY2xlLmNvdW50ZXI9MTA7XHJcbiAgICAgICAgICAgICAgICBjaXJjbGUuc2NhbGUrPWNpcmNsZS5kcztcclxuICAgICAgICAgICAgICAgIGlmKGNpcmNsZS5zY2FsZT49MSl7XHJcbiAgICAgICAgICAgICAgICAgICAgY2lyY2xlLmRzPS0wLjAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYoY2lyY2xlLnNjYWxlPD0wKXtcclxuICAgICAgICAgICAgICAgICAgICBjaXJjbGUuZHM9MC4wMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLmluc2VydCgpO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBtYWluQ29udGVudDsiLCIvKipcclxuICogQ3JlYXRlZCBieSBBbnhpbiBZYW5nIG9uIDMvMjgvMjAxOC5cclxuICovXHJcbmltcG9ydCBBWENvcmUgZnJvbSAnLi9GcmFtZXdvcmsvQXgvY29yZSc7XHJcbmltcG9ydCBBWERPTSBmcm9tICcuL0ZyYW1ld29yay9BeC9BWERPTSc7XHJcbmltcG9ydCBBWFIgZnJvbSAnLi9GcmFtZXdvcmsvQXgvQVhfUm91dGluZSc7XHJcbmltcG9ydCBob21lQ29udGVudCBmcm9tICcuL2hvbWUnO1xyXG50cnkge1xyXG4gICAgbmV3IEFYQ29yZSgpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBtZW51Q29udGFpbmVyLnVwZGF0ZXIoJ2Nsb3NlTWVudScpKCk7XHJcbiAgICB9KTtcclxuICAgIHZhciByb290ID0gbmV3IEFYRE9NKCdkaXYnLCAnYXhfcm9vdCcsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7XHJcbiAgICByb290LnN0eWxlKCdmb250LXNpemUnLCAnMTJweCcpXHJcbiAgICAgICAgLnN0eWxlKCdjdXJzb3InLCAndXJsKCksIGF1dG8nKTtcclxuICAgIHZhciBoZWFkZXIgPSByb290LmFwcGVuZCgnZGl2JywgJ2hlYWRlcicpXHJcbiAgICAgICAgLmF0dHIoJ29uc2VsZWN0c3RhcnQnLCAncmV0dXJuIGZhbHNlOycpXHJcbiAgICAgICAgLnN0eWxlKCdkaXNwbGF5JywgJ2ZsZXgnKVxyXG4gICAgICAgIC5zdHlsZSgncG9zaXRpb24nLCAnYWJzb2x1dGUnKVxyXG4gICAgICAgIC8vLnN0eWxlKCdiYWNrZ3JvdW5kJywncmdiYSgxMTIsIDE2MSwgMjU1LDEuMCknKVxyXG4gICAgICAgIC5zdHlsZSgnb3BhY2l0eScsICcwLjUnKVxyXG4gICAgICAgIC8vLnN0eWxlKCdib3gtc2hhZG93JywgJzBweCAwcHggNXB4IHJnYmEoMTEyLCAxNjEsIDI1NSwwKScpXHJcbiAgICAgICAgLy8uc3R5bGUoJ2JvcmRlcicsJzFweCBzb2xpZCByZ2JhKDExMiwgMTYxLCAyNTUsIDApJylcclxuICAgICAgICAvLy5zdHlsZSgnYm9yZGVyLXJhZGl1cycsJzhweCcpXHJcbiAgICAgICAgLnN0eWxlKCd0b3AnLCAnMWVtJylcclxuICAgICAgICAuc3R5bGUoJ2hlaWdodCcsICczZW0nKVxyXG4gICAgICAgIC5zdHlsZSgnei1pbmRleCcsICcxMCcpXHJcbiAgICAgICAgLnN0eWxlKCd0cmFuc2l0aW9uJywgJzAuM3MnKVxyXG4gICAgICAgIC5vbignbW91c2VvdmVyJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLnN0eWxlKCdvcGFjaXR5JywgJzEnKVxyXG4gICAgICAgICAgICAvLy5zdHlsZSgnYm94LXNoYWRvdycsICcwcHggMHB4IDVweCByZ2JhKDExMiwgMTYxLCAyNTUsMS4wKScpXHJcbiAgICAgICAgICAgIC8vLnN0eWxlKCdib3JkZXInLCcxcHggc29saWQgcmdiYSgxMTIsIDE2MSwgMjU1LCAwLjUpJyk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3R5bGUoJ29wYWNpdHknLCAnMC41JylcclxuICAgICAgICAgICAgLy8uc3R5bGUoJ2JveC1zaGFkb3cnLCAnMHB4IDBweCA1cHggcmdiYSgxMTIsIDE2MSwgMjU1LDApJylcclxuICAgICAgICAgICAgLy8uc3R5bGUoJ2JvcmRlcicsJzFweCBzb2xpZCByZ2JhKDExMiwgMTYxLCAyNTUsIDApJyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgdmFyIGhlYWRlckl0ZW1zID0gWydNZW51JywgJ1BsYXlncm91bmQnLCAnQWJvdXQnXTtcclxuICAgIHZhciBpbmRleCA9IDA7XHJcbiAgICBoZWFkZXJJdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgaGVhZGVySXRlbXNbaW5kZXgrK10gPSBoZWFkZXIuYXBwZW5kKCdkaXYnLCAnaGVhZGVyXycgKyBpdGVtKVxyXG4gICAgICAgICAgICAuY29udGVudChpdGVtKVxyXG4gICAgICAgICAgICAuYXBwZW5kQ2xhc3MoJ3h4JylcclxuICAgICAgICAgICAgLnN0eWxlKCdjb2xvcicsICd3aGl0ZScpXHJcbiAgICAgICAgICAgIC5zdHlsZSgncGFkZGluZycsICcxZW0gMC41ZW0nKVxyXG4gICAgICAgICAgICAuc3R5bGUoJ2N1cnNvcicsICdwb2ludGVyJylcclxuICAgICAgICAgICAgLnN0eWxlKCd0ZXh0LXNoYWRvdycsICcwIDAgMTBweCAjZWNjYzY4JylcclxuICAgICAgICAgICAgLnN0eWxlKCd0cmFuc2l0aW9uJywgJzAuM3MnKVxyXG4gICAgICAgICAgICAub24oJ21vdXNlb3ZlcicsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3R5bGUoJ3RleHQtc2hhZG93JywgJzAgMCAxMHB4ICNlY2NjNjgnKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdHlsZSgnY29sb3InLCAnI2VjY2M2OCcpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0eWxlKCd0ZXh0LXNoYWRvdycsICcwIDAgMjBweCAjZWNjYzY4JylcclxuICAgICAgICAgICAgICAgICAgICAuc3R5bGUoJ2NvbG9yJywgJ3doaXRlJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICB2YXIgaGVhZGVyTWVudUJ1dHRvbiA9IGhlYWRlckl0ZW1zWzBdO1xyXG4gICAgaGVhZGVyTWVudUJ1dHRvbi5zdHlsZSgncG9zaXRpb24nLCAncmVsYXRpdmUnKTtcclxuICAgIHZhciBtZW51Q29udGFpbmVyID0gaGVhZGVyTWVudUJ1dHRvbi5hcHBlbmQoJ2RpdicsICdtZW51Q29udGFpbmVyJylcclxuICAgICAgICAuc3R5bGUoJ3Bvc2l0aW9uJywgJ2Fic29sdXRlJylcclxuICAgICAgICAuc3R5bGUoJ3dpZHRoJywgJzI1NnB4JylcclxuICAgICAgICAuc3R5bGUoJ2hlaWdodCcsICcwcHgnKVxyXG4gICAgICAgIC5zdHlsZSgnYmFja2dyb3VuZCcsICcnKVxyXG4gICAgICAgIC5zdHlsZSgndG9wJywgJzEyNSUnKVxyXG4gICAgICAgIC5zdHlsZSgnbGVmdCcsICcwJylcclxuICAgICAgICAuc3R5bGUoJ2JveC1zaGFkb3cnLCAnMHB4IDBweCA1cHggcmdiYSgxMTIsIDE2MSwgMjU1LDApJylcclxuICAgICAgICAuc3R5bGUoJ2JvcmRlcicsICcxcHggc29saWQgcmdiYSgxMTIsIDE2MSwgMjU1LCAwKScpXHJcbiAgICAgICAgLnN0eWxlKCd0cmFuc2l0aW9uJywgJzAuM3MnKVxyXG4gICAgICAgIC5zZXRVcGRhdGVyKCd0b2dnbGVNZW51JywgZnVuY3Rpb24gKGQpIHtcclxuICAgICAgICAgICAgbGV0IGhhc09wZW4gPSB0aGlzLmhhc09wZW4gfHwgZmFsc2U7XHJcbiAgICAgICAgICAgIGlmIChoYXNPcGVuKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0eWxlKCdoZWlnaHQnLCAnMCcpXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0eWxlKCdib3gtc2hhZG93JywgJzBweCAwcHggNXB4IHJnYmEoMTEyLCAxNjEsIDI1NSwwKScpXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0eWxlKCdib3JkZXInLCAnMXB4IHNvbGlkIHJnYmEoMTEyLCAxNjEsIDI1NSwgMCknKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3R5bGUoJ2hlaWdodCcsICczM3ZoJylcclxuICAgICAgICAgICAgICAgICAgICAuc3R5bGUoJ2JveC1zaGFkb3cnLCAnMHB4IDBweCA1cHggcmdiYSgxMTIsIDE2MSwgMjU1LDEuMCknKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdHlsZSgnYm9yZGVyJywgJzFweCBzb2xpZCByZ2JhKDExMiwgMTYxLCAyNTUsIDAuNSknKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmhhc09wZW4gPSAhaGFzT3BlbjtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5zdHlsZSgndGV4dC1zaGFkb3cnLCcwIDAgMjBweCAjZWNjYzY4JylcclxuICAgICAgICAgICAgICAgIC5zdHlsZSgnY29sb3InLCAnd2hpdGUnKTtcclxuICAgICAgICB9KTtcclxudmFyIGhlYWRlck1lbnVCdXR0b24gPSBoZWFkZXJJdGVtc1swXTtcclxuaGVhZGVyTWVudUJ1dHRvbi5zdHlsZSgncG9zaXRpb24nLCdyZWxhdGl2ZScpO1xyXG52YXIgbWVudUNvbnRhaW5lciA9IGhlYWRlck1lbnVCdXR0b24uYXBwZW5kKCdkaXYnLCdtZW51Q29udGFpbmVyJylcclxuICAgIC5zdHlsZSgncG9zaXRpb24nLCdhYnNvbHV0ZScpXHJcbiAgICAuc3R5bGUoJ3dpZHRoJywnMjU2cHgnKVxyXG4gICAgLnN0eWxlKCdoZWlnaHQnLCAnMHB4JylcclxuICAgIC5zdHlsZSgnYmFja2dyb3VuZCcsJycpXHJcbiAgICAuc3R5bGUoJ3RvcCcsJzEyNSUnKVxyXG4gICAgLnN0eWxlKCdsZWZ0JywnMCcpXHJcbiAgICAuc3R5bGUoJ292ZXJmbG93JywnaGlkZGVuJylcclxuICAgIC8vLnN0eWxlKCdib3gtc2hhZG93JywgJzBweCAwcHggNXB4IHJnYmEoMTEyLCAxNjEsIDI1NSwwKScpXHJcbiAgICAvLy5zdHlsZSgnYm9yZGVyJywnMXB4IHNvbGlkIHJnYmEoMTEyLCAxNjEsIDI1NSwgMCknKVxyXG4gICAgLnN0eWxlKCd0cmFuc2l0aW9uJywgJzAuM3MnKVxyXG4gICAgLnNldFVwZGF0ZXIoJ3RvZ2dsZU1lbnUnLGZ1bmN0aW9uIChkKSB7XHJcbiAgICAgICAgbGV0IGhhc09wZW4gPSB0aGlzLmhhc09wZW4gfHwgZmFsc2U7XHJcbiAgICAgICAgaWYoaGFzT3Blbil7XHJcbiAgICAgICAgICAgIHRoaXMuc3R5bGUoJ2hlaWdodCcsJzAnKVxyXG4gICAgICAgICAgICAgICAgLy8uc3R5bGUoJ2JveC1zaGFkb3cnLCAnMHB4IDBweCA1cHggcmdiYSgxMTIsIDE2MSwgMjU1LDApJylcclxuICAgICAgICAgICAgICAgIC8vLnN0eWxlKCdib3JkZXInLCcxcHggc29saWQgcmdiYSgxMTIsIDE2MSwgMjU1LCAwKScpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLnN0eWxlKCdoZWlnaHQnLCczM3ZoJylcclxuICAgICAgICAgICAgICAgIC8vLnN0eWxlKCdib3gtc2hhZG93JywgJzBweCAwcHggNXB4IHJnYmEoMTEyLCAxNjEsIDI1NSwxLjApJylcclxuICAgICAgICAgICAgICAgIC8vLnN0eWxlKCdib3JkZXInLCcxcHggc29saWQgcmdiYSgxMTIsIDE2MSwgMjU1LCAwLjUpJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaGFzT3BlbiA9ICFoYXNPcGVuO1xyXG4gICAgfSlcclxuICAgIC5zZXRVcGRhdGVyKCdjbG9zZU1lbnUnLGZ1bmN0aW9uIChkKSB7XHJcbiAgICAgICAgdGhpcy5zdHlsZSgnaGVpZ2h0JywnMCcpXHJcbiAgICAgICAgICAgIC5zdHlsZSgnYm94LXNoYWRvdycsICcwcHggMHB4IDVweCByZ2JhKDExMiwgMTYxLCAyNTUsMCknKVxyXG4gICAgICAgICAgICAuc3R5bGUoJ2JvcmRlcicsJzFweCBzb2xpZCByZ2JhKDExMiwgMTYxLCAyNTUsIDApJyk7XHJcbiAgICAgICAgdGhpcy5oYXNPcGVuID0gZmFsc2U7XHJcbiAgICB9KTtcclxuXHJcbiAgICBoZWFkZXJNZW51QnV0dG9uLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICBtZW51Q29udGFpbmVyLnVwZGF0ZXIoJ3RvZ2dsZU1lbnUnKSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdmFyIG1haW5Db250YWluZXIgPSByb290LmFwcGVuZCgnZGl2JywgJ21haW5Db250YWluZXInKTtcclxuICAgIG1haW5Db250YWluZXIuYXBwZW5kRWxlbWVudChob21lQ29udGVudCk7XHJcblxyXG52YXIgdmVyc2lvbiA9IHJvb3QuYXBwZW5kKCdwJywndmVyc2lvbicpXHJcbiAgICAuc3R5bGUoJ3Bvc2l0aW9uJywnZml4ZWQnKVxyXG4gICAgLnN0eWxlKCdib3R0b20nLCcwcHgnKVxyXG4gICAgLnN0eWxlKCdyaWdodCcsJzAnKVxyXG4gICAgLnN0eWxlKCdwYWRkaW5nLXJpZ2h0JywnMWVtJylcclxuICAgIC5zdHlsZSgnY29sb3InLCdsaWdodGdyYXknKVxyXG4gICAgLmNvbnRlbnQobmV3IERhdGUoKSlcclxuICAgIC5zZXRVcGRhdGVyKCd0aW1lcicsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuY29udGVudCgnQVhfUm91dGluZTogTGFzckN5Y2xlVGltZTogJytBWFIubGFzdEN5Y2xlVGltZSsnbXMgfCBDUFM6JysgQVhSLmN5Y2xlUGVyU2VjICsnIHxMb25nZXN0OiAnK0FYUi5sb25nZXN0Um91dGluZVRpbWUrJ21zIHwgTGFzdDonK0FYUi5sYXN0Um91dGluZVRpbWUrJ21zJyk7XHJcbiAgICB9KTtcclxudmFyIHRpbWVyID0gQVhSLmFwcGVuZCgndGltZXInKVxyXG4gICAgLmF0dHIoJ2ZyZXEnLDEpXHJcbiAgICAuYXR0cignYWN0aW9uJyx2ZXJzaW9uLnVwZGF0ZXIoJ3RpbWVyJykpXHJcbiAgICAuaW5zZXJ0KCk7XHJcbnZhciBtZW51Q29udGVudHMgPSBtZW51Q29udGFpbmVyLmFwcGVuZCgndWwnKVxyXG4gICAgLnN0eWxlKCdwYWRkaW5nLWxlZnQnLCcyZW0nKVxyXG4gICAgLnN0eWxlKCdtYXJnaW4nLCcwJyk7XHJcbnZhciBtZW51SXRlbXMgPSBbJ0NvbWluZyBzb29uJywnTWF5IENvbWluZyBzb29uJywncHJvYmFibHkgQ29taW5nIHNvb24nXTtcclxuaW5kZXggPSAwO1xyXG5tZW51SXRlbXMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgbWVudUl0ZW1zW2luZGV4KytdID0gbWVudUNvbnRlbnRzLmFwcGVuZCgnbGknLCAnbWVudV8nICsgaXRlbSlcclxuICAgICAgICAuY29udGVudChpdGVtKVxyXG4gICAgICAgIC5zdHlsZSgnY29sb3InLCAnd2hpdGUnKVxyXG4gICAgICAgIC5zdHlsZSgncGFkZGluZycsICcxZW0gMC41ZW0nKVxyXG4gICAgICAgIC5zdHlsZSgnY3Vyc29yJywgJ3BvaW50ZXInKVxyXG4gICAgICAgIC5zdHlsZSgndGV4dC1zaGFkb3cnLCcwIDAgMTBweCAjZWNjYzY4JylcclxuICAgICAgICAuc3R5bGUoJ3RyYW5zaXRpb24nLCAnMC4zcycpXHJcbiAgICAgICAgLm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3R5bGUoJ3RleHQtc2hhZG93JywnMCAwIDEwcHggI2VjY2M2OCcpXHJcbiAgICAgICAgICAgICAgICAuc3R5bGUoJ2NvbG9yJywgJyNlY2NjNjgnKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5zdHlsZSgndGV4dC1zaGFkb3cnLCcwIDAgMjBweCAjZWNjYzY4JylcclxuICAgICAgICAgICAgICAgIC5zdHlsZSgnY29sb3InLCAnd2hpdGUnKTtcclxuICAgICAgICB9KTtcclxufSk7XHJcbn1jYXRjaCAoZSl7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykuaW5uZXJIVE1MPSBlO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=