import { call } from './core';

export const showLoading = () => {
  return call('showLoading');
};

export const hideLoading = () => {
  return call('hideLoading');
};
