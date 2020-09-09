import { call } from './core';

export const getConfig = (configKeys: string | string[]) => {
  if(!Array.isArray(configKeys))
    configKeys = [configKeys];
  return call('getConfig', { configKeys }).then((res: any) => res.data);
};
