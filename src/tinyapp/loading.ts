import { pcall } from './core';

export const showLoading = () => {
  return pcall('showLoading');
};

export const hideLoading = () => {
  return pcall('hideLoading');
};
