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

var call = function (method) {
    var params = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        params[_i - 1] = arguments[_i];
    }
    return new Promise(function (resolve, reject) {
        params.push(function (res) {
            console.log("my.call(" + method + ")", params, res);
            if (res.error)
                return reject(res);
            resolve(res);
        });
        return my.call.apply(my, __spreadArrays([method], params));
    });
};
var pcall = function (method, params) { return new Promise(function (resolve, reject) {
    params.fail = reject;
    params.success = resolve;
    if (my.canIUse(method)) {
        my[method](params);
    }
    else {
        reject(new Error("can not call my." + method));
    }
}); };

var getConfig = function (configKeys) {
    if (!Array.isArray(configKeys))
        configKeys = [configKeys];
    return call('getConfig', { configKeys: configKeys }).then(function (res) { return res.data; });
};

var getRpcGateway = function () {
    return getConfig('rpcUrl').then(function (res) { return res.rpcUrl; });
};
/**
 * rpc
 * @param operationType
 * @param body
 * @param options
 */
var rpc = function (operationType, body, options) {
    if (options === void 0) { options = {}; }
    return call('rpc', __assign({ operationType: operationType, requestData: [body] }, options)).then(function (res) {
        if (res.success)
            return res;
        var err = new Error();
        err.code = res.resultCode;
        err.message = res.resultMsg;
        err.operationType = operationType;
        err.requestData = body;
        err.response = res;
        throw err;
    });
};

var getCdpSpaceInfos = function (spaceCodes, options) {
    return call('getCdpSpaceInfos', __assign({ spaceCodes: spaceCodes }, options));
};
var getCdpSpaceInfo = function (spaceCode, options) {
    return call('getCdpSpaceInfo', __assign({ spaceCode: spaceCode }, options));
};
var cdpFeedback = function (spaceCode, objectId, behavior) {
    if (behavior === void 0) { behavior = 'SHOW'; }
    return call('cdpFeedback', { spaceCode: spaceCode, objectId: objectId, behavior: behavior });
};

var getUserInfo = function () {
    return call('getUserInfo');
};
var getUserId = function () {
    return getUserInfo().then(function (user) { return user.userId; });
};

/**
 * showToast
 * @docs https://opendocs.alipay.com/mini/api/fhur8f
 * @param {ToastOption} content
 * @param {*} options
 */
var showToast = function (content, options) {
    return pcall('showToast', __assign({ content: content }, options));
};
/**
 * hideToast
 * @docs https://opendocs.alipay.com/mini/api/iygd4e
 */
var hideToast = function () {
    return pcall('hideToast');
};
// alias
var toast = showToast;

/**
 * alert
 * @docs https://opendocs.alipay.com/mini/api/ui-feedback
 * @param {*} content
 * @param {*} options
 */
var alert = function (content, options) {
    return pcall('alert', __assign({ content: content }, options));
};

/**
 * hideTabBars
 * @param {*} options
 * @docs https://opendocs.alipay.com/mini/api/at18z8
 */
var hideTabBar = function (options) {
    return pcall('hideTabBar', options);
};
/**
 * showTabBar
 * @param {*} options
 * @docs https://opendocs.alipay.com/mini/api/dpq5dh
 */
var showTabBar = function (options) {
    return pcall('showTabBar', options);
};

/**
 * setNavigationBar
 * @docs https://opendocs.alipay.com/mini/api/xwq8e6
 * @param options
 */
var setNavigationBar = function (options) {
    return pcall("setNavigationBar", options);
};
var setTitle = function (title) {
    return setNavigationBar({ title: title });
};
var setTitleAsImage = function (image) {
    return setNavigationBar({ image: image });
};
var resetNavigationBarColor = function () {
    return setNavigationBar({ reset: true });
};

/**
 * showLoading
 * @docs https://opendocs.alipay.com/mini/api/bm69kb
 */
var showLoading = function () {
    return pcall('showLoading');
};
/**
 * hideLoading
 * @docs https://opendocs.alipay.com/mini/api/nzf540
 */
var hideLoading = function () {
    return pcall('hideLoading');
};

var confirm = function (content, options) {
    if (options === void 0) { options = {}; }
    return pcall('confirm', __assign({ content: content }, options));
};

var request = function (url, options) {
    return pcall('request', __assign({ url: url }, options));
};
var get = function (url, options) {
    return request(url, options);
};
var post = function (url, data, options) {
    return request(url, __assign({ method: 'POST', data: data }, options));
};

/**
 * setStorage
 * @docs https://opendocs.alipay.com/mini/api/eocm6v
 * @param {*} key
 * @param {*} data
 */
var setStorage = function (key, data) {
    return pcall('setStorage', {
        key: key, data: data
    });
};
/**
 * getStorage
 * @docs https://opendocs.alipay.com/mini/api/azfobl
 * @param {*} key
 */
var getStorage = function (key) {
    return pcall('getStorage', { key: key }).then(function (res) {
        if (res.success)
            return res.data;
        throw new Error();
    });
};
var removeStorage = function (key) {
    return pcall('removeStorage', { key: key });
};
/**
 * clearStorage
 * @docs https://opendocs.alipay.com/mini/api/storage
 */
var clearStorage = function () {
    return pcall('clearStorage');
};

/**
 * redirectTo
 * @docs https://opendocs.alipay.com/mini/api/fh18ky
 * @param url
 */
var redirectTo = function (url) {
    return pcall('redirectTo', { url: url });
};
/**
 * navigateTo
 * https://opendocs.alipay.com/mini/component/navigator
 * @param {*} url
 * @param {*} query
 */
var navigateTo = function (url) {
    return pcall('navigateTo', { url: url });
};
/**
 * navigateBack
 * @docs https://opendocs.alipay.com/mini/api/kc5zbx
 */
var navigateBack = function () {
    return pcall('navigateBack');
};
/**
 * switchTab
 * @docs https://opendocs.alipay.com/mini/api/ui-tabbar
 * @param url
 */
var switchTab = function (url) {
    return pcall('switchTab', { url: url });
};
/**
 * reLaunch
 * @docs https://opendocs.alipay.com/mini/api/hmn54z
 * @param url
 */
var reLaunch = function (url) {
    return pcall('reLaunch', { url: url });
};

var pushWindow = function (url, options) {
    return call('pushWindow', __assign({ url: url }, options));
};

exports.alert = alert;
exports.cdpFeedback = cdpFeedback;
exports.clearStorage = clearStorage;
exports.confirm = confirm;
exports.get = get;
exports.getCdpSpaceInfo = getCdpSpaceInfo;
exports.getCdpSpaceInfos = getCdpSpaceInfos;
exports.getRpcGateway = getRpcGateway;
exports.getStorage = getStorage;
exports.getUserId = getUserId;
exports.getUserInfo = getUserInfo;
exports.hideLoading = hideLoading;
exports.hideTabBar = hideTabBar;
exports.hideToast = hideToast;
exports.navigateBack = navigateBack;
exports.navigateTo = navigateTo;
exports.post = post;
exports.pushWindow = pushWindow;
exports.reLaunch = reLaunch;
exports.redirectTo = redirectTo;
exports.removeStorage = removeStorage;
exports.request = request;
exports.resetNavigationBarColor = resetNavigationBarColor;
exports.rpc = rpc;
exports.setNavigationBar = setNavigationBar;
exports.setStorage = setStorage;
exports.setTitle = setTitle;
exports.setTitleAsImage = setTitleAsImage;
exports.showLoading = showLoading;
exports.showTabBar = showTabBar;
exports.showToast = showToast;
exports.switchTab = switchTab;
exports.toast = toast;
