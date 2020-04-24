(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Flyover"] = factory();
	else
		root["Flyover"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/alipay/index.ts":
/*!*****************************!*\
  !*** ./src/alipay/index.ts ***!
  \*****************************/
/*! exports provided: toast, alert, confirm, showLoading, hideLoading, popWindow, pushWindow, closeWebview */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _nebula__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../nebula */ \"./src/nebula/index.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"toast\", function() { return _nebula__WEBPACK_IMPORTED_MODULE_0__[\"toast\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"alert\", function() { return _nebula__WEBPACK_IMPORTED_MODULE_0__[\"alert\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"confirm\", function() { return _nebula__WEBPACK_IMPORTED_MODULE_0__[\"confirm\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"showLoading\", function() { return _nebula__WEBPACK_IMPORTED_MODULE_0__[\"showLoading\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"hideLoading\", function() { return _nebula__WEBPACK_IMPORTED_MODULE_0__[\"hideLoading\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"popWindow\", function() { return _nebula__WEBPACK_IMPORTED_MODULE_0__[\"popWindow\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"pushWindow\", function() { return _nebula__WEBPACK_IMPORTED_MODULE_0__[\"pushWindow\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"closeWebview\", function() { return _nebula__WEBPACK_IMPORTED_MODULE_0__[\"closeWebview\"]; });\n\n\n\n\n//# sourceURL=webpack://Flyover/./src/alipay/index.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: toast, alert, confirm, showLoading, hideLoading, pushWindow, popWindow, closeWebview */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toast\", function() { return toast; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"alert\", function() { return alert; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"confirm\", function() { return confirm; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showLoading\", function() { return showLoading; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hideLoading\", function() { return hideLoading; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pushWindow\", function() { return pushWindow; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"popWindow\", function() { return popWindow; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"closeWebview\", function() { return closeWebview; });\n/* harmony import */ var _alipay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alipay */ \"./src/alipay/index.ts\");\n/* harmony import */ var _qianniu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./qianniu */ \"./src/qianniu/index.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ \"./src/utils/index.ts\");\n\n\n\nconst toast = (content, options) => {\n    if (_utils__WEBPACK_IMPORTED_MODULE_2__[\"isAlipay\"])\n        return _alipay__WEBPACK_IMPORTED_MODULE_0__[\"toast\"](content, options);\n    if (_utils__WEBPACK_IMPORTED_MODULE_2__[\"isQianNiu\"])\n        return _qianniu__WEBPACK_IMPORTED_MODULE_1__[\"toast\"](content, options);\n};\nconst alert = (content, options) => {\n    if (_utils__WEBPACK_IMPORTED_MODULE_2__[\"isAlipay\"])\n        return _alipay__WEBPACK_IMPORTED_MODULE_0__[\"alert\"](content, options);\n    if (_utils__WEBPACK_IMPORTED_MODULE_2__[\"isQianNiu\"])\n        return _qianniu__WEBPACK_IMPORTED_MODULE_1__[\"alert\"](content, options);\n};\nconst confirm = (content, options) => {\n    if (_utils__WEBPACK_IMPORTED_MODULE_2__[\"isAlipay\"])\n        return _alipay__WEBPACK_IMPORTED_MODULE_0__[\"confirm\"](content, options);\n    if (_utils__WEBPACK_IMPORTED_MODULE_2__[\"isQianNiu\"])\n        return _qianniu__WEBPACK_IMPORTED_MODULE_1__[\"confirm\"](content, options);\n};\nconst showLoading = () => {\n    if (_utils__WEBPACK_IMPORTED_MODULE_2__[\"isAlipay\"])\n        return _alipay__WEBPACK_IMPORTED_MODULE_0__[\"showLoading\"]();\n    if (_utils__WEBPACK_IMPORTED_MODULE_2__[\"isQianNiu\"])\n        return _qianniu__WEBPACK_IMPORTED_MODULE_1__[\"showLoading\"]();\n};\nconst hideLoading = () => {\n    if (_utils__WEBPACK_IMPORTED_MODULE_2__[\"isAlipay\"])\n        return _alipay__WEBPACK_IMPORTED_MODULE_0__[\"hideLoading\"]();\n    if (_utils__WEBPACK_IMPORTED_MODULE_2__[\"isQianNiu\"])\n        return _qianniu__WEBPACK_IMPORTED_MODULE_1__[\"hideLoading\"]();\n};\nconst pushWindow = (url, options) => {\n    if (_utils__WEBPACK_IMPORTED_MODULE_2__[\"isAlipay\"])\n        return _alipay__WEBPACK_IMPORTED_MODULE_0__[\"pushWindow\"](url, options);\n    if (_utils__WEBPACK_IMPORTED_MODULE_2__[\"isQianNiu\"])\n        return _qianniu__WEBPACK_IMPORTED_MODULE_1__[\"pushWindow\"](url, options);\n};\nconst popWindow = () => {\n    if (_utils__WEBPACK_IMPORTED_MODULE_2__[\"isAlipay\"])\n        return _alipay__WEBPACK_IMPORTED_MODULE_0__[\"popWindow\"]();\n};\nconst closeWebview = () => {\n    if (_utils__WEBPACK_IMPORTED_MODULE_2__[\"isAlipay\"])\n        return _alipay__WEBPACK_IMPORTED_MODULE_0__[\"closeWebview\"]();\n};\n\n\n//# sourceURL=webpack://Flyover/./src/index.ts?");

/***/ }),

