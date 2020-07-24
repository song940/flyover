'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

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

// export const NebulaBridgeUrl = '//a.alipayobjects.com/g/h5-lib/alipayjsapi/3.0.5/alipayjsapi.inc.min.js';
// export const WindVaneBridgeUrl = '//g.alicdn.com/mtb/lib-windvane/2.1.8/windvane.js';
// export const DingTalkBridgeUrl = '//g.alicdn.com/dingding/dingtalk-jsapi/2.4.3/dingtalk.open.js';
// export const AmapBridgeUrl = '//as.alipayobjects.com/g/insuranceprod/amap-util/1.0.0/amap.js';
// export const QianniuBridgeUrl = '//g.alicdn.com/x-bridge/qap-sdk/2.4.2/qn.min.js';
var addEventListener = function (type, fn) {
    document.addEventListener(type, fn, false);
    return function () { return document.removeEventListener(type, fn); };
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

var popWindow = function () {
    QN.navigator.pop();
};

function getAbsoluteURL(url) {
    var ele = document.createElement('a');
    ele.href = url;
    url = ele.href;
    ele = null;
    return url;
}
var pushWindow = function (url, options) {
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

exports.alert = alert;
exports.confirm = confirm;
exports.getAbsoluteURL = getAbsoluteURL;
exports.hideLoading = hideLoading;
exports.popWindow = popWindow;
exports.pushWindow = pushWindow;
exports.showLoading = showLoading;
exports.toast = toast;
