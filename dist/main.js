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

/***/ "./src/Framework/CubY/CubY.js":
/*!************************************!*\
  !*** ./src/Framework/CubY/CubY.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _CubY_Core = __webpack_require__(/*! ./CubY_Core */ "./src/Framework/CubY/CubY_Core.js");

var _CubY_Core2 = _interopRequireDefault(_CubY_Core);

var _CubY_DOM = __webpack_require__(/*! ./CubY_DOM */ "./src/Framework/CubY/CubY_DOM.js");

var _CubY_DOM2 = _interopRequireDefault(_CubY_DOM);

var _CubY_Routine = __webpack_require__(/*! ./CubY_Routine */ "./src/Framework/CubY/CubY_Routine.js");

var _CubY_Routine2 = _interopRequireDefault(_CubY_Routine);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var EMPTY_FUNCTION = function EMPTY_FUNCTION() {};

var CubY = {
    //Core
    getValue: _CubY_Core2.default.getValue.bind(_CubY_Core2.default),
    getBrowser: _CubY_Core2.default.getBrowser.bind(_CubY_Core2.default),
    storeDataArray: _CubY_Core2.default.storeDataArray.bind(_CubY_Core2.default),
    storeValue: _CubY_Core2.default.storeValue.bind(_CubY_Core2.default),
    connect: _CubY_Core2.default.connect.bind(_CubY_Core2.default),
    react: _CubY_Core2.default.react.bind(_CubY_Core2.default),
    debug: _CubY_Core2.default.debug.bind(_CubY_Core2.default),

    //DOM
    createElement: _CubY_DOM2.default.createElement,

    //Routine
    createRoutine: _CubY_Routine2.default.createRoutine.bind(_CubY_Routine2.default),
    getCurrentCycle: _CubY_Routine2.default.getCurrentCycle.bind(_CubY_Routine2.default),
    routine: _CubY_Routine2.default.routine.bind(_CubY_Routine2.default),

    //Other
    version: '0.5b.e6',
    debugInfo: [_CubY_Core2.default, _CubY_Routine2.default]
};

window.CubY = CubY;
exports.default = CubY;

/***/ }),

/***/ "./src/Framework/CubY/CubY_Core.js":
/*!*****************************************!*\
  !*** ./src/Framework/CubY/CubY_Core.js ***!
  \*****************************************/
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

