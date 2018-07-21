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

var _CubY_Pipeline = __webpack_require__(/*! ./CubY_Pipeline */ "./src/Framework/CubY/CubY_Pipeline.js");

var _CubY_Pipeline2 = _interopRequireDefault(_CubY_Pipeline);

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
    readValue: _CubY_Core2.default.readValue.bind(_CubY_Core2.default),
    isObjectEmpty: _CubY_Core2.default.isObjectEmpty.bind(_CubY_Core2.default),

    //DOM
    createElement: _CubY_DOM2.default.createElement,

    //Pipeline
    createPipeline: _CubY_Pipeline2.default.createPipeline,
    //Routine
    createRoutine: _CubY_Routine2.default.createRoutine.bind(_CubY_Routine2.default),
    getCurrentCycle: _CubY_Routine2.default.getCurrentCycle.bind(_CubY_Routine2.default),
    routine: _CubY_Routine2.default.routine.bind(_CubY_Routine2.default),
    //AddOns
    addOn: function addOn(obj) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                CubY[key] = obj[key];
            }
        }
    },
    //Other
    version: '0.6b.0.10',
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
            this.dataMap = {};
            this.connectionMap = {};
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
        value: function storeDataArray(_array, _idKey, _options, _callback) {
            var self = this;
            var options = _options || {};
            var idKey = _idKey || 'id';
            var callback = _callback || EMPTY_FUNCTION;
            var array = _array || [];
            var itemList = [];
            var itemProcessor = options.itemProcessor || EMPTY_FUNCTION;

            array.forEach(function (_item) {
                var key = _item[idKey];
                if (key === undefined || self.readValue(options.skipFun, _item)) {
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
        value: function storeValue(_key, _value, _options) {
            var options = _options || {};
            var store = this[options.store] || this.dataMap;
            var key = _key;
            var newValue = _value;
            var item = store[key];
            var shouldReact = true;
            if (item !== undefined && item === Object(item) && options.overwrite !== true) {
                item = Object.assign(item, newValue);
            } else {
                shouldReact = item !== newValue;
                item = newValue;
            }
            this.dataMap[key] = item;
            if (shouldReact || options.forceReact) {
                this.react(key);
            }
            return item;
        }
    }, {
        key: 'getValue',
        value: function getValue(_key) {
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            var key = _key || '';
            var store = options.store || 'dataMap';
            if (options.caseSensitive !== false) {
                return this[store];
            } else {
                for (var K in this[store]) {
                    if (this[store].hasOwnProperty(K)) {
                        if (K.toLowerCase() === key.toLowerCase()) {
                            return this[store][K];
                        }
                    }
                }
                return undefined;
            }
        }
    }, {
        key: 'connect',
        value: function connect(_key) {
            var newConector = new CubY_Connector(_key, this);
            return newConector;
        }
    }, {
        key: 'react',
        value: function react(key) {
            var self = this;
            var connectionMap = this.connectionMap;
            var connectorMap = connectionMap[key] || {};
            var newValue = self.getValue(key);
            for (var id in connectorMap) {
                if (connectorMap.hasOwnProperty(id)) {
                    connectorMap[id].run(newValue);
                }
            }
        }
    }, {
        key: 'readValue',
        value: function readValue(_value, data) {
            var value = _value;
            if (typeof value === "function") {
                return value.call(this, data);
            } else {
                return value;
            }
        }
    }, {
        key: 'isObjectEmpty',
        value: function isObjectEmpty(obj) {
            if (!obj) {
                return true;
            }
            for (var key in obj) {
                if (obj.hasOwnProperty(key)) {
                    return false;
                }
            }
            return true;
        }
    }, {
        key: 'debug',
        value: function debug(str) {
            if (this.getValue('DEBUG_MODE')) {
                console.log('DEBUG: ' + str);
            }
        }
    }]);

    return CubY_Core;
}();

var _CubY_Core = new CubY_Core();
exports.default = _CubY_Core;

var CubY_Connector = function () {
    function CubY_Connector(key, core) {
        _classCallCheck(this, CubY_Connector);

        var self = this;
        this.id = 'connector_' + Math.random() * 10000 + '_' + Date.now();
        this.bindingKey = key;

        this.insert = function () {
            var connectorMap = core.connectionMap[self.bindingKey] || {};
            connectorMap[self.id] = self;
            core.connectionMap[self.bindingKey] = connectorMap;
        };
        this.remove = function () {
            try {
                if (core.connectionMap[self.bindingKey]) {
                    if (core.connectionMap[self.bindingKey][self.id]) {
                        delete core.connectionMap[self.bindingKey][self.id];
                    }
                    if (CubY.isObjectEmpty(core.connectionMap[self.bindingKey])) {
                        delete core.connectionMap[self.bindingKey];
                    }
                }
            } catch (e) {
                console.warn('[Warning]: Connector remove method reference error.');
            }
        };
        this.insert();
    }

    _createClass(CubY_Connector, [{
        key: 'to',
        value: function to(action) {
            this.action = action;
            return this;
        }
    }, {
        key: 'belong',
        value: function belong(owner) {
            this.owner = owner;
            owner.connectionList.push(this);
            return this;
        }
    }, {
        key: 'run',
        value: function run(newValue) {
            if (typeof this.action === 'function') {
                if (this.owner) {
                    if (this.owner.isActive) {
                        this.action.call(this.owner, newValue);
                    }
                } else {
                    this.action(newValue);
                }
            }
        }
    }]);

    return CubY_Connector;
}();

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

        this.tag = this.readValue(_tag) || 'div';
        this.id = this.readValue(_id) || this.tag + '_' + Math.random() * 10000 + '_' + Date.now();
        this.dom = document.createElement(this.tag);
        this.dom.setAttribute('id', this.id);
        this.childrenList = [];
        this.attribute = {};
        this.property = {};
        this.domStyle = {};
        this.updaters = {};
        this.connectionList = [];
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
        key: 'prop',
        value: function prop(key, _value) {
            var value = void 0;

            if ((typeof key === 'undefined' ? 'undefined' : _typeof(key)) === 'object') {
                for (var k in key) {
                    this.prop(k, key[k]);
                }
                return this;
            }

            if (key === 'activated' || key === 'deactivated') {
                value = _value;
            } else {
                value = this.readValue(_value);
                this.dom[key] = value;
            }

            this.property[key] = value;
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
            this.innerText = value;
            this.dom.innerText = value;
            return this;
        }
    }, {
        key: 'getContent',
        value: function getContent() {
            return this.innerText;
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
            if (_selector === undefined || typeof _selector === 'number') {
                this.removeSelf(_selector || _transition);
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

            this.connectionList.forEach(function (connection) {
                connection.insert();
            });

            this.childrenList.forEach(function (child) {
                child.activated();
            });

            if (this.attribute.activated) {
                this.attribute.activated.call(this);
            }
        }
    }, {
        key: 'deactivated',
        value: function deactivated() {
            this.isActive = false;

            this.connectionList.forEach(function (connection) {
                connection.remove();
            });

            this.childrenList.forEach(function (child) {
                child.deactivated();
            });

            if (this.attribute.deactivated) {
                this.attribute.deactivated.call(this);
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

    return CubY_DOM;
}();

var _CubY_DOM = {
    createElement: function createElement(_tag, _id, _root) {
        return new CubY_DOM(_tag, _id, _root);
    }
};
exports.default = _CubY_DOM;

/***/ }),

/***/ "./src/Framework/CubY/CubY_Pipeline.js":
/*!*********************************************!*\
  !*** ./src/Framework/CubY/CubY_Pipeline.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: W:/projectAX/src/Framework/CubY/CubY_Pipeline.js: Unexpected token, expected ; (18:57)\n\n\u001b[0m \u001b[90m 16 | \u001b[39m        self\u001b[33m.\u001b[39minputs \u001b[33m=\u001b[39m inputs\u001b[33m;\u001b[39m\n \u001b[90m 17 | \u001b[39m       \u001b[36mfor\u001b[39m(\u001b[36mvar\u001b[39m i\u001b[33m=\u001b[39m\u001b[35m0\u001b[39m\u001b[33m;\u001b[39mi\u001b[33m<\u001b[39m\u001b[33mworkers\u001b[39m\u001b[33m.\u001b[39mlength\u001b[33m;\u001b[39mi\u001b[33m++\u001b[39m){\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 18 | \u001b[39m           let worker \u001b[33m=\u001b[39m \u001b[33mCubY\u001b[39m\u001b[33m.\u001b[39mgetValue(workers\u001b[33m,\u001b[39m \u001b[32m'workers'\u001b[39m)workers[i]\u001b[33m;\u001b[39m\n \u001b[90m    | \u001b[39m                                                         \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 19 | \u001b[39m           \u001b[36mif\u001b[39m((i\u001b[33m+\u001b[39m\u001b[35m1\u001b[39m) \u001b[33m!==\u001b[39m workers\u001b[33m.\u001b[39mlength){\n \u001b[90m 20 | \u001b[39m               worker\u001b[33m.\u001b[39mnext \u001b[33m=\u001b[39m workers[i\u001b[33m+\u001b[39m\u001b[35m1\u001b[39m]\n \u001b[90m 21 | \u001b[39m           }\u001b[0m\n");

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
            //setTimeout(this.start.bind(this),0);
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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _CubY = __webpack_require__(/*! ./Framework/CubY/CubY */ "./src/Framework/CubY/CubY.js");

