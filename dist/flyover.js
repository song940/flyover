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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nfunction __export(m) {\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\n}\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__export(__webpack_require__(/*! ../nebula */ \"./src/nebula/index.ts\"));\n\n\n//# sourceURL=webpack://Flyover/./src/alipay/index.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\n    result[\"default\"] = mod;\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar alipay = __importStar(__webpack_require__(/*! ./alipay */ \"./src/alipay/index.ts\"));\nvar mybank = __importStar(__webpack_require__(/*! ./mybank */ \"./src/mybank/index.ts\"));\nvar qianniu = __importStar(__webpack_require__(/*! ./qianniu */ \"./src/qianniu/index.ts\"));\nvar utils_1 = __webpack_require__(/*! ./utils */ \"./src/utils/index.ts\");\nexports.call = function (method) {\n    var params = [];\n    for (var _i = 1; _i < arguments.length; _i++) {\n        params[_i - 1] = arguments[_i];\n    }\n};\nexports.toast = function (content, options) {\n    if (utils_1.isAlipay)\n        return alipay.toast(content, options);\n    if (utils_1.isQianNiu)\n        return qianniu.toast(content, options);\n    if (utils_1.isMyBank)\n        return mybank.toast(content, options);\n};\nexports.alert = function (content, options) {\n    if (utils_1.isAlipay)\n        return alipay.alert(content, options);\n    if (utils_1.isQianNiu)\n        return qianniu.alert(content, options);\n    if (utils_1.isMyBank)\n        return mybank.alert(content, options);\n};\nexports.confirm = function (content, options) {\n    if (utils_1.isAlipay)\n        return alipay.confirm(content, options);\n    if (utils_1.isQianNiu)\n        return qianniu.confirm(content, options);\n    if (utils_1.isMyBank)\n        return mybank.confirm(content, options);\n};\nexports.showLoading = function () {\n    if (utils_1.isAlipay)\n        return alipay.showLoading();\n    if (utils_1.isQianNiu)\n        return qianniu.showLoading();\n    if (utils_1.isMyBank)\n        return mybank.showLoading();\n};\nexports.hideLoading = function () {\n    if (utils_1.isAlipay)\n        return alipay.hideLoading();\n    if (utils_1.isQianNiu)\n        return qianniu.hideLoading();\n    if (utils_1.isMyBank)\n        return mybank.hideLoading();\n};\nexports.pushWindow = function (url, options) {\n    if (utils_1.isAlipay)\n        return alipay.pushWindow(url, options);\n    if (utils_1.isQianNiu)\n        return qianniu.pushWindow(url, options);\n    if (utils_1.isMyBank)\n        return mybank.pushWindow(url, options);\n};\nexports.popWindow = function () {\n    if (utils_1.isAlipay)\n        return alipay.popWindow();\n    if (utils_1.isQianNiu)\n        return qianniu.popWindow();\n    if (utils_1.isMyBank)\n        return mybank.popWindow();\n};\nexports.closeWebview = function () {\n    if (utils_1.isAlipay)\n        return alipay.closeWebview();\n    if (utils_1.isQianNiu)\n        return qianniu.popWindow();\n    if (utils_1.isMyBank)\n        return mybank.closeWebview();\n};\n\n\n//# sourceURL=webpack://Flyover/./src/index.ts?");

/***/ }),

/***/ "./src/mybank/index.ts":
/*!*****************************!*\
  !*** ./src/mybank/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nfunction __export(m) {\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\n}\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__export(__webpack_require__(/*! ../nebula */ \"./src/nebula/index.ts\"));\n\n\n//# sourceURL=webpack://Flyover/./src/mybank/index.ts?");

/***/ }),

/***/ "./src/nebula/alert.ts":
/*!*****************************!*\
  !*** ./src/nebula/alert.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar core_1 = __webpack_require__(/*! ./core */ \"./src/nebula/core.ts\");\nexports.alert = function (message, options) {\n    var title = options.title, buttonText = options.buttonText;\n    return core_1.pcall('alert', {\n        title: title,\n        message: message,\n        button: buttonText\n    });\n};\n\n\n//# sourceURL=webpack://Flyover/./src/nebula/alert.ts?");

