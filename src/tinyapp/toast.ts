import { pcall } from './core';

type ToastOption = {
  type?: "none" | "success" | "fail" | "exception",
  duration?: number,
  content?: string,
};

/**
 * showToast
 * @docs https://opendocs.alipay.com/mini/api/fhur8f
 * @param {ToastOption} content
 * @param {*} options
 */
export const showToast = (content: string, options?: ToastOption) => {
  return pcall('showToast', { content, ...options });
};

/**
 * hideToast
 * @docs https://opendocs.alipay.com/mini/api/iygd4e
 */
export const hideToast = () => {
  return pcall('hideToast');
};

// alias
export const toast = showToast;
