import { pcall } from './core';

/**
 * @docs http://jsapi.alipay.net/jsapi/native/easy_share.html
 */
export const easyShare = (shareData, bizType: string) => {
  return pcall('easyShare', {
    bizType, ...shareData
  });
};