/***/ "./src/nebula/alert.ts":
/*!*****************************!*\
  !*** ./src/nebula/alert.ts ***!
  \*****************************/
/*! exports provided: alert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"alert\", function() { return alert; });\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ \"./src/nebula/core.ts\");\n\nconst alert = (message, options) => {\n    const { title, buttonText } = options;\n    return Object(_core__WEBPACK_IMPORTED_MODULE_0__[\"pcall\"])('alert', {\n        title,\n        message,\n        button: buttonText\n    });\n};\n\n\n//# sourceURL=webpack://Flyover/./src/nebula/alert.ts?");

/***/ }),

/***/ "./src/nebula/closeWebview.ts":
/*!************************************!*\
  !*** ./src/nebula/closeWebview.ts ***!
  \************************************/
/*! exports provided: closeWebview */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"closeWebview\", function() { return closeWebview; });\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ \"./src/nebula/core.ts\");\n\nconst closeWebview = () => {\n    return Object(_core__WEBPACK_IMPORTED_MODULE_0__[\"pcall\"])('closeWebview');\n};\n\n\n//# sourceURL=webpack://Flyover/./src/nebula/closeWebview.ts?");

/***/ }),

/***/ "./src/nebula/confirm.ts":
/*!*******************************!*\
  !*** ./src/nebula/confirm.ts ***!
  \*******************************/
/*! exports provided: confirm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"confirm\", function() { return confirm; });\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ \"./src/nebula/core.ts\");\n\nconst confirm = (message, { title, okButton, cancelButton }) => {\n    return Object(_core__WEBPACK_IMPORTED_MODULE_0__[\"pcall\"])('confirm', {\n        title,\n        message,\n        okButton,\n        cancelButton,\n    });\n};\n\n\n//# sourceURL=webpack://Flyover/./src/nebula/confirm.ts?");

/***/ }),

/***/ "./src/nebula/core.ts":
/*!****************************!*\
  !*** ./src/nebula/core.ts ***!
  \****************************/
