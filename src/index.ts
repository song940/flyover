import * as tmall from './tmall';
import * as alipay from './alipay';
import * as mybank from './mybank';
import * as koubei from './koubei';
import * as taobao from './taobao';
import * as qianniu from './qianniu';

import {
  isAlipay,
  isQianNiu
} from './utils';

export const toast = (content, options) => {
  if (isAlipay) return alipay.toast(content, options);
  if (isQianNiu) return qianniu.toast(content, options);
};

export const alert = (content, options) => {
  if (isAlipay) return alipay.alert(content, options);
  if (isQianNiu) return qianniu.alert(content, options);
};

export const confirm = (content, options) => {
  if(isAlipay) return alipay.confirm(content, options);
  if(isQianNiu) return qianniu.confirm(content, options);
};

export const showLoading = () => {
  if (isAlipay) return alipay.showLoading();
  if (isQianNiu) return qianniu.showLoading();
};

export const hideLoading = () => {
  if (isAlipay) return alipay.hideLoading();
  if (isQianNiu) return qianniu.hideLoading();
};

export const pushWindow = (url, options) => {
  if(isAlipay) return alipay.pushWindow(url, options);
  if(isQianNiu) return qianniu.pushWindow(url, options);
};
