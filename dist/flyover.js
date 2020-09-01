(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Flyover = {}));
}(this, (function (exports) { 'use strict';

    var ua = window.navigator.userAgent;
    var isIOS = /iPhone|iPad|iPod/i.test(ua);
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
        isIOS: isIOS,
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

    // export const NebulaBridgeUrl = '//a.alipayobjects.com/g/h5-lib/alipayjsapi/3.0.5/alipayjsapi.inc.min.js';
    // export const WindVaneBridgeUrl = '//g.alicdn.com/mtb/lib-windvane/2.1.8/windvane.js';
    // export const DingTalkBridgeUrl = '//g.alicdn.com/dingding/dingtalk-jsapi/2.4.3/dingtalk.open.js';
    // export const AmapBridgeUrl = '//as.alipayobjects.com/g/insuranceprod/amap-util/1.0.0/amap.js';
    // export const QianniuBridgeUrl = '//g.alicdn.com/x-bridge/qap-sdk/2.4.2/qn.min.js';
    var addEventListener = function (type, fn) {
        document.addEventListener(type, fn, false);
        return function () { return document.removeEventListener(type, fn); };
    };

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

    /**
     * WVUIToast
     * @docs http://h5.alibaba-inc.com/api/WindVane-API.html#WVUIToast-toast
     * @param message
     * @param options
     */
    var toast = function (message, options) {
        if (options === void 0) { options = {}; }
        var duration = options.duration;
        return call('WVUIToast.toast', {
            message: message,
            duration: duration,
        });
    };

    var waittingEvent = function (id) { return new Promise(function (done) {
        var removeListener = addEventListener('WV.Event.Alert', function (e) {
            var identifier = (e.param || {}).identifier;
            if (identifier && id === identifier) {
                done(e);
                removeListener();
            }
        });
    }); };
    /**
     * alert
     * @docs http://h5.alibaba-inc.com/api/WindVane-API.html#WVUIDialog-alert
     * @param message
     * @param options
     */
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
        var removeListener = addEventListener('wv.dialog', function (e) {
            var _a = e.param || {}, type = _a.type, _index = _a._index;
            if (_index === id) {
                done(type === text);
                removeListener();
            }
        });
    }); };
    /**
     * confirm
     * @docs http://h5.alibaba-inc.com/api/WindVane-API.html#WVUIDialog-confirm
     * @param message
     * @param options
     */
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

    /**
     * @docs http://h5.alibaba-inc.com/api/WindVane-API.html#WVUI-showLoadingBox
     */
    var showLoading = function () {
        return pcall('WVUI.showLoadingBox');
    };
    /**
     * @docs http://h5.alibaba-inc.com/api/WindVane-API.html#WVUI-hideLoadingBox
     */
    var hideLoading = function () {
        return pcall('WVUI.hideLoadingBox');
    };

    /**
     * copyToClipboard
     * @docs http://h5.alibaba-inc.com/api/WindVane-API.html#Base-copyToClipboard
     * @param text
     */
    var copyToClipboard = function (text) {
        return pcall('Base.copyToClipboard', { text: text });
    };

    var tmall = /*#__PURE__*/Object.freeze({
        __proto__: null,
        toast: toast,
        alert: alert,
        confirm: confirm,
        showLoading: showLoading,
        hideLoading: hideLoading,
        copyToClipboard: copyToClipboard
    });

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

    var rpc = function (operationType, body, options) {
        return pcall$1('rpc', __assign({ operationType: operationType, requestData: [body] }, options));
    };

    var getCdpSpaceInfos = function (spaceCodes, options) {
        var extInfo = options.extInfo, immediately = options.immediately, multiCallback = options.multiCallback;
        return pcall$1('getCdpSpaceInfos', {
            spaceCodes: spaceCodes,
            extInfo: extInfo,
            immediately: immediately,
            multiCallback: multiCallback,
        });
    };
    var getCdpSpaceInfo = function (spaceCode, options) {
        var extInfo = options.extInfo, immediately = options.immediately, multiCallback = options.multiCallback;
        return pcall$1('getCdpSpaceInfo', {
            spaceCode: spaceCode,
            extInfo: extInfo,
            immediately: immediately,
            multiCallback: multiCallback,
        });
    };
    var cdpFeedback = function (spaceCode, objectId, behavior) {
        if (behavior === void 0) { behavior = 'SHOW'; }
        return pcall$1('cdpFeedback', { spaceCode: spaceCode, objectId: objectId, behavior: behavior });
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

    /**
     * addNotifyListener
     * @docs http://jsapi.alipay.net/jsapi/events/add-notify-listener.html
     * @param name s
     * @param options
     * @param fn
     */
    var addNotifyListener = function (name, options, fn) {
        call$1('addNotifyListener', __assign({ name: name }, options), fn);
        return function () { return removeNotifyListener(name); };
    };
    /**
     * removeNotifyListener
     * @docs http://jsapi.alipay.net/jsapi/events/remove-notify-listener.html
     * @param name
     */
    var removeNotifyListener = function (name) {
        return pcall$1('removeNotifyListener', { name: name });
    };
    /**
     * postNotification
     * @docs http://jsapi.alipay.net/jsapi/events/post-notification.html
     * @param name
     * @param data
     */
    var postNotification = function (name, data) {
        return pcall$1('postNotification', { name: name, data: data });
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
        return pcall$1('setTitle', {
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
        return pcall$1('setTitleColor', { color: color, reset: reset });
    };
    /**
     * setTransparentTitle
     * http://jsapi.alipay.net/jsapi/ui/set-transparent-title.html
     */
    var setTransparentTitle = function (options) {
        return pcall$1('setTransparentTitle', options);
    };
    /**
     * getTitleAndStatusbarHeight
     * @docs http://jsapi.alipay.net/jsapi/ui/get-title-and-statusbar-height.html
     */
    var getTitleAndStatusbarHeight = function () {
        return pcall$1('getTitleAndStatusbarHeight');
    };
    var hideBackButton = function () {
        return pcall$1('hideBackButton');
    };
    var showBackButton = function () {
        return pcall$1('showBackButton');
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

    var subscribeMsgbox = function (serviceCode) {
        return pcall$1('subscribeMsgbox', { serviceCode: serviceCode });
    };

    /**
     * https://myjsapi.alipay.com/jsapi/events/option-menu.html
     */
    var optionMenu = function (options, fn) {
        call$1('setOptionMenu', options);
        call$1('showOptionMenu');
        var removeEventListener = addEventListener('optionMenu', fn);
        return function () {
            hideOptionMenu();
            removeEventListener();
        };
    };
    var hideOptionMenu = function () {
        return call$1('hideOptionMenu');
    };

    var openInBrowser = function (url) {
        return pcall$1('openInBrowser', { url: url });
    };

    var restorePullToRefresh = function () {
        return pcall$1('restorePullToRefresh');
    };

    var alipay = /*#__PURE__*/Object.freeze({
        __proto__: null,
        ready: ready,
        call: call$1,
        pcall: pcall$1,
        handleResponse: handleResponse,
        rpc: rpc,
        getCdpSpaceInfos: getCdpSpaceInfos,
        getCdpSpaceInfo: getCdpSpaceInfo,
        cdpFeedback: cdpFeedback,
        toast: toast$1,
        alert: alert$1,
        addNotifyListener: addNotifyListener,
        removeNotifyListener: removeNotifyListener,
        postNotification: postNotification,
        setTitle: setTitle,
        setTitleColor: setTitleColor,
        setTransparentTitle: setTransparentTitle,
        getTitleAndStatusbarHeight: getTitleAndStatusbarHeight,
        hideBackButton: hideBackButton,
        showBackButton: showBackButton,
        confirm: confirm$1,
        showLoading: showLoading$1,
        hideLoading: hideLoading$1,
        popWindow: popWindow,
        pushWindow: pushWindow,
        closeWebview: closeWebview,
        subscribeMsgbox: subscribeMsgbox,
        optionMenu: optionMenu,
        hideOptionMenu: hideOptionMenu,
        openInBrowser: openInBrowser,
        restorePullToRefresh: restorePullToRefresh
    });

    var getAlipayUserId = function () {
        return pcall$1('getAlipayUserId').then(function (user) { return user.alipayUserId; });
    };

    var mybank = /*#__PURE__*/Object.freeze({
        __proto__: null,
        ready: ready,
        call: call$1,
        pcall: pcall$1,
        handleResponse: handleResponse,
        rpc: rpc,
        getCdpSpaceInfos: getCdpSpaceInfos,
        getCdpSpaceInfo: getCdpSpaceInfo,
        cdpFeedback: cdpFeedback,
        toast: toast$1,
        alert: alert$1,
        addNotifyListener: addNotifyListener,
        removeNotifyListener: removeNotifyListener,
        postNotification: postNotification,
        setTitle: setTitle,
        setTitleColor: setTitleColor,
        setTransparentTitle: setTransparentTitle,
        getTitleAndStatusbarHeight: getTitleAndStatusbarHeight,
        hideBackButton: hideBackButton,
        showBackButton: showBackButton,
        confirm: confirm$1,
        showLoading: showLoading$1,
        hideLoading: hideLoading$1,
        popWindow: popWindow,
        pushWindow: pushWindow,
        closeWebview: closeWebview,
        subscribeMsgbox: subscribeMsgbox,
        optionMenu: optionMenu,
        hideOptionMenu: hideOptionMenu,
        openInBrowser: openInBrowser,
        restorePullToRefresh: restorePullToRefresh,
        getAlipayUserId: getAlipayUserId
    });

    var koubei = /*#__PURE__*/Object.freeze({
        __proto__: null,
        ready: ready,
        call: call$1,
        pcall: pcall$1,
        handleResponse: handleResponse,
        rpc: rpc,
        getCdpSpaceInfos: getCdpSpaceInfos,
        getCdpSpaceInfo: getCdpSpaceInfo,
        cdpFeedback: cdpFeedback,
        toast: toast$1,
        alert: alert$1,
        addNotifyListener: addNotifyListener,
        removeNotifyListener: removeNotifyListener,
        postNotification: postNotification,
        setTitle: setTitle,
        setTitleColor: setTitleColor,
        setTransparentTitle: setTransparentTitle,
        getTitleAndStatusbarHeight: getTitleAndStatusbarHeight,
        hideBackButton: hideBackButton,
        showBackButton: showBackButton,
        confirm: confirm$1,
        showLoading: showLoading$1,
        hideLoading: hideLoading$1,
        popWindow: popWindow,
        pushWindow: pushWindow,
        closeWebview: closeWebview,
        subscribeMsgbox: subscribeMsgbox,
        optionMenu: optionMenu,
        hideOptionMenu: hideOptionMenu,
        openInBrowser: openInBrowser,
        restorePullToRefresh: restorePullToRefresh
    });

    var taobao = /*#__PURE__*/Object.freeze({
        __proto__: null,
        toast: toast,
        alert: alert,
        confirm: confirm,
        showLoading: showLoading,
        hideLoading: hideLoading,
        copyToClipboard: copyToClipboard
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
        copyToClipboard: copyToClipboard,
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
    var restorePullToRefresh$1 = function () {
        return call$2('restorePullToRefresh');
    };
    var setTitle$1 = function (title) {
        return call$2('setTitle', title);
    };
    var setTitleColor$1 = function (color, reset) {
        return call$2('setTitleColor', color, reset);
    };
    var setTransparentTitle$1 = function (options) {
        return call$2('setTransparentTitle', options);
    };
    var getTitleAndStatusbarHeight$1 = function () {
        return call$2('getTitleAndStatusbarHeight');
    };
    var optionMenu$1 = function (options, fn) {
        return call$2('optionMenu', options, fn);
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
    var getCdpSpaceInfos$1 = function (spaceCodes, options) {
        return call$2('getCdpSpaceInfos', spaceCodes, options);
    };
    var getCdpSpaceInfo$1 = function (spaceCode, options) {
        return call$2('getCdpSpaceInfo', spaceCode, options);
    };
    var cdpFeedback$1 = function (spaceCode, objectId, behavior) {
        if (behavior === void 0) { behavior = 'SHOW'; }
        return call$2('cdpFeedback', spaceCode, objectId, behavior);
    };

    exports.addEventListener = addEventListener;
    exports.alert = alert$2;
    exports.alipay = alipay;
    exports.call = call$2;
    exports.cdpFeedback = cdpFeedback$1;
    exports.closeWebview = closeWebview$1;
    exports.confirm = confirm$2;
    exports.detect = detect;
    exports.getCdpSpaceInfo = getCdpSpaceInfo$1;
    exports.getCdpSpaceInfos = getCdpSpaceInfos$1;
    exports.getTitleAndStatusbarHeight = getTitleAndStatusbarHeight$1;
    exports.hideLoading = hideLoading$2;
    exports.isAlipay = isAlipay;
    exports.isAmap = isAmap;
    exports.isDingTalk = isDingTalk;
    exports.isIOS = isIOS;
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
    exports.optionMenu = optionMenu$1;
    exports.popWindow = popWindow$2;
    exports.pushWindow = pushWindow$2;
    exports.qianniu = qianniu;
    exports.restorePullToRefresh = restorePullToRefresh$1;
    exports.setTitle = setTitle$1;
    exports.setTitleColor = setTitleColor$1;
    exports.setTransparentTitle = setTransparentTitle$1;
    exports.showLoading = showLoading$2;
    exports.taobao = taobao;
    exports.tmall = tmall;
    exports.toast = toast$2;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