var CubY_Core = function () {
    function CubY_Core(_props) {
        _classCallCheck(this, CubY_Core);

        var props = props || {};
        var self = this;
        this.init(props);
    }

    _createClass(CubY_Core, [{
        key: 'init',
        value: function init(_props) {
            var props = _props || {};
            this.debugMode = props.debug || false;
            this.dataMap = {};
            this.actionMap = {};
            this.browser = this.getBrowser();
            window.cc = this;
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
            var item = store[key];
            if (item !== undefined && item === Object(item) && options.overwrite !== true) {
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
            return this.dataMap[key];
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
            var self = this;
            if (_key === undefined) {
                return false;
            }

            var actionMap = this.actionMap;
            var actionList = actionMap[_key] || [];
            actionList.forEach(function (action) {
                var value = self.getValue(_key);
                action(value);
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

    return CubY_Core;
}();

var _CubY_Core = new CubY_Core();
exports.default = _CubY_Core;

/***/ }),

/***/ "./src/Framework/CubY/CubY_DOM.js":
/*!****************************************!*\
  !*** ./src/Framework/CubY/CubY_DOM.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
    return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

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

/**
 * Created by Anxin Yang on 5/26/2018.
 */
var CubY_DOM = function () {
    function CubY_DOM(_tag, _id, _root) {
        _classCallCheck(this, CubY_DOM);

        this.id = this.readValue(_id) || 'self';
        this.tag = this.readValue(_tag) || 'div';
        this.dom = document.createElement(this.tag);
        this.dom.setAttribute('id', this.id);
        this.childrenList = [];
        this.attribute = {};
        this.domStyle = {};
        this.updaters = {};
        this.parent;
        this.classes = [];
        this.root(_root);

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

    _createClass(CubY_DOM, [{
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
        key: 'root',
        value: function root(_root) {
            if (_root) {
                _root.appendChild(this.dom);
                this.isRoot = true;
                this.activated();
            }
            return this;
        }
    }, {
        key: 'append',
        value: function append(_tag, _id) {
            var tag = this.readValue(_tag);
            var id = this.readValue(_id);
            var element = CubY.createElement(tag, id);
            this.appendElement(element);
            return element;
        }
    }, {
        key: 'appendElement',
        value: function appendElement(CubY_DOM) {
            var element = this.readValue(CubY_DOM);
            element.parent = this;

            this.childrenList.push(element);
            this.dom.appendChild(element.dom);
            if (this.isActive || this.isRoot) {
                element.activated();
            }
            return element;
        }
    }, {
        key: 'attr',
        value: function attr(key, _value) {
            var value = void 0;

            if ((typeof key === 'undefined' ? 'undefined' : _typeof(key)) === 'object') {
                for (var k in key) {
                    this.attr(k, key[k]);
                }
                return this;
            }

            if (key === 'activated' || key === 'deactivated') {
                value = _value;
            } else {
                value = this.readValue(_value);
                this.dom.setAttribute(key, value);
            }

            this.attribute[key] = value;
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
            if ((typeof key === 'undefined' ? 'undefined' : _typeof(key)) === 'object') {
                for (var k in key) {
                    this.style(k, key[k]);
                }
                return this;
            }
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
        value: function remove(_selector, _transition) {
            if (_selector === undefined) {
                this.removeSelf(_transition);
                return;
            }
            var selector = _selector.charAt(0);
            var name = _selector.substring(1);
            var target = void 0;
            switch (selector) {
                case '#':
                    this.removeById(name, _transition);
                    break;
                case '.':
                    this.removeByClassName(name, _transition);
                    break;
                default:
                    this.removeByTag(_selector, _transition);
            }
        }
    }, {
        key: 'removeById',
        value: function removeById(id, _transition) {
            var childrenList = this.childrenList;
            for (var i = 0; i < childrenList.length; i++) {
                var child = childrenList[i];
                if (child.id === id) {
                    childrenList.splice(i, 1);
                    child.remove(undefined, _transition);
                    i--;
                    break;
                }
            }
        }
    }, {
        key: 'removeByClassName',
        value: function removeByClassName(className, _transition) {
            var childrenList = this.childrenList;
            for (var i = 0; i < childrenList.length; i++) {
                var child = childrenList[i];
                if (child.classes.indexOf(className) > -1) {
                    childrenList.splice(i, 1);
                    child.remove(undefined, _transition);
                    i--;
                }
            }
        }
    }, {
        key: 'removeByTag',
        value: function removeByTag(_tag, _transition) {
            var childrenList = this.childrenList;
            for (var i = 0; i < childrenList.length; i++) {
                var child = childrenList[i];
                if (child.tag === _tag) {
                    childrenList.splice(i, 1);
                    child.remove(undefined, _transition);
                    i--;
                }
            }
        }
    }, {
        key: 'removeSelf',
        value: function removeSelf(_transition) {
            /*this.childrenList.forEach(function (child) {
                child.remove();
            });*/
            var self = this;
            this.deactivated();
            if (_transition) {
                this.deactivatedTimer = setTimeout(function () {
                    self.dom.remove();
                }, _transition);
            } else {
                self.dom.remove();
            }
            if (this.parent) {
                var childrenList = this.parent.childrenList;
                for (var i = 0; i < childrenList.length; i++) {
                    var child = childrenList[i];
                    if (child === this) {
                        childrenList.splice(i, 1);
                    }
                }
            }
            /*for(var key in this){
                delete this[key]
            }*/
        }
    }, {
        key: 'activated',
        value: function activated() {
            this.isActive = true;
            if (this.deactivatedTimer) {
                clearTimeout(this.deactivatedTimer);
            }
            if (this.attribute.activated) {
                this.attribute.activated.call(this);
            }

            this.childrenList.forEach(function (child) {
                child.activated();
            });
        }
    }, {
        key: 'deactivated',
        value: function deactivated() {
            this.isActive = false;

            if (this.attribute.deactivated) {
                this.attribute.deactivated.call(this);
            }

            this.childrenList.forEach(function (child) {
                child.deactivated();
            });
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

    return CubY_DOM;
}();

var _CubY_DOM = {
    createElement: function createElement(_tag, _id, _root) {
        return new CubY_DOM(_tag, _id, _root);
    }
};
exports.default = _CubY_DOM;

/***/ }),

/***/ "./src/Framework/CubY/CubY_Routine.js":
/*!********************************************!*\
  !*** ./src/Framework/CubY/CubY_Routine.js ***!
  \********************************************/
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

var CubY_Routine = function () {
    function CubY_Routine(_tickSpeed, _options) {
        _classCallCheck(this, CubY_Routine);

        var options = _options || {};
        this.init(options);
        this.MAX_CYCLE = MAX_CYCLE;
    }

    _createClass(CubY_Routine, [{
        key: 'init',
        value: function init(options) {
            window.cr = this;
            this.cycle = 0;
            this.routineList = [];
            this.longestRoutineTime = 0;
            setTimeout(this.start.bind(this), 0);
        }
    }, {
        key: 'start',
        value: function start() {
            var self = this;
            this.cycleStartTime = Date.now();
            setTimeout(self.routine.bind(this), 0);
        }
    }, {
        key: 'createRoutine',
        value: function createRoutine(name, group) {
            var newRoutine = new Routine(name, group);
            var self = this;
            newRoutine.insert = function () {
                if (newRoutine.freq !== 1) {
                    newRoutine.counter += self.routineList.length + 1;
                }

                self.routineList.push(newRoutine);
                return newRoutine;
            };
            newRoutine.remove = function () {
                var index = self.routineList.indexOf(newRoutine);
                self.routineList.splice(index, 1);
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
                try {
                    if (routine.checkLock()) {
                        routine.lock();
                        setTimeout(function () {
                            var startTime = Date.now();
                            routine.action();
                            self.lastRoutineTime = Date.now() - startTime;
                            if (self.longestRoutineTime < self.lastRoutineTime) {
                                self.longestRoutineTime = self.lastRoutineTime;
                            }
                            if (self.lastRoutineTime > 200) {
                                console.warn('Routine:' + routine.name + ' took too long to run. [' + self.lastRoutineTime + 'ms]');
                            }
                            routine.unlock();
                        }, routine.freq);
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

    return CubY_Routine;
}();

var Routine = function () {
    function Routine(name, group) {
        _classCallCheck(this, Routine);

        this.name = name;
        this.group = group || 'common';
        this.freq = 1;
        var self = this;
        this.action = function () {
            self.isRunning = true;
        };
        this.counter = 0;
        this.repeat = -1;
    }

    _createClass(Routine, [{
        key: 'lock',
        value: function lock() {
            if (this.repeat > 0) this.repeat--;
            this.isRunning = true;
        }
    }, {
        key: 'unlock',
        value: function unlock() {
            if (this.repeat === 0) {
                this.remove();
            }
            this.isRunning = false;
        }
    }, {
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
        key: 'checkLock',
        value: function checkLock() {
            if (this.counter > 0) {
                this.counter--;
            }

            return !(this.isRunning === true || this.counter > 0);
        }
    }]);

    return Routine;
}();

var _CubY_Routine = new CubY_Routine();
exports.default = _CubY_Routine;

/***/ }),

/***/ "./src/components/background_stars.js":
/*!********************************************!*\
  !*** ./src/components/background_stars.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _CubY = __webpack_require__(/*! ../Framework/CubY/CubY */ "./src/Framework/CubY/CubY.js");

var _CubY2 = _interopRequireDefault(_CubY);

var _home = __webpack_require__(/*! ../view/home */ "./src/view/home.js");

var _home2 = _interopRequireDefault(_home);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

/**
 * Created by Anxin Yang on 6/12/2018.
 */
var origin = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2
};
window.mobilecheck = function () {
    var check = false;
    (function (a) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
};
document.onmousemove = function (e) {
    var x = e.clientX;
    var y = e.clientY;

    background.dx = -(x - origin.x) / 10;
    background.dy = -(y - origin.y) / 10;
};

var background = _CubY2.default.createElement('div', 'background');
background.style('width', '100vw').style('height', '100vh').style('position', 'fixed').style('background', 'black').style('top', 0).style('left', 0).style('zIndex', 0);
var circleNum = mobilecheck() ? 50 : 128;
var circleList = [];

var _loop = function _loop() {
    var circle = _CubY2.default.createElement('div', 'backgroundCircle_' + i).style('position', 'absolute').style('width', '20px').style('height', '20px').style('borderRadius', '4px').style('background', '#eccc68').style('transition', '0.3s linear').style('boxShadow', '0 0 10px #eccc68').style('opacity', '0').attr('activated', function () {
        var self = this;
        var x = Math.random() * window.innerWidth;
        var y = Math.random() * window.innerHeight;
        this.x = x;
        this.y = y;
        this.dx = Math.random() - 0.5;
        this.dy = Math.random() - 0.5;
        this.ds = 0.01;
        this.scale = Math.random();
        this.counter = 10;
        this.style('transform', 'translate(' + x + 'px,' + y + 'px)');
        this.circleAn = _CubY2.default.createRoutine('home_circle_animation_' + i).attr('freq', 50).attr('action', function () {
            var scale = self.scale;
            var seed = Math.random();
            self.x += self.dx;
            self.y += self.dy;

            self.style('transform', 'translate(' + (self.x + (background.dx || 0) * scale) + 'px,' + (self.y + (background.dy || 0) * scale) + 'px) scale(' + scale + ')').style('opacity', scale).style('zIndex', scale >= 0.8 ? 2 : 0).style('boxShadow', '0 0 ' + (seed * 10 + 10) + 'px #eccc68');
            if (self.x > window.innerWidth) {
                self.dx = -(seed * 0.5 + 0.1);
            } else if (self.x < 0) {
                self.dx = seed * 0.5 + 0.1;
            }
            if (self.y > window.innerHeight) {
                self.dy = -(seed * 0.5 + 0.1);
            } else if (self.y < 0) {
                self.dy = seed * 0.5 + 0.1;
            }
            self.counter--;
            if (self.counter <= 0) {
                self.counter = 10;
                self.scale += circle.ds;
                if (self.scale >= 1) {
                    self.ds = -0.01;
                }
                if (self.scale <= 0) {
                    self.ds = 0.01;
                }
            }
        }).insert();
        this.circleAn2 = _CubY2.default.createRoutine('home_circle_animation_2_' + i).attr('freq', 300).attr('action', function () {
            var seed = Math.random();
            self.style('boxShadow', '0 0 ' + (seed * 40 + 10) + 'px #eccc68');
        }).insert();
    }).attr('deactivated', function () {
        this.circleAn.remove();
        this.circleAn2.remove();
    });
    circle.rearrange = function () {
        var x = Math.random() * window.innerWidth;
        var y = Math.random() * window.innerHeight;
        var scale = circle.scale = Math.random();
        circle.x = x;
        circle.y = y;
        circle.style('transform', 'translate(' + (self.x + (background.dx || 0) * scale) + 'px,' + (self.y + (background.dy || 0) * scale) + 'px) scale(' + scale + ')');
    };
    _CubY2.default.connect('currentView', circle.rearrange);
    _CubY2.default.connect('viewportSize', circle.rearrange);
    background.appendElement(circle);
};

for (var i = 0; i < circleNum; i++) {
    _loop();
};
exports.default = background;

/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _CubY = __webpack_require__(/*! ../Framework/CubY/CubY */ "./src/Framework/CubY/CubY.js");

var _CubY2 = _interopRequireDefault(_CubY);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var header = _CubY2.default.createElement('div', 'header').attr('onselectstart', 'return false;').style('display', 'flex').style('position', 'absolute').style('opacity', '0.5').style('top', '1em').style('height', '3em').style('zIndex', '10').style('transition', '0.3s').on('mouseover', function () {
    this.style('opacity', '1');
}).on('mouseleave', function () {
    this.style('opacity', '0.5');
});

var headerItems = ['Menu', 'Playground', 'About'];
var index = 0;
headerItems.forEach(function (item) {
    headerItems[index++] = header.append('div', 'header_' + item).content(item).appendClass('xx').style('color', 'white').style('padding', '1em 0.5em').style('cursor', 'pointer').style('textShadow', '0 0 10px #eccc68').style('transition', '0.3s').on('mouseover', function () {
        this.style('textShadow', '0 0 10px #eccc68').style('color', '#eccc68');
    }).on('mouseleave', function () {
        this.style('textShadow', '0 0 20px #eccc68').style('color', 'white');
    });
});
var headerMenuButton = headerItems[0];
headerMenuButton.style('position', 'relative');
var menuContainer = headerMenuButton.append('div', 'menuContainer').style('position', 'absolute').style('width', '256px').style('height', '0px').style('background', '').style('top', '125%').style('left', '0').style('overflow', 'hidden').style('transition', '0.3s').setUpdater('toggleMenu', function (d) {
    var hasOpen = this.hasOpen || false;
    if (hasOpen) {
        this.style('height', '0');
    } else {
        this.style('height', '33vh');
    }
    this.hasOpen = !hasOpen;
}).setUpdater('closeMenu', function (d) {
    this.style('height', '0').style('boxShadow', '0px 0px 5px rgba(112, 161, 255,0)').style('border', '1px solid rgba(112, 161, 255, 0)');
    this.hasOpen = false;
});

window.addEventListener('click', function (e) {
    menuContainer.updater('closeMenu')();
});

headerMenuButton.on('click', function (e) {
    e.stopPropagation();
    menuContainer.updater('toggleMenu')();
});

var menuContents = menuContainer.append('ul').style('paddingLeft', '2em').style('margin', '0');

var menuItems = ['Home', 'May Coming soon', 'Probably Coming soon'];
index = 0;

menuItems.forEach(function (item) {
    menuItems[index++] = menuContents.append('li', 'menu_' + item).content(item).style('color', 'white').style('padding', '1em 0.5em').style('cursor', 'pointer').style('textShadow', '0 0 10px #eccc68').style('transition', '0.3s').on('click', function () {
        _CubY2.default.storeValue('currentView', item);
    }).on('mouseover', function () {
        this.style('textShadow', '0 0 10px #eccc68').style('color', '#eccc68');
    }).on('mouseleave', function () {
        this.style('textShadow', '0 0 20px #eccc68').style('color', 'white');
    });
});

exports.default = header;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _CubY = __webpack_require__(/*! ./Framework/CubY/CubY */ "./src/Framework/CubY/CubY.js");

var _CubY2 = _interopRequireDefault(_CubY);

var _home = __webpack_require__(/*! ./view/home */ "./src/view/home.js");

var _home2 = _interopRequireDefault(_home);

var _about = __webpack_require__(/*! ./view/about */ "./src/view/about.js");

var _about2 = _interopRequireDefault(_about);

var _header = __webpack_require__(/*! ./components/header */ "./src/components/header.js");

var _header2 = _interopRequireDefault(_header);

var _background_stars = __webpack_require__(/*! ./components/background_stars */ "./src/components/background_stars.js");

var _background_stars2 = _interopRequireDefault(_background_stars);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var VIEW_TRANSITION_TIME = 500; /**
                                 * Created by Anxin Yang on 3/28/2018.
                                 */
//import CC from './Framework/CubY/CubY_Core';
//import CubY_DOM from './Framework/CubY/CubY_DOM';
//import CR from './Framework/CubY/CubY_Routine';

window.addEventListener('resize', function () {
    if (window.resizing) {
        clearTimeout(window.resizing);
    }
    window.resizing = setTimeout(function () {
        _CubY2.default.storeValue('viewportSize', { w: window.innerWidth, h: window.innerHeight });
    }, 200);
});
window.root = new _CubY2.default.createElement('div', 'ax_root', document.getElementById('app'));
root.style('fontSize', '12px').style('cursor', 'url(), auto');
root.appendElement(_header2.default);
var mainContainer = root.append('div', 'mainContainer');
mainContainer.appendElement(_home2.default);
mainContainer.appendElement(_background_stars2.default);
_CubY2.default.storeValue('currentView', 'Home');
_CubY2.default.connect('currentView', function () {
    var currentView = _CubY2.default.getValue('currentView');
    mainContainer.remove('.mainContent', VIEW_TRANSITION_TIME);
    switch (currentView) {
        case 'Home':
            mainContainer.appendElement(_home2.default);
            break;
        case 'About':
            mainContainer.appendElement(_about2.default);
            break;
    }
});

var version = root.append('p', 'version').style('position', 'fixed').style('bottom', '0px').style('right', '0').style('paddingRight', '1em').style('color', 'lightgray').content(new Date()).setUpdater('timer', function () {
    this.content('CubY_Routine: LasrCycleTime: ' + cr.lastCycleTime + 'ms | CPS:' + cr.cyclePerSec + ' |Longest: ' + cr.longestRoutineTime + 'ms | Last:' + cr.lastRoutineTime + 'ms');
});
var timer = _CubY2.default.createRoutine('timer').attr('freq', 1).attr('action', version.updater('timer')).insert();

/***/ }),

/***/ "./src/view/about.js":
/*!***************************!*\
  !*** ./src/view/about.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'W:\\projectAX\\src\\view\\about.js'");

/***/ }),

/***/ "./src/view/home.js":
/*!**************************!*\
  !*** ./src/view/home.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'W:\\projectAX\\src\\view\\home.js'");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0ZyYW1ld29yay9DdWJZL0N1YlkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0ZyYW1ld29yay9DdWJZL0N1YllfQ29yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRnJhbWV3b3JrL0N1YlkvQ3ViWV9ET00uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0ZyYW1ld29yay9DdWJZL0N1YllfUm91dGluZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9iYWNrZ3JvdW5kX3N0YXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztBQUNBLElBQU0saUJBQWlCLDBCQUFNLENBQTdCOztBQUVBLElBQUk7QUFFQTtjQUFVLG9CQUFVLFNBQVMsaUJBQzdCO2dCQUFZLG9CQUFVLFdBQVcsaUJBQ2pDO29CQUFnQixvQkFBVSxlQUFlLGlCQUN6QztnQkFBWSxvQkFBVSxXQUFXLGlCQUNqQzthQUFTLG9CQUFVLFFBQVEsaUJBQzNCO1dBQU8sb0JBQVUsTUFBTSxpQkFDdkI7V0FBTyxvQkFBVSxNQUFNLGlCQUV2Qjs7QUFDQTttQkFBZSxtQkFFZjs7QUFDQTttQkFBYyx1QkFBYSxjQUFjLG9CQUN6QztxQkFBZ0IsdUJBQWEsZ0JBQWdCLG9CQUM3QzthQUFRLHVCQUFhLFFBQVEsb0JBRTdCOztBQUNBO2FBQ0E7ZUFBVyxxQ0FwQko7QUFDUDs7QUFzQkosT0FBTyxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVCZCxJQUFNLGlCQUFpQiwwQkFBTSxDQUE3Qjs7NEJBRUk7dUJBQVksUUFBTzs4QkFDZjs7WUFBSSxRQUFRLFNBQ1o7WUFBSSxPQUNKO2FBQUssS0FDUjs7Ozs7cUNBRUc7Z0JBQUksUUFBUSxVQUNaO2lCQUFLLFlBQVksTUFBTSxTQUN2QjtpQkFBSyxVQUNMO2lCQUFLLFlBQ0w7aUJBQUssVUFBVSxLQUNmO21CQUFPLEtBQ1Y7Ozs7cUNBR0c7Z0JBQUksT0FDSjtnQkFBSSxXQUNKO2dCQUFJLFVBQ0o7Z0JBQUksQ0FBQyxDQUFDLE9BQU8sT0FBTyxDQUFDLENBQUMsSUFBSSxVQUFXLENBQUMsQ0FBQyxPQUFPLFNBQVMsVUFBVSxVQUFVLFFBQVEsWUFBWSxHQUMzRjswQkFDQTt1QkFDSDtBQUNEO2dCQUFHLE9BQU8sbUJBQW1CLGFBQ3pCO3VCQUNIO0FBQ0Q7Z0JBQUcsZUFBZSxLQUFLLE9BQU8sMEJBQTJCLEdBQ2pEO3VCQUFPLEVBQUUsZUFDWjtBQUZ5QyxhQUFDLENBRXhDLENBQUMsT0FBTyxhQUFhLE9BQU8sbUJBQy9CO3VCQUNIO0FBQ0Q7Z0JBQUcsU0FBUyxDQUFDLENBQUMsU0FBUyxjQUNuQjt1QkFBTyxTQUFTLFlBQ1o7d0JBQUksU0FBUyxVQUNiO3lCQUFLLElBQUksSUFBSSxHQUFHLElBQUksVUFBVSxRQUFRLEtBQ2xDOzZCQUFLLElBQUksT0FBTyxVQUFVLElBQ3RCO2dDQUFJLE1BQU0sVUFDVjtnQ0FBSSxJQUFJLGVBQWUsTUFDbkIsT0FBTyxPQUFPLElBQ3JCO0FBQ0o7QUFDRDsyQkFDSDtBQUNEO3VCQUNBO3VCQUNIO0FBQ0Q7Z0JBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLFlBQ2pCO3VCQUNIO0FBQ0Q7Z0JBQUcsQ0FBQyxDQUFDLE9BQU8sVUFBVSxDQUFDLENBQUMsT0FBTyxPQUFPLFVBQ2xDOzJCQUNBO3VCQUNIO0FBQ0Q7Z0JBQUcsQ0FBQyxZQUFZLFlBQVksQ0FBQyxDQUFDLE9BQU8sS0FDakM7dUJBQ0g7QUFDSjs7Ozs0RkFHRztnQkFBSSxVQUFVLFlBQ2Q7Z0JBQUksUUFBUSxVQUNaO2dCQUFJLFdBQVcsYUFDZjtnQkFBSSxRQUFRLFVBQ1o7Z0JBQUksV0FDSjtnQkFBSSxnQkFBZ0Isa0JBRXBCOztrQkFBTSxRQUFRLFVBQVUsT0FDcEI7b0JBQUksTUFBTSxNQUNWO29CQUFJLFFBQVEsV0FDUjtBQUNIO0FBRUQ7O29CQUFJLE9BQU8sS0FBSyxXQUFXLEtBQUssT0FFaEM7OzhCQUNBO3lCQUFTLEtBQ1o7QUFFRDs7cUJBQVMsUUFDVDttQkFDSDs7OztzRUFHRztnQkFBSSxVQUFVLFlBQ2Q7Z0JBQUksUUFBUSxLQUNaO2dCQUFJLE1BQ0o7Z0JBQUksV0FBVyxhQUNmO2dCQUFJLFdBQ0o7Z0JBQUksT0FBTyxNQUNYO2dCQUFHLFNBQU8sYUFBYSxTQUFTLE9BQU8sU0FBUyxRQUFRLGNBQVksTUFDaEU7dUJBQU8sT0FBTyxPQUFPLE1BQ3hCO0FBRkQsbUJBR0k7dUJBQ0g7QUFDRDtpQkFBSyxRQUFRLE9BRWI7O3FCQUNBO2lCQUFLLE1BQ0w7bUJBQ0g7Ozs7dUNBRUc7Z0JBQUksTUFBTSxRQUNWO21CQUFPLEtBQUssUUFDZjs7OzsrQ0FHRztnQkFBRyxTQUFPLGFBQWEsWUFBVSxXQUM3Qjt1QkFDSDtBQUVEOztnQkFBSSxZQUFZLEtBQ2hCO2dCQUFJLGFBQWEsVUFBVSxTQUMzQjt1QkFBVyxLQUNYO3NCQUFVLFFBQ2I7Ozs7b0NBRUc7Z0JBQUksT0FDSjtnQkFBRyxTQUFPLFdBQ047dUJBQ0g7QUFFRDs7Z0JBQUksWUFBWSxLQUNoQjtnQkFBSSxhQUFhLFVBQVUsU0FDM0I7dUJBQVcsUUFBUSxVQUFDLFFBQ2hCO29CQUFJLFFBQVEsS0FBSyxTQUNqQjt1QkFDSDtBQUNKOzs7O21DQUVHO2dCQUFHLEtBQUssV0FDSjt3QkFBUSxJQUFJLFlBQ2Y7QUFDSjs7Ozs7OztBQUVMLElBQU0sYUFBYSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkl2Qjs7OzJCQUlJO3NCQUFZLE1BQUssS0FBSSxPQUFPOzhCQUN4Qjs7YUFBSyxLQUFLLEtBQUssVUFBVSxRQUN6QjthQUFLLE1BQU0sS0FBSyxVQUFVLFNBQzFCO2FBQUssTUFBTSxTQUFTLGNBQWMsS0FDbEM7YUFBSyxJQUFJLGFBQWEsTUFBSyxLQUMzQjthQUFLLGVBQ0w7YUFBSyxZQUNMO2FBQUssV0FDTDthQUFLLFdBQ0w7YUFDQTthQUFLLFVBQ0w7YUFBSyxLQUVMOztZQUFJLE9BQ0o7YUFBSyxVQUFVLFVBQVUsTUFDckI7Z0JBQUksVUFBUyxLQUFLLFNBQ2xCO21CQUFPLFlBQ0g7b0JBQUcsU0FDQzs0QkFBUSxLQUFLLE1BQU0sS0FBSyxNQUMzQjtBQUNKO0FBQ0o7QUFDSjs7Ozs7a0RBRUc7aUJBQUssU0FBUyxRQUNkO21CQUNIOzs7O21DQUVHO2lCQUFLLE9BQ0w7bUJBQ0g7Ozs7b0NBRUc7Z0JBQUcsT0FDQztzQkFBTSxZQUFZLEtBQ2xCO3FCQUFLLFNBQ0w7cUJBQ0g7QUFDRDttQkFDSDs7OzswQ0FFRztnQkFBSSxNQUFNLEtBQUssVUFDZjtnQkFBSSxLQUFLLEtBQUssVUFDZDtnQkFBSSxVQUFVLEtBQUssY0FBYyxLQUNqQztpQkFBSyxjQUNMO21CQUNIOzs7O2dEQUVHO2dCQUFJLFVBQVUsS0FBSyxVQUNuQjtvQkFBUSxTQUVSOztpQkFBSyxhQUFhLEtBQ2xCO2lCQUFLLElBQUksWUFBWSxRQUNyQjtnQkFBRyxLQUFLLFlBQVksS0FBSyxRQUNyQjt3QkFDSDtBQUNEO21CQUNIOzs7OzBDQUVHO2dCQUFJLGFBRUo7O2dCQUFHLFFBQU8sc0RBQVEsVUFDZDtxQkFBSSxJQUFJLEtBQUssS0FDVDt5QkFBSyxLQUFLLEdBQUUsSUFDZjtBQUNEO3VCQUNIO0FBRUQ7O2dCQUFHLFFBQU8sZUFBZSxRQUFRLGVBQzdCO3dCQUNIO0FBRkQsbUJBR0k7d0JBQVEsS0FBSyxVQUNiO3FCQUFLLElBQUksYUFBYSxLQUN6QjtBQUVEOztpQkFBSyxVQUFVLE9BQ2Y7bUJBQ0g7Ozs7OENBRUc7Z0JBQUksUUFDSjtnQkFBSSxPQUNKO2lCQUFLLEdBQUcsYUFDUjtpQkFBSyxJQUFJLGlCQUFpQixXQUFVLFVBQVUsR0FDMUM7c0JBQU0sS0FBSyxNQUFLLEdBQUUsS0FDckI7QUFDRDttQkFDSDs7Ozs0Q0FFRztnQkFBSSxNQUFNLEtBQUssVUFDZjtnQkFBSSxRQUFRLEtBQUssVUFDakI7Z0JBQUcsUUFBTyxzREFBUSxVQUNkO3FCQUFJLElBQUksS0FBSyxLQUNUO3lCQUFLLE1BQU0sR0FBRSxJQUNoQjtBQUNEO3VCQUNIO0FBQ0Q7aUJBQUssU0FBUyxPQUNkO2lCQUFLLElBQUksTUFBTSxPQUNmO21CQUNIOzs7O3dDQUVHO2dCQUFJLFFBQVEsS0FBSyxVQUNqQjtpQkFBSyxZQUNMO2lCQUFLLElBQUksWUFDVDttQkFDSDs7OztnREFFRztnQkFBSSxZQUFZLEtBQUssVUFDckI7Z0JBQUksVUFBVSxLQUFLLFdBQ25CO29CQUFRLEtBQ1I7aUJBQUssSUFBSSxVQUFVLElBQ25CO2lCQUFLLFVBQ0w7bUJBQ0g7Ozs7MENBRUc7Z0JBQUksV0FBVyxVQUFVLE9BQ3pCO2dCQUFJLE9BQU8sVUFBVSxVQUNyQjtvQkFDSTtxQkFDSTsyQkFBTyxLQUFLLFdBQ2hCO3FCQUNJOzJCQUFPLEtBQUssa0JBQ2hCO0FBQ0k7MkJBQU8sS0FBSyxZQUV2Qjs7Ozs7dUNBRUc7Z0JBQUksZUFBZSxLQUNuQjtnQkFBSSxjQUNKO2lCQUFJLElBQUksSUFBSSxHQUFHLElBQUUsYUFBYSxRQUFPLEtBQ2pDO29CQUFJLFFBQVEsYUFDWjtvQkFBRyxNQUFNLE9BQU8sSUFDWjs2QkFDQTtBQUNIO0FBQ0o7QUFDRDttQkFDSDs7OztxREFFRztnQkFBSSxlQUFlLEtBQ25CO2dCQUFJLGFBQ0o7aUJBQUksSUFBSSxJQUFJLEdBQUcsSUFBRSxhQUFhLFFBQU8sS0FDakM7b0JBQUksUUFBUSxhQUNaO29CQUFHLE1BQU0sUUFBUSxRQUFRLGFBQVcsQ0FBQyxHQUNqQzsrQkFBVyxLQUNkO0FBQ0o7QUFDRDttQkFDSDs7OzswQ0FFRztnQkFBSSxlQUFlLEtBQ25CO2dCQUFJLGFBQ0o7aUJBQUksSUFBSSxJQUFJLEdBQUcsSUFBRSxhQUFhLFFBQU8sS0FDakM7b0JBQUksUUFBUSxhQUNaO29CQUFHLE1BQU0sUUFBUSxNQUNiOytCQUFXLEtBQ2Q7QUFDSjtBQUNEO21CQUNIOzs7O3VEQUVHO2dCQUFHLGNBQVksV0FDWDtxQkFBSyxXQUNMO0FBQ0g7QUFDRDtnQkFBSSxXQUFXLFVBQVUsT0FDekI7Z0JBQUksT0FBTyxVQUFVLFVBQ3JCO2dCQUFJLGNBQ0o7b0JBQ0k7cUJBQ0k7eUJBQUssV0FBVyxNQUNoQjtBQUNKO3FCQUNJO3lCQUFLLGtCQUFrQixNQUN2QjtBQUNKO0FBQ0k7eUJBQUssWUFBWSxXQUU1Qjs7Ozs7b0RBRUc7Z0JBQUksZUFBZSxLQUNuQjtpQkFBSSxJQUFJLElBQUksR0FBRyxJQUFFLGFBQWEsUUFBTyxLQUNqQztvQkFBSSxRQUFRLGFBQ1o7b0JBQUcsTUFBTSxPQUFPLElBQ1o7aUNBQWEsT0FBTyxHQUNwQjswQkFBTSxPQUFPLFdBQ2I7QUFDQTtBQUNIO0FBQ0o7QUFDSjs7OztrRUFFRztnQkFBSSxlQUFlLEtBQ25CO2lCQUFJLElBQUksSUFBSSxHQUFHLElBQUUsYUFBYSxRQUFPLEtBQ2pDO29CQUFJLFFBQVEsYUFDWjtvQkFBRyxNQUFNLFFBQVEsUUFBUSxhQUFXLENBQUMsR0FDakM7aUNBQWEsT0FBTyxHQUNwQjswQkFBTSxPQUFPLFdBQ2I7QUFDSDtBQUNKO0FBQ0o7Ozs7dURBRUc7Z0JBQUksZUFBZSxLQUNuQjtpQkFBSSxJQUFJLElBQUksR0FBRyxJQUFFLGFBQWEsUUFBTyxLQUNqQztvQkFBSSxRQUFRLGFBQ1o7b0JBQUcsTUFBTSxRQUFRLE1BQ2I7aUNBQWEsT0FBTyxHQUNwQjswQkFBTSxPQUFPLFdBQ2I7QUFDSDtBQUNKO0FBQ0o7Ozs7Z0RBRUc7QUFHQTs7O2dCQUFJLE9BQ0o7aUJBQ0E7Z0JBQUcsYUFDQztxQkFBSyw4QkFBOEIsWUFDL0I7eUJBQUssSUFDUjtBQUZ1QixtQkFHM0I7QUFKRCxtQkFLSTtxQkFBSyxJQUNSO0FBQ0Q7Z0JBQUcsS0FBSyxRQUNKO29CQUFJLGVBQWUsS0FBSyxPQUN4QjtxQkFBSSxJQUFJLElBQUksR0FBRyxJQUFFLGFBQWEsUUFBTyxLQUNqQzt3QkFBSSxRQUFRLGFBQ1o7d0JBQUcsVUFBVSxNQUNUO3FDQUFhLE9BQU8sR0FDdkI7QUFDSjtBQUNKO0FBQ0Q7QUFHSDs7Ozs7O29DQUVHO2lCQUFLLFdBQ0w7Z0JBQUcsS0FBSyxrQkFDSjs2QkFBYSxLQUNoQjtBQUNEO2dCQUFHLEtBQUssVUFBVSxXQUNkO3FCQUFLLFVBQVUsVUFBVSxLQUM1QjtBQUVEOztpQkFBSyxhQUFhLFFBQVEsVUFBVSxPQUNoQztzQkFDSDtBQUNKOzs7O3NDQUVHO2lCQUFLLFdBRUw7O2dCQUFHLEtBQUssVUFBVSxhQUNkO3FCQUFLLFVBQVUsWUFBWSxLQUM5QjtBQUVEOztpQkFBSyxhQUFhLFFBQVEsVUFBVSxPQUNoQztzQkFDSDtBQUNKOzs7OzBDQUVHO2dCQUFJLFFBQ0o7Z0JBQUcsT0FBTyxVQUFVLFlBQ2hCO3VCQUFPLE1BQU0sS0FBSyxNQUFLLEtBQzFCO0FBRkQsbUJBR0k7dUJBQ0g7QUFDSjs7Ozs7OztBQUVMLElBQUk7bUJBQ2UsdUJBQVUsTUFBTSxLQUFLLE9BQ2hDO2VBQU8sSUFBSSxTQUFTLE1BQU0sS0FDN0I7QUFIVztBQUNaOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BSSixJQUFNLFlBQVk7OytCQUVkOzBCQUFZLFlBQVcsVUFBUzs4QkFDNUI7O1lBQUksVUFBVSxZQUNkO2FBQUssS0FDTDthQUFLLFlBQ1I7Ozs7O3NDQUVHO21CQUFPLEtBQ1A7aUJBQUssUUFDTDtpQkFBSyxjQUNMO2lCQUFLLHFCQUNMO3VCQUFXLEtBQUssTUFBTSxLQUFLLE9BQzlCOzs7O2dDQUVHO2dCQUFJLE9BQ0o7aUJBQUssaUJBQWlCLEtBQ3RCO3VCQUFXLEtBQUssUUFBUSxLQUFLLE9BQ2hDOzs7O21EQUVHO2dCQUFJLGFBQWEsSUFBSSxRQUFRLE1BQzdCO2dCQUFJLE9BQ0o7dUJBQVcsU0FBUSxZQUNmO29CQUFHLFdBQVcsU0FBTyxHQUNqQjsrQkFBVyxXQUFXLEtBQUssWUFBWSxTQUMxQztBQUVEOztxQkFBSyxZQUFZLEtBQ2pCO3VCQUNIO0FBQ0Q7dUJBQVcsU0FBUSxZQUNmO29CQUFJLFFBQVMsS0FBSyxZQUFZLFFBQzlCO3FCQUFLLFlBQVksT0FBTyxPQUMzQjtBQUNEO21CQUNIOzs7OzBDQUVHO21CQUFPLEtBQ1Y7Ozs7a0NBRUc7Z0JBQUksY0FBYyxLQUNsQjtnQkFBSSxPQUFPOzt5Q0FFUDtvQkFBSSxVQUFVLFlBQ2Q7b0JBQ0k7d0JBQUcsUUFBUSxhQUNQO2dDQUNBO21DQUFXLFlBQ1A7Z0NBQUksWUFBWSxLQUNoQjtvQ0FDQTtpQ0FBSyxrQkFBa0IsS0FBSyxRQUM1QjtnQ0FBRyxLQUFLLHFCQUFtQixLQUFLLGlCQUM1QjtxQ0FBSyxxQkFBbUIsS0FDM0I7QUFDRDtnQ0FBRyxLQUFLLGtCQUFnQixLQUNwQjt3Q0FBUSxLQUFLLGFBQWEsUUFBUSxPQUFPLDZCQUEyQixLQUFLLGtCQUM1RTtBQUNEO29DQUNIO0FBWEQsMkJBV0UsUUFDTDtBQUNKO0FBaEJELGtCQWdCQyxPQUFPLEdBQ0o7QUFDSDtBQXZCQTtBQUdMOztpQkFBSSxJQUFJLElBQUUsR0FBRSxJQUFFLFlBQVksUUFBTyxLQUFJO0FBcUJwQztBQUNEO2lCQUNBO2dCQUFHLEtBQUssVUFBVSxXQUNkO3FCQUFLLFFBQ0w7cUJBQUssZ0JBQWdCLEtBQUssUUFBUSxLQUNsQztxQkFBSyxjQUFjLEtBQUssTUFBTSxPQUFPLEtBQ3hDO0FBQ0Q7aUJBQ0g7Ozs7Ozs7MEJBR0Q7cUJBQVksTUFBSyxPQUFNOzhCQUNuQjs7YUFBSyxPQUNMO2FBQUssUUFBUSxTQUNiO2FBQUssT0FDTDtZQUFJLE9BQ0o7YUFBSyxTQUFTLFlBQ1Y7aUJBQUssWUFDUjtBQUNEO2FBQUssVUFDTDthQUFLLFNBQVMsQ0FDakI7Ozs7OytCQUVHO2dCQUFHLEtBQUssU0FBTyxHQUFFLEtBQ2pCO2lCQUFLLFlBQ1I7Ozs7aUNBRUc7Z0JBQUcsS0FBSyxXQUFTLEdBQ2I7cUJBQ0g7QUFDRDtpQkFBSyxZQUNSOzs7O3lDQUVHO2lCQUFLLE9BQ0w7Z0JBQUcsUUFBTSxRQUNMO3FCQUFLLGFBQ1I7QUFDRDttQkFDSDs7Ozt1Q0FFRztpQkFBSyxVQUFVLEtBQ2xCOzs7O29DQUVHO2dCQUFHLEtBQUssVUFBUSxHQUNaO3FCQUNIO0FBRUQ7O21CQUFPLEVBQUUsS0FBSyxjQUFjLFFBQVEsS0FBSyxVQUM1Qzs7Ozs7OztBQUdMLElBQU0sZ0JBQWdCLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvRzFCOzs7O0FBQ0E7Ozs7Ozs7O0FBSkE7OztBQUtBLElBQUk7T0FDRyxPQUFPLGFBQ1Y7T0FBRyxPQUFPLGNBQVk7QUFEdEI7QUFHSixPQUFPLGNBQWMsWUFDakI7UUFBSSxRQUNKO0tBQUMsVUFBUyxHQUFHO1lBQUcsMlRBQTJULEtBQUssTUFBSSwwa0RBQTBrRCxLQUFLLEVBQUUsT0FBTyxHQUFFLEtBQUssUUFBYztBQUFqOEQsT0FBbThELFVBQVUsYUFBVyxVQUFVLFVBQVEsT0FDMStEO1dBQ0g7QUFKRDtBQUtBLFNBQVMsY0FBYyxVQUFTLEdBQzVCO1FBQUksSUFBSSxFQUNSO1FBQUksSUFBSSxFQUVSOztlQUFXLEtBQUssRUFBRSxJQUFJLE9BQU8sS0FDN0I7ZUFBVyxLQUFLLEVBQUUsSUFBSSxPQUFPLEtBQ2hDO0FBTkQ7O0FBUUEsSUFBSSxhQUFhLGVBQUssY0FBYyxPQUFNO0FBQzFDLFdBQVcsTUFBTSxTQUFRLFNBQ3BCLE1BQU0sVUFBUyxTQUNmLE1BQU0sWUFBVyxTQUNqQixNQUFNLGNBQWEsU0FDbkIsTUFBTSxPQUFNLEdBQ1osTUFBTSxRQUFPLEdBQ2IsTUFBTSxVQUFTO0FBQ3BCLElBQUksWUFBWSxnQkFBYyxLQUFHO0FBQ2pDLElBQUksYUFBYTs7NkJBR2I7UUFBSSx3QkFBYyxjQUFjLE9BQU0sc0JBQW9CLEdBQ3JELE1BQU0sWUFBVyxZQUNqQixNQUFNLFNBQVEsUUFDZCxNQUFNLFVBQVMsUUFDZixNQUFNLGdCQUFlLE9BQ3JCLE1BQU0sY0FBYSxXQUNuQixNQUFNLGNBQWEsZUFDbkIsTUFBTSxhQUFZLG9CQUNsQixNQUFNLFdBQVcsS0FDakIsS0FBSyxhQUFZLFlBQ2Q7WUFBSSxPQUNKO1lBQUksSUFBSSxLQUFLLFdBQVMsT0FDdEI7WUFBSSxJQUFJLEtBQUssV0FBUyxPQUN0QjthQUFLLElBQ0w7YUFBSyxJQUNMO2FBQUssS0FBSyxLQUFLLFdBQ2Y7YUFBSyxLQUFLLEtBQUssV0FDZjthQUFLLEtBQ0w7YUFBSyxRQUFTLEtBQ2Q7YUFBSyxVQUNMO2FBQUssTUFBTSxhQUFZLGVBQWMsSUFBRyxRQUFPLElBQy9DO2FBQUssMEJBQWdCLGNBQWMsMkJBQXlCLEdBQ3ZELEtBQUssUUFBTyxJQUNaLEtBQUssVUFBUyxZQUNYO2dCQUFJLFFBQVEsS0FDWjtnQkFBSSxPQUFPLEtBQ1g7aUJBQUssS0FBRyxLQUNSO2lCQUFLLEtBQUcsS0FFUjs7aUJBQUssTUFBTSxhQUFZLGdCQUFjLEtBQUssSUFBSSxDQUFDLFdBQVcsTUFBSSxLQUFHLFNBQU8sU0FBTyxLQUFLLElBQUksQ0FBQyxXQUFXLE1BQUksS0FBRyxTQUFPLGVBQWEsUUFBTSxLQUNoSSxNQUFNLFdBQVcsT0FDakIsTUFBTSxVQUFVLFNBQU8sTUFBSSxJQUFFLEdBQzdCLE1BQU0sYUFBWSxVQUFRLE9BQUssS0FBRyxNQUN2QztnQkFBRyxLQUFLLElBQUUsT0FBTyxZQUNiO3FCQUFLLEtBQUssRUFBRSxPQUFLLE1BQ3BCO0FBRkQsbUJBRU0sSUFBRyxLQUFLLElBQUUsR0FDWjtxQkFBSyxLQUFLLE9BQUssTUFDbEI7QUFDRDtnQkFBRyxLQUFLLElBQUUsT0FBTyxhQUNiO3FCQUFLLEtBQUssRUFBRSxPQUFLLE1BQ3BCO0FBRkQsbUJBRU0sSUFBRyxLQUFLLElBQUUsR0FDWjtxQkFBSyxLQUFLLE9BQUssTUFDbEI7QUFDRDtpQkFDQTtnQkFBRyxLQUFLLFdBQVMsR0FDYjtxQkFBSyxVQUNMO3FCQUFLLFNBQU8sT0FDWjtvQkFBRyxLQUFLLFNBQU8sR0FDWDt5QkFBSyxLQUFHLENBQ1g7QUFDRDtvQkFBRyxLQUFLLFNBQU8sR0FDWDt5QkFBSyxLQUNSO0FBQ0o7QUFDSjtBQWpDVyxXQWtDaEI7YUFBSywyQkFBaUIsY0FBYyw2QkFBMkIsR0FDMUQsS0FBSyxRQUFPLEtBQ1osS0FBSyxVQUFTLFlBQ1g7Z0JBQUksT0FBTyxLQUNYO2lCQUFLLE1BQU0sYUFBWSxVQUFRLE9BQUssS0FBRyxNQUMxQztBQUxZLFdBTXBCO0FBN0RRLE9BOERSLEtBQUssZUFBYyxZQUNoQjthQUFLLFNBQ0w7YUFBSyxVQUNSO0FBQ0w7V0FBTyxZQUFZLFlBQ2Y7WUFBSSxJQUFJLEtBQUssV0FBUyxPQUN0QjtZQUFJLElBQUksS0FBSyxXQUFTLE9BQ3RCO1lBQUksUUFBUSxPQUFPLFFBQVMsS0FDNUI7ZUFBTyxJQUNQO2VBQU8sSUFDUDtlQUFPLE1BQU0sYUFBWSxnQkFBYyxLQUFLLElBQUksQ0FBQyxXQUFXLE1BQUksS0FBRyxTQUFPLFNBQU8sS0FBSyxJQUFJLENBQUMsV0FBVyxNQUFJLEtBQUcsU0FBTyxlQUFhLFFBQ3BJO0FBQ0Q7bUJBQUssUUFBUSxlQUFjLE9BQzNCO21CQUFLLFFBQVEsZ0JBQWUsT0FDNUI7ZUFBVyxjQUFjOzs7QUE3RTdCLEtBQUksSUFBSSxJQUFFLEdBQUUsSUFBRSxXQUFVLEtBQUk7QUErRTNCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hIRDs7Ozs7Ozs7QUFFQSxJQUFJLHdCQUFjLGNBQWMsT0FBTyxVQUNsQyxLQUFLLGlCQUFpQixpQkFDdEIsTUFBTSxXQUFXLFFBQ2pCLE1BQU0sWUFBWSxZQUNsQixNQUFNLFdBQVcsT0FDakIsTUFBTSxPQUFPLE9BQ2IsTUFBTSxVQUFVLE9BQ2hCLE1BQU0sVUFBVSxNQUNoQixNQUFNLGNBQWMsUUFDcEIsR0FBRyxhQUFhLFlBQ2I7U0FBSyxNQUFNLFdBQ2Q7QUFYUSxHQVlSLEdBQUcsY0FBYyxZQUNkO1NBQUssTUFBTSxXQUNkO0FBZFE7O0FBZ0JiLElBQUksY0FBYyxDQUFDLFFBQVEsY0FBYztBQUN6QyxJQUFJLFFBQVE7QUFDWixZQUFZLFFBQVEsVUFBVSxNQUMxQjtnQkFBWSxrQkFBa0IsT0FBTyxPQUFPLFlBQVksTUFDbkQsUUFBUSxNQUNSLFlBQVksTUFDWixNQUFNLFNBQVMsU0FDZixNQUFNLFdBQVcsYUFDakIsTUFBTSxVQUFVLFdBQ2hCLE1BQU0sY0FBYyxvQkFDcEIsTUFBTSxjQUFjLFFBQ3BCLEdBQUcsYUFBYSxZQUNiO2FBQUssTUFBTSxjQUFjLG9CQUNwQixNQUFNLFNBQ2Q7QUFYa0IsT0FZbEIsR0FBRyxjQUFjLFlBQ2Q7YUFBSyxNQUFNLGNBQWMsb0JBQ3BCLE1BQU0sU0FDZDtBQUNSO0FBakJEO0FBa0JBLElBQUksbUJBQW1CLFlBQVk7QUFDbkMsaUJBQWlCLE1BQU0sWUFBWTtBQUNuQyxJQUFJLGlDQUFpQyxPQUFPLE9BQU8saUJBQzlDLE1BQU0sWUFBWSxZQUNsQixNQUFNLFNBQVMsU0FDZixNQUFNLFVBQVUsT0FDaEIsTUFBTSxjQUFjLElBQ3BCLE1BQU0sT0FBTyxRQUNiLE1BQU0sUUFBUSxLQUNkLE1BQU0sWUFBWSxVQUNsQixNQUFNLGNBQWMsUUFDcEIsV0FBVyxjQUFjLFVBQVUsR0FDaEM7UUFBSSxVQUFVLEtBQUssV0FDbkI7UUFBSSxTQUNBO2FBQUssTUFBTSxVQUNkO0FBRkQsV0FHSTthQUFLLE1BQU0sVUFDZDtBQUNEO1NBQUssVUFBVSxDQUNsQjtBQWpCZSxHQWtCZixXQUFXLGFBQWEsVUFBVSxHQUMvQjtTQUFLLE1BQU0sVUFBVSxLQUNoQixNQUFNLGFBQWEscUNBQ25CLE1BQU0sVUFDWDtTQUFLLFVBQ1I7QUF2QmU7O0FBeUJwQixPQUFPLGlCQUFpQixTQUFTLFVBQVUsR0FDdkM7a0JBQWMsUUFDakI7QUFGRDs7QUFJQSxpQkFBaUIsR0FBRyxTQUFTLFVBQVUsR0FDbkM7TUFDQTtrQkFBYyxRQUNqQjtBQUhEOztBQUtBLElBQUksZUFBZSxjQUFjLE9BQU8sTUFDbkMsTUFBTSxlQUFlLE9BQ3JCLE1BQU0sVUFBVTs7QUFFckIsSUFBSSxZQUFZLENBQUMsUUFBUSxtQkFBbUI7QUFDNUMsUUFBUTs7QUFFUixVQUFVLFFBQVEsVUFBVSxNQUN4QjtjQUFVLHdCQUF3QixPQUFPLE1BQU0sVUFBVSxNQUNwRCxRQUFRLE1BQ1IsTUFBTSxTQUFTLFNBQ2YsTUFBTSxXQUFXLGFBQ2pCLE1BQU0sVUFBVSxXQUNoQixNQUFNLGNBQWMsb0JBQ3BCLE1BQU0sY0FBYyxRQUNwQixHQUFHLFNBQVMsWUFDVDt1QkFBSyxXQUFXLGVBQ25CO0FBVGdCLE9BVWhCLEdBQUcsYUFBYSxZQUNiO2FBQUssTUFBTSxjQUFjLG9CQUNwQixNQUFNLFNBQ2Q7QUFiZ0IsT0FjaEIsR0FBRyxjQUFjLFlBQ2Q7YUFBSyxNQUFNLGNBQWMsb0JBQ3BCLE1BQU0sU0FDZDtBQUNSO0FBbkJEOzs7Ozs7Ozs7Ozs7Ozs7O0FDM0VBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBQ0EsSUFBTSx1QixLQVhOOzs7QUFHQTtBQUNBO0FBQ0E7O0FBT0EsT0FBTyxpQkFBaUIsVUFBUyxZQUM3QjtRQUFHLE9BQU8sVUFDTjtxQkFBYSxPQUNoQjtBQUNEO1dBQU8sc0JBQXNCLFlBQ3pCO3VCQUFLLFdBQVcsZ0JBQWUsRUFBQyxHQUFFLE9BQU8sWUFBVyxHQUFFLE9BQ3pEO0FBRmlCLE9BR3JCO0FBUEQ7QUFRSSxPQUFPLE9BQU8sSUFBSSxlQUFLLGNBQWMsT0FBTyxXQUFXLFNBQVMsZUFBZTtBQUMvRSxLQUFLLE1BQU0sWUFBWSxRQUNsQixNQUFNLFVBQVU7QUFDckIsS0FBSztBQUNMLElBQUksZ0JBQWdCLEtBQUssT0FBTyxPQUFPO0FBQ3ZDLGNBQWM7QUFDZCxjQUFjO0FBQ2xCLGVBQUssV0FBVyxlQUFjO0FBQzlCLGVBQUssUUFBUSxlQUFjLFlBQ25CO1FBQUksY0FBYyxlQUFLLFNBQ3ZCO2tCQUFjLE9BQU8sZ0JBQ3JCO1lBQ0k7YUFDSTswQkFBYyxxQkFDZDtBQUNKO2FBQ0k7MEJBQWMsc0JBQ2Q7QUFFWDs7QUFYTDs7QUFhSSxJQUFJLGVBQWUsT0FBTyxLQUFLLFdBQzFCLE1BQU0sWUFBWSxTQUNsQixNQUFNLFVBQVUsT0FDaEIsTUFBTSxTQUFTLEtBQ2YsTUFBTSxnQkFBZ0IsT0FDdEIsTUFBTSxTQUFTLGFBQ2YsUUFBUSxJQUFJLFFBQ1osV0FBVyxTQUFTLFlBQ2pCO1NBQUssUUFBUSxrQ0FBa0MsR0FBRyxnQkFBZ0IsY0FBYyxHQUFHLGNBQWMsZ0JBQWdCLEdBQUcscUJBQXFCLGVBQWUsR0FBRyxrQkFDOUo7QUFUUztBQVVkLElBQUksUUFBUSxlQUFLLGNBQWMsU0FDMUIsS0FBSyxRQUFRLEdBQ2IsS0FBSyxVQUFVLFFBQVEsUUFBUSxVQUMvQixTIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IEN1YllfQ29yZSBmcm9tICcuL0N1YllfQ29yZSc7XHJcbmltcG9ydCBDdWJZX0RPTSBmcm9tICcuL0N1YllfRE9NJztcclxuaW1wb3J0IEN1YllfUm91dGluZSBmcm9tICcuL0N1YllfUm91dGluZSc7XHJcbmNvbnN0IEVNUFRZX0ZVTkNUSU9OID0gKCk9Pnt9O1xyXG5cclxudmFyIEN1YlkgPSB7XHJcbiAgICAvL0NvcmVcclxuICAgIGdldFZhbHVlOiBDdWJZX0NvcmUuZ2V0VmFsdWUuYmluZChDdWJZX0NvcmUpLFxyXG4gICAgZ2V0QnJvd3NlcjogQ3ViWV9Db3JlLmdldEJyb3dzZXIuYmluZChDdWJZX0NvcmUpLFxyXG4gICAgc3RvcmVEYXRhQXJyYXk6IEN1YllfQ29yZS5zdG9yZURhdGFBcnJheS5iaW5kKEN1YllfQ29yZSksXHJcbiAgICBzdG9yZVZhbHVlOiBDdWJZX0NvcmUuc3RvcmVWYWx1ZS5iaW5kKEN1YllfQ29yZSksXHJcbiAgICBjb25uZWN0OiBDdWJZX0NvcmUuY29ubmVjdC5iaW5kKEN1YllfQ29yZSksXHJcbiAgICByZWFjdDogQ3ViWV9Db3JlLnJlYWN0LmJpbmQoQ3ViWV9Db3JlKSxcclxuICAgIGRlYnVnOiBDdWJZX0NvcmUuZGVidWcuYmluZChDdWJZX0NvcmUpLFxyXG5cclxuICAgIC8vRE9NXHJcbiAgICBjcmVhdGVFbGVtZW50OiBDdWJZX0RPTS5jcmVhdGVFbGVtZW50LFxyXG5cclxuICAgIC8vUm91dGluZVxyXG4gICAgY3JlYXRlUm91dGluZTpDdWJZX1JvdXRpbmUuY3JlYXRlUm91dGluZS5iaW5kKEN1YllfUm91dGluZSksXHJcbiAgICBnZXRDdXJyZW50Q3ljbGU6Q3ViWV9Sb3V0aW5lLmdldEN1cnJlbnRDeWNsZS5iaW5kKEN1YllfUm91dGluZSksXHJcbiAgICByb3V0aW5lOkN1YllfUm91dGluZS5yb3V0aW5lLmJpbmQoQ3ViWV9Sb3V0aW5lKSxcclxuXHJcbiAgICAvL090aGVyXHJcbiAgICB2ZXJzaW9uOiAnMC41Yi5lNicsXHJcbiAgICBkZWJ1Z0luZm86IFtDdWJZX0NvcmUsQ3ViWV9Sb3V0aW5lXVxyXG59O1xyXG5cclxud2luZG93LkN1YlkgPSBDdWJZO1xyXG5leHBvcnQgZGVmYXVsdCBDdWJZO1xyXG4iLCJjb25zdCBFTVBUWV9GVU5DVElPTiA9ICgpPT57fTtcclxuY2xhc3MgQ3ViWV9Db3Jle1xyXG4gICAgY29uc3RydWN0b3IoX3Byb3BzKXtcclxuICAgICAgICBsZXQgcHJvcHMgPSBwcm9wcyB8fCB7fTtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5pbml0KHByb3BzKTtcclxuICAgIH1cclxuICAgIGluaXQoX3Byb3BzKXtcclxuICAgICAgICBsZXQgcHJvcHMgPSBfcHJvcHMgfHwge307XHJcbiAgICAgICAgdGhpcy5kZWJ1Z01vZGUgPSBwcm9wcy5kZWJ1ZyB8fCBmYWxzZTtcclxuICAgICAgICB0aGlzLmRhdGFNYXAgPSB7fTtcclxuICAgICAgICB0aGlzLmFjdGlvbk1hcCA9IHt9O1xyXG4gICAgICAgIHRoaXMuYnJvd3NlciA9IHRoaXMuZ2V0QnJvd3NlcigpO1xyXG4gICAgICAgIHdpbmRvdy5jYyA9IHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QnJvd3Nlcigpe1xyXG4gICAgICAgIGxldCBpc0lFID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IGlzQ2hyb21lID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IGlzT3BlcmEgPSBmYWxzZTtcclxuICAgICAgICBpZigoISF3aW5kb3cub3ByICYmICEhb3ByLmFkZG9ucykgfHwgISF3aW5kb3cub3BlcmEgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCcgT1BSLycpID49IDApe1xyXG4gICAgICAgICAgICBpc09wZXJhID0gdHJ1ZTtcclxuICAgICAgICAgICAgcmV0dXJuICdvcGVyYSc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHR5cGVvZiBJbnN0YWxsVHJpZ2dlciAhPT0gJ3VuZGVmaW5lZCcpe1xyXG4gICAgICAgICAgICByZXR1cm4gJ2ZpcmVmb3gnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZigvY29uc3RydWN0b3IvaS50ZXN0KHdpbmRvdy5IVE1MRWxlbWVudCkgfHwgKGZ1bmN0aW9uIChwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcC50b1N0cmluZygpID09PSBcIltvYmplY3QgU2FmYXJpUmVtb3RlTm90aWZpY2F0aW9uXVwiO1xyXG4gICAgICAgICAgICB9KSghd2luZG93WydzYWZhcmknXSB8fCBzYWZhcmkucHVzaE5vdGlmaWNhdGlvbikpe1xyXG4gICAgICAgICAgICByZXR1cm4gJ3NhZmFyaSc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGZhbHNlIHx8ICEhZG9jdW1lbnQuZG9jdW1lbnRNb2RlKXtcclxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBvdXRwdXQgPSBhcmd1bWVudHNbMF07XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBhcmd1bWVudHNbaV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9iaiA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0W2tleV0gPSBvYmpba2V5XTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb3V0cHV0O1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBpc0lFID10cnVlO1xyXG4gICAgICAgICAgICByZXR1cm4gJ2llJztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoIWlzSUUgJiYgISF3aW5kb3cuU3R5bGVNZWRpYSl7XHJcbiAgICAgICAgICAgIHJldHVybiAnZWRnZSc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCEhd2luZG93LmNocm9tZSAmJiAhIXdpbmRvdy5jaHJvbWUud2Vic3RvcmUpe1xyXG4gICAgICAgICAgICBpc0Nocm9tZSA9IHRydWVcclxuICAgICAgICAgICAgcmV0dXJuICdjaHJvbWUnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZigoaXNDaHJvbWUgfHwgaXNPcGVyYSkgJiYgISF3aW5kb3cuQ1NTKXtcclxuICAgICAgICAgICAgcmV0dXJuICdibGluayc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0b3JlRGF0YUFycmF5KF9hcnJheSwgX2lkS2V5LCBfaXRlbVByb2Nlc3NvciwgX29wdGlvbnMsIF9jYWxsYmFjaykge1xyXG4gICAgICAgIHZhciBvcHRpb25zID0gX29wdGlvbnMgfHwge307XHJcbiAgICAgICAgdmFyIGlkS2V5ID0gX2lkS2V5IHx8ICdpZCc7XHJcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gX2NhbGxiYWNrIHx8IEVNUFRZX0ZVTkNUSU9OO1xyXG4gICAgICAgIHZhciBhcnJheSA9IF9hcnJheSB8fCBbXTtcclxuICAgICAgICB2YXIgaXRlbUxpc3QgPSBbXTtcclxuICAgICAgICB2YXIgaXRlbVByb2Nlc3NvciA9IF9pdGVtUHJvY2Vzc29yIHx8IEVNUFRZX0ZVTkNUSU9OO1xyXG5cclxuICAgICAgICBhcnJheS5mb3JFYWNoKGZ1bmN0aW9uIChfaXRlbSkge1xyXG4gICAgICAgICAgICB2YXIga2V5ID0gX2l0ZW1baWRLZXldO1xyXG4gICAgICAgICAgICBpZiAoa2V5ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIGl0ZW0gPSBzZWxmLnN0b3JlVmFsdWUoa2V5LCBfaXRlbSwgX29wdGlvbnMpO1xyXG5cclxuICAgICAgICAgICAgaXRlbVByb2Nlc3NvcihpdGVtKTtcclxuICAgICAgICAgICAgaXRlbUxpc3QucHVzaChpdGVtKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY2FsbGJhY2soX2FycmF5LCBpdGVtTGlzdCk7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW1MaXN0O1xyXG4gICAgfTtcclxuXHJcbiAgICBzdG9yZVZhbHVlKF9rZXksIF92YWx1ZSwgX29wdGlvbnMsIF9jYWxsYmFjaykge1xyXG4gICAgICAgIHZhciBvcHRpb25zID0gX29wdGlvbnMgfHwge307XHJcbiAgICAgICAgdmFyIHN0b3JlID0gdGhpcy5kYXRhTWFwO1xyXG4gICAgICAgIHZhciBrZXkgPSBfa2V5O1xyXG4gICAgICAgIHZhciBjYWxsYmFjayA9IF9jYWxsYmFjayB8fCBFTVBUWV9GVU5DVElPTjtcclxuICAgICAgICB2YXIgbmV3VmFsdWUgPSBfdmFsdWU7XHJcbiAgICAgICAgdmFyIGl0ZW0gPSBzdG9yZVtrZXldO1xyXG4gICAgICAgIGlmKGl0ZW0hPT11bmRlZmluZWQgJiYgaXRlbSA9PT0gT2JqZWN0KGl0ZW0pICYmIG9wdGlvbnMub3ZlcndyaXRlIT09dHJ1ZSkge1xyXG4gICAgICAgICAgICBpdGVtID0gT2JqZWN0LmFzc2lnbihpdGVtLCBuZXdWYWx1ZSk7XHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICBpdGVtID0gbmV3VmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZGF0YU1hcFtrZXldID0gaXRlbTtcclxuXHJcbiAgICAgICAgY2FsbGJhY2soaXRlbSk7XHJcbiAgICAgICAgdGhpcy5yZWFjdChrZXkpO1xyXG4gICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgfTtcclxuICAgIGdldFZhbHVlKF9rZXkpIHtcclxuICAgICAgICB2YXIga2V5ID0gX2tleSB8fCAnJztcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhTWFwW2tleV07XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbm5lY3QoX2tleSxfYWN0aW9uKSB7XHJcbiAgICAgICAgaWYoX2tleT09PXVuZGVmaW5lZCB8fCBfYWN0aW9uPT09dW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGFjdGlvbk1hcCA9IHRoaXMuYWN0aW9uTWFwO1xyXG4gICAgICAgIHZhciBhY3Rpb25MaXN0ID0gYWN0aW9uTWFwW19rZXldIHx8IFtdO1xyXG4gICAgICAgIGFjdGlvbkxpc3QucHVzaChfYWN0aW9uKTtcclxuICAgICAgICBhY3Rpb25NYXBbX2tleV0gPSBhY3Rpb25MaXN0O1xyXG4gICAgfTtcclxuICAgIHJlYWN0KF9rZXkpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgaWYoX2tleT09PXVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBhY3Rpb25NYXAgPSB0aGlzLmFjdGlvbk1hcDtcclxuICAgICAgICB2YXIgYWN0aW9uTGlzdCA9IGFjdGlvbk1hcFtfa2V5XSB8fCBbXTtcclxuICAgICAgICBhY3Rpb25MaXN0LmZvckVhY2goKGFjdGlvbik9PiB7XHJcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHNlbGYuZ2V0VmFsdWUoX2tleSk7XHJcbiAgICAgICAgICAgIGFjdGlvbih2YWx1ZSk7XHJcbiAgICAgICAgfSlcclxuICAgIH07XHJcbiAgICBkZWJ1ZyhzdHIpIHtcclxuICAgICAgICBpZih0aGlzLmRlYnVnTW9kZSl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdERUJVRzogJyArIHN0cik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5jb25zdCBfQ3ViWV9Db3JlID0gbmV3IEN1YllfQ29yZSgpO1xyXG5leHBvcnQgZGVmYXVsdCBfQ3ViWV9Db3JlO1xyXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBBbnhpbiBZYW5nIG9uIDUvMjYvMjAxOC5cclxuICovXHJcbmNsYXNzIEN1YllfRE9NIHtcclxuICAgIGNvbnN0cnVjdG9yKF90YWcsX2lkLF9yb290KSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IHRoaXMucmVhZFZhbHVlKF9pZCl8fCAnc2VsZic7XHJcbiAgICAgICAgdGhpcy50YWcgPSB0aGlzLnJlYWRWYWx1ZShfdGFnKSB8fCAnZGl2JztcclxuICAgICAgICB0aGlzLmRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGhpcy50YWcpO1xyXG4gICAgICAgIHRoaXMuZG9tLnNldEF0dHJpYnV0ZSgnaWQnLHRoaXMuaWQpO1xyXG4gICAgICAgIHRoaXMuY2hpbGRyZW5MaXN0ID0gW107XHJcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGUgPSB7fTtcclxuICAgICAgICB0aGlzLmRvbVN0eWxlID0ge307XHJcbiAgICAgICAgdGhpcy51cGRhdGVycyA9IHt9O1xyXG4gICAgICAgIHRoaXMucGFyZW50O1xyXG4gICAgICAgIHRoaXMuY2xhc3NlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMucm9vdChfcm9vdCk7XHJcblxyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLnVwZGF0ZXIgPSBmdW5jdGlvbiAobmFtZSkge1xyXG4gICAgICAgICAgICBsZXQgdXBkYXRlciA9dGhpcy51cGRhdGVyc1tuYW1lXTtcclxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmKHVwZGF0ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVyLmNhbGwoc2VsZiwgc2VsZi5kYXRhLCBhcmd1bWVudHMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIHNldFVwZGF0ZXIobmFtZSx1cGRhdGVyKXtcclxuICAgICAgICB0aGlzLnVwZGF0ZXJzW25hbWVdID0gdXBkYXRlcjtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIGJpbmQoZGF0YSl7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIHJvb3QoX3Jvb3Qpe1xyXG4gICAgICAgIGlmKF9yb290KXtcclxuICAgICAgICAgICAgX3Jvb3QuYXBwZW5kQ2hpbGQodGhpcy5kb20pO1xyXG4gICAgICAgICAgICB0aGlzLmlzUm9vdCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZhdGVkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgYXBwZW5kKF90YWcsX2lkKXtcclxuICAgICAgICBsZXQgdGFnID0gdGhpcy5yZWFkVmFsdWUoX3RhZyk7XHJcbiAgICAgICAgbGV0IGlkID0gdGhpcy5yZWFkVmFsdWUoX2lkKTtcclxuICAgICAgICBsZXQgZWxlbWVudCA9IEN1YlkuY3JlYXRlRWxlbWVudCh0YWcsaWQpO1xyXG4gICAgICAgIHRoaXMuYXBwZW5kRWxlbWVudChlbGVtZW50KTtcclxuICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgIH1cclxuICAgIGFwcGVuZEVsZW1lbnQoQ3ViWV9ET00pe1xyXG4gICAgICAgIGxldCBlbGVtZW50ID0gdGhpcy5yZWFkVmFsdWUoQ3ViWV9ET00pO1xyXG4gICAgICAgIGVsZW1lbnQucGFyZW50ID0gdGhpcztcclxuXHJcbiAgICAgICAgdGhpcy5jaGlsZHJlbkxpc3QucHVzaChlbGVtZW50KTtcclxuICAgICAgICB0aGlzLmRvbS5hcHBlbmRDaGlsZChlbGVtZW50LmRvbSk7XHJcbiAgICAgICAgaWYodGhpcy5pc0FjdGl2ZSB8fCB0aGlzLmlzUm9vdCkge1xyXG4gICAgICAgICAgICBlbGVtZW50LmFjdGl2YXRlZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgIH1cclxuICAgIGF0dHIoa2V5LF92YWx1ZSl7XHJcbiAgICAgICAgbGV0IHZhbHVlO1xyXG5cclxuICAgICAgICBpZih0eXBlb2Yga2V5ID09PSAnb2JqZWN0Jyl7XHJcbiAgICAgICAgICAgIGZvcih2YXIgayBpbiBrZXkpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdHRyKGssa2V5W2tdKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoa2V5ID09PSdhY3RpdmF0ZWQnIHx8IGtleSA9PT0gJ2RlYWN0aXZhdGVkJyl7XHJcbiAgICAgICAgICAgIHZhbHVlID0gX3ZhbHVlO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMucmVhZFZhbHVlKF92YWx1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuZG9tLnNldEF0dHJpYnV0ZShrZXksdmFsdWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgb24oZXZlbnROYW1lLF92YWx1ZSl7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gX3ZhbHVlO1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLm9uW2V2ZW50TmFtZV0gPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLmRvbS5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSxmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICB2YWx1ZS5jYWxsKHNlbGYsZSxzZWxmLmRhdGEsKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgc3R5bGUoX2tleSxfdmFsdWUpe1xyXG4gICAgICAgIGxldCBrZXkgPSB0aGlzLnJlYWRWYWx1ZShfa2V5KTtcclxuICAgICAgICBsZXQgdmFsdWUgPSB0aGlzLnJlYWRWYWx1ZShfdmFsdWUpO1xyXG4gICAgICAgIGlmKHR5cGVvZiBrZXkgPT09ICdvYmplY3QnKXtcclxuICAgICAgICAgICAgZm9yKHZhciBrIGluIGtleSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0eWxlKGssa2V5W2tdKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRvbVN0eWxlW2tleV0gPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLmRvbS5zdHlsZVtrZXldID0gdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBjb250ZW50KF92YWx1ZSl7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gdGhpcy5yZWFkVmFsdWUoX3ZhbHVlKTtcclxuICAgICAgICB0aGlzLmlubmVySFRNTCA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuZG9tLmlubmVySFRNTCA9IHZhbHVlO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgYXBwZW5kQ2xhc3MoX2NsYXNzTmFtZSl7XHJcbiAgICAgICAgbGV0IGNsYXNzTmFtZSA9IHRoaXMucmVhZFZhbHVlKF9jbGFzc05hbWUpO1xyXG4gICAgICAgIGxldCBjbGFzc2VzID0gdGhpcy5jbGFzc2VzIHx8IFtdO1xyXG4gICAgICAgIGNsYXNzZXMucHVzaChjbGFzc05hbWUpO1xyXG4gICAgICAgIHRoaXMuZG9tLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcclxuICAgICAgICB0aGlzLmNsYXNzZXMgPSBjbGFzc2VzO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgc2VsZWN0KF9zZWxlY3Rvcil7XHJcbiAgICAgICAgbGV0IHNlbGVjdG9yID0gX3NlbGVjdG9yLmNoYXJBdCgwKTtcclxuICAgICAgICBsZXQgbmFtZSA9IF9zZWxlY3Rvci5zdWJzdHJpbmcoMSk7XHJcbiAgICAgICAgc3dpdGNoIChzZWxlY3Rvcil7XHJcbiAgICAgICAgICAgIGNhc2UgJyMnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0QnlJZChuYW1lKTtcclxuICAgICAgICAgICAgY2FzZSAnLic6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RCeUNsYXNzTmFtZShuYW1lKTtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNlbGVjdEJ5VGFnKF9zZWxlY3Rvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2VsZWN0QnlJZChpZCl7XHJcbiAgICAgICAgbGV0IGNoaWxkcmVuTGlzdCA9IHRoaXMuY2hpbGRyZW5MaXN0O1xyXG4gICAgICAgIGxldCB0YXJnZXQ7XHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaTxjaGlsZHJlbkxpc3QubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuTGlzdFtpXTtcclxuICAgICAgICAgICAgaWYoY2hpbGQuaWQgPT09IGlkKXtcclxuICAgICAgICAgICAgICAgIHRhcmdldCA9IGNoaWxkO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRhcmdldDtcclxuICAgIH1cclxuICAgIHNlbGVjdEJ5Q2xhc3NOYW1lKGNsYXNzTmFtZSl7XHJcbiAgICAgICAgbGV0IGNoaWxkcmVuTGlzdCA9IHRoaXMuY2hpbGRyZW5MaXN0O1xyXG4gICAgICAgIGxldCB0YXJnZXRMaXN0ID0gW107XHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaTxjaGlsZHJlbkxpc3QubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuTGlzdFtpXTtcclxuICAgICAgICAgICAgaWYoY2hpbGQuY2xhc3Nlcy5pbmRleE9mKGNsYXNzTmFtZSk+LTEpe1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0TGlzdC5wdXNoKGNoaWxkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGFyZ2V0TGlzdDtcclxuICAgIH1cclxuICAgIHNlbGVjdEJ5VGFnKF90YWcpe1xyXG4gICAgICAgIGxldCBjaGlsZHJlbkxpc3QgPSB0aGlzLmNoaWxkcmVuTGlzdDtcclxuICAgICAgICBsZXQgdGFyZ2V0TGlzdCA9IFtdO1xyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGk8Y2hpbGRyZW5MaXN0Lmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICBsZXQgY2hpbGQgPSBjaGlsZHJlbkxpc3RbaV07XHJcbiAgICAgICAgICAgIGlmKGNoaWxkLnRhZyA9PT0gX3RhZyl7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRMaXN0LnB1c2goY2hpbGQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0YXJnZXRMaXN0O1xyXG4gICAgfVxyXG4gICAgcmVtb3ZlKF9zZWxlY3RvcixfdHJhbnNpdGlvbil7XHJcbiAgICAgICAgaWYoX3NlbGVjdG9yPT09dW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmVTZWxmKF90cmFuc2l0aW9uKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgc2VsZWN0b3IgPSBfc2VsZWN0b3IuY2hhckF0KDApO1xyXG4gICAgICAgIGxldCBuYW1lID0gX3NlbGVjdG9yLnN1YnN0cmluZygxKTtcclxuICAgICAgICBsZXQgdGFyZ2V0O1xyXG4gICAgICAgIHN3aXRjaCAoc2VsZWN0b3Ipe1xyXG4gICAgICAgICAgICBjYXNlICcjJzpcclxuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlQnlJZChuYW1lLF90cmFuc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICcuJzpcclxuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlQnlDbGFzc05hbWUobmFtZSxfdHJhbnNpdGlvbik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlQnlUYWcoX3NlbGVjdG9yLF90cmFuc2l0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZW1vdmVCeUlkKGlkLF90cmFuc2l0aW9uKXtcclxuICAgICAgICBsZXQgY2hpbGRyZW5MaXN0ID0gdGhpcy5jaGlsZHJlbkxpc3Q7XHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaTxjaGlsZHJlbkxpc3QubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuTGlzdFtpXTtcclxuICAgICAgICAgICAgaWYoY2hpbGQuaWQgPT09IGlkKXtcclxuICAgICAgICAgICAgICAgIGNoaWxkcmVuTGlzdC5zcGxpY2UoaSwxKTtcclxuICAgICAgICAgICAgICAgIGNoaWxkLnJlbW92ZSh1bmRlZmluZWQsX3RyYW5zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgaS0tO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZW1vdmVCeUNsYXNzTmFtZShjbGFzc05hbWUsX3RyYW5zaXRpb24pe1xyXG4gICAgICAgIGxldCBjaGlsZHJlbkxpc3QgPSB0aGlzLmNoaWxkcmVuTGlzdDtcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpPGNoaWxkcmVuTGlzdC5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5MaXN0W2ldO1xyXG4gICAgICAgICAgICBpZihjaGlsZC5jbGFzc2VzLmluZGV4T2YoY2xhc3NOYW1lKT4tMSl7XHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlbkxpc3Quc3BsaWNlKGksMSk7XHJcbiAgICAgICAgICAgICAgICBjaGlsZC5yZW1vdmUodW5kZWZpbmVkLF90cmFuc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgIGktLTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlbW92ZUJ5VGFnKF90YWcsX3RyYW5zaXRpb24pe1xyXG4gICAgICAgIGxldCBjaGlsZHJlbkxpc3QgPSB0aGlzLmNoaWxkcmVuTGlzdDtcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpPGNoaWxkcmVuTGlzdC5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5MaXN0W2ldO1xyXG4gICAgICAgICAgICBpZihjaGlsZC50YWcgPT09IF90YWcpe1xyXG4gICAgICAgICAgICAgICAgY2hpbGRyZW5MaXN0LnNwbGljZShpLDEpO1xyXG4gICAgICAgICAgICAgICAgY2hpbGQucmVtb3ZlKHVuZGVmaW5lZCxfdHJhbnNpdGlvbik7XHJcbiAgICAgICAgICAgICAgICBpLS07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZW1vdmVTZWxmKF90cmFuc2l0aW9uKXtcclxuICAgICAgICAvKnRoaXMuY2hpbGRyZW5MaXN0LmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgICAgICAgIGNoaWxkLnJlbW92ZSgpO1xyXG4gICAgICAgIH0pOyovXHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuZGVhY3RpdmF0ZWQoKTtcclxuICAgICAgICBpZihfdHJhbnNpdGlvbikge1xyXG4gICAgICAgICAgICB0aGlzLmRlYWN0aXZhdGVkVGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYuZG9tLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB9LF90cmFuc2l0aW9uKVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBzZWxmLmRvbS5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5wYXJlbnQpe1xyXG4gICAgICAgICAgICBsZXQgY2hpbGRyZW5MaXN0ID0gdGhpcy5wYXJlbnQuY2hpbGRyZW5MaXN0O1xyXG4gICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpPGNoaWxkcmVuTGlzdC5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuTGlzdFtpXTtcclxuICAgICAgICAgICAgICAgIGlmKGNoaWxkID09PSB0aGlzKXtcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbkxpc3Quc3BsaWNlKGksMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLypmb3IodmFyIGtleSBpbiB0aGlzKXtcclxuICAgICAgICAgICAgZGVsZXRlIHRoaXNba2V5XVxyXG4gICAgICAgIH0qL1xyXG4gICAgfVxyXG4gICAgYWN0aXZhdGVkKCl7XHJcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgaWYodGhpcy5kZWFjdGl2YXRlZFRpbWVyKXtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZGVhY3RpdmF0ZWRUaW1lcilcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5hdHRyaWJ1dGUuYWN0aXZhdGVkKXtcclxuICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGUuYWN0aXZhdGVkLmNhbGwodGhpcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNoaWxkcmVuTGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICAgICAgICBjaGlsZC5hY3RpdmF0ZWQoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGRlYWN0aXZhdGVkKCl7XHJcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICBpZih0aGlzLmF0dHJpYnV0ZS5kZWFjdGl2YXRlZCl7XHJcbiAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlLmRlYWN0aXZhdGVkLmNhbGwodGhpcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNoaWxkcmVuTGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICAgICAgICBjaGlsZC5kZWFjdGl2YXRlZCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmVhZFZhbHVlKF92YWx1ZSl7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gX3ZhbHVlO1xyXG4gICAgICAgIGlmKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiKXtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLmNhbGwodGhpcyx0aGlzLmRhdGEpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbnZhciBfQ3ViWV9ET00gPSB7XHJcbiAgICBjcmVhdGVFbGVtZW50OiBmdW5jdGlvbiAoX3RhZywgX2lkLCBfcm9vdCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgQ3ViWV9ET00oX3RhZywgX2lkLCBfcm9vdClcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBfQ3ViWV9ET00iLCJjb25zdCBNQVhfQ1lDTEUgPSAxMDA7XHJcbmNsYXNzIEN1YllfUm91dGluZXtcclxuICAgIGNvbnN0cnVjdG9yKF90aWNrU3BlZWQsX29wdGlvbnMpe1xyXG4gICAgICAgIGxldCBvcHRpb25zID0gX29wdGlvbnMgfHwge307XHJcbiAgICAgICAgdGhpcy5pbml0KG9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMuTUFYX0NZQ0xFID0gTUFYX0NZQ0xFO1xyXG4gICAgfVxyXG4gICAgaW5pdChvcHRpb25zKXtcclxuICAgICAgICB3aW5kb3cuY3IgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuY3ljbGUgPSAwO1xyXG4gICAgICAgIHRoaXMucm91dGluZUxpc3QgPSBbXTtcclxuICAgICAgICB0aGlzLmxvbmdlc3RSb3V0aW5lVGltZSA9MDtcclxuICAgICAgICBzZXRUaW1lb3V0KHRoaXMuc3RhcnQuYmluZCh0aGlzKSwwKTtcclxuICAgIH07XHJcbiAgICBzdGFydCgpe1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLmN5Y2xlU3RhcnRUaW1lID0gRGF0ZS5ub3coKTtcclxuICAgICAgICBzZXRUaW1lb3V0KHNlbGYucm91dGluZS5iaW5kKHRoaXMpLDApO1xyXG4gICAgfVxyXG4gICAgY3JlYXRlUm91dGluZShuYW1lLGdyb3VwKSB7XHJcbiAgICAgICAgbGV0IG5ld1JvdXRpbmUgPSBuZXcgUm91dGluZShuYW1lLCBncm91cCk7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIG5ld1JvdXRpbmUuaW5zZXJ0PSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmKG5ld1JvdXRpbmUuZnJlcSE9PTEpIHtcclxuICAgICAgICAgICAgICAgIG5ld1JvdXRpbmUuY291bnRlciArPSBzZWxmLnJvdXRpbmVMaXN0Lmxlbmd0aCArIDE7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNlbGYucm91dGluZUxpc3QucHVzaChuZXdSb3V0aW5lKTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ld1JvdXRpbmU7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBuZXdSb3V0aW5lLnJlbW92ZT0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBsZXQgaW5kZXggPSAgc2VsZi5yb3V0aW5lTGlzdC5pbmRleE9mKG5ld1JvdXRpbmUpO1xyXG4gICAgICAgICAgICBzZWxmLnJvdXRpbmVMaXN0LnNwbGljZShpbmRleCwxKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBuZXdSb3V0aW5lO1xyXG4gICAgfVxyXG4gICAgZ2V0Q3VycmVudEN5Y2xlKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3ljbGU7XHJcbiAgICB9XHJcbiAgICByb3V0aW5lKCl7XHJcbiAgICAgICAgbGV0IHJvdXRpbmVMaXN0ID0gdGhpcy5yb3V0aW5lTGlzdDtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgZm9yKHZhciBpPTA7aTxyb3V0aW5lTGlzdC5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgbGV0IHJvdXRpbmUgPSByb3V0aW5lTGlzdFtpXTtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGlmKHJvdXRpbmUuY2hlY2tMb2NrKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICByb3V0aW5lLmxvY2soKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzdGFydFRpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0aW5lLmFjdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmxhc3RSb3V0aW5lVGltZSA9IERhdGUubm93KCkgLSBzdGFydFRpbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHNlbGYubG9uZ2VzdFJvdXRpbmVUaW1lPHNlbGYubGFzdFJvdXRpbmVUaW1lKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYubG9uZ2VzdFJvdXRpbmVUaW1lPXNlbGYubGFzdFJvdXRpbmVUaW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHNlbGYubGFzdFJvdXRpbmVUaW1lPjIwMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ1JvdXRpbmU6JyArIHJvdXRpbmUubmFtZSArICcgdG9vayB0b28gbG9uZyB0byBydW4uIFsnK3NlbGYubGFzdFJvdXRpbmVUaW1lKydtc10nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRpbmUudW5sb2NrKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxyb3V0aW5lLmZyZXEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9Y2F0Y2ggKGUpe1xyXG4gICAgICAgICAgICAgICAgLy9ERUNJREUgSUYgUkVNT1ZFIFJPVVRJTkUgTEFURVI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jeWNsZSsrO1xyXG4gICAgICAgIGlmKHRoaXMuY3ljbGUgPT09IE1BWF9DWUNMRSl7XHJcbiAgICAgICAgICAgIHRoaXMuY3ljbGUgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RDeWNsZVRpbWUgPSBEYXRlLm5vdygpIC0gdGhpcy5jeWNsZVN0YXJ0VGltZTtcclxuICAgICAgICAgICAgdGhpcy5jeWNsZVBlclNlYyA9IE1hdGguZmxvb3IoMTAwMCAvIHRoaXMubGFzdEN5Y2xlVGltZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc3RhcnQoKTtcclxuICAgIH1cclxufVxyXG5jbGFzcyBSb3V0aW5le1xyXG4gICAgY29uc3RydWN0b3IobmFtZSxncm91cCl7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLmdyb3VwID0gZ3JvdXAgfHwgJ2NvbW1vbic7XHJcbiAgICAgICAgdGhpcy5mcmVxID0gMTtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5hY3Rpb24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHNlbGYuaXNSdW5uaW5nID0gdHJ1ZTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuY291bnRlcj0wO1xyXG4gICAgICAgIHRoaXMucmVwZWF0ID0gLTE7XHJcbiAgICB9XHJcbiAgICBsb2NrKCl7XHJcbiAgICAgICAgaWYodGhpcy5yZXBlYXQ+MCl0aGlzLnJlcGVhdC0tO1xyXG4gICAgICAgIHRoaXMuaXNSdW5uaW5nID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIHVubG9jaygpe1xyXG4gICAgICAgIGlmKHRoaXMucmVwZWF0PT09MCl7XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaXNSdW5uaW5nID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBhdHRyKGtleSx2YWx1ZSl7XHJcbiAgICAgICAgdGhpc1trZXldID0gdmFsdWU7XHJcbiAgICAgICAgaWYoa2V5PT09J2ZyZXEnKXtcclxuICAgICAgICAgICAgdGhpc1snY291bnRlciddID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgcmVzZXRDb3VudGVyKCl7XHJcbiAgICAgICAgdGhpcy5jb3VudGVyID0gdGhpcy5mcmVxO1xyXG4gICAgfVxyXG4gICAgY2hlY2tMb2NrKCl7XHJcbiAgICAgICAgaWYodGhpcy5jb3VudGVyPjApe1xyXG4gICAgICAgICAgICB0aGlzLmNvdW50ZXItLTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAhKHRoaXMuaXNSdW5uaW5nID09PSB0cnVlIHx8IHRoaXMuY291bnRlciA+IDApO1xyXG4gICAgfVxyXG5cclxufVxyXG5jb25zdCBfQ3ViWV9Sb3V0aW5lID0gbmV3IEN1YllfUm91dGluZSgpO1xyXG5leHBvcnQgZGVmYXVsdCBfQ3ViWV9Sb3V0aW5lOyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFueGluIFlhbmcgb24gNi8xMi8yMDE4LlxyXG4gKi9cclxuaW1wb3J0IEN1YlkgZnJvbSAnLi4vRnJhbWV3b3JrL0N1YlkvQ3ViWSc7XHJcbmltcG9ydCBob21lQ29udGVudCBmcm9tIFwiLi4vdmlldy9ob21lXCI7XHJcbmxldCBvcmlnaW4gPSB7XHJcbiAgICB4OiB3aW5kb3cuaW5uZXJXaWR0aC8yLFxyXG4gICAgeTogd2luZG93LmlubmVySGVpZ2h0LzJcclxufTtcclxud2luZG93Lm1vYmlsZWNoZWNrID0gZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgY2hlY2sgPSBmYWxzZTtcclxuICAgIChmdW5jdGlvbihhKXtpZigvKGFuZHJvaWR8YmJcXGQrfG1lZWdvKS4rbW9iaWxlfGF2YW50Z298YmFkYVxcL3xibGFja2JlcnJ5fGJsYXplcnxjb21wYWx8ZWxhaW5lfGZlbm5lY3xoaXB0b3B8aWVtb2JpbGV8aXAoaG9uZXxvZCl8aXJpc3xraW5kbGV8bGdlIHxtYWVtb3xtaWRwfG1tcHxtb2JpbGUuK2ZpcmVmb3h8bmV0ZnJvbnR8b3BlcmEgbShvYnxpbilpfHBhbG0oIG9zKT98cGhvbmV8cChpeGl8cmUpXFwvfHBsdWNrZXJ8cG9ja2V0fHBzcHxzZXJpZXMoNHw2KTB8c3ltYmlhbnx0cmVvfHVwXFwuKGJyb3dzZXJ8bGluayl8dm9kYWZvbmV8d2FwfHdpbmRvd3MgY2V8eGRhfHhpaW5vL2kudGVzdChhKXx8LzEyMDd8NjMxMHw2NTkwfDNnc298NHRocHw1MFsxLTZdaXw3NzBzfDgwMnN8YSB3YXxhYmFjfGFjKGVyfG9vfHNcXC0pfGFpKGtvfHJuKXxhbChhdnxjYXxjbyl8YW1vaXxhbihleHxueXx5dyl8YXB0dXxhcihjaHxnbyl8YXModGV8dXMpfGF0dHd8YXUoZGl8XFwtbXxyIHxzICl8YXZhbnxiZShja3xsbHxucSl8YmkobGJ8cmQpfGJsKGFjfGF6KXxicihlfHYpd3xidW1ifGJ3XFwtKG58dSl8YzU1XFwvfGNhcGl8Y2N3YXxjZG1cXC18Y2VsbHxjaHRtfGNsZGN8Y21kXFwtfGNvKG1wfG5kKXxjcmF3fGRhKGl0fGxsfG5nKXxkYnRlfGRjXFwtc3xkZXZpfGRpY2F8ZG1vYnxkbyhjfHApb3xkcygxMnxcXC1kKXxlbCg0OXxhaSl8ZW0obDJ8dWwpfGVyKGljfGswKXxlc2w4fGV6KFs0LTddMHxvc3x3YXx6ZSl8ZmV0Y3xmbHkoXFwtfF8pfGcxIHV8ZzU2MHxnZW5lfGdmXFwtNXxnXFwtbW98Z28oXFwud3xvZCl8Z3IoYWR8dW4pfGhhaWV8aGNpdHxoZFxcLShtfHB8dCl8aGVpXFwtfGhpKHB0fHRhKXxocCggaXxpcCl8aHNcXC1jfGh0KGMoXFwtfCB8X3xhfGd8cHxzfHQpfHRwKXxodShhd3x0Yyl8aVxcLSgyMHxnb3xtYSl8aTIzMHxpYWMoIHxcXC18XFwvKXxpYnJvfGlkZWF8aWcwMXxpa29tfGltMWt8aW5ub3xpcGFxfGlyaXN8amEodHx2KWF8amJyb3xqZW11fGppZ3N8a2RkaXxrZWppfGtndCggfFxcLyl8a2xvbnxrcHQgfGt3Y1xcLXxreW8oY3xrKXxsZShub3x4aSl8bGcoIGd8XFwvKGt8bHx1KXw1MHw1NHxcXC1bYS13XSl8bGlid3xseW54fG0xXFwtd3xtM2dhfG01MFxcL3xtYSh0ZXx1aXx4byl8bWMoMDF8MjF8Y2EpfG1cXC1jcnxtZShyY3xyaSl8bWkobzh8b2F8dHMpfG1tZWZ8bW8oMDF8MDJ8Yml8ZGV8ZG98dChcXC18IHxvfHYpfHp6KXxtdCg1MHxwMXx2ICl8bXdicHxteXdhfG4xMFswLTJdfG4yMFsyLTNdfG4zMCgwfDIpfG41MCgwfDJ8NSl8bjcoMCgwfDEpfDEwKXxuZSgoY3xtKVxcLXxvbnx0Znx3Znx3Z3x3dCl8bm9rKDZ8aSl8bnpwaHxvMmltfG9wKHRpfHd2KXxvcmFufG93ZzF8cDgwMHxwYW4oYXxkfHQpfHBkeGd8cGcoMTN8XFwtKFsxLThdfGMpKXxwaGlsfHBpcmV8cGwoYXl8dWMpfHBuXFwtMnxwbyhja3xydHxzZSl8cHJveHxwc2lvfHB0XFwtZ3xxYVxcLWF8cWMoMDd8MTJ8MjF8MzJ8NjB8XFwtWzItN118aVxcLSl8cXRla3xyMzgwfHI2MDB8cmFrc3xyaW05fHJvKHZlfHpvKXxzNTVcXC98c2EoZ2V8bWF8bW18bXN8bnl8dmEpfHNjKDAxfGhcXC18b298cFxcLSl8c2RrXFwvfHNlKGMoXFwtfDB8MSl8NDd8bWN8bmR8cmkpfHNnaFxcLXxzaGFyfHNpZShcXC18bSl8c2tcXC0wfHNsKDQ1fGlkKXxzbShhbHxhcnxiM3xpdHx0NSl8c28oZnR8bnkpfHNwKDAxfGhcXC18dlxcLXx2ICl8c3koMDF8bWIpfHQyKDE4fDUwKXx0NigwMHwxMHwxOCl8dGEoZ3R8bGspfHRjbFxcLXx0ZGdcXC18dGVsKGl8bSl8dGltXFwtfHRcXC1tb3x0byhwbHxzaCl8dHMoNzB8bVxcLXxtM3xtNSl8dHhcXC05fHVwKFxcLmJ8ZzF8c2kpfHV0c3R8djQwMHx2NzUwfHZlcml8dmkocmd8dGUpfHZrKDQwfDVbMC0zXXxcXC12KXx2bTQwfHZvZGF8dnVsY3x2eCg1Mnw1M3w2MHw2MXw3MHw4MHw4MXw4M3w4NXw5OCl8dzNjKFxcLXwgKXx3ZWJjfHdoaXR8d2koZyB8bmN8bncpfHdtbGJ8d29udXx4NzAwfHlhc1xcLXx5b3VyfHpldG98enRlXFwtL2kudGVzdChhLnN1YnN0cigwLDQpKSkgY2hlY2sgPSB0cnVlO30pKG5hdmlnYXRvci51c2VyQWdlbnR8fG5hdmlnYXRvci52ZW5kb3J8fHdpbmRvdy5vcGVyYSk7XHJcbiAgICByZXR1cm4gY2hlY2s7XHJcbn07XHJcbmRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gZnVuY3Rpb24oZSl7XHJcbiAgICBsZXQgeCA9IGUuY2xpZW50WDtcclxuICAgIGxldCB5ID0gZS5jbGllbnRZO1xyXG5cclxuICAgIGJhY2tncm91bmQuZHggPSAtKHggLSBvcmlnaW4ueCkvMTA7XHJcbiAgICBiYWNrZ3JvdW5kLmR5ID0gLSh5IC0gb3JpZ2luLnkpLzEwO1xyXG59O1xyXG5cclxudmFyIGJhY2tncm91bmQgPSBDdWJZLmNyZWF0ZUVsZW1lbnQoJ2RpdicsJ2JhY2tncm91bmQnKTtcclxuYmFja2dyb3VuZC5zdHlsZSgnd2lkdGgnLCcxMDB2dycpXHJcbiAgICAuc3R5bGUoJ2hlaWdodCcsJzEwMHZoJylcclxuICAgIC5zdHlsZSgncG9zaXRpb24nLCdmaXhlZCcpXHJcbiAgICAuc3R5bGUoJ2JhY2tncm91bmQnLCdibGFjaycpXHJcbiAgICAuc3R5bGUoJ3RvcCcsMClcclxuICAgIC5zdHlsZSgnbGVmdCcsMClcclxuICAgIC5zdHlsZSgnekluZGV4JywwKTtcclxudmFyIGNpcmNsZU51bSA9IG1vYmlsZWNoZWNrKCk/NTA6MTI4O1xyXG52YXIgY2lyY2xlTGlzdCA9IFtdO1xyXG5cclxuZm9yKHZhciBpPTA7aTxjaXJjbGVOdW07aSsrKXtcclxuICAgIGxldCBjaXJjbGUgPSBDdWJZLmNyZWF0ZUVsZW1lbnQoJ2RpdicsJ2JhY2tncm91bmRDaXJjbGVfJytpKVxyXG4gICAgICAgIC5zdHlsZSgncG9zaXRpb24nLCdhYnNvbHV0ZScpXHJcbiAgICAgICAgLnN0eWxlKCd3aWR0aCcsJzIwcHgnKVxyXG4gICAgICAgIC5zdHlsZSgnaGVpZ2h0JywnMjBweCcpXHJcbiAgICAgICAgLnN0eWxlKCdib3JkZXJSYWRpdXMnLCc0cHgnKVxyXG4gICAgICAgIC5zdHlsZSgnYmFja2dyb3VuZCcsJyNlY2NjNjgnKVxyXG4gICAgICAgIC5zdHlsZSgndHJhbnNpdGlvbicsJzAuM3MgbGluZWFyJylcclxuICAgICAgICAuc3R5bGUoJ2JveFNoYWRvdycsJzAgMCAxMHB4ICNlY2NjNjgnKVxyXG4gICAgICAgIC5zdHlsZSgnb3BhY2l0eScsICcwJylcclxuICAgICAgICAuYXR0cignYWN0aXZhdGVkJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICAgICAgbGV0IHggPSBNYXRoLnJhbmRvbSgpKndpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgICAgICAgICBsZXQgeSA9IE1hdGgucmFuZG9tKCkqd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgICAgICAgICB0aGlzLmR4ID0gTWF0aC5yYW5kb20oKS0wLjU7XHJcbiAgICAgICAgICAgIHRoaXMuZHkgPSBNYXRoLnJhbmRvbSgpLTAuNTtcclxuICAgICAgICAgICAgdGhpcy5kcyA9IDAuMDE7XHJcbiAgICAgICAgICAgIHRoaXMuc2NhbGUgPSAgTWF0aC5yYW5kb20oKTtcclxuICAgICAgICAgICAgdGhpcy5jb3VudGVyID0gMTA7XHJcbiAgICAgICAgICAgIHRoaXMuc3R5bGUoJ3RyYW5zZm9ybScsJ3RyYW5zbGF0ZSgnKyB4ICsncHgsJysgeSArJ3B4KScpO1xyXG4gICAgICAgICAgICB0aGlzLmNpcmNsZUFuID0gQ3ViWS5jcmVhdGVSb3V0aW5lKCdob21lX2NpcmNsZV9hbmltYXRpb25fJytpKVxyXG4gICAgICAgICAgICAgICAgLmF0dHIoJ2ZyZXEnLDUwKVxyXG4gICAgICAgICAgICAgICAgLmF0dHIoJ2FjdGlvbicsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzY2FsZSA9IHNlbGYuc2NhbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNlZWQgPSBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYueCs9c2VsZi5keDtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLnkrPXNlbGYuZHk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuc3R5bGUoJ3RyYW5zZm9ybScsJ3RyYW5zbGF0ZSgnKyhzZWxmLnggKyAoYmFja2dyb3VuZC5keHx8MCkqc2NhbGUpKydweCwnKyhzZWxmLnkgKyAoYmFja2dyb3VuZC5keXx8MCkqc2NhbGUpKydweCkgc2NhbGUoJytzY2FsZSsnKScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zdHlsZSgnb3BhY2l0eScsIHNjYWxlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc3R5bGUoJ3pJbmRleCcsIHNjYWxlPj0wLjg/MjowKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc3R5bGUoJ2JveFNoYWRvdycsJzAgMCAnKyhzZWVkKjEwKzEwKSsncHggI2VjY2M2OCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHNlbGYueD53aW5kb3cuaW5uZXJXaWR0aCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZHggPSAtKHNlZWQqMC41KzAuMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfWVsc2UgaWYoc2VsZi54PDApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmR4ID0gc2VlZCowLjUrMC4xO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZihzZWxmLnk+d2luZG93LmlubmVySGVpZ2h0KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5keSA9IC0oc2VlZCowLjUrMC4xKTtcclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZSBpZihzZWxmLnk8MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZHkgPSBzZWVkKjAuNSswLjE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY291bnRlci0tO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHNlbGYuY291bnRlcjw9MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY291bnRlcj0xMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5zY2FsZSs9Y2lyY2xlLmRzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihzZWxmLnNjYWxlPj0xKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZHM9LTAuMDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoc2VsZi5zY2FsZTw9MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmRzPTAuMDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KS5pbnNlcnQoKTtcclxuICAgICAgICAgICAgdGhpcy5jaXJjbGVBbjIgPSBDdWJZLmNyZWF0ZVJvdXRpbmUoJ2hvbWVfY2lyY2xlX2FuaW1hdGlvbl8yXycraSlcclxuICAgICAgICAgICAgICAgIC5hdHRyKCdmcmVxJywzMDApXHJcbiAgICAgICAgICAgICAgICAuYXR0cignYWN0aW9uJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNlZWQgPSBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuc3R5bGUoJ2JveFNoYWRvdycsJzAgMCAnKyhzZWVkKjQwKzEwKSsncHggI2VjY2M2OCcpO1xyXG4gICAgICAgICAgICAgICAgfSkuaW5zZXJ0KCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuYXR0cignZGVhY3RpdmF0ZWQnLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5jaXJjbGVBbi5yZW1vdmUoKTtcclxuICAgICAgICAgICAgdGhpcy5jaXJjbGVBbjIucmVtb3ZlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICBjaXJjbGUucmVhcnJhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCB4ID0gTWF0aC5yYW5kb20oKSp3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgICAgICBsZXQgeSA9IE1hdGgucmFuZG9tKCkqd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgICAgIGxldCBzY2FsZSA9IGNpcmNsZS5zY2FsZSA9ICBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgIGNpcmNsZS54ID0geDtcclxuICAgICAgICBjaXJjbGUueSA9IHk7XHJcbiAgICAgICAgY2lyY2xlLnN0eWxlKCd0cmFuc2Zvcm0nLCd0cmFuc2xhdGUoJysoc2VsZi54ICsgKGJhY2tncm91bmQuZHh8fDApKnNjYWxlKSsncHgsJysoc2VsZi55ICsgKGJhY2tncm91bmQuZHl8fDApKnNjYWxlKSsncHgpIHNjYWxlKCcrc2NhbGUrJyknKVxyXG4gICAgfTtcclxuICAgIEN1YlkuY29ubmVjdCgnY3VycmVudFZpZXcnLGNpcmNsZS5yZWFycmFuZ2UpO1xyXG4gICAgQ3ViWS5jb25uZWN0KCd2aWV3cG9ydFNpemUnLGNpcmNsZS5yZWFycmFuZ2UpO1xyXG4gICAgYmFja2dyb3VuZC5hcHBlbmRFbGVtZW50KGNpcmNsZSk7XHJcblxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBiYWNrZ3JvdW5kOyIsImltcG9ydCBDdWJZIGZyb20gJy4uL0ZyYW1ld29yay9DdWJZL0N1YlknO1xyXG5cclxudmFyIGhlYWRlciA9IEN1YlkuY3JlYXRlRWxlbWVudCgnZGl2JywgJ2hlYWRlcicpXHJcbiAgICAuYXR0cignb25zZWxlY3RzdGFydCcsICdyZXR1cm4gZmFsc2U7JylcclxuICAgIC5zdHlsZSgnZGlzcGxheScsICdmbGV4JylcclxuICAgIC5zdHlsZSgncG9zaXRpb24nLCAnYWJzb2x1dGUnKVxyXG4gICAgLnN0eWxlKCdvcGFjaXR5JywgJzAuNScpXHJcbiAgICAuc3R5bGUoJ3RvcCcsICcxZW0nKVxyXG4gICAgLnN0eWxlKCdoZWlnaHQnLCAnM2VtJylcclxuICAgIC5zdHlsZSgnekluZGV4JywgJzEwJylcclxuICAgIC5zdHlsZSgndHJhbnNpdGlvbicsICcwLjNzJylcclxuICAgIC5vbignbW91c2VvdmVyJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuc3R5bGUoJ29wYWNpdHknLCAnMScpXHJcbiAgICB9KVxyXG4gICAgLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuc3R5bGUoJ29wYWNpdHknLCAnMC41JylcclxuICAgIH0pO1xyXG5cclxudmFyIGhlYWRlckl0ZW1zID0gWydNZW51JywgJ1BsYXlncm91bmQnLCAnQWJvdXQnXTtcclxudmFyIGluZGV4ID0gMDtcclxuaGVhZGVySXRlbXMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgaGVhZGVySXRlbXNbaW5kZXgrK10gPSBoZWFkZXIuYXBwZW5kKCdkaXYnLCAnaGVhZGVyXycgKyBpdGVtKVxyXG4gICAgICAgIC5jb250ZW50KGl0ZW0pXHJcbiAgICAgICAgLmFwcGVuZENsYXNzKCd4eCcpXHJcbiAgICAgICAgLnN0eWxlKCdjb2xvcicsICd3aGl0ZScpXHJcbiAgICAgICAgLnN0eWxlKCdwYWRkaW5nJywgJzFlbSAwLjVlbScpXHJcbiAgICAgICAgLnN0eWxlKCdjdXJzb3InLCAncG9pbnRlcicpXHJcbiAgICAgICAgLnN0eWxlKCd0ZXh0U2hhZG93JywgJzAgMCAxMHB4ICNlY2NjNjgnKVxyXG4gICAgICAgIC5zdHlsZSgndHJhbnNpdGlvbicsICcwLjNzJylcclxuICAgICAgICAub24oJ21vdXNlb3ZlcicsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5zdHlsZSgndGV4dFNoYWRvdycsICcwIDAgMTBweCAjZWNjYzY4JylcclxuICAgICAgICAgICAgICAgIC5zdHlsZSgnY29sb3InLCAnI2VjY2M2OCcpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLnN0eWxlKCd0ZXh0U2hhZG93JywgJzAgMCAyMHB4ICNlY2NjNjgnKVxyXG4gICAgICAgICAgICAgICAgLnN0eWxlKCdjb2xvcicsICd3aGl0ZScpO1xyXG4gICAgICAgIH0pO1xyXG59KTtcclxudmFyIGhlYWRlck1lbnVCdXR0b24gPSBoZWFkZXJJdGVtc1swXTtcclxuaGVhZGVyTWVudUJ1dHRvbi5zdHlsZSgncG9zaXRpb24nLCAncmVsYXRpdmUnKTtcclxudmFyIG1lbnVDb250YWluZXIgPSBoZWFkZXJNZW51QnV0dG9uLmFwcGVuZCgnZGl2JywgJ21lbnVDb250YWluZXInKVxyXG4gICAgLnN0eWxlKCdwb3NpdGlvbicsICdhYnNvbHV0ZScpXHJcbiAgICAuc3R5bGUoJ3dpZHRoJywgJzI1NnB4JylcclxuICAgIC5zdHlsZSgnaGVpZ2h0JywgJzBweCcpXHJcbiAgICAuc3R5bGUoJ2JhY2tncm91bmQnLCAnJylcclxuICAgIC5zdHlsZSgndG9wJywgJzEyNSUnKVxyXG4gICAgLnN0eWxlKCdsZWZ0JywgJzAnKVxyXG4gICAgLnN0eWxlKCdvdmVyZmxvdycsICdoaWRkZW4nKVxyXG4gICAgLnN0eWxlKCd0cmFuc2l0aW9uJywgJzAuM3MnKVxyXG4gICAgLnNldFVwZGF0ZXIoJ3RvZ2dsZU1lbnUnLCBmdW5jdGlvbiAoZCkge1xyXG4gICAgICAgIGxldCBoYXNPcGVuID0gdGhpcy5oYXNPcGVuIHx8IGZhbHNlO1xyXG4gICAgICAgIGlmIChoYXNPcGVuKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3R5bGUoJ2hlaWdodCcsICcwJylcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnN0eWxlKCdoZWlnaHQnLCAnMzN2aCcpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaGFzT3BlbiA9ICFoYXNPcGVuO1xyXG4gICAgfSlcclxuICAgIC5zZXRVcGRhdGVyKCdjbG9zZU1lbnUnLCBmdW5jdGlvbiAoZCkge1xyXG4gICAgICAgIHRoaXMuc3R5bGUoJ2hlaWdodCcsICcwJylcclxuICAgICAgICAgICAgLnN0eWxlKCdib3hTaGFkb3cnLCAnMHB4IDBweCA1cHggcmdiYSgxMTIsIDE2MSwgMjU1LDApJylcclxuICAgICAgICAgICAgLnN0eWxlKCdib3JkZXInLCAnMXB4IHNvbGlkIHJnYmEoMTEyLCAxNjEsIDI1NSwgMCknKTtcclxuICAgICAgICB0aGlzLmhhc09wZW4gPSBmYWxzZTtcclxuICAgIH0pO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIG1lbnVDb250YWluZXIudXBkYXRlcignY2xvc2VNZW51JykoKTtcclxufSk7XHJcblxyXG5oZWFkZXJNZW51QnV0dG9uLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgbWVudUNvbnRhaW5lci51cGRhdGVyKCd0b2dnbGVNZW51JykoKTtcclxufSk7XHJcblxyXG52YXIgbWVudUNvbnRlbnRzID0gbWVudUNvbnRhaW5lci5hcHBlbmQoJ3VsJylcclxuICAgIC5zdHlsZSgncGFkZGluZ0xlZnQnLCAnMmVtJylcclxuICAgIC5zdHlsZSgnbWFyZ2luJywgJzAnKTtcclxuXHJcbnZhciBtZW51SXRlbXMgPSBbJ0hvbWUnLCAnTWF5IENvbWluZyBzb29uJywgJ1Byb2JhYmx5IENvbWluZyBzb29uJ107XHJcbmluZGV4ID0gMDtcclxuXHJcbm1lbnVJdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICBtZW51SXRlbXNbaW5kZXgrK10gPSBtZW51Q29udGVudHMuYXBwZW5kKCdsaScsICdtZW51XycgKyBpdGVtKVxyXG4gICAgICAgIC5jb250ZW50KGl0ZW0pXHJcbiAgICAgICAgLnN0eWxlKCdjb2xvcicsICd3aGl0ZScpXHJcbiAgICAgICAgLnN0eWxlKCdwYWRkaW5nJywgJzFlbSAwLjVlbScpXHJcbiAgICAgICAgLnN0eWxlKCdjdXJzb3InLCAncG9pbnRlcicpXHJcbiAgICAgICAgLnN0eWxlKCd0ZXh0U2hhZG93JywgJzAgMCAxMHB4ICNlY2NjNjgnKVxyXG4gICAgICAgIC5zdHlsZSgndHJhbnNpdGlvbicsICcwLjNzJylcclxuICAgICAgICAub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBDdWJZLnN0b3JlVmFsdWUoJ2N1cnJlbnRWaWV3JywgaXRlbSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAub24oJ21vdXNlb3ZlcicsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5zdHlsZSgndGV4dFNoYWRvdycsICcwIDAgMTBweCAjZWNjYzY4JylcclxuICAgICAgICAgICAgICAgIC5zdHlsZSgnY29sb3InLCAnI2VjY2M2OCcpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLnN0eWxlKCd0ZXh0U2hhZG93JywgJzAgMCAyMHB4ICNlY2NjNjgnKVxyXG4gICAgICAgICAgICAgICAgLnN0eWxlKCdjb2xvcicsICd3aGl0ZScpO1xyXG4gICAgICAgIH0pO1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhlYWRlcjsiLCIvKipcclxuICogQ3JlYXRlZCBieSBBbnhpbiBZYW5nIG9uIDMvMjgvMjAxOC5cclxuICovXHJcbi8vaW1wb3J0IENDIGZyb20gJy4vRnJhbWV3b3JrL0N1YlkvQ3ViWV9Db3JlJztcclxuLy9pbXBvcnQgQ3ViWV9ET00gZnJvbSAnLi9GcmFtZXdvcmsvQ3ViWS9DdWJZX0RPTSc7XHJcbi8vaW1wb3J0IENSIGZyb20gJy4vRnJhbWV3b3JrL0N1YlkvQ3ViWV9Sb3V0aW5lJztcclxuaW1wb3J0IEN1YlkgZnJvbSAnLi9GcmFtZXdvcmsvQ3ViWS9DdWJZJztcclxuaW1wb3J0IGhvbWVDb250ZW50IGZyb20gJy4vdmlldy9ob21lJztcclxuaW1wb3J0IGFib3V0Q29udGVudCBmcm9tICcuL3ZpZXcvYWJvdXQnO1xyXG5pbXBvcnQgaGVhZGVyIGZyb20gJy4vY29tcG9uZW50cy9oZWFkZXInXHJcbmltcG9ydCBiYWNrZ3JvdW5kIGZyb20gJy4vY29tcG9uZW50cy9iYWNrZ3JvdW5kX3N0YXJzJ1xyXG5jb25zdCBWSUVXX1RSQU5TSVRJT05fVElNRSA9IDUwMDtcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsZnVuY3Rpb24gKCkge1xyXG4gICAgaWYod2luZG93LnJlc2l6aW5nKXtcclxuICAgICAgICBjbGVhclRpbWVvdXQod2luZG93LnJlc2l6aW5nKVxyXG4gICAgfVxyXG4gICAgd2luZG93LnJlc2l6aW5nID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgQ3ViWS5zdG9yZVZhbHVlKCd2aWV3cG9ydFNpemUnLHt3OndpbmRvdy5pbm5lcldpZHRoLGg6d2luZG93LmlubmVySGVpZ2h0fSk7XHJcbiAgICB9LDIwMClcclxufSk7XHJcbiAgICB3aW5kb3cucm9vdCA9IG5ldyBDdWJZLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICdheF9yb290JywgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcclxuICAgIHJvb3Quc3R5bGUoJ2ZvbnRTaXplJywgJzEycHgnKVxyXG4gICAgICAgIC5zdHlsZSgnY3Vyc29yJywgJ3VybCgpLCBhdXRvJyk7XHJcbiAgICByb290LmFwcGVuZEVsZW1lbnQoaGVhZGVyKTtcclxuICAgIHZhciBtYWluQ29udGFpbmVyID0gcm9vdC5hcHBlbmQoJ2RpdicsICdtYWluQ29udGFpbmVyJyk7XHJcbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZEVsZW1lbnQoaG9tZUNvbnRlbnQpO1xyXG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRFbGVtZW50KGJhY2tncm91bmQpO1xyXG5DdWJZLnN0b3JlVmFsdWUoJ2N1cnJlbnRWaWV3JywnSG9tZScpO1xyXG5DdWJZLmNvbm5lY3QoJ2N1cnJlbnRWaWV3JyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRWaWV3ID0gQ3ViWS5nZXRWYWx1ZSgnY3VycmVudFZpZXcnKTtcclxuICAgICAgICBtYWluQ29udGFpbmVyLnJlbW92ZSgnLm1haW5Db250ZW50JyxWSUVXX1RSQU5TSVRJT05fVElNRSk7XHJcbiAgICAgICAgc3dpdGNoIChjdXJyZW50Vmlldyl7XHJcbiAgICAgICAgICAgIGNhc2UgJ0hvbWUnOlxyXG4gICAgICAgICAgICAgICAgbWFpbkNvbnRhaW5lci5hcHBlbmRFbGVtZW50KGhvbWVDb250ZW50KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdBYm91dCc6XHJcbiAgICAgICAgICAgICAgICBtYWluQ29udGFpbmVyLmFwcGVuZEVsZW1lbnQoYWJvdXRDb250ZW50KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHZhciB2ZXJzaW9uID0gcm9vdC5hcHBlbmQoJ3AnLCAndmVyc2lvbicpXHJcbiAgICAgICAgLnN0eWxlKCdwb3NpdGlvbicsICdmaXhlZCcpXHJcbiAgICAgICAgLnN0eWxlKCdib3R0b20nLCAnMHB4JylcclxuICAgICAgICAuc3R5bGUoJ3JpZ2h0JywgJzAnKVxyXG4gICAgICAgIC5zdHlsZSgncGFkZGluZ1JpZ2h0JywgJzFlbScpXHJcbiAgICAgICAgLnN0eWxlKCdjb2xvcicsICdsaWdodGdyYXknKVxyXG4gICAgICAgIC5jb250ZW50KG5ldyBEYXRlKCkpXHJcbiAgICAgICAgLnNldFVwZGF0ZXIoJ3RpbWVyJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRlbnQoJ0N1YllfUm91dGluZTogTGFzckN5Y2xlVGltZTogJyArIGNyLmxhc3RDeWNsZVRpbWUgKyAnbXMgfCBDUFM6JyArIGNyLmN5Y2xlUGVyU2VjICsgJyB8TG9uZ2VzdDogJyArIGNyLmxvbmdlc3RSb3V0aW5lVGltZSArICdtcyB8IExhc3Q6JyArIGNyLmxhc3RSb3V0aW5lVGltZSArICdtcycpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgdmFyIHRpbWVyID0gQ3ViWS5jcmVhdGVSb3V0aW5lKCd0aW1lcicpXHJcbiAgICAgICAgLmF0dHIoJ2ZyZXEnLCAxKVxyXG4gICAgICAgIC5hdHRyKCdhY3Rpb24nLCB2ZXJzaW9uLnVwZGF0ZXIoJ3RpbWVyJykpXHJcbiAgICAgICAgLmluc2VydCgpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9