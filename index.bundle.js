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
/******/ 		"index": 0
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
/******/ 	deferredModules.push(["./src/index.js","vendors~index"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./src/style/bookmark.css":
/*!**********************************************************!*\
  !*** ./node_modules/css-loader!./src/style/bookmark.css ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \".chapter-title{\\n\\tdisplay: flex;\\n\\tjustify-content: space-between;\\n\\talign-items: center;\\n}\\n\\n.bookmark {\\n\\tposition: relative;\\n\\tdisplay: inline-block;\\n  width: 0;\\n  height: 0;\\n  \\n  margin: 0em .9em 1.2em .9em;\\n  \\n  border-right:  .3em solid transparent;\\n  border-bottom: .7em  solid #FC0;\\n  border-left:   .3em solid transparent;\\n\\n  /* Controlls the size of the stars. */\\n  font-size: 0.5em;\\n}\\n\\n.bookmark:hover{\\n\\tcursor: pointer;\\n}\\n\\n.bookmark::before, .bookmark::after {\\n  content: '';\\n  \\n  display: block;\\n  width: 0;\\n  height: 0;\\n  \\n  position: absolute;\\n  top: .6em;\\n  left: -1em;\\n\\n  border-right:  1em solid transparent;\\n  border-bottom: .7em  solid #FC0;\\n  border-left:   1em solid transparent;\\n\\n  transform: rotate(-35deg);\\n}\\n  \\n.bookmark::after {  \\n  transform: rotate(35deg);\\n}\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/style/bookmark.css?./node_modules/css-loader");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/style/main.css":
/*!******************************************************!*\
  !*** ./node_modules/css-loader!./src/style/main.css ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"body {\\n\\tmargin: 0px;\\n\\twidth: 100vw;\\n\\toverflow-x: hidden;\\n}\\n\\n.container{\\n\\tmargin: 0 30px;\\n\\toverflow: hidden;\\n}\\n\\n/*map container is pinned as position: fixed, margin won't apply*/\\n#map-container{\\n\\twidth: 100vw;\\n\\theight: auto;\\n\\tbackground: #fff;\\n\\toverflow: hidden;\\n\\tmargin-left: -30px;\\n\\tmargin-right: -30px;\\n}\\n\\n#map{\\n\\twidth: 100%;\\n\\tmargin: 15px 0px;\\n\\theight: auto;\\n}\\n\\npath{\\n\\tstroke-linecap: round;\\n\\tstroke-linejoin: round;\\n}\\n\\n.path{\\n\\tfill:none;\\n\\tstroke:#000;\\n\\tstroke-width: 1px;\\n}\\n\\n.path-stop{\\n\\tfill: #fff;\\n\\tstroke: #000;\\n\\tstroke-width: 0.3px;\\n}\\n\\n.path-stop:hover{\\n\\tcursor: pointer;\\n\\tfill: #ccc;\\n}\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/style/main.css?./node_modules/css-loader");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/style/overlay.css":
/*!*********************************************************!*\
  !*** ./node_modules/css-loader!./src/style/overlay.css ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"#overlay{\\n\\tdisplay: none;\\n\\tflex-direction: column;\\n\\tjustify-content: center;\\n\\talign-items: center;\\n\\tposition: fixed;\\n\\ttop: 0;\\n\\tleft: 0;\\n\\twidth: 100vw;\\n\\theight: 100vh;\\n\\tz-index: 999;\\n\\tbackground: rgba(0, 0, 0, 0.4);\\n\\toverflow: hidden;\\n}\\n\\n#overlay input[type=\\\"text\\\"]{\\n\\twidth: 80%;\\n\\tmax-width: 300px;\\n\\tline-height: 25px;\\n\\tborder-radius: 5px;\\n\\tz-index: 1000;\\n}\\n\\n#overlay button{\\n\\tbackground: #fff;\\n\\tmargin: 20px; \\n\\tborder-radius: 5px;\\n\\tz-index: 1000;\\n}\\n\\n#submit-message{\\n\\tfont-size: 10px;\\n\\tcolor: red;\\n}\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/style/overlay.css?./node_modules/css-loader");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/style/progress-bar.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader!./src/style/progress-bar.css ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"/* Progress Bar */\\n#progress-div{\\n    position:fixed;\\n    width:100%;\\n    height:15px;\\n    background-color: rgb(236, 234, 234);\\n    top:0px;\\n    left:0px;\\n    z-index: 999;\\n}\\n#progress-bar{\\n    position: absolute;\\n    float:left;\\n    height:100%;\\n    background-color: #a8f5a8;\\n    -webkit-transition: width 0.3s; /* Safari */\\n    transition: width 0.3s;\\n}\\n#progress-div:hover, #progress-bar:hover{\\n    cursor: pointer;\\n}\\n/* Progress Bar */\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/style/progress-bar.css?./node_modules/css-loader");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/style/tooltip.css":
/*!*********************************************************!*\
  !*** ./node_modules/css-loader!./src/style/tooltip.css ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"#map-tooltip{\\n\\tposition: fixed;\\n\\ttop: 0;\\n\\tleft: 0;\\n\\tdisplay: none;\\n\\tflex-direction: column;\\n\\twidth: 100px;\\n\\theight: 100px;\\n\\tbackground: #fff;\\n\\tborder-radius: 5px;\\n\\tborder: 1px solid #000;\\n\\tz-index: 1;\\n\\toverflow: hidden;\\n\\tpadding: 5px;\\n}\\n\\n#map-tooltip-title{\\n\\tfont-size: 14px;\\n\\tfont-weight: 600;\\n}\\n\\n#map-tooltip-title-close{\\n\\tfont-family: Sans-serif;\\n\\tposition: absolute;\\n\\ttop: 5px;\\n\\tright: 5px;\\n}\\n\\n#map-tooltip-description{\\n\\tfont-size: 11px\\n}\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/style/tooltip.css?./node_modules/css-loader");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/main.css */ \"./src/style/main.css\");\n/* harmony import */ var _style_main_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_main_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_tooltip_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style/tooltip.css */ \"./src/style/tooltip.css\");\n/* harmony import */ var _style_tooltip_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_tooltip_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map.js */ \"./src/map.js\");\n/* harmony import */ var _style_progress_bar_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style/progress-bar.css */ \"./src/style/progress-bar.css\");\n/* harmony import */ var _style_progress_bar_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_progress_bar_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _progress_bar_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./progress-bar.js */ \"./src/progress-bar.js\");\n/* harmony import */ var _url_hash_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./url-hash.js */ \"./src/url-hash.js\");\n/* harmony import */ var _style_bookmark_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style/bookmark.css */ \"./src/style/bookmark.css\");\n/* harmony import */ var _style_bookmark_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_style_bookmark_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _style_overlay_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style/overlay.css */ \"./src/style/overlay.css\");\n/* harmony import */ var _style_overlay_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_style_overlay_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _subscribe_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./subscribe.js */ \"./src/subscribe.js\");\n\n\n\n\n\n\n\n\n\n_map_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ \"a\"].initScrollController();\n_map_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ \"a\"].initTooltip();\n_progress_bar_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ \"a\"].initScrollController();\n_progress_bar_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ \"a\"].initClickNav();\n_url_hash_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ \"a\"].initHashController();\n_subscribe_js__WEBPACK_IMPORTED_MODULE_8__[/* default */ \"a\"].initBookmark();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/map.js":
/*!********************!*\
  !*** ./src/map.js ***!
  \********************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var TweenMax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! TweenMax */ \"./node_modules/gsap/src/minified/TweenMax.min.js\");\n/* harmony import */ var TweenMax__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(TweenMax__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var ScrollMagic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ScrollMagic */ \"./node_modules/scrollmagic/scrollmagic/minified/ScrollMagic.min.js\");\n/* harmony import */ var ScrollMagic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ScrollMagic__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var animation_gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! animation.gsap */ \"./node_modules/scrollmagic/scrollmagic/minified/plugins/animation.gsap.min.js\");\n/* harmony import */ var animation_gsap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(animation_gsap__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _tooltip_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tooltip.js */ \"./src/tooltip.js\");\n\n\n\n\n\nvar $ = function $(q) {\n  return document.querySelector(q);\n};\n\nvar $$ = function $$(q) {\n  return document.querySelectorAll(q);\n};\n\nvar Map = function Map() {};\n\nvar $map = $('#map');\n\nvar renderPath = function renderPath(id) {\n  var SVG_NS = 'http://www.w3.org/2000/svg';\n  var g = document.createElementNS(SVG_NS, \"g\");\n  g.innerHTML = \"\\n    <path \\n      d=\\\"M628.1,220.9c-0.9-4.7-1.7-11.9,0.2-20c1.2-5,2.9-8.3,3.6-9.9c3.1-6.6,5.8-17.9,3.1-37.9\\\" \\n      id=\\\"\".concat(id, \"\\\" \\n      class=\\\"path\\\">\\n    </path>\\n    <circle class=\\\"path-stop\\\" cx=\\\"628.1\\\" cy=\\\"220.9\\\" r=\\\"1\\\" data-location=\\\"changlun\\\"></circle>\\n    \");\n  $('#map-groups').appendChild(g);\n  return $(\"#\".concat(id));\n};\n\nvar pathPrepare = function pathPrepare($path) {\n  var lineLength = $path.getTotalLength();\n  $path.style.strokeDasharray = lineLength;\n  $path.style.strokeDashoffset = lineLength;\n  return lineLength;\n};\n\nMap.initScrollController = function () {\n  var $groups = $('#map-groups');\n  var $path = renderPath('my-path');\n  var $container = $('#map-container'); // prepare SVG\n\n  pathPrepare($path); // init controller\n\n  var controller = new ScrollMagic__WEBPACK_IMPORTED_MODULE_1___default.a.Controller(); // build tween\n\n  var tween = new TimelineMax() //map pan and zoom\n  .add(TweenMax__WEBPACK_IMPORTED_MODULE_0___default.a.to($groups, 0.2, {\n    transform: 'scale(8, 8) translate(-580px, -180px)',\n    ease: Linear.easeNone\n  }), 0).add(TweenMax__WEBPACK_IMPORTED_MODULE_0___default.a.to($groups, 0.8, {\n    transform: 'scale(8, 8) translate(-580px, -130px)',\n    ease: Linear.easeNone\n  }), 0.2) //draw svg path\n  .add(TweenMax__WEBPACK_IMPORTED_MODULE_0___default.a.to($path, 0.8, {\n    strokeDashoffset: 0,\n    ease: Linear.easeNone\n  }), 0.2) // change color during the whole thing\n  .add(TweenMax__WEBPACK_IMPORTED_MODULE_0___default.a.to($path, 1, {\n    stroke: \"#33629c\",\n    ease: Linear.easeNone\n  }), 0); // build scene\n\n  var scene = new ScrollMagic__WEBPACK_IMPORTED_MODULE_1___default.a.Scene({\n    triggerElement: $container,\n    triggerHook: 'onLeave',\n    duration: $('#trigger1').offsetHeight,\n    tweenChanges: true\n  }).setPin($container, {\n    pushFollowers: false\n  }).setTween(tween) // .addIndicators()\n  .addTo(controller);\n};\n\nMap.initTooltip = function () {\n  var stops = $$('.path-stop');\n  stops.forEach(function (stop) {\n    stop.addEventListener('click', function (evt) {\n      _tooltip_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ \"a\"].toggle(evt, stop.dataset.location);\n    });\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (Map);\n\n//# sourceURL=webpack:///./src/map.js?");

/***/ }),

