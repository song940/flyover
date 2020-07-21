export * from './detect';
import * as detect from './detect';
import * as tmall from './tmall';
import * as alipay from './alipay';
import * as mybank from './mybank';
import * as koubei from './koubei';
import * as taobao from './taobao';
import * as qianniu from './qianniu';
import * as tinyapp from './tinyapp';

export const call = (method, ...params) => {
  if (detect.isTmall) return tmall[method](...params);
  if (detect.isTaobao) return taobao[method](...params);
  if (detect.isAlipay) return alipay[method](...params);
  if (detect.isMyBank) return mybank[method](...params);
  if (detect.isKoubei) return koubei[method](...params);
  if (detect.isQianNiu) return qianniu[method](...params);
  // if (detect.isTinyapp) return tinyapp.call(method, params);
  return Promise.reject();
};

export const toast = (content, options?) => {
  return call('toast', content, options);
};

export const alert = (content, options?) => {
  return call('alert', content, options);
};

export const confirm = (content, options?) => {
  return call('confirm', content, options);
};

export const showLoading = () => {
  return call('showLoading');
};

export const hideLoading = () => {
  return call('hideLoading');
};

export const pushWindow = (url, options?) => {
  return call('pushWindow', url, options);
};

export const popWindow = () => {
  return call('popWindow');
};

export const closeWebview = () => {
  return call('closeWebview');
};

export interface EventHandler {
  (event: any): void
}

export const onReady = (fn: EventHandler) => {
  return call('ready', fn);
};

export const onResume = (fn: EventHandler) => {
  return addEventListener('resume', fn);
};

export const onPause = (fn: EventHandler) => {
  return addEventListener('pause', fn);
};

export const onBack = (fn: EventHandler) => {
  return addEventListener('back', fn);
};
/**
 * onPullToRefresh
 * @param fn
 * @docs http://jsapi.alipay.net/jsapi/events/fire-pull-to-refresh.html
 */
export const onPullToRefresh = (fn: EventHandler) => {
  return addEventListener('firePullToRefresh', fn);
};

export {
  detect,
  tmall,
  alipay,
  mybank,
  koubei,
  taobao,
  qianniu,
};
