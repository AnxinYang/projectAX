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
        this.parent = {};
        this.classes = [];

        if (_root) {
            _root.appendChild(this.dom);
            this.isRoot = true;
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

            if (this.isActive || this.isRoot) {
                element.activate();
            }

            this.childrenList.push(element);
            this.dom.appendChild(element.dom);
            return element;
        }
    }, {
        key: 'attr',
        value: function attr(key, _value) {
            var value = void 0;
            if (key === 'activate' || key === 'deactivate') {
                value = _value;
            } else {
                value = this.readValue(_value);
            }

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
            /*this.childrenList.forEach(function (child) {
                child.remove();
            });*/
            this.deactivate();
            this.dom.remove();
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
        key: 'activate',
        value: function activate() {
            this.isActive = true;

            if (this.attribute.activate) {
                this.attribute.activate.call(this);
            }

            this.childrenList.forEach(function (child) {
                child.activate();
            });
        }
    }, {
        key: 'deactivate',
        value: function deactivate() {
            this.isActive = false;

            if (this.attribute.deactivate) {
                this.attribute.deactivate.call(this);
            }

            this.childrenList.forEach(function (child) {
                child.deactivate();
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

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

window.mobilecheck = function () {
    var check = false;
    (function (a) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
}; /**
    * Created by Anxin Yang on 6/12/2018.
    */

var background = new _CubY_DOM2.default('div', 'background');
background.style('width', '100vw').style('height', '100vh').style('position', 'fixed').style('background', 'transparent').style('top', 0).style('left', 0).on('mousemove', function (e, d) {
    var x = e.clientX;
    var y = e.clientY;
    var origin = {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2
    };
    background.dx = -(x - origin.x) / 10;
    background.dy = -(y - origin.y) / 10;
});;
var circleNum = mobilecheck() ? 50 : 128;
var circleList = [];

var _loop = function _loop() {
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    var circle = new _CubY_DOM2.default('div', 'backgroundCircle_' + i).style('position', 'absolute').style('width', '20px').style('height', '20px').style('border-radius', '4px').style('background', '#eccc68').style('transition', '0.3s linear').style('box-shadow', '0 0 10px #eccc68').style('opacity', '0').style('transform', 'translate(' + x + 'px,' + y + 'px)').attr('activate', function () {
        var self = this;
        this.x = x;
        this.y = y;
        this.dx = Math.random() - 0.5;
        this.dy = Math.random() - 0.5;
        this.ds = 0.01;
        this.scale = Math.random();
        this.counter = 10;
        this.circleAn = cr.append('home_circle_animation_' + i).attr('freq', 50).attr('action', function () {
            var scale = self.scale;
            var seed = Math.random();
            self.x += self.dx;
            self.y += self.dy;

            self.style('transform', 'translate(' + (self.x + (background.dx || 0) * scale) + 'px,' + (self.y + (background.dy || 0) * scale) + 'px) scale(' + scale + ')').style('opacity', scale).style('z-index', scale >= 0.8 ? 2 : 0).style('box-shadow', '0 0 ' + (seed * 10 + 10) + 'px #eccc68');
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
            self.style('box-shadow', '0 0 ' + (seed * 40 + 10) + 'px #eccc68');
        }).insert();
    }).attr('deactivate', function () {
        this.circleAn.remove();
        this.circleAn2.remove();
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

var header = new _CubY_DOM2.default('div', 'header').attr('onselectstart', 'return false;').style('display', 'flex').style('position', 'absolute').style('opacity', '0.5').style('top', '1em').style('height', '3em').style('z-index', '10').style('transition', '0.3s').on('mouseover', function () {
    this.style('opacity', '1');
}).on('mouseleave', function () {
    this.style('opacity', '0.5');
});

var headerItems = ['Menu', 'Playground', 'About Me'];
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
var menuContainer = headerMenuButton.append('div', 'menuContainer').style('position', 'absolute').style('width', '256px').style('height', '0px').style('background', '').style('top', '125%').style('left', '0').style('overflow', 'hidden').style('transition', '0.3s').setUpdater('toggleMenu', function (d) {
    var hasOpen = this.hasOpen || false;
    if (hasOpen) {
        this.style('height', '0');
    } else {
        this.style('height', '33vh');
    }
    this.hasOpen = !hasOpen;
}).setUpdater('closeMenu', function (d) {
    this.style('height', '0').style('box-shadow', '0px 0px 5px rgba(112, 161, 255,0)').style('border', '1px solid rgba(112, 161, 255, 0)');
    this.hasOpen = false;
});

window.addEventListener('click', function (e) {
    menuContainer.updater('closeMenu')();
});

headerMenuButton.on('click', function (e) {
    e.stopPropagation();
    menuContainer.updater('toggleMenu')();
});

var menuContents = menuContainer.append('ul').style('padding-left', '2em').style('margin', '0');

var menuItems = ['Home', 'May Coming soon', 'Probably Coming soon'];
index = 0;

menuItems.forEach(function (item) {
    menuItems[index++] = menuContents.append('li', 'menu_' + item).content(item).style('color', 'white').style('padding', '1em 0.5em').style('cursor', 'pointer').style('text-shadow', '0 0 10px #eccc68').style('transition', '0.3s').on('click', function () {
        cc.storeValue('currentView', item);
    }).on('mouseover', function () {
        this.style('text-shadow', '0 0 10px #eccc68').style('color', '#eccc68');
    }).on('mouseleave', function () {
        this.style('text-shadow', '0 0 20px #eccc68').style('color', 'white');
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
    mainContent.style('background', 'black');
}).insert();

var headLine = mainContent.append('h1', 'headLine').content('FRONT END ENGINEER').style('position', 'fixed').style('color', 'white').style('width', '100%').style('height', '60px').style('text-align', 'center').style('left', '0').style('right', '0').style('bottom', '33%').style('margin', 'auto').style('font-size', '64px').style('transition', '1s').style('text-shadow', '0 0 10px #70a1ff').style('z-index', 1).on('mouseover', function () {
    this.style('text-shadow', '0 0 30px #eccc68');
}).on('mouseleave', function () {
    this.style('text-shadow', '0 0 10px #70a1ff');
});
var homeHeadLineAnimation = cr.append('home_headLine_animation').attr('freq', 300).attr('action', function () {
    var odd = Math.random() * 100;
    if (odd > 50) {
        headLine.style('text-shadow', '0 0 30px #eccc68');
    } else {
        headLine.style('text-shadow', '0 0 10px #70a1ff');
    }
}).insert();

var subHeadLine = mainContent.append('h1', 'subHeadLine').content('- who makes data alive -').style('position', 'fixed').style('color', '#eccc68').style('width', '100%').style('height', '30px').style('text-align', 'center').style('left', '0').style('right', '0').style('bottom', '30%').style('margin', 'auto').style('font-size', '32px').style('transition', '1s').style('text-shadow', '0 0 10px #eccc68').style('z-index', 1);
var infoButtonHalo = mainContent.append('span', 'infoButtonHalo').style('position', 'fixed').style('color', '#eccc68').style('width', '32px').style('height', '32px').style('overflow', 'hidden').style('border-radius', '4px').style('text-align', 'center').style('left', '0').style('right', '0').style('bottom', '18%').style('margin', 'auto').style('font-size', '24px').style('transition', '0.5s').style('border', '1px solid #eccc68').style('box-shadow', '0 0 30px #eccc68').style('cursor', 'pointer').style('z-index', 1);
var infoButton = mainContent.append('span', 'infoButton').content('Wanna know more?').style('position', 'fixed').style('color', '#eccc68').style('width', '32px').style('height', '32px').style('overflow', 'hidden').style('border', '1px solid transparent').style('border-radius', '4px').style('text-align', 'center').style('left', '0').style('right', '0').style('bottom', '18%').style('margin', 'auto').style('font-size', '24px').style('transition', '0.5s').style('background', '#eccc68').style('text-shadow', '0 0 5px #eccc68').style('box-shadow', '0 0 10x #eccc68').style('cursor', 'pointer').style('z-index', 1).on('click', function () {
    cc.storeValue('currentView', 'about');
}).on('mouseover', function () {
    this.style('background', 'rgba(0, 0, 0, 0.5)').style('width', '100%').style('box-shadow', '');
    infoButton.overed = true;
}).on('mouseleave', function () {
    this.style('background', '#eccc68').style('width', '32px').style('box-shadow', '0 0 10px #eccc68');
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
window.root = new _CubY_DOM2.default('div', 'ax_root', document.getElementById('app'));
root.style('font-size', '12px').style('cursor', 'url(), auto');
root.appendElement(_header2.default);
var mainContainer = root.append('div', 'mainContainer');
mainContainer.appendElement(_home2.default);
mainContainer.appendElement(_background_stars2.default);
cc.storeValue('currentView', 'Home');
cc.connect('currentView', function () {
    var currentView = cc.getValue('currentView');
    mainContainer.remove('.mainContent');
    switch (currentView) {
        case 'Home':
            mainContainer.appendElement(_home2.default);
            break;
    }
});

var version = root.append('p', 'version').style('position', 'fixed').style('bottom', '0px').style('right', '0').style('padding-right', '1em').style('color', 'lightgray').content(new Date()).setUpdater('timer', function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0ZyYW1ld29yay9DdWJZL0N1YllfQ29yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRnJhbWV3b3JrL0N1YlkvQ3ViWV9ET00uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0ZyYW1ld29yay9DdWJZL0N1YllfUm91dGluZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9iYWNrZ3JvdW5kX3N0YXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkVBLElBQU0saUJBQWlCLDBCQUFNLENBQTdCOzs0QkFFSTt1QkFBWSxRQUFPOzhCQUNmOztZQUFJLFFBQVEsU0FDWjtZQUFJLE9BQ0o7YUFBSyxLQUNSOzs7OztxQ0FFRztnQkFBSSxRQUFRLFVBQ1o7aUJBQUssWUFBWSxNQUFNLFNBQ3ZCO2lCQUFLLFVBQ0w7aUJB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LGVBQWM7QUFDNUIsR0FBRyxRQUFRLGVBQWMsWUFDckI7UUFBSSxjQUFjLEdBQUcsU0FDckI7a0JBQWMsT0FDZDtZQUNJO2FBQ0k7MEJBQWMscUJBQ2Q7QUFFWDs7QUFSRDs7QUFVQSxJQUFJLGVBQWUsT0FBTyxLQUFLLFdBQzFCLE1BQU0sWUFBWSxTQUNsQixNQUFNLFVBQVUsT0FDaEIsTUFBTSxTQUFTLEtBQ2YsTUFBTSxpQkFBaUIsT0FDdkIsTUFBTSxTQUFTLGFBQ2YsUUFBUSxJQUFJLFFBQ1osV0FBVyxTQUFTLFlBQ2pCO1NBQUssUUFBUSxrQ0FBa0MsR0FBRyxnQkFBZ0IsY0FBYyxHQUFHLGNBQWMsZ0JBQWdCLEdBQUcscUJBQXFCLGVBQWUsR0FBRyxrQkFDOUo7QUFUUztBQVVkLElBQUksUUFBUSxHQUFHLE9BQU8sU0FDakIsS0FBSyxRQUFRLEdBQ2IsS0FBSyxVQUFVLFFBQVEsUUFBUSxVQUMvQixTIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiY29uc3QgRU1QVFlfRlVOQ1RJT04gPSAoKT0+e307XHJcbmNsYXNzIEN1YllfQ29yZXtcclxuICAgIGNvbnN0cnVjdG9yKF9wcm9wcyl7XHJcbiAgICAgICAgbGV0IHByb3BzID0gcHJvcHMgfHwge307XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuaW5pdChwcm9wcyk7XHJcbiAgICB9XHJcbiAgICBpbml0KF9wcm9wcyl7XHJcbiAgICAgICAgbGV0IHByb3BzID0gX3Byb3BzIHx8IHt9O1xyXG4gICAgICAgIHRoaXMuZGVidWdNb2RlID0gcHJvcHMuZGVidWcgfHwgZmFsc2U7XHJcbiAgICAgICAgdGhpcy5kYXRhTWFwID0ge307XHJcbiAgICAgICAgdGhpcy5hY3Rpb25NYXAgPSB7fTtcclxuICAgICAgICB0aGlzLmJyb3dzZXIgPSB0aGlzLmdldEJyb3dzZXIoKTtcclxuICAgICAgICB3aW5kb3cuY2MgPSB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEJyb3dzZXIoKXtcclxuICAgICAgICBsZXQgaXNJRSA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBpc0Nocm9tZSA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBpc09wZXJhID0gZmFsc2U7XHJcbiAgICAgICAgaWYoKCEhd2luZG93Lm9wciAmJiAhIW9wci5hZGRvbnMpIHx8ICEhd2luZG93Lm9wZXJhIHx8IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignIE9QUi8nKSA+PSAwKXtcclxuICAgICAgICAgICAgaXNPcGVyYSA9IHRydWU7XHJcbiAgICAgICAgICAgIHJldHVybiAnb3BlcmEnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0eXBlb2YgSW5zdGFsbFRyaWdnZXIgIT09ICd1bmRlZmluZWQnKXtcclxuICAgICAgICAgICAgcmV0dXJuICdmaXJlZm94JztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoL2NvbnN0cnVjdG9yL2kudGVzdCh3aW5kb3cuSFRNTEVsZW1lbnQpIHx8IChmdW5jdGlvbiAocCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHAudG9TdHJpbmcoKSA9PT0gXCJbb2JqZWN0IFNhZmFyaVJlbW90ZU5vdGlmaWNhdGlvbl1cIjtcclxuICAgICAgICAgICAgfSkoIXdpbmRvd1snc2FmYXJpJ10gfHwgc2FmYXJpLnB1c2hOb3RpZmljYXRpb24pKXtcclxuICAgICAgICAgICAgcmV0dXJuICdzYWZhcmknO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihmYWxzZSB8fCAhIWRvY3VtZW50LmRvY3VtZW50TW9kZSl7XHJcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgb3V0cHV0ID0gYXJndW1lbnRzWzBdO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gYXJndW1lbnRzW2ldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvYmogPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoa2V5KSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dFtrZXldID0gb2JqW2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgaXNJRSA9dHJ1ZTtcclxuICAgICAgICAgICAgcmV0dXJuICdpZSc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCFpc0lFICYmICEhd2luZG93LlN0eWxlTWVkaWEpe1xyXG4gICAgICAgICAgICByZXR1cm4gJ2VkZ2UnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZighIXdpbmRvdy5jaHJvbWUgJiYgISF3aW5kb3cuY2hyb21lLndlYnN0b3JlKXtcclxuICAgICAgICAgICAgaXNDaHJvbWUgPSB0cnVlXHJcbiAgICAgICAgICAgIHJldHVybiAnY2hyb21lJztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoKGlzQ2hyb21lIHx8IGlzT3BlcmEpICYmICEhd2luZG93LkNTUyl7XHJcbiAgICAgICAgICAgIHJldHVybiAnYmxpbmsnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdG9yZURhdGFBcnJheShfYXJyYXksIF9pZEtleSwgX2l0ZW1Qcm9jZXNzb3IsIF9vcHRpb25zLCBfY2FsbGJhY2spIHtcclxuICAgICAgICB2YXIgb3B0aW9ucyA9IF9vcHRpb25zIHx8IHt9O1xyXG4gICAgICAgIHZhciBpZEtleSA9IF9pZEtleSB8fCAnaWQnO1xyXG4gICAgICAgIHZhciBjYWxsYmFjayA9IF9jYWxsYmFjayB8fCBFTVBUWV9GVU5DVElPTjtcclxuICAgICAgICB2YXIgYXJyYXkgPSBfYXJyYXkgfHwgW107XHJcbiAgICAgICAgdmFyIGl0ZW1MaXN0ID0gW107XHJcbiAgICAgICAgdmFyIGl0ZW1Qcm9jZXNzb3IgPSBfaXRlbVByb2Nlc3NvciB8fCBFTVBUWV9GVU5DVElPTjtcclxuXHJcbiAgICAgICAgYXJyYXkuZm9yRWFjaChmdW5jdGlvbiAoX2l0ZW0pIHtcclxuICAgICAgICAgICAgdmFyIGtleSA9IF9pdGVtW2lkS2V5XTtcclxuICAgICAgICAgICAgaWYgKGtleSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBpdGVtID0gc2VsZi5zdG9yZVZhbHVlKGtleSwgX2l0ZW0sIF9vcHRpb25zKTtcclxuXHJcbiAgICAgICAgICAgIGl0ZW1Qcm9jZXNzb3IoaXRlbSk7XHJcbiAgICAgICAgICAgIGl0ZW1MaXN0LnB1c2goaXRlbSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNhbGxiYWNrKF9hcnJheSwgaXRlbUxpc3QpO1xyXG4gICAgICAgIHJldHVybiBpdGVtTGlzdDtcclxuICAgIH07XHJcblxyXG4gICAgc3RvcmVWYWx1ZShfa2V5LCBfdmFsdWUsIF9vcHRpb25zLCBfY2FsbGJhY2spIHtcclxuICAgICAgICB2YXIgb3B0aW9ucyA9IF9vcHRpb25zIHx8IHt9O1xyXG4gICAgICAgIHZhciBzdG9yZSA9IHRoaXMuZGF0YU1hcDtcclxuICAgICAgICB2YXIga2V5ID0gX2tleTtcclxuICAgICAgICB2YXIgY2FsbGJhY2sgPSBfY2FsbGJhY2sgfHwgRU1QVFlfRlVOQ1RJT047XHJcbiAgICAgICAgdmFyIG5ld1ZhbHVlID0gX3ZhbHVlO1xyXG4gICAgICAgIHZhciBpdGVtID0gc3RvcmVba2V5XTtcclxuICAgICAgICBpZihpdGVtIT09dW5kZWZpbmVkICYmIGl0ZW0gPT09IE9iamVjdChpdGVtKSAmJiBvcHRpb25zLm92ZXJ3cml0ZSE9PXRydWUpIHtcclxuICAgICAgICAgICAgaXRlbSA9IE9iamVjdC5hc3NpZ24oaXRlbSwgbmV3VmFsdWUpO1xyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgaXRlbSA9IG5ld1ZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRhdGFNYXBba2V5XSA9IGl0ZW07XHJcblxyXG4gICAgICAgIGNhbGxiYWNrKGl0ZW0pO1xyXG4gICAgICAgIHRoaXMucmVhY3Qoa2V5KTtcclxuICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgIH07XHJcbiAgICBnZXRWYWx1ZShfa2V5KSB7XHJcbiAgICAgICAgdmFyIGtleSA9IF9rZXkgfHwgJyc7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YU1hcFtrZXldO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25uZWN0KF9rZXksX2FjdGlvbikge1xyXG4gICAgICAgIGlmKF9rZXk9PT11bmRlZmluZWQgfHwgX2FjdGlvbj09PXVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBhY3Rpb25NYXAgPSB0aGlzLmFjdGlvbk1hcDtcclxuICAgICAgICB2YXIgYWN0aW9uTGlzdCA9IGFjdGlvbk1hcFtfa2V5XSB8fCBbXTtcclxuICAgICAgICBhY3Rpb25MaXN0LnB1c2goX2FjdGlvbik7XHJcbiAgICAgICAgYWN0aW9uTWFwW19rZXldID0gYWN0aW9uTGlzdDtcclxuICAgIH07XHJcbiAgICByZWFjdChfa2V5KSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGlmKF9rZXk9PT11bmRlZmluZWQpe1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgYWN0aW9uTWFwID0gdGhpcy5hY3Rpb25NYXA7XHJcbiAgICAgICAgdmFyIGFjdGlvbkxpc3QgPSBhY3Rpb25NYXBbX2tleV0gfHwgW107XHJcbiAgICAgICAgYWN0aW9uTGlzdC5mb3JFYWNoKChhY3Rpb24pPT4ge1xyXG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBzZWxmLmdldFZhbHVlKF9rZXkpO1xyXG4gICAgICAgICAgICBhY3Rpb24odmFsdWUpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9O1xyXG4gICAgZGVidWcoc3RyKSB7XHJcbiAgICAgICAgaWYodGhpcy5kZWJ1Z01vZGUpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnREVCVUc6ICcgKyBzdHIpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuY29uc3QgY2MgPSBuZXcgQ3ViWV9Db3JlKCk7XHJcbndpbmRvdy5jYyA9IGNjO1xyXG5leHBvcnQgZGVmYXVsdCBjYztcclxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgQW54aW4gWWFuZyBvbiA1LzI2LzIwMTguXHJcbiAqL1xyXG5pbXBvcnQgQVhDb3JlIGZyb20gJy4vQ3ViWV9Db3JlJztcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3ViWV9ET00ge1xyXG4gICAgY29uc3RydWN0b3IoX3RhZyxfaWQsX3Jvb3QpIHtcclxuICAgICAgICB0aGlzLmlkID0gdGhpcy5yZWFkVmFsdWUoX2lkKXx8ICdzZWxmJztcclxuICAgICAgICB0aGlzLnRhZyA9IHRoaXMucmVhZFZhbHVlKF90YWcpIHx8ICdkaXYnO1xyXG4gICAgICAgIHRoaXMuZG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0aGlzLnRhZyk7XHJcbiAgICAgICAgdGhpcy5kb20uc2V0QXR0cmlidXRlKCdpZCcsdGhpcy5pZCk7XHJcbiAgICAgICAgdGhpcy5jaGlsZHJlbkxpc3QgPSBbXTtcclxuICAgICAgICB0aGlzLmF0dHJpYnV0ZSA9IHt9O1xyXG4gICAgICAgIHRoaXMuZG9tU3R5bGUgPSB7fTtcclxuICAgICAgICB0aGlzLnVwZGF0ZXJzID0ge307XHJcbiAgICAgICAgdGhpcy5wYXJlbnQgPSB7fTtcclxuICAgICAgICB0aGlzLmNsYXNzZXMgPSBbXTtcclxuXHJcbiAgICAgICAgaWYoX3Jvb3Qpe1xyXG4gICAgICAgICAgICBfcm9vdC5hcHBlbmRDaGlsZCh0aGlzLmRvbSk7XHJcbiAgICAgICAgICAgIHRoaXMuaXNSb290ID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMudXBkYXRlciA9IGZ1bmN0aW9uIChuYW1lKSB7XHJcbiAgICAgICAgICAgIGxldCB1cGRhdGVyID10aGlzLnVwZGF0ZXJzW25hbWVdO1xyXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYodXBkYXRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZXIuY2FsbChzZWxmLCBzZWxmLmRhdGEsIGFyZ3VtZW50cyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgc2V0VXBkYXRlcihuYW1lLHVwZGF0ZXIpe1xyXG4gICAgICAgIHRoaXMudXBkYXRlcnNbbmFtZV0gPSB1cGRhdGVyO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgYmluZChkYXRhKXtcclxuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgYXBwZW5kKF90YWcsX2lkKXtcclxuICAgICAgICBsZXQgdGFnID0gdGhpcy5yZWFkVmFsdWUoX3RhZyk7XHJcbiAgICAgICAgbGV0IGlkID0gdGhpcy5yZWFkVmFsdWUoX2lkKTtcclxuICAgICAgICBsZXQgZWxlbWVudCA9IG5ldyBDdWJZX0RPTSh0YWcsaWQpO1xyXG4gICAgICAgIHRoaXMuYXBwZW5kRWxlbWVudChlbGVtZW50KTtcclxuICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgIH1cclxuICAgIGFwcGVuZEVsZW1lbnQoQ3ViWV9ET00pe1xyXG4gICAgICAgIGxldCBlbGVtZW50ID0gdGhpcy5yZWFkVmFsdWUoQ3ViWV9ET00pO1xyXG4gICAgICAgIGVsZW1lbnQucGFyZW50ID0gdGhpcztcclxuXHJcbiAgICAgICAgaWYodGhpcy5pc0FjdGl2ZSB8fCB0aGlzLmlzUm9vdCkge1xyXG4gICAgICAgICAgICBlbGVtZW50LmFjdGl2YXRlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNoaWxkcmVuTGlzdC5wdXNoKGVsZW1lbnQpO1xyXG4gICAgICAgIHRoaXMuZG9tLmFwcGVuZENoaWxkKGVsZW1lbnQuZG9tKTtcclxuICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgIH1cclxuICAgIGF0dHIoa2V5LF92YWx1ZSl7XHJcbiAgICAgICAgbGV0IHZhbHVlO1xyXG4gICAgICAgIGlmKGtleSA9PT0nYWN0aXZhdGUnIHx8IGtleSA9PT0gJ2RlYWN0aXZhdGUnKXtcclxuICAgICAgICAgICAgdmFsdWUgPSBfdmFsdWU7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHZhbHVlID0gdGhpcy5yZWFkVmFsdWUoX3ZhbHVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuYXR0cmlidXRlW2tleV0gPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLmRvbS5zZXRBdHRyaWJ1dGUoa2V5LHZhbHVlKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIG9uKGV2ZW50TmFtZSxfdmFsdWUpe1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IF92YWx1ZTtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5vbltldmVudE5hbWVdID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5kb20uYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgdmFsdWUuY2FsbChzZWxmLGUsc2VsZi5kYXRhLClcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIHN0eWxlKF9rZXksX3ZhbHVlKXtcclxuICAgICAgICBsZXQga2V5ID0gdGhpcy5yZWFkVmFsdWUoX2tleSk7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gdGhpcy5yZWFkVmFsdWUoX3ZhbHVlKTtcclxuICAgICAgICB0aGlzLmRvbVN0eWxlW2tleV0gPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLmRvbS5zdHlsZVtrZXldID0gdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBjb250ZW50KF92YWx1ZSl7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gdGhpcy5yZWFkVmFsdWUoX3ZhbHVlKTtcclxuICAgICAgICB0aGlzLmlubmVySFRNTCA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuZG9tLmlubmVySFRNTCA9IHZhbHVlO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgYXBwZW5kQ2xhc3MoX2NsYXNzTmFtZSl7XHJcbiAgICAgICAgbGV0IGNsYXNzTmFtZSA9IHRoaXMucmVhZFZhbHVlKF9jbGFzc05hbWUpO1xyXG4gICAgICAgIGxldCBjbGFzc2VzID0gdGhpcy5jbGFzc2VzIHx8IFtdO1xyXG4gICAgICAgIGNsYXNzZXMucHVzaChjbGFzc05hbWUpO1xyXG4gICAgICAgIHRoaXMuZG9tLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcclxuICAgICAgICB0aGlzLmNsYXNzZXMgPSBjbGFzc2VzO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgc2VsZWN0KF9zZWxlY3Rvcil7XHJcbiAgICAgICAgbGV0IHNlbGVjdG9yID0gX3NlbGVjdG9yLmNoYXJBdCgwKTtcclxuICAgICAgICBsZXQgbmFtZSA9IF9zZWxlY3Rvci5zdWJzdHJpbmcoMSk7XHJcbiAgICAgICAgc3dpdGNoIChzZWxlY3Rvcil7XHJcbiAgICAgICAgICAgIGNhc2UgJyMnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0QnlJZChuYW1lKTtcclxuICAgICAgICAgICAgY2FzZSAnLic6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RCeUNsYXNzTmFtZShuYW1lKTtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNlbGVjdEJ5VGFnKF9zZWxlY3Rvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2VsZWN0QnlJZChpZCl7XHJcbiAgICAgICAgbGV0IGNoaWxkcmVuTGlzdCA9IHRoaXMuY2hpbGRyZW5MaXN0O1xyXG4gICAgICAgIGxldCB0YXJnZXQ7XHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaTxjaGlsZHJlbkxpc3QubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuTGlzdFtpXTtcclxuICAgICAgICAgICAgaWYoY2hpbGQuaWQgPT09IGlkKXtcclxuICAgICAgICAgICAgICAgIHRhcmdldCA9IGNoaWxkO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRhcmdldDtcclxuICAgIH1cclxuICAgIHNlbGVjdEJ5Q2xhc3NOYW1lKGNsYXNzTmFtZSl7XHJcbiAgICAgICAgbGV0IGNoaWxkcmVuTGlzdCA9IHRoaXMuY2hpbGRyZW5MaXN0O1xyXG4gICAgICAgIGxldCB0YXJnZXRMaXN0ID0gW107XHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaTxjaGlsZHJlbkxpc3QubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuTGlzdFtpXTtcclxuICAgICAgICAgICAgaWYoY2hpbGQuY2xhc3Nlcy5pbmRleE9mKGNsYXNzTmFtZSk+LTEpe1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0TGlzdC5wdXNoKGNoaWxkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGFyZ2V0TGlzdDtcclxuICAgIH1cclxuICAgIHNlbGVjdEJ5VGFnKF90YWcpe1xyXG4gICAgICAgIGxldCBjaGlsZHJlbkxpc3QgPSB0aGlzLmNoaWxkcmVuTGlzdDtcclxuICAgICAgICBsZXQgdGFyZ2V0TGlzdCA9IFtdO1xyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGk8Y2hpbGRyZW5MaXN0Lmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICBsZXQgY2hpbGQgPSBjaGlsZHJlbkxpc3RbaV07XHJcbiAgICAgICAgICAgIGlmKGNoaWxkLnRhZyA9PT0gX3RhZyl7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRMaXN0LnB1c2goY2hpbGQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0YXJnZXRMaXN0O1xyXG4gICAgfVxyXG4gICAgcmVtb3ZlKF9zZWxlY3Rvcil7XHJcbiAgICAgICAgaWYoX3NlbGVjdG9yPT11bmRlZmluZWQpe1xyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZVNlbGYoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgc2VsZWN0b3IgPSBfc2VsZWN0b3IuY2hhckF0KDApO1xyXG4gICAgICAgIGxldCBuYW1lID0gX3NlbGVjdG9yLnN1YnN0cmluZygxKTtcclxuICAgICAgICBsZXQgdGFyZ2V0O1xyXG4gICAgICAgIHN3aXRjaCAoc2VsZWN0b3Ipe1xyXG4gICAgICAgICAgICBjYXNlICcjJzpcclxuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlQnlJZChuYW1lKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICcuJzpcclxuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlQnlDbGFzc05hbWUobmFtZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlQnlUYWcoX3NlbGVjdG9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZW1vdmVCeUlkKGlkKXtcclxuICAgICAgICBsZXQgY2hpbGRyZW5MaXN0ID0gdGhpcy5jaGlsZHJlbkxpc3Q7XHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaTxjaGlsZHJlbkxpc3QubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuTGlzdFtpXTtcclxuICAgICAgICAgICAgaWYoY2hpbGQuaWQgPT09IGlkKXtcclxuICAgICAgICAgICAgICAgIGNoaWxkcmVuTGlzdC5zcGxpY2UoaSwxKTtcclxuICAgICAgICAgICAgICAgIGNoaWxkLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgaS0tO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZW1vdmVCeUNsYXNzTmFtZShjbGFzc05hbWUpe1xyXG4gICAgICAgIGxldCBjaGlsZHJlbkxpc3QgPSB0aGlzLmNoaWxkcmVuTGlzdDtcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpPGNoaWxkcmVuTGlzdC5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5MaXN0W2ldO1xyXG4gICAgICAgICAgICBpZihjaGlsZC5jbGFzc2VzLmluZGV4T2YoY2xhc3NOYW1lKT4tMSl7XHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlbkxpc3Quc3BsaWNlKGksMSk7XHJcbiAgICAgICAgICAgICAgICBjaGlsZC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgIGktLTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlbW92ZUJ5VGFnKF90YWcpe1xyXG4gICAgICAgIGxldCBjaGlsZHJlbkxpc3QgPSB0aGlzLmNoaWxkcmVuTGlzdDtcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpPGNoaWxkcmVuTGlzdC5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5MaXN0W2ldO1xyXG4gICAgICAgICAgICBpZihjaGlsZC50YWcgPT09IF90YWcpe1xyXG4gICAgICAgICAgICAgICAgY2hpbGRyZW5MaXN0LnNwbGljZShpLDEpO1xyXG4gICAgICAgICAgICAgICAgY2hpbGQucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICBpLS07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZW1vdmVTZWxmKCl7XHJcbiAgICAgICAgLyp0aGlzLmNoaWxkcmVuTGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICAgICAgICBjaGlsZC5yZW1vdmUoKTtcclxuICAgICAgICB9KTsqL1xyXG4gICAgICAgIHRoaXMuZGVhY3RpdmF0ZSgpO1xyXG4gICAgICAgIHRoaXMuZG9tLnJlbW92ZSgpO1xyXG4gICAgICAgIGlmKHRoaXMucGFyZW50KXtcclxuICAgICAgICAgICAgbGV0IGNoaWxkcmVuTGlzdCA9IHRoaXMucGFyZW50LmNoaWxkcmVuTGlzdDtcclxuICAgICAgICAgICAgZm9yKHZhciBpID0gMDsgaTxjaGlsZHJlbkxpc3QubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2hpbGQgPSBjaGlsZHJlbkxpc3RbaV07XHJcbiAgICAgICAgICAgICAgICBpZihjaGlsZCA9PT0gdGhpcyl7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW5MaXN0LnNwbGljZShpLDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qZm9yKHZhciBrZXkgaW4gdGhpcyl7XHJcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzW2tleV1cclxuICAgICAgICB9Ki9cclxuICAgIH1cclxuICAgIGFjdGl2YXRlKCl7XHJcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgIGlmKHRoaXMuYXR0cmlidXRlLmFjdGl2YXRlKXtcclxuICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGUuYWN0aXZhdGUuY2FsbCh0aGlzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY2hpbGRyZW5MaXN0LmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgICAgICAgIGNoaWxkLmFjdGl2YXRlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBkZWFjdGl2YXRlKCl7XHJcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICBpZih0aGlzLmF0dHJpYnV0ZS5kZWFjdGl2YXRlKXtcclxuICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGUuZGVhY3RpdmF0ZS5jYWxsKHRoaXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jaGlsZHJlbkxpc3QuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgICAgICAgICAgY2hpbGQuZGVhY3RpdmF0ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmVhZFZhbHVlKF92YWx1ZSl7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gX3ZhbHVlO1xyXG4gICAgICAgIGlmKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiKXtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLmNhbGwodGhpcyx0aGlzLmRhdGEpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiY29uc3QgTUFYX0NZQ0xFID0gMTAwO1xyXG5jbGFzcyBDdWJZX1JvdXRpbmV7XHJcbiAgICBjb25zdHJ1Y3RvcihfdGlja1NwZWVkLF9vcHRpb25zKXtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IF9vcHRpb25zIHx8IHt9O1xyXG4gICAgICAgIHRoaXMuaW5pdChvcHRpb25zKTtcclxuICAgICAgICB0aGlzLk1BWF9DWUNMRSA9IE1BWF9DWUNMRTtcclxuICAgIH1cclxuICAgIGluaXQob3B0aW9ucyl7XHJcbiAgICAgICAgd2luZG93LmNyID0gdGhpcztcclxuICAgICAgICB0aGlzLmN5Y2xlID0gMDtcclxuICAgICAgICB0aGlzLnJvdXRpbmVMaXN0ID0gW107XHJcbiAgICAgICAgdGhpcy5sb25nZXN0Um91dGluZVRpbWUgPTA7XHJcbiAgICAgICAgc2V0VGltZW91dCh0aGlzLnN0YXJ0LmJpbmQodGhpcyksMCk7XHJcbiAgICB9O1xyXG4gICAgc3RhcnQoKXtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5jeWNsZVN0YXJ0VGltZSA9IERhdGUubm93KCk7XHJcbiAgICAgICAgc2V0VGltZW91dChzZWxmLnJvdXRpbmUuYmluZCh0aGlzKSwwKTtcclxuICAgIH1cclxuICAgIGFwcGVuZChuYW1lLGdyb3VwKSB7XHJcbiAgICAgICAgbGV0IG5ld1JvdXRpbmUgPSBuZXcgUm91dGluZShuYW1lLCBncm91cCk7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIG5ld1JvdXRpbmUuaW5zZXJ0PSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmKG5ld1JvdXRpbmUuZnJlcSE9PTEpIHtcclxuICAgICAgICAgICAgICAgIG5ld1JvdXRpbmUuY291bnRlciArPSBzZWxmLnJvdXRpbmVMaXN0Lmxlbmd0aCArIDE7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNlbGYucm91dGluZUxpc3QucHVzaChuZXdSb3V0aW5lKTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ld1JvdXRpbmU7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBuZXdSb3V0aW5lLnJlbW92ZT0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBsZXQgaW5kZXggPSAgc2VsZi5yb3V0aW5lTGlzdC5pbmRleE9mKG5ld1JvdXRpbmUpO1xyXG4gICAgICAgICAgICBzZWxmLnJvdXRpbmVMaXN0LnNwbGljZShpbmRleCwxKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBuZXdSb3V0aW5lO1xyXG4gICAgfVxyXG4gICAgZ2V0Q3VycmVudEN5Y2xlKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3ljbGU7XHJcbiAgICB9XHJcbiAgICByb3V0aW5lKCl7XHJcbiAgICAgICAgbGV0IHJvdXRpbmVMaXN0ID0gdGhpcy5yb3V0aW5lTGlzdDtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgZm9yKHZhciBpPTA7aTxyb3V0aW5lTGlzdC5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgbGV0IHJvdXRpbmUgPSByb3V0aW5lTGlzdFtpXTtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGlmKHJvdXRpbmUuY2hlY2tMb2NrKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICByb3V0aW5lLmxvY2soKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzdGFydFRpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0aW5lLmFjdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmxhc3RSb3V0aW5lVGltZSA9IERhdGUubm93KCkgLSBzdGFydFRpbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHNlbGYubG9uZ2VzdFJvdXRpbmVUaW1lPHNlbGYubGFzdFJvdXRpbmVUaW1lKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYubG9uZ2VzdFJvdXRpbmVUaW1lPXNlbGYubGFzdFJvdXRpbmVUaW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHNlbGYubGFzdFJvdXRpbmVUaW1lPjIwMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ1JvdXRpbmU6JyArIHJvdXRpbmUubmFtZSArICcgdG9vayB0b28gbG9uZyB0byBydW4uIFsnK3NlbGYubGFzdFJvdXRpbmVUaW1lKydtc10nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRpbmUudW5sb2NrKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxyb3V0aW5lLmZyZXEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9Y2F0Y2ggKGUpe1xyXG4gICAgICAgICAgICAgICAgLy9ERUNJREUgSUYgUkVNT1ZFIFJPVVRJTkUgTEFURVI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jeWNsZSsrO1xyXG4gICAgICAgIGlmKHRoaXMuY3ljbGUgPT09IE1BWF9DWUNMRSl7XHJcbiAgICAgICAgICAgIHRoaXMuY3ljbGUgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RDeWNsZVRpbWUgPSBEYXRlLm5vdygpIC0gdGhpcy5jeWNsZVN0YXJ0VGltZTtcclxuICAgICAgICAgICAgdGhpcy5jeWNsZVBlclNlYyA9IE1hdGguZmxvb3IoMTAwMCAvIHRoaXMubGFzdEN5Y2xlVGltZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc3RhcnQoKTtcclxuICAgIH1cclxufVxyXG5jbGFzcyBSb3V0aW5le1xyXG4gICAgY29uc3RydWN0b3IobmFtZSxncm91cCl7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLmdyb3VwID0gZ3JvdXAgfHwgJ2NvbW1vbic7XHJcbiAgICAgICAgdGhpcy5mcmVxID0gMTtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5hY3Rpb24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHNlbGYuaXNSdW5uaW5nID0gdHJ1ZTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuY291bnRlcj0wO1xyXG4gICAgICAgIHRoaXMucmVwZWF0ID0gLTE7XHJcbiAgICB9XHJcbiAgICBsb2NrKCl7XHJcbiAgICAgICAgaWYodGhpcy5yZXBlYXQ+MCl0aGlzLnJlcGVhdC0tO1xyXG4gICAgICAgIHRoaXMuaXNSdW5uaW5nID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIHVubG9jaygpe1xyXG4gICAgICAgIGlmKHRoaXMucmVwZWF0PT09MCl7XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaXNSdW5uaW5nID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBhdHRyKGtleSx2YWx1ZSl7XHJcbiAgICAgICAgdGhpc1trZXldID0gdmFsdWU7XHJcbiAgICAgICAgaWYoa2V5PT09J2ZyZXEnKXtcclxuICAgICAgICAgICAgdGhpc1snY291bnRlciddID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgcmVzZXRDb3VudGVyKCl7XHJcbiAgICAgICAgdGhpcy5jb3VudGVyID0gdGhpcy5mcmVxO1xyXG4gICAgfVxyXG4gICAgY2hlY2tMb2NrKCl7XHJcbiAgICAgICAgaWYodGhpcy5jb3VudGVyPjApe1xyXG4gICAgICAgICAgICB0aGlzLmNvdW50ZXItLTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRoaXMuaXNSdW5uaW5nPT09dHJ1ZSB8fCB0aGlzLmNvdW50ZXI+MCl7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuY29uc3QgY3IgPSBuZXcgQ3ViWV9Sb3V0aW5lKCk7XHJcbndpbmRvdy5jciA9IGNyO1xyXG5leHBvcnQgZGVmYXVsdCBjcjsiLCIvKipcclxuICogQ3JlYXRlZCBieSBBbnhpbiBZYW5nIG9uIDYvMTIvMjAxOC5cclxuICovXHJcbmltcG9ydCBDdWJZX0RPTSBmcm9tICcuLi9GcmFtZXdvcmsvQ3ViWS9DdWJZX0RPTSc7XHJcbndpbmRvdy5tb2JpbGVjaGVjayA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIGNoZWNrID0gZmFsc2U7XHJcbiAgICAoZnVuY3Rpb24oYSl7aWYoLyhhbmRyb2lkfGJiXFxkK3xtZWVnbykuK21vYmlsZXxhdmFudGdvfGJhZGFcXC98YmxhY2tiZXJyeXxibGF6ZXJ8Y29tcGFsfGVsYWluZXxmZW5uZWN8aGlwdG9wfGllbW9iaWxlfGlwKGhvbmV8b2QpfGlyaXN8a2luZGxlfGxnZSB8bWFlbW98bWlkcHxtbXB8bW9iaWxlLitmaXJlZm94fG5ldGZyb250fG9wZXJhIG0ob2J8aW4paXxwYWxtKCBvcyk/fHBob25lfHAoaXhpfHJlKVxcL3xwbHVja2VyfHBvY2tldHxwc3B8c2VyaWVzKDR8NikwfHN5bWJpYW58dHJlb3x1cFxcLihicm93c2VyfGxpbmspfHZvZGFmb25lfHdhcHx3aW5kb3dzIGNlfHhkYXx4aWluby9pLnRlc3QoYSl8fC8xMjA3fDYzMTB8NjU5MHwzZ3NvfDR0aHB8NTBbMS02XWl8Nzcwc3w4MDJzfGEgd2F8YWJhY3xhYyhlcnxvb3xzXFwtKXxhaShrb3xybil8YWwoYXZ8Y2F8Y28pfGFtb2l8YW4oZXh8bnl8eXcpfGFwdHV8YXIoY2h8Z28pfGFzKHRlfHVzKXxhdHR3fGF1KGRpfFxcLW18ciB8cyApfGF2YW58YmUoY2t8bGx8bnEpfGJpKGxifHJkKXxibChhY3xheil8YnIoZXx2KXd8YnVtYnxid1xcLShufHUpfGM1NVxcL3xjYXBpfGNjd2F8Y2RtXFwtfGNlbGx8Y2h0bXxjbGRjfGNtZFxcLXxjbyhtcHxuZCl8Y3Jhd3xkYShpdHxsbHxuZyl8ZGJ0ZXxkY1xcLXN8ZGV2aXxkaWNhfGRtb2J8ZG8oY3xwKW98ZHMoMTJ8XFwtZCl8ZWwoNDl8YWkpfGVtKGwyfHVsKXxlcihpY3xrMCl8ZXNsOHxleihbNC03XTB8b3N8d2F8emUpfGZldGN8Zmx5KFxcLXxfKXxnMSB1fGc1NjB8Z2VuZXxnZlxcLTV8Z1xcLW1vfGdvKFxcLnd8b2QpfGdyKGFkfHVuKXxoYWllfGhjaXR8aGRcXC0obXxwfHQpfGhlaVxcLXxoaShwdHx0YSl8aHAoIGl8aXApfGhzXFwtY3xodChjKFxcLXwgfF98YXxnfHB8c3x0KXx0cCl8aHUoYXd8dGMpfGlcXC0oMjB8Z298bWEpfGkyMzB8aWFjKCB8XFwtfFxcLyl8aWJyb3xpZGVhfGlnMDF8aWtvbXxpbTFrfGlubm98aXBhcXxpcmlzfGphKHR8dilhfGpicm98amVtdXxqaWdzfGtkZGl8a2VqaXxrZ3QoIHxcXC8pfGtsb258a3B0IHxrd2NcXC18a3lvKGN8ayl8bGUobm98eGkpfGxnKCBnfFxcLyhrfGx8dSl8NTB8NTR8XFwtW2Etd10pfGxpYnd8bHlueHxtMVxcLXd8bTNnYXxtNTBcXC98bWEodGV8dWl8eG8pfG1jKDAxfDIxfGNhKXxtXFwtY3J8bWUocmN8cmkpfG1pKG84fG9hfHRzKXxtbWVmfG1vKDAxfDAyfGJpfGRlfGRvfHQoXFwtfCB8b3x2KXx6eil8bXQoNTB8cDF8diApfG13YnB8bXl3YXxuMTBbMC0yXXxuMjBbMi0zXXxuMzAoMHwyKXxuNTAoMHwyfDUpfG43KDAoMHwxKXwxMCl8bmUoKGN8bSlcXC18b258dGZ8d2Z8d2d8d3QpfG5vayg2fGkpfG56cGh8bzJpbXxvcCh0aXx3dil8b3Jhbnxvd2cxfHA4MDB8cGFuKGF8ZHx0KXxwZHhnfHBnKDEzfFxcLShbMS04XXxjKSl8cGhpbHxwaXJlfHBsKGF5fHVjKXxwblxcLTJ8cG8oY2t8cnR8c2UpfHByb3h8cHNpb3xwdFxcLWd8cWFcXC1hfHFjKDA3fDEyfDIxfDMyfDYwfFxcLVsyLTddfGlcXC0pfHF0ZWt8cjM4MHxyNjAwfHJha3N8cmltOXxybyh2ZXx6byl8czU1XFwvfHNhKGdlfG1hfG1tfG1zfG55fHZhKXxzYygwMXxoXFwtfG9vfHBcXC0pfHNka1xcL3xzZShjKFxcLXwwfDEpfDQ3fG1jfG5kfHJpKXxzZ2hcXC18c2hhcnxzaWUoXFwtfG0pfHNrXFwtMHxzbCg0NXxpZCl8c20oYWx8YXJ8YjN8aXR8dDUpfHNvKGZ0fG55KXxzcCgwMXxoXFwtfHZcXC18diApfHN5KDAxfG1iKXx0MigxOHw1MCl8dDYoMDB8MTB8MTgpfHRhKGd0fGxrKXx0Y2xcXC18dGRnXFwtfHRlbChpfG0pfHRpbVxcLXx0XFwtbW98dG8ocGx8c2gpfHRzKDcwfG1cXC18bTN8bTUpfHR4XFwtOXx1cChcXC5ifGcxfHNpKXx1dHN0fHY0MDB8djc1MHx2ZXJpfHZpKHJnfHRlKXx2ayg0MHw1WzAtM118XFwtdil8dm00MHx2b2RhfHZ1bGN8dngoNTJ8NTN8NjB8NjF8NzB8ODB8ODF8ODN8ODV8OTgpfHczYyhcXC18ICl8d2ViY3x3aGl0fHdpKGcgfG5jfG53KXx3bWxifHdvbnV8eDcwMHx5YXNcXC18eW91cnx6ZXRvfHp0ZVxcLS9pLnRlc3QoYS5zdWJzdHIoMCw0KSkpIGNoZWNrID0gdHJ1ZTt9KShuYXZpZ2F0b3IudXNlckFnZW50fHxuYXZpZ2F0b3IudmVuZG9yfHx3aW5kb3cub3BlcmEpO1xyXG4gICAgcmV0dXJuIGNoZWNrO1xyXG59O1xyXG52YXIgYmFja2dyb3VuZCA9IG5ldyBDdWJZX0RPTSgnZGl2JywnYmFja2dyb3VuZCcpO1xyXG5iYWNrZ3JvdW5kLnN0eWxlKCd3aWR0aCcsJzEwMHZ3JylcclxuICAgIC5zdHlsZSgnaGVpZ2h0JywnMTAwdmgnKVxyXG4gICAgLnN0eWxlKCdwb3NpdGlvbicsJ2ZpeGVkJylcclxuICAgIC5zdHlsZSgnYmFja2dyb3VuZCcsJ3RyYW5zcGFyZW50JylcclxuICAgIC5zdHlsZSgndG9wJywwKVxyXG4gICAgLnN0eWxlKCdsZWZ0JywwKVxyXG4gICAgLm9uKCdtb3VzZW1vdmUnLGZ1bmN0aW9uIChlLGQpIHtcclxuICAgICAgICBsZXQgeCA9IGUuY2xpZW50WDtcclxuICAgICAgICBsZXQgeSA9IGUuY2xpZW50WTtcclxuICAgICAgICBsZXQgb3JpZ2luID0ge1xyXG4gICAgICAgICAgICB4OiB3aW5kb3cuaW5uZXJXaWR0aC8yLFxyXG4gICAgICAgICAgICB5OiB3aW5kb3cuaW5uZXJIZWlnaHQvMlxyXG4gICAgICAgIH07XHJcbiAgICAgICAgYmFja2dyb3VuZC5keCA9IC0oeCAtIG9yaWdpbi54KS8xMDtcclxuICAgICAgICBiYWNrZ3JvdW5kLmR5ID0gLSh5IC0gb3JpZ2luLnkpLzEwO1xyXG5cclxuICAgIH0pOztcclxudmFyIGNpcmNsZU51bSA9IG1vYmlsZWNoZWNrKCk/NTA6MTI4O1xyXG52YXIgY2lyY2xlTGlzdCA9IFtdO1xyXG5cclxuZm9yKHZhciBpPTA7aTxjaXJjbGVOdW07aSsrKXtcclxuICAgIGxldCB4ID0gTWF0aC5yYW5kb20oKSp3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgIGxldCB5ID0gTWF0aC5yYW5kb20oKSp3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICBsZXQgY2lyY2xlID0gbmV3IEN1YllfRE9NKCdkaXYnLCdiYWNrZ3JvdW5kQ2lyY2xlXycraSlcclxuICAgICAgICAuc3R5bGUoJ3Bvc2l0aW9uJywnYWJzb2x1dGUnKVxyXG4gICAgICAgIC5zdHlsZSgnd2lkdGgnLCcyMHB4JylcclxuICAgICAgICAuc3R5bGUoJ2hlaWdodCcsJzIwcHgnKVxyXG4gICAgICAgIC5zdHlsZSgnYm9yZGVyLXJhZGl1cycsJzRweCcpXHJcbiAgICAgICAgLnN0eWxlKCdiYWNrZ3JvdW5kJywnI2VjY2M2OCcpXHJcbiAgICAgICAgLnN0eWxlKCd0cmFuc2l0aW9uJywnMC4zcyBsaW5lYXInKVxyXG4gICAgICAgIC5zdHlsZSgnYm94LXNoYWRvdycsJzAgMCAxMHB4ICNlY2NjNjgnKVxyXG4gICAgICAgIC5zdHlsZSgnb3BhY2l0eScsICcwJylcclxuICAgICAgICAuc3R5bGUoJ3RyYW5zZm9ybScsJ3RyYW5zbGF0ZSgnK3grJ3B4LCcreSsncHgpJylcclxuICAgICAgICAuYXR0cignYWN0aXZhdGUnLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgICAgICAgICB0aGlzLmR4ID0gTWF0aC5yYW5kb20oKS0wLjU7XHJcbiAgICAgICAgICAgIHRoaXMuZHkgPSBNYXRoLnJhbmRvbSgpLTAuNTtcclxuICAgICAgICAgICAgdGhpcy5kcyA9IDAuMDE7XHJcbiAgICAgICAgICAgIHRoaXMuc2NhbGUgPSAgTWF0aC5yYW5kb20oKTtcclxuICAgICAgICAgICAgdGhpcy5jb3VudGVyID0gMTA7XHJcbiAgICAgICAgICAgIHRoaXMuY2lyY2xlQW4gPSBjci5hcHBlbmQoJ2hvbWVfY2lyY2xlX2FuaW1hdGlvbl8nK2kpXHJcbiAgICAgICAgICAgICAgICAuYXR0cignZnJlcScsNTApXHJcbiAgICAgICAgICAgICAgICAuYXR0cignYWN0aW9uJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNjYWxlID0gc2VsZi5zY2FsZTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc2VlZCA9IE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi54Kz1zZWxmLmR4O1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYueSs9c2VsZi5keTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5zdHlsZSgndHJhbnNmb3JtJywndHJhbnNsYXRlKCcrKHNlbGYueCArIChiYWNrZ3JvdW5kLmR4fHwwKSpzY2FsZSkrJ3B4LCcrKHNlbGYueSArIChiYWNrZ3JvdW5kLmR5fHwwKSpzY2FsZSkrJ3B4KSBzY2FsZSgnK3NjYWxlKycpJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnN0eWxlKCdvcGFjaXR5Jywgc2NhbGUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zdHlsZSgnei1pbmRleCcsIHNjYWxlPj0wLjg/MjowKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc3R5bGUoJ2JveC1zaGFkb3cnLCcwIDAgJysoc2VlZCoxMCsxMCkrJ3B4ICNlY2NjNjgnKTtcclxuICAgICAgICAgICAgICAgICAgICBpZihzZWxmLng+d2luZG93LmlubmVyV2lkdGgpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmR4ID0gLShzZWVkKjAuNSswLjEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNlIGlmKHNlbGYueDwwKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5keCA9IHNlZWQqMC41KzAuMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoc2VsZi55PndpbmRvdy5pbm5lckhlaWdodCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZHkgPSAtKHNlZWQqMC41KzAuMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfWVsc2UgaWYoc2VsZi55PDApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmR5ID0gc2VlZCowLjUrMC4xO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNvdW50ZXItLTtcclxuICAgICAgICAgICAgICAgICAgICBpZihzZWxmLmNvdW50ZXI8PTApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvdW50ZXI9MTA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc2NhbGUrPWNpcmNsZS5kcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoc2VsZi5zY2FsZT49MSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmRzPS0wLjAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHNlbGYuc2NhbGU8PTApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5kcz0wLjAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSkuaW5zZXJ0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuY2lyY2xlQW4yID0gY3IuYXBwZW5kKCdob21lX2NpcmNsZV9hbmltYXRpb25fMl8nK2kpXHJcbiAgICAgICAgICAgICAgICAuYXR0cignZnJlcScsMzAwKVxyXG4gICAgICAgICAgICAgICAgLmF0dHIoJ2FjdGlvbicsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzZWVkID0gTWF0aC5yYW5kb20oKTtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLnN0eWxlKCdib3gtc2hhZG93JywnMCAwICcrKHNlZWQqNDArMTApKydweCAjZWNjYzY4Jyk7XHJcbiAgICAgICAgICAgICAgICB9KS5pbnNlcnQoKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5hdHRyKCdkZWFjdGl2YXRlJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2lyY2xlQW4ucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY2lyY2xlQW4yLnJlbW92ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgYmFja2dyb3VuZC5hcHBlbmRFbGVtZW50KGNpcmNsZSk7XHJcblxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBiYWNrZ3JvdW5kOyIsImltcG9ydCBDdWJZX0RPTSBmcm9tICcuLi9GcmFtZXdvcmsvQ3ViWS9DdWJZX0RPTSc7XHJcblxyXG52YXIgaGVhZGVyID0gbmV3IEN1YllfRE9NKCdkaXYnLCAnaGVhZGVyJylcclxuICAgIC5hdHRyKCdvbnNlbGVjdHN0YXJ0JywgJ3JldHVybiBmYWxzZTsnKVxyXG4gICAgLnN0eWxlKCdkaXNwbGF5JywgJ2ZsZXgnKVxyXG4gICAgLnN0eWxlKCdwb3NpdGlvbicsICdhYnNvbHV0ZScpXHJcbiAgICAuc3R5bGUoJ29wYWNpdHknLCAnMC41JylcclxuICAgIC5zdHlsZSgndG9wJywgJzFlbScpXHJcbiAgICAuc3R5bGUoJ2hlaWdodCcsICczZW0nKVxyXG4gICAgLnN0eWxlKCd6LWluZGV4JywgJzEwJylcclxuICAgIC5zdHlsZSgndHJhbnNpdGlvbicsICcwLjNzJylcclxuICAgIC5vbignbW91c2VvdmVyJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuc3R5bGUoJ29wYWNpdHknLCAnMScpXHJcbiAgICB9KVxyXG4gICAgLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuc3R5bGUoJ29wYWNpdHknLCAnMC41JylcclxuICAgIH0pO1xyXG5cclxudmFyIGhlYWRlckl0ZW1zID0gWydNZW51JywgJ1BsYXlncm91bmQnLCAnQWJvdXQgTWUnXTtcclxudmFyIGluZGV4ID0gMDtcclxuaGVhZGVySXRlbXMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgaGVhZGVySXRlbXNbaW5kZXgrK10gPSBoZWFkZXIuYXBwZW5kKCdkaXYnLCAnaGVhZGVyXycgKyBpdGVtKVxyXG4gICAgICAgIC5jb250ZW50KGl0ZW0pXHJcbiAgICAgICAgLmFwcGVuZENsYXNzKCd4eCcpXHJcbiAgICAgICAgLnN0eWxlKCdjb2xvcicsICd3aGl0ZScpXHJcbiAgICAgICAgLnN0eWxlKCdwYWRkaW5nJywgJzFlbSAwLjVlbScpXHJcbiAgICAgICAgLnN0eWxlKCdjdXJzb3InLCAncG9pbnRlcicpXHJcbiAgICAgICAgLnN0eWxlKCd0ZXh0LXNoYWRvdycsICcwIDAgMTBweCAjZWNjYzY4JylcclxuICAgICAgICAuc3R5bGUoJ3RyYW5zaXRpb24nLCAnMC4zcycpXHJcbiAgICAgICAgLm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3R5bGUoJ3RleHQtc2hhZG93JywgJzAgMCAxMHB4ICNlY2NjNjgnKVxyXG4gICAgICAgICAgICAgICAgLnN0eWxlKCdjb2xvcicsICcjZWNjYzY4Jyk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3R5bGUoJ3RleHQtc2hhZG93JywgJzAgMCAyMHB4ICNlY2NjNjgnKVxyXG4gICAgICAgICAgICAgICAgLnN0eWxlKCdjb2xvcicsICd3aGl0ZScpO1xyXG4gICAgICAgIH0pO1xyXG59KTtcclxudmFyIGhlYWRlck1lbnVCdXR0b24gPSBoZWFkZXJJdGVtc1swXTtcclxuaGVhZGVyTWVudUJ1dHRvbi5zdHlsZSgncG9zaXRpb24nLCAncmVsYXRpdmUnKTtcclxudmFyIG1lbnVDb250YWluZXIgPSBoZWFkZXJNZW51QnV0dG9uLmFwcGVuZCgnZGl2JywgJ21lbnVDb250YWluZXInKVxyXG4gICAgLnN0eWxlKCdwb3NpdGlvbicsICdhYnNvbHV0ZScpXHJcbiAgICAuc3R5bGUoJ3dpZHRoJywgJzI1NnB4JylcclxuICAgIC5zdHlsZSgnaGVpZ2h0JywgJzBweCcpXHJcbiAgICAuc3R5bGUoJ2JhY2tncm91bmQnLCAnJylcclxuICAgIC5zdHlsZSgndG9wJywgJzEyNSUnKVxyXG4gICAgLnN0eWxlKCdsZWZ0JywgJzAnKVxyXG4gICAgLnN0eWxlKCdvdmVyZmxvdycsICdoaWRkZW4nKVxyXG4gICAgLnN0eWxlKCd0cmFuc2l0aW9uJywgJzAuM3MnKVxyXG4gICAgLnNldFVwZGF0ZXIoJ3RvZ2dsZU1lbnUnLCBmdW5jdGlvbiAoZCkge1xyXG4gICAgICAgIGxldCBoYXNPcGVuID0gdGhpcy5oYXNPcGVuIHx8IGZhbHNlO1xyXG4gICAgICAgIGlmIChoYXNPcGVuKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3R5bGUoJ2hlaWdodCcsICcwJylcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnN0eWxlKCdoZWlnaHQnLCAnMzN2aCcpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaGFzT3BlbiA9ICFoYXNPcGVuO1xyXG4gICAgfSlcclxuICAgIC5zZXRVcGRhdGVyKCdjbG9zZU1lbnUnLCBmdW5jdGlvbiAoZCkge1xyXG4gICAgICAgIHRoaXMuc3R5bGUoJ2hlaWdodCcsICcwJylcclxuICAgICAgICAgICAgLnN0eWxlKCdib3gtc2hhZG93JywgJzBweCAwcHggNXB4IHJnYmEoMTEyLCAxNjEsIDI1NSwwKScpXHJcbiAgICAgICAgICAgIC5zdHlsZSgnYm9yZGVyJywgJzFweCBzb2xpZCByZ2JhKDExMiwgMTYxLCAyNTUsIDApJyk7XHJcbiAgICAgICAgdGhpcy5oYXNPcGVuID0gZmFsc2U7XHJcbiAgICB9KTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBtZW51Q29udGFpbmVyLnVwZGF0ZXIoJ2Nsb3NlTWVudScpKCk7XHJcbn0pO1xyXG5cclxuaGVhZGVyTWVudUJ1dHRvbi5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIG1lbnVDb250YWluZXIudXBkYXRlcigndG9nZ2xlTWVudScpKCk7XHJcbn0pO1xyXG5cclxudmFyIG1lbnVDb250ZW50cyA9IG1lbnVDb250YWluZXIuYXBwZW5kKCd1bCcpXHJcbiAgICAuc3R5bGUoJ3BhZGRpbmctbGVmdCcsICcyZW0nKVxyXG4gICAgLnN0eWxlKCdtYXJnaW4nLCAnMCcpO1xyXG5cclxudmFyIG1lbnVJdGVtcyA9IFsnSG9tZScsICdNYXkgQ29taW5nIHNvb24nLCAnUHJvYmFibHkgQ29taW5nIHNvb24nXTtcclxuaW5kZXggPSAwO1xyXG5cclxubWVudUl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgIG1lbnVJdGVtc1tpbmRleCsrXSA9IG1lbnVDb250ZW50cy5hcHBlbmQoJ2xpJywgJ21lbnVfJyArIGl0ZW0pXHJcbiAgICAgICAgLmNvbnRlbnQoaXRlbSlcclxuICAgICAgICAuc3R5bGUoJ2NvbG9yJywgJ3doaXRlJylcclxuICAgICAgICAuc3R5bGUoJ3BhZGRpbmcnLCAnMWVtIDAuNWVtJylcclxuICAgICAgICAuc3R5bGUoJ2N1cnNvcicsICdwb2ludGVyJylcclxuICAgICAgICAuc3R5bGUoJ3RleHQtc2hhZG93JywgJzAgMCAxMHB4ICNlY2NjNjgnKVxyXG4gICAgICAgIC5zdHlsZSgndHJhbnNpdGlvbicsICcwLjNzJylcclxuICAgICAgICAub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjYy5zdG9yZVZhbHVlKCdjdXJyZW50VmlldycsIGl0ZW0pO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3R5bGUoJ3RleHQtc2hhZG93JywgJzAgMCAxMHB4ICNlY2NjNjgnKVxyXG4gICAgICAgICAgICAgICAgLnN0eWxlKCdjb2xvcicsICcjZWNjYzY4Jyk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3R5bGUoJ3RleHQtc2hhZG93JywgJzAgMCAyMHB4ICNlY2NjNjgnKVxyXG4gICAgICAgICAgICAgICAgLnN0eWxlKCdjb2xvcicsICd3aGl0ZScpO1xyXG4gICAgICAgIH0pO1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhlYWRlcjsiLCJpbXBvcnQgQ3ViWV9ET00gZnJvbSAnLi9GcmFtZXdvcmsvQ3ViWS9DdWJZX0RPTSc7XHJcblxyXG5cclxudmFyIG1haW5Db250ZW50ID0gbmV3IEN1YllfRE9NKCdkaXYnLCdob21lQ29udGVudCcpO1xyXG5tYWluQ29udGVudC5zdHlsZSgnd2lkdGgnLCcxMDB2dycpXHJcbiAgICAuc3R5bGUoJ2hlaWdodCcsJzEwMHZoJylcclxuICAgIC5zdHlsZSgnYmFja2dyb3VuZCcsJyMyMjJmM2UnKVxyXG4gICAgLnN0eWxlKCdwb3NpdGlvbicsJ3JlbGF0aXZlJylcclxuICAgIC5zdHlsZSgndHJhbnNpdGlvbicsICc1cycpXHJcbiAgICAuc3R5bGUoJ292ZXJmbG93JywnaGlkZGVuJylcclxuICAgIC5hcHBlbmRDbGFzcygnbWFpbkNvbnRlbnQnKTtcclxudmFyIGJhY2tncm91bmRBbiA9IGNyLmFwcGVuZCgnYmFja2dyb3VuZEFuJylcclxuICAgIC5hdHRyKCdmcmVxJywzMDApXHJcbiAgICAuYXR0cigncmVwZWF0JywxKVxyXG4gICAgLmF0dHIoJ2FjdGlvbicsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIG1haW5Db250ZW50LnN0eWxlKCdiYWNrZ3JvdW5kJywnYmxhY2snKVxyXG4gICAgfSkuaW5zZXJ0KCk7XHJcblxyXG52YXIgaGVhZExpbmUgPSBtYWluQ29udGVudC5hcHBlbmQoJ2gxJywnaGVhZExpbmUnKVxyXG4gICAgLmNvbnRlbnQoJ0ZST05UIEVORCBFTkdJTkVFUicpXHJcbiAgICAuc3R5bGUoJ3Bvc2l0aW9uJywnZml4ZWQnKVxyXG4gICAgLnN0eWxlKCdjb2xvcicsJ3doaXRlJylcclxuICAgIC5zdHlsZSgnd2lkdGgnLCcxMDAlJylcclxuICAgIC5zdHlsZSgnaGVpZ2h0JywgJzYwcHgnKVxyXG4gICAgLnN0eWxlKCd0ZXh0LWFsaWduJywnY2VudGVyJylcclxuICAgIC5zdHlsZSgnbGVmdCcsJzAnKVxyXG4gICAgLnN0eWxlKCdyaWdodCcsJzAnKVxyXG4gICAgLnN0eWxlKCdib3R0b20nLCczMyUnKVxyXG4gICAgLnN0eWxlKCdtYXJnaW4nLCdhdXRvJylcclxuICAgIC5zdHlsZSgnZm9udC1zaXplJywnNjRweCcpXHJcbiAgICAuc3R5bGUoJ3RyYW5zaXRpb24nLCAnMXMnKVxyXG4gICAgLnN0eWxlKCd0ZXh0LXNoYWRvdycsJzAgMCAxMHB4ICM3MGExZmYnKVxyXG4gICAgLnN0eWxlKCd6LWluZGV4JywxKVxyXG4gICAgLm9uKCdtb3VzZW92ZXInLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnN0eWxlKCd0ZXh0LXNoYWRvdycsJzAgMCAzMHB4ICNlY2NjNjgnKVxyXG4gICAgfSlcclxuICAgIC5vbignbW91c2VsZWF2ZScsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuc3R5bGUoJ3RleHQtc2hhZG93JywnMCAwIDEwcHggIzcwYTFmZicpXHJcbiAgICB9KTtcclxudmFyIGhvbWVIZWFkTGluZUFuaW1hdGlvbiA9IGNyLmFwcGVuZCgnaG9tZV9oZWFkTGluZV9hbmltYXRpb24nKVxyXG4gICAgLmF0dHIoJ2ZyZXEnLDMwMClcclxuICAgIC5hdHRyKCdhY3Rpb24nLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBsZXQgb2RkID0gTWF0aC5yYW5kb20oKSoxMDA7XHJcbiAgICAgICAgaWYob2RkPjUwKXtcclxuICAgICAgICAgICAgaGVhZExpbmUuc3R5bGUoJ3RleHQtc2hhZG93JywnMCAwIDMwcHggI2VjY2M2OCcpXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGhlYWRMaW5lLnN0eWxlKCd0ZXh0LXNoYWRvdycsJzAgMCAxMHB4ICM3MGExZmYnKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICAuaW5zZXJ0KCk7XHJcblxyXG52YXIgc3ViSGVhZExpbmUgPSBtYWluQ29udGVudC5hcHBlbmQoJ2gxJywnc3ViSGVhZExpbmUnKVxyXG4gICAgLmNvbnRlbnQoJy0gd2hvIG1ha2VzIGRhdGEgYWxpdmUgLScpXHJcbiAgICAuc3R5bGUoJ3Bvc2l0aW9uJywnZml4ZWQnKVxyXG4gICAgLnN0eWxlKCdjb2xvcicsJyNlY2NjNjgnKVxyXG4gICAgLnN0eWxlKCd3aWR0aCcsJzEwMCUnKVxyXG4gICAgLnN0eWxlKCdoZWlnaHQnLCAnMzBweCcpXHJcbiAgICAuc3R5bGUoJ3RleHQtYWxpZ24nLCdjZW50ZXInKVxyXG4gICAgLnN0eWxlKCdsZWZ0JywnMCcpXHJcbiAgICAuc3R5bGUoJ3JpZ2h0JywnMCcpXHJcbiAgICAuc3R5bGUoJ2JvdHRvbScsJzMwJScpXHJcbiAgICAuc3R5bGUoJ21hcmdpbicsJ2F1dG8nKVxyXG4gICAgLnN0eWxlKCdmb250LXNpemUnLCczMnB4JylcclxuICAgIC5zdHlsZSgndHJhbnNpdGlvbicsICcxcycpXHJcbiAgICAuc3R5bGUoJ3RleHQtc2hhZG93JywnMCAwIDEwcHggI2VjY2M2OCcpXHJcbiAgICAuc3R5bGUoJ3otaW5kZXgnLDEpO1xyXG52YXIgaW5mb0J1dHRvbkhhbG8gPSBtYWluQ29udGVudC5hcHBlbmQoJ3NwYW4nLCdpbmZvQnV0dG9uSGFsbycpXHJcbiAgICAuc3R5bGUoJ3Bvc2l0aW9uJywnZml4ZWQnKVxyXG4gICAgLnN0eWxlKCdjb2xvcicsJyNlY2NjNjgnKVxyXG4gICAgLnN0eWxlKCd3aWR0aCcsJzMycHgnKVxyXG4gICAgLnN0eWxlKCdoZWlnaHQnLCAnMzJweCcpXHJcbiAgICAuc3R5bGUoJ292ZXJmbG93JywnaGlkZGVuJylcclxuICAgIC5zdHlsZSgnYm9yZGVyLXJhZGl1cycsJzRweCcpXHJcbiAgICAuc3R5bGUoJ3RleHQtYWxpZ24nLCdjZW50ZXInKVxyXG4gICAgLnN0eWxlKCdsZWZ0JywnMCcpXHJcbiAgICAuc3R5bGUoJ3JpZ2h0JywnMCcpXHJcbiAgICAuc3R5bGUoJ2JvdHRvbScsJzE4JScpXHJcbiAgICAuc3R5bGUoJ21hcmdpbicsJ2F1dG8nKVxyXG4gICAgLnN0eWxlKCdmb250LXNpemUnLCcyNHB4JylcclxuICAgIC5zdHlsZSgndHJhbnNpdGlvbicsICcwLjVzJylcclxuICAgIC5zdHlsZSgnYm9yZGVyJywnMXB4IHNvbGlkICNlY2NjNjgnKVxyXG4gICAgLnN0eWxlKCdib3gtc2hhZG93JywnMCAwIDMwcHggI2VjY2M2OCcpXHJcbiAgICAuc3R5bGUoJ2N1cnNvcicsJ3BvaW50ZXInKVxyXG4gICAgLnN0eWxlKCd6LWluZGV4JywxKTtcclxudmFyIGluZm9CdXR0b24gPSBtYWluQ29udGVudC5hcHBlbmQoJ3NwYW4nLCdpbmZvQnV0dG9uJylcclxuICAgIC5jb250ZW50KCdXYW5uYSBrbm93IG1vcmU/JylcclxuICAgIC5zdHlsZSgncG9zaXRpb24nLCdmaXhlZCcpXHJcbiAgICAuc3R5bGUoJ2NvbG9yJywnI2VjY2M2OCcpXHJcbiAgICAuc3R5bGUoJ3dpZHRoJywnMzJweCcpXHJcbiAgICAuc3R5bGUoJ2hlaWdodCcsICczMnB4JylcclxuICAgIC5zdHlsZSgnb3ZlcmZsb3cnLCdoaWRkZW4nKVxyXG4gICAgLnN0eWxlKCdib3JkZXInLCcxcHggc29saWQgdHJhbnNwYXJlbnQnKVxyXG4gICAgLnN0eWxlKCdib3JkZXItcmFkaXVzJywnNHB4JylcclxuICAgIC5zdHlsZSgndGV4dC1hbGlnbicsJ2NlbnRlcicpXHJcbiAgICAuc3R5bGUoJ2xlZnQnLCcwJylcclxuICAgIC5zdHlsZSgncmlnaHQnLCcwJylcclxuICAgIC5zdHlsZSgnYm90dG9tJywnMTglJylcclxuICAgIC5zdHlsZSgnbWFyZ2luJywnYXV0bycpXHJcbiAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsJzI0cHgnKVxyXG4gICAgLnN0eWxlKCd0cmFuc2l0aW9uJywgJzAuNXMnKVxyXG4gICAgLnN0eWxlKCdiYWNrZ3JvdW5kJywgJyNlY2NjNjgnKVxyXG4gICAgLnN0eWxlKCd0ZXh0LXNoYWRvdycsJzAgMCA1cHggI2VjY2M2OCcpXHJcbiAgICAuc3R5bGUoJ2JveC1zaGFkb3cnLCcwIDAgMTB4ICNlY2NjNjgnKVxyXG4gICAgLnN0eWxlKCdjdXJzb3InLCdwb2ludGVyJylcclxuICAgIC5zdHlsZSgnei1pbmRleCcsMSlcclxuICAgIC5vbignY2xpY2snLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjYy5zdG9yZVZhbHVlKCdjdXJyZW50VmlldycsJ2Fib3V0Jyk7XHJcbiAgICB9KVxyXG4gICAgLm9uKCdtb3VzZW92ZXInLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnN0eWxlKCdiYWNrZ3JvdW5kJywncmdiYSgwLCAwLCAwLCAwLjUpJylcclxuICAgICAgICAgICAgLnN0eWxlKCd3aWR0aCcsJzEwMCUnKVxyXG4gICAgICAgICAgICAuc3R5bGUoJ2JveC1zaGFkb3cnLCcnKVxyXG4gICAgICAgIGluZm9CdXR0b24ub3ZlcmVkID0gdHJ1ZTtcclxuICAgIH0pXHJcbiAgICAub24oJ21vdXNlbGVhdmUnLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnN0eWxlKCdiYWNrZ3JvdW5kJywgJyNlY2NjNjgnKVxyXG4gICAgICAgICAgICAuc3R5bGUoJ3dpZHRoJywnMzJweCcpXHJcbiAgICAgICAgICAgIC5zdHlsZSgnYm94LXNoYWRvdycsJzAgMCAxMHB4ICNlY2NjNjgnKVxyXG4gICAgICAgIGluZm9CdXR0b24ub3ZlcmVkID0gZmFsc2U7XHJcbiAgICB9KTtcclxudmFyIGluZm9CdXR0b25IYWxvQW4gPSBjci5hcHBlbmQoJ2luZm9CdXR0b25IYWxvQW4nKVxyXG4gICAgLmF0dHIoJ2ZyZXEnLDYwMClcclxuICAgIC5hdHRyKCdhY3Rpb24nLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZihpbmZvQnV0dG9uLm92ZXJlZCA9PT0gdHJ1ZSl7XHJcbiAgICAgICAgICAgIGluZm9CdXR0b25IYWxvLnN0YXRlID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3dpdGNoKGluZm9CdXR0b25IYWxvLnN0YXRlKXtcclxuICAgICAgICAgICAgY2FzZSB1bmRlZmluZWQ6XHJcbiAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgIGluZm9CdXR0b25IYWxvLnN0YXRlID0gMTtcclxuICAgICAgICAgICAgICAgIGluZm9CdXR0b25IYWxvLnN0eWxlKCd3aWR0aCcsICc2NHB4JylcclxuICAgICAgICAgICAgICAgICAgICAuc3R5bGUoJ2JvdHRvbScsJ2NhbGMoMTglIC0gMTVweCknKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdHlsZSgnaGVpZ2h0JywgJzY0cHgnKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdHlsZSgnb3BhY2l0eScsIDApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIGluZm9CdXR0b25IYWxvLnN0YXRlID0gMjtcclxuICAgICAgICAgICAgICAgIGluZm9CdXR0b25IYWxvLnN0eWxlKCd3aWR0aCcsICczMnB4JylcclxuICAgICAgICAgICAgICAgICAgICAuc3R5bGUoJ2JvdHRvbScsJzE4JScpXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0eWxlKCdoZWlnaHQnLCAnMzJweCcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIGluZm9CdXR0b25IYWxvLnN0YXRlID0gMDtcclxuICAgICAgICAgICAgICAgIGluZm9CdXR0b25IYWxvLnN0eWxlKCdvcGFjaXR5JywgMSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9KS5pbnNlcnQoKTtcclxuZXhwb3J0IGRlZmF1bHQgbWFpbkNvbnRlbnQ7IiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgQW54aW4gWWFuZyBvbiAzLzI4LzIwMTguXHJcbiAqL1xyXG5pbXBvcnQgQ0MgZnJvbSAnLi9GcmFtZXdvcmsvQ3ViWS9DdWJZX0NvcmUnO1xyXG5pbXBvcnQgQ3ViWV9ET00gZnJvbSAnLi9GcmFtZXdvcmsvQ3ViWS9DdWJZX0RPTSc7XHJcbmltcG9ydCBDUiBmcm9tICcuL0ZyYW1ld29yay9DdWJZL0N1YllfUm91dGluZSc7XHJcbmltcG9ydCBob21lQ29udGVudCBmcm9tICcuL2hvbWUnO1xyXG5pbXBvcnQgaGVhZGVyIGZyb20gJy4vY29tcG9uZW50cy9oZWFkZXInXHJcbmltcG9ydCBiYWNrZ3JvbmQgZnJvbSAnLi9jb21wb25lbnRzL2JhY2tncm91bmRfc3RhcnMnXHJcblxyXG4gICAgd2luZG93LnJvb3QgPSBuZXcgQ3ViWV9ET00oJ2RpdicsICdheF9yb290JywgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcclxuICAgIHJvb3Quc3R5bGUoJ2ZvbnQtc2l6ZScsICcxMnB4JylcclxuICAgICAgICAuc3R5bGUoJ2N1cnNvcicsICd1cmwoKSwgYXV0bycpO1xyXG4gICAgcm9vdC5hcHBlbmRFbGVtZW50KGhlYWRlcik7XHJcbiAgICB2YXIgbWFpbkNvbnRhaW5lciA9IHJvb3QuYXBwZW5kKCdkaXYnLCAnbWFpbkNvbnRhaW5lcicpO1xyXG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRFbGVtZW50KGhvbWVDb250ZW50KTtcclxuICAgIG1haW5Db250YWluZXIuYXBwZW5kRWxlbWVudChiYWNrZ3JvbmQpO1xyXG4gICAgY2Muc3RvcmVWYWx1ZSgnY3VycmVudFZpZXcnLCdIb21lJyk7XHJcbiAgICBjYy5jb25uZWN0KCdjdXJyZW50VmlldycsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCBjdXJyZW50VmlldyA9IGNjLmdldFZhbHVlKCdjdXJyZW50VmlldycpO1xyXG4gICAgICAgIG1haW5Db250YWluZXIucmVtb3ZlKCcubWFpbkNvbnRlbnQnKTtcclxuICAgICAgICBzd2l0Y2ggKGN1cnJlbnRWaWV3KXtcclxuICAgICAgICAgICAgY2FzZSAnSG9tZSc6XHJcbiAgICAgICAgICAgICAgICBtYWluQ29udGFpbmVyLmFwcGVuZEVsZW1lbnQoaG9tZUNvbnRlbnQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdmFyIHZlcnNpb24gPSByb290LmFwcGVuZCgncCcsICd2ZXJzaW9uJylcclxuICAgICAgICAuc3R5bGUoJ3Bvc2l0aW9uJywgJ2ZpeGVkJylcclxuICAgICAgICAuc3R5bGUoJ2JvdHRvbScsICcwcHgnKVxyXG4gICAgICAgIC5zdHlsZSgncmlnaHQnLCAnMCcpXHJcbiAgICAgICAgLnN0eWxlKCdwYWRkaW5nLXJpZ2h0JywgJzFlbScpXHJcbiAgICAgICAgLnN0eWxlKCdjb2xvcicsICdsaWdodGdyYXknKVxyXG4gICAgICAgIC5jb250ZW50KG5ldyBEYXRlKCkpXHJcbiAgICAgICAgLnNldFVwZGF0ZXIoJ3RpbWVyJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRlbnQoJ0N1YllfUm91dGluZTogTGFzckN5Y2xlVGltZTogJyArIGNyLmxhc3RDeWNsZVRpbWUgKyAnbXMgfCBDUFM6JyArIGNyLmN5Y2xlUGVyU2VjICsgJyB8TG9uZ2VzdDogJyArIGNyLmxvbmdlc3RSb3V0aW5lVGltZSArICdtcyB8IExhc3Q6JyArIGNyLmxhc3RSb3V0aW5lVGltZSArICdtcycpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgdmFyIHRpbWVyID0gY3IuYXBwZW5kKCd0aW1lcicpXHJcbiAgICAgICAgLmF0dHIoJ2ZyZXEnLCAxKVxyXG4gICAgICAgIC5hdHRyKCdhY3Rpb24nLCB2ZXJzaW9uLnVwZGF0ZXIoJ3RpbWVyJykpXHJcbiAgICAgICAgLmluc2VydCgpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9