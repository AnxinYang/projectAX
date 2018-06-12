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
                try {
                    var value = self.getValue(_key);
                    action(value);
                } catch (e) {
                    //var index = actionList.indexOf(action);
                    //actionList.splice(index,1);
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
            /*this.childrenList.forEach(function (child) {
                child.remove();
            });*/
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

        this.tickSpeed = _tickSpeed || 1;
        var options = _options || {};
        this.init(options);
        this.MAX_CYCLE = MAX_CYCLE;
    }

    _createClass(CubY_Routine, [{
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

    return CubY_Routine;
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

var cr = new CubY_Routine();
window.cr = cr;
exports.default = cr;

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
var backgroundAn = cr.append('backgroundAn').attr('freq', 200).attr('executionTimes', 1).attr('action', function () {
    mainContent.style('background', 'black');
}).insert();

var headLine = mainContent.append('h1', 'headLine').content('FRONT END ENGINEER').style('position', 'fixed').style('color', 'white').style('width', '100%').style('height', '60px').style('text-align', 'center').style('left', '0').style('right', '0').style('bottom', '33%').style('margin', 'auto').style('font-size', '64px').style('transition', '1s').style('text-shadow', '0 0 10px #70a1ff').style('z-index', 1).on('mouseover', function () {
    this.style('text-shadow', '0 0 30px #eccc68');
}).on('mouseleave', function () {
    this.style('text-shadow', '0 0 10px #70a1ff');
});
var homeHeadLineAnimation = cr.append('home_headLine_animation').attr('freq', 25).attr('action', function () {
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
var infoButtonHaloAn = cr.append('infoButtonHaloAn').attr('freq', 60).attr('action', function () {
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
    var circle = mainContent.append('div').style('position', 'absolute').style('width', '20px').style('height', '20px').style('border-radius', '4px').style('background', '#eccc68').style('transition', '0.1s linear').style('box-shadow', '0 0 10px #eccc68').style('opacity', '0').style('transform', 'translate(' + x + 'px,' + y + 'px)');

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


var _CubY_Core = __webpack_require__(/*! ./Framework/CubY/CubY_Core */ "./src/Framework/CubY/CubY_Core.js");

var _CubY_Core2 = _interopRequireDefault(_CubY_Core);

var _CubY_DOM = __webpack_require__(/*! ./Framework/CubY/CubY_DOM */ "./src/Framework/CubY/CubY_DOM.js");

var _CubY_DOM2 = _interopRequireDefault(_CubY_DOM);

var _CubY_Routine = __webpack_require__(/*! ./Framework/CubY/CubY_Routine */ "./src/Framework/CubY/CubY_Routine.js");

var _CubY_Routine2 = _interopRequireDefault(_CubY_Routine);

var _home = __webpack_require__(/*! ./home */ "./src/home.js");

var _home2 = _interopRequireDefault(_home);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

/**
 * Created by Anxin Yang on 3/28/2018.
 */
try {
    window.addEventListener('click', function (e) {
        menuContainer.updater('closeMenu')();
    });
    window.root = new _CubY_DOM2.default('div', 'ax_root', document.getElementById('app'));
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
    cc.storeValue('currentView', 'home');
    cc.connect('currentView', function () {
        var currentView = cc.getValue('currentView');
        mainContainer.remove();
    });

    var version = root.append('p', 'version').style('position', 'fixed').style('bottom', '0px').style('right', '0').style('padding-right', '1em').style('color', 'lightgray').content(new Date()).setUpdater('timer', function () {
        this.content('CubY_Routine: LasrCycleTime: ' + cr.lastCycleTime + 'ms | CPS:' + cr.cyclePerSec + ' |Longest: ' + cr.longestRoutineTime + 'ms | Last:' + cr.lastRoutineTime + 'ms');
    });
    var timer = cr.append('timer').attr('freq', 1).attr('action', version.updater('timer')).insert();
    var menuContents = menuContainer.append('ul').style('padding-left', '2em').style('margin', '0');
    var menuItems = ['Coming soon', 'May Coming soon', 'Probably Coming soon'];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0ZyYW1ld29yay9DdWJZL0N1YllfQ29yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRnJhbWV3b3JrL0N1YlkvQ3ViWV9ET00uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0ZyYW1ld29yay9DdWJZL0N1YllfUm91dGluZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkVBLElBQU0saUJBQWlCLDBCQUFNLENBQTdCOzs0QkFFSTt1QkFBWSxRQUFPOzhCQUNmOztZQUFJLFFBQVEsU0FDWjtZQUFJLE9BQ0o7YUFBSyxLQUNSOzs7OztxQ0FFRztnQkFBSSxRQUFRLFVBQ1o7aUJBQUssWUFBWSxNQUFNLFNBQ3ZCO2lCQUFLLFVBQ0w7aUJBQUssWUFDTDtpQkFBSyxVQUFVLEtBQ2Y7bUJBQU8sS0FDVjs7OztxQ0FHRztnQkFBSSxPQUNKO2dCQUFJLFdBQ0o7Z0JBQUksVUFDSjtnQkFBSSxDQUFDLENB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LE1BQ25DLE1BQU0sZ0JBQWdCLE9BQ3RCLE1BQU0sVUFDWDtRQUFJLFlBQVksQ0FBQyxlQUFlLG1CQUNoQztZQUNBO2NBQVUsUUFBUSxVQUFVLE1BQ3hCO2tCQUFVLHdCQUF3QixPQUFPLE1BQU0sVUFBVSxNQUNwRCxRQUFRLE1BQ1IsTUFBTSxTQUFTLFNBQ2YsTUFBTSxXQUFXLGFBQ2pCLE1BQU0sVUFBVSxXQUNoQixNQUFNLGVBQWUsb0JBQ3JCLE1BQU0sY0FBYyxRQUNwQixHQUFHLGFBQWEsWUFDYjtpQkFBSyxNQUFNLGVBQWUsb0JBQ3JCLE1BQU0sU0FDZDtBQVZnQixXQVdoQixHQUFHLGNBQWMsWUFDZDtpQkFBSyxNQUFNLGVBQWUsb0JBQ3JCLE1BQU0sU0FDZDtBQUNSO0FBQ0o7QUFySUQsRUFxSUMsT0FBTyxHQUNKO2FBQVMsZUFBZSxPQUFPLFlBQ2xDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiY29uc3QgRU1QVFlfRlVOQ1RJT04gPSAoKT0+e307XHJcbmNsYXNzIEN1YllfQ29yZXtcclxuICAgIGNvbnN0cnVjdG9yKF9wcm9wcyl7XHJcbiAgICAgICAgbGV0IHByb3BzID0gcHJvcHMgfHwge307XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuaW5pdChwcm9wcyk7XHJcbiAgICB9XHJcbiAgICBpbml0KF9wcm9wcyl7XHJcbiAgICAgICAgbGV0IHByb3BzID0gX3Byb3BzIHx8IHt9O1xyXG4gICAgICAgIHRoaXMuZGVidWdNb2RlID0gcHJvcHMuZGVidWcgfHwgZmFsc2U7XHJcbiAgICAgICAgdGhpcy5kYXRhTWFwID0ge307XHJcbiAgICAgICAgdGhpcy5hY3Rpb25NYXAgPSB7fTtcclxuICAgICAgICB0aGlzLmJyb3dzZXIgPSB0aGlzLmdldEJyb3dzZXIoKTtcclxuICAgICAgICB3aW5kb3cuYXggPSB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEJyb3dzZXIoKXtcclxuICAgICAgICBsZXQgaXNJRSA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBpc0Nocm9tZSA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBpc09wZXJhID0gZmFsc2U7XHJcbiAgICAgICAgaWYoKCEhd2luZG93Lm9wciAmJiAhIW9wci5hZGRvbnMpIHx8ICEhd2luZG93Lm9wZXJhIHx8IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignIE9QUi8nKSA+PSAwKXtcclxuICAgICAgICAgICAgaXNPcGVyYSA9IHRydWU7XHJcbiAgICAgICAgICAgIHJldHVybiAnb3BlcmEnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0eXBlb2YgSW5zdGFsbFRyaWdnZXIgIT09ICd1bmRlZmluZWQnKXtcclxuICAgICAgICAgICAgcmV0dXJuICdmaXJlZm94JztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoL2NvbnN0cnVjdG9yL2kudGVzdCh3aW5kb3cuSFRNTEVsZW1lbnQpIHx8IChmdW5jdGlvbiAocCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHAudG9TdHJpbmcoKSA9PT0gXCJbb2JqZWN0IFNhZmFyaVJlbW90ZU5vdGlmaWNhdGlvbl1cIjtcclxuICAgICAgICAgICAgfSkoIXdpbmRvd1snc2FmYXJpJ10gfHwgc2FmYXJpLnB1c2hOb3RpZmljYXRpb24pKXtcclxuICAgICAgICAgICAgcmV0dXJuICdzYWZhcmknO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihmYWxzZSB8fCAhIWRvY3VtZW50LmRvY3VtZW50TW9kZSl7XHJcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgb3V0cHV0ID0gYXJndW1lbnRzWzBdO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gYXJndW1lbnRzW2ldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvYmogPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoa2V5KSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dFtrZXldID0gb2JqW2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgaXNJRSA9dHJ1ZTtcclxuICAgICAgICAgICAgcmV0dXJuICdpZSc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCFpc0lFICYmICEhd2luZG93LlN0eWxlTWVkaWEpe1xyXG4gICAgICAgICAgICByZXR1cm4gJ2VkZ2UnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZighIXdpbmRvdy5jaHJvbWUgJiYgISF3aW5kb3cuY2hyb21lLndlYnN0b3JlKXtcclxuICAgICAgICAgICAgaXNDaHJvbWUgPSB0cnVlXHJcbiAgICAgICAgICAgIHJldHVybiAnY2hyb21lJztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoKGlzQ2hyb21lIHx8IGlzT3BlcmEpICYmICEhd2luZG93LkNTUyl7XHJcbiAgICAgICAgICAgIHJldHVybiAnYmxpbmsnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdG9yZURhdGFBcnJheShfYXJyYXksIF9pZEtleSwgX2l0ZW1Qcm9jZXNzb3IsIF9vcHRpb25zLCBfY2FsbGJhY2spIHtcclxuICAgICAgICB2YXIgb3B0aW9ucyA9IF9vcHRpb25zIHx8IHt9O1xyXG4gICAgICAgIHZhciBpZEtleSA9IF9pZEtleSB8fCAnaWQnO1xyXG4gICAgICAgIHZhciBjYWxsYmFjayA9IF9jYWxsYmFjayB8fCBFTVBUWV9GVU5DVElPTjtcclxuICAgICAgICB2YXIgYXJyYXkgPSBfYXJyYXkgfHwgW107XHJcbiAgICAgICAgdmFyIGl0ZW1MaXN0ID0gW107XHJcbiAgICAgICAgdmFyIGl0ZW1Qcm9jZXNzb3IgPSBfaXRlbVByb2Nlc3NvciB8fCBFTVBUWV9GVU5DVElPTjtcclxuXHJcbiAgICAgICAgYXJyYXkuZm9yRWFjaChmdW5jdGlvbiAoX2l0ZW0pIHtcclxuICAgICAgICAgICAgdmFyIGtleSA9IF9pdGVtW2lkS2V5XTtcclxuICAgICAgICAgICAgaWYgKGtleSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBpdGVtID0gc2VsZi5zdG9yZVZhbHVlKGtleSwgX2l0ZW0sIF9vcHRpb25zKTtcclxuXHJcbiAgICAgICAgICAgIGl0ZW1Qcm9jZXNzb3IoaXRlbSk7XHJcbiAgICAgICAgICAgIGl0ZW1MaXN0LnB1c2goaXRlbSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNhbGxiYWNrKF9hcnJheSwgaXRlbUxpc3QpO1xyXG4gICAgICAgIHJldHVybiBpdGVtTGlzdDtcclxuICAgIH07XHJcblxyXG4gICAgc3RvcmVWYWx1ZShfa2V5LCBfdmFsdWUsIF9vcHRpb25zLCBfY2FsbGJhY2spIHtcclxuICAgICAgICB2YXIgb3B0aW9ucyA9IF9vcHRpb25zIHx8IHt9O1xyXG4gICAgICAgIHZhciBzdG9yZSA9IHRoaXMuZGF0YU1hcDtcclxuICAgICAgICB2YXIga2V5ID0gX2tleTtcclxuICAgICAgICB2YXIgY2FsbGJhY2sgPSBfY2FsbGJhY2sgfHwgRU1QVFlfRlVOQ1RJT047XHJcbiAgICAgICAgdmFyIG5ld1ZhbHVlID0gX3ZhbHVlO1xyXG4gICAgICAgIHZhciBpdGVtID0gc3RvcmVba2V5XSB8fCB7fTtcclxuICAgICAgICBpZihpdGVtID09PSBPYmplY3QoaXRlbSkgJiYgb3B0aW9ucy5vdmVyd3JpdGUhPT10cnVlKSB7XHJcbiAgICAgICAgICAgIGl0ZW0gPSBPYmplY3QuYXNzaWduKGl0ZW0sIG5ld1ZhbHVlKTtcclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIGl0ZW0gPSBuZXdWYWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5kYXRhTWFwW2tleV0gPSBpdGVtO1xyXG5cclxuICAgICAgICBjYWxsYmFjayhpdGVtKTtcclxuICAgICAgICB0aGlzLnJlYWN0KGtleSk7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICB9O1xyXG4gICAgZ2V0VmFsdWUoX2tleSkge1xyXG4gICAgICAgIHZhciBrZXkgPSBfa2V5IHx8ICcnO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFNYXBba2V5XTtcclxuICAgIH07XHJcblxyXG4gICAgY29ubmVjdChfa2V5LF9hY3Rpb24pIHtcclxuICAgICAgICBpZihfa2V5PT09dW5kZWZpbmVkIHx8IF9hY3Rpb249PT11bmRlZmluZWQpe1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgYWN0aW9uTWFwID0gdGhpcy5hY3Rpb25NYXA7XHJcbiAgICAgICAgdmFyIGFjdGlvbkxpc3QgPSBhY3Rpb25NYXBbX2tleV0gfHwgW107XHJcbiAgICAgICAgYWN0aW9uTGlzdC5wdXNoKF9hY3Rpb24pO1xyXG4gICAgICAgIGFjdGlvbk1hcFtfa2V5XSA9IGFjdGlvbkxpc3Q7XHJcbiAgICB9O1xyXG4gICAgcmVhY3QoX2tleSkge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICBpZihfa2V5PT09dW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGFjdGlvbk1hcCA9IHRoaXMuYWN0aW9uTWFwO1xyXG4gICAgICAgIHZhciBhY3Rpb25MaXN0ID0gYWN0aW9uTWFwW19rZXldIHx8IFtdO1xyXG4gICAgICAgIGFjdGlvbkxpc3QuZm9yRWFjaCgoYWN0aW9uKT0+IHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHNlbGYuZ2V0VmFsdWUoX2tleSk7XHJcbiAgICAgICAgICAgICAgICBhY3Rpb24odmFsdWUpO1xyXG4gICAgICAgICAgICB9Y2F0Y2ggKGUpe1xyXG4gICAgICAgICAgICAgICAgLy92YXIgaW5kZXggPSBhY3Rpb25MaXN0LmluZGV4T2YoYWN0aW9uKTtcclxuICAgICAgICAgICAgICAgIC8vYWN0aW9uTGlzdC5zcGxpY2UoaW5kZXgsMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfTtcclxuICAgIGRlYnVnKHN0cikge1xyXG4gICAgICAgIGlmKHRoaXMuZGVidWdNb2RlKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0RFQlVHOiAnICsgc3RyKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcbmNvbnN0IGNjID0gbmV3IEN1YllfQ29yZSgpO1xyXG53aW5kb3cuY2MgPSBjYztcclxuZXhwb3J0IGRlZmF1bHQgY2M7XHJcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFueGluIFlhbmcgb24gNS8yNi8yMDE4LlxyXG4gKi9cclxuaW1wb3J0IEFYQ29yZSBmcm9tICcuL0N1YllfQ29yZSc7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1YllfRE9NIHtcclxuICAgIGNvbnN0cnVjdG9yKF90YWcsX2lkLF9yb290KSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IHRoaXMucmVhZFZhbHVlKF9pZCl8fCAnc2VsZic7XHJcbiAgICAgICAgdGhpcy50YWcgPSB0aGlzLnJlYWRWYWx1ZShfdGFnKSB8fCAnZGl2JztcclxuICAgICAgICB0aGlzLmRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGhpcy50YWcpO1xyXG4gICAgICAgIHRoaXMuZG9tLnNldEF0dHJpYnV0ZSgnaWQnLHRoaXMuaWQpO1xyXG4gICAgICAgIHRoaXMuY2hpbGRyZW5MaXN0ID0gW107XHJcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGUgPSB7fTtcclxuICAgICAgICB0aGlzLmRvbVN0eWxlID0ge307XHJcbiAgICAgICAgdGhpcy51cGRhdGVycyA9IHt9O1xyXG4gICAgICAgIHRoaXMucGFyZW50ID0ge307XHJcblxyXG4gICAgICAgIGlmKF9yb290KXtcclxuICAgICAgICAgICAgX3Jvb3QuYXBwZW5kQ2hpbGQodGhpcy5kb20pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy51cGRhdGVyID0gZnVuY3Rpb24gKG5hbWUpIHtcclxuICAgICAgICAgICAgbGV0IHVwZGF0ZXIgPXRoaXMudXBkYXRlcnNbbmFtZV07XHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZih1cGRhdGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlci5jYWxsKHNlbGYsIHNlbGYuZGF0YSwgYXJndW1lbnRzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBzZXRVcGRhdGVyKG5hbWUsdXBkYXRlcil7XHJcbiAgICAgICAgdGhpcy51cGRhdGVyc1tuYW1lXSA9IHVwZGF0ZXI7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBiaW5kKGRhdGEpe1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBhcHBlbmQoX3RhZyxfaWQpe1xyXG4gICAgICAgIGxldCB0YWcgPSB0aGlzLnJlYWRWYWx1ZShfdGFnKTtcclxuICAgICAgICBsZXQgaWQgPSB0aGlzLnJlYWRWYWx1ZShfaWQpO1xyXG4gICAgICAgIGxldCBlbGVtZW50ID0gbmV3IEN1YllfRE9NKHRhZyxpZCk7XHJcbiAgICAgICAgdGhpcy5hcHBlbmRFbGVtZW50KGVsZW1lbnQpO1xyXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgfVxyXG4gICAgYXBwZW5kRWxlbWVudChDdWJZX0RPTSl7XHJcbiAgICAgICAgbGV0IGVsZW1lbnQgPSB0aGlzLnJlYWRWYWx1ZShDdWJZX0RPTSk7XHJcbiAgICAgICAgZWxlbWVudC5wYXJlbnQgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuY2hpbGRyZW5MaXN0LnB1c2goZWxlbWVudCk7XHJcbiAgICAgICAgdGhpcy5kb20uYXBwZW5kQ2hpbGQoZWxlbWVudC5kb20pO1xyXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgfVxyXG4gICAgYXR0cihrZXksX3ZhbHVlKXtcclxuICAgICAgICBsZXQgdmFsdWUgPSB0aGlzLnJlYWRWYWx1ZShfdmFsdWUpO1xyXG4gICAgICAgIHRoaXMuYXR0cmlidXRlW2tleV0gPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLmRvbS5zZXRBdHRyaWJ1dGUoa2V5LHZhbHVlKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIG9uKGV2ZW50TmFtZSxfdmFsdWUpe1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IF92YWx1ZTtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5vbltldmVudE5hbWVdID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5kb20uYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgdmFsdWUuY2FsbChzZWxmLGUsc2VsZi5kYXRhLClcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIHN0eWxlKF9rZXksX3ZhbHVlKXtcclxuICAgICAgICBsZXQga2V5ID0gdGhpcy5yZWFkVmFsdWUoX2tleSk7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gdGhpcy5yZWFkVmFsdWUoX3ZhbHVlKTtcclxuICAgICAgICB0aGlzLmRvbVN0eWxlW2tleV0gPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLmRvbS5zdHlsZVtrZXldID0gdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBjb250ZW50KF92YWx1ZSl7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gdGhpcy5yZWFkVmFsdWUoX3ZhbHVlKTtcclxuICAgICAgICB0aGlzLmlubmVySFRNTCA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuZG9tLmlubmVySFRNTCA9IHZhbHVlO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgYXBwZW5kQ2xhc3MoX2NsYXNzTmFtZSl7XHJcbiAgICAgICAgbGV0IGNsYXNzTmFtZSA9IHRoaXMucmVhZFZhbHVlKF9jbGFzc05hbWUpO1xyXG4gICAgICAgIGxldCBjbGFzc2VzID0gdGhpcy5jbGFzc2VzIHx8IFtdO1xyXG4gICAgICAgIGNsYXNzZXMucHVzaChjbGFzc05hbWUpO1xyXG4gICAgICAgIHRoaXMuZG9tLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcclxuICAgICAgICB0aGlzLmNsYXNzZXMgPSBjbGFzc2VzO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgc2VsZWN0KF9zZWxlY3Rvcil7XHJcbiAgICAgICAgbGV0IHNlbGVjdG9yID0gX3NlbGVjdG9yLmNoYXJBdCgwKTtcclxuICAgICAgICBsZXQgbmFtZSA9IF9zZWxlY3Rvci5zdWJzdHJpbmcoMSk7XHJcbiAgICAgICAgc3dpdGNoIChzZWxlY3Rvcil7XHJcbiAgICAgICAgICAgIGNhc2UgJyMnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0QnlJZChuYW1lKTtcclxuICAgICAgICAgICAgY2FzZSAnLic6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RCeUNsYXNzTmFtZShuYW1lKTtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNlbGVjdEJ5VGFnKF9zZWxlY3Rvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2VsZWN0QnlJZChpZCl7XHJcbiAgICAgICAgbGV0IGNoaWxkcmVuTGlzdCA9IHRoaXMuY2hpbGRyZW5MaXN0O1xyXG4gICAgICAgIGxldCB0YXJnZXQ7XHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaTxjaGlsZHJlbkxpc3QubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuTGlzdFtpXTtcclxuICAgICAgICAgICAgaWYoY2hpbGQuaWQgPT09IGlkKXtcclxuICAgICAgICAgICAgICAgIHRhcmdldCA9IGNoaWxkO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRhcmdldDtcclxuICAgIH1cclxuICAgIHNlbGVjdEJ5Q2xhc3NOYW1lKGNsYXNzTmFtZSl7XHJcbiAgICAgICAgbGV0IGNoaWxkcmVuTGlzdCA9IHRoaXMuY2hpbGRyZW5MaXN0O1xyXG4gICAgICAgIGxldCB0YXJnZXRMaXN0ID0gW107XHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaTxjaGlsZHJlbkxpc3QubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuTGlzdFtpXTtcclxuICAgICAgICAgICAgaWYoY2hpbGQuY2xhc3Nlcy5pbmRleE9mKGNsYXNzTmFtZSk+LTEpe1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0TGlzdC5wdXNoKGNoaWxkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGFyZ2V0TGlzdDtcclxuICAgIH1cclxuICAgIHNlbGVjdEJ5VGFnKF90YWcpe1xyXG4gICAgICAgIGxldCBjaGlsZHJlbkxpc3QgPSB0aGlzLmNoaWxkcmVuTGlzdDtcclxuICAgICAgICBsZXQgdGFyZ2V0TGlzdCA9IFtdO1xyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGk8Y2hpbGRyZW5MaXN0Lmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICBsZXQgY2hpbGQgPSBjaGlsZHJlbkxpc3RbaV07XHJcbiAgICAgICAgICAgIGlmKGNoaWxkLnRhZyA9PT0gX3RhZyl7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRMaXN0LnB1c2goY2hpbGQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0YXJnZXRMaXN0O1xyXG4gICAgfVxyXG4gICAgcmVtb3ZlKF9zZWxlY3Rvcil7XHJcbiAgICAgICAgaWYoX3NlbGVjdG9yPT11bmRlZmluZWQpe1xyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZVNlbGYoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgc2VsZWN0b3IgPSBfc2VsZWN0b3IuY2hhckF0KDApO1xyXG4gICAgICAgIGxldCBuYW1lID0gX3NlbGVjdG9yLnN1YnN0cmluZygxKTtcclxuICAgICAgICBsZXQgdGFyZ2V0O1xyXG4gICAgICAgIHN3aXRjaCAoc2VsZWN0b3Ipe1xyXG4gICAgICAgICAgICBjYXNlICcjJzpcclxuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlQnlJZChuYW1lKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICcuJzpcclxuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlQnlDbGFzc05hbWUobmFtZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlQnlUYWcoX3NlbGVjdG9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZW1vdmVCeUlkKGlkKXtcclxuICAgICAgICBsZXQgY2hpbGRyZW5MaXN0ID0gdGhpcy5jaGlsZHJlbkxpc3Q7XHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaTxjaGlsZHJlbkxpc3QubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuTGlzdFtpXTtcclxuICAgICAgICAgICAgaWYoY2hpbGQuaWQgPT09IGlkKXtcclxuICAgICAgICAgICAgICAgIGNoaWxkcmVuTGlzdC5zcGxpY2UoaSwxKTtcclxuICAgICAgICAgICAgICAgIGNoaWxkLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgaS0tO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZW1vdmVCeUNsYXNzTmFtZShjbGFzc05hbWUpe1xyXG4gICAgICAgIGxldCBjaGlsZHJlbkxpc3QgPSB0aGlzLmNoaWxkcmVuTGlzdDtcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpPGNoaWxkcmVuTGlzdC5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5MaXN0W2ldO1xyXG4gICAgICAgICAgICBpZihjaGlsZC5jbGFzc2VzLmluZGV4T2YoY2xhc3NOYW1lKT4tMSl7XHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlbkxpc3Quc3BsaWNlKGksMSk7XHJcbiAgICAgICAgICAgICAgICBjaGlsZC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgIGktLTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlbW92ZUJ5VGFnKF90YWcpe1xyXG4gICAgICAgIGxldCBjaGlsZHJlbkxpc3QgPSB0aGlzLmNoaWxkcmVuTGlzdDtcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpPGNoaWxkcmVuTGlzdC5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5MaXN0W2ldO1xyXG4gICAgICAgICAgICBpZihjaGlsZC50YWcgPT09IF90YWcpe1xyXG4gICAgICAgICAgICAgICAgY2hpbGRyZW5MaXN0LnNwbGljZShpLDEpO1xyXG4gICAgICAgICAgICAgICAgY2hpbGQucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICBpLS07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZW1vdmVTZWxmKCl7XHJcbiAgICAgICAgLyp0aGlzLmNoaWxkcmVuTGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICAgICAgICBjaGlsZC5yZW1vdmUoKTtcclxuICAgICAgICB9KTsqL1xyXG4gICAgICAgIHRoaXMuZG9tLnJlbW92ZSgpO1xyXG4gICAgICAgIGlmKHRoaXMucGFyZW50KXtcclxuICAgICAgICAgICAgbGV0IGNoaWxkcmVuTGlzdCA9IHRoaXMucGFyZW50LmNoaWxkcmVuTGlzdDtcclxuICAgICAgICAgICAgZm9yKHZhciBpID0gMDsgaTxjaGlsZHJlbkxpc3QubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2hpbGQgPSBjaGlsZHJlbkxpc3RbaV07XHJcbiAgICAgICAgICAgICAgICBpZihjaGlsZCA9PT0gdGhpcyl7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW5MaXN0LnNwbGljZShpLDEpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvKmZvcih2YXIga2V5IGluIHRoaXMpe1xyXG4gICAgICAgICAgICBkZWxldGUgdGhpc1trZXldXHJcbiAgICAgICAgfSovXHJcbiAgICB9XHJcbiAgICByZWFkVmFsdWUoX3ZhbHVlKXtcclxuICAgICAgICBsZXQgdmFsdWUgPSBfdmFsdWU7XHJcbiAgICAgICAgaWYodHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIpe1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWUuY2FsbCh0aGlzLHRoaXMuZGF0YSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJjb25zdCBNQVhfQ1lDTEUgPSAxMDA7XHJcbmNsYXNzIEN1YllfUm91dGluZXtcclxuICAgIGNvbnN0cnVjdG9yKF90aWNrU3BlZWQsX29wdGlvbnMpe1xyXG4gICAgICAgIHRoaXMudGlja1NwZWVkID0gX3RpY2tTcGVlZCB8fCAxO1xyXG4gICAgICAgIGxldCBvcHRpb25zID0gX29wdGlvbnMgfHwge307XHJcbiAgICAgICAgdGhpcy5pbml0KG9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMuTUFYX0NZQ0xFID0gTUFYX0NZQ0xFO1xyXG4gICAgfVxyXG4gICAgaW5pdChvcHRpb25zKXtcclxuICAgICAgICB3aW5kb3cuQVhSID0gdGhpcztcclxuICAgICAgICB0aGlzLmN5Y2xlID0gMDtcclxuICAgICAgICB0aGlzLnJvdXRpbmVMaXN0ID0gW107XHJcbiAgICAgICAgdGhpcy5sb25nZXN0Um91dGluZVRpbWUgPTA7XHJcbiAgICAgICAgc2V0VGltZW91dCh0aGlzLnN0YXJ0LmJpbmQodGhpcykpO1xyXG4gICAgfTtcclxuICAgIHN0YXJ0KCl7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuY3ljbGVTdGFydFRpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoc2VsZi5yb3V0aW5lLmJpbmQodGhpcyksdGhpcy50aWNrU3BlZWQpO1xyXG4gICAgfVxyXG4gICAgYXBwZW5kKG5hbWUsZ3JvdXApIHtcclxuICAgICAgICBsZXQgbmV3Um91dGluZSA9IG5ldyBSb3V0aW5lKG5hbWUsIGdyb3VwKTtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgbmV3Um91dGluZS5pbnNlcnQ9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYobmV3Um91dGluZS5mcmVxIT09MSkge1xyXG4gICAgICAgICAgICAgICAgbmV3Um91dGluZS5jb3VudGVyICs9IHNlbGYucm91dGluZUxpc3QubGVuZ3RoICsgMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBuZXdSb3V0aW5lLmlkeCA9IHNlbGYucm91dGluZUxpc3QubGVuZ3RoO1xyXG4gICAgICAgICAgICBzZWxmLnJvdXRpbmVMaXN0LnB1c2gobmV3Um91dGluZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXdSb3V0aW5lO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgbmV3Um91dGluZS5yZW1vdmU9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgc2VsZi5yb3V0aW5lTGlzdC5zcGxpY2UobmV3Um91dGluZS5pZHgsMSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gbmV3Um91dGluZTtcclxuICAgIH1cclxuICAgIGdldEN1cnJlbnRDeWNsZSgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmN5Y2xlO1xyXG4gICAgfVxyXG4gICAgcm91dGluZSgpe1xyXG4gICAgICAgIGxldCByb3V0aW5lTGlzdCA9IHRoaXMucm91dGluZUxpc3Q7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGZvcih2YXIgaT0wO2k8cm91dGluZUxpc3QubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgIGxldCByb3V0aW5lID0gcm91dGluZUxpc3RbaV07XHJcbiAgICAgICAgICAgIGxldCBzdGFydFRpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgaWYocm91dGluZS5jaGVja0NvdW50ZXIoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGluZS5hY3Rpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5sYXN0Um91dGluZVRpbWUgPSBEYXRlLm5vdygpIC0gc3RhcnRUaW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihzZWxmLmxvbmdlc3RSb3V0aW5lVGltZTxzZWxmLmxhc3RSb3V0aW5lVGltZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmxvbmdlc3RSb3V0aW5lVGltZT1zZWxmLmxhc3RSb3V0aW5lVGltZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihzZWxmLmxhc3RSb3V0aW5lVGltZT4yMDApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdSb3V0aW5lOicgKyByb3V0aW5lLm5hbWUgKyAnIHRvb2sgdG9vIGxvbmcgdG8gcnVuLiBbJytzZWxmLmxhc3RSb3V0aW5lVGltZSsnbXNdJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0aW5lLmlzUnVubmluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1jYXRjaCAoZSl7XHJcbiAgICAgICAgICAgICAgICAvL0RFQ0lERSBJRiBSRU1PVkUgUk9VVElORSBMQVRFUjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmN5Y2xlKys7XHJcbiAgICAgICAgaWYodGhpcy5jeWNsZSA9PT0gTUFYX0NZQ0xFKXtcclxuICAgICAgICAgICAgdGhpcy5jeWNsZSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdEN5Y2xlVGltZSA9IERhdGUubm93KCkgLSB0aGlzLmN5Y2xlU3RhcnRUaW1lO1xyXG4gICAgICAgICAgICB0aGlzLmN5Y2xlUGVyU2VjID0gTWF0aC5mbG9vcigxMDAwIC8gdGhpcy5sYXN0Q3ljbGVUaW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zdGFydCgpO1xyXG4gICAgfVxyXG59XHJcbmNsYXNzIFJvdXRpbmV7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lLGdyb3VwKXtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuZ3JvdXAgPSBncm91cCB8fCAnY29tbW9uJztcclxuICAgICAgICB0aGlzLmZyZXEgPSAxO1xyXG4gICAgICAgIHRoaXMuYWN0aW9uID0gZnVuY3Rpb24gKCkge307XHJcbiAgICAgICAgdGhpcy5yZXBlYXQgPSAwO1xyXG4gICAgfVxyXG4gICAgYXR0cihrZXksdmFsdWUpe1xyXG4gICAgICAgIHRoaXNba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgIGlmKGtleT09PSdmcmVxJyl7XHJcbiAgICAgICAgICAgIHRoaXNbJ2NvdW50ZXInXSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIHJlc2V0Q291bnRlcigpe1xyXG4gICAgICAgIHRoaXMuY291bnRlciA9IHRoaXMuZnJlcTtcclxuICAgIH1cclxuICAgIGNoZWNrQ291bnRlcigpe1xyXG4gICAgICAgIGlmKHRoaXMuaXNSdW5uaW5nPT09dHJ1ZSl7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBzaG91bGRSdW4gPSAtLXRoaXMuY291bnRlcj09PTA7XHJcbiAgICAgICAgaWYodGhpcy5jb3VudGVyPT09MCl7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuZXhlY3V0aW9uVGltZXMhPT11bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5leGVjdXRpb25UaW1lcy0tO1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5leGVjdXRpb25UaW1lcz09PTApe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5pc1J1bm5pbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnJlc2V0Q291bnRlcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgIHJldHVybiBzaG91bGRSdW47XHJcbiAgICB9XHJcblxyXG59XHJcbmNvbnN0IGNyID0gbmV3IEN1YllfUm91dGluZSgpO1xyXG53aW5kb3cuY3IgPSBjcjtcclxuZXhwb3J0IGRlZmF1bHQgY3I7IiwiaW1wb3J0IEN1YllfRE9NIGZyb20gJy4vRnJhbWV3b3JrL0N1YlkvQ3ViWV9ET00nO1xyXG5cclxuXHJcbnZhciBtYWluQ29udGVudCA9IG5ldyBDdWJZX0RPTSgnZGl2JywnaG9tZUNvbnRlbnQnKTtcclxubWFpbkNvbnRlbnQuc3R5bGUoJ3dpZHRoJywnMTAwdncnKVxyXG4gICAgLnN0eWxlKCdoZWlnaHQnLCcxMDB2aCcpXHJcbiAgICAuc3R5bGUoJ2JhY2tncm91bmQnLCcjMjIyZjNlJylcclxuICAgIC5zdHlsZSgncG9zaXRpb24nLCdyZWxhdGl2ZScpXHJcbiAgICAuc3R5bGUoJ3RyYW5zaXRpb24nLCAnNXMnKVxyXG4gICAgLnN0eWxlKCdvdmVyZmxvdycsJ2hpZGRlbicpXHJcbiAgICAub24oJ21vdXNlbW92ZScsZnVuY3Rpb24gKGUsZCkge1xyXG4gICAgICAgIGxldCB4ID0gZS5jbGllbnRYO1xyXG4gICAgICAgIGxldCB5ID0gZS5jbGllbnRZO1xyXG4gICAgICAgIGxldCBvcmlnaW4gPSB7XHJcbiAgICAgICAgICAgIHg6IHdpbmRvdy5pbm5lcldpZHRoLzIsXHJcbiAgICAgICAgICAgIHk6IHdpbmRvdy5pbm5lckhlaWdodC8yXHJcbiAgICAgICAgfTtcclxuICAgICAgICBtYWluQ29udGVudC5keCA9IC0oeCAtIG9yaWdpbi54KS8xMDtcclxuICAgICAgICBtYWluQ29udGVudC5keSA9IC0oeSAtIG9yaWdpbi55KS8xMDtcclxuXHJcbiAgICB9KTtcclxudmFyIGJhY2tncm91bmRBbiA9IGNyLmFwcGVuZCgnYmFja2dyb3VuZEFuJylcclxuICAgIC5hdHRyKCdmcmVxJywyMDApXHJcbiAgICAuYXR0cignZXhlY3V0aW9uVGltZXMnLDEpXHJcbiAgICAuYXR0cignYWN0aW9uJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbWFpbkNvbnRlbnQuc3R5bGUoJ2JhY2tncm91bmQnLCdibGFjaycpXHJcbiAgICB9KS5pbnNlcnQoKTtcclxuXHJcbnZhciBoZWFkTGluZSA9IG1haW5Db250ZW50LmFwcGVuZCgnaDEnLCdoZWFkTGluZScpXHJcbiAgICAuY29udGVudCgnRlJPTlQgRU5EIEVOR0lORUVSJylcclxuICAgIC5zdHlsZSgncG9zaXRpb24nLCdmaXhlZCcpXHJcbiAgICAuc3R5bGUoJ2NvbG9yJywnd2hpdGUnKVxyXG4gICAgLnN0eWxlKCd3aWR0aCcsJzEwMCUnKVxyXG4gICAgLnN0eWxlKCdoZWlnaHQnLCAnNjBweCcpXHJcbiAgICAuc3R5bGUoJ3RleHQtYWxpZ24nLCdjZW50ZXInKVxyXG4gICAgLnN0eWxlKCdsZWZ0JywnMCcpXHJcbiAgICAuc3R5bGUoJ3JpZ2h0JywnMCcpXHJcbiAgICAuc3R5bGUoJ2JvdHRvbScsJzMzJScpXHJcbiAgICAuc3R5bGUoJ21hcmdpbicsJ2F1dG8nKVxyXG4gICAgLnN0eWxlKCdmb250LXNpemUnLCc2NHB4JylcclxuICAgIC5zdHlsZSgndHJhbnNpdGlvbicsICcxcycpXHJcbiAgICAuc3R5bGUoJ3RleHQtc2hhZG93JywnMCAwIDEwcHggIzcwYTFmZicpXHJcbiAgICAuc3R5bGUoJ3otaW5kZXgnLDEpXHJcbiAgICAub24oJ21vdXNlb3ZlcicsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuc3R5bGUoJ3RleHQtc2hhZG93JywnMCAwIDMwcHggI2VjY2M2OCcpXHJcbiAgICB9KVxyXG4gICAgLm9uKCdtb3VzZWxlYXZlJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5zdHlsZSgndGV4dC1zaGFkb3cnLCcwIDAgMTBweCAjNzBhMWZmJylcclxuICAgIH0pO1xyXG52YXIgaG9tZUhlYWRMaW5lQW5pbWF0aW9uID0gY3IuYXBwZW5kKCdob21lX2hlYWRMaW5lX2FuaW1hdGlvbicpXHJcbiAgICAuYXR0cignZnJlcScsMjUpXHJcbiAgICAuYXR0cignYWN0aW9uJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0IG9kZCA9IE1hdGgucmFuZG9tKCkqMTAwO1xyXG4gICAgICAgIGlmKG9kZD41MCl7XHJcbiAgICAgICAgICAgIGhlYWRMaW5lLnN0eWxlKCd0ZXh0LXNoYWRvdycsJzAgMCAzMHB4ICNlY2NjNjgnKVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBoZWFkTGluZS5zdHlsZSgndGV4dC1zaGFkb3cnLCcwIDAgMTBweCAjNzBhMWZmJylcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgLmluc2VydCgpO1xyXG5cclxudmFyIHN1YkhlYWRMaW5lID0gbWFpbkNvbnRlbnQuYXBwZW5kKCdoMScsJ3N1YkhlYWRMaW5lJylcclxuICAgIC5jb250ZW50KCctIHdobyBtYWtlcyBkYXRhIGFsaXZlIC0nKVxyXG4gICAgLnN0eWxlKCdwb3NpdGlvbicsJ2ZpeGVkJylcclxuICAgIC5zdHlsZSgnY29sb3InLCcjZWNjYzY4JylcclxuICAgIC5zdHlsZSgnd2lkdGgnLCcxMDAlJylcclxuICAgIC5zdHlsZSgnaGVpZ2h0JywgJzMwcHgnKVxyXG4gICAgLnN0eWxlKCd0ZXh0LWFsaWduJywnY2VudGVyJylcclxuICAgIC5zdHlsZSgnbGVmdCcsJzAnKVxyXG4gICAgLnN0eWxlKCdyaWdodCcsJzAnKVxyXG4gICAgLnN0eWxlKCdib3R0b20nLCczMCUnKVxyXG4gICAgLnN0eWxlKCdtYXJnaW4nLCdhdXRvJylcclxuICAgIC5zdHlsZSgnZm9udC1zaXplJywnMzJweCcpXHJcbiAgICAuc3R5bGUoJ3RyYW5zaXRpb24nLCAnMXMnKVxyXG4gICAgLnN0eWxlKCd0ZXh0LXNoYWRvdycsJzAgMCAxMHB4ICNlY2NjNjgnKVxyXG4gICAgLnN0eWxlKCd6LWluZGV4JywxKTtcclxudmFyIGluZm9CdXR0b25IYWxvID0gbWFpbkNvbnRlbnQuYXBwZW5kKCdzcGFuJywnaW5mb0J1dHRvbkhhbG8nKVxyXG4gICAgLnN0eWxlKCdwb3NpdGlvbicsJ2ZpeGVkJylcclxuICAgIC5zdHlsZSgnY29sb3InLCcjZWNjYzY4JylcclxuICAgIC5zdHlsZSgnd2lkdGgnLCczMnB4JylcclxuICAgIC5zdHlsZSgnaGVpZ2h0JywgJzMycHgnKVxyXG4gICAgLnN0eWxlKCdvdmVyZmxvdycsJ2hpZGRlbicpXHJcbiAgICAuc3R5bGUoJ2JvcmRlci1yYWRpdXMnLCc0cHgnKVxyXG4gICAgLnN0eWxlKCd0ZXh0LWFsaWduJywnY2VudGVyJylcclxuICAgIC5zdHlsZSgnbGVmdCcsJzAnKVxyXG4gICAgLnN0eWxlKCdyaWdodCcsJzAnKVxyXG4gICAgLnN0eWxlKCdib3R0b20nLCcxOCUnKVxyXG4gICAgLnN0eWxlKCdtYXJnaW4nLCdhdXRvJylcclxuICAgIC5zdHlsZSgnZm9udC1zaXplJywnMjRweCcpXHJcbiAgICAuc3R5bGUoJ3RyYW5zaXRpb24nLCAnMC41cycpXHJcbiAgICAuc3R5bGUoJ2JvcmRlcicsJzFweCBzb2xpZCAjZWNjYzY4JylcclxuICAgIC5zdHlsZSgnYm94LXNoYWRvdycsJzAgMCAzMHB4ICNlY2NjNjgnKVxyXG4gICAgLnN0eWxlKCdjdXJzb3InLCdwb2ludGVyJylcclxuICAgIC5zdHlsZSgnei1pbmRleCcsMSk7XHJcbnZhciBpbmZvQnV0dG9uID0gbWFpbkNvbnRlbnQuYXBwZW5kKCdzcGFuJywnaW5mb0J1dHRvbicpXHJcbiAgICAuY29udGVudCgnV2FubmEga25vdyBtb3JlPycpXHJcbiAgICAuc3R5bGUoJ3Bvc2l0aW9uJywnZml4ZWQnKVxyXG4gICAgLnN0eWxlKCdjb2xvcicsJyNlY2NjNjgnKVxyXG4gICAgLnN0eWxlKCd3aWR0aCcsJzMycHgnKVxyXG4gICAgLnN0eWxlKCdoZWlnaHQnLCAnMzJweCcpXHJcbiAgICAuc3R5bGUoJ292ZXJmbG93JywnaGlkZGVuJylcclxuICAgIC5zdHlsZSgnYm9yZGVyJywnMXB4IHNvbGlkIHRyYW5zcGFyZW50JylcclxuICAgIC5zdHlsZSgnYm9yZGVyLXJhZGl1cycsJzRweCcpXHJcbiAgICAuc3R5bGUoJ3RleHQtYWxpZ24nLCdjZW50ZXInKVxyXG4gICAgLnN0eWxlKCdsZWZ0JywnMCcpXHJcbiAgICAuc3R5bGUoJ3JpZ2h0JywnMCcpXHJcbiAgICAuc3R5bGUoJ2JvdHRvbScsJzE4JScpXHJcbiAgICAuc3R5bGUoJ21hcmdpbicsJ2F1dG8nKVxyXG4gICAgLnN0eWxlKCdmb250LXNpemUnLCcyNHB4JylcclxuICAgIC5zdHlsZSgndHJhbnNpdGlvbicsICcwLjVzJylcclxuICAgIC5zdHlsZSgnYmFja2dyb3VuZCcsICcjZWNjYzY4JylcclxuICAgIC5zdHlsZSgndGV4dC1zaGFkb3cnLCcwIDAgNXB4ICNlY2NjNjgnKVxyXG4gICAgLnN0eWxlKCdib3gtc2hhZG93JywnMCAwIDEweCAjZWNjYzY4JylcclxuICAgIC5zdHlsZSgnY3Vyc29yJywncG9pbnRlcicpXHJcbiAgICAuc3R5bGUoJ3otaW5kZXgnLDEpXHJcbiAgICAub24oJ2NsaWNrJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY2Muc3RvcmVWYWx1ZSgnY3VycmVudFZpZXcnLCdhYm91dCcpO1xyXG4gICAgfSlcclxuICAgIC5vbignbW91c2VvdmVyJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5zdHlsZSgnYmFja2dyb3VuZCcsJ3JnYmEoMCwgMCwgMCwgMC41KScpXHJcbiAgICAgICAgICAgIC5zdHlsZSgnd2lkdGgnLCcxMDAlJylcclxuICAgICAgICAgICAgLnN0eWxlKCdib3gtc2hhZG93JywnJylcclxuICAgICAgICBpbmZvQnV0dG9uLm92ZXJlZCA9IHRydWU7XHJcbiAgICB9KVxyXG4gICAgLm9uKCdtb3VzZWxlYXZlJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5zdHlsZSgnYmFja2dyb3VuZCcsICcjZWNjYzY4JylcclxuICAgICAgICAgICAgLnN0eWxlKCd3aWR0aCcsJzMycHgnKVxyXG4gICAgICAgICAgICAuc3R5bGUoJ2JveC1zaGFkb3cnLCcwIDAgMTBweCAjZWNjYzY4JylcclxuICAgICAgICBpbmZvQnV0dG9uLm92ZXJlZCA9IGZhbHNlO1xyXG4gICAgfSk7XHJcbnZhciBpbmZvQnV0dG9uSGFsb0FuID0gY3IuYXBwZW5kKCdpbmZvQnV0dG9uSGFsb0FuJylcclxuICAgIC5hdHRyKCdmcmVxJyw2MClcclxuICAgIC5hdHRyKCdhY3Rpb24nLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZihpbmZvQnV0dG9uLm92ZXJlZCA9PT0gdHJ1ZSl7XHJcbiAgICAgICAgICAgIGluZm9CdXR0b25IYWxvLnN0YXRlID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3dpdGNoKGluZm9CdXR0b25IYWxvLnN0YXRlKXtcclxuICAgICAgICAgICAgY2FzZSB1bmRlZmluZWQ6XHJcbiAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgIGluZm9CdXR0b25IYWxvLnN0YXRlID0gMTtcclxuICAgICAgICAgICAgICAgIGluZm9CdXR0b25IYWxvLnN0eWxlKCd3aWR0aCcsICc2NHB4JylcclxuICAgICAgICAgICAgICAgICAgICAuc3R5bGUoJ2JvdHRvbScsJ2NhbGMoMTglIC0gMTVweCknKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdHlsZSgnaGVpZ2h0JywgJzY0cHgnKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdHlsZSgnb3BhY2l0eScsIDApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIGluZm9CdXR0b25IYWxvLnN0YXRlID0gMjtcclxuICAgICAgICAgICAgICAgIGluZm9CdXR0b25IYWxvLnN0eWxlKCd3aWR0aCcsICczMnB4JylcclxuICAgICAgICAgICAgICAgICAgICAuc3R5bGUoJ2JvdHRvbScsJzE4JScpXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0eWxlKCdoZWlnaHQnLCAnMzJweCcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIGluZm9CdXR0b25IYWxvLnN0YXRlID0gMDtcclxuICAgICAgICAgICAgICAgIGluZm9CdXR0b25IYWxvLnN0eWxlKCdvcGFjaXR5JywgMSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9KS5pbnNlcnQoKTtcclxuXHJcbndpbmRvdy5tb2JpbGVjaGVjayA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIGNoZWNrID0gZmFsc2U7XHJcbiAgICAoZnVuY3Rpb24oYSl7aWYoLyhhbmRyb2lkfGJiXFxkK3xtZWVnbykuK21vYmlsZXxhdmFudGdvfGJhZGFcXC98YmxhY2tiZXJyeXxibGF6ZXJ8Y29tcGFsfGVsYWluZXxmZW5uZWN8aGlwdG9wfGllbW9iaWxlfGlwKGhvbmV8b2QpfGlyaXN8a2luZGxlfGxnZSB8bWFlbW98bWlkcHxtbXB8bW9iaWxlLitmaXJlZm94fG5ldGZyb250fG9wZXJhIG0ob2J8aW4paXxwYWxtKCBvcyk/fHBob25lfHAoaXhpfHJlKVxcL3xwbHVja2VyfHBvY2tldHxwc3B8c2VyaWVzKDR8NikwfHN5bWJpYW58dHJlb3x1cFxcLihicm93c2VyfGxpbmspfHZvZGFmb25lfHdhcHx3aW5kb3dzIGNlfHhkYXx4aWluby9pLnRlc3QoYSl8fC8xMjA3fDYzMTB8NjU5MHwzZ3NvfDR0aHB8NTBbMS02XWl8Nzcwc3w4MDJzfGEgd2F8YWJhY3xhYyhlcnxvb3xzXFwtKXxhaShrb3xybil8YWwoYXZ8Y2F8Y28pfGFtb2l8YW4oZXh8bnl8eXcpfGFwdHV8YXIoY2h8Z28pfGFzKHRlfHVzKXxhdHR3fGF1KGRpfFxcLW18ciB8cyApfGF2YW58YmUoY2t8bGx8bnEpfGJpKGxifHJkKXxibChhY3xheil8YnIoZXx2KXd8YnVtYnxid1xcLShufHUpfGM1NVxcL3xjYXBpfGNjd2F8Y2RtXFwtfGNlbGx8Y2h0bXxjbGRjfGNtZFxcLXxjbyhtcHxuZCl8Y3Jhd3xkYShpdHxsbHxuZyl8ZGJ0ZXxkY1xcLXN8ZGV2aXxkaWNhfGRtb2J8ZG8oY3xwKW98ZHMoMTJ8XFwtZCl8ZWwoNDl8YWkpfGVtKGwyfHVsKXxlcihpY3xrMCl8ZXNsOHxleihbNC03XTB8b3N8d2F8emUpfGZldGN8Zmx5KFxcLXxfKXxnMSB1fGc1NjB8Z2VuZXxnZlxcLTV8Z1xcLW1vfGdvKFxcLnd8b2QpfGdyKGFkfHVuKXxoYWllfGhjaXR8aGRcXC0obXxwfHQpfGhlaVxcLXxoaShwdHx0YSl8aHAoIGl8aXApfGhzXFwtY3xodChjKFxcLXwgfF98YXxnfHB8c3x0KXx0cCl8aHUoYXd8dGMpfGlcXC0oMjB8Z298bWEpfGkyMzB8aWFjKCB8XFwtfFxcLyl8aWJyb3xpZGVhfGlnMDF8aWtvbXxpbTFrfGlubm98aXBhcXxpcmlzfGphKHR8dilhfGpicm98amVtdXxqaWdzfGtkZGl8a2VqaXxrZ3QoIHxcXC8pfGtsb258a3B0IHxrd2NcXC18a3lvKGN8ayl8bGUobm98eGkpfGxnKCBnfFxcLyhrfGx8dSl8NTB8NTR8XFwtW2Etd10pfGxpYnd8bHlueHxtMVxcLXd8bTNnYXxtNTBcXC98bWEodGV8dWl8eG8pfG1jKDAxfDIxfGNhKXxtXFwtY3J8bWUocmN8cmkpfG1pKG84fG9hfHRzKXxtbWVmfG1vKDAxfDAyfGJpfGRlfGRvfHQoXFwtfCB8b3x2KXx6eil8bXQoNTB8cDF8diApfG13YnB8bXl3YXxuMTBbMC0yXXxuMjBbMi0zXXxuMzAoMHwyKXxuNTAoMHwyfDUpfG43KDAoMHwxKXwxMCl8bmUoKGN8bSlcXC18b258dGZ8d2Z8d2d8d3QpfG5vayg2fGkpfG56cGh8bzJpbXxvcCh0aXx3dil8b3Jhbnxvd2cxfHA4MDB8cGFuKGF8ZHx0KXxwZHhnfHBnKDEzfFxcLShbMS04XXxjKSl8cGhpbHxwaXJlfHBsKGF5fHVjKXxwblxcLTJ8cG8oY2t8cnR8c2UpfHByb3h8cHNpb3xwdFxcLWd8cWFcXC1hfHFjKDA3fDEyfDIxfDMyfDYwfFxcLVsyLTddfGlcXC0pfHF0ZWt8cjM4MHxyNjAwfHJha3N8cmltOXxybyh2ZXx6byl8czU1XFwvfHNhKGdlfG1hfG1tfG1zfG55fHZhKXxzYygwMXxoXFwtfG9vfHBcXC0pfHNka1xcL3xzZShjKFxcLXwwfDEpfDQ3fG1jfG5kfHJpKXxzZ2hcXC18c2hhcnxzaWUoXFwtfG0pfHNrXFwtMHxzbCg0NXxpZCl8c20oYWx8YXJ8YjN8aXR8dDUpfHNvKGZ0fG55KXxzcCgwMXxoXFwtfHZcXC18diApfHN5KDAxfG1iKXx0MigxOHw1MCl8dDYoMDB8MTB8MTgpfHRhKGd0fGxrKXx0Y2xcXC18dGRnXFwtfHRlbChpfG0pfHRpbVxcLXx0XFwtbW98dG8ocGx8c2gpfHRzKDcwfG1cXC18bTN8bTUpfHR4XFwtOXx1cChcXC5ifGcxfHNpKXx1dHN0fHY0MDB8djc1MHx2ZXJpfHZpKHJnfHRlKXx2ayg0MHw1WzAtM118XFwtdil8dm00MHx2b2RhfHZ1bGN8dngoNTJ8NTN8NjB8NjF8NzB8ODB8ODF8ODN8ODV8OTgpfHczYyhcXC18ICl8d2ViY3x3aGl0fHdpKGcgfG5jfG53KXx3bWxifHdvbnV8eDcwMHx5YXNcXC18eW91cnx6ZXRvfHp0ZVxcLS9pLnRlc3QoYS5zdWJzdHIoMCw0KSkpIGNoZWNrID0gdHJ1ZTt9KShuYXZpZ2F0b3IudXNlckFnZW50fHxuYXZpZ2F0b3IudmVuZG9yfHx3aW5kb3cub3BlcmEpO1xyXG4gICAgcmV0dXJuIGNoZWNrO1xyXG59O1xyXG52YXIgY2lyY2xlTnVtID0gbW9iaWxlY2hlY2soKT81MDoxNTA7XHJcbnZhciBjaXJjbGVMaXN0ID0gW107XHJcblxyXG5mb3IodmFyIGk9MDtpPGNpcmNsZU51bTtpKyspe1xyXG4gICAgbGV0IHggPSBNYXRoLnJhbmRvbSgpKndpbmRvdy5pbm5lcldpZHRoKzEwO1xyXG4gICAgbGV0IHkgPSBNYXRoLnJhbmRvbSgpKndpbmRvdy5pbm5lckhlaWdodCsxMDtcclxuICAgIGxldCBjaXJjbGUgPSBtYWluQ29udGVudC5hcHBlbmQoJ2RpdicpXHJcbiAgICAgICAgLnN0eWxlKCdwb3NpdGlvbicsJ2Fic29sdXRlJylcclxuICAgICAgICAuc3R5bGUoJ3dpZHRoJywnMjBweCcpXHJcbiAgICAgICAgLnN0eWxlKCdoZWlnaHQnLCcyMHB4JylcclxuICAgICAgICAuc3R5bGUoJ2JvcmRlci1yYWRpdXMnLCc0cHgnKVxyXG4gICAgICAgIC5zdHlsZSgnYmFja2dyb3VuZCcsJyNlY2NjNjgnKVxyXG4gICAgICAgIC5zdHlsZSgndHJhbnNpdGlvbicsJzAuMXMgbGluZWFyJylcclxuICAgICAgICAuc3R5bGUoJ2JveC1zaGFkb3cnLCcwIDAgMTBweCAjZWNjYzY4JylcclxuICAgICAgICAuc3R5bGUoJ29wYWNpdHknLCAnMCcpXHJcbiAgICAgICAgLnN0eWxlKCd0cmFuc2Zvcm0nLCd0cmFuc2xhdGUoJyt4KydweCwnK3krJ3B4KScpO1xyXG4gICAgXHJcbiAgICBjaXJjbGUueCA9IHg7XHJcbiAgICBjaXJjbGUueSA9IHk7XHJcbiAgICBjaXJjbGUuZHggPSBNYXRoLnJhbmRvbSgpLTAuNTtcclxuICAgIGNpcmNsZS5keSA9IE1hdGgucmFuZG9tKCktMC41O1xyXG4gICAgY2lyY2xlLmRzID0gMC4wMTtcclxuICAgIGNpcmNsZS5zY2FsZSA9ICBNYXRoLnJhbmRvbSgpO1xyXG4gICAgY2lyY2xlLmNvdW50ZXIgPSAxMDtcclxuICAgIGxldCBjaXJjbGVBbiA9IEFYUi5hcHBlbmQoJ2hvbWVfY2lyY2xlX2FuaW1hdGlvbicpXHJcbiAgICAgICAgLmF0dHIoJ2ZyZXEnLDUpXHJcbiAgICAgICAgLmF0dHIoJ2FjdGlvbicsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBsZXQgc2NhbGUgPSBjaXJjbGUuc2NhbGU7XHJcbiAgICAgICAgICAgIGNpcmNsZS54Kz1jaXJjbGUuZHg7XHJcbiAgICAgICAgICAgIGNpcmNsZS55Kz1jaXJjbGUuZHk7XHJcblxyXG4gICAgICAgICAgICBjaXJjbGUuc3R5bGUoJ3RyYW5zZm9ybScsJ3RyYW5zbGF0ZSgnKyhjaXJjbGUueCArIChtYWluQ29udGVudC5keHx8MCkqc2NhbGUpKydweCwnKyhjaXJjbGUueSArIChtYWluQ29udGVudC5keXx8MCkqc2NhbGUpKydweCkgc2NhbGUoJytzY2FsZSsnKScpXHJcbiAgICAgICAgICAgICAgICAuc3R5bGUoJ29wYWNpdHknLCBzY2FsZSlcclxuICAgICAgICAgICAgICAgIC5zdHlsZSgnei1pbmRleCcsIHNjYWxlPj0wLjg/MjowKVxyXG4gICAgICAgICAgICAgICAgLnN0eWxlKCdib3gtc2hhZG93JywnMCAwICcrKE1hdGgucmFuZG9tKCkqMTArMTApKydweCAjZWNjYzY4Jyk7XHJcbiAgICAgICAgICAgIGlmKGNpcmNsZS54PndpbmRvdy5pbm5lcldpZHRoKXtcclxuICAgICAgICAgICAgICAgIGNpcmNsZS5keCA9IC0oTWF0aC5yYW5kb20oKSowLjUrMC4xKTtcclxuICAgICAgICAgICAgfWVsc2UgaWYoY2lyY2xlLng8MCl7XHJcbiAgICAgICAgICAgICAgICBjaXJjbGUuZHggPSBNYXRoLnJhbmRvbSgpKjAuNSswLjE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoY2lyY2xlLnk+d2luZG93LmlubmVySGVpZ2h0KXtcclxuICAgICAgICAgICAgICAgIGNpcmNsZS5keSA9IC0oTWF0aC5yYW5kb20oKSowLjUrMC4xKTtcclxuICAgICAgICAgICAgfWVsc2UgaWYoY2lyY2xlLnk8MCl7XHJcbiAgICAgICAgICAgICAgICBjaXJjbGUuZHkgPSBNYXRoLnJhbmRvbSgpKjAuNSswLjE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2lyY2xlLmNvdW50ZXItLTtcclxuICAgICAgICAgICAgaWYoY2lyY2xlLmNvdW50ZXI8PTApe1xyXG4gICAgICAgICAgICAgICAgY2lyY2xlLmNvdW50ZXI9MTA7XHJcbiAgICAgICAgICAgICAgICBjaXJjbGUuc2NhbGUrPWNpcmNsZS5kcztcclxuICAgICAgICAgICAgICAgIGlmKGNpcmNsZS5zY2FsZT49MSl7XHJcbiAgICAgICAgICAgICAgICAgICAgY2lyY2xlLmRzPS0wLjAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYoY2lyY2xlLnNjYWxlPD0wKXtcclxuICAgICAgICAgICAgICAgICAgICBjaXJjbGUuZHM9MC4wMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLmluc2VydCgpO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBtYWluQ29udGVudDsiLCIvKipcclxuICogQ3JlYXRlZCBieSBBbnhpbiBZYW5nIG9uIDMvMjgvMjAxOC5cclxuICovXHJcbmltcG9ydCBDQyBmcm9tICcuL0ZyYW1ld29yay9DdWJZL0N1YllfQ29yZSc7XHJcbmltcG9ydCBDdWJZX0RPTSBmcm9tICcuL0ZyYW1ld29yay9DdWJZL0N1YllfRE9NJztcclxuaW1wb3J0IENSIGZyb20gJy4vRnJhbWV3b3JrL0N1YlkvQ3ViWV9Sb3V0aW5lJztcclxuaW1wb3J0IGhvbWVDb250ZW50IGZyb20gJy4vaG9tZSc7XHJcbnRyeSB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIG1lbnVDb250YWluZXIudXBkYXRlcignY2xvc2VNZW51JykoKTtcclxuICAgIH0pO1xyXG4gICAgd2luZG93LnJvb3QgPSBuZXcgQ3ViWV9ET00oJ2RpdicsICdheF9yb290JywgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcclxuICAgIHJvb3Quc3R5bGUoJ2ZvbnQtc2l6ZScsICcxMnB4JylcclxuICAgICAgICAuc3R5bGUoJ2N1cnNvcicsICd1cmwoKSwgYXV0bycpO1xyXG4gICAgdmFyIGhlYWRlciA9IHJvb3QuYXBwZW5kKCdkaXYnLCAnaGVhZGVyJylcclxuICAgICAgICAuYXR0cignb25zZWxlY3RzdGFydCcsICdyZXR1cm4gZmFsc2U7JylcclxuICAgICAgICAuc3R5bGUoJ2Rpc3BsYXknLCAnZmxleCcpXHJcbiAgICAgICAgLnN0eWxlKCdwb3NpdGlvbicsICdhYnNvbHV0ZScpXHJcbiAgICAgICAgLy8uc3R5bGUoJ2JhY2tncm91bmQnLCdyZ2JhKDExMiwgMTYxLCAyNTUsMS4wKScpXHJcbiAgICAgICAgLnN0eWxlKCdvcGFjaXR5JywgJzAuNScpXHJcbiAgICAgICAgLy8uc3R5bGUoJ2JveC1zaGFkb3cnLCAnMHB4IDBweCA1cHggcmdiYSgxMTIsIDE2MSwgMjU1LDApJylcclxuICAgICAgICAvLy5zdHlsZSgnYm9yZGVyJywnMXB4IHNvbGlkIHJnYmEoMTEyLCAxNjEsIDI1NSwgMCknKVxyXG4gICAgICAgIC8vLnN0eWxlKCdib3JkZXItcmFkaXVzJywnOHB4JylcclxuICAgICAgICAuc3R5bGUoJ3RvcCcsICcxZW0nKVxyXG4gICAgICAgIC5zdHlsZSgnaGVpZ2h0JywgJzNlbScpXHJcbiAgICAgICAgLnN0eWxlKCd6LWluZGV4JywgJzEwJylcclxuICAgICAgICAuc3R5bGUoJ3RyYW5zaXRpb24nLCAnMC4zcycpXHJcbiAgICAgICAgLm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3R5bGUoJ29wYWNpdHknLCAnMScpXHJcbiAgICAgICAgICAgIC8vLnN0eWxlKCdib3gtc2hhZG93JywgJzBweCAwcHggNXB4IHJnYmEoMTEyLCAxNjEsIDI1NSwxLjApJylcclxuICAgICAgICAgICAgLy8uc3R5bGUoJ2JvcmRlcicsJzFweCBzb2xpZCByZ2JhKDExMiwgMTYxLCAyNTUsIDAuNSknKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5zdHlsZSgnb3BhY2l0eScsICcwLjUnKVxyXG4gICAgICAgICAgICAvLy5zdHlsZSgnYm94LXNoYWRvdycsICcwcHggMHB4IDVweCByZ2JhKDExMiwgMTYxLCAyNTUsMCknKVxyXG4gICAgICAgICAgICAvLy5zdHlsZSgnYm9yZGVyJywnMXB4IHNvbGlkIHJnYmEoMTEyLCAxNjEsIDI1NSwgMCknKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB2YXIgaGVhZGVySXRlbXMgPSBbJ01lbnUnLCAnUGxheWdyb3VuZCcsICdBYm91dCBNZSddO1xyXG4gICAgdmFyIGluZGV4ID0gMDtcclxuICAgIGhlYWRlckl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICBoZWFkZXJJdGVtc1tpbmRleCsrXSA9IGhlYWRlci5hcHBlbmQoJ2RpdicsICdoZWFkZXJfJyArIGl0ZW0pXHJcbiAgICAgICAgICAgIC5jb250ZW50KGl0ZW0pXHJcbiAgICAgICAgICAgIC5hcHBlbmRDbGFzcygneHgnKVxyXG4gICAgICAgICAgICAuc3R5bGUoJ2NvbG9yJywgJ3doaXRlJylcclxuICAgICAgICAgICAgLnN0eWxlKCdwYWRkaW5nJywgJzFlbSAwLjVlbScpXHJcbiAgICAgICAgICAgIC5zdHlsZSgnY3Vyc29yJywgJ3BvaW50ZXInKVxyXG4gICAgICAgICAgICAuc3R5bGUoJ3RleHQtc2hhZG93JywgJzAgMCAxMHB4ICNlY2NjNjgnKVxyXG4gICAgICAgICAgICAuc3R5bGUoJ3RyYW5zaXRpb24nLCAnMC4zcycpXHJcbiAgICAgICAgICAgIC5vbignbW91c2VvdmVyJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdHlsZSgndGV4dC1zaGFkb3cnLCAnMCAwIDEwcHggI2VjY2M2OCcpXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0eWxlKCdjb2xvcicsICcjZWNjYzY4Jyk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3R5bGUoJ3RleHQtc2hhZG93JywgJzAgMCAyMHB4ICNlY2NjNjgnKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdHlsZSgnY29sb3InLCAnd2hpdGUnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIHZhciBoZWFkZXJNZW51QnV0dG9uID0gaGVhZGVySXRlbXNbMF07XHJcbiAgICBoZWFkZXJNZW51QnV0dG9uLnN0eWxlKCdwb3NpdGlvbicsICdyZWxhdGl2ZScpO1xyXG4gICAgdmFyIG1lbnVDb250YWluZXIgPSBoZWFkZXJNZW51QnV0dG9uLmFwcGVuZCgnZGl2JywgJ21lbnVDb250YWluZXInKVxyXG4gICAgICAgIC5zdHlsZSgncG9zaXRpb24nLCAnYWJzb2x1dGUnKVxyXG4gICAgICAgIC5zdHlsZSgnd2lkdGgnLCAnMjU2cHgnKVxyXG4gICAgICAgIC5zdHlsZSgnaGVpZ2h0JywgJzBweCcpXHJcbiAgICAgICAgLnN0eWxlKCdiYWNrZ3JvdW5kJywgJycpXHJcbiAgICAgICAgLnN0eWxlKCd0b3AnLCAnMTI1JScpXHJcbiAgICAgICAgLnN0eWxlKCdsZWZ0JywgJzAnKVxyXG4gICAgICAgIC5zdHlsZSgnb3ZlcmZsb3cnLCAnaGlkZGVuJylcclxuICAgICAgICAvLy5zdHlsZSgnYm94LXNoYWRvdycsICcwcHggMHB4IDVweCByZ2JhKDExMiwgMTYxLCAyNTUsMCknKVxyXG4gICAgICAgIC8vLnN0eWxlKCdib3JkZXInLCcxcHggc29saWQgcmdiYSgxMTIsIDE2MSwgMjU1LCAwKScpXHJcbiAgICAgICAgLnN0eWxlKCd0cmFuc2l0aW9uJywgJzAuM3MnKVxyXG4gICAgICAgIC5zZXRVcGRhdGVyKCd0b2dnbGVNZW51JywgZnVuY3Rpb24gKGQpIHtcclxuICAgICAgICAgICAgbGV0IGhhc09wZW4gPSB0aGlzLmhhc09wZW4gfHwgZmFsc2U7XHJcbiAgICAgICAgICAgIGlmIChoYXNPcGVuKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0eWxlKCdoZWlnaHQnLCAnMCcpXHJcbiAgICAgICAgICAgICAgICAvLy5zdHlsZSgnYm94LXNoYWRvdycsICcwcHggMHB4IDVweCByZ2JhKDExMiwgMTYxLCAyNTUsMCknKVxyXG4gICAgICAgICAgICAgICAgLy8uc3R5bGUoJ2JvcmRlcicsJzFweCBzb2xpZCByZ2JhKDExMiwgMTYxLCAyNTUsIDApJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0eWxlKCdoZWlnaHQnLCAnMzN2aCcpXHJcbiAgICAgICAgICAgICAgICAvLy5zdHlsZSgnYm94LXNoYWRvdycsICcwcHggMHB4IDVweCByZ2JhKDExMiwgMTYxLCAyNTUsMS4wKScpXHJcbiAgICAgICAgICAgICAgICAvLy5zdHlsZSgnYm9yZGVyJywnMXB4IHNvbGlkIHJnYmEoMTEyLCAxNjEsIDI1NSwgMC41KScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuaGFzT3BlbiA9ICFoYXNPcGVuO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnNldFVwZGF0ZXIoJ2Nsb3NlTWVudScsIGZ1bmN0aW9uIChkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3R5bGUoJ2hlaWdodCcsICcwJylcclxuICAgICAgICAgICAgICAgIC5zdHlsZSgnYm94LXNoYWRvdycsICcwcHggMHB4IDVweCByZ2JhKDExMiwgMTYxLCAyNTUsMCknKVxyXG4gICAgICAgICAgICAgICAgLnN0eWxlKCdib3JkZXInLCAnMXB4IHNvbGlkIHJnYmEoMTEyLCAxNjEsIDI1NSwgMCknKTtcclxuICAgICAgICAgICAgdGhpcy5oYXNPcGVuID0gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgaGVhZGVyTWVudUJ1dHRvbi5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgbWVudUNvbnRhaW5lci51cGRhdGVyKCd0b2dnbGVNZW51JykoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHZhciBtYWluQ29udGFpbmVyID0gcm9vdC5hcHBlbmQoJ2RpdicsICdtYWluQ29udGFpbmVyJyk7XHJcbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZEVsZW1lbnQoaG9tZUNvbnRlbnQpO1xyXG4gICAgY2Muc3RvcmVWYWx1ZSgnY3VycmVudFZpZXcnLCdob21lJyk7XHJcbiAgICBjYy5jb25uZWN0KCdjdXJyZW50VmlldycsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCBjdXJyZW50VmlldyA9IGNjLmdldFZhbHVlKCdjdXJyZW50VmlldycpO1xyXG4gICAgICAgIG1haW5Db250YWluZXIucmVtb3ZlKClcclxuICAgIH0pO1xyXG5cclxuICAgIHZhciB2ZXJzaW9uID0gcm9vdC5hcHBlbmQoJ3AnLCAndmVyc2lvbicpXHJcbiAgICAgICAgLnN0eWxlKCdwb3NpdGlvbicsICdmaXhlZCcpXHJcbiAgICAgICAgLnN0eWxlKCdib3R0b20nLCAnMHB4JylcclxuICAgICAgICAuc3R5bGUoJ3JpZ2h0JywgJzAnKVxyXG4gICAgICAgIC5zdHlsZSgncGFkZGluZy1yaWdodCcsICcxZW0nKVxyXG4gICAgICAgIC5zdHlsZSgnY29sb3InLCAnbGlnaHRncmF5JylcclxuICAgICAgICAuY29udGVudChuZXcgRGF0ZSgpKVxyXG4gICAgICAgIC5zZXRVcGRhdGVyKCd0aW1lcicsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5jb250ZW50KCdDdWJZX1JvdXRpbmU6IExhc3JDeWNsZVRpbWU6ICcgKyBjci5sYXN0Q3ljbGVUaW1lICsgJ21zIHwgQ1BTOicgKyBjci5jeWNsZVBlclNlYyArICcgfExvbmdlc3Q6ICcgKyBjci5sb25nZXN0Um91dGluZVRpbWUgKyAnbXMgfCBMYXN0OicgKyBjci5sYXN0Um91dGluZVRpbWUgKyAnbXMnKTtcclxuICAgICAgICB9KTtcclxuICAgIHZhciB0aW1lciA9IGNyLmFwcGVuZCgndGltZXInKVxyXG4gICAgICAgIC5hdHRyKCdmcmVxJywgMSlcclxuICAgICAgICAuYXR0cignYWN0aW9uJywgdmVyc2lvbi51cGRhdGVyKCd0aW1lcicpKVxyXG4gICAgICAgIC5pbnNlcnQoKTtcclxuICAgIHZhciBtZW51Q29udGVudHMgPSBtZW51Q29udGFpbmVyLmFwcGVuZCgndWwnKVxyXG4gICAgICAgIC5zdHlsZSgncGFkZGluZy1sZWZ0JywgJzJlbScpXHJcbiAgICAgICAgLnN0eWxlKCdtYXJnaW4nLCAnMCcpO1xyXG4gICAgdmFyIG1lbnVJdGVtcyA9IFsnQ29taW5nIHNvb24nLCAnTWF5IENvbWluZyBzb29uJywgJ1Byb2JhYmx5IENvbWluZyBzb29uJ107XHJcbiAgICBpbmRleCA9IDA7XHJcbiAgICBtZW51SXRlbXMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgIG1lbnVJdGVtc1tpbmRleCsrXSA9IG1lbnVDb250ZW50cy5hcHBlbmQoJ2xpJywgJ21lbnVfJyArIGl0ZW0pXHJcbiAgICAgICAgICAgIC5jb250ZW50KGl0ZW0pXHJcbiAgICAgICAgICAgIC5zdHlsZSgnY29sb3InLCAnd2hpdGUnKVxyXG4gICAgICAgICAgICAuc3R5bGUoJ3BhZGRpbmcnLCAnMWVtIDAuNWVtJylcclxuICAgICAgICAgICAgLnN0eWxlKCdjdXJzb3InLCAncG9pbnRlcicpXHJcbiAgICAgICAgICAgIC5zdHlsZSgndGV4dC1zaGFkb3cnLCAnMCAwIDEwcHggI2VjY2M2OCcpXHJcbiAgICAgICAgICAgIC5zdHlsZSgndHJhbnNpdGlvbicsICcwLjNzJylcclxuICAgICAgICAgICAgLm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0eWxlKCd0ZXh0LXNoYWRvdycsICcwIDAgMTBweCAjZWNjYzY4JylcclxuICAgICAgICAgICAgICAgICAgICAuc3R5bGUoJ2NvbG9yJywgJyNlY2NjNjgnKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdHlsZSgndGV4dC1zaGFkb3cnLCAnMCAwIDIwcHggI2VjY2M2OCcpXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0eWxlKCdjb2xvcicsICd3aGl0ZScpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59Y2F0Y2ggKGUpe1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpLmlubmVySFRNTD0gZTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9