/***/ "./src/progress-bar.js":
/*!*****************************!*\
  !*** ./src/progress-bar.js ***!
  \*****************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var TweenMax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! TweenMax */ \"./node_modules/gsap/src/minified/TweenMax.min.js\");\n/* harmony import */ var TweenMax__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(TweenMax__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var ScrollMagic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ScrollMagic */ \"./node_modules/scrollmagic/scrollmagic/minified/ScrollMagic.min.js\");\n/* harmony import */ var ScrollMagic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ScrollMagic__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var animation_gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! animation.gsap */ \"./node_modules/scrollmagic/scrollmagic/minified/plugins/animation.gsap.min.js\");\n/* harmony import */ var animation_gsap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(animation_gsap__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar $ = function $(q) {\n  return document.querySelector(q);\n};\n\nvar ProgressBar = function ProgressBar() {};\n\nProgressBar.initScrollController = function () {\n  var $bar = $('#progress-bar');\n  var $body = document.body;\n  var bodyHeight = $body.offsetHeight; // init controller\n\n  var controller = new ScrollMagic__WEBPACK_IMPORTED_MODULE_1___default.a.Controller(); // build tween\n\n  var tween = new TimelineMax().add(TweenMax__WEBPACK_IMPORTED_MODULE_0___default.a.to($bar, 1, {\n    width: '100%',\n    ease: Linear.easeNone\n  })); // build scene\n\n  var scene = new ScrollMagic__WEBPACK_IMPORTED_MODULE_1___default.a.Scene({\n    triggerElement: $body,\n    triggerHook: 'onLeave',\n    duration: bodyHeight,\n    tweenChanges: true\n  }).setTween(tween).addTo(controller);\n};\n\nProgressBar.initClickNav = function () {\n  var $barContainer = $('#progress-div');\n  var $bar = $('#progress-bar');\n\n  var handler = function handler(event) {\n    var bodyWidth = document.body.offsetWidth;\n    var bodyHeight = document.body.offsetHeight;\n    var pageX = parseInt(event.pageX);\n\n    if (pageX > 0) {\n      var ratio = pageX / bodyWidth;\n      var scrollTop = bodyHeight * ratio;\n      window.scrollTo({\n        top: scrollTop,\n        behavior: 'smooth'\n      });\n    }\n  }; //add listener for click\n\n\n  $barContainer.addEventListener('click', handler); //add listener for touch\n\n  $barContainer.addEventListener('touchend', handler);\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (ProgressBar);\n\n//# sourceURL=webpack:///./src/progress-bar.js?");

