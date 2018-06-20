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
    circle.rearrange = function () {
        var x = Math.random() * window.innerWidth;
        var y = Math.random() * window.innerHeight;
        var scale = circle.scale = Math.random();
        circle.x = x;
        circle.y = y;
        circle.style('transform', 'translate(' + (self.x + (background.dx || 0) * scale) + 'px,' + (self.y + (background.dy || 0) * scale) + 'px) scale(' + scale + ')');
    };
    cc.connect('currentView', circle.rearrange);
    cc.connect('viewportSize', circle.rearrange);
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

window.addEventListener('resize', function () {
    if (window.resizing) {
        clearTimeout(window.resizing);
    }
    window.resizing = setTimeout(function () {
        cc.storeValue('viewportSize', { w: window.innerWidth, h: window.innerHeight });
    }, 200);
});
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
        case 'About':
            mainContainer.appendElement(_about2.default);
            break;
    }
});

var version = root.append('p', 'version').style('position', 'fixed').style('bottom', '0px').style('right', '0').style('paddingRight', '1em').style('color', 'lightgray').content(new Date()).setUpdater('timer', function () {
    this.content('CubY_Routine: LasrCycleTime: ' + cr.lastCycleTime + 'ms | CPS:' + cr.cyclePerSec + ' |Longest: ' + cr.longestRoutineTime + 'ms | Last:' + cr.lastRoutineTime + 'ms');
});
var timer = cr.append('timer').attr('freq', 1).attr('action', version.updater('timer')).insert();

/***/ }),

/***/ "./src/view/about.js":
/*!***************************!*\
  !*** ./src/view/about.js ***!
  \***************************/
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

var mainContent = new _CubY_DOM2.default('div', 'about');
var mainContentContainerStyle = {
    width: '100vw',
    height: '100vh',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexWrap: 'wrap'
};
var sectionContainerStyle = {
    width: '30%',
    height: '70%',
    border: '1px solid #eccc68',
    overflow: 'hidden',
    minWidth: '300px',
    boxShadow: '0 0 10px #eccc68',
    transition: '0.5s',
    background: 'rgba(0,0,0,0.9)',
    opacity: 0
};
mainContent.style(mainContentContainerStyle).appendClass('mainContent');
var sections = ['Basic', 'Career', 'Education'];

sections.forEach(function (_section, idx) {
    var sectionContainer = mainContent.append('div', _section + 'Container');
    sectionContainer.style(sectionContainerStyle).attr('activated', function () {
        var self = this;
        setTimeout(function () {
            self.style('opacity', 1);
        }, 300 * (idx + 1));
    }).attr('deactivated', function () {
        this.style('opacity', 0);
    });
});

exports.default = mainContent;

/***/ }),

/***/ "./src/view/home.js":
/*!**************************!*\
  !*** ./src/view/home.js ***!
  \**************************/
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

