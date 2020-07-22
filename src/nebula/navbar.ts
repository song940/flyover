import { pcall } from './core';

type TransparentTitleOption = {
  mode?: "auto" | "always" | "custom" | "none"
};

const fromColor = color => {
  if (color.indexOf('#') !== 0) return color;
  return parseInt(color.slice(1), 16);
};

/**
 * https://myjsapi.alipay.com/jsapi/ui/set-title.html
 * @param title
 * @param onClickTitle
 */
export const setTitle = (title, onClickTitle) => {
  return pcall('setTitle', {
    title
  }, onClickTitle);
};

/**
 * setTitleColor
 * @param color
 * @param reset
 * @docs http://jsapi.alipay.net/jsapi/ui/set-title-color.html
 */
export const setTitleColor = (color: number | string, reset = false) => {
  if (typeof color === 'string') {
    color = fromColor(color);
  }
  return pcall('setTitleColor', { color, reset });
};

/**
 * setTransparentTitle
 * http://jsapi.alipay.net/jsapi/ui/set-transparent-title.html
 */
export const setTransparentTitle = (options?: TransparentTitleOption) => {
  return pcall('setTransparentTitle', options);
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
