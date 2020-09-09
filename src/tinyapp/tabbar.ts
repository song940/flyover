import { pcall } from './core';

type TabBarOption = {
  /**
   * 是否需要动画效果，默认为无动画效果。
   */
  animation?: boolean
};

/**
 * hideTabBars
 * @param {*} options
 * @docs https://opendocs.alipay.com/mini/api/at18z8
 */
export const hideTabBar = (options?: TabBarOption) => {
  return pcall('hideTabBar', options);
};

/**
 * showTabBar
 * @param {*} options
 * @docs https://opendocs.alipay.com/mini/api/dpq5dh
 */
export const showTabBar = (options?: TabBarOption) => {
  return pcall('showTabBar', options);
};