/*! exports provided: ready, call, pcall */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ready\", function() { return ready; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"call\", function() { return call; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pcall\", function() { return pcall; });\nfunction ready(callback) {\n    // @ts-ignore\n    if (window.AlipayJSBridge) {\n        callback && callback();\n    }\n    else {\n        document.addEventListener('AlipayJSBridgeReady', callback, false);\n    }\n}\nconst call = (method, ...params) => {\n    ready(() => AlipayJSBridge.call(method, ...params));\n};\nconst pcall = (method, ...params) => new Promise((resolve, reject) => {\n    params.push(res => {\n        console.log(`AlipayJSBridge.call(${method})`, res);\n        resolve(res);\n    });\n    return call(method, ...params);\n});\n\n\n//# sourceURL=webpack://Flyover/./src/nebula/core.ts?");

/***/ }),

/***/ "./src/nebula/index.ts":
/*!*****************************!*\
  !*** ./src/nebula/index.ts ***!
  \*****************************/
/*! exports provided: toast, alert, confirm, showLoading, hideLoading, popWindow, pushWindow, closeWebview */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _toast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toast */ \"./src/nebula/toast.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"toast\", function() { return _toast__WEBPACK_IMPORTED_MODULE_0__[\"toast\"]; });\n\n/* harmony import */ var _alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert */ \"./src/nebula/alert.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"alert\", function() { return _alert__WEBPACK_IMPORTED_MODULE_1__[\"alert\"]; });\n\n/* harmony import */ var _confirm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./confirm */ \"./src/nebula/confirm.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"confirm\", function() { return _confirm__WEBPACK_IMPORTED_MODULE_2__[\"confirm\"]; });\n\n/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loading */ \"./src/nebula/loading.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"showLoading\", function() { return _loading__WEBPACK_IMPORTED_MODULE_3__[\"showLoading\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"hideLoading\", function() { return _loading__WEBPACK_IMPORTED_MODULE_3__[\"hideLoading\"]; });\n\n/* harmony import */ var _popWindow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./popWindow */ \"./src/nebula/popWindow.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"popWindow\", function() { return _popWindow__WEBPACK_IMPORTED_MODULE_4__[\"popWindow\"]; });\n\n/* harmony import */ var _pushWindow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pushWindow */ \"./src/nebula/pushWindow.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"pushWindow\", function() { return _pushWindow__WEBPACK_IMPORTED_MODULE_5__[\"pushWindow\"]; });\n\n/* harmony import */ var _closeWebview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./closeWebview */ \"./src/nebula/closeWebview.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"closeWebview\", function() { return _closeWebview__WEBPACK_IMPORTED_MODULE_6__[\"closeWebview\"]; });\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://Flyover/./src/nebula/index.ts?");

/***/ }),

/***/ "./src/nebula/loading.ts":
/*!*******************************!*\
  !*** ./src/nebula/loading.ts ***!
  \*******************************/
/*! exports provided: showLoading, hideLoading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showLoading\", function() { return showLoading; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hideLoading\", function() { return hideLoading; });\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ \"./src/nebula/core.ts\");\n\nconst showLoading = () => {\n    return Object(_core__WEBPACK_IMPORTED_MODULE_0__[\"call\"])('showLoading');\n};\nconst hideLoading = () => {\n    return Object(_core__WEBPACK_IMPORTED_MODULE_0__[\"call\"])('hideLoading');\n};\n\n\n//# sourceURL=webpack://Flyover/./src/nebula/loading.ts?");

/***/ }),

/***/ "./src/nebula/popWindow.ts":
/*!*********************************!*\
  !*** ./src/nebula/popWindow.ts ***!
  \*********************************/
/*! exports provided: popWindow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"popWindow\", function() { return popWindow; });\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ \"./src/nebula/core.ts\");\n\nconst popWindow = () => {\n    return Object(_core__WEBPACK_IMPORTED_MODULE_0__[\"pcall\"])('popWindow');\n};\n\n\n//# sourceURL=webpack://Flyover/./src/nebula/popWindow.ts?");

/***/ }),

/***/ "./src/nebula/pushWindow.ts":
/*!**********************************!*\
  !*** ./src/nebula/pushWindow.ts ***!
  \**********************************/
