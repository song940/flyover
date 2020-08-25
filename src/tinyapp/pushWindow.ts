import { pcall } from './core';

export const pushWindow = (url, options) => {
  return pcall('pushWindow', { url, ...options });
};
