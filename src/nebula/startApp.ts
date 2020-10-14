import { pcall } from './core';

/**
 * @docs http://jsapi.alipay.net/jsapi/context/start-app.html
 * @param appId
 * @param param
 * @param options
 */
export const startApp = (appId: string, param = {}, options = {}) => {
  return pcall('startApp', {
    appId,
    param,
    ...options,
  });
};
