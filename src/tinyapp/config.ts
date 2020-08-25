import { pcall } from './core';

export const getConfig = configKeys => {
  if(!Array.isArray(configKeys))
    configKeys = [configKeys];
  return pcall('getConfig', { configKeys }).then(res => res.data);
};
