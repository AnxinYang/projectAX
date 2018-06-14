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

            this.childrenList.push(element);
            this.dom.appendChild(element.dom);
            if (this.isActive || this.isRoot) {
                element.activate();
            }
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

var origin = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2
}; /**
    * Created by Anxin Yang on 6/12/2018.
    */

window.mobilecheck = function () {
    var check = false;
    (function (a) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
};
var background = new _CubY_DOM2.default('div', 'background');
background.style('width', '100vw').style('height', '100vh').style('position', 'fixed').style('background', 'black').style('top', 0).style('left', 0).style('zIndex', 0).on('mousemove', function (e, d) {
    var x = e.clientX;
    var y = e.clientY;

    background.dx = -(x - origin.x) / 10;
    background.dy = -(y - origin.y) / 10;
});;
var circleNum = mobilecheck() ? 50 : 128;
var circleList = [];

var _loop = function _loop() {
    var circle = new _CubY_DOM2.default('div', 'backgroundCircle_' + i).style('position', 'absolute').style('width', '20px').style('height', '20px').style('borderRadius', '4px').style('background', '#eccc68').style('transition', '0.3s linear').style('boxShadow', '0 0 10px #eccc68').style('opacity', '0').style('transform', 'translate(' + origin.x + 'px,' + origin.y + 'px)').attr('activate', function () {
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

var header = new _CubY_DOM2.default('div', 'header').attr('onselectstart', 'return false;').style('display', 'flex').style('position', 'absolute').style('opacity', '0.5').style('top', '1em').style('height', '3em').style('zIndex', '10').style('transition', '0.3s').on('mouseover', function () {
    this.style('opacity', '1');
}).on('mouseleave', function () {
    this.style('opacity', '0.5');
});

var headerItems = ['Menu', 'Playground', 'About Me'];
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
}).attr('activate', function () {
    var self = this;
    setTimeout(function () {
        self.style('opacity', 1);
    }, 300);
}).attr('deactivate', function () {
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

var subHeadLine = mainContent.append('h1', 'subHeadLine').content('- who makes data alive -').style('position', 'fixed').style('color', '#eccc68').style('width', '100%').style('height', '30px').style('textAlign', 'center').style('left', '0').style('right', '0').style('bottom', '30%').style('margin', 'auto').style('fontSize', '32px').style('transition', '1s').style('opacity', 0).style('textShadow', '0 0 10px #eccc68').style('zIndex', 1).attr('activate', function () {
    var self = this;
    setTimeout(function () {
        self.style('opacity', 1);
    }, 300);
}).attr('deactivate', function () {
    this.style('opacity', 0);
});
var infoButtonHalo = mainContent.append('span', 'infoButtonHalo').style('position', 'fixed').style('color', '#eccc68').style('width', '32px').style('height', '32px').style('opacity', 0).style('overflow', 'hidden').style('borderRadius', '4px').style('textAlign', 'center').style('left', '0').style('right', '0').style('bottom', '18%').style('margin', 'auto').style('fontSize', '24px').style('transition', '0.5s').style('border', '1px solid #eccc68').style('boxShadow', '0 0 30px #eccc68').style('cursor', 'pointer').style('zIndex', 1).attr('activate', function () {
    var self = this;
    setTimeout(function () {
        self.style('opacity', 1);
    }, 300);
}).attr('deactivate', function () {
    this.style('opacity', 0);
});
var infoButton = mainContent.append('span', 'infoButton').content('Wanna know more?').style('position', 'fixed').style('color', '#eccc68').style('width', '32px').style('height', '32px').style('overflow', 'hidden').style('border', '1px solid transparent').style('borderRadius', '4px').style('textAlign', 'center').style('left', '0').style('opacity', 0).style('right', '0').style('bottom', '18%').style('margin', 'auto').style('fontSize', '24px').style('transition', '0.5s').style('background', '#eccc68').style('textShadow', '0 0 5px #eccc68').style('boxShadow', '0 0 10x #eccc68').style('cursor', 'pointer').style('zIndex', 1).attr('activate', function () {
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
window.root = new _CubY_DOM2.default('div', 'ax_root', document.getElementById('app'));
root.style('fontSize', '12px').style('cursor', 'url(), auto');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0ZyYW1ld29yay9DdWJZL0N1YllfQ29yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRnJhbWV3b3JrL0N1YlkvQ3ViWV9ET00uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0ZyYW1ld29yay9DdWJZL0N1YllfUm91dGluZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9iYWNrZ3JvdW5kX3N0YXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkVBLElBQU0saUJBQWlCLDBCQUFNLENBQTdCOzs0QkFFSTt1QkFBWSxRQUFPOzhCQUNmOztZQUFJLFFBQVEsU0FDWjtZQUFJLE9BQ0o7YUFBSyxLQUNSOzs7OztxQ0FFRztnQkFBSSxRQUFRLFVBQ1o7aUJBQUssWUFBWSxNQUFNLFNBQ3ZCO2lCQUFLLFVBQ0w7aUJB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QUFVZCxJQUFJLFFBQVEsR0FBRyxPQUFPLFNBQ2pCLEtBQUssUUFBUSxHQUNiLEtBQUssVUFBVSxRQUFRLFFBQVEsVUFDL0IsUyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImNvbnN0IEVNUFRZX0ZVTkNUSU9OID0gKCk9Pnt9O1xyXG5jbGFzcyBDdWJZX0NvcmV7XHJcbiAgICBjb25zdHJ1Y3RvcihfcHJvcHMpe1xyXG4gICAgICAgIGxldCBwcm9wcyA9IHByb3BzIHx8IHt9O1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLmluaXQocHJvcHMpO1xyXG4gICAgfVxyXG4gICAgaW5pdChfcHJvcHMpe1xyXG4gICAgICAgIGxldCBwcm9wcyA9IF9wcm9wcyB8fCB7fTtcclxuICAgICAgICB0aGlzLmRlYnVnTW9kZSA9IHByb3BzLmRlYnVnIHx8IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZGF0YU1hcCA9IHt9O1xyXG4gICAgICAgIHRoaXMuYWN0aW9uTWFwID0ge307XHJcbiAgICAgICAgdGhpcy5icm93c2VyID0gdGhpcy5nZXRCcm93c2VyKCk7XHJcbiAgICAgICAgd2luZG93LmNjID0gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBnZXRCcm93c2VyKCl7XHJcbiAgICAgICAgbGV0IGlzSUUgPSBmYWxzZTtcclxuICAgICAgICBsZXQgaXNDaHJvbWUgPSBmYWxzZTtcclxuICAgICAgICBsZXQgaXNPcGVyYSA9IGZhbHNlO1xyXG4gICAgICAgIGlmKCghIXdpbmRvdy5vcHIgJiYgISFvcHIuYWRkb25zKSB8fCAhIXdpbmRvdy5vcGVyYSB8fCBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJyBPUFIvJykgPj0gMCl7XHJcbiAgICAgICAgICAgIGlzT3BlcmEgPSB0cnVlO1xyXG4gICAgICAgICAgICByZXR1cm4gJ29wZXJhJztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodHlwZW9mIEluc3RhbGxUcmlnZ2VyICE9PSAndW5kZWZpbmVkJyl7XHJcbiAgICAgICAgICAgIHJldHVybiAnZmlyZWZveCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKC9jb25zdHJ1Y3Rvci9pLnRlc3Qod2luZG93LkhUTUxFbGVtZW50KSB8fCAoZnVuY3Rpb24gKHApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwLnRvU3RyaW5nKCkgPT09IFwiW29iamVjdCBTYWZhcmlSZW1vdGVOb3RpZmljYXRpb25dXCI7XHJcbiAgICAgICAgICAgIH0pKCF3aW5kb3dbJ3NhZmFyaSddIHx8IHNhZmFyaS5wdXNoTm90aWZpY2F0aW9uKSl7XHJcbiAgICAgICAgICAgIHJldHVybiAnc2FmYXJpJztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoZmFsc2UgfHwgISFkb2N1bWVudC5kb2N1bWVudE1vZGUpe1xyXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIG91dHB1dCA9IGFyZ3VtZW50c1swXTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIGFyZ3VtZW50c1tpXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgb2JqID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGtleSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXRba2V5XSA9IG9ialtrZXldO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBvdXRwdXQ7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGlzSUUgPXRydWU7XHJcbiAgICAgICAgICAgIHJldHVybiAnaWUnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZighaXNJRSAmJiAhIXdpbmRvdy5TdHlsZU1lZGlhKXtcclxuICAgICAgICAgICAgcmV0dXJuICdlZGdlJztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoISF3aW5kb3cuY2hyb21lICYmICEhd2luZG93LmNocm9tZS53ZWJzdG9yZSl7XHJcbiAgICAgICAgICAgIGlzQ2hyb21lID0gdHJ1ZVxyXG4gICAgICAgICAgICByZXR1cm4gJ2Nocm9tZSc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKChpc0Nocm9tZSB8fCBpc09wZXJhKSAmJiAhIXdpbmRvdy5DU1Mpe1xyXG4gICAgICAgICAgICByZXR1cm4gJ2JsaW5rJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RvcmVEYXRhQXJyYXkoX2FycmF5LCBfaWRLZXksIF9pdGVtUHJvY2Vzc29yLCBfb3B0aW9ucywgX2NhbGxiYWNrKSB7XHJcbiAgICAgICAgdmFyIG9wdGlvbnMgPSBfb3B0aW9ucyB8fCB7fTtcclxuICAgICAgICB2YXIgaWRLZXkgPSBfaWRLZXkgfHwgJ2lkJztcclxuICAgICAgICB2YXIgY2FsbGJhY2sgPSBfY2FsbGJhY2sgfHwgRU1QVFlfRlVOQ1RJT047XHJcbiAgICAgICAgdmFyIGFycmF5ID0gX2FycmF5IHx8IFtdO1xyXG4gICAgICAgIHZhciBpdGVtTGlzdCA9IFtdO1xyXG4gICAgICAgIHZhciBpdGVtUHJvY2Vzc29yID0gX2l0ZW1Qcm9jZXNzb3IgfHwgRU1QVFlfRlVOQ1RJT047XHJcblxyXG4gICAgICAgIGFycmF5LmZvckVhY2goZnVuY3Rpb24gKF9pdGVtKSB7XHJcbiAgICAgICAgICAgIHZhciBrZXkgPSBfaXRlbVtpZEtleV07XHJcbiAgICAgICAgICAgIGlmIChrZXkgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgaXRlbSA9IHNlbGYuc3RvcmVWYWx1ZShrZXksIF9pdGVtLCBfb3B0aW9ucyk7XHJcblxyXG4gICAgICAgICAgICBpdGVtUHJvY2Vzc29yKGl0ZW0pO1xyXG4gICAgICAgICAgICBpdGVtTGlzdC5wdXNoKGl0ZW0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjYWxsYmFjayhfYXJyYXksIGl0ZW1MaXN0KTtcclxuICAgICAgICByZXR1cm4gaXRlbUxpc3Q7XHJcbiAgICB9O1xyXG5cclxuICAgIHN0b3JlVmFsdWUoX2tleSwgX3ZhbHVlLCBfb3B0aW9ucywgX2NhbGxiYWNrKSB7XHJcbiAgICAgICAgdmFyIG9wdGlvbnMgPSBfb3B0aW9ucyB8fCB7fTtcclxuICAgICAgICB2YXIgc3RvcmUgPSB0aGlzLmRhdGFNYXA7XHJcbiAgICAgICAgdmFyIGtleSA9IF9rZXk7XHJcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gX2NhbGxiYWNrIHx8IEVNUFRZX0ZVTkNUSU9OO1xyXG4gICAgICAgIHZhciBuZXdWYWx1ZSA9IF92YWx1ZTtcclxuICAgICAgICB2YXIgaXRlbSA9IHN0b3JlW2tleV07XHJcbiAgICAgICAgaWYoaXRlbSE9PXVuZGVmaW5lZCAmJiBpdGVtID09PSBPYmplY3QoaXRlbSkgJiYgb3B0aW9ucy5vdmVyd3JpdGUhPT10cnVlKSB7XHJcbiAgICAgICAgICAgIGl0ZW0gPSBPYmplY3QuYXNzaWduKGl0ZW0sIG5ld1ZhbHVlKTtcclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIGl0ZW0gPSBuZXdWYWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5kYXRhTWFwW2tleV0gPSBpdGVtO1xyXG5cclxuICAgICAgICBjYWxsYmFjayhpdGVtKTtcclxuICAgICAgICB0aGlzLnJlYWN0KGtleSk7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICB9O1xyXG4gICAgZ2V0VmFsdWUoX2tleSkge1xyXG4gICAgICAgIHZhciBrZXkgPSBfa2V5IHx8ICcnO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFNYXBba2V5XTtcclxuICAgIH07XHJcblxyXG4gICAgY29ubmVjdChfa2V5LF9hY3Rpb24pIHtcclxuICAgICAgICBpZihfa2V5PT09dW5kZWZpbmVkIHx8IF9hY3Rpb249PT11bmRlZmluZWQpe1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgYWN0aW9uTWFwID0gdGhpcy5hY3Rpb25NYXA7XHJcbiAgICAgICAgdmFyIGFjdGlvbkxpc3QgPSBhY3Rpb25NYXBbX2tleV0gfHwgW107XHJcbiAgICAgICAgYWN0aW9uTGlzdC5wdXNoKF9hY3Rpb24pO1xyXG4gICAgICAgIGFjdGlvbk1hcFtfa2V5XSA9IGFjdGlvbkxpc3Q7XHJcbiAgICB9O1xyXG4gICAgcmVhY3QoX2tleSkge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICBpZihfa2V5PT09dW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGFjdGlvbk1hcCA9IHRoaXMuYWN0aW9uTWFwO1xyXG4gICAgICAgIHZhciBhY3Rpb25MaXN0ID0gYWN0aW9uTWFwW19rZXldIHx8IFtdO1xyXG4gICAgICAgIGFjdGlvbkxpc3QuZm9yRWFjaCgoYWN0aW9uKT0+IHtcclxuICAgICAgICAgICAgdmFyIHZhbHVlID0gc2VsZi5nZXRWYWx1ZShfa2V5KTtcclxuICAgICAgICAgICAgYWN0aW9uKHZhbHVlKTtcclxuICAgICAgICB9KVxyXG4gICAgfTtcclxuICAgIGRlYnVnKHN0cikge1xyXG4gICAgICAgIGlmKHRoaXMuZGVidWdNb2RlKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0RFQlVHOiAnICsgc3RyKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcbmNvbnN0IGNjID0gbmV3IEN1YllfQ29yZSgpO1xyXG53aW5kb3cuY2MgPSBjYztcclxuZXhwb3J0IGRlZmF1bHQgY2M7XHJcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFueGluIFlhbmcgb24gNS8yNi8yMDE4LlxyXG4gKi9cclxuaW1wb3J0IEFYQ29yZSBmcm9tICcuL0N1YllfQ29yZSc7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1YllfRE9NIHtcclxuICAgIGNvbnN0cnVjdG9yKF90YWcsX2lkLF9yb290KSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IHRoaXMucmVhZFZhbHVlKF9pZCl8fCAnc2VsZic7XHJcbiAgICAgICAgdGhpcy50YWcgPSB0aGlzLnJlYWRWYWx1ZShfdGFnKSB8fCAnZGl2JztcclxuICAgICAgICB0aGlzLmRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGhpcy50YWcpO1xyXG4gICAgICAgIHRoaXMuZG9tLnNldEF0dHJpYnV0ZSgnaWQnLHRoaXMuaWQpO1xyXG4gICAgICAgIHRoaXMuY2hpbGRyZW5MaXN0ID0gW107XHJcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGUgPSB7fTtcclxuICAgICAgICB0aGlzLmRvbVN0eWxlID0ge307XHJcbiAgICAgICAgdGhpcy51cGRhdGVycyA9IHt9O1xyXG4gICAgICAgIHRoaXMucGFyZW50ID0ge307XHJcbiAgICAgICAgdGhpcy5jbGFzc2VzID0gW107XHJcblxyXG4gICAgICAgIGlmKF9yb290KXtcclxuICAgICAgICAgICAgX3Jvb3QuYXBwZW5kQ2hpbGQodGhpcy5kb20pO1xyXG4gICAgICAgICAgICB0aGlzLmlzUm9vdCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLnVwZGF0ZXIgPSBmdW5jdGlvbiAobmFtZSkge1xyXG4gICAgICAgICAgICBsZXQgdXBkYXRlciA9dGhpcy51cGRhdGVyc1tuYW1lXTtcclxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmKHVwZGF0ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVyLmNhbGwoc2VsZiwgc2VsZi5kYXRhLCBhcmd1bWVudHMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIHNldFVwZGF0ZXIobmFtZSx1cGRhdGVyKXtcclxuICAgICAgICB0aGlzLnVwZGF0ZXJzW25hbWVdID0gdXBkYXRlcjtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIGJpbmQoZGF0YSl7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIGFwcGVuZChfdGFnLF9pZCl7XHJcbiAgICAgICAgbGV0IHRhZyA9IHRoaXMucmVhZFZhbHVlKF90YWcpO1xyXG4gICAgICAgIGxldCBpZCA9IHRoaXMucmVhZFZhbHVlKF9pZCk7XHJcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBuZXcgQ3ViWV9ET00odGFnLGlkKTtcclxuICAgICAgICB0aGlzLmFwcGVuZEVsZW1lbnQoZWxlbWVudCk7XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgICBhcHBlbmRFbGVtZW50KEN1YllfRE9NKXtcclxuICAgICAgICBsZXQgZWxlbWVudCA9IHRoaXMucmVhZFZhbHVlKEN1YllfRE9NKTtcclxuICAgICAgICBlbGVtZW50LnBhcmVudCA9IHRoaXM7XHJcblxyXG4gICAgICAgIHRoaXMuY2hpbGRyZW5MaXN0LnB1c2goZWxlbWVudCk7XHJcbiAgICAgICAgdGhpcy5kb20uYXBwZW5kQ2hpbGQoZWxlbWVudC5kb20pO1xyXG4gICAgICAgIGlmKHRoaXMuaXNBY3RpdmUgfHwgdGhpcy5pc1Jvb3QpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5hY3RpdmF0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgIH1cclxuICAgIGF0dHIoa2V5LF92YWx1ZSl7XHJcbiAgICAgICAgbGV0IHZhbHVlO1xyXG4gICAgICAgIGlmKGtleSA9PT0nYWN0aXZhdGUnIHx8IGtleSA9PT0gJ2RlYWN0aXZhdGUnKXtcclxuICAgICAgICAgICAgdmFsdWUgPSBfdmFsdWU7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHZhbHVlID0gdGhpcy5yZWFkVmFsdWUoX3ZhbHVlKTtcclxuICAgICAgICAgICAgdGhpcy5kb20uc2V0QXR0cmlidXRlKGtleSx2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmF0dHJpYnV0ZVtrZXldID0gdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBvbihldmVudE5hbWUsX3ZhbHVlKXtcclxuICAgICAgICBsZXQgdmFsdWUgPSBfdmFsdWU7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMub25bZXZlbnROYW1lXSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuZG9tLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHZhbHVlLmNhbGwoc2VsZixlLHNlbGYuZGF0YSwpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBzdHlsZShfa2V5LF92YWx1ZSl7XHJcbiAgICAgICAgbGV0IGtleSA9IHRoaXMucmVhZFZhbHVlKF9rZXkpO1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IHRoaXMucmVhZFZhbHVlKF92YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5kb21TdHlsZVtrZXldID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5kb20uc3R5bGVba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgY29udGVudChfdmFsdWUpe1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IHRoaXMucmVhZFZhbHVlKF92YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5pbm5lckhUTUwgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLmRvbS5pbm5lckhUTUwgPSB2YWx1ZTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIGFwcGVuZENsYXNzKF9jbGFzc05hbWUpe1xyXG4gICAgICAgIGxldCBjbGFzc05hbWUgPSB0aGlzLnJlYWRWYWx1ZShfY2xhc3NOYW1lKTtcclxuICAgICAgICBsZXQgY2xhc3NlcyA9IHRoaXMuY2xhc3NlcyB8fCBbXTtcclxuICAgICAgICBjbGFzc2VzLnB1c2goY2xhc3NOYW1lKTtcclxuICAgICAgICB0aGlzLmRvbS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcbiAgICAgICAgdGhpcy5jbGFzc2VzID0gY2xhc3NlcztcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIHNlbGVjdChfc2VsZWN0b3Ipe1xyXG4gICAgICAgIGxldCBzZWxlY3RvciA9IF9zZWxlY3Rvci5jaGFyQXQoMCk7XHJcbiAgICAgICAgbGV0IG5hbWUgPSBfc2VsZWN0b3Iuc3Vic3RyaW5nKDEpO1xyXG4gICAgICAgIHN3aXRjaCAoc2VsZWN0b3Ipe1xyXG4gICAgICAgICAgICBjYXNlICcjJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNlbGVjdEJ5SWQobmFtZSk7XHJcbiAgICAgICAgICAgIGNhc2UgJy4nOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0QnlDbGFzc05hbWUobmFtZSk7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RCeVRhZyhfc2VsZWN0b3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNlbGVjdEJ5SWQoaWQpe1xyXG4gICAgICAgIGxldCBjaGlsZHJlbkxpc3QgPSB0aGlzLmNoaWxkcmVuTGlzdDtcclxuICAgICAgICBsZXQgdGFyZ2V0O1xyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGk8Y2hpbGRyZW5MaXN0Lmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICBsZXQgY2hpbGQgPSBjaGlsZHJlbkxpc3RbaV07XHJcbiAgICAgICAgICAgIGlmKGNoaWxkLmlkID09PSBpZCl7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSBjaGlsZDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0YXJnZXQ7XHJcbiAgICB9XHJcbiAgICBzZWxlY3RCeUNsYXNzTmFtZShjbGFzc05hbWUpe1xyXG4gICAgICAgIGxldCBjaGlsZHJlbkxpc3QgPSB0aGlzLmNoaWxkcmVuTGlzdDtcclxuICAgICAgICBsZXQgdGFyZ2V0TGlzdCA9IFtdO1xyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGk8Y2hpbGRyZW5MaXN0Lmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICBsZXQgY2hpbGQgPSBjaGlsZHJlbkxpc3RbaV07XHJcbiAgICAgICAgICAgIGlmKGNoaWxkLmNsYXNzZXMuaW5kZXhPZihjbGFzc05hbWUpPi0xKXtcclxuICAgICAgICAgICAgICAgIHRhcmdldExpc3QucHVzaChjaGlsZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRhcmdldExpc3Q7XHJcbiAgICB9XHJcbiAgICBzZWxlY3RCeVRhZyhfdGFnKXtcclxuICAgICAgICBsZXQgY2hpbGRyZW5MaXN0ID0gdGhpcy5jaGlsZHJlbkxpc3Q7XHJcbiAgICAgICAgbGV0IHRhcmdldExpc3QgPSBbXTtcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpPGNoaWxkcmVuTGlzdC5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5MaXN0W2ldO1xyXG4gICAgICAgICAgICBpZihjaGlsZC50YWcgPT09IF90YWcpe1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0TGlzdC5wdXNoKGNoaWxkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGFyZ2V0TGlzdDtcclxuICAgIH1cclxuICAgIHJlbW92ZShfc2VsZWN0b3Ipe1xyXG4gICAgICAgIGlmKF9zZWxlY3Rvcj09dW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmVTZWxmKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHNlbGVjdG9yID0gX3NlbGVjdG9yLmNoYXJBdCgwKTtcclxuICAgICAgICBsZXQgbmFtZSA9IF9zZWxlY3Rvci5zdWJzdHJpbmcoMSk7XHJcbiAgICAgICAgbGV0IHRhcmdldDtcclxuICAgICAgICBzd2l0Y2ggKHNlbGVjdG9yKXtcclxuICAgICAgICAgICAgY2FzZSAnIyc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUJ5SWQobmFtZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnLic6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUJ5Q2xhc3NOYW1lKG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUJ5VGFnKF9zZWxlY3Rvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVtb3ZlQnlJZChpZCl7XHJcbiAgICAgICAgbGV0IGNoaWxkcmVuTGlzdCA9IHRoaXMuY2hpbGRyZW5MaXN0O1xyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGk8Y2hpbGRyZW5MaXN0Lmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICBsZXQgY2hpbGQgPSBjaGlsZHJlbkxpc3RbaV07XHJcbiAgICAgICAgICAgIGlmKGNoaWxkLmlkID09PSBpZCl7XHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlbkxpc3Quc3BsaWNlKGksMSk7XHJcbiAgICAgICAgICAgICAgICBjaGlsZC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgIGktLTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVtb3ZlQnlDbGFzc05hbWUoY2xhc3NOYW1lKXtcclxuICAgICAgICBsZXQgY2hpbGRyZW5MaXN0ID0gdGhpcy5jaGlsZHJlbkxpc3Q7XHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaTxjaGlsZHJlbkxpc3QubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuTGlzdFtpXTtcclxuICAgICAgICAgICAgaWYoY2hpbGQuY2xhc3Nlcy5pbmRleE9mKGNsYXNzTmFtZSk+LTEpe1xyXG4gICAgICAgICAgICAgICAgY2hpbGRyZW5MaXN0LnNwbGljZShpLDEpO1xyXG4gICAgICAgICAgICAgICAgY2hpbGQucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICBpLS07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZW1vdmVCeVRhZyhfdGFnKXtcclxuICAgICAgICBsZXQgY2hpbGRyZW5MaXN0ID0gdGhpcy5jaGlsZHJlbkxpc3Q7XHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaTxjaGlsZHJlbkxpc3QubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuTGlzdFtpXTtcclxuICAgICAgICAgICAgaWYoY2hpbGQudGFnID09PSBfdGFnKXtcclxuICAgICAgICAgICAgICAgIGNoaWxkcmVuTGlzdC5zcGxpY2UoaSwxKTtcclxuICAgICAgICAgICAgICAgIGNoaWxkLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgaS0tO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVtb3ZlU2VsZigpe1xyXG4gICAgICAgIC8qdGhpcy5jaGlsZHJlbkxpc3QuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgICAgICAgICAgY2hpbGQucmVtb3ZlKCk7XHJcbiAgICAgICAgfSk7Ki9cclxuICAgICAgICB0aGlzLmRlYWN0aXZhdGUoKTtcclxuICAgICAgICB0aGlzLmRvbS5yZW1vdmUoKTtcclxuICAgICAgICBpZih0aGlzLnBhcmVudCl7XHJcbiAgICAgICAgICAgIGxldCBjaGlsZHJlbkxpc3QgPSB0aGlzLnBhcmVudC5jaGlsZHJlbkxpc3Q7XHJcbiAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGk8Y2hpbGRyZW5MaXN0Lmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5MaXN0W2ldO1xyXG4gICAgICAgICAgICAgICAgaWYoY2hpbGQgPT09IHRoaXMpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuTGlzdC5zcGxpY2UoaSwxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvKmZvcih2YXIga2V5IGluIHRoaXMpe1xyXG4gICAgICAgICAgICBkZWxldGUgdGhpc1trZXldXHJcbiAgICAgICAgfSovXHJcbiAgICB9XHJcbiAgICBhY3RpdmF0ZSgpe1xyXG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgICBpZih0aGlzLmF0dHJpYnV0ZS5hY3RpdmF0ZSl7XHJcbiAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlLmFjdGl2YXRlLmNhbGwodGhpcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNoaWxkcmVuTGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICAgICAgICBjaGlsZC5hY3RpdmF0ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZGVhY3RpdmF0ZSgpe1xyXG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYodGhpcy5hdHRyaWJ1dGUuZGVhY3RpdmF0ZSl7XHJcbiAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlLmRlYWN0aXZhdGUuY2FsbCh0aGlzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY2hpbGRyZW5MaXN0LmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgICAgICAgIGNoaWxkLmRlYWN0aXZhdGUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJlYWRWYWx1ZShfdmFsdWUpe1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IF92YWx1ZTtcclxuICAgICAgICBpZih0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIil7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZS5jYWxsKHRoaXMsdGhpcy5kYXRhKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImNvbnN0IE1BWF9DWUNMRSA9IDEwMDtcclxuY2xhc3MgQ3ViWV9Sb3V0aW5le1xyXG4gICAgY29uc3RydWN0b3IoX3RpY2tTcGVlZCxfb3B0aW9ucyl7XHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBfb3B0aW9ucyB8fCB7fTtcclxuICAgICAgICB0aGlzLmluaXQob3B0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5NQVhfQ1lDTEUgPSBNQVhfQ1lDTEU7XHJcbiAgICB9XHJcbiAgICBpbml0KG9wdGlvbnMpe1xyXG4gICAgICAgIHdpbmRvdy5jciA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5jeWNsZSA9IDA7XHJcbiAgICAgICAgdGhpcy5yb3V0aW5lTGlzdCA9IFtdO1xyXG4gICAgICAgIHRoaXMubG9uZ2VzdFJvdXRpbmVUaW1lID0wO1xyXG4gICAgICAgIHNldFRpbWVvdXQodGhpcy5zdGFydC5iaW5kKHRoaXMpLDApO1xyXG4gICAgfTtcclxuICAgIHN0YXJ0KCl7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuY3ljbGVTdGFydFRpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoc2VsZi5yb3V0aW5lLmJpbmQodGhpcyksMCk7XHJcbiAgICB9XHJcbiAgICBhcHBlbmQobmFtZSxncm91cCkge1xyXG4gICAgICAgIGxldCBuZXdSb3V0aW5lID0gbmV3IFJvdXRpbmUobmFtZSwgZ3JvdXApO1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBuZXdSb3V0aW5lLmluc2VydD0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZihuZXdSb3V0aW5lLmZyZXEhPT0xKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdSb3V0aW5lLmNvdW50ZXIgKz0gc2VsZi5yb3V0aW5lTGlzdC5sZW5ndGggKyAxO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzZWxmLnJvdXRpbmVMaXN0LnB1c2gobmV3Um91dGluZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXdSb3V0aW5lO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgbmV3Um91dGluZS5yZW1vdmU9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgbGV0IGluZGV4ID0gIHNlbGYucm91dGluZUxpc3QuaW5kZXhPZihuZXdSb3V0aW5lKTtcclxuICAgICAgICAgICAgc2VsZi5yb3V0aW5lTGlzdC5zcGxpY2UoaW5kZXgsMSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gbmV3Um91dGluZTtcclxuICAgIH1cclxuICAgIGdldEN1cnJlbnRDeWNsZSgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmN5Y2xlO1xyXG4gICAgfVxyXG4gICAgcm91dGluZSgpe1xyXG4gICAgICAgIGxldCByb3V0aW5lTGlzdCA9IHRoaXMucm91dGluZUxpc3Q7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGZvcih2YXIgaT0wO2k8cm91dGluZUxpc3QubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgIGxldCByb3V0aW5lID0gcm91dGluZUxpc3RbaV07XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBpZihyb3V0aW5lLmNoZWNrTG9jaygpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcm91dGluZS5sb2NrKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3RhcnRUaW1lID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGluZS5hY3Rpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5sYXN0Um91dGluZVRpbWUgPSBEYXRlLm5vdygpIC0gc3RhcnRUaW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihzZWxmLmxvbmdlc3RSb3V0aW5lVGltZTxzZWxmLmxhc3RSb3V0aW5lVGltZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmxvbmdlc3RSb3V0aW5lVGltZT1zZWxmLmxhc3RSb3V0aW5lVGltZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihzZWxmLmxhc3RSb3V0aW5lVGltZT4yMDApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdSb3V0aW5lOicgKyByb3V0aW5lLm5hbWUgKyAnIHRvb2sgdG9vIGxvbmcgdG8gcnVuLiBbJytzZWxmLmxhc3RSb3V0aW5lVGltZSsnbXNdJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0aW5lLnVubG9jaygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0scm91dGluZS5mcmVxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfWNhdGNoIChlKXtcclxuICAgICAgICAgICAgICAgIC8vREVDSURFIElGIFJFTU9WRSBST1VUSU5FIExBVEVSO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY3ljbGUrKztcclxuICAgICAgICBpZih0aGlzLmN5Y2xlID09PSBNQVhfQ1lDTEUpe1xyXG4gICAgICAgICAgICB0aGlzLmN5Y2xlID0gMDtcclxuICAgICAgICAgICAgdGhpcy5sYXN0Q3ljbGVUaW1lID0gRGF0ZS5ub3coKSAtIHRoaXMuY3ljbGVTdGFydFRpbWU7XHJcbiAgICAgICAgICAgIHRoaXMuY3ljbGVQZXJTZWMgPSBNYXRoLmZsb29yKDEwMDAgLyB0aGlzLmxhc3RDeWNsZVRpbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnN0YXJ0KCk7XHJcbiAgICB9XHJcbn1cclxuY2xhc3MgUm91dGluZXtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUsZ3JvdXApe1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5ncm91cCA9IGdyb3VwIHx8ICdjb21tb24nO1xyXG4gICAgICAgIHRoaXMuZnJlcSA9IDE7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuYWN0aW9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzZWxmLmlzUnVubmluZyA9IHRydWU7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmNvdW50ZXI9MDtcclxuICAgICAgICB0aGlzLnJlcGVhdCA9IC0xO1xyXG4gICAgfVxyXG4gICAgbG9jaygpe1xyXG4gICAgICAgIGlmKHRoaXMucmVwZWF0PjApdGhpcy5yZXBlYXQtLTtcclxuICAgICAgICB0aGlzLmlzUnVubmluZyA9IHRydWU7XHJcbiAgICB9XHJcbiAgICB1bmxvY2soKXtcclxuICAgICAgICBpZih0aGlzLnJlcGVhdD09PTApe1xyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmlzUnVubmluZyA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgYXR0cihrZXksdmFsdWUpe1xyXG4gICAgICAgIHRoaXNba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgIGlmKGtleT09PSdmcmVxJyl7XHJcbiAgICAgICAgICAgIHRoaXNbJ2NvdW50ZXInXSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIHJlc2V0Q291bnRlcigpe1xyXG4gICAgICAgIHRoaXMuY291bnRlciA9IHRoaXMuZnJlcTtcclxuICAgIH1cclxuICAgIGNoZWNrTG9jaygpe1xyXG4gICAgICAgIGlmKHRoaXMuY291bnRlcj4wKXtcclxuICAgICAgICAgICAgdGhpcy5jb3VudGVyLS07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0aGlzLmlzUnVubmluZz09PXRydWUgfHwgdGhpcy5jb3VudGVyPjApe1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbmNvbnN0IGNyID0gbmV3IEN1YllfUm91dGluZSgpO1xyXG53aW5kb3cuY3IgPSBjcjtcclxuZXhwb3J0IGRlZmF1bHQgY3I7IiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgQW54aW4gWWFuZyBvbiA2LzEyLzIwMTguXHJcbiAqL1xyXG5pbXBvcnQgQ3ViWV9ET00gZnJvbSAnLi4vRnJhbWV3b3JrL0N1YlkvQ3ViWV9ET00nO1xyXG5sZXQgb3JpZ2luID0ge1xyXG4gICAgeDogd2luZG93LmlubmVyV2lkdGgvMixcclxuICAgIHk6IHdpbmRvdy5pbm5lckhlaWdodC8yXHJcbn07XHJcbndpbmRvdy5tb2JpbGVjaGVjayA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIGNoZWNrID0gZmFsc2U7XHJcbiAgICAoZnVuY3Rpb24oYSl7aWYoLyhhbmRyb2lkfGJiXFxkK3xtZWVnbykuK21vYmlsZXxhdmFudGdvfGJhZGFcXC98YmxhY2tiZXJyeXxibGF6ZXJ8Y29tcGFsfGVsYWluZXxmZW5uZWN8aGlwdG9wfGllbW9iaWxlfGlwKGhvbmV8b2QpfGlyaXN8a2luZGxlfGxnZSB8bWFlbW98bWlkcHxtbXB8bW9iaWxlLitmaXJlZm94fG5ldGZyb250fG9wZXJhIG0ob2J8aW4paXxwYWxtKCBvcyk/fHBob25lfHAoaXhpfHJlKVxcL3xwbHVja2VyfHBvY2tldHxwc3B8c2VyaWVzKDR8NikwfHN5bWJpYW58dHJlb3x1cFxcLihicm93c2VyfGxpbmspfHZvZGFmb25lfHdhcHx3aW5kb3dzIGNlfHhkYXx4aWluby9pLnRlc3QoYSl8fC8xMjA3fDYzMTB8NjU5MHwzZ3NvfDR0aHB8NTBbMS02XWl8Nzcwc3w4MDJzfGEgd2F8YWJhY3xhYyhlcnxvb3xzXFwtKXxhaShrb3xybil8YWwoYXZ8Y2F8Y28pfGFtb2l8YW4oZXh8bnl8eXcpfGFwdHV8YXIoY2h8Z28pfGFzKHRlfHVzKXxhdHR3fGF1KGRpfFxcLW18ciB8cyApfGF2YW58YmUoY2t8bGx8bnEpfGJpKGxifHJkKXxibChhY3xheil8YnIoZXx2KXd8YnVtYnxid1xcLShufHUpfGM1NVxcL3xjYXBpfGNjd2F8Y2RtXFwtfGNlbGx8Y2h0bXxjbGRjfGNtZFxcLXxjbyhtcHxuZCl8Y3Jhd3xkYShpdHxsbHxuZyl8ZGJ0ZXxkY1xcLXN8ZGV2aXxkaWNhfGRtb2J8ZG8oY3xwKW98ZHMoMTJ8XFwtZCl8ZWwoNDl8YWkpfGVtKGwyfHVsKXxlcihpY3xrMCl8ZXNsOHxleihbNC03XTB8b3N8d2F8emUpfGZldGN8Zmx5KFxcLXxfKXxnMSB1fGc1NjB8Z2VuZXxnZlxcLTV8Z1xcLW1vfGdvKFxcLnd8b2QpfGdyKGFkfHVuKXxoYWllfGhjaXR8aGRcXC0obXxwfHQpfGhlaVxcLXxoaShwdHx0YSl8aHAoIGl8aXApfGhzXFwtY3xodChjKFxcLXwgfF98YXxnfHB8c3x0KXx0cCl8aHUoYXd8dGMpfGlcXC0oMjB8Z298bWEpfGkyMzB8aWFjKCB8XFwtfFxcLyl8aWJyb3xpZGVhfGlnMDF8aWtvbXxpbTFrfGlubm98aXBhcXxpcmlzfGphKHR8dilhfGpicm98amVtdXxqaWdzfGtkZGl8a2VqaXxrZ3QoIHxcXC8pfGtsb258a3B0IHxrd2NcXC18a3lvKGN8ayl8bGUobm98eGkpfGxnKCBnfFxcLyhrfGx8dSl8NTB8NTR8XFwtW2Etd10pfGxpYnd8bHlueHxtMVxcLXd8bTNnYXxtNTBcXC98bWEodGV8dWl8eG8pfG1jKDAxfDIxfGNhKXxtXFwtY3J8bWUocmN8cmkpfG1pKG84fG9hfHRzKXxtbWVmfG1vKDAxfDAyfGJpfGRlfGRvfHQoXFwtfCB8b3x2KXx6eil8bXQoNTB8cDF8diApfG13YnB8bXl3YXxuMTBbMC0yXXxuMjBbMi0zXXxuMzAoMHwyKXxuNTAoMHwyfDUpfG43KDAoMHwxKXwxMCl8bmUoKGN8bSlcXC18b258dGZ8d2Z8d2d8d3QpfG5vayg2fGkpfG56cGh8bzJpbXxvcCh0aXx3dil8b3Jhbnxvd2cxfHA4MDB8cGFuKGF8ZHx0KXxwZHhnfHBnKDEzfFxcLShbMS04XXxjKSl8cGhpbHxwaXJlfHBsKGF5fHVjKXxwblxcLTJ8cG8oY2t8cnR8c2UpfHByb3h8cHNpb3xwdFxcLWd8cWFcXC1hfHFjKDA3fDEyfDIxfDMyfDYwfFxcLVsyLTddfGlcXC0pfHF0ZWt8cjM4MHxyNjAwfHJha3N8cmltOXxybyh2ZXx6byl8czU1XFwvfHNhKGdlfG1hfG1tfG1zfG55fHZhKXxzYygwMXxoXFwtfG9vfHBcXC0pfHNka1xcL3xzZShjKFxcLXwwfDEpfDQ3fG1jfG5kfHJpKXxzZ2hcXC18c2hhcnxzaWUoXFwtfG0pfHNrXFwtMHxzbCg0NXxpZCl8c20oYWx8YXJ8YjN8aXR8dDUpfHNvKGZ0fG55KXxzcCgwMXxoXFwtfHZcXC18diApfHN5KDAxfG1iKXx0MigxOHw1MCl8dDYoMDB8MTB8MTgpfHRhKGd0fGxrKXx0Y2xcXC18dGRnXFwtfHRlbChpfG0pfHRpbVxcLXx0XFwtbW98dG8ocGx8c2gpfHRzKDcwfG1cXC18bTN8bTUpfHR4XFwtOXx1cChcXC5ifGcxfHNpKXx1dHN0fHY0MDB8djc1MHx2ZXJpfHZpKHJnfHRlKXx2ayg0MHw1WzAtM118XFwtdil8dm00MHx2b2RhfHZ1bGN8dngoNTJ8NTN8NjB8NjF8NzB8ODB8ODF8ODN8ODV8OTgpfHczYyhcXC18ICl8d2ViY3x3aGl0fHdpKGcgfG5jfG53KXx3bWxifHdvbnV8eDcwMHx5YXNcXC18eW91cnx6ZXRvfHp0ZVxcLS9pLnRlc3QoYS5zdWJzdHIoMCw0KSkpIGNoZWNrID0gdHJ1ZTt9KShuYXZpZ2F0b3IudXNlckFnZW50fHxuYXZpZ2F0b3IudmVuZG9yfHx3aW5kb3cub3BlcmEpO1xyXG4gICAgcmV0dXJuIGNoZWNrO1xyXG59O1xyXG52YXIgYmFja2dyb3VuZCA9IG5ldyBDdWJZX0RPTSgnZGl2JywnYmFja2dyb3VuZCcpO1xyXG5iYWNrZ3JvdW5kLnN0eWxlKCd3aWR0aCcsJzEwMHZ3JylcclxuICAgIC5zdHlsZSgnaGVpZ2h0JywnMTAwdmgnKVxyXG4gICAgLnN0eWxlKCdwb3NpdGlvbicsJ2ZpeGVkJylcclxuICAgIC5zdHlsZSgnYmFja2dyb3VuZCcsJ2JsYWNrJylcclxuICAgIC5zdHlsZSgndG9wJywwKVxyXG4gICAgLnN0eWxlKCdsZWZ0JywwKVxyXG4gICAgLnN0eWxlKCd6SW5kZXgnLDApXHJcbiAgICAub24oJ21vdXNlbW92ZScsZnVuY3Rpb24gKGUsZCkge1xyXG4gICAgICAgIGxldCB4ID0gZS5jbGllbnRYO1xyXG4gICAgICAgIGxldCB5ID0gZS5jbGllbnRZO1xyXG5cclxuICAgICAgICBiYWNrZ3JvdW5kLmR4ID0gLSh4IC0gb3JpZ2luLngpLzEwO1xyXG4gICAgICAgIGJhY2tncm91bmQuZHkgPSAtKHkgLSBvcmlnaW4ueSkvMTA7XHJcblxyXG4gICAgfSk7O1xyXG52YXIgY2lyY2xlTnVtID0gbW9iaWxlY2hlY2soKT81MDoxMjg7XHJcbnZhciBjaXJjbGVMaXN0ID0gW107XHJcblxyXG5mb3IodmFyIGk9MDtpPGNpcmNsZU51bTtpKyspe1xyXG4gICAgbGV0IGNpcmNsZSA9IG5ldyBDdWJZX0RPTSgnZGl2JywnYmFja2dyb3VuZENpcmNsZV8nK2kpXHJcbiAgICAgICAgLnN0eWxlKCdwb3NpdGlvbicsJ2Fic29sdXRlJylcclxuICAgICAgICAuc3R5bGUoJ3dpZHRoJywnMjBweCcpXHJcbiAgICAgICAgLnN0eWxlKCdoZWlnaHQnLCcyMHB4JylcclxuICAgICAgICAuc3R5bGUoJ2JvcmRlclJhZGl1cycsJzRweCcpXHJcbiAgICAgICAgLnN0eWxlKCdiYWNrZ3JvdW5kJywnI2VjY2M2OCcpXHJcbiAgICAgICAgLnN0eWxlKCd0cmFuc2l0aW9uJywnMC4zcyBsaW5lYXInKVxyXG4gICAgICAgIC5zdHlsZSgnYm94U2hhZG93JywnMCAwIDEwcHggI2VjY2M2OCcpXHJcbiAgICAgICAgLnN0eWxlKCdvcGFjaXR5JywgJzAnKVxyXG4gICAgICAgIC5zdHlsZSgndHJhbnNmb3JtJywndHJhbnNsYXRlKCcrb3JpZ2luLngrJ3B4LCcrb3JpZ2luLnkrJ3B4KScpXHJcbiAgICAgICAgLmF0dHIoJ2FjdGl2YXRlJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICAgICAgbGV0IHggPSBNYXRoLnJhbmRvbSgpKndpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgICAgICAgICBsZXQgeSA9IE1hdGgucmFuZG9tKCkqd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgICAgICAgICB0aGlzLmR4ID0gTWF0aC5yYW5kb20oKS0wLjU7XHJcbiAgICAgICAgICAgIHRoaXMuZHkgPSBNYXRoLnJhbmRvbSgpLTAuNTtcclxuICAgICAgICAgICAgdGhpcy5kcyA9IDAuMDE7XHJcbiAgICAgICAgICAgIHRoaXMuc2NhbGUgPSAgTWF0aC5yYW5kb20oKTtcclxuICAgICAgICAgICAgdGhpcy5jb3VudGVyID0gMTA7XHJcbiAgICAgICAgICAgIHRoaXMuY2lyY2xlQW4gPSBjci5hcHBlbmQoJ2hvbWVfY2lyY2xlX2FuaW1hdGlvbl8nK2kpXHJcbiAgICAgICAgICAgICAgICAuYXR0cignZnJlcScsNTApXHJcbiAgICAgICAgICAgICAgICAuYXR0cignYWN0aW9uJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNjYWxlID0gc2VsZi5zY2FsZTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc2VlZCA9IE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi54Kz1zZWxmLmR4O1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYueSs9c2VsZi5keTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5zdHlsZSgndHJhbnNmb3JtJywndHJhbnNsYXRlKCcrKHNlbGYueCArIChiYWNrZ3JvdW5kLmR4fHwwKSpzY2FsZSkrJ3B4LCcrKHNlbGYueSArIChiYWNrZ3JvdW5kLmR5fHwwKSpzY2FsZSkrJ3B4KSBzY2FsZSgnK3NjYWxlKycpJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnN0eWxlKCdvcGFjaXR5Jywgc2NhbGUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zdHlsZSgnekluZGV4Jywgc2NhbGU+PTAuOD8yOjApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zdHlsZSgnYm94U2hhZG93JywnMCAwICcrKHNlZWQqMTArMTApKydweCAjZWNjYzY4Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoc2VsZi54PndpbmRvdy5pbm5lcldpZHRoKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5keCA9IC0oc2VlZCowLjUrMC4xKTtcclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZSBpZihzZWxmLng8MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZHggPSBzZWVkKjAuNSswLjE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHNlbGYueT53aW5kb3cuaW5uZXJIZWlnaHQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmR5ID0gLShzZWVkKjAuNSswLjEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNlIGlmKHNlbGYueTwwKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5keSA9IHNlZWQqMC41KzAuMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb3VudGVyLS07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoc2VsZi5jb3VudGVyPD0wKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb3VudGVyPTEwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNjYWxlKz1jaXJjbGUuZHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHNlbGYuc2NhbGU+PTEpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5kcz0tMC4wMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihzZWxmLnNjYWxlPD0wKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZHM9MC4wMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pLmluc2VydCgpO1xyXG4gICAgICAgICAgICB0aGlzLmNpcmNsZUFuMiA9IGNyLmFwcGVuZCgnaG9tZV9jaXJjbGVfYW5pbWF0aW9uXzJfJytpKVxyXG4gICAgICAgICAgICAgICAgLmF0dHIoJ2ZyZXEnLDMwMClcclxuICAgICAgICAgICAgICAgIC5hdHRyKCdhY3Rpb24nLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc2VlZCA9IE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5zdHlsZSgnYm94U2hhZG93JywnMCAwICcrKHNlZWQqNDArMTApKydweCAjZWNjYzY4Jyk7XHJcbiAgICAgICAgICAgICAgICB9KS5pbnNlcnQoKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5hdHRyKCdkZWFjdGl2YXRlJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2lyY2xlQW4ucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY2lyY2xlQW4yLnJlbW92ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgYmFja2dyb3VuZC5hcHBlbmRFbGVtZW50KGNpcmNsZSk7XHJcblxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBiYWNrZ3JvdW5kOyIsImltcG9ydCBDdWJZX0RPTSBmcm9tICcuLi9GcmFtZXdvcmsvQ3ViWS9DdWJZX0RPTSc7XHJcblxyXG52YXIgaGVhZGVyID0gbmV3IEN1YllfRE9NKCdkaXYnLCAnaGVhZGVyJylcclxuICAgIC5hdHRyKCdvbnNlbGVjdHN0YXJ0JywgJ3JldHVybiBmYWxzZTsnKVxyXG4gICAgLnN0eWxlKCdkaXNwbGF5JywgJ2ZsZXgnKVxyXG4gICAgLnN0eWxlKCdwb3NpdGlvbicsICdhYnNvbHV0ZScpXHJcbiAgICAuc3R5bGUoJ29wYWNpdHknLCAnMC41JylcclxuICAgIC5zdHlsZSgndG9wJywgJzFlbScpXHJcbiAgICAuc3R5bGUoJ2hlaWdodCcsICczZW0nKVxyXG4gICAgLnN0eWxlKCd6SW5kZXgnLCAnMTAnKVxyXG4gICAgLnN0eWxlKCd0cmFuc2l0aW9uJywgJzAuM3MnKVxyXG4gICAgLm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5zdHlsZSgnb3BhY2l0eScsICcxJylcclxuICAgIH0pXHJcbiAgICAub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5zdHlsZSgnb3BhY2l0eScsICcwLjUnKVxyXG4gICAgfSk7XHJcblxyXG52YXIgaGVhZGVySXRlbXMgPSBbJ01lbnUnLCAnUGxheWdyb3VuZCcsICdBYm91dCBNZSddO1xyXG52YXIgaW5kZXggPSAwO1xyXG5oZWFkZXJJdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICBoZWFkZXJJdGVtc1tpbmRleCsrXSA9IGhlYWRlci5hcHBlbmQoJ2RpdicsICdoZWFkZXJfJyArIGl0ZW0pXHJcbiAgICAgICAgLmNvbnRlbnQoaXRlbSlcclxuICAgICAgICAuYXBwZW5kQ2xhc3MoJ3h4JylcclxuICAgICAgICAuc3R5bGUoJ2NvbG9yJywgJ3doaXRlJylcclxuICAgICAgICAuc3R5bGUoJ3BhZGRpbmcnLCAnMWVtIDAuNWVtJylcclxuICAgICAgICAuc3R5bGUoJ2N1cnNvcicsICdwb2ludGVyJylcclxuICAgICAgICAuc3R5bGUoJ3RleHRTaGFkb3cnLCAnMCAwIDEwcHggI2VjY2M2OCcpXHJcbiAgICAgICAgLnN0eWxlKCd0cmFuc2l0aW9uJywgJzAuM3MnKVxyXG4gICAgICAgIC5vbignbW91c2VvdmVyJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLnN0eWxlKCd0ZXh0U2hhZG93JywgJzAgMCAxMHB4ICNlY2NjNjgnKVxyXG4gICAgICAgICAgICAgICAgLnN0eWxlKCdjb2xvcicsICcjZWNjYzY4Jyk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3R5bGUoJ3RleHRTaGFkb3cnLCAnMCAwIDIwcHggI2VjY2M2OCcpXHJcbiAgICAgICAgICAgICAgICAuc3R5bGUoJ2NvbG9yJywgJ3doaXRlJyk7XHJcbiAgICAgICAgfSk7XHJcbn0pO1xyXG52YXIgaGVhZGVyTWVudUJ1dHRvbiA9IGhlYWRlckl0ZW1zWzBdO1xyXG5oZWFkZXJNZW51QnV0dG9uLnN0eWxlKCdwb3NpdGlvbicsICdyZWxhdGl2ZScpO1xyXG52YXIgbWVudUNvbnRhaW5lciA9IGhlYWRlck1lbnVCdXR0b24uYXBwZW5kKCdkaXYnLCAnbWVudUNvbnRhaW5lcicpXHJcbiAgICAuc3R5bGUoJ3Bvc2l0aW9uJywgJ2Fic29sdXRlJylcclxuICAgIC5zdHlsZSgnd2lkdGgnLCAnMjU2cHgnKVxyXG4gICAgLnN0eWxlKCdoZWlnaHQnLCAnMHB4JylcclxuICAgIC5zdHlsZSgnYmFja2dyb3VuZCcsICcnKVxyXG4gICAgLnN0eWxlKCd0b3AnLCAnMTI1JScpXHJcbiAgICAuc3R5bGUoJ2xlZnQnLCAnMCcpXHJcbiAgICAuc3R5bGUoJ292ZXJmbG93JywgJ2hpZGRlbicpXHJcbiAgICAuc3R5bGUoJ3RyYW5zaXRpb24nLCAnMC4zcycpXHJcbiAgICAuc2V0VXBkYXRlcigndG9nZ2xlTWVudScsIGZ1bmN0aW9uIChkKSB7XHJcbiAgICAgICAgbGV0IGhhc09wZW4gPSB0aGlzLmhhc09wZW4gfHwgZmFsc2U7XHJcbiAgICAgICAgaWYgKGhhc09wZW4pIHtcclxuICAgICAgICAgICAgdGhpcy5zdHlsZSgnaGVpZ2h0JywgJzAnKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3R5bGUoJ2hlaWdodCcsICczM3ZoJylcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5oYXNPcGVuID0gIWhhc09wZW47XHJcbiAgICB9KVxyXG4gICAgLnNldFVwZGF0ZXIoJ2Nsb3NlTWVudScsIGZ1bmN0aW9uIChkKSB7XHJcbiAgICAgICAgdGhpcy5zdHlsZSgnaGVpZ2h0JywgJzAnKVxyXG4gICAgICAgICAgICAuc3R5bGUoJ2JveFNoYWRvdycsICcwcHggMHB4IDVweCByZ2JhKDExMiwgMTYxLCAyNTUsMCknKVxyXG4gICAgICAgICAgICAuc3R5bGUoJ2JvcmRlcicsICcxcHggc29saWQgcmdiYSgxMTIsIDE2MSwgMjU1LCAwKScpO1xyXG4gICAgICAgIHRoaXMuaGFzT3BlbiA9IGZhbHNlO1xyXG4gICAgfSk7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgbWVudUNvbnRhaW5lci51cGRhdGVyKCdjbG9zZU1lbnUnKSgpO1xyXG59KTtcclxuXHJcbmhlYWRlck1lbnVCdXR0b24ub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBtZW51Q29udGFpbmVyLnVwZGF0ZXIoJ3RvZ2dsZU1lbnUnKSgpO1xyXG59KTtcclxuXHJcbnZhciBtZW51Q29udGVudHMgPSBtZW51Q29udGFpbmVyLmFwcGVuZCgndWwnKVxyXG4gICAgLnN0eWxlKCdwYWRkaW5nTGVmdCcsICcyZW0nKVxyXG4gICAgLnN0eWxlKCdtYXJnaW4nLCAnMCcpO1xyXG5cclxudmFyIG1lbnVJdGVtcyA9IFsnSG9tZScsICdNYXkgQ29taW5nIHNvb24nLCAnUHJvYmFibHkgQ29taW5nIHNvb24nXTtcclxuaW5kZXggPSAwO1xyXG5cclxubWVudUl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgIG1lbnVJdGVtc1tpbmRleCsrXSA9IG1lbnVDb250ZW50cy5hcHBlbmQoJ2xpJywgJ21lbnVfJyArIGl0ZW0pXHJcbiAgICAgICAgLmNvbnRlbnQoaXRlbSlcclxuICAgICAgICAuc3R5bGUoJ2NvbG9yJywgJ3doaXRlJylcclxuICAgICAgICAuc3R5bGUoJ3BhZGRpbmcnLCAnMWVtIDAuNWVtJylcclxuICAgICAgICAuc3R5bGUoJ2N1cnNvcicsICdwb2ludGVyJylcclxuICAgICAgICAuc3R5bGUoJ3RleHRTaGFkb3cnLCAnMCAwIDEwcHggI2VjY2M2OCcpXHJcbiAgICAgICAgLnN0eWxlKCd0cmFuc2l0aW9uJywgJzAuM3MnKVxyXG4gICAgICAgIC5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGNjLnN0b3JlVmFsdWUoJ2N1cnJlbnRWaWV3JywgaXRlbSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAub24oJ21vdXNlb3ZlcicsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5zdHlsZSgndGV4dFNoYWRvdycsICcwIDAgMTBweCAjZWNjYzY4JylcclxuICAgICAgICAgICAgICAgIC5zdHlsZSgnY29sb3InLCAnI2VjY2M2OCcpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLnN0eWxlKCd0ZXh0U2hhZG93JywgJzAgMCAyMHB4ICNlY2NjNjgnKVxyXG4gICAgICAgICAgICAgICAgLnN0eWxlKCdjb2xvcicsICd3aGl0ZScpO1xyXG4gICAgICAgIH0pO1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhlYWRlcjsiLCJpbXBvcnQgQ3ViWV9ET00gZnJvbSAnLi9GcmFtZXdvcmsvQ3ViWS9DdWJZX0RPTSc7XHJcblxyXG5cclxudmFyIG1haW5Db250ZW50ID0gbmV3IEN1YllfRE9NKCdkaXYnLCdob21lQ29udGVudCcpO1xyXG5tYWluQ29udGVudC5zdHlsZSgnd2lkdGgnLCcxMDB2dycpXHJcbiAgICAuc3R5bGUoJ2hlaWdodCcsJzEwMHZoJylcclxuICAgIC5zdHlsZSgnYmFja2dyb3VuZCcsJyMyMjJmM2UnKVxyXG4gICAgLnN0eWxlKCdwb3NpdGlvbicsJ3JlbGF0aXZlJylcclxuICAgIC5zdHlsZSgndHJhbnNpdGlvbicsICc1cycpXHJcbiAgICAuc3R5bGUoJ292ZXJmbG93JywnaGlkZGVuJylcclxuICAgIC5hcHBlbmRDbGFzcygnbWFpbkNvbnRlbnQnKTtcclxudmFyIGJhY2tncm91bmRBbiA9IGNyLmFwcGVuZCgnYmFja2dyb3VuZEFuJylcclxuICAgIC5hdHRyKCdmcmVxJywzMDApXHJcbiAgICAuYXR0cigncmVwZWF0JywxKVxyXG4gICAgLmF0dHIoJ2FjdGlvbicsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIG1haW5Db250ZW50LnN0eWxlKCdiYWNrZ3JvdW5kJywndHJhbnNwYXJlbnQnKVxyXG4gICAgfSkuaW5zZXJ0KCk7XHJcblxyXG52YXIgaGVhZExpbmUgPSBtYWluQ29udGVudC5hcHBlbmQoJ2gxJywnaGVhZExpbmUnKVxyXG4gICAgLmNvbnRlbnQoJ0ZST05UIEVORCBFTkdJTkVFUicpXHJcbiAgICAuc3R5bGUoJ3Bvc2l0aW9uJywnZml4ZWQnKVxyXG4gICAgLnN0eWxlKCdjb2xvcicsJ3doaXRlJylcclxuICAgIC5zdHlsZSgnd2lkdGgnLCcxMDAlJylcclxuICAgIC5zdHlsZSgnaGVpZ2h0JywgJzYwcHgnKVxyXG4gICAgLnN0eWxlKCd0ZXh0QWxpZ24nLCdjZW50ZXInKVxyXG4gICAgLnN0eWxlKCdsZWZ0JywnMCcpXHJcbiAgICAuc3R5bGUoJ3JpZ2h0JywnMCcpXHJcbiAgICAuc3R5bGUoJ2JvdHRvbScsJzMzJScpXHJcbiAgICAuc3R5bGUoJ21hcmdpbicsJ2F1dG8nKVxyXG4gICAgLnN0eWxlKCdmb250U2l6ZScsJzY0cHgnKVxyXG4gICAgLnN0eWxlKCd0cmFuc2l0aW9uJywgJzFzJylcclxuICAgIC5zdHlsZSgnb3BhY2l0eScsIDApXHJcbiAgICAuc3R5bGUoJ3RleHRTaGFkb3cnLCcwIDAgMTBweCAjNzBhMWZmJylcclxuICAgIC5zdHlsZSgnekluZGV4JywxKVxyXG4gICAgLm9uKCdtb3VzZW92ZXInLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnN0eWxlKCd0ZXh0U2hhZG93JywnMCAwIDMwcHggI2VjY2M2OCcpXHJcbiAgICB9KVxyXG4gICAgLm9uKCdtb3VzZWxlYXZlJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5zdHlsZSgndGV4dFNoYWRvdycsJzAgMCAxMHB4ICM3MGExZmYnKVxyXG4gICAgfSlcclxuICAgIC5hdHRyKCdhY3RpdmF0ZScsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBzZXRUaW1lb3V0KFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLnN0eWxlKCdvcGFjaXR5JywgMSlcclxuICAgICAgICAgICAgfSwzMDBcclxuICAgICAgICApXHJcblxyXG4gICAgfSlcclxuICAgIC5hdHRyKCdkZWFjdGl2YXRlJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5zdHlsZSgnb3BhY2l0eScsIDApXHJcbiAgICB9KTtcclxudmFyIGhvbWVIZWFkTGluZUFuaW1hdGlvbiA9IGNyLmFwcGVuZCgnaG9tZV9oZWFkTGluZV9hbmltYXRpb24nKVxyXG4gICAgLmF0dHIoJ2ZyZXEnLDMwMClcclxuICAgIC5hdHRyKCdhY3Rpb24nLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBsZXQgb2RkID0gTWF0aC5yYW5kb20oKSoxMDA7XHJcbiAgICAgICAgaWYob2RkPjUwKXtcclxuICAgICAgICAgICAgaGVhZExpbmUuc3R5bGUoJ3RleHRTaGFkb3cnLCcwIDAgMzBweCAjZWNjYzY4JylcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgaGVhZExpbmUuc3R5bGUoJ3RleHRTaGFkb3cnLCcwIDAgMTBweCAjNzBhMWZmJylcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgLmluc2VydCgpO1xyXG5cclxudmFyIHN1YkhlYWRMaW5lID0gbWFpbkNvbnRlbnQuYXBwZW5kKCdoMScsJ3N1YkhlYWRMaW5lJylcclxuICAgIC5jb250ZW50KCctIHdobyBtYWtlcyBkYXRhIGFsaXZlIC0nKVxyXG4gICAgLnN0eWxlKCdwb3NpdGlvbicsJ2ZpeGVkJylcclxuICAgIC5zdHlsZSgnY29sb3InLCcjZWNjYzY4JylcclxuICAgIC5zdHlsZSgnd2lkdGgnLCcxMDAlJylcclxuICAgIC5zdHlsZSgnaGVpZ2h0JywgJzMwcHgnKVxyXG4gICAgLnN0eWxlKCd0ZXh0QWxpZ24nLCdjZW50ZXInKVxyXG4gICAgLnN0eWxlKCdsZWZ0JywnMCcpXHJcbiAgICAuc3R5bGUoJ3JpZ2h0JywnMCcpXHJcbiAgICAuc3R5bGUoJ2JvdHRvbScsJzMwJScpXHJcbiAgICAuc3R5bGUoJ21hcmdpbicsJ2F1dG8nKVxyXG4gICAgLnN0eWxlKCdmb250U2l6ZScsJzMycHgnKVxyXG4gICAgLnN0eWxlKCd0cmFuc2l0aW9uJywgJzFzJylcclxuICAgIC5zdHlsZSgnb3BhY2l0eScsIDApXHJcbiAgICAuc3R5bGUoJ3RleHRTaGFkb3cnLCcwIDAgMTBweCAjZWNjYzY4JylcclxuICAgIC5zdHlsZSgnekluZGV4JywxKS5hdHRyKCdhY3RpdmF0ZScsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBzZXRUaW1lb3V0KFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLnN0eWxlKCdvcGFjaXR5JywgMSlcclxuICAgICAgICAgICAgfSwzMDBcclxuICAgICAgICApXHJcblxyXG4gICAgfSlcclxuICAgIC5hdHRyKCdkZWFjdGl2YXRlJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5zdHlsZSgnb3BhY2l0eScsIDApXHJcbiAgICB9KTtcclxudmFyIGluZm9CdXR0b25IYWxvID0gbWFpbkNvbnRlbnQuYXBwZW5kKCdzcGFuJywnaW5mb0J1dHRvbkhhbG8nKVxyXG4gICAgLnN0eWxlKCdwb3NpdGlvbicsJ2ZpeGVkJylcclxuICAgIC5zdHlsZSgnY29sb3InLCcjZWNjYzY4JylcclxuICAgIC5zdHlsZSgnd2lkdGgnLCczMnB4JylcclxuICAgIC5zdHlsZSgnaGVpZ2h0JywgJzMycHgnKVxyXG4gICAgLnN0eWxlKCdvcGFjaXR5JywgMClcclxuICAgIC5zdHlsZSgnb3ZlcmZsb3cnLCdoaWRkZW4nKVxyXG4gICAgLnN0eWxlKCdib3JkZXJSYWRpdXMnLCc0cHgnKVxyXG4gICAgLnN0eWxlKCd0ZXh0QWxpZ24nLCdjZW50ZXInKVxyXG4gICAgLnN0eWxlKCdsZWZ0JywnMCcpXHJcbiAgICAuc3R5bGUoJ3JpZ2h0JywnMCcpXHJcbiAgICAuc3R5bGUoJ2JvdHRvbScsJzE4JScpXHJcbiAgICAuc3R5bGUoJ21hcmdpbicsJ2F1dG8nKVxyXG4gICAgLnN0eWxlKCdmb250U2l6ZScsJzI0cHgnKVxyXG4gICAgLnN0eWxlKCd0cmFuc2l0aW9uJywgJzAuNXMnKVxyXG4gICAgLnN0eWxlKCdib3JkZXInLCcxcHggc29saWQgI2VjY2M2OCcpXHJcbiAgICAuc3R5bGUoJ2JveFNoYWRvdycsJzAgMCAzMHB4ICNlY2NjNjgnKVxyXG4gICAgLnN0eWxlKCdjdXJzb3InLCdwb2ludGVyJylcclxuICAgIC5zdHlsZSgnekluZGV4JywxKVxyXG4gICAgLmF0dHIoJ2FjdGl2YXRlJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHNldFRpbWVvdXQoXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYuc3R5bGUoJ29wYWNpdHknLCAxKVxyXG4gICAgICAgICAgICB9LDMwMFxyXG4gICAgICAgIClcclxuXHJcbiAgICB9KVxyXG4gICAgLmF0dHIoJ2RlYWN0aXZhdGUnLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnN0eWxlKCdvcGFjaXR5JywgMClcclxuICAgIH0pO1xyXG52YXIgaW5mb0J1dHRvbiA9IG1haW5Db250ZW50LmFwcGVuZCgnc3BhbicsJ2luZm9CdXR0b24nKVxyXG4gICAgLmNvbnRlbnQoJ1dhbm5hIGtub3cgbW9yZT8nKVxyXG4gICAgLnN0eWxlKCdwb3NpdGlvbicsJ2ZpeGVkJylcclxuICAgIC5zdHlsZSgnY29sb3InLCcjZWNjYzY4JylcclxuICAgIC5zdHlsZSgnd2lkdGgnLCczMnB4JylcclxuICAgIC5zdHlsZSgnaGVpZ2h0JywgJzMycHgnKVxyXG4gICAgLnN0eWxlKCdvdmVyZmxvdycsJ2hpZGRlbicpXHJcbiAgICAuc3R5bGUoJ2JvcmRlcicsJzFweCBzb2xpZCB0cmFuc3BhcmVudCcpXHJcbiAgICAuc3R5bGUoJ2JvcmRlclJhZGl1cycsJzRweCcpXHJcbiAgICAuc3R5bGUoJ3RleHRBbGlnbicsJ2NlbnRlcicpXHJcbiAgICAuc3R5bGUoJ2xlZnQnLCcwJylcclxuICAgIC5zdHlsZSgnb3BhY2l0eScsIDApXHJcbiAgICAuc3R5bGUoJ3JpZ2h0JywnMCcpXHJcbiAgICAuc3R5bGUoJ2JvdHRvbScsJzE4JScpXHJcbiAgICAuc3R5bGUoJ21hcmdpbicsJ2F1dG8nKVxyXG4gICAgLnN0eWxlKCdmb250U2l6ZScsJzI0cHgnKVxyXG4gICAgLnN0eWxlKCd0cmFuc2l0aW9uJywgJzAuNXMnKVxyXG4gICAgLnN0eWxlKCdiYWNrZ3JvdW5kJywgJyNlY2NjNjgnKVxyXG4gICAgLnN0eWxlKCd0ZXh0U2hhZG93JywnMCAwIDVweCAjZWNjYzY4JylcclxuICAgIC5zdHlsZSgnYm94U2hhZG93JywnMCAwIDEweCAjZWNjYzY4JylcclxuICAgIC5zdHlsZSgnY3Vyc29yJywncG9pbnRlcicpXHJcbiAgICAuc3R5bGUoJ3pJbmRleCcsMSlcclxuICAgIC5hdHRyKCdhY3RpdmF0ZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgc2V0VGltZW91dChcclxuICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5zdHlsZSgnb3BhY2l0eScsIDEpXHJcbiAgICAgICAgICAgIH0sMzAwXHJcbiAgICAgICAgKSxcclxuICAgICAgICB0aGlzLnN0eWxlKCdiYWNrZ3JvdW5kJywgJyNlY2NjNjgnKVxyXG4gICAgICAgICAgICAuc3R5bGUoJ3dpZHRoJywnMzJweCcpXHJcbiAgICAgICAgICAgIC5zdHlsZSgnYm94U2hhZG93JywnMCAwIDEwcHggI2VjY2M2OCcpO1xyXG4gICAgICAgIGluZm9CdXR0b24ub3ZlcmVkID0gZmFsc2U7XHJcblxyXG4gICAgfSlcclxuICAgIC5vbignY2xpY2snLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjYy5zdG9yZVZhbHVlKCdjdXJyZW50VmlldycsJ2Fib3V0Jyk7XHJcbiAgICB9KVxyXG4gICAgLm9uKCdtb3VzZW92ZXInLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnN0eWxlKCdiYWNrZ3JvdW5kJywncmdiYSgwLCAwLCAwLCAwLjUpJylcclxuICAgICAgICAgICAgLnN0eWxlKCd3aWR0aCcsJzEwMCUnKVxyXG4gICAgICAgICAgICAuc3R5bGUoJ2JveFNoYWRvdycsJycpO1xyXG4gICAgICAgIGluZm9CdXR0b25IYWxvLnN0eWxlKCdvcGFjaXR5JywgMCk7XHJcbiAgICAgICAgaW5mb0J1dHRvbi5vdmVyZWQgPSB0cnVlO1xyXG4gICAgfSlcclxuICAgIC5vbignbW91c2VsZWF2ZScsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuc3R5bGUoJ2JhY2tncm91bmQnLCAnI2VjY2M2OCcpXHJcbiAgICAgICAgICAgIC5zdHlsZSgnd2lkdGgnLCczMnB4JylcclxuICAgICAgICAgICAgLnN0eWxlKCdib3hTaGFkb3cnLCcwIDAgMTBweCAjZWNjYzY4Jyk7XHJcbiAgICAgICAgaW5mb0J1dHRvbi5vdmVyZWQgPSBmYWxzZTtcclxuICAgIH0pO1xyXG52YXIgaW5mb0J1dHRvbkhhbG9BbiA9IGNyLmFwcGVuZCgnaW5mb0J1dHRvbkhhbG9BbicpXHJcbiAgICAuYXR0cignZnJlcScsNjAwKVxyXG4gICAgLmF0dHIoJ2FjdGlvbicsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmKGluZm9CdXR0b24ub3ZlcmVkID09PSB0cnVlKXtcclxuICAgICAgICAgICAgaW5mb0J1dHRvbkhhbG8uc3RhdGUgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzd2l0Y2goaW5mb0J1dHRvbkhhbG8uc3RhdGUpe1xyXG4gICAgICAgICAgICBjYXNlIHVuZGVmaW5lZDpcclxuICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgaW5mb0J1dHRvbkhhbG8uc3RhdGUgPSAxO1xyXG4gICAgICAgICAgICAgICAgaW5mb0J1dHRvbkhhbG8uc3R5bGUoJ3dpZHRoJywgJzY0cHgnKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdHlsZSgnYm90dG9tJywnY2FsYygxOCUgLSAxNXB4KScpXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0eWxlKCdoZWlnaHQnLCAnNjRweCcpXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0eWxlKCdvcGFjaXR5JywgMCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgaW5mb0J1dHRvbkhhbG8uc3RhdGUgPSAyO1xyXG4gICAgICAgICAgICAgICAgaW5mb0J1dHRvbkhhbG8uc3R5bGUoJ3dpZHRoJywgJzMycHgnKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdHlsZSgnYm90dG9tJywnMTglJylcclxuICAgICAgICAgICAgICAgICAgICAuc3R5bGUoJ2hlaWdodCcsICczMnB4Jyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgaW5mb0J1dHRvbkhhbG8uc3RhdGUgPSAwO1xyXG4gICAgICAgICAgICAgICAgaW5mb0J1dHRvbkhhbG8uc3R5bGUoJ29wYWNpdHknLCAxKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH0pLmluc2VydCgpO1xyXG5leHBvcnQgZGVmYXVsdCBtYWluQ29udGVudDsiLCIvKipcclxuICogQ3JlYXRlZCBieSBBbnhpbiBZYW5nIG9uIDMvMjgvMjAxOC5cclxuICovXHJcbmltcG9ydCBDQyBmcm9tICcuL0ZyYW1ld29yay9DdWJZL0N1YllfQ29yZSc7XHJcbmltcG9ydCBDdWJZX0RPTSBmcm9tICcuL0ZyYW1ld29yay9DdWJZL0N1YllfRE9NJztcclxuaW1wb3J0IENSIGZyb20gJy4vRnJhbWV3b3JrL0N1YlkvQ3ViWV9Sb3V0aW5lJztcclxuaW1wb3J0IGhvbWVDb250ZW50IGZyb20gJy4vaG9tZSc7XHJcbmltcG9ydCBoZWFkZXIgZnJvbSAnLi9jb21wb25lbnRzL2hlYWRlcidcclxuaW1wb3J0IGJhY2tncm9uZCBmcm9tICcuL2NvbXBvbmVudHMvYmFja2dyb3VuZF9zdGFycydcclxuXHJcbiAgICB3aW5kb3cucm9vdCA9IG5ldyBDdWJZX0RPTSgnZGl2JywgJ2F4X3Jvb3QnLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpO1xyXG4gICAgcm9vdC5zdHlsZSgnZm9udFNpemUnLCAnMTJweCcpXHJcbiAgICAgICAgLnN0eWxlKCdjdXJzb3InLCAndXJsKCksIGF1dG8nKTtcclxuICAgIHJvb3QuYXBwZW5kRWxlbWVudChoZWFkZXIpO1xyXG4gICAgdmFyIG1haW5Db250YWluZXIgPSByb290LmFwcGVuZCgnZGl2JywgJ21haW5Db250YWluZXInKTtcclxuICAgIG1haW5Db250YWluZXIuYXBwZW5kRWxlbWVudChob21lQ29udGVudCk7XHJcbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZEVsZW1lbnQoYmFja2dyb25kKTtcclxuICAgIGNjLnN0b3JlVmFsdWUoJ2N1cnJlbnRWaWV3JywnSG9tZScpO1xyXG4gICAgY2MuY29ubmVjdCgnY3VycmVudFZpZXcnLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBsZXQgY3VycmVudFZpZXcgPSBjYy5nZXRWYWx1ZSgnY3VycmVudFZpZXcnKTtcclxuICAgICAgICBtYWluQ29udGFpbmVyLnJlbW92ZSgnLm1haW5Db250ZW50Jyk7XHJcbiAgICAgICAgc3dpdGNoIChjdXJyZW50Vmlldyl7XHJcbiAgICAgICAgICAgIGNhc2UgJ0hvbWUnOlxyXG4gICAgICAgICAgICAgICAgbWFpbkNvbnRhaW5lci5hcHBlbmRFbGVtZW50KGhvbWVDb250ZW50KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHZhciB2ZXJzaW9uID0gcm9vdC5hcHBlbmQoJ3AnLCAndmVyc2lvbicpXHJcbiAgICAgICAgLnN0eWxlKCdwb3NpdGlvbicsICdmaXhlZCcpXHJcbiAgICAgICAgLnN0eWxlKCdib3R0b20nLCAnMHB4JylcclxuICAgICAgICAuc3R5bGUoJ3JpZ2h0JywgJzAnKVxyXG4gICAgICAgIC5zdHlsZSgncGFkZGluZ1JpZ2h0JywgJzFlbScpXHJcbiAgICAgICAgLnN0eWxlKCdjb2xvcicsICdsaWdodGdyYXknKVxyXG4gICAgICAgIC5jb250ZW50KG5ldyBEYXRlKCkpXHJcbiAgICAgICAgLnNldFVwZGF0ZXIoJ3RpbWVyJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRlbnQoJ0N1YllfUm91dGluZTogTGFzckN5Y2xlVGltZTogJyArIGNyLmxhc3RDeWNsZVRpbWUgKyAnbXMgfCBDUFM6JyArIGNyLmN5Y2xlUGVyU2VjICsgJyB8TG9uZ2VzdDogJyArIGNyLmxvbmdlc3RSb3V0aW5lVGltZSArICdtcyB8IExhc3Q6JyArIGNyLmxhc3RSb3V0aW5lVGltZSArICdtcycpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgdmFyIHRpbWVyID0gY3IuYXBwZW5kKCd0aW1lcicpXHJcbiAgICAgICAgLmF0dHIoJ2ZyZXEnLCAxKVxyXG4gICAgICAgIC5hdHRyKCdhY3Rpb24nLCB2ZXJzaW9uLnVwZGF0ZXIoJ3RpbWVyJykpXHJcbiAgICAgICAgLmluc2VydCgpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9