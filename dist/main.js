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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0ZyYW1ld29yay9DdWJZL0N1YllfQ29yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRnJhbWV3b3JrL0N1YlkvQ3ViWV9ET00uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0ZyYW1ld29yay9DdWJZL0N1YllfUm91dGluZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkVBLElBQU0saUJBQWlCLDBCQUFNLENBQTdCOzs0QkFFSTt1QkFBWSxRQUFPOzhCQUNmOztZQUFJLFFBQVEsU0FDWjtZQUFJLE9BQ0o7YUFBSyxLQUNSOzs7OztxQ0FFRztnQkFBSSxRQUFRLFVBQ1o7aUJBQUssWUFBWSxNQUFNLFNBQ3ZCO2lCQUFLLFVBQ0w7aUJBQUssWUFDTDtpQkFBSyxVQUFVLEtBQ2Y7bUJBQU8sS0FDVjs7OztxQ0FHRztnQkFBSSxPQUNKO2dCQUFJLFdBQ0o7Z0JBQUksVUFDSjtnQkFBSSxDQUFDLENB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QUNiLEtBQUssVUFBVSxRQUFRLFFBQVEsVUFFcEM7UUFBSSxlQUFlLGNBQWMsT0FBTyxNQUNuQyxNQUFNLGdCQUFnQixPQUN0QixNQUFNLFVBQ1g7UUFBSSxZQUFZLENBQUMsUUFBUSxtQkFDekI7WUFDQTtjQUFVLFFBQVEsVUFBVSxNQUN4QjtrQkFBVSx3QkFBd0IsT0FBTyxNQUFNLFVBQVUsTUFDcEQsUUFBUSxNQUNSLE1BQU0sU0FBUyxTQUNmLE1BQU0sV0FBVyxhQUNqQixNQUFNLFVBQVUsV0FDaEIsTUFBTSxlQUFlLG9CQUNyQixNQUFNLGNBQWMsUUFDcEIsR0FBRyxTQUFTLFlBQ1Q7ZUFBRyxXQUFXLGVBQ2pCO0FBVGdCLFdBVWhCLEdBQUcsYUFBYSxZQUNiO2lCQUFLLE1BQU0sZUFBZSxvQkFDckIsTUFBTSxTQUNkO0FBYmdCLFdBY2hCLEdBQUcsY0FBYyxZQUNkO2lCQUFLLE1BQU0sZUFBZSxvQkFDckIsTUFBTSxTQUNkO0FBQ1I7QUFDSjtBQTdJRCxFQTZJQyxPQUFPLEdBQ0o7YUFBUyxlQUFlLE9BQU8sWUFDbEMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJjb25zdCBFTVBUWV9GVU5DVElPTiA9ICgpPT57fTtcclxuY2xhc3MgQ3ViWV9Db3Jle1xyXG4gICAgY29uc3RydWN0b3IoX3Byb3BzKXtcclxuICAgICAgICBsZXQgcHJvcHMgPSBwcm9wcyB8fCB7fTtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5pbml0KHByb3BzKTtcclxuICAgIH1cclxuICAgIGluaXQoX3Byb3BzKXtcclxuICAgICAgICBsZXQgcHJvcHMgPSBfcHJvcHMgfHwge307XHJcbiAgICAgICAgdGhpcy5kZWJ1Z01vZGUgPSBwcm9wcy5kZWJ1ZyB8fCBmYWxzZTtcclxuICAgICAgICB0aGlzLmRhdGFNYXAgPSB7fTtcclxuICAgICAgICB0aGlzLmFjdGlvbk1hcCA9IHt9O1xyXG4gICAgICAgIHRoaXMuYnJvd3NlciA9IHRoaXMuZ2V0QnJvd3NlcigpO1xyXG4gICAgICAgIHdpbmRvdy5jYyA9IHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QnJvd3Nlcigpe1xyXG4gICAgICAgIGxldCBpc0lFID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IGlzQ2hyb21lID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IGlzT3BlcmEgPSBmYWxzZTtcclxuICAgICAgICBpZigoISF3aW5kb3cub3ByICYmICEhb3ByLmFkZG9ucykgfHwgISF3aW5kb3cub3BlcmEgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCcgT1BSLycpID49IDApe1xyXG4gICAgICAgICAgICBpc09wZXJhID0gdHJ1ZTtcclxuICAgICAgICAgICAgcmV0dXJuICdvcGVyYSc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHR5cGVvZiBJbnN0YWxsVHJpZ2dlciAhPT0gJ3VuZGVmaW5lZCcpe1xyXG4gICAgICAgICAgICByZXR1cm4gJ2ZpcmVmb3gnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZigvY29uc3RydWN0b3IvaS50ZXN0KHdpbmRvdy5IVE1MRWxlbWVudCkgfHwgKGZ1bmN0aW9uIChwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcC50b1N0cmluZygpID09PSBcIltvYmplY3QgU2FmYXJpUmVtb3RlTm90aWZpY2F0aW9uXVwiO1xyXG4gICAgICAgICAgICB9KSghd2luZG93WydzYWZhcmknXSB8fCBzYWZhcmkucHVzaE5vdGlmaWNhdGlvbikpe1xyXG4gICAgICAgICAgICByZXR1cm4gJ3NhZmFyaSc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGZhbHNlIHx8ICEhZG9jdW1lbnQuZG9jdW1lbnRNb2RlKXtcclxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBvdXRwdXQgPSBhcmd1bWVudHNbMF07XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBhcmd1bWVudHNbaV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9iaiA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0W2tleV0gPSBvYmpba2V5XTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb3V0cHV0O1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBpc0lFID10cnVlO1xyXG4gICAgICAgICAgICByZXR1cm4gJ2llJztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoIWlzSUUgJiYgISF3aW5kb3cuU3R5bGVNZWRpYSl7XHJcbiAgICAgICAgICAgIHJldHVybiAnZWRnZSc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCEhd2luZG93LmNocm9tZSAmJiAhIXdpbmRvdy5jaHJvbWUud2Vic3RvcmUpe1xyXG4gICAgICAgICAgICBpc0Nocm9tZSA9IHRydWVcclxuICAgICAgICAgICAgcmV0dXJuICdjaHJvbWUnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZigoaXNDaHJvbWUgfHwgaXNPcGVyYSkgJiYgISF3aW5kb3cuQ1NTKXtcclxuICAgICAgICAgICAgcmV0dXJuICdibGluayc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0b3JlRGF0YUFycmF5KF9hcnJheSwgX2lkS2V5LCBfaXRlbVByb2Nlc3NvciwgX29wdGlvbnMsIF9jYWxsYmFjaykge1xyXG4gICAgICAgIHZhciBvcHRpb25zID0gX29wdGlvbnMgfHwge307XHJcbiAgICAgICAgdmFyIGlkS2V5ID0gX2lkS2V5IHx8ICdpZCc7XHJcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gX2NhbGxiYWNrIHx8IEVNUFRZX0ZVTkNUSU9OO1xyXG4gICAgICAgIHZhciBhcnJheSA9IF9hcnJheSB8fCBbXTtcclxuICAgICAgICB2YXIgaXRlbUxpc3QgPSBbXTtcclxuICAgICAgICB2YXIgaXRlbVByb2Nlc3NvciA9IF9pdGVtUHJvY2Vzc29yIHx8IEVNUFRZX0ZVTkNUSU9OO1xyXG5cclxuICAgICAgICBhcnJheS5mb3JFYWNoKGZ1bmN0aW9uIChfaXRlbSkge1xyXG4gICAgICAgICAgICB2YXIga2V5ID0gX2l0ZW1baWRLZXldO1xyXG4gICAgICAgICAgICBpZiAoa2V5ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIGl0ZW0gPSBzZWxmLnN0b3JlVmFsdWUoa2V5LCBfaXRlbSwgX29wdGlvbnMpO1xyXG5cclxuICAgICAgICAgICAgaXRlbVByb2Nlc3NvcihpdGVtKTtcclxuICAgICAgICAgICAgaXRlbUxpc3QucHVzaChpdGVtKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY2FsbGJhY2soX2FycmF5LCBpdGVtTGlzdCk7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW1MaXN0O1xyXG4gICAgfTtcclxuXHJcbiAgICBzdG9yZVZhbHVlKF9rZXksIF92YWx1ZSwgX29wdGlvbnMsIF9jYWxsYmFjaykge1xyXG4gICAgICAgIHZhciBvcHRpb25zID0gX29wdGlvbnMgfHwge307XHJcbiAgICAgICAgdmFyIHN0b3JlID0gdGhpcy5kYXRhTWFwO1xyXG4gICAgICAgIHZhciBrZXkgPSBfa2V5O1xyXG4gICAgICAgIHZhciBjYWxsYmFjayA9IF9jYWxsYmFjayB8fCBFTVBUWV9GVU5DVElPTjtcclxuICAgICAgICB2YXIgbmV3VmFsdWUgPSBfdmFsdWU7XHJcbiAgICAgICAgdmFyIGl0ZW0gPSBzdG9yZVtrZXldO1xyXG4gICAgICAgIGlmKGl0ZW0hPT11bmRlZmluZWQgJiYgaXRlbSA9PT0gT2JqZWN0KGl0ZW0pICYmIG9wdGlvbnMub3ZlcndyaXRlIT09dHJ1ZSkge1xyXG4gICAgICAgICAgICBpdGVtID0gT2JqZWN0LmFzc2lnbihpdGVtLCBuZXdWYWx1ZSk7XHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICBpdGVtID0gbmV3VmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZGF0YU1hcFtrZXldID0gaXRlbTtcclxuXHJcbiAgICAgICAgY2FsbGJhY2soaXRlbSk7XHJcbiAgICAgICAgdGhpcy5yZWFjdChrZXkpO1xyXG4gICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgfTtcclxuICAgIGdldFZhbHVlKF9rZXkpIHtcclxuICAgICAgICB2YXIga2V5ID0gX2tleSB8fCAnJztcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhTWFwW2tleV07XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbm5lY3QoX2tleSxfYWN0aW9uKSB7XHJcbiAgICAgICAgaWYoX2tleT09PXVuZGVmaW5lZCB8fCBfYWN0aW9uPT09dW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGFjdGlvbk1hcCA9IHRoaXMuYWN0aW9uTWFwO1xyXG4gICAgICAgIHZhciBhY3Rpb25MaXN0ID0gYWN0aW9uTWFwW19rZXldIHx8IFtdO1xyXG4gICAgICAgIGFjdGlvbkxpc3QucHVzaChfYWN0aW9uKTtcclxuICAgICAgICBhY3Rpb25NYXBbX2tleV0gPSBhY3Rpb25MaXN0O1xyXG4gICAgfTtcclxuICAgIHJlYWN0KF9rZXkpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgaWYoX2tleT09PXVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBhY3Rpb25NYXAgPSB0aGlzLmFjdGlvbk1hcDtcclxuICAgICAgICB2YXIgYWN0aW9uTGlzdCA9IGFjdGlvbk1hcFtfa2V5XSB8fCBbXTtcclxuICAgICAgICBhY3Rpb25MaXN0LmZvckVhY2goKGFjdGlvbik9PiB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBzZWxmLmdldFZhbHVlKF9rZXkpO1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uKHZhbHVlKTtcclxuICAgICAgICAgICAgfWNhdGNoIChlKXtcclxuICAgICAgICAgICAgICAgIC8vdmFyIGluZGV4ID0gYWN0aW9uTGlzdC5pbmRleE9mKGFjdGlvbik7XHJcbiAgICAgICAgICAgICAgICAvL2FjdGlvbkxpc3Quc3BsaWNlKGluZGV4LDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH07XHJcbiAgICBkZWJ1ZyhzdHIpIHtcclxuICAgICAgICBpZih0aGlzLmRlYnVnTW9kZSl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdERUJVRzogJyArIHN0cik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5jb25zdCBjYyA9IG5ldyBDdWJZX0NvcmUoKTtcclxud2luZG93LmNjID0gY2M7XHJcbmV4cG9ydCBkZWZhdWx0IGNjO1xyXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBBbnhpbiBZYW5nIG9uIDUvMjYvMjAxOC5cclxuICovXHJcbmltcG9ydCBBWENvcmUgZnJvbSAnLi9DdWJZX0NvcmUnO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdWJZX0RPTSB7XHJcbiAgICBjb25zdHJ1Y3RvcihfdGFnLF9pZCxfcm9vdCkge1xyXG4gICAgICAgIHRoaXMuaWQgPSB0aGlzLnJlYWRWYWx1ZShfaWQpfHwgJ3NlbGYnO1xyXG4gICAgICAgIHRoaXMudGFnID0gdGhpcy5yZWFkVmFsdWUoX3RhZykgfHwgJ2Rpdic7XHJcbiAgICAgICAgdGhpcy5kb20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRoaXMudGFnKTtcclxuICAgICAgICB0aGlzLmRvbS5zZXRBdHRyaWJ1dGUoJ2lkJyx0aGlzLmlkKTtcclxuICAgICAgICB0aGlzLmNoaWxkcmVuTGlzdCA9IFtdO1xyXG4gICAgICAgIHRoaXMuYXR0cmlidXRlID0ge307XHJcbiAgICAgICAgdGhpcy5kb21TdHlsZSA9IHt9O1xyXG4gICAgICAgIHRoaXMudXBkYXRlcnMgPSB7fTtcclxuICAgICAgICB0aGlzLnBhcmVudCA9IHt9O1xyXG5cclxuICAgICAgICBpZihfcm9vdCl7XHJcbiAgICAgICAgICAgIF9yb290LmFwcGVuZENoaWxkKHRoaXMuZG9tKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMudXBkYXRlciA9IGZ1bmN0aW9uIChuYW1lKSB7XHJcbiAgICAgICAgICAgIGxldCB1cGRhdGVyID10aGlzLnVwZGF0ZXJzW25hbWVdO1xyXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYodXBkYXRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZXIuY2FsbChzZWxmLCBzZWxmLmRhdGEsIGFyZ3VtZW50cyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgc2V0VXBkYXRlcihuYW1lLHVwZGF0ZXIpe1xyXG4gICAgICAgIHRoaXMudXBkYXRlcnNbbmFtZV0gPSB1cGRhdGVyO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgYmluZChkYXRhKXtcclxuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgYXBwZW5kKF90YWcsX2lkKXtcclxuICAgICAgICBsZXQgdGFnID0gdGhpcy5yZWFkVmFsdWUoX3RhZyk7XHJcbiAgICAgICAgbGV0IGlkID0gdGhpcy5yZWFkVmFsdWUoX2lkKTtcclxuICAgICAgICBsZXQgZWxlbWVudCA9IG5ldyBDdWJZX0RPTSh0YWcsaWQpO1xyXG4gICAgICAgIHRoaXMuYXBwZW5kRWxlbWVudChlbGVtZW50KTtcclxuICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgIH1cclxuICAgIGFwcGVuZEVsZW1lbnQoQ3ViWV9ET00pe1xyXG4gICAgICAgIGxldCBlbGVtZW50ID0gdGhpcy5yZWFkVmFsdWUoQ3ViWV9ET00pO1xyXG4gICAgICAgIGVsZW1lbnQucGFyZW50ID0gdGhpcztcclxuICAgICAgICB0aGlzLmNoaWxkcmVuTGlzdC5wdXNoKGVsZW1lbnQpO1xyXG4gICAgICAgIHRoaXMuZG9tLmFwcGVuZENoaWxkKGVsZW1lbnQuZG9tKTtcclxuICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgIH1cclxuICAgIGF0dHIoa2V5LF92YWx1ZSl7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gdGhpcy5yZWFkVmFsdWUoX3ZhbHVlKTtcclxuICAgICAgICB0aGlzLmF0dHJpYnV0ZVtrZXldID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5kb20uc2V0QXR0cmlidXRlKGtleSx2YWx1ZSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBvbihldmVudE5hbWUsX3ZhbHVlKXtcclxuICAgICAgICBsZXQgdmFsdWUgPSBfdmFsdWU7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMub25bZXZlbnROYW1lXSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuZG9tLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHZhbHVlLmNhbGwoc2VsZixlLHNlbGYuZGF0YSwpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBzdHlsZShfa2V5LF92YWx1ZSl7XHJcbiAgICAgICAgbGV0IGtleSA9IHRoaXMucmVhZFZhbHVlKF9rZXkpO1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IHRoaXMucmVhZFZhbHVlKF92YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5kb21TdHlsZVtrZXldID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5kb20uc3R5bGVba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgY29udGVudChfdmFsdWUpe1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IHRoaXMucmVhZFZhbHVlKF92YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5pbm5lckhUTUwgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLmRvbS5pbm5lckhUTUwgPSB2YWx1ZTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIGFwcGVuZENsYXNzKF9jbGFzc05hbWUpe1xyXG4gICAgICAgIGxldCBjbGFzc05hbWUgPSB0aGlzLnJlYWRWYWx1ZShfY2xhc3NOYW1lKTtcclxuICAgICAgICBsZXQgY2xhc3NlcyA9IHRoaXMuY2xhc3NlcyB8fCBbXTtcclxuICAgICAgICBjbGFzc2VzLnB1c2goY2xhc3NOYW1lKTtcclxuICAgICAgICB0aGlzLmRvbS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcbiAgICAgICAgdGhpcy5jbGFzc2VzID0gY2xhc3NlcztcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIHNlbGVjdChfc2VsZWN0b3Ipe1xyXG4gICAgICAgIGxldCBzZWxlY3RvciA9IF9zZWxlY3Rvci5jaGFyQXQoMCk7XHJcbiAgICAgICAgbGV0IG5hbWUgPSBfc2VsZWN0b3Iuc3Vic3RyaW5nKDEpO1xyXG4gICAgICAgIHN3aXRjaCAoc2VsZWN0b3Ipe1xyXG4gICAgICAgICAgICBjYXNlICcjJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNlbGVjdEJ5SWQobmFtZSk7XHJcbiAgICAgICAgICAgIGNhc2UgJy4nOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0QnlDbGFzc05hbWUobmFtZSk7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RCeVRhZyhfc2VsZWN0b3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNlbGVjdEJ5SWQoaWQpe1xyXG4gICAgICAgIGxldCBjaGlsZHJlbkxpc3QgPSB0aGlzLmNoaWxkcmVuTGlzdDtcclxuICAgICAgICBsZXQgdGFyZ2V0O1xyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGk8Y2hpbGRyZW5MaXN0Lmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICBsZXQgY2hpbGQgPSBjaGlsZHJlbkxpc3RbaV07XHJcbiAgICAgICAgICAgIGlmKGNoaWxkLmlkID09PSBpZCl7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSBjaGlsZDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0YXJnZXQ7XHJcbiAgICB9XHJcbiAgICBzZWxlY3RCeUNsYXNzTmFtZShjbGFzc05hbWUpe1xyXG4gICAgICAgIGxldCBjaGlsZHJlbkxpc3QgPSB0aGlzLmNoaWxkcmVuTGlzdDtcclxuICAgICAgICBsZXQgdGFyZ2V0TGlzdCA9IFtdO1xyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGk8Y2hpbGRyZW5MaXN0Lmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICBsZXQgY2hpbGQgPSBjaGlsZHJlbkxpc3RbaV07XHJcbiAgICAgICAgICAgIGlmKGNoaWxkLmNsYXNzZXMuaW5kZXhPZihjbGFzc05hbWUpPi0xKXtcclxuICAgICAgICAgICAgICAgIHRhcmdldExpc3QucHVzaChjaGlsZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRhcmdldExpc3Q7XHJcbiAgICB9XHJcbiAgICBzZWxlY3RCeVRhZyhfdGFnKXtcclxuICAgICAgICBsZXQgY2hpbGRyZW5MaXN0ID0gdGhpcy5jaGlsZHJlbkxpc3Q7XHJcbiAgICAgICAgbGV0IHRhcmdldExpc3QgPSBbXTtcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpPGNoaWxkcmVuTGlzdC5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5MaXN0W2ldO1xyXG4gICAgICAgICAgICBpZihjaGlsZC50YWcgPT09IF90YWcpe1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0TGlzdC5wdXNoKGNoaWxkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGFyZ2V0TGlzdDtcclxuICAgIH1cclxuICAgIHJlbW92ZShfc2VsZWN0b3Ipe1xyXG4gICAgICAgIGlmKF9zZWxlY3Rvcj09dW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmVTZWxmKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHNlbGVjdG9yID0gX3NlbGVjdG9yLmNoYXJBdCgwKTtcclxuICAgICAgICBsZXQgbmFtZSA9IF9zZWxlY3Rvci5zdWJzdHJpbmcoMSk7XHJcbiAgICAgICAgbGV0IHRhcmdldDtcclxuICAgICAgICBzd2l0Y2ggKHNlbGVjdG9yKXtcclxuICAgICAgICAgICAgY2FzZSAnIyc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUJ5SWQobmFtZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnLic6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUJ5Q2xhc3NOYW1lKG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUJ5VGFnKF9zZWxlY3Rvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVtb3ZlQnlJZChpZCl7XHJcbiAgICAgICAgbGV0IGNoaWxkcmVuTGlzdCA9IHRoaXMuY2hpbGRyZW5MaXN0O1xyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGk8Y2hpbGRyZW5MaXN0Lmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICBsZXQgY2hpbGQgPSBjaGlsZHJlbkxpc3RbaV07XHJcbiAgICAgICAgICAgIGlmKGNoaWxkLmlkID09PSBpZCl7XHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlbkxpc3Quc3BsaWNlKGksMSk7XHJcbiAgICAgICAgICAgICAgICBjaGlsZC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgIGktLTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVtb3ZlQnlDbGFzc05hbWUoY2xhc3NOYW1lKXtcclxuICAgICAgICBsZXQgY2hpbGRyZW5MaXN0ID0gdGhpcy5jaGlsZHJlbkxpc3Q7XHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaTxjaGlsZHJlbkxpc3QubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuTGlzdFtpXTtcclxuICAgICAgICAgICAgaWYoY2hpbGQuY2xhc3Nlcy5pbmRleE9mKGNsYXNzTmFtZSk+LTEpe1xyXG4gICAgICAgICAgICAgICAgY2hpbGRyZW5MaXN0LnNwbGljZShpLDEpO1xyXG4gICAgICAgICAgICAgICAgY2hpbGQucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICBpLS07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZW1vdmVCeVRhZyhfdGFnKXtcclxuICAgICAgICBsZXQgY2hpbGRyZW5MaXN0ID0gdGhpcy5jaGlsZHJlbkxpc3Q7XHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaTxjaGlsZHJlbkxpc3QubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuTGlzdFtpXTtcclxuICAgICAgICAgICAgaWYoY2hpbGQudGFnID09PSBfdGFnKXtcclxuICAgICAgICAgICAgICAgIGNoaWxkcmVuTGlzdC5zcGxpY2UoaSwxKTtcclxuICAgICAgICAgICAgICAgIGNoaWxkLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgaS0tO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVtb3ZlU2VsZigpe1xyXG4gICAgICAgIC8qdGhpcy5jaGlsZHJlbkxpc3QuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgICAgICAgICAgY2hpbGQucmVtb3ZlKCk7XHJcbiAgICAgICAgfSk7Ki9cclxuICAgICAgICB0aGlzLmRvbS5yZW1vdmUoKTtcclxuICAgICAgICBpZih0aGlzLnBhcmVudCl7XHJcbiAgICAgICAgICAgIGxldCBjaGlsZHJlbkxpc3QgPSB0aGlzLnBhcmVudC5jaGlsZHJlbkxpc3Q7XHJcbiAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGk8Y2hpbGRyZW5MaXN0Lmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5MaXN0W2ldO1xyXG4gICAgICAgICAgICAgICAgaWYoY2hpbGQgPT09IHRoaXMpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuTGlzdC5zcGxpY2UoaSwxKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLypmb3IodmFyIGtleSBpbiB0aGlzKXtcclxuICAgICAgICAgICAgZGVsZXRlIHRoaXNba2V5XVxyXG4gICAgICAgIH0qL1xyXG4gICAgfVxyXG4gICAgcmVhZFZhbHVlKF92YWx1ZSl7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gX3ZhbHVlO1xyXG4gICAgICAgIGlmKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiKXtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLmNhbGwodGhpcyx0aGlzLmRhdGEpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiY29uc3QgTUFYX0NZQ0xFID0gMTAwO1xyXG5jbGFzcyBDdWJZX1JvdXRpbmV7XHJcbiAgICBjb25zdHJ1Y3RvcihfdGlja1NwZWVkLF9vcHRpb25zKXtcclxuICAgICAgICB0aGlzLnRpY2tTcGVlZCA9IF90aWNrU3BlZWQgfHwgMTtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IF9vcHRpb25zIHx8IHt9O1xyXG4gICAgICAgIHRoaXMuaW5pdChvcHRpb25zKTtcclxuICAgICAgICB0aGlzLk1BWF9DWUNMRSA9IE1BWF9DWUNMRTtcclxuICAgIH1cclxuICAgIGluaXQob3B0aW9ucyl7XHJcbiAgICAgICAgd2luZG93LkFYUiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5jeWNsZSA9IDA7XHJcbiAgICAgICAgdGhpcy5yb3V0aW5lTGlzdCA9IFtdO1xyXG4gICAgICAgIHRoaXMubG9uZ2VzdFJvdXRpbmVUaW1lID0wO1xyXG4gICAgICAgIHNldFRpbWVvdXQodGhpcy5zdGFydC5iaW5kKHRoaXMpKTtcclxuICAgIH07XHJcbiAgICBzdGFydCgpe1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLmN5Y2xlU3RhcnRUaW1lID0gRGF0ZS5ub3coKTtcclxuICAgICAgICBzZXRUaW1lb3V0KHNlbGYucm91dGluZS5iaW5kKHRoaXMpLHRoaXMudGlja1NwZWVkKTtcclxuICAgIH1cclxuICAgIGFwcGVuZChuYW1lLGdyb3VwKSB7XHJcbiAgICAgICAgbGV0IG5ld1JvdXRpbmUgPSBuZXcgUm91dGluZShuYW1lLCBncm91cCk7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIG5ld1JvdXRpbmUuaW5zZXJ0PSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmKG5ld1JvdXRpbmUuZnJlcSE9PTEpIHtcclxuICAgICAgICAgICAgICAgIG5ld1JvdXRpbmUuY291bnRlciArPSBzZWxmLnJvdXRpbmVMaXN0Lmxlbmd0aCArIDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbmV3Um91dGluZS5pZHggPSBzZWxmLnJvdXRpbmVMaXN0Lmxlbmd0aDtcclxuICAgICAgICAgICAgc2VsZi5yb3V0aW5lTGlzdC5wdXNoKG5ld1JvdXRpbmUpO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3Um91dGluZTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIG5ld1JvdXRpbmUucmVtb3ZlPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHNlbGYucm91dGluZUxpc3Quc3BsaWNlKG5ld1JvdXRpbmUuaWR4LDEpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIG5ld1JvdXRpbmU7XHJcbiAgICB9XHJcbiAgICBnZXRDdXJyZW50Q3ljbGUoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5jeWNsZTtcclxuICAgIH1cclxuICAgIHJvdXRpbmUoKXtcclxuICAgICAgICBsZXQgcm91dGluZUxpc3QgPSB0aGlzLnJvdXRpbmVMaXN0O1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBmb3IodmFyIGk9MDtpPHJvdXRpbmVMaXN0Lmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICBsZXQgcm91dGluZSA9IHJvdXRpbmVMaXN0W2ldO1xyXG4gICAgICAgICAgICBsZXQgc3RhcnRUaW1lID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGlmKHJvdXRpbmUuY2hlY2tDb3VudGVyKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRpbmUuYWN0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYubGFzdFJvdXRpbmVUaW1lID0gRGF0ZS5ub3coKSAtIHN0YXJ0VGltZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoc2VsZi5sb25nZXN0Um91dGluZVRpbWU8c2VsZi5sYXN0Um91dGluZVRpbWUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5sb25nZXN0Um91dGluZVRpbWU9c2VsZi5sYXN0Um91dGluZVRpbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoc2VsZi5sYXN0Um91dGluZVRpbWU+MjAwKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignUm91dGluZTonICsgcm91dGluZS5uYW1lICsgJyB0b29rIHRvbyBsb25nIHRvIHJ1bi4gWycrc2VsZi5sYXN0Um91dGluZVRpbWUrJ21zXScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGluZS5pc1J1bm5pbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9LDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9Y2F0Y2ggKGUpe1xyXG4gICAgICAgICAgICAgICAgLy9ERUNJREUgSUYgUkVNT1ZFIFJPVVRJTkUgTEFURVI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jeWNsZSsrO1xyXG4gICAgICAgIGlmKHRoaXMuY3ljbGUgPT09IE1BWF9DWUNMRSl7XHJcbiAgICAgICAgICAgIHRoaXMuY3ljbGUgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RDeWNsZVRpbWUgPSBEYXRlLm5vdygpIC0gdGhpcy5jeWNsZVN0YXJ0VGltZTtcclxuICAgICAgICAgICAgdGhpcy5jeWNsZVBlclNlYyA9IE1hdGguZmxvb3IoMTAwMCAvIHRoaXMubGFzdEN5Y2xlVGltZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc3RhcnQoKTtcclxuICAgIH1cclxufVxyXG5jbGFzcyBSb3V0aW5le1xyXG4gICAgY29uc3RydWN0b3IobmFtZSxncm91cCl7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLmdyb3VwID0gZ3JvdXAgfHwgJ2NvbW1vbic7XHJcbiAgICAgICAgdGhpcy5mcmVxID0gMTtcclxuICAgICAgICB0aGlzLmFjdGlvbiA9IGZ1bmN0aW9uICgpIHt9O1xyXG4gICAgICAgIHRoaXMucmVwZWF0ID0gMDtcclxuICAgIH1cclxuICAgIGF0dHIoa2V5LHZhbHVlKXtcclxuICAgICAgICB0aGlzW2tleV0gPSB2YWx1ZTtcclxuICAgICAgICBpZihrZXk9PT0nZnJlcScpe1xyXG4gICAgICAgICAgICB0aGlzWydjb3VudGVyJ10gPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICByZXNldENvdW50ZXIoKXtcclxuICAgICAgICB0aGlzLmNvdW50ZXIgPSB0aGlzLmZyZXE7XHJcbiAgICB9XHJcbiAgICBjaGVja0NvdW50ZXIoKXtcclxuICAgICAgICBpZih0aGlzLmlzUnVubmluZz09PXRydWUpe1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgc2hvdWxkUnVuID0gLS10aGlzLmNvdW50ZXI9PT0wO1xyXG4gICAgICAgIGlmKHRoaXMuY291bnRlcj09PTApe1xyXG4gICAgICAgICAgICBpZih0aGlzLmV4ZWN1dGlvblRpbWVzIT09dW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXhlY3V0aW9uVGltZXMtLTtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuZXhlY3V0aW9uVGltZXM9PT0wKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuaXNSdW5uaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5yZXNldENvdW50ZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICByZXR1cm4gc2hvdWxkUnVuO1xyXG4gICAgfVxyXG5cclxufVxyXG5jb25zdCBjciA9IG5ldyBDdWJZX1JvdXRpbmUoKTtcclxud2luZG93LmNyID0gY3I7XHJcbmV4cG9ydCBkZWZhdWx0IGNyOyIsImltcG9ydCBDdWJZX0RPTSBmcm9tICcuL0ZyYW1ld29yay9DdWJZL0N1YllfRE9NJztcclxuXHJcblxyXG52YXIgbWFpbkNvbnRlbnQgPSBuZXcgQ3ViWV9ET00oJ2RpdicsJ2hvbWVDb250ZW50Jyk7XHJcbm1haW5Db250ZW50LnN0eWxlKCd3aWR0aCcsJzEwMHZ3JylcclxuICAgIC5zdHlsZSgnaGVpZ2h0JywnMTAwdmgnKVxyXG4gICAgLnN0eWxlKCdiYWNrZ3JvdW5kJywnIzIyMmYzZScpXHJcbiAgICAuc3R5bGUoJ3Bvc2l0aW9uJywncmVsYXRpdmUnKVxyXG4gICAgLnN0eWxlKCd0cmFuc2l0aW9uJywgJzVzJylcclxuICAgIC5zdHlsZSgnb3ZlcmZsb3cnLCdoaWRkZW4nKVxyXG4gICAgLmFwcGVuZENsYXNzKCdtYWluQ29udGVudCcpXHJcbiAgICAub24oJ21vdXNlbW92ZScsZnVuY3Rpb24gKGUsZCkge1xyXG4gICAgICAgIGxldCB4ID0gZS5jbGllbnRYO1xyXG4gICAgICAgIGxldCB5ID0gZS5jbGllbnRZO1xyXG4gICAgICAgIGxldCBvcmlnaW4gPSB7XHJcbiAgICAgICAgICAgIHg6IHdpbmRvdy5pbm5lcldpZHRoLzIsXHJcbiAgICAgICAgICAgIHk6IHdpbmRvdy5pbm5lckhlaWdodC8yXHJcbiAgICAgICAgfTtcclxuICAgICAgICBtYWluQ29udGVudC5keCA9IC0oeCAtIG9yaWdpbi54KS8xMDtcclxuICAgICAgICBtYWluQ29udGVudC5keSA9IC0oeSAtIG9yaWdpbi55KS8xMDtcclxuXHJcbiAgICB9KTtcclxudmFyIGJhY2tncm91bmRBbiA9IGNyLmFwcGVuZCgnYmFja2dyb3VuZEFuJylcclxuICAgIC5hdHRyKCdmcmVxJywyMDApXHJcbiAgICAuYXR0cignZXhlY3V0aW9uVGltZXMnLDEpXHJcbiAgICAuYXR0cignYWN0aW9uJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbWFpbkNvbnRlbnQuc3R5bGUoJ2JhY2tncm91bmQnLCdibGFjaycpXHJcbiAgICB9KS5pbnNlcnQoKTtcclxuXHJcbnZhciBoZWFkTGluZSA9IG1haW5Db250ZW50LmFwcGVuZCgnaDEnLCdoZWFkTGluZScpXHJcbiAgICAuY29udGVudCgnRlJPTlQgRU5EIEVOR0lORUVSJylcclxuICAgIC5zdHlsZSgncG9zaXRpb24nLCdmaXhlZCcpXHJcbiAgICAuc3R5bGUoJ2NvbG9yJywnd2hpdGUnKVxyXG4gICAgLnN0eWxlKCd3aWR0aCcsJzEwMCUnKVxyXG4gICAgLnN0eWxlKCdoZWlnaHQnLCAnNjBweCcpXHJcbiAgICAuc3R5bGUoJ3RleHQtYWxpZ24nLCdjZW50ZXInKVxyXG4gICAgLnN0eWxlKCdsZWZ0JywnMCcpXHJcbiAgICAuc3R5bGUoJ3JpZ2h0JywnMCcpXHJcbiAgICAuc3R5bGUoJ2JvdHRvbScsJzMzJScpXHJcbiAgICAuc3R5bGUoJ21hcmdpbicsJ2F1dG8nKVxyXG4gICAgLnN0eWxlKCdmb250LXNpemUnLCc2NHB4JylcclxuICAgIC5zdHlsZSgndHJhbnNpdGlvbicsICcxcycpXHJcbiAgICAuc3R5bGUoJ3RleHQtc2hhZG93JywnMCAwIDEwcHggIzcwYTFmZicpXHJcbiAgICAuc3R5bGUoJ3otaW5kZXgnLDEpXHJcbiAgICAub24oJ21vdXNlb3ZlcicsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuc3R5bGUoJ3RleHQtc2hhZG93JywnMCAwIDMwcHggI2VjY2M2OCcpXHJcbiAgICB9KVxyXG4gICAgLm9uKCdtb3VzZWxlYXZlJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5zdHlsZSgndGV4dC1zaGFkb3cnLCcwIDAgMTBweCAjNzBhMWZmJylcclxuICAgIH0pO1xyXG52YXIgaG9tZUhlYWRMaW5lQW5pbWF0aW9uID0gY3IuYXBwZW5kKCdob21lX2hlYWRMaW5lX2FuaW1hdGlvbicpXHJcbiAgICAuYXR0cignZnJlcScsMjUpXHJcbiAgICAuYXR0cignYWN0aW9uJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0IG9kZCA9IE1hdGgucmFuZG9tKCkqMTAwO1xyXG4gICAgICAgIGlmKG9kZD41MCl7XHJcbiAgICAgICAgICAgIGhlYWRMaW5lLnN0eWxlKCd0ZXh0LXNoYWRvdycsJzAgMCAzMHB4ICNlY2NjNjgnKVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBoZWFkTGluZS5zdHlsZSgndGV4dC1zaGFkb3cnLCcwIDAgMTBweCAjNzBhMWZmJylcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgLmluc2VydCgpO1xyXG5cclxudmFyIHN1YkhlYWRMaW5lID0gbWFpbkNvbnRlbnQuYXBwZW5kKCdoMScsJ3N1YkhlYWRMaW5lJylcclxuICAgIC5jb250ZW50KCctIHdobyBtYWtlcyBkYXRhIGFsaXZlIC0nKVxyXG4gICAgLnN0eWxlKCdwb3NpdGlvbicsJ2ZpeGVkJylcclxuICAgIC5zdHlsZSgnY29sb3InLCcjZWNjYzY4JylcclxuICAgIC5zdHlsZSgnd2lkdGgnLCcxMDAlJylcclxuICAgIC5zdHlsZSgnaGVpZ2h0JywgJzMwcHgnKVxyXG4gICAgLnN0eWxlKCd0ZXh0LWFsaWduJywnY2VudGVyJylcclxuICAgIC5zdHlsZSgnbGVmdCcsJzAnKVxyXG4gICAgLnN0eWxlKCdyaWdodCcsJzAnKVxyXG4gICAgLnN0eWxlKCdib3R0b20nLCczMCUnKVxyXG4gICAgLnN0eWxlKCdtYXJnaW4nLCdhdXRvJylcclxuICAgIC5zdHlsZSgnZm9udC1zaXplJywnMzJweCcpXHJcbiAgICAuc3R5bGUoJ3RyYW5zaXRpb24nLCAnMXMnKVxyXG4gICAgLnN0eWxlKCd0ZXh0LXNoYWRvdycsJzAgMCAxMHB4ICNlY2NjNjgnKVxyXG4gICAgLnN0eWxlKCd6LWluZGV4JywxKTtcclxudmFyIGluZm9CdXR0b25IYWxvID0gbWFpbkNvbnRlbnQuYXBwZW5kKCdzcGFuJywnaW5mb0J1dHRvbkhhbG8nKVxyXG4gICAgLnN0eWxlKCdwb3NpdGlvbicsJ2ZpeGVkJylcclxuICAgIC5zdHlsZSgnY29sb3InLCcjZWNjYzY4JylcclxuICAgIC5zdHlsZSgnd2lkdGgnLCczMnB4JylcclxuICAgIC5zdHlsZSgnaGVpZ2h0JywgJzMycHgnKVxyXG4gICAgLnN0eWxlKCdvdmVyZmxvdycsJ2hpZGRlbicpXHJcbiAgICAuc3R5bGUoJ2JvcmRlci1yYWRpdXMnLCc0cHgnKVxyXG4gICAgLnN0eWxlKCd0ZXh0LWFsaWduJywnY2VudGVyJylcclxuICAgIC5zdHlsZSgnbGVmdCcsJzAnKVxyXG4gICAgLnN0eWxlKCdyaWdodCcsJzAnKVxyXG4gICAgLnN0eWxlKCdib3R0b20nLCcxOCUnKVxyXG4gICAgLnN0eWxlKCdtYXJnaW4nLCdhdXRvJylcclxuICAgIC5zdHlsZSgnZm9udC1zaXplJywnMjRweCcpXHJcbiAgICAuc3R5bGUoJ3RyYW5zaXRpb24nLCAnMC41cycpXHJcbiAgICAuc3R5bGUoJ2JvcmRlcicsJzFweCBzb2xpZCAjZWNjYzY4JylcclxuICAgIC5zdHlsZSgnYm94LXNoYWRvdycsJzAgMCAzMHB4ICNlY2NjNjgnKVxyXG4gICAgLnN0eWxlKCdjdXJzb3InLCdwb2ludGVyJylcclxuICAgIC5zdHlsZSgnei1pbmRleCcsMSk7XHJcbnZhciBpbmZvQnV0dG9uID0gbWFpbkNvbnRlbnQuYXBwZW5kKCdzcGFuJywnaW5mb0J1dHRvbicpXHJcbiAgICAuY29udGVudCgnV2FubmEga25vdyBtb3JlPycpXHJcbiAgICAuc3R5bGUoJ3Bvc2l0aW9uJywnZml4ZWQnKVxyXG4gICAgLnN0eWxlKCdjb2xvcicsJyNlY2NjNjgnKVxyXG4gICAgLnN0eWxlKCd3aWR0aCcsJzMycHgnKVxyXG4gICAgLnN0eWxlKCdoZWlnaHQnLCAnMzJweCcpXHJcbiAgICAuc3R5bGUoJ292ZXJmbG93JywnaGlkZGVuJylcclxuICAgIC5zdHlsZSgnYm9yZGVyJywnMXB4IHNvbGlkIHRyYW5zcGFyZW50JylcclxuICAgIC5zdHlsZSgnYm9yZGVyLXJhZGl1cycsJzRweCcpXHJcbiAgICAuc3R5bGUoJ3RleHQtYWxpZ24nLCdjZW50ZXInKVxyXG4gICAgLnN0eWxlKCdsZWZ0JywnMCcpXHJcbiAgICAuc3R5bGUoJ3JpZ2h0JywnMCcpXHJcbiAgICAuc3R5bGUoJ2JvdHRvbScsJzE4JScpXHJcbiAgICAuc3R5bGUoJ21hcmdpbicsJ2F1dG8nKVxyXG4gICAgLnN0eWxlKCdmb250LXNpemUnLCcyNHB4JylcclxuICAgIC5zdHlsZSgndHJhbnNpdGlvbicsICcwLjVzJylcclxuICAgIC5zdHlsZSgnYmFja2dyb3VuZCcsICcjZWNjYzY4JylcclxuICAgIC5zdHlsZSgndGV4dC1zaGFkb3cnLCcwIDAgNXB4ICNlY2NjNjgnKVxyXG4gICAgLnN0eWxlKCdib3gtc2hhZG93JywnMCAwIDEweCAjZWNjYzY4JylcclxuICAgIC5zdHlsZSgnY3Vyc29yJywncG9pbnRlcicpXHJcbiAgICAuc3R5bGUoJ3otaW5kZXgnLDEpXHJcbiAgICAub24oJ2NsaWNrJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY2Muc3RvcmVWYWx1ZSgnY3VycmVudFZpZXcnLCdhYm91dCcpO1xyXG4gICAgfSlcclxuICAgIC5vbignbW91c2VvdmVyJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5zdHlsZSgnYmFja2dyb3VuZCcsJ3JnYmEoMCwgMCwgMCwgMC41KScpXHJcbiAgICAgICAgICAgIC5zdHlsZSgnd2lkdGgnLCcxMDAlJylcclxuICAgICAgICAgICAgLnN0eWxlKCdib3gtc2hhZG93JywnJylcclxuICAgICAgICBpbmZvQnV0dG9uLm92ZXJlZCA9IHRydWU7XHJcbiAgICB9KVxyXG4gICAgLm9uKCdtb3VzZWxlYXZlJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5zdHlsZSgnYmFja2dyb3VuZCcsICcjZWNjYzY4JylcclxuICAgICAgICAgICAgLnN0eWxlKCd3aWR0aCcsJzMycHgnKVxyXG4gICAgICAgICAgICAuc3R5bGUoJ2JveC1zaGFkb3cnLCcwIDAgMTBweCAjZWNjYzY4JylcclxuICAgICAgICBpbmZvQnV0dG9uLm92ZXJlZCA9IGZhbHNlO1xyXG4gICAgfSk7XHJcbnZhciBpbmZvQnV0dG9uSGFsb0FuID0gY3IuYXBwZW5kKCdpbmZvQnV0dG9uSGFsb0FuJylcclxuICAgIC5hdHRyKCdmcmVxJyw2MClcclxuICAgIC5hdHRyKCdhY3Rpb24nLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZihpbmZvQnV0dG9uLm92ZXJlZCA9PT0gdHJ1ZSl7XHJcbiAgICAgICAgICAgIGluZm9CdXR0b25IYWxvLnN0YXRlID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3dpdGNoKGluZm9CdXR0b25IYWxvLnN0YXRlKXtcclxuICAgICAgICAgICAgY2FzZSB1bmRlZmluZWQ6XHJcbiAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgIGluZm9CdXR0b25IYWxvLnN0YXRlID0gMTtcclxuICAgICAgICAgICAgICAgIGluZm9CdXR0b25IYWxvLnN0eWxlKCd3aWR0aCcsICc2NHB4JylcclxuICAgICAgICAgICAgICAgICAgICAuc3R5bGUoJ2JvdHRvbScsJ2NhbGMoMTglIC0gMTVweCknKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdHlsZSgnaGVpZ2h0JywgJzY0cHgnKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdHlsZSgnb3BhY2l0eScsIDApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIGluZm9CdXR0b25IYWxvLnN0YXRlID0gMjtcclxuICAgICAgICAgICAgICAgIGluZm9CdXR0b25IYWxvLnN0eWxlKCd3aWR0aCcsICczMnB4JylcclxuICAgICAgICAgICAgICAgICAgICAuc3R5bGUoJ2JvdHRvbScsJzE4JScpXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0eWxlKCdoZWlnaHQnLCAnMzJweCcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIGluZm9CdXR0b25IYWxvLnN0YXRlID0gMDtcclxuICAgICAgICAgICAgICAgIGluZm9CdXR0b25IYWxvLnN0eWxlKCdvcGFjaXR5JywgMSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9KS5pbnNlcnQoKTtcclxuXHJcbndpbmRvdy5tb2JpbGVjaGVjayA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIGNoZWNrID0gZmFsc2U7XHJcbiAgICAoZnVuY3Rpb24oYSl7aWYoLyhhbmRyb2lkfGJiXFxkK3xtZWVnbykuK21vYmlsZXxhdmFudGdvfGJhZGFcXC98YmxhY2tiZXJyeXxibGF6ZXJ8Y29tcGFsfGVsYWluZXxmZW5uZWN8aGlwdG9wfGllbW9iaWxlfGlwKGhvbmV8b2QpfGlyaXN8a2luZGxlfGxnZSB8bWFlbW98bWlkcHxtbXB8bW9iaWxlLitmaXJlZm94fG5ldGZyb250fG9wZXJhIG0ob2J8aW4paXxwYWxtKCBvcyk/fHBob25lfHAoaXhpfHJlKVxcL3xwbHVja2VyfHBvY2tldHxwc3B8c2VyaWVzKDR8NikwfHN5bWJpYW58dHJlb3x1cFxcLihicm93c2VyfGxpbmspfHZvZGFmb25lfHdhcHx3aW5kb3dzIGNlfHhkYXx4aWluby9pLnRlc3QoYSl8fC8xMjA3fDYzMTB8NjU5MHwzZ3NvfDR0aHB8NTBbMS02XWl8Nzcwc3w4MDJzfGEgd2F8YWJhY3xhYyhlcnxvb3xzXFwtKXxhaShrb3xybil8YWwoYXZ8Y2F8Y28pfGFtb2l8YW4oZXh8bnl8eXcpfGFwdHV8YXIoY2h8Z28pfGFzKHRlfHVzKXxhdHR3fGF1KGRpfFxcLW18ciB8cyApfGF2YW58YmUoY2t8bGx8bnEpfGJpKGxifHJkKXxibChhY3xheil8YnIoZXx2KXd8YnVtYnxid1xcLShufHUpfGM1NVxcL3xjYXBpfGNjd2F8Y2RtXFwtfGNlbGx8Y2h0bXxjbGRjfGNtZFxcLXxjbyhtcHxuZCl8Y3Jhd3xkYShpdHxsbHxuZyl8ZGJ0ZXxkY1xcLXN8ZGV2aXxkaWNhfGRtb2J8ZG8oY3xwKW98ZHMoMTJ8XFwtZCl8ZWwoNDl8YWkpfGVtKGwyfHVsKXxlcihpY3xrMCl8ZXNsOHxleihbNC03XTB8b3N8d2F8emUpfGZldGN8Zmx5KFxcLXxfKXxnMSB1fGc1NjB8Z2VuZXxnZlxcLTV8Z1xcLW1vfGdvKFxcLnd8b2QpfGdyKGFkfHVuKXxoYWllfGhjaXR8aGRcXC0obXxwfHQpfGhlaVxcLXxoaShwdHx0YSl8aHAoIGl8aXApfGhzXFwtY3xodChjKFxcLXwgfF98YXxnfHB8c3x0KXx0cCl8aHUoYXd8dGMpfGlcXC0oMjB8Z298bWEpfGkyMzB8aWFjKCB8XFwtfFxcLyl8aWJyb3xpZGVhfGlnMDF8aWtvbXxpbTFrfGlubm98aXBhcXxpcmlzfGphKHR8dilhfGpicm98amVtdXxqaWdzfGtkZGl8a2VqaXxrZ3QoIHxcXC8pfGtsb258a3B0IHxrd2NcXC18a3lvKGN8ayl8bGUobm98eGkpfGxnKCBnfFxcLyhrfGx8dSl8NTB8NTR8XFwtW2Etd10pfGxpYnd8bHlueHxtMVxcLXd8bTNnYXxtNTBcXC98bWEodGV8dWl8eG8pfG1jKDAxfDIxfGNhKXxtXFwtY3J8bWUocmN8cmkpfG1pKG84fG9hfHRzKXxtbWVmfG1vKDAxfDAyfGJpfGRlfGRvfHQoXFwtfCB8b3x2KXx6eil8bXQoNTB8cDF8diApfG13YnB8bXl3YXxuMTBbMC0yXXxuMjBbMi0zXXxuMzAoMHwyKXxuNTAoMHwyfDUpfG43KDAoMHwxKXwxMCl8bmUoKGN8bSlcXC18b258dGZ8d2Z8d2d8d3QpfG5vayg2fGkpfG56cGh8bzJpbXxvcCh0aXx3dil8b3Jhbnxvd2cxfHA4MDB8cGFuKGF8ZHx0KXxwZHhnfHBnKDEzfFxcLShbMS04XXxjKSl8cGhpbHxwaXJlfHBsKGF5fHVjKXxwblxcLTJ8cG8oY2t8cnR8c2UpfHByb3h8cHNpb3xwdFxcLWd8cWFcXC1hfHFjKDA3fDEyfDIxfDMyfDYwfFxcLVsyLTddfGlcXC0pfHF0ZWt8cjM4MHxyNjAwfHJha3N8cmltOXxybyh2ZXx6byl8czU1XFwvfHNhKGdlfG1hfG1tfG1zfG55fHZhKXxzYygwMXxoXFwtfG9vfHBcXC0pfHNka1xcL3xzZShjKFxcLXwwfDEpfDQ3fG1jfG5kfHJpKXxzZ2hcXC18c2hhcnxzaWUoXFwtfG0pfHNrXFwtMHxzbCg0NXxpZCl8c20oYWx8YXJ8YjN8aXR8dDUpfHNvKGZ0fG55KXxzcCgwMXxoXFwtfHZcXC18diApfHN5KDAxfG1iKXx0MigxOHw1MCl8dDYoMDB8MTB8MTgpfHRhKGd0fGxrKXx0Y2xcXC18dGRnXFwtfHRlbChpfG0pfHRpbVxcLXx0XFwtbW98dG8ocGx8c2gpfHRzKDcwfG1cXC18bTN8bTUpfHR4XFwtOXx1cChcXC5ifGcxfHNpKXx1dHN0fHY0MDB8djc1MHx2ZXJpfHZpKHJnfHRlKXx2ayg0MHw1WzAtM118XFwtdil8dm00MHx2b2RhfHZ1bGN8dngoNTJ8NTN8NjB8NjF8NzB8ODB8ODF8ODN8ODV8OTgpfHczYyhcXC18ICl8d2ViY3x3aGl0fHdpKGcgfG5jfG53KXx3bWxifHdvbnV8eDcwMHx5YXNcXC18eW91cnx6ZXRvfHp0ZVxcLS9pLnRlc3QoYS5zdWJzdHIoMCw0KSkpIGNoZWNrID0gdHJ1ZTt9KShuYXZpZ2F0b3IudXNlckFnZW50fHxuYXZpZ2F0b3IudmVuZG9yfHx3aW5kb3cub3BlcmEpO1xyXG4gICAgcmV0dXJuIGNoZWNrO1xyXG59O1xyXG52YXIgY2lyY2xlTnVtID0gbW9iaWxlY2hlY2soKT81MDoxNTA7XHJcbnZhciBjaXJjbGVMaXN0ID0gW107XHJcblxyXG5mb3IodmFyIGk9MDtpPGNpcmNsZU51bTtpKyspe1xyXG4gICAgbGV0IHggPSBNYXRoLnJhbmRvbSgpKndpbmRvdy5pbm5lcldpZHRoKzEwO1xyXG4gICAgbGV0IHkgPSBNYXRoLnJhbmRvbSgpKndpbmRvdy5pbm5lckhlaWdodCsxMDtcclxuICAgIGxldCBjaXJjbGUgPSBtYWluQ29udGVudC5hcHBlbmQoJ2RpdicpXHJcbiAgICAgICAgLnN0eWxlKCdwb3NpdGlvbicsJ2Fic29sdXRlJylcclxuICAgICAgICAuc3R5bGUoJ3dpZHRoJywnMjBweCcpXHJcbiAgICAgICAgLnN0eWxlKCdoZWlnaHQnLCcyMHB4JylcclxuICAgICAgICAuc3R5bGUoJ2JvcmRlci1yYWRpdXMnLCc0cHgnKVxyXG4gICAgICAgIC5zdHlsZSgnYmFja2dyb3VuZCcsJyNlY2NjNjgnKVxyXG4gICAgICAgIC5zdHlsZSgndHJhbnNpdGlvbicsJzAuMXMgbGluZWFyJylcclxuICAgICAgICAuc3R5bGUoJ2JveC1zaGFkb3cnLCcwIDAgMTBweCAjZWNjYzY4JylcclxuICAgICAgICAuc3R5bGUoJ29wYWNpdHknLCAnMCcpXHJcbiAgICAgICAgLnN0eWxlKCd0cmFuc2Zvcm0nLCd0cmFuc2xhdGUoJyt4KydweCwnK3krJ3B4KScpO1xyXG4gICAgXHJcbiAgICBjaXJjbGUueCA9IHg7XHJcbiAgICBjaXJjbGUueSA9IHk7XHJcbiAgICBjaXJjbGUuZHggPSBNYXRoLnJhbmRvbSgpLTAuNTtcclxuICAgIGNpcmNsZS5keSA9IE1hdGgucmFuZG9tKCktMC41O1xyXG4gICAgY2lyY2xlLmRzID0gMC4wMTtcclxuICAgIGNpcmNsZS5zY2FsZSA9ICBNYXRoLnJhbmRvbSgpO1xyXG4gICAgY2lyY2xlLmNvdW50ZXIgPSAxMDtcclxuICAgIGxldCBjaXJjbGVBbiA9IEFYUi5hcHBlbmQoJ2hvbWVfY2lyY2xlX2FuaW1hdGlvbicpXHJcbiAgICAgICAgLmF0dHIoJ2ZyZXEnLDUpXHJcbiAgICAgICAgLmF0dHIoJ2FjdGlvbicsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBsZXQgc2NhbGUgPSBjaXJjbGUuc2NhbGU7XHJcbiAgICAgICAgICAgIGNpcmNsZS54Kz1jaXJjbGUuZHg7XHJcbiAgICAgICAgICAgIGNpcmNsZS55Kz1jaXJjbGUuZHk7XHJcblxyXG4gICAgICAgICAgICBjaXJjbGUuc3R5bGUoJ3RyYW5zZm9ybScsJ3RyYW5zbGF0ZSgnKyhjaXJjbGUueCArIChtYWluQ29udGVudC5keHx8MCkqc2NhbGUpKydweCwnKyhjaXJjbGUueSArIChtYWluQ29udGVudC5keXx8MCkqc2NhbGUpKydweCkgc2NhbGUoJytzY2FsZSsnKScpXHJcbiAgICAgICAgICAgICAgICAuc3R5bGUoJ29wYWNpdHknLCBzY2FsZSlcclxuICAgICAgICAgICAgICAgIC5zdHlsZSgnei1pbmRleCcsIHNjYWxlPj0wLjg/MjowKVxyXG4gICAgICAgICAgICAgICAgLnN0eWxlKCdib3gtc2hhZG93JywnMCAwICcrKE1hdGgucmFuZG9tKCkqMTArMTApKydweCAjZWNjYzY4Jyk7XHJcbiAgICAgICAgICAgIGlmKGNpcmNsZS54PndpbmRvdy5pbm5lcldpZHRoKXtcclxuICAgICAgICAgICAgICAgIGNpcmNsZS5keCA9IC0oTWF0aC5yYW5kb20oKSowLjUrMC4xKTtcclxuICAgICAgICAgICAgfWVsc2UgaWYoY2lyY2xlLng8MCl7XHJcbiAgICAgICAgICAgICAgICBjaXJjbGUuZHggPSBNYXRoLnJhbmRvbSgpKjAuNSswLjE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoY2lyY2xlLnk+d2luZG93LmlubmVySGVpZ2h0KXtcclxuICAgICAgICAgICAgICAgIGNpcmNsZS5keSA9IC0oTWF0aC5yYW5kb20oKSowLjUrMC4xKTtcclxuICAgICAgICAgICAgfWVsc2UgaWYoY2lyY2xlLnk8MCl7XHJcbiAgICAgICAgICAgICAgICBjaXJjbGUuZHkgPSBNYXRoLnJhbmRvbSgpKjAuNSswLjE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2lyY2xlLmNvdW50ZXItLTtcclxuICAgICAgICAgICAgaWYoY2lyY2xlLmNvdW50ZXI8PTApe1xyXG4gICAgICAgICAgICAgICAgY2lyY2xlLmNvdW50ZXI9MTA7XHJcbiAgICAgICAgICAgICAgICBjaXJjbGUuc2NhbGUrPWNpcmNsZS5kcztcclxuICAgICAgICAgICAgICAgIGlmKGNpcmNsZS5zY2FsZT49MSl7XHJcbiAgICAgICAgICAgICAgICAgICAgY2lyY2xlLmRzPS0wLjAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYoY2lyY2xlLnNjYWxlPD0wKXtcclxuICAgICAgICAgICAgICAgICAgICBjaXJjbGUuZHM9MC4wMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLmluc2VydCgpO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBtYWluQ29udGVudDsiLCIvKipcclxuICogQ3JlYXRlZCBieSBBbnhpbiBZYW5nIG9uIDMvMjgvMjAxOC5cclxuICovXHJcbmltcG9ydCBDQyBmcm9tICcuL0ZyYW1ld29yay9DdWJZL0N1YllfQ29yZSc7XHJcbmltcG9ydCBDdWJZX0RPTSBmcm9tICcuL0ZyYW1ld29yay9DdWJZL0N1YllfRE9NJztcclxuaW1wb3J0IENSIGZyb20gJy4vRnJhbWV3b3JrL0N1YlkvQ3ViWV9Sb3V0aW5lJztcclxuaW1wb3J0IGhvbWVDb250ZW50IGZyb20gJy4vaG9tZSc7XHJcbnRyeSB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIG1lbnVDb250YWluZXIudXBkYXRlcignY2xvc2VNZW51JykoKTtcclxuICAgIH0pO1xyXG4gICAgd2luZG93LnJvb3QgPSBuZXcgQ3ViWV9ET00oJ2RpdicsICdheF9yb290JywgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcclxuICAgIHJvb3Quc3R5bGUoJ2ZvbnQtc2l6ZScsICcxMnB4JylcclxuICAgICAgICAuc3R5bGUoJ2N1cnNvcicsICd1cmwoKSwgYXV0bycpO1xyXG4gICAgdmFyIGhlYWRlciA9IHJvb3QuYXBwZW5kKCdkaXYnLCAnaGVhZGVyJylcclxuICAgICAgICAuYXR0cignb25zZWxlY3RzdGFydCcsICdyZXR1cm4gZmFsc2U7JylcclxuICAgICAgICAuc3R5bGUoJ2Rpc3BsYXknLCAnZmxleCcpXHJcbiAgICAgICAgLnN0eWxlKCdwb3NpdGlvbicsICdhYnNvbHV0ZScpXHJcbiAgICAgICAgLy8uc3R5bGUoJ2JhY2tncm91bmQnLCdyZ2JhKDExMiwgMTYxLCAyNTUsMS4wKScpXHJcbiAgICAgICAgLnN0eWxlKCdvcGFjaXR5JywgJzAuNScpXHJcbiAgICAgICAgLy8uc3R5bGUoJ2JveC1zaGFkb3cnLCAnMHB4IDBweCA1cHggcmdiYSgxMTIsIDE2MSwgMjU1LDApJylcclxuICAgICAgICAvLy5zdHlsZSgnYm9yZGVyJywnMXB4IHNvbGlkIHJnYmEoMTEyLCAxNjEsIDI1NSwgMCknKVxyXG4gICAgICAgIC8vLnN0eWxlKCdib3JkZXItcmFkaXVzJywnOHB4JylcclxuICAgICAgICAuc3R5bGUoJ3RvcCcsICcxZW0nKVxyXG4gICAgICAgIC5zdHlsZSgnaGVpZ2h0JywgJzNlbScpXHJcbiAgICAgICAgLnN0eWxlKCd6LWluZGV4JywgJzEwJylcclxuICAgICAgICAuc3R5bGUoJ3RyYW5zaXRpb24nLCAnMC4zcycpXHJcbiAgICAgICAgLm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3R5bGUoJ29wYWNpdHknLCAnMScpXHJcbiAgICAgICAgICAgIC8vLnN0eWxlKCdib3gtc2hhZG93JywgJzBweCAwcHggNXB4IHJnYmEoMTEyLCAxNjEsIDI1NSwxLjApJylcclxuICAgICAgICAgICAgLy8uc3R5bGUoJ2JvcmRlcicsJzFweCBzb2xpZCByZ2JhKDExMiwgMTYxLCAyNTUsIDAuNSknKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5zdHlsZSgnb3BhY2l0eScsICcwLjUnKVxyXG4gICAgICAgICAgICAvLy5zdHlsZSgnYm94LXNoYWRvdycsICcwcHggMHB4IDVweCByZ2JhKDExMiwgMTYxLCAyNTUsMCknKVxyXG4gICAgICAgICAgICAvLy5zdHlsZSgnYm9yZGVyJywnMXB4IHNvbGlkIHJnYmEoMTEyLCAxNjEsIDI1NSwgMCknKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB2YXIgaGVhZGVySXRlbXMgPSBbJ01lbnUnLCAnUGxheWdyb3VuZCcsICdBYm91dCBNZSddO1xyXG4gICAgdmFyIGluZGV4ID0gMDtcclxuICAgIGhlYWRlckl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICBoZWFkZXJJdGVtc1tpbmRleCsrXSA9IGhlYWRlci5hcHBlbmQoJ2RpdicsICdoZWFkZXJfJyArIGl0ZW0pXHJcbiAgICAgICAgICAgIC5jb250ZW50KGl0ZW0pXHJcbiAgICAgICAgICAgIC5hcHBlbmRDbGFzcygneHgnKVxyXG4gICAgICAgICAgICAuc3R5bGUoJ2NvbG9yJywgJ3doaXRlJylcclxuICAgICAgICAgICAgLnN0eWxlKCdwYWRkaW5nJywgJzFlbSAwLjVlbScpXHJcbiAgICAgICAgICAgIC5zdHlsZSgnY3Vyc29yJywgJ3BvaW50ZXInKVxyXG4gICAgICAgICAgICAuc3R5bGUoJ3RleHQtc2hhZG93JywgJzAgMCAxMHB4ICNlY2NjNjgnKVxyXG4gICAgICAgICAgICAuc3R5bGUoJ3RyYW5zaXRpb24nLCAnMC4zcycpXHJcbiAgICAgICAgICAgIC5vbignbW91c2VvdmVyJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdHlsZSgndGV4dC1zaGFkb3cnLCAnMCAwIDEwcHggI2VjY2M2OCcpXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0eWxlKCdjb2xvcicsICcjZWNjYzY4Jyk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3R5bGUoJ3RleHQtc2hhZG93JywgJzAgMCAyMHB4ICNlY2NjNjgnKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdHlsZSgnY29sb3InLCAnd2hpdGUnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIHZhciBoZWFkZXJNZW51QnV0dG9uID0gaGVhZGVySXRlbXNbMF07XHJcbiAgICBoZWFkZXJNZW51QnV0dG9uLnN0eWxlKCdwb3NpdGlvbicsICdyZWxhdGl2ZScpO1xyXG4gICAgdmFyIG1lbnVDb250YWluZXIgPSBoZWFkZXJNZW51QnV0dG9uLmFwcGVuZCgnZGl2JywgJ21lbnVDb250YWluZXInKVxyXG4gICAgICAgIC5zdHlsZSgncG9zaXRpb24nLCAnYWJzb2x1dGUnKVxyXG4gICAgICAgIC5zdHlsZSgnd2lkdGgnLCAnMjU2cHgnKVxyXG4gICAgICAgIC5zdHlsZSgnaGVpZ2h0JywgJzBweCcpXHJcbiAgICAgICAgLnN0eWxlKCdiYWNrZ3JvdW5kJywgJycpXHJcbiAgICAgICAgLnN0eWxlKCd0b3AnLCAnMTI1JScpXHJcbiAgICAgICAgLnN0eWxlKCdsZWZ0JywgJzAnKVxyXG4gICAgICAgIC5zdHlsZSgnb3ZlcmZsb3cnLCAnaGlkZGVuJylcclxuICAgICAgICAvLy5zdHlsZSgnYm94LXNoYWRvdycsICcwcHggMHB4IDVweCByZ2JhKDExMiwgMTYxLCAyNTUsMCknKVxyXG4gICAgICAgIC8vLnN0eWxlKCdib3JkZXInLCcxcHggc29saWQgcmdiYSgxMTIsIDE2MSwgMjU1LCAwKScpXHJcbiAgICAgICAgLnN0eWxlKCd0cmFuc2l0aW9uJywgJzAuM3MnKVxyXG4gICAgICAgIC5zZXRVcGRhdGVyKCd0b2dnbGVNZW51JywgZnVuY3Rpb24gKGQpIHtcclxuICAgICAgICAgICAgbGV0IGhhc09wZW4gPSB0aGlzLmhhc09wZW4gfHwgZmFsc2U7XHJcbiAgICAgICAgICAgIGlmIChoYXNPcGVuKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0eWxlKCdoZWlnaHQnLCAnMCcpXHJcbiAgICAgICAgICAgICAgICAvLy5zdHlsZSgnYm94LXNoYWRvdycsICcwcHggMHB4IDVweCByZ2JhKDExMiwgMTYxLCAyNTUsMCknKVxyXG4gICAgICAgICAgICAgICAgLy8uc3R5bGUoJ2JvcmRlcicsJzFweCBzb2xpZCByZ2JhKDExMiwgMTYxLCAyNTUsIDApJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0eWxlKCdoZWlnaHQnLCAnMzN2aCcpXHJcbiAgICAgICAgICAgICAgICAvLy5zdHlsZSgnYm94LXNoYWRvdycsICcwcHggMHB4IDVweCByZ2JhKDExMiwgMTYxLCAyNTUsMS4wKScpXHJcbiAgICAgICAgICAgICAgICAvLy5zdHlsZSgnYm9yZGVyJywnMXB4IHNvbGlkIHJnYmEoMTEyLCAxNjEsIDI1NSwgMC41KScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuaGFzT3BlbiA9ICFoYXNPcGVuO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnNldFVwZGF0ZXIoJ2Nsb3NlTWVudScsIGZ1bmN0aW9uIChkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3R5bGUoJ2hlaWdodCcsICcwJylcclxuICAgICAgICAgICAgICAgIC5zdHlsZSgnYm94LXNoYWRvdycsICcwcHggMHB4IDVweCByZ2JhKDExMiwgMTYxLCAyNTUsMCknKVxyXG4gICAgICAgICAgICAgICAgLnN0eWxlKCdib3JkZXInLCAnMXB4IHNvbGlkIHJnYmEoMTEyLCAxNjEsIDI1NSwgMCknKTtcclxuICAgICAgICAgICAgdGhpcy5oYXNPcGVuID0gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgaGVhZGVyTWVudUJ1dHRvbi5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgbWVudUNvbnRhaW5lci51cGRhdGVyKCd0b2dnbGVNZW51JykoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHZhciBtYWluQ29udGFpbmVyID0gcm9vdC5hcHBlbmQoJ2RpdicsICdtYWluQ29udGFpbmVyJyk7XHJcbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZEVsZW1lbnQoaG9tZUNvbnRlbnQpO1xyXG4gICAgY2Muc3RvcmVWYWx1ZSgnY3VycmVudFZpZXcnLCdIb21lJyk7XHJcbiAgICBjYy5jb25uZWN0KCdjdXJyZW50VmlldycsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCBjdXJyZW50VmlldyA9IGNjLmdldFZhbHVlKCdjdXJyZW50VmlldycpO1xyXG4gICAgICAgIG1haW5Db250YWluZXIucmVtb3ZlKCcubWFpbkNvbnRlbnQnKTtcclxuICAgICAgICBzd2l0Y2ggKGN1cnJlbnRWaWV3KXtcclxuICAgICAgICAgICAgY2FzZSAnSG9tZSc6XHJcbiAgICAgICAgICAgICAgICBtYWluQ29udGFpbmVyLmFwcGVuZEVsZW1lbnQoaG9tZUNvbnRlbnQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdmFyIHZlcnNpb24gPSByb290LmFwcGVuZCgncCcsICd2ZXJzaW9uJylcclxuICAgICAgICAuc3R5bGUoJ3Bvc2l0aW9uJywgJ2ZpeGVkJylcclxuICAgICAgICAuc3R5bGUoJ2JvdHRvbScsICcwcHgnKVxyXG4gICAgICAgIC5zdHlsZSgncmlnaHQnLCAnMCcpXHJcbiAgICAgICAgLnN0eWxlKCdwYWRkaW5nLXJpZ2h0JywgJzFlbScpXHJcbiAgICAgICAgLnN0eWxlKCdjb2xvcicsICdsaWdodGdyYXknKVxyXG4gICAgICAgIC5jb250ZW50KG5ldyBEYXRlKCkpXHJcbiAgICAgICAgLnNldFVwZGF0ZXIoJ3RpbWVyJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRlbnQoJ0N1YllfUm91dGluZTogTGFzckN5Y2xlVGltZTogJyArIGNyLmxhc3RDeWNsZVRpbWUgKyAnbXMgfCBDUFM6JyArIGNyLmN5Y2xlUGVyU2VjICsgJyB8TG9uZ2VzdDogJyArIGNyLmxvbmdlc3RSb3V0aW5lVGltZSArICdtcyB8IExhc3Q6JyArIGNyLmxhc3RSb3V0aW5lVGltZSArICdtcycpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgdmFyIHRpbWVyID0gY3IuYXBwZW5kKCd0aW1lcicpXHJcbiAgICAgICAgLmF0dHIoJ2ZyZXEnLCAxKVxyXG4gICAgICAgIC5hdHRyKCdhY3Rpb24nLCB2ZXJzaW9uLnVwZGF0ZXIoJ3RpbWVyJykpXHJcbiAgICAgICAgLmluc2VydCgpO1xyXG4gICAgdmFyIG1lbnVDb250ZW50cyA9IG1lbnVDb250YWluZXIuYXBwZW5kKCd1bCcpXHJcbiAgICAgICAgLnN0eWxlKCdwYWRkaW5nLWxlZnQnLCAnMmVtJylcclxuICAgICAgICAuc3R5bGUoJ21hcmdpbicsICcwJyk7XHJcbiAgICB2YXIgbWVudUl0ZW1zID0gWydIb21lJywgJ01heSBDb21pbmcgc29vbicsICdQcm9iYWJseSBDb21pbmcgc29vbiddO1xyXG4gICAgaW5kZXggPSAwO1xyXG4gICAgbWVudUl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICBtZW51SXRlbXNbaW5kZXgrK10gPSBtZW51Q29udGVudHMuYXBwZW5kKCdsaScsICdtZW51XycgKyBpdGVtKVxyXG4gICAgICAgICAgICAuY29udGVudChpdGVtKVxyXG4gICAgICAgICAgICAuc3R5bGUoJ2NvbG9yJywgJ3doaXRlJylcclxuICAgICAgICAgICAgLnN0eWxlKCdwYWRkaW5nJywgJzFlbSAwLjVlbScpXHJcbiAgICAgICAgICAgIC5zdHlsZSgnY3Vyc29yJywgJ3BvaW50ZXInKVxyXG4gICAgICAgICAgICAuc3R5bGUoJ3RleHQtc2hhZG93JywgJzAgMCAxMHB4ICNlY2NjNjgnKVxyXG4gICAgICAgICAgICAuc3R5bGUoJ3RyYW5zaXRpb24nLCAnMC4zcycpXHJcbiAgICAgICAgICAgIC5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5zdG9yZVZhbHVlKCdjdXJyZW50VmlldycsIGl0ZW0pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAub24oJ21vdXNlb3ZlcicsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3R5bGUoJ3RleHQtc2hhZG93JywgJzAgMCAxMHB4ICNlY2NjNjgnKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdHlsZSgnY29sb3InLCAnI2VjY2M2OCcpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0eWxlKCd0ZXh0LXNoYWRvdycsICcwIDAgMjBweCAjZWNjYzY4JylcclxuICAgICAgICAgICAgICAgICAgICAuc3R5bGUoJ2NvbG9yJywgJ3doaXRlJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1jYXRjaCAoZSl7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykuaW5uZXJIVE1MPSBlO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=