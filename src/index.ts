import * as tmall from './tmall';
import * as alipay from './alipay';
import * as mybank from './mybank';
import * as koubei from './koubei';
import * as taobao from './taobao';
import * as qianniu from './qianniu';

export const toast = (content, options) => {
  if ('alipay') {
    alipay.toast(content, options);
  }
  if ('mybank') {
    mybank.toast(content, options);
  }
  if ('taobao') {
    taobao.toast(content, options);
  }
  if ('koubei') {
    koubei.toast(content, options);
  }
  if ('qianniu') {
    qianniu.toast(content, options);
  }
  if ('tmall') {
    tmall.toast(content, options);
  }
};