/***/ }),

/***/ "./src/nebula/closeWebview.ts":
/*!************************************!*\
  !*** ./src/nebula/closeWebview.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar core_1 = __webpack_require__(/*! ./core */ \"./src/nebula/core.ts\");\nexports.closeWebview = function () {\n    return core_1.pcall('closeWebview');\n};\n\n\n//# sourceURL=webpack://Flyover/./src/nebula/closeWebview.ts?");

/***/ }),

/***/ "./src/nebula/confirm.ts":
/*!*******************************!*\
  !*** ./src/nebula/confirm.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar core_1 = __webpack_require__(/*! ./core */ \"./src/nebula/core.ts\");\nexports.confirm = function (message, _a) {\n    var title = _a.title, okButton = _a.okButton, cancelButton = _a.cancelButton;\n    return core_1.pcall('confirm', {\n        title: title,\n        message: message,\n        okButton: okButton,\n        cancelButton: cancelButton,\n    });\n};\n\n\n//# sourceURL=webpack://Flyover/./src/nebula/confirm.ts?");

/***/ }),

/***/ "./src/nebula/core.ts":
/*!****************************!*\
  !*** ./src/nebula/core.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __spreadArrays = (this && this.__spreadArrays) || function () {\n    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;\n    for (var r = Array(s), k = 0, i = 0; i < il; i++)\n        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)\n            r[k] = a[j];\n    return r;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nfunction ready(callback) {\n    // @ts-ignore\n    if (window.AlipayJSBridge) {\n        callback && callback();\n    }\n    else {\n        document.addEventListener('AlipayJSBridgeReady', callback, false);\n    }\n}\nexports.ready = ready;\nexports.call = function (method) {\n    var params = [];\n    for (var _i = 1; _i < arguments.length; _i++) {\n        params[_i - 1] = arguments[_i];\n    }\n    ready(function () { return AlipayJSBridge.call.apply(AlipayJSBridge, __spreadArrays([method], params)); });\n};\nexports.pcall = function (method) {\n    var params = [];\n    for (var _i = 1; _i < arguments.length; _i++) {\n        params[_i - 1] = arguments[_i];\n    }\n    return new Promise(function (resolve, reject) {\n        params.push(function (res) {\n            console.log(\"AlipayJSBridge.call(\" + method + \")\", res);\n            resolve(res);\n        });\n        return exports.call.apply(void 0, __spreadArrays([method], params));\n    });\n};\n\n\n//# sourceURL=webpack://Flyover/./src/nebula/core.ts?");

/***/ }),

/***/ "./src/nebula/index.ts":
/*!*****************************!*\
  !*** ./src/nebula/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nfunction __export(m) {\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\n}\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__export(__webpack_require__(/*! ./toast */ \"./src/nebula/toast.ts\"));\n__export(__webpack_require__(/*! ./alert */ \"./src/nebula/alert.ts\"));\n__export(__webpack_require__(/*! ./confirm */ \"./src/nebula/confirm.ts\"));\n__export(__webpack_require__(/*! ./loading */ \"./src/nebula/loading.ts\"));\n__export(__webpack_require__(/*! ./popWindow */ \"./src/nebula/popWindow.ts\"));\n__export(__webpack_require__(/*! ./pushWindow */ \"./src/nebula/pushWindow.ts\"));\n__export(__webpack_require__(/*! ./closeWebview */ \"./src/nebula/closeWebview.ts\"));\n\n\n//# sourceURL=webpack://Flyover/./src/nebula/index.ts?");

/***/ }),

/***/ "./src/nebula/loading.ts":
/*!*******************************!*\
  !*** ./src/nebula/loading.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar core_1 = __webpack_require__(/*! ./core */ \"./src/nebula/core.ts\");\nexports.showLoading = function () {\n    return core_1.call('showLoading');\n};\nexports.hideLoading = function () {\n    return core_1.call('hideLoading');\n};\n\n\n//# sourceURL=webpack://Flyover/./src/nebula/loading.ts?");

/***/ }),