/*! exports provided: pushWindow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pushWindow\", function() { return pushWindow; });\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ \"./src/nebula/core.ts\");\n\n/**\n * pushWindow\n * https://myjsapi.alipay.com/jsapi/context/push-window.html\n * @param url\n * @param param\n */\nconst pushWindow = (url, param) => {\n    return Object(_core__WEBPACK_IMPORTED_MODULE_0__[\"pcall\"])('pushWindow', { url, param });\n};\n\n\n//# sourceURL=webpack://Flyover/./src/nebula/pushWindow.ts?");

/***/ }),

/***/ "./src/nebula/toast.ts":
/*!*****************************!*\
  !*** ./src/nebula/toast.ts ***!
  \*****************************/
/*! exports provided: toast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toast\", function() { return toast; });\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ \"./src/nebula/core.ts\");\n\nconst toast = (content, options) => {\n    return Object(_core__WEBPACK_IMPORTED_MODULE_0__[\"pcall\"])('toast', Object.assign({ content }, options));\n};\n\n\n//# sourceURL=webpack://Flyover/./src/nebula/toast.ts?");

/***/ }),

/***/ "./src/qianniu/index.ts":
/*!******************************!*\
  !*** ./src/qianniu/index.ts ***!
  \******************************/
/*! exports provided: toast, alert, confirm, showLoading, hideLoading, popWindow, getAbsoluteURL, pushWindow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _windvane__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../windvane */ \"./src/windvane/index.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"toast\", function() { return _windvane__WEBPACK_IMPORTED_MODULE_0__[\"toast\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"alert\", function() { return _windvane__WEBPACK_IMPORTED_MODULE_0__[\"alert\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"confirm\", function() { return _windvane__WEBPACK_IMPORTED_MODULE_0__[\"confirm\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"showLoading\", function() { return _windvane__WEBPACK_IMPORTED_MODULE_0__[\"showLoading\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"hideLoading\", function() { return _windvane__WEBPACK_IMPORTED_MODULE_0__[\"hideLoading\"]; });\n\n/* harmony import */ var _popWindow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popWindow */ \"./src/qianniu/popWindow.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"popWindow\", function() { return _popWindow__WEBPACK_IMPORTED_MODULE_1__[\"popWindow\"]; });\n\n/* harmony import */ var _pushWindow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pushWindow */ \"./src/qianniu/pushWindow.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getAbsoluteURL\", function() { return _pushWindow__WEBPACK_IMPORTED_MODULE_2__[\"getAbsoluteURL\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"pushWindow\", function() { return _pushWindow__WEBPACK_IMPORTED_MODULE_2__[\"pushWindow\"]; });\n\n\n\n\n\n\n//# sourceURL=webpack://Flyover/./src/qianniu/index.ts?");

/***/ }),

/***/ "./src/qianniu/popWindow.ts":
/*!**********************************!*\
  !*** ./src/qianniu/popWindow.ts ***!
  \**********************************/
/*! exports provided: popWindow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"popWindow\", function() { return popWindow; });\nconst popWindow = () => {\n    QN.navigator.pop();\n};\n\n\n//# sourceURL=webpack://Flyover/./src/qianniu/popWindow.ts?");

/***/ }),

/***/ "./src/qianniu/pushWindow.ts":
/*!***********************************!*\
  !*** ./src/qianniu/pushWindow.ts ***!
  \***********************************/
/*! exports provided: getAbsoluteURL, pushWindow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAbsoluteURL\", function() { return getAbsoluteURL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pushWindow\", function() { return pushWindow; });\nfunction getAbsoluteURL(url) {\n    let ele = document.createElement('a');\n    ele.href = url;\n    url = ele.href;\n    ele = null;\n    return url;\n}\n;\nconst pushWindow = (url, options = {}) => {\n    const { data } = options;\n    return new Promise((resolve, reject) => {\n        try {\n            QN.navigator.push({\n                url: getAbsoluteURL(url),\n                query: data,\n            });\n            resolve();\n        }\n        catch (e) {\n            reject(e);\n        }\n    });\n};\n\n\n//# sourceURL=webpack://Flyover/./src/qianniu/pushWindow.ts?");

/***/ }),