/***/ }),

/***/ "./src/style/bookmark.css":
/*!********************************!*\
  !*** ./src/style/bookmark.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader!./bookmark.css */ \"./node_modules/css-loader/index.js!./src/style/bookmark.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/style/bookmark.css?");

/***/ }),

/***/ "./src/style/main.css":
/*!****************************!*\
  !*** ./src/style/main.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader!./main.css */ \"./node_modules/css-loader/index.js!./src/style/main.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/style/main.css?");

/***/ }),

/***/ "./src/style/overlay.css":
/*!*******************************!*\
  !*** ./src/style/overlay.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader!./overlay.css */ \"./node_modules/css-loader/index.js!./src/style/overlay.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/style/overlay.css?");

/***/ }),

/***/ "./src/style/progress-bar.css":
/*!************************************!*\
  !*** ./src/style/progress-bar.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader!./progress-bar.css */ \"./node_modules/css-loader/index.js!./src/style/progress-bar.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/style/progress-bar.css?");

/***/ }),

/***/ "./src/style/tooltip.css":
/*!*******************************!*\
  !*** ./src/style/tooltip.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader!./tooltip.css */ \"./node_modules/css-loader/index.js!./src/style/tooltip.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/style/tooltip.css?");

/***/ }),

/***/ "./src/subscribe.js":
/*!**************************!*\
  !*** ./src/subscribe.js ***!
  \**************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("var Subscribe = {};\nvar data = {\n  isOverlayShown: false,\n  isEmailSaved: false\n};\n\nvar $ = function $(q) {\n  return document.querySelector(q);\n};\n\nvar $$ = function $$(q) {\n  return document.querySelectorAll(q);\n};\n\nSubscribe.initBookmark = function () {\n  var $bookmarkBtns = $$('.bookmark');\n  var $overlay = $('#overlay');\n  $bookmarkBtns.forEach(function (btn) {\n    btn.addEventListener('click', function (evt) {\n      $overlay.style.display = data.isOverlayShown ? 'none' : 'flex';\n      data.isOverlayShown = !data.isOverlayShown;\n    });\n  });\n  $overlay.addEventListener('click', function (evt) {\n    $overlay.style.display = 'none';\n    data.isOverlayShown = false;\n  }); //submit email for sending read reminder\n\n  var $submit = $('#submit-reminder');\n  var $input = $('input#email');\n  var message = $('#submit-message');\n\n  var validateEmail = function validateEmail() {\n    var email = $input.value;\n    var regex = /^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/;\n    return regex.test(String(email).toLowerCase());\n  };\n\n  $input.addEventListener('click', function (evt) {\n    evt.stopPropagation();\n  });\n  $submit.addEventListener('click', function (evt) {\n    evt.stopPropagation();\n\n    if (validateEmail()) {\n      data.isEmailSaved = true;\n      $input.disabled = true;\n      $submit.disabled = true;\n      message.innerHTML = 'Your email has been received!';\n    } else {\n      message.innerHTML = 'Invalid Email!';\n    }\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (Subscribe);\n\n//# sourceURL=webpack:///./src/subscribe.js?");

/***/ }),