var mainContent = new _CubY_DOM2.default('div', 'homeContent');
mainContent.style('width', '100%').style('height', '100%').style('background', '#222f3e').style('position', 'relative').style('transition', '5s').style('overflow', 'hidden').appendClass('mainContent');

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
    cc.storeValue('currentView', 'About');
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

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/index.js */"./src/index.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0ZyYW1ld29yay9DdWJZL0N1YllfQ29yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRnJhbWV3b3JrL0N1YlkvQ3ViWV9ET00uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0ZyYW1ld29yay9DdWJZL0N1YllfUm91dGluZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9iYWNrZ3JvdW5kX3N0YXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvaG9tZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRUEsSUFBTSxpQkFBaUIsMEJBQU0sQ0FBN0I7OzRCQUVJO3VCQUFZLFFBQU87OEJBQ2Y7O1lBQUksUUFBUSxTQUNaO1lBQUksT0FDSjthQUFLLEtBQ1I7Ozs7O3FDQUVHO2dCQUFJLFFBQVEsVUFD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SyxNQUFNLGNBQWEsc0JBQ25CLE1BQU0sU0FBUSxRQUNkLE1BQU0sYUFDWDttQkFBZSxNQUFNLFdBQ3JCO2VBQVcsU0FDZDtBQTVDWSxHQTZDWixHQUFHLGNBQWEsWUFDYjtTQUFLLE1BQU0sY0FBYyxXQUNwQixNQUFNLFNBQVEsUUFDZCxNQUFNLGFBQ1g7ZUFBVyxTQUNkO0FBbERZOztBQW9EakIsSUFBSSxzQkFBc0IsT0FBTyxvQkFDNUIsS0FBSyxRQUFPLEtBQ1osS0FBSyxVQUFTLFlBQ1g7UUFBRyxXQUFXLFdBQVcsTUFDckI7dUJBQWUsUUFDbEI7QUFDRDtZQUFPLGVBQ0g7YUFDQTthQUNJOzJCQUFlLFFBQ2Y7MkJBQWUsTUFBTSxTQUFTLFFBQ3pCLE1BQU0sVUFBUyxvQkFDZixNQUFNLFVBQVUsUUFDaEIsTUFBTSxXQUNYO0FBQ0o7YUFDSTsyQkFBZSxRQUNmOzJCQUFlLE1BQU0sU0FBUyxRQUN6QixNQUFNLFVBQVMsT0FDZixNQUFNLFVBQ1g7QUFDSjthQUNJOzJCQUFlLFFBQ2Y7MkJBQWUsTUFBTSxXQUNyQjtBQUVYOztBQTFCa0IsR0EwQmhCIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiY29uc3QgRU1QVFlfRlVOQ1RJT04gPSAoKT0+e307XHJcbmNsYXNzIEN1YllfQ29yZXtcclxuICAgIGNvbnN0cnVjdG9yKF9wcm9wcyl7XHJcbiAgICAgICAgbGV0IHByb3BzID0gcHJvcHMgfHwge307XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuaW5pdChwcm9wcyk7XHJcbiAgICB9XHJcbiAgICBpbml0KF9wcm9wcyl7XHJcbiAgICAgICAgbGV0IHByb3BzID0gX3Byb3BzIHx8IHt9O1xyXG4gICAgICAgIHRoaXMuZGVidWdNb2RlID0gcHJvcHMuZGVidWcgfHwgZmFsc2U7XHJcbiAgICAgICAgdGhpcy5kYXRhTWFwID0ge307XHJcbiAgICAgICAgdGhpcy5hY3Rpb25NYXAgPSB7fTtcclxuICAgICAgICB0aGlzLmJyb3dzZXIgPSB0aGlzLmdldEJyb3dzZXIoKTtcclxuICAgICAgICB3aW5kb3cuY2MgPSB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEJyb3dzZXIoKXtcclxuICAgICAgICBsZXQgaXNJRSA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBpc0Nocm9tZSA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBpc09wZXJhID0gZmFsc2U7XHJcbiAgICAgICAgaWYoKCEhd2luZG93Lm9wciAmJiAhIW9wci5hZGRvbnMpIHx8ICEhd2luZG93Lm9wZXJhIHx8IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignIE9QUi8nKSA+PSAwKXtcclxuICAgICAgICAgICAgaXNPcGVyYSA9IHRydWU7XHJcbiAgICAgICAgICAgIHJldHVybiAnb3BlcmEnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0eXBlb2YgSW5zdGFsbFRyaWdnZXIgIT09ICd1bmRlZmluZWQnKXtcclxuICAgICAgICAgICAgcmV0dXJuICdmaXJlZm94JztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoL2NvbnN0cnVjdG9yL2kudGVzdCh3aW5kb3cuSFRNTEVsZW1lbnQpIHx8IChmdW5jdGlvbiAocCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHAudG9TdHJpbmcoKSA9PT0gXCJbb2JqZWN0IFNhZmFyaVJlbW90ZU5vdGlmaWNhdGlvbl1cIjtcclxuICAgICAgICAgICAgfSkoIXdpbmRvd1snc2FmYXJpJ10gfHwgc2FmYXJpLnB1c2hOb3RpZmljYXRpb24pKXtcclxuICAgICAgICAgICAgcmV0dXJuICdzYWZhcmknO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihmYWxzZSB8fCAhIWRvY3VtZW50LmRvY3VtZW50TW9kZSl7XHJcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgb3V0cHV0ID0gYXJndW1lbnRzWzBdO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gYXJndW1lbnRzW2ldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvYmogPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoa2V5KSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dFtrZXldID0gb2JqW2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgaXNJRSA9dHJ1ZTtcclxuICAgICAgICAgICAgcmV0dXJuICdpZSc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCFpc0lFICYmICEhd2luZG93LlN0eWxlTWVkaWEpe1xyXG4gICAgICAgICAgICByZXR1cm4gJ2VkZ2UnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZighIXdpbmRvdy5jaHJvbWUgJiYgISF3aW5kb3cuY2hyb21lLndlYnN0b3JlKXtcclxuICAgICAgICAgICAgaXNDaHJvbWUgPSB0cnVlXHJcbiAgICAgICAgICAgIHJldHVybiAnY2hyb21lJztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoKGlzQ2hyb21lIHx8IGlzT3BlcmEpICYmICEhd2luZG93LkNTUyl7XHJcbiAgICAgICAgICAgIHJldHVybiAnYmxpbmsnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdG9yZURhdGFBcnJheShfYXJyYXksIF9pZEtleSwgX2l0ZW1Qcm9jZXNzb3IsIF9vcHRpb25zLCBfY2FsbGJhY2spIHtcclxuICAgICAgICB2YXIgb3B0aW9ucyA9IF9vcHRpb25zIHx8IHt9O1xyXG4gICAgICAgIHZhciBpZEtleSA9IF9pZEtleSB8fCAnaWQnO1xyXG4gICAgICAgIHZhciBjYWxsYmFjayA9IF9jYWxsYmFjayB8fCBFTVBUWV9GVU5DVElPTjtcclxuICAgICAgICB2YXIgYXJyYXkgPSBfYXJyYXkgfHwgW107XHJcbiAgICAgICAgdmFyIGl0ZW1MaXN0ID0gW107XHJcbiAgICAgICAgdmFyIGl0ZW1Qcm9jZXNzb3IgPSBfaXRlbVByb2Nlc3NvciB8fCBFTVBUWV9GVU5DVElPTjtcclxuXHJcbiAgICAgICAgYXJyYXkuZm9yRWFjaChmdW5jdGlvbiAoX2l0ZW0pIHtcclxuICAgICAgICAgICAgdmFyIGtleSA9IF9pdGVtW2lkS2V5XTtcclxuICAgICAgICAgICAgaWYgKGtleSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBpdGVtID0gc2VsZi5zdG9yZVZhbHVlKGtleSwgX2l0ZW0sIF9vcHRpb25zKTtcclxuXHJcbiAgICAgICAgICAgIGl0ZW1Qcm9jZXNzb3IoaXRlbSk7XHJcbiAgICAgICAgICAgIGl0ZW1MaXN0LnB1c2goaXRlbSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNhbGxiYWNrKF9hcnJheSwgaXRlbUxpc3QpO1xyXG4gICAgICAgIHJldHVybiBpdGVtTGlzdDtcclxuICAgIH07XHJcblxyXG4gICAgc3RvcmVWYWx1ZShfa2V5LCBfdmFsdWUsIF9vcHRpb25zLCBfY2FsbGJhY2spIHtcclxuICAgICAgICB2YXIgb3B0aW9ucyA9IF9vcHRpb25zIHx8IHt9O1xyXG4gICAgICAgIHZhciBzdG9yZSA9IHRoaXMuZGF0YU1hcDtcclxuICAgICAgICB2YXIga2V5ID0gX2tleTtcclxuICAgICAgICB2YXIgY2FsbGJhY2sgPSBfY2FsbGJhY2sgfHwgRU1QVFlfRlVOQ1RJT047XHJcbiAgICAgICAgdmFyIG5ld1ZhbHVlID0gX3ZhbHVlO1xyXG4gICAgICAgIHZhciBpdGVtID0gc3RvcmVba2V5XTtcclxuICAgICAgICBpZihpdGVtIT09dW5kZWZpbmVkICYmIGl0ZW0gPT09IE9iamVjdChpdGVtKSAmJiBvcHRpb25zLm92ZXJ3cml0ZSE9PXRydWUpIHtcclxuICAgICAgICAgICAgaXRlbSA9IE9iamVjdC5hc3NpZ24oaXRlbSwgbmV3VmFsdWUpO1xyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgaXRlbSA9IG5ld1ZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRhdGFNYXBba2V5XSA9IGl0ZW07XHJcblxyXG4gICAgICAgIGNhbGxiYWNrKGl0ZW0pO1xyXG4gICAgICAgIHRoaXMucmVhY3Qoa2V5KTtcclxuICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgIH07XHJcbiAgICBnZXRWYWx1ZShfa2V5KSB7XHJcbiAgICAgICAgdmFyIGtleSA9IF9rZXkgfHwgJyc7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YU1hcFtrZXldO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25uZWN0KF9rZXksX2FjdGlvbikge1xyXG4gICAgICAgIGlmKF9rZXk9PT11bmRlZmluZWQgfHwgX2FjdGlvbj09PXVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBhY3Rpb25NYXAgPSB0aGlzLmFjdGlvbk1hcDtcclxuICAgICAgICB2YXIgYWN0aW9uTGlzdCA9IGFjdGlvbk1hcFtfa2V5XSB8fCBbXTtcclxuICAgICAgICBhY3Rpb25MaXN0LnB1c2goX2FjdGlvbik7XHJcbiAgICAgICAgYWN0aW9uTWFwW19rZXldID0gYWN0aW9uTGlzdDtcclxuICAgIH07XHJcbiAgICByZWFjdChfa2V5KSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGlmKF9rZXk9PT11bmRlZmluZWQpe1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgYWN0aW9uTWFwID0gdGhpcy5hY3Rpb25NYXA7XHJcbiAgICAgICAgdmFyIGFjdGlvbkxpc3QgPSBhY3Rpb25NYXBbX2tleV0gfHwgW107XHJcbiAgICAgICAgYWN0aW9uTGlzdC5mb3JFYWNoKChhY3Rpb24pPT4ge1xyXG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBzZWxmLmdldFZhbHVlKF9rZXkpO1xyXG4gICAgICAgICAgICBhY3Rpb24odmFsdWUpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9O1xyXG4gICAgZGVidWcoc3RyKSB7XHJcbiAgICAgICAgaWYodGhpcy5kZWJ1Z01vZGUpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnREVCVUc6ICcgKyBzdHIpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuY29uc3QgY2MgPSBuZXcgQ3ViWV9Db3JlKCk7XHJcbndpbmRvdy5jYyA9IGNjO1xyXG5leHBvcnQgZGVmYXVsdCBjYztcclxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgQW54aW4gWWFuZyBvbiA1LzI2LzIwMTguXHJcbiAqL1xyXG5pbXBvcnQgQVhDb3JlIGZyb20gJy4vQ3ViWV9Db3JlJztcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3ViWV9ET00ge1xyXG4gICAgY29uc3RydWN0b3IoX3RhZyxfaWQsX3Jvb3QpIHtcclxuICAgICAgICB0aGlzLmlkID0gdGhpcy5yZWFkVmFsdWUoX2lkKXx8ICdzZWxmJztcclxuICAgICAgICB0aGlzLnRhZyA9IHRoaXMucmVhZFZhbHVlKF90YWcpIHx8ICdkaXYnO1xyXG4gICAgICAgIHRoaXMuZG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0aGlzLnRhZyk7XHJcbiAgICAgICAgdGhpcy5kb20uc2V0QXR0cmlidXRlKCdpZCcsdGhpcy5pZCk7XHJcbiAgICAgICAgdGhpcy5jaGlsZHJlbkxpc3QgPSBbXTtcclxuICAgICAgICB0aGlzLmF0dHJpYnV0ZSA9IHt9O1xyXG4gICAgICAgIHRoaXMuZG9tU3R5bGUgPSB7fTtcclxuICAgICAgICB0aGlzLnVwZGF0ZXJzID0ge307XHJcbiAgICAgICAgdGhpcy5wYXJlbnQ7XHJcbiAgICAgICAgdGhpcy5jbGFzc2VzID0gW107XHJcbiAgICAgICAgdGhpcy5yb290KF9yb290KTtcclxuXHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMudXBkYXRlciA9IGZ1bmN0aW9uIChuYW1lKSB7XHJcbiAgICAgICAgICAgIGxldCB1cGRhdGVyID10aGlzLnVwZGF0ZXJzW25hbWVdO1xyXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYodXBkYXRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZXIuY2FsbChzZWxmLCBzZWxmLmRhdGEsIGFyZ3VtZW50cyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgc2V0VXBkYXRlcihuYW1lLHVwZGF0ZXIpe1xyXG4gICAgICAgIHRoaXMudXBkYXRlcnNbbmFtZV0gPSB1cGRhdGVyO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgYmluZChkYXRhKXtcclxuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgcm9vdChfcm9vdCl7XHJcbiAgICAgICAgaWYoX3Jvb3Qpe1xyXG4gICAgICAgICAgICBfcm9vdC5hcHBlbmRDaGlsZCh0aGlzLmRvbSk7XHJcbiAgICAgICAgICAgIHRoaXMuaXNSb290ID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5hY3RpdmF0ZWQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBhcHBlbmQoX3RhZyxfaWQpe1xyXG4gICAgICAgIGxldCB0YWcgPSB0aGlzLnJlYWRWYWx1ZShfdGFnKTtcclxuICAgICAgICBsZXQgaWQgPSB0aGlzLnJlYWRWYWx1ZShfaWQpO1xyXG4gICAgICAgIGxldCBlbGVtZW50ID0gbmV3IEN1YllfRE9NKHRhZyxpZCk7XHJcbiAgICAgICAgdGhpcy5hcHBlbmRFbGVtZW50KGVsZW1lbnQpO1xyXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgfVxyXG4gICAgYXBwZW5kRWxlbWVudChDdWJZX0RPTSl7XHJcbiAgICAgICAgbGV0IGVsZW1lbnQgPSB0aGlzLnJlYWRWYWx1ZShDdWJZX0RPTSk7XHJcbiAgICAgICAgZWxlbWVudC5wYXJlbnQgPSB0aGlzO1xyXG5cclxuICAgICAgICB0aGlzLmNoaWxkcmVuTGlzdC5wdXNoKGVsZW1lbnQpO1xyXG4gICAgICAgIHRoaXMuZG9tLmFwcGVuZENoaWxkKGVsZW1lbnQuZG9tKTtcclxuICAgICAgICBpZih0aGlzLmlzQWN0aXZlIHx8IHRoaXMuaXNSb290KSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuYWN0aXZhdGVkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgfVxyXG4gICAgYXR0cihrZXksX3ZhbHVlKXtcclxuICAgICAgICBsZXQgdmFsdWU7XHJcblxyXG4gICAgICAgIGlmKHR5cGVvZiBrZXkgPT09ICdvYmplY3QnKXtcclxuICAgICAgICAgICAgZm9yKHZhciBrIGluIGtleSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF0dHIoayxrZXlba10pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihrZXkgPT09J2FjdGl2YXRlZCcgfHwga2V5ID09PSAnZGVhY3RpdmF0ZWQnKXtcclxuICAgICAgICAgICAgdmFsdWUgPSBfdmFsdWU7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHZhbHVlID0gdGhpcy5yZWFkVmFsdWUoX3ZhbHVlKTtcclxuICAgICAgICAgICAgdGhpcy5kb20uc2V0QXR0cmlidXRlKGtleSx2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmF0dHJpYnV0ZVtrZXldID0gdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBvbihldmVudE5hbWUsX3ZhbHVlKXtcclxuICAgICAgICBsZXQgdmFsdWUgPSBfdmFsdWU7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMub25bZXZlbnROYW1lXSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuZG9tLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHZhbHVlLmNhbGwoc2VsZixlLHNlbGYuZGF0YSwpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBzdHlsZShfa2V5LF92YWx1ZSl7XHJcbiAgICAgICAgbGV0IGtleSA9IHRoaXMucmVhZFZhbHVlKF9rZXkpO1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IHRoaXMucmVhZFZhbHVlKF92YWx1ZSk7XHJcbiAgICAgICAgaWYodHlwZW9mIGtleSA9PT0gJ29iamVjdCcpe1xyXG4gICAgICAgICAgICBmb3IodmFyIGsgaW4ga2V5KXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3R5bGUoayxrZXlba10pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZG9tU3R5bGVba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuZG9tLnN0eWxlW2tleV0gPSB2YWx1ZTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIGNvbnRlbnQoX3ZhbHVlKXtcclxuICAgICAgICBsZXQgdmFsdWUgPSB0aGlzLnJlYWRWYWx1ZShfdmFsdWUpO1xyXG4gICAgICAgIHRoaXMuaW5uZXJIVE1MID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5kb20uaW5uZXJIVE1MID0gdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBhcHBlbmRDbGFzcyhfY2xhc3NOYW1lKXtcclxuICAgICAgICBsZXQgY2xhc3NOYW1lID0gdGhpcy5yZWFkVmFsdWUoX2NsYXNzTmFtZSk7XHJcbiAgICAgICAgbGV0IGNsYXNzZXMgPSB0aGlzLmNsYXNzZXMgfHwgW107XHJcbiAgICAgICAgY2xhc3Nlcy5wdXNoKGNsYXNzTmFtZSk7XHJcbiAgICAgICAgdGhpcy5kb20uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gICAgICAgIHRoaXMuY2xhc3NlcyA9IGNsYXNzZXM7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBzZWxlY3QoX3NlbGVjdG9yKXtcclxuICAgICAgICBsZXQgc2VsZWN0b3IgPSBfc2VsZWN0b3IuY2hhckF0KDApO1xyXG4gICAgICAgIGxldCBuYW1lID0gX3NlbGVjdG9yLnN1YnN0cmluZygxKTtcclxuICAgICAgICBzd2l0Y2ggKHNlbGVjdG9yKXtcclxuICAgICAgICAgICAgY2FzZSAnIyc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RCeUlkKG5hbWUpO1xyXG4gICAgICAgICAgICBjYXNlICcuJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNlbGVjdEJ5Q2xhc3NOYW1lKG5hbWUpO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0QnlUYWcoX3NlbGVjdG9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzZWxlY3RCeUlkKGlkKXtcclxuICAgICAgICBsZXQgY2hpbGRyZW5MaXN0ID0gdGhpcy5jaGlsZHJlbkxpc3Q7XHJcbiAgICAgICAgbGV0IHRhcmdldDtcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpPGNoaWxkcmVuTGlzdC5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5MaXN0W2ldO1xyXG4gICAgICAgICAgICBpZihjaGlsZC5pZCA9PT0gaWQpe1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gY2hpbGQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xyXG4gICAgfVxyXG4gICAgc2VsZWN0QnlDbGFzc05hbWUoY2xhc3NOYW1lKXtcclxuICAgICAgICBsZXQgY2hpbGRyZW5MaXN0ID0gdGhpcy5jaGlsZHJlbkxpc3Q7XHJcbiAgICAgICAgbGV0IHRhcmdldExpc3QgPSBbXTtcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpPGNoaWxkcmVuTGlzdC5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5MaXN0W2ldO1xyXG4gICAgICAgICAgICBpZihjaGlsZC5jbGFzc2VzLmluZGV4T2YoY2xhc3NOYW1lKT4tMSl7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRMaXN0LnB1c2goY2hpbGQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0YXJnZXRMaXN0O1xyXG4gICAgfVxyXG4gICAgc2VsZWN0QnlUYWcoX3RhZyl7XHJcbiAgICAgICAgbGV0IGNoaWxkcmVuTGlzdCA9IHRoaXMuY2hpbGRyZW5MaXN0O1xyXG4gICAgICAgIGxldCB0YXJnZXRMaXN0ID0gW107XHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaTxjaGlsZHJlbkxpc3QubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuTGlzdFtpXTtcclxuICAgICAgICAgICAgaWYoY2hpbGQudGFnID09PSBfdGFnKXtcclxuICAgICAgICAgICAgICAgIHRhcmdldExpc3QucHVzaChjaGlsZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRhcmdldExpc3Q7XHJcbiAgICB9XHJcbiAgICByZW1vdmUoX3NlbGVjdG9yLF90cmFuc2l0aW9uKXtcclxuICAgICAgICBpZihfc2VsZWN0b3I9PT11bmRlZmluZWQpe1xyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZVNlbGYoX3RyYW5zaXRpb24pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBzZWxlY3RvciA9IF9zZWxlY3Rvci5jaGFyQXQoMCk7XHJcbiAgICAgICAgbGV0IG5hbWUgPSBfc2VsZWN0b3Iuc3Vic3RyaW5nKDEpO1xyXG4gICAgICAgIGxldCB0YXJnZXQ7XHJcbiAgICAgICAgc3dpdGNoIChzZWxlY3Rvcil7XHJcbiAgICAgICAgICAgIGNhc2UgJyMnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVCeUlkKG5hbWUsX3RyYW5zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJy4nOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVCeUNsYXNzTmFtZShuYW1lLF90cmFuc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVCeVRhZyhfc2VsZWN0b3IsX3RyYW5zaXRpb24pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlbW92ZUJ5SWQoaWQsX3RyYW5zaXRpb24pe1xyXG4gICAgICAgIGxldCBjaGlsZHJlbkxpc3QgPSB0aGlzLmNoaWxkcmVuTGlzdDtcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpPGNoaWxkcmVuTGlzdC5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5MaXN0W2ldO1xyXG4gICAgICAgICAgICBpZihjaGlsZC5pZCA9PT0gaWQpe1xyXG4gICAgICAgICAgICAgICAgY2hpbGRyZW5MaXN0LnNwbGljZShpLDEpO1xyXG4gICAgICAgICAgICAgICAgY2hpbGQucmVtb3ZlKHVuZGVmaW5lZCxfdHJhbnNpdGlvbik7XHJcbiAgICAgICAgICAgICAgICBpLS07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlbW92ZUJ5Q2xhc3NOYW1lKGNsYXNzTmFtZSxfdHJhbnNpdGlvbil7XHJcbiAgICAgICAgbGV0IGNoaWxkcmVuTGlzdCA9IHRoaXMuY2hpbGRyZW5MaXN0O1xyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGk8Y2hpbGRyZW5MaXN0Lmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICBsZXQgY2hpbGQgPSBjaGlsZHJlbkxpc3RbaV07XHJcbiAgICAgICAgICAgIGlmKGNoaWxkLmNsYXNzZXMuaW5kZXhPZihjbGFzc05hbWUpPi0xKXtcclxuICAgICAgICAgICAgICAgIGNoaWxkcmVuTGlzdC5zcGxpY2UoaSwxKTtcclxuICAgICAgICAgICAgICAgIGNoaWxkLnJlbW92ZSh1bmRlZmluZWQsX3RyYW5zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgaS0tO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVtb3ZlQnlUYWcoX3RhZyxfdHJhbnNpdGlvbil7XHJcbiAgICAgICAgbGV0IGNoaWxkcmVuTGlzdCA9IHRoaXMuY2hpbGRyZW5MaXN0O1xyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGk8Y2hpbGRyZW5MaXN0Lmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICBsZXQgY2hpbGQgPSBjaGlsZHJlbkxpc3RbaV07XHJcbiAgICAgICAgICAgIGlmKGNoaWxkLnRhZyA9PT0gX3RhZyl7XHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlbkxpc3Quc3BsaWNlKGksMSk7XHJcbiAgICAgICAgICAgICAgICBjaGlsZC5yZW1vdmUodW5kZWZpbmVkLF90cmFuc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgIGktLTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlbW92ZVNlbGYoX3RyYW5zaXRpb24pe1xyXG4gICAgICAgIC8qdGhpcy5jaGlsZHJlbkxpc3QuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgICAgICAgICAgY2hpbGQucmVtb3ZlKCk7XHJcbiAgICAgICAgfSk7Ki9cclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5kZWFjdGl2YXRlZCgpO1xyXG4gICAgICAgIGlmKF90cmFuc2l0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVhY3RpdmF0ZWRUaW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5kb20ucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIH0sX3RyYW5zaXRpb24pXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHNlbGYuZG9tLnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLnBhcmVudCl7XHJcbiAgICAgICAgICAgIGxldCBjaGlsZHJlbkxpc3QgPSB0aGlzLnBhcmVudC5jaGlsZHJlbkxpc3Q7XHJcbiAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGk8Y2hpbGRyZW5MaXN0Lmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5MaXN0W2ldO1xyXG4gICAgICAgICAgICAgICAgaWYoY2hpbGQgPT09IHRoaXMpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuTGlzdC5zcGxpY2UoaSwxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvKmZvcih2YXIga2V5IGluIHRoaXMpe1xyXG4gICAgICAgICAgICBkZWxldGUgdGhpc1trZXldXHJcbiAgICAgICAgfSovXHJcbiAgICB9XHJcbiAgICBhY3RpdmF0ZWQoKXtcclxuICAgICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBpZih0aGlzLmRlYWN0aXZhdGVkVGltZXIpe1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5kZWFjdGl2YXRlZFRpbWVyKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLmF0dHJpYnV0ZS5hY3RpdmF0ZWQpe1xyXG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZS5hY3RpdmF0ZWQuY2FsbCh0aGlzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY2hpbGRyZW5MaXN0LmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgICAgICAgIGNoaWxkLmFjdGl2YXRlZCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZGVhY3RpdmF0ZWQoKXtcclxuICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmKHRoaXMuYXR0cmlidXRlLmRlYWN0aXZhdGVkKXtcclxuICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGUuZGVhY3RpdmF0ZWQuY2FsbCh0aGlzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY2hpbGRyZW5MaXN0LmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgICAgICAgIGNoaWxkLmRlYWN0aXZhdGVkKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZWFkVmFsdWUoX3ZhbHVlKXtcclxuICAgICAgICBsZXQgdmFsdWUgPSBfdmFsdWU7XHJcbiAgICAgICAgaWYodHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIpe1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWUuY2FsbCh0aGlzLHRoaXMuZGF0YSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJjb25zdCBNQVhfQ1lDTEUgPSAxMDA7XHJcbmNsYXNzIEN1YllfUm91dGluZXtcclxuICAgIGNvbnN0cnVjdG9yKF90aWNrU3BlZWQsX29wdGlvbnMpe1xyXG4gICAgICAgIGxldCBvcHRpb25zID0gX29wdGlvbnMgfHwge307XHJcbiAgICAgICAgdGhpcy5pbml0KG9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMuTUFYX0NZQ0xFID0gTUFYX0NZQ0xFO1xyXG4gICAgfVxyXG4gICAgaW5pdChvcHRpb25zKXtcclxuICAgICAgICB3aW5kb3cuY3IgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuY3ljbGUgPSAwO1xyXG4gICAgICAgIHRoaXMucm91dGluZUxpc3QgPSBbXTtcclxuICAgICAgICB0aGlzLmxvbmdlc3RSb3V0aW5lVGltZSA9MDtcclxuICAgICAgICBzZXRUaW1lb3V0KHRoaXMuc3RhcnQuYmluZCh0aGlzKSwwKTtcclxuICAgIH07XHJcbiAgICBzdGFydCgpe1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLmN5Y2xlU3RhcnRUaW1lID0gRGF0ZS5ub3coKTtcclxuICAgICAgICBzZXRUaW1lb3V0KHNlbGYucm91dGluZS5iaW5kKHRoaXMpLDApO1xyXG4gICAgfVxyXG4gICAgYXBwZW5kKG5hbWUsZ3JvdXApIHtcclxuICAgICAgICBsZXQgbmV3Um91dGluZSA9IG5ldyBSb3V0aW5lKG5hbWUsIGdyb3VwKTtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgbmV3Um91dGluZS5pbnNlcnQ9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYobmV3Um91dGluZS5mcmVxIT09MSkge1xyXG4gICAgICAgICAgICAgICAgbmV3Um91dGluZS5jb3VudGVyICs9IHNlbGYucm91dGluZUxpc3QubGVuZ3RoICsgMTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc2VsZi5yb3V0aW5lTGlzdC5wdXNoKG5ld1JvdXRpbmUpO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3Um91dGluZTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIG5ld1JvdXRpbmUucmVtb3ZlPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGxldCBpbmRleCA9ICBzZWxmLnJvdXRpbmVMaXN0LmluZGV4T2YobmV3Um91dGluZSk7XHJcbiAgICAgICAgICAgIHNlbGYucm91dGluZUxpc3Quc3BsaWNlKGluZGV4LDEpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIG5ld1JvdXRpbmU7XHJcbiAgICB9XHJcbiAgICBnZXRDdXJyZW50Q3ljbGUoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5jeWNsZTtcclxuICAgIH1cclxuICAgIHJvdXRpbmUoKXtcclxuICAgICAgICBsZXQgcm91dGluZUxpc3QgPSB0aGlzLnJvdXRpbmVMaXN0O1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBmb3IodmFyIGk9MDtpPHJvdXRpbmVMaXN0Lmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICBsZXQgcm91dGluZSA9IHJvdXRpbmVMaXN0W2ldO1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgaWYocm91dGluZS5jaGVja0xvY2soKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJvdXRpbmUubG9jaygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHN0YXJ0VGltZSA9IERhdGUubm93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRpbmUuYWN0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYubGFzdFJvdXRpbmVUaW1lID0gRGF0ZS5ub3coKSAtIHN0YXJ0VGltZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoc2VsZi5sb25nZXN0Um91dGluZVRpbWU8c2VsZi5sYXN0Um91dGluZVRpbWUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5sb25nZXN0Um91dGluZVRpbWU9c2VsZi5sYXN0Um91dGluZVRpbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoc2VsZi5sYXN0Um91dGluZVRpbWU+MjAwKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignUm91dGluZTonICsgcm91dGluZS5uYW1lICsgJyB0b29rIHRvbyBsb25nIHRvIHJ1bi4gWycrc2VsZi5sYXN0Um91dGluZVRpbWUrJ21zXScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGluZS51bmxvY2soKTtcclxuICAgICAgICAgICAgICAgICAgICB9LHJvdXRpbmUuZnJlcSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1jYXRjaCAoZSl7XHJcbiAgICAgICAgICAgICAgICAvL0RFQ0lERSBJRiBSRU1PVkUgUk9VVElORSBMQVRFUjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmN5Y2xlKys7XHJcbiAgICAgICAgaWYodGhpcy5jeWNsZSA9PT0gTUFYX0NZQ0xFKXtcclxuICAgICAgICAgICAgdGhpcy5jeWNsZSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdEN5Y2xlVGltZSA9IERhdGUubm93KCkgLSB0aGlzLmN5Y2xlU3RhcnRUaW1lO1xyXG4gICAgICAgICAgICB0aGlzLmN5Y2xlUGVyU2VjID0gTWF0aC5mbG9vcigxMDAwIC8gdGhpcy5sYXN0Q3ljbGVUaW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zdGFydCgpO1xyXG4gICAgfVxyXG59XHJcbmNsYXNzIFJvdXRpbmV7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lLGdyb3VwKXtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuZ3JvdXAgPSBncm91cCB8fCAnY29tbW9uJztcclxuICAgICAgICB0aGlzLmZyZXEgPSAxO1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLmFjdGlvbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgc2VsZi5pc1J1bm5pbmcgPSB0cnVlO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5jb3VudGVyPTA7XHJcbiAgICAgICAgdGhpcy5yZXBlYXQgPSAtMTtcclxuICAgIH1cclxuICAgIGxvY2soKXtcclxuICAgICAgICBpZih0aGlzLnJlcGVhdD4wKXRoaXMucmVwZWF0LS07XHJcbiAgICAgICAgdGhpcy5pc1J1bm5pbmcgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgdW5sb2NrKCl7XHJcbiAgICAgICAgaWYodGhpcy5yZXBlYXQ9PT0wKXtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pc1J1bm5pbmcgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGF0dHIoa2V5LHZhbHVlKXtcclxuICAgICAgICB0aGlzW2tleV0gPSB2YWx1ZTtcclxuICAgICAgICBpZihrZXk9PT0nZnJlcScpe1xyXG4gICAgICAgICAgICB0aGlzWydjb3VudGVyJ10gPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICByZXNldENvdW50ZXIoKXtcclxuICAgICAgICB0aGlzLmNvdW50ZXIgPSB0aGlzLmZyZXE7XHJcbiAgICB9XHJcbiAgICBjaGVja0xvY2soKXtcclxuICAgICAgICBpZih0aGlzLmNvdW50ZXI+MCl7XHJcbiAgICAgICAgICAgIHRoaXMuY291bnRlci0tO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGhpcy5pc1J1bm5pbmc9PT10cnVlIHx8IHRoaXMuY291bnRlcj4wKXtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5jb25zdCBjciA9IG5ldyBDdWJZX1JvdXRpbmUoKTtcclxud2luZG93LmNyID0gY3I7XHJcbmV4cG9ydCBkZWZhdWx0IGNyOyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFueGluIFlhbmcgb24gNi8xMi8yMDE4LlxyXG4gKi9cclxuaW1wb3J0IEN1YllfRE9NIGZyb20gJy4uL0ZyYW1ld29yay9DdWJZL0N1YllfRE9NJztcclxuaW1wb3J0IGhvbWVDb250ZW50IGZyb20gXCIuLi92aWV3L2hvbWVcIjtcclxubGV0IG9yaWdpbiA9IHtcclxuICAgIHg6IHdpbmRvdy5pbm5lcldpZHRoLzIsXHJcbiAgICB5OiB3aW5kb3cuaW5uZXJIZWlnaHQvMlxyXG59O1xyXG53aW5kb3cubW9iaWxlY2hlY2sgPSBmdW5jdGlvbigpIHtcclxuICAgIHZhciBjaGVjayA9IGZhbHNlO1xyXG4gICAgKGZ1bmN0aW9uKGEpe2lmKC8oYW5kcm9pZHxiYlxcZCt8bWVlZ28pLittb2JpbGV8YXZhbnRnb3xiYWRhXFwvfGJsYWNrYmVycnl8YmxhemVyfGNvbXBhbHxlbGFpbmV8ZmVubmVjfGhpcHRvcHxpZW1vYmlsZXxpcChob25lfG9kKXxpcmlzfGtpbmRsZXxsZ2UgfG1hZW1vfG1pZHB8bW1wfG1vYmlsZS4rZmlyZWZveHxuZXRmcm9udHxvcGVyYSBtKG9ifGluKWl8cGFsbSggb3MpP3xwaG9uZXxwKGl4aXxyZSlcXC98cGx1Y2tlcnxwb2NrZXR8cHNwfHNlcmllcyg0fDYpMHxzeW1iaWFufHRyZW98dXBcXC4oYnJvd3NlcnxsaW5rKXx2b2RhZm9uZXx3YXB8d2luZG93cyBjZXx4ZGF8eGlpbm8vaS50ZXN0KGEpfHwvMTIwN3w2MzEwfDY1OTB8M2dzb3w0dGhwfDUwWzEtNl1pfDc3MHN8ODAyc3xhIHdhfGFiYWN8YWMoZXJ8b298c1xcLSl8YWkoa298cm4pfGFsKGF2fGNhfGNvKXxhbW9pfGFuKGV4fG55fHl3KXxhcHR1fGFyKGNofGdvKXxhcyh0ZXx1cyl8YXR0d3xhdShkaXxcXC1tfHIgfHMgKXxhdmFufGJlKGNrfGxsfG5xKXxiaShsYnxyZCl8YmwoYWN8YXopfGJyKGV8dil3fGJ1bWJ8YndcXC0obnx1KXxjNTVcXC98Y2FwaXxjY3dhfGNkbVxcLXxjZWxsfGNodG18Y2xkY3xjbWRcXC18Y28obXB8bmQpfGNyYXd8ZGEoaXR8bGx8bmcpfGRidGV8ZGNcXC1zfGRldml8ZGljYXxkbW9ifGRvKGN8cClvfGRzKDEyfFxcLWQpfGVsKDQ5fGFpKXxlbShsMnx1bCl8ZXIoaWN8azApfGVzbDh8ZXooWzQtN10wfG9zfHdhfHplKXxmZXRjfGZseShcXC18Xyl8ZzEgdXxnNTYwfGdlbmV8Z2ZcXC01fGdcXC1tb3xnbyhcXC53fG9kKXxncihhZHx1bil8aGFpZXxoY2l0fGhkXFwtKG18cHx0KXxoZWlcXC18aGkocHR8dGEpfGhwKCBpfGlwKXxoc1xcLWN8aHQoYyhcXC18IHxffGF8Z3xwfHN8dCl8dHApfGh1KGF3fHRjKXxpXFwtKDIwfGdvfG1hKXxpMjMwfGlhYyggfFxcLXxcXC8pfGlicm98aWRlYXxpZzAxfGlrb218aW0xa3xpbm5vfGlwYXF8aXJpc3xqYSh0fHYpYXxqYnJvfGplbXV8amlnc3xrZGRpfGtlaml8a2d0KCB8XFwvKXxrbG9ufGtwdCB8a3djXFwtfGt5byhjfGspfGxlKG5vfHhpKXxsZyggZ3xcXC8oa3xsfHUpfDUwfDU0fFxcLVthLXddKXxsaWJ3fGx5bnh8bTFcXC13fG0zZ2F8bTUwXFwvfG1hKHRlfHVpfHhvKXxtYygwMXwyMXxjYSl8bVxcLWNyfG1lKHJjfHJpKXxtaShvOHxvYXx0cyl8bW1lZnxtbygwMXwwMnxiaXxkZXxkb3x0KFxcLXwgfG98dil8enopfG10KDUwfHAxfHYgKXxtd2JwfG15d2F8bjEwWzAtMl18bjIwWzItM118bjMwKDB8Mil8bjUwKDB8Mnw1KXxuNygwKDB8MSl8MTApfG5lKChjfG0pXFwtfG9ufHRmfHdmfHdnfHd0KXxub2soNnxpKXxuenBofG8yaW18b3AodGl8d3YpfG9yYW58b3dnMXxwODAwfHBhbihhfGR8dCl8cGR4Z3xwZygxM3xcXC0oWzEtOF18YykpfHBoaWx8cGlyZXxwbChheXx1Yyl8cG5cXC0yfHBvKGNrfHJ0fHNlKXxwcm94fHBzaW98cHRcXC1nfHFhXFwtYXxxYygwN3wxMnwyMXwzMnw2MHxcXC1bMi03XXxpXFwtKXxxdGVrfHIzODB8cjYwMHxyYWtzfHJpbTl8cm8odmV8em8pfHM1NVxcL3xzYShnZXxtYXxtbXxtc3xueXx2YSl8c2MoMDF8aFxcLXxvb3xwXFwtKXxzZGtcXC98c2UoYyhcXC18MHwxKXw0N3xtY3xuZHxyaSl8c2doXFwtfHNoYXJ8c2llKFxcLXxtKXxza1xcLTB8c2woNDV8aWQpfHNtKGFsfGFyfGIzfGl0fHQ1KXxzbyhmdHxueSl8c3AoMDF8aFxcLXx2XFwtfHYgKXxzeSgwMXxtYil8dDIoMTh8NTApfHQ2KDAwfDEwfDE4KXx0YShndHxsayl8dGNsXFwtfHRkZ1xcLXx0ZWwoaXxtKXx0aW1cXC18dFxcLW1vfHRvKHBsfHNoKXx0cyg3MHxtXFwtfG0zfG01KXx0eFxcLTl8dXAoXFwuYnxnMXxzaSl8dXRzdHx2NDAwfHY3NTB8dmVyaXx2aShyZ3x0ZSl8dmsoNDB8NVswLTNdfFxcLXYpfHZtNDB8dm9kYXx2dWxjfHZ4KDUyfDUzfDYwfDYxfDcwfDgwfDgxfDgzfDg1fDk4KXx3M2MoXFwtfCApfHdlYmN8d2hpdHx3aShnIHxuY3xudyl8d21sYnx3b251fHg3MDB8eWFzXFwtfHlvdXJ8emV0b3x6dGVcXC0vaS50ZXN0KGEuc3Vic3RyKDAsNCkpKSBjaGVjayA9IHRydWU7fSkobmF2aWdhdG9yLnVzZXJBZ2VudHx8bmF2aWdhdG9yLnZlbmRvcnx8d2luZG93Lm9wZXJhKTtcclxuICAgIHJldHVybiBjaGVjaztcclxufTtcclxuZG9jdW1lbnQub25tb3VzZW1vdmUgPSBmdW5jdGlvbihlKXtcclxuICAgIGxldCB4ID0gZS5jbGllbnRYO1xyXG4gICAgbGV0IHkgPSBlLmNsaWVudFk7XHJcblxyXG4gICAgYmFja2dyb3VuZC5keCA9IC0oeCAtIG9yaWdpbi54KS8xMDtcclxuICAgIGJhY2tncm91bmQuZHkgPSAtKHkgLSBvcmlnaW4ueSkvMTA7XHJcbn07XHJcblxyXG52YXIgYmFja2dyb3VuZCA9IG5ldyBDdWJZX0RPTSgnZGl2JywnYmFja2dyb3VuZCcpO1xyXG5iYWNrZ3JvdW5kLnN0eWxlKCd3aWR0aCcsJzEwMHZ3JylcclxuICAgIC5zdHlsZSgnaGVpZ2h0JywnMTAwdmgnKVxyXG4gICAgLnN0eWxlKCdwb3NpdGlvbicsJ2ZpeGVkJylcclxuICAgIC5zdHlsZSgnYmFja2dyb3VuZCcsJ2JsYWNrJylcclxuICAgIC5zdHlsZSgndG9wJywwKVxyXG4gICAgLnN0eWxlKCdsZWZ0JywwKVxyXG4gICAgLnN0eWxlKCd6SW5kZXgnLDApO1xyXG52YXIgY2lyY2xlTnVtID0gbW9iaWxlY2hlY2soKT81MDoxMjg7XHJcbnZhciBjaXJjbGVMaXN0ID0gW107XHJcblxyXG5mb3IodmFyIGk9MDtpPGNpcmNsZU51bTtpKyspe1xyXG4gICAgbGV0IGNpcmNsZSA9IG5ldyBDdWJZX0RPTSgnZGl2JywnYmFja2dyb3VuZENpcmNsZV8nK2kpXHJcbiAgICAgICAgLnN0eWxlKCdwb3NpdGlvbicsJ2Fic29sdXRlJylcclxuICAgICAgICAuc3R5bGUoJ3dpZHRoJywnMjBweCcpXHJcbiAgICAgICAgLnN0eWxlKCdoZWlnaHQnLCcyMHB4JylcclxuICAgICAgICAuc3R5bGUoJ2JvcmRlclJhZGl1cycsJzRweCcpXHJcbiAgICAgICAgLnN0eWxlKCdiYWNrZ3JvdW5kJywnI2VjY2M2OCcpXHJcbiAgICAgICAgLnN0eWxlKCd0cmFuc2l0aW9uJywnMC4zcyBsaW5lYXInKVxyXG4gICAgICAgIC5zdHlsZSgnYm94U2hhZG93JywnMCAwIDEwcHggI2VjY2M2OCcpXHJcbiAgICAgICAgLnN0eWxlKCdvcGFjaXR5JywgJzAnKVxyXG4gICAgICAgIC5hdHRyKCdhY3RpdmF0ZWQnLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgICAgICBsZXQgeCA9IE1hdGgucmFuZG9tKCkqd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICAgICAgICAgIGxldCB5ID0gTWF0aC5yYW5kb20oKSp3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICAgICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICAgICAgICAgIHRoaXMuZHggPSBNYXRoLnJhbmRvbSgpLTAuNTtcclxuICAgICAgICAgICAgdGhpcy5keSA9IE1hdGgucmFuZG9tKCktMC41O1xyXG4gICAgICAgICAgICB0aGlzLmRzID0gMC4wMTtcclxuICAgICAgICAgICAgdGhpcy5zY2FsZSA9ICBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgICAgICB0aGlzLmNvdW50ZXIgPSAxMDtcclxuICAgICAgICAgICAgdGhpcy5zdHlsZSgndHJhbnNmb3JtJywndHJhbnNsYXRlKCcrIHggKydweCwnKyB5ICsncHgpJyk7XHJcbiAgICAgICAgICAgIHRoaXMuY2lyY2xlQW4gPSBjci5hcHBlbmQoJ2hvbWVfY2lyY2xlX2FuaW1hdGlvbl8nK2kpXHJcbiAgICAgICAgICAgICAgICAuYXR0cignZnJlcScsNTApXHJcbiAgICAgICAgICAgICAgICAuYXR0cignYWN0aW9uJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNjYWxlID0gc2VsZi5zY2FsZTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc2VlZCA9IE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi54Kz1zZWxmLmR4O1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYueSs9c2VsZi5keTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5zdHlsZSgndHJhbnNmb3JtJywndHJhbnNsYXRlKCcrKHNlbGYueCArIChiYWNrZ3JvdW5kLmR4fHwwKSpzY2FsZSkrJ3B4LCcrKHNlbGYueSArIChiYWNrZ3JvdW5kLmR5fHwwKSpzY2FsZSkrJ3B4KSBzY2FsZSgnK3NjYWxlKycpJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnN0eWxlKCdvcGFjaXR5Jywgc2NhbGUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zdHlsZSgnekluZGV4Jywgc2NhbGU+PTAuOD8yOjApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zdHlsZSgnYm94U2hhZG93JywnMCAwICcrKHNlZWQqMTArMTApKydweCAjZWNjYzY4Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoc2VsZi54PndpbmRvdy5pbm5lcldpZHRoKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5keCA9IC0oc2VlZCowLjUrMC4xKTtcclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZSBpZihzZWxmLng8MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZHggPSBzZWVkKjAuNSswLjE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHNlbGYueT53aW5kb3cuaW5uZXJIZWlnaHQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmR5ID0gLShzZWVkKjAuNSswLjEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNlIGlmKHNlbGYueTwwKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5keSA9IHNlZWQqMC41KzAuMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb3VudGVyLS07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoc2VsZi5jb3VudGVyPD0wKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb3VudGVyPTEwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNjYWxlKz1jaXJjbGUuZHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHNlbGYuc2NhbGU+PTEpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5kcz0tMC4wMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihzZWxmLnNjYWxlPD0wKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZHM9MC4wMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pLmluc2VydCgpO1xyXG4gICAgICAgICAgICB0aGlzLmNpcmNsZUFuMiA9IGNyLmFwcGVuZCgnaG9tZV9jaXJjbGVfYW5pbWF0aW9uXzJfJytpKVxyXG4gICAgICAgICAgICAgICAgLmF0dHIoJ2ZyZXEnLDMwMClcclxuICAgICAgICAgICAgICAgIC5hdHRyKCdhY3Rpb24nLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc2VlZCA9IE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5zdHlsZSgnYm94U2hhZG93JywnMCAwICcrKHNlZWQqNDArMTApKydweCAjZWNjYzY4Jyk7XHJcbiAgICAgICAgICAgICAgICB9KS5pbnNlcnQoKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5hdHRyKCdkZWFjdGl2YXRlZCcsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLmNpcmNsZUFuLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmNpcmNsZUFuMi5yZW1vdmUoKTtcclxuICAgICAgICB9KTtcclxuICAgIGNpcmNsZS5yZWFycmFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0IHggPSBNYXRoLnJhbmRvbSgpKndpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgICAgIGxldCB5ID0gTWF0aC5yYW5kb20oKSp3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICAgICAgbGV0IHNjYWxlID0gY2lyY2xlLnNjYWxlID0gIE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgY2lyY2xlLnggPSB4O1xyXG4gICAgICAgIGNpcmNsZS55ID0geTtcclxuICAgICAgICBjaXJjbGUuc3R5bGUoJ3RyYW5zZm9ybScsJ3RyYW5zbGF0ZSgnKyhzZWxmLnggKyAoYmFja2dyb3VuZC5keHx8MCkqc2NhbGUpKydweCwnKyhzZWxmLnkgKyAoYmFja2dyb3VuZC5keXx8MCkqc2NhbGUpKydweCkgc2NhbGUoJytzY2FsZSsnKScpXHJcbiAgICB9O1xyXG4gICAgY2MuY29ubmVjdCgnY3VycmVudFZpZXcnLGNpcmNsZS5yZWFycmFuZ2UpO1xyXG4gICAgY2MuY29ubmVjdCgndmlld3BvcnRTaXplJyxjaXJjbGUucmVhcnJhbmdlKTtcclxuICAgIGJhY2tncm91bmQuYXBwZW5kRWxlbWVudChjaXJjbGUpO1xyXG5cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgYmFja2dyb3VuZDsiLCJpbXBvcnQgQ3ViWV9ET00gZnJvbSAnLi4vRnJhbWV3b3JrL0N1YlkvQ3ViWV9ET00nO1xyXG5cclxudmFyIGhlYWRlciA9IG5ldyBDdWJZX0RPTSgnZGl2JywgJ2hlYWRlcicpXHJcbiAgICAuYXR0cignb25zZWxlY3RzdGFydCcsICdyZXR1cm4gZmFsc2U7JylcclxuICAgIC5zdHlsZSgnZGlzcGxheScsICdmbGV4JylcclxuICAgIC5zdHlsZSgncG9zaXRpb24nLCAnYWJzb2x1dGUnKVxyXG4gICAgLnN0eWxlKCdvcGFjaXR5JywgJzAuNScpXHJcbiAgICAuc3R5bGUoJ3RvcCcsICcxZW0nKVxyXG4gICAgLnN0eWxlKCdoZWlnaHQnLCAnM2VtJylcclxuICAgIC5zdHlsZSgnekluZGV4JywgJzEwJylcclxuICAgIC5zdHlsZSgndHJhbnNpdGlvbicsICcwLjNzJylcclxuICAgIC5vbignbW91c2VvdmVyJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuc3R5bGUoJ29wYWNpdHknLCAnMScpXHJcbiAgICB9KVxyXG4gICAgLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuc3R5bGUoJ29wYWNpdHknLCAnMC41JylcclxuICAgIH0pO1xyXG5cclxudmFyIGhlYWRlckl0ZW1zID0gWydNZW51JywgJ1BsYXlncm91bmQnLCAnQWJvdXQnXTtcclxudmFyIGluZGV4ID0gMDtcclxuaGVhZGVySXRlbXMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgaGVhZGVySXRlbXNbaW5kZXgrK10gPSBoZWFkZXIuYXBwZW5kKCdkaXYnLCAnaGVhZGVyXycgKyBpdGVtKVxyXG4gICAgICAgIC5jb250ZW50KGl0ZW0pXHJcbiAgICAgICAgLmFwcGVuZENsYXNzKCd4eCcpXHJcbiAgICAgICAgLnN0eWxlKCdjb2xvcicsICd3aGl0ZScpXHJcbiAgICAgICAgLnN0eWxlKCdwYWRkaW5nJywgJzFlbSAwLjVlbScpXHJcbiAgICAgICAgLnN0eWxlKCdjdXJzb3InLCAncG9pbnRlcicpXHJcbiAgICAgICAgLnN0eWxlKCd0ZXh0U2hhZG93JywgJzAgMCAxMHB4ICNlY2NjNjgnKVxyXG4gICAgICAgIC5zdHlsZSgndHJhbnNpdGlvbicsICcwLjNzJylcclxuICAgICAgICAub24oJ21vdXNlb3ZlcicsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5zdHlsZSgndGV4dFNoYWRvdycsICcwIDAgMTBweCAjZWNjYzY4JylcclxuICAgICAgICAgICAgICAgIC5zdHlsZSgnY29sb3InLCAnI2VjY2M2OCcpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLnN0eWxlKCd0ZXh0U2hhZG93JywgJzAgMCAyMHB4ICNlY2NjNjgnKVxyXG4gICAgICAgICAgICAgICAgLnN0eWxlKCdjb2xvcicsICd3aGl0ZScpO1xyXG4gICAgICAgIH0pO1xyXG59KTtcclxudmFyIGhlYWRlck1lbnVCdXR0b24gPSBoZWFkZXJJdGVtc1swXTtcclxuaGVhZGVyTWVudUJ1dHRvbi5zdHlsZSgncG9zaXRpb24nLCAncmVsYXRpdmUnKTtcclxudmFyIG1lbnVDb250YWluZXIgPSBoZWFkZXJNZW51QnV0dG9uLmFwcGVuZCgnZGl2JywgJ21lbnVDb250YWluZXInKVxyXG4gICAgLnN0eWxlKCdwb3NpdGlvbicsICdhYnNvbHV0ZScpXHJcbiAgICAuc3R5bGUoJ3dpZHRoJywgJzI1NnB4JylcclxuICAgIC5zdHlsZSgnaGVpZ2h0JywgJzBweCcpXHJcbiAgICAuc3R5bGUoJ2JhY2tncm91bmQnLCAnJylcclxuICAgIC5zdHlsZSgndG9wJywgJzEyNSUnKVxyXG4gICAgLnN0eWxlKCdsZWZ0JywgJzAnKVxyXG4gICAgLnN0eWxlKCdvdmVyZmxvdycsICdoaWRkZW4nKVxyXG4gICAgLnN0eWxlKCd0cmFuc2l0aW9uJywgJzAuM3MnKVxyXG4gICAgLnNldFVwZGF0ZXIoJ3RvZ2dsZU1lbnUnLCBmdW5jdGlvbiAoZCkge1xyXG4gICAgICAgIGxldCBoYXNPcGVuID0gdGhpcy5oYXNPcGVuIHx8IGZhbHNlO1xyXG4gICAgICAgIGlmIChoYXNPcGVuKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3R5bGUoJ2hlaWdodCcsICcwJylcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnN0eWxlKCdoZWlnaHQnLCAnMzN2aCcpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaGFzT3BlbiA9ICFoYXNPcGVuO1xyXG4gICAgfSlcclxuICAgIC5zZXRVcGRhdGVyKCdjbG9zZU1lbnUnLCBmdW5jdGlvbiAoZCkge1xyXG4gICAgICAgIHRoaXMuc3R5bGUoJ2hlaWdodCcsICcwJylcclxuICAgICAgICAgICAgLnN0eWxlKCdib3hTaGFkb3cnLCAnMHB4IDBweCA1cHggcmdiYSgxMTIsIDE2MSwgMjU1LDApJylcclxuICAgICAgICAgICAgLnN0eWxlKCdib3JkZXInLCAnMXB4IHNvbGlkIHJnYmEoMTEyLCAxNjEsIDI1NSwgMCknKTtcclxuICAgICAgICB0aGlzLmhhc09wZW4gPSBmYWxzZTtcclxuICAgIH0pO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIG1lbnVDb250YWluZXIudXBkYXRlcignY2xvc2VNZW51JykoKTtcclxufSk7XHJcblxyXG5oZWFkZXJNZW51QnV0dG9uLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgbWVudUNvbnRhaW5lci51cGRhdGVyKCd0b2dnbGVNZW51JykoKTtcclxufSk7XHJcblxyXG52YXIgbWVudUNvbnRlbnRzID0gbWVudUNvbnRhaW5lci5hcHBlbmQoJ3VsJylcclxuICAgIC5zdHlsZSgncGFkZGluZ0xlZnQnLCAnMmVtJylcclxuICAgIC5zdHlsZSgnbWFyZ2luJywgJzAnKTtcclxuXHJcbnZhciBtZW51SXRlbXMgPSBbJ0hvbWUnLCAnTWF5IENvbWluZyBzb29uJywgJ1Byb2JhYmx5IENvbWluZyBzb29uJ107XHJcbmluZGV4ID0gMDtcclxuXHJcbm1lbnVJdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICBtZW51SXRlbXNbaW5kZXgrK10gPSBtZW51Q29udGVudHMuYXBwZW5kKCdsaScsICdtZW51XycgKyBpdGVtKVxyXG4gICAgICAgIC5jb250ZW50KGl0ZW0pXHJcbiAgICAgICAgLnN0eWxlKCdjb2xvcicsICd3aGl0ZScpXHJcbiAgICAgICAgLnN0eWxlKCdwYWRkaW5nJywgJzFlbSAwLjVlbScpXHJcbiAgICAgICAgLnN0eWxlKCdjdXJzb3InLCAncG9pbnRlcicpXHJcbiAgICAgICAgLnN0eWxlKCd0ZXh0U2hhZG93JywgJzAgMCAxMHB4ICNlY2NjNjgnKVxyXG4gICAgICAgIC5zdHlsZSgndHJhbnNpdGlvbicsICcwLjNzJylcclxuICAgICAgICAub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjYy5zdG9yZVZhbHVlKCdjdXJyZW50VmlldycsIGl0ZW0pO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3R5bGUoJ3RleHRTaGFkb3cnLCAnMCAwIDEwcHggI2VjY2M2OCcpXHJcbiAgICAgICAgICAgICAgICAuc3R5bGUoJ2NvbG9yJywgJyNlY2NjNjgnKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5zdHlsZSgndGV4dFNoYWRvdycsICcwIDAgMjBweCAjZWNjYzY4JylcclxuICAgICAgICAgICAgICAgIC5zdHlsZSgnY29sb3InLCAnd2hpdGUnKTtcclxuICAgICAgICB9KTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBoZWFkZXI7IiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgQW54aW4gWWFuZyBvbiAzLzI4LzIwMTguXHJcbiAqL1xyXG5pbXBvcnQgQ0MgZnJvbSAnLi9GcmFtZXdvcmsvQ3ViWS9DdWJZX0NvcmUnO1xyXG5pbXBvcnQgQ3ViWV9ET00gZnJvbSAnLi9GcmFtZXdvcmsvQ3ViWS9DdWJZX0RPTSc7XHJcbmltcG9ydCBDUiBmcm9tICcuL0ZyYW1ld29yay9DdWJZL0N1YllfUm91dGluZSc7XHJcbmltcG9ydCBob21lQ29udGVudCBmcm9tICcuL3ZpZXcvaG9tZSc7XHJcbmltcG9ydCBhYm91dENvbnRlbnQgZnJvbSAnLi92aWV3L2Fib3V0JztcclxuaW1wb3J0IGhlYWRlciBmcm9tICcuL2NvbXBvbmVudHMvaGVhZGVyJ1xyXG5pbXBvcnQgYmFja2dyb25kIGZyb20gJy4vY29tcG9uZW50cy9iYWNrZ3JvdW5kX3N0YXJzJ1xyXG5jb25zdCBWSUVXX1RSQU5TSVRJT05fVElNRSA9IDUwMDtcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsZnVuY3Rpb24gKCkge1xyXG4gICAgaWYod2luZG93LnJlc2l6aW5nKXtcclxuICAgICAgICBjbGVhclRpbWVvdXQod2luZG93LnJlc2l6aW5nKVxyXG4gICAgfVxyXG4gICAgd2luZG93LnJlc2l6aW5nID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY2Muc3RvcmVWYWx1ZSgndmlld3BvcnRTaXplJyx7dzp3aW5kb3cuaW5uZXJXaWR0aCxoOndpbmRvdy5pbm5lckhlaWdodH0pO1xyXG4gICAgfSwyMDApXHJcbn0pO1xyXG4gICAgd2luZG93LnJvb3QgPSBuZXcgQ3ViWV9ET00oJ2RpdicsICdheF9yb290JywgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcclxuICAgIHJvb3Quc3R5bGUoJ2ZvbnRTaXplJywgJzEycHgnKVxyXG4gICAgICAgIC5zdHlsZSgnY3Vyc29yJywgJ3VybCgpLCBhdXRvJyk7XHJcbiAgICByb290LmFwcGVuZEVsZW1lbnQoaGVhZGVyKTtcclxuICAgIHZhciBtYWluQ29udGFpbmVyID0gcm9vdC5hcHBlbmQoJ2RpdicsICdtYWluQ29udGFpbmVyJyk7XHJcbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZEVsZW1lbnQoaG9tZUNvbnRlbnQpO1xyXG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRFbGVtZW50KGJhY2tncm9uZCk7XHJcbiAgICBjYy5zdG9yZVZhbHVlKCdjdXJyZW50VmlldycsJ0hvbWUnKTtcclxuICAgIGNjLmNvbm5lY3QoJ2N1cnJlbnRWaWV3JyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRWaWV3ID0gY2MuZ2V0VmFsdWUoJ2N1cnJlbnRWaWV3Jyk7XHJcbiAgICAgICAgbWFpbkNvbnRhaW5lci5yZW1vdmUoJy5tYWluQ29udGVudCcsVklFV19UUkFOU0lUSU9OX1RJTUUpO1xyXG4gICAgICAgIHN3aXRjaCAoY3VycmVudFZpZXcpe1xyXG4gICAgICAgICAgICBjYXNlICdIb21lJzpcclxuICAgICAgICAgICAgICAgIG1haW5Db250YWluZXIuYXBwZW5kRWxlbWVudChob21lQ29udGVudCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnQWJvdXQnOlxyXG4gICAgICAgICAgICAgICAgbWFpbkNvbnRhaW5lci5hcHBlbmRFbGVtZW50KGFib3V0Q29udGVudCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB2YXIgdmVyc2lvbiA9IHJvb3QuYXBwZW5kKCdwJywgJ3ZlcnNpb24nKVxyXG4gICAgICAgIC5zdHlsZSgncG9zaXRpb24nLCAnZml4ZWQnKVxyXG4gICAgICAgIC5zdHlsZSgnYm90dG9tJywgJzBweCcpXHJcbiAgICAgICAgLnN0eWxlKCdyaWdodCcsICcwJylcclxuICAgICAgICAuc3R5bGUoJ3BhZGRpbmdSaWdodCcsICcxZW0nKVxyXG4gICAgICAgIC5zdHlsZSgnY29sb3InLCAnbGlnaHRncmF5JylcclxuICAgICAgICAuY29udGVudChuZXcgRGF0ZSgpKVxyXG4gICAgICAgIC5zZXRVcGRhdGVyKCd0aW1lcicsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5jb250ZW50KCdDdWJZX1JvdXRpbmU6IExhc3JDeWNsZVRpbWU6ICcgKyBjci5sYXN0Q3ljbGVUaW1lICsgJ21zIHwgQ1BTOicgKyBjci5jeWNsZVBlclNlYyArICcgfExvbmdlc3Q6ICcgKyBjci5sb25nZXN0Um91dGluZVRpbWUgKyAnbXMgfCBMYXN0OicgKyBjci5sYXN0Um91dGluZVRpbWUgKyAnbXMnKTtcclxuICAgICAgICB9KTtcclxuICAgIHZhciB0aW1lciA9IGNyLmFwcGVuZCgndGltZXInKVxyXG4gICAgICAgIC5hdHRyKCdmcmVxJywgMSlcclxuICAgICAgICAuYXR0cignYWN0aW9uJywgdmVyc2lvbi51cGRhdGVyKCd0aW1lcicpKVxyXG4gICAgICAgIC5pbnNlcnQoKTtcclxuIiwiaW1wb3J0IEN1YllfRE9NIGZyb20gJy4uL0ZyYW1ld29yay9DdWJZL0N1YllfRE9NJztcclxuXHJcbnZhciBtYWluQ29udGVudCA9IG5ldyBDdWJZX0RPTSgnZGl2JywnYWJvdXQnKTtcclxudmFyIG1haW5Db250ZW50Q29udGFpbmVyU3R5bGUgPSB7XHJcbiAgICB3aWR0aDonMTAwdncnLFxyXG4gICAgaGVpZ2h0OicxMDB2aCcsXHJcbiAgICBwb3NpdGlvbjoncmVsYXRpdmUnLFxyXG4gICAgb3ZlcmZsb3c6J2hpZGRlbicsXHJcbiAgICBkaXNwbGF5OidmbGV4JyxcclxuICAgIGp1c3RpZnlDb250ZW50OidzcGFjZS1ldmVubHknLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBmbGV4V3JhcDond3JhcCdcclxufTtcclxudmFyIHNlY3Rpb25Db250YWluZXJTdHlsZSA9IHtcclxuICAgIHdpZHRoOiAnMzAlJyxcclxuICAgIGhlaWdodDogJzcwJScsXHJcbiAgICBib3JkZXI6ICcxcHggc29saWQgI2VjY2M2OCcsXHJcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICBtaW5XaWR0aDonMzAwcHgnLFxyXG4gICAgYm94U2hhZG93OicwIDAgMTBweCAjZWNjYzY4JyxcclxuICAgIHRyYW5zaXRpb246JzAuNXMnLFxyXG4gICAgYmFja2dyb3VuZDogJ3JnYmEoMCwwLDAsMC45KScsXHJcbiAgICBvcGFjaXR5OjBcclxufTtcclxubWFpbkNvbnRlbnQuc3R5bGUobWFpbkNvbnRlbnRDb250YWluZXJTdHlsZSlcclxuICAgIC5hcHBlbmRDbGFzcygnbWFpbkNvbnRlbnQnKTtcclxudmFyIHNlY3Rpb25zID0gWydCYXNpYycsJ0NhcmVlcicsJ0VkdWNhdGlvbiddO1xyXG5cclxuc2VjdGlvbnMuZm9yRWFjaChmdW5jdGlvbihfc2VjdGlvbixpZHgpe1xyXG4gICAgbGV0IHNlY3Rpb25Db250YWluZXIgPSBtYWluQ29udGVudC5hcHBlbmQoJ2RpdicsX3NlY3Rpb24rJ0NvbnRhaW5lcicpO1xyXG4gICAgc2VjdGlvbkNvbnRhaW5lci5zdHlsZShzZWN0aW9uQ29udGFpbmVyU3R5bGUpXHJcbiAgICAgICAgLmF0dHIoJ2FjdGl2YXRlZCcsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5zdHlsZSgnb3BhY2l0eScsMSlcclxuICAgICAgICAgICAgfSwzMDAqKGlkeCsxKSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5hdHRyKCdkZWFjdGl2YXRlZCcsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLnN0eWxlKCdvcGFjaXR5JywwKVxyXG4gICAgICAgIH0pO1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1haW5Db250ZW50OyIsImltcG9ydCBDdWJZX0RPTSBmcm9tICcuLi9GcmFtZXdvcmsvQ3ViWS9DdWJZX0RPTSc7XHJcblxyXG5cclxudmFyIG1haW5Db250ZW50ID0gbmV3IEN1YllfRE9NKCdkaXYnLCdob21lQ29udGVudCcpO1xyXG5tYWluQ29udGVudC5zdHlsZSgnd2lkdGgnLCcxMDAlJylcclxuICAgIC5zdHlsZSgnaGVpZ2h0JywnMTAwJScpXHJcbiAgICAuc3R5bGUoJ2JhY2tncm91bmQnLCcjMjIyZjNlJylcclxuICAgIC5zdHlsZSgncG9zaXRpb24nLCdyZWxhdGl2ZScpXHJcbiAgICAuc3R5bGUoJ3RyYW5zaXRpb24nLCAnNXMnKVxyXG4gICAgLnN0eWxlKCdvdmVyZmxvdycsJ2hpZGRlbicpXHJcbiAgICAuYXBwZW5kQ2xhc3MoJ21haW5Db250ZW50Jyk7XHJcblxyXG52YXIgYmFja2dyb3VuZEFuID0gY3IuYXBwZW5kKCdiYWNrZ3JvdW5kQW4nKVxyXG4gICAgLmF0dHIoJ2ZyZXEnLDMwMClcclxuICAgIC5hdHRyKCdyZXBlYXQnLDEpXHJcbiAgICAuYXR0cignYWN0aW9uJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbWFpbkNvbnRlbnQuc3R5bGUoJ2JhY2tncm91bmQnLCd0cmFuc3BhcmVudCcpXHJcbiAgICB9KS5pbnNlcnQoKTtcclxuXHJcbnZhciBoZWFkTGluZSA9IG1haW5Db250ZW50LmFwcGVuZCgnaDEnLCdoZWFkTGluZScpXHJcbiAgICAuY29udGVudCgnRlJPTlQgRU5EIEVOR0lORUVSJylcclxuICAgIC5zdHlsZSgncG9zaXRpb24nLCdmaXhlZCcpXHJcbiAgICAuc3R5bGUoJ2NvbG9yJywnd2hpdGUnKVxyXG4gICAgLnN0eWxlKCd3aWR0aCcsJzEwMCUnKVxyXG4gICAgLnN0eWxlKCdoZWlnaHQnLCAnNjBweCcpXHJcbiAgICAuc3R5bGUoJ3RleHRBbGlnbicsJ2NlbnRlcicpXHJcbiAgICAuc3R5bGUoJ2xlZnQnLCcwJylcclxuICAgIC5zdHlsZSgncmlnaHQnLCcwJylcclxuICAgIC5zdHlsZSgnYm90dG9tJywnMzMlJylcclxuICAgIC5zdHlsZSgnbWFyZ2luJywnYXV0bycpXHJcbiAgICAuc3R5bGUoJ2ZvbnRTaXplJywnNjRweCcpXHJcbiAgICAuc3R5bGUoJ3RyYW5zaXRpb24nLCAnMXMnKVxyXG4gICAgLnN0eWxlKCdvcGFjaXR5JywgMClcclxuICAgIC5zdHlsZSgndGV4dFNoYWRvdycsJzAgMCAxMHB4ICM3MGExZmYnKVxyXG4gICAgLnN0eWxlKCd6SW5kZXgnLDEpXHJcbiAgICAub24oJ21vdXNlb3ZlcicsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuc3R5bGUoJ3RleHRTaGFkb3cnLCcwIDAgMzBweCAjZWNjYzY4JylcclxuICAgIH0pXHJcbiAgICAub24oJ21vdXNlbGVhdmUnLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnN0eWxlKCd0ZXh0U2hhZG93JywnMCAwIDEwcHggIzcwYTFmZicpXHJcbiAgICB9KVxyXG4gICAgLmF0dHIoJ2FjdGl2YXRlZCcsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBzZXRUaW1lb3V0KFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLnN0eWxlKCdvcGFjaXR5JywgMSlcclxuICAgICAgICAgICAgfSwzMDBcclxuICAgICAgICApXHJcblxyXG4gICAgfSlcclxuICAgIC5hdHRyKCdkZWFjdGl2YXRlZCcsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuc3R5bGUoJ29wYWNpdHknLCAwKVxyXG4gICAgfSk7XHJcblxyXG52YXIgaG9tZUhlYWRMaW5lQW5pbWF0aW9uID0gY3IuYXBwZW5kKCdob21lX2hlYWRMaW5lX2FuaW1hdGlvbicpXHJcbiAgICAuYXR0cignZnJlcScsMzAwKVxyXG4gICAgLmF0dHIoJ2FjdGlvbicsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCBvZGQgPSBNYXRoLnJhbmRvbSgpKjEwMDtcclxuICAgICAgICBpZihvZGQ+NTApe1xyXG4gICAgICAgICAgICBoZWFkTGluZS5zdHlsZSgndGV4dFNoYWRvdycsJzAgMCAzMHB4ICNlY2NjNjgnKVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBoZWFkTGluZS5zdHlsZSgndGV4dFNoYWRvdycsJzAgMCAxMHB4ICM3MGExZmYnKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICAuaW5zZXJ0KCk7XHJcblxyXG52YXIgc3ViSGVhZExpbmUgPSBtYWluQ29udGVudC5hcHBlbmQoJ2gxJywnc3ViSGVhZExpbmUnKVxyXG4gICAgLmNvbnRlbnQoJy0gd2hvIG1ha2VzIGRhdGEgYWxpdmUgLScpXHJcbiAgICAuc3R5bGUoJ3Bvc2l0aW9uJywnZml4ZWQnKVxyXG4gICAgLnN0eWxlKCdjb2xvcicsJyNlY2NjNjgnKVxyXG4gICAgLnN0eWxlKCd3aWR0aCcsJzEwMCUnKVxyXG4gICAgLnN0eWxlKCdoZWlnaHQnLCAnMzBweCcpXHJcbiAgICAuc3R5bGUoJ3RleHRBbGlnbicsJ2NlbnRlcicpXHJcbiAgICAuc3R5bGUoJ2xlZnQnLCcwJylcclxuICAgIC5zdHlsZSgncmlnaHQnLCcwJylcclxuICAgIC5zdHlsZSgnYm90dG9tJywnMzAlJylcclxuICAgIC5zdHlsZSgnbWFyZ2luJywnYXV0bycpXHJcbiAgICAuc3R5bGUoJ2ZvbnRTaXplJywnMzJweCcpXHJcbiAgICAuc3R5bGUoJ3RyYW5zaXRpb24nLCAnMXMnKVxyXG4gICAgLnN0eWxlKCdvcGFjaXR5JywgMClcclxuICAgIC5zdHlsZSgndGV4dFNoYWRvdycsJzAgMCAxMHB4ICNlY2NjNjgnKVxyXG4gICAgLnN0eWxlKCd6SW5kZXgnLDEpXHJcbiAgICAuYXR0cignYWN0aXZhdGVkJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHNldFRpbWVvdXQoXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYuc3R5bGUoJ29wYWNpdHknLCAxKVxyXG4gICAgICAgICAgICB9LDMwMFxyXG4gICAgICAgIClcclxuXHJcbiAgICB9KVxyXG4gICAgLmF0dHIoJ2RlYWN0aXZhdGVkJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5zdHlsZSgnb3BhY2l0eScsIDApXHJcbiAgICB9KTtcclxuXHJcbnZhciBpbmZvQnV0dG9uSGFsbyA9IG1haW5Db250ZW50LmFwcGVuZCgnc3BhbicsJ2luZm9CdXR0b25IYWxvJylcclxuICAgIC5zdHlsZSgncG9zaXRpb24nLCdmaXhlZCcpXHJcbiAgICAuc3R5bGUoJ2NvbG9yJywnI2VjY2M2OCcpXHJcbiAgICAuc3R5bGUoJ3dpZHRoJywnMzJweCcpXHJcbiAgICAuc3R5bGUoJ2hlaWdodCcsICczMnB4JylcclxuICAgIC5zdHlsZSgnb3BhY2l0eScsIDApXHJcbiAgICAuc3R5bGUoJ292ZXJmbG93JywnaGlkZGVuJylcclxuICAgIC5zdHlsZSgnYm9yZGVyUmFkaXVzJywnNHB4JylcclxuICAgIC5zdHlsZSgndGV4dEFsaWduJywnY2VudGVyJylcclxuICAgIC5zdHlsZSgnbGVmdCcsJzAnKVxyXG4gICAgLnN0eWxlKCdyaWdodCcsJzAnKVxyXG4gICAgLnN0eWxlKCdib3R0b20nLCcxOCUnKVxyXG4gICAgLnN0eWxlKCdtYXJnaW4nLCdhdXRvJylcclxuICAgIC5zdHlsZSgnZm9udFNpemUnLCcyNHB4JylcclxuICAgIC5zdHlsZSgndHJhbnNpdGlvbicsICcwLjVzJylcclxuICAgIC5zdHlsZSgnYm9yZGVyJywnMXB4IHNvbGlkICNlY2NjNjgnKVxyXG4gICAgLnN0eWxlKCdib3hTaGFkb3cnLCcwIDAgMzBweCAjZWNjYzY4JylcclxuICAgIC5zdHlsZSgnY3Vyc29yJywncG9pbnRlcicpXHJcbiAgICAuc3R5bGUoJ3pJbmRleCcsMSlcclxuICAgIC5hdHRyKCdhY3RpdmF0ZWQnLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgc2V0VGltZW91dChcclxuICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5zdHlsZSgnb3BhY2l0eScsIDEpXHJcbiAgICAgICAgICAgIH0sMzAwXHJcbiAgICAgICAgKVxyXG5cclxuICAgIH0pXHJcbiAgICAuYXR0cignZGVhY3RpdmF0ZWQnLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnN0eWxlKCdvcGFjaXR5JywgMClcclxuICAgIH0pO1xyXG5cclxudmFyIGluZm9CdXR0b24gPSBtYWluQ29udGVudC5hcHBlbmQoJ3NwYW4nLCdpbmZvQnV0dG9uJylcclxuICAgIC5jb250ZW50KCdXYW5uYSBrbm93IG1vcmU/JylcclxuICAgIC5zdHlsZSgncG9zaXRpb24nLCdmaXhlZCcpXHJcbiAgICAuc3R5bGUoJ2NvbG9yJywnI2VjY2M2OCcpXHJcbiAgICAuc3R5bGUoJ3dpZHRoJywnMzJweCcpXHJcbiAgICAuc3R5bGUoJ2hlaWdodCcsICczMnB4JylcclxuICAgIC5zdHlsZSgnb3ZlcmZsb3cnLCdoaWRkZW4nKVxyXG4gICAgLnN0eWxlKCdib3JkZXInLCcxcHggc29saWQgdHJhbnNwYXJlbnQnKVxyXG4gICAgLnN0eWxlKCdib3JkZXJSYWRpdXMnLCc0cHgnKVxyXG4gICAgLnN0eWxlKCd0ZXh0QWxpZ24nLCdjZW50ZXInKVxyXG4gICAgLnN0eWxlKCdsZWZ0JywnMCcpXHJcbiAgICAuc3R5bGUoJ29wYWNpdHknLCAwKVxyXG4gICAgLnN0eWxlKCdyaWdodCcsJzAnKVxyXG4gICAgLnN0eWxlKCdib3R0b20nLCcxOCUnKVxyXG4gICAgLnN0eWxlKCdtYXJnaW4nLCdhdXRvJylcclxuICAgIC5zdHlsZSgnZm9udFNpemUnLCcyNHB4JylcclxuICAgIC5zdHlsZSgndHJhbnNpdGlvbicsICcwLjVzJylcclxuICAgIC5zdHlsZSgnYmFja2dyb3VuZCcsICcjZWNjYzY4JylcclxuICAgIC5zdHlsZSgndGV4dFNoYWRvdycsJzAgMCA1cHggI2VjY2M2OCcpXHJcbiAgICAuc3R5bGUoJ2JveFNoYWRvdycsJzAgMCAxMHggI2VjY2M2OCcpXHJcbiAgICAuc3R5bGUoJ2N1cnNvcicsJ3BvaW50ZXInKVxyXG4gICAgLnN0eWxlKCd6SW5kZXgnLDEpXHJcbiAgICAuYXR0cignYWN0aXZhdGVkJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBzZXRUaW1lb3V0KFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLnN0eWxlKCdvcGFjaXR5JywgMSlcclxuICAgICAgICAgICAgfSwzMDBcclxuICAgICAgICApLFxyXG4gICAgICAgIHRoaXMuc3R5bGUoJ2JhY2tncm91bmQnLCAnI2VjY2M2OCcpXHJcbiAgICAgICAgICAgIC5zdHlsZSgnd2lkdGgnLCczMnB4JylcclxuICAgICAgICAgICAgLnN0eWxlKCdib3hTaGFkb3cnLCcwIDAgMTBweCAjZWNjYzY4Jyk7XHJcbiAgICAgICAgaW5mb0J1dHRvbi5vdmVyZWQgPSBmYWxzZTtcclxuXHJcbiAgICB9KVxyXG4gICAgLm9uKCdjbGljaycsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNjLnN0b3JlVmFsdWUoJ2N1cnJlbnRWaWV3JywnQWJvdXQnKTtcclxuICAgIH0pXHJcbiAgICAub24oJ21vdXNlb3ZlcicsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuc3R5bGUoJ2JhY2tncm91bmQnLCdyZ2JhKDAsIDAsIDAsIDAuNSknKVxyXG4gICAgICAgICAgICAuc3R5bGUoJ3dpZHRoJywnMTAwJScpXHJcbiAgICAgICAgICAgIC5zdHlsZSgnYm94U2hhZG93JywnJyk7XHJcbiAgICAgICAgaW5mb0J1dHRvbkhhbG8uc3R5bGUoJ29wYWNpdHknLCAwKTtcclxuICAgICAgICBpbmZvQnV0dG9uLm92ZXJlZCA9IHRydWU7XHJcbiAgICB9KVxyXG4gICAgLm9uKCdtb3VzZWxlYXZlJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5zdHlsZSgnYmFja2dyb3VuZCcsICcjZWNjYzY4JylcclxuICAgICAgICAgICAgLnN0eWxlKCd3aWR0aCcsJzMycHgnKVxyXG4gICAgICAgICAgICAuc3R5bGUoJ2JveFNoYWRvdycsJzAgMCAxMHB4ICNlY2NjNjgnKTtcclxuICAgICAgICBpbmZvQnV0dG9uLm92ZXJlZCA9IGZhbHNlO1xyXG4gICAgfSk7XHJcblxyXG52YXIgaW5mb0J1dHRvbkhhbG9BbiA9IGNyLmFwcGVuZCgnaW5mb0J1dHRvbkhhbG9BbicpXHJcbiAgICAuYXR0cignZnJlcScsNjAwKVxyXG4gICAgLmF0dHIoJ2FjdGlvbicsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmKGluZm9CdXR0b24ub3ZlcmVkID09PSB0cnVlKXtcclxuICAgICAgICAgICAgaW5mb0J1dHRvbkhhbG8uc3RhdGUgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzd2l0Y2goaW5mb0J1dHRvbkhhbG8uc3RhdGUpe1xyXG4gICAgICAgICAgICBjYXNlIHVuZGVmaW5lZDpcclxuICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgaW5mb0J1dHRvbkhhbG8uc3RhdGUgPSAxO1xyXG4gICAgICAgICAgICAgICAgaW5mb0J1dHRvbkhhbG8uc3R5bGUoJ3dpZHRoJywgJzY0cHgnKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdHlsZSgnYm90dG9tJywnY2FsYygxOCUgLSAxNXB4KScpXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0eWxlKCdoZWlnaHQnLCAnNjRweCcpXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0eWxlKCdvcGFjaXR5JywgMCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgaW5mb0J1dHRvbkhhbG8uc3RhdGUgPSAyO1xyXG4gICAgICAgICAgICAgICAgaW5mb0J1dHRvbkhhbG8uc3R5bGUoJ3dpZHRoJywgJzMycHgnKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdHlsZSgnYm90dG9tJywnMTglJylcclxuICAgICAgICAgICAgICAgICAgICAuc3R5bGUoJ2hlaWdodCcsICczMnB4Jyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgaW5mb0J1dHRvbkhhbG8uc3RhdGUgPSAwO1xyXG4gICAgICAgICAgICAgICAgaW5mb0J1dHRvbkhhbG8uc3R5bGUoJ29wYWNpdHknLCAxKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH0pLmluc2VydCgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWFpbkNvbnRlbnQ7Il0sInNvdXJjZVJvb3QiOiIifQ==