import { call } from './core';
import { addEventListener } from '../common';

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
export const optionMenu = (options: OptionMenuItem | OptionMenuType, fn?) => {
  call('setOptionMenu', options);
  call('showOptionMenu');
  const removeEventListener = addEventListener('optionMenu', fn);
  return () => {
    hideOptionMenu();
    removeEventListener();
  };
};

export const hideOptionMenu = () => {
  return call('hideOptionMenu');
};
