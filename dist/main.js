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

var _CubY_DOM = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./Framework/CubY/CubY_DOM\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

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


var _CubY_Core = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./Framework/CubY/CubY_Core\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _CubY_Core2 = _interopRequireDefault(_CubY_Core);

var _CubY_DOM = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./Framework/CubY/CubY_DOM\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _CubY_DOM2 = _interopRequireDefault(_CubY_DOM);

var _CubY_Routine = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./Framework/CubY/CubY_Routine\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

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
        this.content('AX_Routine: LasrCycleTime: ' + cr.lastCycleTime + 'ms | CPS:' + cr.cyclePerSec + ' |Longest: ' + cr.longestRoutineTime + 'ms | Last:' + cr.lastRoutineTime + 'ms');
    });
    var timer = cr.append('timer').attr('freq', 1).attr('action', version.updater('timer')).insert();
    var menuContents = menuContainer.append('ul').style('padding-left', '2em').style('margin', '0');
    var menuItems = ['Coming soon', 'May Coming soon', 'probably Coming soon'];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkVBOzs7Ozs7OztBQUdBLElBQUksY0FBYyx1QkFBYSxPQUFNO0FBQ3JDLFlBQVksTUFBTSxTQUFRLFNBQ3JCLE1BQU0sVUFBUyxTQUNmLE1BQU0sY0FBYSxXQUNuQixNQUFNLFlBQVcsWUFDakIsTUFBTSxjQUFjLE1BQ3BCLE1BQU0sWUFBVyxVQUNqQixHQUFHLGFBQVksVUFBVSxHQUFFLEdBQ3hCO1FBQUksSUFBSSxFQUNSO1FBQUksSUFBSSxFQUNSO1FBQUk7V0FDRyxPQUFPLGFBQ1Y7V0FBRyxPQUFPLGNBRWQ7QUFISTtnQkFHUSxLQUFLLEVBQUUsSUFBSSxPQUFPLEtBQzlCO2dCQUFZLEtBQUssRUFBRSxJQUFJLE9BQU8sS0FFakM7QUFoQkw7QUFpQkEsSUFBSSxrQkFBa0IsT0FBTyxnQkFDeEIsS0FBSyxRQUFPLEtBQ1osS0FBSyxrQkFBaUIsR0FDdEIsS0FBSyxVQUFTLFlBQ1g7Z0JBQVksTUFBTSxjQUNyQjtBQUxjLEdBS1o7O0FBRVAsSUFBSSx1QkFBdUIsT0FBTyxNQUFLLFlBQ2xDLFFBQVEsc0JBQ1IsTUFBTSxZQUFXLFNBQ2pCLE1BQU0sU0FBUSxTQUNkLE1BQU0sU0FBUSxRQUNkLE1BQU0sVUFBVSxRQUNoQixNQUFNLGNBQWEsVUFDbkIsTUFBTSxRQUFPLEtBQ2IsTUFBTSxTQUFRLEtBQ2QsTUFBTSxVQUFTLE9BQ2YsTUFBTSxVQUFTLFFBQ2YsTUFBTSxhQUFZLFFBQ2xCLE1BQU0sY0FBYyxNQUNwQixNQUFNLGVBQWMsb0JBQ3BCLE1BQU0sV0FBVSxHQUNoQixHQUFHLGFBQVksWUFDWjtTQUFLLE1BQU0sZUFDZDtBQWpCVSxHQWtCVixHQUFHLGNBQWEsWUFDYjtTQUFLLE1BQU0sZUFDZDtBQXBCVTtBQXFCZixJQUFJLDJCQUEyQixPQUFPLDJCQUNqQyxLQUFLLFFBQU8sSUFDWixLQUFLLFVBQVMsWUFDWDtRQUFJLE1BQU0sS0FBSyxXQUNmO1FBQUcsTUFBSSxJQUNIO2lCQUFTLE1BQU0sZUFDbEI7QUFGRCxXQUdJO2lCQUFTLE1BQU0sZUFDbEI7QUFDSjtBQVR1QixHQVV2Qjs7QUFFTCxJQUFJLGNBQWMsWUFBWSxPQUFPLE1BQUssZUFDckMsUUFBUSw0QkFDUixNQUFNLFlBQVcsU0FDakIsTUFBTSxTQUFRLFdBQ2QsTUFBTSxTQUFRLFFBQ2QsTUFBTSxVQUFVLFFBQ2hCLE1BQU0sY0FBYSxVQUNuQixNQUFNLFFBQU8sS0FDYixNQUFNLFNBQVEsS0FDZCxNQUFNLFVBQVMsT0FDZixNQUFNLFVBQVMsUUFDZixNQUFNLGFBQVksUUFDbEIsTUFBTSxjQUFjLE1BQ3BCLE1BQU0sZUFBYyxvQkFDcEIsTUFBTSxXQUFVO0FBQ3JCLElBQUksaUJBQWlCLFlBQVksT0FBTyxRQUFPLGtCQUMxQyxNQUFNLFlBQVcsU0FDakIsTUFBTSxTQUFRLFdBQ2QsTUFBTSxTQUFRLFFBQ2QsTUFBTSxVQUFVLFFBQ2hCLE1BQU0sWUFBVyxVQUNqQixNQUFNLGlCQUFnQixPQUN0QixNQUFNLGNBQWEsVUFDbkIsTUFBTSxRQUFPLEtBQ2IsTUFBTSxTQUFRLEtBQ2QsTUFBTSxVQUFTLE9BQ2YsTUFBTSxVQUFTLFFBQ2YsTUFBTSxhQUFZLFFBQ2xCLE1BQU0sY0FBYyxRQUNwQixNQUFNLFVBQVMscUJBQ2YsTUFBTSxjQUFhLG9CQUNuQixNQUFNLFVBQVMsV0FDZixNQUFNLFdBQVU7QUFDckIsSUFBSSx5QkFBeUIsT0FBTyxRQUFPLGNBQ3RDLFFBQVEsb0JBQ1IsTUFBTSxZQUFXLFNBQ2pCLE1BQU0sU0FBUSxXQUNkLE1BQU0sU0FBUSxRQUNkLE1BQU0sVUFBVSxRQUNoQixNQUFNLFlBQVcsVUFDakIsTUFBTSxVQUFTLHlCQUNmLE1BQU0saUJBQWdCLE9BQ3RCLE1BQU0sY0FBYSxVQUNuQixNQUFNLFFBQU8sS0FDYixNQUFNLFNBQVEsS0FDZCxNQUFNLFVBQVMsT0FDZixNQUFNLFVBQVMsUUFDZixNQUFNLGFBQVksUUFDbEIsTUFBTSxjQUFjLFFBQ3BCLE1BQU0sY0FBYyxXQUNwQixNQUFNLGVBQWMsbUJBQ3BCLE1BQU0sY0FBYSxtQkFDbkIsTUFBTSxVQUFTLFdBQ2YsTUFBTSxXQUFVLEdBQ2hCLEdBQUcsU0FBUSxZQUNSO09BQUcsV0FBVyxlQUNqQjtBQXZCWSxHQXdCWixHQUFHLGFBQVksWUFDWjtTQUFLLE1BQU0sY0FBYSxzQkFDbkIsTUFBTSxTQUFRLFFBQ2QsTUFBTSxjQUNYO2VBQVcsU0FDZDtBQTdCWSxHQThCWixHQUFHLGNBQWEsWUFDYjtTQUFLLE1BQU0sY0FBYyxXQUNwQixNQUFNLFNBQVEsUUFDZCxNQUFNLGNBQ1g7ZUFBVyxTQUNkO0FBbkNZO0FBb0NqQixJQUFJLHNCQUFzQixPQUFPLG9CQUM1QixLQUFLLFFBQU8sSUFDWixLQUFLLFVBQVMsWUFDWDtRQUFHLFdBQVcsV0FBVyxNQUNyQjt1QkFBZSxRQUNsQjtBQUNEO1lBQU8sZUFDSDthQUNBO2FBQ0k7MkJBQWUsUUFDZjsyQkFBZSxNQUFNLFNBQVMsUUFDekIsTUFBTSxVQUFTLG9CQUNmLE1BQU0sVUFBVSxRQUNoQixNQUFNLFdBQ1g7QUFDSjthQUNJOzJCQUFlLFFBQ2Y7MkJBQWUsTUFBTSxTQUFTLFFBQ3pCLE1BQU0sVUFBUyxPQUNmLE1BQU0sVUFDWDtBQUNKO2FBQ0k7MkJBQWUsUUFDZjsyQkFBZSxNQUFNLFdBQ3JCO0FBRVg7O0FBMUJrQixHQTBCaEI7O0FBRVAsT0FBTyxjQUFjLFlBQ2pCO1FBQUksUUFDSjtLQUFDLFVBQVMsR0FBRztZQUFHLDJUQUEyVCxLQUFLLE1BQUksMGtEQUEwa0QsS0FBSyxFQUFFLE9BQU8sR0FBRSxLQUFLLFFBQWM7QUFBajhELE9BQW04RCxVQUFVLGFBQVcsVUFBVSxVQUFRLE9BQzErRDtXQUNIO0FBSkQ7QUFLQSxJQUFJLFlBQVksZ0JBQWMsS0FBRztBQUNqQyxJQUFJLGFBQWE7OzZCQUdiO1FBQUksSUFBSSxLQUFLLFdBQVMsT0FBTyxhQUM3QjtRQUFJLElBQUksS0FBSyxXQUFTLE9BQU8sY0FDN0I7UUFBSSxTQUFTLFlBQVksT0FBTyxPQUMzQixNQUFNLFlBQVcsWUFDakIsTUFBTSxTQUFRLFFBQ2QsTUFBTSxVQUFTLFFBQ2YsTUFBTSxpQkFBZ0IsT0FDdEIsTUFBTSxjQUFhLFdBQ25CLE1BQU0sY0FBYSxlQUNuQixNQUFNLGNBQWEsb0JBQ25CLE1BQU0sV0FBVyxLQUNqQixNQUFNLGFBQVksZUFBYSxJQUFFLFFBQU0sSUFFNUM7O1dBQU8sSUFDUDtXQUFPLElBQ1A7V0FBTyxLQUFLLEtBQUssV0FDakI7V0FBTyxLQUFLLEtBQUssV0FDakI7V0FBTyxLQUNQO1dBQU8sUUFBUyxLQUNoQjtXQUFPLFVBQ1A7UUFBSSxlQUFlLE9BQU8seUJBQ3JCLEtBQUssUUFBTyxHQUNaLEtBQUssVUFBUyxZQUNYO1lBQUksUUFBUSxPQUNaO2VBQU8sS0FBRyxPQUNWO2VBQU8sS0FBRyxPQUVWOztlQUFPLE1BQU0sYUFBWSxnQkFBYyxPQUFPLElBQUksQ0FBQyxZQUFZLE1BQUksS0FBRyxTQUFPLFNBQU8sT0FBTyxJQUFJLENBQUMsWUFBWSxNQUFJLEtBQUcsU0FBTyxlQUFhLFFBQU0sS0FDeEksTUFBTSxXQUFXLE9BQ2pCLE1BQU0sV0FBVyxTQUFPLE1BQUksSUFBRSxHQUM5QixNQUFNLGNBQWEsVUFBUSxLQUFLLFdBQVMsS0FBRyxNQUNqRDtZQUFHLE9BQU8sSUFBRSxPQUFPLFlBQ2Y7bUJBQU8sS0FBSyxFQUFFLEtBQUssV0FBUyxNQUMvQjtBQUZELGVBRU0sSUFBRyxPQUFPLElBQUUsR0FDZDttQkFBTyxLQUFLLEtBQUssV0FBUyxNQUM3QjtBQUNEO1lBQUcsT0FBTyxJQUFFLE9BQU8sYUFDZjttQkFBTyxLQUFLLEVBQUUsS0FBSyxXQUFTLE1BQy9CO0FBRkQsZUFFTSxJQUFHLE9BQU8sSUFBRSxHQUNkO21CQUFPLEtBQUssS0FBSyxXQUFTLE1BQzdCO0FBQ0Q7ZUFDQTtZQUFHLE9BQU8sV0FBUyxHQUNmO21CQUFPLFVBQ1A7bUJBQU8sU0FBTyxPQUNkO2dCQUFHLE9BQU8sU0FBTyxHQUNiO3VCQUFPLEtBQUcsQ0FDYjtBQUNEO2dCQUFHLE9BQU8sU0FBTyxHQUNiO3VCQUFPLEtBQ1Y7QUFDSjtBQUNKO0FBaENVLE9BZ0NSOzs7QUFyRFgsS0FBSSxJQUFJLElBQUUsR0FBRSxJQUFFLFdBQVUsS0FBSTtBQXNEM0I7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6TkQ7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBTkE7OztBQU9BLElBQ0k7V0FBTyxpQkFBaUIsU0FBUyxVQUFVLEdBQ3ZDO3NCQUFjLFFBQ2pCO0FBQ0Q7V0FBTyxPQUFPLHVCQUFhLE9BQU8sV0FBVyxTQUFTLGVBQ3REO1NBQUssTUFBTSxhQUFhLFFBQ25CLE1BQU0sVUFDWDtRQUFJLGNBQWMsT0FBTyxPQUFPLFVBQzNCLEtBQUssaUJBQWlCLGlCQUN0QixNQUFNLFdBQVcsUUFDakIsTUFBTSxZQUNQO0FBSlM7QUFBQSxLQUtSLE1BQU0sV0FDUDtBQUNBO0FBQ0E7QUFSUztLQVNSLE1BQU0sT0FBTyxPQUNiLE1BQU0sVUFBVSxPQUNoQixNQUFNLFdBQVcsTUFDakIsTUFBTSxjQUFjLFFBQ3BCLEdBQUcsYUFBYSxZQUNiO2FBQUssTUFBTSxXQUNYO0FBQ0E7QUFDSDtBQWpCUSxPQWtCUixHQUFHLGNBQWMsWUFDZDthQUFLLE1BQU0sV0FDWDtBQUNBO0FBQ0g7QUFFTDs7UUFBSSxjQUFjLENBQUMsUUFBUSxjQUMzQjtRQUFJLFFBQ0o7Z0JBQVksUUFBUSxVQUFVLE1BQzFCO29CQUFZLGtCQUFrQixPQUFPLE9BQU8sWUFBWSxNQUNuRCxRQUFRLE1BQ1IsWUFBWSxNQUNaLE1BQU0sU0FBUyxTQUNmLE1BQU0sV0FBVyxhQUNqQixNQUFNLFVBQVUsV0FDaEIsTUFBTSxlQUFlLG9CQUNyQixNQUFNLGNBQWMsUUFDcEIsR0FBRyxhQUFhLFlBQ2I7aUJBQUssTUFBTSxlQUFlLG9CQUNyQixNQUFNLFNBQ2Q7QUFYa0IsV0FZbEIsR0FBRyxjQUFjLFlBQ2Q7aUJBQUssTUFBTSxlQUFlLG9CQUNyQixNQUFNLFNBQ2Q7QUFDUjtBQUNEO1FBQUksbUJBQW1CLFlBQ3ZCO3FCQUFpQixNQUFNLFlBQ3ZCO1FBQUksaUNBQWlDLE9BQU8sT0FBTyxpQkFDOUMsTUFBTSxZQUFZLFlBQ2xCLE1BQU0sU0FBUyxTQUNmLE1BQU0sVUFBVSxPQUNoQixNQUFNLGNBQWMsSUFDcEIsTUFBTSxPQUFPLFFBQ2IsTUFBTSxRQUFRLEtBQ2QsTUFBTSxZQUNQO0FBQ0E7QUFUZ0I7QUFBQSxLQVVmLE1BQU0sY0FBYyxRQUNwQixXQUFXLGNBQWMsVUFBVSxHQUNoQztZQUFJLFVBQVUsS0FBSyxXQUNuQjtZQUFJLFNBQ0E7aUJBQUssTUFBTSxVQUNYO0FBQ0E7QUFDSDtBQUpELGVBS0k7aUJBQUssTUFBTSxVQUNYO0FBQ0E7QUFDSDtBQUNEO2FBQUssVUFBVSxDQUNsQjtBQXZCZSxPQXdCZixXQUFXLGFBQWEsVUFBVSxHQUMvQjthQUFLLE1BQU0sVUFBVSxLQUNoQixNQUFNLGNBQWMscUNBQ3BCLE1BQU0sVUFDWDthQUFLLFVBQ1I7QUFFTDs7cUJBQWlCLEdBQUcsU0FBUyxVQUFVLEdBQ25DO1VBQ0E7c0JBQWMsUUFDakI7QUFFRDs7UUFBSSxnQkFBZ0IsS0FBSyxPQUFPLE9BQ2hDO2tCQUFjLHFCQUNkO09BQUcsV0FBVyxlQUNkO09BQUcsUUFBUSxlQUFjLFlBQ3JCO1lBQUksY0FBYyxHQUFHLFNBQ3JCO3NCQUNIO0FBRUQ7O1FBQUksZUFBZSxPQUFPLEtBQUssV0FDMUIsTUFBTSxZQUFZLFNBQ2xCLE1BQU0sVUFBVSxPQUNoQixNQUFNLFNBQVMsS0FDZixNQUFNLGlCQUFpQixPQUN2QixNQUFNLFNBQVMsYUFDZixRQUFRLElBQUksUUFDWixXQUFXLFNBQVMsWUFDakI7YUFBSyxRQUFRLGdDQUFnQyxHQUFHLGdCQUFnQixjQUFjLEdBQUcsY0FBYyxnQkFBZ0IsR0FBRyxxQkFBcUIsZUFBZSxHQUFHLGtCQUM1SjtBQUNMLEtBVmM7UUFVVixRQUFRLEdBQUcsT0FBTyxTQUNqQixLQUFLLFFBQVEsR0FDYixLQUFLLFVBQVUsUUFBUSxRQUFRLFVBRXBDO1FBQUksZUFBZSxjQUFjLE9BQU8sTUFDbkMsTUFBTSxnQkFBZ0IsT0FDdEIsTUFBTSxVQUNYO1FBQUksWUFBWSxDQUFDLGVBQWUsbUJBQ2hDO1lBQ0E7Y0FBVSxRQUFRLFVBQVUsTUFDeEI7a0JBQVUsd0JBQXdCLE9BQU8sTUFBTSxVQUFVLE1BQ3BELFFBQVEsTUFDUixNQUFNLFNBQVMsU0FDZixNQUFNLFdBQVcsYUFDakIsTUFBTSxVQUFVLFdBQ2hCLE1BQU0sZUFBZSxvQkFDckIsTUFBTSxjQUFjLFFBQ3BCLEdBQUcsYUFBYSxZQUNiO2lCQUFLLE1BQU0sZUFBZSxvQkFDckIsTUFBTSxTQUNkO0FBVmdCLFdBV2hCLEdBQUcsY0FBYyxZQUNkO2lCQUFLLE1BQU0sZUFBZSxvQkFDckIsTUFBTSxTQUNkO0FBQ1I7QUFDSjtBQXJJRCxFQXFJQyxPQUFPLEdBQ0o7YUFBUyxlQUFlLE9BQU8sWUFDbEMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgQ3ViWV9ET00gZnJvbSAnLi9GcmFtZXdvcmsvQ3ViWS9DdWJZX0RPTSc7XHJcblxyXG5cclxudmFyIG1haW5Db250ZW50ID0gbmV3IEN1YllfRE9NKCdkaXYnLCdob21lQ29udGVudCcpO1xyXG5tYWluQ29udGVudC5zdHlsZSgnd2lkdGgnLCcxMDB2dycpXHJcbiAgICAuc3R5bGUoJ2hlaWdodCcsJzEwMHZoJylcclxuICAgIC5zdHlsZSgnYmFja2dyb3VuZCcsJyMyMjJmM2UnKVxyXG4gICAgLnN0eWxlKCdwb3NpdGlvbicsJ3JlbGF0aXZlJylcclxuICAgIC5zdHlsZSgndHJhbnNpdGlvbicsICc1cycpXHJcbiAgICAuc3R5bGUoJ292ZXJmbG93JywnaGlkZGVuJylcclxuICAgIC5vbignbW91c2Vtb3ZlJyxmdW5jdGlvbiAoZSxkKSB7XHJcbiAgICAgICAgbGV0IHggPSBlLmNsaWVudFg7XHJcbiAgICAgICAgbGV0IHkgPSBlLmNsaWVudFk7XHJcbiAgICAgICAgbGV0IG9yaWdpbiA9IHtcclxuICAgICAgICAgICAgeDogd2luZG93LmlubmVyV2lkdGgvMixcclxuICAgICAgICAgICAgeTogd2luZG93LmlubmVySGVpZ2h0LzJcclxuICAgICAgICB9O1xyXG4gICAgICAgIG1haW5Db250ZW50LmR4ID0gLSh4IC0gb3JpZ2luLngpLzEwO1xyXG4gICAgICAgIG1haW5Db250ZW50LmR5ID0gLSh5IC0gb3JpZ2luLnkpLzEwO1xyXG5cclxuICAgIH0pO1xyXG52YXIgYmFja2dyb3VuZEFuID0gY3IuYXBwZW5kKCdiYWNrZ3JvdW5kQW4nKVxyXG4gICAgLmF0dHIoJ2ZyZXEnLDIwMClcclxuICAgIC5hdHRyKCdleGVjdXRpb25UaW1lcycsMSlcclxuICAgIC5hdHRyKCdhY3Rpb24nLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBtYWluQ29udGVudC5zdHlsZSgnYmFja2dyb3VuZCcsJ2JsYWNrJylcclxuICAgIH0pLmluc2VydCgpO1xyXG5cclxudmFyIGhlYWRMaW5lID0gbWFpbkNvbnRlbnQuYXBwZW5kKCdoMScsJ2hlYWRMaW5lJylcclxuICAgIC5jb250ZW50KCdGUk9OVCBFTkQgRU5HSU5FRVInKVxyXG4gICAgLnN0eWxlKCdwb3NpdGlvbicsJ2ZpeGVkJylcclxuICAgIC5zdHlsZSgnY29sb3InLCd3aGl0ZScpXHJcbiAgICAuc3R5bGUoJ3dpZHRoJywnMTAwJScpXHJcbiAgICAuc3R5bGUoJ2hlaWdodCcsICc2MHB4JylcclxuICAgIC5zdHlsZSgndGV4dC1hbGlnbicsJ2NlbnRlcicpXHJcbiAgICAuc3R5bGUoJ2xlZnQnLCcwJylcclxuICAgIC5zdHlsZSgncmlnaHQnLCcwJylcclxuICAgIC5zdHlsZSgnYm90dG9tJywnMzMlJylcclxuICAgIC5zdHlsZSgnbWFyZ2luJywnYXV0bycpXHJcbiAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsJzY0cHgnKVxyXG4gICAgLnN0eWxlKCd0cmFuc2l0aW9uJywgJzFzJylcclxuICAgIC5zdHlsZSgndGV4dC1zaGFkb3cnLCcwIDAgMTBweCAjNzBhMWZmJylcclxuICAgIC5zdHlsZSgnei1pbmRleCcsMSlcclxuICAgIC5vbignbW91c2VvdmVyJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5zdHlsZSgndGV4dC1zaGFkb3cnLCcwIDAgMzBweCAjZWNjYzY4JylcclxuICAgIH0pXHJcbiAgICAub24oJ21vdXNlbGVhdmUnLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnN0eWxlKCd0ZXh0LXNoYWRvdycsJzAgMCAxMHB4ICM3MGExZmYnKVxyXG4gICAgfSk7XHJcbnZhciBob21lSGVhZExpbmVBbmltYXRpb24gPSBjci5hcHBlbmQoJ2hvbWVfaGVhZExpbmVfYW5pbWF0aW9uJylcclxuICAgIC5hdHRyKCdmcmVxJywyNSlcclxuICAgIC5hdHRyKCdhY3Rpb24nLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBsZXQgb2RkID0gTWF0aC5yYW5kb20oKSoxMDA7XHJcbiAgICAgICAgaWYob2RkPjUwKXtcclxuICAgICAgICAgICAgaGVhZExpbmUuc3R5bGUoJ3RleHQtc2hhZG93JywnMCAwIDMwcHggI2VjY2M2OCcpXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGhlYWRMaW5lLnN0eWxlKCd0ZXh0LXNoYWRvdycsJzAgMCAxMHB4ICM3MGExZmYnKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICAuaW5zZXJ0KCk7XHJcblxyXG52YXIgc3ViSGVhZExpbmUgPSBtYWluQ29udGVudC5hcHBlbmQoJ2gxJywnc3ViSGVhZExpbmUnKVxyXG4gICAgLmNvbnRlbnQoJy0gd2hvIG1ha2VzIGRhdGEgYWxpdmUgLScpXHJcbiAgICAuc3R5bGUoJ3Bvc2l0aW9uJywnZml4ZWQnKVxyXG4gICAgLnN0eWxlKCdjb2xvcicsJyNlY2NjNjgnKVxyXG4gICAgLnN0eWxlKCd3aWR0aCcsJzEwMCUnKVxyXG4gICAgLnN0eWxlKCdoZWlnaHQnLCAnMzBweCcpXHJcbiAgICAuc3R5bGUoJ3RleHQtYWxpZ24nLCdjZW50ZXInKVxyXG4gICAgLnN0eWxlKCdsZWZ0JywnMCcpXHJcbiAgICAuc3R5bGUoJ3JpZ2h0JywnMCcpXHJcbiAgICAuc3R5bGUoJ2JvdHRvbScsJzMwJScpXHJcbiAgICAuc3R5bGUoJ21hcmdpbicsJ2F1dG8nKVxyXG4gICAgLnN0eWxlKCdmb250LXNpemUnLCczMnB4JylcclxuICAgIC5zdHlsZSgndHJhbnNpdGlvbicsICcxcycpXHJcbiAgICAuc3R5bGUoJ3RleHQtc2hhZG93JywnMCAwIDEwcHggI2VjY2M2OCcpXHJcbiAgICAuc3R5bGUoJ3otaW5kZXgnLDEpO1xyXG52YXIgaW5mb0J1dHRvbkhhbG8gPSBtYWluQ29udGVudC5hcHBlbmQoJ3NwYW4nLCdpbmZvQnV0dG9uSGFsbycpXHJcbiAgICAuc3R5bGUoJ3Bvc2l0aW9uJywnZml4ZWQnKVxyXG4gICAgLnN0eWxlKCdjb2xvcicsJyNlY2NjNjgnKVxyXG4gICAgLnN0eWxlKCd3aWR0aCcsJzMycHgnKVxyXG4gICAgLnN0eWxlKCdoZWlnaHQnLCAnMzJweCcpXHJcbiAgICAuc3R5bGUoJ292ZXJmbG93JywnaGlkZGVuJylcclxuICAgIC5zdHlsZSgnYm9yZGVyLXJhZGl1cycsJzRweCcpXHJcbiAgICAuc3R5bGUoJ3RleHQtYWxpZ24nLCdjZW50ZXInKVxyXG4gICAgLnN0eWxlKCdsZWZ0JywnMCcpXHJcbiAgICAuc3R5bGUoJ3JpZ2h0JywnMCcpXHJcbiAgICAuc3R5bGUoJ2JvdHRvbScsJzE4JScpXHJcbiAgICAuc3R5bGUoJ21hcmdpbicsJ2F1dG8nKVxyXG4gICAgLnN0eWxlKCdmb250LXNpemUnLCcyNHB4JylcclxuICAgIC5zdHlsZSgndHJhbnNpdGlvbicsICcwLjVzJylcclxuICAgIC5zdHlsZSgnYm9yZGVyJywnMXB4IHNvbGlkICNlY2NjNjgnKVxyXG4gICAgLnN0eWxlKCdib3gtc2hhZG93JywnMCAwIDMwcHggI2VjY2M2OCcpXHJcbiAgICAuc3R5bGUoJ2N1cnNvcicsJ3BvaW50ZXInKVxyXG4gICAgLnN0eWxlKCd6LWluZGV4JywxKTtcclxudmFyIGluZm9CdXR0b24gPSBtYWluQ29udGVudC5hcHBlbmQoJ3NwYW4nLCdpbmZvQnV0dG9uJylcclxuICAgIC5jb250ZW50KCdXYW5uYSBrbm93IG1vcmU/JylcclxuICAgIC5zdHlsZSgncG9zaXRpb24nLCdmaXhlZCcpXHJcbiAgICAuc3R5bGUoJ2NvbG9yJywnI2VjY2M2OCcpXHJcbiAgICAuc3R5bGUoJ3dpZHRoJywnMzJweCcpXHJcbiAgICAuc3R5bGUoJ2hlaWdodCcsICczMnB4JylcclxuICAgIC5zdHlsZSgnb3ZlcmZsb3cnLCdoaWRkZW4nKVxyXG4gICAgLnN0eWxlKCdib3JkZXInLCcxcHggc29saWQgdHJhbnNwYXJlbnQnKVxyXG4gICAgLnN0eWxlKCdib3JkZXItcmFkaXVzJywnNHB4JylcclxuICAgIC5zdHlsZSgndGV4dC1hbGlnbicsJ2NlbnRlcicpXHJcbiAgICAuc3R5bGUoJ2xlZnQnLCcwJylcclxuICAgIC5zdHlsZSgncmlnaHQnLCcwJylcclxuICAgIC5zdHlsZSgnYm90dG9tJywnMTglJylcclxuICAgIC5zdHlsZSgnbWFyZ2luJywnYXV0bycpXHJcbiAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsJzI0cHgnKVxyXG4gICAgLnN0eWxlKCd0cmFuc2l0aW9uJywgJzAuNXMnKVxyXG4gICAgLnN0eWxlKCdiYWNrZ3JvdW5kJywgJyNlY2NjNjgnKVxyXG4gICAgLnN0eWxlKCd0ZXh0LXNoYWRvdycsJzAgMCA1cHggI2VjY2M2OCcpXHJcbiAgICAuc3R5bGUoJ2JveC1zaGFkb3cnLCcwIDAgMTB4ICNlY2NjNjgnKVxyXG4gICAgLnN0eWxlKCdjdXJzb3InLCdwb2ludGVyJylcclxuICAgIC5zdHlsZSgnei1pbmRleCcsMSlcclxuICAgIC5vbignY2xpY2snLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjYy5zdG9yZVZhbHVlKCdjdXJyZW50VmlldycsJ2Fib3V0Jyk7XHJcbiAgICB9KVxyXG4gICAgLm9uKCdtb3VzZW92ZXInLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnN0eWxlKCdiYWNrZ3JvdW5kJywncmdiYSgwLCAwLCAwLCAwLjUpJylcclxuICAgICAgICAgICAgLnN0eWxlKCd3aWR0aCcsJzEwMCUnKVxyXG4gICAgICAgICAgICAuc3R5bGUoJ2JveC1zaGFkb3cnLCcnKVxyXG4gICAgICAgIGluZm9CdXR0b24ub3ZlcmVkID0gdHJ1ZTtcclxuICAgIH0pXHJcbiAgICAub24oJ21vdXNlbGVhdmUnLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnN0eWxlKCdiYWNrZ3JvdW5kJywgJyNlY2NjNjgnKVxyXG4gICAgICAgICAgICAuc3R5bGUoJ3dpZHRoJywnMzJweCcpXHJcbiAgICAgICAgICAgIC5zdHlsZSgnYm94LXNoYWRvdycsJzAgMCAxMHB4ICNlY2NjNjgnKVxyXG4gICAgICAgIGluZm9CdXR0b24ub3ZlcmVkID0gZmFsc2U7XHJcbiAgICB9KTtcclxudmFyIGluZm9CdXR0b25IYWxvQW4gPSBjci5hcHBlbmQoJ2luZm9CdXR0b25IYWxvQW4nKVxyXG4gICAgLmF0dHIoJ2ZyZXEnLDYwKVxyXG4gICAgLmF0dHIoJ2FjdGlvbicsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmKGluZm9CdXR0b24ub3ZlcmVkID09PSB0cnVlKXtcclxuICAgICAgICAgICAgaW5mb0J1dHRvbkhhbG8uc3RhdGUgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzd2l0Y2goaW5mb0J1dHRvbkhhbG8uc3RhdGUpe1xyXG4gICAgICAgICAgICBjYXNlIHVuZGVmaW5lZDpcclxuICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgaW5mb0J1dHRvbkhhbG8uc3RhdGUgPSAxO1xyXG4gICAgICAgICAgICAgICAgaW5mb0J1dHRvbkhhbG8uc3R5bGUoJ3dpZHRoJywgJzY0cHgnKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdHlsZSgnYm90dG9tJywnY2FsYygxOCUgLSAxNXB4KScpXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0eWxlKCdoZWlnaHQnLCAnNjRweCcpXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0eWxlKCdvcGFjaXR5JywgMCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgaW5mb0J1dHRvbkhhbG8uc3RhdGUgPSAyO1xyXG4gICAgICAgICAgICAgICAgaW5mb0J1dHRvbkhhbG8uc3R5bGUoJ3dpZHRoJywgJzMycHgnKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdHlsZSgnYm90dG9tJywnMTglJylcclxuICAgICAgICAgICAgICAgICAgICAuc3R5bGUoJ2hlaWdodCcsICczMnB4Jyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgaW5mb0J1dHRvbkhhbG8uc3RhdGUgPSAwO1xyXG4gICAgICAgICAgICAgICAgaW5mb0J1dHRvbkhhbG8uc3R5bGUoJ29wYWNpdHknLCAxKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH0pLmluc2VydCgpO1xyXG5cclxud2luZG93Lm1vYmlsZWNoZWNrID0gZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgY2hlY2sgPSBmYWxzZTtcclxuICAgIChmdW5jdGlvbihhKXtpZigvKGFuZHJvaWR8YmJcXGQrfG1lZWdvKS4rbW9iaWxlfGF2YW50Z298YmFkYVxcL3xibGFja2JlcnJ5fGJsYXplcnxjb21wYWx8ZWxhaW5lfGZlbm5lY3xoaXB0b3B8aWVtb2JpbGV8aXAoaG9uZXxvZCl8aXJpc3xraW5kbGV8bGdlIHxtYWVtb3xtaWRwfG1tcHxtb2JpbGUuK2ZpcmVmb3h8bmV0ZnJvbnR8b3BlcmEgbShvYnxpbilpfHBhbG0oIG9zKT98cGhvbmV8cChpeGl8cmUpXFwvfHBsdWNrZXJ8cG9ja2V0fHBzcHxzZXJpZXMoNHw2KTB8c3ltYmlhbnx0cmVvfHVwXFwuKGJyb3dzZXJ8bGluayl8dm9kYWZvbmV8d2FwfHdpbmRvd3MgY2V8eGRhfHhpaW5vL2kudGVzdChhKXx8LzEyMDd8NjMxMHw2NTkwfDNnc298NHRocHw1MFsxLTZdaXw3NzBzfDgwMnN8YSB3YXxhYmFjfGFjKGVyfG9vfHNcXC0pfGFpKGtvfHJuKXxhbChhdnxjYXxjbyl8YW1vaXxhbihleHxueXx5dyl8YXB0dXxhcihjaHxnbyl8YXModGV8dXMpfGF0dHd8YXUoZGl8XFwtbXxyIHxzICl8YXZhbnxiZShja3xsbHxucSl8YmkobGJ8cmQpfGJsKGFjfGF6KXxicihlfHYpd3xidW1ifGJ3XFwtKG58dSl8YzU1XFwvfGNhcGl8Y2N3YXxjZG1cXC18Y2VsbHxjaHRtfGNsZGN8Y21kXFwtfGNvKG1wfG5kKXxjcmF3fGRhKGl0fGxsfG5nKXxkYnRlfGRjXFwtc3xkZXZpfGRpY2F8ZG1vYnxkbyhjfHApb3xkcygxMnxcXC1kKXxlbCg0OXxhaSl8ZW0obDJ8dWwpfGVyKGljfGswKXxlc2w4fGV6KFs0LTddMHxvc3x3YXx6ZSl8ZmV0Y3xmbHkoXFwtfF8pfGcxIHV8ZzU2MHxnZW5lfGdmXFwtNXxnXFwtbW98Z28oXFwud3xvZCl8Z3IoYWR8dW4pfGhhaWV8aGNpdHxoZFxcLShtfHB8dCl8aGVpXFwtfGhpKHB0fHRhKXxocCggaXxpcCl8aHNcXC1jfGh0KGMoXFwtfCB8X3xhfGd8cHxzfHQpfHRwKXxodShhd3x0Yyl8aVxcLSgyMHxnb3xtYSl8aTIzMHxpYWMoIHxcXC18XFwvKXxpYnJvfGlkZWF8aWcwMXxpa29tfGltMWt8aW5ub3xpcGFxfGlyaXN8amEodHx2KWF8amJyb3xqZW11fGppZ3N8a2RkaXxrZWppfGtndCggfFxcLyl8a2xvbnxrcHQgfGt3Y1xcLXxreW8oY3xrKXxsZShub3x4aSl8bGcoIGd8XFwvKGt8bHx1KXw1MHw1NHxcXC1bYS13XSl8bGlid3xseW54fG0xXFwtd3xtM2dhfG01MFxcL3xtYSh0ZXx1aXx4byl8bWMoMDF8MjF8Y2EpfG1cXC1jcnxtZShyY3xyaSl8bWkobzh8b2F8dHMpfG1tZWZ8bW8oMDF8MDJ8Yml8ZGV8ZG98dChcXC18IHxvfHYpfHp6KXxtdCg1MHxwMXx2ICl8bXdicHxteXdhfG4xMFswLTJdfG4yMFsyLTNdfG4zMCgwfDIpfG41MCgwfDJ8NSl8bjcoMCgwfDEpfDEwKXxuZSgoY3xtKVxcLXxvbnx0Znx3Znx3Z3x3dCl8bm9rKDZ8aSl8bnpwaHxvMmltfG9wKHRpfHd2KXxvcmFufG93ZzF8cDgwMHxwYW4oYXxkfHQpfHBkeGd8cGcoMTN8XFwtKFsxLThdfGMpKXxwaGlsfHBpcmV8cGwoYXl8dWMpfHBuXFwtMnxwbyhja3xydHxzZSl8cHJveHxwc2lvfHB0XFwtZ3xxYVxcLWF8cWMoMDd8MTJ8MjF8MzJ8NjB8XFwtWzItN118aVxcLSl8cXRla3xyMzgwfHI2MDB8cmFrc3xyaW05fHJvKHZlfHpvKXxzNTVcXC98c2EoZ2V8bWF8bW18bXN8bnl8dmEpfHNjKDAxfGhcXC18b298cFxcLSl8c2RrXFwvfHNlKGMoXFwtfDB8MSl8NDd8bWN8bmR8cmkpfHNnaFxcLXxzaGFyfHNpZShcXC18bSl8c2tcXC0wfHNsKDQ1fGlkKXxzbShhbHxhcnxiM3xpdHx0NSl8c28oZnR8bnkpfHNwKDAxfGhcXC18dlxcLXx2ICl8c3koMDF8bWIpfHQyKDE4fDUwKXx0NigwMHwxMHwxOCl8dGEoZ3R8bGspfHRjbFxcLXx0ZGdcXC18dGVsKGl8bSl8dGltXFwtfHRcXC1tb3x0byhwbHxzaCl8dHMoNzB8bVxcLXxtM3xtNSl8dHhcXC05fHVwKFxcLmJ8ZzF8c2kpfHV0c3R8djQwMHx2NzUwfHZlcml8dmkocmd8dGUpfHZrKDQwfDVbMC0zXXxcXC12KXx2bTQwfHZvZGF8dnVsY3x2eCg1Mnw1M3w2MHw2MXw3MHw4MHw4MXw4M3w4NXw5OCl8dzNjKFxcLXwgKXx3ZWJjfHdoaXR8d2koZyB8bmN8bncpfHdtbGJ8d29udXx4NzAwfHlhc1xcLXx5b3VyfHpldG98enRlXFwtL2kudGVzdChhLnN1YnN0cigwLDQpKSkgY2hlY2sgPSB0cnVlO30pKG5hdmlnYXRvci51c2VyQWdlbnR8fG5hdmlnYXRvci52ZW5kb3J8fHdpbmRvdy5vcGVyYSk7XHJcbiAgICByZXR1cm4gY2hlY2s7XHJcbn07XHJcbnZhciBjaXJjbGVOdW0gPSBtb2JpbGVjaGVjaygpPzUwOjE1MDtcclxudmFyIGNpcmNsZUxpc3QgPSBbXTtcclxuXHJcbmZvcih2YXIgaT0wO2k8Y2lyY2xlTnVtO2krKyl7XHJcbiAgICBsZXQgeCA9IE1hdGgucmFuZG9tKCkqd2luZG93LmlubmVyV2lkdGgrMTA7XHJcbiAgICBsZXQgeSA9IE1hdGgucmFuZG9tKCkqd2luZG93LmlubmVySGVpZ2h0KzEwO1xyXG4gICAgbGV0IGNpcmNsZSA9IG1haW5Db250ZW50LmFwcGVuZCgnZGl2JylcclxuICAgICAgICAuc3R5bGUoJ3Bvc2l0aW9uJywnYWJzb2x1dGUnKVxyXG4gICAgICAgIC5zdHlsZSgnd2lkdGgnLCcyMHB4JylcclxuICAgICAgICAuc3R5bGUoJ2hlaWdodCcsJzIwcHgnKVxyXG4gICAgICAgIC5zdHlsZSgnYm9yZGVyLXJhZGl1cycsJzRweCcpXHJcbiAgICAgICAgLnN0eWxlKCdiYWNrZ3JvdW5kJywnI2VjY2M2OCcpXHJcbiAgICAgICAgLnN0eWxlKCd0cmFuc2l0aW9uJywnMC4xcyBsaW5lYXInKVxyXG4gICAgICAgIC5zdHlsZSgnYm94LXNoYWRvdycsJzAgMCAxMHB4ICNlY2NjNjgnKVxyXG4gICAgICAgIC5zdHlsZSgnb3BhY2l0eScsICcwJylcclxuICAgICAgICAuc3R5bGUoJ3RyYW5zZm9ybScsJ3RyYW5zbGF0ZSgnK3grJ3B4LCcreSsncHgpJyk7XHJcbiAgICBcclxuICAgIGNpcmNsZS54ID0geDtcclxuICAgIGNpcmNsZS55ID0geTtcclxuICAgIGNpcmNsZS5keCA9IE1hdGgucmFuZG9tKCktMC41O1xyXG4gICAgY2lyY2xlLmR5ID0gTWF0aC5yYW5kb20oKS0wLjU7XHJcbiAgICBjaXJjbGUuZHMgPSAwLjAxO1xyXG4gICAgY2lyY2xlLnNjYWxlID0gIE1hdGgucmFuZG9tKCk7XHJcbiAgICBjaXJjbGUuY291bnRlciA9IDEwO1xyXG4gICAgbGV0IGNpcmNsZUFuID0gQVhSLmFwcGVuZCgnaG9tZV9jaXJjbGVfYW5pbWF0aW9uJylcclxuICAgICAgICAuYXR0cignZnJlcScsNSlcclxuICAgICAgICAuYXR0cignYWN0aW9uJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGxldCBzY2FsZSA9IGNpcmNsZS5zY2FsZTtcclxuICAgICAgICAgICAgY2lyY2xlLngrPWNpcmNsZS5keDtcclxuICAgICAgICAgICAgY2lyY2xlLnkrPWNpcmNsZS5keTtcclxuXHJcbiAgICAgICAgICAgIGNpcmNsZS5zdHlsZSgndHJhbnNmb3JtJywndHJhbnNsYXRlKCcrKGNpcmNsZS54ICsgKG1haW5Db250ZW50LmR4fHwwKSpzY2FsZSkrJ3B4LCcrKGNpcmNsZS55ICsgKG1haW5Db250ZW50LmR5fHwwKSpzY2FsZSkrJ3B4KSBzY2FsZSgnK3NjYWxlKycpJylcclxuICAgICAgICAgICAgICAgIC5zdHlsZSgnb3BhY2l0eScsIHNjYWxlKVxyXG4gICAgICAgICAgICAgICAgLnN0eWxlKCd6LWluZGV4Jywgc2NhbGU+PTAuOD8yOjApXHJcbiAgICAgICAgICAgICAgICAuc3R5bGUoJ2JveC1zaGFkb3cnLCcwIDAgJysoTWF0aC5yYW5kb20oKSoxMCsxMCkrJ3B4ICNlY2NjNjgnKTtcclxuICAgICAgICAgICAgaWYoY2lyY2xlLng+d2luZG93LmlubmVyV2lkdGgpe1xyXG4gICAgICAgICAgICAgICAgY2lyY2xlLmR4ID0gLShNYXRoLnJhbmRvbSgpKjAuNSswLjEpO1xyXG4gICAgICAgICAgICB9ZWxzZSBpZihjaXJjbGUueDwwKXtcclxuICAgICAgICAgICAgICAgIGNpcmNsZS5keCA9IE1hdGgucmFuZG9tKCkqMC41KzAuMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihjaXJjbGUueT53aW5kb3cuaW5uZXJIZWlnaHQpe1xyXG4gICAgICAgICAgICAgICAgY2lyY2xlLmR5ID0gLShNYXRoLnJhbmRvbSgpKjAuNSswLjEpO1xyXG4gICAgICAgICAgICB9ZWxzZSBpZihjaXJjbGUueTwwKXtcclxuICAgICAgICAgICAgICAgIGNpcmNsZS5keSA9IE1hdGgucmFuZG9tKCkqMC41KzAuMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjaXJjbGUuY291bnRlci0tO1xyXG4gICAgICAgICAgICBpZihjaXJjbGUuY291bnRlcjw9MCl7XHJcbiAgICAgICAgICAgICAgICBjaXJjbGUuY291bnRlcj0xMDtcclxuICAgICAgICAgICAgICAgIGNpcmNsZS5zY2FsZSs9Y2lyY2xlLmRzO1xyXG4gICAgICAgICAgICAgICAgaWYoY2lyY2xlLnNjYWxlPj0xKXtcclxuICAgICAgICAgICAgICAgICAgICBjaXJjbGUuZHM9LTAuMDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZihjaXJjbGUuc2NhbGU8PTApe1xyXG4gICAgICAgICAgICAgICAgICAgIGNpcmNsZS5kcz0wLjAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkuaW5zZXJ0KCk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IG1haW5Db250ZW50OyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFueGluIFlhbmcgb24gMy8yOC8yMDE4LlxyXG4gKi9cclxuaW1wb3J0IENDIGZyb20gJy4vRnJhbWV3b3JrL0N1YlkvQ3ViWV9Db3JlJztcclxuaW1wb3J0IEN1YllfRE9NIGZyb20gJy4vRnJhbWV3b3JrL0N1YlkvQ3ViWV9ET00nO1xyXG5pbXBvcnQgQ1IgZnJvbSAnLi9GcmFtZXdvcmsvQ3ViWS9DdWJZX1JvdXRpbmUnO1xyXG5pbXBvcnQgaG9tZUNvbnRlbnQgZnJvbSAnLi9ob21lJztcclxudHJ5IHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgbWVudUNvbnRhaW5lci51cGRhdGVyKCdjbG9zZU1lbnUnKSgpO1xyXG4gICAgfSk7XHJcbiAgICB3aW5kb3cucm9vdCA9IG5ldyBDdWJZX0RPTSgnZGl2JywgJ2F4X3Jvb3QnLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpO1xyXG4gICAgcm9vdC5zdHlsZSgnZm9udC1zaXplJywgJzEycHgnKVxyXG4gICAgICAgIC5zdHlsZSgnY3Vyc29yJywgJ3VybCgpLCBhdXRvJyk7XHJcbiAgICB2YXIgaGVhZGVyID0gcm9vdC5hcHBlbmQoJ2RpdicsICdoZWFkZXInKVxyXG4gICAgICAgIC5hdHRyKCdvbnNlbGVjdHN0YXJ0JywgJ3JldHVybiBmYWxzZTsnKVxyXG4gICAgICAgIC5zdHlsZSgnZGlzcGxheScsICdmbGV4JylcclxuICAgICAgICAuc3R5bGUoJ3Bvc2l0aW9uJywgJ2Fic29sdXRlJylcclxuICAgICAgICAvLy5zdHlsZSgnYmFja2dyb3VuZCcsJ3JnYmEoMTEyLCAxNjEsIDI1NSwxLjApJylcclxuICAgICAgICAuc3R5bGUoJ29wYWNpdHknLCAnMC41JylcclxuICAgICAgICAvLy5zdHlsZSgnYm94LXNoYWRvdycsICcwcHggMHB4IDVweCByZ2JhKDExMiwgMTYxLCAyNTUsMCknKVxyXG4gICAgICAgIC8vLnN0eWxlKCdib3JkZXInLCcxcHggc29saWQgcmdiYSgxMTIsIDE2MSwgMjU1LCAwKScpXHJcbiAgICAgICAgLy8uc3R5bGUoJ2JvcmRlci1yYWRpdXMnLCc4cHgnKVxyXG4gICAgICAgIC5zdHlsZSgndG9wJywgJzFlbScpXHJcbiAgICAgICAgLnN0eWxlKCdoZWlnaHQnLCAnM2VtJylcclxuICAgICAgICAuc3R5bGUoJ3otaW5kZXgnLCAnMTAnKVxyXG4gICAgICAgIC5zdHlsZSgndHJhbnNpdGlvbicsICcwLjNzJylcclxuICAgICAgICAub24oJ21vdXNlb3ZlcicsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5zdHlsZSgnb3BhY2l0eScsICcxJylcclxuICAgICAgICAgICAgLy8uc3R5bGUoJ2JveC1zaGFkb3cnLCAnMHB4IDBweCA1cHggcmdiYSgxMTIsIDE2MSwgMjU1LDEuMCknKVxyXG4gICAgICAgICAgICAvLy5zdHlsZSgnYm9yZGVyJywnMXB4IHNvbGlkIHJnYmEoMTEyLCAxNjEsIDI1NSwgMC41KScpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLnN0eWxlKCdvcGFjaXR5JywgJzAuNScpXHJcbiAgICAgICAgICAgIC8vLnN0eWxlKCdib3gtc2hhZG93JywgJzBweCAwcHggNXB4IHJnYmEoMTEyLCAxNjEsIDI1NSwwKScpXHJcbiAgICAgICAgICAgIC8vLnN0eWxlKCdib3JkZXInLCcxcHggc29saWQgcmdiYSgxMTIsIDE2MSwgMjU1LCAwKScpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIHZhciBoZWFkZXJJdGVtcyA9IFsnTWVudScsICdQbGF5Z3JvdW5kJywgJ0Fib3V0IE1lJ107XHJcbiAgICB2YXIgaW5kZXggPSAwO1xyXG4gICAgaGVhZGVySXRlbXMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgIGhlYWRlckl0ZW1zW2luZGV4KytdID0gaGVhZGVyLmFwcGVuZCgnZGl2JywgJ2hlYWRlcl8nICsgaXRlbSlcclxuICAgICAgICAgICAgLmNvbnRlbnQoaXRlbSlcclxuICAgICAgICAgICAgLmFwcGVuZENsYXNzKCd4eCcpXHJcbiAgICAgICAgICAgIC5zdHlsZSgnY29sb3InLCAnd2hpdGUnKVxyXG4gICAgICAgICAgICAuc3R5bGUoJ3BhZGRpbmcnLCAnMWVtIDAuNWVtJylcclxuICAgICAgICAgICAgLnN0eWxlKCdjdXJzb3InLCAncG9pbnRlcicpXHJcbiAgICAgICAgICAgIC5zdHlsZSgndGV4dC1zaGFkb3cnLCAnMCAwIDEwcHggI2VjY2M2OCcpXHJcbiAgICAgICAgICAgIC5zdHlsZSgndHJhbnNpdGlvbicsICcwLjNzJylcclxuICAgICAgICAgICAgLm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0eWxlKCd0ZXh0LXNoYWRvdycsICcwIDAgMTBweCAjZWNjYzY4JylcclxuICAgICAgICAgICAgICAgICAgICAuc3R5bGUoJ2NvbG9yJywgJyNlY2NjNjgnKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdHlsZSgndGV4dC1zaGFkb3cnLCAnMCAwIDIwcHggI2VjY2M2OCcpXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0eWxlKCdjb2xvcicsICd3aGl0ZScpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgdmFyIGhlYWRlck1lbnVCdXR0b24gPSBoZWFkZXJJdGVtc1swXTtcclxuICAgIGhlYWRlck1lbnVCdXR0b24uc3R5bGUoJ3Bvc2l0aW9uJywgJ3JlbGF0aXZlJyk7XHJcbiAgICB2YXIgbWVudUNvbnRhaW5lciA9IGhlYWRlck1lbnVCdXR0b24uYXBwZW5kKCdkaXYnLCAnbWVudUNvbnRhaW5lcicpXHJcbiAgICAgICAgLnN0eWxlKCdwb3NpdGlvbicsICdhYnNvbHV0ZScpXHJcbiAgICAgICAgLnN0eWxlKCd3aWR0aCcsICcyNTZweCcpXHJcbiAgICAgICAgLnN0eWxlKCdoZWlnaHQnLCAnMHB4JylcclxuICAgICAgICAuc3R5bGUoJ2JhY2tncm91bmQnLCAnJylcclxuICAgICAgICAuc3R5bGUoJ3RvcCcsICcxMjUlJylcclxuICAgICAgICAuc3R5bGUoJ2xlZnQnLCAnMCcpXHJcbiAgICAgICAgLnN0eWxlKCdvdmVyZmxvdycsICdoaWRkZW4nKVxyXG4gICAgICAgIC8vLnN0eWxlKCdib3gtc2hhZG93JywgJzBweCAwcHggNXB4IHJnYmEoMTEyLCAxNjEsIDI1NSwwKScpXHJcbiAgICAgICAgLy8uc3R5bGUoJ2JvcmRlcicsJzFweCBzb2xpZCByZ2JhKDExMiwgMTYxLCAyNTUsIDApJylcclxuICAgICAgICAuc3R5bGUoJ3RyYW5zaXRpb24nLCAnMC4zcycpXHJcbiAgICAgICAgLnNldFVwZGF0ZXIoJ3RvZ2dsZU1lbnUnLCBmdW5jdGlvbiAoZCkge1xyXG4gICAgICAgICAgICBsZXQgaGFzT3BlbiA9IHRoaXMuaGFzT3BlbiB8fCBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKGhhc09wZW4pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3R5bGUoJ2hlaWdodCcsICcwJylcclxuICAgICAgICAgICAgICAgIC8vLnN0eWxlKCdib3gtc2hhZG93JywgJzBweCAwcHggNXB4IHJnYmEoMTEyLCAxNjEsIDI1NSwwKScpXHJcbiAgICAgICAgICAgICAgICAvLy5zdHlsZSgnYm9yZGVyJywnMXB4IHNvbGlkIHJnYmEoMTEyLCAxNjEsIDI1NSwgMCknKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3R5bGUoJ2hlaWdodCcsICczM3ZoJylcclxuICAgICAgICAgICAgICAgIC8vLnN0eWxlKCdib3gtc2hhZG93JywgJzBweCAwcHggNXB4IHJnYmEoMTEyLCAxNjEsIDI1NSwxLjApJylcclxuICAgICAgICAgICAgICAgIC8vLnN0eWxlKCdib3JkZXInLCcxcHggc29saWQgcmdiYSgxMTIsIDE2MSwgMjU1LCAwLjUpJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5oYXNPcGVuID0gIWhhc09wZW47XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuc2V0VXBkYXRlcignY2xvc2VNZW51JywgZnVuY3Rpb24gKGQpIHtcclxuICAgICAgICAgICAgdGhpcy5zdHlsZSgnaGVpZ2h0JywgJzAnKVxyXG4gICAgICAgICAgICAgICAgLnN0eWxlKCdib3gtc2hhZG93JywgJzBweCAwcHggNXB4IHJnYmEoMTEyLCAxNjEsIDI1NSwwKScpXHJcbiAgICAgICAgICAgICAgICAuc3R5bGUoJ2JvcmRlcicsICcxcHggc29saWQgcmdiYSgxMTIsIDE2MSwgMjU1LCAwKScpO1xyXG4gICAgICAgICAgICB0aGlzLmhhc09wZW4gPSBmYWxzZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICBoZWFkZXJNZW51QnV0dG9uLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICBtZW51Q29udGFpbmVyLnVwZGF0ZXIoJ3RvZ2dsZU1lbnUnKSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdmFyIG1haW5Db250YWluZXIgPSByb290LmFwcGVuZCgnZGl2JywgJ21haW5Db250YWluZXInKTtcclxuICAgIG1haW5Db250YWluZXIuYXBwZW5kRWxlbWVudChob21lQ29udGVudCk7XHJcbiAgICBjYy5zdG9yZVZhbHVlKCdjdXJyZW50VmlldycsJ2hvbWUnKTtcclxuICAgIGNjLmNvbm5lY3QoJ2N1cnJlbnRWaWV3JyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRWaWV3ID0gY2MuZ2V0VmFsdWUoJ2N1cnJlbnRWaWV3Jyk7XHJcbiAgICAgICAgbWFpbkNvbnRhaW5lci5yZW1vdmUoKVxyXG4gICAgfSk7XHJcblxyXG4gICAgdmFyIHZlcnNpb24gPSByb290LmFwcGVuZCgncCcsICd2ZXJzaW9uJylcclxuICAgICAgICAuc3R5bGUoJ3Bvc2l0aW9uJywgJ2ZpeGVkJylcclxuICAgICAgICAuc3R5bGUoJ2JvdHRvbScsICcwcHgnKVxyXG4gICAgICAgIC5zdHlsZSgncmlnaHQnLCAnMCcpXHJcbiAgICAgICAgLnN0eWxlKCdwYWRkaW5nLXJpZ2h0JywgJzFlbScpXHJcbiAgICAgICAgLnN0eWxlKCdjb2xvcicsICdsaWdodGdyYXknKVxyXG4gICAgICAgIC5jb250ZW50KG5ldyBEYXRlKCkpXHJcbiAgICAgICAgLnNldFVwZGF0ZXIoJ3RpbWVyJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRlbnQoJ0FYX1JvdXRpbmU6IExhc3JDeWNsZVRpbWU6ICcgKyBjci5sYXN0Q3ljbGVUaW1lICsgJ21zIHwgQ1BTOicgKyBjci5jeWNsZVBlclNlYyArICcgfExvbmdlc3Q6ICcgKyBjci5sb25nZXN0Um91dGluZVRpbWUgKyAnbXMgfCBMYXN0OicgKyBjci5sYXN0Um91dGluZVRpbWUgKyAnbXMnKTtcclxuICAgICAgICB9KTtcclxuICAgIHZhciB0aW1lciA9IGNyLmFwcGVuZCgndGltZXInKVxyXG4gICAgICAgIC5hdHRyKCdmcmVxJywgMSlcclxuICAgICAgICAuYXR0cignYWN0aW9uJywgdmVyc2lvbi51cGRhdGVyKCd0aW1lcicpKVxyXG4gICAgICAgIC5pbnNlcnQoKTtcclxuICAgIHZhciBtZW51Q29udGVudHMgPSBtZW51Q29udGFpbmVyLmFwcGVuZCgndWwnKVxyXG4gICAgICAgIC5zdHlsZSgncGFkZGluZy1sZWZ0JywgJzJlbScpXHJcbiAgICAgICAgLnN0eWxlKCdtYXJnaW4nLCAnMCcpO1xyXG4gICAgdmFyIG1lbnVJdGVtcyA9IFsnQ29taW5nIHNvb24nLCAnTWF5IENvbWluZyBzb29uJywgJ3Byb2JhYmx5IENvbWluZyBzb29uJ107XHJcbiAgICBpbmRleCA9IDA7XHJcbiAgICBtZW51SXRlbXMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgIG1lbnVJdGVtc1tpbmRleCsrXSA9IG1lbnVDb250ZW50cy5hcHBlbmQoJ2xpJywgJ21lbnVfJyArIGl0ZW0pXHJcbiAgICAgICAgICAgIC5jb250ZW50KGl0ZW0pXHJcbiAgICAgICAgICAgIC5zdHlsZSgnY29sb3InLCAnd2hpdGUnKVxyXG4gICAgICAgICAgICAuc3R5bGUoJ3BhZGRpbmcnLCAnMWVtIDAuNWVtJylcclxuICAgICAgICAgICAgLnN0eWxlKCdjdXJzb3InLCAncG9pbnRlcicpXHJcbiAgICAgICAgICAgIC5zdHlsZSgndGV4dC1zaGFkb3cnLCAnMCAwIDEwcHggI2VjY2M2OCcpXHJcbiAgICAgICAgICAgIC5zdHlsZSgndHJhbnNpdGlvbicsICcwLjNzJylcclxuICAgICAgICAgICAgLm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0eWxlKCd0ZXh0LXNoYWRvdycsICcwIDAgMTBweCAjZWNjYzY4JylcclxuICAgICAgICAgICAgICAgICAgICAuc3R5bGUoJ2NvbG9yJywgJyNlY2NjNjgnKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdHlsZSgndGV4dC1zaGFkb3cnLCAnMCAwIDIwcHggI2VjY2M2OCcpXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0eWxlKCdjb2xvcicsICd3aGl0ZScpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59Y2F0Y2ggKGUpe1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpLmlubmVySFRNTD0gZTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9