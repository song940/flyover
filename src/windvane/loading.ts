import { pcall } from './core';

/**
 * @docs http://h5.alibaba-inc.com/api/WindVane-API.html#WVUI-showLoadingBox
 */
export const showLoading = () => {
  return pcall('WVUI.showLoadingBox');
};

/**
 * @docs http://h5.alibaba-inc.com/api/WindVane-API.html#WVUI-hideLoadingBox
 */
export const hideLoading = () => {
  return pcall('WVUI.hideLoadingBox');
};
