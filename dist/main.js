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

var cc = new CubY_Core();
window.cc = cc;
exports.default = cc;

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
}(); /**
      * Created by Anxin Yang on 5/26/2018.
      */

var _CubY_Core = __webpack_require__(/*! ./CubY_Core */ "./src/Framework/CubY/CubY_Core.js");

var _CubY_Core2 = _interopRequireDefault(_CubY_Core);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

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
            var element = new CubY_DOM(tag, id);
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

exports.default = CubY_DOM;

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
        key: 'append',
        value: function append(name, group) {
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

            if (this.isRunning === true || this.counter > 0) {
                return false;
            } else {
                return true;
            }
        }
    }]);

    return Routine;
}();

var cr = new CubY_Routine();
window.cr = cr;
exports.default = cr;

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

var _CubY_DOM = __webpack_require__(/*! ../Framework/CubY/CubY_DOM */ "./src/Framework/CubY/CubY_DOM.js");

var _CubY_DOM2 = _interopRequireDefault(_CubY_DOM);

var _home = __webpack_require__(/*! ../home */ "./src/home.js");

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

var background = new _CubY_DOM2.default('div', 'background');
background.style('width', '100vw').style('height', '100vh').style('position', 'fixed').style('background', 'black').style('top', 0).style('left', 0).style('zIndex', 0);
var circleNum = mobilecheck() ? 50 : 128;
var circleList = [];

