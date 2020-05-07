'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var WindVaneBridgeUrl = '//g.alicdn.com/mtb/lib-windvane/2.1.8/windvane.js';
var QianniuBridgeUrl = '//g.alicdn.com/x-bridge/qap-sdk/2.4.2/qn.min.js';
var loadScript = function (url) { return new Promise(function (resolve, reject) {
    var script = document.createElement('script');
    script.src = url;
    script.charset = 'UTF-8';
    script.addEventListener('load', resolve, false);
    script.addEventListener('error', function () { return reject(new Error('script load error')); }, false);
    document.head.appendChild(script);
}); };
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
var addEventListener = function (type, fn) {
    document.addEventListener(type, fn, false);
    return function () { return document.removeEventListener(type, fn); };
};

var install = function () {
    return Promise.all([
        loadScript(QianniuBridgeUrl),
        loadScript(WindVaneBridgeUrl),
    ]);
};

install();
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

var waittingEvent = function (id) { return new Promise(function (done) {
    var removeListener = addEventListener('WV.Event.Alert', function (e) {
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
    var removeListener = addEventListener('wv.dialog', function (e) {
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

exports.alert = alert;
exports.confirm = confirm;
exports.hideLoading = hideLoading;
exports.showLoading = showLoading;
exports.toast = toast;
