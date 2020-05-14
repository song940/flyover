'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function ready(callback) {
    // @ts-ignore
    if (window.AlipayJSBridge) {
        callback && callback();
    }
    else {
        document.addEventListener('AlipayJSBridgeReady', callback, false);
    }
}
var call = function (method) {
    var params = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        params[_i - 1] = arguments[_i];
    }
    ready(function () { return AlipayJSBridge.call.apply(AlipayJSBridge, __spreadArrays([method], params)); });
};
var pcall = function (method) {
    var params = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        params[_i - 1] = arguments[_i];
    }
    return new Promise(function (resolve, reject) {
        params.push(function (res) {
            console.log("AlipayJSBridge.call(" + method + ")", res);
            resolve(res);
        });
        return call.apply(void 0, __spreadArrays([method], params));
    });
};
var handleResponse = function (res) {
    if (res.success)
        return res.data;
    throw new Error();
};

var toast = function (content, options) {
    return pcall('toast', __assign({ content: content }, options));
};

var alert = function (message, _a) {
    var _b = _a === void 0 ? {} : _a, title = _b.title, button = _b.buttonText;
    return pcall('alert', {
        title: title,
        message: message,
        button: button,
    });
};

var confirm = function (message, _a) {
    var _b = _a === void 0 ? {} : _a, title = _b.title, okButton = _b.okButton, cancelButton = _b.cancelButton;
    return pcall('confirm', {
        title: title,
        message: message,
        okButton: okButton,
        cancelButton: cancelButton,
    }).then(function (_a) {
        var ok = _a.ok;
        return ok;
    });
};

var showLoading = function () {
    return pcall('showLoading').then(handleResponse);
};
var hideLoading = function () {
    return pcall('hideLoading').then(handleResponse);
};

/**
 * https://myjsapi.alipay.com/jsapi/context/pop-window.html
 */
var popWindow = function () {
    return pcall('popWindow');
};

/**
 * pushWindow
 * https://myjsapi.alipay.com/jsapi/context/push-window.html
 * @param url
 * @param param
 */
var pushWindow = function (url, param) {
    return pcall('pushWindow', { url: url, param: param });
};

var closeWebview = function () {
    return pcall('closeWebview');
};

var openInBrowser = function (url) {
    return pcall('openInBrowser', { url: url });
};

/**
 * https://myjsapi.alipay.com/jsapi/ui/set-title.html
 * @param title
 * @param onClickTitle
 */
var setTitle = function (title, onClickTitle) {
    return call('setTitle', {
        title: title
    }, onClickTitle);
};

exports.alert = alert;
exports.call = call;
exports.closeWebview = closeWebview;
exports.confirm = confirm;
exports.handleResponse = handleResponse;
exports.hideLoading = hideLoading;
exports.openInBrowser = openInBrowser;
exports.pcall = pcall;
exports.popWindow = popWindow;
exports.pushWindow = pushWindow;
exports.ready = ready;
exports.setTitle = setTitle;
exports.showLoading = showLoading;
exports.toast = toast;
