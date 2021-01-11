import { pcall } from './core';

type AlertOption = {
  title?: string,
  buttonText?: string,
};

/**
 * alert
 * @docs https://opendocs.alipay.com/mini/api/ui-feedback
 * @param {*} content
 * @param {*} options
 */
export const alert = (content: string, options?: AlertOption) => {
  return pcall('alert', { content, ...options });
};
