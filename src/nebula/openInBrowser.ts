import { pcall } from './core';

export const openInBrowser = (url: string) => {
  return pcall('openInBrowser', { url });
};
