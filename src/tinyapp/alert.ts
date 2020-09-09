import { pcall } from './core';
/**
 * alert
 * @docs https://opendocs.alipay.com/mini/api/ui-feedback
 * @param {*} content
 * @param {*} options
 */
export const alert = (content: string, options?: any) => {
  return pcall('alert', { content, ...options });
};
