import { pcall } from './core';

export const confirm = (content: string, options = {}) => {
  return pcall('confirm', { content, ...options });
};
