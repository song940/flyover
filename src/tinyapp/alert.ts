import { call } from './core';
/**
 * alert
 * @docs https://opendocs.alipay.com/mini/api/ui-feedback
 * @param {*} content
 * @param {*} options
 */
export const alert = (content, options) => {
  return call('alert', { content, ...options });
};
