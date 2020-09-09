import { pcall } from './core';

export const pushWindow = (url: string, options?: any) => {
  return pcall('pushWindow', { url, ...options });
};
