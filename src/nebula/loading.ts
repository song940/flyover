import { pcall, handleResponse } from './core';

export const showLoading = () => {
  return pcall('showLoading').then(handleResponse);
};

export const hideLoading = () => {
  return pcall('hideLoading').then(handleResponse);
};
