import { call } from './core';
/**
 * https://myjsapi.alipay.com/jsapi/ui/set-title.html
 * @param title
 * @param onClickTitle
 */
export const setTitle = (title, onClickTitle) => {
  return call('setTitle', {
    title
  }, onClickTitle);
};

