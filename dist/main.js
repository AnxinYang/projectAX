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
mainContent.style('width', '100vw').style('height', '100vh').style('background', '#222f3e').style('position', 'relative').style('transition', '5s').style('overflow', 'hidden').appendClass('mainContent').on('mousemove', function (e, d) {
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
    cc.storeValue('currentView', 'Home');
    cc.connect('currentView', function () {
        var currentView = cc.getValue('currentView');
        mainContainer.remove('.mainContent');
        switch (currentView) {
            case 'Home':
                mainContainer.appendElement(_home2.default);
                break;
        }
        root.appendElement(mainContainer);
    });

    var version = root.append('p', 'version').style('position', 'fixed').style('bottom', '0px').style('right', '0').style('padding-right', '1em').style('color', 'lightgray').content(new Date()).setUpdater('timer', function () {
        this.content('CubY_Routine: LasrCycleTime: ' + cr.lastCycleTime + 'ms | CPS:' + cr.cyclePerSec + ' |Longest: ' + cr.longestRoutineTime + 'ms | Last:' + cr.lastRoutineTime + 'ms');
    });
    var timer = cr.append('timer').attr('freq', 1).attr('action', version.updater('timer')).insert();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0ZyYW1ld29yay9DdWJZL0N1YllfQ29yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRnJhbWV3b3JrL0N1YlkvQ3ViWV9ET00uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0ZyYW1ld29yay9DdWJZL0N1YllfUm91dGluZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkVBLElBQU0saUJBQWlCLDBCQUFNLENBQTdCOzs0QkFFSTt1QkFBWSxRQUFPOzhCQUNmOztZQUFJLFFBQVEsU0FDWjtZQUFJLE9BQ0o7YUFBSyxLQUNSOzs7OztxQ0FFRztnQkFBSSxRQUFRLFVBQ1o7aUJBQUssWUFBWSxNQUFNLFNBQ3ZCO2lCQUFLLFVBQ0w7aUJBQUssWUFDTDtpQkFBSyxVQUFVLEtBQ2Y7bUJBQU8sS0FDVjs7OztxQ0FHRztnQkFBSSxPQUNKO2dCQUFJLFdBQ0o7Z0JBQUksVUFDSjtnQkFBSSxDQUFDLENB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UUFBUSxHQUNiLEtBQUssVUFBVSxRQUFRLFFBQVEsVUFFcEM7UUFBSSxlQUFlLGNBQWMsT0FBTyxNQUNuQyxNQUFNLGdCQUFnQixPQUN0QixNQUFNLFVBQ1g7UUFBSSxZQUFZLENBQUMsUUFBUSxtQkFDekI7WUFDQTtjQUFVLFFBQVEsVUFBVSxNQUN4QjtrQkFBVSx3QkFBd0IsT0FBTyxNQUFNLFVBQVUsTUFDcEQsUUFBUSxNQUNSLE1BQU0sU0FBUyxTQUNmLE1BQU0sV0FBVyxhQUNqQixNQUFNLFVBQVUsV0FDaEIsTUFBTSxlQUFlLG9CQUNyQixNQUFNLGNBQWMsUUFDcEIsR0FBRyxTQUFTLFlBQ1Q7ZUFBRyxXQUFXLGVBQ2pCO0FBVGdCLFdBVWhCLEdBQUcsYUFBYSxZQUNiO2lCQUFLLE1BQU0sZUFBZSxvQkFDckIsTUFBTSxTQUNkO0FBYmdCLFdBY2hCLEdBQUcsY0FBYyxZQUNkO2lCQUFLLE1BQU0sZUFBZSxvQkFDckIsTUFBTSxTQUNkO0FBQ1I7QUFDSjtBQTlJRCxFQThJQyxPQUFPLEdBQ0o7YUFBUyxlQUFlLE9BQU8sWUFDbEMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJjb25zdCBFTVBUWV9GVU5DVElPTiA9ICgpPT57fTtcclxuY2xhc3MgQ3ViWV9Db3Jle1xyXG4gICAgY29uc3RydWN0b3IoX3Byb3BzKXtcclxuICAgICAgICBsZXQgcHJvcHMgPSBwcm9wcyB8fCB7fTtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5pbml0KHByb3BzKTtcclxuICAgIH1cclxuICAgIGluaXQoX3Byb3BzKXtcclxuICAgICAgICBsZXQgcHJvcHMgPSBfcHJvcHMgfHwge307XHJcbiAgICAgICAgdGhpcy5kZWJ1Z01vZGUgPSBwcm9wcy5kZWJ1ZyB8fCBmYWxzZTtcclxuICAgICAgICB0aGlzLmRhdGFNYXAgPSB7fTtcclxuICAgICAgICB0aGlzLmFjdGlvbk1hcCA9IHt9O1xyXG4gICAgICAgIHRoaXMuYnJvd3NlciA9IHRoaXMuZ2V0QnJvd3NlcigpO1xyXG4gICAgICAgIHdpbmRvdy5heCA9IHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QnJvd3Nlcigpe1xyXG4gICAgICAgIGxldCBpc0lFID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IGlzQ2hyb21lID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IGlzT3BlcmEgPSBmYWxzZTtcclxuICAgICAgICBpZigoISF3aW5kb3cub3ByICYmICEhb3ByLmFkZG9ucykgfHwgISF3aW5kb3cub3BlcmEgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCcgT1BSLycpID49IDApe1xyXG4gICAgICAgICAgICBpc09wZXJhID0gdHJ1ZTtcclxuICAgICAgICAgICAgcmV0dXJuICdvcGVyYSc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHR5cGVvZiBJbnN0YWxsVHJpZ2dlciAhPT0gJ3VuZGVmaW5lZCcpe1xyXG4gICAgICAgICAgICByZXR1cm4gJ2ZpcmVmb3gnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZigvY29uc3RydWN0b3IvaS50ZXN0KHdpbmRvdy5IVE1MRWxlbWVudCkgfHwgKGZ1bmN0aW9uIChwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcC50b1N0cmluZygpID09PSBcIltvYmplY3QgU2FmYXJpUmVtb3RlTm90aWZpY2F0aW9uXVwiO1xyXG4gICAgICAgICAgICB9KSghd2luZG93WydzYWZhcmknXSB8fCBzYWZhcmkucHVzaE5vdGlmaWNhdGlvbikpe1xyXG4gICAgICAgICAgICByZXR1cm4gJ3NhZmFyaSc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGZhbHNlIHx8ICEhZG9jdW1lbnQuZG9jdW1lbnRNb2RlKXtcclxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBvdXRwdXQgPSBhcmd1bWVudHNbMF07XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBhcmd1bWVudHNbaV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9iaiA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0W2tleV0gPSBvYmpba2V5XTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb3V0cHV0O1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBpc0lFID10cnVlO1xyXG4gICAgICAgICAgICByZXR1cm4gJ2llJztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoIWlzSUUgJiYgISF3aW5kb3cuU3R5bGVNZWRpYSl7XHJcbiAgICAgICAgICAgIHJldHVybiAnZWRnZSc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCEhd2luZG93LmNocm9tZSAmJiAhIXdpbmRvdy5jaHJvbWUud2Vic3RvcmUpe1xyXG4gICAgICAgICAgICBpc0Nocm9tZSA9IHRydWVcclxuICAgICAgICAgICAgcmV0dXJuICdjaHJvbWUnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZigoaXNDaHJvbWUgfHwgaXNPcGVyYSkgJiYgISF3aW5kb3cuQ1NTKXtcclxuICAgICAgICAgICAgcmV0dXJuICdibGluayc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0b3JlRGF0YUFycmF5KF9hcnJheSwgX2lkS2V5LCBfaXRlbVByb2Nlc3NvciwgX29wdGlvbnMsIF9jYWxsYmFjaykge1xyXG4gICAgICAgIHZhciBvcHRpb25zID0gX29wdGlvbnMgfHwge307XHJcbiAgICAgICAgdmFyIGlkS2V5ID0gX2lkS2V5IHx8ICdpZCc7XHJcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gX2NhbGxiYWNrIHx8IEVNUFRZX0ZVTkNUSU9OO1xyXG4gICAgICAgIHZhciBhcnJheSA9IF9hcnJheSB8fCBbXTtcclxuICAgICAgICB2YXIgaXRlbUxpc3QgPSBbXTtcclxuICAgICAgICB2YXIgaXRlbVByb2Nlc3NvciA9IF9pdGVtUHJvY2Vzc29yIHx8IEVNUFRZX0ZVTkNUSU9OO1xyXG5cclxuICAgICAgICBhcnJheS5mb3JFYWNoKGZ1bmN0aW9uIChfaXRlbSkge1xyXG4gICAgICAgICAgICB2YXIga2V5ID0gX2l0ZW1baWRLZXldO1xyXG4gICAgICAgICAgICBpZiAoa2V5ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIGl0ZW0gPSBzZWxmLnN0b3JlVmFsdWUoa2V5LCBfaXRlbSwgX29wdGlvbnMpO1xyXG5cclxuICAgICAgICAgICAgaXRlbVByb2Nlc3NvcihpdGVtKTtcclxuICAgICAgICAgICAgaXRlbUxpc3QucHVzaChpdGVtKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY2FsbGJhY2soX2FycmF5LCBpdGVtTGlzdCk7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW1MaXN0O1xyXG4gICAgfTtcclxuXHJcbiAgICBzdG9yZVZhbHVlKF9rZXksIF92YWx1ZSwgX29wdGlvbnMsIF9jYWxsYmFjaykge1xyXG4gICAgICAgIHZhciBvcHRpb25zID0gX29wdGlvbnMgfHwge307XHJcbiAgICAgICAgdmFyIHN0b3JlID0gdGhpcy5kYXRhTWFwO1xyXG4gICAgICAgIHZhciBrZXkgPSBfa2V5O1xyXG4gICAgICAgIHZhciBjYWxsYmFjayA9IF9jYWxsYmFjayB8fCBFTVBUWV9GVU5DVElPTjtcclxuICAgICAgICB2YXIgbmV3VmFsdWUgPSBfdmFsdWU7XHJcbiAgICAgICAgdmFyIGl0ZW0gPSBzdG9yZVtrZXldIHx8IHt9O1xyXG4gICAgICAgIGlmKGl0ZW0gPT09IE9iamVjdChpdGVtKSAmJiBvcHRpb25zLm92ZXJ3cml0ZSE9PXRydWUpIHtcclxuICAgICAgICAgICAgaXRlbSA9IE9iamVjdC5hc3NpZ24oaXRlbSwgbmV3VmFsdWUpO1xyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgaXRlbSA9IG5ld1ZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRhdGFNYXBba2V5XSA9IGl0ZW07XHJcblxyXG4gICAgICAgIGNhbGxiYWNrKGl0ZW0pO1xyXG4gICAgICAgIHRoaXMucmVhY3Qoa2V5KTtcclxuICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgIH07XHJcbiAgICBnZXRWYWx1ZShfa2V5KSB7XHJcbiAgICAgICAgdmFyIGtleSA9IF9rZXkgfHwgJyc7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YU1hcFtrZXldO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25uZWN0KF9rZXksX2FjdGlvbikge1xyXG4gICAgICAgIGlmKF9rZXk9PT11bmRlZmluZWQgfHwgX2FjdGlvbj09PXVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBhY3Rpb25NYXAgPSB0aGlzLmFjdGlvbk1hcDtcclxuICAgICAgICB2YXIgYWN0aW9uTGlzdCA9IGFjdGlvbk1hcFtfa2V5XSB8fCBbXTtcclxuICAgICAgICBhY3Rpb25MaXN0LnB1c2goX2FjdGlvbik7XHJcbiAgICAgICAgYWN0aW9uTWFwW19rZXldID0gYWN0aW9uTGlzdDtcclxuICAgIH07XHJcbiAgICByZWFjdChfa2V5KSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGlmKF9rZXk9PT11bmRlZmluZWQpe1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgYWN0aW9uTWFwID0gdGhpcy5hY3Rpb25NYXA7XHJcbiAgICAgICAgdmFyIGFjdGlvbkxpc3QgPSBhY3Rpb25NYXBbX2tleV0gfHwgW107XHJcbiAgICAgICAgYWN0aW9uTGlzdC5mb3JFYWNoKChhY3Rpb24pPT4ge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gc2VsZi5nZXRWYWx1ZShfa2V5KTtcclxuICAgICAgICAgICAgICAgIGFjdGlvbih2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1jYXRjaCAoZSl7XHJcbiAgICAgICAgICAgICAgICAvL3ZhciBpbmRleCA9IGFjdGlvbkxpc3QuaW5kZXhPZihhY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgLy9hY3Rpb25MaXN0LnNwbGljZShpbmRleCwxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9O1xyXG4gICAgZGVidWcoc3RyKSB7XHJcbiAgICAgICAgaWYodGhpcy5kZWJ1Z01vZGUpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnREVCVUc6ICcgKyBzdHIpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuY29uc3QgY2MgPSBuZXcgQ3ViWV9Db3JlKCk7XHJcbndpbmRvdy5jYyA9IGNjO1xyXG5leHBvcnQgZGVmYXVsdCBjYztcclxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgQW54aW4gWWFuZyBvbiA1LzI2LzIwMTguXHJcbiAqL1xyXG5pbXBvcnQgQVhDb3JlIGZyb20gJy4vQ3ViWV9Db3JlJztcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3ViWV9ET00ge1xyXG4gICAgY29uc3RydWN0b3IoX3RhZyxfaWQsX3Jvb3QpIHtcclxuICAgICAgICB0aGlzLmlkID0gdGhpcy5yZWFkVmFsdWUoX2lkKXx8ICdzZWxmJztcclxuICAgICAgICB0aGlzLnRhZyA9IHRoaXMucmVhZFZhbHVlKF90YWcpIHx8ICdkaXYnO1xyXG4gICAgICAgIHRoaXMuZG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0aGlzLnRhZyk7XHJcbiAgICAgICAgdGhpcy5kb20uc2V0QXR0cmlidXRlKCdpZCcsdGhpcy5pZCk7XHJcbiAgICAgICAgdGhpcy5jaGlsZHJlbkxpc3QgPSBbXTtcclxuICAgICAgICB0aGlzLmF0dHJpYnV0ZSA9IHt9O1xyXG4gICAgICAgIHRoaXMuZG9tU3R5bGUgPSB7fTtcclxuICAgICAgICB0aGlzLnVwZGF0ZXJzID0ge307XHJcbiAgICAgICAgdGhpcy5wYXJlbnQgPSB7fTtcclxuXHJcbiAgICAgICAgaWYoX3Jvb3Qpe1xyXG4gICAgICAgICAgICBfcm9vdC5hcHBlbmRDaGlsZCh0aGlzLmRvbSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLnVwZGF0ZXIgPSBmdW5jdGlvbiAobmFtZSkge1xyXG4gICAgICAgICAgICBsZXQgdXBkYXRlciA9dGhpcy51cGRhdGVyc1tuYW1lXTtcclxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmKHVwZGF0ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVyLmNhbGwoc2VsZiwgc2VsZi5kYXRhLCBhcmd1bWVudHMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIHNldFVwZGF0ZXIobmFtZSx1cGRhdGVyKXtcclxuICAgICAgICB0aGlzLnVwZGF0ZXJzW25hbWVdID0gdXBkYXRlcjtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIGJpbmQoZGF0YSl7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIGFwcGVuZChfdGFnLF9pZCl7XHJcbiAgICAgICAgbGV0IHRhZyA9IHRoaXMucmVhZFZhbHVlKF90YWcpO1xyXG4gICAgICAgIGxldCBpZCA9IHRoaXMucmVhZFZhbHVlKF9pZCk7XHJcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBuZXcgQ3ViWV9ET00odGFnLGlkKTtcclxuICAgICAgICB0aGlzLmFwcGVuZEVsZW1lbnQoZWxlbWVudCk7XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgICBhcHBlbmRFbGVtZW50KEN1YllfRE9NKXtcclxuICAgICAgICBsZXQgZWxlbWVudCA9IHRoaXMucmVhZFZhbHVlKEN1YllfRE9NKTtcclxuICAgICAgICBlbGVtZW50LnBhcmVudCA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5jaGlsZHJlbkxpc3QucHVzaChlbGVtZW50KTtcclxuICAgICAgICB0aGlzLmRvbS5hcHBlbmRDaGlsZChlbGVtZW50LmRvbSk7XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgICBhdHRyKGtleSxfdmFsdWUpe1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IHRoaXMucmVhZFZhbHVlKF92YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuZG9tLnNldEF0dHJpYnV0ZShrZXksdmFsdWUpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgb24oZXZlbnROYW1lLF92YWx1ZSl7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gX3ZhbHVlO1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLm9uW2V2ZW50TmFtZV0gPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLmRvbS5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSxmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICB2YWx1ZS5jYWxsKHNlbGYsZSxzZWxmLmRhdGEsKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgc3R5bGUoX2tleSxfdmFsdWUpe1xyXG4gICAgICAgIGxldCBrZXkgPSB0aGlzLnJlYWRWYWx1ZShfa2V5KTtcclxuICAgICAgICBsZXQgdmFsdWUgPSB0aGlzLnJlYWRWYWx1ZShfdmFsdWUpO1xyXG4gICAgICAgIHRoaXMuZG9tU3R5bGVba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuZG9tLnN0eWxlW2tleV0gPSB2YWx1ZTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIGNvbnRlbnQoX3ZhbHVlKXtcclxuICAgICAgICBsZXQgdmFsdWUgPSB0aGlzLnJlYWRWYWx1ZShfdmFsdWUpO1xyXG4gICAgICAgIHRoaXMuaW5uZXJIVE1MID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5kb20uaW5uZXJIVE1MID0gdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBhcHBlbmRDbGFzcyhfY2xhc3NOYW1lKXtcclxuICAgICAgICBsZXQgY2xhc3NOYW1lID0gdGhpcy5yZWFkVmFsdWUoX2NsYXNzTmFtZSk7XHJcbiAgICAgICAgbGV0IGNsYXNzZXMgPSB0aGlzLmNsYXNzZXMgfHwgW107XHJcbiAgICAgICAgY2xhc3Nlcy5wdXNoKGNsYXNzTmFtZSk7XHJcbiAgICAgICAgdGhpcy5kb20uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gICAgICAgIHRoaXMuY2xhc3NlcyA9IGNsYXNzZXM7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBzZWxlY3QoX3NlbGVjdG9yKXtcclxuICAgICAgICBsZXQgc2VsZWN0b3IgPSBfc2VsZWN0b3IuY2hhckF0KDApO1xyXG4gICAgICAgIGxldCBuYW1lID0gX3NlbGVjdG9yLnN1YnN0cmluZygxKTtcclxuICAgICAgICBzd2l0Y2ggKHNlbGVjdG9yKXtcclxuICAgICAgICAgICAgY2FzZSAnIyc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RCeUlkKG5hbWUpO1xyXG4gICAgICAgICAgICBjYXNlICcuJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNlbGVjdEJ5Q2xhc3NOYW1lKG5hbWUpO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0QnlUYWcoX3NlbGVjdG9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzZWxlY3RCeUlkKGlkKXtcclxuICAgICAgICBsZXQgY2hpbGRyZW5MaXN0ID0gdGhpcy5jaGlsZHJlbkxpc3Q7XHJcbiAgICAgICAgbGV0IHRhcmdldDtcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpPGNoaWxkcmVuTGlzdC5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5MaXN0W2ldO1xyXG4gICAgICAgICAgICBpZihjaGlsZC5pZCA9PT0gaWQpe1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gY2hpbGQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xyXG4gICAgfVxyXG4gICAgc2VsZWN0QnlDbGFzc05hbWUoY2xhc3NOYW1lKXtcclxuICAgICAgICBsZXQgY2hpbGRyZW5MaXN0ID0gdGhpcy5jaGlsZHJlbkxpc3Q7XHJcbiAgICAgICAgbGV0IHRhcmdldExpc3QgPSBbXTtcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpPGNoaWxkcmVuTGlzdC5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5MaXN0W2ldO1xyXG4gICAgICAgICAgICBpZihjaGlsZC5jbGFzc2VzLmluZGV4T2YoY2xhc3NOYW1lKT4tMSl7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRMaXN0LnB1c2goY2hpbGQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0YXJnZXRMaXN0O1xyXG4gICAgfVxyXG4gICAgc2VsZWN0QnlUYWcoX3RhZyl7XHJcbiAgICAgICAgbGV0IGNoaWxkcmVuTGlzdCA9IHRoaXMuY2hpbGRyZW5MaXN0O1xyXG4gICAgICAgIGxldCB0YXJnZXRMaXN0ID0gW107XHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaTxjaGlsZHJlbkxpc3QubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuTGlzdFtpXTtcclxuICAgICAgICAgICAgaWYoY2hpbGQudGFnID09PSBfdGFnKXtcclxuICAgICAgICAgICAgICAgIHRhcmdldExpc3QucHVzaChjaGlsZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRhcmdldExpc3Q7XHJcbiAgICB9XHJcbiAgICByZW1vdmUoX3NlbGVjdG9yKXtcclxuICAgICAgICBpZihfc2VsZWN0b3I9PXVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlU2VsZigpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBzZWxlY3RvciA9IF9zZWxlY3Rvci5jaGFyQXQoMCk7XHJcbiAgICAgICAgbGV0IG5hbWUgPSBfc2VsZWN0b3Iuc3Vic3RyaW5nKDEpO1xyXG4gICAgICAgIGxldCB0YXJnZXQ7XHJcbiAgICAgICAgc3dpdGNoIChzZWxlY3Rvcil7XHJcbiAgICAgICAgICAgIGNhc2UgJyMnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVCeUlkKG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJy4nOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVCeUNsYXNzTmFtZShuYW1lKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVCeVRhZyhfc2VsZWN0b3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlbW92ZUJ5SWQoaWQpe1xyXG4gICAgICAgIGxldCBjaGlsZHJlbkxpc3QgPSB0aGlzLmNoaWxkcmVuTGlzdDtcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpPGNoaWxkcmVuTGlzdC5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5MaXN0W2ldO1xyXG4gICAgICAgICAgICBpZihjaGlsZC5pZCA9PT0gaWQpe1xyXG4gICAgICAgICAgICAgICAgY2hpbGRyZW5MaXN0LnNwbGljZShpLDEpO1xyXG4gICAgICAgICAgICAgICAgY2hpbGQucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICBpLS07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlbW92ZUJ5Q2xhc3NOYW1lKGNsYXNzTmFtZSl7XHJcbiAgICAgICAgbGV0IGNoaWxkcmVuTGlzdCA9IHRoaXMuY2hpbGRyZW5MaXN0O1xyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGk8Y2hpbGRyZW5MaXN0Lmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICBsZXQgY2hpbGQgPSBjaGlsZHJlbkxpc3RbaV07XHJcbiAgICAgICAgICAgIGlmKGNoaWxkLmNsYXNzZXMuaW5kZXhPZihjbGFzc05hbWUpPi0xKXtcclxuICAgICAgICAgICAgICAgIGNoaWxkcmVuTGlzdC5zcGxpY2UoaSwxKTtcclxuICAgICAgICAgICAgICAgIGNoaWxkLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgaS0tO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVtb3ZlQnlUYWcoX3RhZyl7XHJcbiAgICAgICAgbGV0IGNoaWxkcmVuTGlzdCA9IHRoaXMuY2hpbGRyZW5MaXN0O1xyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGk8Y2hpbGRyZW5MaXN0Lmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICBsZXQgY2hpbGQgPSBjaGlsZHJlbkxpc3RbaV07XHJcbiAgICAgICAgICAgIGlmKGNoaWxkLnRhZyA9PT0gX3RhZyl7XHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlbkxpc3Quc3BsaWNlKGksMSk7XHJcbiAgICAgICAgICAgICAgICBjaGlsZC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgIGktLTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlbW92ZVNlbGYoKXtcclxuICAgICAgICAvKnRoaXMuY2hpbGRyZW5MaXN0LmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgICAgICAgIGNoaWxkLnJlbW92ZSgpO1xyXG4gICAgICAgIH0pOyovXHJcbiAgICAgICAgdGhpcy5kb20ucmVtb3ZlKCk7XHJcbiAgICAgICAgaWYodGhpcy5wYXJlbnQpe1xyXG4gICAgICAgICAgICBsZXQgY2hpbGRyZW5MaXN0ID0gdGhpcy5wYXJlbnQuY2hpbGRyZW5MaXN0O1xyXG4gICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpPGNoaWxkcmVuTGlzdC5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuTGlzdFtpXTtcclxuICAgICAgICAgICAgICAgIGlmKGNoaWxkID09PSB0aGlzKXtcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbkxpc3Quc3BsaWNlKGksMSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qZm9yKHZhciBrZXkgaW4gdGhpcyl7XHJcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzW2tleV1cclxuICAgICAgICB9Ki9cclxuICAgIH1cclxuICAgIHJlYWRWYWx1ZShfdmFsdWUpe1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IF92YWx1ZTtcclxuICAgICAgICBpZih0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIil7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZS5jYWxsKHRoaXMsdGhpcy5kYXRhKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImNvbnN0IE1BWF9DWUNMRSA9IDEwMDtcclxuY2xhc3MgQ3ViWV9Sb3V0aW5le1xyXG4gICAgY29uc3RydWN0b3IoX3RpY2tTcGVlZCxfb3B0aW9ucyl7XHJcbiAgICAgICAgdGhpcy50aWNrU3BlZWQgPSBfdGlja1NwZWVkIHx8IDE7XHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBfb3B0aW9ucyB8fCB7fTtcclxuICAgICAgICB0aGlzLmluaXQob3B0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5NQVhfQ1lDTEUgPSBNQVhfQ1lDTEU7XHJcbiAgICB9XHJcbiAgICBpbml0KG9wdGlvbnMpe1xyXG4gICAgICAgIHdpbmRvdy5BWFIgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuY3ljbGUgPSAwO1xyXG4gICAgICAgIHRoaXMucm91dGluZUxpc3QgPSBbXTtcclxuICAgICAgICB0aGlzLmxvbmdlc3RSb3V0aW5lVGltZSA9MDtcclxuICAgICAgICBzZXRUaW1lb3V0KHRoaXMuc3RhcnQuYmluZCh0aGlzKSk7XHJcbiAgICB9O1xyXG4gICAgc3RhcnQoKXtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5jeWNsZVN0YXJ0VGltZSA9IERhdGUubm93KCk7XHJcbiAgICAgICAgc2V0VGltZW91dChzZWxmLnJvdXRpbmUuYmluZCh0aGlzKSx0aGlzLnRpY2tTcGVlZCk7XHJcbiAgICB9XHJcbiAgICBhcHBlbmQobmFtZSxncm91cCkge1xyXG4gICAgICAgIGxldCBuZXdSb3V0aW5lID0gbmV3IFJvdXRpbmUobmFtZSwgZ3JvdXApO1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBuZXdSb3V0aW5lLmluc2VydD0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZihuZXdSb3V0aW5lLmZyZXEhPT0xKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdSb3V0aW5lLmNvdW50ZXIgKz0gc2VsZi5yb3V0aW5lTGlzdC5sZW5ndGggKyAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG5ld1JvdXRpbmUuaWR4ID0gc2VsZi5yb3V0aW5lTGlzdC5sZW5ndGg7XHJcbiAgICAgICAgICAgIHNlbGYucm91dGluZUxpc3QucHVzaChuZXdSb3V0aW5lKTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ld1JvdXRpbmU7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBuZXdSb3V0aW5lLnJlbW92ZT0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzZWxmLnJvdXRpbmVMaXN0LnNwbGljZShuZXdSb3V0aW5lLmlkeCwxKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBuZXdSb3V0aW5lO1xyXG4gICAgfVxyXG4gICAgZ2V0Q3VycmVudEN5Y2xlKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3ljbGU7XHJcbiAgICB9XHJcbiAgICByb3V0aW5lKCl7XHJcbiAgICAgICAgbGV0IHJvdXRpbmVMaXN0ID0gdGhpcy5yb3V0aW5lTGlzdDtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgZm9yKHZhciBpPTA7aTxyb3V0aW5lTGlzdC5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgbGV0IHJvdXRpbmUgPSByb3V0aW5lTGlzdFtpXTtcclxuICAgICAgICAgICAgbGV0IHN0YXJ0VGltZSA9IERhdGUubm93KCk7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBpZihyb3V0aW5lLmNoZWNrQ291bnRlcigpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0aW5lLmFjdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmxhc3RSb3V0aW5lVGltZSA9IERhdGUubm93KCkgLSBzdGFydFRpbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHNlbGYubG9uZ2VzdFJvdXRpbmVUaW1lPHNlbGYubGFzdFJvdXRpbmVUaW1lKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYubG9uZ2VzdFJvdXRpbmVUaW1lPXNlbGYubGFzdFJvdXRpbmVUaW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHNlbGYubGFzdFJvdXRpbmVUaW1lPjIwMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ1JvdXRpbmU6JyArIHJvdXRpbmUubmFtZSArICcgdG9vayB0b28gbG9uZyB0byBydW4uIFsnK3NlbGYubGFzdFJvdXRpbmVUaW1lKydtc10nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRpbmUuaXNSdW5uaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfWNhdGNoIChlKXtcclxuICAgICAgICAgICAgICAgIC8vREVDSURFIElGIFJFTU9WRSBST1VUSU5FIExBVEVSO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY3ljbGUrKztcclxuICAgICAgICBpZih0aGlzLmN5Y2xlID09PSBNQVhfQ1lDTEUpe1xyXG4gICAgICAgICAgICB0aGlzLmN5Y2xlID0gMDtcclxuICAgICAgICAgICAgdGhpcy5sYXN0Q3ljbGVUaW1lID0gRGF0ZS5ub3coKSAtIHRoaXMuY3ljbGVTdGFydFRpbWU7XHJcbiAgICAgICAgICAgIHRoaXMuY3ljbGVQZXJTZWMgPSBNYXRoLmZsb29yKDEwMDAgLyB0aGlzLmxhc3RDeWNsZVRpbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnN0YXJ0KCk7XHJcbiAgICB9XHJcbn1cclxuY2xhc3MgUm91dGluZXtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUsZ3JvdXApe1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5ncm91cCA9IGdyb3VwIHx8ICdjb21tb24nO1xyXG4gICAgICAgIHRoaXMuZnJlcSA9IDE7XHJcbiAgICAgICAgdGhpcy5hY3Rpb24gPSBmdW5jdGlvbiAoKSB7fTtcclxuICAgICAgICB0aGlzLnJlcGVhdCA9IDA7XHJcbiAgICB9XHJcbiAgICBhdHRyKGtleSx2YWx1ZSl7XHJcbiAgICAgICAgdGhpc1trZXldID0gdmFsdWU7XHJcbiAgICAgICAgaWYoa2V5PT09J2ZyZXEnKXtcclxuICAgICAgICAgICAgdGhpc1snY291bnRlciddID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgcmVzZXRDb3VudGVyKCl7XHJcbiAgICAgICAgdGhpcy5jb3VudGVyID0gdGhpcy5mcmVxO1xyXG4gICAgfVxyXG4gICAgY2hlY2tDb3VudGVyKCl7XHJcbiAgICAgICAgaWYodGhpcy5pc1J1bm5pbmc9PT10cnVlKXtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHNob3VsZFJ1biA9IC0tdGhpcy5jb3VudGVyPT09MDtcclxuICAgICAgICBpZih0aGlzLmNvdW50ZXI9PT0wKXtcclxuICAgICAgICAgICAgaWYodGhpcy5leGVjdXRpb25UaW1lcyE9PXVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmV4ZWN1dGlvblRpbWVzLS07XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmV4ZWN1dGlvblRpbWVzPT09MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmlzUnVubmluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMucmVzZXRDb3VudGVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgcmV0dXJuIHNob3VsZFJ1bjtcclxuICAgIH1cclxuXHJcbn1cclxuY29uc3QgY3IgPSBuZXcgQ3ViWV9Sb3V0aW5lKCk7XHJcbndpbmRvdy5jciA9IGNyO1xyXG5leHBvcnQgZGVmYXVsdCBjcjsiLCJpbXBvcnQgQ3ViWV9ET00gZnJvbSAnLi9GcmFtZXdvcmsvQ3ViWS9DdWJZX0RPTSc7XHJcblxyXG5cclxudmFyIG1haW5Db250ZW50ID0gbmV3IEN1YllfRE9NKCdkaXYnLCdob21lQ29udGVudCcpO1xyXG5tYWluQ29udGVudC5zdHlsZSgnd2lkdGgnLCcxMDB2dycpXHJcbiAgICAuc3R5bGUoJ2hlaWdodCcsJzEwMHZoJylcclxuICAgIC5zdHlsZSgnYmFja2dyb3VuZCcsJyMyMjJmM2UnKVxyXG4gICAgLnN0eWxlKCdwb3NpdGlvbicsJ3JlbGF0aXZlJylcclxuICAgIC5zdHlsZSgndHJhbnNpdGlvbicsICc1cycpXHJcbiAgICAuc3R5bGUoJ292ZXJmbG93JywnaGlkZGVuJylcclxuICAgIC5hcHBlbmRDbGFzcygnbWFpbkNvbnRlbnQnKVxyXG4gICAgLm9uKCdtb3VzZW1vdmUnLGZ1bmN0aW9uIChlLGQpIHtcclxuICAgICAgICBsZXQgeCA9IGUuY2xpZW50WDtcclxuICAgICAgICBsZXQgeSA9IGUuY2xpZW50WTtcclxuICAgICAgICBsZXQgb3JpZ2luID0ge1xyXG4gICAgICAgICAgICB4OiB3aW5kb3cuaW5uZXJXaWR0aC8yLFxyXG4gICAgICAgICAgICB5OiB3aW5kb3cuaW5uZXJIZWlnaHQvMlxyXG4gICAgICAgIH07XHJcbiAgICAgICAgbWFpbkNvbnRlbnQuZHggPSAtKHggLSBvcmlnaW4ueCkvMTA7XHJcbiAgICAgICAgbWFpbkNvbnRlbnQuZHkgPSAtKHkgLSBvcmlnaW4ueSkvMTA7XHJcblxyXG4gICAgfSk7XHJcbnZhciBiYWNrZ3JvdW5kQW4gPSBjci5hcHBlbmQoJ2JhY2tncm91bmRBbicpXHJcbiAgICAuYXR0cignZnJlcScsMjAwKVxyXG4gICAgLmF0dHIoJ2V4ZWN1dGlvblRpbWVzJywxKVxyXG4gICAgLmF0dHIoJ2FjdGlvbicsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIG1haW5Db250ZW50LnN0eWxlKCdiYWNrZ3JvdW5kJywnYmxhY2snKVxyXG4gICAgfSkuaW5zZXJ0KCk7XHJcblxyXG52YXIgaGVhZExpbmUgPSBtYWluQ29udGVudC5hcHBlbmQoJ2gxJywnaGVhZExpbmUnKVxyXG4gICAgLmNvbnRlbnQoJ0ZST05UIEVORCBFTkdJTkVFUicpXHJcbiAgICAuc3R5bGUoJ3Bvc2l0aW9uJywnZml4ZWQnKVxyXG4gICAgLnN0eWxlKCdjb2xvcicsJ3doaXRlJylcclxuICAgIC5zdHlsZSgnd2lkdGgnLCcxMDAlJylcclxuICAgIC5zdHlsZSgnaGVpZ2h0JywgJzYwcHgnKVxyXG4gICAgLnN0eWxlKCd0ZXh0LWFsaWduJywnY2VudGVyJylcclxuICAgIC5zdHlsZSgnbGVmdCcsJzAnKVxyXG4gICAgLnN0eWxlKCdyaWdodCcsJzAnKVxyXG4gICAgLnN0eWxlKCdib3R0b20nLCczMyUnKVxyXG4gICAgLnN0eWxlKCdtYXJnaW4nLCdhdXRvJylcclxuICAgIC5zdHlsZSgnZm9udC1zaXplJywnNjRweCcpXHJcbiAgICAuc3R5bGUoJ3RyYW5zaXRpb24nLCAnMXMnKVxyXG4gICAgLnN0eWxlKCd0ZXh0LXNoYWRvdycsJzAgMCAxMHB4ICM3MGExZmYnKVxyXG4gICAgLnN0eWxlKCd6LWluZGV4JywxKVxyXG4gICAgLm9uKCdtb3VzZW92ZXInLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnN0eWxlKCd0ZXh0LXNoYWRvdycsJzAgMCAzMHB4ICNlY2NjNjgnKVxyXG4gICAgfSlcclxuICAgIC5vbignbW91c2VsZWF2ZScsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuc3R5bGUoJ3RleHQtc2hhZG93JywnMCAwIDEwcHggIzcwYTFmZicpXHJcbiAgICB9KTtcclxudmFyIGhvbWVIZWFkTGluZUFuaW1hdGlvbiA9IGNyLmFwcGVuZCgnaG9tZV9oZWFkTGluZV9hbmltYXRpb24nKVxyXG4gICAgLmF0dHIoJ2ZyZXEnLDI1KVxyXG4gICAgLmF0dHIoJ2FjdGlvbicsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCBvZGQgPSBNYXRoLnJhbmRvbSgpKjEwMDtcclxuICAgICAgICBpZihvZGQ+NTApe1xyXG4gICAgICAgICAgICBoZWFkTGluZS5zdHlsZSgndGV4dC1zaGFkb3cnLCcwIDAgMzBweCAjZWNjYzY4JylcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgaGVhZExpbmUuc3R5bGUoJ3RleHQtc2hhZG93JywnMCAwIDEwcHggIzcwYTFmZicpXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIC5pbnNlcnQoKTtcclxuXHJcbnZhciBzdWJIZWFkTGluZSA9IG1haW5Db250ZW50LmFwcGVuZCgnaDEnLCdzdWJIZWFkTGluZScpXHJcbiAgICAuY29udGVudCgnLSB3aG8gbWFrZXMgZGF0YSBhbGl2ZSAtJylcclxuICAgIC5zdHlsZSgncG9zaXRpb24nLCdmaXhlZCcpXHJcbiAgICAuc3R5bGUoJ2NvbG9yJywnI2VjY2M2OCcpXHJcbiAgICAuc3R5bGUoJ3dpZHRoJywnMTAwJScpXHJcbiAgICAuc3R5bGUoJ2hlaWdodCcsICczMHB4JylcclxuICAgIC5zdHlsZSgndGV4dC1hbGlnbicsJ2NlbnRlcicpXHJcbiAgICAuc3R5bGUoJ2xlZnQnLCcwJylcclxuICAgIC5zdHlsZSgncmlnaHQnLCcwJylcclxuICAgIC5zdHlsZSgnYm90dG9tJywnMzAlJylcclxuICAgIC5zdHlsZSgnbWFyZ2luJywnYXV0bycpXHJcbiAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsJzMycHgnKVxyXG4gICAgLnN0eWxlKCd0cmFuc2l0aW9uJywgJzFzJylcclxuICAgIC5zdHlsZSgndGV4dC1zaGFkb3cnLCcwIDAgMTBweCAjZWNjYzY4JylcclxuICAgIC5zdHlsZSgnei1pbmRleCcsMSk7XHJcbnZhciBpbmZvQnV0dG9uSGFsbyA9IG1haW5Db250ZW50LmFwcGVuZCgnc3BhbicsJ2luZm9CdXR0b25IYWxvJylcclxuICAgIC5zdHlsZSgncG9zaXRpb24nLCdmaXhlZCcpXHJcbiAgICAuc3R5bGUoJ2NvbG9yJywnI2VjY2M2OCcpXHJcbiAgICAuc3R5bGUoJ3dpZHRoJywnMzJweCcpXHJcbiAgICAuc3R5bGUoJ2hlaWdodCcsICczMnB4JylcclxuICAgIC5zdHlsZSgnb3ZlcmZsb3cnLCdoaWRkZW4nKVxyXG4gICAgLnN0eWxlKCdib3JkZXItcmFkaXVzJywnNHB4JylcclxuICAgIC5zdHlsZSgndGV4dC1hbGlnbicsJ2NlbnRlcicpXHJcbiAgICAuc3R5bGUoJ2xlZnQnLCcwJylcclxuICAgIC5zdHlsZSgncmlnaHQnLCcwJylcclxuICAgIC5zdHlsZSgnYm90dG9tJywnMTglJylcclxuICAgIC5zdHlsZSgnbWFyZ2luJywnYXV0bycpXHJcbiAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsJzI0cHgnKVxyXG4gICAgLnN0eWxlKCd0cmFuc2l0aW9uJywgJzAuNXMnKVxyXG4gICAgLnN0eWxlKCdib3JkZXInLCcxcHggc29saWQgI2VjY2M2OCcpXHJcbiAgICAuc3R5bGUoJ2JveC1zaGFkb3cnLCcwIDAgMzBweCAjZWNjYzY4JylcclxuICAgIC5zdHlsZSgnY3Vyc29yJywncG9pbnRlcicpXHJcbiAgICAuc3R5bGUoJ3otaW5kZXgnLDEpO1xyXG52YXIgaW5mb0J1dHRvbiA9IG1haW5Db250ZW50LmFwcGVuZCgnc3BhbicsJ2luZm9CdXR0b24nKVxyXG4gICAgLmNvbnRlbnQoJ1dhbm5hIGtub3cgbW9yZT8nKVxyXG4gICAgLnN0eWxlKCdwb3NpdGlvbicsJ2ZpeGVkJylcclxuICAgIC5zdHlsZSgnY29sb3InLCcjZWNjYzY4JylcclxuICAgIC5zdHlsZSgnd2lkdGgnLCczMnB4JylcclxuICAgIC5zdHlsZSgnaGVpZ2h0JywgJzMycHgnKVxyXG4gICAgLnN0eWxlKCdvdmVyZmxvdycsJ2hpZGRlbicpXHJcbiAgICAuc3R5bGUoJ2JvcmRlcicsJzFweCBzb2xpZCB0cmFuc3BhcmVudCcpXHJcbiAgICAuc3R5bGUoJ2JvcmRlci1yYWRpdXMnLCc0cHgnKVxyXG4gICAgLnN0eWxlKCd0ZXh0LWFsaWduJywnY2VudGVyJylcclxuICAgIC5zdHlsZSgnbGVmdCcsJzAnKVxyXG4gICAgLnN0eWxlKCdyaWdodCcsJzAnKVxyXG4gICAgLnN0eWxlKCdib3R0b20nLCcxOCUnKVxyXG4gICAgLnN0eWxlKCdtYXJnaW4nLCdhdXRvJylcclxuICAgIC5zdHlsZSgnZm9udC1zaXplJywnMjRweCcpXHJcbiAgICAuc3R5bGUoJ3RyYW5zaXRpb24nLCAnMC41cycpXHJcbiAgICAuc3R5bGUoJ2JhY2tncm91bmQnLCAnI2VjY2M2OCcpXHJcbiAgICAuc3R5bGUoJ3RleHQtc2hhZG93JywnMCAwIDVweCAjZWNjYzY4JylcclxuICAgIC5zdHlsZSgnYm94LXNoYWRvdycsJzAgMCAxMHggI2VjY2M2OCcpXHJcbiAgICAuc3R5bGUoJ2N1cnNvcicsJ3BvaW50ZXInKVxyXG4gICAgLnN0eWxlKCd6LWluZGV4JywxKVxyXG4gICAgLm9uKCdjbGljaycsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNjLnN0b3JlVmFsdWUoJ2N1cnJlbnRWaWV3JywnYWJvdXQnKTtcclxuICAgIH0pXHJcbiAgICAub24oJ21vdXNlb3ZlcicsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuc3R5bGUoJ2JhY2tncm91bmQnLCdyZ2JhKDAsIDAsIDAsIDAuNSknKVxyXG4gICAgICAgICAgICAuc3R5bGUoJ3dpZHRoJywnMTAwJScpXHJcbiAgICAgICAgICAgIC5zdHlsZSgnYm94LXNoYWRvdycsJycpXHJcbiAgICAgICAgaW5mb0J1dHRvbi5vdmVyZWQgPSB0cnVlO1xyXG4gICAgfSlcclxuICAgIC5vbignbW91c2VsZWF2ZScsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuc3R5bGUoJ2JhY2tncm91bmQnLCAnI2VjY2M2OCcpXHJcbiAgICAgICAgICAgIC5zdHlsZSgnd2lkdGgnLCczMnB4JylcclxuICAgICAgICAgICAgLnN0eWxlKCdib3gtc2hhZG93JywnMCAwIDEwcHggI2VjY2M2OCcpXHJcbiAgICAgICAgaW5mb0J1dHRvbi5vdmVyZWQgPSBmYWxzZTtcclxuICAgIH0pO1xyXG52YXIgaW5mb0J1dHRvbkhhbG9BbiA9IGNyLmFwcGVuZCgnaW5mb0J1dHRvbkhhbG9BbicpXHJcbiAgICAuYXR0cignZnJlcScsNjApXHJcbiAgICAuYXR0cignYWN0aW9uJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYoaW5mb0J1dHRvbi5vdmVyZWQgPT09IHRydWUpe1xyXG4gICAgICAgICAgICBpbmZvQnV0dG9uSGFsby5zdGF0ZSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN3aXRjaChpbmZvQnV0dG9uSGFsby5zdGF0ZSl7XHJcbiAgICAgICAgICAgIGNhc2UgdW5kZWZpbmVkOlxyXG4gICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICBpbmZvQnV0dG9uSGFsby5zdGF0ZSA9IDE7XHJcbiAgICAgICAgICAgICAgICBpbmZvQnV0dG9uSGFsby5zdHlsZSgnd2lkdGgnLCAnNjRweCcpXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0eWxlKCdib3R0b20nLCdjYWxjKDE4JSAtIDE1cHgpJylcclxuICAgICAgICAgICAgICAgICAgICAuc3R5bGUoJ2hlaWdodCcsICc2NHB4JylcclxuICAgICAgICAgICAgICAgICAgICAuc3R5bGUoJ29wYWNpdHknLCAwKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICBpbmZvQnV0dG9uSGFsby5zdGF0ZSA9IDI7XHJcbiAgICAgICAgICAgICAgICBpbmZvQnV0dG9uSGFsby5zdHlsZSgnd2lkdGgnLCAnMzJweCcpXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0eWxlKCdib3R0b20nLCcxOCUnKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdHlsZSgnaGVpZ2h0JywgJzMycHgnKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICBpbmZvQnV0dG9uSGFsby5zdGF0ZSA9IDA7XHJcbiAgICAgICAgICAgICAgICBpbmZvQnV0dG9uSGFsby5zdHlsZSgnb3BhY2l0eScsIDEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfSkuaW5zZXJ0KCk7XHJcblxyXG53aW5kb3cubW9iaWxlY2hlY2sgPSBmdW5jdGlvbigpIHtcclxuICAgIHZhciBjaGVjayA9IGZhbHNlO1xyXG4gICAgKGZ1bmN0aW9uKGEpe2lmKC8oYW5kcm9pZHxiYlxcZCt8bWVlZ28pLittb2JpbGV8YXZhbnRnb3xiYWRhXFwvfGJsYWNrYmVycnl8YmxhemVyfGNvbXBhbHxlbGFpbmV8ZmVubmVjfGhpcHRvcHxpZW1vYmlsZXxpcChob25lfG9kKXxpcmlzfGtpbmRsZXxsZ2UgfG1hZW1vfG1pZHB8bW1wfG1vYmlsZS4rZmlyZWZveHxuZXRmcm9udHxvcGVyYSBtKG9ifGluKWl8cGFsbSggb3MpP3xwaG9uZXxwKGl4aXxyZSlcXC98cGx1Y2tlcnxwb2NrZXR8cHNwfHNlcmllcyg0fDYpMHxzeW1iaWFufHRyZW98dXBcXC4oYnJvd3NlcnxsaW5rKXx2b2RhZm9uZXx3YXB8d2luZG93cyBjZXx4ZGF8eGlpbm8vaS50ZXN0KGEpfHwvMTIwN3w2MzEwfDY1OTB8M2dzb3w0dGhwfDUwWzEtNl1pfDc3MHN8ODAyc3xhIHdhfGFiYWN8YWMoZXJ8b298c1xcLSl8YWkoa298cm4pfGFsKGF2fGNhfGNvKXxhbW9pfGFuKGV4fG55fHl3KXxhcHR1fGFyKGNofGdvKXxhcyh0ZXx1cyl8YXR0d3xhdShkaXxcXC1tfHIgfHMgKXxhdmFufGJlKGNrfGxsfG5xKXxiaShsYnxyZCl8YmwoYWN8YXopfGJyKGV8dil3fGJ1bWJ8YndcXC0obnx1KXxjNTVcXC98Y2FwaXxjY3dhfGNkbVxcLXxjZWxsfGNodG18Y2xkY3xjbWRcXC18Y28obXB8bmQpfGNyYXd8ZGEoaXR8bGx8bmcpfGRidGV8ZGNcXC1zfGRldml8ZGljYXxkbW9ifGRvKGN8cClvfGRzKDEyfFxcLWQpfGVsKDQ5fGFpKXxlbShsMnx1bCl8ZXIoaWN8azApfGVzbDh8ZXooWzQtN10wfG9zfHdhfHplKXxmZXRjfGZseShcXC18Xyl8ZzEgdXxnNTYwfGdlbmV8Z2ZcXC01fGdcXC1tb3xnbyhcXC53fG9kKXxncihhZHx1bil8aGFpZXxoY2l0fGhkXFwtKG18cHx0KXxoZWlcXC18aGkocHR8dGEpfGhwKCBpfGlwKXxoc1xcLWN8aHQoYyhcXC18IHxffGF8Z3xwfHN8dCl8dHApfGh1KGF3fHRjKXxpXFwtKDIwfGdvfG1hKXxpMjMwfGlhYyggfFxcLXxcXC8pfGlicm98aWRlYXxpZzAxfGlrb218aW0xa3xpbm5vfGlwYXF8aXJpc3xqYSh0fHYpYXxqYnJvfGplbXV8amlnc3xrZGRpfGtlaml8a2d0KCB8XFwvKXxrbG9ufGtwdCB8a3djXFwtfGt5byhjfGspfGxlKG5vfHhpKXxsZyggZ3xcXC8oa3xsfHUpfDUwfDU0fFxcLVthLXddKXxsaWJ3fGx5bnh8bTFcXC13fG0zZ2F8bTUwXFwvfG1hKHRlfHVpfHhvKXxtYygwMXwyMXxjYSl8bVxcLWNyfG1lKHJjfHJpKXxtaShvOHxvYXx0cyl8bW1lZnxtbygwMXwwMnxiaXxkZXxkb3x0KFxcLXwgfG98dil8enopfG10KDUwfHAxfHYgKXxtd2JwfG15d2F8bjEwWzAtMl18bjIwWzItM118bjMwKDB8Mil8bjUwKDB8Mnw1KXxuNygwKDB8MSl8MTApfG5lKChjfG0pXFwtfG9ufHRmfHdmfHdnfHd0KXxub2soNnxpKXxuenBofG8yaW18b3AodGl8d3YpfG9yYW58b3dnMXxwODAwfHBhbihhfGR8dCl8cGR4Z3xwZygxM3xcXC0oWzEtOF18YykpfHBoaWx8cGlyZXxwbChheXx1Yyl8cG5cXC0yfHBvKGNrfHJ0fHNlKXxwcm94fHBzaW98cHRcXC1nfHFhXFwtYXxxYygwN3wxMnwyMXwzMnw2MHxcXC1bMi03XXxpXFwtKXxxdGVrfHIzODB8cjYwMHxyYWtzfHJpbTl8cm8odmV8em8pfHM1NVxcL3xzYShnZXxtYXxtbXxtc3xueXx2YSl8c2MoMDF8aFxcLXxvb3xwXFwtKXxzZGtcXC98c2UoYyhcXC18MHwxKXw0N3xtY3xuZHxyaSl8c2doXFwtfHNoYXJ8c2llKFxcLXxtKXxza1xcLTB8c2woNDV8aWQpfHNtKGFsfGFyfGIzfGl0fHQ1KXxzbyhmdHxueSl8c3AoMDF8aFxcLXx2XFwtfHYgKXxzeSgwMXxtYil8dDIoMTh8NTApfHQ2KDAwfDEwfDE4KXx0YShndHxsayl8dGNsXFwtfHRkZ1xcLXx0ZWwoaXxtKXx0aW1cXC18dFxcLW1vfHRvKHBsfHNoKXx0cyg3MHxtXFwtfG0zfG01KXx0eFxcLTl8dXAoXFwuYnxnMXxzaSl8dXRzdHx2NDAwfHY3NTB8dmVyaXx2aShyZ3x0ZSl8dmsoNDB8NVswLTNdfFxcLXYpfHZtNDB8dm9kYXx2dWxjfHZ4KDUyfDUzfDYwfDYxfDcwfDgwfDgxfDgzfDg1fDk4KXx3M2MoXFwtfCApfHdlYmN8d2hpdHx3aShnIHxuY3xudyl8d21sYnx3b251fHg3MDB8eWFzXFwtfHlvdXJ8emV0b3x6dGVcXC0vaS50ZXN0KGEuc3Vic3RyKDAsNCkpKSBjaGVjayA9IHRydWU7fSkobmF2aWdhdG9yLnVzZXJBZ2VudHx8bmF2aWdhdG9yLnZlbmRvcnx8d2luZG93Lm9wZXJhKTtcclxuICAgIHJldHVybiBjaGVjaztcclxufTtcclxudmFyIGNpcmNsZU51bSA9IG1vYmlsZWNoZWNrKCk/NTA6MTUwO1xyXG52YXIgY2lyY2xlTGlzdCA9IFtdO1xyXG5cclxuZm9yKHZhciBpPTA7aTxjaXJjbGVOdW07aSsrKXtcclxuICAgIGxldCB4ID0gTWF0aC5yYW5kb20oKSp3aW5kb3cuaW5uZXJXaWR0aCsxMDtcclxuICAgIGxldCB5ID0gTWF0aC5yYW5kb20oKSp3aW5kb3cuaW5uZXJIZWlnaHQrMTA7XHJcbiAgICBsZXQgY2lyY2xlID0gbWFpbkNvbnRlbnQuYXBwZW5kKCdkaXYnKVxyXG4gICAgICAgIC5zdHlsZSgncG9zaXRpb24nLCdhYnNvbHV0ZScpXHJcbiAgICAgICAgLnN0eWxlKCd3aWR0aCcsJzIwcHgnKVxyXG4gICAgICAgIC5zdHlsZSgnaGVpZ2h0JywnMjBweCcpXHJcbiAgICAgICAgLnN0eWxlKCdib3JkZXItcmFkaXVzJywnNHB4JylcclxuICAgICAgICAuc3R5bGUoJ2JhY2tncm91bmQnLCcjZWNjYzY4JylcclxuICAgICAgICAuc3R5bGUoJ3RyYW5zaXRpb24nLCcwLjFzIGxpbmVhcicpXHJcbiAgICAgICAgLnN0eWxlKCdib3gtc2hhZG93JywnMCAwIDEwcHggI2VjY2M2OCcpXHJcbiAgICAgICAgLnN0eWxlKCdvcGFjaXR5JywgJzAnKVxyXG4gICAgICAgIC5zdHlsZSgndHJhbnNmb3JtJywndHJhbnNsYXRlKCcreCsncHgsJyt5KydweCknKTtcclxuICAgIFxyXG4gICAgY2lyY2xlLnggPSB4O1xyXG4gICAgY2lyY2xlLnkgPSB5O1xyXG4gICAgY2lyY2xlLmR4ID0gTWF0aC5yYW5kb20oKS0wLjU7XHJcbiAgICBjaXJjbGUuZHkgPSBNYXRoLnJhbmRvbSgpLTAuNTtcclxuICAgIGNpcmNsZS5kcyA9IDAuMDE7XHJcbiAgICBjaXJjbGUuc2NhbGUgPSAgTWF0aC5yYW5kb20oKTtcclxuICAgIGNpcmNsZS5jb3VudGVyID0gMTA7XHJcbiAgICBsZXQgY2lyY2xlQW4gPSBBWFIuYXBwZW5kKCdob21lX2NpcmNsZV9hbmltYXRpb24nKVxyXG4gICAgICAgIC5hdHRyKCdmcmVxJyw1KVxyXG4gICAgICAgIC5hdHRyKCdhY3Rpb24nLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgbGV0IHNjYWxlID0gY2lyY2xlLnNjYWxlO1xyXG4gICAgICAgICAgICBjaXJjbGUueCs9Y2lyY2xlLmR4O1xyXG4gICAgICAgICAgICBjaXJjbGUueSs9Y2lyY2xlLmR5O1xyXG5cclxuICAgICAgICAgICAgY2lyY2xlLnN0eWxlKCd0cmFuc2Zvcm0nLCd0cmFuc2xhdGUoJysoY2lyY2xlLnggKyAobWFpbkNvbnRlbnQuZHh8fDApKnNjYWxlKSsncHgsJysoY2lyY2xlLnkgKyAobWFpbkNvbnRlbnQuZHl8fDApKnNjYWxlKSsncHgpIHNjYWxlKCcrc2NhbGUrJyknKVxyXG4gICAgICAgICAgICAgICAgLnN0eWxlKCdvcGFjaXR5Jywgc2NhbGUpXHJcbiAgICAgICAgICAgICAgICAuc3R5bGUoJ3otaW5kZXgnLCBzY2FsZT49MC44PzI6MClcclxuICAgICAgICAgICAgICAgIC5zdHlsZSgnYm94LXNoYWRvdycsJzAgMCAnKyhNYXRoLnJhbmRvbSgpKjEwKzEwKSsncHggI2VjY2M2OCcpO1xyXG4gICAgICAgICAgICBpZihjaXJjbGUueD53aW5kb3cuaW5uZXJXaWR0aCl7XHJcbiAgICAgICAgICAgICAgICBjaXJjbGUuZHggPSAtKE1hdGgucmFuZG9tKCkqMC41KzAuMSk7XHJcbiAgICAgICAgICAgIH1lbHNlIGlmKGNpcmNsZS54PDApe1xyXG4gICAgICAgICAgICAgICAgY2lyY2xlLmR4ID0gTWF0aC5yYW5kb20oKSowLjUrMC4xO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGNpcmNsZS55PndpbmRvdy5pbm5lckhlaWdodCl7XHJcbiAgICAgICAgICAgICAgICBjaXJjbGUuZHkgPSAtKE1hdGgucmFuZG9tKCkqMC41KzAuMSk7XHJcbiAgICAgICAgICAgIH1lbHNlIGlmKGNpcmNsZS55PDApe1xyXG4gICAgICAgICAgICAgICAgY2lyY2xlLmR5ID0gTWF0aC5yYW5kb20oKSowLjUrMC4xO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNpcmNsZS5jb3VudGVyLS07XHJcbiAgICAgICAgICAgIGlmKGNpcmNsZS5jb3VudGVyPD0wKXtcclxuICAgICAgICAgICAgICAgIGNpcmNsZS5jb3VudGVyPTEwO1xyXG4gICAgICAgICAgICAgICAgY2lyY2xlLnNjYWxlKz1jaXJjbGUuZHM7XHJcbiAgICAgICAgICAgICAgICBpZihjaXJjbGUuc2NhbGU+PTEpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNpcmNsZS5kcz0tMC4wMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKGNpcmNsZS5zY2FsZTw9MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgY2lyY2xlLmRzPTAuMDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KS5pbnNlcnQoKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgbWFpbkNvbnRlbnQ7IiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgQW54aW4gWWFuZyBvbiAzLzI4LzIwMTguXHJcbiAqL1xyXG5pbXBvcnQgQ0MgZnJvbSAnLi9GcmFtZXdvcmsvQ3ViWS9DdWJZX0NvcmUnO1xyXG5pbXBvcnQgQ3ViWV9ET00gZnJvbSAnLi9GcmFtZXdvcmsvQ3ViWS9DdWJZX0RPTSc7XHJcbmltcG9ydCBDUiBmcm9tICcuL0ZyYW1ld29yay9DdWJZL0N1YllfUm91dGluZSc7XHJcbmltcG9ydCBob21lQ29udGVudCBmcm9tICcuL2hvbWUnO1xyXG50cnkge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBtZW51Q29udGFpbmVyLnVwZGF0ZXIoJ2Nsb3NlTWVudScpKCk7XHJcbiAgICB9KTtcclxuICAgIHdpbmRvdy5yb290ID0gbmV3IEN1YllfRE9NKCdkaXYnLCAnYXhfcm9vdCcsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7XHJcbiAgICByb290LnN0eWxlKCdmb250LXNpemUnLCAnMTJweCcpXHJcbiAgICAgICAgLnN0eWxlKCdjdXJzb3InLCAndXJsKCksIGF1dG8nKTtcclxuICAgIHZhciBoZWFkZXIgPSByb290LmFwcGVuZCgnZGl2JywgJ2hlYWRlcicpXHJcbiAgICAgICAgLmF0dHIoJ29uc2VsZWN0c3RhcnQnLCAncmV0dXJuIGZhbHNlOycpXHJcbiAgICAgICAgLnN0eWxlKCdkaXNwbGF5JywgJ2ZsZXgnKVxyXG4gICAgICAgIC5zdHlsZSgncG9zaXRpb24nLCAnYWJzb2x1dGUnKVxyXG4gICAgICAgIC8vLnN0eWxlKCdiYWNrZ3JvdW5kJywncmdiYSgxMTIsIDE2MSwgMjU1LDEuMCknKVxyXG4gICAgICAgIC5zdHlsZSgnb3BhY2l0eScsICcwLjUnKVxyXG4gICAgICAgIC8vLnN0eWxlKCdib3gtc2hhZG93JywgJzBweCAwcHggNXB4IHJnYmEoMTEyLCAxNjEsIDI1NSwwKScpXHJcbiAgICAgICAgLy8uc3R5bGUoJ2JvcmRlcicsJzFweCBzb2xpZCByZ2JhKDExMiwgMTYxLCAyNTUsIDApJylcclxuICAgICAgICAvLy5zdHlsZSgnYm9yZGVyLXJhZGl1cycsJzhweCcpXHJcbiAgICAgICAgLnN0eWxlKCd0b3AnLCAnMWVtJylcclxuICAgICAgICAuc3R5bGUoJ2hlaWdodCcsICczZW0nKVxyXG4gICAgICAgIC5zdHlsZSgnei1pbmRleCcsICcxMCcpXHJcbiAgICAgICAgLnN0eWxlKCd0cmFuc2l0aW9uJywgJzAuM3MnKVxyXG4gICAgICAgIC5vbignbW91c2VvdmVyJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLnN0eWxlKCdvcGFjaXR5JywgJzEnKVxyXG4gICAgICAgICAgICAvLy5zdHlsZSgnYm94LXNoYWRvdycsICcwcHggMHB4IDVweCByZ2JhKDExMiwgMTYxLCAyNTUsMS4wKScpXHJcbiAgICAgICAgICAgIC8vLnN0eWxlKCdib3JkZXInLCcxcHggc29saWQgcmdiYSgxMTIsIDE2MSwgMjU1LCAwLjUpJyk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3R5bGUoJ29wYWNpdHknLCAnMC41JylcclxuICAgICAgICAgICAgLy8uc3R5bGUoJ2JveC1zaGFkb3cnLCAnMHB4IDBweCA1cHggcmdiYSgxMTIsIDE2MSwgMjU1LDApJylcclxuICAgICAgICAgICAgLy8uc3R5bGUoJ2JvcmRlcicsJzFweCBzb2xpZCByZ2JhKDExMiwgMTYxLCAyNTUsIDApJyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgdmFyIGhlYWRlckl0ZW1zID0gWydNZW51JywgJ1BsYXlncm91bmQnLCAnQWJvdXQgTWUnXTtcclxuICAgIHZhciBpbmRleCA9IDA7XHJcbiAgICBoZWFkZXJJdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgaGVhZGVySXRlbXNbaW5kZXgrK10gPSBoZWFkZXIuYXBwZW5kKCdkaXYnLCAnaGVhZGVyXycgKyBpdGVtKVxyXG4gICAgICAgICAgICAuY29udGVudChpdGVtKVxyXG4gICAgICAgICAgICAuYXBwZW5kQ2xhc3MoJ3h4JylcclxuICAgICAgICAgICAgLnN0eWxlKCdjb2xvcicsICd3aGl0ZScpXHJcbiAgICAgICAgICAgIC5zdHlsZSgncGFkZGluZycsICcxZW0gMC41ZW0nKVxyXG4gICAgICAgICAgICAuc3R5bGUoJ2N1cnNvcicsICdwb2ludGVyJylcclxuICAgICAgICAgICAgLnN0eWxlKCd0ZXh0LXNoYWRvdycsICcwIDAgMTBweCAjZWNjYzY4JylcclxuICAgICAgICAgICAgLnN0eWxlKCd0cmFuc2l0aW9uJywgJzAuM3MnKVxyXG4gICAgICAgICAgICAub24oJ21vdXNlb3ZlcicsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3R5bGUoJ3RleHQtc2hhZG93JywgJzAgMCAxMHB4ICNlY2NjNjgnKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdHlsZSgnY29sb3InLCAnI2VjY2M2OCcpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0eWxlKCd0ZXh0LXNoYWRvdycsICcwIDAgMjBweCAjZWNjYzY4JylcclxuICAgICAgICAgICAgICAgICAgICAuc3R5bGUoJ2NvbG9yJywgJ3doaXRlJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICB2YXIgaGVhZGVyTWVudUJ1dHRvbiA9IGhlYWRlckl0ZW1zWzBdO1xyXG4gICAgaGVhZGVyTWVudUJ1dHRvbi5zdHlsZSgncG9zaXRpb24nLCAncmVsYXRpdmUnKTtcclxuICAgIHZhciBtZW51Q29udGFpbmVyID0gaGVhZGVyTWVudUJ1dHRvbi5hcHBlbmQoJ2RpdicsICdtZW51Q29udGFpbmVyJylcclxuICAgICAgICAuc3R5bGUoJ3Bvc2l0aW9uJywgJ2Fic29sdXRlJylcclxuICAgICAgICAuc3R5bGUoJ3dpZHRoJywgJzI1NnB4JylcclxuICAgICAgICAuc3R5bGUoJ2hlaWdodCcsICcwcHgnKVxyXG4gICAgICAgIC5zdHlsZSgnYmFja2dyb3VuZCcsICcnKVxyXG4gICAgICAgIC5zdHlsZSgndG9wJywgJzEyNSUnKVxyXG4gICAgICAgIC5zdHlsZSgnbGVmdCcsICcwJylcclxuICAgICAgICAuc3R5bGUoJ292ZXJmbG93JywgJ2hpZGRlbicpXHJcbiAgICAgICAgLy8uc3R5bGUoJ2JveC1zaGFkb3cnLCAnMHB4IDBweCA1cHggcmdiYSgxMTIsIDE2MSwgMjU1LDApJylcclxuICAgICAgICAvLy5zdHlsZSgnYm9yZGVyJywnMXB4IHNvbGlkIHJnYmEoMTEyLCAxNjEsIDI1NSwgMCknKVxyXG4gICAgICAgIC5zdHlsZSgndHJhbnNpdGlvbicsICcwLjNzJylcclxuICAgICAgICAuc2V0VXBkYXRlcigndG9nZ2xlTWVudScsIGZ1bmN0aW9uIChkKSB7XHJcbiAgICAgICAgICAgIGxldCBoYXNPcGVuID0gdGhpcy5oYXNPcGVuIHx8IGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAoaGFzT3Blbikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdHlsZSgnaGVpZ2h0JywgJzAnKVxyXG4gICAgICAgICAgICAgICAgLy8uc3R5bGUoJ2JveC1zaGFkb3cnLCAnMHB4IDBweCA1cHggcmdiYSgxMTIsIDE2MSwgMjU1LDApJylcclxuICAgICAgICAgICAgICAgIC8vLnN0eWxlKCdib3JkZXInLCcxcHggc29saWQgcmdiYSgxMTIsIDE2MSwgMjU1LCAwKScpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdHlsZSgnaGVpZ2h0JywgJzMzdmgnKVxyXG4gICAgICAgICAgICAgICAgLy8uc3R5bGUoJ2JveC1zaGFkb3cnLCAnMHB4IDBweCA1cHggcmdiYSgxMTIsIDE2MSwgMjU1LDEuMCknKVxyXG4gICAgICAgICAgICAgICAgLy8uc3R5bGUoJ2JvcmRlcicsJzFweCBzb2xpZCByZ2JhKDExMiwgMTYxLCAyNTUsIDAuNSknKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmhhc09wZW4gPSAhaGFzT3BlbjtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5zZXRVcGRhdGVyKCdjbG9zZU1lbnUnLCBmdW5jdGlvbiAoZCkge1xyXG4gICAgICAgICAgICB0aGlzLnN0eWxlKCdoZWlnaHQnLCAnMCcpXHJcbiAgICAgICAgICAgICAgICAuc3R5bGUoJ2JveC1zaGFkb3cnLCAnMHB4IDBweCA1cHggcmdiYSgxMTIsIDE2MSwgMjU1LDApJylcclxuICAgICAgICAgICAgICAgIC5zdHlsZSgnYm9yZGVyJywgJzFweCBzb2xpZCByZ2JhKDExMiwgMTYxLCAyNTUsIDApJyk7XHJcbiAgICAgICAgICAgIHRoaXMuaGFzT3BlbiA9IGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIGhlYWRlck1lbnVCdXR0b24ub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIG1lbnVDb250YWluZXIudXBkYXRlcigndG9nZ2xlTWVudScpKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB2YXIgbWFpbkNvbnRhaW5lciA9IHJvb3QuYXBwZW5kKCdkaXYnLCAnbWFpbkNvbnRhaW5lcicpO1xyXG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRFbGVtZW50KGhvbWVDb250ZW50KTtcclxuICAgIGNjLnN0b3JlVmFsdWUoJ2N1cnJlbnRWaWV3JywnSG9tZScpO1xyXG4gICAgY2MuY29ubmVjdCgnY3VycmVudFZpZXcnLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBsZXQgY3VycmVudFZpZXcgPSBjYy5nZXRWYWx1ZSgnY3VycmVudFZpZXcnKTtcclxuICAgICAgICBtYWluQ29udGFpbmVyLnJlbW92ZSgnLm1haW5Db250ZW50Jyk7XHJcbiAgICAgICAgc3dpdGNoIChjdXJyZW50Vmlldyl7XHJcbiAgICAgICAgICAgIGNhc2UgJ0hvbWUnOlxyXG4gICAgICAgICAgICAgICAgbWFpbkNvbnRhaW5lci5hcHBlbmRFbGVtZW50KGhvbWVDb250ZW50KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICByb290LmFwcGVuZEVsZW1lbnQobWFpbkNvbnRhaW5lcilcclxuICAgIH0pO1xyXG5cclxuICAgIHZhciB2ZXJzaW9uID0gcm9vdC5hcHBlbmQoJ3AnLCAndmVyc2lvbicpXHJcbiAgICAgICAgLnN0eWxlKCdwb3NpdGlvbicsICdmaXhlZCcpXHJcbiAgICAgICAgLnN0eWxlKCdib3R0b20nLCAnMHB4JylcclxuICAgICAgICAuc3R5bGUoJ3JpZ2h0JywgJzAnKVxyXG4gICAgICAgIC5zdHlsZSgncGFkZGluZy1yaWdodCcsICcxZW0nKVxyXG4gICAgICAgIC5zdHlsZSgnY29sb3InLCAnbGlnaHRncmF5JylcclxuICAgICAgICAuY29udGVudChuZXcgRGF0ZSgpKVxyXG4gICAgICAgIC5zZXRVcGRhdGVyKCd0aW1lcicsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5jb250ZW50KCdDdWJZX1JvdXRpbmU6IExhc3JDeWNsZVRpbWU6ICcgKyBjci5sYXN0Q3ljbGVUaW1lICsgJ21zIHwgQ1BTOicgKyBjci5jeWNsZVBlclNlYyArICcgfExvbmdlc3Q6ICcgKyBjci5sb25nZXN0Um91dGluZVRpbWUgKyAnbXMgfCBMYXN0OicgKyBjci5sYXN0Um91dGluZVRpbWUgKyAnbXMnKTtcclxuICAgICAgICB9KTtcclxuICAgIHZhciB0aW1lciA9IGNyLmFwcGVuZCgndGltZXInKVxyXG4gICAgICAgIC5hdHRyKCdmcmVxJywgMSlcclxuICAgICAgICAuYXR0cignYWN0aW9uJywgdmVyc2lvbi51cGRhdGVyKCd0aW1lcicpKVxyXG4gICAgICAgIC5pbnNlcnQoKTtcclxuICAgIHZhciBtZW51Q29udGVudHMgPSBtZW51Q29udGFpbmVyLmFwcGVuZCgndWwnKVxyXG4gICAgICAgIC5zdHlsZSgncGFkZGluZy1sZWZ0JywgJzJlbScpXHJcbiAgICAgICAgLnN0eWxlKCdtYXJnaW4nLCAnMCcpO1xyXG4gICAgdmFyIG1lbnVJdGVtcyA9IFsnSG9tZScsICdNYXkgQ29taW5nIHNvb24nLCAnUHJvYmFibHkgQ29taW5nIHNvb24nXTtcclxuICAgIGluZGV4ID0gMDtcclxuICAgIG1lbnVJdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgbWVudUl0ZW1zW2luZGV4KytdID0gbWVudUNvbnRlbnRzLmFwcGVuZCgnbGknLCAnbWVudV8nICsgaXRlbSlcclxuICAgICAgICAgICAgLmNvbnRlbnQoaXRlbSlcclxuICAgICAgICAgICAgLnN0eWxlKCdjb2xvcicsICd3aGl0ZScpXHJcbiAgICAgICAgICAgIC5zdHlsZSgncGFkZGluZycsICcxZW0gMC41ZW0nKVxyXG4gICAgICAgICAgICAuc3R5bGUoJ2N1cnNvcicsICdwb2ludGVyJylcclxuICAgICAgICAgICAgLnN0eWxlKCd0ZXh0LXNoYWRvdycsICcwIDAgMTBweCAjZWNjYzY4JylcclxuICAgICAgICAgICAgLnN0eWxlKCd0cmFuc2l0aW9uJywgJzAuM3MnKVxyXG4gICAgICAgICAgICAub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgY2Muc3RvcmVWYWx1ZSgnY3VycmVudFZpZXcnLCBpdGVtKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0eWxlKCd0ZXh0LXNoYWRvdycsICcwIDAgMTBweCAjZWNjYzY4JylcclxuICAgICAgICAgICAgICAgICAgICAuc3R5bGUoJ2NvbG9yJywgJyNlY2NjNjgnKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdHlsZSgndGV4dC1zaGFkb3cnLCAnMCAwIDIwcHggI2VjY2M2OCcpXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0eWxlKCdjb2xvcicsICd3aGl0ZScpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59Y2F0Y2ggKGUpe1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpLmlubmVySFRNTD0gZTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9