/***/ "./src/tooltip.js":
/*!************************!*\
  !*** ./src/tooltip.js ***!
  \************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("var $ = function $(q) {\n  return document.querySelector(q);\n};\n\nvar Tooltip = function Tooltip() {};\n\nvar shown = false;\nvar infos = {\n  changlun: {\n    title: 'changlun',\n    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut'\n  }\n};\n\nTooltip.toggle = function (evt, location) {\n  var $tooltip = $('#map-tooltip');\n  var $title = $('#map-tooltip-title');\n  var $description = $('#map-tooltip-description');\n\n  if (shown) {\n    $tooltip.style.display = 'none';\n  } else {\n    var x = parseInt(evt.clientX);\n    var y = parseInt(evt.clientY);\n\n    if (x && y) {\n      $tooltip.style.display = 'flex';\n      $tooltip.style.top = \"\".concat(y, \"px\");\n      $tooltip.style.left = \"\".concat(x, \"px\");\n      $title.innerHTML = infos[location].title;\n      $description.innerHTML = infos[location].description;\n    }\n  }\n\n  shown = !shown;\n};\n\nvar $close = $('#map-tooltip-title-close');\n$close.addEventListener('click', function () {\n  $('#map-tooltip').style.display = 'none';\n});\n/* harmony default export */ __webpack_exports__[\"a\"] = (Tooltip);\n\n//# sourceURL=webpack:///./src/tooltip.js?");

