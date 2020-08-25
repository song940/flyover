import { pcall } from './core';

/**
 * navigateTo
 * https://opendocs.alipay.com/mini/component/navigator
 * @param {*} url
 * @param {*} query
 */
export const navigateTo = (url: string) => {
  return pcall('navigateTo', { url });
};