/***/ "./src/utils/index.ts":
/*!****************************!*\
  !*** ./src/utils/index.ts ***!
  \****************************/
/*! exports provided: NebulaBridgeUrl, WindVaneBridgeUrl, DingTalkBridgeUrl, AmapBridgeUrl, QianniuBridgeUrl, loadScript, aliAppInfo, isAlipay, isKoubei, isKoubeiMerchant, isTaobao, isTmall, isWealth, isMyBank, isDingTalk, isQianNiu, isAmap, isInside, addEventListener */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NebulaBridgeUrl\", function() { return NebulaBridgeUrl; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"WindVaneBridgeUrl\", function() { return WindVaneBridgeUrl; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DingTalkBridgeUrl\", function() { return DingTalkBridgeUrl; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AmapBridgeUrl\", function() { return AmapBridgeUrl; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"QianniuBridgeUrl\", function() { return QianniuBridgeUrl; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadScript\", function() { return loadScript; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"aliAppInfo\", function() { return aliAppInfo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isAlipay\", function() { return isAlipay; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isKoubei\", function() { return isKoubei; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isKoubeiMerchant\", function() { return isKoubeiMerchant; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isTaobao\", function() { return isTaobao; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isTmall\", function() { return isTmall; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isWealth\", function() { return isWealth; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isMyBank\", function() { return isMyBank; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isDingTalk\", function() { return isDingTalk; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isQianNiu\", function() { return isQianNiu; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isAmap\", function() { return isAmap; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isInside\", function() { return isInside; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addEventListener\", function() { return addEventListener; });\nconst NebulaBridgeUrl = '//a.alipayobjects.com/g/h5-lib/alipayjsapi/3.0.5/alipayjsapi.inc.min.js';\nconst WindVaneBridgeUrl = '//g.alicdn.com/mtb/lib-windvane/2.1.8/windvane.js';\nconst DingTalkBridgeUrl = '//g.alicdn.com/dingding/dingtalk-jsapi/2.4.3/dingtalk.open.js';\nconst AmapBridgeUrl = '//as.alipayobjects.com/g/insuranceprod/amap-util/1.0.0/amap.js';\nconst QianniuBridgeUrl = '//g.alicdn.com/x-bridge/qap-sdk/2.4.2/qn.min.js';\nconst loadScript = (url) => new Promise((resolve, reject) => {\n    const script = document.createElement('script');\n    script.src = url;\n    script.charset = 'UTF-8';\n    script.addEventListener('load', resolve, false);\n    script.addEventListener('error', () => reject(new Error('script load error')), false);\n    document.head.appendChild(script);\n});\nconst getAliappInfo = (ua) => {\n    if (/AliApp\\(([\\w\\-]+)\\/([\\d\\.]+)\\)/i.test(ua)) {\n        return {\n            name: String(RegExp.$1).toLowerCase(),\n            version: RegExp.$2,\n        };\n    }\n    const matches = ua.match(/(amap)\\/([\\d.]+)/i);\n    if (Array.isArray(matches) && matches.length > 2 && matches[1] === 'amap') {\n        return {\n            name: 'amap',\n            version: matches[2],\n        };\n    }\n    const insideMatchs = ua.match(/(Inside)([\\/\\s](.*))?/i);\n    if (Array.isArray(insideMatchs) && insideMatchs.length > 2 && insideMatchs[1] === 'Inside') {\n        return {\n            name: 'Inside',\n            version: insideMatchs[3] || '',\n        };\n    }\n    return {\n        name: 'web',\n        version: '',\n    };\n};\nconst ua = window.navigator.userAgent;\nconst aliAppInfo = getAliappInfo(ua);\nconst isAlipay = /AliApp\\(AP\\/([\\d\\.]+)\\)/i.test(ua);\nconst isKoubei = /AliApp\\(KB\\/([\\d\\.]+)\\)/i.test(ua);\nconst isKoubeiMerchant = /AliApp\\(AM\\/([\\d\\.]+)\\)/i.test(ua);\nconst isTaobao = /AliApp\\(TB\\/([\\d\\.]+)\\)/i.test(ua);\nconst isTmall = /AliApp\\(TM\\/([\\d\\.]+)\\)/i.test(ua);\nconst isWealth = /AliApp\\(AFW\\/([\\d\\.]+)\\)/i.test(ua);\nconst isMyBank = /AliApp\\(BK\\/([\\d\\.]+)\\)/i.test(ua);\nconst isDingTalk = /AliApp\\(DingTalk\\/([\\d\\.]+)\\)/i.test(ua);\nconst isQianNiu = /AliApp\\(QN\\/([\\d\\.]+)\\)/i.test(ua);\nconst isAmap = /amap/i.test(ua);\nconst isInside = /Inside/i.test(ua);\nconst addEventListener = (type, fn) => {\n    document.addEventListener(type, fn, false);\n    return () => document.removeEventListener(type, fn);\n};\n\n\n//# sourceURL=webpack://Flyover/./src/utils/index.ts?");

