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
            element.activate();
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

        this.tickSpeed = _tickSpeed || 1;
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
    var circle = new _CubY_DOM2.default('div', 'backgroundCircle_' + i).style('position', 'absolute').style('width', '20px').style('height', '20px').style('border-radius', '4px').style('background', '#eccc68').style('transition', '0.1s linear').style('box-shadow', '0 0 10px #eccc68').style('opacity', '0').style('transform', 'translate(' + x + 'px,' + y + 'px)').attr('activate', function () {
        var self = this;
        this.x = x;
        this.y = y;
        this.dx = Math.random() - 0.5;
        this.dy = Math.random() - 0.5;
        this.ds = 0.01;
        this.scale = Math.random();
        this.counter = 10;
        this.circleAn = cr.append('home_circle_animation_' + i).attr('freq', 5).attr('action', function () {
            var scale = self.scale;
            self.x += self.dx;
            self.y += self.dy;

            self.style('transform', 'translate(' + (self.x + (mainContent.dx || 0) * scale) + 'px,' + (self.y + (mainContent.dy || 0) * scale) + 'px) scale(' + scale + ')').style('opacity', scale).style('z-index', scale >= 0.8 ? 2 : 0).style('box-shadow', '0 0 ' + (Math.random() * 10 + 10) + 'px #eccc68');
            if (self.x > window.innerWidth) {
                self.dx = -(Math.random() * 0.5 + 0.1);
            } else if (self.x < 0) {
                self.dx = Math.random() * 0.5 + 0.1;
            }
            if (self.y > window.innerHeight) {
                self.dy = -(Math.random() * 0.5 + 0.1);
            } else if (self.y < 0) {
                self.dy = Math.random() * 0.5 + 0.1;
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
    }).attr('deactivate', function () {
        this.circleAn.remove();
    });
    mainContent.appendElement(circle);
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

var _header = __webpack_require__(/*! ./components/header */ "./src/components/header.js");

var _header2 = _interopRequireDefault(_header);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

try {
    window.root = new _CubY_DOM2.default('div', 'ax_root', document.getElementById('app'));
    root.style('font-size', '12px').style('cursor', 'url(), auto');
    root.appendElement(_header2.default);
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
} catch (e) {
    document.getElementById('app').innerHTML = e;
} /**
   * Created by Anxin Yang on 3/28/2018.
   */

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0ZyYW1ld29yay9DdWJZL0N1YllfQ29yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRnJhbWV3b3JrL0N1YlkvQ3ViWV9ET00uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0ZyYW1ld29yay9DdWJZL0N1YllfUm91dGluZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25FQSxJQUFNLGlCQUFpQiwwQkFBTSxDQUE3Qjs7NEJBRUk7dUJBQVksUUFBTzs4QkFDZjs7WUFBSSxRQUFRLFNBQ1o7WUFBSSxPQUNKO2FBQUssS0FDUjs7Ozs7cUNBRUc7Z0JBQUksUUFBUSxVQUNaO2lCQUFLLFlBQVksTUFBTSxTQUN2QjtpQkFBSyxVQUNMO2lCQUFLLFlBQ0w7aUJBQUssVUFBVSxLQUNmO21CQUFPLEtBQ1Y7Ozs7cUNBR0c7Z0JBQUksT0FDSjtnQkFBSSxXQUNKO2dCQUFJLFVBQ0o7Z0JBQUksQ0FBQyxDQUFDLE9BQU8sT0FBTyxDQUFDLENBQUMsSUFBSSxVQUFXLENBQUMsQ0FBQyxPQUFPLFNBQVMsVUFBVSxVQUFVLFFBQVEsWUFBWSxHQUMzRjswQkFDQTt1QkFDSDtBQUNEO2dCQUFHLE9BQU8sbUJBQW1CLGFBQ3pCO3VCQUNIO0FBQ0Q7Z0JBQUcsZUFBZSxLQUFLLE9BQU8sMEJBQTJCLEdBQ2pEO3VCQUFPLEVBQUUsZUFDWjtBQUZ5QyxhQUFDLENBRXhDLENBQUMsT0FBTyxhQUFhLE9BQU8sbUJBQy9CO3VCQUNIO0FBQ0Q7Z0JBQUcsU0FBUyxDQUFDLENBQUMsU0FBUyxjQUNuQjt1QkFBTyxTQUFTLFlBQ1o7d0JBQUksU0FBUyxVQUNiO3lCQUFLLElBQUksSUFBSSxHQUFHLElBQUksVUFBVSxRQUFRLEtBQ2xDOzZCQUFLLElBQUksT0FBTyxVQUFVLElBQ3RCO2dDQUFJLE1BQU0sVUFDVjtnQ0FBSSxJQUFJLGVBQWUsTUFDbkIsT0FBTyxPQUFPLElBQ3JCO0FBQ0o7QUFDRDsyQkFDSDtBQUNEO3VCQUNBO3VCQUNIO0FBQ0Q7Z0JBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLFlBQ2pCO3VCQUNIO0FBQ0Q7Z0JBQUcsQ0FBQyxDQUFDLE9BQU8sVUFBVSxDQUFDLENBQUMsT0FBTyxPQUFPLFVBQ2xDOzJCQUNBO3VCQUNIO0FBQ0Q7Z0JBQUcsQ0FBQyxZQUFZLFlBQVksQ0FBQyxDQUFDLE9BQU8sS0FDakM7dUJBQ0g7QUFDSjs7Ozs0RkFHRztnQkFBSSxVQUFVLFlBQ2Q7Z0JBQUksUUFBUSxVQUNaO2dCQUFJLFdBQVcsYUFDZjtnQkFBSSxRQUFRLFVBQ1o7Z0JBQUksV0FDSjtnQkFBSSxnQkFBZ0Isa0JBRXBCOztrQkFBTSxRQUFRLFVBQVUsT0FDcEI7b0JBQUksTUFBTSxNQUNWO29CQUFJLFFBQVEsV0FDUjtBQUNIO0FBRUQ7O29CQUFJLE9BQU8sS0FBSyxXQUFXLEtBQUssT0FFaEM7OzhCQUNBO3lCQUFTLEtBQ1o7QUFFRDs7cUJBQVMsUUFDVDttQkFDSDs7OztzRUFHRztnQkFBSSxVQUFVLFlBQ2Q7Z0JBQUksUUFBUSxLQUNaO2dCQUFJLE1BQ0o7Z0JBQUksV0FBVyxhQUNmO2dCQUFJLFdBQ0o7Z0JBQUksT0FBTyxNQUNYO2dCQUFHLFNBQU8sYUFBYSxTQUFTLE9BQU8sU0FBUyxRQUFRLGNBQVksTUFDaEU7dUJBQU8sT0FBTyxPQUFPLE1BQ3hCO0FBRkQsbUJBR0k7dUJBQ0g7QUFDRDtpQkFBSyxRQUFRLE9BRWI7O3FCQUNBO2lCQUFLLE1BQ0w7bUJBQ0g7Ozs7dUNBRUc7Z0JBQUksTUFBTSxRQUNWO21CQUFPLEtBQUssUUFDZjs7OzsrQ0FHRztnQkFBRyxTQUFPLGFBQWEsWUFBVSxXQUM3Qjt1QkFDSDtBQUVEOztnQkFBSSxZQUFZLEtBQ2hCO2dCQUFJLGFBQWEsVUFBVSxTQUMzQjt1QkFBVyxLQUNYO3NCQUFVLFFBQ2I7Ozs7b0NBRUc7Z0JBQUksT0FDSjtnQkFBRyxTQUFPLFdBQ047dUJBQ0g7QUFFRDs7Z0JBQUksWUFBWSxLQUNoQjtnQkFBSSxhQUFhLFVBQVUsU0FDM0I7dUJBQVcsUUFBUSxVQUFDLFFBQ2hCO29CQUNJO3dCQUFJLFFBQVEsS0FBSyxTQUNqQjsyQkFDSDtBQUhELGtCQUdDLE9BQU8sR0FDSjtBQUNBO0FBQ0g7QUFDSjtBQUNKOzs7O21DQUVHO2dCQUFHLEtBQUssV0FDSjt3QkFBUSxJQUFJLFlBQ2Y7QUFDSjs7Ozs7OztBQUVMLElBQU0sS0FBSyxJQUFJO0FBQ2YsT0FBTyxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0M3SVo7Ozs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7MkJBRUk7c0JBQVksTUFBSyxLQUFJLE9BQU87OEJBQ3hCOzthQUFLLEtBQUssS0FBSyxVQUFVLFFBQ3pCO2FBQUssTUFBTSxLQUFLLFVBQVUsU0FDMUI7YUFBSyxNQUFNLFNBQVMsY0FBYyxLQUNsQzthQUFLLElBQUksYUFBYSxNQUFLLEtBQzNCO2FBQUssZUFDTDthQUFLLFlBQ0w7YUFBSyxXQUNMO2FBQUssV0FDTDthQUFLLFNBRUw7O1lBQUcsT0FDQztrQkFBTSxZQUFZLEtBQ3JCO0FBQ0Q7WUFBSSxPQUNKO2FBQUssVUFBVSxVQUFVLE1BQ3JCO2dCQUFJLFVBQVMsS0FBSyxTQUNsQjttQkFBTyxZQUNIO29CQUFHLFNBQ0M7NEJBQVEsS0FBSyxNQUFNLEtBQUssTUFDM0I7QUFDSjtBQUNKO0FBQ0o7Ozs7O2tEQUVHO2lCQUFLLFNBQVMsUUFDZDttQkFDSDs7OzttQ0FFRztpQkFBSyxPQUNMO21CQUNIOzs7OzBDQUVHO2dCQUFJLE1BQU0sS0FBSyxVQUNmO2dCQUFJLEtBQUssS0FBSyxVQUNkO2dCQUFJLFVBQVUsSUFBSSxTQUFTLEtBQzNCO2lCQUFLLGNBQ0w7bUJBQ0g7Ozs7Z0RBRUc7Z0JBQUksVUFBVSxLQUFLLFVBQ25CO29CQUFRLFNBQ1I7b0JBQ0E7aUJBQUssYUFBYSxLQUNsQjtpQkFBSyxJQUFJLFlBQVksUUFDckI7bUJBQ0g7Ozs7MENBRUc7Z0JBQUksYUFDSjtnQkFBRyxRQUFPLGNBQWMsUUFBUSxjQUM1Qjt3QkFDSDtBQUZELG1CQUdJO3dCQUFRLEtBQUssVUFDaEI7QUFFRDs7aUJBQUssVUFBVSxPQUNmO2lCQUFLLElBQUksYUFBYSxLQUN0QjttQkFDSDs7Ozs4Q0FFRztnQkFBSSxRQUNKO2dCQUFJLE9BQ0o7aUJBQUssR0FBRyxhQUNSO2lCQUFLLElBQUksaUJBQWlCLFdBQVUsVUFBVSxHQUMxQztzQkFBTSxLQUFLLE1BQUssR0FBRSxLQUNyQjtBQUNEO21CQUNIOzs7OzRDQUVHO2dCQUFJLE1BQU0sS0FBSyxVQUNmO2dCQUFJLFFBQVEsS0FBSyxVQUNqQjtpQkFBSyxTQUFTLE9BQ2Q7aUJBQUssSUFBSSxNQUFNLE9BQ2Y7bUJBQ0g7Ozs7d0NBRUc7Z0JBQUksUUFBUSxLQUFLLFVBQ2pCO2lCQUFLLFlBQ0w7aUJBQUssSUFBSSxZQUNUO21CQUNIOzs7O2dEQUVHO2dCQUFJLFlBQVksS0FBSyxVQUNyQjtnQkFBSSxVQUFVLEtBQUssV0FDbkI7b0JBQVEsS0FDUjtpQkFBSyxJQUFJLFVBQVUsSUFDbkI7aUJBQUssVUFDTDttQkFDSDs7OzswQ0FFRztnQkFBSSxXQUFXLFVBQVUsT0FDekI7Z0JBQUksT0FBTyxVQUFVLFVBQ3JCO29CQUNJO3FCQUNJOzJCQUFPLEtBQUssV0FDaEI7cUJBQ0k7MkJBQU8sS0FBSyxrQkFDaEI7QUFDSTsyQkFBTyxLQUFLLFlBRXZCOzs7Ozt1Q0FFRztnQkFBSSxlQUFlLEtBQ25CO2dCQUFJLGNBQ0o7aUJBQUksSUFBSSxJQUFJLEdBQUcsSUFBRSxhQUFhLFFBQU8sS0FDakM7b0JBQUksUUFBUSxhQUNaO29CQUFHLE1BQU0sT0FBTyxJQUNaOzZCQUNBO0FBQ0g7QUFDSjtBQUNEO21CQUNIOzs7O3FEQUVHO2dCQUFJLGVBQWUsS0FDbkI7Z0JBQUksYUFDSjtpQkFBSSxJQUFJLElBQUksR0FBRyxJQUFFLGFBQWEsUUFBTyxLQUNqQztvQkFBSSxRQUFRLGFBQ1o7b0JBQUcsTUFBTSxRQUFRLFFBQVEsYUFBVyxDQUFDLEdBQ2pDOytCQUFXLEtBQ2Q7QUFDSjtBQUNEO21CQUNIOzs7OzBDQUVHO2dCQUFJLGVBQWUsS0FDbkI7Z0JBQUksYUFDSjtpQkFBSSxJQUFJLElBQUksR0FBRyxJQUFFLGFBQWEsUUFBTyxLQUNqQztvQkFBSSxRQUFRLGFBQ1o7b0JBQUcsTUFBTSxRQUFRLE1BQ2I7K0JBQVcsS0FDZDtBQUNKO0FBQ0Q7bUJBQ0g7Ozs7MENBRUc7Z0JBQUcsYUFBVyxXQUNWO3FCQUNBO0FBQ0g7QUFDRDtnQkFBSSxXQUFXLFVBQVUsT0FDekI7Z0JBQUksT0FBTyxVQUFVLFVBQ3JCO2dCQUFJLGNBQ0o7b0JBQ0k7cUJBQ0k7eUJBQUssV0FDTDtBQUNKO3FCQUNJO3lCQUFLLGtCQUNMO0FBQ0o7QUFDSTt5QkFBSyxZQUVoQjs7Ozs7dUNBRUc7Z0JBQUksZUFBZSxLQUNuQjtpQkFBSSxJQUFJLElBQUksR0FBRyxJQUFFLGFBQWEsUUFBTyxLQUNqQztvQkFBSSxRQUFRLGFBQ1o7b0JBQUcsTUFBTSxPQUFPLElBQ1o7aUNBQWEsT0FBTyxHQUNwQjswQkFDQTtBQUNBO0FBQ0g7QUFDSjtBQUNKOzs7O3FEQUVHO2dCQUFJLGVBQWUsS0FDbkI7aUJBQUksSUFBSSxJQUFJLEdBQUcsSUFBRSxhQUFhLFFBQU8sS0FDakM7b0JBQUksUUFBUSxhQUNaO29CQUFHLE1BQU0sUUFBUSxRQUFRLGFBQVcsQ0FBQyxHQUNqQztpQ0FBYSxPQUFPLEdBQ3BCOzBCQUNBO0FBQ0g7QUFDSjtBQUNKOzs7OzBDQUVHO2dCQUFJLGVBQWUsS0FDbkI7aUJBQUksSUFBSSxJQUFJLEdBQUcsSUFBRSxhQUFhLFFBQU8sS0FDakM7b0JBQUksUUFBUSxhQUNaO29CQUFHLE1BQU0sUUFBUSxNQUNiO2lDQUFhLE9BQU8sR0FDcEI7MEJBQ0E7QUFDSDtBQUNKO0FBQ0o7Ozs7cUNBRUc7QUFHQTs7O2lCQUNBO2lCQUFLLElBQ0w7Z0JBQUcsS0FBSyxRQUNKO29CQUFJLGVBQWUsS0FBSyxPQUN4QjtxQkFBSSxJQUFJLElBQUksR0FBRyxJQUFFLGFBQWEsUUFBTyxLQUNqQzt3QkFBSSxRQUFRLGFBQ1o7d0JBQUcsVUFBVSxNQUNUO3FDQUFhLE9BQU8sR0FDdkI7QUFDSjtBQUNKO0FBQ0Q7QUFHSDs7Ozs7O21DQUVHO2lCQUFLLFdBRUw7O2dCQUFHLEtBQUssVUFBVSxVQUNkO3FCQUFLLFVBQVUsU0FBUyxLQUMzQjtBQUVEOztpQkFBSyxhQUFhLFFBQVEsVUFBVSxPQUNoQztzQkFDSDtBQUNKOzs7O3FDQUVHO2lCQUFLLFdBRUw7O2dCQUFHLEtBQUssVUFBVSxZQUNkO3FCQUFLLFVBQVUsV0FBVyxLQUM3QjtBQUVEOztpQkFBSyxhQUFhLFFBQVEsVUFBVSxPQUNoQztzQkFDSDtBQUNKOzs7OzBDQUVHO2dCQUFJLFFBQ0o7Z0JBQUcsT0FBTyxVQUFVLFlBQ2hCO3VCQUFPLE1BQU0sS0FBSyxNQUFLLEtBQzFCO0FBRkQsbUJBR0k7dUJBQ0g7QUFDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqUEwsSUFBTSxZQUFZOzsrQkFFZDswQkFBWSxZQUFXLFVBQVM7OEJBQzVCOzthQUFLLFlBQVksY0FDakI7WUFBSSxVQUFVLFlBQ2Q7YUFBSyxLQUNMO2FBQUssWUFDUjs7Ozs7c0NBRUc7bUJBQU8sS0FDUDtpQkFBSyxRQUNMO2lCQUFLLGNBQ0w7aUJBQUsscUJBQ0w7dUJBQVcsS0FBSyxNQUFNLEtBQ3pCOzs7O2dDQUVHO2dCQUFJLE9BQ0o7aUJBQUssaUJBQWlCLEtBQ3RCO3VCQUFXLEtBQUssUUFBUSxLQUFLLE9BQU0sS0FDdEM7Ozs7NENBRUc7Z0JBQUksYUFBYSxJQUFJLFFBQVEsTUFDN0I7Z0JBQUksT0FDSjt1QkFBVyxTQUFRLFlBQ2Y7b0JBQUcsV0FBVyxTQUFPLEdBQ2pCOytCQUFXLFdBQVcsS0FBSyxZQUFZLFNBQzFDO0FBRUQ7O3FCQUFLLFlBQVksS0FDakI7dUJBQ0g7QUFDRDt1QkFBVyxTQUFRLFlBQ2Y7b0JBQUksUUFBUyxLQUFLLFlBQVksUUFDOUI7cUJBQUssWUFBWSxPQUFPLE9BQzNCO0FBQ0Q7bUJBQ0g7Ozs7MENBRUc7bUJBQU8sS0FDVjs7OztrQ0FFRztnQkFBSSxjQUFjLEtBQ2xCO2dCQUFJLE9BQU87O3lDQUVQO29CQUFJLFVBQVUsWUFDZDtvQkFBSSxZQUFZLEtBQ2hCO29CQUNJO3dCQUFHLFFBQVEsZ0JBQ1A7bUNBQVcsWUFDUDtvQ0FDQTtpQ0FBSyxrQkFBa0IsS0FBSyxRQUM1QjtnQ0FBRyxLQUFLLHFCQUFtQixLQUFLLGlCQUM1QjtxQ0FBSyxxQkFBbUIsS0FDM0I7QUFDRDtnQ0FBRyxLQUFLLGtCQUFnQixLQUNwQjt3Q0FBUSxLQUFLLGFBQWEsUUFBUSxPQUFPLDZCQUEyQixLQUFLLGtCQUM1RTtBQUNEO29DQUFRLFlBQ1g7QUFWRCwyQkFXSDtBQUNKO0FBZEQsa0JBY0MsT0FBTyxHQUNKO0FBQ0g7QUF0QkE7QUFHTDs7aUJBQUksSUFBSSxJQUFFLEdBQUUsSUFBRSxZQUFZLFFBQU8sS0FBSTtBQW9CcEM7QUFDRDtpQkFDQTtnQkFBRyxLQUFLLFVBQVUsV0FDZDtxQkFBSyxRQUNMO3FCQUFLLGdCQUFnQixLQUFLLFFBQVEsS0FDbEM7cUJBQUssY0FBYyxLQUFLLE1BQU0sT0FBTyxLQUN4QztBQUNEO2lCQUNIOzs7Ozs7OzBCQUdEO3FCQUFZLE1BQUssT0FBTTs4QkFDbkI7O2FBQUssT0FDTDthQUFLLFFBQVEsU0FDYjthQUFLLE9BQ0w7YUFBSyxTQUFTLFlBQWMsQ0FDNUI7YUFBSyxTQUNSOzs7Ozt5Q0FFRztpQkFBSyxPQUNMO2dCQUFHLFFBQU0sUUFDTDtxQkFBSyxhQUNSO0FBQ0Q7bUJBQ0g7Ozs7dUNBRUc7aUJBQUssVUFBVSxLQUNsQjs7Ozt1Q0FFRztnQkFBRyxLQUFLLGNBQVksTUFDaEI7dUJBQ0g7QUFFRDs7Z0JBQUksWUFBWSxFQUFFLEtBQUssWUFDdkI7Z0JBQUcsS0FBSyxZQUFVLEdBQ2Q7b0JBQUcsS0FBSyxtQkFBaUIsV0FDckI7eUJBQ0E7d0JBQUcsS0FBSyxtQkFBaUIsR0FDckI7NkJBQ0g7QUFDSjtBQUNEO3FCQUFLLFlBQ0w7cUJBQ0g7QUFDRjttQkFDRjs7Ozs7OztBQUdMLElBQU0sS0FBSyxJQUFJO0FBQ2YsT0FBTyxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEhaOzs7Ozs7OztBQUVBLElBQUksZ0NBQXNCLE9BQU8sVUFDNUIsS0FBSyxpQkFBaUIsaUJBQ3RCLE1BQU0sV0FBVyxRQUNqQixNQUFNLFlBQVksWUFDbEIsTUFBTSxXQUFXLE9BQ2pCLE1BQU0sT0FBTyxPQUNiLE1BQU0sVUFBVSxPQUNoQixNQUFNLFdBQVcsTUFDakIsTUFBTSxjQUFjLFFBQ3BCLEdBQUcsYUFBYSxZQUNiO1NBQUssTUFBTSxXQUNkO0FBWFEsR0FZUixHQUFHLGNBQWMsWUFDZDtTQUFLLE1BQU0sV0FDZDtBQWRROztBQWdCYixJQUFJLGNBQWMsQ0FBQyxRQUFRLGNBQWM7QUFDekMsSUFBSSxRQUFRO0FBQ1osWUFBWSxRQUFRLFVBQVUsTUFDMUI7Z0JBQVksa0JBQWtCLE9BQU8sT0FBTyxZQUFZLE1BQ25ELFFBQVEsTUFDUixZQUFZLE1BQ1osTUFBTSxTQUFTLFNBQ2YsTUFBTSxXQUFXLGFBQ2pCLE1BQU0sVUFBVSxXQUNoQixNQUFNLGVBQWUsb0JBQ3JCLE1BQU0sY0FBYyxRQUNwQixHQUFHLGFBQWEsWUFDYjthQUFLLE1BQU0sZUFBZSxvQkFDckIsTUFBTSxTQUNkO0FBWGtCLE9BWWxCLEdBQUcsY0FBYyxZQUNkO2FBQUssTUFBTSxlQUFlLG9CQUNyQixNQUFNLFNBQ2Q7QUFDUjtBQWpCRDtBQWtCQSxJQUFJLG1CQUFtQixZQUFZO0FBQ25DLGlCQUFpQixNQUFNLFlBQVk7QUFDbkMsSUFBSSxpQ0FBaUMsT0FBTyxPQUFPLGlCQUM5QyxNQUFNLFlBQVksWUFDbEIsTUFBTSxTQUFTLFNBQ2YsTUFBTSxVQUFVLE9BQ2hCLE1BQU0sY0FBYyxJQUNwQixNQUFNLE9BQU8sUUFDYixNQUFNLFFBQVEsS0FDZCxNQUFNLFlBQVksVUFDbEIsTUFBTSxjQUFjLFFBQ3BCLFdBQVcsY0FBYyxVQUFVLEdBQ2hDO1FBQUksVUFBVSxLQUFLLFdBQ25CO1FBQUksU0FDQTthQUFLLE1BQU0sVUFDZDtBQUZELFdBR0k7YUFBSyxNQUFNLFVBQ2Q7QUFDRDtTQUFLLFVBQVUsQ0FDbEI7QUFqQmUsR0FrQmYsV0FBVyxhQUFhLFVBQVUsR0FDL0I7U0FBSyxNQUFNLFVBQVUsS0FDaEIsTUFBTSxjQUFjLHFDQUNwQixNQUFNLFVBQ1g7U0FBSyxVQUNSO0FBdkJlOztBQXlCcEIsT0FBTyxpQkFBaUIsU0FBUyxVQUFVLEdBQ3ZDO2tCQUFjLFFBQ2pCO0FBRkQ7O0FBSUEsaUJBQWlCLEdBQUcsU0FBUyxVQUFVLEdBQ25DO01BQ0E7a0JBQWMsUUFDakI7QUFIRDs7QUFLQSxJQUFJLGVBQWUsY0FBYyxPQUFPLE1BQ25DLE1BQU0sZ0JBQWdCLE9BQ3RCLE1BQU0sVUFBVTs7QUFFckIsSUFBSSxZQUFZLENBQUMsUUFBUSxtQkFBbUI7QUFDNUMsUUFBUTs7QUFFUixVQUFVLFFBQVEsVUFBVSxNQUN4QjtjQUFVLHdCQUF3QixPQUFPLE1BQU0sVUFBVSxNQUNwRCxRQUFRLE1BQ1IsTUFBTSxTQUFTLFNBQ2YsTUFBTSxXQUFXLGFBQ2pCLE1BQU0sVUFBVSxXQUNoQixNQUFNLGVBQWUsb0JBQ3JCLE1BQU0sY0FBYyxRQUNwQixHQUFHLFNBQVMsWUFDVDtXQUFHLFdBQVcsZUFDakI7QUFUZ0IsT0FVaEIsR0FBRyxhQUFhLFlBQ2I7YUFBSyxNQUFNLGVBQWUsb0JBQ3JCLE1BQU0sU0FDZDtBQWJnQixPQWNoQixHQUFHLGNBQWMsWUFDZDthQUFLLE1BQU0sZUFBZSxvQkFDckIsTUFBTSxTQUNkO0FBQ1I7QUFuQkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakZBOzs7Ozs7OztBQUdBLElBQUksY0FBYyx1QkFBYSxPQUFNO0FBQ3JDLFlBQVksTUFBTSxTQUFRLFNBQ3JCLE1BQU0sVUFBUyxTQUNmLE1BQU0sY0FBYSxXQUNuQixNQUFNLFlBQVcsWUFDakIsTUFBTSxjQUFjLE1BQ3BCLE1BQU0sWUFBVyxVQUNqQixZQUFZLGVBQ1osR0FBRyxhQUFZLFVBQVUsR0FBRSxHQUN4QjtRQUFJLElBQUksRUFDUjtRQUFJLElBQUksRUFDUjtRQUFJO1dBQ0csT0FBTyxhQUNWO1dBQUcsT0FBTyxjQUVkO0FBSEk7Z0JBR1EsS0FBSyxFQUFFLElBQUksT0FBTyxLQUM5QjtnQkFBWSxLQUFLLEVBQUUsSUFBSSxPQUFPLEtBRWpDO0FBakJMO0FBa0JBLElBQUksa0JBQWtCLE9BQU8sZ0JBQ3hCLEtBQUssUUFBTyxLQUNaLEtBQUssa0JBQWlCLEdBQ3RCLEtBQUssVUFBUyxZQUNYO2dCQUFZLE1BQU0sY0FDckI7QUFMYyxHQUtaOztBQUVQLElBQUksdUJBQXVCLE9BQU8sTUFBSyxZQUNsQyxRQUFRLHNCQUNSLE1BQU0sWUFBVyxTQUNqQixNQUFNLFNBQVEsU0FDZCxNQUFNLFNBQVEsUUFDZCxNQUFNLFVBQVUsUUFDaEIsTUFBTSxjQUFhLFVBQ25CLE1BQU0sUUFBTyxLQUNiLE1BQU0sU0FBUSxLQUNkLE1BQU0sVUFBUyxPQUNmLE1BQU0sVUFBUyxRQUNmLE1BQU0sYUFBWSxRQUNsQixNQUFNLGNBQWMsTUFDcEIsTUFBTSxlQUFjLG9CQUNwQixNQUFNLFdBQVUsR0FDaEIsR0FBRyxhQUFZLFlBQ1o7U0FBSyxNQUFNLGVBQ2Q7QUFqQlUsR0FrQlYsR0FBRyxjQUFhLFlBQ2I7U0FBSyxNQUFNLGVBQ2Q7QUFwQlU7QUFxQmYsSUFBSSwyQkFBMkIsT0FBTywyQkFDakMsS0FBSyxRQUFPLElBQ1osS0FBSyxVQUFTLFlBQ1g7UUFBSSxNQUFNLEtBQUssV0FDZjtRQUFHLE1BQUksSUFDSDtpQkFBUyxNQUFNLGVBQ2xCO0FBRkQsV0FHSTtpQkFBUyxNQUFNLGVBQ2xCO0FBQ0o7QUFUdUIsR0FVdkI7O0FBRUwsSUFBSSxjQUFjLFlBQVksT0FBTyxNQUFLLGVBQ3JDLFFBQVEsNEJBQ1IsTUFBTSxZQUFXLFNBQ2pCLE1BQU0sU0FBUSxXQUNkLE1BQU0sU0FBUSxRQUNkLE1BQU0sVUFBVSxRQUNoQixNQUFNLGNBQWEsVUFDbkIsTUFBTSxRQUFPLEtBQ2IsTUFBTSxTQUFRLEtBQ2QsTUFBTSxVQUFTLE9BQ2YsTUFBTSxVQUFTLFFBQ2YsTUFBTSxhQUFZLFFBQ2xCLE1BQU0sY0FBYyxNQUNwQixNQUFNLGVBQWMsb0JBQ3BCLE1BQU0sV0FBVTtBQUNyQixJQUFJLGlCQUFpQixZQUFZLE9BQU8sUUFBTyxrQkFDMUMsTUFBTSxZQUFXLFNBQ2pCLE1BQU0sU0FBUSxXQUNkLE1BQU0sU0FBUSxRQUNkLE1BQU0sVUFBVSxRQUNoQixNQUFNLFlBQVcsVUFDakIsTUFBTSxpQkFBZ0IsT0FDdEIsTUFBTSxjQUFhLFVBQ25CLE1BQU0sUUFBTyxLQUNiLE1BQU0sU0FBUSxLQUNkLE1BQU0sVUFBUyxPQUNmLE1BQU0sVUFBUyxRQUNmLE1BQU0sYUFBWSxRQUNsQixNQUFNLGNBQWMsUUFDcEIsTUFBTSxVQUFTLHFCQUNmLE1BQU0sY0FBYSxvQkFDbkIsTUFBTSxVQUFTLFdBQ2YsTUFBTSxXQUFVO0FBQ3JCLElBQUkseUJBQXlCLE9BQU8sUUFBTyxjQUN0QyxRQUFRLG9CQUNSLE1BQU0sWUFBVyxTQUNqQixNQUFNLFNBQVEsV0FDZCxNQUFNLFNBQVEsUUFDZCxNQUFNLFVBQVUsUUFDaEIsTUFBTSxZQUFXLFVBQ2pCLE1BQU0sVUFBUyx5QkFDZixNQUFNLGlCQUFnQixPQUN0QixNQUFNLGNBQWEsVUFDbkIsTUFBTSxRQUFPLEtBQ2IsTUFBTSxTQUFRLEtBQ2QsTUFBTSxVQUFTLE9BQ2YsTUFBTSxVQUFTLFFBQ2YsTUFBTSxhQUFZLFFBQ2xCLE1BQU0sY0FBYyxRQUNwQixNQUFNLGNBQWMsV0FDcEIsTUFBTSxlQUFjLG1CQUNwQixNQUFNLGNBQWEsbUJBQ25CLE1BQU0sVUFBUyxXQUNmLE1BQU0sV0FBVSxHQUNoQixHQUFHLFNBQVEsWUFDUjtPQUFHLFdBQVcsZUFDakI7QUF2QlksR0F3QlosR0FBRyxhQUFZLFlBQ1o7U0FBSyxNQUFNLGNBQWEsc0JBQ25CLE1BQU0sU0FBUSxRQUNkLE1BQU0sY0FDWDtlQUFXLFNBQ2Q7QUE3QlksR0E4QlosR0FBRyxjQUFhLFlBQ2I7U0FBSyxNQUFNLGNBQWMsV0FDcEIsTUFBTSxTQUFRLFFBQ2QsTUFBTSxjQUNYO2VBQVcsU0FDZDtBQW5DWTtBQW9DakIsSUFBSSxzQkFBc0IsT0FBTyxvQkFDNUIsS0FBSyxRQUFPLElBQ1osS0FBSyxVQUFTLFlBQ1g7UUFBRyxXQUFXLFdBQVcsTUFDckI7dUJBQWUsUUFDbEI7QUFDRDtZQUFPLGVBQ0g7YUFDQTthQUNJOzJCQUFlLFFBQ2Y7MkJBQWUsTUFBTSxTQUFTLFFBQ3pCLE1BQU0sVUFBUyxvQkFDZixNQUFNLFVBQVUsUUFDaEIsTUFBTSxXQUNYO0FBQ0o7YUFDSTsyQkFBZSxRQUNmOzJCQUFlLE1BQU0sU0FBUyxRQUN6QixNQUFNLFVBQVMsT0FDZixNQUFNLFVBQ1g7QUFDSjthQUNJOzJCQUFlLFFBQ2Y7MkJBQWUsTUFBTSxXQUNyQjtBQUVYOztBQTFCa0IsR0EwQmhCOztBQUVQLE9BQU8sY0FBYyxZQUNqQjtRQUFJLFFBQ0o7S0FBQyxVQUFTLEdBQUc7WUFBRywyVEFBMlQsS0FBSyxNQUFJLDBrREFBMGtELEtBQUssRUFBRSxPQUFPLEdBQUUsS0FBSyxRQUFjO0FBQWo4RCxPQUFtOEQsVUFBVSxhQUFXLFVBQVUsVUFBUSxPQUMxK0Q7V0FDSDtBQUpEO0FBS0EsSUFBSSxZQUFZLGdCQUFjLEtBQUc7QUFDakMsSUFBSSxhQUFhOzs2QkFHYjtRQUFJLElBQUksS0FBSyxXQUFTLE9BQU8sYUFDN0I7UUFBSSxJQUFJLEtBQUssV0FBUyxPQUFPLGNBQzdCO1FBQUksZ0NBQXNCLE9BQU0sc0JBQW9CLEdBQy9DLE1BQU0sWUFBVyxZQUNqQixNQUFNLFNBQVEsUUFDZCxNQUFNLFVBQVMsUUFDZixNQUFNLGlCQUFnQixPQUN0QixNQUFNLGNBQWEsV0FDbkIsTUFBTSxjQUFhLGVBQ25CLE1BQU0sY0FBYSxvQkFDbkIsTUFBTSxXQUFXLEtBQ2pCLE1BQU0sYUFBWSxlQUFhLElBQUUsUUFBTSxJQUFFLE9BQ3pDLEtBQUssWUFBVyxZQUNiO1lBQUksT0FDSjthQUFLLElBQ0w7YUFBSyxJQUNMO2FBQUssS0FBSyxLQUFLLFdBQ2Y7YUFBSyxLQUFLLEtBQUssV0FDZjthQUFLLEtBQ0w7YUFBSyxRQUFTLEtBQ2Q7YUFBSyxVQUNMO2FBQUssY0FBYyxPQUFPLDJCQUF5QixHQUM5QyxLQUFLLFFBQU8sR0FDWixLQUFLLFVBQVMsWUFDWDtnQkFBSSxRQUFRLEtBQ1o7aUJBQUssS0FBRyxLQUNSO2lCQUFLLEtBQUcsS0FFUjs7aUJBQUssTUFBTSxhQUFZLGdCQUFjLEtBQUssSUFBSSxDQUFDLFlBQVksTUFBSSxLQUFHLFNBQU8sU0FBTyxLQUFLLElBQUksQ0FBQyxZQUFZLE1BQUksS0FBRyxTQUFPLGVBQWEsUUFBTSxLQUNsSSxNQUFNLFdBQVcsT0FDakIsTUFBTSxXQUFXLFNBQU8sTUFBSSxJQUFFLEdBQzlCLE1BQU0sY0FBYSxVQUFRLEtBQUssV0FBUyxLQUFHLE1BQ2pEO2dCQUFHLEtBQUssSUFBRSxPQUFPLFlBQ2I7cUJBQUssS0FBSyxFQUFFLEtBQUssV0FBUyxNQUM3QjtBQUZELG1CQUVNLElBQUcsS0FBSyxJQUFFLEdBQ1o7cUJBQUssS0FBSyxLQUFLLFdBQVMsTUFDM0I7QUFDRDtnQkFBRyxLQUFLLElBQUUsT0FBTyxhQUNiO3FCQUFLLEtBQUssRUFBRSxLQUFLLFdBQVMsTUFDN0I7QUFGRCxtQkFFTSxJQUFHLEtBQUssSUFBRSxHQUNaO3FCQUFLLEtBQUssS0FBSyxXQUFTLE1BQzNCO0FBQ0Q7aUJBQ0E7Z0JBQUcsS0FBSyxXQUFTLEdBQ2I7cUJBQUssVUFDTDtxQkFBSyxTQUFPLE9BQ1o7b0JBQUcsS0FBSyxTQUFPLEdBQ1g7eUJBQUssS0FBRyxDQUNYO0FBQ0Q7b0JBQUcsS0FBSyxTQUFPLEdBQ1g7eUJBQUssS0FDUjtBQUNKO0FBQ0o7QUFoQ1csV0FpQ25CO0FBcERRLE9BcURSLEtBQUssY0FBYSxZQUNoQjthQUFLLFNBQ1A7QUFDTDtnQkFBWSxjQUFjOzs7QUEzRDlCLEtBQUksSUFBSSxJQUFFLEdBQUUsSUFBRSxXQUFVLEtBQUk7QUE2RDNCOzs7Ozs7Ozs7Ozs7Ozs7O0FDak9EOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBQ0EsSUFDSTtXQUFPLE9BQU8sdUJBQWEsT0FBTyxXQUFXLFNBQVMsZUFDdEQ7U0FBSyxNQUFNLGFBQWEsUUFDbkIsTUFBTSxVQUNYO1NBQUssdUJBQ0w7UUFBSSxnQkFBZ0IsS0FBSyxPQUFPLE9BQ2hDO2tCQUFjLHFCQUNkO09BQUcsV0FBVyxlQUNkO09BQUcsUUFBUSxlQUFjLFlBQ3JCO1lBQUksY0FBYyxHQUFHLFNBQ3JCO3NCQUFjLE9BQ2Q7Z0JBQ0k7aUJBQ0k7OEJBQWMscUJBQ2Q7QUFFWDs7QUFFRDs7UUFBSSxlQUFlLE9BQU8sS0FBSyxXQUMxQixNQUFNLFlBQVksU0FDbEIsTUFBTSxVQUFVLE9BQ2hCLE1BQU0sU0FBUyxLQUNmLE1BQU0saUJBQWlCLE9BQ3ZCLE1BQU0sU0FBUyxhQUNmLFFBQVEsSUFBSSxRQUNaLFdBQVcsU0FBUyxZQUNqQjthQUFLLFFBQVEsa0NBQWtDLEdBQUcsZ0JBQWdCLGNBQWMsR0FBRyxjQUFjLGdCQUFnQixHQUFHLHFCQUFxQixlQUFlLEdBQUcsa0JBQzlKO0FBQ0wsS0FWYztRQVVWLFFBQVEsR0FBRyxPQUFPLFNBQ2pCLEtBQUssUUFBUSxHQUNiLEtBQUssVUFBVSxRQUFRLFFBQVEsVUFFdkM7QUFoQ0QsRUFnQ0MsT0FBTyxHQUNKO2FBQVMsZUFBZSxPQUFPLFlBQ2xDO0VBMUNEIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiY29uc3QgRU1QVFlfRlVOQ1RJT04gPSAoKT0+e307XHJcbmNsYXNzIEN1YllfQ29yZXtcclxuICAgIGNvbnN0cnVjdG9yKF9wcm9wcyl7XHJcbiAgICAgICAgbGV0IHByb3BzID0gcHJvcHMgfHwge307XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuaW5pdChwcm9wcyk7XHJcbiAgICB9XHJcbiAgICBpbml0KF9wcm9wcyl7XHJcbiAgICAgICAgbGV0IHByb3BzID0gX3Byb3BzIHx8IHt9O1xyXG4gICAgICAgIHRoaXMuZGVidWdNb2RlID0gcHJvcHMuZGVidWcgfHwgZmFsc2U7XHJcbiAgICAgICAgdGhpcy5kYXRhTWFwID0ge307XHJcbiAgICAgICAgdGhpcy5hY3Rpb25NYXAgPSB7fTtcclxuICAgICAgICB0aGlzLmJyb3dzZXIgPSB0aGlzLmdldEJyb3dzZXIoKTtcclxuICAgICAgICB3aW5kb3cuY2MgPSB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEJyb3dzZXIoKXtcclxuICAgICAgICBsZXQgaXNJRSA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBpc0Nocm9tZSA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBpc09wZXJhID0gZmFsc2U7XHJcbiAgICAgICAgaWYoKCEhd2luZG93Lm9wciAmJiAhIW9wci5hZGRvbnMpIHx8ICEhd2luZG93Lm9wZXJhIHx8IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignIE9QUi8nKSA+PSAwKXtcclxuICAgICAgICAgICAgaXNPcGVyYSA9IHRydWU7XHJcbiAgICAgICAgICAgIHJldHVybiAnb3BlcmEnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0eXBlb2YgSW5zdGFsbFRyaWdnZXIgIT09ICd1bmRlZmluZWQnKXtcclxuICAgICAgICAgICAgcmV0dXJuICdmaXJlZm94JztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoL2NvbnN0cnVjdG9yL2kudGVzdCh3aW5kb3cuSFRNTEVsZW1lbnQpIHx8IChmdW5jdGlvbiAocCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHAudG9TdHJpbmcoKSA9PT0gXCJbb2JqZWN0IFNhZmFyaVJlbW90ZU5vdGlmaWNhdGlvbl1cIjtcclxuICAgICAgICAgICAgfSkoIXdpbmRvd1snc2FmYXJpJ10gfHwgc2FmYXJpLnB1c2hOb3RpZmljYXRpb24pKXtcclxuICAgICAgICAgICAgcmV0dXJuICdzYWZhcmknO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihmYWxzZSB8fCAhIWRvY3VtZW50LmRvY3VtZW50TW9kZSl7XHJcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgb3V0cHV0ID0gYXJndW1lbnRzWzBdO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gYXJndW1lbnRzW2ldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvYmogPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoa2V5KSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dFtrZXldID0gb2JqW2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgaXNJRSA9dHJ1ZTtcclxuICAgICAgICAgICAgcmV0dXJuICdpZSc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCFpc0lFICYmICEhd2luZG93LlN0eWxlTWVkaWEpe1xyXG4gICAgICAgICAgICByZXR1cm4gJ2VkZ2UnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZighIXdpbmRvdy5jaHJvbWUgJiYgISF3aW5kb3cuY2hyb21lLndlYnN0b3JlKXtcclxuICAgICAgICAgICAgaXNDaHJvbWUgPSB0cnVlXHJcbiAgICAgICAgICAgIHJldHVybiAnY2hyb21lJztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoKGlzQ2hyb21lIHx8IGlzT3BlcmEpICYmICEhd2luZG93LkNTUyl7XHJcbiAgICAgICAgICAgIHJldHVybiAnYmxpbmsnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdG9yZURhdGFBcnJheShfYXJyYXksIF9pZEtleSwgX2l0ZW1Qcm9jZXNzb3IsIF9vcHRpb25zLCBfY2FsbGJhY2spIHtcclxuICAgICAgICB2YXIgb3B0aW9ucyA9IF9vcHRpb25zIHx8IHt9O1xyXG4gICAgICAgIHZhciBpZEtleSA9IF9pZEtleSB8fCAnaWQnO1xyXG4gICAgICAgIHZhciBjYWxsYmFjayA9IF9jYWxsYmFjayB8fCBFTVBUWV9GVU5DVElPTjtcclxuICAgICAgICB2YXIgYXJyYXkgPSBfYXJyYXkgfHwgW107XHJcbiAgICAgICAgdmFyIGl0ZW1MaXN0ID0gW107XHJcbiAgICAgICAgdmFyIGl0ZW1Qcm9jZXNzb3IgPSBfaXRlbVByb2Nlc3NvciB8fCBFTVBUWV9GVU5DVElPTjtcclxuXHJcbiAgICAgICAgYXJyYXkuZm9yRWFjaChmdW5jdGlvbiAoX2l0ZW0pIHtcclxuICAgICAgICAgICAgdmFyIGtleSA9IF9pdGVtW2lkS2V5XTtcclxuICAgICAgICAgICAgaWYgKGtleSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBpdGVtID0gc2VsZi5zdG9yZVZhbHVlKGtleSwgX2l0ZW0sIF9vcHRpb25zKTtcclxuXHJcbiAgICAgICAgICAgIGl0ZW1Qcm9jZXNzb3IoaXRlbSk7XHJcbiAgICAgICAgICAgIGl0ZW1MaXN0LnB1c2goaXRlbSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNhbGxiYWNrKF9hcnJheSwgaXRlbUxpc3QpO1xyXG4gICAgICAgIHJldHVybiBpdGVtTGlzdDtcclxuICAgIH07XHJcblxyXG4gICAgc3RvcmVWYWx1ZShfa2V5LCBfdmFsdWUsIF9vcHRpb25zLCBfY2FsbGJhY2spIHtcclxuICAgICAgICB2YXIgb3B0aW9ucyA9IF9vcHRpb25zIHx8IHt9O1xyXG4gICAgICAgIHZhciBzdG9yZSA9IHRoaXMuZGF0YU1hcDtcclxuICAgICAgICB2YXIga2V5ID0gX2tleTtcclxuICAgICAgICB2YXIgY2FsbGJhY2sgPSBfY2FsbGJhY2sgfHwgRU1QVFlfRlVOQ1RJT047XHJcbiAgICAgICAgdmFyIG5ld1ZhbHVlID0gX3ZhbHVlO1xyXG4gICAgICAgIHZhciBpdGVtID0gc3RvcmVba2V5XTtcclxuICAgICAgICBpZihpdGVtIT09dW5kZWZpbmVkICYmIGl0ZW0gPT09IE9iamVjdChpdGVtKSAmJiBvcHRpb25zLm92ZXJ3cml0ZSE9PXRydWUpIHtcclxuICAgICAgICAgICAgaXRlbSA9IE9iamVjdC5hc3NpZ24oaXRlbSwgbmV3VmFsdWUpO1xyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgaXRlbSA9IG5ld1ZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRhdGFNYXBba2V5XSA9IGl0ZW07XHJcblxyXG4gICAgICAgIGNhbGxiYWNrKGl0ZW0pO1xyXG4gICAgICAgIHRoaXMucmVhY3Qoa2V5KTtcclxuICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgIH07XHJcbiAgICBnZXRWYWx1ZShfa2V5KSB7XHJcbiAgICAgICAgdmFyIGtleSA9IF9rZXkgfHwgJyc7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YU1hcFtrZXldO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25uZWN0KF9rZXksX2FjdGlvbikge1xyXG4gICAgICAgIGlmKF9rZXk9PT11bmRlZmluZWQgfHwgX2FjdGlvbj09PXVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBhY3Rpb25NYXAgPSB0aGlzLmFjdGlvbk1hcDtcclxuICAgICAgICB2YXIgYWN0aW9uTGlzdCA9IGFjdGlvbk1hcFtfa2V5XSB8fCBbXTtcclxuICAgICAgICBhY3Rpb25MaXN0LnB1c2goX2FjdGlvbik7XHJcbiAgICAgICAgYWN0aW9uTWFwW19rZXldID0gYWN0aW9uTGlzdDtcclxuICAgIH07XHJcbiAgICByZWFjdChfa2V5KSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGlmKF9rZXk9PT11bmRlZmluZWQpe1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgYWN0aW9uTWFwID0gdGhpcy5hY3Rpb25NYXA7XHJcbiAgICAgICAgdmFyIGFjdGlvbkxpc3QgPSBhY3Rpb25NYXBbX2tleV0gfHwgW107XHJcbiAgICAgICAgYWN0aW9uTGlzdC5mb3JFYWNoKChhY3Rpb24pPT4ge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gc2VsZi5nZXRWYWx1ZShfa2V5KTtcclxuICAgICAgICAgICAgICAgIGFjdGlvbih2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1jYXRjaCAoZSl7XHJcbiAgICAgICAgICAgICAgICAvL3ZhciBpbmRleCA9IGFjdGlvbkxpc3QuaW5kZXhPZihhY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgLy9hY3Rpb25MaXN0LnNwbGljZShpbmRleCwxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9O1xyXG4gICAgZGVidWcoc3RyKSB7XHJcbiAgICAgICAgaWYodGhpcy5kZWJ1Z01vZGUpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnREVCVUc6ICcgKyBzdHIpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuY29uc3QgY2MgPSBuZXcgQ3ViWV9Db3JlKCk7XHJcbndpbmRvdy5jYyA9IGNjO1xyXG5leHBvcnQgZGVmYXVsdCBjYztcclxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgQW54aW4gWWFuZyBvbiA1LzI2LzIwMTguXHJcbiAqL1xyXG5pbXBvcnQgQVhDb3JlIGZyb20gJy4vQ3ViWV9Db3JlJztcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3ViWV9ET00ge1xyXG4gICAgY29uc3RydWN0b3IoX3RhZyxfaWQsX3Jvb3QpIHtcclxuICAgICAgICB0aGlzLmlkID0gdGhpcy5yZWFkVmFsdWUoX2lkKXx8ICdzZWxmJztcclxuICAgICAgICB0aGlzLnRhZyA9IHRoaXMucmVhZFZhbHVlKF90YWcpIHx8ICdkaXYnO1xyXG4gICAgICAgIHRoaXMuZG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0aGlzLnRhZyk7XHJcbiAgICAgICAgdGhpcy5kb20uc2V0QXR0cmlidXRlKCdpZCcsdGhpcy5pZCk7XHJcbiAgICAgICAgdGhpcy5jaGlsZHJlbkxpc3QgPSBbXTtcclxuICAgICAgICB0aGlzLmF0dHJpYnV0ZSA9IHt9O1xyXG4gICAgICAgIHRoaXMuZG9tU3R5bGUgPSB7fTtcclxuICAgICAgICB0aGlzLnVwZGF0ZXJzID0ge307XHJcbiAgICAgICAgdGhpcy5wYXJlbnQgPSB7fTtcclxuXHJcbiAgICAgICAgaWYoX3Jvb3Qpe1xyXG4gICAgICAgICAgICBfcm9vdC5hcHBlbmRDaGlsZCh0aGlzLmRvbSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLnVwZGF0ZXIgPSBmdW5jdGlvbiAobmFtZSkge1xyXG4gICAgICAgICAgICBsZXQgdXBkYXRlciA9dGhpcy51cGRhdGVyc1tuYW1lXTtcclxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmKHVwZGF0ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVyLmNhbGwoc2VsZiwgc2VsZi5kYXRhLCBhcmd1bWVudHMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIHNldFVwZGF0ZXIobmFtZSx1cGRhdGVyKXtcclxuICAgICAgICB0aGlzLnVwZGF0ZXJzW25hbWVdID0gdXBkYXRlcjtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIGJpbmQoZGF0YSl7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIGFwcGVuZChfdGFnLF9pZCl7XHJcbiAgICAgICAgbGV0IHRhZyA9IHRoaXMucmVhZFZhbHVlKF90YWcpO1xyXG4gICAgICAgIGxldCBpZCA9IHRoaXMucmVhZFZhbHVlKF9pZCk7XHJcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBuZXcgQ3ViWV9ET00odGFnLGlkKTtcclxuICAgICAgICB0aGlzLmFwcGVuZEVsZW1lbnQoZWxlbWVudCk7XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgICBhcHBlbmRFbGVtZW50KEN1YllfRE9NKXtcclxuICAgICAgICBsZXQgZWxlbWVudCA9IHRoaXMucmVhZFZhbHVlKEN1YllfRE9NKTtcclxuICAgICAgICBlbGVtZW50LnBhcmVudCA9IHRoaXM7XHJcbiAgICAgICAgZWxlbWVudC5hY3RpdmF0ZSgpO1xyXG4gICAgICAgIHRoaXMuY2hpbGRyZW5MaXN0LnB1c2goZWxlbWVudCk7XHJcbiAgICAgICAgdGhpcy5kb20uYXBwZW5kQ2hpbGQoZWxlbWVudC5kb20pO1xyXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgfVxyXG4gICAgYXR0cihrZXksX3ZhbHVlKXtcclxuICAgICAgICBsZXQgdmFsdWU7XHJcbiAgICAgICAgaWYoa2V5ID09PSdhY3RpdmF0ZScgfHwga2V5ID09PSAnZGVhY3RpdmF0ZScpe1xyXG4gICAgICAgICAgICB2YWx1ZSA9IF92YWx1ZTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdmFsdWUgPSB0aGlzLnJlYWRWYWx1ZShfdmFsdWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuZG9tLnNldEF0dHJpYnV0ZShrZXksdmFsdWUpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgb24oZXZlbnROYW1lLF92YWx1ZSl7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gX3ZhbHVlO1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLm9uW2V2ZW50TmFtZV0gPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLmRvbS5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSxmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICB2YWx1ZS5jYWxsKHNlbGYsZSxzZWxmLmRhdGEsKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgc3R5bGUoX2tleSxfdmFsdWUpe1xyXG4gICAgICAgIGxldCBrZXkgPSB0aGlzLnJlYWRWYWx1ZShfa2V5KTtcclxuICAgICAgICBsZXQgdmFsdWUgPSB0aGlzLnJlYWRWYWx1ZShfdmFsdWUpO1xyXG4gICAgICAgIHRoaXMuZG9tU3R5bGVba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuZG9tLnN0eWxlW2tleV0gPSB2YWx1ZTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIGNvbnRlbnQoX3ZhbHVlKXtcclxuICAgICAgICBsZXQgdmFsdWUgPSB0aGlzLnJlYWRWYWx1ZShfdmFsdWUpO1xyXG4gICAgICAgIHRoaXMuaW5uZXJIVE1MID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5kb20uaW5uZXJIVE1MID0gdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBhcHBlbmRDbGFzcyhfY2xhc3NOYW1lKXtcclxuICAgICAgICBsZXQgY2xhc3NOYW1lID0gdGhpcy5yZWFkVmFsdWUoX2NsYXNzTmFtZSk7XHJcbiAgICAgICAgbGV0IGNsYXNzZXMgPSB0aGlzLmNsYXNzZXMgfHwgW107XHJcbiAgICAgICAgY2xhc3Nlcy5wdXNoKGNsYXNzTmFtZSk7XHJcbiAgICAgICAgdGhpcy5kb20uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gICAgICAgIHRoaXMuY2xhc3NlcyA9IGNsYXNzZXM7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBzZWxlY3QoX3NlbGVjdG9yKXtcclxuICAgICAgICBsZXQgc2VsZWN0b3IgPSBfc2VsZWN0b3IuY2hhckF0KDApO1xyXG4gICAgICAgIGxldCBuYW1lID0gX3NlbGVjdG9yLnN1YnN0cmluZygxKTtcclxuICAgICAgICBzd2l0Y2ggKHNlbGVjdG9yKXtcclxuICAgICAgICAgICAgY2FzZSAnIyc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RCeUlkKG5hbWUpO1xyXG4gICAgICAgICAgICBjYXNlICcuJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNlbGVjdEJ5Q2xhc3NOYW1lKG5hbWUpO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0QnlUYWcoX3NlbGVjdG9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzZWxlY3RCeUlkKGlkKXtcclxuICAgICAgICBsZXQgY2hpbGRyZW5MaXN0ID0gdGhpcy5jaGlsZHJlbkxpc3Q7XHJcbiAgICAgICAgbGV0IHRhcmdldDtcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpPGNoaWxkcmVuTGlzdC5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5MaXN0W2ldO1xyXG4gICAgICAgICAgICBpZihjaGlsZC5pZCA9PT0gaWQpe1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gY2hpbGQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xyXG4gICAgfVxyXG4gICAgc2VsZWN0QnlDbGFzc05hbWUoY2xhc3NOYW1lKXtcclxuICAgICAgICBsZXQgY2hpbGRyZW5MaXN0ID0gdGhpcy5jaGlsZHJlbkxpc3Q7XHJcbiAgICAgICAgbGV0IHRhcmdldExpc3QgPSBbXTtcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpPGNoaWxkcmVuTGlzdC5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5MaXN0W2ldO1xyXG4gICAgICAgICAgICBpZihjaGlsZC5jbGFzc2VzLmluZGV4T2YoY2xhc3NOYW1lKT4tMSl7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRMaXN0LnB1c2goY2hpbGQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0YXJnZXRMaXN0O1xyXG4gICAgfVxyXG4gICAgc2VsZWN0QnlUYWcoX3RhZyl7XHJcbiAgICAgICAgbGV0IGNoaWxkcmVuTGlzdCA9IHRoaXMuY2hpbGRyZW5MaXN0O1xyXG4gICAgICAgIGxldCB0YXJnZXRMaXN0ID0gW107XHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaTxjaGlsZHJlbkxpc3QubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuTGlzdFtpXTtcclxuICAgICAgICAgICAgaWYoY2hpbGQudGFnID09PSBfdGFnKXtcclxuICAgICAgICAgICAgICAgIHRhcmdldExpc3QucHVzaChjaGlsZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRhcmdldExpc3Q7XHJcbiAgICB9XHJcbiAgICByZW1vdmUoX3NlbGVjdG9yKXtcclxuICAgICAgICBpZihfc2VsZWN0b3I9PXVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlU2VsZigpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBzZWxlY3RvciA9IF9zZWxlY3Rvci5jaGFyQXQoMCk7XHJcbiAgICAgICAgbGV0IG5hbWUgPSBfc2VsZWN0b3Iuc3Vic3RyaW5nKDEpO1xyXG4gICAgICAgIGxldCB0YXJnZXQ7XHJcbiAgICAgICAgc3dpdGNoIChzZWxlY3Rvcil7XHJcbiAgICAgICAgICAgIGNhc2UgJyMnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVCeUlkKG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJy4nOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVCeUNsYXNzTmFtZShuYW1lKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVCeVRhZyhfc2VsZWN0b3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlbW92ZUJ5SWQoaWQpe1xyXG4gICAgICAgIGxldCBjaGlsZHJlbkxpc3QgPSB0aGlzLmNoaWxkcmVuTGlzdDtcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpPGNoaWxkcmVuTGlzdC5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5MaXN0W2ldO1xyXG4gICAgICAgICAgICBpZihjaGlsZC5pZCA9PT0gaWQpe1xyXG4gICAgICAgICAgICAgICAgY2hpbGRyZW5MaXN0LnNwbGljZShpLDEpO1xyXG4gICAgICAgICAgICAgICAgY2hpbGQucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICBpLS07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlbW92ZUJ5Q2xhc3NOYW1lKGNsYXNzTmFtZSl7XHJcbiAgICAgICAgbGV0IGNoaWxkcmVuTGlzdCA9IHRoaXMuY2hpbGRyZW5MaXN0O1xyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGk8Y2hpbGRyZW5MaXN0Lmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICBsZXQgY2hpbGQgPSBjaGlsZHJlbkxpc3RbaV07XHJcbiAgICAgICAgICAgIGlmKGNoaWxkLmNsYXNzZXMuaW5kZXhPZihjbGFzc05hbWUpPi0xKXtcclxuICAgICAgICAgICAgICAgIGNoaWxkcmVuTGlzdC5zcGxpY2UoaSwxKTtcclxuICAgICAgICAgICAgICAgIGNoaWxkLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgaS0tO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVtb3ZlQnlUYWcoX3RhZyl7XHJcbiAgICAgICAgbGV0IGNoaWxkcmVuTGlzdCA9IHRoaXMuY2hpbGRyZW5MaXN0O1xyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGk8Y2hpbGRyZW5MaXN0Lmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICBsZXQgY2hpbGQgPSBjaGlsZHJlbkxpc3RbaV07XHJcbiAgICAgICAgICAgIGlmKGNoaWxkLnRhZyA9PT0gX3RhZyl7XHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlbkxpc3Quc3BsaWNlKGksMSk7XHJcbiAgICAgICAgICAgICAgICBjaGlsZC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgIGktLTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlbW92ZVNlbGYoKXtcclxuICAgICAgICAvKnRoaXMuY2hpbGRyZW5MaXN0LmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgICAgICAgIGNoaWxkLnJlbW92ZSgpO1xyXG4gICAgICAgIH0pOyovXHJcbiAgICAgICAgdGhpcy5kZWFjdGl2YXRlKCk7XHJcbiAgICAgICAgdGhpcy5kb20ucmVtb3ZlKCk7XHJcbiAgICAgICAgaWYodGhpcy5wYXJlbnQpe1xyXG4gICAgICAgICAgICBsZXQgY2hpbGRyZW5MaXN0ID0gdGhpcy5wYXJlbnQuY2hpbGRyZW5MaXN0O1xyXG4gICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpPGNoaWxkcmVuTGlzdC5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuTGlzdFtpXTtcclxuICAgICAgICAgICAgICAgIGlmKGNoaWxkID09PSB0aGlzKXtcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbkxpc3Quc3BsaWNlKGksMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLypmb3IodmFyIGtleSBpbiB0aGlzKXtcclxuICAgICAgICAgICAgZGVsZXRlIHRoaXNba2V5XVxyXG4gICAgICAgIH0qL1xyXG4gICAgfVxyXG4gICAgYWN0aXZhdGUoKXtcclxuICAgICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYodGhpcy5hdHRyaWJ1dGUuYWN0aXZhdGUpe1xyXG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZS5hY3RpdmF0ZS5jYWxsKHRoaXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jaGlsZHJlbkxpc3QuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgICAgICAgICAgY2hpbGQuYWN0aXZhdGUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGRlYWN0aXZhdGUoKXtcclxuICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmKHRoaXMuYXR0cmlidXRlLmRlYWN0aXZhdGUpe1xyXG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZS5kZWFjdGl2YXRlLmNhbGwodGhpcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNoaWxkcmVuTGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICAgICAgICBjaGlsZC5kZWFjdGl2YXRlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZWFkVmFsdWUoX3ZhbHVlKXtcclxuICAgICAgICBsZXQgdmFsdWUgPSBfdmFsdWU7XHJcbiAgICAgICAgaWYodHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIpe1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWUuY2FsbCh0aGlzLHRoaXMuZGF0YSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJjb25zdCBNQVhfQ1lDTEUgPSAxMDA7XHJcbmNsYXNzIEN1YllfUm91dGluZXtcclxuICAgIGNvbnN0cnVjdG9yKF90aWNrU3BlZWQsX29wdGlvbnMpe1xyXG4gICAgICAgIHRoaXMudGlja1NwZWVkID0gX3RpY2tTcGVlZCB8fCAxO1xyXG4gICAgICAgIGxldCBvcHRpb25zID0gX29wdGlvbnMgfHwge307XHJcbiAgICAgICAgdGhpcy5pbml0KG9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMuTUFYX0NZQ0xFID0gTUFYX0NZQ0xFO1xyXG4gICAgfVxyXG4gICAgaW5pdChvcHRpb25zKXtcclxuICAgICAgICB3aW5kb3cuY3IgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuY3ljbGUgPSAwO1xyXG4gICAgICAgIHRoaXMucm91dGluZUxpc3QgPSBbXTtcclxuICAgICAgICB0aGlzLmxvbmdlc3RSb3V0aW5lVGltZSA9MDtcclxuICAgICAgICBzZXRUaW1lb3V0KHRoaXMuc3RhcnQuYmluZCh0aGlzKSk7XHJcbiAgICB9O1xyXG4gICAgc3RhcnQoKXtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5jeWNsZVN0YXJ0VGltZSA9IERhdGUubm93KCk7XHJcbiAgICAgICAgc2V0VGltZW91dChzZWxmLnJvdXRpbmUuYmluZCh0aGlzKSx0aGlzLnRpY2tTcGVlZCk7XHJcbiAgICB9XHJcbiAgICBhcHBlbmQobmFtZSxncm91cCkge1xyXG4gICAgICAgIGxldCBuZXdSb3V0aW5lID0gbmV3IFJvdXRpbmUobmFtZSwgZ3JvdXApO1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBuZXdSb3V0aW5lLmluc2VydD0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZihuZXdSb3V0aW5lLmZyZXEhPT0xKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdSb3V0aW5lLmNvdW50ZXIgKz0gc2VsZi5yb3V0aW5lTGlzdC5sZW5ndGggKyAxO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzZWxmLnJvdXRpbmVMaXN0LnB1c2gobmV3Um91dGluZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXdSb3V0aW5lO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgbmV3Um91dGluZS5yZW1vdmU9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgbGV0IGluZGV4ID0gIHNlbGYucm91dGluZUxpc3QuaW5kZXhPZihuZXdSb3V0aW5lKTtcclxuICAgICAgICAgICAgc2VsZi5yb3V0aW5lTGlzdC5zcGxpY2UoaW5kZXgsMSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gbmV3Um91dGluZTtcclxuICAgIH1cclxuICAgIGdldEN1cnJlbnRDeWNsZSgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmN5Y2xlO1xyXG4gICAgfVxyXG4gICAgcm91dGluZSgpe1xyXG4gICAgICAgIGxldCByb3V0aW5lTGlzdCA9IHRoaXMucm91dGluZUxpc3Q7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGZvcih2YXIgaT0wO2k8cm91dGluZUxpc3QubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgIGxldCByb3V0aW5lID0gcm91dGluZUxpc3RbaV07XHJcbiAgICAgICAgICAgIGxldCBzdGFydFRpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgaWYocm91dGluZS5jaGVja0NvdW50ZXIoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGluZS5hY3Rpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5sYXN0Um91dGluZVRpbWUgPSBEYXRlLm5vdygpIC0gc3RhcnRUaW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihzZWxmLmxvbmdlc3RSb3V0aW5lVGltZTxzZWxmLmxhc3RSb3V0aW5lVGltZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmxvbmdlc3RSb3V0aW5lVGltZT1zZWxmLmxhc3RSb3V0aW5lVGltZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihzZWxmLmxhc3RSb3V0aW5lVGltZT4yMDApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdSb3V0aW5lOicgKyByb3V0aW5lLm5hbWUgKyAnIHRvb2sgdG9vIGxvbmcgdG8gcnVuLiBbJytzZWxmLmxhc3RSb3V0aW5lVGltZSsnbXNdJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0aW5lLmlzUnVubmluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1jYXRjaCAoZSl7XHJcbiAgICAgICAgICAgICAgICAvL0RFQ0lERSBJRiBSRU1PVkUgUk9VVElORSBMQVRFUjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmN5Y2xlKys7XHJcbiAgICAgICAgaWYodGhpcy5jeWNsZSA9PT0gTUFYX0NZQ0xFKXtcclxuICAgICAgICAgICAgdGhpcy5jeWNsZSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdEN5Y2xlVGltZSA9IERhdGUubm93KCkgLSB0aGlzLmN5Y2xlU3RhcnRUaW1lO1xyXG4gICAgICAgICAgICB0aGlzLmN5Y2xlUGVyU2VjID0gTWF0aC5mbG9vcigxMDAwIC8gdGhpcy5sYXN0Q3ljbGVUaW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zdGFydCgpO1xyXG4gICAgfVxyXG59XHJcbmNsYXNzIFJvdXRpbmV7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lLGdyb3VwKXtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuZ3JvdXAgPSBncm91cCB8fCAnY29tbW9uJztcclxuICAgICAgICB0aGlzLmZyZXEgPSAxO1xyXG4gICAgICAgIHRoaXMuYWN0aW9uID0gZnVuY3Rpb24gKCkge307XHJcbiAgICAgICAgdGhpcy5yZXBlYXQgPSAwO1xyXG4gICAgfVxyXG4gICAgYXR0cihrZXksdmFsdWUpe1xyXG4gICAgICAgIHRoaXNba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgIGlmKGtleT09PSdmcmVxJyl7XHJcbiAgICAgICAgICAgIHRoaXNbJ2NvdW50ZXInXSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIHJlc2V0Q291bnRlcigpe1xyXG4gICAgICAgIHRoaXMuY291bnRlciA9IHRoaXMuZnJlcTtcclxuICAgIH1cclxuICAgIGNoZWNrQ291bnRlcigpe1xyXG4gICAgICAgIGlmKHRoaXMuaXNSdW5uaW5nPT09dHJ1ZSl7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBzaG91bGRSdW4gPSAtLXRoaXMuY291bnRlcj09PTA7XHJcbiAgICAgICAgaWYodGhpcy5jb3VudGVyPT09MCl7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuZXhlY3V0aW9uVGltZXMhPT11bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5leGVjdXRpb25UaW1lcy0tO1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5leGVjdXRpb25UaW1lcz09PTApe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5pc1J1bm5pbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnJlc2V0Q291bnRlcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgIHJldHVybiBzaG91bGRSdW47XHJcbiAgICB9XHJcblxyXG59XHJcbmNvbnN0IGNyID0gbmV3IEN1YllfUm91dGluZSgpO1xyXG53aW5kb3cuY3IgPSBjcjtcclxuZXhwb3J0IGRlZmF1bHQgY3I7IiwiaW1wb3J0IEN1YllfRE9NIGZyb20gJy4uL0ZyYW1ld29yay9DdWJZL0N1YllfRE9NJztcclxuXHJcbnZhciBoZWFkZXIgPSBuZXcgQ3ViWV9ET00oJ2RpdicsICdoZWFkZXInKVxyXG4gICAgLmF0dHIoJ29uc2VsZWN0c3RhcnQnLCAncmV0dXJuIGZhbHNlOycpXHJcbiAgICAuc3R5bGUoJ2Rpc3BsYXknLCAnZmxleCcpXHJcbiAgICAuc3R5bGUoJ3Bvc2l0aW9uJywgJ2Fic29sdXRlJylcclxuICAgIC5zdHlsZSgnb3BhY2l0eScsICcwLjUnKVxyXG4gICAgLnN0eWxlKCd0b3AnLCAnMWVtJylcclxuICAgIC5zdHlsZSgnaGVpZ2h0JywgJzNlbScpXHJcbiAgICAuc3R5bGUoJ3otaW5kZXgnLCAnMTAnKVxyXG4gICAgLnN0eWxlKCd0cmFuc2l0aW9uJywgJzAuM3MnKVxyXG4gICAgLm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5zdHlsZSgnb3BhY2l0eScsICcxJylcclxuICAgIH0pXHJcbiAgICAub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5zdHlsZSgnb3BhY2l0eScsICcwLjUnKVxyXG4gICAgfSk7XHJcblxyXG52YXIgaGVhZGVySXRlbXMgPSBbJ01lbnUnLCAnUGxheWdyb3VuZCcsICdBYm91dCBNZSddO1xyXG52YXIgaW5kZXggPSAwO1xyXG5oZWFkZXJJdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICBoZWFkZXJJdGVtc1tpbmRleCsrXSA9IGhlYWRlci5hcHBlbmQoJ2RpdicsICdoZWFkZXJfJyArIGl0ZW0pXHJcbiAgICAgICAgLmNvbnRlbnQoaXRlbSlcclxuICAgICAgICAuYXBwZW5kQ2xhc3MoJ3h4JylcclxuICAgICAgICAuc3R5bGUoJ2NvbG9yJywgJ3doaXRlJylcclxuICAgICAgICAuc3R5bGUoJ3BhZGRpbmcnLCAnMWVtIDAuNWVtJylcclxuICAgICAgICAuc3R5bGUoJ2N1cnNvcicsICdwb2ludGVyJylcclxuICAgICAgICAuc3R5bGUoJ3RleHQtc2hhZG93JywgJzAgMCAxMHB4ICNlY2NjNjgnKVxyXG4gICAgICAgIC5zdHlsZSgndHJhbnNpdGlvbicsICcwLjNzJylcclxuICAgICAgICAub24oJ21vdXNlb3ZlcicsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5zdHlsZSgndGV4dC1zaGFkb3cnLCAnMCAwIDEwcHggI2VjY2M2OCcpXHJcbiAgICAgICAgICAgICAgICAuc3R5bGUoJ2NvbG9yJywgJyNlY2NjNjgnKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5zdHlsZSgndGV4dC1zaGFkb3cnLCAnMCAwIDIwcHggI2VjY2M2OCcpXHJcbiAgICAgICAgICAgICAgICAuc3R5bGUoJ2NvbG9yJywgJ3doaXRlJyk7XHJcbiAgICAgICAgfSk7XHJcbn0pO1xyXG52YXIgaGVhZGVyTWVudUJ1dHRvbiA9IGhlYWRlckl0ZW1zWzBdO1xyXG5oZWFkZXJNZW51QnV0dG9uLnN0eWxlKCdwb3NpdGlvbicsICdyZWxhdGl2ZScpO1xyXG52YXIgbWVudUNvbnRhaW5lciA9IGhlYWRlck1lbnVCdXR0b24uYXBwZW5kKCdkaXYnLCAnbWVudUNvbnRhaW5lcicpXHJcbiAgICAuc3R5bGUoJ3Bvc2l0aW9uJywgJ2Fic29sdXRlJylcclxuICAgIC5zdHlsZSgnd2lkdGgnLCAnMjU2cHgnKVxyXG4gICAgLnN0eWxlKCdoZWlnaHQnLCAnMHB4JylcclxuICAgIC5zdHlsZSgnYmFja2dyb3VuZCcsICcnKVxyXG4gICAgLnN0eWxlKCd0b3AnLCAnMTI1JScpXHJcbiAgICAuc3R5bGUoJ2xlZnQnLCAnMCcpXHJcbiAgICAuc3R5bGUoJ292ZXJmbG93JywgJ2hpZGRlbicpXHJcbiAgICAuc3R5bGUoJ3RyYW5zaXRpb24nLCAnMC4zcycpXHJcbiAgICAuc2V0VXBkYXRlcigndG9nZ2xlTWVudScsIGZ1bmN0aW9uIChkKSB7XHJcbiAgICAgICAgbGV0IGhhc09wZW4gPSB0aGlzLmhhc09wZW4gfHwgZmFsc2U7XHJcbiAgICAgICAgaWYgKGhhc09wZW4pIHtcclxuICAgICAgICAgICAgdGhpcy5zdHlsZSgnaGVpZ2h0JywgJzAnKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3R5bGUoJ2hlaWdodCcsICczM3ZoJylcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5oYXNPcGVuID0gIWhhc09wZW47XHJcbiAgICB9KVxyXG4gICAgLnNldFVwZGF0ZXIoJ2Nsb3NlTWVudScsIGZ1bmN0aW9uIChkKSB7XHJcbiAgICAgICAgdGhpcy5zdHlsZSgnaGVpZ2h0JywgJzAnKVxyXG4gICAgICAgICAgICAuc3R5bGUoJ2JveC1zaGFkb3cnLCAnMHB4IDBweCA1cHggcmdiYSgxMTIsIDE2MSwgMjU1LDApJylcclxuICAgICAgICAgICAgLnN0eWxlKCdib3JkZXInLCAnMXB4IHNvbGlkIHJnYmEoMTEyLCAxNjEsIDI1NSwgMCknKTtcclxuICAgICAgICB0aGlzLmhhc09wZW4gPSBmYWxzZTtcclxuICAgIH0pO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIG1lbnVDb250YWluZXIudXBkYXRlcignY2xvc2VNZW51JykoKTtcclxufSk7XHJcblxyXG5oZWFkZXJNZW51QnV0dG9uLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgbWVudUNvbnRhaW5lci51cGRhdGVyKCd0b2dnbGVNZW51JykoKTtcclxufSk7XHJcblxyXG52YXIgbWVudUNvbnRlbnRzID0gbWVudUNvbnRhaW5lci5hcHBlbmQoJ3VsJylcclxuICAgIC5zdHlsZSgncGFkZGluZy1sZWZ0JywgJzJlbScpXHJcbiAgICAuc3R5bGUoJ21hcmdpbicsICcwJyk7XHJcblxyXG52YXIgbWVudUl0ZW1zID0gWydIb21lJywgJ01heSBDb21pbmcgc29vbicsICdQcm9iYWJseSBDb21pbmcgc29vbiddO1xyXG5pbmRleCA9IDA7XHJcblxyXG5tZW51SXRlbXMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgbWVudUl0ZW1zW2luZGV4KytdID0gbWVudUNvbnRlbnRzLmFwcGVuZCgnbGknLCAnbWVudV8nICsgaXRlbSlcclxuICAgICAgICAuY29udGVudChpdGVtKVxyXG4gICAgICAgIC5zdHlsZSgnY29sb3InLCAnd2hpdGUnKVxyXG4gICAgICAgIC5zdHlsZSgncGFkZGluZycsICcxZW0gMC41ZW0nKVxyXG4gICAgICAgIC5zdHlsZSgnY3Vyc29yJywgJ3BvaW50ZXInKVxyXG4gICAgICAgIC5zdHlsZSgndGV4dC1zaGFkb3cnLCAnMCAwIDEwcHggI2VjY2M2OCcpXHJcbiAgICAgICAgLnN0eWxlKCd0cmFuc2l0aW9uJywgJzAuM3MnKVxyXG4gICAgICAgIC5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGNjLnN0b3JlVmFsdWUoJ2N1cnJlbnRWaWV3JywgaXRlbSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAub24oJ21vdXNlb3ZlcicsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5zdHlsZSgndGV4dC1zaGFkb3cnLCAnMCAwIDEwcHggI2VjY2M2OCcpXHJcbiAgICAgICAgICAgICAgICAuc3R5bGUoJ2NvbG9yJywgJyNlY2NjNjgnKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5zdHlsZSgndGV4dC1zaGFkb3cnLCAnMCAwIDIwcHggI2VjY2M2OCcpXHJcbiAgICAgICAgICAgICAgICAuc3R5bGUoJ2NvbG9yJywgJ3doaXRlJyk7XHJcbiAgICAgICAgfSk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGVhZGVyOyIsImltcG9ydCBDdWJZX0RPTSBmcm9tICcuL0ZyYW1ld29yay9DdWJZL0N1YllfRE9NJztcclxuXHJcblxyXG52YXIgbWFpbkNvbnRlbnQgPSBuZXcgQ3ViWV9ET00oJ2RpdicsJ2hvbWVDb250ZW50Jyk7XHJcbm1haW5Db250ZW50LnN0eWxlKCd3aWR0aCcsJzEwMHZ3JylcclxuICAgIC5zdHlsZSgnaGVpZ2h0JywnMTAwdmgnKVxyXG4gICAgLnN0eWxlKCdiYWNrZ3JvdW5kJywnIzIyMmYzZScpXHJcbiAgICAuc3R5bGUoJ3Bvc2l0aW9uJywncmVsYXRpdmUnKVxyXG4gICAgLnN0eWxlKCd0cmFuc2l0aW9uJywgJzVzJylcclxuICAgIC5zdHlsZSgnb3ZlcmZsb3cnLCdoaWRkZW4nKVxyXG4gICAgLmFwcGVuZENsYXNzKCdtYWluQ29udGVudCcpXHJcbiAgICAub24oJ21vdXNlbW92ZScsZnVuY3Rpb24gKGUsZCkge1xyXG4gICAgICAgIGxldCB4ID0gZS5jbGllbnRYO1xyXG4gICAgICAgIGxldCB5ID0gZS5jbGllbnRZO1xyXG4gICAgICAgIGxldCBvcmlnaW4gPSB7XHJcbiAgICAgICAgICAgIHg6IHdpbmRvdy5pbm5lcldpZHRoLzIsXHJcbiAgICAgICAgICAgIHk6IHdpbmRvdy5pbm5lckhlaWdodC8yXHJcbiAgICAgICAgfTtcclxuICAgICAgICBtYWluQ29udGVudC5keCA9IC0oeCAtIG9yaWdpbi54KS8xMDtcclxuICAgICAgICBtYWluQ29udGVudC5keSA9IC0oeSAtIG9yaWdpbi55KS8xMDtcclxuXHJcbiAgICB9KTtcclxudmFyIGJhY2tncm91bmRBbiA9IGNyLmFwcGVuZCgnYmFja2dyb3VuZEFuJylcclxuICAgIC5hdHRyKCdmcmVxJywyMDApXHJcbiAgICAuYXR0cignZXhlY3V0aW9uVGltZXMnLDEpXHJcbiAgICAuYXR0cignYWN0aW9uJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbWFpbkNvbnRlbnQuc3R5bGUoJ2JhY2tncm91bmQnLCdibGFjaycpXHJcbiAgICB9KS5pbnNlcnQoKTtcclxuXHJcbnZhciBoZWFkTGluZSA9IG1haW5Db250ZW50LmFwcGVuZCgnaDEnLCdoZWFkTGluZScpXHJcbiAgICAuY29udGVudCgnRlJPTlQgRU5EIEVOR0lORUVSJylcclxuICAgIC5zdHlsZSgncG9zaXRpb24nLCdmaXhlZCcpXHJcbiAgICAuc3R5bGUoJ2NvbG9yJywnd2hpdGUnKVxyXG4gICAgLnN0eWxlKCd3aWR0aCcsJzEwMCUnKVxyXG4gICAgLnN0eWxlKCdoZWlnaHQnLCAnNjBweCcpXHJcbiAgICAuc3R5bGUoJ3RleHQtYWxpZ24nLCdjZW50ZXInKVxyXG4gICAgLnN0eWxlKCdsZWZ0JywnMCcpXHJcbiAgICAuc3R5bGUoJ3JpZ2h0JywnMCcpXHJcbiAgICAuc3R5bGUoJ2JvdHRvbScsJzMzJScpXHJcbiAgICAuc3R5bGUoJ21hcmdpbicsJ2F1dG8nKVxyXG4gICAgLnN0eWxlKCdmb250LXNpemUnLCc2NHB4JylcclxuICAgIC5zdHlsZSgndHJhbnNpdGlvbicsICcxcycpXHJcbiAgICAuc3R5bGUoJ3RleHQtc2hhZG93JywnMCAwIDEwcHggIzcwYTFmZicpXHJcbiAgICAuc3R5bGUoJ3otaW5kZXgnLDEpXHJcbiAgICAub24oJ21vdXNlb3ZlcicsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuc3R5bGUoJ3RleHQtc2hhZG93JywnMCAwIDMwcHggI2VjY2M2OCcpXHJcbiAgICB9KVxyXG4gICAgLm9uKCdtb3VzZWxlYXZlJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5zdHlsZSgndGV4dC1zaGFkb3cnLCcwIDAgMTBweCAjNzBhMWZmJylcclxuICAgIH0pO1xyXG52YXIgaG9tZUhlYWRMaW5lQW5pbWF0aW9uID0gY3IuYXBwZW5kKCdob21lX2hlYWRMaW5lX2FuaW1hdGlvbicpXHJcbiAgICAuYXR0cignZnJlcScsMjUpXHJcbiAgICAuYXR0cignYWN0aW9uJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0IG9kZCA9IE1hdGgucmFuZG9tKCkqMTAwO1xyXG4gICAgICAgIGlmKG9kZD41MCl7XHJcbiAgICAgICAgICAgIGhlYWRMaW5lLnN0eWxlKCd0ZXh0LXNoYWRvdycsJzAgMCAzMHB4ICNlY2NjNjgnKVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBoZWFkTGluZS5zdHlsZSgndGV4dC1zaGFkb3cnLCcwIDAgMTBweCAjNzBhMWZmJylcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgLmluc2VydCgpO1xyXG5cclxudmFyIHN1YkhlYWRMaW5lID0gbWFpbkNvbnRlbnQuYXBwZW5kKCdoMScsJ3N1YkhlYWRMaW5lJylcclxuICAgIC5jb250ZW50KCctIHdobyBtYWtlcyBkYXRhIGFsaXZlIC0nKVxyXG4gICAgLnN0eWxlKCdwb3NpdGlvbicsJ2ZpeGVkJylcclxuICAgIC5zdHlsZSgnY29sb3InLCcjZWNjYzY4JylcclxuICAgIC5zdHlsZSgnd2lkdGgnLCcxMDAlJylcclxuICAgIC5zdHlsZSgnaGVpZ2h0JywgJzMwcHgnKVxyXG4gICAgLnN0eWxlKCd0ZXh0LWFsaWduJywnY2VudGVyJylcclxuICAgIC5zdHlsZSgnbGVmdCcsJzAnKVxyXG4gICAgLnN0eWxlKCdyaWdodCcsJzAnKVxyXG4gICAgLnN0eWxlKCdib3R0b20nLCczMCUnKVxyXG4gICAgLnN0eWxlKCdtYXJnaW4nLCdhdXRvJylcclxuICAgIC5zdHlsZSgnZm9udC1zaXplJywnMzJweCcpXHJcbiAgICAuc3R5bGUoJ3RyYW5zaXRpb24nLCAnMXMnKVxyXG4gICAgLnN0eWxlKCd0ZXh0LXNoYWRvdycsJzAgMCAxMHB4ICNlY2NjNjgnKVxyXG4gICAgLnN0eWxlKCd6LWluZGV4JywxKTtcclxudmFyIGluZm9CdXR0b25IYWxvID0gbWFpbkNvbnRlbnQuYXBwZW5kKCdzcGFuJywnaW5mb0J1dHRvbkhhbG8nKVxyXG4gICAgLnN0eWxlKCdwb3NpdGlvbicsJ2ZpeGVkJylcclxuICAgIC5zdHlsZSgnY29sb3InLCcjZWNjYzY4JylcclxuICAgIC5zdHlsZSgnd2lkdGgnLCczMnB4JylcclxuICAgIC5zdHlsZSgnaGVpZ2h0JywgJzMycHgnKVxyXG4gICAgLnN0eWxlKCdvdmVyZmxvdycsJ2hpZGRlbicpXHJcbiAgICAuc3R5bGUoJ2JvcmRlci1yYWRpdXMnLCc0cHgnKVxyXG4gICAgLnN0eWxlKCd0ZXh0LWFsaWduJywnY2VudGVyJylcclxuICAgIC5zdHlsZSgnbGVmdCcsJzAnKVxyXG4gICAgLnN0eWxlKCdyaWdodCcsJzAnKVxyXG4gICAgLnN0eWxlKCdib3R0b20nLCcxOCUnKVxyXG4gICAgLnN0eWxlKCdtYXJnaW4nLCdhdXRvJylcclxuICAgIC5zdHlsZSgnZm9udC1zaXplJywnMjRweCcpXHJcbiAgICAuc3R5bGUoJ3RyYW5zaXRpb24nLCAnMC41cycpXHJcbiAgICAuc3R5bGUoJ2JvcmRlcicsJzFweCBzb2xpZCAjZWNjYzY4JylcclxuICAgIC5zdHlsZSgnYm94LXNoYWRvdycsJzAgMCAzMHB4ICNlY2NjNjgnKVxyXG4gICAgLnN0eWxlKCdjdXJzb3InLCdwb2ludGVyJylcclxuICAgIC5zdHlsZSgnei1pbmRleCcsMSk7XHJcbnZhciBpbmZvQnV0dG9uID0gbWFpbkNvbnRlbnQuYXBwZW5kKCdzcGFuJywnaW5mb0J1dHRvbicpXHJcbiAgICAuY29udGVudCgnV2FubmEga25vdyBtb3JlPycpXHJcbiAgICAuc3R5bGUoJ3Bvc2l0aW9uJywnZml4ZWQnKVxyXG4gICAgLnN0eWxlKCdjb2xvcicsJyNlY2NjNjgnKVxyXG4gICAgLnN0eWxlKCd3aWR0aCcsJzMycHgnKVxyXG4gICAgLnN0eWxlKCdoZWlnaHQnLCAnMzJweCcpXHJcbiAgICAuc3R5bGUoJ292ZXJmbG93JywnaGlkZGVuJylcclxuICAgIC5zdHlsZSgnYm9yZGVyJywnMXB4IHNvbGlkIHRyYW5zcGFyZW50JylcclxuICAgIC5zdHlsZSgnYm9yZGVyLXJhZGl1cycsJzRweCcpXHJcbiAgICAuc3R5bGUoJ3RleHQtYWxpZ24nLCdjZW50ZXInKVxyXG4gICAgLnN0eWxlKCdsZWZ0JywnMCcpXHJcbiAgICAuc3R5bGUoJ3JpZ2h0JywnMCcpXHJcbiAgICAuc3R5bGUoJ2JvdHRvbScsJzE4JScpXHJcbiAgICAuc3R5bGUoJ21hcmdpbicsJ2F1dG8nKVxyXG4gICAgLnN0eWxlKCdmb250LXNpemUnLCcyNHB4JylcclxuICAgIC5zdHlsZSgndHJhbnNpdGlvbicsICcwLjVzJylcclxuICAgIC5zdHlsZSgnYmFja2dyb3VuZCcsICcjZWNjYzY4JylcclxuICAgIC5zdHlsZSgndGV4dC1zaGFkb3cnLCcwIDAgNXB4ICNlY2NjNjgnKVxyXG4gICAgLnN0eWxlKCdib3gtc2hhZG93JywnMCAwIDEweCAjZWNjYzY4JylcclxuICAgIC5zdHlsZSgnY3Vyc29yJywncG9pbnRlcicpXHJcbiAgICAuc3R5bGUoJ3otaW5kZXgnLDEpXHJcbiAgICAub24oJ2NsaWNrJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY2Muc3RvcmVWYWx1ZSgnY3VycmVudFZpZXcnLCdhYm91dCcpO1xyXG4gICAgfSlcclxuICAgIC5vbignbW91c2VvdmVyJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5zdHlsZSgnYmFja2dyb3VuZCcsJ3JnYmEoMCwgMCwgMCwgMC41KScpXHJcbiAgICAgICAgICAgIC5zdHlsZSgnd2lkdGgnLCcxMDAlJylcclxuICAgICAgICAgICAgLnN0eWxlKCdib3gtc2hhZG93JywnJylcclxuICAgICAgICBpbmZvQnV0dG9uLm92ZXJlZCA9IHRydWU7XHJcbiAgICB9KVxyXG4gICAgLm9uKCdtb3VzZWxlYXZlJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5zdHlsZSgnYmFja2dyb3VuZCcsICcjZWNjYzY4JylcclxuICAgICAgICAgICAgLnN0eWxlKCd3aWR0aCcsJzMycHgnKVxyXG4gICAgICAgICAgICAuc3R5bGUoJ2JveC1zaGFkb3cnLCcwIDAgMTBweCAjZWNjYzY4JylcclxuICAgICAgICBpbmZvQnV0dG9uLm92ZXJlZCA9IGZhbHNlO1xyXG4gICAgfSk7XHJcbnZhciBpbmZvQnV0dG9uSGFsb0FuID0gY3IuYXBwZW5kKCdpbmZvQnV0dG9uSGFsb0FuJylcclxuICAgIC5hdHRyKCdmcmVxJyw2MClcclxuICAgIC5hdHRyKCdhY3Rpb24nLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZihpbmZvQnV0dG9uLm92ZXJlZCA9PT0gdHJ1ZSl7XHJcbiAgICAgICAgICAgIGluZm9CdXR0b25IYWxvLnN0YXRlID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3dpdGNoKGluZm9CdXR0b25IYWxvLnN0YXRlKXtcclxuICAgICAgICAgICAgY2FzZSB1bmRlZmluZWQ6XHJcbiAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgIGluZm9CdXR0b25IYWxvLnN0YXRlID0gMTtcclxuICAgICAgICAgICAgICAgIGluZm9CdXR0b25IYWxvLnN0eWxlKCd3aWR0aCcsICc2NHB4JylcclxuICAgICAgICAgICAgICAgICAgICAuc3R5bGUoJ2JvdHRvbScsJ2NhbGMoMTglIC0gMTVweCknKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdHlsZSgnaGVpZ2h0JywgJzY0cHgnKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdHlsZSgnb3BhY2l0eScsIDApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIGluZm9CdXR0b25IYWxvLnN0YXRlID0gMjtcclxuICAgICAgICAgICAgICAgIGluZm9CdXR0b25IYWxvLnN0eWxlKCd3aWR0aCcsICczMnB4JylcclxuICAgICAgICAgICAgICAgICAgICAuc3R5bGUoJ2JvdHRvbScsJzE4JScpXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0eWxlKCdoZWlnaHQnLCAnMzJweCcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIGluZm9CdXR0b25IYWxvLnN0YXRlID0gMDtcclxuICAgICAgICAgICAgICAgIGluZm9CdXR0b25IYWxvLnN0eWxlKCdvcGFjaXR5JywgMSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9KS5pbnNlcnQoKTtcclxuXHJcbndpbmRvdy5tb2JpbGVjaGVjayA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIGNoZWNrID0gZmFsc2U7XHJcbiAgICAoZnVuY3Rpb24oYSl7aWYoLyhhbmRyb2lkfGJiXFxkK3xtZWVnbykuK21vYmlsZXxhdmFudGdvfGJhZGFcXC98YmxhY2tiZXJyeXxibGF6ZXJ8Y29tcGFsfGVsYWluZXxmZW5uZWN8aGlwdG9wfGllbW9iaWxlfGlwKGhvbmV8b2QpfGlyaXN8a2luZGxlfGxnZSB8bWFlbW98bWlkcHxtbXB8bW9iaWxlLitmaXJlZm94fG5ldGZyb250fG9wZXJhIG0ob2J8aW4paXxwYWxtKCBvcyk/fHBob25lfHAoaXhpfHJlKVxcL3xwbHVja2VyfHBvY2tldHxwc3B8c2VyaWVzKDR8NikwfHN5bWJpYW58dHJlb3x1cFxcLihicm93c2VyfGxpbmspfHZvZGFmb25lfHdhcHx3aW5kb3dzIGNlfHhkYXx4aWluby9pLnRlc3QoYSl8fC8xMjA3fDYzMTB8NjU5MHwzZ3NvfDR0aHB8NTBbMS02XWl8Nzcwc3w4MDJzfGEgd2F8YWJhY3xhYyhlcnxvb3xzXFwtKXxhaShrb3xybil8YWwoYXZ8Y2F8Y28pfGFtb2l8YW4oZXh8bnl8eXcpfGFwdHV8YXIoY2h8Z28pfGFzKHRlfHVzKXxhdHR3fGF1KGRpfFxcLW18ciB8cyApfGF2YW58YmUoY2t8bGx8bnEpfGJpKGxifHJkKXxibChhY3xheil8YnIoZXx2KXd8YnVtYnxid1xcLShufHUpfGM1NVxcL3xjYXBpfGNjd2F8Y2RtXFwtfGNlbGx8Y2h0bXxjbGRjfGNtZFxcLXxjbyhtcHxuZCl8Y3Jhd3xkYShpdHxsbHxuZyl8ZGJ0ZXxkY1xcLXN8ZGV2aXxkaWNhfGRtb2J8ZG8oY3xwKW98ZHMoMTJ8XFwtZCl8ZWwoNDl8YWkpfGVtKGwyfHVsKXxlcihpY3xrMCl8ZXNsOHxleihbNC03XTB8b3N8d2F8emUpfGZldGN8Zmx5KFxcLXxfKXxnMSB1fGc1NjB8Z2VuZXxnZlxcLTV8Z1xcLW1vfGdvKFxcLnd8b2QpfGdyKGFkfHVuKXxoYWllfGhjaXR8aGRcXC0obXxwfHQpfGhlaVxcLXxoaShwdHx0YSl8aHAoIGl8aXApfGhzXFwtY3xodChjKFxcLXwgfF98YXxnfHB8c3x0KXx0cCl8aHUoYXd8dGMpfGlcXC0oMjB8Z298bWEpfGkyMzB8aWFjKCB8XFwtfFxcLyl8aWJyb3xpZGVhfGlnMDF8aWtvbXxpbTFrfGlubm98aXBhcXxpcmlzfGphKHR8dilhfGpicm98amVtdXxqaWdzfGtkZGl8a2VqaXxrZ3QoIHxcXC8pfGtsb258a3B0IHxrd2NcXC18a3lvKGN8ayl8bGUobm98eGkpfGxnKCBnfFxcLyhrfGx8dSl8NTB8NTR8XFwtW2Etd10pfGxpYnd8bHlueHxtMVxcLXd8bTNnYXxtNTBcXC98bWEodGV8dWl8eG8pfG1jKDAxfDIxfGNhKXxtXFwtY3J8bWUocmN8cmkpfG1pKG84fG9hfHRzKXxtbWVmfG1vKDAxfDAyfGJpfGRlfGRvfHQoXFwtfCB8b3x2KXx6eil8bXQoNTB8cDF8diApfG13YnB8bXl3YXxuMTBbMC0yXXxuMjBbMi0zXXxuMzAoMHwyKXxuNTAoMHwyfDUpfG43KDAoMHwxKXwxMCl8bmUoKGN8bSlcXC18b258dGZ8d2Z8d2d8d3QpfG5vayg2fGkpfG56cGh8bzJpbXxvcCh0aXx3dil8b3Jhbnxvd2cxfHA4MDB8cGFuKGF8ZHx0KXxwZHhnfHBnKDEzfFxcLShbMS04XXxjKSl8cGhpbHxwaXJlfHBsKGF5fHVjKXxwblxcLTJ8cG8oY2t8cnR8c2UpfHByb3h8cHNpb3xwdFxcLWd8cWFcXC1hfHFjKDA3fDEyfDIxfDMyfDYwfFxcLVsyLTddfGlcXC0pfHF0ZWt8cjM4MHxyNjAwfHJha3N8cmltOXxybyh2ZXx6byl8czU1XFwvfHNhKGdlfG1hfG1tfG1zfG55fHZhKXxzYygwMXxoXFwtfG9vfHBcXC0pfHNka1xcL3xzZShjKFxcLXwwfDEpfDQ3fG1jfG5kfHJpKXxzZ2hcXC18c2hhcnxzaWUoXFwtfG0pfHNrXFwtMHxzbCg0NXxpZCl8c20oYWx8YXJ8YjN8aXR8dDUpfHNvKGZ0fG55KXxzcCgwMXxoXFwtfHZcXC18diApfHN5KDAxfG1iKXx0MigxOHw1MCl8dDYoMDB8MTB8MTgpfHRhKGd0fGxrKXx0Y2xcXC18dGRnXFwtfHRlbChpfG0pfHRpbVxcLXx0XFwtbW98dG8ocGx8c2gpfHRzKDcwfG1cXC18bTN8bTUpfHR4XFwtOXx1cChcXC5ifGcxfHNpKXx1dHN0fHY0MDB8djc1MHx2ZXJpfHZpKHJnfHRlKXx2ayg0MHw1WzAtM118XFwtdil8dm00MHx2b2RhfHZ1bGN8dngoNTJ8NTN8NjB8NjF8NzB8ODB8ODF8ODN8ODV8OTgpfHczYyhcXC18ICl8d2ViY3x3aGl0fHdpKGcgfG5jfG53KXx3bWxifHdvbnV8eDcwMHx5YXNcXC18eW91cnx6ZXRvfHp0ZVxcLS9pLnRlc3QoYS5zdWJzdHIoMCw0KSkpIGNoZWNrID0gdHJ1ZTt9KShuYXZpZ2F0b3IudXNlckFnZW50fHxuYXZpZ2F0b3IudmVuZG9yfHx3aW5kb3cub3BlcmEpO1xyXG4gICAgcmV0dXJuIGNoZWNrO1xyXG59O1xyXG52YXIgY2lyY2xlTnVtID0gbW9iaWxlY2hlY2soKT81MDoxNTA7XHJcbnZhciBjaXJjbGVMaXN0ID0gW107XHJcblxyXG5mb3IodmFyIGk9MDtpPGNpcmNsZU51bTtpKyspe1xyXG4gICAgbGV0IHggPSBNYXRoLnJhbmRvbSgpKndpbmRvdy5pbm5lcldpZHRoKzEwO1xyXG4gICAgbGV0IHkgPSBNYXRoLnJhbmRvbSgpKndpbmRvdy5pbm5lckhlaWdodCsxMDtcclxuICAgIGxldCBjaXJjbGUgPSBuZXcgQ3ViWV9ET00oJ2RpdicsJ2JhY2tncm91bmRDaXJjbGVfJytpKVxyXG4gICAgICAgIC5zdHlsZSgncG9zaXRpb24nLCdhYnNvbHV0ZScpXHJcbiAgICAgICAgLnN0eWxlKCd3aWR0aCcsJzIwcHgnKVxyXG4gICAgICAgIC5zdHlsZSgnaGVpZ2h0JywnMjBweCcpXHJcbiAgICAgICAgLnN0eWxlKCdib3JkZXItcmFkaXVzJywnNHB4JylcclxuICAgICAgICAuc3R5bGUoJ2JhY2tncm91bmQnLCcjZWNjYzY4JylcclxuICAgICAgICAuc3R5bGUoJ3RyYW5zaXRpb24nLCcwLjFzIGxpbmVhcicpXHJcbiAgICAgICAgLnN0eWxlKCdib3gtc2hhZG93JywnMCAwIDEwcHggI2VjY2M2OCcpXHJcbiAgICAgICAgLnN0eWxlKCdvcGFjaXR5JywgJzAnKVxyXG4gICAgICAgIC5zdHlsZSgndHJhbnNmb3JtJywndHJhbnNsYXRlKCcreCsncHgsJyt5KydweCknKVxyXG4gICAgICAgIC5hdHRyKCdhY3RpdmF0ZScsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICAgICAgICAgIHRoaXMuZHggPSBNYXRoLnJhbmRvbSgpLTAuNTtcclxuICAgICAgICAgICAgdGhpcy5keSA9IE1hdGgucmFuZG9tKCktMC41O1xyXG4gICAgICAgICAgICB0aGlzLmRzID0gMC4wMTtcclxuICAgICAgICAgICAgdGhpcy5zY2FsZSA9ICBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgICAgICB0aGlzLmNvdW50ZXIgPSAxMDtcclxuICAgICAgICAgICAgdGhpcy5jaXJjbGVBbiA9IGNyLmFwcGVuZCgnaG9tZV9jaXJjbGVfYW5pbWF0aW9uXycraSlcclxuICAgICAgICAgICAgICAgIC5hdHRyKCdmcmVxJyw1KVxyXG4gICAgICAgICAgICAgICAgLmF0dHIoJ2FjdGlvbicsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzY2FsZSA9IHNlbGYuc2NhbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi54Kz1zZWxmLmR4O1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYueSs9c2VsZi5keTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5zdHlsZSgndHJhbnNmb3JtJywndHJhbnNsYXRlKCcrKHNlbGYueCArIChtYWluQ29udGVudC5keHx8MCkqc2NhbGUpKydweCwnKyhzZWxmLnkgKyAobWFpbkNvbnRlbnQuZHl8fDApKnNjYWxlKSsncHgpIHNjYWxlKCcrc2NhbGUrJyknKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc3R5bGUoJ29wYWNpdHknLCBzY2FsZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnN0eWxlKCd6LWluZGV4Jywgc2NhbGU+PTAuOD8yOjApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zdHlsZSgnYm94LXNoYWRvdycsJzAgMCAnKyhNYXRoLnJhbmRvbSgpKjEwKzEwKSsncHggI2VjY2M2OCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHNlbGYueD53aW5kb3cuaW5uZXJXaWR0aCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZHggPSAtKE1hdGgucmFuZG9tKCkqMC41KzAuMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfWVsc2UgaWYoc2VsZi54PDApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmR4ID0gTWF0aC5yYW5kb20oKSowLjUrMC4xO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZihzZWxmLnk+d2luZG93LmlubmVySGVpZ2h0KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5keSA9IC0oTWF0aC5yYW5kb20oKSowLjUrMC4xKTtcclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZSBpZihzZWxmLnk8MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZHkgPSBNYXRoLnJhbmRvbSgpKjAuNSswLjE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY291bnRlci0tO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHNlbGYuY291bnRlcjw9MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY291bnRlcj0xMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5zY2FsZSs9Y2lyY2xlLmRzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihzZWxmLnNjYWxlPj0xKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZHM9LTAuMDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoc2VsZi5zY2FsZTw9MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmRzPTAuMDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KS5pbnNlcnQoKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5hdHRyKCdkZWFjdGl2YXRlJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgdGhpcy5jaXJjbGVBbi5yZW1vdmUoKTtcclxuICAgICAgICB9KTtcclxuICAgIG1haW5Db250ZW50LmFwcGVuZEVsZW1lbnQoY2lyY2xlKTtcclxuXHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IG1haW5Db250ZW50OyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFueGluIFlhbmcgb24gMy8yOC8yMDE4LlxyXG4gKi9cclxuaW1wb3J0IENDIGZyb20gJy4vRnJhbWV3b3JrL0N1YlkvQ3ViWV9Db3JlJztcclxuaW1wb3J0IEN1YllfRE9NIGZyb20gJy4vRnJhbWV3b3JrL0N1YlkvQ3ViWV9ET00nO1xyXG5pbXBvcnQgQ1IgZnJvbSAnLi9GcmFtZXdvcmsvQ3ViWS9DdWJZX1JvdXRpbmUnO1xyXG5pbXBvcnQgaG9tZUNvbnRlbnQgZnJvbSAnLi9ob21lJztcclxuaW1wb3J0IGhlYWRlciBmcm9tICcuL2NvbXBvbmVudHMvaGVhZGVyJ1xyXG50cnkge1xyXG4gICAgd2luZG93LnJvb3QgPSBuZXcgQ3ViWV9ET00oJ2RpdicsICdheF9yb290JywgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcclxuICAgIHJvb3Quc3R5bGUoJ2ZvbnQtc2l6ZScsICcxMnB4JylcclxuICAgICAgICAuc3R5bGUoJ2N1cnNvcicsICd1cmwoKSwgYXV0bycpO1xyXG4gICAgcm9vdC5hcHBlbmRFbGVtZW50KGhlYWRlcik7XHJcbiAgICB2YXIgbWFpbkNvbnRhaW5lciA9IHJvb3QuYXBwZW5kKCdkaXYnLCAnbWFpbkNvbnRhaW5lcicpO1xyXG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRFbGVtZW50KGhvbWVDb250ZW50KTtcclxuICAgIGNjLnN0b3JlVmFsdWUoJ2N1cnJlbnRWaWV3JywnSG9tZScpO1xyXG4gICAgY2MuY29ubmVjdCgnY3VycmVudFZpZXcnLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBsZXQgY3VycmVudFZpZXcgPSBjYy5nZXRWYWx1ZSgnY3VycmVudFZpZXcnKTtcclxuICAgICAgICBtYWluQ29udGFpbmVyLnJlbW92ZSgnLm1haW5Db250ZW50Jyk7XHJcbiAgICAgICAgc3dpdGNoIChjdXJyZW50Vmlldyl7XHJcbiAgICAgICAgICAgIGNhc2UgJ0hvbWUnOlxyXG4gICAgICAgICAgICAgICAgbWFpbkNvbnRhaW5lci5hcHBlbmRFbGVtZW50KGhvbWVDb250ZW50KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHZhciB2ZXJzaW9uID0gcm9vdC5hcHBlbmQoJ3AnLCAndmVyc2lvbicpXHJcbiAgICAgICAgLnN0eWxlKCdwb3NpdGlvbicsICdmaXhlZCcpXHJcbiAgICAgICAgLnN0eWxlKCdib3R0b20nLCAnMHB4JylcclxuICAgICAgICAuc3R5bGUoJ3JpZ2h0JywgJzAnKVxyXG4gICAgICAgIC5zdHlsZSgncGFkZGluZy1yaWdodCcsICcxZW0nKVxyXG4gICAgICAgIC5zdHlsZSgnY29sb3InLCAnbGlnaHRncmF5JylcclxuICAgICAgICAuY29udGVudChuZXcgRGF0ZSgpKVxyXG4gICAgICAgIC5zZXRVcGRhdGVyKCd0aW1lcicsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5jb250ZW50KCdDdWJZX1JvdXRpbmU6IExhc3JDeWNsZVRpbWU6ICcgKyBjci5sYXN0Q3ljbGVUaW1lICsgJ21zIHwgQ1BTOicgKyBjci5jeWNsZVBlclNlYyArICcgfExvbmdlc3Q6ICcgKyBjci5sb25nZXN0Um91dGluZVRpbWUgKyAnbXMgfCBMYXN0OicgKyBjci5sYXN0Um91dGluZVRpbWUgKyAnbXMnKTtcclxuICAgICAgICB9KTtcclxuICAgIHZhciB0aW1lciA9IGNyLmFwcGVuZCgndGltZXInKVxyXG4gICAgICAgIC5hdHRyKCdmcmVxJywgMSlcclxuICAgICAgICAuYXR0cignYWN0aW9uJywgdmVyc2lvbi51cGRhdGVyKCd0aW1lcicpKVxyXG4gICAgICAgIC5pbnNlcnQoKTtcclxufWNhdGNoIChlKXtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKS5pbm5lckhUTUw9IGU7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==