var _CubY2 = _interopRequireDefault(_CubY);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var pipelineInit = _CubY2.default.createPipeLine('pipelineInit');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0ZyYW1ld29yay9DdWJZL0N1YlkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0ZyYW1ld29yay9DdWJZL0N1YllfQ29yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRnJhbWV3b3JrL0N1YlkvQ3ViWV9ET00uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0ZyYW1ld29yay9DdWJZL0N1YllfUm91dGluZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBQ0EsSUFBTSxpQkFBaUIsMEJBQU0sQ0FBN0I7O0FBRUEsSUFBSTs7QUFHQTtjQUFVLG9CQUFVLFNBQVMsaUJBQzdCO2dCQUFZLG9CQUFVLFdBQVcsaUJBQ2pDO29CQUFnQixvQkFBVSxlQUFlLGlCQUN6QztnQkFBWSxvQkFBVSxXQUFXLGlCQUNqQzthQUFTLG9CQUFVLFFBQVEsaUJBQzNCO1dBQU8sb0JBQVUsTUFBTSxpQkFDdkI7V0FBTyxvQkFBVSxNQUFNLGlCQUN2QjtlQUFXLG9CQUFVLFVBQVUsaUJBQy9CO21CQUFlLG9CQUFVLGNBQWMsaUJBRXZDOztBQUNBO21CQUFlLG1CQUVmOztBQUNBO29CQUFnQix3QkFDaEI7QUFDQTttQkFBYyx1QkFBYSxjQUFjLG9CQUN6QztxQkFBZ0IsdUJBQWEsZ0JBQWdCLG9CQUM3QzthQUFRLHVCQUFhLFFBQVEsb0JBQzdCO0FBQ0E7V0FBTyxlQUFVLEtBQ2Y7YUFBSSxJQUFJLE9BQU8sS0FDWDtnQkFBRyxJQUFJLGVBQWUsTUFDbEI7cUJBQUssT0FBTyxJQUNmO0FBQ0o7QUFDRjtBQUNEO0FBQ0E7YUFDQTtlQUFXLHFDQWhDSjtBQUVQOztBQWlDSixPQUFPLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekNkLElBQU0saUJBQWlCLDBCQUFNLENBQTdCOzs0QkFFSTt1QkFBWSxRQUFPOzhCQUNmOztZQUFJLFFBQVEsU0FDWjtZQUFJLE9BQ0o7YUFBSyxLQUNSOzs7OztxQ0FHRztnQkFBSSxRQUFRLFVBQ1o7aUJBQUssVUFDTDtpQkFBSyxnQkFDTDtpQkFBSyxVQUFVLEtBQ2Y7bUJBQU8sS0FDVjs7OztxQ0FHRztnQkFBSSxPQUNKO2dCQUFJLFdBQ0o7Z0JBQUksVUFDSjtnQkFBSSxDQUFDLENBQUMsT0FBTyxPQUFPLENBQUMsQ0FBQyxJQUFJLFVBQVcsQ0FBQyxDQUFDLE9BQU8sU0FBUyxVQUFVLFVBQVUsUUFBUSxZQUFZLEdBQzNGOzBCQUNBO3VCQUNIO0FBQ0Q7Z0JBQUcsT0FBTyxtQkFBbUIsYUFDekI7dUJBQ0g7QUFDRDtnQkFBRyxlQUFlLEtBQUssT0FBTywwQkFBMkIsR0FDakQ7dUJBQU8sRUFBRSxlQUNaO0FBRnlDLGFBQUMsQ0FFeEMsQ0FBQyxPQUFPLGFBQWEsT0FBTyxtQkFDL0I7dUJBQ0g7QUFDRDtnQkFBRyxTQUFTLENBQUMsQ0FBQyxTQUFTLGNBQ25CO3VCQUFPLFNBQVMsWUFDWjt3QkFBSSxTQUFTLFVBQ2I7eUJBQUssSUFBSSxJQUFJLEdBQUcsSUFBSSxVQUFVLFFBQVEsS0FDbEM7NkJBQUssSUFBSSxPQUFPLFVBQVUsSUFDdEI7Z0NBQUksTUFBTSxVQUNWO2dDQUFJLElBQUksZUFBZSxNQUNuQixPQUFPLE9BQU8sSUFDckI7QUFDSjtBQUNEOzJCQUNIO0FBQ0Q7dUJBQ0E7dUJBQ0g7QUFDRDtnQkFBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sWUFDakI7dUJBQ0g7QUFDRDtnQkFBRyxDQUFDLENBQUMsT0FBTyxVQUFVLENBQUMsQ0FBQyxPQUFPLE9BQU8sVUFDbEM7MkJBQ0E7dUJBQ0g7QUFDRDtnQkFBRyxDQUFDLFlBQVksWUFBWSxDQUFDLENBQUMsT0FBTyxLQUNqQzt1QkFDSDtBQUNKOzs7OzRFQUdHO2dCQUFJLE9BQ0o7Z0JBQUksVUFBVSxZQUNkO2dCQUFJLFFBQVEsVUFDWjtnQkFBSSxXQUFXLGFBQ2Y7Z0JBQUksUUFBUSxVQUNaO2dCQUFJLFdBQ0o7Z0JBQUksZ0JBQWdCLFFBQVEsaUJBRTVCOztrQkFBTSxRQUFRLFVBQVUsT0FDcEI7b0JBQUksTUFBTSxNQUNWO29CQUFJLFFBQVEsYUFBYSxLQUFLLFVBQVUsUUFBUSxTQUFTLFFBQ3JEO0FBQ0g7QUFFRDs7b0JBQUksT0FBTyxLQUFLLFdBQVcsS0FBSyxPQUVoQzs7OEJBQ0E7eUJBQVMsS0FDWjtBQUVEOztxQkFBUyxRQUNUO21CQUNIOzs7OzJEQUdHO2dCQUFJLFVBQVUsWUFDZDtnQkFBSSxRQUFRLEtBQUssUUFBUSxVQUFVLEtBQ25DO2dCQUFJLE1BQ0o7Z0JBQUksV0FDSjtnQkFBSSxPQUFPLE1BQ1g7Z0JBQUksY0FDSjtnQkFBRyxTQUFPLGFBQWEsU0FBUyxPQUFPLFNBQVMsUUFBUSxjQUFZLE1BQ2hFO3VCQUFPLE9BQU8sT0FBTyxNQUN4QjtBQUZELG1CQUdJOzhCQUFlLFNBQ2Y7dUJBQ0g7QUFDRDtpQkFBSyxRQUFRLE9BQ2I7Z0JBQUcsZUFBZSxRQUFRLFlBQ3RCO3FCQUFLLE1BQ1I7QUFDRDttQkFDSDs7Ozt1Q0FDNEI7Z0JBQUEsOEVBQ3pCOztnQkFBSSxNQUFNLFFBQ1Y7Z0JBQUksUUFBUSxRQUFRLFNBQ3BCO2dCQUFHLFFBQVEsa0JBQWdCLE9BQ3ZCO3VCQUFPLEtBQ1Y7QUFGRCxtQkFHSTtxQkFBSSxJQUFJLEtBQUssS0FBSyxRQUNkO3dCQUFHLEtBQUssT0FBTyxlQUFlLElBQzFCOzRCQUFHLEVBQUUsa0JBQWdCLElBQUksZUFDckI7bUNBQU8sS0FBSyxPQUNmO0FBQ0o7QUFDSjtBQUNEO3VCQUNIO0FBRUo7Ozs7c0NBR0c7Z0JBQUksY0FBYyxJQUFJLGVBQWUsTUFDckM7bUJBQ0g7Ozs7bUNBRUc7Z0JBQUksT0FDSjtnQkFBSSxnQkFBZ0IsS0FDcEI7Z0JBQUksZUFBZSxjQUFjLFFBQ2pDO2dCQUFJLFdBQVcsS0FBSyxTQUNwQjtpQkFBSSxJQUFJLE1BQU0sY0FDVjtvQkFBRyxhQUFhLGVBQWUsS0FDM0I7aUNBQWEsSUFBSSxJQUNwQjtBQUNKO0FBQ0o7Ozs7Z0RBRUc7Z0JBQUksUUFDSjtnQkFBRyxPQUFPLFVBQVUsWUFDaEI7dUJBQU8sTUFBTSxLQUFLLE1BQ3JCO0FBRkQsbUJBR0k7dUJBQ0g7QUFDSjs7OzsyQ0FFRztnQkFBRyxDQUFDLEtBQ0E7dUJBQ0g7QUFDRDtpQkFBSSxJQUFJLE9BQU8sS0FDWDtvQkFBRyxJQUFJLGVBQWUsTUFDbEI7MkJBQ0g7QUFDSjtBQUNEO21CQUNIOzs7O21DQUdHO2dCQUFHLEtBQUssU0FBUyxlQUNiO3dCQUFRLElBQUksWUFDZjtBQUNKOzs7Ozs7O0FBRUwsSUFBTSxhQUFhLElBQUk7OztpQ0FJbkI7NEJBQVksS0FBSyxNQUFLOzhCQUNsQjs7WUFBSSxPQUNKO2FBQUssS0FBTSxlQUFlLEtBQUssV0FBUyxRQUFPLE1BQUksS0FDbkQ7YUFBSyxhQUVMOzthQUFLLFNBQVMsWUFDVjtnQkFBSSxlQUFlLEtBQUssY0FBYyxLQUFLLGVBQzNDO3lCQUFhLEtBQUssTUFDbEI7aUJBQUssY0FBYyxLQUFLLGNBQzNCO0FBQ0Q7YUFBSyxTQUFTLFlBQ1Y7Z0JBQ0k7b0JBQUcsS0FBSyxjQUFjLEtBQUssYUFDdkI7d0JBQUcsS0FBSyxjQUFjLEtBQUssWUFBWSxLQUFLLEtBQ3hDOytCQUFPLEtBQUssY0FBYyxLQUFLLFlBQVksS0FDOUM7QUFDRDt3QkFBSSxLQUFLLGNBQWMsS0FBSyxjQUFjLEtBQUssY0FDM0M7K0JBQU8sS0FBSyxjQUFjLEtBQzdCO0FBQ0o7QUFDSjtBQVRELGNBU0MsT0FBTyxHQUNKO3dCQUFRLEtBQ1g7QUFDSjtBQUNEO2FBQ0g7Ozs7O21DQUVHO2lCQUFLLFNBQ0w7bUJBQ0g7Ozs7c0NBRUc7aUJBQUssUUFDTDtrQkFBTSxlQUFlLEtBQ3JCO21CQUNIOzs7O3NDQUVHO2dCQUFHLE9BQU8sS0FBSyxXQUFXLFlBQ3RCO29CQUFHLEtBQUssT0FDSjt3QkFBRyxLQUFLLE1BQU0sVUFDVjs2QkFBSyxPQUFPLEtBQUssS0FBSyxPQUN6QjtBQUNKO0FBSkQsdUJBS0k7eUJBQUssT0FDUjtBQUNKO0FBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbk5MOzs7MkJBSUk7c0JBQVksTUFBSyxLQUFJLE9BQU87OEJBQ3hCOzthQUFLLE1BQU0sS0FBSyxVQUFVLFNBQzFCO2FBQUssS0FBSyxLQUFLLFVBQVUsUUFBTyxLQUFLLE1BQU0sTUFBTSxLQUFLLFdBQVMsUUFBTSxNQUFJLEtBQ3pFO2FBQUssTUFBTSxTQUFTLGNBQWMsS0FDbEM7YUFBSyxJQUFJLGFBQWEsTUFBSyxLQUMzQjthQUFLLGVBQ0w7YUFBSyxZQUNMO2FBQUssV0FDTDthQUFLLFdBQ0w7YUFBSyxXQUNMO2FBQUssaUJBQ0w7YUFDQTthQUFLLFVBQ0w7YUFBSyxLQUVMOztZQUFJLE9BQ0o7YUFBSyxVQUFVLFVBQVUsTUFDckI7Z0JBQUksVUFBUyxLQUFLLFNBQ2xCO21CQUFPLFlBQ0g7b0JBQUcsU0FDQzs0QkFBUSxLQUFLLE1BQU0sS0FBSyxNQUMzQjtBQUNKO0FBQ0o7QUFDSjs7Ozs7a0RBRUc7aUJBQUssU0FBUyxRQUNkO21CQUNIOzs7O21DQUVHO2lCQUFLLE9BQ0w7bUJBQ0g7Ozs7b0NBRUc7Z0JBQUcsT0FDQztzQkFBTSxZQUFZLEtBQ2xCO3FCQUFLLFNBQ0w7cUJBQ0g7QUFDRDttQkFDSDs7OzswQ0FFRztnQkFBSSxNQUFNLEtBQUssVUFDZjtnQkFBSSxLQUFLLEtBQUssVUFDZDtnQkFBSSxVQUFVLEtBQUssY0FBYyxLQUNqQztpQkFBSyxjQUNMO21CQUNIOzs7O2dEQUVHO2dCQUFJLFVBQVUsS0FBSyxVQUNuQjtvQkFBUSxTQUVSOztpQkFBSyxhQUFhLEtBQ2xCO2lCQUFLLElBQUksWUFBWSxRQUNyQjtnQkFBRyxLQUFLLFlBQVksS0FBSyxRQUNyQjt3QkFDSDtBQUNEO21CQUNIOzs7OzBDQUVHO2dCQUFJLGFBRUo7O2dCQUFHLFFBQU8sc0RBQVEsVUFDZDtxQkFBSSxJQUFJLEtBQUssS0FDVDt5QkFBSyxLQUFLLEdBQUUsSUFDZjtBQUNEO3VCQUNIO0FBRUQ7O2dCQUFHLFFBQU8sZUFBZSxRQUFRLGVBQzdCO3dCQUNIO0FBRkQsbUJBR0k7d0JBQVEsS0FBSyxVQUNiO3FCQUFLLElBQUksYUFBYSxLQUN6QjtBQUVEOztpQkFBSyxVQUFVLE9BQ2Y7bUJBQ0g7Ozs7MENBRUc7Z0JBQUksYUFFSjs7Z0JBQUcsUUFBTyxzREFBUSxVQUNkO3FCQUFJLElBQUksS0FBSyxLQUNUO3lCQUFLLEtBQUssR0FBRSxJQUNmO0FBQ0Q7dUJBQ0g7QUFFRDs7Z0JBQUcsUUFBTyxlQUFlLFFBQVEsZUFDN0I7d0JBQ0g7QUFGRCxtQkFHSTt3QkFBUSxLQUFLLFVBQ2I7cUJBQUssSUFBSSxPQUNaO0FBRUQ7O2lCQUFLLFNBQVMsT0FDZDttQkFDSDs7Ozs4Q0FFRztnQkFBSSxRQUNKO2dCQUFJLE9BQ0o7aUJBQUssR0FBRyxhQUNSO2lCQUFLLElBQUksaUJBQWlCLFdBQVUsVUFBVSxHQUMxQztzQkFBTSxLQUFLLE1BQUssR0FBRSxLQUNyQjtBQUNEO21CQUNIOzs7OzRDQUVHO2dCQUFJLE1BQU0sS0FBSyxVQUNmO2dCQUFJLFFBQVEsS0FBSyxVQUNqQjtnQkFBRyxRQUFPLHNEQUFRLFVBQ2Q7cUJBQUksSUFBSSxLQUFLLEtBQ1Q7eUJBQUssTUFBTSxHQUFFLElBQ2hCO0FBQ0Q7dUJBQ0g7QUFDRDtpQkFBSyxTQUFTLE9BQ2Q7aUJBQUssSUFBSSxNQUFNLE9BQ2Y7bUJBQ0g7Ozs7d0NBRUc7Z0JBQUksUUFBUSxLQUFLLFVBQ2pCO2lCQUFLLFlBQ0w7aUJBQUssSUFBSSxZQUNUO21CQUNIOzs7O3FDQUVHO21CQUFPLEtBQ1Y7Ozs7Z0RBRUc7Z0JBQUksWUFBWSxLQUFLLFVBQ3JCO2dCQUFJLFVBQVUsS0FBSyxXQUNuQjtvQkFBUSxLQUNSO2lCQUFLLElBQUksVUFBVSxJQUNuQjtpQkFBSyxVQUNMO21CQUNIOzs7OzBDQUVHO2dCQUFJLFdBQVcsVUFBVSxPQUN6QjtnQkFBSSxPQUFPLFVBQVUsVUFDckI7b0JBQ0k7cUJBQ0k7MkJBQU8sS0FBSyxXQUNoQjtxQkFDSTsyQkFBTyxLQUFLLGtCQUNoQjtBQUNJOzJCQUFPLEtBQUssWUFFdkI7Ozs7O3VDQUVHO2dCQUFJLGVBQWUsS0FDbkI7Z0JBQUksY0FDSjtpQkFBSSxJQUFJLElBQUksR0FBRyxJQUFFLGFBQWEsUUFBTyxLQUNqQztvQkFBSSxRQUFRLGFBQ1o7b0JBQUcsTUFBTSxPQUFPLElBQ1o7NkJBQ0E7QUFDSDtBQUNKO0FBQ0Q7bUJBQ0g7Ozs7cURBRUc7Z0JBQUksZUFBZSxLQUNuQjtnQkFBSSxhQUNKO2lCQUFJLElBQUksSUFBSSxHQUFHLElBQUUsYUFBYSxRQUFPLEtBQ2pDO29CQUFJLFFBQVEsYUFDWjtvQkFBRyxNQUFNLFFBQVEsUUFBUSxhQUFXLENBQUMsR0FDakM7K0JBQVcsS0FDZDtBQUNKO0FBQ0Q7bUJBQ0g7Ozs7MENBRUc7Z0JBQUksZUFBZSxLQUNuQjtnQkFBSSxhQUNKO2lCQUFJLElBQUksSUFBSSxHQUFHLElBQUUsYUFBYSxRQUFPLEtBQ2pDO29CQUFJLFFBQVEsYUFDWjtvQkFBRyxNQUFNLFFBQVEsTUFDYjsrQkFBVyxLQUNkO0FBQ0o7QUFDRDttQkFDSDs7Ozt1REFFRztnQkFBRyxjQUFZLGFBQWEsT0FBTyxjQUFjLFVBQzdDO3FCQUFLLFdBQVcsYUFDaEI7QUFDSDtBQUNEO2dCQUFJLFdBQVcsVUFBVSxPQUN6QjtnQkFBSSxPQUFPLFVBQVUsVUFDckI7Z0JBQUksY0FDSjtvQkFDSTtxQkFDSTt5QkFBSyxXQUFXLE1BQ2hCO0FBQ0o7cUJBQ0k7eUJBQUssa0JBQWtCLE1BQ3ZCO0FBQ0o7QUFDSTt5QkFBSyxZQUFZLFdBRTVCOzs7OztvREFFRztnQkFBSSxlQUFlLEtBQ25CO2lCQUFJLElBQUksSUFBSSxHQUFHLElBQUUsYUFBYSxRQUFPLEtBQ2pDO29CQUFJLFFBQVEsYUFDWjtvQkFBRyxNQUFNLE9BQU8sSUFDWjtpQ0FBYSxPQUFPLEdBQ3BCOzBCQUFNLE9BQU8sV0FDYjtBQUNBO0FBQ0g7QUFDSjtBQUNKOzs7O2tFQUVHO2dCQUFJLGVBQWUsS0FDbkI7aUJBQUksSUFBSSxJQUFJLEdBQUcsSUFBRSxhQUFhLFFBQU8sS0FDakM7b0JBQUksUUFBUSxhQUNaO29CQUFHLE1BQU0sUUFBUSxRQUFRLGFBQVcsQ0FBQyxHQUNqQztpQ0FBYSxPQUFPLEdBQ3BCOzBCQUFNLE9BQU8sV0FDYjtBQUNIO0FBQ0o7QUFDSjs7Ozt1REFFRztnQkFBSSxlQUFlLEtBQ25CO2lCQUFJLElBQUksSUFBSSxHQUFHLElBQUUsYUFBYSxRQUFPLEtBQ2pDO29CQUFJLFFBQVEsYUFDWjtvQkFBRyxNQUFNLFFBQVEsTUFDYjtpQ0FBYSxPQUFPLEdBQ3BCOzBCQUFNLE9BQU8sV0FDYjtBQUNIO0FBQ0o7QUFDSjs7OztnREFFRztBQUdBOzs7Z0JBQUksT0FDSjtpQkFDQTtnQkFBRyxhQUNDO3FCQUFLLDhCQUE4QixZQUMvQjt5QkFBSyxJQUNSO0FBRnVCLG1CQUczQjtBQUpELG1CQUtJO3FCQUFLLElBQ1I7QUFDRDtnQkFBRyxLQUFLLFFBQ0o7b0JBQUksZUFBZSxLQUFLLE9BQ3hCO3FCQUFJLElBQUksSUFBSSxHQUFHLElBQUUsYUFBYSxRQUFPLEtBQ2pDO3dCQUFJLFFBQVEsYUFDWjt3QkFBRyxVQUFVLE1BQ1Q7cUNBQWEsT0FBTyxHQUN2QjtBQUNKO0FBQ0o7QUFDRDtBQUdIOzs7Ozs7b0NBRUc7aUJBQUssV0FDTDtnQkFBRyxLQUFLLGtCQUNKOzZCQUFhLEtBQ2hCO0FBRUQ7O2lCQUFLLGVBQWUsUUFBUSxVQUFVLFlBQ2xDOzJCQUNIO0FBRUQ7O2lCQUFLLGFBQWEsUUFBUSxVQUFVLE9BQ2hDO3NCQUNIO0FBRUQ7O2dCQUFHLEtBQUssVUFBVSxXQUNkO3FCQUFLLFVBQVUsVUFBVSxLQUM1QjtBQUNKOzs7O3NDQUVHO2lCQUFLLFdBRUw7O2lCQUFLLGVBQWUsUUFBUSxVQUFVLFlBQ2xDOzJCQUNIO0FBRUQ7O2lCQUFLLGFBQWEsUUFBUSxVQUFVLE9BQ2hDO3NCQUNIO0FBRUQ7O2dCQUFHLEtBQUssVUFBVSxhQUNkO3FCQUFLLFVBQVUsWUFBWSxLQUM5QjtBQUNKOzs7OzBDQUVHO2dCQUFJLFFBQ0o7Z0JBQUcsT0FBTyxVQUFVLFlBQ2hCO3VCQUFPLE1BQU0sS0FBSyxNQUFLLEtBQzFCO0FBRkQsbUJBR0k7dUJBQ0g7QUFDSjs7Ozs7OztBQUVMLElBQUk7bUJBQ2UsdUJBQVUsTUFBTSxLQUFLLE9BQ2hDO2VBQU8sSUFBSSxTQUFTLE1BQU0sS0FDN0I7QUFIVztBQUNaOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdFRKLElBQU0sWUFBWTs7K0JBRWQ7MEJBQVksWUFBVyxVQUFTOzhCQUM1Qjs7WUFBSSxVQUFVLFlBQ2Q7YUFBSyxLQUNMO2FBQUssWUFDUjs7Ozs7c0NBRUc7bUJBQU8sS0FDUDtpQkFBSyxRQUNMO2lCQUFLLGNBQ0w7aUJBQUsscUJBQ0w7QUFDSDs7OztnQ0FFRztnQkFBSSxPQUNKO2lCQUFLLGlCQUFpQixLQUN0Qjt1QkFBVyxLQUFLLFFBQVEsS0FBSyxPQUNoQzs7OzttREFFRztnQkFBSSxhQUFhLElBQUksUUFBUSxNQUM3QjtnQkFBSSxPQUNKO3VCQUFXLFNBQVEsWUFDZjtvQkFBRyxXQUFXLFNBQU8sR0FDakI7K0JBQVcsV0FBVyxLQUFLLFlBQVksU0FDMUM7QUFFRDs7cUJBQUssWUFBWSxLQUNqQjt1QkFDSDtBQUNEO3VCQUFXLFNBQVEsWUFDZjtvQkFBSSxRQUFTLEtBQUssWUFBWSxRQUM5QjtxQkFBSyxZQUFZLE9BQU8sT0FDM0I7QUFDRDttQkFDSDs7OzswQ0FFRzttQkFBTyxLQUNWOzs7O2tDQUVHO2dCQUFJLGNBQWMsS0FDbEI7Z0JBQUksT0FBTzs7eUNBRVA7b0JBQUksVUFBVSxZQUNkO29CQUNJO3dCQUFHLFFBQVEsYUFDUDtnQ0FDQTttQ0FBVyxZQUNQO2dDQUFJLFlBQVksS0FDaEI7b0NBQ0E7aUNBQUssa0JBQWtCLEtBQUssUUFDNUI7Z0NBQUcsS0FBSyxxQkFBbUIsS0FBSyxpQkFDNUI7cUNBQUsscUJBQW1CLEtBQzNCO0FBQ0Q7Z0NBQUcsS0FBSyxrQkFBZ0IsS0FDcEI7d0NBQVEsS0FBSyxhQUFhLFFBQVEsT0FBTyw2QkFBMkIsS0FBSyxrQkFDNUU7QUFDRDtvQ0FDSDtBQVhELDJCQVdFLFFBQ0w7QUFDSjtBQWhCRCxrQkFnQkMsT0FBTyxHQUNKO0FBQ0g7QUF2QkE7QUFHTDs7aUJBQUksSUFBSSxJQUFFLEdBQUUsSUFBRSxZQUFZLFFBQU8sS0FBSTtBQXFCcEM7QUFDRDtpQkFDQTtnQkFBRyxLQUFLLFVBQVUsV0FDZDtxQkFBSyxRQUNMO3FCQUFLLGdCQUFnQixLQUFLLFFBQVEsS0FDbEM7cUJBQUssY0FBYyxLQUFLLE1BQU0sT0FBTyxLQUN4QztBQUNEO2lCQUNIOzs7Ozs7OzBCQUdEO3FCQUFZLE1BQUssT0FBTTs4QkFDbkI7O2FBQUssT0FDTDthQUFLLFFBQVEsU0FDYjthQUFLLE9BQ0w7WUFBSSxPQUNKO2FBQUssU0FBUyxZQUNWO2lCQUFLLFlBQ1I7QUFDRDthQUFLLFVBQ0w7YUFBSyxTQUFTLENBQ2pCOzs7OzsrQkFFRztnQkFBRyxLQUFLLFNBQU8sR0FBRSxLQUNqQjtpQkFBSyxZQUNSOzs7O2lDQUVHO2dCQUFHLEtBQUssV0FBUyxHQUNiO3FCQUNIO0FBQ0Q7aUJBQUssWUFDUjs7Ozt5Q0FFRztpQkFBSyxPQUNMO2dCQUFHLFFBQU0sUUFDTDtxQkFBSyxhQUNSO0FBQ0Q7bUJBQ0g7Ozs7dUNBRUc7aUJBQUssVUFBVSxLQUNsQjs7OztvQ0FFRztnQkFBRyxLQUFLLFVBQVEsR0FDWjtxQkFDSDtBQUVEOzttQkFBTyxFQUFFLEtBQUssY0FBYyxRQUFRLEtBQUssVUFDNUM7Ozs7Ozs7QUFHTCxJQUFNLGdCQUFnQixJQUFJOzs7Ozs7Ozs7Ozs7Ozs7QUNsSDFCOzs7Ozs7OztBQUVBLElBQUksZUFBZSxlQUFLLGVBQWUsZ0IiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgQ3ViWV9Db3JlIGZyb20gJy4vQ3ViWV9Db3JlJztcclxuaW1wb3J0IEN1YllfRE9NIGZyb20gJy4vQ3ViWV9ET00nO1xyXG5pbXBvcnQgQ3ViWV9Sb3V0aW5lIGZyb20gJy4vQ3ViWV9Sb3V0aW5lJztcclxuaW1wb3J0IEN1YllfUGlwZWxpbmUgZnJvbSAnLi9DdWJZX1BpcGVsaW5lJztcclxuY29uc3QgRU1QVFlfRlVOQ1RJT04gPSAoKT0+e307XHJcblxyXG52YXIgQ3ViWSA9IHtcclxuXHJcbiAgICAvL0NvcmVcclxuICAgIGdldFZhbHVlOiBDdWJZX0NvcmUuZ2V0VmFsdWUuYmluZChDdWJZX0NvcmUpLFxyXG4gICAgZ2V0QnJvd3NlcjogQ3ViWV9Db3JlLmdldEJyb3dzZXIuYmluZChDdWJZX0NvcmUpLFxyXG4gICAgc3RvcmVEYXRhQXJyYXk6IEN1YllfQ29yZS5zdG9yZURhdGFBcnJheS5iaW5kKEN1YllfQ29yZSksXHJcbiAgICBzdG9yZVZhbHVlOiBDdWJZX0NvcmUuc3RvcmVWYWx1ZS5iaW5kKEN1YllfQ29yZSksXHJcbiAgICBjb25uZWN0OiBDdWJZX0NvcmUuY29ubmVjdC5iaW5kKEN1YllfQ29yZSksXHJcbiAgICByZWFjdDogQ3ViWV9Db3JlLnJlYWN0LmJpbmQoQ3ViWV9Db3JlKSxcclxuICAgIGRlYnVnOiBDdWJZX0NvcmUuZGVidWcuYmluZChDdWJZX0NvcmUpLFxyXG4gICAgcmVhZFZhbHVlOiBDdWJZX0NvcmUucmVhZFZhbHVlLmJpbmQoQ3ViWV9Db3JlKSxcclxuICAgIGlzT2JqZWN0RW1wdHk6IEN1YllfQ29yZS5pc09iamVjdEVtcHR5LmJpbmQoQ3ViWV9Db3JlKSxcclxuXHJcbiAgICAvL0RPTVxyXG4gICAgY3JlYXRlRWxlbWVudDogQ3ViWV9ET00uY3JlYXRlRWxlbWVudCxcclxuXHJcbiAgICAvL1BpcGVsaW5lXHJcbiAgICBjcmVhdGVQaXBlbGluZTogQ3ViWV9QaXBlbGluZS5jcmVhdGVQaXBlbGluZSxcclxuICAgIC8vUm91dGluZVxyXG4gICAgY3JlYXRlUm91dGluZTpDdWJZX1JvdXRpbmUuY3JlYXRlUm91dGluZS5iaW5kKEN1YllfUm91dGluZSksXHJcbiAgICBnZXRDdXJyZW50Q3ljbGU6Q3ViWV9Sb3V0aW5lLmdldEN1cnJlbnRDeWNsZS5iaW5kKEN1YllfUm91dGluZSksXHJcbiAgICByb3V0aW5lOkN1YllfUm91dGluZS5yb3V0aW5lLmJpbmQoQ3ViWV9Sb3V0aW5lKSxcclxuICAgIC8vQWRkT25zXHJcbiAgICBhZGRPbjogZnVuY3Rpb24gKG9iaikge1xyXG4gICAgICBmb3IodmFyIGtleSBpbiBvYmope1xyXG4gICAgICAgICAgaWYob2JqLmhhc093blByb3BlcnR5KGtleSkpe1xyXG4gICAgICAgICAgICAgIEN1Yllba2V5XSA9IG9ialtrZXldO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy9PdGhlclxyXG4gICAgdmVyc2lvbjogJzAuNmIuMC4xMCcsXHJcbiAgICBkZWJ1Z0luZm86IFtDdWJZX0NvcmUsQ3ViWV9Sb3V0aW5lXVxyXG59O1xyXG5cclxud2luZG93LkN1YlkgPSBDdWJZO1xyXG5leHBvcnQgZGVmYXVsdCBDdWJZO1xyXG4iLCJjb25zdCBFTVBUWV9GVU5DVElPTiA9ICgpPT57fTtcclxuY2xhc3MgQ3ViWV9Db3Jle1xyXG4gICAgY29uc3RydWN0b3IoX3Byb3BzKXtcclxuICAgICAgICBsZXQgcHJvcHMgPSBwcm9wcyB8fCB7fTtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5pbml0KHByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KF9wcm9wcyl7XHJcbiAgICAgICAgbGV0IHByb3BzID0gX3Byb3BzIHx8IHt9O1xyXG4gICAgICAgIHRoaXMuZGF0YU1hcCA9IHt9O1xyXG4gICAgICAgIHRoaXMuY29ubmVjdGlvbk1hcCA9IHt9O1xyXG4gICAgICAgIHRoaXMuYnJvd3NlciA9IHRoaXMuZ2V0QnJvd3NlcigpO1xyXG4gICAgICAgIHdpbmRvdy5jYyA9IHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QnJvd3Nlcigpe1xyXG4gICAgICAgIGxldCBpc0lFID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IGlzQ2hyb21lID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IGlzT3BlcmEgPSBmYWxzZTtcclxuICAgICAgICBpZigoISF3aW5kb3cub3ByICYmICEhb3ByLmFkZG9ucykgfHwgISF3aW5kb3cub3BlcmEgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCcgT1BSLycpID49IDApe1xyXG4gICAgICAgICAgICBpc09wZXJhID0gdHJ1ZTtcclxuICAgICAgICAgICAgcmV0dXJuICdvcGVyYSc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHR5cGVvZiBJbnN0YWxsVHJpZ2dlciAhPT0gJ3VuZGVmaW5lZCcpe1xyXG4gICAgICAgICAgICByZXR1cm4gJ2ZpcmVmb3gnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZigvY29uc3RydWN0b3IvaS50ZXN0KHdpbmRvdy5IVE1MRWxlbWVudCkgfHwgKGZ1bmN0aW9uIChwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcC50b1N0cmluZygpID09PSBcIltvYmplY3QgU2FmYXJpUmVtb3RlTm90aWZpY2F0aW9uXVwiO1xyXG4gICAgICAgICAgICB9KSghd2luZG93WydzYWZhcmknXSB8fCBzYWZhcmkucHVzaE5vdGlmaWNhdGlvbikpe1xyXG4gICAgICAgICAgICByZXR1cm4gJ3NhZmFyaSc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGZhbHNlIHx8ICEhZG9jdW1lbnQuZG9jdW1lbnRNb2RlKXtcclxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBvdXRwdXQgPSBhcmd1bWVudHNbMF07XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBhcmd1bWVudHNbaV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9iaiA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0W2tleV0gPSBvYmpba2V5XTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb3V0cHV0O1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBpc0lFID10cnVlO1xyXG4gICAgICAgICAgICByZXR1cm4gJ2llJztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoIWlzSUUgJiYgISF3aW5kb3cuU3R5bGVNZWRpYSl7XHJcbiAgICAgICAgICAgIHJldHVybiAnZWRnZSc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCEhd2luZG93LmNocm9tZSAmJiAhIXdpbmRvdy5jaHJvbWUud2Vic3RvcmUpe1xyXG4gICAgICAgICAgICBpc0Nocm9tZSA9IHRydWVcclxuICAgICAgICAgICAgcmV0dXJuICdjaHJvbWUnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZigoaXNDaHJvbWUgfHwgaXNPcGVyYSkgJiYgISF3aW5kb3cuQ1NTKXtcclxuICAgICAgICAgICAgcmV0dXJuICdibGluayc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0b3JlRGF0YUFycmF5KF9hcnJheSwgX2lkS2V5LCBfb3B0aW9ucywgX2NhbGxiYWNrKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHZhciBvcHRpb25zID0gX29wdGlvbnMgfHwge307XHJcbiAgICAgICAgdmFyIGlkS2V5ID0gX2lkS2V5IHx8ICdpZCc7XHJcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gX2NhbGxiYWNrIHx8IEVNUFRZX0ZVTkNUSU9OO1xyXG4gICAgICAgIHZhciBhcnJheSA9IF9hcnJheSB8fCBbXTtcclxuICAgICAgICB2YXIgaXRlbUxpc3QgPSBbXTtcclxuICAgICAgICB2YXIgaXRlbVByb2Nlc3NvciA9IG9wdGlvbnMuaXRlbVByb2Nlc3NvciB8fCBFTVBUWV9GVU5DVElPTjtcclxuXHJcbiAgICAgICAgYXJyYXkuZm9yRWFjaChmdW5jdGlvbiAoX2l0ZW0pIHtcclxuICAgICAgICAgICAgdmFyIGtleSA9IF9pdGVtW2lkS2V5XTtcclxuICAgICAgICAgICAgaWYgKGtleSA9PT0gdW5kZWZpbmVkIHx8IHNlbGYucmVhZFZhbHVlKG9wdGlvbnMuc2tpcEZ1biwgX2l0ZW0pKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBpdGVtID0gc2VsZi5zdG9yZVZhbHVlKGtleSwgX2l0ZW0sIF9vcHRpb25zKTtcclxuXHJcbiAgICAgICAgICAgIGl0ZW1Qcm9jZXNzb3IoaXRlbSk7XHJcbiAgICAgICAgICAgIGl0ZW1MaXN0LnB1c2goaXRlbSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNhbGxiYWNrKF9hcnJheSwgaXRlbUxpc3QpO1xyXG4gICAgICAgIHJldHVybiBpdGVtTGlzdDtcclxuICAgIH07XHJcblxyXG4gICAgc3RvcmVWYWx1ZShfa2V5LCBfdmFsdWUsIF9vcHRpb25zKSB7XHJcbiAgICAgICAgdmFyIG9wdGlvbnMgPSBfb3B0aW9ucyB8fCB7fTtcclxuICAgICAgICB2YXIgc3RvcmUgPSB0aGlzW29wdGlvbnMuc3RvcmVdIHx8IHRoaXMuZGF0YU1hcDtcclxuICAgICAgICB2YXIga2V5ID0gX2tleTtcclxuICAgICAgICB2YXIgbmV3VmFsdWUgPSBfdmFsdWU7XHJcbiAgICAgICAgdmFyIGl0ZW0gPSBzdG9yZVtrZXldO1xyXG4gICAgICAgIHZhciBzaG91bGRSZWFjdCA9IHRydWU7XHJcbiAgICAgICAgaWYoaXRlbSE9PXVuZGVmaW5lZCAmJiBpdGVtID09PSBPYmplY3QoaXRlbSkgJiYgb3B0aW9ucy5vdmVyd3JpdGUhPT10cnVlKSB7XHJcbiAgICAgICAgICAgIGl0ZW0gPSBPYmplY3QuYXNzaWduKGl0ZW0sIG5ld1ZhbHVlKTtcclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIHNob3VsZFJlYWN0ID0gKGl0ZW0hPT1uZXdWYWx1ZSk7XHJcbiAgICAgICAgICAgIGl0ZW0gPSBuZXdWYWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5kYXRhTWFwW2tleV0gPSBpdGVtO1xyXG4gICAgICAgIGlmKHNob3VsZFJlYWN0IHx8IG9wdGlvbnMuZm9yY2VSZWFjdCkge1xyXG4gICAgICAgICAgICB0aGlzLnJlYWN0KGtleSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgfTtcclxuICAgIGdldFZhbHVlKF9rZXksIG9wdGlvbnMgPSB7fSkge1xyXG4gICAgICAgIHZhciBrZXkgPSBfa2V5IHx8ICcnO1xyXG4gICAgICAgIGxldCBzdG9yZSA9IG9wdGlvbnMuc3RvcmUgfHwgJ2RhdGFNYXAnXHJcbiAgICAgICAgaWYob3B0aW9ucy5jYXNlU2Vuc2l0aXZlIT09ZmFsc2Upe1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpc1tzdG9yZV07XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGZvcih2YXIgSyBpbiB0aGlzW3N0b3JlXSl7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzW3N0b3JlXS5oYXNPd25Qcm9wZXJ0eShLKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoSy50b0xvd2VyQ2FzZSgpPT09a2V5LnRvTG93ZXJDYXNlKCkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpc1tzdG9yZV1bS107XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG4gICAgY29ubmVjdChfa2V5KXtcclxuICAgICAgICBsZXQgbmV3Q29uZWN0b3IgPSBuZXcgQ3ViWV9Db25uZWN0b3IoX2tleSwgdGhpcyk7XHJcbiAgICAgICAgcmV0dXJuIG5ld0NvbmVjdG9yO1xyXG4gICAgfVxyXG4gICAgcmVhY3Qoa2V5KXtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdmFyIGNvbm5lY3Rpb25NYXAgPSB0aGlzLmNvbm5lY3Rpb25NYXA7XHJcbiAgICAgICAgdmFyIGNvbm5lY3Rvck1hcCA9IGNvbm5lY3Rpb25NYXBba2V5XSB8fCB7fTtcclxuICAgICAgICB2YXIgbmV3VmFsdWUgPSBzZWxmLmdldFZhbHVlKGtleSk7XHJcbiAgICAgICAgZm9yKHZhciBpZCBpbiBjb25uZWN0b3JNYXApe1xyXG4gICAgICAgICAgICBpZihjb25uZWN0b3JNYXAuaGFzT3duUHJvcGVydHkoaWQpKXtcclxuICAgICAgICAgICAgICAgIGNvbm5lY3Rvck1hcFtpZF0ucnVuKG5ld1ZhbHVlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVhZFZhbHVlKF92YWx1ZSwgZGF0YSl7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gX3ZhbHVlO1xyXG4gICAgICAgIGlmKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiKXtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLmNhbGwodGhpcyxkYXRhKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlzT2JqZWN0RW1wdHkob2JqKXtcclxuICAgICAgICBpZighb2JqKXtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yKHZhciBrZXkgaW4gb2JqKXtcclxuICAgICAgICAgICAgaWYob2JqLmhhc093blByb3BlcnR5KGtleSkpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGRlYnVnKHN0cikge1xyXG4gICAgICAgIGlmKHRoaXMuZ2V0VmFsdWUoJ0RFQlVHX01PREUnKSl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdERUJVRzogJyArIHN0cik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5jb25zdCBfQ3ViWV9Db3JlID0gbmV3IEN1YllfQ29yZSgpO1xyXG5leHBvcnQgZGVmYXVsdCBfQ3ViWV9Db3JlO1xyXG5cclxuY2xhc3MgQ3ViWV9Db25uZWN0b3J7XHJcbiAgICBjb25zdHJ1Y3RvcihrZXksIGNvcmUpe1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLmlkID0gICdjb25uZWN0b3JfJyArIE1hdGgucmFuZG9tKCkqMTAwMDAgKydfJytEYXRlLm5vdygpO1xyXG4gICAgICAgIHRoaXMuYmluZGluZ0tleSA9IGtleTtcclxuXHJcbiAgICAgICAgdGhpcy5pbnNlcnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBjb25uZWN0b3JNYXAgPSBjb3JlLmNvbm5lY3Rpb25NYXBbc2VsZi5iaW5kaW5nS2V5XSB8fCB7fTtcclxuICAgICAgICAgICAgY29ubmVjdG9yTWFwW3NlbGYuaWRdID0gc2VsZjtcclxuICAgICAgICAgICAgY29yZS5jb25uZWN0aW9uTWFwW3NlbGYuYmluZGluZ0tleV0gPSBjb25uZWN0b3JNYXA7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGlmKGNvcmUuY29ubmVjdGlvbk1hcFtzZWxmLmJpbmRpbmdLZXldKXtcclxuICAgICAgICAgICAgICAgICAgICBpZihjb3JlLmNvbm5lY3Rpb25NYXBbc2VsZi5iaW5kaW5nS2V5XVtzZWxmLmlkXSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBjb3JlLmNvbm5lY3Rpb25NYXBbc2VsZi5iaW5kaW5nS2V5XVtzZWxmLmlkXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEN1YlkuaXNPYmplY3RFbXB0eShjb3JlLmNvbm5lY3Rpb25NYXBbc2VsZi5iaW5kaW5nS2V5XSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGNvcmUuY29ubmVjdGlvbk1hcFtzZWxmLmJpbmRpbmdLZXldO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfWNhdGNoIChlKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignW1dhcm5pbmddOiBDb25uZWN0b3IgcmVtb3ZlIG1ldGhvZCByZWZlcmVuY2UgZXJyb3IuJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5pbnNlcnQoKTtcclxuICAgIH1cclxuICAgIHRvKGFjdGlvbil7XHJcbiAgICAgICAgdGhpcy5hY3Rpb24gPSBhY3Rpb247XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBiZWxvbmcob3duZXIpe1xyXG4gICAgICAgIHRoaXMub3duZXIgPSBvd25lcjtcclxuICAgICAgICBvd25lci5jb25uZWN0aW9uTGlzdC5wdXNoKHRoaXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgcnVuKG5ld1ZhbHVlKXtcclxuICAgICAgICBpZih0eXBlb2YgdGhpcy5hY3Rpb24gPT09ICdmdW5jdGlvbicpe1xyXG4gICAgICAgICAgICBpZih0aGlzLm93bmVyKXtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMub3duZXIuaXNBY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbi5jYWxsKHRoaXMub3duZXIsIG5ld1ZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hY3Rpb24obmV3VmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFueGluIFlhbmcgb24gNS8yNi8yMDE4LlxyXG4gKi9cclxuY2xhc3MgQ3ViWV9ET00ge1xyXG4gICAgY29uc3RydWN0b3IoX3RhZyxfaWQsX3Jvb3QpIHtcclxuICAgICAgICB0aGlzLnRhZyA9IHRoaXMucmVhZFZhbHVlKF90YWcpIHx8ICdkaXYnO1xyXG4gICAgICAgIHRoaXMuaWQgPSB0aGlzLnJlYWRWYWx1ZShfaWQpfHwgdGhpcy50YWcgKyAnXycgKyBNYXRoLnJhbmRvbSgpKjEwMDAwKydfJytEYXRlLm5vdygpO1xyXG4gICAgICAgIHRoaXMuZG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0aGlzLnRhZyk7XHJcbiAgICAgICAgdGhpcy5kb20uc2V0QXR0cmlidXRlKCdpZCcsdGhpcy5pZCk7XHJcbiAgICAgICAgdGhpcy5jaGlsZHJlbkxpc3QgPSBbXTtcclxuICAgICAgICB0aGlzLmF0dHJpYnV0ZSA9IHt9O1xyXG4gICAgICAgIHRoaXMucHJvcGVydHkgPSB7fTtcclxuICAgICAgICB0aGlzLmRvbVN0eWxlID0ge307XHJcbiAgICAgICAgdGhpcy51cGRhdGVycyA9IHt9O1xyXG4gICAgICAgIHRoaXMuY29ubmVjdGlvbkxpc3QgPSBbXTtcclxuICAgICAgICB0aGlzLnBhcmVudDtcclxuICAgICAgICB0aGlzLmNsYXNzZXMgPSBbXTtcclxuICAgICAgICB0aGlzLnJvb3QoX3Jvb3QpO1xyXG5cclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy51cGRhdGVyID0gZnVuY3Rpb24gKG5hbWUpIHtcclxuICAgICAgICAgICAgbGV0IHVwZGF0ZXIgPXRoaXMudXBkYXRlcnNbbmFtZV07XHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZih1cGRhdGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlci5jYWxsKHNlbGYsIHNlbGYuZGF0YSwgYXJndW1lbnRzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBzZXRVcGRhdGVyKG5hbWUsdXBkYXRlcil7XHJcbiAgICAgICAgdGhpcy51cGRhdGVyc1tuYW1lXSA9IHVwZGF0ZXI7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBiaW5kKGRhdGEpe1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICByb290KF9yb290KXtcclxuICAgICAgICBpZihfcm9vdCl7XHJcbiAgICAgICAgICAgIF9yb290LmFwcGVuZENoaWxkKHRoaXMuZG9tKTtcclxuICAgICAgICAgICAgdGhpcy5pc1Jvb3QgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmFjdGl2YXRlZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIGFwcGVuZChfdGFnLF9pZCl7XHJcbiAgICAgICAgbGV0IHRhZyA9IHRoaXMucmVhZFZhbHVlKF90YWcpO1xyXG4gICAgICAgIGxldCBpZCA9IHRoaXMucmVhZFZhbHVlKF9pZCk7XHJcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBDdWJZLmNyZWF0ZUVsZW1lbnQodGFnLGlkKTtcclxuICAgICAgICB0aGlzLmFwcGVuZEVsZW1lbnQoZWxlbWVudCk7XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgICBhcHBlbmRFbGVtZW50KEN1YllfRE9NKXtcclxuICAgICAgICBsZXQgZWxlbWVudCA9IHRoaXMucmVhZFZhbHVlKEN1YllfRE9NKTtcclxuICAgICAgICBlbGVtZW50LnBhcmVudCA9IHRoaXM7XHJcblxyXG4gICAgICAgIHRoaXMuY2hpbGRyZW5MaXN0LnB1c2goZWxlbWVudCk7XHJcbiAgICAgICAgdGhpcy5kb20uYXBwZW5kQ2hpbGQoZWxlbWVudC5kb20pO1xyXG4gICAgICAgIGlmKHRoaXMuaXNBY3RpdmUgfHwgdGhpcy5pc1Jvb3QpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5hY3RpdmF0ZWQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgICBhdHRyKGtleSxfdmFsdWUpe1xyXG4gICAgICAgIGxldCB2YWx1ZTtcclxuXHJcbiAgICAgICAgaWYodHlwZW9mIGtleSA9PT0gJ29iamVjdCcpe1xyXG4gICAgICAgICAgICBmb3IodmFyIGsgaW4ga2V5KXtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXR0cihrLGtleVtrXSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKGtleSA9PT0nYWN0aXZhdGVkJyB8fCBrZXkgPT09ICdkZWFjdGl2YXRlZCcpe1xyXG4gICAgICAgICAgICB2YWx1ZSA9IF92YWx1ZTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdmFsdWUgPSB0aGlzLnJlYWRWYWx1ZShfdmFsdWUpO1xyXG4gICAgICAgICAgICB0aGlzLmRvbS5zZXRBdHRyaWJ1dGUoa2V5LHZhbHVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuYXR0cmlidXRlW2tleV0gPSB2YWx1ZTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIHByb3Aoa2V5LF92YWx1ZSl7XHJcbiAgICAgICAgbGV0IHZhbHVlO1xyXG5cclxuICAgICAgICBpZih0eXBlb2Yga2V5ID09PSAnb2JqZWN0Jyl7XHJcbiAgICAgICAgICAgIGZvcih2YXIgayBpbiBrZXkpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wKGssa2V5W2tdKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoa2V5ID09PSdhY3RpdmF0ZWQnIHx8IGtleSA9PT0gJ2RlYWN0aXZhdGVkJyl7XHJcbiAgICAgICAgICAgIHZhbHVlID0gX3ZhbHVlO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMucmVhZFZhbHVlKF92YWx1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuZG9tW2tleV0gPSAgdmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnByb3BlcnR5W2tleV0gPSB2YWx1ZTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIG9uKGV2ZW50TmFtZSxfdmFsdWUpe1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IF92YWx1ZTtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5vbltldmVudE5hbWVdID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5kb20uYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgdmFsdWUuY2FsbChzZWxmLGUsc2VsZi5kYXRhKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgc3R5bGUoX2tleSxfdmFsdWUpe1xyXG4gICAgICAgIGxldCBrZXkgPSB0aGlzLnJlYWRWYWx1ZShfa2V5KTtcclxuICAgICAgICBsZXQgdmFsdWUgPSB0aGlzLnJlYWRWYWx1ZShfdmFsdWUpO1xyXG4gICAgICAgIGlmKHR5cGVvZiBrZXkgPT09ICdvYmplY3QnKXtcclxuICAgICAgICAgICAgZm9yKHZhciBrIGluIGtleSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0eWxlKGssa2V5W2tdKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRvbVN0eWxlW2tleV0gPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLmRvbS5zdHlsZVtrZXldID0gdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBjb250ZW50KF92YWx1ZSl7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gdGhpcy5yZWFkVmFsdWUoX3ZhbHVlKTtcclxuICAgICAgICB0aGlzLmlubmVyVGV4dCA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuZG9tLmlubmVyVGV4dCA9IHZhbHVlO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgZ2V0Q29udGVudCgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlubmVyVGV4dDtcclxuICAgIH1cclxuICAgIGFwcGVuZENsYXNzKF9jbGFzc05hbWUpe1xyXG4gICAgICAgIGxldCBjbGFzc05hbWUgPSB0aGlzLnJlYWRWYWx1ZShfY2xhc3NOYW1lKTtcclxuICAgICAgICBsZXQgY2xhc3NlcyA9IHRoaXMuY2xhc3NlcyB8fCBbXTtcclxuICAgICAgICBjbGFzc2VzLnB1c2goY2xhc3NOYW1lKTtcclxuICAgICAgICB0aGlzLmRvbS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcbiAgICAgICAgdGhpcy5jbGFzc2VzID0gY2xhc3NlcztcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIHNlbGVjdChfc2VsZWN0b3Ipe1xyXG4gICAgICAgIGxldCBzZWxlY3RvciA9IF9zZWxlY3Rvci5jaGFyQXQoMCk7XHJcbiAgICAgICAgbGV0IG5hbWUgPSBfc2VsZWN0b3Iuc3Vic3RyaW5nKDEpO1xyXG4gICAgICAgIHN3aXRjaCAoc2VsZWN0b3Ipe1xyXG4gICAgICAgICAgICBjYXNlICcjJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNlbGVjdEJ5SWQobmFtZSk7XHJcbiAgICAgICAgICAgIGNhc2UgJy4nOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0QnlDbGFzc05hbWUobmFtZSk7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RCeVRhZyhfc2VsZWN0b3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNlbGVjdEJ5SWQoaWQpe1xyXG4gICAgICAgIGxldCBjaGlsZHJlbkxpc3QgPSB0aGlzLmNoaWxkcmVuTGlzdDtcclxuICAgICAgICBsZXQgdGFyZ2V0O1xyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGk8Y2hpbGRyZW5MaXN0Lmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICBsZXQgY2hpbGQgPSBjaGlsZHJlbkxpc3RbaV07XHJcbiAgICAgICAgICAgIGlmKGNoaWxkLmlkID09PSBpZCl7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSBjaGlsZDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0YXJnZXQ7XHJcbiAgICB9XHJcbiAgICBzZWxlY3RCeUNsYXNzTmFtZShjbGFzc05hbWUpe1xyXG4gICAgICAgIGxldCBjaGlsZHJlbkxpc3QgPSB0aGlzLmNoaWxkcmVuTGlzdDtcclxuICAgICAgICBsZXQgdGFyZ2V0TGlzdCA9IFtdO1xyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGk8Y2hpbGRyZW5MaXN0Lmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICBsZXQgY2hpbGQgPSBjaGlsZHJlbkxpc3RbaV07XHJcbiAgICAgICAgICAgIGlmKGNoaWxkLmNsYXNzZXMuaW5kZXhPZihjbGFzc05hbWUpPi0xKXtcclxuICAgICAgICAgICAgICAgIHRhcmdldExpc3QucHVzaChjaGlsZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRhcmdldExpc3Q7XHJcbiAgICB9XHJcbiAgICBzZWxlY3RCeVRhZyhfdGFnKXtcclxuICAgICAgICBsZXQgY2hpbGRyZW5MaXN0ID0gdGhpcy5jaGlsZHJlbkxpc3Q7XHJcbiAgICAgICAgbGV0IHRhcmdldExpc3QgPSBbXTtcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpPGNoaWxkcmVuTGlzdC5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5MaXN0W2ldO1xyXG4gICAgICAgICAgICBpZihjaGlsZC50YWcgPT09IF90YWcpe1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0TGlzdC5wdXNoKGNoaWxkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGFyZ2V0TGlzdDtcclxuICAgIH1cclxuICAgIHJlbW92ZShfc2VsZWN0b3IsX3RyYW5zaXRpb24pe1xyXG4gICAgICAgIGlmKF9zZWxlY3Rvcj09PXVuZGVmaW5lZCB8fCB0eXBlb2YgX3NlbGVjdG9yID09PSAnbnVtYmVyJyl7XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlU2VsZihfc2VsZWN0b3IgfHwgX3RyYW5zaXRpb24pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBzZWxlY3RvciA9IF9zZWxlY3Rvci5jaGFyQXQoMCk7XHJcbiAgICAgICAgbGV0IG5hbWUgPSBfc2VsZWN0b3Iuc3Vic3RyaW5nKDEpO1xyXG4gICAgICAgIGxldCB0YXJnZXQ7XHJcbiAgICAgICAgc3dpdGNoIChzZWxlY3Rvcil7XHJcbiAgICAgICAgICAgIGNhc2UgJyMnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVCeUlkKG5hbWUsX3RyYW5zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJy4nOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVCeUNsYXNzTmFtZShuYW1lLF90cmFuc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVCeVRhZyhfc2VsZWN0b3IsX3RyYW5zaXRpb24pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlbW92ZUJ5SWQoaWQsX3RyYW5zaXRpb24pe1xyXG4gICAgICAgIGxldCBjaGlsZHJlbkxpc3QgPSB0aGlzLmNoaWxkcmVuTGlzdDtcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpPGNoaWxkcmVuTGlzdC5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5MaXN0W2ldO1xyXG4gICAgICAgICAgICBpZihjaGlsZC5pZCA9PT0gaWQpe1xyXG4gICAgICAgICAgICAgICAgY2hpbGRyZW5MaXN0LnNwbGljZShpLDEpO1xyXG4gICAgICAgICAgICAgICAgY2hpbGQucmVtb3ZlKHVuZGVmaW5lZCxfdHJhbnNpdGlvbik7XHJcbiAgICAgICAgICAgICAgICBpLS07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlbW92ZUJ5Q2xhc3NOYW1lKGNsYXNzTmFtZSxfdHJhbnNpdGlvbil7XHJcbiAgICAgICAgbGV0IGNoaWxkcmVuTGlzdCA9IHRoaXMuY2hpbGRyZW5MaXN0O1xyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGk8Y2hpbGRyZW5MaXN0Lmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICBsZXQgY2hpbGQgPSBjaGlsZHJlbkxpc3RbaV07XHJcbiAgICAgICAgICAgIGlmKGNoaWxkLmNsYXNzZXMuaW5kZXhPZihjbGFzc05hbWUpPi0xKXtcclxuICAgICAgICAgICAgICAgIGNoaWxkcmVuTGlzdC5zcGxpY2UoaSwxKTtcclxuICAgICAgICAgICAgICAgIGNoaWxkLnJlbW92ZSh1bmRlZmluZWQsX3RyYW5zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgaS0tO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVtb3ZlQnlUYWcoX3RhZyxfdHJhbnNpdGlvbil7XHJcbiAgICAgICAgbGV0IGNoaWxkcmVuTGlzdCA9IHRoaXMuY2hpbGRyZW5MaXN0O1xyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGk8Y2hpbGRyZW5MaXN0Lmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICBsZXQgY2hpbGQgPSBjaGlsZHJlbkxpc3RbaV07XHJcbiAgICAgICAgICAgIGlmKGNoaWxkLnRhZyA9PT0gX3RhZyl7XHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlbkxpc3Quc3BsaWNlKGksMSk7XHJcbiAgICAgICAgICAgICAgICBjaGlsZC5yZW1vdmUodW5kZWZpbmVkLF90cmFuc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgIGktLTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlbW92ZVNlbGYoX3RyYW5zaXRpb24pe1xyXG4gICAgICAgIC8qdGhpcy5jaGlsZHJlbkxpc3QuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgICAgICAgICAgY2hpbGQucmVtb3ZlKCk7XHJcbiAgICAgICAgfSk7Ki9cclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5kZWFjdGl2YXRlZCgpO1xyXG4gICAgICAgIGlmKF90cmFuc2l0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVhY3RpdmF0ZWRUaW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5kb20ucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIH0sX3RyYW5zaXRpb24pXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHNlbGYuZG9tLnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLnBhcmVudCl7XHJcbiAgICAgICAgICAgIGxldCBjaGlsZHJlbkxpc3QgPSB0aGlzLnBhcmVudC5jaGlsZHJlbkxpc3Q7XHJcbiAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGk8Y2hpbGRyZW5MaXN0Lmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5MaXN0W2ldO1xyXG4gICAgICAgICAgICAgICAgaWYoY2hpbGQgPT09IHRoaXMpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuTGlzdC5zcGxpY2UoaSwxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvKmZvcih2YXIga2V5IGluIHRoaXMpe1xyXG4gICAgICAgICAgICBkZWxldGUgdGhpc1trZXldXHJcbiAgICAgICAgfSovXHJcbiAgICB9XHJcbiAgICBhY3RpdmF0ZWQoKXtcclxuICAgICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBpZih0aGlzLmRlYWN0aXZhdGVkVGltZXIpe1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5kZWFjdGl2YXRlZFRpbWVyKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uTGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChjb25uZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIGNvbm5lY3Rpb24uaW5zZXJ0KCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuY2hpbGRyZW5MaXN0LmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgICAgICAgIGNoaWxkLmFjdGl2YXRlZCgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZih0aGlzLmF0dHJpYnV0ZS5hY3RpdmF0ZWQpe1xyXG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZS5hY3RpdmF0ZWQuY2FsbCh0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBkZWFjdGl2YXRlZCgpe1xyXG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uTGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChjb25uZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIGNvbm5lY3Rpb24ucmVtb3ZlKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuY2hpbGRyZW5MaXN0LmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgICAgICAgIGNoaWxkLmRlYWN0aXZhdGVkKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmKHRoaXMuYXR0cmlidXRlLmRlYWN0aXZhdGVkKXtcclxuICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGUuZGVhY3RpdmF0ZWQuY2FsbCh0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZWFkVmFsdWUoX3ZhbHVlKXtcclxuICAgICAgICBsZXQgdmFsdWUgPSBfdmFsdWU7XHJcbiAgICAgICAgaWYodHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIpe1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWUuY2FsbCh0aGlzLHRoaXMuZGF0YSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxudmFyIF9DdWJZX0RPTSA9IHtcclxuICAgIGNyZWF0ZUVsZW1lbnQ6IGZ1bmN0aW9uIChfdGFnLCBfaWQsIF9yb290KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDdWJZX0RPTShfdGFnLCBfaWQsIF9yb290KVxyXG4gICAgfVxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBfQ3ViWV9ET00iLCJjb25zdCBNQVhfQ1lDTEUgPSAxMDA7XHJcbmNsYXNzIEN1YllfUm91dGluZXtcclxuICAgIGNvbnN0cnVjdG9yKF90aWNrU3BlZWQsX29wdGlvbnMpe1xyXG4gICAgICAgIGxldCBvcHRpb25zID0gX29wdGlvbnMgfHwge307XHJcbiAgICAgICAgdGhpcy5pbml0KG9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMuTUFYX0NZQ0xFID0gTUFYX0NZQ0xFO1xyXG4gICAgfVxyXG4gICAgaW5pdChvcHRpb25zKXtcclxuICAgICAgICB3aW5kb3cuY3IgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuY3ljbGUgPSAwO1xyXG4gICAgICAgIHRoaXMucm91dGluZUxpc3QgPSBbXTtcclxuICAgICAgICB0aGlzLmxvbmdlc3RSb3V0aW5lVGltZSA9MDtcclxuICAgICAgICAvL3NldFRpbWVvdXQodGhpcy5zdGFydC5iaW5kKHRoaXMpLDApO1xyXG4gICAgfTtcclxuICAgIHN0YXJ0KCl7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuY3ljbGVTdGFydFRpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoc2VsZi5yb3V0aW5lLmJpbmQodGhpcyksMCk7XHJcbiAgICB9XHJcbiAgICBjcmVhdGVSb3V0aW5lKG5hbWUsZ3JvdXApIHtcclxuICAgICAgICBsZXQgbmV3Um91dGluZSA9IG5ldyBSb3V0aW5lKG5hbWUsIGdyb3VwKTtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgbmV3Um91dGluZS5pbnNlcnQ9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYobmV3Um91dGluZS5mcmVxIT09MSkge1xyXG4gICAgICAgICAgICAgICAgbmV3Um91dGluZS5jb3VudGVyICs9IHNlbGYucm91dGluZUxpc3QubGVuZ3RoICsgMTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc2VsZi5yb3V0aW5lTGlzdC5wdXNoKG5ld1JvdXRpbmUpO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3Um91dGluZTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIG5ld1JvdXRpbmUucmVtb3ZlPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGxldCBpbmRleCA9ICBzZWxmLnJvdXRpbmVMaXN0LmluZGV4T2YobmV3Um91dGluZSk7XHJcbiAgICAgICAgICAgIHNlbGYucm91dGluZUxpc3Quc3BsaWNlKGluZGV4LDEpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIG5ld1JvdXRpbmU7XHJcbiAgICB9XHJcbiAgICBnZXRDdXJyZW50Q3ljbGUoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5jeWNsZTtcclxuICAgIH1cclxuICAgIHJvdXRpbmUoKXtcclxuICAgICAgICBsZXQgcm91dGluZUxpc3QgPSB0aGlzLnJvdXRpbmVMaXN0O1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBmb3IodmFyIGk9MDtpPHJvdXRpbmVMaXN0Lmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICBsZXQgcm91dGluZSA9IHJvdXRpbmVMaXN0W2ldO1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgaWYocm91dGluZS5jaGVja0xvY2soKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJvdXRpbmUubG9jaygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHN0YXJ0VGltZSA9IERhdGUubm93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRpbmUuYWN0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYubGFzdFJvdXRpbmVUaW1lID0gRGF0ZS5ub3coKSAtIHN0YXJ0VGltZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoc2VsZi5sb25nZXN0Um91dGluZVRpbWU8c2VsZi5sYXN0Um91dGluZVRpbWUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5sb25nZXN0Um91dGluZVRpbWU9c2VsZi5sYXN0Um91dGluZVRpbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoc2VsZi5sYXN0Um91dGluZVRpbWU+MjAwKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignUm91dGluZTonICsgcm91dGluZS5uYW1lICsgJyB0b29rIHRvbyBsb25nIHRvIHJ1bi4gWycrc2VsZi5sYXN0Um91dGluZVRpbWUrJ21zXScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGluZS51bmxvY2soKTtcclxuICAgICAgICAgICAgICAgICAgICB9LHJvdXRpbmUuZnJlcSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1jYXRjaCAoZSl7XHJcbiAgICAgICAgICAgICAgICAvL0RFQ0lERSBJRiBSRU1PVkUgUk9VVElORSBMQVRFUjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmN5Y2xlKys7XHJcbiAgICAgICAgaWYodGhpcy5jeWNsZSA9PT0gTUFYX0NZQ0xFKXtcclxuICAgICAgICAgICAgdGhpcy5jeWNsZSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdEN5Y2xlVGltZSA9IERhdGUubm93KCkgLSB0aGlzLmN5Y2xlU3RhcnRUaW1lO1xyXG4gICAgICAgICAgICB0aGlzLmN5Y2xlUGVyU2VjID0gTWF0aC5mbG9vcigxMDAwIC8gdGhpcy5sYXN0Q3ljbGVUaW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zdGFydCgpO1xyXG4gICAgfVxyXG59XHJcbmNsYXNzIFJvdXRpbmV7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lLGdyb3VwKXtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuZ3JvdXAgPSBncm91cCB8fCAnY29tbW9uJztcclxuICAgICAgICB0aGlzLmZyZXEgPSAxO1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLmFjdGlvbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgc2VsZi5pc1J1bm5pbmcgPSB0cnVlO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5jb3VudGVyPTA7XHJcbiAgICAgICAgdGhpcy5yZXBlYXQgPSAtMTtcclxuICAgIH1cclxuICAgIGxvY2soKXtcclxuICAgICAgICBpZih0aGlzLnJlcGVhdD4wKXRoaXMucmVwZWF0LS07XHJcbiAgICAgICAgdGhpcy5pc1J1bm5pbmcgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgdW5sb2NrKCl7XHJcbiAgICAgICAgaWYodGhpcy5yZXBlYXQ9PT0wKXtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pc1J1bm5pbmcgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGF0dHIoa2V5LHZhbHVlKXtcclxuICAgICAgICB0aGlzW2tleV0gPSB2YWx1ZTtcclxuICAgICAgICBpZihrZXk9PT0nZnJlcScpe1xyXG4gICAgICAgICAgICB0aGlzWydjb3VudGVyJ10gPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICByZXNldENvdW50ZXIoKXtcclxuICAgICAgICB0aGlzLmNvdW50ZXIgPSB0aGlzLmZyZXE7XHJcbiAgICB9XHJcbiAgICBjaGVja0xvY2soKXtcclxuICAgICAgICBpZih0aGlzLmNvdW50ZXI+MCl7XHJcbiAgICAgICAgICAgIHRoaXMuY291bnRlci0tO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuICEodGhpcy5pc1J1bm5pbmcgPT09IHRydWUgfHwgdGhpcy5jb3VudGVyID4gMCk7XHJcbiAgICB9XHJcblxyXG59XHJcbmNvbnN0IF9DdWJZX1JvdXRpbmUgPSBuZXcgQ3ViWV9Sb3V0aW5lKCk7XHJcbmV4cG9ydCBkZWZhdWx0IF9DdWJZX1JvdXRpbmU7IiwiaW1wb3J0IEN1YlkgZnJvbSAnLi9GcmFtZXdvcmsvQ3ViWS9DdWJZJ1xyXG5cclxubGV0IHBpcGVsaW5lSW5pdCA9IEN1YlkuY3JlYXRlUGlwZUxpbmUoJ3BpcGVsaW5lSW5pdCcpOyJdLCJzb3VyY2VSb290IjoiIn0=