/***/ }),

/***/ "./src/windvane/alert.ts":
/*!*******************************!*\
  !*** ./src/windvane/alert.ts ***!
  \*******************************/
/*! exports provided: alert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"alert\", function() { return alert; });\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ \"./src/windvane/core.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ \"./src/utils/index.ts\");\n\n\nconst waittingEvent = id => new Promise(done => {\n    const removeListener = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"addEventListener\"])('WV.Event.Alert', e => {\n        const { identifier } = e.param || {};\n        if (identifier && id === identifier) {\n            done(e);\n            removeListener();\n        }\n    });\n});\nconst alert = (message, options = {}) => {\n    const { buttonText = '确定' } = options;\n    const identifier = Date.now();\n    return Object(_core__WEBPACK_IMPORTED_MODULE_0__[\"pcall\"])('WVUIDialog.alert', {\n        message,\n        okbutton: buttonText,\n        identifier,\n    }).then(() => waittingEvent(identifier));\n};\n\n\n//# sourceURL=webpack://Flyover/./src/windvane/alert.ts?");

/***/ }),

/***/ "./src/windvane/confirm.ts":
/*!*********************************!*\
  !*** ./src/windvane/confirm.ts ***!
  \*********************************/
/*! exports provided: confirm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"confirm\", function() { return confirm; });\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ \"./src/windvane/core.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ \"./src/utils/index.ts\");\n\n\nconst cbkObj = {};\nconst waittingEvent = (id, text) => new Promise(done => {\n    const removeListener = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"addEventListener\"])('wv.dialog', e => {\n        const { type, _index } = e.param || {};\n        if (_index === id) {\n            done(type === text);\n            removeListener();\n        }\n    });\n});\nconst confirm = (message, options = {}) => {\n    const { okbutton = '确定', canclebutton = '取消' } = options;\n    const _index = Date.now();\n    return Object(_core__WEBPACK_IMPORTED_MODULE_0__[\"pcall\"])('WVUIDialog.confirm', {\n        message,\n        okbutton,\n        canclebutton,\n        _index,\n    }).then(() => waittingEvent(_index, okbutton));\n};\n\n\n//# sourceURL=webpack://Flyover/./src/windvane/confirm.ts?");

/***/ }),

/***/ "./src/windvane/core.ts":
/*!******************************!*\
  !*** ./src/windvane/core.ts ***!
  \******************************/
