import { pcall } from './core';

type TitleOption = {
  subtitle?: string,
  image?: string,
};
/**
 * https://myjsapi.alipay.com/jsapi/ui/set-title.html
 * @param title
 * @param onClickTitle
 */
export const setTitle = (title: string, options: TitleOption, onClickTitle) => {
  // 安卓10.0.18版本之前不支持设置空的title，可以通过设置一个不可见字符串绕过去，10.0.20版本已经去掉这个限制
  // https://myjsapi.alipay.com/jsapi/ui/set-title.html#3__E6_B3_A8_E6_84_8F
  if (!title) title = '\u200b';
  return pcall('setTitle', {
    title,
    ...options
  }, onClickTitle);
};

const fromColor = color => {
  if (color.indexOf('#') !== 0) return color;
  return parseInt(color.slice(1), 16);
};

type TitleColorOption = {
  color?: string,
  reset?: boolean,
  resetTransparent?: boolean,
};

/**
 * setTitleColor
 * @param color
 * @param reset
 * @docs http://jsapi.alipay.net/jsapi/ui/set-title-color.html
 */
export const setTitleColor = (options: TitleColorOption) => {
  if (typeof options === 'string') {
    options = {
      color: fromColor(options)
    };
  }
  const { color, reset = false, resetTransparent = false } = options;
  return pcall('setTitleColor', { color, reset, resetTransparent });
};

export const resetTitleColor = () => {
  return setTitleColor({ reset: true });
};

/**
 * setTransparentTitle
 * http://jsapi.alipay.net/jsapi/ui/set-transparent-title.html
 */
export const setTransparentTitle = (mode: "auto" | "always" | "custom" | "none" = "auto") => {
  return pcall('setTransparentTitle', {
    transparentTitle: mode
  });
};

export const resetTransparentTitle = () => {
  return setTitleColor({ resetTransparent: true });
};

type TitleAndStatusbarHeightType = {
  density?: number,
  titleBarHeight: number,
  statusBarHeight: number,
};

/**
 * getTitleAndStatusbarHeight
 * @docs http://jsapi.alipay.net/jsapi/ui/get-title-and-statusbar-height.html
 */
export const getTitleAndStatusbarHeight = (): Promise<TitleAndStatusbarHeightType> => {
  return pcall('getTitleAndStatusbarHeight');
};

export const hideBackButton = () => {
  return pcall('hideBackButton');
};

export const showBackButton = () => {
  return pcall('showBackButton');
};

/**
 * https://myjsapi.alipay.com/jsapi/ui/show-title-loading.html
 */
export const showTitleLoading = () => {
  return pcall('showTitleLoading');
};

/**
 * https://myjsapi.alipay.com/jsapi/ui/hide-title-loading.html
 */
export const hideTitleLoading = () => {
  return pcall('hideTitleLoading');
};
