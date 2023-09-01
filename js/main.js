/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/main.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/components/_mobile-menu.js":
/*!*******************************************!*\
  !*** ./src/js/components/_mobile-menu.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function () {
  var menuButton = document.querySelector('.header__menu-button');
  var mobileMenu = document.querySelector('.mobile-menu');
  menuButton.addEventListener('click', function () {
    if (mobileMenu.classList.contains('mobile-menu--show')) {
      mobileMenu.classList.remove('mobile-menu--show');
      setTimeout(function () {
        mobileMenu.style.display = '';
        document.body.style.overflow = '';
      }, 300);
    } else {
      mobileMenu.style.display = 'flex';
      setTimeout(function () {
        mobileMenu.classList.add('mobile-menu--show');
        document.body.style.overflow = 'hidden';
      });
    }
  });
  var chevron = mobileMenu.querySelector('.mobile-menu__nav-chevron');
  chevron.addEventListener('click', function () {
    chevron.closest('.mobile-menu__nav-elem').classList.toggle('mobile-menu__nav-elem--expanded');
  });
});

/***/ }),

/***/ "./src/js/components/_scroll.js":
/*!**************************************!*\
  !*** ./src/js/components/_scroll.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");

var isPaused = false;
var currentSection = 0;
var sections = document.querySelectorAll('.section');
var footer = document.querySelector('.footer');
var sectionHeroTL = gsap__WEBPACK_IMPORTED_MODULE_0__["default"].timeline({
  paused: true
}).to([sections[1], sections[2]], {
  y: '-100vh',
  ease: "linear",
  duration: .3
}).to(sections[0], {
  scale: .8,
  rotate: 13,
  ease: "linear",
  duration: .3
}, "-=.3").to(footer, {
  y: '-100vh'
}, "-=.3");
var sectionSwipeTL = gsap__WEBPACK_IMPORTED_MODULE_0__["default"].timeline({
  paused: true
}).to(sections[2], {
  y: '-=100vh',
  ease: "linear",
  duration: .3
}).to(sections[1], {
  scale: .8,
  rotate: 13,
  ease: "linear",
  duration: .3
}, "-=.3").to(footer, {
  y: '-=100vh',
  ease: "linear",
  duration: .3
}, "-=.3");
var footerTL = gsap__WEBPACK_IMPORTED_MODULE_0__["default"].timeline({
  paused: true
}).to(sections, {
  y: '-=395',
  ease: "linear",
  duration: .3
}).to(footer, {
  y: '-=395',
  ease: "linear",
  duration: .3
}, "-=.3");
document.addEventListener('wheel', function (e) {
  if (isPaused || window.innerWidth < 1024) return;
  if (!(e.deltaY < 0 && currentSection === 0) && !(e.deltaY > 0 && currentSection === 3)) {
    isPaused = true;
    setTimeout(function () {
      return isPaused = false;
    }, 300);
  } else return;
  if (e.deltaY > 0) {
    if (currentSection === 0) {
      currentSection = 1;
      sectionHeroTL.play();
    } else if (currentSection === 1) {
      currentSection = 2;
      sectionSwipeTL.play();
    } else {
      currentSection = 3;
      footerTL.play();
    }
  } else {
    if (currentSection === 1) {
      currentSection = 0;
      sectionHeroTL.reverse();
    } else if (currentSection === 2) {
      currentSection = 1;
      sectionSwipeTL.reverse();
    } else {
      currentSection = 2;
      footerTL.reverse();
    }
  }
});

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor */ "./src/js/vendor.js");
/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vendor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_mobile_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/_mobile-menu */ "./src/js/components/_mobile-menu.js");
/* harmony import */ var _components_mobile_menu__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_mobile_menu__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/_scroll */ "./src/js/components/_scroll.js");




/***/ }),

/***/ "./src/js/vendor.js":
/*!**************************!*\
  !*** ./src/js/vendor.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ })

/******/ });
//# sourceMappingURL=main.js.map