/***/ "./src/nebula/popWindow.ts":
/*!*********************************!*\
  !*** ./src/nebula/popWindow.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar core_1 = __webpack_require__(/*! ./core */ \"./src/nebula/core.ts\");\nexports.popWindow = function () {\n    return core_1.pcall('popWindow');\n};\n\n\n//# sourceURL=webpack://Flyover/./src/nebula/popWindow.ts?");

/***/ }),

/***/ "./src/nebula/pushWindow.ts":
/*!**********************************!*\
  !*** ./src/nebula/pushWindow.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar core_1 = __webpack_require__(/*! ./core */ \"./src/nebula/core.ts\");\n/**\n * pushWindow\n * https://myjsapi.alipay.com/jsapi/context/push-window.html\n * @param url\n * @param param\n */\nexports.pushWindow = function (url, param) {\n    return core_1.pcall('pushWindow', { url: url, param: param });\n};\n\n\n//# sourceURL=webpack://Flyover/./src/nebula/pushWindow.ts?");

/***/ }),

/***/ "./src/nebula/toast.ts":
/*!*****************************!*\
  !*** ./src/nebula/toast.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar core_1 = __webpack_require__(/*! ./core */ \"./src/nebula/core.ts\");\nexports.toast = function (content, options) {\n    return core_1.pcall('toast', __assign({ content: content }, options));\n};\n\n\n//# sourceURL=webpack://Flyover/./src/nebula/toast.ts?");

/***/ }),

/***/ "./src/qianniu/index.ts":
/*!******************************!*\
  !*** ./src/qianniu/index.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nfunction __export(m) {\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\n}\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__export(__webpack_require__(/*! ../windvane */ \"./src/windvane/index.ts\"));\n__export(__webpack_require__(/*! ./popWindow */ \"./src/qianniu/popWindow.ts\"));\n__export(__webpack_require__(/*! ./pushWindow */ \"./src/qianniu/pushWindow.ts\"));\n\n\n//# sourceURL=webpack://Flyover/./src/qianniu/index.ts?");

/***/ }),

/***/ "./src/qianniu/popWindow.ts":
/*!**********************************!*\
  !*** ./src/qianniu/popWindow.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.popWindow = function () {\n    QN.navigator.pop();\n};\n\n\n//# sourceURL=webpack://Flyover/./src/qianniu/popWindow.ts?");

/***/ }),

/***/ "./src/qianniu/pushWindow.ts":
/*!***********************************!*\
  !*** ./src/qianniu/pushWindow.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nfunction getAbsoluteURL(url) {\n    var ele = document.createElement('a');\n    ele.href = url;\n    url = ele.href;\n    ele = null;\n    return url;\n}\nexports.getAbsoluteURL = getAbsoluteURL;\n;\nexports.pushWindow = function (url, options) {\n    if (options === void 0) { options = {}; }\n    var data = options.data;\n    return new Promise(function (resolve, reject) {\n        try {\n            QN.navigator.push({\n                url: getAbsoluteURL(url),\n                query: data,\n            });\n            resolve();\n        }\n        catch (e) {\n            reject(e);\n        }\n    });\n};\n\n\n//# sourceURL=webpack://Flyover/./src/qianniu/pushWindow.ts?");

/***/ }),

