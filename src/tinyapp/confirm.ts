import { call } from './core';

export const confirm = (content, options = {}) => {
  return call('confirm', { content, ...options });
};
