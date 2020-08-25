import { pcall } from './core';

/**
 * hideTabBars
 * @param {*} options
 * @docs https://opendocs.alipay.com/mini/api/at18z8
 */
export const hideTabBar = options => {
  return pcall('hideTabBar', options);
};

/**
 * showTabBar
 * @param {*} options
 * @docs https://opendocs.alipay.com/mini/api/dpq5dh
 */
export const showTabBar = options => {
  return pcall('showTabBar', options);
};

