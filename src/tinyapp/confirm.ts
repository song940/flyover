import { pcall } from './core';

export const confirm = (content, options = {}) => {
  return pcall('confirm', { content, ...options });
};
