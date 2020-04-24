import { pcall } from './core';

export const showLoading = () => {
  return pcall('WVUI.showLoadingBox');
};

export const hideLoading = () => {
  return pcall('WVUI.hideLoadingBox');
};
