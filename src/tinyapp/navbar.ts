import { pcall } from './core';

type NavbarOption = {
  title?: string,
  image?: string,
  backgroundColor?: string,
  borderBottomColor?: string,
  reset?: boolean,
};

/**
 * setNavigationBar
 * @docs https://opendocs.alipay.com/mini/api/xwq8e6
 * @param options
 */
export const setNavigationBar = (options: NavbarOption) => {
  return pcall(`setNavigationBar`, options);
};

export const setTitle = (title: string) => {
  return setNavigationBar({ title });
};

export const setTitleAsImage = (image: string) => {
  return setNavigationBar({ image });
};

export const resetNavigationBarColor = () => {
  return setNavigationBar({ reset: true });
};