/***/ "./src/utils/index.ts":
/*!****************************!*\
  !*** ./src/utils/index.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.NebulaBridgeUrl = '//a.alipayobjects.com/g/h5-lib/alipayjsapi/3.0.5/alipayjsapi.inc.min.js';\nexports.WindVaneBridgeUrl = '//g.alicdn.com/mtb/lib-windvane/2.1.8/windvane.js';\nexports.DingTalkBridgeUrl = '//g.alicdn.com/dingding/dingtalk-jsapi/2.4.3/dingtalk.open.js';\nexports.AmapBridgeUrl = '//as.alipayobjects.com/g/insuranceprod/amap-util/1.0.0/amap.js';\nexports.QianniuBridgeUrl = '//g.alicdn.com/x-bridge/qap-sdk/2.4.2/qn.min.js';\nexports.loadScript = function (url) { return new Promise(function (resolve, reject) {\n    var script = document.createElement('script');\n    script.src = url;\n    script.charset = 'UTF-8';\n    script.addEventListener('load', resolve, false);\n    script.addEventListener('error', function () { return reject(new Error('script load error')); }, false);\n    document.head.appendChild(script);\n}); };\nvar getAliappInfo = function (ua) {\n    if (/AliApp\\(([\\w\\-]+)\\/([\\d\\.]+)\\)/i.test(ua)) {\n        return {\n            name: String(RegExp.$1).toLowerCase(),\n            version: RegExp.$2,\n        };\n    }\n    var matches = ua.match(/(amap)\\/([\\d.]+)/i);\n    if (Array.isArray(matches) && matches.length > 2 && matches[1] === 'amap') {\n        return {\n            name: 'amap',\n            version: matches[2],\n        };\n    }\n    var insideMatchs = ua.match(/(Inside)([\\/\\s](.*))?/i);\n    if (Array.isArray(insideMatchs) && insideMatchs.length > 2 && insideMatchs[1] === 'Inside') {\n        return {\n            name: 'Inside',\n            version: insideMatchs[3] || '',\n        };\n    }\n    return {\n        name: 'web',\n        version: '',\n    };\n};\nvar ua = window.navigator.userAgent;\nexports.aliAppInfo = getAliappInfo(ua);\nexports.isAlipay = /AliApp\\(AP\\/([\\d\\.]+)\\)/i.test(ua);\nexports.isKoubei = /AliApp\\(KB\\/([\\d\\.]+)\\)/i.test(ua);\nexports.isKoubeiMerchant = /AliApp\\(AM\\/([\\d\\.]+)\\)/i.test(ua);\nexports.isTaobao = /AliApp\\(TB\\/([\\d\\.]+)\\)/i.test(ua);\nexports.isTmall = /AliApp\\(TM\\/([\\d\\.]+)\\)/i.test(ua);\nexports.isWealth = /AliApp\\(AFW\\/([\\d\\.]+)\\)/i.test(ua);\nexports.isMyBank = /AliApp\\(BK\\/([\\d\\.]+)\\)/i.test(ua);\nexports.isDingTalk = /AliApp\\(DingTalk\\/([\\d\\.]+)\\)/i.test(ua);\nexports.isQianNiu = /AliApp\\(QN\\/([\\d\\.]+)\\)/i.test(ua);\nexports.isAmap = /amap/i.test(ua);\nexports.isInside = /Inside/i.test(ua);\nexports.addEventListener = function (type, fn) {\n    document.addEventListener(type, fn, false);\n    return function () { return document.removeEventListener(type, fn); };\n};\n\n\n//# sourceURL=webpack://Flyover/./src/utils/index.ts?");

/***/ }),

/***/ "./src/windvane/alert.ts":
/*!*******************************!*\
  !*** ./src/windvane/alert.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar core_1 = __webpack_require__(/*! ./core */ \"./src/windvane/core.ts\");\nvar utils_1 = __webpack_require__(/*! ../utils */ \"./src/utils/index.ts\");\nvar waittingEvent = function (id) { return new Promise(function (done) {\n    var removeListener = utils_1.addEventListener('WV.Event.Alert', function (e) {\n        var identifier = (e.param || {}).identifier;\n        if (identifier && id === identifier) {\n            done(e);\n            removeListener();\n        }\n    });\n}); };\nexports.alert = function (message, options) {\n    if (options === void 0) { options = {}; }\n    var _a = options.buttonText, buttonText = _a === void 0 ? '确定' : _a;\n    var identifier = Date.now();\n    return core_1.pcall('WVUIDialog.alert', {\n        message: message,\n        okbutton: buttonText,\n        identifier: identifier,\n    }).then(function () { return waittingEvent(identifier); });\n};\n\n\n//# sourceURL=webpack://Flyover/./src/windvane/alert.ts?");

/***/ }),

