import { pcall } from './core';

export const subscribeMsgbox = (serviceCode: string) => {
  return pcall('subscribeMsgbox', { serviceCode });
};
