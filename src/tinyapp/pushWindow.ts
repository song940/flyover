import { call } from './core';

export const pushWindow = (url: string, options?: any) => {
  return call('pushWindow', { url, ...options });
};
