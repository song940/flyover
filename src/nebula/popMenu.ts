import { pcall } from './core';
/**
 * https://myjsapi.alipay.com/jsapi/events/pop-menu-click.html
 */
export const popMenu = (menus) => {
  return pcall('showPopMenu', { menus });
};
