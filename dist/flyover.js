!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).Flyover={})}(this,(function(e){"use strict";var t=window.navigator.userAgent,n=/iPhone|iPad|iPod/i.test(t),o=/AliApp\(AP\/([\d\.]+)\)/i.test(t),i=/AliApp\(KB\/([\d\.]+)\)/i.test(t),r=/AliApp\(AM\/([\d\.]+)\)/i.test(t),a=/AliApp\(TB\/([\d\.]+)\)/i.test(t),u=/AliApp\(TM\/([\d\.]+)\)/i.test(t),s=/AliApp\(AFW\/([\d\.]+)\)/i.test(t),c=/AliApp\(BK\/([\d\.]+)\)/i.test(t),l=/AliApp\(DingTalk\/([\d\.]+)\)/i.test(t),d=/AliApp\(QN\/([\d\.]+)\)/i.test(t),p=/amap/i.test(t),f=/Inside/i.test(t),g=Object.freeze({__proto__:null,isIOS:n,isAlipay:o,isKoubei:i,isKoubeiMerchant:r,isTaobao:a,isTmall:u,isWealth:s,isMyBank:c,isDingTalk:l,isQianNiu:d,isAmap:p,isInside:f}),h=function(e,t){return document.addEventListener(e,t,!1),function(){return document.removeEventListener(e,t)}},b=function(e,t,n){var o=e.split("."),i=o[0],r=o[1];return(window.WindVane||window.lib&&window.lib.windvane).call(i,r,t,(function(e){return n&&n(null,e)}),(function(e){return n&&n(e)}))},v=function(e,t){return new Promise((function(n,o){return b(e,t,(function(e,t){if(e)return o(e);n(t)}))}))},w=function(e,t){void 0===t&&(t={});var n=t.duration;return b("WVUIToast.toast",{message:e,duration:n})},m=function(e,t){void 0===t&&(t={});var n=t.buttonText,o=void 0===n?"确定":n,i=Date.now();return v("WVUIDialog.alert",{message:e,okbutton:o,identifier:i}).then((function(){return e=i,new Promise((function(t){var n=h("WV.Event.Alert",(function(o){var i=(o.param||{}).identifier;i&&e===i&&(t(o),n())}))}));var e}))},y=function(e,t){void 0===t&&(t={});var n=t.okbutton,o=void 0===n?"确定":n,i=t.canclebutton,r=void 0===i?"取消":i,a=Date.now();return v("WVUIDialog.confirm",{message:e,okbutton:o,canclebutton:r,_index:a}).then((function(){return e=a,t=o,new Promise((function(n){var o=h("wv.dialog",(function(i){var r=i.param||{},a=r.type;r._index===e&&(n(a===t),o())}))}));var e,t}))},T=function(){return v("WVUI.showLoadingBox")},A=function(){return v("WVUI.hideLoadingBox")},I=function(e){return v("Base.copyToClipboard",{text:e})},B=Object.freeze({__proto__:null,toast:w,alert:m,confirm:y,showLoading:T,hideLoading:A,copyToClipboard:I}),k=function(){return(k=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};function L(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var o=Array(e),i=0;for(t=0;t<n;t++)for(var r=arguments[t],a=0,u=r.length;a<u;a++,i++)o[i]=r[a];return o}function W(e){window.AlipayJSBridge?e&&e():document.addEventListener("AlipayJSBridgeReady",e,!1)}var _=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];W((function(){return AlipayJSBridge.call.apply(AlipayJSBridge,L([e],t))}))},C=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Promise((function(n,o){return t.push((function(t){console.log("AlipayJSBridge.call("+e+")",t),n(t)})),_.apply(void 0,L([e],t))}))},S=function(e){if(e.success)return e.data;throw new Error},M=function(e,t,n){return C("rpc",k({operationType:e,requestData:[t]},n))},O=function(e,t){var n=t||{},o=n.extInfo,i=n.immediately,r=n.multiCallback;return C("getCdpSpaceInfos",{spaceCodes:e,extInfo:o,immediately:i,multiCallback:r})},P=function(e,t){var n=t||{},o=n.extInfo,i=n.immediately,r=n.multiCallback;return C("getCdpSpaceInfo",{spaceCode:e,extInfo:o,immediately:i,multiCallback:r})},x=function(e,t,n){return void 0===n&&(n="SHOW"),C("cdpFeedback",{spaceCode:e,objectId:t,behavior:n})},N=function(e){return C("getUserInfo",e)},R=function(e,t){return C("toast",k({content:e},t))},j=function(e,t){var n=void 0===t?{}:t,o=n.title,i=n.buttonText;return C("alert",{title:o,message:e,button:i})},U=function(e,t,n){return _("addNotifyListener",k({name:e},t),n),function(){return D(e)}},D=function(e){return C("removeNotifyListener",{name:e})},F=function(e,t){return C("postNotification",{name:e,data:t})},H=function(e,t){return C("setTitle",{title:e},t)},z=function(e,t){return void 0===t&&(t=!1),"string"==typeof e&&(e=function(e){return 0!==e.indexOf("#")?e:parseInt(e.slice(1),16)}(e)),C("setTitleColor",{color:e,reset:t})},E=function(e){return C("setTransparentTitle",e)},V=function(){return C("getTitleAndStatusbarHeight")},K=function(){return C("hideBackButton")},J=function(){return C("showBackButton")},Q=function(e,t){var n=void 0===t?{}:t,o=n.title,i=n.okButton,r=n.cancelButton;return C("confirm",{title:o,message:e,okButton:i,cancelButton:r}).then((function(e){return e.ok}))},q=function(){return C("showLoading").then(S)},G=function(){return C("hideLoading").then(S)},X=function(){return C("popWindow")},Y=function(e,t){return C("pushWindow",{url:e,param:t})},Z=function(){return C("closeWebview")},$=function(e){return C("subscribeMsgbox",{serviceCode:e})},ee=function(e,t){_("setOptionMenu",e),_("showOptionMenu");var n=h("optionMenu",t);return function(){te(),n()}},te=function(){return _("hideOptionMenu")},ne=function(e){return C("openInBrowser",{url:e})},oe=function(){return C("restorePullToRefresh")},ie=Object.freeze({__proto__:null,ready:W,call:_,pcall:C,handleResponse:S,rpc:M,getCdpSpaceInfos:O,getCdpSpaceInfo:P,cdpFeedback:x,getUserInfo:N,toast:R,alert:j,addNotifyListener:U,removeNotifyListener:D,postNotification:F,setTitle:H,setTitleColor:z,setTransparentTitle:E,getTitleAndStatusbarHeight:V,hideBackButton:K,showBackButton:J,confirm:Q,showLoading:q,hideLoading:G,popWindow:X,pushWindow:Y,closeWebview:Z,subscribeMsgbox:$,optionMenu:ee,hideOptionMenu:te,openInBrowser:ne,restorePullToRefresh:oe}),re=Object.freeze({__proto__:null,ready:W,call:_,pcall:C,handleResponse:S,rpc:M,getCdpSpaceInfos:O,getCdpSpaceInfo:P,cdpFeedback:x,getUserInfo:N,toast:R,alert:j,addNotifyListener:U,removeNotifyListener:D,postNotification:F,setTitle:H,setTitleColor:z,setTransparentTitle:E,getTitleAndStatusbarHeight:V,hideBackButton:K,showBackButton:J,confirm:Q,showLoading:q,hideLoading:G,popWindow:X,pushWindow:Y,closeWebview:Z,subscribeMsgbox:$,optionMenu:ee,hideOptionMenu:te,openInBrowser:ne,restorePullToRefresh:oe,getAlipayUserId:function(){return C("getAlipayUserId").then((function(e){return e.alipayUserId}))}}),ae=Object.freeze({__proto__:null,ready:W,call:_,pcall:C,handleResponse:S,rpc:M,getCdpSpaceInfos:O,getCdpSpaceInfo:P,cdpFeedback:x,getUserInfo:N,toast:R,alert:j,addNotifyListener:U,removeNotifyListener:D,postNotification:F,setTitle:H,setTitleColor:z,setTransparentTitle:E,getTitleAndStatusbarHeight:V,hideBackButton:K,showBackButton:J,confirm:Q,showLoading:q,hideLoading:G,popWindow:X,pushWindow:Y,closeWebview:Z,subscribeMsgbox:$,optionMenu:ee,hideOptionMenu:te,openInBrowser:ne,restorePullToRefresh:oe}),ue=Object.freeze({__proto__:null,toast:w,alert:m,confirm:y,showLoading:T,hideLoading:A,copyToClipboard:I});function se(e){var t=document.createElement("a");return t.href=e,e=t.href,t=null,e}var ce=Object.freeze({__proto__:null,toast:w,alert:m,confirm:y,showLoading:T,hideLoading:A,copyToClipboard:I,popWindow:function(){QN.navigator.pop()},getAbsoluteURL:se,pushWindow:function(e,t){void 0===t&&(t={});var n=t.data;return new Promise((function(t,o){try{QN.navigator.push({url:se(e),query:n}),t()}catch(e){o(e)}}))}}),le=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return u?B[e].apply(B,t):a?ue[e].apply(ue,t):o?ie[e].apply(ie,t):c?re[e].apply(re,t):i?ae[e].apply(ae,t):d?ce[e].apply(ce,t):Promise.reject()};e.addEventListener=h,e.alert=function(e,t){return le("alert",e,t)},e.alipay=ie,e.call=le,e.cdpFeedback=function(e,t,n){return void 0===n&&(n="SHOW"),le("cdpFeedback",e,t,n)},e.closeWebview=function(){return le("closeWebview")},e.confirm=function(e,t){return le("confirm",e,t)},e.detect=g,e.getCdpSpaceInfo=function(e,t){return le("getCdpSpaceInfo",e,t)},e.getCdpSpaceInfos=function(e,t){return le("getCdpSpaceInfos",e,t)},e.getTitleAndStatusbarHeight=function(){return le("getTitleAndStatusbarHeight")},e.hideLoading=function(){return le("hideLoading")},e.isAlipay=o,e.isAmap=p,e.isDingTalk=l,e.isIOS=n,e.isInside=f,e.isKoubei=i,e.isKoubeiMerchant=r,e.isMyBank=c,e.isQianNiu=d,e.isTaobao=a,e.isTmall=u,e.isWealth=s,e.koubei=ae,e.mybank=re,e.onBack=function(e){return h("back",e)},e.onPause=function(e){return h("pause",e)},e.onPullToRefresh=function(e){return h("firePullToRefresh",e)},e.onReady=function(e){return le("ready",e)},e.onResume=function(e){return h("resume",e)},e.optionMenu=function(e,t){return le("optionMenu",e,t)},e.popWindow=function(){return le("popWindow")},e.pushWindow=function(e,t){return le("pushWindow",e,t)},e.qianniu=ce,e.restorePullToRefresh=function(){return le("restorePullToRefresh")},e.setTitle=function(e){return le("setTitle",e)},e.setTitleColor=function(e,t){return le("setTitleColor",e,t)},e.setTransparentTitle=function(e){return le("setTransparentTitle",e)},e.showLoading=function(){return le("showLoading")},e.taobao=ue,e.tmall=B,e.toast=function(e,t){return le("toast",e,t)},Object.defineProperty(e,"__esModule",{value:!0})}));
