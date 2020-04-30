import { pcall } from './core';
/**
 * https://myjsapi.alipay.com/jsapi/context/pop-window.html
 */
export const popWindow = () => {
  return pcall('popWindow');
};
