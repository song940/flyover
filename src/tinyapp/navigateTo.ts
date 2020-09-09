import { pcall } from './core';

/**
 * redirectTo
 * @docs https://opendocs.alipay.com/mini/api/fh18ky
 * @param url
 */
export const redirectTo = (url: string) => {
  return pcall('redirectTo', { url });
};

/**
 * navigateTo
 * https://opendocs.alipay.com/mini/component/navigator
 * @param {*} url
 * @param {*} query
 */
export const navigateTo = (url: string) => {
  return pcall('navigateTo', { url });
};

/**
 * navigateBack
 * @docs https://opendocs.alipay.com/mini/api/kc5zbx
 */
export const navigateBack = () => {
  return pcall('navigateBack');
};

/**
 * switchTab
 * @docs https://opendocs.alipay.com/mini/api/ui-tabbar
 * @param url
 */
export const switchTab = (url: string) => {
  return pcall('switchTab', { url });
};
/**
 * reLaunch
 * @docs https://opendocs.alipay.com/mini/api/hmn54z
 * @param url
 */
export const reLaunch = (url: string) => {
  return pcall('reLaunch', { url });
};