/*! exports provided: call, pcall */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"call\", function() { return call; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pcall\", function() { return pcall; });\n/* harmony import */ var _install__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./install */ \"./src/windvane/install.ts\");\n\nObject(_install__WEBPACK_IMPORTED_MODULE_0__[\"install\"])();\nconst call = (api, params, callback) => {\n    const [className, methodName] = api.split('.');\n    const success = o => callback && callback(null, o);\n    const failure = e => callback && callback(e);\n    // @ts-ignore\n    window.lib.windvane.call(className, methodName, params, success, failure);\n};\nconst pcall = (api, params) => new Promise((resolve, reject) => {\n    return call(api, params, (err, res) => {\n        if (err)\n            return reject(err);\n        resolve(res);\n    });\n});\n\n\n//# sourceURL=webpack://Flyover/./src/windvane/core.ts?");

/***/ }),

/***/ "./src/windvane/index.ts":
/*!*******************************!*\
  !*** ./src/windvane/index.ts ***!
  \*******************************/
/*! exports provided: toast, alert, confirm, showLoading, hideLoading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _toast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toast */ \"./src/windvane/toast.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"toast\", function() { return _toast__WEBPACK_IMPORTED_MODULE_0__[\"toast\"]; });\n\n/* harmony import */ var _alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert */ \"./src/windvane/alert.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"alert\", function() { return _alert__WEBPACK_IMPORTED_MODULE_1__[\"alert\"]; });\n\n/* harmony import */ var _confirm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./confirm */ \"./src/windvane/confirm.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"confirm\", function() { return _confirm__WEBPACK_IMPORTED_MODULE_2__[\"confirm\"]; });\n\n/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loading */ \"./src/windvane/loading.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"showLoading\", function() { return _loading__WEBPACK_IMPORTED_MODULE_3__[\"showLoading\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"hideLoading\", function() { return _loading__WEBPACK_IMPORTED_MODULE_3__[\"hideLoading\"]; });\n\n\n\n\n\n\n\n//# sourceURL=webpack://Flyover/./src/windvane/index.ts?");

/***/ }),

/***/ "./src/windvane/install.ts":
/*!*********************************!*\
  !*** ./src/windvane/install.ts ***!
  \*********************************/
/*! exports provided: install */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"install\", function() { return install; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ \"./src/utils/index.ts\");\n\nconst install = () => Promise.all([\n    Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"loadScript\"])(_utils__WEBPACK_IMPORTED_MODULE_0__[\"QianniuBridgeUrl\"]),\n    Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"loadScript\"])(_utils__WEBPACK_IMPORTED_MODULE_0__[\"WindVaneBridgeUrl\"]),\n]);\n\n\n//# sourceURL=webpack://Flyover/./src/windvane/install.ts?");

/***/ }),

/***/ "./src/windvane/loading.ts":
/*!*********************************!*\
  !*** ./src/windvane/loading.ts ***!
  \*********************************/
/*! exports provided: showLoading, hideLoading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showLoading\", function() { return showLoading; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hideLoading\", function() { return hideLoading; });\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ \"./src/windvane/core.ts\");\n\nconst showLoading = () => {\n    return Object(_core__WEBPACK_IMPORTED_MODULE_0__[\"pcall\"])('WVUI.showLoadingBox');\n};\nconst hideLoading = () => {\n    return Object(_core__WEBPACK_IMPORTED_MODULE_0__[\"pcall\"])('WVUI.hideLoadingBox');\n};\n\n\n//# sourceURL=webpack://Flyover/./src/windvane/loading.ts?");

/***/ }),

/***/ "./src/windvane/toast.ts":
/*!*******************************!*\
  !*** ./src/windvane/toast.ts ***!
  \*******************************/
/*! exports provided: toast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toast\", function() { return toast; });\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ \"./src/windvane/core.ts\");\n\nconst toast = (message, options = {}) => {\n    const { duration } = options;\n    return Object(_core__WEBPACK_IMPORTED_MODULE_0__[\"call\"])('WVUIToast.toast', {\n        message,\n        duration,\n    });\n};\n\n\n//# sourceURL=webpack://Flyover/./src/windvane/toast.ts?");

/***/ })

/******/ });
});