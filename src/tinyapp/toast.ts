import { pcall } from './core';

/**
 * showToast
 * @docs https://opendocs.alipay.com/mini/api/fhur8f
 * @param {*} content
 * @param {*} options
 */
export const toast = (content: string, options) => {
  return pcall('showToast', { content, ...options });
};
