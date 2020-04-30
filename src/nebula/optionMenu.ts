import { call } from './core';
import { addEventListener } from '../utils';

type OptionMenuItem = {
  icontype?: "scan" | "user",
  redDot?: string,
};

type OptionMenuType = {
  menus: Array<OptionMenuItem>,
  override?: boolean,
};

/**
 * https://myjsapi.alipay.com/jsapi/events/option-menu.html
 */
export const optionMenu = (options: OptionMenuItem | OptionMenuType) => {
  call('setOptionMenu', options);
  call('showOptionMenu');
  addEventListener('optionMenu', e => {
    console.log('optionMenu', e);
  });
  return hideOptionMenu;
};

export const hideOptionMenu = () => {
  return call('hideOptionMenu');
};
