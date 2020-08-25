import { pcall } from './core';

/**
 * copyToClipboard
 * @docs http://h5.alibaba-inc.com/api/WindVane-API.html#Base-copyToClipboard
 * @param text
 */
export const copyToClipboard = (text: string) => {
  return pcall('Base.copyToClipboard', { text });
};
