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

/***/ "./src/Framework/Ax/AXDOM.js":
/*!***********************************!*\
  !*** ./src/Framework/Ax/AXDOM.js ***!
  \***********************************/
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

var _core = __webpack_require__(/*! ./core */ "./src/Framework/Ax/core.js");

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var AXDOM = function () {
    function AXDOM(_tag, _id, _root) {
        var _arguments = arguments;

        _classCallCheck(this, AXDOM);

        this.id = this.readValue(_id) || 'self';
        this.tag = this.readValue(_tag) || 'div';
        this.dom = document.createElement(this.tag);
        this.dom.setAttribute('id', this.id);
        this.childrenGroup = {};
        this.attribute = {};
        this._style = {};

        if (_root) {
            _root.appendChild(this.dom);
        }
        var self = this;
        this.update = function () {
            self.updater.call(self, self.data, _arguments);
        };
    }

    _createClass(AXDOM, [{
        key: 'setUpdater',
        value: function setUpdater(updater) {
            this.updater = updater;
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
            var elementList = this.childrenGroup[tag] || [];
            var element = new AXDOM(tag, id);
            elementList.push(element);
            this.childrenGroup[tag] = elementList;
            this.dom.appendChild(element.dom);
            return element;
        }
    }, {
        key: 'appendElement',
        value: function appendElement(_AXDOM) {
            var axdom = this.readValue(_AXDOM);
            var tag = axdom.tag;
            var elementList = this.childrenGroup[tag] || [];
            var element = axdom;
            elementList.push(element);
            this.childrenGroup[tag] = elementList;
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
        value: function on(key, _value) {
            var value = _value;
            var self = this;
            this.on[key] = value;
            this.dom.addEventListener(key, function (e) {
                value.call(self, self.data, e);
            });
            return this;
        }
    }, {
        key: 'style',
        value: function style(_key, _value) {
            var key = this.readValue(_key);
            var value = this.readValue(_value);
            this._style[key] = value;
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
        key: 'remove',
        value: function remove(_tag) {
            var tag = this.readValue(_tag);
            if (tag) {
                var elementList = this.childrenGroup[tag] || [];
                elementList.forEach(function (elem) {
                    elem.remove();
                });
            } else {
                this.dom.remove();
            }
            return this;
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

    return AXDOM;
}();

exports.default = AXDOM;

/***/ }),

/***/ "./src/Framework/Ax/core.js":
/*!**********************************!*\
  !*** ./src/Framework/Ax/core.js ***!
  \**********************************/
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

var AXCore = function () {
    function AXCore(_props) {
        _classCallCheck(this, AXCore);

        var props = props || {};
        var self = this;
        this.init(props);
    }

    _createClass(AXCore, [{
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
            if (!!window.opr && !!opr.addons || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0) {
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
            return self.dataMap[key];
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
                    var index = actionList.indexOf(action);
                    actionList.splice(index, 1);
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

    return AXCore;
}();

exports.default = AXCore;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _core = __webpack_require__(/*! ./Framework/Ax/core */ "./src/Framework/Ax/core.js");

var _core2 = _interopRequireDefault(_core);

var _AXDOM = __webpack_require__(/*! ./Framework/Ax/AXDOM */ "./src/Framework/Ax/AXDOM.js");

var _AXDOM2 = _interopRequireDefault(_AXDOM);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

/**
 * Created by Anxin Yang on 3/28/2018.
 */
new _core2.default();
var data = {};
var root = new _AXDOM2.default('div', 'ax_root', document.getElementById('app'));
root.style('font-size', '12px');
var header = root.append('div', 'header').style('display', 'flex').style('position', 'absolute').style('background', '#70a1ff').style('width', '100vw').style('height', '3em');
var headerItems = ['Home', 'Playground', 'About'];
headerItems.forEach(function (item) {
    header.append('div', 'header_' + item).content(item).style('color', 'white').style('padding', '1em 0.5em').style('cursor', 'pointer').on('mouseover', function () {
        this.style('background', '#3742fa');
    }).on('mouseleave', function () {
        this.style('background', '#3742fa');
    });;
});
root.append('p', 'version').style('position', 'fixed').style('bottom', '0px').style('right', '0').style('padding-right', '1em').style('color', 'lightgray').content(new Date());

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0ZyYW1ld29yay9BeC9BWERPTS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRnJhbWV3b3JrL0F4L2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0NuRUE7Ozs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7d0JBRUk7bUJBQVksTUFBSyxLQUFJLE9BQU87eUJBQUE7OzhCQUN4Qjs7YUFBSyxLQUFLLEtBQUssVUFBVSxRQUN6QjthQUFLLE1BQU0sS0FBSyxVQUFVLFNBQzFCO2FBQUssTUFBTSxTQUFTLGNBQWMsS0FDbEM7YUFBSyxJQUFJLGFBQWEsTUFBSyxLQUMzQjthQUFLLGdCQUNMO2FBQUssWUFDTDthQUFLLFNBRUw7O1lBQUcsT0FDQztrQkFBTSxZQUFZLEtBQ3JCO0FBQ0Q7WUFBSSxPQUNKO2FBQUssU0FBUyxZQUNWO2lCQUFLLFFBQVEsS0FBSyxNQUFLLEtBQUssTUFDL0I7QUFDSjs7Ozs7NENBRUc7aUJBQUssVUFDTDttQkFDSDs7OzttQ0FFRztpQkFB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O2dCQUFHLEtBQUssV0FDSjt3QkFBUSxJQUFJLFlBQ2Y7QUFDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbElMOzs7O0FBQ0E7Ozs7Ozs7O0FBSkE7OztBQU1BO0FBQ0EsSUFBSSxPQUFLO0FBR1QsSUFBSSxPQUFPLG9CQUFVLE9BQU0sV0FBVSxTQUFTLGVBQWU7QUFDN0QsS0FBSyxNQUFNLGFBQVk7QUFDdkIsSUFBSSxTQUFTLEtBQUssT0FBTyxPQUFNLFVBQzFCLE1BQU0sV0FBVSxRQUNoQixNQUFNLFlBQVcsWUFDakIsTUFBTSxjQUFhLFdBQ25CLE1BQU0sU0FBUSxTQUNkLE1BQU0sVUFBUztBQUNwQixJQUFJLGNBQWMsQ0FBQyxRQUFPLGNBQWE7QUFDdkMsWUFBWSxRQUFRLFVBQVUsTUFDMUI7V0FBTyxPQUFPLE9BQU0sWUFBVSxNQUN6QixRQUFRLE1BQ1IsTUFBTSxTQUFRLFNBQ2QsTUFBTSxXQUFVLGFBQ2hCLE1BQU0sVUFBUyxXQUNmLEdBQUcsYUFBWSxZQUNaO2FBQUssTUFBTSxjQUNkO0FBUEwsT0FRSyxHQUFHLGNBQWEsWUFDYjthQUFLLE1BQU0sY0FDZDtBQVZMLE9BV0g7QUFaRDtBQWFBLEtBQUssT0FBTyxLQUFJLFdBQ1gsTUFBTSxZQUFXLFNBQ2pCLE1BQU0sVUFBUyxPQUNmLE1BQU0sU0FBUSxLQUNkLE1BQU0saUJBQWdCLE9BQ3RCLE1BQU0sU0FBUSxhQUNkLFFBQVEsSUFBSSxRIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgQW54aW4gWWFuZyBvbiA1LzI2LzIwMTguXHJcbiAqL1xyXG5pbXBvcnQgQVhDb3JlIGZyb20gJy4vY29yZSc7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFYRE9NIHtcclxuICAgIGNvbnN0cnVjdG9yKF90YWcsX2lkLF9yb290KSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IHRoaXMucmVhZFZhbHVlKF9pZCl8fCAnc2VsZic7XHJcbiAgICAgICAgdGhpcy50YWcgPSB0aGlzLnJlYWRWYWx1ZShfdGFnKSB8fCAnZGl2JztcclxuICAgICAgICB0aGlzLmRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGhpcy50YWcpO1xyXG4gICAgICAgIHRoaXMuZG9tLnNldEF0dHJpYnV0ZSgnaWQnLHRoaXMuaWQpO1xyXG4gICAgICAgIHRoaXMuY2hpbGRyZW5Hcm91cCA9IHt9O1xyXG4gICAgICAgIHRoaXMuYXR0cmlidXRlID0ge307XHJcbiAgICAgICAgdGhpcy5fc3R5bGUgPSB7fTtcclxuXHJcbiAgICAgICAgaWYoX3Jvb3Qpe1xyXG4gICAgICAgICAgICBfcm9vdC5hcHBlbmRDaGlsZCh0aGlzLmRvbSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLnVwZGF0ZSA9ICgpPT57XHJcbiAgICAgICAgICAgIHNlbGYudXBkYXRlci5jYWxsKHNlbGYsc2VsZi5kYXRhLGFyZ3VtZW50cyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2V0VXBkYXRlcih1cGRhdGVyKXtcclxuICAgICAgICB0aGlzLnVwZGF0ZXIgPSB1cGRhdGVyO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgYmluZChkYXRhKXtcclxuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgYXBwZW5kKF90YWcsX2lkKXtcclxuICAgICAgICBsZXQgdGFnID0gdGhpcy5yZWFkVmFsdWUoX3RhZyk7XHJcbiAgICAgICAgbGV0IGlkID0gdGhpcy5yZWFkVmFsdWUoX2lkKTtcclxuICAgICAgICBsZXQgZWxlbWVudExpc3QgPSB0aGlzLmNoaWxkcmVuR3JvdXBbdGFnXSB8fCBbXTtcclxuICAgICAgICBsZXQgZWxlbWVudCA9IG5ldyBBWERPTSh0YWcsaWQpO1xyXG4gICAgICAgIGVsZW1lbnRMaXN0LnB1c2goZWxlbWVudCk7XHJcbiAgICAgICAgdGhpcy5jaGlsZHJlbkdyb3VwW3RhZ10gPSBlbGVtZW50TGlzdDtcclxuICAgICAgICB0aGlzLmRvbS5hcHBlbmRDaGlsZChlbGVtZW50LmRvbSk7XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgICBhcHBlbmRFbGVtZW50KF9BWERPTSl7XHJcbiAgICAgICAgbGV0IGF4ZG9tID0gdGhpcy5yZWFkVmFsdWUoX0FYRE9NKTtcclxuICAgICAgICBsZXQgdGFnID0gYXhkb20udGFnO1xyXG4gICAgICAgIGxldCBlbGVtZW50TGlzdCA9IHRoaXMuY2hpbGRyZW5Hcm91cFt0YWddIHx8IFtdO1xyXG4gICAgICAgIGxldCBlbGVtZW50ID0gYXhkb207XHJcbiAgICAgICAgZWxlbWVudExpc3QucHVzaChlbGVtZW50KTtcclxuICAgICAgICB0aGlzLmNoaWxkcmVuR3JvdXBbdGFnXSA9IGVsZW1lbnRMaXN0O1xyXG4gICAgICAgIHRoaXMuZG9tLmFwcGVuZENoaWxkKGVsZW1lbnQuZG9tKTtcclxuICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgIH1cclxuICAgIGF0dHIoa2V5LF92YWx1ZSl7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gdGhpcy5yZWFkVmFsdWUoX3ZhbHVlKTtcclxuICAgICAgICB0aGlzLmF0dHJpYnV0ZVtrZXldID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5kb20uc2V0QXR0cmlidXRlKGtleSx2YWx1ZSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBvbihrZXksX3ZhbHVlKXtcclxuICAgICAgICBsZXQgdmFsdWUgPSBfdmFsdWU7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMub25ba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuZG9tLmFkZEV2ZW50TGlzdGVuZXIoa2V5LGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHZhbHVlLmNhbGwoc2VsZixzZWxmLmRhdGEsZSlcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIHN0eWxlKF9rZXksX3ZhbHVlKXtcclxuICAgICAgICBsZXQga2V5ID0gdGhpcy5yZWFkVmFsdWUoX2tleSk7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gdGhpcy5yZWFkVmFsdWUoX3ZhbHVlKTtcclxuICAgICAgICB0aGlzLl9zdHlsZVtrZXldID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5kb20uc3R5bGVba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgY29udGVudChfdmFsdWUpe1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IHRoaXMucmVhZFZhbHVlKF92YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5pbm5lckhUTUwgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLmRvbS5pbm5lckhUTUwgPSB2YWx1ZTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIGFwcGVuZENsYXNzKF9jbGFzc05hbWUpe1xyXG4gICAgICAgIGxldCBjbGFzc05hbWUgPSB0aGlzLnJlYWRWYWx1ZShfY2xhc3NOYW1lKTtcclxuICAgICAgICBsZXQgY2xhc3NlcyA9IHRoaXMuY2xhc3NlcyB8fCBbXTtcclxuICAgICAgICBjbGFzc2VzLnB1c2goY2xhc3NOYW1lKTtcclxuICAgICAgICB0aGlzLmRvbS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcbiAgICAgICAgdGhpcy5jbGFzc2VzID0gY2xhc3NlcztcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIHJlbW92ZShfdGFnKXtcclxuICAgICAgICBsZXQgdGFnID10aGlzLnJlYWRWYWx1ZShfdGFnKTtcclxuICAgICAgICBpZih0YWcpIHtcclxuICAgICAgICAgICAgbGV0IGVsZW1lbnRMaXN0ID0gdGhpcy5jaGlsZHJlbkdyb3VwW3RhZ10gfHwgW107XHJcbiAgICAgICAgICAgIGVsZW1lbnRMaXN0LmZvckVhY2goKGVsZW0pPT4ge1xyXG4gICAgICAgICAgICAgICAgZWxlbS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5kb20ucmVtb3ZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgcmVhZFZhbHVlKF92YWx1ZSl7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gX3ZhbHVlO1xyXG4gICAgICAgIGlmKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiKXtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLmNhbGwodGhpcyx0aGlzLmRhdGEpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiY29uc3QgRU1QVFlfRlVOQ1RJT04gPSAoKT0+e307XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFYQ29yZXtcclxuICAgIGNvbnN0cnVjdG9yKF9wcm9wcyl7XHJcbiAgICAgICAgbGV0IHByb3BzID0gcHJvcHMgfHwge307XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuaW5pdChwcm9wcyk7XHJcbiAgICB9XHJcbiAgICBpbml0KF9wcm9wcyl7XHJcbiAgICAgICAgbGV0IHByb3BzID0gX3Byb3BzIHx8IHt9O1xyXG4gICAgICAgIHRoaXMuZGVidWdNb2RlID0gcHJvcHMuZGVidWcgfHwgZmFsc2U7XHJcbiAgICAgICAgdGhpcy5kYXRhTWFwID0ge307XHJcbiAgICAgICAgdGhpcy5hY3Rpb25NYXAgPSB7fTtcclxuICAgICAgICB0aGlzLmJyb3dzZXIgPSB0aGlzLmdldEJyb3dzZXIoKTtcclxuICAgICAgICB3aW5kb3cuYXggPSB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEJyb3dzZXIoKXtcclxuICAgICAgICBsZXQgaXNJRSA9IGZhbHNlO1xyXG4gICAgICAgIGlmKCghIXdpbmRvdy5vcHIgJiYgISFvcHIuYWRkb25zKSB8fCAhIXdpbmRvdy5vcGVyYSB8fCBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJyBPUFIvJykgPj0gMCl7XHJcbiAgICAgICAgICAgIHJldHVybiAnb3BlcmEnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0eXBlb2YgSW5zdGFsbFRyaWdnZXIgIT09ICd1bmRlZmluZWQnKXtcclxuICAgICAgICAgICAgcmV0dXJuICdmaXJlZm94JztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoL2NvbnN0cnVjdG9yL2kudGVzdCh3aW5kb3cuSFRNTEVsZW1lbnQpIHx8IChmdW5jdGlvbiAocCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHAudG9TdHJpbmcoKSA9PT0gXCJbb2JqZWN0IFNhZmFyaVJlbW90ZU5vdGlmaWNhdGlvbl1cIjtcclxuICAgICAgICAgICAgfSkoIXdpbmRvd1snc2FmYXJpJ10gfHwgc2FmYXJpLnB1c2hOb3RpZmljYXRpb24pKXtcclxuICAgICAgICAgICAgcmV0dXJuICdzYWZhcmknO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihmYWxzZSB8fCAhIWRvY3VtZW50LmRvY3VtZW50TW9kZSl7XHJcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgb3V0cHV0ID0gYXJndW1lbnRzWzBdO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gYXJndW1lbnRzW2ldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvYmogPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoa2V5KSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dFtrZXldID0gb2JqW2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgaXNJRSA9dHJ1ZTtcclxuICAgICAgICAgICAgcmV0dXJuICdpZSc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCFpc0lFICYmICEhd2luZG93LlN0eWxlTWVkaWEpe1xyXG4gICAgICAgICAgICByZXR1cm4gJ2VkZ2UnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZighIXdpbmRvdy5jaHJvbWUgJiYgISF3aW5kb3cuY2hyb21lLndlYnN0b3JlKXtcclxuICAgICAgICAgICAgcmV0dXJuICdjaHJvbWUnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZigoaXNDaHJvbWUgfHwgaXNPcGVyYSkgJiYgISF3aW5kb3cuQ1NTKXtcclxuICAgICAgICAgICAgcmV0dXJuICdibGluayc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0b3JlRGF0YUFycmF5KF9hcnJheSwgX2lkS2V5LCBfaXRlbVByb2Nlc3NvciwgX29wdGlvbnMsIF9jYWxsYmFjaykge1xyXG4gICAgICAgIHZhciBvcHRpb25zID0gX29wdGlvbnMgfHwge307XHJcbiAgICAgICAgdmFyIGlkS2V5ID0gX2lkS2V5IHx8ICdpZCc7XHJcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gX2NhbGxiYWNrIHx8IEVNUFRZX0ZVTkNUSU9OO1xyXG4gICAgICAgIHZhciBhcnJheSA9IF9hcnJheSB8fCBbXTtcclxuICAgICAgICB2YXIgaXRlbUxpc3QgPSBbXTtcclxuICAgICAgICB2YXIgaXRlbVByb2Nlc3NvciA9IF9pdGVtUHJvY2Vzc29yIHx8IEVNUFRZX0ZVTkNUSU9OO1xyXG5cclxuICAgICAgICBhcnJheS5mb3JFYWNoKGZ1bmN0aW9uIChfaXRlbSkge1xyXG4gICAgICAgICAgICB2YXIga2V5ID0gX2l0ZW1baWRLZXldO1xyXG4gICAgICAgICAgICBpZiAoa2V5ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIGl0ZW0gPSBzZWxmLnN0b3JlVmFsdWUoa2V5LCBfaXRlbSwgX29wdGlvbnMpO1xyXG5cclxuICAgICAgICAgICAgaXRlbVByb2Nlc3NvcihpdGVtKTtcclxuICAgICAgICAgICAgaXRlbUxpc3QucHVzaChpdGVtKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY2FsbGJhY2soX2FycmF5LCBpdGVtTGlzdCk7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW1MaXN0O1xyXG4gICAgfTtcclxuXHJcbiAgICBzdG9yZVZhbHVlKF9rZXksIF92YWx1ZSwgX29wdGlvbnMsIF9jYWxsYmFjaykge1xyXG4gICAgICAgIHZhciBvcHRpb25zID0gX29wdGlvbnMgfHwge307XHJcbiAgICAgICAgdmFyIHN0b3JlID0gdGhpcy5kYXRhTWFwO1xyXG4gICAgICAgIHZhciBrZXkgPSBfa2V5O1xyXG4gICAgICAgIHZhciBjYWxsYmFjayA9IF9jYWxsYmFjayB8fCBFTVBUWV9GVU5DVElPTjtcclxuICAgICAgICB2YXIgbmV3VmFsdWUgPSBfdmFsdWU7XHJcbiAgICAgICAgdmFyIGl0ZW0gPSBzdG9yZVtrZXldIHx8IHt9O1xyXG4gICAgICAgIGlmKGl0ZW0gPT09IE9iamVjdChpdGVtKSAmJiBvcHRpb25zLm92ZXJ3cml0ZSE9PXRydWUpIHtcclxuICAgICAgICAgICAgaXRlbSA9IE9iamVjdC5hc3NpZ24oaXRlbSwgbmV3VmFsdWUpO1xyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgaXRlbSA9IG5ld1ZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRhdGFNYXBba2V5XSA9IGl0ZW07XHJcblxyXG4gICAgICAgIGNhbGxiYWNrKGl0ZW0pO1xyXG4gICAgICAgIHRoaXMucmVhY3Qoa2V5KTtcclxuICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgIH07XHJcbiAgICBnZXRWYWx1ZShfa2V5KSB7XHJcbiAgICAgICAgdmFyIGtleSA9IF9rZXkgfHwgJyc7XHJcbiAgICAgICAgcmV0dXJuIHNlbGYuZGF0YU1hcFtrZXldO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25uZWN0KF9rZXksX2FjdGlvbikge1xyXG4gICAgICAgIGlmKF9rZXk9PT11bmRlZmluZWQgfHwgX2FjdGlvbj09PXVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBhY3Rpb25NYXAgPSB0aGlzLmFjdGlvbk1hcDtcclxuICAgICAgICB2YXIgYWN0aW9uTGlzdCA9IGFjdGlvbk1hcFtfa2V5XSB8fCBbXTtcclxuICAgICAgICBhY3Rpb25MaXN0LnB1c2goX2FjdGlvbik7XHJcbiAgICAgICAgYWN0aW9uTWFwW19rZXldID0gYWN0aW9uTGlzdDtcclxuICAgIH07XHJcbiAgICByZWFjdChfa2V5KSB7XHJcbiAgICAgICAgaWYoX2tleT09PXVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBhY3Rpb25NYXAgPSB0aGlzLmFjdGlvbk1hcDtcclxuICAgICAgICB2YXIgYWN0aW9uTGlzdCA9IGFjdGlvbk1hcFtfa2V5XSB8fCBbXTtcclxuICAgICAgICBhY3Rpb25MaXN0LmZvckVhY2goKGFjdGlvbik9PiB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBzZWxmLmdldFZhbHVlKF9rZXkpO1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uKHZhbHVlKTtcclxuICAgICAgICAgICAgfWNhdGNoIChlKXtcclxuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IGFjdGlvbkxpc3QuaW5kZXhPZihhY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uTGlzdC5zcGxpY2UoaW5kZXgsMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfTtcclxuICAgIGRlYnVnKHN0cikge1xyXG4gICAgICAgIGlmKHRoaXMuZGVidWdNb2RlKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0RFQlVHOiAnICsgc3RyKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBBbnhpbiBZYW5nIG9uIDMvMjgvMjAxOC5cclxuICovXHJcbmltcG9ydCBBWENvcmUgZnJvbSAnLi9GcmFtZXdvcmsvQXgvY29yZSc7XHJcbmltcG9ydCBBWERPTSBmcm9tICcuL0ZyYW1ld29yay9BeC9BWERPTSc7XHJcblxyXG5uZXcgQVhDb3JlKCk7XHJcbnZhciBkYXRhPXtcclxuXHJcbn07XHJcbnZhciByb290ID0gbmV3IEFYRE9NKCdkaXYnLCdheF9yb290Jyxkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpO1xyXG5yb290LnN0eWxlKCdmb250LXNpemUnLCcxMnB4Jyk7XHJcbnZhciBoZWFkZXIgPSByb290LmFwcGVuZCgnZGl2JywnaGVhZGVyJylcclxuICAgIC5zdHlsZSgnZGlzcGxheScsJ2ZsZXgnKVxyXG4gICAgLnN0eWxlKCdwb3NpdGlvbicsJ2Fic29sdXRlJylcclxuICAgIC5zdHlsZSgnYmFja2dyb3VuZCcsJyM3MGExZmYnKVxyXG4gICAgLnN0eWxlKCd3aWR0aCcsJzEwMHZ3JylcclxuICAgIC5zdHlsZSgnaGVpZ2h0JywnM2VtJyk7XHJcbnZhciBoZWFkZXJJdGVtcyA9IFsnSG9tZScsJ1BsYXlncm91bmQnLCdBYm91dCddO1xyXG5oZWFkZXJJdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICBoZWFkZXIuYXBwZW5kKCdkaXYnLCdoZWFkZXJfJytpdGVtKVxyXG4gICAgICAgIC5jb250ZW50KGl0ZW0pXHJcbiAgICAgICAgLnN0eWxlKCdjb2xvcicsJ3doaXRlJylcclxuICAgICAgICAuc3R5bGUoJ3BhZGRpbmcnLCcxZW0gMC41ZW0nKVxyXG4gICAgICAgIC5zdHlsZSgnY3Vyc29yJywncG9pbnRlcicpXHJcbiAgICAgICAgLm9uKCdtb3VzZW92ZXInLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5zdHlsZSgnYmFja2dyb3VuZCcsJyMzNzQyZmEnKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5vbignbW91c2VsZWF2ZScsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLnN0eWxlKCdiYWNrZ3JvdW5kJywnIzM3NDJmYScpO1xyXG4gICAgICAgIH0pOztcclxufSk7XHJcbnJvb3QuYXBwZW5kKCdwJywndmVyc2lvbicpXHJcbiAgICAuc3R5bGUoJ3Bvc2l0aW9uJywnZml4ZWQnKVxyXG4gICAgLnN0eWxlKCdib3R0b20nLCcwcHgnKVxyXG4gICAgLnN0eWxlKCdyaWdodCcsJzAnKVxyXG4gICAgLnN0eWxlKCdwYWRkaW5nLXJpZ2h0JywnMWVtJylcclxuICAgIC5zdHlsZSgnY29sb3InLCdsaWdodGdyYXknKVxyXG4gICAgLmNvbnRlbnQobmV3IERhdGUoKSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=