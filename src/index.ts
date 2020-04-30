import * as tmall from './tmall';
import * as alipay from './alipay';
import * as mybank from './mybank';
import * as koubei from './koubei';
import * as taobao from './taobao';
import * as qianniu from './qianniu';

import {
  isAlipay,
  isMyBank,
  isKoubei,
  isQianNiu,
  isTaobao,
  isTmall,
} from './utils';

export const call = (method, ...params) => {
  if (isTmall) return tmall[method](...params);
  if (isTaobao) return taobao[method](...params);
  if (isAlipay) return alipay[method](...params);
  if (isMyBank) return mybank[method](...params);
  if (isKoubei) return koubei[method](...params);
  if (isQianNiu) return qianniu[method](...params);
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
