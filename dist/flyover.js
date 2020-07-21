(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = global || self, factory(global.Flyover = {}));
}(this, (function (exports) { 'use strict';

    var getAliappInfo = function (ua) {
        if (/AliApp\(([\w\-]+)\/([\d\.]+)\)/i.test(ua)) {
            return {
                name: String(RegExp.$1).toLowerCase(),
                version: RegExp.$2,
            };
        }
        var matches = ua.match(/(amap)\/([\d.]+)/i);
        if (Array.isArray(matches) && matches.length > 2 && matches[1] === 'amap') {
            return {
                name: 'amap',
                version: matches[2],
            };
        }
        var insideMatchs = ua.match(/(Inside)([\/\s](.*))?/i);
        if (Array.isArray(insideMatchs) && insideMatchs.length > 2 && insideMatchs[1] === 'Inside') {
            return {
                name: 'Inside',
                version: insideMatchs[3] || '',
            };
        }
        return {
            name: 'web',
            version: '',
        };
    };
    var ua = window.navigator.userAgent;
    var aliAppInfo = getAliappInfo(ua);
    var isAlipay = /AliApp\(AP\/([\d\.]+)\)/i.test(ua);
    var isKoubei = /AliApp\(KB\/([\d\.]+)\)/i.test(ua);
    var isKoubeiMerchant = /AliApp\(AM\/([\d\.]+)\)/i.test(ua);
    var isTaobao = /AliApp\(TB\/([\d\.]+)\)/i.test(ua);
    var isTmall = /AliApp\(TM\/([\d\.]+)\)/i.test(ua);
    var isWealth = /AliApp\(AFW\/([\d\.]+)\)/i.test(ua);
    var isMyBank = /AliApp\(BK\/([\d\.]+)\)/i.test(ua);
    var isDingTalk = /AliApp\(DingTalk\/([\d\.]+)\)/i.test(ua);
    var isQianNiu = /AliApp\(QN\/([\d\.]+)\)/i.test(ua);
    var isAmap = /amap/i.test(ua);
    var isInside = /Inside/i.test(ua);

    var detect = /*#__PURE__*/Object.freeze({
        __proto__: null,
        aliAppInfo: aliAppInfo,
        isAlipay: isAlipay,
        isKoubei: isKoubei,
        isKoubeiMerchant: isKoubeiMerchant,
        isTaobao: isTaobao,
        isTmall: isTmall,
        isWealth: isWealth,
        isMyBank: isMyBank,
        isDingTalk: isDingTalk,
        isQianNiu: isQianNiu,
        isAmap: isAmap,
        isInside: isInside
    });

    var call = function (api, params, callback) {
        var _a = api.split('.'), className = _a[0], methodName = _a[1];
        var success = function (o) { return callback && callback(null, o); };
        var failure = function (e) { return callback && callback(e); };
        // @ts-ignore
        window.lib.windvane.call(className, methodName, params, success, failure);
    };
    var pcall = function (api, params) { return new Promise(function (resolve, reject) {
        return call(api, params, function (err, res) {
            if (err)
                return reject(err);
            resolve(res);
        });
    }); };

    var toast = function (message, options) {
        if (options === void 0) { options = {}; }
        var duration = options.duration;
        return call('WVUIToast.toast', {
            message: message,
            duration: duration,
        });
    };

    var addEventListener$1 = function (type, fn) {
        document.addEventListener(type, fn, false);
        return function () { return document.removeEventListener(type, fn); };
    };

    var waittingEvent = function (id) { return new Promise(function (done) {
        var removeListener = addEventListener$1('WV.Event.Alert', function (e) {
            var identifier = (e.param || {}).identifier;
            if (identifier && id === identifier) {
                done(e);
                removeListener();
            }
        });
    }); };
    var alert = function (message, options) {
        if (options === void 0) { options = {}; }
        var _a = options.buttonText, buttonText = _a === void 0 ? '确定' : _a;
        var identifier = Date.now();
        return pcall('WVUIDialog.alert', {
            message: message,
            okbutton: buttonText,
            identifier: identifier,
        }).then(function () { return waittingEvent(identifier); });
    };

    var waittingEvent$1 = function (id, text) { return new Promise(function (done) {
        var removeListener = addEventListener$1('wv.dialog', function (e) {
            var _a = e.param || {}, type = _a.type, _index = _a._index;
            if (_index === id) {
                done(type === text);
                removeListener();
            }
        });
    }); };
    var confirm = function (message, options) {
        if (options === void 0) { options = {}; }
        var _a = options.okbutton, okbutton = _a === void 0 ? '确定' : _a, _b = options.canclebutton, canclebutton = _b === void 0 ? '取消' : _b;
        var _index = Date.now();
        return pcall('WVUIDialog.confirm', {
            message: message,
            okbutton: okbutton,
            canclebutton: canclebutton,
            _index: _index,
        }).then(function () { return waittingEvent$1(_index, okbutton); });
    };

    var showLoading = function () {
        return pcall('WVUI.showLoadingBox');
    };
    var hideLoading = function () {
        return pcall('WVUI.hideLoadingBox');
    };

    var tmall = /*#__PURE__*/Object.freeze({
        __proto__: null,
        toast: toast,
        alert: alert,
        confirm: confirm,
        showLoading: showLoading,
        hideLoading: hideLoading
    });

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
    var call$1 = function (method) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        ready(function () { return AlipayJSBridge.call.apply(AlipayJSBridge, __spreadArrays([method], params)); });
    };
    var pcall$1 = function (method) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        return new Promise(function (resolve, reject) {
            params.push(function (res) {
                console.log("AlipayJSBridge.call(" + method + ")", res);
                resolve(res);
            });
            return call$1.apply(void 0, __spreadArrays([method], params));
        });
    };
    var handleResponse = function (res) {
        if (res.success)
            return res.data;
        throw new Error();
    };

    var toast$1 = function (content, options) {
        return pcall$1('toast', __assign({ content: content }, options));
    };

    var alert$1 = function (message, _a) {
        var _b = _a === void 0 ? {} : _a, title = _b.title, button = _b.buttonText;
        return pcall$1('alert', {
            title: title,
            message: message,
            button: button,
        });
    };

    var confirm$1 = function (message, _a) {
        var _b = _a === void 0 ? {} : _a, title = _b.title, okButton = _b.okButton, cancelButton = _b.cancelButton;
        return pcall$1('confirm', {
            title: title,
            message: message,
            okButton: okButton,
            cancelButton: cancelButton,
        }).then(function (_a) {
            var ok = _a.ok;
            return ok;
        });
    };

    var showLoading$1 = function () {
        return pcall$1('showLoading').then(handleResponse);
    };
    var hideLoading$1 = function () {
        return pcall$1('hideLoading').then(handleResponse);
    };

    /**
     * https://myjsapi.alipay.com/jsapi/context/pop-window.html
     */
    var popWindow = function () {
        return pcall$1('popWindow');
    };

    /**
     * pushWindow
     * https://myjsapi.alipay.com/jsapi/context/push-window.html
     * @param url
     * @param param
     */
    var pushWindow = function (url, param) {
        return pcall$1('pushWindow', { url: url, param: param });
    };

    var closeWebview = function () {
        return pcall$1('closeWebview');
    };

    var openInBrowser = function (url) {
        return pcall$1('openInBrowser', { url: url });
    };

    var restorePullToRefresh = function () {
        return pcall$1('restorePullToRefresh');
    };

    /**
     * https://myjsapi.alipay.com/jsapi/ui/set-title.html
     * @param title
     * @param onClickTitle
     */
    var setTitle = function (title, onClickTitle) {
        return call$1('setTitle', {
            title: title
        }, onClickTitle);
    };

    var alipay = /*#__PURE__*/Object.freeze({
        __proto__: null,
        ready: ready,
        call: call$1,
        pcall: pcall$1,
        handleResponse: handleResponse,
        toast: toast$1,
        alert: alert$1,
        confirm: confirm$1,
        showLoading: showLoading$1,
        hideLoading: hideLoading$1,
        popWindow: popWindow,
        pushWindow: pushWindow,
        closeWebview: closeWebview,
        openInBrowser: openInBrowser,
        restorePullToRefresh: restorePullToRefresh,
        setTitle: setTitle
    });

    var mybank = /*#__PURE__*/Object.freeze({
        __proto__: null,
        ready: ready,
        call: call$1,
        pcall: pcall$1,
        handleResponse: handleResponse,
        toast: toast$1,
        alert: alert$1,
        confirm: confirm$1,
        showLoading: showLoading$1,
        hideLoading: hideLoading$1,
        popWindow: popWindow,
        pushWindow: pushWindow,
        closeWebview: closeWebview,
        openInBrowser: openInBrowser,
        restorePullToRefresh: restorePullToRefresh,
        setTitle: setTitle
    });

    var koubei = /*#__PURE__*/Object.freeze({
        __proto__: null,
        ready: ready,
        call: call$1,
        pcall: pcall$1,
        handleResponse: handleResponse,
        toast: toast$1,
        alert: alert$1,
        confirm: confirm$1,
        showLoading: showLoading$1,
        hideLoading: hideLoading$1,
        popWindow: popWindow,
        pushWindow: pushWindow,
        closeWebview: closeWebview,
        openInBrowser: openInBrowser,
        restorePullToRefresh: restorePullToRefresh,
        setTitle: setTitle
    });

    var taobao = /*#__PURE__*/Object.freeze({
        __proto__: null,
        toast: toast,
        alert: alert,
        confirm: confirm,
        showLoading: showLoading,
        hideLoading: hideLoading
    });

    var popWindow$1 = function () {
        QN.navigator.pop();
    };

    function getAbsoluteURL(url) {
        var ele = document.createElement('a');
        ele.href = url;
        url = ele.href;
        ele = null;
        return url;
    }
    var pushWindow$1 = function (url, options) {
        if (options === void 0) { options = {}; }
        var data = options.data;
        return new Promise(function (resolve, reject) {
            try {
                QN.navigator.push({
                    url: getAbsoluteURL(url),
                    query: data,
                });
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    };

    var qianniu = /*#__PURE__*/Object.freeze({
        __proto__: null,
        toast: toast,
        alert: alert,
        confirm: confirm,
        showLoading: showLoading,
        hideLoading: hideLoading,
        popWindow: popWindow$1,
        getAbsoluteURL: getAbsoluteURL,
        pushWindow: pushWindow$1
    });

    var call$2 = function (method) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        if (isTmall)
            return tmall[method].apply(tmall, params);
        if (isTaobao)
            return taobao[method].apply(taobao, params);
        if (isAlipay)
            return alipay[method].apply(alipay, params);
        if (isMyBank)
            return mybank[method].apply(mybank, params);
        if (isKoubei)
            return koubei[method].apply(koubei, params);
        if (isQianNiu)
            return qianniu[method].apply(qianniu, params);
        // if (detect.isTinyapp) return tinyapp.call(method, params);
        return Promise.reject();
    };
    var toast$2 = function (content, options) {
        return call$2('toast', content, options);
    };
    var alert$2 = function (content, options) {
        return call$2('alert', content, options);
    };
    var confirm$2 = function (content, options) {
        return call$2('confirm', content, options);
    };
    var showLoading$2 = function () {
        return call$2('showLoading');
    };
    var hideLoading$2 = function () {
        return call$2('hideLoading');
    };
    var pushWindow$2 = function (url, options) {
        return call$2('pushWindow', url, options);
    };
    var popWindow$2 = function () {
        return call$2('popWindow');
    };
    var closeWebview$1 = function () {
        return call$2('closeWebview');
    };
    var onReady = function (fn) {
        return call$2('ready', fn);
    };
    var onResume = function (fn) {
        return addEventListener('resume', fn);
    };
    var onPause = function (fn) {
        return addEventListener('pause', fn);
    };
    var onBack = function (fn) {
        return addEventListener('back', fn);
    };
    /**
     * onPullToRefresh
     * @param fn
     * @docs http://jsapi.alipay.net/jsapi/events/fire-pull-to-refresh.html
     */
    var onPullToRefresh = function (fn) {
        return addEventListener('firePullToRefresh', fn);
    };

    exports.alert = alert$2;
    exports.aliAppInfo = aliAppInfo;
    exports.alipay = alipay;
    exports.call = call$2;
    exports.closeWebview = closeWebview$1;
    exports.confirm = confirm$2;
    exports.detect = detect;
    exports.hideLoading = hideLoading$2;
    exports.isAlipay = isAlipay;
    exports.isAmap = isAmap;
    exports.isDingTalk = isDingTalk;
    exports.isInside = isInside;
    exports.isKoubei = isKoubei;
    exports.isKoubeiMerchant = isKoubeiMerchant;
    exports.isMyBank = isMyBank;
    exports.isQianNiu = isQianNiu;
    exports.isTaobao = isTaobao;
    exports.isTmall = isTmall;
    exports.isWealth = isWealth;
    exports.koubei = koubei;
    exports.mybank = mybank;
    exports.onBack = onBack;
    exports.onPause = onPause;
    exports.onPullToRefresh = onPullToRefresh;
    exports.onReady = onReady;
    exports.onResume = onResume;
    exports.popWindow = popWindow$2;
    exports.pushWindow = pushWindow$2;
    exports.qianniu = qianniu;
    exports.showLoading = showLoading$2;
    exports.taobao = taobao;
    exports.tmall = tmall;
    exports.toast = toast$2;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
