import { pcall } from './core';

/**
 * showLoading
 * @docs https://opendocs.alipay.com/mini/api/bm69kb
 */
export const showLoading = () => {
  return pcall('showLoading');
};

/**
 * hideLoading
 * @docs https://opendocs.alipay.com/mini/api/nzf540
 */
export const hideLoading = () => {
  return pcall('hideLoading');
};
