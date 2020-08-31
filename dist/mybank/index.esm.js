/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
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

var rpc = function (operationType, body, options) {
    return pcall('rpc', __assign({ operationType: operationType, requestData: [body] }, options));
};

var getCdpSpaceInfos = function (spaceCodes, options) {
    var extInfo = options.extInfo, immediately = options.immediately, multiCallback = options.multiCallback;
    return pcall('getCdpSpaceInfos', {
        spaceCodes: spaceCodes,
        extInfo: extInfo,
        immediately: immediately,
        multiCallback: multiCallback,
    });
};
var getCdpSpaceInfo = function (spaceCode, options) {
    var extInfo = options.extInfo, immediately = options.immediately, multiCallback = options.multiCallback;
    return pcall('getCdpSpaceInfo', {
        spaceCode: spaceCode,
        extInfo: extInfo,
        immediately: immediately,
        multiCallback: multiCallback,
    });
};
var cdpFeedback = function (spaceCode, objectId, behavior) {
    if (behavior === void 0) { behavior = 'SHOW'; }
    return pcall('cdpFeedback', { spaceCode: spaceCode, objectId: objectId, behavior: behavior });
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

/**
 * addNotifyListener
 * @docs http://jsapi.alipay.net/jsapi/events/add-notify-listener.html
 * @param name s
 * @param options
 * @param fn
 */
var addNotifyListener = function (name, options, fn) {
    call('addNotifyListener', __assign({ name: name }, options), fn);
    return function () { return removeNotifyListener(name); };
};
/**
 * removeNotifyListener
 * @docs http://jsapi.alipay.net/jsapi/events/remove-notify-listener.html
 * @param name
 */
var removeNotifyListener = function (name) {
    return pcall('removeNotifyListener', { name: name });
};
/**
 * postNotification
 * @docs http://jsapi.alipay.net/jsapi/events/post-notification.html
 * @param name
 * @param data
 */
var postNotification = function (name, data) {
    return pcall('postNotification', { name: name, data: data });
};

var fromColor = function (color) {
    if (color.indexOf('#') !== 0)
        return color;
    return parseInt(color.slice(1), 16);
};
/**
 * https://myjsapi.alipay.com/jsapi/ui/set-title.html
 * @param title
 * @param onClickTitle
 */
var setTitle = function (title, onClickTitle) {
    return pcall('setTitle', {
        title: title
    }, onClickTitle);
};
/**
 * setTitleColor
 * @param color
 * @param reset
 * @docs http://jsapi.alipay.net/jsapi/ui/set-title-color.html
 */
var setTitleColor = function (color, reset) {
    if (reset === void 0) { reset = false; }
    if (typeof color === 'string') {
        color = fromColor(color);
    }
    return pcall('setTitleColor', { color: color, reset: reset });
};
/**
 * setTransparentTitle
 * http://jsapi.alipay.net/jsapi/ui/set-transparent-title.html
 */
var setTransparentTitle = function (options) {
    return pcall('setTransparentTitle', options);
};
/**
 * getTitleAndStatusbarHeight
 * @docs http://jsapi.alipay.net/jsapi/ui/get-title-and-statusbar-height.html
 */
var getTitleAndStatusbarHeight = function () {
    return pcall('getTitleAndStatusbarHeight');
};
var hideBackButton = function () {
    return pcall('hideBackButton');
};
var showBackButton = function () {
    return pcall('showBackButton');
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

// export const NebulaBridgeUrl = '//a.alipayobjects.com/g/h5-lib/alipayjsapi/3.0.5/alipayjsapi.inc.min.js';
// export const WindVaneBridgeUrl = '//g.alicdn.com/mtb/lib-windvane/2.1.8/windvane.js';
// export const DingTalkBridgeUrl = '//g.alicdn.com/dingding/dingtalk-jsapi/2.4.3/dingtalk.open.js';
// export const AmapBridgeUrl = '//as.alipayobjects.com/g/insuranceprod/amap-util/1.0.0/amap.js';
// export const QianniuBridgeUrl = '//g.alicdn.com/x-bridge/qap-sdk/2.4.2/qn.min.js';
var addEventListener = function (type, fn) {
    document.addEventListener(type, fn, false);
    return function () { return document.removeEventListener(type, fn); };
};

/**
 * https://myjsapi.alipay.com/jsapi/events/option-menu.html
 */
var optionMenu = function (options, fn) {
    call('setOptionMenu', options);
    call('showOptionMenu');
    var removeEventListener = addEventListener('optionMenu', fn);
    return function () {
        hideOptionMenu();
        removeEventListener();
    };
};
var hideOptionMenu = function () {
    return call('hideOptionMenu');
};

var openInBrowser = function (url) {
    return pcall('openInBrowser', { url: url });
};

var restorePullToRefresh = function () {
    return pcall('restorePullToRefresh');
};

var getAlipayUserId = function () {
    return pcall('getAlipayUserId').then(function (user) { return user.alipayUserId; });
};

export { addNotifyListener, alert, call, cdpFeedback, closeWebview, confirm, getAlipayUserId, getCdpSpaceInfo, getCdpSpaceInfos, getTitleAndStatusbarHeight, handleResponse, hideBackButton, hideLoading, hideOptionMenu, openInBrowser, optionMenu, pcall, popWindow, postNotification, pushWindow, ready, removeNotifyListener, restorePullToRefresh, rpc, setTitle, setTitleColor, setTransparentTitle, showBackButton, showLoading, toast };