/***/ "./src/windvane/confirm.ts":
/*!*********************************!*\
  !*** ./src/windvane/confirm.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar core_1 = __webpack_require__(/*! ./core */ \"./src/windvane/core.ts\");\nvar utils_1 = __webpack_require__(/*! ../utils */ \"./src/utils/index.ts\");\nvar cbkObj = {};\nvar waittingEvent = function (id, text) { return new Promise(function (done) {\n    var removeListener = utils_1.addEventListener('wv.dialog', function (e) {\n        var _a = e.param || {}, type = _a.type, _index = _a._index;\n        if (_index === id) {\n            done(type === text);\n            removeListener();\n        }\n    });\n}); };\nexports.confirm = function (message, options) {\n    if (options === void 0) { options = {}; }\n    var _a = options.okbutton, okbutton = _a === void 0 ? '确定' : _a, _b = options.canclebutton, canclebutton = _b === void 0 ? '取消' : _b;\n    var _index = Date.now();\n    return core_1.pcall('WVUIDialog.confirm', {\n        message: message,\n        okbutton: okbutton,\n        canclebutton: canclebutton,\n        _index: _index,\n    }).then(function () { return waittingEvent(_index, okbutton); });\n};\n\n\n//# sourceURL=webpack://Flyover/./src/windvane/confirm.ts?");

/***/ }),

/***/ "./src/windvane/core.ts":
/*!******************************!*\
  !*** ./src/windvane/core.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar install_1 = __webpack_require__(/*! ./install */ \"./src/windvane/install.ts\");\ninstall_1.install();\nexports.call = function (api, params, callback) {\n    var _a = api.split('.'), className = _a[0], methodName = _a[1];\n    var success = function (o) { return callback && callback(null, o); };\n    var failure = function (e) { return callback && callback(e); };\n    // @ts-ignore\n    window.lib.windvane.call(className, methodName, params, success, failure);\n};\nexports.pcall = function (api, params) { return new Promise(function (resolve, reject) {\n    return exports.call(api, params, function (err, res) {\n        if (err)\n            return reject(err);\n        resolve(res);\n    });\n}); };\n\n\n//# sourceURL=webpack://Flyover/./src/windvane/core.ts?");

/***/ }),

/***/ "./src/windvane/index.ts":
/*!*******************************!*\
  !*** ./src/windvane/index.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nfunction __export(m) {\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\n}\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__export(__webpack_require__(/*! ./toast */ \"./src/windvane/toast.ts\"));\n__export(__webpack_require__(/*! ./alert */ \"./src/windvane/alert.ts\"));\n__export(__webpack_require__(/*! ./confirm */ \"./src/windvane/confirm.ts\"));\n__export(__webpack_require__(/*! ./loading */ \"./src/windvane/loading.ts\"));\n\n\n//# sourceURL=webpack://Flyover/./src/windvane/index.ts?");

/***/ }),

/***/ "./src/windvane/install.ts":
/*!*********************************!*\
  !*** ./src/windvane/install.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar utils_1 = __webpack_require__(/*! ../utils */ \"./src/utils/index.ts\");\nexports.install = function () {\n    return Promise.all([\n        utils_1.loadScript(utils_1.QianniuBridgeUrl),\n        utils_1.loadScript(utils_1.WindVaneBridgeUrl),\n    ]);\n};\n\n\n//# sourceURL=webpack://Flyover/./src/windvane/install.ts?");

/***/ }),

/***/ "./src/windvane/loading.ts":
/*!*********************************!*\
  !*** ./src/windvane/loading.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar core_1 = __webpack_require__(/*! ./core */ \"./src/windvane/core.ts\");\nexports.showLoading = function () {\n    return core_1.pcall('WVUI.showLoadingBox');\n};\nexports.hideLoading = function () {\n    return core_1.pcall('WVUI.hideLoadingBox');\n};\n\n\n//# sourceURL=webpack://Flyover/./src/windvane/loading.ts?");

/***/ }),

/***/ "./src/windvane/toast.ts":
/*!*******************************!*\
  !*** ./src/windvane/toast.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar core_1 = __webpack_require__(/*! ./core */ \"./src/windvane/core.ts\");\nexports.toast = function (message, options) {\n    if (options === void 0) { options = {}; }\n    var duration = options.duration;\n    return core_1.call('WVUIToast.toast', {\n        message: message,\n        duration: duration,\n    });\n};\n\n\n//# sourceURL=webpack://Flyover/./src/windvane/toast.ts?");

/***/ })

/******/ });
});