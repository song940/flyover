import { pcall } from './core';

export const getConfig = (configKeys: string | string[]) => {
  if(!Array.isArray(configKeys))
    configKeys = [configKeys];
  return pcall('getConfig', { configKeys }).then(res => res.data);
};