var _loop = function _loop() {
    var circle = new _CubY_DOM2.default('div', 'backgroundCircle_' + i).style('position', 'absolute').style('width', '20px').style('height', '20px').style('borderRadius', '4px').style('background', '#eccc68').style('transition', '0.3s linear').style('boxShadow', '0 0 10px #eccc68').style('opacity', '0').attr('activated', function () {
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
        this.circleAn = cr.append('home_circle_animation_' + i).attr('freq', 50).attr('action', function () {
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
        this.circleAn2 = cr.append('home_circle_animation_2_' + i).attr('freq', 300).attr('action', function () {
            var seed = Math.random();
            self.style('boxShadow', '0 0 ' + (seed * 40 + 10) + 'px #eccc68');
        }).insert();
    }).attr('deactivated', function () {
        this.circleAn.remove();
        this.circleAn2.remove();
    });
    cc.connect('currentView', function () {
        var x = Math.random() * window.innerWidth;
        var y = Math.random() * window.innerHeight;
        var scale = circle.scale = Math.random();
        circle.x = x;
        circle.y = y;
        circle.style('transform', 'translate(' + (self.x + (background.dx || 0) * scale) + 'px,' + (self.y + (background.dy || 0) * scale) + 'px) scale(' + scale + ')');
    });
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

var _CubY_DOM = __webpack_require__(/*! ../Framework/CubY/CubY_DOM */ "./src/Framework/CubY/CubY_DOM.js");

var _CubY_DOM2 = _interopRequireDefault(_CubY_DOM);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var header = new _CubY_DOM2.default('div', 'header').attr('onselectstart', 'return false;').style('display', 'flex').style('position', 'absolute').style('opacity', '0.5').style('top', '1em').style('height', '3em').style('zIndex', '10').style('transition', '0.3s').on('mouseover', function () {
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
        cc.storeValue('currentView', item);
    }).on('mouseover', function () {
        this.style('textShadow', '0 0 10px #eccc68').style('color', '#eccc68');
    }).on('mouseleave', function () {
        this.style('textShadow', '0 0 20px #eccc68').style('color', 'white');
    });
});

exports.default = header;

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

var _CubY_DOM = __webpack_require__(/*! ./Framework/CubY/CubY_DOM */ "./src/Framework/CubY/CubY_DOM.js");

var _CubY_DOM2 = _interopRequireDefault(_CubY_DOM);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var mainContent = new _CubY_DOM2.default('div', 'homeContent');
mainContent.style('width', '100vw').style('height', '100vh').style('background', '#222f3e').style('position', 'relative').style('transition', '5s').style('overflow', 'hidden').appendClass('mainContent');

var backgroundAn = cr.append('backgroundAn').attr('freq', 300).attr('repeat', 1).attr('action', function () {
    mainContent.style('background', 'transparent');
}).insert();

var headLine = mainContent.append('h1', 'headLine').content('FRONT END ENGINEER').style('position', 'fixed').style('color', 'white').style('width', '100%').style('height', '60px').style('textAlign', 'center').style('left', '0').style('right', '0').style('bottom', '33%').style('margin', 'auto').style('fontSize', '64px').style('transition', '1s').style('opacity', 0).style('textShadow', '0 0 10px #70a1ff').style('zIndex', 1).on('mouseover', function () {
    this.style('textShadow', '0 0 30px #eccc68');
}).on('mouseleave', function () {
    this.style('textShadow', '0 0 10px #70a1ff');
}).attr('activated', function () {
    var self = this;
    setTimeout(function () {
        self.style('opacity', 1);
    }, 300);
}).attr('deactivated', function () {
    this.style('opacity', 0);
});

var homeHeadLineAnimation = cr.append('home_headLine_animation').attr('freq', 300).attr('action', function () {
    var odd = Math.random() * 100;
    if (odd > 50) {
        headLine.style('textShadow', '0 0 30px #eccc68');
    } else {
        headLine.style('textShadow', '0 0 10px #70a1ff');
    }
}).insert();

var subHeadLine = mainContent.append('h1', 'subHeadLine').content('- who makes data alive -').style('position', 'fixed').style('color', '#eccc68').style('width', '100%').style('height', '30px').style('textAlign', 'center').style('left', '0').style('right', '0').style('bottom', '30%').style('margin', 'auto').style('fontSize', '32px').style('transition', '1s').style('opacity', 0).style('textShadow', '0 0 10px #eccc68').style('zIndex', 1).attr('activated', function () {
    var self = this;
    setTimeout(function () {
        self.style('opacity', 1);
    }, 300);
}).attr('deactivated', function () {
    this.style('opacity', 0);
});

var infoButtonHalo = mainContent.append('span', 'infoButtonHalo').style('position', 'fixed').style('color', '#eccc68').style('width', '32px').style('height', '32px').style('opacity', 0).style('overflow', 'hidden').style('borderRadius', '4px').style('textAlign', 'center').style('left', '0').style('right', '0').style('bottom', '18%').style('margin', 'auto').style('fontSize', '24px').style('transition', '0.5s').style('border', '1px solid #eccc68').style('boxShadow', '0 0 30px #eccc68').style('cursor', 'pointer').style('zIndex', 1).attr('activated', function () {
    var self = this;
    setTimeout(function () {
        self.style('opacity', 1);
    }, 300);
}).attr('deactivated', function () {
    this.style('opacity', 0);
});

var infoButton = mainContent.append('span', 'infoButton').content('Wanna know more?').style('position', 'fixed').style('color', '#eccc68').style('width', '32px').style('height', '32px').style('overflow', 'hidden').style('border', '1px solid transparent').style('borderRadius', '4px').style('textAlign', 'center').style('left', '0').style('opacity', 0).style('right', '0').style('bottom', '18%').style('margin', 'auto').style('fontSize', '24px').style('transition', '0.5s').style('background', '#eccc68').style('textShadow', '0 0 5px #eccc68').style('boxShadow', '0 0 10x #eccc68').style('cursor', 'pointer').style('zIndex', 1).attr('activated', function () {
    var self = this;
    setTimeout(function () {
        self.style('opacity', 1);
    }, 300), this.style('background', '#eccc68').style('width', '32px').style('boxShadow', '0 0 10px #eccc68');
    infoButton.overed = false;
}).on('click', function () {
    cc.storeValue('currentView', 'about');
}).on('mouseover', function () {
    this.style('background', 'rgba(0, 0, 0, 0.5)').style('width', '100%').style('boxShadow', '');
    infoButtonHalo.style('opacity', 0);
    infoButton.overed = true;
}).on('mouseleave', function () {
    this.style('background', '#eccc68').style('width', '32px').style('boxShadow', '0 0 10px #eccc68');
    infoButton.overed = false;
});

var infoButtonHaloAn = cr.append('infoButtonHaloAn').attr('freq', 600).attr('action', function () {
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

exports.default = mainContent;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _CubY_Core = __webpack_require__(/*! ./Framework/CubY/CubY_Core */ "./src/Framework/CubY/CubY_Core.js");

var _CubY_Core2 = _interopRequireDefault(_CubY_Core);

var _CubY_DOM = __webpack_require__(/*! ./Framework/CubY/CubY_DOM */ "./src/Framework/CubY/CubY_DOM.js");

var _CubY_DOM2 = _interopRequireDefault(_CubY_DOM);

var _CubY_Routine = __webpack_require__(/*! ./Framework/CubY/CubY_Routine */ "./src/Framework/CubY/CubY_Routine.js");

var _CubY_Routine2 = _interopRequireDefault(_CubY_Routine);

var _home = __webpack_require__(/*! ./home */ "./src/home.js");

var _home2 = _interopRequireDefault(_home);

var _header = __webpack_require__(/*! ./components/header */ "./src/components/header.js");

var _header2 = _interopRequireDefault(_header);

var _background_stars = __webpack_require__(/*! ./components/background_stars */ "./src/components/background_stars.js");

var _background_stars2 = _interopRequireDefault(_background_stars);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

/**
 * Created by Anxin Yang on 3/28/2018.
 */
var VIEW_TRANSITION_TIME = 500;
window.root = new _CubY_DOM2.default('div', 'ax_root', document.getElementById('app'));
root.style('fontSize', '12px').style('cursor', 'url(), auto');
root.appendElement(_header2.default);
var mainContainer = root.append('div', 'mainContainer');
mainContainer.appendElement(_home2.default);
mainContainer.appendElement(_background_stars2.default);
cc.storeValue('currentView', 'Home');
cc.connect('currentView', function () {
    var currentView = cc.getValue('currentView');
    mainContainer.remove('.mainContent', VIEW_TRANSITION_TIME);
    switch (currentView) {
        case 'Home':
            mainContainer.appendElement(_home2.default);
            break;
    }
});

var version = root.append('p', 'version').style('position', 'fixed').style('bottom', '0px').style('right', '0').style('paddingRight', '1em').style('color', 'lightgray').content(new Date()).setUpdater('timer', function () {
    this.content('CubY_Routine: LasrCycleTime: ' + cr.lastCycleTime + 'ms | CPS:' + cr.cyclePerSec + ' |Longest: ' + cr.longestRoutineTime + 'ms | Last:' + cr.lastRoutineTime + 'ms');
});
var timer = cr.append('timer').attr('freq', 1).attr('action', version.updater('timer')).insert();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0ZyYW1ld29yay9DdWJZL0N1YllfQ29yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRnJhbWV3b3JrL0N1YlkvQ3ViWV9ET00uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0ZyYW1ld29yay9DdWJZL0N1YllfUm91dGluZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9iYWNrZ3JvdW5kX3N0YXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkVBLElBQU0saUJBQWlCLDBCQUFNLENBQTdCOzs0QkFFSTt1QkFBWSxRQUFPOzhCQUNmOztZQUFJLFFBQVEsU0FDWjtZQUFJLE9BQ0o7YUFBSyxLQUNSOzs7OztxQ0FFRztnQkFBSSxRQUFRLFVBQ1o7aUJBQUssWUFBWSxNQUFNLFNBQ3ZCO2lCQUFLLFVBQ0w7aUJB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QUNmOzJCQUFlLE1BQU0sV0FDckI7QUFFWDs7QUExQmtCLEdBMEJoQjs7Ozs7Ozs7Ozs7Ozs7OztBQzFNUDs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBUkE7OztBQVNBLElBQU0sdUJBQXVCO0FBQ3pCLE9BQU8sT0FBTyx1QkFBYSxPQUFPLFdBQVcsU0FBUyxlQUFlO0FBQ3JFLEtBQUssTUFBTSxZQUFZLFFBQ2xCLE1BQU0sVUFBVTtBQUNyQixLQUFLO0FBQ0wsSUFBSSxnQkFBZ0IsS0FBSyxPQUFPLE9BQU87QUFDdkMsY0FBYztBQUNkLGNBQWM7QUFDZCxHQUFHLFdBQVcsZUFBYztBQUM1QixHQUFHLFFBQVEsZUFBYyxZQUNyQjtRQUFJLGNBQWMsR0FBRyxTQUNyQjtrQkFBYyxPQUFPLGdCQUNyQjtZQUNJO2FBQ0k7MEJBQWMscUJBQ2Q7QUFFWDs7QUFSRDs7QUFVQSxJQUFJLGVBQWUsT0FBTyxLQUFLLFdBQzFCLE1BQU0sWUFBWSxTQUNsQixNQUFNLFVBQVUsT0FDaEIsTUFBTSxTQUFTLEtBQ2YsTUFBTSxnQkFBZ0IsT0FDdEIsTUFBTSxTQUFTLGFBQ2YsUUFBUSxJQUFJLFFBQ1osV0FBVyxTQUFTLFlBQ2pCO1NBQUssUUFBUSxrQ0FBa0MsR0FBRyxnQkFBZ0IsY0FBYyxHQUFHLGNBQWMsZ0JBQWdCLEdBQUcscUJBQXFCLGVBQWUsR0FBRyxrQkFDOUo7QUFUUztBQVVkLElBQUksUUFBUSxHQUFHLE9BQU8sU0FDakIsS0FBSyxRQUFRLEdBQ2IsS0FBSyxVQUFVLFFBQVEsUUFBUSxVQUMvQixTIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiY29uc3QgRU1QVFlfRlVOQ1RJT04gPSAoKT0+e307XHJcbmNsYXNzIEN1YllfQ29yZXtcclxuICAgIGNvbnN0cnVjdG9yKF9wcm9wcyl7XHJcbiAgICAgICAgbGV0IHByb3BzID0gcHJvcHMgfHwge307XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuaW5pdChwcm9wcyk7XHJcbiAgICB9XHJcbiAgICBpbml0KF9wcm9wcyl7XHJcbiAgICAgICAgbGV0IHByb3BzID0gX3Byb3BzIHx8IHt9O1xyXG4gICAgICAgIHRoaXMuZGVidWdNb2RlID0gcHJvcHMuZGVidWcgfHwgZmFsc2U7XHJcbiAgICAgICAgdGhpcy5kYXRhTWFwID0ge307XHJcbiAgICAgICAgdGhpcy5hY3Rpb25NYXAgPSB7fTtcclxuICAgICAgICB0aGlzLmJyb3dzZXIgPSB0aGlzLmdldEJyb3dzZXIoKTtcclxuICAgICAgICB3aW5kb3cuY2MgPSB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEJyb3dzZXIoKXtcclxuICAgICAgICBsZXQgaXNJRSA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBpc0Nocm9tZSA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBpc09wZXJhID0gZmFsc2U7XHJcbiAgICAgICAgaWYoKCEhd2luZG93Lm9wciAmJiAhIW9wci5hZGRvbnMpIHx8ICEhd2luZG93Lm9wZXJhIHx8IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignIE9QUi8nKSA+PSAwKXtcclxuICAgICAgICAgICAgaXNPcGVyYSA9IHRydWU7XHJcbiAgICAgICAgICAgIHJldHVybiAnb3BlcmEnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0eXBlb2YgSW5zdGFsbFRyaWdnZXIgIT09ICd1bmRlZmluZWQnKXtcclxuICAgICAgICAgICAgcmV0dXJuICdmaXJlZm94JztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoL2NvbnN0cnVjdG9yL2kudGVzdCh3aW5kb3cuSFRNTEVsZW1lbnQpIHx8IChmdW5jdGlvbiAocCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHAudG9TdHJpbmcoKSA9PT0gXCJbb2JqZWN0IFNhZmFyaVJlbW90ZU5vdGlmaWNhdGlvbl1cIjtcclxuICAgICAgICAgICAgfSkoIXdpbmRvd1snc2FmYXJpJ10gfHwgc2FmYXJpLnB1c2hOb3RpZmljYXRpb24pKXtcclxuICAgICAgICAgICAgcmV0dXJuICdzYWZhcmknO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihmYWxzZSB8fCAhIWRvY3VtZW50LmRvY3VtZW50TW9kZSl7XHJcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgb3V0cHV0ID0gYXJndW1lbnRzWzBdO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gYXJndW1lbnRzW2ldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvYmogPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoa2V5KSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dFtrZXldID0gb2JqW2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgaXNJRSA9dHJ1ZTtcclxuICAgICAgICAgICAgcmV0dXJuICdpZSc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCFpc0lFICYmICEhd2luZG93LlN0eWxlTWVkaWEpe1xyXG4gICAgICAgICAgICByZXR1cm4gJ2VkZ2UnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZighIXdpbmRvdy5jaHJvbWUgJiYgISF3aW5kb3cuY2hyb21lLndlYnN0b3JlKXtcclxuICAgICAgICAgICAgaXNDaHJvbWUgPSB0cnVlXHJcbiAgICAgICAgICAgIHJldHVybiAnY2hyb21lJztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoKGlzQ2hyb21lIHx8IGlzT3BlcmEpICYmICEhd2luZG93LkNTUyl7XHJcbiAgICAgICAgICAgIHJldHVybiAnYmxpbmsnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdG9yZURhdGFBcnJheShfYXJyYXksIF9pZEtleSwgX2l0ZW1Qcm9jZXNzb3IsIF9vcHRpb25zLCBfY2FsbGJhY2spIHtcclxuICAgICAgICB2YXIgb3B0aW9ucyA9IF9vcHRpb25zIHx8IHt9O1xyXG4gICAgICAgIHZhciBpZEtleSA9IF9pZEtleSB8fCAnaWQnO1xyXG4gICAgICAgIHZhciBjYWxsYmFjayA9IF9jYWxsYmFjayB8fCBFTVBUWV9GVU5DVElPTjtcclxuICAgICAgICB2YXIgYXJyYXkgPSBfYXJyYXkgfHwgW107XHJcbiAgICAgICAgdmFyIGl0ZW1MaXN0ID0gW107XHJcbiAgICAgICAgdmFyIGl0ZW1Qcm9jZXNzb3IgPSBfaXRlbVByb2Nlc3NvciB8fCBFTVBUWV9GVU5DVElPTjtcclxuXHJcbiAgICAgICAgYXJyYXkuZm9yRWFjaChmdW5jdGlvbiAoX2l0ZW0pIHtcclxuICAgICAgICAgICAgdmFyIGtleSA9IF9pdGVtW2lkS2V5XTtcclxuICAgICAgICAgICAgaWYgKGtleSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBpdGVtID0gc2VsZi5zdG9yZVZhbHVlKGtleSwgX2l0ZW0sIF9vcHRpb25zKTtcclxuXHJcbiAgICAgICAgICAgIGl0ZW1Qcm9jZXNzb3IoaXRlbSk7XHJcbiAgICAgICAgICAgIGl0ZW1MaXN0LnB1c2goaXRlbSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNhbGxiYWNrKF9hcnJheSwgaXRlbUxpc3QpO1xyXG4gICAgICAgIHJldHVybiBpdGVtTGlzdDtcclxuICAgIH07XHJcblxyXG4gICAgc3RvcmVWYWx1ZShfa2V5LCBfdmFsdWUsIF9vcHRpb25zLCBfY2FsbGJhY2spIHtcclxuICAgICAgICB2YXIgb3B0aW9ucyA9IF9vcHRpb25zIHx8IHt9O1xyXG4gICAgICAgIHZhciBzdG9yZSA9IHRoaXMuZGF0YU1hcDtcclxuICAgICAgICB2YXIga2V5ID0gX2tleTtcclxuICAgICAgICB2YXIgY2FsbGJhY2sgPSBfY2FsbGJhY2sgfHwgRU1QVFlfRlVOQ1RJT047XHJcbiAgICAgICAgdmFyIG5ld1ZhbHVlID0gX3ZhbHVlO1xyXG4gICAgICAgIHZhciBpdGVtID0gc3RvcmVba2V5XTtcclxuICAgICAgICBpZihpdGVtIT09dW5kZWZpbmVkICYmIGl0ZW0gPT09IE9iamVjdChpdGVtKSAmJiBvcHRpb25zLm92ZXJ3cml0ZSE9PXRydWUpIHtcclxuICAgICAgICAgICAgaXRlbSA9IE9iamVjdC5hc3NpZ24oaXRlbSwgbmV3VmFsdWUpO1xyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgaXRlbSA9IG5ld1ZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRhdGFNYXBba2V5XSA9IGl0ZW07XHJcblxyXG4gICAgICAgIGNhbGxiYWNrKGl0ZW0pO1xyXG4gICAgICAgIHRoaXMucmVhY3Qoa2V5KTtcclxuICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgIH07XHJcbiAgICBnZXRWYWx1ZShfa2V5KSB7XHJcbiAgICAgICAgdmFyIGtleSA9IF9rZXkgfHwgJyc7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YU1hcFtrZXldO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25uZWN0KF9rZXksX2FjdGlvbikge1xyXG4gICAgICAgIGlmKF9rZXk9PT11bmRlZmluZWQgfHwgX2FjdGlvbj09PXVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBhY3Rpb25NYXAgPSB0aGlzLmFjdGlvbk1hcDtcclxuICAgICAgICB2YXIgYWN0aW9uTGlzdCA9IGFjdGlvbk1hcFtfa2V5XSB8fCBbXTtcclxuICAgICAgICBhY3Rpb25MaXN0LnB1c2goX2FjdGlvbik7XHJcbiAgICAgICAgYWN0aW9uTWFwW19rZXldID0gYWN0aW9uTGlzdDtcclxuICAgIH07XHJcbiAgICByZWFjdChfa2V5KSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGlmKF9rZXk9PT11bmRlZmluZWQpe1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgYWN0aW9uTWFwID0gdGhpcy5hY3Rpb25NYXA7XHJcbiAgICAgICAgdmFyIGFjdGlvbkxpc3QgPSBhY3Rpb25NYXBbX2tleV0gfHwgW107XHJcbiAgICAgICAgYWN0aW9uTGlzdC5mb3JFYWNoKChhY3Rpb24pPT4ge1xyXG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBzZWxmLmdldFZhbHVlKF9rZXkpO1xyXG4gICAgICAgICAgICBhY3Rpb24odmFsdWUpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9O1xyXG4gICAgZGVidWcoc3RyKSB7XHJcbiAgICAgICAgaWYodGhpcy5kZWJ1Z01vZGUpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnREVCVUc6ICcgKyBzdHIpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuY29uc3QgY2MgPSBuZXcgQ3ViWV9Db3JlKCk7XHJcbndpbmRvdy5jYyA9IGNjO1xyXG5leHBvcnQgZGVmYXVsdCBjYztcclxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgQW54aW4gWWFuZyBvbiA1LzI2LzIwMTguXHJcbiAqL1xyXG5pbXBvcnQgQVhDb3JlIGZyb20gJy4vQ3ViWV9Db3JlJztcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3ViWV9ET00ge1xyXG4gICAgY29uc3RydWN0b3IoX3RhZyxfaWQsX3Jvb3QpIHtcclxuICAgICAgICB0aGlzLmlkID0gdGhpcy5yZWFkVmFsdWUoX2lkKXx8ICdzZWxmJztcclxuICAgICAgICB0aGlzLnRhZyA9IHRoaXMucmVhZFZhbHVlKF90YWcpIHx8ICdkaXYnO1xyXG4gICAgICAgIHRoaXMuZG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0aGlzLnRhZyk7XHJcbiAgICAgICAgdGhpcy5kb20uc2V0QXR0cmlidXRlKCdpZCcsdGhpcy5pZCk7XHJcbiAgICAgICAgdGhpcy5jaGlsZHJlbkxpc3QgPSBbXTtcclxuICAgICAgICB0aGlzLmF0dHJpYnV0ZSA9IHt9O1xyXG4gICAgICAgIHRoaXMuZG9tU3R5bGUgPSB7fTtcclxuICAgICAgICB0aGlzLnVwZGF0ZXJzID0ge307XHJcbiAgICAgICAgdGhpcy5wYXJlbnQ7XHJcbiAgICAgICAgdGhpcy5jbGFzc2VzID0gW107XHJcbiAgICAgICAgdGhpcy5yb290KF9yb290KTtcclxuXHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMudXBkYXRlciA9IGZ1bmN0aW9uIChuYW1lKSB7XHJcbiAgICAgICAgICAgIGxldCB1cGRhdGVyID10aGlzLnVwZGF0ZXJzW25hbWVdO1xyXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYodXBkYXRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZXIuY2FsbChzZWxmLCBzZWxmLmRhdGEsIGFyZ3VtZW50cyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgc2V0VXBkYXRlcihuYW1lLHVwZGF0ZXIpe1xyXG4gICAgICAgIHRoaXMudXBkYXRlcnNbbmFtZV0gPSB1cGRhdGVyO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgYmluZChkYXRhKXtcclxuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgcm9vdChfcm9vdCl7XHJcbiAgICAgICAgaWYoX3Jvb3Qpe1xyXG4gICAgICAgICAgICBfcm9vdC5hcHBlbmRDaGlsZCh0aGlzLmRvbSk7XHJcbiAgICAgICAgICAgIHRoaXMuaXNSb290ID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5hY3RpdmF0ZWQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBhcHBlbmQoX3RhZyxfaWQpe1xyXG4gICAgICAgIGxldCB0YWcgPSB0aGlzLnJlYWRWYWx1ZShfdGFnKTtcclxuICAgICAgICBsZXQgaWQgPSB0aGlzLnJlYWRWYWx1ZShfaWQpO1xyXG4gICAgICAgIGxldCBlbGVtZW50ID0gbmV3IEN1YllfRE9NKHRhZyxpZCk7XHJcbiAgICAgICAgdGhpcy5hcHBlbmRFbGVtZW50KGVsZW1lbnQpO1xyXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgfVxyXG4gICAgYXBwZW5kRWxlbWVudChDdWJZX0RPTSl7XHJcbiAgICAgICAgbGV0IGVsZW1lbnQgPSB0aGlzLnJlYWRWYWx1ZShDdWJZX0RPTSk7XHJcbiAgICAgICAgZWxlbWVudC5wYXJlbnQgPSB0aGlzO1xyXG5cclxuICAgICAgICB0aGlzLmNoaWxkcmVuTGlzdC5wdXNoKGVsZW1lbnQpO1xyXG4gICAgICAgIHRoaXMuZG9tLmFwcGVuZENoaWxkKGVsZW1lbnQuZG9tKTtcclxuICAgICAgICBpZih0aGlzLmlzQWN0aXZlIHx8IHRoaXMuaXNSb290KSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuYWN0aXZhdGVkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgfVxyXG4gICAgYXR0cihrZXksX3ZhbHVlKXtcclxuICAgICAgICBsZXQgdmFsdWU7XHJcblxyXG4gICAgICAgIGlmKHR5cGVvZiBrZXkgPT09ICdvYmplY3QnKXtcclxuICAgICAgICAgICAgZm9yKHZhciBrIGluIGtleSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF0dHIoayxrZXlba10pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihrZXkgPT09J2FjdGl2YXRlZCcgfHwga2V5ID09PSAnZGVhY3RpdmF0ZWQnKXtcclxuICAgICAgICAgICAgdmFsdWUgPSBfdmFsdWU7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHZhbHVlID0gdGhpcy5yZWFkVmFsdWUoX3ZhbHVlKTtcclxuICAgICAgICAgICAgdGhpcy5kb20uc2V0QXR0cmlidXRlKGtleSx2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmF0dHJpYnV0ZVtrZXldID0gdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBvbihldmVudE5hbWUsX3ZhbHVlKXtcclxuICAgICAgICBsZXQgdmFsdWUgPSBfdmFsdWU7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMub25bZXZlbnROYW1lXSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuZG9tLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHZhbHVlLmNhbGwoc2VsZixlLHNlbGYuZGF0YSwpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBzdHlsZShfa2V5LF92YWx1ZSl7XHJcbiAgICAgICAgbGV0IGtleSA9IHRoaXMucmVhZFZhbHVlKF9rZXkpO1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IHRoaXMucmVhZFZhbHVlKF92YWx1ZSk7XHJcbiAgICAgICAgaWYodHlwZW9mIGtleSA9PT0gJ29iamVjdCcpe1xyXG4gICAgICAgICAgICBmb3IodmFyIGsgaW4ga2V5KXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3R5bGUoayxrZXlba10pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZG9tU3R5bGVba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuZG9tLnN0eWxlW2tleV0gPSB2YWx1ZTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIGNvbnRlbnQoX3ZhbHVlKXtcclxuICAgICAgICBsZXQgdmFsdWUgPSB0aGlzLnJlYWRWYWx1ZShfdmFsdWUpO1xyXG4gICAgICAgIHRoaXMuaW5uZXJIVE1MID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5kb20uaW5uZXJIVE1MID0gdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBhcHBlbmRDbGFzcyhfY2xhc3NOYW1lKXtcclxuICAgICAgICBsZXQgY2xhc3NOYW1lID0gdGhpcy5yZWFkVmFsdWUoX2NsYXNzTmFtZSk7XHJcbiAgICAgICAgbGV0IGNsYXNzZXMgPSB0aGlzLmNsYXNzZXMgfHwgW107XHJcbiAgICAgICAgY2xhc3Nlcy5wdXNoKGNsYXNzTmFtZSk7XHJcbiAgICAgICAgdGhpcy5kb20uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gICAgICAgIHRoaXMuY2xhc3NlcyA9IGNsYXNzZXM7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBzZWxlY3QoX3NlbGVjdG9yKXtcclxuICAgICAgICBsZXQgc2VsZWN0b3IgPSBfc2VsZWN0b3IuY2hhckF0KDApO1xyXG4gICAgICAgIGxldCBuYW1lID0gX3NlbGVjdG9yLnN1YnN0cmluZygxKTtcclxuICAgICAgICBzd2l0Y2ggKHNlbGVjdG9yKXtcclxuICAgICAgICAgICAgY2FzZSAnIyc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RCeUlkKG5hbWUpO1xyXG4gICAgICAgICAgICBjYXNlICcuJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNlbGVjdEJ5Q2xhc3NOYW1lKG5hbWUpO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0QnlUYWcoX3NlbGVjdG9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzZWxlY3RCeUlkKGlkKXtcclxuICAgICAgICBsZXQgY2hpbGRyZW5MaXN0ID0gdGhpcy5jaGlsZHJlbkxpc3Q7XHJcbiAgICAgICAgbGV0IHRhcmdldDtcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpPGNoaWxkcmVuTGlzdC5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5MaXN0W2ldO1xyXG4gICAgICAgICAgICBpZihjaGlsZC5pZCA9PT0gaWQpe1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gY2hpbGQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xyXG4gICAgfVxyXG4gICAgc2VsZWN0QnlDbGFzc05hbWUoY2xhc3NOYW1lKXtcclxuICAgICAgICBsZXQgY2hpbGRyZW5MaXN0ID0gdGhpcy5jaGlsZHJlbkxpc3Q7XHJcbiAgICAgICAgbGV0IHRhcmdldExpc3QgPSBbXTtcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpPGNoaWxkcmVuTGlzdC5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5MaXN0W2ldO1xyXG4gICAgICAgICAgICBpZihjaGlsZC5jbGFzc2VzLmluZGV4T2YoY2xhc3NOYW1lKT4tMSl7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRMaXN0LnB1c2goY2hpbGQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0YXJnZXRMaXN0O1xyXG4gICAgfVxyXG4gICAgc2VsZWN0QnlUYWcoX3RhZyl7XHJcbiAgICAgICAgbGV0IGNoaWxkcmVuTGlzdCA9IHRoaXMuY2hpbGRyZW5MaXN0O1xyXG4gICAgICAgIGxldCB0YXJnZXRMaXN0ID0gW107XHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaTxjaGlsZHJlbkxpc3QubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuTGlzdFtpXTtcclxuICAgICAgICAgICAgaWYoY2hpbGQudGFnID09PSBfdGFnKXtcclxuICAgICAgICAgICAgICAgIHRhcmdldExpc3QucHVzaChjaGlsZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRhcmdldExpc3Q7XHJcbiAgICB9XHJcbiAgICByZW1vdmUoX3NlbGVjdG9yLF90cmFuc2l0aW9uKXtcclxuICAgICAgICBpZihfc2VsZWN0b3I9PT11bmRlZmluZWQpe1xyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZVNlbGYoX3RyYW5zaXRpb24pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBzZWxlY3RvciA9IF9zZWxlY3Rvci5jaGFyQXQoMCk7XHJcbiAgICAgICAgbGV0IG5hbWUgPSBfc2VsZWN0b3Iuc3Vic3RyaW5nKDEpO1xyXG4gICAgICAgIGxldCB0YXJnZXQ7XHJcbiAgICAgICAgc3dpdGNoIChzZWxlY3Rvcil7XHJcbiAgICAgICAgICAgIGNhc2UgJyMnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVCeUlkKG5hbWUsX3RyYW5zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJy4nOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVCeUNsYXNzTmFtZShuYW1lLF90cmFuc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVCeVRhZyhfc2VsZWN0b3IsX3RyYW5zaXRpb24pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlbW92ZUJ5SWQoaWQsX3RyYW5zaXRpb24pe1xyXG4gICAgICAgIGxldCBjaGlsZHJlbkxpc3QgPSB0aGlzLmNoaWxkcmVuTGlzdDtcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpPGNoaWxkcmVuTGlzdC5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5MaXN0W2ldO1xyXG4gICAgICAgICAgICBpZihjaGlsZC5pZCA9PT0gaWQpe1xyXG4gICAgICAgICAgICAgICAgY2hpbGRyZW5MaXN0LnNwbGljZShpLDEpO1xyXG4gICAgICAgICAgICAgICAgY2hpbGQucmVtb3ZlKHVuZGVmaW5lZCxfdHJhbnNpdGlvbik7XHJcbiAgICAgICAgICAgICAgICBpLS07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlbW92ZUJ5Q2xhc3NOYW1lKGNsYXNzTmFtZSxfdHJhbnNpdGlvbil7XHJcbiAgICAgICAgbGV0IGNoaWxkcmVuTGlzdCA9IHRoaXMuY2hpbGRyZW5MaXN0O1xyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGk8Y2hpbGRyZW5MaXN0Lmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICBsZXQgY2hpbGQgPSBjaGlsZHJlbkxpc3RbaV07XHJcbiAgICAgICAgICAgIGlmKGNoaWxkLmNsYXNzZXMuaW5kZXhPZihjbGFzc05hbWUpPi0xKXtcclxuICAgICAgICAgICAgICAgIGNoaWxkcmVuTGlzdC5zcGxpY2UoaSwxKTtcclxuICAgICAgICAgICAgICAgIGNoaWxkLnJlbW92ZSh1bmRlZmluZWQsX3RyYW5zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgaS0tO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVtb3ZlQnlUYWcoX3RhZyxfdHJhbnNpdGlvbil7XHJcbiAgICAgICAgbGV0IGNoaWxkcmVuTGlzdCA9IHRoaXMuY2hpbGRyZW5MaXN0O1xyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGk8Y2hpbGRyZW5MaXN0Lmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICBsZXQgY2hpbGQgPSBjaGlsZHJlbkxpc3RbaV07XHJcbiAgICAgICAgICAgIGlmKGNoaWxkLnRhZyA9PT0gX3RhZyl7XHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlbkxpc3Quc3BsaWNlKGksMSk7XHJcbiAgICAgICAgICAgICAgICBjaGlsZC5yZW1vdmUodW5kZWZpbmVkLF90cmFuc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgIGktLTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlbW92ZVNlbGYoX3RyYW5zaXRpb24pe1xyXG4gICAgICAgIC8qdGhpcy5jaGlsZHJlbkxpc3QuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgICAgICAgICAgY2hpbGQucmVtb3ZlKCk7XHJcbiAgICAgICAgfSk7Ki9cclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5kZWFjdGl2YXRlZCgpO1xyXG4gICAgICAgIGlmKF90cmFuc2l0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVhY3RpdmF0ZWRUaW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5kb20ucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIH0sX3RyYW5zaXRpb24pXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHNlbGYuZG9tLnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLnBhcmVudCl7XHJcbiAgICAgICAgICAgIGxldCBjaGlsZHJlbkxpc3QgPSB0aGlzLnBhcmVudC5jaGlsZHJlbkxpc3Q7XHJcbiAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGk8Y2hpbGRyZW5MaXN0Lmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5MaXN0W2ldO1xyXG4gICAgICAgICAgICAgICAgaWYoY2hpbGQgPT09IHRoaXMpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuTGlzdC5zcGxpY2UoaSwxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvKmZvcih2YXIga2V5IGluIHRoaXMpe1xyXG4gICAgICAgICAgICBkZWxldGUgdGhpc1trZXldXHJcbiAgICAgICAgfSovXHJcbiAgICB9XHJcbiAgICBhY3RpdmF0ZWQoKXtcclxuICAgICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBpZih0aGlzLmRlYWN0aXZhdGVkVGltZXIpe1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5kZWFjdGl2YXRlZFRpbWVyKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLmF0dHJpYnV0ZS5hY3RpdmF0ZWQpe1xyXG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZS5hY3RpdmF0ZWQuY2FsbCh0aGlzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY2hpbGRyZW5MaXN0LmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgICAgICAgIGNoaWxkLmFjdGl2YXRlZCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZGVhY3RpdmF0ZWQoKXtcclxuICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmKHRoaXMuYXR0cmlidXRlLmRlYWN0aXZhdGVkKXtcclxuICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGUuZGVhY3RpdmF0ZWQuY2FsbCh0aGlzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY2hpbGRyZW5MaXN0LmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgICAgICAgIGNoaWxkLmRlYWN0aXZhdGVkKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZWFkVmFsdWUoX3ZhbHVlKXtcclxuICAgICAgICBsZXQgdmFsdWUgPSBfdmFsdWU7XHJcbiAgICAgICAgaWYodHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIpe1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWUuY2FsbCh0aGlzLHRoaXMuZGF0YSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJjb25zdCBNQVhfQ1lDTEUgPSAxMDA7XHJcbmNsYXNzIEN1YllfUm91dGluZXtcclxuICAgIGNvbnN0cnVjdG9yKF90aWNrU3BlZWQsX29wdGlvbnMpe1xyXG4gICAgICAgIGxldCBvcHRpb25zID0gX29wdGlvbnMgfHwge307XHJcbiAgICAgICAgdGhpcy5pbml0KG9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMuTUFYX0NZQ0xFID0gTUFYX0NZQ0xFO1xyXG4gICAgfVxyXG4gICAgaW5pdChvcHRpb25zKXtcclxuICAgICAgICB3aW5kb3cuY3IgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuY3ljbGUgPSAwO1xyXG4gICAgICAgIHRoaXMucm91dGluZUxpc3QgPSBbXTtcclxuICAgICAgICB0aGlzLmxvbmdlc3RSb3V0aW5lVGltZSA9MDtcclxuICAgICAgICBzZXRUaW1lb3V0KHRoaXMuc3RhcnQuYmluZCh0aGlzKSwwKTtcclxuICAgIH07XHJcbiAgICBzdGFydCgpe1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLmN5Y2xlU3RhcnRUaW1lID0gRGF0ZS5ub3coKTtcclxuICAgICAgICBzZXRUaW1lb3V0KHNlbGYucm91dGluZS5iaW5kKHRoaXMpLDApO1xyXG4gICAgfVxyXG4gICAgYXBwZW5kKG5hbWUsZ3JvdXApIHtcclxuICAgICAgICBsZXQgbmV3Um91dGluZSA9IG5ldyBSb3V0aW5lKG5hbWUsIGdyb3VwKTtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgbmV3Um91dGluZS5pbnNlcnQ9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYobmV3Um91dGluZS5mcmVxIT09MSkge1xyXG4gICAgICAgICAgICAgICAgbmV3Um91dGluZS5jb3VudGVyICs9IHNlbGYucm91dGluZUxpc3QubGVuZ3RoICsgMTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc2VsZi5yb3V0aW5lTGlzdC5wdXNoKG5ld1JvdXRpbmUpO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3Um91dGluZTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIG5ld1JvdXRpbmUucmVtb3ZlPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGxldCBpbmRleCA9ICBzZWxmLnJvdXRpbmVMaXN0LmluZGV4T2YobmV3Um91dGluZSk7XHJcbiAgICAgICAgICAgIHNlbGYucm91dGluZUxpc3Quc3BsaWNlKGluZGV4LDEpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIG5ld1JvdXRpbmU7XHJcbiAgICB9XHJcbiAgICBnZXRDdXJyZW50Q3ljbGUoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5jeWNsZTtcclxuICAgIH1cclxuICAgIHJvdXRpbmUoKXtcclxuICAgICAgICBsZXQgcm91dGluZUxpc3QgPSB0aGlzLnJvdXRpbmVMaXN0O1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBmb3IodmFyIGk9MDtpPHJvdXRpbmVMaXN0Lmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICBsZXQgcm91dGluZSA9IHJvdXRpbmVMaXN0W2ldO1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgaWYocm91dGluZS5jaGVja0xvY2soKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJvdXRpbmUubG9jaygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHN0YXJ0VGltZSA9IERhdGUubm93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRpbmUuYWN0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYubGFzdFJvdXRpbmVUaW1lID0gRGF0ZS5ub3coKSAtIHN0YXJ0VGltZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoc2VsZi5sb25nZXN0Um91dGluZVRpbWU8c2VsZi5sYXN0Um91dGluZVRpbWUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5sb25nZXN0Um91dGluZVRpbWU9c2VsZi5sYXN0Um91dGluZVRpbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoc2VsZi5sYXN0Um91dGluZVRpbWU+MjAwKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignUm91dGluZTonICsgcm91dGluZS5uYW1lICsgJyB0b29rIHRvbyBsb25nIHRvIHJ1bi4gWycrc2VsZi5sYXN0Um91dGluZVRpbWUrJ21zXScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGluZS51bmxvY2soKTtcclxuICAgICAgICAgICAgICAgICAgICB9LHJvdXRpbmUuZnJlcSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1jYXRjaCAoZSl7XHJcbiAgICAgICAgICAgICAgICAvL0RFQ0lERSBJRiBSRU1PVkUgUk9VVElORSBMQVRFUjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmN5Y2xlKys7XHJcbiAgICAgICAgaWYodGhpcy5jeWNsZSA9PT0gTUFYX0NZQ0xFKXtcclxuICAgICAgICAgICAgdGhpcy5jeWNsZSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdEN5Y2xlVGltZSA9IERhdGUubm93KCkgLSB0aGlzLmN5Y2xlU3RhcnRUaW1lO1xyXG4gICAgICAgICAgICB0aGlzLmN5Y2xlUGVyU2VjID0gTWF0aC5mbG9vcigxMDAwIC8gdGhpcy5sYXN0Q3ljbGVUaW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zdGFydCgpO1xyXG4gICAgfVxyXG59XHJcbmNsYXNzIFJvdXRpbmV7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lLGdyb3VwKXtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuZ3JvdXAgPSBncm91cCB8fCAnY29tbW9uJztcclxuICAgICAgICB0aGlzLmZyZXEgPSAxO1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLmFjdGlvbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgc2VsZi5pc1J1bm5pbmcgPSB0cnVlO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5jb3VudGVyPTA7XHJcbiAgICAgICAgdGhpcy5yZXBlYXQgPSAtMTtcclxuICAgIH1cclxuICAgIGxvY2soKXtcclxuICAgICAgICBpZih0aGlzLnJlcGVhdD4wKXRoaXMucmVwZWF0LS07XHJcbiAgICAgICAgdGhpcy5pc1J1bm5pbmcgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgdW5sb2NrKCl7XHJcbiAgICAgICAgaWYodGhpcy5yZXBlYXQ9PT0wKXtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pc1J1bm5pbmcgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGF0dHIoa2V5LHZhbHVlKXtcclxuICAgICAgICB0aGlzW2tleV0gPSB2YWx1ZTtcclxuICAgICAgICBpZihrZXk9PT0nZnJlcScpe1xyXG4gICAgICAgICAgICB0aGlzWydjb3VudGVyJ10gPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICByZXNldENvdW50ZXIoKXtcclxuICAgICAgICB0aGlzLmNvdW50ZXIgPSB0aGlzLmZyZXE7XHJcbiAgICB9XHJcbiAgICBjaGVja0xvY2soKXtcclxuICAgICAgICBpZih0aGlzLmNvdW50ZXI+MCl7XHJcbiAgICAgICAgICAgIHRoaXMuY291bnRlci0tO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGhpcy5pc1J1bm5pbmc9PT10cnVlIHx8IHRoaXMuY291bnRlcj4wKXtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5jb25zdCBjciA9IG5ldyBDdWJZX1JvdXRpbmUoKTtcclxud2luZG93LmNyID0gY3I7XHJcbmV4cG9ydCBkZWZhdWx0IGNyOyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFueGluIFlhbmcgb24gNi8xMi8yMDE4LlxyXG4gKi9cclxuaW1wb3J0IEN1YllfRE9NIGZyb20gJy4uL0ZyYW1ld29yay9DdWJZL0N1YllfRE9NJztcclxuaW1wb3J0IGhvbWVDb250ZW50IGZyb20gXCIuLi9ob21lXCI7XHJcbmxldCBvcmlnaW4gPSB7XHJcbiAgICB4OiB3aW5kb3cuaW5uZXJXaWR0aC8yLFxyXG4gICAgeTogd2luZG93LmlubmVySGVpZ2h0LzJcclxufTtcclxud2luZG93Lm1vYmlsZWNoZWNrID0gZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgY2hlY2sgPSBmYWxzZTtcclxuICAgIChmdW5jdGlvbihhKXtpZigvKGFuZHJvaWR8YmJcXGQrfG1lZWdvKS4rbW9iaWxlfGF2YW50Z298YmFkYVxcL3xibGFja2JlcnJ5fGJsYXplcnxjb21wYWx8ZWxhaW5lfGZlbm5lY3xoaXB0b3B8aWVtb2JpbGV8aXAoaG9uZXxvZCl8aXJpc3xraW5kbGV8bGdlIHxtYWVtb3xtaWRwfG1tcHxtb2JpbGUuK2ZpcmVmb3h8bmV0ZnJvbnR8b3BlcmEgbShvYnxpbilpfHBhbG0oIG9zKT98cGhvbmV8cChpeGl8cmUpXFwvfHBsdWNrZXJ8cG9ja2V0fHBzcHxzZXJpZXMoNHw2KTB8c3ltYmlhbnx0cmVvfHVwXFwuKGJyb3dzZXJ8bGluayl8dm9kYWZvbmV8d2FwfHdpbmRvd3MgY2V8eGRhfHhpaW5vL2kudGVzdChhKXx8LzEyMDd8NjMxMHw2NTkwfDNnc298NHRocHw1MFsxLTZdaXw3NzBzfDgwMnN8YSB3YXxhYmFjfGFjKGVyfG9vfHNcXC0pfGFpKGtvfHJuKXxhbChhdnxjYXxjbyl8YW1vaXxhbihleHxueXx5dyl8YXB0dXxhcihjaHxnbyl8YXModGV8dXMpfGF0dHd8YXUoZGl8XFwtbXxyIHxzICl8YXZhbnxiZShja3xsbHxucSl8YmkobGJ8cmQpfGJsKGFjfGF6KXxicihlfHYpd3xidW1ifGJ3XFwtKG58dSl8YzU1XFwvfGNhcGl8Y2N3YXxjZG1cXC18Y2VsbHxjaHRtfGNsZGN8Y21kXFwtfGNvKG1wfG5kKXxjcmF3fGRhKGl0fGxsfG5nKXxkYnRlfGRjXFwtc3xkZXZpfGRpY2F8ZG1vYnxkbyhjfHApb3xkcygxMnxcXC1kKXxlbCg0OXxhaSl8ZW0obDJ8dWwpfGVyKGljfGswKXxlc2w4fGV6KFs0LTddMHxvc3x3YXx6ZSl8ZmV0Y3xmbHkoXFwtfF8pfGcxIHV8ZzU2MHxnZW5lfGdmXFwtNXxnXFwtbW98Z28oXFwud3xvZCl8Z3IoYWR8dW4pfGhhaWV8aGNpdHxoZFxcLShtfHB8dCl8aGVpXFwtfGhpKHB0fHRhKXxocCggaXxpcCl8aHNcXC1jfGh0KGMoXFwtfCB8X3xhfGd8cHxzfHQpfHRwKXxodShhd3x0Yyl8aVxcLSgyMHxnb3xtYSl8aTIzMHxpYWMoIHxcXC18XFwvKXxpYnJvfGlkZWF8aWcwMXxpa29tfGltMWt8aW5ub3xpcGFxfGlyaXN8amEodHx2KWF8amJyb3xqZW11fGppZ3N8a2RkaXxrZWppfGtndCggfFxcLyl8a2xvbnxrcHQgfGt3Y1xcLXxreW8oY3xrKXxsZShub3x4aSl8bGcoIGd8XFwvKGt8bHx1KXw1MHw1NHxcXC1bYS13XSl8bGlid3xseW54fG0xXFwtd3xtM2dhfG01MFxcL3xtYSh0ZXx1aXx4byl8bWMoMDF8MjF8Y2EpfG1cXC1jcnxtZShyY3xyaSl8bWkobzh8b2F8dHMpfG1tZWZ8bW8oMDF8MDJ8Yml8ZGV8ZG98dChcXC18IHxvfHYpfHp6KXxtdCg1MHxwMXx2ICl8bXdicHxteXdhfG4xMFswLTJdfG4yMFsyLTNdfG4zMCgwfDIpfG41MCgwfDJ8NSl8bjcoMCgwfDEpfDEwKXxuZSgoY3xtKVxcLXxvbnx0Znx3Znx3Z3x3dCl8bm9rKDZ8aSl8bnpwaHxvMmltfG9wKHRpfHd2KXxvcmFufG93ZzF8cDgwMHxwYW4oYXxkfHQpfHBkeGd8cGcoMTN8XFwtKFsxLThdfGMpKXxwaGlsfHBpcmV8cGwoYXl8dWMpfHBuXFwtMnxwbyhja3xydHxzZSl8cHJveHxwc2lvfHB0XFwtZ3xxYVxcLWF8cWMoMDd8MTJ8MjF8MzJ8NjB8XFwtWzItN118aVxcLSl8cXRla3xyMzgwfHI2MDB8cmFrc3xyaW05fHJvKHZlfHpvKXxzNTVcXC98c2EoZ2V8bWF8bW18bXN8bnl8dmEpfHNjKDAxfGhcXC18b298cFxcLSl8c2RrXFwvfHNlKGMoXFwtfDB8MSl8NDd8bWN8bmR8cmkpfHNnaFxcLXxzaGFyfHNpZShcXC18bSl8c2tcXC0wfHNsKDQ1fGlkKXxzbShhbHxhcnxiM3xpdHx0NSl8c28oZnR8bnkpfHNwKDAxfGhcXC18dlxcLXx2ICl8c3koMDF8bWIpfHQyKDE4fDUwKXx0NigwMHwxMHwxOCl8dGEoZ3R8bGspfHRjbFxcLXx0ZGdcXC18dGVsKGl8bSl8dGltXFwtfHRcXC1tb3x0byhwbHxzaCl8dHMoNzB8bVxcLXxtM3xtNSl8dHhcXC05fHVwKFxcLmJ8ZzF8c2kpfHV0c3R8djQwMHx2NzUwfHZlcml8dmkocmd8dGUpfHZrKDQwfDVbMC0zXXxcXC12KXx2bTQwfHZvZGF8dnVsY3x2eCg1Mnw1M3w2MHw2MXw3MHw4MHw4MXw4M3w4NXw5OCl8dzNjKFxcLXwgKXx3ZWJjfHdoaXR8d2koZyB8bmN8bncpfHdtbGJ8d29udXx4NzAwfHlhc1xcLXx5b3VyfHpldG98enRlXFwtL2kudGVzdChhLnN1YnN0cigwLDQpKSkgY2hlY2sgPSB0cnVlO30pKG5hdmlnYXRvci51c2VyQWdlbnR8fG5hdmlnYXRvci52ZW5kb3J8fHdpbmRvdy5vcGVyYSk7XHJcbiAgICByZXR1cm4gY2hlY2s7XHJcbn07XHJcbmRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gZnVuY3Rpb24oZSl7XHJcbiAgICBsZXQgeCA9IGUuY2xpZW50WDtcclxuICAgIGxldCB5ID0gZS5jbGllbnRZO1xyXG5cclxuICAgIGJhY2tncm91bmQuZHggPSAtKHggLSBvcmlnaW4ueCkvMTA7XHJcbiAgICBiYWNrZ3JvdW5kLmR5ID0gLSh5IC0gb3JpZ2luLnkpLzEwO1xyXG59O1xyXG5cclxudmFyIGJhY2tncm91bmQgPSBuZXcgQ3ViWV9ET00oJ2RpdicsJ2JhY2tncm91bmQnKTtcclxuYmFja2dyb3VuZC5zdHlsZSgnd2lkdGgnLCcxMDB2dycpXHJcbiAgICAuc3R5bGUoJ2hlaWdodCcsJzEwMHZoJylcclxuICAgIC5zdHlsZSgncG9zaXRpb24nLCdmaXhlZCcpXHJcbiAgICAuc3R5bGUoJ2JhY2tncm91bmQnLCdibGFjaycpXHJcbiAgICAuc3R5bGUoJ3RvcCcsMClcclxuICAgIC5zdHlsZSgnbGVmdCcsMClcclxuICAgIC5zdHlsZSgnekluZGV4JywwKTtcclxudmFyIGNpcmNsZU51bSA9IG1vYmlsZWNoZWNrKCk/NTA6MTI4O1xyXG52YXIgY2lyY2xlTGlzdCA9IFtdO1xyXG5cclxuZm9yKHZhciBpPTA7aTxjaXJjbGVOdW07aSsrKXtcclxuICAgIGxldCBjaXJjbGUgPSBuZXcgQ3ViWV9ET00oJ2RpdicsJ2JhY2tncm91bmRDaXJjbGVfJytpKVxyXG4gICAgICAgIC5zdHlsZSgncG9zaXRpb24nLCdhYnNvbHV0ZScpXHJcbiAgICAgICAgLnN0eWxlKCd3aWR0aCcsJzIwcHgnKVxyXG4gICAgICAgIC5zdHlsZSgnaGVpZ2h0JywnMjBweCcpXHJcbiAgICAgICAgLnN0eWxlKCdib3JkZXJSYWRpdXMnLCc0cHgnKVxyXG4gICAgICAgIC5zdHlsZSgnYmFja2dyb3VuZCcsJyNlY2NjNjgnKVxyXG4gICAgICAgIC5zdHlsZSgndHJhbnNpdGlvbicsJzAuM3MgbGluZWFyJylcclxuICAgICAgICAuc3R5bGUoJ2JveFNoYWRvdycsJzAgMCAxMHB4ICNlY2NjNjgnKVxyXG4gICAgICAgIC5zdHlsZSgnb3BhY2l0eScsICcwJylcclxuICAgICAgICAuYXR0cignYWN0aXZhdGVkJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICAgICAgbGV0IHggPSBNYXRoLnJhbmRvbSgpKndpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgICAgICAgICBsZXQgeSA9IE1hdGgucmFuZG9tKCkqd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgICAgICAgICB0aGlzLmR4ID0gTWF0aC5yYW5kb20oKS0wLjU7XHJcbiAgICAgICAgICAgIHRoaXMuZHkgPSBNYXRoLnJhbmRvbSgpLTAuNTtcclxuICAgICAgICAgICAgdGhpcy5kcyA9IDAuMDE7XHJcbiAgICAgICAgICAgIHRoaXMuc2NhbGUgPSAgTWF0aC5yYW5kb20oKTtcclxuICAgICAgICAgICAgdGhpcy5jb3VudGVyID0gMTA7XHJcbiAgICAgICAgICAgIHRoaXMuc3R5bGUoJ3RyYW5zZm9ybScsJ3RyYW5zbGF0ZSgnKyB4ICsncHgsJysgeSArJ3B4KScpO1xyXG4gICAgICAgICAgICB0aGlzLmNpcmNsZUFuID0gY3IuYXBwZW5kKCdob21lX2NpcmNsZV9hbmltYXRpb25fJytpKVxyXG4gICAgICAgICAgICAgICAgLmF0dHIoJ2ZyZXEnLDUwKVxyXG4gICAgICAgICAgICAgICAgLmF0dHIoJ2FjdGlvbicsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzY2FsZSA9IHNlbGYuc2NhbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNlZWQgPSBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYueCs9c2VsZi5keDtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLnkrPXNlbGYuZHk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuc3R5bGUoJ3RyYW5zZm9ybScsJ3RyYW5zbGF0ZSgnKyhzZWxmLnggKyAoYmFja2dyb3VuZC5keHx8MCkqc2NhbGUpKydweCwnKyhzZWxmLnkgKyAoYmFja2dyb3VuZC5keXx8MCkqc2NhbGUpKydweCkgc2NhbGUoJytzY2FsZSsnKScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zdHlsZSgnb3BhY2l0eScsIHNjYWxlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc3R5bGUoJ3pJbmRleCcsIHNjYWxlPj0wLjg/MjowKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc3R5bGUoJ2JveFNoYWRvdycsJzAgMCAnKyhzZWVkKjEwKzEwKSsncHggI2VjY2M2OCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHNlbGYueD53aW5kb3cuaW5uZXJXaWR0aCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZHggPSAtKHNlZWQqMC41KzAuMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfWVsc2UgaWYoc2VsZi54PDApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmR4ID0gc2VlZCowLjUrMC4xO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZihzZWxmLnk+d2luZG93LmlubmVySGVpZ2h0KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5keSA9IC0oc2VlZCowLjUrMC4xKTtcclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZSBpZihzZWxmLnk8MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZHkgPSBzZWVkKjAuNSswLjE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY291bnRlci0tO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHNlbGYuY291bnRlcjw9MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY291bnRlcj0xMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5zY2FsZSs9Y2lyY2xlLmRzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihzZWxmLnNjYWxlPj0xKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZHM9LTAuMDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoc2VsZi5zY2FsZTw9MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmRzPTAuMDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KS5pbnNlcnQoKTtcclxuICAgICAgICAgICAgdGhpcy5jaXJjbGVBbjIgPSBjci5hcHBlbmQoJ2hvbWVfY2lyY2xlX2FuaW1hdGlvbl8yXycraSlcclxuICAgICAgICAgICAgICAgIC5hdHRyKCdmcmVxJywzMDApXHJcbiAgICAgICAgICAgICAgICAuYXR0cignYWN0aW9uJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNlZWQgPSBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuc3R5bGUoJ2JveFNoYWRvdycsJzAgMCAnKyhzZWVkKjQwKzEwKSsncHggI2VjY2M2OCcpO1xyXG4gICAgICAgICAgICAgICAgfSkuaW5zZXJ0KCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuYXR0cignZGVhY3RpdmF0ZWQnLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5jaXJjbGVBbi5yZW1vdmUoKTtcclxuICAgICAgICAgICAgdGhpcy5jaXJjbGVBbjIucmVtb3ZlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICBjYy5jb25uZWN0KCdjdXJyZW50VmlldycsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCB4ID0gTWF0aC5yYW5kb20oKSp3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgICAgICBsZXQgeSA9IE1hdGgucmFuZG9tKCkqd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgICAgIGxldCBzY2FsZSA9IGNpcmNsZS5zY2FsZSA9ICBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgIGNpcmNsZS54ID0geDtcclxuICAgICAgICBjaXJjbGUueSA9IHk7XHJcbiAgICAgICAgY2lyY2xlLnN0eWxlKCd0cmFuc2Zvcm0nLCd0cmFuc2xhdGUoJysoc2VsZi54ICsgKGJhY2tncm91bmQuZHh8fDApKnNjYWxlKSsncHgsJysoc2VsZi55ICsgKGJhY2tncm91bmQuZHl8fDApKnNjYWxlKSsncHgpIHNjYWxlKCcrc2NhbGUrJyknKVxyXG4gICAgfSk7XHJcbiAgICBiYWNrZ3JvdW5kLmFwcGVuZEVsZW1lbnQoY2lyY2xlKTtcclxuXHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IGJhY2tncm91bmQ7IiwiaW1wb3J0IEN1YllfRE9NIGZyb20gJy4uL0ZyYW1ld29yay9DdWJZL0N1YllfRE9NJztcclxuXHJcbnZhciBoZWFkZXIgPSBuZXcgQ3ViWV9ET00oJ2RpdicsICdoZWFkZXInKVxyXG4gICAgLmF0dHIoJ29uc2VsZWN0c3RhcnQnLCAncmV0dXJuIGZhbHNlOycpXHJcbiAgICAuc3R5bGUoJ2Rpc3BsYXknLCAnZmxleCcpXHJcbiAgICAuc3R5bGUoJ3Bvc2l0aW9uJywgJ2Fic29sdXRlJylcclxuICAgIC5zdHlsZSgnb3BhY2l0eScsICcwLjUnKVxyXG4gICAgLnN0eWxlKCd0b3AnLCAnMWVtJylcclxuICAgIC5zdHlsZSgnaGVpZ2h0JywgJzNlbScpXHJcbiAgICAuc3R5bGUoJ3pJbmRleCcsICcxMCcpXHJcbiAgICAuc3R5bGUoJ3RyYW5zaXRpb24nLCAnMC4zcycpXHJcbiAgICAub24oJ21vdXNlb3ZlcicsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnN0eWxlKCdvcGFjaXR5JywgJzEnKVxyXG4gICAgfSlcclxuICAgIC5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnN0eWxlKCdvcGFjaXR5JywgJzAuNScpXHJcbiAgICB9KTtcclxuXHJcbnZhciBoZWFkZXJJdGVtcyA9IFsnTWVudScsICdQbGF5Z3JvdW5kJywgJ0Fib3V0J107XHJcbnZhciBpbmRleCA9IDA7XHJcbmhlYWRlckl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgIGhlYWRlckl0ZW1zW2luZGV4KytdID0gaGVhZGVyLmFwcGVuZCgnZGl2JywgJ2hlYWRlcl8nICsgaXRlbSlcclxuICAgICAgICAuY29udGVudChpdGVtKVxyXG4gICAgICAgIC5hcHBlbmRDbGFzcygneHgnKVxyXG4gICAgICAgIC5zdHlsZSgnY29sb3InLCAnd2hpdGUnKVxyXG4gICAgICAgIC5zdHlsZSgncGFkZGluZycsICcxZW0gMC41ZW0nKVxyXG4gICAgICAgIC5zdHlsZSgnY3Vyc29yJywgJ3BvaW50ZXInKVxyXG4gICAgICAgIC5zdHlsZSgndGV4dFNoYWRvdycsICcwIDAgMTBweCAjZWNjYzY4JylcclxuICAgICAgICAuc3R5bGUoJ3RyYW5zaXRpb24nLCAnMC4zcycpXHJcbiAgICAgICAgLm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3R5bGUoJ3RleHRTaGFkb3cnLCAnMCAwIDEwcHggI2VjY2M2OCcpXHJcbiAgICAgICAgICAgICAgICAuc3R5bGUoJ2NvbG9yJywgJyNlY2NjNjgnKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5zdHlsZSgndGV4dFNoYWRvdycsICcwIDAgMjBweCAjZWNjYzY4JylcclxuICAgICAgICAgICAgICAgIC5zdHlsZSgnY29sb3InLCAnd2hpdGUnKTtcclxuICAgICAgICB9KTtcclxufSk7XHJcbnZhciBoZWFkZXJNZW51QnV0dG9uID0gaGVhZGVySXRlbXNbMF07XHJcbmhlYWRlck1lbnVCdXR0b24uc3R5bGUoJ3Bvc2l0aW9uJywgJ3JlbGF0aXZlJyk7XHJcbnZhciBtZW51Q29udGFpbmVyID0gaGVhZGVyTWVudUJ1dHRvbi5hcHBlbmQoJ2RpdicsICdtZW51Q29udGFpbmVyJylcclxuICAgIC5zdHlsZSgncG9zaXRpb24nLCAnYWJzb2x1dGUnKVxyXG4gICAgLnN0eWxlKCd3aWR0aCcsICcyNTZweCcpXHJcbiAgICAuc3R5bGUoJ2hlaWdodCcsICcwcHgnKVxyXG4gICAgLnN0eWxlKCdiYWNrZ3JvdW5kJywgJycpXHJcbiAgICAuc3R5bGUoJ3RvcCcsICcxMjUlJylcclxuICAgIC5zdHlsZSgnbGVmdCcsICcwJylcclxuICAgIC5zdHlsZSgnb3ZlcmZsb3cnLCAnaGlkZGVuJylcclxuICAgIC5zdHlsZSgndHJhbnNpdGlvbicsICcwLjNzJylcclxuICAgIC5zZXRVcGRhdGVyKCd0b2dnbGVNZW51JywgZnVuY3Rpb24gKGQpIHtcclxuICAgICAgICBsZXQgaGFzT3BlbiA9IHRoaXMuaGFzT3BlbiB8fCBmYWxzZTtcclxuICAgICAgICBpZiAoaGFzT3Blbikge1xyXG4gICAgICAgICAgICB0aGlzLnN0eWxlKCdoZWlnaHQnLCAnMCcpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zdHlsZSgnaGVpZ2h0JywgJzMzdmgnKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmhhc09wZW4gPSAhaGFzT3BlbjtcclxuICAgIH0pXHJcbiAgICAuc2V0VXBkYXRlcignY2xvc2VNZW51JywgZnVuY3Rpb24gKGQpIHtcclxuICAgICAgICB0aGlzLnN0eWxlKCdoZWlnaHQnLCAnMCcpXHJcbiAgICAgICAgICAgIC5zdHlsZSgnYm94U2hhZG93JywgJzBweCAwcHggNXB4IHJnYmEoMTEyLCAxNjEsIDI1NSwwKScpXHJcbiAgICAgICAgICAgIC5zdHlsZSgnYm9yZGVyJywgJzFweCBzb2xpZCByZ2JhKDExMiwgMTYxLCAyNTUsIDApJyk7XHJcbiAgICAgICAgdGhpcy5oYXNPcGVuID0gZmFsc2U7XHJcbiAgICB9KTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBtZW51Q29udGFpbmVyLnVwZGF0ZXIoJ2Nsb3NlTWVudScpKCk7XHJcbn0pO1xyXG5cclxuaGVhZGVyTWVudUJ1dHRvbi5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIG1lbnVDb250YWluZXIudXBkYXRlcigndG9nZ2xlTWVudScpKCk7XHJcbn0pO1xyXG5cclxudmFyIG1lbnVDb250ZW50cyA9IG1lbnVDb250YWluZXIuYXBwZW5kKCd1bCcpXHJcbiAgICAuc3R5bGUoJ3BhZGRpbmdMZWZ0JywgJzJlbScpXHJcbiAgICAuc3R5bGUoJ21hcmdpbicsICcwJyk7XHJcblxyXG52YXIgbWVudUl0ZW1zID0gWydIb21lJywgJ01heSBDb21pbmcgc29vbicsICdQcm9iYWJseSBDb21pbmcgc29vbiddO1xyXG5pbmRleCA9IDA7XHJcblxyXG5tZW51SXRlbXMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgbWVudUl0ZW1zW2luZGV4KytdID0gbWVudUNvbnRlbnRzLmFwcGVuZCgnbGknLCAnbWVudV8nICsgaXRlbSlcclxuICAgICAgICAuY29udGVudChpdGVtKVxyXG4gICAgICAgIC5zdHlsZSgnY29sb3InLCAnd2hpdGUnKVxyXG4gICAgICAgIC5zdHlsZSgncGFkZGluZycsICcxZW0gMC41ZW0nKVxyXG4gICAgICAgIC5zdHlsZSgnY3Vyc29yJywgJ3BvaW50ZXInKVxyXG4gICAgICAgIC5zdHlsZSgndGV4dFNoYWRvdycsICcwIDAgMTBweCAjZWNjYzY4JylcclxuICAgICAgICAuc3R5bGUoJ3RyYW5zaXRpb24nLCAnMC4zcycpXHJcbiAgICAgICAgLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY2Muc3RvcmVWYWx1ZSgnY3VycmVudFZpZXcnLCBpdGVtKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5vbignbW91c2VvdmVyJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLnN0eWxlKCd0ZXh0U2hhZG93JywgJzAgMCAxMHB4ICNlY2NjNjgnKVxyXG4gICAgICAgICAgICAgICAgLnN0eWxlKCdjb2xvcicsICcjZWNjYzY4Jyk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3R5bGUoJ3RleHRTaGFkb3cnLCAnMCAwIDIwcHggI2VjY2M2OCcpXHJcbiAgICAgICAgICAgICAgICAuc3R5bGUoJ2NvbG9yJywgJ3doaXRlJyk7XHJcbiAgICAgICAgfSk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGVhZGVyOyIsImltcG9ydCBDdWJZX0RPTSBmcm9tICcuL0ZyYW1ld29yay9DdWJZL0N1YllfRE9NJztcclxuXHJcblxyXG52YXIgbWFpbkNvbnRlbnQgPSBuZXcgQ3ViWV9ET00oJ2RpdicsJ2hvbWVDb250ZW50Jyk7XHJcbm1haW5Db250ZW50LnN0eWxlKCd3aWR0aCcsJzEwMHZ3JylcclxuICAgIC5zdHlsZSgnaGVpZ2h0JywnMTAwdmgnKVxyXG4gICAgLnN0eWxlKCdiYWNrZ3JvdW5kJywnIzIyMmYzZScpXHJcbiAgICAuc3R5bGUoJ3Bvc2l0aW9uJywncmVsYXRpdmUnKVxyXG4gICAgLnN0eWxlKCd0cmFuc2l0aW9uJywgJzVzJylcclxuICAgIC5zdHlsZSgnb3ZlcmZsb3cnLCdoaWRkZW4nKVxyXG4gICAgLmFwcGVuZENsYXNzKCdtYWluQ29udGVudCcpO1xyXG5cclxudmFyIGJhY2tncm91bmRBbiA9IGNyLmFwcGVuZCgnYmFja2dyb3VuZEFuJylcclxuICAgIC5hdHRyKCdmcmVxJywzMDApXHJcbiAgICAuYXR0cigncmVwZWF0JywxKVxyXG4gICAgLmF0dHIoJ2FjdGlvbicsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIG1haW5Db250ZW50LnN0eWxlKCdiYWNrZ3JvdW5kJywndHJhbnNwYXJlbnQnKVxyXG4gICAgfSkuaW5zZXJ0KCk7XHJcblxyXG52YXIgaGVhZExpbmUgPSBtYWluQ29udGVudC5hcHBlbmQoJ2gxJywnaGVhZExpbmUnKVxyXG4gICAgLmNvbnRlbnQoJ0ZST05UIEVORCBFTkdJTkVFUicpXHJcbiAgICAuc3R5bGUoJ3Bvc2l0aW9uJywnZml4ZWQnKVxyXG4gICAgLnN0eWxlKCdjb2xvcicsJ3doaXRlJylcclxuICAgIC5zdHlsZSgnd2lkdGgnLCcxMDAlJylcclxuICAgIC5zdHlsZSgnaGVpZ2h0JywgJzYwcHgnKVxyXG4gICAgLnN0eWxlKCd0ZXh0QWxpZ24nLCdjZW50ZXInKVxyXG4gICAgLnN0eWxlKCdsZWZ0JywnMCcpXHJcbiAgICAuc3R5bGUoJ3JpZ2h0JywnMCcpXHJcbiAgICAuc3R5bGUoJ2JvdHRvbScsJzMzJScpXHJcbiAgICAuc3R5bGUoJ21hcmdpbicsJ2F1dG8nKVxyXG4gICAgLnN0eWxlKCdmb250U2l6ZScsJzY0cHgnKVxyXG4gICAgLnN0eWxlKCd0cmFuc2l0aW9uJywgJzFzJylcclxuICAgIC5zdHlsZSgnb3BhY2l0eScsIDApXHJcbiAgICAuc3R5bGUoJ3RleHRTaGFkb3cnLCcwIDAgMTBweCAjNzBhMWZmJylcclxuICAgIC5zdHlsZSgnekluZGV4JywxKVxyXG4gICAgLm9uKCdtb3VzZW92ZXInLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnN0eWxlKCd0ZXh0U2hhZG93JywnMCAwIDMwcHggI2VjY2M2OCcpXHJcbiAgICB9KVxyXG4gICAgLm9uKCdtb3VzZWxlYXZlJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5zdHlsZSgndGV4dFNoYWRvdycsJzAgMCAxMHB4ICM3MGExZmYnKVxyXG4gICAgfSlcclxuICAgIC5hdHRyKCdhY3RpdmF0ZWQnLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgc2V0VGltZW91dChcclxuICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5zdHlsZSgnb3BhY2l0eScsIDEpXHJcbiAgICAgICAgICAgIH0sMzAwXHJcbiAgICAgICAgKVxyXG5cclxuICAgIH0pXHJcbiAgICAuYXR0cignZGVhY3RpdmF0ZWQnLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnN0eWxlKCdvcGFjaXR5JywgMClcclxuICAgIH0pO1xyXG5cclxudmFyIGhvbWVIZWFkTGluZUFuaW1hdGlvbiA9IGNyLmFwcGVuZCgnaG9tZV9oZWFkTGluZV9hbmltYXRpb24nKVxyXG4gICAgLmF0dHIoJ2ZyZXEnLDMwMClcclxuICAgIC5hdHRyKCdhY3Rpb24nLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBsZXQgb2RkID0gTWF0aC5yYW5kb20oKSoxMDA7XHJcbiAgICAgICAgaWYob2RkPjUwKXtcclxuICAgICAgICAgICAgaGVhZExpbmUuc3R5bGUoJ3RleHRTaGFkb3cnLCcwIDAgMzBweCAjZWNjYzY4JylcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgaGVhZExpbmUuc3R5bGUoJ3RleHRTaGFkb3cnLCcwIDAgMTBweCAjNzBhMWZmJylcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgLmluc2VydCgpO1xyXG5cclxudmFyIHN1YkhlYWRMaW5lID0gbWFpbkNvbnRlbnQuYXBwZW5kKCdoMScsJ3N1YkhlYWRMaW5lJylcclxuICAgIC5jb250ZW50KCctIHdobyBtYWtlcyBkYXRhIGFsaXZlIC0nKVxyXG4gICAgLnN0eWxlKCdwb3NpdGlvbicsJ2ZpeGVkJylcclxuICAgIC5zdHlsZSgnY29sb3InLCcjZWNjYzY4JylcclxuICAgIC5zdHlsZSgnd2lkdGgnLCcxMDAlJylcclxuICAgIC5zdHlsZSgnaGVpZ2h0JywgJzMwcHgnKVxyXG4gICAgLnN0eWxlKCd0ZXh0QWxpZ24nLCdjZW50ZXInKVxyXG4gICAgLnN0eWxlKCdsZWZ0JywnMCcpXHJcbiAgICAuc3R5bGUoJ3JpZ2h0JywnMCcpXHJcbiAgICAuc3R5bGUoJ2JvdHRvbScsJzMwJScpXHJcbiAgICAuc3R5bGUoJ21hcmdpbicsJ2F1dG8nKVxyXG4gICAgLnN0eWxlKCdmb250U2l6ZScsJzMycHgnKVxyXG4gICAgLnN0eWxlKCd0cmFuc2l0aW9uJywgJzFzJylcclxuICAgIC5zdHlsZSgnb3BhY2l0eScsIDApXHJcbiAgICAuc3R5bGUoJ3RleHRTaGFkb3cnLCcwIDAgMTBweCAjZWNjYzY4JylcclxuICAgIC5zdHlsZSgnekluZGV4JywxKVxyXG4gICAgLmF0dHIoJ2FjdGl2YXRlZCcsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBzZXRUaW1lb3V0KFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLnN0eWxlKCdvcGFjaXR5JywgMSlcclxuICAgICAgICAgICAgfSwzMDBcclxuICAgICAgICApXHJcblxyXG4gICAgfSlcclxuICAgIC5hdHRyKCdkZWFjdGl2YXRlZCcsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuc3R5bGUoJ29wYWNpdHknLCAwKVxyXG4gICAgfSk7XHJcblxyXG52YXIgaW5mb0J1dHRvbkhhbG8gPSBtYWluQ29udGVudC5hcHBlbmQoJ3NwYW4nLCdpbmZvQnV0dG9uSGFsbycpXHJcbiAgICAuc3R5bGUoJ3Bvc2l0aW9uJywnZml4ZWQnKVxyXG4gICAgLnN0eWxlKCdjb2xvcicsJyNlY2NjNjgnKVxyXG4gICAgLnN0eWxlKCd3aWR0aCcsJzMycHgnKVxyXG4gICAgLnN0eWxlKCdoZWlnaHQnLCAnMzJweCcpXHJcbiAgICAuc3R5bGUoJ29wYWNpdHknLCAwKVxyXG4gICAgLnN0eWxlKCdvdmVyZmxvdycsJ2hpZGRlbicpXHJcbiAgICAuc3R5bGUoJ2JvcmRlclJhZGl1cycsJzRweCcpXHJcbiAgICAuc3R5bGUoJ3RleHRBbGlnbicsJ2NlbnRlcicpXHJcbiAgICAuc3R5bGUoJ2xlZnQnLCcwJylcclxuICAgIC5zdHlsZSgncmlnaHQnLCcwJylcclxuICAgIC5zdHlsZSgnYm90dG9tJywnMTglJylcclxuICAgIC5zdHlsZSgnbWFyZ2luJywnYXV0bycpXHJcbiAgICAuc3R5bGUoJ2ZvbnRTaXplJywnMjRweCcpXHJcbiAgICAuc3R5bGUoJ3RyYW5zaXRpb24nLCAnMC41cycpXHJcbiAgICAuc3R5bGUoJ2JvcmRlcicsJzFweCBzb2xpZCAjZWNjYzY4JylcclxuICAgIC5zdHlsZSgnYm94U2hhZG93JywnMCAwIDMwcHggI2VjY2M2OCcpXHJcbiAgICAuc3R5bGUoJ2N1cnNvcicsJ3BvaW50ZXInKVxyXG4gICAgLnN0eWxlKCd6SW5kZXgnLDEpXHJcbiAgICAuYXR0cignYWN0aXZhdGVkJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHNldFRpbWVvdXQoXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYuc3R5bGUoJ29wYWNpdHknLCAxKVxyXG4gICAgICAgICAgICB9LDMwMFxyXG4gICAgICAgIClcclxuXHJcbiAgICB9KVxyXG4gICAgLmF0dHIoJ2RlYWN0aXZhdGVkJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5zdHlsZSgnb3BhY2l0eScsIDApXHJcbiAgICB9KTtcclxuXHJcbnZhciBpbmZvQnV0dG9uID0gbWFpbkNvbnRlbnQuYXBwZW5kKCdzcGFuJywnaW5mb0J1dHRvbicpXHJcbiAgICAuY29udGVudCgnV2FubmEga25vdyBtb3JlPycpXHJcbiAgICAuc3R5bGUoJ3Bvc2l0aW9uJywnZml4ZWQnKVxyXG4gICAgLnN0eWxlKCdjb2xvcicsJyNlY2NjNjgnKVxyXG4gICAgLnN0eWxlKCd3aWR0aCcsJzMycHgnKVxyXG4gICAgLnN0eWxlKCdoZWlnaHQnLCAnMzJweCcpXHJcbiAgICAuc3R5bGUoJ292ZXJmbG93JywnaGlkZGVuJylcclxuICAgIC5zdHlsZSgnYm9yZGVyJywnMXB4IHNvbGlkIHRyYW5zcGFyZW50JylcclxuICAgIC5zdHlsZSgnYm9yZGVyUmFkaXVzJywnNHB4JylcclxuICAgIC5zdHlsZSgndGV4dEFsaWduJywnY2VudGVyJylcclxuICAgIC5zdHlsZSgnbGVmdCcsJzAnKVxyXG4gICAgLnN0eWxlKCdvcGFjaXR5JywgMClcclxuICAgIC5zdHlsZSgncmlnaHQnLCcwJylcclxuICAgIC5zdHlsZSgnYm90dG9tJywnMTglJylcclxuICAgIC5zdHlsZSgnbWFyZ2luJywnYXV0bycpXHJcbiAgICAuc3R5bGUoJ2ZvbnRTaXplJywnMjRweCcpXHJcbiAgICAuc3R5bGUoJ3RyYW5zaXRpb24nLCAnMC41cycpXHJcbiAgICAuc3R5bGUoJ2JhY2tncm91bmQnLCAnI2VjY2M2OCcpXHJcbiAgICAuc3R5bGUoJ3RleHRTaGFkb3cnLCcwIDAgNXB4ICNlY2NjNjgnKVxyXG4gICAgLnN0eWxlKCdib3hTaGFkb3cnLCcwIDAgMTB4ICNlY2NjNjgnKVxyXG4gICAgLnN0eWxlKCdjdXJzb3InLCdwb2ludGVyJylcclxuICAgIC5zdHlsZSgnekluZGV4JywxKVxyXG4gICAgLmF0dHIoJ2FjdGl2YXRlZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgc2V0VGltZW91dChcclxuICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5zdHlsZSgnb3BhY2l0eScsIDEpXHJcbiAgICAgICAgICAgIH0sMzAwXHJcbiAgICAgICAgKSxcclxuICAgICAgICB0aGlzLnN0eWxlKCdiYWNrZ3JvdW5kJywgJyNlY2NjNjgnKVxyXG4gICAgICAgICAgICAuc3R5bGUoJ3dpZHRoJywnMzJweCcpXHJcbiAgICAgICAgICAgIC5zdHlsZSgnYm94U2hhZG93JywnMCAwIDEwcHggI2VjY2M2OCcpO1xyXG4gICAgICAgIGluZm9CdXR0b24ub3ZlcmVkID0gZmFsc2U7XHJcblxyXG4gICAgfSlcclxuICAgIC5vbignY2xpY2snLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjYy5zdG9yZVZhbHVlKCdjdXJyZW50VmlldycsJ2Fib3V0Jyk7XHJcbiAgICB9KVxyXG4gICAgLm9uKCdtb3VzZW92ZXInLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnN0eWxlKCdiYWNrZ3JvdW5kJywncmdiYSgwLCAwLCAwLCAwLjUpJylcclxuICAgICAgICAgICAgLnN0eWxlKCd3aWR0aCcsJzEwMCUnKVxyXG4gICAgICAgICAgICAuc3R5bGUoJ2JveFNoYWRvdycsJycpO1xyXG4gICAgICAgIGluZm9CdXR0b25IYWxvLnN0eWxlKCdvcGFjaXR5JywgMCk7XHJcbiAgICAgICAgaW5mb0J1dHRvbi5vdmVyZWQgPSB0cnVlO1xyXG4gICAgfSlcclxuICAgIC5vbignbW91c2VsZWF2ZScsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuc3R5bGUoJ2JhY2tncm91bmQnLCAnI2VjY2M2OCcpXHJcbiAgICAgICAgICAgIC5zdHlsZSgnd2lkdGgnLCczMnB4JylcclxuICAgICAgICAgICAgLnN0eWxlKCdib3hTaGFkb3cnLCcwIDAgMTBweCAjZWNjYzY4Jyk7XHJcbiAgICAgICAgaW5mb0J1dHRvbi5vdmVyZWQgPSBmYWxzZTtcclxuICAgIH0pO1xyXG5cclxudmFyIGluZm9CdXR0b25IYWxvQW4gPSBjci5hcHBlbmQoJ2luZm9CdXR0b25IYWxvQW4nKVxyXG4gICAgLmF0dHIoJ2ZyZXEnLDYwMClcclxuICAgIC5hdHRyKCdhY3Rpb24nLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZihpbmZvQnV0dG9uLm92ZXJlZCA9PT0gdHJ1ZSl7XHJcbiAgICAgICAgICAgIGluZm9CdXR0b25IYWxvLnN0YXRlID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3dpdGNoKGluZm9CdXR0b25IYWxvLnN0YXRlKXtcclxuICAgICAgICAgICAgY2FzZSB1bmRlZmluZWQ6XHJcbiAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgIGluZm9CdXR0b25IYWxvLnN0YXRlID0gMTtcclxuICAgICAgICAgICAgICAgIGluZm9CdXR0b25IYWxvLnN0eWxlKCd3aWR0aCcsICc2NHB4JylcclxuICAgICAgICAgICAgICAgICAgICAuc3R5bGUoJ2JvdHRvbScsJ2NhbGMoMTglIC0gMTVweCknKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdHlsZSgnaGVpZ2h0JywgJzY0cHgnKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdHlsZSgnb3BhY2l0eScsIDApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIGluZm9CdXR0b25IYWxvLnN0YXRlID0gMjtcclxuICAgICAgICAgICAgICAgIGluZm9CdXR0b25IYWxvLnN0eWxlKCd3aWR0aCcsICczMnB4JylcclxuICAgICAgICAgICAgICAgICAgICAuc3R5bGUoJ2JvdHRvbScsJzE4JScpXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0eWxlKCdoZWlnaHQnLCAnMzJweCcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIGluZm9CdXR0b25IYWxvLnN0YXRlID0gMDtcclxuICAgICAgICAgICAgICAgIGluZm9CdXR0b25IYWxvLnN0eWxlKCdvcGFjaXR5JywgMSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9KS5pbnNlcnQoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1haW5Db250ZW50OyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFueGluIFlhbmcgb24gMy8yOC8yMDE4LlxyXG4gKi9cclxuaW1wb3J0IENDIGZyb20gJy4vRnJhbWV3b3JrL0N1YlkvQ3ViWV9Db3JlJztcclxuaW1wb3J0IEN1YllfRE9NIGZyb20gJy4vRnJhbWV3b3JrL0N1YlkvQ3ViWV9ET00nO1xyXG5pbXBvcnQgQ1IgZnJvbSAnLi9GcmFtZXdvcmsvQ3ViWS9DdWJZX1JvdXRpbmUnO1xyXG5pbXBvcnQgaG9tZUNvbnRlbnQgZnJvbSAnLi9ob21lJztcclxuaW1wb3J0IGhlYWRlciBmcm9tICcuL2NvbXBvbmVudHMvaGVhZGVyJ1xyXG5pbXBvcnQgYmFja2dyb25kIGZyb20gJy4vY29tcG9uZW50cy9iYWNrZ3JvdW5kX3N0YXJzJ1xyXG5jb25zdCBWSUVXX1RSQU5TSVRJT05fVElNRSA9IDUwMDtcclxuICAgIHdpbmRvdy5yb290ID0gbmV3IEN1YllfRE9NKCdkaXYnLCAnYXhfcm9vdCcsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7XHJcbiAgICByb290LnN0eWxlKCdmb250U2l6ZScsICcxMnB4JylcclxuICAgICAgICAuc3R5bGUoJ2N1cnNvcicsICd1cmwoKSwgYXV0bycpO1xyXG4gICAgcm9vdC5hcHBlbmRFbGVtZW50KGhlYWRlcik7XHJcbiAgICB2YXIgbWFpbkNvbnRhaW5lciA9IHJvb3QuYXBwZW5kKCdkaXYnLCAnbWFpbkNvbnRhaW5lcicpO1xyXG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRFbGVtZW50KGhvbWVDb250ZW50KTtcclxuICAgIG1haW5Db250YWluZXIuYXBwZW5kRWxlbWVudChiYWNrZ3JvbmQpO1xyXG4gICAgY2Muc3RvcmVWYWx1ZSgnY3VycmVudFZpZXcnLCdIb21lJyk7XHJcbiAgICBjYy5jb25uZWN0KCdjdXJyZW50VmlldycsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCBjdXJyZW50VmlldyA9IGNjLmdldFZhbHVlKCdjdXJyZW50VmlldycpO1xyXG4gICAgICAgIG1haW5Db250YWluZXIucmVtb3ZlKCcubWFpbkNvbnRlbnQnLFZJRVdfVFJBTlNJVElPTl9USU1FKTtcclxuICAgICAgICBzd2l0Y2ggKGN1cnJlbnRWaWV3KXtcclxuICAgICAgICAgICAgY2FzZSAnSG9tZSc6XHJcbiAgICAgICAgICAgICAgICBtYWluQ29udGFpbmVyLmFwcGVuZEVsZW1lbnQoaG9tZUNvbnRlbnQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdmFyIHZlcnNpb24gPSByb290LmFwcGVuZCgncCcsICd2ZXJzaW9uJylcclxuICAgICAgICAuc3R5bGUoJ3Bvc2l0aW9uJywgJ2ZpeGVkJylcclxuICAgICAgICAuc3R5bGUoJ2JvdHRvbScsICcwcHgnKVxyXG4gICAgICAgIC5zdHlsZSgncmlnaHQnLCAnMCcpXHJcbiAgICAgICAgLnN0eWxlKCdwYWRkaW5nUmlnaHQnLCAnMWVtJylcclxuICAgICAgICAuc3R5bGUoJ2NvbG9yJywgJ2xpZ2h0Z3JheScpXHJcbiAgICAgICAgLmNvbnRlbnQobmV3IERhdGUoKSlcclxuICAgICAgICAuc2V0VXBkYXRlcigndGltZXInLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGVudCgnQ3ViWV9Sb3V0aW5lOiBMYXNyQ3ljbGVUaW1lOiAnICsgY3IubGFzdEN5Y2xlVGltZSArICdtcyB8IENQUzonICsgY3IuY3ljbGVQZXJTZWMgKyAnIHxMb25nZXN0OiAnICsgY3IubG9uZ2VzdFJvdXRpbmVUaW1lICsgJ21zIHwgTGFzdDonICsgY3IubGFzdFJvdXRpbmVUaW1lICsgJ21zJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB2YXIgdGltZXIgPSBjci5hcHBlbmQoJ3RpbWVyJylcclxuICAgICAgICAuYXR0cignZnJlcScsIDEpXHJcbiAgICAgICAgLmF0dHIoJ2FjdGlvbicsIHZlcnNpb24udXBkYXRlcigndGltZXInKSlcclxuICAgICAgICAuaW5zZXJ0KCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=