/***/ }),

/***/ "./src/url-hash.js":
/*!*************************!*\
  !*** ./src/url-hash.js ***!
  \*************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var TweenMax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! TweenMax */ \"./node_modules/gsap/src/minified/TweenMax.min.js\");\n/* harmony import */ var TweenMax__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(TweenMax__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var ScrollMagic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ScrollMagic */ \"./node_modules/scrollmagic/scrollmagic/minified/ScrollMagic.min.js\");\n/* harmony import */ var ScrollMagic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ScrollMagic__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var animation_gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! animation.gsap */ \"./node_modules/scrollmagic/scrollmagic/minified/plugins/animation.gsap.min.js\");\n/* harmony import */ var animation_gsap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(animation_gsap__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar $ = function $(q) {\n  return document.querySelector(q);\n};\n\nvar $$ = function $$(q) {\n  return document.querySelectorAll(q);\n};\n\nvar Hash = function Hash() {};\n\nHash.initHashController = function () {\n  var anchors = $$('.chapter-anchor');\n  var controller = new ScrollMagic__WEBPACK_IMPORTED_MODULE_1___default.a.Controller();\n  anchors.forEach(function (anchor) {\n    var scene = new ScrollMagic__WEBPACK_IMPORTED_MODULE_1___default.a.Scene({\n      triggerElement: anchor,\n      duration: anchor.offsetHeight\n    }).addTo(controller).on('enter leave', function (e) {\n      var hash = anchor.id;\n      window.history.pushState(null, null, \"#\".concat(hash));\n    });\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (Hash);\n\n//# sourceURL=webpack:///./src/url-hash.js?");

/***/ })

/******/ });