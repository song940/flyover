'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

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
    var _a = options || {}, extInfo = _a.extInfo, immediately = _a.immediately, multiCallback = _a.multiCallback;
    return pcall('getCdpSpaceInfos', {
        spaceCodes: spaceCodes,
        extInfo: extInfo,
        immediately: immediately,
        multiCallback: multiCallback,
    });
};
var getCdpSpaceInfo = function (spaceCode, options) {
    var _a = options || {}, extInfo = _a.extInfo, immediately = _a.immediately, multiCallback = _a.multiCallback;
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

var getUserInfo = function (options) {
    return pcall('getUserInfo', options);
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

/**
 * https://myjsapi.alipay.com/jsapi/ui/set-title.html
 * @param title
 * @param onClickTitle
 */
var setTitle = function (title, options, onClickTitle) {
    // 安卓10.0.18版本之前不支持设置空的title，可以通过设置一个不可见字符串绕过去，10.0.20版本已经去掉这个限制
    // https://myjsapi.alipay.com/jsapi/ui/set-title.html#3__E6_B3_A8_E6_84_8F
    if (!title)
        title = '\u200b';
    return pcall('setTitle', __assign({ title: title }, options), onClickTitle);
};
var fromColor = function (color) {
    if (color.indexOf('#') !== 0)
        return color;
    return parseInt(color.slice(1), 16);
};
/**
 * setTitleColor
 * @param color
 * @param reset
 * @docs http://jsapi.alipay.net/jsapi/ui/set-title-color.html
 */
var setTitleColor = function (options) {
    if (typeof options === 'string') {
        options = {
            color: fromColor(options)
        };
    }
    var color = options.color, _a = options.reset, reset = _a === void 0 ? false : _a, _b = options.resetTransparent, resetTransparent = _b === void 0 ? false : _b;
    return pcall('setTitleColor', { color: color, reset: reset, resetTransparent: resetTransparent });
};
var resetTitleColor = function () {
    return setTitleColor({ reset: true });
};
/**
 * setTransparentTitle
 * http://jsapi.alipay.net/jsapi/ui/set-transparent-title.html
 */
var setTransparentTitle = function (mode) {
    if (mode === void 0) { mode = "auto"; }
    return pcall('setTransparentTitle', {
        transparentTitle: mode
    });
};
var resetTransparentTitle = function () {
    return setTitleColor({ resetTransparent: true });
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
/**
 * https://myjsapi.alipay.com/jsapi/ui/show-title-loading.html
 */
var showTitleLoading = function () {
    return pcall('showTitleLoading');
};
/**
 * https://myjsapi.alipay.com/jsapi/ui/hide-title-loading.html
 */
var hideTitleLoading = function () {
    return pcall('hideTitleLoading');
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
 * tradePay
 * https://myjsapi.alipay.com/jsapi/native/trade-pay.html
 * @param param0
 */
var tradePay = function (_a) {
    var uuid = _a.uuid, extern_token = _a.extern_token, _b = _a.app_name, app_name = _b === void 0 ? 'alipay' : _b, _c = _a.biz_type, biz_type = _c === void 0 ? 'openservice' : _c, _d = _a.apiname, apiname = _d === void 0 ? 'com.alipay.paypwd.validate' : _d, _e = _a.apiservice, apiservice = _e === void 0 ? 'com.alipay.loan.agreement.sign' : _e, _f = _a.tip, tip = _f === void 0 ? '请输入支付宝支付密码' : _f;
    var orderStr = [
        "uuid=" + uuid,
        "extern_token=" + extern_token,
        "app_name=" + app_name,
        "biz_type=" + biz_type,
        "apiname=" + apiname,
        "apiservice=" + apiservice,
        "tip=" + tip
    ].join('&');
    return pcall('tradePay', { orderStr: orderStr }).then(function (res) {
        if (res.resultCode === '9000')
            return res;
        throw res;
    });
};
var verifyIdentity = function (verifyId) {
    return pcall('verifyIdentity', { verifyId: verifyId }).then(function (res) {
        if (res.code === '1000')
            return res;
        throw res;
    });
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

var subscribeMsgbox = function (serviceCode) {
    return pcall('subscribeMsgbox', { serviceCode: serviceCode });
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

exports.addNotifyListener = addNotifyListener;
exports.alert = alert;
exports.call = call;
exports.cdpFeedback = cdpFeedback;
exports.closeWebview = closeWebview;
exports.confirm = confirm;
exports.getCdpSpaceInfo = getCdpSpaceInfo;
exports.getCdpSpaceInfos = getCdpSpaceInfos;
exports.getTitleAndStatusbarHeight = getTitleAndStatusbarHeight;
exports.getUserInfo = getUserInfo;
exports.handleResponse = handleResponse;
exports.hideBackButton = hideBackButton;
exports.hideLoading = hideLoading;
exports.hideOptionMenu = hideOptionMenu;
exports.hideTitleLoading = hideTitleLoading;
exports.openInBrowser = openInBrowser;
exports.optionMenu = optionMenu;
exports.pcall = pcall;
exports.popWindow = popWindow;
exports.postNotification = postNotification;
exports.pushWindow = pushWindow;
exports.ready = ready;
exports.removeNotifyListener = removeNotifyListener;
exports.resetTitleColor = resetTitleColor;
exports.resetTransparentTitle = resetTransparentTitle;
exports.restorePullToRefresh = restorePullToRefresh;
exports.rpc = rpc;
exports.setTitle = setTitle;
exports.setTitleColor = setTitleColor;
exports.setTransparentTitle = setTransparentTitle;
exports.showBackButton = showBackButton;
exports.showLoading = showLoading;
exports.showTitleLoading = showTitleLoading;
exports.subscribeMsgbox = subscribeMsgbox;
exports.toast = toast;
exports.tradePay = tradePay;
exports.verifyIdentity = verifyIdentity;
